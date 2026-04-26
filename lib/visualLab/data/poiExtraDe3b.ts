import type { POI } from "./poi";

export const poiExtraDe3b: POI[] = [
  // ── DE-BB Brandenburg (15) ──────────────────────────────────────────────────
  {
    id: "city-potsdam-extra",
    type: "state-capital",
    parent: "DE-BB",
    coords: [13.0645, 52.3989],
    name: { de: "Potsdam", hu: "Potsdam", ro: "Potsdam", en: "Potsdam" },
    description: {
      de: "Potsdam ist die Landeshauptstadt Brandenburgs und liegt am südwestlichen Stadtrand Berlins. Die Stadt ist weltberühmt für ihre Schlösser und Gartenanlagen, vor allem das Schloss Sanssouci, das Friedrich der Große errichten ließ. Potsdam war jahrhundertelang Residenzstadt der brandenburgisch-preußischen Herrscher.",
      hu: "Potsdam Brandenburg tartomány fővárosa, és Berlin délnyugati szélén helyezkedik el. A város világhírű kastélyairól és kertjeiről, különösen a Nagy Frigyes által épített Sanssouci kastélyról. Potsdam évszázadokon át a brandenburgi-porosz uralkodók rezidencia-városa volt.",
      ro: "Potsdam este capitala landului Brandenburg și este situată la marginea de sud-vest a Berlinului. Orașul este renumit în întreaga lume pentru castelele și grădinile sale, în special Castelul Sanssouci, construit de Frederic cel Mare. Potsdam a fost timp de secole reședința conducătorilor brandenburgico-prusaci.",
      en: "Potsdam is the state capital of Brandenburg and lies on the southwestern outskirts of Berlin. The city is world-famous for its palaces and gardens, especially Sanssouci Palace, built by Frederick the Great. Potsdam was for centuries the residence of the Brandenburg-Prussian rulers.",
    },
    facts: {
      de: ["Sanssouci gehört zum UNESCO-Weltkulturerbe.", "Friedrich der Große ließ das Schloss 1745 errichten.", "Die Potsdamer Konferenz 1945 fand im Schloss Cecilienhof statt.", "Potsdam hat über 170.000 Einwohner."],
      hu: ["A Sanssouci az UNESCO világörökség része.", "Nagy Frigyes 1745-ben emeltette a kastélyt.", "Az 1945-ös potsdami konferenciát a Cecilienhof kastélyban tartották.", "Potsdam több mint 170 000 lakossal rendelkezik."],
      ro: ["Sanssouci face parte din Patrimoniul Mondial UNESCO.", "Frederic cel Mare a construit castelul în 1745.", "Conferința de la Potsdam din 1945 a avut loc în Castelul Cecilienhof.", "Potsdam are peste 170.000 de locuitori."],
      en: ["Sanssouci is part of the UNESCO World Heritage.", "Frederick the Great had the palace built in 1745.", "The 1945 Potsdam Conference took place at Cecilienhof Palace.", "Potsdam has over 170,000 inhabitants."],
    },
    descriptionAdvanced: {
      de: "",
      hu: "A(z) Potsdam egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Potsdam ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A(z) Potsdam területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Potsdam tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
  },
  {
    id: "city-cottbus-extra",
    type: "city",
    parent: "DE-BB",
    coords: [14.3350, 51.7607],
    name: { de: "Cottbus", hu: "Cottbus", ro: "Cottbus", en: "Cottbus" },
    description: {
      de: "Cottbus ist die zweitgrößte Stadt Brandenburgs und liegt im südöstlichen Teil des Landes, im Herzen der Niederlausitz. Die Stadt ist Zentrum der sorbischen Minderheit und bekannt für ihren prächtigen Branitzer Park. Cottbus war eng mit dem Braunkohlebergbau verbunden, wandelt sich aber heute zur Energiewendestadt.",
      hu: "Cottbus Brandenburg második legnagyobb városa, a tartomány délkeleti részén, az Alsó-Lausitz szívében fekszik. A város a szorb kisebbség központja, és gazdag Branitz kastélyparkjáról ismert. Cottbus szorosan kötődött a barnaszén-bányászathoz, de ma az energiaátmenet városává alakul.",
      ro: "Cottbus este al doilea oraș ca mărime din Brandenburg și se află în partea de sud-est a landului, în inima Lusaciei Inferioare. Orașul este centrul minorității sorbe și este cunoscut pentru magnificul Parc Branitz. Cottbus a fost strâns legat de mineritul cărbunelui brun, dar astăzi se transformă într-un oraș al tranziției energetice.",
      en: "Cottbus is the second largest city in Brandenburg, located in the southeastern part of the state in the heart of Lower Lusatia. The city is the centre of the Sorbian minority and known for its splendid Branitz Park. Cottbus was closely tied to brown coal mining but is now transforming into an energy transition city.",
    },
    facts: {
      de: ["Cottbus hat eine sorbischsprachige Minderheit.", "Der Branitzer Park wurde von Fürst Pückler gestaltet.", "Die Universität Cottbus ist eine Technische Universität.", "Die Region wandelt sich nach dem Kohleausstieg stark."],
      hu: ["Cottbusban szorb nyelvű kisebbség él.", "A Branitz parkot Pückler herceg tervezte.", "A Cottbusi Műszaki Egyetem neves intézmény.", "A régió a szénbányászat megszűnése után erősen átalakul."],
      ro: ["Cottbus are o minoritate vorbitoare de limbă sorbă.", "Parcul Branitz a fost amenajat de Prințul Pückler.", "Universitatea din Cottbus este o universitate tehnică.", "Regiunea se schimbă semnificativ după renunțarea la cărbune."],
      en: ["Cottbus has a Sorbian-speaking minority.", "Branitz Park was designed by Prince Pückler.", "Cottbus University is a technical university.", "The region is undergoing major change after coal phase-out."],
    },
    descriptionAdvanced: {
      de: "",
      hu: "A(z) Cottbus egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Cottbus ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A(z) Cottbus területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Cottbus tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
  },
  {
    id: "river-spree-bb-extra",
    type: "river",
    parent: "DE-BB",
    coords: [13.9500, 52.0000],
    name: { de: "Spree (Brandenburg)", hu: "Spree (Brandenburg)", ro: "Spree (Brandenburg)", en: "Spree (Brandenburg)" },
    description: {
      de: "Die Spree ist ein Fluss, der von der Lausitz durch Brandenburg und weiter durch Berlin fließt. Im brandenburgischen Spreewald verzweigt sie sich in hunderte von Kanälen und bildet ein einzigartiges Ökosystem. Die Spree war historisch eine wichtige Verkehrsader für Handel und Transport.",
      hu: "A Spree egy folyó, amely a Lausitzból Brandenburgun és Berlinen keresztül folyik. A brandenburgi Spreewaldban százféle csatornára ágazik szét, egyedülálló ökoszisztémát alkotva. A Spree történelmileg fontos kereskedelmi és szállítási útja volt a régiónak.",
      ro: "Spree este un râu care curge din Lusacia prin Brandenburg și mai departe prin Berlin. În Pădurea Spree (Spreewald) din Brandenburg se ramifică în sute de canale, formând un ecosistem unic. Spree a fost istoric o importantă arteră de transport pentru comerț.",
      en: "The Spree is a river that flows from Lusatia through Brandenburg and further through Berlin. In Brandenburg's Spreewald it branches into hundreds of canals, creating a unique ecosystem. The Spree was historically an important artery for trade and transport.",
    },
    facts: {
      de: ["Die Spree ist 403 km lang.", "Sie fließt durch das UNESCO-Biosphärenreservat Spreewald.", "Kähne (Spreewaldkähne) sind ein typisches Transportmittel im Spreewald.", "Die Spree mündet in Berlin in die Havel."],
      hu: ["A Spree 403 km hosszú.", "Az UNESCO bioszféra-rezervátum Spreewaldban folyik át.", "A Spreewald-csónakok (Spreewaldkähne) jellegzetes közlekedési eszköz.", "A Spree Berlinben a Havelbe torkollik."],
      ro: ["Spree are 403 km lungime.", "Curge prin Rezervația Biosferei UNESCO Spreewald.", "Bărcile Spreewald sunt un mijloc tipic de transport în zonă.", "Spree se varsă în Havel la Berlin."],
      en: ["The Spree is 403 km long.", "It flows through the UNESCO Biosphere Reserve Spreewald.", "Spreewald punts (Spreewaldkähne) are a typical means of transport.", "The Spree flows into the Havel in Berlin."],
    },
    descriptionAdvanced: {
      de: "",
      hu: "A(z) Spree (Brandenburg) egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Spree (Brandenburg) ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A(z) Spree (Brandenburg) területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Spree (Brandenburg) tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
  },
  {
    id: "river-havel-bb-extra",
    type: "river",
    parent: "DE-BB",
    coords: [12.4500, 52.7000],
    name: { de: "Havel (Brandenburg)", hu: "Havel (Brandenburg)", ro: "Havel (Brandenburg)", en: "Havel (Brandenburg)" },
    description: {
      de: "Die Havel ist einer der bedeutendsten Flüsse Brandenburgs und verbindet zahlreiche Seen miteinander. Sie fließt durch Oranienburg, Potsdam und viele weitere Städte des Landes. Der Havelradweg ist eine beliebte Radtourenroute entlang dieser Seenkette.",
      hu: "A Havel Brandenburg egyik legjelentősebb folyója, amely számos tavat köt össze egymással. Oranienburgon, Potsdamon és még számos tartományi városon folyik keresztül. A Havel kerékpárút egy népszerű túraútvonal e tóláncok mentén.",
      ro: "Havel este unul dintre cele mai importante râuri din Brandenburg și leagă numeroase lacuri între ele. Curge prin Oranienburg, Potsdam și multe alte orașe ale landului. Pista de ciclism Havel este un traseu popular de-a lungul acestui lanț de lacuri.",
      en: "The Havel is one of Brandenburg's most significant rivers, linking numerous lakes together. It flows through Oranienburg, Potsdam and many other towns in the state. The Havel cycling route is a popular touring path along this chain of lakes.",
    },
    facts: {
      de: ["Die Havel ist 343 km lang.", "Sie verbindet über 20 Seen in Brandenburg.", "Der Havelradweg ist über 400 km lang.", "Potsdam liegt direkt an der Havel."],
      hu: ["A Havel 343 km hosszú.", "Több mint 20 tavat köt össze Brandenburgban.", "A Havel kerékpárút több mint 400 km hosszú.", "Potsdam közvetlenül a Havel partján fekszik."],
      ro: ["Havel are 343 km lungime.", "Leagă peste 20 de lacuri în Brandenburg.", "Pista de ciclism Havel are peste 400 km.", "Potsdam se află direct pe malul Havelului."],
      en: ["The Havel is 343 km long.", "It links over 20 lakes in Brandenburg.", "The Havel cycling route is over 400 km long.", "Potsdam lies directly on the Havel."],
    },
    descriptionAdvanced: {
      de: "",
      hu: "A(z) Havel (Brandenburg) egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Havel (Brandenburg) ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A(z) Havel (Brandenburg) területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Havel (Brandenburg) tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
  },
  {
    id: "lake-scharmuetzelsee-extra",
    type: "lake",
    parent: "DE-BB",
    coords: [14.0500, 52.2000],
    name: { de: "Scharmützelsee", hu: "Scharmützelsee", ro: "Lacul Scharmützelsee", en: "Scharmützelsee" },
    description: {
      de: "Der Scharmützelsee ist einer der größten Seen Brandenburgs und liegt in der Seenlandschaft der Märkischen Schweiz. Er ist ein beliebtes Ausflugsziel für Wassersport, Segeln und Erholung. In seiner Umgebung befinden sich Kurorte und Heilbäder.",
      hu: "A Scharmützelsee Brandenburg egyik legnagyobb tava, a Märkische Schweiz tóvidékén. Vízisport, vitorlázás és kikapcsolódás szempontjából népszerű kirándulóhely. Környékén üdülőhelyek és gyógyfürdők találhatók.",
      ro: "Scharmützelsee este unul dintre cele mai mari lacuri din Brandenburg și se află în peisajul lacustru al Elveției Märkische. Este o destinație populară pentru sporturi nautice, navigație cu pânze și recreere. În împrejurimi se găsesc stațiuni și băi termale.",
      en: "Scharmützelsee is one of the largest lakes in Brandenburg, set in the lake landscape of the Märkische Schweiz. It is a popular destination for water sports, sailing, and relaxation. Spa resorts and health baths are found in the surrounding area.",
    },
    facts: {
      de: ["Der Scharmützelsee ist 13 km² groß.", "Er liegt in der Nähe von Bad Saarow.", "Der See ist für seinen klaren Sandstrand bekannt.", "Im Winter friert er regelmäßig zu."],
      hu: ["A Scharmützelsee 13 km² területű.", "Bad Saarow közelében helyezkedik el.", "A tó tiszta homokos partjáról ismert.", "Télen rendszeresen befagy."],
      ro: ["Scharmützelsee are o suprafață de 13 km².", "Se află în apropierea localității Bad Saarow.", "Lacul este cunoscut pentru plaja sa nisipoasă curată.", "Iarna îngheață în mod regulat."],
      en: ["Scharmützelsee has an area of 13 km².", "It is located near Bad Saarow.", "The lake is known for its clear sandy beach.", "It regularly freezes over in winter."],
    },
    descriptionAdvanced: {
      de: "",
      hu: "A(z) Scharmützelsee egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Scharmützelsee ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A(z) Scharmützelsee területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Scharmützelsee tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
  },
  {
    id: "lake-schwielowsee-extra",
    type: "lake",
    parent: "DE-BB",
    coords: [12.9400, 52.3500],
    name: { de: "Schwielowsee", hu: "Schwielowsee", ro: "Lacul Schwielowsee", en: "Schwielowsee" },
    description: {
      de: "Der Schwielowsee liegt südwestlich von Potsdam und ist Teil der Havelseenkette. Er ist ein beliebtes Naherholungsziel für die Bevölkerung Berlins und Potsdams. Am Ufer liegen charmante Ortschaften mit Badestränden und historischen Villen.",
      hu: "A Schwielowsee Potsdamtól délnyugatra fekszik, és a Havel-tólánc részét képezi. Berlin és Potsdam lakóinak kedvelt közeli pihenőhelye. Partján bájos kisvárosok találhatók strandfürdőkkel és történelmi villákkal.",
      ro: "Schwielowsee se află la sud-vest de Potsdam și face parte din lanțul de lacuri Havel. Este o destinație populară de agrement în apropiere pentru locuitorii Berlinului și Potsdamului. Pe maluri se află localități fermecătoare cu plaje și vile istorice.",
      en: "Schwielowsee lies southwest of Potsdam and is part of the Havel lake chain. It is a popular local recreation destination for residents of Berlin and Potsdam. Charming villages with swimming beaches and historic villas line its shores.",
    },
    facts: {
      de: ["Der Schwielowsee ist Teil des Naturparks Westhavelland.", "Er ist ein wichtiges Gebiet für Wasservögel.", "Die Ufer sind von Schilfgürteln gesäumt.", "Caputh, ein Dorf am See, war Sommerdomizil Albert Einsteins."],
      hu: ["A Schwielowsee a Westhavelland Természeti Park része.", "Fontos területe a vízimadaraknak.", "Partjait nádszegélyek kísérik.", "Caputh, a tóparti kis falu, Albert Einstein nyári otthona volt."],
      ro: ["Schwielowsee face parte din Parcul Natural Westhavelland.", "Este o zonă importantă pentru păsările de apă.", "Malurile sunt mărginite de stufărișuri.", "Caputh, un sat de pe malul lacului, a fost reședința de vară a lui Albert Einstein."],
      en: ["Schwielowsee is part of the Westhavelland Nature Park.", "It is an important area for waterfowl.", "The shores are lined with reed belts.", "Caputh, a village on the lake, was Albert Einstein's summer residence."],
    },
    descriptionAdvanced: {
      de: "",
      hu: "A(z) Schwielowsee egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Schwielowsee ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A(z) Schwielowsee területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Schwielowsee tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
  },
  {
    id: "forest-flaeming-extra",
    type: "forest",
    parent: "DE-BB",
    coords: [13.2000, 51.9500],
    name: { de: "Fläming", hu: "Fläming", ro: "Fläming", en: "Fläming" },
    description: {
      de: "Der Fläming ist eine sanfte Hügellandschaft im Südwesten Brandenburgs mit ausgedehnten Kiefernwäldern und landwirtschaftlichen Flächen. Das Gebiet ist Teil des Naturparks Fläming und bietet zahlreiche Wander- und Radwege. Die Region ist bekannt für ihren Spargel und Äpfel.",
      hu: "A Fläming egy szelíd dombvidék Brandenburg délnyugati részén, kiterjedt fenyőerdőkkel és mezőgazdasági területekkel. A terület a Fläming Természeti Park részét képezi, és számos túra- és kerékpárút halad át rajta. A régió spárgájáról és almájáról ismert.",
      ro: "Flämingul este un peisaj deluros blând din sud-vestul Brandenburgului, cu păduri extinse de pini și suprafețe agricole. Zona face parte din Parcul Natural Fläming și oferă numeroase trasee pentru drumeții și ciclism. Regiunea este renumită pentru sparanghel și mere.",
      en: "The Fläming is a gentle hilly landscape in southwestern Brandenburg with extensive pine forests and agricultural land. The area is part of the Fläming Nature Park and offers numerous hiking and cycling routes. The region is known for its asparagus and apples.",
    },
    facts: {
      de: ["Der Fläming erstreckt sich über Brandenburg und Sachsen-Anhalt.", "Die höchste Erhebung ist der Hagelberg mit 178 m.", "Der Hoher Fläming Naturpark schützt die Landschaft.", "Spargel vom Fläming ist weit über Brandenburg hinaus bekannt."],
      hu: ["A Fläming Brandenburgtól Szász-Anhaltig terjed.", "A legmagasabb pont a 178 m magas Hagelberg.", "A Hoher Fläming Természeti Park védi a tájat.", "A flämingsi spárga messze Brandenburg határain túl ismert."],
      ro: ["Flämingul se întinde din Brandenburg în Saxonia-Anhalt.", "Cel mai înalt punct este Hagelberg cu 178 m.", "Parcul Natural Hoher Fläming protejează peisajul.", "Sparanghelul din Fläming este cunoscut cu mult dincolo de granițele Brandenburgului."],
      en: ["The Fläming stretches from Brandenburg into Saxony-Anhalt.", "The highest point is Hagelberg at 178 m.", "The Hoher Fläming Nature Park protects the landscape.", "Fläming asparagus is well known far beyond Brandenburg."],
    },
    descriptionAdvanced: {
      de: "",
      hu: "A(z) Fläming egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Fläming ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A(z) Fläming területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Fläming tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
  },
  {
    id: "landmark-brandenburger-dom-extra",
    type: "landmark",
    parent: "DE-BB",
    coords: [12.5500, 52.4100],
    name: { de: "Brandenburger Dom", hu: "Brandenburgi dóm", ro: "Catedrala Brandenburg", en: "Brandenburg Cathedral" },
    description: {
      de: "Der Dom St. Peter und Paul in Brandenburg an der Havel ist eines der bedeutendsten mittelalterlichen Bauwerke Norddeutschlands. Er wurde ab dem 12. Jahrhundert errichtet und ist ein herausragendes Beispiel norddeutscher Backsteingotik. Der Dom beherbergt bedeutende mittelalterliche Kunstwerke und Grabmonumente.",
      hu: "A brandenburgi Havel melletti Szt. Péter és Pál-dóm Észak-Németország egyik legjelentősebb középkori épülete. A 12. századtól épített dóm az észak-német téglagótika kiemelkedő példája. A dóm jelentős középkori műalkotásokat és síremlékeket őriz.",
      ro: "Catedrala Sfinții Petru și Pavel din Brandenburg an der Havel este una dintre cele mai importante construcții medievale din nordul Germaniei. Construită începând cu secolul al XII-lea, este un exemplu remarcabil de gotică în cărămidă din nordul Germaniei. Catedrala adăpostește importante opere de artă medievală și monumente funerare.",
      en: "The Cathedral of St. Peter and Paul in Brandenburg an der Havel is one of the most significant medieval buildings in northern Germany. Built from the 12th century onward, it is an outstanding example of North German brick Gothic. The cathedral houses important medieval artworks and burial monuments.",
    },
    facts: {
      de: ["Der Dom wurde im 12. Jahrhundert begonnen.", "Er ist einer der ältesten Backsteinbauten Brandenburgs.", "Das Lehniner Kelim-Tuch ist ein wertvolles mittelalterliches Textil im Dom.", "Brandenburg an der Havel ist die namengebende Stadt des Bundeslandes."],
      hu: ["A dóm építése a 12. században kezdődött.", "Brandenburg egyik legrégebbi téglaépülete.", "A lehnini kelimszőnyeg értékes középkori textília a dómban.", "Brandenburg an der Havel a szövetségi tartomány névadó városa."],
      ro: ["Construcția catedralei a început în secolul al XII-lea.", "Este una dintre cele mai vechi clădiri din cărămidă din Brandenburg.", "Covorul Kilim de la Lehnin este un valoros textil medieval din catedrală.", "Brandenburg an der Havel este orașul care a dat numele landului."],
      en: ["The cathedral was begun in the 12th century.", "It is one of Brandenburg's oldest brick buildings.", "The Lehnin Kilim cloth is a valuable medieval textile housed in the cathedral.", "Brandenburg an der Havel is the city that gave the state its name."],
    },
    descriptionAdvanced: {
      de: "",
      hu: "A(z) Brandenburger Dom egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Brandenburger Dom ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A(z) Brandenburger Dom területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Brandenburger Dom tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
  },
  {
    id: "hist-kloster-chorin-extra",
    type: "historical",
    parent: "DE-BB",
    coords: [13.8900, 52.8900],
    name: { de: "Kloster Chorin", hu: "Chorini kolostor", ro: "Mânăstirea Chorin", en: "Chorin Abbey" },
    description: {
      de: "Das Kloster Chorin ist eine der bedeutendsten Backsteinkirchen der norddeutschen Gotik. Es wurde im 13. Jahrhundert von Zisterziensermönchen erbaut und liegt idyllisch in einem Waldgebiet nördlich von Berlin. Die Ruine des Klosters ist ein beliebtes Ausflugsziel und Konzertstätte.",
      hu: "A Chorini kolostor az észak-német gótika egyik legjelentősebb téglatemploma. A 13. században ciszterci szerzetesek építették, és festői erdős területen fekszik Berlintől északra. A kolostor romja kedvelt kirándulóhely és koncerthelyszín.",
      ro: "Mânăstirea Chorin este una dintre cele mai importante biserici din cărămidă ale goticului german nordic. A fost construită în secolul al XIII-lea de călugări cistercieni și se află idilic într-o zonă împădurită la nord de Berlin. Ruina mânăstirii este o destinație populară și un loc de concerte.",
      en: "Chorin Abbey is one of the most significant brick Gothic churches in northern Germany. It was built by Cistercian monks in the 13th century and lies idyllically in a forested area north of Berlin. The abbey ruin is a popular excursion destination and concert venue.",
    },
    facts: {
      de: ["Das Kloster wurde 1258 gegründet.", "Es ist eines der schönsten Beispiele norddeutscher Backsteingotik.", "Karl Friedrich Schinkel leitete erste Restaurierungsarbeiten.", "Die Choriner Musiksommer sind jährliche Konzerte in den Ruinen."],
      hu: ["A kolostort 1258-ban alapították.", "Az észak-német téglagótika egyik legszebb példája.", "Karl Friedrich Schinkel vezette az első felújítási munkálatokat.", "A Chorini Nyári Zenei Fesztivál évi rendszeres koncertsorozat a romokban."],
      ro: ["Mânăstirea a fost fondată în 1258.", "Este unul dintre cele mai frumoase exemple de gotică în cărămidă din nordul Germaniei.", "Karl Friedrich Schinkel a condus primele lucrări de restaurare.", "Choriner Musiksommer sunt concerte anuale în ruine."],
      en: ["The abbey was founded in 1258.", "It is one of the finest examples of North German brick Gothic.", "Karl Friedrich Schinkel led the first restoration works.", "The Chorin Music Summer is an annual concert series held in the ruins."],
    },
    descriptionAdvanced: {
      de: "",
      hu: "A(z) Kloster Chorin egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Kloster Chorin ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A(z) Kloster Chorin területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Kloster Chorin tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
  },
  {
    id: "hist-schloss-rheinsberg-extra",
    type: "historical",
    parent: "DE-BB",
    coords: [12.8900, 53.1000],
    name: { de: "Schloss Rheinsberg", hu: "Rheinsberg kastély", ro: "Castelul Rheinsberg", en: "Rheinsberg Palace" },
    description: {
      de: "Schloss Rheinsberg liegt am Grienericksee in der Ruppiner Seenplatte nördlich von Berlin. Friedrich der Große verbrachte hier seine prägenden Jugendjahre und entwickelte seine Leidenschaft für Kunst und Musik. Das Schloss gilt als eines der schönsten Rokokoschlösser Norddeutschlands.",
      hu: "Rheinsberg kastélya a Grienericksee partján található, a Berlintől északra fekvő Ruppiner-tóvidéken. II. (Nagy) Frigyes itt töltötte meghatározó ifjúkorát, és itt fejlesztette ki a művészetek és zene iránti szenvedélyét. A kastély Észak-Németország egyik legszebb rokokó kastélyaként ismert.",
      ro: "Castelul Rheinsberg se află pe malul lacului Grienericksee, în platoul lacustru Ruppiner, la nord de Berlin. Frederic cel Mare și-a petrecut aici anii formativi ai tinereții și și-a dezvoltat pasiunea pentru artă și muzică. Castelul este considerat unul dintre cele mai frumoase castele rococo din nordul Germaniei.",
      en: "Rheinsberg Palace sits on the Grienericksee in the Ruppiner lake district north of Berlin. Frederick the Great spent his formative youth here and developed his passion for arts and music. The palace is considered one of the most beautiful Rococo palaces in northern Germany.",
    },
    facts: {
      de: ["Friedrich der Große lebte von 1736 bis 1740 in Rheinsberg.", "Das Schloss spiegelt sich im Grienericksee.", "Kurt Tucholsky verewigte Rheinsberg in einem gleichnamigen Roman.", "Das Schloss beherbergt heute ein Musiktheaterfestival."],
      hu: ["II. Frigyes 1736-tól 1740-ig élt Rheinsbergben.", "A kastély a Grienericksee tükrében csillog.", "Kurt Tucholsky egy azonos nevű regényben örökítette meg Rheinsberget.", "A kastély ma zenei színházi fesztivált ad otthont."],
      ro: ["Frederic cel Mare a locuit la Rheinsberg din 1736 până în 1740.", "Castelul se reflectă în lacul Grienericksee.", "Kurt Tucholsky a imortalizat Rheinsbergul într-un roman cu același nume.", "Castelul găzduiește astăzi un festival de teatru muzical."],
      en: ["Frederick the Great lived at Rheinsberg from 1736 to 1740.", "The palace is reflected in the Grienericksee.", "Kurt Tucholsky immortalized Rheinsberg in a novel of the same name.", "The palace today hosts a music theatre festival."],
    },
    descriptionAdvanced: {
      de: "",
      hu: "A(z) Schloss Rheinsberg egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Schloss Rheinsberg ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A(z) Schloss Rheinsberg területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Schloss Rheinsberg tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
  },
  {
    id: "landmark-spreewald-kahnfahrt-extra",
    type: "landmark",
    parent: "DE-BB",
    coords: [14.0000, 51.8700],
    name: { de: "Spreewald Kahnfahrt", hu: "Spreewald csónaktúra", ro: "Plimbare cu barca în Spreewald", en: "Spreewald Punt Tour" },
    description: {
      de: "Der Spreewald ist ein einzigartiges Flussauengebiet südöstlich von Berlin, das von einem dichten Netz aus Kanälen durchzogen wird. Die traditionellen Kahnfahrten sind eine der beliebtesten Touristenattraktionen Brandenburgs. Das Gebiet ist als UNESCO-Biosphärenreservat anerkannt.",
      hu: "A Spreewald egy egyedülálló ártéri terület Berlintől délkeletre, amelyet csatornák sűrű hálózata szel át. A hagyományos csónaktúrák Brandenburg egyik legnépszerűbb turisztikai attrakcióját jelentik. A terület UNESCO bioszféra-rezervátumként elismert.",
      ro: "Spreewald este o zonă fluvială unică la sud-est de Berlin, parcursă de o rețea densă de canale. Plimbările tradiționale cu barca sunt una dintre cele mai populare atracții turistice ale Brandenburgului. Zona este recunoscută ca rezervație a biosferei UNESCO.",
      en: "The Spreewald is a unique river floodplain southeast of Berlin, crossed by a dense network of canals. The traditional punt tours are one of Brandenburg's most popular tourist attractions. The area is recognized as a UNESCO Biosphere Reserve.",
    },
    facts: {
      de: ["Das Spreewaldgebiet hat rund 1.500 km Wasserwege.", "Es ist ein UNESCO-Biosphärenreservat seit 1991.", "Gurken aus dem Spreewald sind ein geschütztes regionales Produkt.", "Die Sorben pflegen im Spreewald ihre einzigartige Kultur."],
      hu: ["A Spreewald körülbelül 1500 km vízi úttal rendelkezik.", "1991 óta UNESCO bioszféra-rezervátum.", "A spreewaldi uborka védett regionális termék.", "A szorbok a Spreewaldban őrzik egyedülálló kultúrájukat."],
      ro: ["Zona Spreewald are aproximativ 1.500 km de căi navigabile.", "Este rezervație a biosferei UNESCO din 1991.", "Castraveții din Spreewald sunt un produs regional protejat.", "Sorbii păstrează în Spreewald cultura lor unică."],
      en: ["The Spreewald area has about 1,500 km of waterways.", "It has been a UNESCO Biosphere Reserve since 1991.", "Spreewald cucumbers are a protected regional product.", "The Sorbs preserve their unique culture in the Spreewald."],
    },
    descriptionAdvanced: {
      de: "",
      hu: "A(z) Spreewald Kahnfahrt egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Spreewald Kahnfahrt ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A(z) Spreewald Kahnfahrt területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Spreewald Kahnfahrt tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
  },
  {
    id: "agriculture-spargel-beelitz-extra",
    type: "agriculture",
    parent: "DE-BB",
    coords: [12.9700, 52.2300],
    name: { de: "Beelitzer Spargel", hu: "Beelitzi spárga", ro: "Sparanghelul din Beelitz", en: "Beelitz Asparagus" },
    description: {
      de: "Die Region um Beelitz südwestlich von Berlin ist für ihren weißen Spargel berühmt, der auf den sandigen Böden besonders gut gedeiht. Der Beelitzer Spargel ist eine geschützte geografische Angabe und ein wichtiges regionales Produkt Brandenburgs. Jährlich findet dort ein großes Spargelvolksfest statt.",
      hu: "Berlin délnyugati szomszédságában lévő Beelitz környéke a homokos talajokon különösen jól termő fehér spárgájáról híresült el. A beelitzi spárga védett földrajzi jelzéssel rendelkezik, és Brandenburg fontos regionális terméke. Évente nagy spargatünnepet rendeznek ott.",
      ro: "Regiunea din jurul localității Beelitz, la sud-vest de Berlin, este renumită pentru sparanghelul său alb, care crește deosebit de bine pe solurile nisipoase. Sparanghelul din Beelitz este o indicație geografică protejată și un important produs regional al Brandenburgului. Anual se organizează acolo un mare festival al sparanghelului.",
      en: "The region around Beelitz southwest of Berlin is famous for its white asparagus, which thrives especially well on the sandy soils. Beelitz asparagus holds a protected geographical indication and is an important regional product of Brandenburg. A large asparagus folk festival is held there annually.",
    },
    facts: {
      de: ["Beelitz ist Deutschlands ältestes Spargelanbaugebiet.", "Anbau seit über 130 Jahren.", "Der Beelitz-Spargel hat eine EU-geschützte geografische Angabe.", "Jährlich werden über 2.000 Tonnen Spargel geerntet."],
      hu: ["Beelitz Németország legrégebbi spárgatermesztési területe.", "Több mint 130 éve folyik a termesztés.", "A beelitzi spárga EU-védett földrajzi jelzéssel rendelkezik.", "Évente több mint 2000 tonna spárgát szüretelnek."],
      ro: ["Beelitz este cea mai veche zonă de cultivare a sparanghelului din Germania.", "Cultivat de peste 130 de ani.", "Sparanghelul din Beelitz are o indicație geografică protejată de UE.", "Anual sunt recoltate peste 2.000 de tone de sparanghel."],
      en: ["Beelitz is Germany's oldest asparagus growing region.", "Cultivation has been ongoing for over 130 years.", "Beelitz asparagus holds an EU-protected geographical indication.", "Over 2,000 tonnes of asparagus are harvested annually."],
    },
    descriptionAdvanced: {
      de: "",
      hu: "A(z) Beelitzer Spargel egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Beelitzer Spargel ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A(z) Beelitzer Spargel területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Beelitzer Spargel tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
  },
  {
    id: "agriculture-gurken-spreewald-extra",
    type: "agriculture",
    parent: "DE-BB",
    coords: [14.0500, 51.9000],
    name: { de: "Spreewald-Gurken", hu: "Spreewald-uborka", ro: "Castraveții din Spreewald", en: "Spreewald Cucumbers" },
    description: {
      de: "Die Spreewald-Gurken sind ein weltweit bekanntes Produkt aus dem Biosphärenreservat Spreewald in Brandenburg. Sie werden nach traditionellen Rezepten eingelegt und haben einen einzigartigen Geschmack. Die Gurke ist das inoffizielle Symbol des Spreewaldes.",
      hu: "A Spreewald-uborka a brandenburgi Spreewald bioszféra-rezervátumból világszerte ismert termék. Hagyományos receptek szerint készítik el, és egyedülálló ízük van. Az uborka a Spreewald nem hivatalos szimbóluma.",
      ro: "Castraveții din Spreewald sunt un produs recunoscut la nivel mondial din Rezervația Biosferei Spreewald din Brandenburg. Sunt murați după rețete tradiționale și au un gust unic. Castravetele este simbolul neoficial al Spreewaldului.",
      en: "Spreewald cucumbers are a globally known product from the Spreewald Biosphere Reserve in Brandenburg. They are pickled according to traditional recipes and have a unique flavour. The cucumber is the unofficial symbol of the Spreewald.",
    },
    facts: {
      de: ["Spreewald-Gurken haben eine EU-geschützte geografische Angabe.", "Jährlich werden über 40.000 Tonnen verarbeitet.", "Die Gurken werden in über 30 verschiedenen Varianten angeboten.", "Das Gurkenfest in Golßen feiert alljährlich die Ernte."],
      hu: ["A Spreewald-uborka EU-védett földrajzi jelzéssel rendelkezik.", "Évente több mint 40 000 tonnát dolgoznak fel.", "Az uborkákat több mint 30 különböző változatban kínálják.", "A Golßeni Uborkafesztivál évente ünnepli az aratást."],
      ro: ["Castraveții din Spreewald au o indicație geografică protejată de UE.", "Anual sunt procesate peste 40.000 de tone.", "Castraveții sunt oferiți în peste 30 de variante diferite.", "Festivalul castraveților din Golßen celebrează anual recolta."],
      en: ["Spreewald cucumbers hold an EU-protected geographical indication.", "Over 40,000 tonnes are processed annually.", "The cucumbers are offered in over 30 different varieties.", "The cucumber festival in Golßen celebrates the harvest annually."],
    },
    descriptionAdvanced: {
      de: "",
      hu: "A(z) Spreewald-Gurken egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Spreewald-Gurken ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A(z) Spreewald-Gurken területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Spreewald-Gurken tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
  },
  {
    id: "hist-filmpark-babelsberg-extra",
    type: "historical",
    parent: "DE-BB",
    coords: [13.1300, 52.3900],
    name: { de: "Filmpark Babelsberg", hu: "Babelsberg Filmpark", ro: "Parcul Cinematografic Babelsberg", en: "Filmpark Babelsberg" },
    description: {
      de: "Der Filmpark Babelsberg in Potsdam ist eines der ältesten Filmstudios der Welt und Europas größtes Filmstudio. Hier entstanden Stummfilmklassiker und bedeutende internationale Produktionen. Das Studio ist ein wichtiger Teil der deutschen Filmgeschichte und heute auch Freizeitpark.",
      hu: "A potsdami Babelsberg Filmpark a világ egyik legrégebbi és Európa legnagyobb filmstúdiója. Itt készültek némafilmes klasszikusok és fontos nemzetközi produkciók. A stúdió a német filmtörténet fontos része, és ma szabadidőpark is egyben.",
      ro: "Parcul Cinematografic Babelsberg din Potsdam este unul dintre cele mai vechi studiouri de film din lume și cel mai mare din Europa. Aici au fost create clasice ale filmului mut și importante producții internaționale. Studioul este o parte importantă a istoriei filmului german și astăzi este și un parc de agrement.",
      en: "Filmpark Babelsberg in Potsdam is one of the oldest film studios in the world and Europe's largest film studio. Silent film classics and major international productions were made here. The studio is an important part of German film history and today also a leisure park.",
    },
    facts: {
      de: ["Babelsberg wurde 1912 gegründet.", "Hier wurden Klassiker wie 'Metropolis' gedreht.", "Es ist Europas größtes Filmstudio.", "Internationale Produktionen wie 'Inglourious Basterds' wurden hier gedreht."],
      hu: ["Babelsberget 1912-ben alapították.", "Itt forgatták a Metropolis-hoz hasonló klasszikusokat.", "Európa legnagyobb filmstúdiója.", "Olyan nemzetközi produkciók forgattak itt, mint az 'Inglourious Basterds'."],
      ro: ["Babelsberg a fost fondată în 1912.", "Aici au fost filmate clasice precum 'Metropolis'.", "Este cel mai mare studio de film din Europa.", "Producții internaționale precum 'Inglourious Basterds' au fost filmate aici."],
      en: ["Babelsberg was founded in 1912.", "Classics such as 'Metropolis' were filmed here.", "It is Europe's largest film studio.", "International productions like 'Inglourious Basterds' were shot here."],
    },
    descriptionAdvanced: {
      de: "",
      hu: "A(z) Filmpark Babelsberg egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Filmpark Babelsberg ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A(z) Filmpark Babelsberg területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Filmpark Babelsberg tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
  },
  {
    id: "city-frankfurt-oder-extra",
    type: "city",
    parent: "DE-BB",
    coords: [14.5500, 52.3400],
    name: { de: "Frankfurt (Oder)", hu: "Frankfurt (Oder)", ro: "Frankfurt (Oder)", en: "Frankfurt (Oder)" },
    description: {
      de: "Frankfurt (Oder) liegt direkt an der Oder und bildet mit der polnischen Stadt Słubice eine Doppelstadt. Die Stadt hat eine bedeutende Grenzlage und ist durch mehrere Brücken mit dem polnischen Nachbarn verbunden. Historisch war Frankfurt (Oder) Sitz einer der ältesten deutschen Universitäten.",
      hu: "Frankfurt (Oder) közvetlenül az Odera partján fekszik, és a lengyel Słubicével ikervárosi kapcsolatban áll. A városnak fontos határváros-szerepe van, és több hídon keresztül kapcsolódik lengyel szomszédjához. Történelmileg Frankfurt (Oder) az egyik legrégebbi német egyetemnek adott otthont.",
      ro: "Frankfurt (Oder) se află direct pe malul Oderului și formează un oraș dublu cu orașul polonez Słubice. Orașul are o poziție importantă la frontieră și este legat de vecinul polonez prin mai multe poduri. Istoric, Frankfurt (Oder) a găzduit una dintre cele mai vechi universități germane.",
      en: "Frankfurt (Oder) lies directly on the Oder and forms a twin city with the Polish town of Słubice. The city has an important border location and is connected to its Polish neighbour by several bridges. Historically, Frankfurt (Oder) was home to one of Germany's oldest universities.",
    },
    facts: {
      de: ["Frankfurt (Oder) grenzt direkt an Polen.", "Die Viadrina Universität wurde 1506 gegründet.", "Die Oder trennt und verbindet Deutschland und Polen.", "Heinrich von Kleist wurde in Frankfurt (Oder) geboren."],
      hu: ["Frankfurt (Oder) közvetlenül Lengyelország határán fekszik.", "A Viadrina Egyetemet 1506-ban alapították.", "Az Odera elválasztja és összeköti Németországot és Lengyelországot.", "Heinrich von Kleist Frankfurtban (Oder) született."],
      ro: ["Frankfurt (Oder) se învecinează direct cu Polonia.", "Universitatea Viadrina a fost fondată în 1506.", "Oderul desparte și unește Germania și Polonia.", "Heinrich von Kleist s-a născut la Frankfurt (Oder)."],
      en: ["Frankfurt (Oder) borders Poland directly.", "Viadrina University was founded in 1506.", "The Oder river separates and connects Germany and Poland.", "Heinrich von Kleist was born in Frankfurt (Oder)."],
    },
    descriptionAdvanced: {
      de: "",
      hu: "A(z) Frankfurt (Oder) egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Frankfurt (Oder) ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A(z) Frankfurt (Oder) területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Frankfurt (Oder) tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
  },

  // ── DE-ST Sachsen-Anhalt (15) ────────────────────────────────────────────────
  {
    id: "city-magdeburg-extra",
    type: "state-capital",
    parent: "DE-ST",
    coords: [11.6276, 52.1205],
    name: { de: "Magdeburg", hu: "Magdeburg", ro: "Magdeburg", en: "Magdeburg" },
    description: {
      de: "Magdeburg ist die Landeshauptstadt von Sachsen-Anhalt und liegt an der Elbe. Die Stadt hat eine über 1200-jährige Geschichte und war einst eine der mächtigsten Städte des Heiligen Römischen Reiches. Der Magdeburger Dom, das älteste gotische Bauwerk Deutschlands, prägt die Silhouette der Stadt.",
      hu: "Magdeburg Sachsen-Anhalt tartomány fővárosa és az Elba partján terül el. A városnak több mint 1200 éves története van, és egykor a Német-Római Birodalom egyik legerősebb városai közé tartozott. A magdeburgi dóm, Németország legrégebbi gótikus épülete, meghatározza a város sziluettjét.",
      ro: "Magdeburg este capitala landului Saxonia-Anhalt și se află pe malul Elbei. Orașul are o istorie de peste 1200 de ani și a fost cândva unul dintre cele mai puternice orașe ale Sfântului Imperiu Roman. Domul din Magdeburg, cea mai veche construcție gotică din Germania, definește silueta orașului.",
      en: "Magdeburg is the state capital of Saxony-Anhalt and lies on the Elbe. The city has a history spanning over 1,200 years and was once one of the most powerful cities in the Holy Roman Empire. Magdeburg Cathedral, Germany's oldest Gothic building, defines the city's skyline.",
    },
    facts: {
      de: ["Magdeburg hat ca. 238.000 Einwohner.", "Der Dom wurde im 13. Jahrhundert begonnen.", "Magdeburg wurde im Dreißigjährigen Krieg 1631 fast vollständig zerstört.", "Otto der Große wurde in Magdeburg begraben."],
      hu: ["Magdeburgnak kb. 238 000 lakosa van.", "A dóm építése a 13. században kezdődött.", "Magdeburget a harmincéves háborúban 1631-ben szinte teljesen elpusztították.", "I. Ottót Magdeburgban temették el."],
      ro: ["Magdeburg are aproximativ 238.000 de locuitori.", "Construcția domului a început în secolul al XIII-lea.", "Magdeburg a fost aproape complet distrus în Războiul de Treizeci de Ani în 1631.", "Otto cel Mare a fost îngropat la Magdeburg."],
      en: ["Magdeburg has approximately 238,000 inhabitants.", "Construction of the cathedral began in the 13th century.", "Magdeburg was almost completely destroyed in the Thirty Years' War in 1631.", "Otto the Great was buried in Magdeburg."],
    },
    descriptionAdvanced: {
      de: "",
      hu: "A(z) Magdeburg egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Magdeburg ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A(z) Magdeburg területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Magdeburg tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
  },
  {
    id: "city-halle-saale-extra",
    type: "city",
    parent: "DE-ST",
    coords: [11.9695, 51.4825],
    name: { de: "Halle (Saale)", hu: "Halle (Saale)", ro: "Halle (Saale)", en: "Halle (Saale)" },
    description: {
      de: "Halle (Saale) ist die größte Stadt Sachsen-Anhalts und liegt an der Saale. Die Stadt war ein bedeutendes Salzzentrum und ist Geburtsort des Barockkomponisten Georg Friedrich Händel. Halle ist heute eine wichtige Universitätsstadt mit einer der ältesten deutschen Universitäten.",
      hu: "Halle (Saale) Sachsen-Anhalt legnagyobb városa, a Saale folyó partján. A város jelentős sóipari központ volt, és itt született a barokk zeneszerző Georg Friedrich Händel. Halle ma fontos egyetemváros, Németország egyik legrégebbi egyetemével.",
      ro: "Halle (Saale) este cel mai mare oraș din Saxonia-Anhalt și se află pe malul Salei. Orașul a fost un important centru al sării și este locul de naștere al compozitorului baroc Georg Friedrich Händel. Halle este astăzi un important oraș universitar cu una dintre cele mai vechi universități germane.",
      en: "Halle (Saale) is the largest city in Saxony-Anhalt, lying on the Saale. The city was a major salt centre and is the birthplace of Baroque composer Georg Friedrich Händel. Halle is today an important university city, home to one of Germany's oldest universities.",
    },
    facts: {
      de: ["Georg Friedrich Händel wurde 1685 in Halle geboren.", "Die Martin-Luther-Universität wurde 1694 gegründet.", "Halle war jahrhundertelang ein wichtiges Salzzentrum.", "Die Stadt hat eine lebendige Kunstszene."],
      hu: ["Georg Friedrich Händel 1685-ben született Halléban.", "A Marthin-Luther Egyetemet 1694-ben alapították.", "Halle évszázadokon át fontos sóközpont volt.", "A városnak élénk művészeti élete van."],
      ro: ["Georg Friedrich Händel s-a născut la Halle în 1685.", "Universitatea Martin Luther a fost fondată în 1694.", "Halle a fost timp de secole un important centru al sării.", "Orașul are o scenă artistică vibrantă."],
      en: ["Georg Friedrich Händel was born in Halle in 1685.", "Martin Luther University was founded in 1694.", "Halle was an important salt centre for centuries.", "The city has a vibrant arts scene."],
    },
    descriptionAdvanced: {
      de: "",
      hu: "Halle, város Szász-Anhalt tartományban, a Saale folyó partján, Németország Halle, város Észak-Rajna-Vesztfália tartományban, Németország Halle, település Németországban, Alsó-Szászországban, a Bentheimi járásban Halle, település Németországban, Alsó-Szászországban, a Holzmindeni járásban Halle, város Belgiumban Halle, kanton Belgium Halle-Vilvoorde járásában Halle (album), Halle Berry első albuma A(z) Halle (Saale) egy jelentős turisztikai célpont, amely Németország gazdag történelmét és kultúráját mutatja be. Számos látogatót vonz évről évre. A környék lenyűgöző atmoszférája és az itt található különleges értékek minden utazó számára életre szóló élményt kínálnak.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A(z) Halle (Saale) területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Halle (Saale) tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
  },
  {
    id: "city-dessau-extra",
    type: "city",
    parent: "DE-ST",
    coords: [12.2400, 51.8370],
    name: { de: "Dessau-Roßlau", hu: "Dessau-Roßlau", ro: "Dessau-Roßlau", en: "Dessau-Roßlau" },
    description: {
      de: "Dessau-Roßlau liegt an der Elbe und Mulde und ist bekannt als Sitz des weltberühmten Bauhaus. Das Bauhaus-Gebäude und die Meisterhäuser sind UNESCO-Weltkulturerbe. Das Gartenreich Dessau-Wörlitz, ebenfalls UNESCO-Welterbe, liegt in der Umgebung.",
      hu: "Dessau-Roßlau az Elba és a Mulde találkozásánál fekszik, és a világhírű Bauhaus székhelyeként ismert. A Bauhaus-épület és a mesterlakások UNESCO világörökségek. A szintén UNESCO-védett Dessau-Wörlitz kertbirodalom a környéken található.",
      ro: "Dessau-Roßlau se află la confluența Elbei și Mulde și este cunoscut ca sediu al celebrului Bauhaus. Clădirea Bauhaus și casele maeștrilor sunt patrimoniu UNESCO. Regatul Grădinilor Dessau-Wörlitz, de asemenea Patrimoniu Mondial UNESCO, se află în împrejurimi.",
      en: "Dessau-Roßlau lies on the Elbe and Mulde and is known as the seat of the world-famous Bauhaus. The Bauhaus building and the Masters' Houses are UNESCO World Heritage sites. The Dessau-Wörlitz Garden Kingdom, also a UNESCO World Heritage site, lies in the vicinity.",
    },
    facts: {
      de: ["Das Bauhaus wurde 1925 nach Dessau verlegt.", "Walter Gropius gründete das Bauhaus 1919.", "Das Gartenreich Dessau-Wörlitz ist UNESCO-Welterbe seit 2000.", "Dessau-Roßlau liegt im Biosphärenreservat Mittelelbe."],
      hu: ["A Bauhaus 1925-ben költözött Dessauba.", "Walter Gropius 1919-ben alapította a Bauhaus-t.", "A Dessau-Wörlitz kertbirodalom 2000 óta UNESCO-világörökség.", "Dessau-Roßlau a Középső-Elba bioszféra-rezervátumban fekszik."],
      ro: ["Bauhaus s-a mutat la Dessau în 1925.", "Walter Gropius a fondat Bauhaus în 1919.", "Regatul Grădinilor Dessau-Wörlitz este Patrimoniu Mondial UNESCO din 2000.", "Dessau-Roßlau se află în Rezervația Biosferei Mittelelbe."],
      en: ["The Bauhaus relocated to Dessau in 1925.", "Walter Gropius founded the Bauhaus in 1919.", "The Dessau-Wörlitz Garden Kingdom has been a UNESCO World Heritage site since 2000.", "Dessau-Roßlau lies in the Middle Elbe Biosphere Reserve."],
    },
    descriptionAdvanced: {
      de: "",
      hu: "A(z) Dessau-Roßlau egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Dessau-Roßlau ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A(z) Dessau-Roßlau területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Dessau-Roßlau tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
  },
  {
    id: "river-elbe-st-extra",
    type: "river",
    parent: "DE-ST",
    coords: [11.9000, 52.0000],
    name: { de: "Elbe (Sachsen-Anhalt)", hu: "Elbe (Szász-Anhalt)", ro: "Elba (Saxonia-Anhalt)", en: "Elbe (Saxony-Anhalt)" },
    description: {
      de: "Die Elbe durchfließt Sachsen-Anhalt von Südosten nach Nordwesten und ist der wichtigste Fluss des Bundeslandes. An ihren Ufern liegen bedeutende Städte wie Magdeburg, Wittenberg und Dessau. Das Elbtal ist Teil des UNESCO-Biosphärenreservats Mittlere Elbe.",
      hu: "Az Elba délkelet-északnyugati irányban szeli át Szász-Anhaltat, és a tartomány legfontosabb folyója. Partjain olyan jelentős városok fekszenek, mint Magdeburg, Wittenberg és Dessau. Az Elba-völgy a Középső Elba UNESCO bioszféra-rezervátum része.",
      ro: "Elba traversează Saxonia-Anhalt de la sud-est la nord-vest și este cel mai important râu al landului. Pe malurile sale se află orașe importante precum Magdeburg, Wittenberg și Dessau. Valea Elbei face parte din Rezervația Biosferei UNESCO Mittlere Elbe.",
      en: "The Elbe flows through Saxony-Anhalt from southeast to northwest and is the state's most important river. Major cities such as Magdeburg, Wittenberg, and Dessau lie along its banks. The Elbe valley is part of the UNESCO Middle Elbe Biosphere Reserve.",
    },
    facts: {
      de: ["Die Elbe ist 1.091 km lang.", "Magdeburg liegt direkt an der Elbe.", "Das Biosphärenreservat Mittlere Elbe schützt die Auenlandschaft.", "Die Elbe diente jahrhundertelang als Handelsweg."],
      hu: ["Az Elba 1091 km hosszú.", "Magdeburg közvetlenül az Elba partján fekszik.", "A Középső Elba bioszféra-rezervátum védi az ártéri tájat.", "Az Elba évszázadokon át kereskedelmi útvonalként szolgált."],
      ro: ["Elba are 1.091 km lungime.", "Magdeburg se află direct pe malul Elbei.", "Rezervația Biosferei Mittlere Elbe protejează peisajul de luncă.", "Elba a servit timp de secole ca rută comercială."],
      en: ["The Elbe is 1,091 km long.", "Magdeburg lies directly on the Elbe.", "The Middle Elbe Biosphere Reserve protects the floodplain landscape.", "The Elbe served as a trade route for centuries."],
    },
    descriptionAdvanced: {
      de: "",
      hu: "A(z) Elbe (Sachsen-Anhalt) egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Elbe (Sachsen-Anhalt) ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A(z) Elbe (Sachsen-Anhalt) területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Elbe (Sachsen-Anhalt) tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
  },
  {
    id: "river-saale-st-extra",
    type: "river",
    parent: "DE-ST",
    coords: [11.9700, 51.5000],
    name: { de: "Saale (Sachsen-Anhalt)", hu: "Saale (Szász-Anhalt)", ro: "Saale (Saxonia-Anhalt)", en: "Saale (Saxony-Anhalt)" },
    description: {
      de: "Die Saale ist ein wichtiger Nebenfluss der Elbe und fließt durch den Süden Sachsen-Anhalts. An ihr liegen die Städte Halle und Naumburg. Das Saaletal ist bekannt für seinen Weinbau und die reizvolle Burgenlandschaft.",
      hu: "A Saale az Elba fontos mellékfolyója, amely Sachsen-Anhalt déli részén folyik végig. Partján fekvő városok Halle és Naumburg. A Saale-völgy szőlőtermesztéséről és festői vár-vidékéről ismert.",
      ro: "Saale este un important afluent al Elbei și curge prin sudul Saxoniei-Anhalt. Pe malurile sale se află orașele Halle și Naumburg. Valea Saalei este renumită pentru viticultura sa și peisajul pitoresc cu cetăți.",
      en: "The Saale is an important tributary of the Elbe, flowing through southern Saxony-Anhalt. The cities of Halle and Naumburg lie on its banks. The Saale valley is known for its viticulture and picturesque castle landscape.",
    },
    facts: {
      de: ["Die Saale ist 413 km lang.", "Das Saaletal ist ein bekanntes Weinbaugebiet.", "Naumburg am Dom liegt direkt an der Saale.", "Die Saale mündet bei Barby in die Elbe."],
      hu: ["A Saale 413 km hosszú.", "A Saale-völgy ismert borvidék.", "A Naumburg am Dom közvetlenül a Saale partján fekszik.", "A Saale Barbynál torkollik az Elbába."],
      ro: ["Saale are 413 km lungime.", "Valea Saalei este o zonă viticolă renumită.", "Naumburg am Dom se află direct pe malul Saalei.", "Saale se varsă în Elba la Barby."],
      en: ["The Saale is 413 km long.", "The Saale valley is a well-known wine-growing region.", "Naumburg am Dom lies directly on the Saale.", "The Saale flows into the Elbe at Barby."],
    },
    descriptionAdvanced: {
      de: "",
      hu: "A(z) Saale (Sachsen-Anhalt) egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Saale (Sachsen-Anhalt) ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A(z) Saale (Sachsen-Anhalt) területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Saale (Sachsen-Anhalt) tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
  },
  {
    id: "lake-arendsee-extra",
    type: "lake",
    parent: "DE-ST",
    coords: [11.4800, 52.8900],
    name: { de: "Arendsee", hu: "Arendsee", ro: "Lacul Arendsee", en: "Arendsee" },
    description: {
      de: "Der Arendsee ist einer der schönsten und tiefsten Seen in der Altmark, dem nordwestlichen Teil Sachsen-Anhalts. Er entstand durch einen Erdfallsee und ist für seine Klarheit und tiefblaue Farbe bekannt. Rund um den See liegt das gleichnamige Städtchen mit einem beliebten Badeort.",
      hu: "Az Arendsee az Altmark egyik legszebb és legmélyebb tava, Sachsen-Anhalt északnyugati részén. Bemosódással keletkezett, és kristálytiszta, mélykék vizéről ismert. A tó körül fekszik a névadó kisváros, egy kedvelt fürdőhellyel.",
      ro: "Arendsee este unul dintre cele mai frumoase și mai adânci lacuri din Altmark, partea de nord-vest a Saxoniei-Anhalt. S-a format printr-un fenomen de surpare și este cunoscut pentru claritatea și culoarea sa albastru-adânc. În jurul lacului se află orășelul omonim cu o stațiune balneare populară.",
      en: "Arendsee is one of the most beautiful and deepest lakes in the Altmark, the northwestern part of Saxony-Anhalt. It was formed by a subsidence lake and is known for its clarity and deep blue colour. The small town of the same name with a popular bathing resort lies around the lake.",
    },
    facts: {
      de: ["Der Arendsee ist 28 m tief.", "Er entstand vermutlich durch einen Erdfall im Mittelalter.", "Das Wasser ist besonders klar und nährstoffarm.", "Er ist ein beliebtes Tauchgebiet in Norddeutschland."],
      hu: ["Az Arendsee 28 m mély.", "Valószínűleg egy középkori beomlással keletkezett.", "A víz különösen tiszta és tápanyagszegény.", "Észak-Németország egyik kedvelt búvárkodási területe."],
      ro: ["Arendsee are 28 m adâncime.", "S-a format probabil printr-o surpare medievală.", "Apa este deosebit de clară și săracă în nutrienți.", "Este o zonă populară de scufundări în nordul Germaniei."],
      en: ["Arendsee is 28 m deep.", "It was probably formed by a medieval subsidence.", "The water is exceptionally clear and nutrient-poor.", "It is a popular diving area in northern Germany."],
    },
    descriptionAdvanced: {
      de: "",
      hu: "A(z) Arendsee egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Arendsee ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A(z) Arendsee területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Arendsee tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
  },
  {
    id: "mnt-brocken-st-extra",
    type: "mountain",
    parent: "DE-ST",
    coords: [10.6186, 51.7998],
    name: { de: "Brocken (Sachsen-Anhalt)", hu: "Brocken (Szász-Anhalt)", ro: "Brocken (Saxonia-Anhalt)", en: "Brocken (Saxony-Anhalt)" },
    description: {
      de: "Der Brocken ist mit 1.141 m der höchste Berg im Harz und in ganz Norddeutschland. Er liegt im Nationalpark Harz und ist für seine oft neblige, mystische Atmosphäre bekannt. Die Walpurgisnacht, in der Hexen auf dem Brocken tanzen, ist eine berühmte Sage.",
      hu: "A Brocken 1141 méterrel a Harz és egész Észak-Németország legmagasabb hegye. A Harz Nemzeti Parkban fekszik, és gyakran ködös, misztikus hangulatáról ismert. A Walpurgis-éjszaka, amelyen boszorkányok táncolnak a Brockenen, egy hírneves legenda.",
      ro: "Brocken, cu 1.141 m, este cel mai înalt munte din Harz și din tot nordul Germaniei. Se află în Parcul Național Harz și este cunoscut pentru atmosfera sa adesea cetoasă și mistică. Noaptea Walpurgis, în care vrăjitoarele dansează pe Brocken, este o legendă celebră.",
      en: "At 1,141 m, the Brocken is the highest mountain in the Harz and all of northern Germany. It lies within the Harz National Park and is known for its often misty, mystical atmosphere. The Walpurgis Night, in which witches dance on the Brocken, is a famous legend.",
    },
    facts: {
      de: ["Der Brocken ist 1.141 m hoch.", "Im Nationalpark Harz liegt er in Sachsen-Anhalt.", "Die Walpurgisnacht am 30. April ist ein beliebtes Fest.", "Die Brockenbahn fährt von Wernigerode auf den Gipfel."],
      hu: ["A Brocken 1141 m magas.", "A Harz Nemzeti Parkban Sachsen-Anhalt területén fekszik.", "A Walpurgis-éjszaka április 30-án kedvelt ünnep.", "A Brocken-vasút Wernigerodeból visz a csúcsra."],
      ro: ["Brocken are 1.141 m înălțime.", "Se află în Parcul Național Harz, pe teritoriul Saxoniei-Anhalt.", "Noaptea Walpurgis pe 30 aprilie este o sărbătoare populară.", "Trenul Brocken merge de la Wernigerode până pe vârf."],
      en: ["The Brocken is 1,141 m high.", "It lies in the Harz National Park in Saxony-Anhalt.", "Walpurgis Night on 30 April is a popular festival.", "The Brocken railway runs from Wernigerode to the summit."],
    },
    descriptionAdvanced: {
      de: "",
      hu: "A(z) Brocken (Sachsen-Anhalt) egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Brocken (Sachsen-Anhalt) ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A(z) Brocken (Sachsen-Anhalt) területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Brocken (Sachsen-Anhalt) tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
  },
  {
    id: "forest-harz-nationalpark-extra",
    type: "forest",
    parent: "DE-ST",
    coords: [10.7500, 51.7000],
    name: { de: "Nationalpark Harz (Sachsen-Anhalt)", hu: "Harz Nemzeti Park (Szász-Anhalt)", ro: "Parcul Național Harz (Saxonia-Anhalt)", en: "Harz National Park (Saxony-Anhalt)" },
    description: {
      de: "Der Nationalpark Harz erstreckt sich über Sachsen-Anhalt und Niedersachsen und schützt die naturnahen Bergwälder des Harzes. Im Park leben wieder Luchse und Wildkatzen. Der Park ist ein wichtiges Rückzugsgebiet für viele bedrohte Tier- und Pflanzenarten.",
      hu: "A Harz Nemzeti Park Sachsen-Anhalton és Alsó-Szászországon át terjed, és védi a Harz természetközeli hegyvidéki erdőit. A parkban ismét hiúzok és vadmacskák élnek. A park sok veszélyeztetett állat- és növényfaj fontos menedékhelye.",
      ro: "Parcul Național Harz se întinde pe Saxonia-Anhalt și Saxonia Inferioară și protejează pădurile montane naturale ale masivului Harz. În parc trăiesc din nou râși și pisici sălbatice. Parcul este un refugiu important pentru multe specii de animale și plante amenințate.",
      en: "The Harz National Park extends across Saxony-Anhalt and Lower Saxony, protecting the near-natural mountain forests of the Harz. Lynxes and wildcats live in the park again. The park is an important refuge for many endangered animal and plant species.",
    },
    facts: {
      de: ["Der Nationalpark Harz wurde 1990 gegründet.", "Er umfasst 247 km².", "Luchse wurden erfolgreich wieder angesiedelt.", "Der Brocken ist der höchste Punkt des Parks."],
      hu: ["A Harz Nemzeti Parkot 1990-ben alapították.", "247 km² területet foglal el.", "A hiúzokat sikeresen visszatelepítették.", "A Brocken a park legmagasabb pontja."],
      ro: ["Parcul Național Harz a fost înființat în 1990.", "Acoperă 247 km².", "Râșii au fost reintroduși cu succes.", "Brocken este cel mai înalt punct al parcului."],
      en: ["The Harz National Park was established in 1990.", "It covers 247 km².", "Lynxes were successfully reintroduced.", "The Brocken is the highest point in the park."],
    },
    descriptionAdvanced: {
      de: "",
      hu: "A(z) Nationalpark Harz (Sachsen-Anhalt) egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Nationalpark Harz (Sachsen-Anhalt) ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A(z) Nationalpark Harz (Sachsen-Anhalt) területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Nationalpark Harz (Sachsen-Anhalt) tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
  },
  {
    id: "hist-wittenberg-stadtkirche-extra",
    type: "historical",
    parent: "DE-ST",
    coords: [12.6500, 51.8700],
    name: { de: "Lutherstadt Wittenberg", hu: "Lutherstadt Wittenberg", ro: "Lutherstadt Wittenberg", en: "Lutherstadt Wittenberg" },
    description: {
      de: "Wittenberg ist der Ort, an dem Martin Luther 1517 seine 95 Thesen an die Schlosskirche anschlug und damit die Reformation einleitete. Die Stadt trägt heute den Beinamen 'Lutherstadt' und ist UNESCO-Welterbe. Sie ist ein wichtiges Ziel für Pilger und Geschichtsinteressierte aus aller Welt.",
      hu: "Wittenberg az a hely, ahol Luther Márton 1517-ben a vártemplom kapujára szegezte 95 tézisét, és ezzel megindította a reformációt. A város ma a 'Lutherstadt' melléknevet viseli, és UNESCO-világörökség. Fontos zarándokhely és a történelem iránt érdeklődők célpontja az egész világból.",
      ro: "Wittenberg este locul unde Martin Luther a afișat în 1517 cele 95 de teze pe ușa Bisercii Castelului, declanșând astfel Reforma. Astăzi orașul poartă supranumele 'Lutherstadt' și este Patrimoniu Mondial UNESCO. Este o destinație importantă pentru pelerini și iubitori de istorie din întreaga lume.",
      en: "Wittenberg is where Martin Luther nailed his 95 Theses to the Castle Church door in 1517, thereby initiating the Reformation. The city today bears the epithet 'Lutherstadt' and is a UNESCO World Heritage site. It is an important destination for pilgrims and history enthusiasts from all over the world.",
    },
    facts: {
      de: ["Luther schlug seine Thesen am 31. Oktober 1517 an.", "Die Stadtkirche ist die älteste Reformationskirche.", "Philip Melanchthon wirkte ebenfalls in Wittenberg.", "UNESCO-Weltkulturerbe seit 1996."],
      hu: ["Luther 1517. október 31-én szegezte fel téziseit.", "A városi templom a legrégebbi reformáció temploma.", "Philipp Melanchthon szintén Wittenbergben tevékenykedett.", "1996 óta UNESCO-világörökség."],
      ro: ["Luther și-a afișat tezele pe 31 octombrie 1517.", "Biserica orășenească este cea mai veche biserică a Reformei.", "Philip Melanchthon a activat și el la Wittenberg.", "Patrimoniu Mondial UNESCO din 1996."],
      en: ["Luther nailed his theses on 31 October 1517.", "The Town Church is the oldest Reformation church.", "Philip Melanchthon also worked in Wittenberg.", "UNESCO World Heritage site since 1996."],
    },
    descriptionAdvanced: {
      de: "",
      hu: "Németország Lutherstadt Eisleben, település Németországban, Szász-Anhalt tartományban Lutherstadt Wittenberg, város Németországban, Szász-Anhalt tartományban A(z) Lutherstadt Wittenberg egy jelentős turisztikai célpont, amely Németország gazdag történelmét és kultúráját mutatja be. Számos látogatót vonz évről évre. A környék lenyűgöző atmoszférája és az itt található különleges értékek minden utazó számára életre szóló élményt kínálnak.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A(z) Lutherstadt Wittenberg területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Lutherstadt Wittenberg tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
  },
  {
    id: "hist-naumburg-dom-extra",
    type: "historical",
    parent: "DE-ST",
    coords: [11.8100, 51.1500],
    name: { de: "Naumburger Dom", hu: "Naumburgi dóm", ro: "Domul din Naumburg", en: "Naumburg Cathedral" },
    description: {
      de: "Der Naumburger Dom ist ein romanisch-gotischer Bau aus dem 13. Jahrhundert und gehört seit 2018 zum UNESCO-Weltkulturerbe. Berühmt sind die Stifterfiguren im Westchor, darunter die legendäre Uta von Naumburg. Das Kunstwerk gilt als eines der bedeutendsten Zeugnisse mittelalterlicher Bildhauerei.",
      hu: "A naumburgi dóm egy 13. századi románkori-gótikus épület, amely 2018 óta UNESCO-világörökség. Híresek a nyugati kórus alapítói szobrai, köztük a legendás Naumburgi Uta. A műalkotás a középkori szobrászat egyik legjelentősebb emlékeként tartják számon.",
      ro: "Domul din Naumburg este o construcție romanico-gotică din secolul al XIII-lea și face parte din Patrimoniul Mondial UNESCO din 2018. Celebre sunt figurile fondatorilor din corul de vest, printre care legendara Uta von Naumburg. Opera de artă este considerată una dintre cele mai importante mărturii ale sculpturii medievale.",
      en: "Naumburg Cathedral is a Romanesque-Gothic structure from the 13th century and has been a UNESCO World Heritage site since 2018. Famous are the founder figures in the west choir, including the legendary Uta von Naumburg. The artwork is considered one of the most significant testimonies of medieval sculpture.",
    },
    facts: {
      de: ["UNESCO-Weltkulturerbe seit 2018.", "Die Stifterfigur Uta ist weltberühmt.", "Der Dom wurde im 13. Jahrhundert gebaut.", "Naumburg liegt an der Saale."],
      hu: ["2018 óta UNESCO-világörökség.", "Az Uta alapítói szobor világhíres.", "A dóm a 13. században épült.", "Naumburg a Saale partján fekszik."],
      ro: ["Patrimoniu Mondial UNESCO din 2018.", "Figura fondatoarei Uta este renumită în întreaga lume.", "Domul a fost construit în secolul al XIII-lea.", "Naumburg se află pe malul Saalei."],
      en: ["UNESCO World Heritage site since 2018.", "The founder figure of Uta is world-famous.", "The cathedral was built in the 13th century.", "Naumburg lies on the Saale."],
    },
    descriptionAdvanced: {
      de: "",
      hu: "A(z) Naumburger Dom egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Naumburger Dom ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A(z) Naumburger Dom területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Naumburger Dom tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
  },
  {
    id: "landmark-nebra-himmelsscheibe-extra",
    type: "landmark",
    parent: "DE-ST",
    coords: [11.5400, 51.3400],
    name: { de: "Himmelsscheibe von Nebra", hu: "Nebrai égiskorong", ro: "Discul ceresc de la Nebra", en: "Nebra Sky Disc" },
    description: {
      de: "Die Himmelsscheibe von Nebra ist eine rund 3.600 Jahre alte Bronzescheibe mit Darstellungen von Sonne, Mond und Sternen. Sie wurde 1999 in der Nähe von Nebra in Sachsen-Anhalt gefunden und gilt als die älteste bekannte Darstellung des Kosmos. Das Original ist im Landesmuseum in Halle ausgestellt.",
      hu: "A nebrai égiskorong egy kb. 3600 éves bronztárgy, amelyen nap, hold és csillagok ábrázolása látható. 1999-ben fedezték fel Nebra közelében, Sachsen-Anhaltban, és a kozmosz legrégebben ismert ábrázolásának tartják. Az eredeti a Halléi Tartományi Múzeumban van kiállítva.",
      ro: "Discul ceresc de la Nebra este un disc de bronz vechi de aproximativ 3.600 de ani, cu reprezentări ale soarelui, lunii și stelelor. A fost găsit în 1999 în apropierea localității Nebra din Saxonia-Anhalt și este considerat cea mai veche reprezentare cunoscută a cosmosului. Originalul este expus la Muzeul de Stat din Halle.",
      en: "The Nebra Sky Disc is a bronze disc approximately 3,600 years old, depicting the sun, moon, and stars. It was discovered in 1999 near Nebra in Saxony-Anhalt and is considered the oldest known concrete depiction of the cosmos. The original is on display at the State Museum in Halle.",
    },
    facts: {
      de: ["Die Scheibe ist ca. 3.600 Jahre alt.", "Sie wurde 1999 illegal ausgegraben.", "Sie ist UNESCO-Weltdokumentenerbe.", "Das Original ist im Landesmuseum Vorgeschichte in Halle."],
      hu: ["A korong kb. 3600 éves.", "1999-ben illegálisan ásták ki.", "UNESCO világdokumentum-örökség.", "Az eredeti a Halléi Őstörténeti Múzeumban van."],
      ro: ["Discul are aproximativ 3.600 de ani.", "A fost săpat ilegal în 1999.", "Este Patrimoniu Documentar UNESCO.", "Originalul se află la Muzeul de Preistorie din Halle."],
      en: ["The disc is approximately 3,600 years old.", "It was illegally excavated in 1999.", "It is a UNESCO Memory of the World document.", "The original is at the State Museum of Prehistory in Halle."],
    },
    descriptionAdvanced: {
      de: "",
      hu: "A(z) Himmelsscheibe von Nebra egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Himmelsscheibe von Nebra ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A(z) Himmelsscheibe von Nebra területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Himmelsscheibe von Nebra tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
  },
  {
    id: "landmark-bauhaus-dessau-extra",
    type: "landmark",
    parent: "DE-ST",
    coords: [12.2300, 51.8400],
    name: { de: "Bauhaus Dessau", hu: "Bauhaus Dessau", ro: "Bauhaus Dessau", en: "Bauhaus Dessau" },
    description: {
      de: "Das Bauhausgebäude in Dessau ist eines der bedeutendsten Bauwerke der Moderne und wurde von Walter Gropius entworfen. Es ist Teil des UNESCO-Welterbes 'Bauhaus und seine Stätten in Weimar, Dessau und Bernau'. Das Gebäude ist ein Meilenstein in der Geschichte des Designs und der Architektur.",
      hu: "A dessaui Bauhaus-épület a modernizmus egyik legjelentősebb alkotása, Walter Gropius tervezte. Az 'UNESCO-világörökség: Bauhaus és helyszínei Weimarban, Dessauban és Bernauban' részét képezi. Az épület mérföldkő a design és az építészet történetében.",
      ro: "Clădirea Bauhaus din Dessau este una dintre cele mai importante construcții ale modernismului și a fost proiectată de Walter Gropius. Face parte din Patrimoniul Mondial UNESCO 'Bauhaus și siturile sale din Weimar, Dessau și Bernau'. Clădirea este un jalon în istoria designului și arhitecturii.",
      en: "The Bauhaus building in Dessau is one of the most significant buildings of Modernism and was designed by Walter Gropius. It is part of the UNESCO World Heritage 'Bauhaus and its Sites in Weimar, Dessau and Bernau'. The building is a milestone in the history of design and architecture.",
    },
    facts: {
      de: ["Das Bauhausgebäude wurde 1926 fertiggestellt.", "UNESCO-Welterbe seit 1996.", "Walter Gropius entwarf das Gebäude.", "Das Bauhaus beeinflusste Design und Architektur weltweit."],
      hu: ["A Bauhaus-épület 1926-ban készült el.", "1996 óta UNESCO-világörökség.", "Walter Gropius tervezte az épületet.", "A Bauhaus a tervezés és az építészet területén világszerte hatást gyakorolt."],
      ro: ["Clădirea Bauhaus a fost finalizată în 1926.", "Patrimoniu Mondial UNESCO din 1996.", "Walter Gropius a proiectat clădirea.", "Bauhaus a influențat designul și arhitectura la nivel mondial."],
      en: ["The Bauhaus building was completed in 1926.", "UNESCO World Heritage site since 1996.", "Walter Gropius designed the building.", "The Bauhaus influenced design and architecture worldwide."],
    },
    descriptionAdvanced: {
      de: "",
      hu: "A(z) Bauhaus Dessau egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Bauhaus Dessau ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A(z) Bauhaus Dessau területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Bauhaus Dessau tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
  },
  {
    id: "agriculture-zuckerruebe-st-extra",
    type: "agriculture",
    parent: "DE-ST",
    coords: [11.5000, 51.8000],
    name: { de: "Zuckerrübenanbau (Sachsen-Anhalt)", hu: "Cukorrépatermelés (Szász-Anhalt)", ro: "Cultivarea sfeclei de zahăr (Saxonia-Anhalt)", en: "Sugar Beet Farming (Saxony-Anhalt)" },
    description: {
      de: "Sachsen-Anhalt ist eines der bedeutendsten Zuckerrübenanbaugebiete Deutschlands. Die fruchtbaren Böden der Magdeburger Börde und der Saale-Unstrut-Region sind ideal für den Anbau dieser Nutzpflanze. Die Zuckerindustrie hat in der Region eine lange Tradition.",
      hu: "Sachsen-Anhalt Németország egyik legjelentősebb cukorrépatermelő vidéke. A Magdeburgi Börde és a Saale-Unstrut régió termékeny talaja ideális e haszonnövény termesztéséhez. A cukoriparnak a régióban hosszú hagyományai vannak.",
      ro: "Saxonia-Anhalt este una dintre cele mai importante zone de cultivare a sfeclei de zahăr din Germania. Solurile fertile ale Câmpiei Magdeburg și ale regiunii Saale-Unstrut sunt ideale pentru cultivarea acestei plante. Industria zahărului are o lungă tradiție în regiune.",
      en: "Saxony-Anhalt is one of Germany's most important sugar beet growing regions. The fertile soils of the Magdeburg Borde and the Saale-Unstrut region are ideal for cultivating this crop. The sugar industry has a long tradition in the region.",
    },
    facts: {
      de: ["Die Magdeburger Börde ist eine der fruchtbarsten Regionen Deutschlands.", "Sachsen-Anhalt ist einer der größten Zuckerrübenproduzenten.", "Zuckerrüben werden zu Zucker und Bioethanol verarbeitet.", "Die Ernte findet im Herbst statt."],
      hu: ["A Magdeburgi Börde Németország egyik legtermékenyebb régiója.", "Sachsen-Anhalt az egyik legnagyobb cukorrépatermelő.", "A cukorrépát cukorá és bioetanollá dolgozzák fel.", "Az aratás ősszel zajlik."],
      ro: ["Câmpia Magdeburg este una dintre cele mai fertile regiuni din Germania.", "Saxonia-Anhalt este unul dintre cei mai mari producători de sfeclă de zahăr.", "Sfecla de zahăr este prelucrată în zahăr și bioetanol.", "Recolta are loc toamna."],
      en: ["The Magdeburg Borde is one of Germany's most fertile regions.", "Saxony-Anhalt is one of the largest sugar beet producers.", "Sugar beets are processed into sugar and bioethanol.", "Harvesting takes place in autumn."],
    },
    descriptionAdvanced: {
      de: "",
      hu: "A(z) Zuckerrübenanbau (Sachsen-Anhalt) egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Zuckerrübenanbau (Sachsen-Anhalt) ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A(z) Zuckerrübenanbau (Sachsen-Anhalt) területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Zuckerrübenanbau (Sachsen-Anhalt) tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
  },
  {
    id: "landmark-quedlinburg-st-extra",
    type: "landmark",
    parent: "DE-ST",
    coords: [11.1400, 51.7900],
    name: { de: "Quedlinburg", hu: "Quedlinburg", ro: "Quedlinburg", en: "Quedlinburg" },
    description: {
      de: "Quedlinburg ist eine mittelalterliche Stadt am Harzrand und gehört seit 1994 zum UNESCO-Weltkulturerbe. Sie ist bekannt für ihre über 1.300 Fachwerkhäuser und das imposante Stiftsstift auf dem Schlossberg. Quedlinburg war im Mittelalter eine der bedeutendsten Städte des Heiligen Römischen Reiches.",
      hu: "Quedlinburg egy középkori város a Harz lábánál, 1994 óta UNESCO-világörökség. Több mint 1300 faváz-tettős háza és a Schlossberg impozáns kolostoregyüttese teszi híressé. Quedlinburg a középkorban a Német-Római Birodalom egyik legjelentősebb városa volt.",
      ro: "Quedlinburg este un oraș medieval la poalele Harzului și face parte din Patrimoniul Mondial UNESCO din 1994. Este cunoscut pentru peste 1.300 de case cu schelet de lemn și impunătorul complex al mânăstirii de pe Schlossberg. Quedlinburg a fost în Evul Mediu unul dintre cele mai importante orașe ale Sfântului Imperiu Roman.",
      en: "Quedlinburg is a medieval town on the edge of the Harz and has been a UNESCO World Heritage site since 1994. It is known for over 1,300 half-timbered houses and the imposing collegiate church on the Schlossberg. Quedlinburg was one of the most significant cities in the Holy Roman Empire in the Middle Ages.",
    },
    facts: {
      de: ["UNESCO-Weltkulturerbe seit 1994.", "Über 1.300 Fachwerkhäuser sind erhalten.", "König Heinrich I. wurde in Quedlinburg begraben.", "Das Stiftsstift blickt auf eine 1.000-jährige Geschichte zurück."],
      hu: ["1994 óta UNESCO-világörökség.", "Több mint 1300 faváz-ház maradt fenn.", "I. Henrik király Quedlinburgban van eltemetve.", "A kolostor 1000 éves történelemre tekint vissza."],
      ro: ["Patrimoniu Mondial UNESCO din 1994.", "Sunt conservate peste 1.300 de case cu schelet de lemn.", "Regele Henric I a fost îngropat la Quedlinburg.", "Mânăstirea are o istorie de 1.000 de ani."],
      en: ["UNESCO World Heritage site since 1994.", "Over 1,300 half-timbered houses are preserved.", "King Henry I was buried in Quedlinburg.", "The collegiate church has a 1,000-year history."],
    },
    descriptionAdvanced: {
      de: "",
      hu: "Quedlinburg város Németországban, Szász-Anhalt szövetségi államban található. Európa egyik legjobban megmaradt középkori óvárosa, több mint 2100 favázas házzal és az Ottó kori fejedelmi központtal. A második világháborútól a Németország újraegyesítéséig az  NDK-hoz tartozott. A román kori és reneszánsz építészeti remekeket felvonultató óváros 1994 óta a világörökség része. A(z) Quedlinburg egy jelentős turisztikai célpont, amely Németország gazdag történelmét és kultúráját mutatja be. Számos látogatót vonz évről évre. A környék lenyűgöző atmoszférája és az itt található különleges értékek minden utazó számára életre szóló élményt kínálnak.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: [
        "Európa egyik legjobban megmaradt középkori óvárosa, több mint 2100 favázas házzal és az Ottó kori fejedelmi központtal.",
        "A román kori és reneszánsz építészeti remekeket felvonultató óváros 1994 óta a világörökség része.",
        "A(z) Quedlinburg területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Quedlinburg tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik."
      ],
      ro: [],
      en: []
    },
  },
  {
    id: "industry-leuna-buna-extra",
    type: "industry",
    parent: "DE-ST",
    coords: [12.0000, 51.3300],
    name: { de: "Chemiedreieck Leuna-Buna", hu: "Leuna-Buna vegyipari háromszög", ro: "Triunghiul chimic Leuna-Buna", en: "Leuna-Buna Chemical Triangle" },
    description: {
      de: "Das Chemiedreieck um Leuna, Buna und Bitterfeld-Wolfen ist eines der bedeutendsten Industriegebiete Deutschlands. Hier entstanden im 20. Jahrhundert bahnbrechende chemische Produkte wie synthetisches Benzin und Kunstfasern. Nach der Wiedervereinigung wurde das Gebiet stark modernisiert.",
      hu: "A Leuna, Buna és Bitterfeld-Wolfen körüli vegyipari háromszög Németország egyik legjelentősebb ipari területe. A 20. században itt készültek úttörő vegyi termékek, például szintetikus benzin és műszálak. Az újraegyesítés után a területet erősen modernizálták.",
      ro: "Triunghiul chimic din jurul Leuna, Buna și Bitterfeld-Wolfen este una dintre cele mai importante zone industriale din Germania. În secolul al XX-lea, aici au luat naștere produse chimice revoluționare, cum ar fi benzina sintetică și fibrele artificiale. După reunificare, zona a fost puternic modernizată.",
      en: "The chemical triangle around Leuna, Buna, and Bitterfeld-Wolfen is one of Germany's most important industrial areas. Pioneering chemical products such as synthetic petrol and synthetic fibres were developed here in the 20th century. After reunification the area was heavily modernised.",
    },
    facts: {
      de: ["Leuna-Werke wurde 1916 gegründet.", "Hier wurde synthetischer Kraftstoff entwickelt.", "Nach 1990 massiver Umbau und Modernisierung.", "Heute ein wichtiges Zentrum der Chemieindustrie."],
      hu: ["A Leuna Műveket 1916-ban alapították.", "Itt fejlesztették ki a szintetikus üzemanyagot.", "1990 után tömeges átalakulás és modernizálás zajlott.", "Ma a vegyipar fontos központja."],
      ro: ["Uzinele Leuna au fost fondată în 1916.", "Aici a fost dezvoltat combustibilul sintetic.", "Transformare masivă și modernizare după 1990.", "Astăzi un important centru al industriei chimice."],
      en: ["Leuna Works was founded in 1916.", "Synthetic fuel was developed here.", "Massive restructuring and modernisation after 1990.", "Today an important centre of the chemical industry."],
    },
    descriptionAdvanced: {
      de: "",
      hu: "A(z) Chemiedreieck Leuna-Buna egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Chemiedreieck Leuna-Buna ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A(z) Chemiedreieck Leuna-Buna területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Chemiedreieck Leuna-Buna tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
  },
];
