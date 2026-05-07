// @ts-nocheck
import type { POI } from "./poi";

export const bosniaCountry: POI = {
  id: "bosnia",
  type: "country",
  name: { de: "Bosnien und Herzegowina", hu: "Bosznia-Hercegovina", ro: "Bosnia și Herțegovina", en: "Bosnia and Herzegovina" },
  description: {
    de: "Ein Land auf der Balkanhalbinsel in Südosteuropa.",
    hu: "Délkelet-Európában, a Balkán-félszigeten található ország.",
    ro: "O țară situată în Peninsula Balcanică din Europa de Sud-Est.",
    en: "A country on the Balkan Peninsula in Southeastern Europe."
  },
  coords: [17.6791, 43.9159],
  descriptionAdvanced: {
    de: "Bosnien und Herzegowina ist ein faszinierendes Land auf der Balkanhalbinsel, das für seine atemberaubende natürliche Schönheit, seine reiche Geschichte und seine kulturelle Vielfalt bekannt ist. Das Land bietet eine beeindruckende Mischung aus osmanischen, österreichisch-ungarischen und modernen Einflüssen, die sich in der Architektur von Städten wie Sarajevo und Mostar widerspiegeln. Von den schroffen Gipfeln der Dinarischen Alpen bis zu den smaragdgrünen Flüssen wie der Neretva und der Drina ist die Natur hier spektakulär und bietet zahlreiche Möglichkeiten für Outdoor-Aktivitäten. Das Land hat sich nach den schwierigen Zeiten der 1990er Jahre zu einem gastfreundlichen Reiseziel entwickelt, das Besucher mit seiner Herzlichkeit, seiner exzellenten Küche und seinen faszinierenden Traditionen empfängt. Geographie K8 – Länder und Kulturen Südosteuropas.",
    hu: "Bosznia-Hercegovina a Balkán-félsziget szívében fekvő, lenyűgöző hegyvidéki ország, ahol Kelet és Nyugat kultúrája évszázadok óta találkozik. Az ország történelme rendkívül gazdag és viharos, a középkori bosnyák királyságtól az oszmán hódoltságon át az osztrák-magyar fennhatóságig. Földrajzi adottságait a Dinári-Alpok vonulatai, a smaragdzöld folyók, mint a Drina és a Neretva, valamint a rejtett vízesések határozzák meg. Kulturális sokszínűségét a muszlim, ortodox és katolikus hagyományok együttélése adja, ami az építészetben, a gasztronómiában és a mindennapi életben is tükröződik. Az utazók számára autentikus élményeket kínál, a szarajevói bazárok hangulatától a hercegovinai borvidékek nyugalmáig. Földrajz K8 – Európa tájai.",
    ro: "",
    en: ""
  },
  factsAdvanced: {
    de: [
      "Sarajevo war 1984 Gastgeber der ersten Olympischen Winterspiele, die in einem kommunistischen Land stattfanden.",
      "Die Alte Brücke in Mostar (Stari Most) ist ein UNESCO-Weltkulturerbe und eines der bekanntesten Wahrzeichen des Balkans.",
      "Bosnien und Herzegowina beherbergt mit Perućica einen der letzten verbliebenen Urwälder Europas.",
      "Das Land hat drei offizielle Sprachen (Bosnisch, Serbisch, Kroatisch) and verwendet zwei Alphabete (Lateinisch und Kyrillisch).",
      "Die Währung Konvertible Mark (BAM) ist fest an den Euro gebunden (ursprünglich an die Deutsche Mark).",
      "In Višegrad befindet sich die berühmte Brücke über die Drina, die durch den Nobelpreisträger Ivo Andrić weltbekannt wurde."
    ],
    hu: [
      "Az ország nevének első része a Boszna folyóról, a második a hercegi címről (herceg) ered.",
      "Területének több mint 40%-át erdő borítja, így Európa egyik legzöldebb országa.",
      "Itt található Európa utolsó őserdőinek egyike, a Perućica.",
      "A szarajevói téli olimpiát 1984-ben rendezték meg, ez volt az első szocialista országban tartott téli olimpia.",
      "Az ország leghosszabb folyója a Száva, amely az északi határt alkotja."
    ],
    ro: [],
    en: []
  }, image: "/poi-images/bosnia.webp"};

export const bosniaPois: POI[] = [
  {
    id: "ba-sarajevo",
    type: "city",
    name: { de: "Sarajevo", hu: "Szarajevó", ro: "Sarajevo", en: "Sarajevo" },
    description: {
      de: "Die Hauptstadt und größte Stadt von Bosnien und Herzegowina, bekannt für ihre kulturelle und religiöse Vielfalt.",
      hu: "Bosznia-Hercegovina fővárosa és legnagyobb városa, amely kulturális és vallási sokszínűségéről ismert.",
      ro: "Capitala și cel mai mare oraș din Bosnia și Herțegovina, cunoscut pentru diversitatea sa culturală și religioasă.",
      en: "The capital and largest city of Bosnia and Herzegovina, known for its cultural and religious diversity."
    },
    coords: [18.4131, 43.8563],
    parent: "BA-017",
    descriptionAdvanced: {
      de: "Sarajevo, oft als 'Jerusalem Europas' bezeichnet, ist eine Stadt, die für ihre außergewöhnliche historische Widerstandsfähigkeit und kulturelle Verschmelzung bekannt ist. Sie war 1984 Gastgeber der Olympischen Winterspiele und erlebte später die längste Belagerung einer Hauptstadt in der modernen Geschichte. Heute ist es ein pulsierendes Zentrum, dessen osmanische und österreichisch-ungarische Architekturen von den Narben der jüngeren Vergangenheit durchzogen sind. Die Altstadt, Baščaršija, ist ein lebendiges Museum mit Kupferschmieden, traditionellen Ćevapi-Lokalen und dem ikonischen Sebilj-Brunnen.",
      hu: "Szarajevó, Európa Jeruzsálemeként is emlegetett város, a történelem és a modernitás egyedi ötvözete. Az 1984-es Téli Olimpia helyszínéül szolgáló város a modern történelem leghosszabb ostromát is átélte. Ma egy nyüzsgő kulturális központ, ahol az oszmán és az osztrák-magyar építészet kéz a kézben jár a közelmúlt sebeshelyeivel. A Baščaršija, az óvárosi bazár, egy élő múzeum, ahol a rézművesek műhelyei, a tradicionális csevapozók és az ikonikus Sebilj-kút egyaránt a régmúlt idők hangulatát idézik. A város a vallási sokszínűség szimbóluma, ahol mecsetek, katolikus és ortodox templomok, valamint zsinagógák állnak egymás mellett. Földrajz K8 – Európa városai és kultúrái.",
      ro: "Sarajevo, adesea supranumit 'Ierusalimul Europei', este un oraș recunoscut pentru reziliența sa istorică excepțională și fuziunea culturală. A fost gazda Jocurilor Olimpice de iarnă din 1984 și, ulterior, a suferit cel mai lung asediu al unei capitale din istoria modernă. Astăzi, este un centru vibrant, unde arhitectura otomană și cea austro-ungară poartă cicatricile trecutului recent. Orașul vechi, Baščaršija, este un muzeu viu cu meșteri aramari, localuri tradiționale cu ćevapi și fântâna emblematică Sebilj. Este un simbol al diversității religioase, unde moschei, biserici catolice, ortodoxe și sinagogi coexistă pașnic, fiecare contribuind la tapiseria culturală unică a orașului. Geografie K8 – Orașele și culturile Europei.",
      en: "Sarajevo, often called the 'Jerusalem of Europe,' is a city celebrated for its remarkable historical resilience and cultural fusion. It hosted the 1984 Winter Olympics and later endured the longest siege of a capital city in modern history. Today, it is a vibrant hub where Ottoman and Austro-Hungarian architecture are scarred by but also stand defiant against the wounds of the recent past. The old town, Baščaršija, is a living museum with coppersmiths, traditional ćevapi shops, and the iconic Sebilj fountain. It is a symbol of religious diversity, where mosques, Catholic and Orthodox churches, and synagogues coexist peacefully, each adding to the city's unique cultural tapestry. Geography K8 – Cities and Cultures of Europe."
    },
    factsAdvanced: {
      de: [
        "Die erste elektrische Straßenbahn auf dem europäischen Festland wurde 1885 in Sarajevo in Betrieb genommen.",
        "Das Attentat auf Erzherzog Franz Ferdinand im Jahr 1914, das den Ersten Weltkrieg auslöste, fand auf der Lateinerbrücke statt.",
        "Der 'Tunnel der Hoffnung' wurde während der Belagerung 1992-1996 unter dem Flughafen gegraben, um die Stadt zu versorgen.",
        "Das Sarajevo Film Festival, 1995 während der Belagerung gegründet, ist heute eines der führenden Filmfestivals in Südosteuropa.",
        "Die Gazi-Husrev-Beg-Moschee aus dem 16. Jahrhundert ist ein herausragendes Beispiel osmanischer Architektur auf dem Balkan.",
        "Die Vijećnica, das Rathaus im pseudo-maurischen Stil, wurde nach ihrer Zerstörung im Krieg aufwendig restauriert."
      ],
      hu: [
        "Európa kontinentális részén az első villamos 1885-ben Szarajevóban indult el.",
        "A Latin-hídon történt 1914-es merénylet Ferenc Ferdinánd trónörökös ellen robbantotta ki az első világháborút.",
        "Az 1992-96-os ostrom alatt a repülőtér alatt ásták ki a 'Remény Alagútját', amely a város egyetlen ellátási útvonala volt.",
        "Az 1995-ben, még az ostrom alatt alapított Szarajevói Filmfesztivál mára Délkelet-Európa egyik legjelentősebb filmes eseményévé nőtte ki magát.",
        "A 16. századi Gázi Huszrev bég mecset az oszmán építészet egyik legkiemelkedőbb balkáni példája.",
        "A Vijećnica, a mór stílusú városháza, a háborús pusztítás után aprólékos munkával került helyreállításra.",
        "A város neve a török 'saray' (palota) és 'ovası' (mező) szavakból ered.",
        "A legenda szerint, aki iszik a Sebilj-kút vizéből, az biztosan visszatér még Szarajevóba."
      ],
      ro: [
        "Primul tramvai electric de pe continentul european a fost pus în funcțiune la Sarajevo în 1885.",
        "Asasinarea arhiducelui Franz Ferdinand în 1914, care a declanșat Primul Război Mondial, a avut loc pe Podul Latin.",
        "\\\"Tunelul Speranței\\\" a fost săpat pe sub aeroport în timpul asediului din 1992-1996 pentru a aprovizona orașul.",
        "Festivalul de Film de la Sarajevo, fondat în 1995 în timpul asediului, este acum unul dintre cele mai importante festivaluri de film din Europa de Sud-Est.",
        "Moscheea Gazi Husrev-beg din secolul al XVI-lea este un exemplu remarcabil al arhitecturii otomane din Balcani.",
        "Vijećnica, primăria în stil pseudo-maur, a fost restaurată minuțios după distrugerea sa în război.",
        "Numele orașului provine din cuvintele turcești 'saray' (palat) și 'ovası' (câmpie).",
        "O legendă locală spune că oricine bea apă de la fântâna Sebilj se va întoarce cu siguranță la Sarajevo."
      ],
      en: [
        "The first electric tram in mainland Europe began operation in Sarajevo in 1885.",
        "The assassination of Archduke Franz Ferdinand in 1914, which triggered World War I, occurred on the Latin Bridge.",
        "The 'Tunnel of Hope' was dug under the airport during the 1992-1996 siege to supply the city.",
        "The Sarajevo Film Festival, founded in 1995 during the siege, is now one of the leading film festivals in Southeast Europe.",
        "The 16th-century Gazi Husrev-beg Mosque is an outstanding example of Ottoman architecture in the Balkans.",
        "The Vijećnica, the city hall in pseudo-Moorish style, was meticulously restored after its destruction in the war.",
        "The city's name originates from the Turkish words 'saray' (palace) and 'ovası' (field).",
        "A local legend says that anyone who drinks water from the Sebilj fountain is certain to return to Sarajevo."
      ]
    }
  },
  {
    id: "ba-banjaluka",
    type: "city",
    name: { de: "Banja Luka", hu: "Banja Luka", ro: "Banja Luka", en: "Banja Luka" },
    description: {
      de: "Die zweitgrößte Stadt in Bosnien und Herzegowina und de facto die Hauptstadt der Republika Srpska.",
      hu: "Bosznia-Hercegovina második legnagyobb városa, a Szerb Köztársaság de facto fővárosa.",
      ro: "Al doilea oraș ca mărime din Bosnia și Herțegovina și capitala de facto a Republika Srpska.",
      en: "The second largest city in Bosnia and Herzegovina and the de facto capital of Republika Srpska."
    },
    coords: [17.1910, 44.7722],
    parent: "BA-004",
    descriptionAdvanced: {
      de: "Banja Luka, bekannt als 'Stadt des Grüns', zeichnet sich durch ihre zahlreichen Alleen, Parks und Gärten aus. Der Fluss Vrbas, der die Stadt durchquert, ist ein Zentrum für Abenteuersportarten wie Rafting und Kajakfahren. Das historische Kastel, eine Festung mit römischen Wurzeln, dominiert das Stadtbild am Flussufer. Ein weiteres markantes Wahrzeichen ist die serbisch-orthodoxe Christ-Erlöser-Kathedrale mit ihren beeindruckenden goldenen Kuppeln. Die Stadt ist auch für den Trappistenkäse bekannt, der im nahegelegenen Kloster Mariastern nach einem geheimen Rezept hergestellt wird.",
      hu: "Banja Luka, a \\\"zöld város\\\", széles sugárútjairól, parkjairól és a Vrbas folyóról ismert, mely a rafting és kajakozás kedvelőinek paradicsoma. A város történelmi magja a római alapokon nyugvó Kastel erőd, amely a folyóparton emelkedik. A modern városképet a Megváltó Krisztus-székesegyház aranykupolái határozzák meg. Banja Luka gasztronómiájának híres terméke a trappista sajt, melyet a közeli Mária Csillaga kolostorban készítenek egy titkos recept alapján. A város a Vrbas folyón közlekedő, egyedi 'dajak' csónakokról is ismert. Történelem K7 – Középkori várak és erődítmények.",
      ro: "Banja Luka, cunoscut drept \\\"orașul verde\\\", se remarcă prin bulevardele sale largi, parcuri și râul Vrbas, un paradis pentru pasionații de rafting și caiac. Nucleul istoric al orașului este fortăreața Kastel, cu fundații romane, ce domină malul râului. Peisajul modern este definit de cupolele aurii ale Catedralei Ortodoxe Sârbe 'Hristos Mântuitorul'. Un produs gastronomic renumit este brânza trapistă, produsă la mănăstirea din apropiere, Mariastern, după o rețetă secretă. Orașul este faimos și pentru bărcile unice 'dajak', specifice râului Vrbas. Istorie K7 – Castele și fortărețe medievale.",
      en: "Banja Luka, known as the 'City of Greenery,' is distinguished by its numerous avenues, parks, and gardens. The Vrbas River, which flows through the city, is a hub for adventure sports like rafting and kayaking. The historic Kastel Fortress, with Roman origins, dominates the cityscape on the riverbank. Another prominent landmark is the Serbian Orthodox Cathedral of Christ the Saviour with its impressive golden domes. The city is also famous for its Trappist cheese, produced at the nearby Mariastern Monastery according to a secret recipe. History K7 – Medieval Castles and Fortifications."
    },
    factsAdvanced: {
      de: [
        "Die Festung Kastel ist das älteste Monument der Stadt und steht auf den Fundamenten einer römischen Siedlung.",
        "Der Fluss Vrbas ist Heimat des einzigartigen 'Dajak'-Bootes, das mit einem langen Stab navigiert wird.",
        "Ein schweres Erdbeben im Jahr 1969 zerstörte große Teile der Stadt und führte zu einem umfassenden Wiederaufbau.",
        "Die Ferhadija-Moschee, ein Meisterwerk osmanischer Baukunst, wurde nach ihrer Zerstörung 1993 vollständig rekonstruiert und 2016 wiedereröffnet.",
        "Banja Luka veranstaltet jährlich die 'Kestenijada', ein beliebtes Fest zu Ehren der Kastanie.",
        "Das nahegelegene Kloster Mariastern war einst die größte Trappistenabtei der Welt."
      ],
      hu: [
        "A Kastel erőd a város legrégebbi műemléke, római kori település alapjaira épült.",
        "A Vrbas folyó ad otthont az egyedi 'dajak' csónaknak, melyet egy hosszú rúddal hajtanak.",
        "Egy 1969-es pusztító földrengés után a város jelentős részét újjá kellett építeni.",
        "A Ferhadija mecsetet, az oszmán építészet remekművét, 1993-as lerombolása után teljes mértékben újjáépítették és 2016-ban nyitották meg újra.",
        "A város minden ősszel megrendezi a 'Kestenijada' nevű gesztenyeünnepet.",
        "A közeli Mária Csillaga (Mariastern) kolostor egykor a világ legnagyobb trappista apátsága volt.",
        "Banja Luka neve a 'bán fürdője' kifejezésből ered, utalva a környék gyógyvizeire.",
        "A városban található a Kortárs Művészeti Múzeum, amely a régió modern művészeinek ad otthont."
      ],
      ro: [
        "Fortăreața Kastel este cel mai vechi monument al orașului, construită pe fundațiile unei așezări romane.",
        "Râul Vrbas este casa bărcii unice 'dajak', navigată cu ajutorul unei prăjini lungi.",
        "Un cutremur devastator din 1969 a distrus o mare parte a orașului, necesitând o reconstrucție amplă.",
        "Moscheea Ferhadija, o capodoperă a arhitecturii otomane, a fost complet reconstruită și redeschisă în 2016 după distrugerea sa din 1993.",
        "Orașul găzduiește anual 'Kestenijada', un popular festival dedicat castanelor.",
        "Mănăstirea Mariastern din apropiere a fost cândva cea mai mare abație trapistă din lume.",
        "Numele Banja Luka provine de la expresia 'baia banului', referindu-se la apele termale din zonă.",
        "Orașul găzduiește Muzeul de Artă Contemporană, care prezintă artiști moderni din regiune."
      ],
      en: [
        "Kastel Fortress is the oldest monument in the city, built on the foundations of a Roman settlement.",
        "The Vrbas river is home to the unique 'dajak' boat, which is navigated with a long pole.",
        "A severe earthquake in 1969 destroyed large parts of the city, leading to extensive reconstruction.",
        "The Ferhadija Mosque, a masterpiece of Ottoman architecture, was fully reconstructed and reopened in 2016 after its destruction in 1993.",
        "Banja Luka hosts the annual 'Kestenijada,' a popular festival in honor of the chestnut.",
        "The nearby Mariastern Monastery was once the largest Trappist abbey in the world.",
        "The name Banja Luka originates from the term 'ban's bath,' referring to the area's thermal waters.",
        "The city is home to the Museum of Contemporary Art, which showcases modern artists from the region."
      ]
    }, image: "/poi-images/ba-banjaluka.webp"},
  {
    id: "ba-mostar",
    type: "city",
    name: { de: "Mostar", hu: "Mostar", ro: "Mostar", en: "Mostar" },
    description: {
      de: "Historische Stadt in der Herzegowina, berühmt für die rekonstruierte Alte Brücke (Stari Most).",
      hu: "Hercegovina történelmi városa, amely a helyreállított Öreg hídról (Stari Most) híres.",
      ro: "Oraș istoric din Herțegovina, faimos pentru Podul Vechi (Stari Most) reconstruit.",
      en: "Historic city in Herzegovina, famous for the reconstructed Old Bridge (Stari Most)."
    },
    coords: [17.8078, 43.3438],
    parent: "BA-001",
    descriptionAdvanced: {
      de: "Mostar, das kulturelle Zentrum der Herzegowina, ist weltberühmt für seine ikonische 'Stari Most' (Alte Brücke). Dieses Meisterwerk osmanischer Baukunst, nach seiner Zerstörung 1993 wiederaufgebaut, ist ein starkes Symbol der Versöhnung. Die Altstadt mit ihren gepflasterten Gassen und dem alten Basar erstreckt sich zu beiden Seiten des smaragdgrünen Flusses Neretva. Mostar ist eine Stadt der Kontraste, in der osmanische Architektur auf österreichisch-ungarische Fassaden trifft und das Minarett einer Moschee neben dem Glockenturm einer Franziskanerkirche in den Himmel ragt.",
      hu: "Mostar, Hercegovina kulturális központja, a smaragdzöld Neretva folyó partján fekszik. A város szimbóluma a Stari Most, az Öreg híd, az oszmán építészet 16. századi remeke. Az 1993-ban lerombolt, majd újjáépített híd ma a megbékélés és az összefogás jelképe, az UNESCO Világörökség része. Az óváros macskaköves utcái és a régi bazár (čaršija) a keleti mesék világába repítik a látogatót. Mostar a kontrasztok városa, ahol a minaretek sziluettje a ferences templom harangtornyával alkot egyedi panorámát. Fizika K7 – Erő és egyensúly, hídépítés.",
      ro: "Mostar, centrul cultural al Herțegovinei, este renumit la nivel mondial pentru emblematicul său 'Stari Most' (Podul Vechi). Această capodoperă a arhitecturii otomane, reconstruită după distrugerea din 1993, este un puternic simbol al reconcilierii. Orașul vechi, cu străzile sale pietruite și vechiul bazar, se întinde de ambele părți ale râului Neretva, de un verde smarald. Mostar este un oraș al contrastelor, unde arhitectura otomană întâlnește fațade austro-ungare, iar minaretul unei moschei se înalță lângă clopotnița unei biserici franciscane. Fizică K7 – Forță și echilibru, construcția de poduri.",
      en: "Mostar, the cultural heart of Herzegovina, is world-famous for its iconic 'Stari Most' (Old Bridge). This masterpiece of Ottoman architecture, rebuilt after its destruction in 1993, is a powerful symbol of reconciliation. The old town, with its cobbled streets and ancient bazaar, stretches along both sides of the emerald-green Neretva River. Mostar is a city of contrasts, where Ottoman architecture meets Austro-Hungarian facades, and the minaret of a mosque soars into the sky next to the bell tower of a Franciscan church. Physics K7 – Force and Equilibrium, Bridge Construction."
    },
    factsAdvanced: {
      de: [
        "Die Stari Most wurde ursprünglich zwischen 1557 und 1566 vom osmanischen Architekten Mimar Hayruddin erbaut.",
        "Die Tradition der waghalsigen Brückensprünge in die kalte Neretva ist über 450 Jahre alt.",
        "Der Name 'Mostar' leitet sich von den 'mostari' ab, den Brückenwächtern, die die Brücke im Mittelalter bewachten.",
        "Die Stadt zählt zu den sonnigsten und heißesten Orten in ganz Bosnien und Herzegowina.",
        "Das Muslibegović-Haus ist ein erhaltenes osmanisches Wohnhaus, das als Museum und Hotel dient.",
        "Die Neretva gehört zu den kältesten Flüssen der Welt; ihre Sommertemperatur übersteigt selten 8°C."
      ],
      hu: [
        "A Stari Most hidat 1557 és 1566 között építette Mimar Hayruddin, a híres Szinán tanítványa.",
        "A hídról való ugrás a hideg Neretvába több mint 450 éves hagyományra tekint vissza.",
        "Mostar neve a 'mostari' szóból ered, ami 'hídőröket' jelent, akik a középkorban a hidat őrizték.",
        "A város Bosznia-Hercegovina egyik legnaposabb és legmelegebb helye.",
        "A Muslibegović-ház egy fennmaradt oszmán lakóház, amely ma múzeumként és szállodaként működik.",
        "A Neretva a világ egyik leghidegebb folyója, nyári vízhőmérséklete ritkán haladja meg a 8°C-ot.",
        "A híd 456 faragott kőtömbből épült.",
        "Az újjáépítés során a híd eredeti köveinek nagy részét kiemelték a folyóból és újra felhasználták."
      ],
      ro: [
        "Stari Most a fost construit inițial între 1557 și 1566 de către arhitectul otoman Mimar Hayruddin.",
        "Tradiția săriturilor îndrăznețe de pe pod în apa rece a Neretvei are peste 450 de ani.",
        "Numele 'Mostar' derivă din 'mostari', paznicii podului care îl păzeau în Evul Mediu.",
        "Orașul este unul dintre cele mai însorite și mai calde locuri din Bosnia și Herțegovina.",
        "Casa Muslibegović este o casă otomană conservată, care servește drept muzeu și hotel.",
        "Râul Neretva este unul dintre cele mai reci din lume; temperatura sa vara rareori depășește 8°C.",
        "Podul a fost construit din 456 de blocuri de piatră sculptată.",
        "În timpul reconstrucției, majoritatea pietrelor originale ale podului au fost recuperate din râu și reutilizate."
      ],
      en: [
        "Stari Most was originally built between 1557 and 1566 by the Ottoman architect Mimar Hayruddin.",
        "The tradition of daring bridge dives into the cold Neretva River is over 450 years old.",
        "The name 'Mostar' is derived from the 'mostari,' the bridge keepers who guarded the bridge in the Middle Ages.",
        "The city is one of the sunniest and hottest places in all of Bosnia and Herzegovina.",
        "The Muslibegović House is a preserved Ottoman residential house that serves as a museum and hotel.",
        "The Neretva is one of the coldest rivers in the world; its summer temperature rarely exceeds 8°C (46°F).",
        "The bridge was constructed from 456 carved stone blocks.",
        "During the reconstruction, most of the original stones of the bridge were recovered from the river and reused."
      ]
    }, image: "/poi-images/ba-mostar.webp"},
  {
    id: "ba-tuzla",
    type: "city",
    name: { de: "Tuzla", hu: "Tuzla", ro: "Tuzla", en: "Tuzla" },
    description: {
      de: "Eine der größten Städte, bekannt für ihre Salzseen und industrielle Bedeutung.",
      hu: "Az egyik legnagyobb város, amely sóstavairól és ipari jelentőségéről ismert.",
      ro: "Unul dintre cele mai mari orașe, cunoscut pentru lacurile sale sărate și importanța industrială.",
      en: "One of the largest cities, known for its salt lakes and industrial importance."
    },
    coords: [18.6670, 44.5328],
    parent: "BA-015",
    descriptionAdvanced: {
      de: "Tuzla, dessen Name vom türkischen Wort für Salz abgeleitet ist, ist einzigartig in Europa für seine Salzseen im Stadtzentrum. Die Pannonischen Seen sind ein künstlich angelegter Komplex, der es den Bewohnern und Besuchern ermöglicht, Strandleben mitten in der Stadt zu genießen. Diese Besonderheit resultiert aus dem massiven Salzlager unter der Stadt, das seit Jahrhunderten abgebaut wird. Neben seiner Salzgeschichte ist Tuzla ein wichtiges Industrie- und Kulturzentrum mit einer lebendigen Kunst- und Musikszene. Die Stadt hat eine lange Tradition der multiethnischen Toleranz bewahrt.",
      hu: "Tuzla, melynek neve a török 'tuz' (só) szóból származik, Európában egyedülálló módon a városközpontjában található sóstavakkal rendelkezik. A Pannon-tavak egy mesterséges tórendszer, amely a város alatt húzódó hatalmas sólelőhelynek köszönhető. Ez a geológiai adottság tette Tuzlát évszázadokon át a sóbányászat központjává, de ez okozta a város egyes részeinek süllyedését is. A tavak létrehozásával ezt a problemă de mediu orvosolták, egyúttal egyedülálló városi strandot teremtve. Tuzla ma fontos ipari és kulturális központ. Kémia K8 – Oldatok és sók.",
      ro: "Tuzla, al cărui nume derivă din cuvântul turcesc pentru sare, este unic în Europa pentru lacurile sale sărate din centrul orașului. Lacurile Panonice sunt un complex artificial care permite locuitorilor și vizitatorilor să se bucure de o plajă în mijlocul orașului. Această caracteristică provine din zăcământul masiv de sare de sub oraș, exploatat de secole. Pe lângă istoria sa legată de sare, Tuzla este un important centru industrial și cultural, cu o scenă artistică și muzicală vibrantă. Orașul a păstrat o lungă tradiție de toleranță multietnică. Chimie K8 – Soluții și săruri.",
      en: "Tuzla, whose name is derived from the Turkish word for salt, is unique in Europe for its salt lakes in the city center. The Pannonian Lakes are a man-made complex that allows residents and visitors to enjoy beach life in the middle of the city. This feature is a result of the massive salt deposit beneath the city, which has been mined for centuries. This geological condition has made Tuzla a center of salt mining for centuries, but it has also caused parts of the city to sink. The creation of the lakes has remedied this environmental problem while also creating a unique urban beach. Today, Tuzla is an important industrial and cultural center. Chemistry K8 – Solutions and Salts."
    },
    factsAdvanced: {
      de: [
        "Tuzla ist die einzige Stadt in Europa mit Salzseen und einem öffentlichen Strand im Stadtzentrum.",
        "Der Name 'Tuzla' stammt vom osmanisch-türkischen Wort 'tuz' für Salz.",
        "Unter der Stadt befindet sich ein riesiger Salzstock, der zu Bodensenkungen im Stadtgebiet geführt hat.",
        "Die Pannonischen Seen wurden geschaffen, um die durch den Salzabbau verursachten ökologischen Schäden zu kompensieren.",
        "Die Stadt war Schauplatz eines der schlimmsten Massaker des Bosnienkrieges im Mai 1995.",
        "Tuzla beherbergt eine der ältesten Dampflokomotiven Europas, die heute als Denkmal dient."
      ],
      hu: [
        "Tuzla az egyetlen város Európában, amelynek központjában sóstavak és nyilvános strand található.",
        "A város neve az oszmán-török 'tuz' szóból ered, ami sót jelent.",
        "A város alatt egy hatalmas sókészlet található, ami a talaj süllyedéséhez vezetett.",
        "A Pannon-tavakat a sóbányászat okozta ökológiai károk enyhítésére hozták létre.",
        "A városban található Európa egyik legrégebbi gőzmozdonya, amely ma emlékműként szolgál.",
        "A boszniai háború egyik legtragikusabb mészárlása a tuzlai Kapija negyedben történt 1995-ben.",
        "A sókitermelés hagyománya a neolitikumig nyúlik vissza a régióban.",
        "Tuzla régóta a multietnikus tolerancia bástyája Boszniában."
      ],
      ro: [
        "Tuzla este singurul oraș din Europa cu lacuri sărate și o plajă publică în centrul orașului.",
        "Numele 'Tuzla' provine din cuvântul turcesc otoman 'tuz', care înseamnă sare.",
        "Sub oraș se află un zăcământ imens de sare, care a dus la scufundarea unor zone ale orașului.",
        "Lacurile Panonice au fost create pentru a compensa daunele ecologice cauzate de extracția sării.",
        "Orașul a fost scena unuia dintre cele mai grave masacre ale războiului din Bosnia, în mai 1995.",
        "Tuzla găzduiește una dintre cele mai vechi locomotive cu aburi din Europa, care acum servește drept monument.",
        "Tradiția extragerii sării în regiune datează din neolitic.",
        "Tuzla este de mult timp un bastion al toleranței multietnice în Bosnia."
      ],
      en: [
        "Tuzla is the only city in Europe with salt lakes and a public beach in its center.",
        "The name 'Tuzla' comes from the Ottoman Turkish word 'tuz' for salt.",
        "A huge salt deposit is located under the city, which has led to soil subsidence.",
        "The Pannonian Lakes were created to mitigate the ecological damage caused by salt mining.",
        "The city is home to one of Europe's oldest steam locomotives, now a monument.",
        "One of the most tragic massacres of the Bosnian War took place in Tuzla's Kapija district in 1995.",
        "The tradition of salt extraction in the region dates back to the Neolithic period.",
        "Tuzla has long been a bastion of multi-ethnic tolerance in Bosnia."
      ]
    }, image: "/poi-images/ba-tuzla.webp"},
  {
    id: "ba-zenica",
    type: "city",
    name: { de: "Zenica", hu: "Zenica", ro: "Zenica", en: "Zenica" },
    description: {
      de: "Wichtige Industriestadt im zentralen Teil des Landes, gelegen am Fluss Bosna.",
      hu: "Fontos ipari város az ország középső részén, a Boszna folyó partján.",
      ro: "Important oraș industrial în partea centrală a țării, situat pe râul Bosna.",
      en: "Important industrial city in the central part of the country, located on the Bosna river."
    },
    coords: [17.9040, 44.2017],
    parent: "BA-014",
    descriptionAdvanced: {
      de: "Zenica ist das industrielle Herz von Bosnien und Herzegowina, geprägt durch seine lange Geschichte in der Stahlproduktion. Die Stadt liegt im Tal des Flusses Bosna und ist von Hügeln und Bergen umgeben. Obwohl oft als reine Industriestadt wahrgenommen, besitzt Zenica auch kulturelle Schätze wie das Stadtmuseum, eine mittelalterliche Festung namens Vranduk in der Nähe und eine osmanische Moschee. Das moderne Fußballstadion Bilino Polje ist ein nationales Symbol und die Heimstätte der bosnischen Nationalmannschaft. Die Stadt durchläuft derzeit einen Wandel, um ihre industrielle Vergangenheit mit einer grüneren Zukunft zu verbinden.",
      hu: "Zenica Bosznia-Hercegovina ipari szíve, amelyet régóta acélgyártása határoz meg. A Boszna folyó völgyében fekvő várost hegyek veszik körül. Bár ipari jellege domináns, Zenica kulturális kincsekkel is büszkélkedhet, mint például a Városi Múzeum és a közeli Vranduk középkori erődje. A modern Bilino Polje stadion a bosnyák labdarúgó-válogatott otthona, és a nemzeti öntudat fontos szimbóluma. Zenica jelenleg átalakulóban van, ipari múltját igyekszik egy zöldebb, fenntarthatóbb jövővel ötvözni. Történelem K8 – Az ipari forradalom hatásai.",
      ro: "Zenica este inima industrială a Bosniei și Herțegovinei, marcată de lunga sa istorie în producția de oțel. Orașul este situat în valea râului Bosna și este înconjurat de dealuri și munți. Deși adesea perceput doar ca un oraș industrial, Zenica deține și comori culturale precum Muzeul Orașului, o fortăreață medievală numită Vranduk în apropiere și o moschee otomană. Stadionul modern de fotbal Bilino Polje este un simbol național și casa echipei naționale a Bosniei. Orașul trece în prezent printr-o transformare, încercând să îmbine trecutul său industrial cu un viitor mai ecologic. Istorie K8 – Efectele revoluției industriale.",
      en: "Zenica is the industrial heart of Bosnia and Herzegovina, defined by its long history of steel production. Situated in the valley of the Bosna river, the city is surrounded by hills. While its industrial character is dominant, Zenica also boasts cultural treasures such as the City Museum and the nearby medieval fortress of Vranduk. The modern Bilino Polje stadium is the home of the Bosnian national football team and an important symbol of national identity. Zenica is currently undergoing a transformation, striving to combine its industrial past with a greener, more sustainable future. History K8 – The Impacts of the Industrial Revolution."
    },
    factsAdvanced: {
      de: [
        "Das Stahlwerk von Zenica war einst eines der größten auf dem Balkan und beschäftigte über 20.000 Menschen.",
        "Das Bilino Polje Stadion gilt als 'uneinnehmbare Festung' für die bosnische Fußballnationalmannschaft, die hier selten verliert.",
        "In der Nähe von Zenica befindet sich die mittelalterliche Festung Vranduk, die einst als Sitz bosnischer Könige diente.",
        "Die Stadt war im Mittelalter unter dem Namen 'Bilinum' bekannt.",
        "Das Stadtmuseum von Zenica beherbergt Artefakte, die bis in die illyrische und römische Zeit zurückreichen.",
        "Zenica hat eine der ältesten Musikschulen des Landes."
      ],
      hu: [
        "A zenicai acélmű egykor a Balkán egyik legnagyobbja volt, több mint 20 000 embert foglalkoztatva.",
        "A Bilino Polje stadiont a bosnyák labdarúgó-válogatott 'bevehetetlen erődítményének' tartják, mivel itt ritkán szenvednek vereséget.",
        "Zenica közelében található a középkori Vranduk erődje, amely egykor bosnyák királyok székhelye volt.",
        "A város a középkorban 'Bilinum' néven volt ismert.",
        "A Városi Múzeum gyűjteménye az illír és római korig visszanyúló leleteket is bemutat.",
        "Zenica ad otthont az ország egyik legrégebbi zeneiskolájának.",
        "A városban található a Szinán bég által építtetett Szultán Ahmed mecset.",
        "Zenica börtöne a legnagyobb az országban."
      ],
      ro: [
        "Oțelăria din Zenica a fost cândva una dintre cele mai mari din Balcani, angajând peste 20.000 de oameni.",
        "Stadionul Bilino Polje este considerat o 'fortăreață inexpugnabilă' pentru echipa națională de fotbal a Bosniei, care rareori pierde aici.",
        "În apropiere de Zenica se află fortăreața medievală Vranduk, care a servit odată drept reședință a regilor bosniaci.",
        "Orașul era cunoscut în Evul Mediu sub numele de 'Bilinum'.",
        "Muzeul Orașului Zenica găzduiește artefacte datând din perioadele iliră și romană.",
        "Zenica are una dintre cele mai vechi școli de muzică din țară.",
        "În oraș se află Moscheea Sultan Ahmed, construită de Sinan-beg.",
        "Închisoarea din Zenica este cea mai mare din țară."
      ],
      en: [
        "The Zenica steelworks was once one of the largest in the Balkans, employing over 20,000 people.",
        "The Bilino Polje stadium is considered an 'impregnable fortress' for the Bosnian national football team, as they rarely lose there.",
        "Near Zenica lies the medieval Vranduk fortress, which once served as the seat of Bosnian kings.",
        "In the Middle Ages, the city was known as 'Bilinum'.",
        "The City Museum's collection includes artifacts dating back to the Illyrian and Roman periods.",
        "Zenica is home to one of the country's oldest music schools.",
        "The city contains the Sultan Ahmed Mosque, built by Sinan-beg.",
        "Zenica's prison is the largest in the country."
      ]
    }, image: "/poi-images/ba-zenica.webp"},
  {
    id: "ba-bihac",
    type: "city",
    name: { de: "Bihać", hu: "Bihać", ro: "Bihać", en: "Bihać" },
    description: {
      de: "Stadt im Nordwesten, am Fluss Una gelegen, ein Zentrum für Naturtourismus.",
      hu: "Északnyugati város az Una folyó partján, a természeti turizmus egyik központja.",
      ro: "Oraș în nord-vest, situat pe râul Una, un centru pentru turismul de natură.",
      en: "City in the northwest, located on the Una river, a center for nature tourism."
    },
    coords: [15.8708, 44.8169],
    parent: "BA-005",
    descriptionAdvanced: {
      de: "Bihać liegt am Ufer des smaragdgrünen Flusses Una, einem der reinsten und schönsten Flüsse der Region. Die Stadt ist das Zentrum des Nationalparks Una und ein Paradies für Naturliebhaber und Abenteuersportler. Rafting, Kajakfahren und Angeln sind hier sehr beliebte Aktivitäten. Die historische Kapitänsburg und die Fethija-Moschee, ursprünglich eine gotische Kirche, zeugen von der reichen und wechselvollen Geschichte der Stadt. Bihać war auch Sitz des ersten antifaschistischen Parlaments (AVNOJ) im Zweiten Weltkrieg, was seine historische Bedeutung unterstreicht.",
      hu: "",
      ro: "Bihać se află pe malurile râului Una, de un verde smarald, unul dintre cele mai curate și frumoase râuri din regiune. Orașul este centrul Parcului Național Una și un paradis pentru iubitorii de natură și sporturi de aventură. Raftingul, caiac-canoe și pescuitul sunt activități foarte populare aici. Turnul istoric al Căpitanului și Moscheea Fethija, inițial o biserică gotică, mărturisesc istoria bogată și diversă a orașului. Bihać a fost, de asemenea, sediul primului parlament antifascist (AVNOJ) în timpul celui de-Al Doilea Război Mondial, ceea ce subliniază importanța sa istorică.",
      en: "Bihać lies on the banks of the emerald-green Una River, one of the purest and most beautiful rivers in the region. The city is the center of the Una National Park and a paradise for nature lovers and adventure sports enthusiasts. Rafting, kayaking, and fishing are very popular activities here. The historic Captain's Tower and the Fethija Mosque, originally a Gothic church, bear witness to the city's rich and varied history. Bihać was also the seat of the first Anti-Fascist Council (AVNOJ) in World War II, which underscores its historical importance. Biology K7 - River Ecosystems."
    },
    factsAdvanced: {
      de: [
        "Bihać liegt am Fluss Una, dessen Name angeblich von einem römischen Soldaten stammt, der ausrief: 'Una!', was 'die Einzige' bedeutet.",
        "Die Fethija-Moschee wurde im 13. Jahrhundert als gotische Kirche des Heiligen Antonius erbaut.",
        "Der Nationalpark Una ist bekannt für seine spektakulären Wasserfälle, darunter der Štrbački Buk.",
        "In Bihać fand 1942 die erste Sitzung des Antifaschistischen Rates der Nationalen Befreiung Jugoslawiens (AVNOJ) statt.",
        "Die Region um Bihać ist reich an mittelalterlichen Festungsruinen.",
        "Bihać ist ein beliebtes Ziel für die internationale Una-Regatta, ein jährliches mehrtägiges Kajak- und Rafting-Event."
      ],
      hu: [],
      ro: [
        "Bihać este situat pe râul Una, al cărui nume se spune că provine de la un soldat roman care a exclamat 'Una!', adică 'unica'.",
        "Moscheea Fethija a fost construită în secolul al XIII-lea ca biserică gotică dedicată Sfântului Anton.",
        "Parcul Național Una este cunoscut pentru cascadele sale spectaculoase, inclusiv Štrbački Buk.",
        "În 1942, la Bihać a avut loc prima sesiune a Consiliului Antifascist de Eliberare Națională a Iugoslaviei (AVNOJ).",
        "Regiunea din jurul orașului Bihać este bogată în ruine de cetăți medievale.",
        "Bihać este o destinație populară pentru Regata Internațională Una, un eveniment anual de caiac și rafting de mai multe zile."
      ],
      en: [
        "Bihać is located on the Una River, whose name is said to have come from a Roman soldier who exclaimed 'Una!', meaning 'the one and only'.",
        "The Fethija Mosque was built in the 13th century as the Gothic Church of Saint Anthony.",
        "Una National Park is known for its spectacular waterfalls, including Štrbački Buk.",
        "In 1942, Bihać hosted the first session of the Anti-Fascist Council of National Liberation of Yugoslavia (AVNOJ).",
        "The region around Bihać is rich in medieval fortress ruins.",
        "Bihać is a popular destination for the International Una Regatta, an annual multi-day kayaking and rafting event.",
        "The Captain's Tower, a remnant of the old fortifications, now serves as a city museum.",
        "The city was a free royal city of the medieval Kingdom of Hungary."
      ]
    }, image: "/poi-images/ba-bihac.webp"},
  {
    id: "ba-starimost",
    type: "landmark",
    name: { de: "Stari Most", hu: "Öreg híd", ro: "Stari Most", en: "Stari Most" },
    description: {
      de: "Die berühmte osmanische Brücke aus dem 16. Jahrhundert in Mostar.",
      hu: "A híres 16. századi oszmán híd Mostarban.",
      ro: "Faimosul pod otoman din secolul al XVI-lea din Mostar.",
      en: "The famous 16th-century Ottoman bridge in Mostar."
    },
    coords: [17.8150, 43.3373],
    parent: "BA-001",
    descriptionAdvanced: {
      de: "Die Stari Most (Alte Brücke) ist das unverkennbare Wahrzeichen von Mostar und ein Meisterwerk der osmanischen Baukunst. Sie wurde im 16. Jahrhundert erbaut und überspannt elegant den Fluss Neretva. Die Brücke wurde 1993 im Bosnienkrieg zerstört und in einem aufwändigen internationalen Projekt originalgetreu wiederaufgebaut und 2004 wiedereröffnet. Heute steht sie als UNESCO-Weltkulturerbe und als Symbol für die internationale Zusammenarbeit und die Versöhnung der verschiedenen Kulturen der Stadt. Die Brücke ist auch die Bühne für die berühmten Mostarer Brückenspringer.",
      hu: "",
      ro: "Stari Most (Podul Vechi) este simbolul inconfundabil al orașului Mostar și o capodoperă a arhitecturii otomane. Construit în secolul al XVI-lea, traversează elegant râul Neretva. Podul a fost distrus în 1993, în timpul războiului din Bosnia, și reconstruit fidel într-un proiect internațional complex, fiind redeschis în 2004. Astăzi, este sit al Patrimoniului Mondial UNESCO și un simbol al cooperării internaționale și al reconcilierii între diversele culturi ale orașului. Podul este, de asemenea, scena faimoaselor sărituri de la Mostar.",
      en: "The Stari Most (Old Bridge) is the unmistakable landmark of Mostar and a masterpiece of Ottoman engineering. Built in the 16th century, it elegantly spans the Neretva River. The bridge was destroyed in the Bosnian War in 1993 and was faithfully rebuilt in a complex international project, reopening in 2004. Today, it stands as a UNESCO World Heritage site and a symbol of international cooperation and the reconciliation of the city's diverse cultures. The bridge is also the stage for the famous Mostar bridge divers. Physics K7 - Structural Engineering and Gravity."
    },
    factsAdvanced: {
      de: [
        "Die Brücke wurde von Mimar Hayruddin, einem Schüler des berühmten osmanischen Architekten Sinan, entworfen.",
        "Für ihren Bau wurden 456 Steinblöcke verwendet.",
        "Die Brücke ist 29 Meter lang, 20 Meter hoch und hat keinen Mittelpfeiler.",
        "Nach ihrer Zerstörung wurden viele der ursprünglichen Steine aus dem Fluss geborgen und für den Wiederaufbau verwendet.",
        "Der Wiederaufbau kostete etwa 15,5 Millionen US-Dollar.",
        "Die Brücke und die Altstadt von Mostar wurden 2005 in die Liste des UNESCO-Weltkulturerbes aufgenommen."
      ],
      hu: [],
      ro: [
        "Podul a fost proiectat de Mimar Hayruddin, un elev al celebrului arhitect otoman Sinan.",
        "La construcția sa au fost folosite 456 de blocuri de piatră.",
        "Podul are o lungime de 29 de metri, o înălțime de 20 de metri și nu are pilon central.",
        "După distrugerea sa, multe dintre pietrele originale au fost recuperate din râu și folosite la reconstrucție.",
        "Reconstrucția a costat aproximativ 15,5 milioane de dolari SUA.",
        "Podul și centrul vechi al orașului Mostar au fost incluse pe lista Patrimoniului Mondial UNESCO în 2005."
      ],
      en: [
        "The bridge was designed by Mimar Hayruddin, a student of the famous Ottoman architect Sinan.",
        "456 blocks of stone were used in its construction.",
        "The bridge has a span of 29 meters, is 20 meters high, and has no central pier.",
        "After its destruction, many of the original stones were recovered from the river and used in the reconstruction.",
        "The reconstruction cost approximately 15.5 million US dollars.",
        "The bridge and the old city of Mostar were added to the UNESCO World Heritage list in 2005.",
        "The bridge's arch was made of local Tenelija stone.",
        "According to legend, the mortar was held together with egg whites."
      ]
    }, image: "/poi-images/ba-starimost.webp"},
  {
    id: "ba-visegrad",
    type: "landmark",
    name: { de: "Mehmed-Paša-Sokolović-Brücke", hu: "Szokollu Mehmed pasa hídja", ro: "Podul Mehmed Paša Sokolović", en: "Mehmed Paša Sokolović Bridge" },
    description: {
      de: "Eine historische Brücke in Višegrad, UNESCO-Weltkulturerbe.",
      hu: "Történelmi híd Višegradban, az UNESCO Világörökség része.",
      ro: "Un pod istoric în Višegrad, sit al Patrimoniului Mondial UNESCO.",
      en: "A historic bridge in Višegrad, a UNESCO World Heritage Site."
    },
    coords: [19.2881, 43.7825],
    parent: "BA-012",
    descriptionAdvanced: {
      de: "Die Mehmed-Paša-Sokolović-Brücke in Višegrad ist ein herausragendes Beispiel osmanischer Monumentalarchitektur und Ingenieurskunst. Sie wurde im späten 16. Jahrhundert auf Anweisung des Großwesirs Mehmed Paša Sokolović erbaut und vom Hofarchitekten Mimar Sinan entworfen. Die Brücke mit ihren elf Bögen überspannt majestätisch den Fluss Drina. Weltweite Berühmtheit erlangte sie durch den Roman 'Die Brücke über die Drina' des jugoslawischen Nobelpreisträgers Ivo Andrić, in dem die Brücke als stummer Zeuge der Geschichte der Region dient. Seit 2007 gehört sie zum UNESCO-Weltkulturerbe.",
      hu: "",
      ro: "Podul Mehmed Paša Sokolović din Višegrad este un exemplu remarcabil de arhitectură monumentală și inginerie otomană. A fost construit la sfârșitul secolului al XVI-lea la ordinul Marelui Vizir Mehmed Paša Sokolović și proiectat de arhitectul curții, Mimar Sinan. Podul, cu cele unsprezece arce ale sale, traversează maiestuos râul Drina. A devenit celebru la nivel mondial datorită romanului 'E un pod pe Drina...' al laureatului iugoslav al Premiului Nobel, Ivo Andrić, în care podul servește ca martor tăcut al istoriei regiunii. Din 2007, este inclus în Patrimoniul Mondial UNESCO.",
      en: "The Mehmed Paša Sokolović Bridge in Višegrad is an outstanding example of Ottoman monumental architecture and engineering. It was built in the late 16th century on the orders of Grand Vizier Mehmed Paša Sokolović and designed by the court architect Mimar Sinan. With its eleven arches, the bridge majestically spans the Drina River. It gained worldwide fame through the novel 'The Bridge on the Drina' by Yugoslav Nobel laureate Ivo Andrić, in which the bridge serves as a silent witness to the region's history. It has been a UNESCO World Heritage site since 2007. Literature K9 - Symbolism in Fiction."
    },
    factsAdvanced: {
      de: [
        "Die Brücke wurde zwischen 1571 und 1577 erbaut.",
        "Sie ist etwa 180 Meter lang und ruht auf elf Steinbögen.",
        "Die Brücke wurde durch den Roman 'Die Brücke über die Drina' von Ivo Andrić literarisch unsterblich gemacht.",
        "In der Mitte der Brücke befindet sich ein Sofa (eine steinerne Sitzgelegenheit) und ein Portal mit Inschriften.",
        "Während des Ersten und Zweiten Weltkriegs wurden Teile der Brücke beschädigt, aber später wiederhergestellt.",
        "Der Bau der Brücke war eine Hommage des Großwesirs an seine Heimatregion."
      ],
      hu: [],
      ro: [
        "Podul a fost construit între 1571 și 1577.",
        "Are o lungime de aproximativ 180 de metri și se sprijină pe unsprezece arce de piatră.",
        "Podul a fost imortalizat literar prin romanul 'E un pod pe Drina...' de Ivo Andrić.",
        "În mijlocul podului există o canapea (o bancă de piatră) și un portal cu inscripții.",
        "Părți ale podului au fost avariate în timpul Primului și celui de-Al Doilea Război Mondial, dar ulterior restaurate.",
        "Construcția podului a fost un omagiu adus de Marele Vizir regiunii sale natale."
      ],
      en: [
        "The bridge was constructed between 1571 and 1577.",
        "It is approximately 180 meters long and rests on eleven stone arches.",
        "The bridge was immortalized in literature by Ivo Andrić's novel 'The Bridge on the Drina'.",
        "In the middle of the bridge, there is a sofa (a stone seating area) and a portal with inscriptions.",
        "Parts of the bridge were damaged during World War I and World War II but were later restored.",
        "The construction of the bridge was a tribute by the Grand Vizier to his home region.",
        "The Grand Vizier himself was taken from the region as a child as part of the Ottoman 'devşirme' system.",
        "The central pier, known as the 'kapija' (gate), served as a meeting point for centuries."
      ]
    }, image: "/poi-images/ba-visegrad.webp"},
  {
    id: "ba-jajce",
    type: "landmark",
    name: { de: "Jajce Festung und Wasserfall", hu: "Jajca vára és vízesése", ro: "Cetatea și cascada Jajce", en: "Jajce Fortress and Waterfall" },
    description: {
      de: "Eine historische Königsstadt mit einem beeindruckenden Wasserfall mitten in der Stadt.",
      hu: "Történelmi királyi város lenyűgöző vízeséssel a város közepén.",
      ro: "Un oraș regal istoric cu o cascadă impresionantă în mijlocul orașului.",
      en: "A historic royal town with an impressive waterfall right in the city center."
    },
    coords: [17.2694, 44.3384],
    parent: "BA-013",
    descriptionAdvanced: {
      de: "Jajce ist eine Stadt von außergewöhnlicher historischer Bedeutung und natürlicher Schönheit. Sie war einst die Hauptstadt des mittelalterlichen bosnischen Königreichs. Über der Stadt thront eine imposante Festung, die von den bosnischen Königen erbaut wurde. Das einzigartige Merkmal von Jajce ist der spektakuläre Pliva-Wasserfall, wo der Fluss Pliva in den Vrbas stürzt – direkt im Herzen der Stadt. Jajce ist auch der Ort, an dem 1943 in der zweiten Sitzung des AVNOJ das föderale Jugoslawien gegründet wurde. Die Stadt ist ein Freilichtmuseum mit Katakomben, Tempeln und historischen Gebäuden.",
      hu: "",
      ro: "Jajce este un oraș de o importanță istorică și o frumusețe naturală excepționale. A fost odată capitala regatului medieval bosniac. Deasupra orașului se înalță o fortăreață impunătoare, construită de regii bosniaci. Caracteristica unică a orașului Jajce este spectaculoasa cascadă Pliva, unde râul Pliva se varsă în Vrbas – chiar în inima orașului. Jajce este, de asemenea, locul unde, în 1943, la a doua sesiune a AVNOJ, a fost fondată Iugoslavia federală. Orașul este un muzeu în aer liber, cu catacombe, temple și clădiri istorice.",
      en: "Jajce is a city of exceptional historical importance and natural beauty. It was once the capital of the medieval Bosnian Kingdom. An imposing fortress, built by Bosnian kings, towers above the city. The unique feature of Jajce is the spectacular Pliva Waterfall, where the Pliva River plunges into the Vrbas River right in the heart of the city. Jajce is also the place where, in 1943, the federal Yugoslavia was founded during the second session of AVNOJ. The city is an open-air museum with catacombs, temples, and historic buildings. World History K8 - Formation of Nations."
    },
    factsAdvanced: {
      de: [
        "Jajce war die letzte Hauptstadt des mittelalterlichen bosnischen Königreichs vor dessen Fall an die Osmanen 1463.",
        "Der Pliva-Wasserfall ist über 20 Meter hoch und einer der wenigen Wasserfälle der Welt, die sich im Zentrum einer Stadt befinden.",
        "Hier wurde der letzte bosnische König, Stjepan Tomašević, gekrönt und später hingerichtet.",
        "Die mittelalterlichen Katakomben von Jajce wurden im 15. Jahrhundert in den Fels gehauen.",
        "In Jajce wurde 1943 die Gründung des sozialistischen Jugoslawiens beschlossen.",
        "In der Nähe der Stadt befinden sich die Pliva-Seen mit ihren berühmten kleinen Holzwassermühlen."
      ],
      hu: [],
      ro: [
        "Jajce a fost ultima capitală a regatului medieval bosniac înainte de căderea sa în mâinile otomanilor în 1463.",
        "Cascada Pliva are peste 20 de metri înălțime și este una dintre puținele cascade din lume situate în centrul unui oraș.",
        "Aici a fost încoronat și, mai târziu, executat ultimul rege bosniac, Stjepan Tomašević.",
        "Catacombele medievale din Jajce au fost săpate în stâncă în secolul al XV-lea.",
        "În 1943, la Jajce s-a decis fondarea Iugoslaviei socialiste.",
        "În apropierea orașului se află Lacurile Pliva, cu faimoasele lor mori de apă mici din lemn."
      ],
      en: [
        "Jajce was the last capital of the medieval Bosnian Kingdom before its fall to the Ottomans in 1463.",
        "The Pliva Waterfall is over 20 meters high and one of the few waterfalls in the world located in a city center.",
        "The last Bosnian king, Stjepan Tomašević, was crowned and later executed here.",
        "The medieval catacombs of Jajce were carved into the rock in the 15th century.",
        "The founding of socialist Yugoslavia was decided in Jajce in 1943.",
        "Near the city are the Pliva Lakes with their famous small wooden watermills.",
        "The city's coat of arms of the Kotromanić dynasty is preserved in the catacombs.",
        "A temple dedicated to the god Mithras, dating from the 4th century, was discovered here."
      ]
    }
  },
  {
    id: "ba-travnik",
    type: "landmark",
    name: { de: "Festung Travnik", hu: "Travnik vára", ro: "Cetatea Travnik", en: "Travnik Fortress" },
    description: {
      de: "Gut erhaltene Burg in Travnik, der ehemaligen Hauptstadt der osmanischen Wesire.",
      hu: "Jól karbantartott vár Travnikban, az oszmán vezírek egykori fővárosában.",
      ro: "Cetate bine conservată din Travnik, fosta capitală a vizirilor otomani.",
      en: "Well-preserved castle in Travnik, the former capital of the Ottoman viziers."
    },
    coords: [17.6653, 44.2281],
    parent: "BA-013",
    descriptionAdvanced: {
      de: "Travnik, einst die Hauptstadt der osmanischen Wesire in Bosnien, ist eine Stadt reich an Geschichte und Kultur. Über der Stadt thront die beeindruckende mittelalterliche Festung, die einen atemberaubenden Blick über das Lašva-Tal bietet. Travnik wird oft als 'Stadt der Wesire' bezeichnet, da sie fast 150 Jahre lang der Sitz von 77 osmanischen Gouverneuren war. Die Stadt ist auch der Geburtsort des Nobelpreisträgers Ivo Andrić. Die bunte Moschee (Šarena Džamija) und die beiden Uhrtürme aus osmanischer Zeit sind weitere wichtige Wahrzeichen.",
      hu: "",
      ro: "Travnik, odinioară capitala vizirilor otomani din Bosnia, este un oraș bogat în istorie și cultură. Deasupra orașului se înalță impresionanta fortăreață medievală, care oferă o priveliște uluitoare asupra văii Lašva. Travnik este adesea numit 'Orașul Vizirilor', deoarece a fost reședința a 77 de guvernatori otomani timp de aproape 150 de ani. Orașul este, de asemenea, locul de naștere al laureatului Nobel Ivo Andrić. Moscheea Colorată (Šarena Džamija) și cele două turnuri cu ceas din perioada otomană sunt alte repere importante.",
      en: "Travnik, once the capital of the Ottoman viziers in Bosnia, is a city rich in history and culture. The impressive medieval fortress towers over the city, offering a breathtaking view of the Lašva Valley. Travnik is often called the 'City of Viziers' as it was the seat of 77 Ottoman governors for nearly 150 years. The city is also the birthplace of Nobel laureate Ivo Andrić. The Colored Mosque (Šarena Džamija) and the two Ottoman-era clock towers are other important landmarks. History K8 - Ottoman Empire in Europe."
    },
    factsAdvanced: {
      de: [
        "Travnik war von 1699 bis 1851 die Residenz des osmanischen Wesirs von Bosnien.",
        "Die Stadt ist bekannt für ihren 'Travnički sir', einen schafskäseähnlichen Käse.",
        "Der Nobelpreisträger für Literatur, Ivo Andrić, wurde 1892 in Travnik geboren; sein Geburtshaus ist heute ein Museum.",
        "Travnik ist eine der wenigen Städte der Welt mit zwei Uhrtürmen aus der osmanischen Ära.",
        "Die bunte Moschee (Šarena Džamija) ist bekannt für ihre ungewöhnlichen floralen Wandmalereien an der Außenseite.",
        "Die Festung von Travnik stammt aus dem 15. Jahrhundert, aus der Zeit vor der osmanischen Eroberung."
      ],
      hu: [],
      ro: [
        "Travnik a fost reședința vizirului otoman al Bosniei între 1699 și 1851.",
        "Orașul este cunoscut pentru 'Travnički sir', o brânză asemănătoare cu cea de oaie.",
        "Laureatul Premiului Nobel pentru Literatură, Ivo Andrić, s-a născut la Travnik în 1892; casa sa natală este astăzi muzeu.",
        "Travnik este unul dintre puținele orașe din lume cu două turnuri cu ceas din epoca otomană.",
        "Moscheea Colorată (Šarena Džamija) este renumită pentru picturile murale florale neobișnuite de pe exterior.",
        "Fortăreața din Travnik datează din secolul al XV-lea, din perioada pre-otomană."
      ],
      en: [
        "From 1699 to 1851, Travnik was the residence of the Ottoman vizier of Bosnia.",
        "The city is known for its 'Travnički sir,' a sheep's milk-like cheese.",
        "Nobel Prize laureate for literature, Ivo Andrić, was born in Travnik in 1892; his birthplace is now a museum.",
        "Travnik is one of the few cities in the world with two Ottoman-era clock towers.",
        "The Colored Mosque (Šarena Džamija) is known for its unusual floral murals on the exterior.",
        "The Travnik fortress dates back to the 15th century, from the pre-Ottoman era.",
        "The city served as the setting for Andrić's novel 'Travnik Chronicle' (also known as 'Bosnian Chronicle').",
        "It was briefly the capital of the Bosnian Eyalet."
      ]
    }, image: "/poi-images/ba-travnik.webp"},
  {
    id: "ba-bascarsija",
    type: "landmark",
    name: { de: "Baščaršija", hu: "Baščaršija", ro: "Baščaršija", en: "Baščaršija" },
    description: {
      de: "Der alte Basar und das historische und kulturelle Zentrum von Sarajevo.",
      hu: "Szarajevó régi bazárja és történelmi, kulturális központja.",
      ro: "Vechiul bazar și centrul istoric și cultural al orașului Sarajevo.",
      en: "The old bazaar and the historical and cultural center of Sarajevo."
    },
    coords: [18.4312, 43.8597],
    parent: "BA-017",
    descriptionAdvanced: {
      de: "Die Baščaršija ist das Herz und die Seele von Sarajevo. Dieser alte osmanische Basar aus dem 15. Jahrhundert ist ein Labyrinth aus engen, gepflasterten Gassen, gefüllt mit dem Klang von hämmernden Kupferschmieden, dem Duft von frisch gebrühtem bosnischem Kaffee und gegrillten Ćevapi. Das Zentrum des Platzes bildet der Sebilj, ein hölzerner Brunnen im maurischen Stil, der ein beliebter Treffpunkt ist. Die Baščaršija ist in verschiedene Handwerkszünfte unterteilt, in denen seit Jahrhunderten traditionelle Waren hergestellt und verkauft werden.",
      hu: "",
      ro: "Baščaršija este inima și sufletul orașului Sarajevo. Acest vechi bazar otoman din secolul al XV-lea este un labirint de străduțe înguste, pavate cu piatră, pline de sunetul ciocanelor arămarilor, de aroma cafelei bosniace proaspăt preparate și de mirosul de ćevapi la grătar. Centrul pieței este marcat de Sebilj, o fântână din lemn în stil maur, un loc de întâlnire popular. Baščaršija este împărțită în diverse bresle meșteșugărești, unde produsele tradiționale sunt fabricate și vândute de secole.",
      en: "Baščaršija is the heart and soul of Sarajevo. This old Ottoman bazaar from the 15th century is a labyrinth of narrow, cobbled streets, filled with the sound of hammering coppersmiths, the aroma of freshly brewed Bosnian coffee, and grilled Ćevapi. The center of the square is marked by the Sebilj, a wooden fountain in a pseudo-Moorish style, which is a popular meeting point. Baščaršija is divided into various craft guilds, where traditional goods have been produced and sold for centuries. Social Studies K6 - Trade and Markets."
    },
    factsAdvanced: {
      de: [
        "Die Baščaršija wurde 1462 von Isa-Beg Ishaković, dem Gründer von Sarajevo, angelegt.",
        "Der Name leitet sich von den türkischen Wörtern 'baş' (Haupt) und 'çarşı' (Markt) ab.",
        "Ein großes Feuer im 19. Jahrhundert zerstörte etwa die Hälfte des ursprünglichen Basars.",
        "Der Sebilj-Brunnen im Zentrum des Platzes wurde ursprünglich 1753 erbaut und 1891 in seiner heutigen Form neu gestaltet.",
        "Die Kazandžiluk (Kupferschmiedestraße) ist eine der berühmtesten Gassen, in der traditionelle Kupferwaren hergestellt werden.",
        "Eine Legende besagt, dass jeder, der aus dem Sebilj-Brunnen trinkt, eines Tages nach Sarajevo zurückkehren wird."
      ],
      hu: [],
      ro: [
        "Baščaršija a fost fondată în 1462 de Isa-Beg Ishaković, fondatorul orașului Sarajevo.",
        "Numele derivă din cuvintele turcești 'baș' (principal) și 'çarșı' (piață).",
        "Un incendiu major din secolul al XIX-lea a distrus aproximativ jumătate din bazarul original.",
        "Fântâna Sebilj din centrul pieței a fost construită inițial în 1753 și refăcută în forma sa actuală în 1891.",
        "Kazandžiluk (strada arămarilor) este una dintre cele mai faimoase alei, unde se produc articole tradiționale din cupru.",
        "O legendă spune că oricine bea apă din fântâna Sebilj se va întoarce într-o zi la Sarajevo."
      ],
      en: [
        "Baščaršija was founded in 1462 by Isa-Beg Ishaković, the founder of Sarajevo.",
        "The name derives from the Turkish words 'baş' (main/head) and 'çarşı' (market).",
        "A major fire in the 19th century destroyed about half of the original bazaar.",
        "The Sebilj fountain in the center of the square was originally built in 1753 and redesigned to its current form in 1891.",
        "Kazandžiluk (Coppersmith Street) is one of the most famous alleys, where traditional copper goods are made.",
        "A legend says that whoever drinks from the Sebilj fountain will one day return to Sarajevo.",
        "At its peak, the bazaar had dozens of different crafts, each with its own street.",
        "The streets are still paved with the original cobblestones."
      ]
    }, image: "/poi-images/ba-bascarsija.webp"},
  {
    id: "ba-srebrenik",
    type: "landmark",
    name: { de: "Festung Srebrenik", hu: "Srebreniki vár", ro: "Cetatea Srebrenik", en: "Srebrenik Fortress" },
    description: {
      de: "Eine der besterhaltenen mittelalterlichen Festungen in Bosnien und Herzegowina.",
      hu: "Bosznia-Hercegovina egyik legépebben fennmaradt középkori vára.",
      ro: "Una dintre cele mai bine conservate cetăți medievale din Bosnia și Herțegovina.",
      en: "One of the best-preserved medieval fortresses in Bosnia and Herzegovina."
    },
    coords: [18.5303, 44.7061],
    parent: "BA-015",
    descriptionAdvanced: {
      de: "Die Festung Srebrenik, auch bekannt als Gradina, ist eine der am besten erhaltenen und eindrucksvollsten mittelalterlichen Festungen in Bosnien und Herzegowina. Sie thront dramatisch auf einem steilen Felsen über der umliegenden Landschaft. Die Festung war der Sitz des mittelalterlichen bosnischen Bans und Königs Stjepan II Kotromanić. Die erste schriftliche Erwähnung stammt aus dem Jahr 1333 in einer Charta, die Stjepan II. der Republik Dubrovnik ausstellte. Die Festung mit ihren hohen Mauern, Türmen und dem Palast ist ein beeindruckendes Zeugnis der mittelalterlichen bosnischen Macht.",
      hu: "",
      ro: "Cetatea Srebrenik, cunoscută și sub numele de Gradina, este una dintre cele mai bine conservate și impresionante cetăți medievale din Bosnia și Herțegovina. Se înalță dramatic pe o stâncă abruptă, dominând peisajul înconjurător. Cetatea a fost reședința banului și regelui medieval bosniac Stjepan II Kotromanić. Prima mențiune scrisă datează din 1333, într-o cartă emisă de Stjepan al II-lea pentru Republica Dubrovnik. Cetatea, cu zidurile sale înalte, turnurile și palatul, este o mărturie impresionantă a puterii medievale bosniace.",
      en: "Srebrenik Fortress, also known as Gradina, is one of the best-preserved and most impressive medieval fortresses in Bosnia and Herzegovina. It sits dramatically on a steep rock overlooking the surrounding landscape. The fortress was the seat of the medieval Bosnian Ban and King Stjepan II Kotromanić. The first written mention dates from 1333 in a charter issued by Stjepan II to the Republic of Dubrovnik. With its high walls, towers, and palace, the fortress is an impressive testament to medieval Bosnian power. History K7 - Medieval Kingdoms."
    },
    factsAdvanced: {
      de: [
        "Srebrenik wurde erstmals 1333 urkundlich erwähnt.",
        "Sie war die Geburtsstätte von Tvrtko I., dem ersten bosnischen König.",
        "Die Festung liegt auf einem isolierten Felskegel, der nur über eine Brücke zugänglich ist.",
        "Sie gilt als eine der am schwersten einzunehmenden Festungen des mittelalterlichen Bosniens.",
        "Der Name 'Srebrenik' leitet sich vom slawischen Wort für Silber ('srebro') ab, was auf nahegelegene Minen hindeutet.",
        "Die Charta von 1333 ist eines der ältesten erhaltenen Dokumente des mittelalterlichen bosnischen Staates."
      ],
      hu: [],
      ro: [
        "Srebrenik a fost menționată pentru prima dată într-un document în 1333.",
        "A fost locul de naștere al lui Tvrtko I, primul rege bosniac.",
        "Cetatea este situată pe un con de stâncă izolat, accesibil doar printr-un pod.",
        "Este considerată una dintre cele mai greu de cucerit cetăți din Bosnia medievală.",
        "Numele 'Srebrenik' derivă din cuvântul slav pentru argint ('srebro'), sugerând existența unor mine în apropiere.",
        "Carta din 1333 este unul dintre cele mai vechi documente păstrate ale statului medieval bosniac."
      ],
      en: [
        "Srebrenik was first mentioned in a document in 1333.",
        "It was the birthplace of Tvrtko I, the first Bosnian king.",
        "The fortress is situated on an isolated cone-shaped rock, accessible only by a bridge.",
        "It is considered one of the most difficult to conquer fortresses of medieval Bosnia.",
        "The name 'Srebrenik' is derived from the Slavic word for silver ('srebro'), suggesting nearby mines.",
        "The Charter of 1333 is one of the oldest surviving documents of the medieval Bosnian state.",
        "It was the seat of the powerful Hrvatinić noble family.",
        "The fortress consists of a lower town, upper town, and a citadel."
      ]
    }, image: "/poi-images/ba-srebrenik.webp"},
  {
    id: "ba-blagaj",
    type: "landmark",
    name: { de: "Blagaj Tekija", hu: "Blagaj Tekija", ro: "Blagaj Tekke", en: "Blagaj Tekke" },
    description: {
      de: "Ein historisches Derwischkloster, malerisch an der Quelle der Buna gelegen.",
      hu: "Történelmi dervis kolostor, amely festői környezetben, a Buna folyó forrásánál fekszik.",
      ro: "O mănăstire istorică de derviși, situată pitoresc la izvorul râului Buna.",
      en: "A historic Dervish monastery, picturesquely situated at the source of the Buna river."
    },
    coords: [17.8964, 43.2568],
    parent: "BA-001",
    descriptionAdvanced: {
      de: "Die Blagaj Tekija (Tekke) ist ein Derwischkloster, das sich an einer der malerischsten Stellen des Landes befindet. Es ist harmonisch in die Landschaft am Fuße einer hohen Klippe gebaut, direkt neben der Karstquelle des Flusses Buna. Die Buna entspringt hier aus einer Höhle und ist eine der stärksten Quellen Europas. Das Kloster wurde im 16. Jahrhundert für die Sufi-Derwische erbaut und ist ein Ort der spirituellen Einkehr und Meditation. Die Kombination aus natürlicher Schönheit und historischer Architektur macht Blagaj zu einem der meistbesuchten Orte in Bosnien und Herzegowina.",
      hu: "",
      ro: "Blagaj Tekke este o mănăstire de derviși situată într-unul dintre cele mai pitorești locuri din țară. Este construită armonios în peisaj, la poalele unei stânci înalte, chiar lângă izvorul carstic al râului Buna. Buna izvorăște aici dintr-o peșteră și este unul dintre cele mai puternice izvoare din Europa. Mănăstirea a fost construită în secolul al XVI-lea pentru dervișii sufi și este un loc de reculegere spirituală și meditație. Combinația dintre frumusețea naturală și arhitectura istorică face din Blagaj unul dintre cele mai vizitate locuri din Bosnia și Herțegovina.",
      en: "The Blagaj Tekke is a Dervish monastery located in one of the country's most picturesque spots. It is harmoniously built into the landscape at the foot of a high cliff, right next to the karst spring of the Buna River. The Buna emerges from a cave here and is one of the strongest springs in Europe. The monastery was built in the 16th century for Sufi Dervishes and is a place of spiritual retreat and meditation. The combination of natural beauty and historical architecture makes Blagaj one of the most visited places in Bosnia and Herzegovina. Geography K6 - Karst Landscapes."
    },
    factsAdvanced: {
      de: [
        "Die Tekke wurde um 1520 erbaut.",
        "Die Buna-Quelle hat eine durchschnittliche Schüttung von 43.000 Litern pro Sekunde.",
        "Das Wasser der Buna-Quelle ist extrem kalt und trinkbar.",
        "Die Tekke ist ein wichtiges Monument der frühen osmanischen Architektur in der Region.",
        "Das Ensemble umfasst ein Mausoleum (türbe) und ein Gästehaus (musafirhana).",
        "Blagaj war auch der Standort einer mittelalterlichen Festung, die über der Klippe thront."
      ],
      hu: [],
      ro: [
        "Tekke a fost construită în jurul anului 1520.",
        "Izvorul râului Buna are un debit mediu de 43.000 de litri pe secundă.",
        "Apa izvorului Buna este extrem de rece și potabilă.",
        "Tekke este un monument important al arhitecturii otomane timpurii din regiune.",
        "Ansamblul include un mausoleu (türbe) și o casă de oaspeți (musafirhana).",
        "Blagaj a fost, de asemenea, locația unei cetăți medievale, care se înalță deasupra stâncii."
      ],
      en: [
        "The Tekke was built around 1520.",
        "The Buna spring has an average discharge of 43,000 liters per second.",
        "The water of the Buna spring is extremely cold and potable.",
        "The Tekke is an important monument of early Ottoman architecture in the region.",
        "The complex includes a mausoleum (türbe) and a guesthouse (musafirhana).",
        "Blagaj was also the site of a medieval fortress, which is perched above the cliff.",
        "The monastery is believed to hold the tomb of Sari Saltuk, a 13th-century Bektashi mystic.",
        "The current building is a mix of Ottoman and Mediterranean architectural styles."
      ]
    }, image: "/poi-images/ba-blagaj.webp"},
  {
    id: "ba-pocitelj",
    type: "landmark",
    name: { de: "Počitelj", hu: "Počitelj", ro: "Počitelj", en: "Počitelj" },
    description: {
      de: "Ein historisches befestigtes Dorf am Ufer der Neretva.",
      hu: "Történelmi erődített falu a Neretva partján.",
      ro: "Un sat istoric fortificat pe malul râului Neretva.",
      en: "A historic fortified village on the banks of the Neretva."
    },
    coords: [17.7317, 43.1340],
    parent: "BA-001",
    descriptionAdvanced: {
      de: "Počitelj ist ein befestigtes Dorf aus Stein, das sich amphitheatralisch an einem Hang über dem Fluss Neretva erhebt. Dieses einzigartige Freilichtmuseum wurde im Mittelalter erbaut und während der osmanischen Zeit erweitert. Zu den markantesten Bauten gehören die Festung (Kula), die einen Panoramablick bietet, die Šišman-Ibrahim-Paša-Moschee und ein Uhrturm. Ein Spaziergang durch die steilen, gepflasterten Gassen von Počitelj ist wie eine Reise in die Vergangenheit. Das Dorf wurde im Krieg schwer beschädigt, aber größtenteils restauriert und steht auf der Vorschlagsliste für das UNESCO-Weltkulturerbe.",
      hu: "",
      ro: "Počitelj este un sat fortificat din piatră, care se înalță ca un amfiteatru pe o pantă deasupra râului Neretva. Acest muzeu unic în aer liber a fost construit în Evul Mediu și extins în perioada otomană. Printre cele mai remarcabile clădiri se numără fortăreața (Kula), care oferă o vedere panoramică, Moscheea Šišman Ibrahim Paša și un turn cu ceas. O plimbare pe străzile abrupte și pavate din Počitelj este ca o călătorie înapoi în timp. Satul a fost grav avariat în timpul războiului, dar în mare parte restaurat și se află pe lista tentativă a Patrimoniului Mondial UNESCO.",
      en: "Počitelj is a fortified stone village that rises like an amphitheater on a slope above the Neretva River. This unique open-air museum was built in the Middle Ages and expanded during the Ottoman period. Among the most notable buildings are the fortress (Kula), which offers panoramic views, the Šišman Ibrahim Pasha Mosque, and a clock tower. A walk through the steep, cobbled streets of Počitelj is like a journey back in time. The village was heavily damaged in the war but has been largely restored and is on the tentative list for UNESCO World Heritage status. Art History K8 - Ottoman Architecture."
    },
    factsAdvanced: {
      de: [
        "Počitelj wurde erstmals 1444 urkundlich erwähnt.",
        "Die Festung wurde vom ungarischen König Matthias Corvinus ausgebaut, um sich gegen die Osmanen zu verteidigen.",
        "Die Šišman-Ibrahim-Paša-Moschee wurde 1563 erbaut und ist bekannt für ihre besondere Akustik.",
        "Das Dorf war strategisch wichtig, da es den Zugang zum Neretva-Tal kontrollierte.",
        "Počitelj beherbergt die älteste Kunstkolonie in Südosteuropa, die seit 1964 aktiv ist.",
        "Die Gavrankapetanović-Haus ist ein typisches Beispiel für die osmanische Wohnarchitektur in der Region."
      ],
      hu: [],
      ro: [
        "Počitelj a fost menționat pentru prima dată într-un document în 1444.",
        "Cetatea a fost extinsă de regele ungar Matei Corvin pentru a se apăra împotriva otomanilor.",
        "Moscheea Šišman Ibrahim Paša a fost construită în 1563 și este cunoscută pentru acustica sa specială.",
        "Satul a fost important din punct de vedere strategic, controlând accesul la valea Neretvei.",
        "Počitelj găzduiește cea mai veche colonie de artă din sud-estul Europei, activă din 1964.",
        "Casa Gavrankapetanović este un exemplu tipic de arhitectură rezidențială otomană din regiune."
      ],
      en: [
        "Počitelj was first mentioned in a document in 1444.",
        "The fortress was expanded by the Hungarian King Matthias Corvinus to defend against the Ottomans.",
        "The Šišman Ibrahim Pasha Mosque was built in 1563 and is known for its special acoustics.",
        "The village was strategically important as it controlled access to the Neretva Valley.",
        "Počitelj is home to the oldest art colony in Southeast Europe, active since 1964.",
        "The Gavrankapetanović House is a typical example of Ottoman residential architecture in the region.",
        "The clock tower was built in the late 17th century.",
        "The entire historic urban site of Počitelj is a designated National Monument of Bosnia and Herzegovina."
      ]
    }, image: "/poi-images/ba-pocitelj.webp"},
  {
    id: "ba-kravica",
    type: "landmark",
    name: { de: "Kravica-Wasserfälle", hu: "Kravica-vízesés", ro: "Cascada Kravica", en: "Kravica Waterfall" },
    description: {
      de: "Eine große Tuffsteinkaskade am Fluss Trebižat im karstartigen Herzen der Herzegowina.",
      hu: "Nagy mésztufa vízesés a Trebižat folyón, Hercegovina karsztos szívében.",
      ro: "O mare cascadă de tuf calcaros pe râul Trebižat, în inima carstică a Herțegovinei.",
      en: "A large tufa cascade on the Trebižat River, in the karstic heart of Herzegovina."
    },
    coords: [17.6083, 43.1581],
    parent: "BA-011",
    descriptionAdvanced: {
      de: "Die Kravica-Wasserfälle sind ein atemberaubendes Naturphänomen in der Herzegowina. Wie ein Mini-Niagara stürzt der Fluss Trebižat hier in einem breiten, über 120 Meter langen Halbkreis 28 Meter in die Tiefe und bildet einen smaragdgrünen See. Die Wasserfälle sind von üppiger Vegetation, Feigenbäumen und Pappeln umgeben. Im Sommer ist der See ein beliebter Bade- und Picknickplatz für Einheimische und Touristen. Die ständige Gischt erzeugt ein Mikroklima, das die Umgebung kühl und erfrischend hält. Kravica ist ein perfektes Beispiel für die wilde und unberührte Karstlandschaft der Herzegowina.",
      hu: "",
      ro: "Cascadele Kravica sunt un fenomen natural uluitor în Herțegovina. Ca o mini-Niagara, râul Trebižat se prăbușește aici de la o înălțime de 28 de metri într-un semicerc larg de peste 120 de metri, formând un lac de un verde smarald. Cascadele sunt înconjurate de vegetație luxuriantă, smochini și plopi. Vara, lacul este un loc popular pentru înot și picnic pentru localnici și turiști. Aburul constant creează un microclimat care menține zona răcoroasă și revigorantă. Kravica este un exemplu perfect al peisajului carstic sălbatic și neatins din Herțegovina.",
      en: "The Kravica waterfalls are a stunning natural phenomenon in Herzegovina. Like a mini-Niagara, the Trebižat River cascades here from a height of 28 meters in a wide semicircle over 120 meters long, forming an emerald-green lake. The falls are surrounded by lush vegetation, fig trees, and poplars. In the summer, the lake is a popular spot for swimming and picnics for both locals and tourists. The constant spray creates a microclimate that keeps the surroundings cool and refreshing. Kravica is a perfect example of the wild and untouched karst landscape of Herzegovina. Earth Science K5 - Water Cycles and Landforms."
    },
    factsAdvanced: {
      de: [
        "Die Wasserfälle sind etwa 28 Meter hoch und erstrecken sich über eine Breite von 120 Metern.",
        "Sie liegen am Fluss Trebižat, der neunmal unter der Erde verschwindet und wieder auftaucht.",
        "Kravica ist eine Tuffsteinkaskade, die durch die Ablagerung von Kalziumkarbonat entstanden ist.",
        "Die Wassermenge variiert stark je nach Jahreszeit; im Frühling sind die Wasserfälle am spektakulärsten.",
        "Unterhalb des Hauptfalls gibt es mehrere kleinere Fälle und Stromschnellen.",
        "In der Nähe des Wasserfalls befanden sich früher mehrere Wassermühlen."
      ],
      hu: [],
      ro: [
        "Cascadele au o înălțime de aproximativ 28 de metri și se întind pe o lățime de 120 de metri.",
        "Sunt situate pe râul Trebižat, care dispare și reapare de nouă ori sub pământ.",
        "Kravica este o cascadă de tuf, formată prin depunerea de carbonat de calciu.",
        "Debitul apei variază foarte mult în funcție de anotimp; primăvara, cascadele sunt cele mai spectaculoase.",
        "Sub cascada principală există mai multe cascade și praguri mai mici.",
        "În apropierea cascadei existau în trecut mai multe mori de apă."
      ],
      en: [
        "The waterfalls are about 28 meters high and stretch over a width of 120 meters.",
        "They are located on the Trebižat River, which disappears and reappears underground nine times.",
        "Kravica is a tufa cascade, formed by the deposition of calcium carbonate.",
        "The water volume varies greatly depending on the season; the falls are most spectacular in spring.",
        "Below the main fall, there are several smaller falls and rapids.",
        "Near the waterfall, there were once several watermills.",
        "Unlike many waterfalls, swimming is permitted in the lake below the falls.",
        "The area is protected as a natural monument."
      ]
    }, image: "/poi-images/ba-kravica.webp"},
  {
    id: "ba-una",
    type: "landmark",
    name: { de: "Nationalpark Una", hu: "Una Nemzeti Park", ro: "Parcul Național Una", en: "Una National Park" },
    description: {
      de: "Ein Nationalpark zum Schutz des unberührten Flusses Una und seiner Nebenflüsse.",
      hu: "Nemzeti park az érintetlen Una folyó és mellékfolyóinak védelmére.",
      ro: "Un parc național înființat pentru a proteja râul virgin Una și afluenții săi.",
      en: "A national park established to protect the unspoiled Una river and its tributaries."
    },
    coords: [16.0967, 44.5947],
    parent: "BA-005",
    descriptionAdvanced: {
      de: "Der Nationalpark Una, gegründet 2008, ist der jüngste der drei Nationalparks in Bosnien und Herzegowina. Er wurde zum Schutz des Oberlaufs des Flusses Una sowie der Flüsse Unac und Krka geschaffen. Der Park ist bekannt für seine atemberaubenden Tuffstein-Wasserfälle, Kaskaden und Stromschnellen, darunter der berühmte Štrbački Buk und die Martin-Brod-Wasserfälle. Die reiche Biodiversität umfasst über 170 Pflanzenarten und mehr als 30 Fischarten. Der Park ist ein Paradies für Outdoor-Aktivitäten wie Rafting, Kajakfahren, Wandern und Fliegenfischen in einer weitgehend unberührten Naturlandschaft.",
      hu: "",
      ro: "Parcul Național Una, înființat în 2008, este cel mai recent dintre cele trei parcuri naționale din Bosnia și Herțegovina. A fost creat pentru a proteja cursul superior al râului Una, precum și râurile Unac și Krka. Parcul este cunoscut pentru cascadele sale uimitoare de tuf, pragurile și repezișurile, inclusiv faimosul Štrbački Buk și cascadele de la Martin Brod. Biodiversitatea bogată include peste 170 de specii de plante și mai mult de 30 de specii de pești. Parcul este un paradis pentru activități în aer liber precum rafting, caiac-canoe, drumeții și pescuit cu musca într-un peisaj natural în mare parte neatins.",
      en: "Una National Park, established in 2008, is the youngest of the three national parks in Bosnia and Herzegovina. It was created to protect the upper course of the Una River, as well as the Unac and Krka rivers. The park is renowned for its breathtaking tufa waterfalls, cascades, and rapids, including the famous Štrbački Buk and the Martin Brod waterfalls. Its rich biodiversity includes over 170 plant species and more than 30 species of fish. The park is a paradise for outdoor activities such as rafting, kayaking, hiking, and fly fishing in a largely untouched natural landscape. Environmental Science K9 - Conservation and Biodiversity."
    },
    factsAdvanced: {
      de: [
        "Der Štrbački Buk ist mit 24,5 Metern der höchste und spektakulärste Wasserfall im Nationalpark.",
        "Der Name 'Una' soll von römischen Soldaten stammen, die die Schönheit des Flusses als 'die Einzige' (una) beschrieben.",
        "Im Parkgebiet gibt es zahlreiche archäologische Stätten, darunter römische Ruinen und mittelalterliche Festungen.",
        "Der Fluss Unac verschwindet in einer tiefen Karstschlucht, bevor er in die Una mündet.",
        "Der Park ist ein Hotspot der Biodiversität und Heimat seltener Tierarten wie dem Luchs und Braunbären.",
        "Die Martin-Brod-Wasserfälle sind ein Komplex aus zahlreichen Kaskaden und Kanälen, die sich über eine Länge von 800 Metern erstrecken."
      ],
      hu: [],
      ro: [
        "Štrbački Buk, cu o înălțime de 24,5 metri, este cea mai înaltă și spectaculoasă cascadă din parcul național.",
        "Numele 'Una' se spune că provine de la soldații romani care au descris frumusețea râului ca fiind 'unica' (una).",
        "În zona parcului există numeroase situri arheologice, inclusiv ruine romane și cetăți medievale.",
        "Râul Unac dispare într-un canion carstic adânc înainte de a se vărsa în Una.",
        "Parcul este un punct fierbinte al biodiversității și adăpostește specii rare de animale precum râsul și ursul brun.",
        "Cascadele de la Martin Brod sunt un complex de numeroase cascade și canale care se întind pe o lungime de 800 de metri."
      ],
      en: [
        "Štrbački Buk, at 24.5 meters, is the highest and most spectacular waterfall in the national park.",
        "The name 'Una' is said to have come from Roman soldiers who described the river's beauty as 'the one and only' (una).",
        "The park area contains numerous archaeological sites, including Roman ruins and medieval fortresses.",
        "The Unac River disappears into a deep karst canyon before flowing into the Una.",
        "The park is a biodiversity hotspot, home to rare species like the lynx and brown bear.",
        "The Martin Brod waterfalls are a complex of numerous cascades and channels stretching over 800 meters.",
        "The park protects one of the largest populations of the endangered Huchen (Danube Salmon) in the world.",
        "The park is part of the larger Dinaric Alps ecosystem."
      ]
    }, image: "/poi-images/ba-una.webp"},
  {
    id: "ba-sutjeska",
    type: "landmark",
    name: { de: "Nationalpark Sutjeska", hu: "Sutjeska Nemzeti Park", ro: "Parcul Național Sutjeska", en: "Sutjeska National Park" },
    description: {
      de: "Der älteste Nationalpark Bosniens, Heimat des Urwalds Perućica und des Maglić.",
      hu: "Bosznia legrégebbi nemzeti parkja, a Perućica őserdő és a Maglić hegy otthona.",
      ro: "Cel mai vechi parc național din Bosnia, adăpostind pădurea primordială Perućica și muntele Maglić.",
      en: "Bosnia's oldest national park, home to the Perućica primeval forest and Mount Maglić."
    },
    coords: [18.6872, 43.3444],
    parent: "BA-003",
    descriptionAdvanced: {
      de: "Der Nationalpark Sutjeska ist der älteste und größte Nationalpark in Bosnien und Herzegowina, gegründet 1962. Er schützt eine der wildesten und ursprünglichsten Berglandschaften Europas. Im Park befindet sich der Perućica, einer der letzten Urwälder Europas, sowie der Maglić, mit 2.386 Metern der höchste Gipfel des Landes. Der Park ist auch ein Ort von großer historischer Bedeutung, da hier 1943 die entscheidende Schlacht an der Sutjeska im Zweiten Weltkrieg stattfand. Ein monumentales Denkmal im Tal der Helden erinnert an die gefallenen Partisanen. Der Park bietet unberührte Natur, tiefe Schluchten, kristallklare Bergseen und eine reiche Tierwelt.",
      hu: "",
      ro: "Parcul Național Sutjeska este cel mai vechi și cel mai mare parc național din Bosnia și Herțegovina, fondat în 1962. Protejează unul dintre cele mai sălbatice și mai originale peisaje montane din Europa. În parc se află Perućica, una dintre ultimele păduri virgine din Europa, precum și Maglić, cel mai înalt vârf din țară, cu 2.386 de metri. Parcul are și o mare importanță istorică, aici având loc în 1943 bătălia decisivă de la Sutjeska din Al Doilea Război Mondial. Un monument grandios în Valea Eroilor comemorează partizanii căzuți. Parcul oferă natură neatinsă, canioane adânci, lacuri montane cristaline și o faună bogată.",
      en: "Sutjeska National Park is the oldest and largest national park in Bosnia and Herzegovina, founded in 1962. It protects one of Europe's wildest and most pristine mountain landscapes. The park contains Perućica, one of the last primeval forests in Europe, as well as Maglić, the country's highest peak at 2,386 meters. The park is also a place of great historical significance, as the decisive Battle of the Sutjeska took place here in 1943 during World War II. A monumental memorial in the Valley of Heroes commemorates the fallen partisans. The park offers untouched nature, deep canyons, crystal-clear mountain lakes, and rich wildlife. History K9 - World War II in the Balkans."
    },
    factsAdvanced: {
      de: [
        "Der Perućica-Urwald ist seit 1954 ein streng geschütztes Naturreservat.",
        "Im Park befindet sich der 75 Meter hohe Skakavac-Wasserfall.",
        "Der Maglić, der höchste Berg des Landes, liegt direkt an der Grenze zu Montenegro.",
        "Das 'Tal der Helden' beherbergt ein monumentales Denkmal für die Schlacht an der Sutjeska.",
        "Der Park ist Heimat für Braunbären, Wölfe, Gämsen und über 300 Vogelarten.",
        "Der Trnovačko-See, bekannt für seine Herzform, liegt direkt außerhalb der Parkgrenzen, ist aber ein beliebtes Wanderziel."
      ],
      hu: [],
      ro: [
        "Pădurea virgină Perućica este o rezervație naturală strict protejată din 1954.",
        "În parc se află cascada Skakavac, înaltă de 75 de metri.",
        "Maglić, cel mai înalt munte din țară, se află chiar la granița cu Muntenegru.",
        "\\\"Valea Eroilor\\\" găzduiește un monument grandios dedicat Bătăliei de la Sutjeska.",
        "Parcul este habitat pentru urși bruni, lupi, capre negre și peste 300 de specii de păsări.",
        "Lacul Trnovačko, cunoscut pentru forma sa de inimă, se află chiar în afara limitelor parcului, dar este o destinație populară pentru drumeții."
      ],
      en: [
        "The Perućica primeval forest has been a strictly protected nature reserve since 1954.",
        "The park contains the 75-meter high Skakavac Waterfall.",
        "Mount Maglić, the country's highest mountain, is located right on the border with Montenegro.",
        "The 'Valley of Heroes' houses a monumental memorial to the Battle of the Sutjeska.",
        "The park is home to brown bears, wolves, chamois, and over 300 species of birds.",
        "Trnovačko Lake, known for its heart shape, is just outside the park's borders but is a popular hiking destination.",
        "Some trees in Perućica are over 300 years old.",
        "The monumental memorial consists of two massive, wing-like stone slabs."
      ]
    }, image: "/poi-images/ba-sutjeska.webp"},
  {
    id: "ba-pliva",
    type: "landmark",
    name: { de: "Pliva-Seen", hu: "Pliva-tavak", ro: "Lacurile Pliva", en: "Pliva Lakes" },
    description: {
      de: "Zwei Seen in der Nähe von Jajce, bekannt für ihre traditionellen hölzernen Wassermühlen.",
      hu: "Két tó Jajca közelében, amelyek hagyományos fa vízimalmaikról ismertek.",
      ro: "Două lacuri lângă Jajce, cunoscute pentru morile tradiționale de apă din lemn.",
      en: "Two lakes near Jajce, known for their traditional wooden watermills."
    },
    coords: [17.2289, 44.3486],
    parent: "BA-013",
    descriptionAdvanced: {
      de: "Die Pliva-Seen, der Große und der Kleine Pliva-See, liegen in unmittelbarer Nähe der Stadt Jajce. Sie sind bekannt für ihre ruhige Schönheit und die einzigartigen hölzernen Wassermühlen, die zwischen den beiden Seen auf Tuffsteinbarrieren errichtet wurden. Diese kleinen Mühlen aus der Zeit des österreichisch-ungarischen Kaiserreichs dienten einst den örtlichen Bauern zum Mahlen von Getreide. Heute sind sie ein nationales Denkmal und eine beliebte atracție turistică. Die Seen selbst sind ideal für Kajakfahren, Kanufahren, Angeln und Entspannung in der Natur.",
      hu: "",
      ro: "Lacurile Pliva, Lacul Mare și Lacul Mic, sunt situate în imediata apropiere a orașului Jajce. Sunt cunoscute pentru frumusețea lor liniștită și pentru morile de apă unice din lemn, construite pe bariere de tuf între cele două lacuri. Aceste mori mici, datând din perioada Imperiului Austro-Ungar, serveau odinioară fermierilor locali pentru măcinarea cerealelor. Astăzi, ele sunt un monument național și o atracție turistică populară. Lacurile în sine sunt ideale pentru caiac-canoe, pescuit și relaxare în natură.",
      en: "The Pliva Lakes, Great and Small Pliva Lake, are located in the immediate vicinity of the city of Jajce. They are known for their serene beauty and the unique wooden watermills built on tufa barriers between the two lakes. These small mills from the time of the Austro-Hungarian Empire once served local farmers for grinding grain. Today, they are a national monument and a popular tourist attraction. The lakes themselves are ideal for kayaking, canoeing, fishing, and relaxing in nature. Technology K6 - Simple Machines and Water Power."
    },
    factsAdvanced: {
      de: [
        "Die Wassermühlen stammen aus der österreichisch-ungarischen Zeit und sind über 100 Jahre alt.",
        "Es gab ursprünglich etwa 24 Mühlen, von denen die meisten restauriert wurden.",
        "Der Große Pliva-See ist etwa 3,3 km lang und wird für internationale Kajak- und Kanuwettbewerbe genutzt.",
        "Die Seen entstanden durch die natürliche Aufstauung des Flusses Pliva durch Tuffsteinablagerungen.",
        "Die Mühlen sind auf kleinen Tuffinseln zwischen den Seen gebaut.",
        "Die Seen sind reich an Fisch, insbesondere an Forellen und Äschen."
      ],
      hu: [],
      ro: [
        "Morile de apă datează din perioada austro-ungară și au peste 100 de ani.",
        "Inițial au existat aproximativ 24 de mori, majoritatea fiind restaurate.",
        "Lacul Mare Pliva are o lungime de aproximativ 3,3 km și este folosit pentru competiții internaționale de caiac-canoe.",
        "Lacurile s-au format prin bararea naturală a râului Pliva de către depozite de tuf.",
        "Morile sunt construite pe mici insule de tuf între lacuri.",
        "Lacurile sunt bogate în pește, în special păstrăv și lipan."
      ],
      en: [
        "The watermills date back to the Austro-Hungarian period and are over 100 years old.",
        "There were originally about 24 mills, most of which have been restored.",
        "The Great Pliva Lake is about 3.3 km long and is used for international kayaking and canoeing competitions.",
        "The lakes were formed by the natural damming of the Pliva River by tufa deposits.",
        "The mills are built on small tufa islands between the lakes.",
        "The lakes are rich in fish, especially trout and grayling.",
        "The complex of mills is often referred to as 'Mlinčići'.",
        "The water levels of the lakes are regulated for a nearby hydroelectric power plant."
      ]
    }, image: "/poi-images/ba-pliva.webp"},
  {
    id: "ba-jahorina",
    type: "landmark",
    name: { de: "Jahorina", hu: "Jahorina", ro: "Jahorina", en: "Jahorina" },
    description: {
      de: "Ein Berg in der Nähe von Sarajevo, bekannt als Austragungsort der Olympischen Winterspiele 1984.",
      hu: "Szarajevó melletti hegy, amely az 1984-es téli olimpia helyszíneként ismert.",
      ro: "Un munte lângă Sarajevo, cunoscut ca gazdă a Jocurilor Olimpice de Iarnă din 1984.",
      en: "A mountain near Sarajevo, known for hosting the 1984 Winter Olympics."
    },
    coords: [18.5636, 43.7381],
    parent: "BA-016",
    descriptionAdvanced: {
      de: "Der Berg Jahorina ist Teil der Dinarischen Alpen und eines der größten und modernsten Skigebiete auf dem Balkan. Er erlangte internationale Bekanntheit als Austragungsort der alpinen Skiwettbewerbe der Frauen bei den Olympischen Winterspielen 1984 in Sarajevo. Mit über 40 Kilometern Pisten unterschiedlicher Schwierigkeitsgrade, modernen Liften und Beschneiungsanlagen zieht Jahorina Wintersportler aus ganz Europa an. Im Sommer verwandelt sich der Berg in ein beliebtes Ziel für Wanderer, Mountainbiker und Naturliebhaber, die die kühle Bergluft und die Panoramablicke genießen.",
      hu: "",
      ro: "Muntele Jahorina face parte din Alpii Dinarici și este una dintre cele mai mari și mai moderne stațiuni de schi din Balcani. A devenit cunoscut la nivel internațional ca gazdă a competițiilor de schi alpin feminin la Jocurile Olimpice de iarnă din 1984 de la Sarajevo. Cu peste 40 de kilometri de pârtii de diferite dificultăți, teleschiuri moderne și instalații de zăpadă artificială, Jahorina atrage sportivi de iarnă din toată Europa. Vara, muntele se transformă într-o destinație populară pentru drumeți, cicliști montani și iubitori de natură care se bucură de aerul răcoros de munte și de priveliștile panoramice.",
      en: "Mount Jahorina is part of the Dinaric Alps and one of the largest and most modern ski resorts in the Balkans. It gained international fame as the venue for the women's alpine skiing events at the 1984 Winter Olympics in Sarajevo. With over 40 kilometers of slopes of varying difficulty, modern lifts, and snowmaking systems, Jahorina attracts winter sports enthusiasts from all over Europe. In summer, the mountain transforms into a popular destination for hikers, mountain bikers, and nature lovers who enjoy the cool mountain air and panoramic views. Physical Education K8 - Winter Sports."
    },
    factsAdvanced: {
      de: [
        "Während der Olympischen Winterspiele 1984 fanden hier die Wettbewerbe im Riesenslalom, Slalom und in der Abfahrt der Frauen statt.",
        "Der höchste Gipfel der Jahorina ist der Ogorjelica mit 1.916 Metern.",
        "Das Skigebiet verfügt über moderne Gondel- und Sessellifte.",
        "Jahorina liegt nur etwa 30 Kilometer von der Hauptstadt Sarajevo entfernt.",
        "Die durchschnittliche Schneedecke beträgt von Dezember bis März über 100 cm.",
        "Der Berg ist auch für seine endemische Flora bekannt."
      ],
      hu: [],
      ro: [
        "În timpul Jocurilor Olimpice de iarnă din 1984, aici au avut loc competițiile feminine de slalom uriaș, slalom și coborâre.",
        "Cel mai înalt vârf al Jahorinei este Ogorjelica, cu 1.916 metri.",
        "Stațiunea de schi dispune de telegondole și telescaune moderne.",
        "Jahorina se află la doar aproximativ 30 de kilometri de capitala Sarajevo.",
        "Stratul mediu de zăpadă este de peste 100 cm din decembrie până în martie.",
        "Muntele este, de asemenea, cunoscut pentru flora sa endemică."
      ],
      en: [
        "During the 1984 Winter Olympics, the women's giant slalom, slalom, and downhill competitions were held here.",
        "The highest peak of Jahorina is Ogorjelica at 1,916 meters.",
        "The ski resort has modern gondolas and chairlifts.",
        "Jahorina is located only about 30 kilometers from the capital, Sarajevo.",
        "The average snow depth from December to March is over 100 cm.",
        "The mountain is also known for its endemic flora, including a specific type of maple.",
        "The ski resort is one of the most affordable in Europe.",
        "Many of the Olympic facilities were damaged during the war but have since been rebuilt and modernized."
      ]
    }, image: "/poi-images/ba-jahorina.webp"},
  {
    id: "ba-medjugorje",
    type: "landmark",
    name: { de: "Međugorje", hu: "Međugorje", ro: "Međugorje", en: "Medjugorje" },
    description: {
      de: "Ein bedeutender katholischer Wallfahrtsort aufgrund von Marienerscheinungen.",
      hu: "Jelentős katolikus zarándokhely a Mária-jelenések miatt.",
      ro: "Un loc de pelerinaj catolic major, faimos pentru aparițiile Fecioarei Maria.",
      en: "A major Catholic pilgrimage site famous for apparitions of the Virgin Mary."
    },
    coords: [17.6756, 43.1908],
    parent: "BA-011",
    descriptionAdvanced: {
      de: "Međugorje ist seit 1981 zu einem der bekanntesten katholischen Wallfahrtsorte der Welt geworden. An diesem Datum berichteten sechs Jugendliche von Erscheinungen der Jungfrau Maria auf dem Erscheinungsberg (Podbrdo). Obwohl der Vatikan die Erscheinungen noch nicht offiziell anerkannt hat, zieht der Ort jährlich Millionen von Pilgern an. Zentrale Punkte der Wallfahrt sind die St.-Jakobus-Kirche, der Erscheinungsberg und der Kreuzberg (Križevac). Die Atmosphäre in Međugorje ist von Gebet und Spiritualität geprägt. Der Ort hat sich von einem armen Bauerndorf zu einem Zentrum mit zahlreichen Hotels und religiösen Geschäften entwickelt.",
      hu: "",
      ro: "Međugorje a devenit unul dintre cele mai faimoase locuri de pelerinaj catolic din lume începând cu 1981. La acea dată, șase tineri au raportat apariții ale Fecioarei Maria pe Dealul Aparițiilor (Podbrdo). Deși Vaticanul nu a recunoscut încă oficial aparițiile, locul atrage milioane de pelerini anual. Punctele centrale ale pelerinajului sunt Biserica Sf. Iacob, Dealul Aparițiilor și Dealul Crucii (Križevac). Atmosfera din Međugorje este una de rugăciune și spiritualitate. Localitatea s-a transformat dintr-un sat sărac de fermieri într-un centru cu numeroase hoteluri și magazine cu articole religioase.",
      en: "Medjugorje has become one of the most famous Catholic pilgrimage sites in the world since 1981. On that date, six young people reported apparitions of the Virgin Mary on Apparition Hill (Podbrdo). Although the Vatican has not yet officially recognized the apparitions, the site attracts millions of pilgrims annually. Central points of the pilgrimage are the Church of St. James, Apparition Hill, and Cross Mountain (Križevac). The atmosphere in Medjugorje is one of prayer and spirituality. The town has transformed from a poor farming village into a center with numerous hotels and religious shops. Religious Studies K9 - Modern Pilgrimages."
    },
    factsAdvanced: {
      de: [
        "Die angeblichen Erscheinungen der Jungfrau Maria begannen am 24. Juni 1981.",
        "Der Vatikan hat die übernatürliche Natur der Erscheinungen nicht bestätigt, aber seit 2019 offizielle Pilgerfahrten erlaubt.",
        "Der Kreuzberg (Križevac) wurde 1934 mit einem großen Betonkreuz zum Gedenken an 1900 Jahre seit Jesu Tod errichtet.",
        "Jährlich besuchen schätzungsweise über eine Million Pilger den Ort.",
        "Der Name 'Međugorje' bedeutet 'zwischen den Bergen'.",
        "Die Pfarrei wird von Franziskanermönchen betreut."
      ],
      hu: [],
      ro: [
        "Pretinsele apariții ale Fecioarei Maria au început la 24 iunie 1981.",
        "Vaticanul nu a confirmat natura supranaturală a aparițiilor, dar a permis pelerinaje oficiale din 2019.",
        "Dealul Crucii (Križevac) a fost ridicat în 1934 cu o cruce mare de beton pentru a comemora 1900 de ani de la moartea lui Iisus.",
        "Se estimează că peste un milion de pelerini vizitează anual localitatea.",
        "Numele 'Međugorje' înseamnă 'între munți'.",
        "Parohia este administrată de călugări franciscani."
      ],
      en: [
        "The alleged apparitions of the Virgin Mary began on June 24, 1981.",
        "The Vatican has not confirmed the supernatural nature of the apparitions but has authorized official pilgrimages since 2019.",
        "Cross Mountain (Križevac) was erected in 1934 with a large concrete cross to commemorate 1900 years since the death of Jesus.",
        "An estimated one million pilgrims visit the site annually.",
        "The name 'Međugorje' means 'between the mountains'.",
        "The parish is administered by Franciscan friars.",
        "The visionaries claim to still receive messages from the Virgin Mary.",
        "An international youth festival is held here every summer, attracting tens of thousands of young people."
      ]
    }, image: "/poi-images/ba-medjugorje.webp"},
  {
    id: "ba-film-festival",
    type: "landmark",
    name: { de: "Sarajevo Film Festival", hu: "Szarajevói Filmfesztivál", ro: "Festivalul de Film de la Sarajevo", en: "Sarajevo Film Festival" },
    description: {
      de: "Das wichtigste und größte Filmfestival auf dem Balkan.",
      hu: "A Balkán legfontosabb és legnagyobb filmfesztiválja.",
      ro: "Cel mai important și cel mai mare festival de film din Balcani.",
      en: "The premier and largest film festival in the Balkans."
    },
    coords: [18.4135, 43.8560],
    parent: "BA-017",
    descriptionAdvanced: {
      de: "Das Sarajevo Film Festival wurde 1995 während der Belagerung der Stadt ins Leben gerufen, als ein Akt des kulturellen Widerstands und des Trotzes. Seitdem hat es sich zum führenden Filmfestival in Südosteuropa entwickelt und zieht jedes Jahr im August internationale Stars und Filmemacher an. Das Festival hat sich darauf spezialisiert, Filme und Talente aus der Region zu fördern und zu entdecken. Das Hauptprogramm findet im Nationaltheater statt, aber Vorführungen werden in der ganzen Stadt, einschließlich eines großen Freiluftkinos, gezeigt. Das 'Herz von Sarajevo' ist der Hauptpreis des Festivals.",
      hu: "",
      ro: "Festivalul de Film de la Sarajevo a fost lansat în 1995, în timpul asediului orașului, ca un act de rezistență culturală și sfidare. De atunci, a devenit cel mai important festival de film din Europa de Sud-Est, atrăgând vedete internaționale și cineaști în fiecare an, în luna august. Festivalul este specializat în promovarea și descoperirea de filme și talente din regiune. Programul principal are loc la Teatrul Național, dar proiecțiile se desfășoară în tot orașul, inclusiv într-un mare cinematograf în aer liber. 'Inima orașului Sarajevo' este premiul principal al festivalului.",
      en: "The Sarajevo Film Festival was launched in 1995 during the siege of the city, as an act of cultural resistance and defiance. It has since become the leading film festival in Southeast Europe, attracting international stars and filmmakers every August. The festival specializes in promoting and discovering films and talent from the region. The main program takes place at the National Theatre, but screenings are held throughout the city, including at a large open-air cinema. The 'Heart of Sarajevo' is the festival's main award. Arts & Culture K9 - Film and Society."
    },
    factsAdvanced: {
      de: [
        "Das erste Festival fand 1995 statt, als die Stadt noch unter Belagerung stand.",
        "Es zieht jährlich über 100.000 Besucher an.",
        "Viele internationale Stars wie Robert De Niro, Angelina Jolie und Brad Pitt haben das Festival besucht.",
        "Das Festival ist eine wichtige Plattform für Filmemacher aus Südosteuropa.",
        "Der Hauptpreis, das 'Herz von Sarajevo', wurde vom französischen Designer agnès b. entworfen.",
        "Das Festival hat maßgeblich zur Wiederbelebung des kulturellen Lebens in Sarajevo nach dem Krieg beigetragen."
      ],
      hu: [],
      ro: [
        "Primul festival a avut loc în 1995, când orașul era încă sub asediu.",
        "Atrage anual peste 100.000 de vizitatori.",
        "Multe vedete internaționale, precum Robert De Niro, Angelina Jolie și Brad Pitt, au vizitat festivalul.",
        "Festivalul este o platformă importantă pentru cineaștii din Europa de Sud-Est.",
        "Premiul principal, 'Inima orașului Sarajevo', a fost proiectat de designerul francez agnès b.",
        "Festivalul a contribuit în mod semnificativ la revitalizarea vieții culturale din Sarajevo după război."
      ],
      en: [
        "The first festival was held in 1995, while the city was still under siege.",
        "It attracts over 100,000 visitors annually.",
        "Many international stars such as Robert De Niro, Angelina Jolie, and Brad Pitt have attended the festival.",
        "The festival is a major platform for filmmakers from Southeast Europe.",
        "The main award, the 'Heart of Sarajevo,' was designed by French designer agnès b.",
        "The festival has been instrumental in reviving cultural life in post-war Sarajevo.",
        "Its 'Talents Sarajevo' program is a networking and training platform for emerging film professionals.",
        "The open-air cinema can seat up to 3,000 people."
      ]
    }, image: "/poi-images/ba-film-festival.webp"},
  {
    id: "ba-blidinje",
    type: "landmark",
    name: { de: "Naturpark Blidinje", hu: "Blidinje Natúrpark", ro: "Parcul Natural Blidinje", en: "Blidinje Nature Park" },
    description: {
      de: "Ein weites Gebirgsplateau mit reichhaltiger Flora und Fauna sowie stećci (historischen Grabsteinen).",
      hu: "Hatalmas hegyi fennsík gazdag növény- és állatvilággal, valamint stećci-kel (történelmi sírkövekkel).",
      ro: "Un vast platou montan cu floră și faună bogată, și stećci (pietre funerare istorice).",
      en: "A vast mountain plateau featuring rich flora and fauna, and stećci (historic tombstones)."
    },
    coords: [17.5855, 43.6064],
    parent: "BA-011",
    descriptionAdvanced: {
      de: "Der Naturpark Blidinje ist eine einzigartige Hochebene, umgeben von den hohen Gipfeln der Berge Čvrsnica und Vran. Der Park wurde 1995 gegründet, um die unberührte Natur, die geomorphologischen Besonderheiten und die reiche Kulturgeschichte zu schützen. Im Zentrum des Parks liegt der Blidinje-See, ein Gletschersee. Der Park ist bekannt für seine endemische Flora, insbesondere die bosnische Kiefer (Pinus heldreichii var. leucodermis). Ein weiteres wichtiges Merkmal sind die zahlreichen mittelalterlichen Grabsteine, bekannt als 'stećci', die an mehreren Standorten im Park verstreut sind.",
      hu: "",
      ro: "Parcul Natural Blidinje este un platou înalt unic, înconjurat de vârfurile înalte ale munților Čvrsnica și Vran. Parcul a fost înființat în 1995 pentru a proteja natura neatinsă, particularitățile geomorfologice și bogata istorie culturală. În centrul parcului se află Lacul Blidinje, un lac glaciar. Parcul este cunoscut pentru flora sa endemică, în special pentru pinul bosniac (Pinus heldreichii var. leucodermis). O altă caracteristică importantă o reprezintă numeroasele pietre funerare medievale, cunoscute sub numele de 'stećci', care sunt împrăștiate în mai multe locații din parc.",
      en: "Blidinje Nature Park is a unique high plateau surrounded by the high peaks of the Čvrsnica and Vran mountains. The park was founded in 1995 to protect the untouched nature, geomorphological features, and rich cultural history. In the center of the park lies Blidinje Lake, a glacial lake. The park is known for its endemic flora, especially the Bosnian pine (Pinus heldreichii var. leucodermis). Another important feature is the numerous medieval tombstones, known as 'stećci,' scattered throughout several locations in the park. Biology K7 - Mountain Ecosystems."
    },
    factsAdvanced: {
      de: [
        "Der Park wurde 1995 zum Schutz der Natur und des Kulturerbes gegründet.",
        "Die Nekropole von Dugo Polje mit ihren 150 'stećci' ist ein nationales Denkmal.",
        "Die Hajdučka Republika Mijata Tomića, eine humorvolle Mikronation, wurde innerhalb des Parks ausgerufen.",
        "Der Masna Luka ist ein besonderes Waldreservat innerhalb des Parks.",
        "Der Blidinje-See ist der größte Bergsee in Bosnien und Herzegowina.",
        "Die bosnische Kiefer ist ein Symbol des Parks und bildet an den Hängen der Čvrsnica dichte Wälder."
      ],
      hu: [],
      ro: [
        "Parcul a fost înființat în 1995 pentru a proteja natura și patrimoniul cultural.",
        "Necropola de la Dugo Polje, cu cele 150 de 'stećci' ale sale, este un monument național.",
        "Hajdučka Republika Mijata Tomića, o micronațiune umoristică, a fost proclamată în interiorul parcului.",
        "Masna Luka este o rezervație forestieră specială în cadrul parcului.",
        "Lacul Blidinje este cel mai mare lac montan din Bosnia și Herțegovina.",
        "Pinul bosniac este un simbol al parcului și formează păduri dese pe versanții muntelui Čvrsnica."
      ],
      en: [
        "The park was established in 1995 to protect nature and cultural heritage.",
        "The Dugo Polje necropolis with its 150 'stećci' is a national monument.",
        "The Hajdučka Republika Mijata Tomića, a humorous micronation, was proclaimed within the park.",
        "Masna Luka is a special forest reserve within the park.",
        "Blidinje Lake is the largest mountain lake in Bosnia and Herzegovina.",
        "The Bosnian pine is a symbol of the park and forms dense forests on the slopes of Čvrsnica mountain.",
        "The park is a popular destination for hiking, skiing, and alpinism.",
        "Diva Grabovica, a canyon within the park, is a challenging destination for climbers."
      ]
    }, image: "/poi-images/ba-blidinje.webp"},
  {
    id: "ba-trebinje",
    type: "city",
    name: { de: "Trebinje", hu: "Trebinje", ro: "Trebinje", en: "Trebinje" },
    description: {
      de: "Die südlichste Stadt in Bosnien und Herzegowina, bekannt für ihr sonniges Klima und Weinbau.",
      hu: "Bosznia-Hercegovina legdélibb városa, amely napos éghajlatáról és borászatáról ismert.",
      ro: "Cel mai sudic oraș din Bosnia și Herțegovina, cunoscut pentru clima sa însorită și viticultură.",
      en: "The southernmost city in Bosnia and Herzegovina, known for its sunny climate and winemaking."
    },
    coords: [18.3436, 42.7114],
    parent: "BA-002",
    descriptionAdvanced: {
      de: "Trebinje, die Stadt der Sonne und des Weins, ist die südlichste Stadt des Landes. Sie liegt am Fluss Trebišnjica und zeichnet sich durch ein mediterranes Flair aus. Die malerische Altstadt ist von einer Stadtmauer umgeben und beherbergt die Osman-Paša-Moschee und eine katholische Kathedrale. Über der Stadt thront der Hügel Crkvina mit dem Kloster Hercegovačka Gračanica, das eine exakte Kopie des gleichnamigen Klosters im Kosovo ist und einen atemberaubenden Blick auf die Stadt und das Tal bietet. Die Region ist berühmt für ihre Weinkeller und die autochthonen Rebsorten Žilavka und Vranac.",
      hu: "",
      ro: "Trebinje, orașul soarelui și al vinului, este cel mai sudic oraș din țară. Este situat pe râul Trebišnjica și se caracterizează printr-o atmosferă mediteraneană. Centrul vechi pitoresc este înconjurat de un zid de apărare și găzduiește Moscheea Osman Paša și o catedrală catolică. Deasupra orașului se înalță dealul Crkvina cu Mănăstirea Hercegovačka Gračanica, o copie exactă a mănăstirii omonime din Kosovo, oferind o priveliște uluitoare asupra orașului și a văii. Regiunea este renumită pentru cramele sale și pentru soiurile autohtone de struguri Žilavka și Vranac.",
      en: "Trebinje, the city of sun and wine, is the southernmost city in the country. It is situated on the Trebišnjica river and is characterized by a Mediterranean flair. The picturesque old town is surrounded by a city wall and houses the Osman-Paša Mosque and a Catholic cathedral. Above the city, Crkvina hill is home to the Hercegovačka Gračanica monastery, an exact copy of the monastery of the same name in Kosovo, offering a breathtaking view of the city and valley. The region is famous for its wine cellars and the indigenous grape varieties Žilavka and Vranac. Geography K8 - Viticulture and Climate."
    },
    factsAdvanced: {
      de: [
        "Trebinje hat durchschnittlich 260 Sonnentage im Jahr.",
        "Der Fluss Trebišnjica war einst der längste unterirdische Fluss Europas, bevor er reguliert wurde.",
        "Die Arslanagić-Brücke, ein Meisterwerk osmanischer Baukunst, wurde Stein für Stein an ihren heutigen Standort versetzt, um sie vor einem Stausee zu retten.",
        "Das Kloster Hercegovačka Gračanica wurde 2000 als Erfüllung des letzten Wunsches des Dichters Jovan Dučić erbaut.",
        "Unter der Altstadt fließt ein Teil der Trebišnjica unterirdisch.",
        "In der Nähe befindet sich das serbisch-orthodoxe Kloster Tvrdoš aus dem 15. Jahrhundert, das für seine Weinproduktion bekannt ist."
      ],
      hu: [],
      ro: [
        "Trebinje are în medie 260 de zile însorite pe an.",
        "Râul Trebišnjica a fost odată cel mai lung râu subteran din Europa, înainte de a fi regularizat.",
        "Podul Arslanagić, o capodoperă a arhitecturii otomane, a fost mutat piatră cu piatră pe locația sa actuală pentru a-l salva de un lac de acumulare.",
        "Mănăstirea Hercegovačka Gračanica a fost construită în anul 2000 ca împlinire a ultimei dorințe a poetului Jovan Dučić.",
        "O parte din râul Trebišnjica curge subteran pe sub orașul vechi.",
        "În apropiere se află mănăstirea ortodoxă sârbă Tvrdoš din secolul al XV-lea, renumită pentru producția sa de vin."
      ],
      en: [
        "Trebinje has an average of 260 sunny days per year.",
        "The Trebišnjica river was once the longest sinking river in Europe before it was regulated.",
        "The Arslanagić Bridge, a masterpiece of Ottoman architecture, was moved stone by stone to its current location to save it from a reservoir.",
        "The Hercegovačka Gračanica monastery was built in 2000 as the fulfillment of the last wish of poet Jovan Dučić.",
        "Part of the Trebišnjica river flows underground beneath the old town.",
        "The 15th-century Serbian Orthodox Tvrdoš Monastery, known for its wine production, is located nearby.",
        "The city is only 28 km from the famous city of Dubrovnik in Croatia.",
        "The city's old town is known as Kastel."
      ]
    }, image: "/poi-images/ba-trebinje.webp"},
  {
    id: "ba-vranduk",
    type: "landmark",
    name: { de: "Festung Vranduk", hu: "Vranduki vár", ro: "Cetatea Vranduk", en: "Vranduk Fortress" },
    description: {
      de: "Mittelalterliche Burg in der Nähe von Zenica, einst Sitz der bosnischen Könige.",
      hu: "Középkori vár Zenica közelében, egykor a bosnyák királyok székhelye.",
      ro: "Castel medieval lângă Zenica, odinioară sediul regilor bosniaci.",
      en: "Medieval castle near Zenica, once the seat of Bosnian kings."
    },
    coords: [17.9042, 44.2925],
    parent: "BA-014",
    descriptionAdvanced: {
      de: "Die Festung Vranduk, etwa 10 km von Zenica entfernt, ist eine der am besten erhaltenen mittelalterlichen Festungen in Bosnien. Sie liegt strategisch günstig in einer Schleife des Flusses Bosna und bewachte einst den wichtigen Handelsweg vom Pannonischen Becken zur Adria. Vranduk war eine königliche Burg und diente zeitweise als Sitz des bosnischen Königs Stjepan Tomaš. Innerhalb der Festungsmauern befindet sich eine kleine osmanische Moschee, die nach der Eroberung durch die Osmanen erbaut wurde. Heute ist die Festung ein Museum, das Einblicke in das mittelalterliche Leben in Bosnien bietet.",
      hu: "",
      ro: "Cetatea Vranduk, la aproximativ 10 km de Zenica, este una dintre cele mai bine conservate cetăți medievale din Bosnia. Este situată strategic într-o buclă a râului Bosna și păzea odinioară importanta rută comercială de la Bazinul Panonic la Marea Adriatică. Vranduk a fost un castel regal și a servit temporar ca reședință a regelui bosniac Stjepan Tomaš. În interiorul zidurilor cetății se află o mică moschee otomană, construită după cucerirea otomană. Astăzi, cetatea este un muzeu care oferă o perspectivă asupra vieții medievale din Bosnia.",
      en: "The Vranduk fortress, about 10 km from Zenica, is one of the best-preserved medieval fortresses in Bosnia. It is strategically located in a loop of the Bosna River and once guarded the important trade route from the Pannonian Basin to the Adriatic Sea. Vranduk was a royal castle and at times served as the seat of the Bosnian King Stjepan Tomaš. Within the fortress walls is a small Ottoman mosque, built after the Ottoman conquest. Today, the fortress is a museum that offers insights into medieval life in Bosnia. History K7 - Fortifications and Trade Routes."
    },
    factsAdvanced: {
      de: [
        "Vranduk wurde erstmals 1410 urkundlich erwähnt.",
        "Die Festung war der einzige Ort in Bosnien, der sich 1463 erfolgreich gegen die osmanische Invasion verteidigte, wenn auch nur vorübergehend.",
        "Innerhalb der Mauern befindet sich eine Moschee, die zu Ehren von Sultan Mehmed II, dem Eroberer, erbaut wurde.",
        "Die Mauern der Festung sind bis zu 3 Meter dick.",
        "Der Name 'Vranduk' leitet sich möglicherweise vom Wort 'vrata' (Tor) ab, was seine Rolle als 'Tor zu Bosnien' unterstreicht.",
        "Die Festung und das darunter liegende Dorf sind als Nationaldenkmal geschützt."
      ],
      hu: [],
      ro: [
        "Vranduk a fost menționat pentru prima dată într-un document în 1410.",
        "Cetatea a fost singurul loc din Bosnia care s-a apărat cu succes împotriva invaziei otomane în 1463, deși doar temporar.",
        "În interiorul zidurilor se află o moschee construită în onoarea sultanului Mahomed al II-lea Cuceritorul.",
        "Zidurile cetății au o grosime de până la 3 metri.",
        "Numele 'Vranduk' ar putea deriva de la cuvântul 'vrata' (poartă), subliniind rolul său de 'poartă a Bosniei'.",
        "Cetatea și satul de la poalele sale sunt protejate ca monument național."
      ],
      en: [
        "Vranduk was first mentioned in a document in 1410.",
        "The fortress was the only place in Bosnia that successfully defended against the Ottoman invasion in 1463, albeit temporarily.",
        "Within the walls is a mosque built in honor of Sultan Mehmed II the Conqueror.",
        "The walls of the fortress are up to 3 meters thick.",
        "The name 'Vranduk' may derive from the word 'vrata' (gate), highlighting its role as the 'gate of Bosnia'.",
        "The fortress and the village below are protected as a national monument.",
        "The fortress was also the seat of the Bosnian king Stjepan Tomašević.",
        "A small museum within the fortress displays medieval artifacts."
      ]
    }, image: "/poi-images/ba-vranduk.webp"},
  {
    id: "ba-hutovo-blato",
    type: "landmark",
    name: { de: "Naturpark Hutovo Blato", hu: "Hutovo Blato Natúrpark", ro: "Parcul Natural Hutovo Blato", en: "Hutovo Blato Nature Park" },
    description: {
      de: "Eines der wichtigsten Vogelschutzgebiete in Europa.",
      hu: "Európa egyik legfontosabb madárvédelmi területe.",
      ro: "Una dintre cele mai importante rezervații de păsări din Europa.",
      en: "One of the most important bird reserves in Europe."
    },
    coords: [17.7816, 43.0566],
    parent: "BA-001",
    descriptionAdvanced: {
      de: "Hutovo Blato ist ein einzigartiges Sumpfgebiet und Naturpark in der Herzegowina. Es besteht aus mehreren miteinander verbundenen Seen, die vom unterirdischen Flusssystem des Trebišnjica gespeist werden. Das Gebiet ist vor allem als eines der größten Winterquartiere für Zugvögel auf dem Balkan bekannt. Über 240 Vogelarten wurden hier registriert, was es zu einem Paradies für Ornithologen macht. Eine Bootsfahrt durch die schilfbewachsenen Kanäle bietet die Möglichkeit, die reiche Vogelwelt und die üppige Sumpfvegetation aus nächster Nähe zu erleben. Hutovo Blato ist ein wichtiges Feuchtgebiet von internationaler Bedeutung gemäß der Ramsar-Konvention.",
      hu: "",
      ro: "Hutovo Blato este o zonă umedă unică și un parc natural în Herțegovina. Este format din mai multe lacuri interconectate, alimentate de sistemul fluvial subteran al râului Trebišnjica. Zona este cunoscută în principal ca unul dintre cele mai mari cartiere de iernare pentru păsările migratoare din Balcani. Au fost înregistrate peste 240 de specii de păsări, ceea ce o face un paradis pentru ornitologi. O plimbare cu barca prin canalele acoperite de stuf oferă ocazia de a experimenta de aproape bogata avifaună și vegetația luxuriantă a mlaștinii. Hutovo Blato este o zonă umedă importantă de importanță internațională conform Convenției Ramsar.",
      en: "Hutovo Blato is a unique wetland and nature park in Herzegovina. It consists of several interconnected lakes fed by the underground river system of the Trebišnjica. The area is best known as one of the largest wintering grounds for migratory birds in the Balkans. Over 240 bird species have been recorded here, making it a paradise for ornithologists. A boat trip through the reed-lined channels offers the opportunity to experience the rich birdlife and lush marsh vegetation up close. Hutovo Blato is an important wetland of international importance under the Ramsar Convention. Biology K9 - Wetland Ecosystems and Bird Migration."
    },
    factsAdvanced: {
      de: [
        "Hutovo Blato ist eines der größten Vogelschutzgebiete in Südosteuropa.",
        "Das Gebiet liegt auf einem der vier Hauptzugwege für Vögel aus Nord- und Mitteleuropa nach Asien und Afrika.",
        "Es wurden über 240 Vogelarten und 163 Fischarten im Park dokumentiert.",
        "Das Sumpfgebiet wird durch den unterirdischen Fluss Trebišnjica gespeist.",
        "Seit 2001 ist es als Feuchtgebiet von internationaler Bedeutung nach der Ramsar-Konvention geschützt.",
        "Die durchschnittliche Tiefe der Seen beträgt nur 1-2 Meter."
      ],
      hu: [],
      ro: [
        "Hutovo Blato este una dintre cele mai mari rezervații ornitologice din sud-estul Europei.",
        "Zona este situată pe una dintre cele patru rute principale de migrație a păsărilor din nordul și centrul Europei către Asia și Africa.",
        "Au fost documentate peste 240 de specii de păsări și 163 de specii de pești în parc.",
        "Mlaștina este alimentată de râul subteran Trebišnjica.",
        "Din 2001, este protejată ca zonă umedă de importanță internațională în cadrul Convenției Ramsar.",
        "Adâncimea medie a lacurilor este de doar 1-2 metri."
      ],
      en: [
        "Hutovo Blato is one of the largest bird reserves in Southeast Europe.",
        "The area is located on one of the four major bird migration routes from Northern and Central Europe to Asia and Africa.",
        "Over 240 bird species and 163 fish species have been documented in the park.",
        "The marshland is fed by the underground Trebišnjica river.",
        "Since 2001, it has been protected as a wetland of international importance under the Ramsar Convention.",
        "The average depth of the lakes is only 1-2 meters.",
        "The park is home to a large population of eels.",
        "It is the only place in the country where you can see water lilies in their natural habitat."
      ]
    }, image: "/poi-images/ba-hutovo-blato.webp"},
  {
    id: "ba-doboj",
    type: "city",
    name: { de: "Doboj", hu: "Doboj", ro: "Doboj", en: "Doboj" },
    description: {
      de: "Wichtiger Verkehrsknotenpunkt und Standort einer beeindruckenden Burg aus dem 13. Jahrhundert.",
      hu: "Fontos közlekedési csomópont és egy lenyűgöző 13. századi vár helyszíne.",
      ro: "Nod de transport major și locația unui castel impresionant din secolul al XIII-lea.",
      en: "Major transportation hub and site of an impressive 13th-century castle."
    },
    coords: [18.0833, 44.7333],
    parent: "BA-006",
    descriptionAdvanced: {
      de: "Doboj ist ein strategisch wichtiger Verkehrsknotenpunkt im Norden von Bosnien und Herzegowina, am Zusammenfluss der Flüsse Bosna und Spreča. Die Stadt wird von einer imposanten mittelalterlichen Festung aus dem 13. Jahrhundert dominiert, die auf einem Hügel über der Stadt thront. Die Festung von Doboj bietet einen weiten Blick über die Region und ist Schauplatz zahlreicher kultureller Veranstaltungen. Die Stadt hat eine lange Geschichte als Handels- und Militärzentrum. 2014 wurde Doboj von einer katastrophalen Überschwemmung heimgesucht, hat sich aber seitdem wieder erholt.",
      hu: "Doboj stratégiailag fontos közlekedési csomópont Bosznia-Hercegovina északi részén, a Boszna és a Spreča folyók összefolyásánál. A város fölött egy impozáns, 13. századi középkori erődítmény emelkedik egy dombon. A doboji vár széles kilátást nyújt a régióra, és számos kulturális eseménynek ad otthont. A város hosszú múltra tekint vissza kereskedelmi és katonai központként. 2014-ben Dobojt katasztrofális árvíz sújtotta, de azóta helyreállt. Történelem K7 – Végvárrendszer a középkorban.",
      ro: "Doboj este un nod de transport important din punct de vedere strategic în nordul Bosniei și Herțegovinei, la confluența râurilor Bosna și Spreča. Orașul este dominat de o impunătoare cetate medievală din secolul al XIII-lea, care tronează pe un deal deasupra orașului. Cetatea Doboj oferă o vedere panoramică asupra regiunii și este scena a numeroase evenimente culturale. Orașul are o istorie lungă ca centru comercial și militar. În 2014, Doboj a fost lovit de o inundație catastrofală, dar de atunci și-a revenit.",
      en: "Doboj is a strategically important transport hub in the north of Bosnia and Herzegovina, at the confluence of the Bosna and Spreča rivers. The city is dominated by an imposing 13th-century medieval fortress that sits on a hill above the town. The Doboj Fortress offers a wide view of the region and is the scene of numerous cultural events. The city has a long history as a commercial and military center. In 2014, Doboj was hit by a catastrophic flood, but has since recovered. History K7 - The Border Fortress System in the Middle Ages."
    },
    factsAdvanced: {
      de: [
        "Die Festung von Doboj wurde im frühen 13. Jahrhundert erbaut und war eine der stärksten Festungen im mittelalterlichen Bosnien.",
        "Doboj ist ein wichtiger Eisenbahnknotenpunkt, der Sarajevo mit dem Norden des Landes und Europa verbindet.",
        "Unterhalb der Festung wurden Reste eines römischen Militärlagers (Castrum) gefunden.",
        "Die Stadt wurde bei der großen Überschwemmung im Mai 2014 fast vollständig überflutet.",
        "Der Name 'Doboj' wurde erstmals 1415 in einer Urkunde der Republik Dubrovnik erwähnt.",
        "Jedes Jahr im Juni findet auf der Festung ein Kultur- und Musikfestival statt."
      ],
      hu: [
        "A doboji várat a 13. század elején építették, és a középkori Bosznia egyik legerősebb erődítménye volt.",
        "Doboj fontos vasúti csomópont, amely összeköti Szarajevót az ország északi részével és Európával.",
        "A vár alatt egy római katonai tábor (castrum) maradványait találták meg.",
        "A várost a 2014. májusi nagy árvíz szinte teljesen elárasztotta.",
        "A 'Doboj' nevet először 1415-ben említik a Raguzai Köztársaság egyik oklevelében.",
        "Minden év júniusában kulturális és zenei fesztivált rendeznek a várban.",
        "A vár ma a város legfontosabb szimbóluma és turisztikai látványossága.",
        "A legenda szerint a vár neve a 'doba' (kor) szóból ered, utalva a különböző korok egymásra rétegződésére."
      ],
      ro: [
        "Cetatea Doboj a fost construită la începutul secolului al XIII-lea și a fost una dintre cele mai puternice cetăți din Bosnia medievală.",
        "Doboj este un nod feroviar important, care leagă Sarajevo de nordul țării și de Europa.",
        "Sub cetate au fost găsite rămășițele unui castru militar roman.",
        "Orașul a fost aproape complet inundat în timpul inundațiilor masive din mai 2014.",
        "Numele 'Doboj' a fost menționat pentru prima dată în 1415 într-o cartă a Republicii Dubrovnik.",
        "În fiecare an, în iunie, la cetate are loc un festival cultural și muzical."
      ],
      en: [
        "The Doboj fortress was built in the early 13th century and was one of the strongest fortresses in medieval Bosnia.",
        "Doboj is a major railway junction connecting Sarajevo with the north of the country and Europe.",
        "Remains of a Roman military camp (castrum) have been found below the fortress.",
        "The city was almost completely flooded during the great flood in May 2014.",
        "The name 'Doboj' was first mentioned in 1415 in a charter of the Republic of Dubrovnik.",
        "A cultural and music festival is held at the fortress every June.",
        "The fortress is today the most important symbol and tourist attraction of the city.",
        "According to legend, the name of the fortress comes from the word 'doba' (age), referring to the layering of different eras."
      ]
    }, image: "/poi-images/ba-doboj.webp"},
  {
    id: "ba-prijedor",
    type: "city",
    name: { de: "Prijedor", hu: "Prijedor", ro: "Prijedor", en: "Prijedor" },
    description: {
      de: "Eine der größten Städte in der Region Bosanska Krajina.",
      hu: "A Bosanska Krajina régió egyik legnagyobb városa.",
      ro: "Unul dintre cele mai mari orașe din regiunea Bosanska Krajina.",
      en: "One of the largest cities in the Bosanska Krajina region."
    },
    coords: [16.7140, 44.9799],
    parent: "BA-004",
    descriptionAdvanced: {
      de: "Prijedor liegt in der Region Bosanska Krajina im Nordwesten des Landes. Die Stadt ist ein wichtiges Wirtschafts- und Handelszentrum, das für seine Eisen- und Erzindustrie bekannt ist. Die Umgebung von Prijedor ist reich an Naturschätzen, insbesondere der Nationalpark Kozara, der sich in der Nähe befindet. Dieser Park ist nicht nur ein Naturerholungsgebiet, sondern auch ein Gedenkort für eine große Schlacht im Zweiten Weltkrieg. Die Stadt selbst hat eine charmante Hauptstraße mit Gebäuden aus der österreichisch-ungarischen Zeit. Der Fluss Sana fließt durch die Stadt und bietet Angel- und Freizeitmöglichkeiten.",
      hu: "Prijedor a Bosanska Krajina régióban, az ország északnyugati részén fekszik. A város fontos gazdasági és kereskedelmi központ, amely vas- és érciparáról ismert. Prijedor környéke gazdag természeti kincsekben, különösen a közeli Kozara Nemzeti Park. Ez a park nemcsak természeti üdülőhely, hanem egy nagy második világháborús csata emlékhelye is. Maga a város egy bájos főutcával rendelkezik, osztrák-magyar korabeli épületekkel. A Szana folyó áthalad a városon, horgászati és szabadidős lehetőségeket kínálva. Földrajz K8 – Ipari régiók Európában.",
      ro: "Prijedor este situat în regiunea Bosanska Krajina, în nord-vestul țării. Orașul este un important centru economic și comercial, cunoscut pentru industria sa de fier și minereuri. Împrejurimile orașului Prijedor sunt bogate în comori naturale, în special Parcul Național Kozara, situat în apropiere. Acest parc nu este doar o zonă de recreere naturală, ci și un loc comemorativ pentru o mare bătălie din Al Doilea Război Mondial. Orașul însuși are o stradă principală fermecătoare, cu clădiri din perioada austro-ungară. Râul Sana traversează orașul și oferă oportunități de pescuit și recreere.",
      en: "Prijedor is located in the Bosanska Krajina region in the northwest of the country. The city is an important economic and commercial center, known for its iron and ore industry. The surroundings of Prijedor are rich in natural treasures, especially the Kozara National Park, which is located nearby. This park is not only a natural recreation area, but also a memorial to a great battle in World War II. The city itself has a charming main street with buildings from the Austro-Hungarian period. The Sana River flows through the city and offers fishing and recreational opportunities. Geography K8 – Industrial Regions in Europe."
    },
    factsAdvanced: {
      de: [
        "In der Nähe von Prijedor befindet sich das Eisenerzbergwerk Ljubija, eines der größten in der Region.",
        "Der Nationalpark Kozara ist bekannt für sein monumentales Denkmal, das den Partisanenkämpfern des Zweiten Weltkriegs gewidmet ist.",
        "Die Stadt wurde während des Bosnienkrieges schwer getroffen und war Schauplatz berüchtigter Lager.",
        "Prijedor hat eine römische Vergangenheit; Mosaikböden einer Villa Rustica wurden in der Nähe entdeckt.",
        "Der Fluss Sana ist nach dem lateinischen Wort für 'gesund' benannt, was auf sein sauberes Wasser hinweist.",
        "Die Stadt ist bekannt für ihre Kunstszene und beherbergt eine Galerie mit Werken lokaler Künstler."
      ],
      hu: [
        "Prijedor közelében található a Ljubija vasércbánya, a régió egyik legnagyobbja.",
        "A Kozara Nemzeti Park híres monumentális emlékművéről, amelyet a második világháború partizánharcosainak szenteltek.",
        "A várost súlyosan érintette a boszniai háború, és hírhedt táborok helyszíne volt.",
        "Prijedornak római kori múltja van; egy villa rustica mozaikpadlóját fedezték fel a közelben.",
        "A Szana folyó a latin 'egészséges' szóról kapta a nevét, ami tiszta vizére utal.",
        "A város művészeti életéről ismert, és egy galériának ad otthont, ahol helyi művészek alkotásai láthatók.",
        "A városban található a Régi Mecset, amely az oszmán időkből származik.",
        "A Prijedor környéki Mrakovica-emlékmű a partizánok áldozatainak állít emléket."
      ],
      ro: [
        "În apropiere de Prijedor se află mina de minereu de fier Ljubija, una dintre cele mai mari din regiune.",
        "Parcul Național Kozara este cunoscut pentru monumentul său grandios, dedicat luptătorilor partizani din Al Doilea Război Mondial.",
        "Orașul a fost grav afectat în timpul războiului din Bosnia și a fost locația unor lagăre de tristă amintire.",
        "Prijedor are un trecut roman; podele de mozaic ale unei Villa Rustica au fost descoperite în apropiere.",
        "Râul Sana este numit după cuvântul latin pentru 'sănătos', indicând apa sa curată.",
        "Orașul este cunoscut pentru scena sa artistică și găzduiește o galerie cu lucrări ale artiștilor locali."
      ],
      en: [
        "Near Prijedor is the Ljubija iron ore mine, one of the largest in the region.",
        "Kozara National Park is famous for its monumental memorial dedicated to the Partisan fighters of World War II.",
        "The city was severely affected by the Bosnian War and was the site of notorious camps.",
        "Prijedor has a Roman past; mosaic floors of a villa rustica were discovered nearby.",
        "The Sana River is named after the Latin word for 'healthy,' indicating its clean water.",
        "The city is known for its art scene and hosts a gallery with works by local artists.",
        "The city contains the Old Mosque, which dates from the Ottoman period.",
        "The Mrakovica monument near Prijedor commemorates the victims of the partisans."
      ]
    }, image: "/poi-images/ba-prijedor.webp"},
  {
    id: "ba-lukomir",
    type: "landmark",
    name: { de: "Lukomir", hu: "Lukomir", ro: "Lukomir", en: "Lukomir" },
    description: {
      de: "Das höchste und isolierteste Dorf in Bosnien und Herzegowina, auf dem Berg Bjelašnica.",
      hu: "Bosznia-Hercegovina legmagasabban fekvő és legelszigeteltebb faluja a Bjelašnica-hegyen.",
      ro: "Cel mai înalt și mai izolat sat din Bosnia și Herțegovina, pe muntele Bjelašnica.",
      en: "The highest and most isolated village in Bosnia and Herzegovina, on Mount Bjelašnica."
    },
    coords: [18.1833, 43.6333],
    parent: "BA-017",
    descriptionAdvanced: {
      de: "Lukomir ist das höchstgelegene und abgelegenste Bergdorf in Bosnien und Herzegowina. Es liegt auf einer Höhe von fast 1.500 Metern am Rande des Rakitnica-Canyons auf dem Berg Bjelašnica. Das Dorf ist ein lebendiges Museum, in dem die traditionelle Lebensweise der bosnischen Hochlandhirten noch erhalten ist. Die Steinhäuser sind mit Schindeln aus Eichenholz gedeckt, und die Bewohner tragen oft handgefertigte Trachten. Aufgrund der rauen Winter ist das Dorf mehrere Monate im Jahr von der Außenwelt abgeschnitten. Ein Besuch in Lukomir bietet einen einzigartigen Einblick in eine vergangene Zeit und spektakuläre Ausblicke.",
      hu: "Lukomir Bosznia-Hercegovina legmagasabban fekvő és legtávolabbi hegyi faluja. Közel 1500 méteres magasságban fekszik a Rakitnica-kanyon szélén, a Bjelašnica-hegyen. A falu egy élő múzeum, ahol a bosnyák hegyvidéki pásztorok hagyományos életmódja még mindig megmaradt. A kőházakat tölgyfából készült zsindelyek borítják, a lakók pedig gyakran kézzel készített népviseletet hordanak. A zord telek miatt a falu évente több hónapig el van vágva a külvilágtól. Egy látogatás Lukomirban egyedülálló bepillantást nyújt egy letűnt korba és látványos kilátást kínál. Néprajz K6 – Hagyományos életmód a hegyvidéken.",
      ro: "Lukomir este cel mai înalt și mai izolat sat montan din Bosnia și Herțegovina. Este situat la o altitudine de aproape 1.500 de metri, la marginea canionului Rakitnica, pe muntele Bjelašnica. Satul este un muzeu viu unde s-a păstrat modul de viață tradițional al ciobanilor din zonele înalte bosniace. Casele de piatră sunt acoperite cu șindrilă de stejar, iar locuitorii poartă adesea costume populare lucrate manual. Din cauza iernilor aspre, satul este izolat de lumea exterioară timp de câteva luni pe an. O vizită la Lukomir oferă o perspectivă unică asupra unui timp trecut și priveliști spectaculoase.",
      en: "Lukomir is the highest and most remote mountain village in Bosnia and Herzegovina. It lies at an altitude of almost 1,500 meters on the edge of the Rakitnica canyon on Mount Bjelašnica. The village is a living museum where the traditional way of life of the Bosnian highland shepherds is still preserved. The stone houses are covered with oak shingles, and the inhabitants often wear handmade folk costumes. Due to the harsh winters, the village is cut off from the outside world for several months of the year. A visit to Lukomir offers a unique glimpse into a bygone era and spectacular views. Ethnography K6 - Traditional Lifestyles in Mountainous Regions."
    },
    factsAdvanced: {
      de: [
        "Lukomir liegt auf einer Höhe von 1.495 Metern.",
        "Das Dorf ist von Dezember bis April oft durch Schnee isoliert.",
        "Die traditionellen Steinhäuser mit Holzschindeldächern sind einzigartig in der Region.",
        "Die Bewohner leben von der Schafzucht und dem Verkauf von Wollprodukten.",
        "Am Rande des Dorfes befindet sich eine mittelalterliche Nekropole mit 'stećci'-Grabsteinen.",
        "Lukomir bietet einen atemberaubenden Blick auf den Rakitnica-Canyon, einen der tiefsten in Europa."
      ],
      hu: [
        "Lukomir 1495 méteres magasságban fekszik.",
        "A falut decembertől áprilisig gyakran elzárja a hó.",
        "A hagyományos kőházak zsindelyes tetővel egyedülállóak a régióban.",
        "A lakosok juhtenyésztésből és gyapjútermékek árusításából élnek.",
        "A falu szélén egy középkori nekropolisz található 'stećci' sírkövekkel.",
        "Lukomir lélegzetelállító kilátást nyújt a Rakitnica-kanyonra, Európa egyik legmélyebb kanyonjára.",
        "A faluban készült gyapjú zoknik, a 'priglavci', híresek a minőségükről.",
        "A falu megőrizte a több évszázados nomád pásztorkodás hagyományait."
      ],
      ro: [
        "Lukomir este situat la o altitudine de 1.495 de metri.",
        "Satul este adesea izolat de zăpadă din decembrie până în aprilie.",
        "Casele tradiționale de piatră cu acoperișuri de șindrilă de lemn sunt unice în regiune.",
        "Locuitorii trăiesc din creșterea oilor și din vânzarea produselor din lână.",
        "La marginea satului se află o necropolă medievală cu pietre funerare 'stećci'.",
        "Lukomir oferă o priveliște uluitoare asupra canionului Rakitnica, unul dintre cele mai adânci din Europa."
      ],
      en: [
        "Lukomir is located at an altitude of 1,495 meters.",
        "The village is often isolated by snow from December to April.",
        "The traditional stone houses with wooden shingle roofs are unique in the region.",
        "The inhabitants live from sheep farming and the sale of wool products.",
        "On the edge of the village is a medieval necropolis with 'stećci' tombstones.",
        "Lukomir offers a breathtaking view of the Rakitnica Canyon, one of the deepest in Europe.",
        "The woolen socks made in the village, the 'priglavci', are famous for their quality.",
        "The village has preserved the centuries-old traditions of nomadic pastoralism."
      ]
    }, image: "/poi-images/ba-lukomir.webp"},
  {
    id: "ba-tvrkos",
    type: "landmark",
    name: { de: "Kloster Tvrdoš", hu: "Tvrdoš kolostor", ro: "Mănăstirea Tvrdoš", en: "Tvrdoš Monastery" },
    description: {
      de: "Ein serbisch-orthodoxes Kloster aus dem 15. Jahrhundert nahe Trebinje, berühmt für seinen Wein.",
      hu: "Egy 15. századi szerb ortodox kolostor Trebinje közelében, amely boráról is híres.",
      ro: "O mănăstire ortodoxă sârbă din secolul al XV-lea lângă Trebinje, renumită pentru vinul său.",
      en: "A 15th-century Serbian Orthodox monastery near Trebinje, famous for its wine."
    },
    coords: [18.2885, 42.7161],
    parent: "BA-002",
    descriptionAdvanced: {
      de: "Das serbisch-orthodoxe Kloster Tvrdoš liegt malerisch auf den Felsen über dem rechten Ufer des Flusses Trebišnjica, nur wenige Kilometer von Trebinje entfernt. Das Kloster wurde im späten 15. Jahrhundert auf den Fundamenten einer römischen Kirche aus dem 4. Jahrhundert erbaut. Tvrdoš ist heute nicht nur ein wichtiges spirituelles Zentrum, sondern auch eines der bekanntesten Weingüter der Region. Die Mönche setzen hier eine jahrhundertealte Weinbautradition fort und produzieren preisgekrönte Weine, insbesondere aus den Rebsorten Vranac und Žilavka. Die alten Weinkeller können von Besuchern besichtigt werden.",
      hu: "A szerb ortodox Tvrdoš kolostor festői környezetben, a Trebišnjica folyó jobb partja feletti sziklákon fekszik, mindössze néhány kilométerre Trebinjétől. A kolostort a 15. század végén építették egy 4. századi római templom alapjaira. A Tvrdoš ma nemcsak fontos spirituális központ, hanem a régió egyik legismertebb borászata is. A szerzetesek itt egy évszázados borászati hagyományt folytatnak, és díjnyertes borokat termelnek, különösen a Vranac és a Žilavka szőlőfajtákból. A régi borospincék látogathatók. Történelem K6 – Kolostorok és gazdálkodás.",
      ro: "Mănăstirea ortodoxă sârbă Tvrdoš este situată pitoresc pe stâncile de pe malul drept al râului Trebišnjica, la doar câțiva kilometri de Trebinje. Mănăstirea a fost construită la sfârșitul secolului al XV-lea pe fundațiile unei biserici romane din secolul al IV-lea. Astăzi, Tvrdoš nu este doar un important centru spiritual, ci și una dintre cele mai renumite crame din regiune. Călugării continuă aici o tradiție viticolă veche de secole, producând vinuri premiate, în special din soiurile Vranac și Žilavka. Pivnițele vechi pot fi vizitate.",
      en: "The Serbian Orthodox monastery of Tvrdoš is picturesquely situated on the rocks above the right bank of the Trebišnjica River, just a few kilometers from Trebinje. The monastery was built in the late 15th century on the foundations of a 4th-century Roman church. Today, Tvrdoš is not only an important spiritual center, but also one of the most famous wineries in the region. The monks here continue a centuries-old winemaking tradition, producing award-winning wines, especially from the Vranac and Žilavka grape varieties. The old wine cellars can be visited. History K6 – Monasteries and Farming."
    },
    factsAdvanced: {
      de: [
        "Das Kloster steht auf den Fundamenten einer Kirche aus dem 4. Jahrhundert, was es zu einem der ältesten christlichen Orte der Region macht.",
        "Es wurde im 17. Jahrhundert von den Venezianern zerstört und später wieder aufgebaut.",
        "Der Heilige Basilius von Ostrog, einer der wichtigsten Heiligen der serbisch-orthodoxen Kirche, lebte hier als Mönch.",
        "Die Mönche von Tvrdoš bewirtschaften Weinberge und produzieren international anerkannte Weine.",
        "Ein Glasboden in der heutigen Kirche gibt den Blick auf die Fundamente der römischen Kirche frei.",
        "Der Weinkeller des Klosters ist in alten Steingewölben untergebracht."
      ],
      hu: [
        "A kolostor egy 4. századi templom alapjaira épült, ami a régió egyik legrégebbi keresztény helyévé teszi.",
        "A 17. században a velenceiek lerombolták, de később újjáépítették.",
        "Szent Vazul, a szerb ortodox egyház egyik legfontosabb szentje, itt élt szerzetesként.",
        "A tvrdoši szerzetesek szőlőültetvényeket művelnek és nemzetközileg elismert borokat termelnek.",
        "A mai templom üvegpadlója betekintést enged a római templom alapjaiba.",
        "A kolostor borospincéje régi kőboltozatokban kapott helyet.",
        "A kolostor híres a kiváló minőségű mézéről is.",
        "A legenda szerint a kolostort I. Konstantin császár és anyja, Heléna alapította."
      ],
      ro: [
        "Mănăstirea se află pe fundațiile unei biserici din secolul al IV-lea, fiind unul dintre cele mai vechi locuri creștine din regiune.",
        "A fost distrusă de venețieni în secolul al XVII-lea și ulterior reconstruită.",
        "Sfântul Vasile din Ostrog, unul dintre cei mai importanți sfinți ai Bisericii Ortodoxe Sârbe, a trăit aici ca monah.",
        "Călugării de la Tvrdoš cultivă viță de vie și produc vinuri recunoscute internațional.",
        "O podea de sticlă în biserica actuală permite vizualizarea fundațiilor bisericii romane.",
        "Pivnița mănăstirii este amenajată în beciuri vechi de piatră."
      ],
      en: [
        "The monastery stands on the foundations of a 4th-century church, making it one of the oldest Christian sites in the region.",
        "It was destroyed by the Venetians in the 17th century and later rebuilt.",
        "Saint Basil of Ostrog, one of the most important saints of the Serbian Orthodox Church, lived here as a monk.",
        "The monks of Tvrdoš cultivate vineyards and produce internationally recognized wines.",
        "A glass floor in the current church allows a view of the foundations of the Roman church.",
        "The monastery's wine cellar is housed in old stone vaults.",
        "The monastery is also famous for its high-quality honey.",
        "According to legend, the monastery was founded by Emperor Constantine I and his mother, Helena."
      ]
    }, image: "/poi-images/ba-tvrkos.webp"},
  {
    id: "ba-bjelasnica",
    type: "landmark",
    name: { de: "Bjelašnica", hu: "Bjelašnica", ro: "Bjelašnica", en: "Bjelašnica" },
    description: {
      de: "Berg in der Nähe von Sarajevo, bekannt als Austragungsort der Olympischen Winterspiele.",
      hu: "Szarajevó melletti hegy, amely az olimpiai játékok helyszíneként ismert.",
      ro: "Munte lângă Sarajevo, cunoscut ca gazdă a Jocurilor Olimpice.",
      en: "Mountain near Sarajevo, known for hosting the Olympic Games."
    },
    coords: [18.2572, 43.7042],
    parent: "BA-017",
    descriptionAdvanced: {
      de: "Der Berg Bjelašnica, dessen Name 'Weißer Berg' bedeutet, gehört zu den Dinarischen Alpen und ist ein beliebtes Ziel für Wintersportler und Wanderer. Er erlangte Berühmtheit als Austragungsort der alpinen Skiwettbewerbe der Männer bei den Olympischen Winterspielen 1984 in Sarajevo. Der Gipfel ist bekannt für sein raues, unvorhersehbares Wetter. Auf dem Gipfel befindet sich eine Wetterstation, die während der Olympischen Spiele eine wichtige Rolle spielte. Neben dem Skifahren bietet Bjelašnica im Sommer zahlreiche Wanderwege, die zu traditionellen Bergdörfern wie Lukomir führen.",
      hu: "A Bjelašnica hegy, melynek neve 'Fehér hegyet' jelent, a Dinári-hegységhez tartozik, és a téli sportolók és túrázók kedvelt célpontja. Az 1984-es szarajevói téli olimpia férfi alpesi síszámainak helyszíneként vált híressé. A csúcs zord, kiszámíthatatlan időjárásáról ismert. A csúcson egy meteorológiai állomás található, amely az olimpia idején fontos szerepet játszott. A síelés mellett a Bjelašnica nyáron számos túraútvonalat kínál, amelyek hagyományos hegyi falvakba, például Lukomirba vezetnek. Földrajz K7 – Időjárás és éghajlat a hegyekben.",
      ro: "Muntele Bjelašnica, al cărui nume înseamnă \\\"Muntele Alb\\\", aparține Alpilor Dinarici și este o destinație populară pentru sportivii de iarnă și drumeți. A devenit faimos ca loc de desfășurare a competițiilor de schi alpin masculin la Jocurile Olimpice de iarnă din 1984 de la Sarajevo. Vârful este cunoscut pentru vremea sa aspră și imprevizibilă. Pe vârf se află o stație meteorologică care a jucat un rol important în timpul Jocurilor Olimpice. Pe lângă schi, Bjelašnica oferă numeroase trasee de drumeție vara, care duc la sate montane tradiționale precum Lukomir.",
      en: "Mount Bjelašnica, whose name means 'White Mountain,' is part of the Dinaric Alps and a popular destination for winter sports enthusiasts and hikers. It became famous as the venue for the men's alpine skiing events at the 1984 Winter Olympics in Sarajevo. The peak is known for its harsh, unpredictable weather. At the summit is a meteorological station that played an important role during the Olympics. In addition to skiing, Bjelašnica offers numerous hiking trails in summer that lead to traditional mountain villages like Lukomir. Geography K7 - Weather and Climate in the Mountains."
    },
    factsAdvanced: {
      de: [
        "Der höchste Gipfel der Bjelašnica, auch Bjelašnica genannt, ist 2.067 Meter hoch.",
        "Hier fanden die alpinen Skiwettbewerbe der Männer während der Olympischen Winterspiele 1984 statt.",
        "Auf dem Gipfel befindet sich eine permanent besetzte meteorologische Station.",
        "Der Berg ist bekannt für seine extremen Wetterbedingungen und starken Winde.",
        "Am Fuße des Berges liegt das olympische Dorf Babin Do.",
        "Bjelašnica ist ein Karstgebirge mit zahlreichen Dolinen, Höhlen und unterirdischen Flüssen."
      ],
      hu: [
        "A Bjelašnica legmagasabb csúcsa, szintén Bjelašnica néven, 2067 méter magas.",
        "Itt rendezték a férfi alpesi síversenyeket az 1984-es téli olimpia alatt.",
        "A csúcson egy állandó személyzettel ellátott meteorológiai állomás működik.",
        "A hegy extrém időjárási viszonyairól és erős szeleliről ismert.",
        "A hegy lábánál fekszik az olimpiai falu, Babin Do.",
        "A Bjelašnica egy karszthegység, számos dolinával, barlanggal és föld alatti folyóval.",
        "A hegy a nevét a hosszan tartó hótakaróról kapta.",
        "A hegyen található az Umoljani falu, amely a sárkánylegendájáról híres."
      ],
      ro: [
        "Cel mai înalt vârf al masivului Bjelašnica, numit tot Bjelašnica, are 2.067 de metri înălțime.",
        "Aici au avut loc competițiile de schi alpin masculin în timpul Jocurilor Olimpice de iarnă din 1984.",
        "Pe vârf se află o stație meteorologică permanentă.",
        "Muntele este cunoscut pentru condițiile sale meteorologice extreme și vânturile puternice.",
        "La poalele muntelui se află satul olimpic Babin Do.",
        "Bjelašnica este un munte carstic cu numeroase doline, peșteri și râuri subterane."
      ],
      en: [
        "The highest peak of Bjelašnica, also called Bjelašnica, is 2,067 meters high.",
        "The men's alpine skiing competitions were held here during the 1984 Winter Olympics.",
        "There is a permanently staffed meteorological station at the summit.",
        "The mountain is known for its extreme weather conditions and strong winds.",
        "At the foot of the mountain is the Olympic village of Babin Do.",
        "Bjelašnica is a karst mountain with numerous sinkholes, caves, and underground rivers.",
        "The mountain gets its name from the long-lasting snow cover.",
        "The village of Umoljani, famous for its dragon legend, is located on the mountain."
      ]
    }, image: "/poi-images/ba-bjelasnica.webp"},
  {
    id: "ba-perucica",
    type: "landmark",
    name: { de: "Perućica Urwald", hu: "Perućica őserdő", ro: "Pădurea Perućica", en: "Perućica Primeval Forest" },
    description: {
      de: "Einer der letzten Urwälder Europas, Teil des Sutjeska-Nationalparks.",
      hu: "Európa egyik utolsó őserdője, a Sutjeska Nemzeti Park része.",
      ro: "Una dintre ultimele păduri virgine din Europa, parte a Parcului Național Sutjeska.",
      en: "One of the last primeval forests in Europe, part of the Sutjeska National Park."
    },
    coords: [18.7186, 43.3242],
    parent: "BA-003",
    descriptionAdvanced: {
      de: "Perućica ist einer der letzten und größten verbliebenen Urwälder in Europa. Er ist das Herzstück des Nationalparks Sutjeska und steht unter strengstem Schutz. In diesem Wald hat die Natur seit Jahrhunderten ungestört gewirkt, was zu einer beeindruckenden Vielfalt an Flora und Fauna geführt hat. Einige Bäume, insbesondere Tannen und Buchen, erreichen eine Höhe von über 60 Metern und sind mehrere hundert Jahre alt. Im Herzen des Waldes stürzt der Skakavac-Wasserfall 75 Meter in die Tiefe. Der Zugang zu Perućica ist nur in Begleitung von Park-Rangern gestattet, um dieses einzigartige Ökosystem zu schützen.",
      hu: "A Perućica Európa egyik utolsó és legnagyobb fennmaradt őserdője. A Sutjeska Nemzeti Park szívében található, és a legszigorúbb védelem alatt áll. Ebben az erdőben a természet évszázadok óta háborítatlanul működik, ami lenyűgöző növény- és állatvilágot eredményezett. Néhány fa, különösen a jegenyefenyők és a bükkfák, több mint 60 méter magasra nőnek és több száz évesek. Az erdő szívében a Skakavac-vízesés 75 méter mélybe zuhan. A Perućicába való belépés csak a park őreinek kíséretében engedélyezett, hogy megvédjék ezt az egyedülálló ökoszisztémát. Biológia K9 – Őserdők és érintetlen ökoszisztémák.",
      ro: "Perućica este una dintre ultimele și cele mai mari păduri virgine rămase în Europa. Este inima Parcului Național Sutjeska și se află sub protecție strictă. În această pădure, natura a acționat neîntrerupt de secole, ceea ce a dus la o diversitate impresionantă de floră și faună. Unii copaci, în special brazi și fagi, ating o înălțime de peste 60 de metri și au câteva sute de ani. În inima pădurii, cascada Skakavac se prăbușește de la 75 de metri înălțime. Accesul în Perućica este permis numai însoțit de rangerii parcului, pentru a proteja acest ecosistem unic.",
      en: "Perućica is one of the last and largest remaining primeval forests in Europe. It is the heart of the Sutjeska National Park and is under the strictest protection. In this forest, nature has worked undisturbed for centuries, resulting in an impressive diversity of flora and fauna. Some trees, especially firs and beeches, reach a height of over 60 meters and are several hundred years old. In the heart of the forest, the Skakavac waterfall plunges 75 meters into the depths. Access to Perućica is only permitted when accompanied by park rangers to protect this unique ecosystem. Biology K9 - Primeval Forests and Untouched Ecosystems."
    },
    factsAdvanced: {
      de: [
        "Perućica ist seit 1954 ein streng geschütztes Naturreservat.",
        "Es ist einer von nur zwei verbliebenen Urwäldern in Europa.",
        "Die Bäume in Perućica können eine Höhe von über 60 Metern erreichen.",
        "Der Skakavac-Wasserfall im Inneren des Waldes ist 75 Meter hoch.",
        "Der Wald erstreckt sich über eine Fläche von etwa 1.400 Hektar.",
        "Das Betreten des Kerngebiets des Waldes ist streng reglementiert, um das Ökosystem zu bewahren."
      ],
      hu: [
        "A Perućica 1954 óta szigorúan védett természetvédelmi terület.",
        "Egyike Európa két megmaradt őserdejének.",
        "A Perućica fái elérhetik a 60 métert meghaladó magasságot.",
        "Az erdő belsejében található Skakavac-vízesés 75 méter magas.",
        "Az erdő területe körülbelül 1400 hektár.",
        "Az erdő magterületére a belépés szigorúan szabályozott az ökoszisztéma megőrzése érdekében.",
        "A terület a barnamedve, farkas és a zerge fontos élőhelye.",
        "A kutatók folyamatosan új és ritka fajokat fedeznek fel az erdőben."
      ],
      ro: [
        "Perućica este o rezervație naturală strict protejată din 1954.",
        "Este una dintre doar două păduri virgine rămase în Europa.",
        "Copacii din Perućica pot atinge o înălțime de peste 60 de metri.",
        "Cascada Skakavac din interiorul pădurii are 75 de metri înălțime.",
        "Pădurea se întinde pe o suprafață de aproximativ 1.400 de hectare.",
        "Accesul în zona centrală a pădurii este strict reglementat pentru a conserva ecosistemul."
      ],
      en: [
        "Perućica has been a strictly protected nature reserve since 1954.",
        "It is one of only two remaining primeval forests in Europe.",
        "The trees in Perućica can reach a height of over 60 meters.",
        "The Skakavac waterfall inside the forest is 75 meters high.",
        "The forest covers an area of about 1,400 hectares.",
        "Access to the core area of the forest is strictly regulated to preserve the ecosystem.",
        "The area is an important habitat for brown bears, wolves, and chamois.",
        "Researchers are constantly discovering new and rare species in the forest."
      ]
    }, image: "/poi-images/ba-perucica.webp"},
  {
    id: "ba-maglaj",
    type: "landmark",
    name: { de: "Festung Maglaj", hu: "Maglaji vár", ro: "Cetatea Maglaj", en: "Maglaj Fortress" },
    description: {
      de: "Eine beeindruckende mittelalterliche Festung oberhalb der Stadt Maglaj.",
      hu: "Lenyűgöző középkori vár Maglaj városa felett.",
      ro: "O cetate medievală impresionantă deasupra orașului Maglaj.",
      en: "An impressive medieval fortress above the town of Maglaj."
    },
    coords: [18.1022, 44.5458],
    parent: "BA-006",
    descriptionAdvanced: {
      de: "Die Festung Maglaj ist eine gut erhaltene mittelalterliche Festung, die majestätisch auf einem Hügel über der gleichnamigen Stadt und dem Fluss Bosna thront. Sie wurde erstmals im 15. Jahrhundert erwähnt und spielte eine wichtige Rolle bei der Verteidigung des mittelalterlichen bosnischen Königreichs. Die Festung ist bekannt für ihren markanten Uhrturm (Sahat-kula) und die Jusuf-paša-Moschee (Kuršumlija) innerhalb ihrer Mauern, die beide aus der osmanischen Zeit stammen. Die Festung bietet einen hervorragenden strategischen Überblick über das Bosna-Tal und ist heute ein Wahrzeichen der Stadt Maglaj.",
      hu: "Maglaj vára egy jó állapotban fennmaradt középkori erődítmény, amely fenségesen trónol egy dombon a névadó város és a Boszna folyó felett. Először a 15. században említik, és fontos szerepet játszott a középkori bosnyák királyság védelmében. Az erőd híres jellegzetes óratornyáról (Sahat-kula) és a falain belül található Jusuf pasa (Kuršumlija) mecsetről, amelyek mindketten az oszmán korból származnak. A vár kiváló stratégiai áttekintést nyújt a Boszna-völgyre, és ma Maglaj városának jelképe. Történelem K7 – Várépítészet.",
      ro: "Cetatea Maglaj este o fortăreață medievală bine conservată, care tronează maiestuos pe un deal deasupra orașului omonim și a râului Bosna. A fost menționată pentru prima dată în secolul al XV-lea și a jucat un rol important în apărarea regatului medieval bosniac. Cetatea este cunoscută pentru turnul său cu ceas proeminent (Sahat-kula) și pentru Moscheea Jusuf-paša (Kuršumlija) din interiorul zidurilor sale, ambele datând din perioada otomană. Fortăreața oferă o excelentă vedere strategică asupra văii Bosnei și este astăzi un simbol al orașului Maglaj.",
      en: "The Maglaj fortress is a well-preserved medieval fortress that sits majestically on a hill above the town of the same name and the Bosna River. It was first mentioned in the 15th century and played an important role in the defense of the medieval Bosnian kingdom. The fortress is known for its distinctive clock tower (Sahat-kula) and the Jusuf-paša Mosque (Kuršumlija) within its walls, both of which date from the Ottoman period. The fortress offers an excellent strategic overview of the Bosna Valley and is today a landmark of the city of Maglaj. History K7 - Fortress Architecture."
    },
    factsAdvanced: {
      de: [
        "Maglaj wurde erstmals 1408 in einer Charta des ungarischen Königs Sigismund erwähnt.",
        "Die Jusuf-paša (Kuršumlija) Moschee innerhalb der Festung wurde 1560 erbaut.",
        "Der Uhrturm wurde im 17. Jahrhundert hinzugefügt und ist eines der Wahrzeichen der Stadt.",
        "Die Festung kontrollierte den wichtigen Handelsweg entlang des Flusses Bosna.",
        "Die Festung und die Altstadt von Maglaj sind als Nationaldenkmal von Bosnien und Herzegowina geschützt.",
        "Der Name 'Maglaj' leitet sich vom slawischen Wort für Nebel ('magla') ab."
      ],
      hu: [
        "Maglajt először 1408-ban említik Zsigmond magyar király egyik oklevelében.",
        "A várban található Jusuf pasa (Kuršumlija) mecsetet 1560-ban építették.",
        "Az óratornyot a 17. században adták hozzá, és a város egyik jelképe.",
        "Az erőd a Boszna folyó menti fontos kereskedelmi útvonalat ellenőrizte.",
        "A vár és Maglaj óvárosa Bosznia-Hercegovina nemzeti emlékműveként védett.",
        "A 'Maglaj' név a szláv 'magla' (köd) szóból ered.",
        "A 2014-es nagy árvíz a várat is elérte, de azóta helyreállították.",
        "A várban évente kulturális eseményeket és fesztiválokat rendeznek."
      ],
      ro: [
        "Maglaj a fost menționat pentru prima dată în 1408 într-o cartă a regelui maghiar Sigismund.",
        "Moscheea Jusuf-paša (Kuršumlija) din interiorul cetății a fost construită în 1560.",
        "Turnul cu ceas a fost adăugat în secolul al XVII-lea și este unul dintre simbolurile orașului.",
        "Cetatea controla importanta rută comercială de-a lungul râului Bosna.",
        "Cetatea și orașul vechi Maglaj sunt protejate ca monument național al Bosniei și Herțegovinei.",
        "Numele 'Maglaj' derivă din cuvântul slav pentru ceață ('magla')."
      ],
      en: [
        "Maglaj was first mentioned in 1408 in a charter of the Hungarian King Sigismund.",
        "The Jusuf-paša (Kuršumlija) Mosque inside the fortress was built in 1560.",
        "The clock tower was added in the 17th century and is one of the city's landmarks.",
        "The fortress controlled the important trade route along the Bosna River.",
        "The fortress and the old town of Maglaj are protected as a National Monument of Bosnia and Herzegovina.",
        "The name 'Maglaj' is derived from the Slavic word for fog ('magla').",
        "The great flood of 2014 also reached the fortress, but it has since been restored.",
        "Cultural events and festivals are held annually in the fortress."
      ]
    }
  },
  {
    id: "ba-orasje",
    type: "city",
    name: { de: "Orašje", hu: "Orašje", ro: "Orašje", en: "Orašje" },
    description: {
      de: "Grenzstadt am Ufer der Save, bekannt für ihre Gastfreundschaft.",
      hu: "Határváros a Száva partján, vendégszeretetéről ismert.",
      ro: "Oraș de frontieră pe malul râului Sava, cunoscut pentru ospitalitatea sa.",
      en: "Border town on the banks of the Sava river, known for its hospitality."
    },
    coords: [18.6925, 45.0322],
    parent: "BA-007",
    descriptionAdvanced: {
      de: "Orašje ist eine kleine Stadt und Gemeinde im Posavina-Kanton, direkt an der Grenze zu Kroatien. Die Stadt liegt am Südufer des Flusses Save, der hier die natürliche Grenze bildet. Orašje ist ein wichtiges regionales Zentrum für Landwirtschaft und Handel. Die Stadt ist bekannt für ihre entspannte Atmosphäre und die Gastfreundschaft ihrer Bewohner. Die Nähe zu Kroatien und die Lage an der Save prägen das Leben und die Kultur der Stadt. Jedes Jahr im September findet hier eine beliebte Motorrad-Show statt, die Biker aus der ganzen Region anzieht.",
      hu: "Orašje egy kisváros és község a Posavina kantonban, közvetlenül a horvát határon. A város a Száva folyó déli partján fekszik, amely itt a természetes határt képezi. Orašje fontos regionális mezőgazdasági és kereskedelmi központ. A város ismert a laza légköréről és lakóinak vendégszeretetéről. Horvátország közelsége és a Száva menti fekvés meghatározza a város életét és kultúráját. Minden év szeptemberében népszerű motoros bemutatót tartanak itt, amely a régió minden részéről vonzza a motorosokat. Földrajz K8 – Határ menti régiók.",
      ro: "Orašje este un mic oraș și o comună în cantonul Posavina, chiar la granița cu Croația. Orașul este situat pe malul sudic al râului Sava, care formează aici granița naturală. Orašje este un important centru regional pentru agricultură și comerț. Orașul este cunoscut pentru atmosfera sa relaxată și ospitalitatea locuitorilor săi. Apropierea de Croația și locația pe râul Sava modelează viața și cultura orașului. În fiecare an, în septembrie, aici are loc un popular show de motociclete, care atrage motocicliști din întreaga regiune.",
      en: "Orašje is a small town and municipality in the Posavina canton, right on the border with Croatia. The town is located on the south bank of the Sava River, which forms the natural border here. Orašje is an important regional center for agriculture and trade. The city is known for its relaxed atmosphere and the hospitality of its residents. The proximity to Croatia and the location on the Sava shape the life and culture of the city. Every year in September, a popular motorcycle show is held here, attracting bikers from all over the region. Geography K8 - Border Regions."
    },
    factsAdvanced: {
      de: [
        "Orašje liegt in der fruchtbaren Posavina-Region, die für ihre Landwirtschaft bekannt ist.",
        "Der Fluss Save ist eine der Hauptverkehrsadern und bildet die Grenze zu Kroatien (und damit zur EU).",
        "Die Stadt wurde während des Bosnienkrieges schwer verteidigt und nie eingenommen.",
        "Das jährliche internationale Motorradtreffen 'Moto Show' ist eine der größten Veranstaltungen der Stadt.",
        "In der Umgebung wird viel Tabak, Mais und Weizen angebaut.",
        "Orašje wurde offiziell 1863 gegründet, obwohl die Besiedlung der Region viel älter ist."
      ],
      hu: [
        "Orašje a termékeny Posavina régióban található, amely mezőgazdaságáról ismert.",
        "A Száva folyó az egyik fő közlekedési útvonal, és határt képez Horvátországgal (és így az EU-val).",
        "A várost a boszniai háború alatt keményen védték és soha nem foglalták el.",
        "Az évente megrendezett nemzetközi motoros találkozó, a 'Moto Show', a város egyik legnagyobb eseménye.",
        "A környéken sok dohányt, kukoricát és búzát termesztenek.",
        "Orašjét hivatalosan 1863-ban alapították, bár a régió betelepülése sokkal régebbi.",
        "A város a híres 'Orašjei szilvapálinka' szülőhelye.",
        "A helyi futballklub, a HNK Orašje, egyszer megnyerte a boszniai kupát."
      ],
      ro: [
        "Orašje este situat în regiunea fertilă Posavina, cunoscută pentru agricultura sa.",
        "Râul Sava este una dintre principalele căi de transport și formează granița cu Croația (și, prin urmare, cu UE).",
        "Orașul a fost apărat cu îndârjire în timpul războiului din Bosnia și nu a fost niciodată cucerit.",
        "Întâlnirea internațională anuală de motociclete 'Moto Show' este unul dintre cele mai mari evenimente ale orașului.",
        "În zonă se cultivă mult tutun, porumb și grâu.",
        "Orašje a fost fondat oficial în 1863, deși așezarea în regiune este mult mai veche."
      ],
      en: [
        "Orašje is located in the fertile Posavina region, known for its agriculture.",
        "The Sava River is one of the main transport arteries and forms the border with Croatia (and thus the EU).",
        "The city was heavily defended during the Bosnian War and was never captured.",
        "The annual international motorcycle meeting, the 'Moto Show,' is one of the city's biggest events.",
        "Much tobacco, corn, and wheat are grown in the area.",
        "Orašje was officially founded in 1863, although the settlement of the region is much older.",
        "The town is the birthplace of the famous 'Orašje plum brandy'.",
        "The local football club, HNK Orašje, once won the Bosnian Cup."
      ]
    }, image: "/poi-images/ba-orasje.webp"},
  {
    id: "ba-savariver",
    type: "landmark",
    name: { de: "Fluss Save", hu: "Száva folyó", ro: "Râul Sava", en: "Sava River" },
    description: {
      de: "Der größte Fluss der Region, der die natürliche Grenze im Norden bildet.",
      hu: "A régió legnagyobb folyója, amely északon természetes határt alkot.",
      ro: "Cel mai mare râu din regiune, formând granița naturală în nord.",
      en: "The largest river in the region, forming the natural border in the north."
    },
    coords: [18.6000, 45.0500],
    parent: "BA-007",
    descriptionAdvanced: {
      de: "Der Fluss Save ist ein rechter Nebenfluss der Donau und einer der wichtigsten Flüsse Südosteuropas. Er bildet die natürliche Nordgrenze von Bosnien und Herzegowina zu Kroatien. Der Fluss ist eine bedeutende Wasserstraße und eine reiche Quelle für die Biodiversität. Die Auenlandschaften entlang der Save sind wichtige Lebensräume für zahlreiche Vogel- und Fischarten. Städte wie Orašje und Brčko liegen an seinen Ufern. Der Fluss spielt eine entscheidende Rolle für die Landwirtschaft in der fruchtbaren Posavina-Ebene.",
      hu: "A Száva folyó a Duna jobb oldali mellékfolyója és Délkelet-Európa egyik legfontosabb folyója. Bosznia-Hercegovina és Horvátország természetes északi határát képezi. A folyó fontos vízi út és gazdag biodiverzitás forrása. A Száva menti árterek fontos élőhelyet biztosítanak számos madár- és halfaj számára. Olyan városok, mint Orašje és Brčko, a partjain fekszenek. A folyó döntő szerepet játszik a termékeny Posavina síkság mezőgazdaságában. Hidrológia K7 – Folyók és vízgyűjtő területek.",
      ro: "Râul Sava este un afluent de dreapta al Dunării și unul dintre cele mai importante râuri din Europa de Sud-Est. Formează granița naturală de nord a Bosniei și Herțegovinei cu Croația. Râul este o cale navigabilă importantă și o sursă bogată de biodiversitate. Luncile inundabile de-a lungul Savei sunt habitate importante pentru numeroase specii de păsări și pești. Orașe precum Orašje și Brčko sunt situate pe malurile sale. Râul joacă un rol crucial pentru agricultură în câmpia fertilă Posavina.",
      en: "The Sava River is a right tributary of the Danube and one of the most important rivers in Southeast Europe. It forms the natural northern border of Bosnia and Herzegovina with Croatia. The river is a major waterway and a rich source of biodiversity. The floodplains along the Sava are important habitats for numerous bird and fish species. Cities like Orašje and Brčko are located on its banks. The river plays a crucial role in agriculture in the fertile Posavina plain. Hydrology K7 - Rivers and Watersheds."
    },
    factsAdvanced: {
      de: [
        "Die Save ist mit 945 km Länge der längste Nebenfluss der Donau nach Einzugsgebiet.",
        "Sie ist einer der wenigen großen Flüsse in Europa ohne Wasserkraftwerke an seinem Unterlauf.",
        "Der Fluss bildet die Grenze zwischen Bosnien und Herzegowina und Kroatien auf einer Länge von über 330 km.",
        "Die Save-Auen sind wichtige Rastplätze für Zugvögel.",
        "Im Jahr 2014 verursachte ein extremes Hochwasser der Save verheerende Überschwemmungen in der Region.",
        "Der Fluss ist auf einem Großteil seiner Länge schiffbar."
      ],
      hu: [
        "A Száva 945 km-es hosszával a Duna leghosszabb mellékfolyója a vízgyűjtő területét tekintve.",
        "Egyike azon kevés nagy európai folyóknak, amelyek alsó szakaszán nincsenek vízerőművek.",
        "A folyó több mint 330 km hosszan képezi a határt Bosznia-Hercegovina és Horvátország között.",
        "A Száva árterei fontos pihenőhelyek a vonuló madarak számára.",
        "2014-ben a Száva extrém áradása pusztító árvizeket okozott a régióban.",
        "A folyó nagy részén hajózható.",
        "A Száva medencéje négy országon (Szlovénia, Horvátország, Bosznia-Hercegovina és Szerbia) osztozik.",
        "A folyó mentén található a Lonjsko Polje Natúrpark Horvátországban, Európa egyik legnagyobb védett ártere."
      ],
      ro: [
        "Cu o lungime de 945 km, Sava este cel mai lung afluent al Dunării ca bazin hidrografic.",
        "Este unul dintre puținele râuri mari din Europa fără hidrocentrale pe cursul său inferior.",
        "Râul formează granița dintre Bosnia și Herțegovina și Croația pe o lungime de peste 330 km.",
        "Luncile inundabile ale Savei sunt locuri importante de popas pentru păsările migratoare.",
        "În 2014, o viitură extremă a râului Sava a provocat inundații devastatoare în regiune.",
        "Râul este navigabil pe o mare parte din lungimea sa."
      ],
      en: [
        "With a length of 945 km, the Sava is the longest tributary of the Danube by catchment area.",
        "It is one of the few large rivers in Europe without hydroelectric power plants on its lower course.",
        "The river forms the border between Bosnia and Herzegovina and Croatia for over 330 km.",
        "The Sava floodplains are important resting places for migratory birds.",
        "In 2014, an extreme flood of the Sava caused devastating floods in the region.",
        "The river is navigable for much of its length.",
        "The Sava basin is shared by four countries (Slovenia, Croatia, Bosnia and Herzegovina, and Serbia).",
        "Along the river is the Lonjsko Polje Nature Park in Croatia, one of the largest protected floodplains in Europe."
      ]
    }, image: "/poi-images/ba-savariver.webp"},
  {
    id: "ba-brcko",
    type: "city",
    name: { de: "Brčko", hu: "Brčko", ro: "Brčko", en: "Brčko" },
    description: {
      de: "Ein wichtiges wirtschaftliches Zentrum und Sitz des Brčko-Distrikts.",
      hu: "Fontos gazdasági központ és a Brčko körzet székhelye.",
      ro: "Un important centru economic și sediul Districtului Brčko.",
      en: "An important economic center and the seat of the Brčko District."
    },
    coords: [18.8108, 44.8783],
    parent: "BA-008",
    descriptionAdvanced: {
      de: "Brčko ist eine Stadt mit einem einzigartigen politischen Status in Bosnien und Herzegowina. Sie ist der Sitz des selbstverwalteten Brčko-Distrikts, der ein Kondominium beider Entitäten, der Föderation Bosnien und Herzegowina und der Republika Srpska, ist. Die Stadt liegt strategisch günstig am Fluss Save und verfügt über den einzigen Binnenhafen des Landes. Dies macht sie zu einem wichtigen Handels- und Logistikzentrum. Das Stadtbild wird von Gebäuden aus der österreichisch-ungarischen Zeit geprägt, darunter das prächtige Rathaus im pseudo-maurischen Stil.",
      hu: "Brčko egy egyedülálló politikai státuszú város Bosznia-Hercegovinában. Az önkormányzattal rendelkező Brčkói Körzet székhelye, amely mindkét entitás, a Bosznia-hercegovinai Föderáció és a Szerb Köztársaság közös tulajdona. A város stratégiailag kedvező helyen, a Száva folyó partján fekszik, és az ország egyetlen belvízi kikötőjével rendelkezik. Ez fontos kereskedelmi és logisztikai központtá teszi. A városképet osztrák-magyar korabeli épületek határozzák meg, köztük a pompás, pszeudo-mór stílusú városháza. Politika K8 – Államformák és közigazgatás.",
      ro: "Brčko este un oraș cu un statut politic unic în Bosnia și Herțegovina. Este sediul districtului autonom Brčko, care este un condominiu al ambelor entități, Federația Bosniei și Herțegovinei și Republika Srpska. Orașul este situat strategic pe râul Sava și are singurul port intern al țării. Acest lucru îl face un important centru comercial și logistic. Peisajul urban este marcat de clădiri din perioada austro-ungară, inclusiv de primăria magnifică în stil pseudo-maur.",
      en: "Brčko is a city with a unique political status in Bosnia and Herzegovina. It is the seat of the self-governing Brčko District, which is a condominium of both entities, the Federation of Bosnia and Herzegovina and the Republika Srpska. The city is strategically located on the Sava River and has the country's only inland port. This makes it an important commercial and logistics center. The cityscape is marked by buildings from the Austro-Hungarian period, including the magnificent pseudo-Moorish style city hall. Politics K8 - Forms of Government and Administration."
    },
    factsAdvanced: {
      de: [
        "Der Brčko-Distrikt wurde 2000 nach einem internationalen Schiedsverfahren eingerichtet.",
        "Brčko hat den einzigen Flusshafen in Bosnien und Herzegowina.",
        "Die Stadt liegt an der Mündung des Flusses Brka in die Save.",
        "Das Rathaus von Brčko, erbaut 1892, ist ein herausragendes Beispiel für pseudo-maurische Architektur.",
        "Der Distrikt hat seine eigene Regierung, Polizei und Justiz.",
        "Aufgrund seiner strategischen Lage war Brčko im Bosnienkrieg heftig umkämpft."
      ],
      hu: [
        "A Brčkói Körzetet 2000-ben hozták létre egy nemzetközi választottbírósági eljárás után.",
        "Brčkóban található Bosznia-Hercegovina egyetlen folyami kikötője.",
        "A város a Brka folyó Szávába való torkolatánál fekszik.",
        "A brčkói városháza, amely 1892-ben épült, a pszeudo-mór építészet kiemelkedő példája.",
        "A körzetnek saját kormánya, rendőrsége és igazságszolgáltatása van.",
        "Stratégiai fekvése miatt Brčko a boszniai háborúban heves harcok színtere volt.",
        "A város a 'Brčkoi Nyár' nevű kulturális fesztiválnak ad otthont.",
        "A körzet a multietnikus együttélés modelljeként szolgál az országban."
      ],
      ro: [
        "Districtul Brčko a fost înființat în 2000 în urma unui arbitraj internațional.",
        "Brčko are singurul port fluvial din Bosnia și Herțegovina.",
        "Orașul este situat la confluența râului Brka cu Sava.",
        "Primăria din Brčko, construită în 1892, este un exemplu remarcabil de arhitectură pseudo-maurică.",
        "Districtul are propriul guvern, poliție și sistem judiciar.",
        "Datorită poziției sale strategice, Brčko a fost intens disputat în timpul războiului din Bosnia."
      ],
      en: [
        "The Brčko District was established in 2000 after an international arbitration.",
        "Brčko has the only river port in Bosnia and Herzegovina.",
        "The city is located at the confluence of the Brka and Sava rivers.",
        "The Brčko City Hall, built in 1892, is an outstanding example of pseudo-Moorish architecture.",
        "The district has its own government, police, and judiciary.",
        "Due to its strategic location, Brčko was heavily contested during the Bosnian War.",
        "The city hosts the 'Brčko Summer' cultural festival.",
        "The district serves as a model for multi-ethnic coexistence in the country."
      ]
    }, image: "/poi-images/ba-brcko.webp"},
  {
    id: "ba-vijecnica-brcko",
    type: "landmark",
    name: { de: "Rathaus Brčko", hu: "Brčkói városháza", ro: "Primăria Brčko", en: "Brčko City Hall" },
    description: {
      de: "Ein wunderschönes Gebäude in pseudo-maurischem Stil im Zentrum von Brčko.",
      hu: "Gyönyörű pszeudo-mór stílusú épület Brčko központjában.",
      ro: "O clădire frumoasă în stil pseudo-maur în centrul orașului Brčko.",
      en: "A beautiful pseudo-Moorish style building in the center of Brčko."
    },
    coords: [18.8139, 44.8767],
    parent: "BA-008",
    descriptionAdvanced: {
      de: "Das Rathaus von Brčko ist eines der schönsten und repräsentativsten Gebäude der österreichisch-ungarischen Architektur in Bosnien und Herzegowina. Es wurde 1892 nach den Plänen des Architekten Aleksandar Vitek erbaut und ist ein herausragendes Beispiel des pseudo-maurischen Stils, der von der islamischen Kunst Spaniens und Nordafrikas inspiriert ist. Mit seiner kunstvollen Fassade, den Bögen und Ornamenten ist es das Wahrzeichen der Stadt. Heute beherbergt das Gebäude die Stadtverwaltung und eine Kunstgalerie.",
      hu: "A brčkói városháza az osztrák-magyar építészet egyik legszebb és legreprezentatívabb épülete Bosznia-Hercegovinában. 1892-ben épült Aleksandar Vitek építész tervei alapján, és a pszeudo-mór stílus kiemelkedő példája, amelyet Spanyolország és Észak-Afrika iszlám művészete ihletett. Művészi homlokzatával, íveivel és díszítéseivel a város jelképe. Ma az épület a városi közigazgatásnak és egy művészeti galériának ad otthont. Művészettörténet K8 – Eklektikus építészeti stílusok.",
      ro: "Primăria din Brčko este una dintre cele mai frumoase și reprezentative clădiri ale arhitecturii austro-ungare din Bosnia și Herțegovina. A fost construită în 1892 după planurile arhitectului Aleksandar Vitek și este un exemplu remarcabil al stilului pseudo-maur, inspirat de arta islamică din Spania și Africa de Nord. Cu fațada sa elaborată, arcadele și ornamentele, este simbolul orașului. Astăzi, clădirea găzduiește administrația orașului și o galerie de artă.",
      en: "The Brčko City Hall is one of the most beautiful and representative buildings of Austro-Hungarian architecture in Bosnia and Herzegovina. It was built in 1892 according to the plans of the architect Aleksandar Vitek and is an outstanding example of the pseudo-Moorish style, inspired by the Islamic art of Spain and North Africa. With its ornate facade, arches, and ornaments, it is the landmark of the city. Today, the building houses the city administration and an art gallery. Art History K8 - Eclectic Architectural Styles."
    },
    factsAdvanced: {
      de: [
        "Das Gebäude wurde 1892 fertiggestellt.",
        "Es wurde vom kroatischen Architekten Aleksandar Vitek entworfen, der auch an der Vijećnica in Sarajevo mitarbeitete.",
        "Der pseudo-maurische Stil war in der österreichisch-ungarischen Zeit in Bosnien sehr beliebt.",
        "Das Gebäude wurde während des Krieges beschädigt, aber danach sorgfältig restauriert.",
        "Es steht im Zentrum der Stadt und ist ein nationales Denkmal.",
        "Die Fassade ist mit Elementen aus Gips, Keramik und Schmiedeeisen verziert."
      ],
      hu: [
        "Az épület 1892-ben készült el.",
        "A horvát építész, Aleksandar Vitek tervezte, aki a szarajevói Vijećnicán is dolgozott.",
        "A pszeudo-mór stílus nagyon népszerű volt Boszniában az osztrák-magyar időkben.",
        "Az épületet a háború alatt megrongálták, de utána gondosan restaurálták.",
        "A város központjában áll és nemzeti emlékmű.",
        "A homlokzatot gipsz-, kerámia- és kovácsoltvas elemek díszítik.",
        "Az épület belső tere is gazdagon díszített.",
        "A városháza a város kulturális és társadalmi életének központja."
      ],
      ro: [
        "Clădirea a fost finalizată în 1892.",
        "A fost proiectată de arhitectul croat Aleksandar Vitek, care a lucrat și la Vijećnica din Sarajevo.",
        "Stilul pseudo-maur a fost foarte popular în Bosnia în perioada austro-ungară.",
        "Clădirea a fost avariată în timpul războiului, dar ulterior restaurată cu grijă.",
        "Se află în centrul orașului și este un monument național.",
        "Fațada este decorată cu elemente din ipsos, ceramică și fier forjat."
      ],
      en: [
        "The building was completed in 1892.",
        "It was designed by the Croatian architect Aleksandar Vitek, who also worked on the Vijećnica in Sarajevo.",
        "The pseudo-Moorish style was very popular in Bosnia during the Austro-Hungarian period.",
        "The building was damaged during the war but was carefully restored afterwards.",
        "It is located in the city center and is a national monument.",
        "The facade is decorated with elements of plaster, ceramics, and wrought iron.",
        "The interior of the building is also richly decorated.",
        "The city hall is the center of the city's cultural and social life."
      ]
    }
  },
  {
    id: "ba-bijeljina",
    type: "city",
    name: { de: "Bijeljina", hu: "Bijeljina", ro: "Bijeljina", en: "Bijeljina" },
    description: {
      de: "Die zweitgröëte Stadt in der Republika Srpska, im Herzen der Semberija.",
      hu: "A Szerb Köztársaság második legnagyobb városa, Semberija szívében.",
      ro: "Al doilea oraș ca mărime din Republika Srpska, în inima Semberijei.",
      en: "The second largest city in Republika Srpska, in the heart of Semberija."
    },
    coords: [19.2139, 44.7589],
    parent: "BA-009",
    descriptionAdvanced: {
      de: "Bijeljina ist das Zentrum der fruchtbaren Semberija-Ebene, die oft als die 'Kornkammer' Bosniens bezeichnet wird. Die Stadt ist ein wichtiges landwirtschaftliches und zunehmend auch wirtschaftliches Zentrum im Osten der Republika Srpska. In der Nähe der Stadt befindet sich das Ethno-Dorf Stanišići, ein beliebter Touristenkomplex, der das traditionelle Leben der Region nachbildet. Das Stadtzentrum von Bijeljina wird von einem modernen Platz und dem Rathaus dominiert, aber auch ältere Gebäude wie die Atik-Moschee und das serbisch-orthodoxe Kloster Tavna in der Umgebung zeugen von der Geschichte der Region.",
      hu: "Bijeljina a termékeny Semberija-síkság központja, amelyet gyakran Bosznia 'éléskamrájának' neveznek. A város fontos mezőgazdasági és egyre inkább gazdasági központ a Szerb Köztársaság keleti részén. A város közelében található a Stanišići etnofalu, egy népszerű turisztikai komplexum, amely a régió hagyományos életét mutatja be. Bijeljina városközpontját egy modern tér és a városháza uralja, de régebbi épületek, mint az Atik-mecset és a közeli szerb ortodox Tavna kolostor is tanúskodnak a régió történelméről. Földrajz K6 – Mezőgazdasági tájak.",
      ro: "Bijeljina este centrul câmpiei fertile Semberija, adesea numită 'grânarul' Bosniei. Orașul este un important centru agricol și, din ce în ce mai mult, economic în estul Republicii Srpska. În apropierea orașului se află Satul Etno Stanišići, un complex turistic popular care recreează viața tradițională a regiunii. Centrul orașului Bijeljina este dominat de o piață modernă și de primărie, dar și clădiri mai vechi, cum ar fi Moscheea Atik și mănăstirea ortodoxă sârbă Tavna din apropiere, mărturisesc istoria regiunii.",
      en: "Bijeljina is the center of the fertile Semberija plain, often called the 'granary' of Bosnia. The city is an important agricultural and increasingly economic center in the east of Republika Srpska. Near the city is the Stanišići Ethno Village, a popular tourist complex that recreates the traditional life of the region. Bijeljina's city center is dominated by a modern square and the city hall, but older buildings such as the Atik Mosque and the nearby Serbian Orthodox Tavna Monastery also testify to the region's history. Geography K6 - Agricultural Landscapes."
    },
    factsAdvanced: {
      de: [
        "Bijeljina liegt in der Semberija-Ebene, einer der fruchtbarsten Regionen des Landes.",
        "Die Stadt ist ein wichtiger Produzent von Gemüse, insbesondere von Kohl, der für die Herstellung von Sauerkraut berühmt ist.",
        "Das Ethno-Dorf Stanišići ist eine der meistbesuchten Touristenattraktionen in Bosnien und Herzegowina.",
        "Das Kloster Tavna in der Nähe ist eines der ältesten Klöster der Region und stammt aus dem 14. Jahrhundert.",
        "Die Atik-Moschee wurde im 16. Jahrhundert erbaut und ist die älteste Moschee der Stadt.",
        "Bijeljina hat in den letzten Jahrzehnten ein starkes Bevölkerungswachstum erlebt."
      ],
      hu: [
        "Bijeljina a Semberija-síkságon fekszik, az ország egyik legtermékenyebb régiójában.",
        "A város fontos zöldségtermelő, különösen a savanyú káposzta készítéséről híres káposztáról.",
        "A Stanišići etnofalu Bosznia-Hercegovina egyik leglátogatottabb turisztikai látványossága.",
        "A közeli Tavna kolostor a régió egyik legrégebbi kolostora, a 14. századból származik.",
        "Az Atik-mecset a 16. században épült és a város legrégebbi mecsete.",
        "Bijeljina az elmúlt évtizedekben erőteljes népességnövekedést élt át.",
        "A város ad otthont a Semberija Múzeumnak, amely a régió régészeti és néprajzi örökségét mutatja be.",
        "A városban született Filip Višnjić, a híres szerb népdalénekes."
      ],
      ro: [
        "Bijeljina este situată în câmpia Semberija, una dintre cele mai fertile regiuni ale țării.",
        "Orașul este un important producător de legume, în special de varză, renumită pentru producția de varză murată.",
        "Satul Etno Stanišići este una dintre cele mai vizitate atracții turistice din Bosnia și Herțegovina.",
        "Mănăstirea Tavna din apropiere este una dintre cele mai vechi mănăstiri din regiune, datând din secolul al XIV-lea.",
        "Moscheea Atik a fost construită în secolul al XVI-lea și este cea mai veche moschee din oraș.",
        "Bijeljina a cunoscut o creștere demografică puternică în ultimele decenii."
      ],
      en: [
        "Bijeljina is located in the Semberija plain, one of the most fertile regions in the country.",
        "The city is a major producer of vegetables, especially cabbage, which is famous for making sauerkraut.",
        "The Stanišići Ethno Village is one of the most visited tourist attractions in Bosnia and Herzegovina.",
        "The nearby Tavna Monastery is one of the oldest monasteries in the region, dating from the 14th century.",
        "The Atik Mosque was built in the 16th century and is the oldest mosque in the city.",
        "Bijeljina has experienced strong population growth in recent decades.",
        "The city is home to the Semberija Museum, which displays the archaeological and ethnographic heritage of the region.",
        "Filip Višnjić, the famous Serbian gusle player, was born in the city."
      ]
    }, image: "/poi-images/ba-bijeljina.webp"},
  {
    id: "ba-stanisici",
    type: "landmark",
    name: { de: "Ethno-Dorf Stanišići", hu: "Stanišići etnofalu", ro: "Satul etno Stanišići", en: "Ethno Village Stanišići" },
    description: {
      de: "Ein einzigartiger Komplex, der das traditionelle dörfliche Leben nachbildet.",
      hu: "Egyedülálló komplexum, amely a hagyományos falusi életet mutatja be.",
      ro: "Un complex unic care recreează viața tradițională a satului.",
      en: "A unique complex recreating traditional village life."
    },
    coords: [19.2667, 44.7833],
    parent: "BA-009",
    descriptionAdvanced: {
      de: "Das Ethno-Dorf Stanišići, in der Nähe von Bijeljina gelegen, ist ein faszinierender Komplex, der Besucher auf eine Reise in die Vergangenheit mitnimmt. Das Dorf wurde von Boris Stanišić aus Leidenschaft für die traditionelle Lebensweise der Region erbaut. Es besteht aus zwei Teilen: einem weltlichen Teil mit Holzhäusern, Mühlen und Werkstätten, die aus verschiedenen Teilen Bosniens hierher gebracht wurden, und einem spirituellen Teil mit einer Nachbildung des Klosters des Heiligen Nikolaus. Der Komplex umfasst auch Seen, ein Hotel und Restaurants und ist eine der beliebtesten Touristenattraktionen des Landes.",
      hu: "A Stanišići etnofalu, amely Bijeljina közelében található, egy lenyűgöző komplexum, amely visszarepíti a látogatókat a múltba. A falut Boris Stanišić építtette a régió hagyományos életmódja iránti szenvedélyéből. Két részből áll: egy világi részből faházakkal, malmokkal és műhelyekkel, amelyeket Bosznia különböző részeiről hoztak ide, és egy spirituális részből, a Szent Miklós kolostor másolatával. A komplexum tavakat, szállodát és éttermeket is magában foglal, és az ország egyik legnépszerűbb turisztikai látványossága. Néprajz K5 – Népi építészet.",
      ro: "Satul Etno Stanišići, situat lângă Bijeljina, este un complex fascinant care îi poartă pe vizitatori într-o călătorie înapoi în timp. Satul a fost construit de Boris Stanišić din pasiune pentru modul de viață tradițional al regiunii. Este format din două părți: o parte laică, cu case din lemn, mori și ateliere aduse din diferite părți ale Bosniei, și o parte spirituală, cu o replică a Mănăstirii Sf. Nicolae. Complexul include, de asemenea, lacuri, un hotel și restaurante și este una dintre cele mai populare atracții turistice ale țării.",
      en: "The Stanišići Ethno Village, located near Bijeljina, is a fascinating complex that takes visitors on a journey into the past. The village was built by Boris Stanišić out of a passion for the traditional way of life in the region. It consists of two parts: a secular part with wooden houses, mills, and workshops brought from different parts of Bosnia, and a spiritual part with a replica of the Monastery of St. Nicholas. The complex also includes lakes, a hotel, and restaurants, and is one of the country's most popular tourist attractions. Ethnography K5 - Folk Architecture."
    },
    factsAdvanced: {
      de: [
        "Das Dorf wurde im Jahr 2003 eröffnet.",
        "Alle Gebäude im Dorf sind authentisch und wurden von ihren ursprünglichen Standorten hierher transportiert.",
        "Der Komplex erstreckt sich über eine Fläche von etwa 15 Hektar.",
        "Im Dorf gibt es mehrere Wassermühlen und eine Windmühle.",
        "Die Klosterkirche des Heiligen Nikolaus ist eine exakte Kopie eines mittelalterlichen serbischen Klosters.",
        "Der Komplex beherbergt auch ein kleines Museum mit traditionellen Werkzeugen und Artefakten."
      ],
      hu: [
        "A falut 2003-ban nyitották meg.",
        "A faluban található összes épület eredeti, és eredeti helyükről szállították ide őket.",
        "A komplexum körülbelül 15 hektáros területen fekszik.",
        "A faluban több vízimalom és egy szélmalom is található.",
        "A Szent Miklós kolostortemplom egy középkori szerb kolostor pontos másolata.",
        "A komplexum egy kis múzeumnak is otthont ad, ahol hagyományos szerszámokat és tárgyakat mutatnak be.",
        "A tavakon hattyúk és vadkacsák úszkálnak.",
        "A falu a hagyományos bosnyák konyha remekeit kínálja."
      ],
      ro: [
        "Satul a fost deschis în 2003.",
        "Toate clădirile din sat sunt autentice și au fost transportate aici de la locațiile lor originale.",
        "Complexul se întinde pe o suprafață de aproximativ 15 hectare.",
        "În sat există mai multe mori de apă și o moară de vânt.",
        "Biserica mănăstirii Sf. Nicolae este o copie exactă a unei mănăstiri medievale sârbești.",
        "Complexul găzduiește și un mic muzeu cu unelte și artefacte tradiționale."
      ],
      en: [
        "The village was opened in 2003.",
        "All buildings in the village are authentic and were transported here from their original locations.",
        "The complex covers an area of about 15 hectares.",
        "There are several watermills and a windmill in the village.",
        "The monastery church of St. Nicholas is an exact replica of a medieval Serbian monastery.",
        "The complex also houses a small museum with traditional tools and artifacts.",
        "Swans and wild ducks swim on the lakes.",
        "The village offers masterpieces of traditional Bosnian cuisine."
      ]
    }, image: "/poi-images/ba-stanisici.webp"},
  {
    id: "ba-livno",
    type: "city",
    name: { de: "Livno", hu: "Livno", ro: "Livno", en: "Livno" },
    description: {
      de: "Historische Stadt bekannt für ihre Käseproduktion und Wildpferde in der Umgebung.",
      hu: "Történelmi város, amely sajtgyártásáról és a környékbeli vadlovairól ismert.",
      ro: "Oraș istoric cunoscut pentru producția sa de brânză și caii sălbatici din împrejurimi.",
      en: "Historic town known for its cheese production and wild horses in the area."
    },
    coords: [17.0078, 43.8269],
    parent: "BA-010",
    descriptionAdvanced: {
      de: "Livno ist eine historische Stadt, die in der weitläufigen Karstebene Livanjsko Polje liegt. Die Stadt ist berühmt für ihren Käse, den 'Livanjski sir', der seit über 100 Jahren nach einem ähnlichen Rezept wie Gruyère hergestellt wird. Eine weitere Attraktion der Region sind die Herden von Wildpferden, die frei auf dem Cincar-Plateau umherstreifen. Die Altstadt von Livno hat einen orientalischen Charakter mit der Dukatareva-Moschee und einem Uhrturm. In der Nähe befindet sich der riesige Buško-See, ein Paradies für Angler und Wassersportler.",
      hu: "Livno egy történelmi város, amely a tágas Livanjsko Polje karsztmezőn fekszik. A város híres sajtjáról, a 'Livanjski sir'-ről, amelyet több mint 100 éve a Gruyère-hez hasonló recept alapján készítenek. A régió másik vonzereje a vadlovak csordái, amelyek szabadon legelésznek a Cincar-fennsíkon. Livno óvárosa keleti karakterű, a Dukatareva-mecsettel és egy óratoronnyal. A közelben található a hatalmas Buško-tó, a horgászok és a vízi sportok kedvelőinek paradicsoma. Állattan K6 – Vadon élő állatok.",
      ro: "Livno este un oraș istoric situat în vasta câmpie carstică Livanjsko Polje. Orașul este renumit pentru brânza sa, 'Livanjski sir', care este produsă de peste 100 de ani după o rețetă similară cu cea a brânzei Gruyère. O altă atracție a regiunii sunt turmele de cai sălbatici care cutreieră liber pe platoul Cincar. Centrul vechi al orașului Livno are un caracter oriental, cu Moscheea Dukatareva și un turn cu ceas. În apropiere se află imensul lac Buško, un paradis pentru pescari și pasionații de sporturi nautice.",
      en: "Livno is a historic town located in the vast Livanjsko Polje karst field. The town is famous for its cheese, 'Livanjski sir,' which has been produced for over 100 years using a recipe similar to Gruyère. Another attraction of the region are the herds of wild horses that roam freely on the Cincar plateau. The old town of Livno has an oriental character with the Dukatareva Mosque and a clock tower. Nearby is the huge Buško Lake, a paradise for anglers and water sports enthusiasts. Zoology K6 - Wild Animals."
    },
    factsAdvanced: {
      de: [
        "Livanjsko Polje ist eine der größten Karstebenen (polje) der Welt.",
        "Der 'Livanjski sir' (Livno-Käse) wird seit der österreichisch-ungarischen Zeit hergestellt.",
        "Auf dem Cincar-Plateau leben über 700 Wildpferde, eine der größten Populationen in Europa.",
        "Livno wurde erstmals 892 in einer Urkunde des kroatischen Herzogs Muncimir erwähnt.",
        "Der Fluss Bistrica entspringt direkt unterhalb der Altstadt.",
        "In Livno befindet sich eine Galerie des berühmten Malers Gabrijel Jurkić."
      ],
      hu: [
        "A Livanjsko Polje a világ egyik legnagyobb karsztmezője (polje).",
        "A 'Livanjski sir'-t (livnói sajt) az osztrák-magyar idők óta készítik.",
        "A Cincar-fennsíkon több mint 700 vadló él, Európa egyik legnagyobb populációja.",
        "Livnót először 892-ben említik Muncimir horvát fejedelem egyik oklevelében.",
        "A Bistrica folyó közvetlenül az óváros alatt ered.",
        "Livnóban található Gabrijel Jurkić híres festő galériája.",
        "A város a középkori horvát királyság fontos központja volt.",
        "A környék tele van középkori 'stećak' sírkövekkel."
      ],
      ro: [
        "Livanjsko Polje este una dintre cele mai mari câmpii carstice (polje) din lume.",
        "Brânza 'Livanjski sir' este produsă încă din perioada austro-ungară.",
        "Pe platoul Cincar trăiesc peste 700 de cai sălbatici, una dintre cele mai mari populații din Europa.",
        "Livno a fost menționat pentru prima dată în 892 într-o cartă a ducelui croat Muncimir.",
        "Râul Bistrica izvorăște chiar de sub orașul vechi.",
        "În Livno se află o galerie a celebrului pictor Gabrijel Jurkić."
      ],
      en: [
        "Livanjsko Polje is one of the largest karst fields (polje) in the world.",
        "The 'Livanjski sir' (Livno cheese) has been produced since the Austro-Hungarian era.",
        "Over 700 wild horses live on the Cincar plateau, one of the largest populations in Europe.",
        "Livno was first mentioned in 892 in a charter of the Croatian Duke Muncimir.",
        "The Bistrica river rises directly below the old town.",
        "Livno is home to a gallery of the famous painter Gabrijel Jurkić.",
        "The city was an important center of the medieval Croatian kingdom.",
        "The area is full of medieval 'stećak' tombstones."
      ]
    }, image: "/poi-images/ba-livno.webp"},
  {
    id: "ba-busko",
    type: "landmark",
    name: { de: "Buško-See", hu: "Buško-tó", ro: "Lacul Buško", en: "Buško Lake" },
    description: {
      de: "Einer der größten künstlichen Seen in Europa, an der Grenze zu Kroatien.",
      hu: "Európa egyik legnagyobb mesterséges tava a horvát határ közelében.",
      ro: "Unul dintre cele mai mari lacuri artificiale din Europa, la granița cu Croația.",
      en: "One of the largest artificial lakes in Europe, near the Croatian border."
    },
    coords: [17.0500, 43.6333],
    parent: "BA-010",
    descriptionAdvanced: {
      de: "Der Buško-See, auch Buško Blato genannt, ist einer der größten Stauseen in Europa. Er liegt auf einer Höhe von über 700 Metern im Südwesten von Bosnien und Herzegowina, an der Grenze zu Kroatien. Der See wurde in den 1970er Jahren zur Stromerzeugung für ein Wasserkraftwerk in Kroatien angelegt. Er ist ein beliebtes Ziel für Angler, da er reich an Karpfen, Hechten und anderen Fischarten ist. Die weite Wasserfläche und die umliegenden Berge bieten eine beeindruckende Landschaft, die auch bei Windsurfern beliebt ist.",
      hu: "A Buško-tó, más néven Buško Blato, Európa egyik legnagyobb víztározója. Több mint 700 méteres magasságban fekszik Bosznia-Hercegovina délnyugati részén, a horvát határ mellett. A tavat az 1970-es években hozták létre egy horvátországi vízerőmű áramtermelése céljából. Népszerű célpont a horgászok számára, mivel gazdag pontyban, csukában és más halfajokban. A hatalmas vízfelület és a környező hegyek lenyűgöző tájat kínálnak, amely a szörfösök körében is népszerű. Földrajz K9 – Vízenergia és környezeti hatásai.",
      ro: "Lacul Buško, numit și Buško Blato, este unul dintre cele mai mari lacuri de acumulare din Europa. Este situat la o altitudine de peste 700 de metri în sud-vestul Bosniei și Herțegovinei, la granița cu Croația. Lacul a fost creat în anii 1970 pentru a genera electricitate pentru o hidrocentrală din Croația. Este o destinație populară pentru pescari, fiind bogat în crap, știucă și alte specii de pești. Vasta întindere de apă și munții din jur oferă un peisaj impresionant, popular și printre practicanții de windsurfing.",
      en: "Buško Lake, also called Buško Blato, is one of the largest reservoirs in Europe. It is located at an altitude of over 700 meters in the southwest of Bosnia and Herzegovina, on the border with Croatia. The lake was created in the 1970s to generate electricity for a hydroelectric power plant in Croatia. It is a popular destination for anglers, as it is rich in carp, pike, and other fish species. The vast expanse of water and the surrounding mountains offer a stunning landscape that is also popular with windsurfers. Geography K9 - Hydropower and its Environmental Impacts."
    },
    factsAdvanced: {
      de: [
        "Der See hat eine Fläche von etwa 55,8 Quadratkilometern.",
        "Er wurde in den 1970er Jahren durch die Überflutung eines Teils des Livanjsko Polje geschaffen.",
        "Das Wasser des Sees wird zur Stromerzeugung im Wasserkraftwerk Orlovac in Kroatien genutzt.",
        "Der See liegt auf einer Höhe von 716 Metern über dem Meeresspiegel.",
        "Er ist ein wichtiger Lebensraum für verschiedene Vogelarten.",
        "Der Name 'Buško Blato' bedeutet 'Buško-Sumpf' und bezieht sich auf das ursprüngliche Sumpfgebiet."
      ],
      hu: [
        "A tó területe körülbelül 55,8 négyzetkilométer.",
        "Az 1970-es években a Livanjsko Polje egy részének elárasztásával hozták létre.",
        "A tó vizét a horvátországi Orlovac vízerőműben használják áramtermelésre.",
        "A tó 716 méter tengerszint feletti magasságban fekszik.",
        "Fontos élőhelye különböző madárfajoknak.",
        "A 'Buško Blato' név 'Buško mocsarat' jelent, utalva az eredeti mocsárvidékre.",
        "A tó egyharmada Bosznia-Hercegovinához, kétharmada pedig Horvátországhoz tartozik.",
        "A tó népszerű a vitorlázók és a kajakozók körében is."
      ],
      ro: [
        "Lacul are o suprafață de aproximativ 55,8 kilometri pătrați.",
        "A fost creat în anii 1970 prin inundarea unei părți a Livanjsko Polje.",
        "Apa lacului este folosită pentru a genera electricitate la hidrocentrala Orlovac din Croația.",
        "Lacul este situat la o altitudine de 716 metri deasupra nivelului mării.",
        "Este un habitat important pentru diverse specii de păsări.",
        "Numele 'Buško Blato' înseamnă 'Mlaștina Buško' și se referă la zona mlăștinoasă originală."
      ],
      en: [
        "The lake has an area of about 55.8 square kilometers.",
        "It was created in the 1970s by flooding part of the Livanjsko Polje.",
        "The lake's water is used to generate electricity at the Orlovac hydroelectric power plant in Croatia.",
        "The lake is located at an altitude of 716 meters above sea level.",
        "It is an important habitat for various bird species.",
        "The name 'Buško Blato' means 'Buško-Sumpf' and refers to the original marshland.",
        "One-third of the lake belongs to Bosnia and Herzegovina and two-thirds to Croatia.",
        "The lake is also popular with sailors and kayakers."
      ]
    }, image: "/poi-images/ba-busko.webp"},
  {
    id: "ba-andricgrad",
    type: "landmark",
    name: { de: "Andrićgrad", hu: "Andrićgrad", ro: "Andrićgrad", en: "Andrićgrad" },
    description: {
      de: "Ein kulturelles Zentrum und Steinstadtprojekt zu Ehren von Ivo Andrić in Višegrad.",
      hu: "Kulturális központ és kőváros-projekt Ivo Andrić tiszteletére Višegradban.",
      ro: "Un centru cultural și un proiect de oraș de piatră în onoarea lui Ivo Andrić în Višegrad.",
      en: "A cultural center and stone town project in honor of Ivo Andrić in Višegrad."
    },
    coords: [19.2928, 43.7856],
    parent: "BA-012",
    descriptionAdvanced: {
      de: "Andrićgrad, auch bekannt als 'Steinstadt', ist ein Kultur- und Tourismusprojekt in Višegrad. Es wurde auf Initiative des Filmregisseurs Emir Kusturica erbaut und ist dem jugoslawischen Nobelpreisträgers Ivo Andrić gewidmet. Die Stadt aus Stein befindet sich auf einer Halbinsel am Zusammenfluss der Flüsse Drina und Rzav, in der Nähe der berühmten Mehmed-Paša-Sokolović-Brücke. Andrićgrad ist eine Mischung aus verschiedenen architektonischen Stilen, die die Geschichte von Višegrad widerspiegeln, von byzantinisch über osmanisch bis hin zu klassizistisch. Es beherbergt ein Theater, ein Kino, ein Institut, Galerien und Restaurants.",
      hu: "Az Andrićgrad, más néven 'Kőváros', egy kulturális és turisztikai projekt Višegradban. Emir Kusturica filmrendező kezdeményezésére épült, és a jugoszláv Nobel-díjas Ivo Andrićnak szentelték. A kőváros egy félszigeten található a Drina és a Rzav folyók összefolyásánál, a híres Szokollu Mehmed pasa hídja közelében. Az Andrićgrad különböző építészeti stílusok keveréke, amelyek Višegrad történelmét tükrözik, a bizáncitól az oszmánon át a klasszicistáig. Színházat, mozit, intézetet, galériákat és éttermeket foglal magában. Irodalom K9 – Irodalmi emlékhelyek.",
      ro: "Andrićgrad, cunoscut și sub numele de 'Orașul de Piatră', este un proiect cultural și turistic în Višegrad. A fost construit la inițiativa regizorului Emir Kusturica și este dedicat laureatului iugoslav al Premiului Nobel, Ivo Andrić. Orașul de piatră este situat pe o peninsulă la confluența râurilor Drina și Rzav, în apropierea faimosului pod Mehmed Paša Sokolović. Andrićgrad este un amestec de diferite stiluri arhitecturale care reflectă istoria Višegradului, de la bizantin la otoman și clasicist. Acesta găzduiește un teatru, un cinematograf, un institut, galerii și restaurante.",
      en: "Andrićgrad, also known as 'Stone Town,' is a cultural and tourism project in Višegrad. It was built on the initiative of film director Emir Kusturica and is dedicated to the Yugoslav Nobel laureate Ivo Andrić. The stone town is located on a peninsula at the confluence of the Drina and Rzav rivers, near the famous Mehmed Paša Sokolović Bridge. Andrićgrad is a mixture of different architectural styles that reflect the history of Višegrad, from Byzantine to Ottoman to Classicist. It houses a theater, a cinema, an institute, galleries, and restaurants. Literature K9 - Literary Memorials."
    },
    factsAdvanced: {
      de: [
        "Andrićgrad wurde offiziell am 28. Juni 2014, dem 100. Jahrestag des Attentats von Sarajevo, eröffnet.",
        "Das Projekt wurde vom Filmregisseur Emir Kusturica initiiert und mitfinanziert.",
        "Die Stadt ist dem einzigen jugoslawischen Nobelpreisträger für Literatur, Ivo Andrić, gewidmet.",
        "In der Stadt steht eine Statue von Ivo Andrić sowie eine von Petar II. Petrović-Njegoš.",
        "Andrićgrad wurde als Kulisse für Kusturicas Film 'On the Milky Road' verwendet.",
        "Der Komplex soll eine Nachbildung der historischen Stadt darstellen, wie sie in Andrićs Romanen beschrieben wird."
      ],
      hu: [
        "Az Andrićgradot hivatalosan 2014. június 28-án, a szarajevói merénylet 100. évfordulóján nyitották meg.",
        "A projektet Emir Kusturica filmrendező kezdeményezte és társfinanszírozta.",
        "A város az egyetlen jugoszláv irodalmi Nobel-díjasnak, Ivo Andrićnak van szentelve.",
        "A városban Ivo Andrić, valamint II. Petar Petrović-Njegoš szobra is áll.",
        "Az Andrićgradot Kusturica 'A Tejúton' című filmjének díszleteként használták.",
        "A komplexum a történelmi város másolata, ahogyan azt Andrić regényeiben leírta.",
        "A városban található az Andrić Intézet, amely a humán tudományokkal foglalkozik.",
        "A főutca, a 'Mlada Bosna' (Ifjú Bosznia), a szarajevói merényletet elkövető szervezetről kapta a nevét."
      ],
      ro: [
        "Andrićgrad a fost inaugurat oficial la 28 iunie 2014, la 100 de ani de la asasinarea de la Sarajevo.",
        "Proiectul a fost inițiat și co-finanțat de regizorul Emir Kusturica.",
        "Orașul este dedicat singurului laureat iugoslav al Premiului Nobel pentru Literatură, Ivo Andrić.",
        "În oraș se află o statuie a lui Ivo Andrić, precum și una a lui Petar al II-lea Petrović-Njegoš.",
        "Andrićgrad a fost folosit ca platou de filmare pentru filmul lui Kusturica 'Pe Calea Lactee'.",
        "Complexul este menit să fie o replică a orașului istoric, așa cum este descris în romanele lui Andrić."
      ],
      en: [
        "Andrićgrad was officially opened on June 28, 2014, the 100th anniversary of the assassination in Sarajevo.",
        "The project was initiated and co-financed by film director Emir Kusturica.",
        "The city is dedicated to the only Yugoslav Nobel laureate for literature, Ivo Andrić.",
        "In the city there is a statue of Ivo Andrić as well as one of Petar II Petrović-Njegoš.",
        "Andrićgrad was used as a set for Kusturica's film 'On the Milky Road'.",
        "The complex is intended to be a replica of the historic city as described in Andrić's novels.",
        "The city is home to the Andrić Institute, which deals with the humanities.",
        "The main street, 'Mlada Bosna' (Young Bosnia), is named after the organization that carried out the assassination in Sarajevo."
      ]
    }, image: "/poi-images/ba-andricgrad.webp"},
  {
    id: "ba-orlovaca",
    type: "landmark",
    name: { de: "Orlovača-Höhle", hu: "Orlovača-barlang", ro: "Peștera Orlovača", en: "Orlovača Cave" },
    description: {
      de: "Eine der längsten Höhlen in Bosnien und Herzegowina, reich an Stalaktiten und Stalagmiten.",
      hu: "Bosznia-Hercegovina egyik leghosszabb barlangja, gazdag cseppkövekben.",
      ro: "Una dintre cele mai lungi peșteri din Bosnia și Herțegovina, bogată în stalactite și stalagmite.",
      en: "One of the longest caves in Bosnia and Herzegovina, rich in stalactites and stalagmites."
    },
    coords: [18.5750, 43.8167],
    parent: "BA-017",
    descriptionAdvanced: {
      de: "Die Orlovača-Höhle ist ein beeindruckendes Karsthöhlensystem in der Nähe von Pale. Sie ist eine der längsten Höhlen in Bosnien und Herzegowina mit einem bisher erforschten Tunnelsystem von über 2.500 Metern. Ein Teil der Höhle ist für Touristen zugänglich und enthüllt eine unterirdische Welt voller prächtiger Stalaktiten, Stalagmiten und anderer Höhlenformationen in verschiedenen Farben und Formen. In der Höhle wurden Knochen von Höhlenbären gefunden, die auf ein Alter von über 16.000 Jahren geschätzt werden. Die konstante Temperatur in der Höhle beträgt das ganze Jahr über etwa 9°C.",
      hu: "Az Orlovača-barlang egy lenyűgöző karsztbarlang-rendszer Pale közelében. Bosznia-Hercegovina egyik leghosszabb barlangja, eddig több mint 2500 méter hosszú alagútrendszerrel. A barlang egy része látogatható, és egy föld alatti világot tár fel, amely tele van csodálatos cseppkövekkel és más barlangi képződményekkel, különböző színekben és formákban. A barlangban több mint 16 000 évesre becsült barlangi medve csontokat találtak. A barlang állandó hőmérséklete egész évben körülbelül 9°C. Geológia K7 – Karsztjelenségek.",
      ro: "Peștera Orlovača este un sistem impresionant de peșteri carstice lângă Pale. Este una dintre cele mai lungi peșteri din Bosnia și Herțegovina, cu un sistem de tuneluri explorat până acum de peste 2.500 de metri. O parte a peșterii este accesibilă turiștilor și dezvăluie o lume subterană plină de stalactite, stalagmite și alte formațiuni de peșteră magnifice, de diferite culori și forme. În peșteră au fost găsite oase de urs de peșteră, estimate la o vechime de peste 16.000 de ani. Temperatura constantă în peșteră este de aproximativ 9°C pe tot parcursul anului.",
      en: "The Orlovača cave is an impressive karst cave system near Pale. It is one of the longest caves in Bosnia and Herzegovina, with a tunnel system explored so far of over 2,500 meters. A part of the cave is accessible to tourists and reveals an underground world full of magnificent stalactites, stalagmites, and other cave formations in various colors and shapes. Cave bear bones, estimated to be over 16,000 years old, have been found in the cave. The constant temperature in the cave is about 9°C throughout the year. Geology K7 - Karst Phenomena."
    },
    factsAdvanced: {
      de: [
        "Die erforschte Länge der Höhle beträgt über 2.500 Meter, wovon 560 Meter für Touristen zugänglich sind.",
        "In der Höhle wurden Überreste von Höhlenbären (Ursus spelaeus) gefunden.",
        "Sie ist reich an verschiedenen Höhlenornamenten, die durch die langsame Ablagerung von Kalzit entstanden sind.",
        "Die Höhle ist ein wichtiger Lebensraum für mehrere Fledermausarten.",
        "Die konstante Temperatur in der Höhle liegt bei 8,8 °C und die Luftfeuchtigkeit bei über 90%.",
        "Am Eingang der Höhle befindet sich ein kleines Museum."
      ],
      hu: [
        "A barlang feltárt hossza több mint 2500 méter, amelyből 560 méter látogatható.",
        "A barlangban barlangi medve (Ursus spelaeus) maradványait találták.",
        "Gazdag különböző barlangi díszekben, amelyek a kalcit lassú lerakódásával jöttek létre.",
        "A barlang fontos élőhelye több denevérfajnak.",
        "A barlang állandó hőmérséklete 8,8 °C, a páratartalom pedig több mint 90%.",
        "A barlang bejáratánál egy kis múzeum található.",
        "A barlangot a Sinjeva folyó hozta létre.",
        "A barlangot a helyiek régóta ismerték, de csak a 20. század végén kutatták szisztematikusan."
      ],
      ro: [
        "Lungimea explorată a peșterii este de peste 2.500 de metri, din care 560 de metri sunt accesibili turiștilor.",
        "În peșteră au fost găsite rămășițe de urs de peșteră (Ursus spelaeus).",
        "Este bogată în diverse ornamente de peșteră, formate prin depunerea lentă a calcitei.",
        "Peștera este un habitat important pentru mai multe specii de lilieci.",
        "Temperatura constantă în peșteră este de 8,8 °C, iar umiditatea de peste 90%.",
        "La intrarea în peșteră se află un mic muzeu."
      ],
      en: [
        "The explored length of the cave is over 2,500 meters, of which 560 meters are accessible to tourists.",
        "Remains of cave bears (Ursus spelaeus) have been found in the cave.",
        "It is rich in various cave ornaments formed by the slow deposition of calcite.",
        "The cave is an important habitat for several species of bats.",
        "The constant temperature in the cave is 8.8 °C and the humidity is over 90%.",
        "There is a small museum at the entrance of the cave.",
        "The cave was created by the Sinjeva River.",
        "The cave was long known to locals, but was only systematically explored in the late 20th century."
      ]
    }, image: "/poi-images/ba-orlovaca.webp"},
  {
    id: "ba-gorazde",
    type: "city",
    name: { de: "Goražde", hu: "Goražde", ro: "Goražde", en: "Goražde" },
    description: {
      de: "Stadt am Oberlauf der Drina, bekannt für ihren Widerstand während des Bosnienkrieges.",
      hu: "Város a Drina felső folyásánál, amely a boszniai háború alatti ellenállásáról ismert.",
      ro: "Oraș pe cursul superior al râului Drina, cunoscut pentru rezistența sa în timpul războiului din Bosnia.",
      en: "Town on the upper Drina river, known for its resistance during the Bosnian War."
    },
    coords: [18.9742, 43.6669],
    parent: "BA-002",
    descriptionAdvanced: {
      de: "Goražde ist eine Stadt im Osten Bosniens, die sich entlang des smaragdgrünen Flusses Drina erstreckt. Die Stadt erlangte während des Bosnienkrieges große Bekanntheit, als sie eine von nur drei bosnischen Enklaven war, die der Belagerung durch die Armee der Republika Srpska standhielten. Diese Zeit des Widerstands prägt die Identität der Stadt bis heute. Goražde ist von Bergen umgeben und liegt in einer malerischen Landschaft. Die Drina bietet Möglichkeiten zum Angeln und Kajakfahren. Die Stadt ist ein Symbol für Widerstandsfähigkeit und den Überlebenswillen ihrer Bewohner.",
      hu: "Goražde egy város Kelet-Boszniában, amely a smaragdzöld Drina folyó mentén húzódik. A város a boszniai háború alatt vált ismertté, amikor egyike volt annak a három bosnyák enklávénak, amely ellenállt a Szerb Köztársaság hadseregének ostromának. Az ellenállás ezen időszaka a mai napig meghatározza a város identitását. Goraždét hegyek veszik körül, és festői tájban fekszik. A Drina lehetőséget kínál horgászatra és kajakozásra. A város az ellenálló képesség és lakóinak túlélési akaratának szimbóluma. Történelem K9 – A délszláv háborúk.",
      ro: "Goražde este un oraș în estul Bosniei, care se întinde de-a lungul râului Drina de un verde smarald. Orașul a devenit cunoscut în timpul războiului din Bosnia, când a fost una dintre cele doar trei enclave bosniace care au rezistat asediului armatei Republicii Srpska. Această perioadă de rezistență marchează identitatea orașului până în prezent. Goražde este înconjurat de munți și este situat într-un peisaj pitoresc. Râul Drina oferă oportunități pentru pescuit și caiac-canoe. Orașul este un simbol al rezistenței și al voinței de supraviețuire a locuitorilor săi.",
      en: "Goražde is a town in eastern Bosnia, stretching along the emerald-green Drina River. The town became widely known during the Bosnian War when it was one of only three Bosnian enclaves to resist the siege by the Army of Republika Srpska. This period of resistance continues to shape the city's identity today. Goražde is surrounded by mountains and set in a picturesque landscape. The Drina River offers opportunities for fishing and kayaking. The city is a symbol of resilience and the will of its inhabitants to survive. History K9 - The Yugoslav Wars."
    },
    factsAdvanced: {
      de: [
        "Goražde war während des Bosnienkrieges (1992-1995) eine von der UN geschützte 'Sicherheitszone'.",
        "Die Stadt war fast vier Jahre lang belagert und wurde über einen Bergpfad versorgt.",
        "Der Fluss Drina ist bekannt für die Huchenfischerei, eine große Lachsart.",
        "In der Nähe befindet sich die Kirche des Heiligen Georg in Sopotnica, die aus dem 15. Jahrhundert stammt.",
        "Goražde ist heute der Verwaltungssitz des Kantons Bosnisches Podrinje.",
        "Die Wirtschaft der Stadt stützt sich auf die Metallverarbeitungs- und Chemieindustrie."
      ],
      hu: [
        "Goražde a boszniai háború (1992-1995) alatt az ENSZ által védett 'biztonsági zóna' volt.",
        "A várost közel négy évig ostromolták, és egy hegyi ösvényen keresztül látták el.",
        "A Drina folyó a galóca-horgászatról ismert, amely egy nagy lazacféle.",
        "A közelben található a 15. századi Szent György-templom Sopotnicában.",
        "Goražde ma a Boszniai Podrinje kanton közigazgatási központja.",
        "A város gazdasága a fémfeldolgozó- és vegyiparra támaszkodik.",
        "A városban minden évben megrendezik a 'Drinai Regatta' evezősversenyt.",
        "A háború alatt a városban működött egy improvizált 'háborús mozi'."
      ],
      ro: [
        "Goražde a fost o 'zonă de siguranță' protejată de ONU în timpul războiului din Bosnia (1992-1995).",
        "Orașul a fost asediat timp de aproape patru ani și a fost aprovizionat printr-o potecă montană.",
        "Râul Drina este cunoscut pentru pescuitul la lostriță, o specie mare de somon.",
        "În apropiere se află Biserica Sf. Gheorghe din Sopotnica, datând din secolul al XV-lea.",
        "Goražde este astăzi sediul administrativ al Cantonului Podrinje Bosniac.",
        "Economia orașului se bazează pe industria metalurgică și chimică."
      ],
      en: [
        "Goražde was a UN-protected 'safe area' during the Bosnian War (1992-1995).",
        "The city was under siege for nearly four years and was supplied via a mountain path.",
        "The Drina River is known for Huchen (Danube salmon) fishing.",
        "Nearby is the Church of St. George in Sopotnica, dating from the 15th century.",
        "Goražde is now the administrative seat of the Bosnian-Podrinje Canton.",
        "The city's economy relies on the metal-processing and chemical industries.",
        "The 'Drina Regatta' rowing event is held in the city every year.",
        "During the war, an improvised 'war cinema' operated in the city."
      ]
    }, image: "/poi-images/ba-gorazde.webp"},
  {
    id: "ba-gorazde-bridge",
    type: "landmark",
    name: { de: "Brücke in Goražde", hu: "Híd Goraždén", ro: "Podul din Goražde", en: "Bridge in Goražde" },
    description: {
      de: "Eine der Brücken über die Drina, die das Zentrum des städtischen Lebens in Goražde darstellt.",
      hu: "A Drina egyik hídja, amely Goražde városi életének központját képezi.",
      ro: "Unul dintre podurile peste Drina, reprezentând centrul vieții urbane din Goražde.",
      en: "One of the bridges over the Drina, representing the center of urban life in Goražde."
    },
    coords: [18.9750, 43.6675],
    parent: "BA-002",
    descriptionAdvanced: {
      de: "Die Brücken von Goražde sind mehr als nur Strukturen, die die beiden Ufer der Drina verbinden. Sie sind Lebensadern und soziale Treffpunkte. Während der Belagerung waren die Brücken entscheidend für die Verteidigung und den Zusammenhalt der Stadt. Heute sind sie Symbole für die Verbindung und den Wiederaufbau. Im Sommer versammeln sich die Einheimischen an den Brücken und am Flussufer, um zu schwimmen, Kontakte zu knüpfen und an Veranstaltungen teilzunehmen. Die Brücken bieten einen malerischen Blick auf den Fluss und die umliegende Stadt.",
      hu: "Goražde hídjai többek, mint a Drina két partját összekötő építmények. Életvonalak és társadalmi találkozóhelyek. Az ostrom alatt a hidak döntő fontosságúak voltak a város védelmében és összetartásában. Ma az összeköttetés és az újjáépítés szimbólumai. Nyáron a helyiek a hidaknál és a folyóparton gyűlnek össze úszni, társasági életet élni és rendezvényeken részt venni. A hidak festői kilátást nyújtanak a folyóra és a környező városra. Építészet K7 – Hidak és közösségek.",
      ro: "Podurile din Goražde sunt mai mult decât simple structuri care leagă cele două maluri ale Drinei. Ele sunt artere vitale și puncte de întâlnire socială. În timpul asediului, podurile au fost cruciale pentru apărarea și coeziunea orașului. Astăzi, ele sunt simboluri ale legăturii și reconstrucției. Vara, localnicii se adună la poduri și pe malul râului pentru a înota, a socializa și a participa la evenimente. Podurile oferă o priveliște pitorească asupra râului și a orașului înconjurător.",
      en: "The bridges of Goražde are more than just structures connecting the two banks of the Drina. They are lifelines and social meeting points. During the siege, the bridges were crucial for the city's defense and cohesion. Today, they are symbols of connection and reconstruction. In the summer, locals gather at the bridges and on the riverbanks to swim, socialize, and participate in events. The bridges offer a picturesque view of the river and the surrounding city. Architecture K7 - Bridges and Communities."
    },
    factsAdvanced: {
      de: [
        "Eine der Hauptbrücken wurde während des Krieges zerstört und später wiederaufgebaut.",
        "Die Brücken sind ein zentraler Bestandteil der jährlichen Drina-Regatta.",
        "Sie verbinden die beiden Hauptteile der Stadt.",
        "Die Ufer um die Brücken sind im Sommer beliebte Bade- und Erholungsorte.",
        "Von den Brücken aus hat man einen guten Blick auf die Stromschnellen der Drina.",
        "Die Brücken dienen als Treffpunkt für junge Leute."
      ],
      hu: [
        "Az egyik fő hidat a háború alatt lerombolták, majd később újjáépítették.",
        "A hidak a minden évben megrendezett Drina Regatta központi elemei.",
        "Összekötik a város két fő részét.",
        "A hidak körüli partok nyáron népszerű fürdő- és üdülőhelyek.",
        "A hidakról jó kilátás nyílik a Drina zúgóira.",
        "A hidak a fiatalok találkozóhelyéül szolgálnak.",
        "A 'Híd a Drinán' kifejezés a városban az összetartozás szinonimájává vált.",
        "A hidak alatti pillérek a folyó erejének tanúi."
      ],
      ro: [
        "Unul dintre podurile principale a fost distrus în timpul războiului și ulterior reconstruit.",
        "Podurile sunt o parte centrală a Regatei anuale de pe Drina.",
        "Ele leagă cele două părți principale ale orașului.",
        "Malurile din jurul podurilor sunt locuri populare de scăldat și recreere în timpul verii.",
        "De pe poduri se poate admira o priveliște bună asupra repezișurilor Drinei.",
        "Podurile servesc drept loc de întâlnire pentru tineri."
      ],
      en: [
        "One of the main bridges was destroyed during the war and later rebuilt.",
        "The bridges are a central part of the annual Drina Regatta.",
        "They connect the two main parts of the city.",
        "The banks around the bridges are popular swimming and recreation spots in the summer.",
        "From the bridges, one can get a good view of the Drina's rapids.",
        "The bridges serve as a meeting point for young people.",
        "The phrase 'Bridge on the Drina' has become synonymous with community in the town.",
        "The pillars beneath the bridges are a testament to the river's power."
      ]
    }
  }
];

export const bosniaAllPoi = [bosniaCountry, ...bosniaPois];

