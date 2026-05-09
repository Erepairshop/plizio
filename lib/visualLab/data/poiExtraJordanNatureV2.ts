import type { POI } from "./poi";

export const poiExtraJordanNatureV2: POI[] = [
  {
    id: "wadi-rum-nature-v2",
    type: "national-park",
    parent: "JO-AQ",
    coords: [35.4208, 29.5758],
    name: { de: "Wadi Rum", hu: "Vádi Rum", ro: "Wadi Rum", en: "Wadi Rum" },
    description: { de: "Dieses spektakuläre Wüstental ist berühmt für seine monolithischen Felsformationen und roten Sanddünen.", hu: "Ez a látványos sivatagi völgy híres monolitikus sziklaalakzatairól és vörös homokdűnéiről.", ro: "Această vale deșertică spectaculoasă este faimoasă pentru formațiunile sale stâncoase monolitice și dunele de nisip roșu.", en: "This spectacular desert valley is famous for its monolithic rock formations and red sand dunes." },
    facts: {
      de: ["Umfasst eine Fläche von rund 720 Quadratkilometern.", "Wurde 2011 zum UNESCO-Welterbe erklärt."],
      hu: ["Mintegy 720 négyzetkilométeres területet ölel fel.", "2011-ben az UNESCO Világörökség részévé nyilvánították."],
      ro: ["Acoperă o suprafață de aproximativ 720 de kilometri pătrați.", "A fost declarat Patrimoniu Mondial UNESCO în 2011."],
      en: ["Covers an area of around 720 square kilometers.", "Was declared a UNESCO World Heritage Site in 2011."]
    }
  },
  {
    id: "totes-meer-nature-v2",
    type: "lake",
    parent: "JO-MD",
    coords: [35.4500, 31.5000],
    name: { de: "Totes Meer", hu: "Holt-tenger", ro: "Marea Moartă", en: "Dead Sea" },
    description: { de: "Dieser abflusslose Salzsee liegt über 400 Meter unter dem Meeresspiegel und ist der tiefste trockene Punkt der Erde.", hu: "Ez a lefolyástalan sóstó több mint 400 méterrel a tengerszint alatt fekszik, és a Föld legmélyebb szárazföldi pontja.", ro: "Acest lac sărat endoreic se află la peste 400 de metri sub nivelul mării, fiind cel mai jos punct uscat de pe Pământ.", en: "This endorheic salt lake lies over 400 meters below sea level, making it the lowest dry point on Earth." },
    facts: {
      de: ["Der Salzgehalt liegt bei fast 34 Prozent.", "Das Wasser hat eine extrem hohe Dichte."],
      hu: ["Sótartalma eléri a majdnem 34 százalékot.", "A víz rendkívül nagy sűrűséggel rendelkezik."],
      ro: ["Conținutul de sare este de aproape 34 la sută.", "Apa are o densitate extrem de mare."],
      en: ["The salt content is almost 34 percent.", "The water has an extremely high density."]
    }
  },
  {
    id: "dana-biosphere-nature-v2",
    type: "national-park",
    parent: "JO-AT",
    coords: [35.6166, 30.6833],
    name: { de: "Biosphärenreservat Dana", hu: "Dana Bioszféra-rezervátum", ro: "Rezervația Biosferei Dana", en: "Dana Biosphere Reserve" },
    description: { de: "Das größte Naturschutzgebiet Jordaniens umfasst vier verschiedene biogeografische Zonen und eine enorme Artenvielfalt.", hu: "Jordánia legnagyobb természetvédelmi területe négy különböző biogeográfiai zónát és hatalmas fajgazdagságot foglal magába.", ro: "Cea mai mare rezervație naturală din Iordania cuprinde patru zone biogeografice diferite și o biodiversitate enormă.", en: "Jordan's largest nature reserve encompasses four distinct biogeographical zones and enormous biodiversity." },
    facts: {
      de: ["Wurde 1989 gegründet.", "Beherbergt über 800 Pflanzenarten."],
      hu: ["1989-ben alapították.", "Több mint 800 növényfajnak ad otthont."],
      ro: ["A fost fondată în 1989.", "Găzduiește peste 800 de specii de plante."],
      en: ["Was established in 1989.", "Is home to over 800 plant species."]
    }
  },
  {
    id: "mujib-reserve-nature-v2",
    type: "national-park",
    parent: "JO-MD",
    coords: [35.6166, 31.4666],
    name: { de: "Mujib Biosphärenreservat", hu: "Múdzsib Bioszféra-rezervátum", ro: "Rezervația Biosferei Mujib", en: "Mujib Biosphere Reserve" },
    description: { de: "Das am tiefsten gelegene Naturschutzgebiet der Erde besticht durch spektakuläre Schluchten und versteckte Wasserfälle.", hu: "A Föld legmélyebben fekvő természetvédelmi területe lenyűgöző szurdokaival és rejtett vízeséseivel hódít.", ro: "Cea mai joasă rezervație naturală de pe Pământ impresionează prin defileurile sale spectaculoase și cascadele ascunse.", en: "The lowest nature reserve on Earth captivates with its spectacular gorges and hidden waterfalls." },
    facts: {
      de: ["Liegt bis zu 410 Meter unter dem Meeresspiegel.", "Grenzt direkt an das Tote Meer."],
      hu: ["Akár 410 méterrel a tengerszint alatt fekszik.", "Közvetlenül a Holt-tengerrel határos."],
      ro: ["Se află la până la 410 metri sub nivelul mării.", "Se învecinează direct cu Marea Moartă."],
      en: ["Lies up to 410 meters below sea level.", "Borders directly on the Dead Sea."]
    }
  },
  {
    id: "azraq-wetland-nature-v2",
    type: "national-park",
    parent: "JO-AZ",
    coords: [36.8333, 31.8333],
    name: { de: "Azraq-Feuchtgebiet", hu: "Azrak Vizesélőhely", ro: "Zona Umedă Azraq", en: "Azraq Wetland Reserve" },
    description: { de: "Diese Wüstenoase war einst ein riesiges Sumpfgebiet und ist heute ein wichtiger Rastplatz für Millionen von Zugvögeln.", hu: "Ez a sivatagi oázis egykor hatalmas mocsárvidék volt, ma pedig vándormadarak millióinak fontos pihenőhelye.", ro: "Această oază deșertică a fost odată o mlaștină vastă, iar astăzi este un loc de popas important pentru milioane de păsări migratoare.", en: "This desert oasis was once a vast marshland and is today an important resting place for millions of migratory birds." },
    facts: {
      de: ["Wurde 1978 unter internationalen Schutz gestellt.", "Besitzt künstlich gepflegte Teiche für Vögel."],
      hu: ["1978-ban nemzetközi védelem alá helyezték.", "Mesterségesen fenntartott tavakkal rendelkezik a madarak számára."],
      ro: ["A fost plasată sub protecție internațională în 1978.", "Are iazuri întreținute artificial pentru păsări."],
      en: ["Was placed under international protection in 1978.", "Has artificially maintained ponds for birds."]
    }
  },
  {
    id: "shaumari-wildlife-nature-v2",
    type: "national-park",
    parent: "JO-AZ",
    coords: [36.8000, 31.7833],
    name: { de: "Shaumari-Wildtierreservat", hu: "Saumari Vadrezervátum", ro: "Rezervația de Animale Sălbatice Shaumari", en: "Shaumari Wildlife Reserve" },
    description: { de: "Ein kleines Reservat, das zur Zucht und Auswilderung seltener Wüstentiere wie der Arabischen Oryx-Antilope gegründet wurde.", hu: "Egy kis rezervátum, amelyet ritka sivatagi állatok, például az arab bejzák tenyésztésére és szabadon bocsátására hoztak létre.", ro: "O mică rezervație înființată pentru reproducerea și eliberarea animalelor deșertice rare, cum ar fi oryxul arab.", en: "A small reserve established for the breeding and reintroduction of rare desert animals like the Arabian oryx." },
    facts: {
      de: ["Die Arabische Oryx wurde hier erfolgreich nachgezüchtet.", "Das Reservat ist nur 22 Quadratkilometer groß."],
      hu: ["Az arab bejzát itt sikeresen tenyésztették újra.", "A rezervátum mindössze 22 négyzetkilométeres."],
      ro: ["Oryxul arab a fost crescut aici cu succes.", "Rezervația are doar 22 de kilometri pătrați."],
      en: ["The Arabian oryx was successfully bred here.", "The reserve is only 22 square kilometers in size."]
    }
  },
  {
    id: "ajloun-forest-nature-v2",
    type: "forest",
    parent: "JO-AJ",
    coords: [35.7500, 32.3833],
    name: { de: "Waldreservat Adschlun", hu: "Adzslún Erdőrezervátum", ro: "Rezervația Forestieră Ajloun", en: "Ajloun Forest Reserve" },
    description: { de: "Ein dichtes Waldgebiet aus immergrünen Eichen, das eine wichtige Zuflucht für Rehe, Wildschweine und seltene Vogelarten bietet.", hu: "Örökzöld tölgyekből álló sűrű erdő, amely fontos menedéket nyújt az őzeknek, vaddisznóknak és ritka madárfajoknak.", ro: "O zonă de pădure deasă de stejari veșnic verzi, care oferă un refugiu important pentru căprioare, mistreți și specii rare de păsări.", en: "A dense forest area of evergreen oaks that provides an important refuge for deer, wild boars, and rare bird species." },
    facts: {
      de: ["Liegt auf einer Höhe von bis zu 1100 Metern.", "Ist ein Überrest der ursprünglichen Wälder Jordaniens."],
      hu: ["Akár 1100 méteres magasságban fekszik.", "Jordánia eredeti erdeinek egyik maradványa."],
      ro: ["Se află la o altitudine de până la 1100 de metri.", "Este o rămășiță a pădurilor originale ale Iordaniei."],
      en: ["Lies at an altitude of up to 1100 meters.", "Is a remnant of Jordan's original forests."]
    }
  },
  {
    id: "dibbeen-forest-nature-v2",
    type: "forest",
    parent: "JO-JA",
    coords: [35.8333, 32.2333],
    name: { de: "Waldreservat Dibbeen", hu: "Dibbin Erdőrezervátum", ro: "Rezervația Forestieră Dibbeen", en: "Dibbeen Forest Reserve" },
    description: { de: "Dieses hügelige Reservat schützt die letzten verbliebenen Bestände der seltenen Aleppo-Kiefer in der Region.", hu: "Ez a dombos rezervátum védi a ritka aleppóifenyő utolsó megmaradt állományait a régióban.", ro: "Această rezervație deluroasă protejează ultimele populații rămase de pin de Alep rar din regiune.", en: "This hilly reserve protects the last remaining stands of the rare Aleppo pine in the region." },
    facts: {
      de: ["Wurde 2004 als Schutzgebiet ausgewiesen.", "Beherbergt seltene Orchideenarten."],
      hu: ["2004-ben nyilvánították védett területté.", "Ritka orchideafajoknak ad otthont."],
      ro: ["A fost desemnată zonă protejată în 2004.", "Găzduiește specii rare de orhidee."],
      en: ["Was designated as a protected area in 2004.", "Is home to rare orchid species."]
    }
  },
  {
    id: "jordan-river-nature-v2",
    type: "river",
    parent: "JO-BA",
    coords: [35.5333, 31.7500],
    name: { de: "Jordan-Fluss", hu: "Jordán-folyó", ro: "Râul Iordan", en: "Jordan River" },
    description: { de: "Dieser historisch und religiös bedeutende Fluss bildet die natürliche Grenze zwischen Jordanien und den palästinensischen Gebieten.", hu: "Ez a történelmileg és vallásilag jelentős folyó alkotja a természetes határt Jordánia és a palesztin területek között.", ro: "Acest râu cu o semnificație istorică și religioasă deosebită formează granița naturală între Iordania și teritoriile palestiniene.", en: "This historically and religiously significant river forms the natural border between Jordan and the Palestinian territories." },
    facts: {
      de: ["Mündet im Süden in das Tote Meer.", "Seine Gesamtlänge beträgt etwa 251 Kilometer."],
      hu: ["Délen a Holt-tengerbe torkollik.", "Teljes hossza körülbelül 251 kilométer."],
      ro: ["Se varsă în Marea Moartă în sud.", "Lungimea sa totală este de aproximativ 251 de kilometri."],
      en: ["Flows into the Dead Sea in the south.", "Its total length is about 251 kilometers."]
    }
  },
  {
    id: "yarmouk-river-nature-v2",
    type: "river",
    parent: "JO-IR",
    coords: [35.6833, 32.6833],
    name: { de: "Jarmuk-Fluss", hu: "Jarmuk-folyó", ro: "Râul Yarmouk", en: "Yarmouk River" },
    description: { de: "Der größte Nebenfluss des Jordans gräbt sich tief in die Landschaft ein und trennt Jordanien von Syrien.", hu: "A Jordán legnagyobb mellékfolyója mélyen a tájba vájja magát, és elválasztja Jordániát Szíriától.", ro: "Cel mai mare afluent al Iordanului sapă adânc în peisaj și separă Iordania de Siria.", en: "The largest tributary of the Jordan River carves deep into the landscape and separates Jordan from Syria." },
    facts: {
      de: ["Entspringt im Hauran-Gebiet in Syrien.", "War Schauplatz der historischen Schlacht am Jarmuk."],
      hu: ["A szíriai Hauran-vidéken ered.", "A történelmi jarmuki csata színhelye volt."],
      ro: ["Izvorăște în regiunea Hauran din Siria.", "A fost scena istoricei bătălii de la Yarmouk."],
      en: ["Originates in the Hauran region in Syria.", "Was the site of the historical Battle of Yarmouk."]
    }
  },
  {
    id: "zarqa-river-nature-v2",
    type: "river",
    parent: "JO-AZ",
    coords: [35.9166, 32.1833],
    name: { de: "Zarqa-Fluss", hu: "Zarka-folyó", ro: "Râul Zarqa", en: "Zarqa River" },
    description: { de: "Ein wichtiges Flusssystem im Norden Jordaniens, das durch steile Täler fließt und den König-Talal-Stausee speist.", hu: "Fontos folyórendszer Jordánia északi részén, amely meredek völgyeken folyik keresztül, és a Talal Király-gátat táplálja.", ro: "Un sistem fluvial important în nordul Iordaniei, care curge prin văi abrupte și alimentează Barajul King Talal.", en: "An important river system in northern Jordan that flows through steep valleys and feeds the King Talal Dam." },
    facts: {
      de: ["Wird in der Bibel als Fluss Jabbok erwähnt.", "Sein Wasser wird intensiv für die Landwirtschaft genutzt."],
      hu: ["A Biblia Jabbok folyóként említi.", "Vizét intenzíven használják mezőgazdasági célokra."],
      ro: ["Este menționat în Biblie ca râul Iaboc.", "Apa sa este folosită intens pentru agricultură."],
      en: ["Is mentioned in the Bible as the river Jabbok.", "Its water is used intensively for agriculture."]
    }
  },
  {
    id: "jabal-umm-ad-dami-nature-v2",
    type: "mountain",
    parent: "JO-AQ",
    coords: [35.4294, 29.3130],
    name: { de: "Dschabal Umm ad-Dami", hu: "Dzsebel Umm ad-Dámi", ro: "Jabal Umm ad-Dami", en: "Jabal Umm ad-Dami" },
    description: { de: "Mit über 1800 Metern ist dies der höchste Berg Jordaniens, gelegen im äußersten Süden nahe der saudischen Grenze.", hu: "Több mint 1800 méterével ez Jordánia legmagasabb hegye, amely a legdélibb részen, a szaúdi határ közelében található.", ro: "Cu peste 1800 de metri, acesta este cel mai înalt munte din Iordania, situat în sudul extrem, aproape de granița saudită.", en: "At over 1800 meters, this is the highest mountain in Jordan, located in the extreme south near the Saudi border." },
    facts: {
      de: ["Erreicht eine Höhe von 1854 Metern.", "An klaren Tagen kann man von hier das Rote Meer sehen."],
      hu: ["Eléri az 1854 méteres magasságot.", "Tiszta időben innen látni a Vörös-tengert."],
      ro: ["Atinge o altitudine de 1854 de metri.", "În zilele senine se poate vedea Marea Roșie de aici."],
      en: ["Reaches an altitude of 1854 meters.", "On clear days, the Red Sea can be seen from here."]
    }
  },
  {
    id: "jabal-ram-nature-v2",
    type: "mountain",
    parent: "JO-AQ",
    coords: [35.3977, 29.5719],
    name: { de: "Dschabal Ram", hu: "Dzsebel Ram", ro: "Jabal Ram", en: "Jabal Ram" },
    description: { de: "Ein massiver Sandsteinberg im Wadi Rum, der lange Zeit fälschlicherweise für den höchsten Gipfel des Landes gehalten wurde.", hu: "Masszív homokkő hegy a Vádi Rumban, amelyet sokáig tévesen az ország legmagasabb csúcsának tartottak.", ro: "Un munte masiv de gresie în Wadi Rum, care a fost mult timp considerat în mod eronat cel mai înalt vârf din țară.", en: "A massive sandstone mountain in Wadi Rum that was long mistakenly believed to be the country's highest peak." },
    facts: {
      de: ["Seine markanten Klippen ziehen viele Kletterer an.", "Erhebt sich 1734 Meter über den Meeresspiegel."],
      hu: ["Karakteres sziklái sok hegymászót vonzanak.", "1734 méterrel emelkedik a tengerszint fölé."],
      ro: ["Stâncile sale izbitoare atrag mulți alpiniști.", "Se ridică la 1734 de metri deasupra nivelului mării."],
      en: ["Its striking cliffs attract many climbers.", "Rises 1734 meters above sea level."]
    }
  },
  {
    id: "fifa-nature-reserve-nature-v2",
    type: "national-park",
    parent: "JO-KA",
    coords: [35.4666, 31.0000],
    name: { de: "Naturschutzgebiet Fifa", hu: "Fifa Természetvédelmi Terület", ro: "Rezervația Naturală Fifa", en: "Fifa Nature Reserve" },
    description: { de: "Dieses tief gelegene Feuchtgebiet südlich des Toten Meeres ist ein wichtiger Lebensraum für bedrohte Wüstenkärpflinge.", hu: "A Holt-tengertől délre fekvő mély vizesélőhely fontos élőhelye a veszélyeztetett sivatagi fogaspontyoknak.", ro: "Această zonă umedă joasă, aflată la sud de Marea Moartă, este un habitat important pentru peștii deșertici pe cale de dispariție.", en: "This low-lying wetland south of the Dead Sea is an important habitat for endangered desert pupfish." },
    facts: {
      de: ["Befindet sich mehr als 400 Meter unter dem Meeresspiegel.", "Schützt seltene Salzpflanzen und Feuchtgebietsvögel."],
      hu: ["Több mint 400 méterrel a tengerszint alatt található.", "Ritka sónövényeket és vizesélőhelyi madarakat véd."],
      ro: ["Se află la mai mult de 400 de metri sub nivelul mării.", "Protejează plante de sărătură rare și păsări de zone umede."],
      en: ["Is located more than 400 meters below sea level.", "Protects rare salt plants and wetland birds."]
    }
  },
  {
    id: "burqu-nature-reserve-nature-v2",
    type: "national-park",
    parent: "JO-MA",
    coords: [37.9500, 32.6166],
    name: { de: "Naturschutzgebiet Burqu", hu: "Burku Természetvédelmi Terület", ro: "Rezervația Naturală Burqu", en: "Burqu Nature Reserve" },
    description: { de: "Eine abgelegene Wüstenregion im Nordosten Jordaniens, die sich um einen saisonalen See und eine antike römische Festung erstreckt.", hu: "Távoli sivatagi régió Jordánia északkeleti részén, amely egy időszakos tó és egy ókori római erőd körül terül el.", ro: "O regiune deșertică îndepărtată în nord-estul Iordaniei, care se întinde în jurul unui lac sezonier și a unei vechi fortărețe romane.", en: "A remote desert region in northeastern Jordan that stretches around a seasonal lake and an ancient Roman fortress." },
    facts: {
      de: ["Gilt als das einzige Süßwasser-Feuchtgebiet in Jordaniens östlicher Wüste.", "Zieht regelmäßig durchziehende Raubvögel an."],
      hu: ["Jordánia keleti sivatagának egyetlen édesvízi vizesélőhelyeként ismert.", "Rendszeresen vonzza az átvonuló ragadozó madarakat."],
      ro: ["Este considerată singura zonă umedă cu apă dulce din deșertul de est al Iordaniei.", "Atrage în mod regulat păsări de pradă migratoare."],
      en: ["Is considered the only freshwater wetland in Jordan's eastern desert.", "Regularly attracts migrating birds of prey."]
    }
  },
  {
    id: "yarmouk-forest-reserve-nature-v2",
    type: "forest",
    parent: "JO-IR",
    coords: [35.7166, 32.6666],
    name: { de: "Waldreservat Jarmuk", hu: "Jarmuk Erdőrezervátum", ro: "Rezervația Forestieră Yarmouk", en: "Yarmouk Forest Reserve" },
    description: { de: "Ein hügeliges Schutzgebiet an der nördlichen Grenze, das reich an sommergrünen Eichen und saisonalen Wildblumen ist.", hu: "Dombos védett terület az északi határon, amely gazdag lombhullató tölgyekben és szezonális vadvirágokban.", ro: "O arie protejată deluroasă la granița de nord, bogată în stejari cu frunze căzătoare și flori sălbatice sezoniere.", en: "A hilly protected area on the northern border that is rich in deciduous oaks and seasonal wildflowers." },
    facts: {
      de: ["Wurde im Jahr 2010 offiziell eingerichtet.", "Bewahrt die landschaftliche Schönheit im Norden des Landes."],
      hu: ["2010-ben hozták létre hivatalosan.", "Megőrzi a táj szépségét az ország északi részén."],
      ro: ["A fost înființată oficial în 2010.", "Păstrează frumusețea peisajului din nordul țării."],
      en: ["Was officially established in 2010.", "Preserves the scenic beauty in the north of the country."]
    }
  },
  {
    id: "wadi-mujib-river-nature-v2",
    type: "river",
    parent: "JO-MD",
    coords: [35.5666, 31.4666],
    name: { de: "Wadi Mudschib (Fluss)", hu: "Vádi Múdzsib (folyó)", ro: "Wadi Mujib (Râu)", en: "Wadi Mujib (River)" },
    description: { de: "Dieser spektakuläre Canyon wird oft als der Grand Canyon Jordaniens bezeichnet und führt ganzjährig Wasser.", hu: "Ezt a látványos kanyont gyakran Jordánia Grand Canyonjának nevezik, és egész évben vizet szállít.", ro: "Acest canion spectaculos este adesea numit Marele Canion al Iordaniei și transportă apă tot timpul anului.", en: "This spectacular canyon is often referred to as the Grand Canyon of Jordan and carries water year-round." },
    facts: {
      de: ["Verfügt über tiefe, wasserführende Schluchten.", "Ist ein beliebter Ort für das Canyoning."],
      hu: ["Mély, vizet vezető szurdokokkal rendelkezik.", "Népszerű helyszín a kanyonozáshoz (canyoning)."],
      ro: ["Are defileuri adânci care transportă apă.", "Este un loc popular pentru canioning."],
      en: ["Features deep, water-bearing gorges.", "Is a popular spot for canyoning."]
    }
  },
  {
    id: "wadi-hasa-nature-v2",
    type: "river",
    parent: "JO-KA",
    coords: [35.4833, 31.0333],
    name: { de: "Wadi Hasa", hu: "Vádi Hasza", ro: "Wadi Hasa", en: "Wadi Hasa" },
    description: { de: "Eine malerische Schlucht mit heißen Quellen und rosa Sandsteinwänden, die bei Wanderern sehr beliebt ist.", hu: "Festői szurdok meleg forrásokkal és rózsaszín homokkő falakkal, amely nagyon népszerű a túrázók körében.", ro: "Un defileu pitoresc cu izvoare termale și pereți de gresie roz, care este foarte popular printre drumeți.", en: "A picturesque gorge with hot springs and pink sandstone walls that is highly popular among hikers." },
    facts: {
      de: ["Die Wanderstrecke durch das Wadi ist rund 24 Kilometer lang.", "Das Wasser fließt das ganze Jahr über."],
      hu: ["A vádin átvezető túraútvonal mintegy 24 kilométer hosszú.", "A víz egész évben folyik benne."],
      ro: ["Traseul de drumeție prin ued are o lungime de aproximativ 24 de kilometri.", "Apa curge pe tot parcursul anului."],
      en: ["The hiking trail through the wadi is around 24 kilometers long.", "The water flows all year round."]
    }
  },
  {
    id: "king-talal-dam-nature-v2",
    type: "lake",
    parent: "JO-JA",
    coords: [35.8000, 32.1833],
    name: { de: "König-Talal-Stausee", hu: "Talal Király-gát (tó)", ro: "Barajul King Talal", en: "King Talal Dam" },
    description: { de: "Der größte Stausee in den Hügeln von Jerash spielt eine wichtige Rolle bei der Bewässerung des Jordantals.", hu: "A Jeras dombjai között található legnagyobb víztározó fontos szerepet játszik a Jordán-völgy öntözésében.", ro: "Cel mai mare rezervor din dealurile Jerash joacă un rol important în irigarea Văii Iordanului.", en: "The largest reservoir in the hills of Jerash plays an important role in the irrigation of the Jordan Valley." },
    facts: {
      de: ["Der Stausee hat eine Kapazität von 75 Millionen Kubikmetern.", "Er wird hauptsächlich vom Zarqa-Fluss gespeist."],
      hu: ["A víztározó kapacitása 75 millió köbméter.", "Főként a Zarka-folyó táplálja."],
      ro: ["Rezervorul are o capacitate de 75 de milioane de metri cubi.", "Este alimentat în principal de râul Zarqa."],
      en: ["The reservoir has a capacity of 75 million cubic meters.", "It is mainly fed by the Zarqa River."]
    }
  },
  {
    id: "wadi-numeira-nature-v2",
    type: "river",
    parent: "JO-KA",
    coords: [35.5333, 31.1333],
    name: { de: "Wadi Numeira", hu: "Vádi Numeira", ro: "Wadi Numeira", en: "Wadi Numeira" },
    description: { de: "Eine extrem schmale und tiefe Sandsteinschlicht am Toten Meer, die auch als das Wasser-Petra bekannt ist.", hu: "Extrém szűk és mély homokkő szurdok a Holt-tengernél, amelyet vízi Petraként is emlegetnek.", ro: "Un defileu de gresie extrem de îngust și adânc lângă Marea Moartă, cunoscut și sub numele de Petra de apă.", en: "An extremely narrow and deep sandstone gorge by the Dead Sea, also known as the water Petra." },
    facts: {
      de: ["Die Schlucht ist bekannt für ihren charakteristischen hängenden Felsen.", "Der Wasserstand variiert stark je nach Jahreszeit."],
      hu: ["A szurdok jellegzetes függő sziklájáról ismert.", "A vízszint évszaktól függően erősen változik."],
      ro: ["Defileul este cunoscut pentru stânca sa suspendată caracteristică.", "Nivelul apei variază foarte mult în funcție de sezon."],
      en: ["The gorge is known for its characteristic hanging rock.", "The water level varies greatly depending on the season."]
    }
  }
];
