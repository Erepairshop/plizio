import type { POI } from "./poi";

export const poiExtraDe2: POI[] = [
  // DE-HE (Hessen) — 15 POIs
  {
    id: "city-wiesbaden-extra",
    type: "city",
    parent: "DE-HE",
    coords: [8.2395, 50.0826],
    name: { de: "Wiesbaden", hu: "Wiesbaden", ro: "Wiesbaden", en: "Wiesbaden" },
    description: {
      de: "Wiesbaden ist die Landeshauptstadt Hessens und bekannt für ihre Thermen und Kureinrichtungen.",
      hu: "Wiesbaden Hessen tartomány fővárosa, hőforrásairól és fürdőintézményeiről ismert.",
      ro: "Wiesbaden este capitala landului Hessa, renumită pentru termele și stațiunile sale balneare.",
      en: "Wiesbaden is the state capital of Hesse, known for its thermal springs and spa facilities.",
    },
    facts: {
      de: ["Landeshauptstadt von Hessen.", "Bekannt als Kurstadt mit 26 warmen Quellen.", "Sitz der BKA (Bundeskriminalamt)."],
      hu: ["Hessen tartomány fővárosa.", "26 meleg forrásáról ismert gyógyváros.", "A Szövetségi Bűnügyi Hivatal (BKA) székhelye."],
      ro: ["Capitala landului Hessa.", "Renumit oraș spa cu 26 de izvoare termale.", "Sediul Oficiului Federal de Investigații Criminale (BKA)."],
      en: ["State capital of Hesse.", "Known as a spa town with 26 warm springs.", "Headquarters of the Federal Criminal Police Office (BKA)."],
    },
    descriptionAdvanced: {
      de: "Wiesbaden, die hessische Landeshauptstadt, ist eines der ältesten Kurbäder Europas und berühmt für seine 26 heißen Thermalquellen. Die Stadt besticht durch ihr elegantes klassizistisches Stadtbild, das im Zweiten Weltkrieg weitgehend erhalten blieb. Ein Zentrum des gesellschaftlichen Lebens ist das prächtige Kurhaus mit dem Kurpark und dem renommierten Casino, in dem bereits Dostojewski verkehrte. Wiesbaden war lange Zeit eine kaiserliche Residenzstadt, was sich in den prachtvollen Villenvierteln und der Architektur des Staatstheaters widerspiegelt. Durch seine Lage am Rhein und am Fuße des Taunus ist die Stadt zudem ein idealer Ausgangspunkt für Weinliebhaber und Naturfreunde. Geographie K7 – Die Kurstadt als historisches und modernes Dienstleistungszentrum.",
      hu: "A(z) Wiesbaden egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Wiesbaden ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Landeshauptstadt von Hessen und eine der wohlhabendsten Städte Deutschlands.", "Besitzt 26 heiße Thermalquellen, die bereits die Römer nutzten.", "Das Kurhaus Wiesbaden wurde 1907 von Kaiser Wilhelm II. eingeweiht.", "Beherbergt eines der ältesten und schönsten Casinos der Welt.", "Wird aufgrund des milden Klimas oft als 'Nizza des Nordens' bezeichnet.", "Sitz des Bundeskriminalamts und des Statistischen Bundesamtes."],
      hu: [
        "A(z) Wiesbaden területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Wiesbaden tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Wie viele Thermalquellen gibt es in Wiesbaden?",
                "a": "Es gibt 26 Thermalquellen, von denen der Kochbrunnen die bekannteste ist."
            },
            {
                "q": "Was ist das Kurhaus Wiesbaden?",
                "a": "Ein prachtvolles historisches Gebäude, das als Gesellschaftshaus und Standort des Casinos dient."
            },
            {
                "q": "Was ist die Besonderheit der Nerobergbahn?",
                "a": "Sie ist eine der wenigen noch betriebenen Standseilbahnen mit Wasserballastantrieb."
            },
            {
                "q": "Wann wurde Wiesbaden die Hauptstadt von Hessen?",
                "a": "Wiesbaden wurde nach dem Zweiten Weltkrieg im Jahr 1945 zur Landeshauptstadt ernannt."
            }
        ],
        "hu": [
            {
                "q": "Hány hőforrás található Wiesbadenben?",
                "a": "26 hőforrás van, amelyek közül a Kochbrunnen a legismertebb."
            },
            {
                "q": "Mi a wiesbadeni Kurhaus?",
                "a": "Egy pompás történelmi épület, amely társasági házként és a kaszinó helyszíneként szolgál."
            },
            {
                "q": "Mi a különlegessége a Nerobergbahnnak?",
                "a": "Egyike a kevés még működő vízballaszt-hajtású siklónak."
            },
            {
                "q": "Mikor lett Wiesbaden Hessen fővárosa?",
                "a": "Wiesbadent a második világháború után, 1945-ben nevezték ki tartományi fővárossá."
            }
        ],
        "ro": [
            {
                "q": "Câte izvoare termale sunt în Wiesbaden?",
                "a": "Există 26 de izvoare termale, dintre care Kochbrunnen este cel mai cunoscut."
            },
            {
                "q": "Ce este Kurhaus Wiesbaden?",
                "a": "O clădire istorică splendidă care servește ca casă socială și sediu al cazinoului."
            },
            {
                "q": "Care este particularitatea Nerobergbahn?",
                "a": "Este una dintre puținele funiculare cu acționare pe bază de balast de apă încă în funcțiune."
            },
            {
                "q": "Când a devenit Wiesbaden capitala landului Hessa?",
                "a": "Wiesbaden a fost desemnat capitală de land în 1945, după Al Doilea Război Mondial."
            }
        ],
        "en": [
            {
                "q": "How many thermal springs are in Wiesbaden?",
                "a": "There are 26 thermal springs, of which the Kochbrunnen is the most famous."
            },
            {
                "q": "What is the Kurhaus Wiesbaden?",
                "a": "A magnificent historic building that serves as a social house and home to the casino."
            },
            {
                "q": "What is special about the Nerobergbahn?",
                "a": "It is one of the few remaining water-ballast driven funiculars in operation."
            },
            {
                "q": "When did Wiesbaden become the capital of Hesse?",
                "a": "Wiesbaden was designated the state capital in 1945 after World War II."
            }
        ]
    },
  },
  {
    id: "city-kassel-extra",
    type: "city",
    parent: "DE-HE",
    coords: [9.4797, 51.3127],
    name: { de: "Kassel", hu: "Kassel", ro: "Kassel", en: "Kassel" },
    description: {
      de: "Kassel ist eine Stadt in Nordhessen, bekannt für die documenta und den Bergpark Wilhelmshöhe.",
      hu: "Kassel észak-hesseni város, a documenta kortárs művészeti kiállításáról és a Wilhelmshöhe parkról ismert.",
      ro: "Kassel este un oraș din nordul Hessei, cunoscut pentru documenta și parcul Wilhelmshöhe.",
      en: "Kassel is a city in northern Hesse, known for the documenta art exhibition and Wilhelmshöhe park.",
    },
    facts: {
      de: ["Heimat der documenta, einer der bedeutendsten Kunstausstellungen weltweit.", "Der Bergpark Wilhelmshöhe ist UNESCO-Weltkulturerbe.", "Wirkungsort der Gebrüder Grimm."],
      hu: ["A documenta otthona, a világ egyik legjelentősebb kortárs művészeti kiállításának.", "A Wilhelmshöhe hegyi park UNESCO világörökség.", "A Grimm testvérek munkásságának helyszíne."],
      ro: ["Gazda documenta, una dintre cele mai importante expoziții de artă din lume.", "Parcul Wilhelmshöhe este sit UNESCO.", "Locul de activitate al fraților Grimm."],
      en: ["Home to documenta, one of the world's most significant contemporary art exhibitions.", "Wilhelmshöhe hill park is a UNESCO World Heritage site.", "Workplace of the Brothers Grimm."],
    },
    descriptionAdvanced: {
      de: "Kassel ist das kulturelle und wirtschaftliche Zentrum Nordhessens und weltweit bekannt als Heimat der Documenta, der bedeutendsten Ausstellung für zeitgenössische Kunst. Ein architektonisches Juwel von Weltrang ist der Bergpark Wilhelmshöhe mit dem monumentalen Herkules-Denkmal und den künstlichen Wasserspielen, der seit 2013 zum UNESCO-Weltkulturerbe gehört. Die Stadt blickt zudem auf eine reiche Literaturtradition zurück, da die Brüder Grimm hier viele Jahre lebten und ihre berühmten Märchen sammelten. Kassel verbindet moderne Industriegeschichte, wie den Lokomotivbau, mit herausragenden Parkanlagen und Museen, was es zu einem vielseitigen Ziel für Bildungs- und Kulturreisen macht. Geschichte K7 – Kunstgeschichte und barocke Gartenkunst.",
      hu: "Kassel város Németország Hessen nevű tartományában. A(z) Kassel egy jelentős turisztikai célpont, amely Németország gazdag történelmét és kultúráját mutatja be. Számos látogatót vonz évről évre. A környék lenyűgöző atmoszférája és az itt található különleges értékek minden utazó számára életre szóló élményt kínálnak.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Weltberühmter Standort der Weltkunstausstellung 'documenta'.", "Der Bergpark Wilhelmshöhe ist der größte Bergpark in Europa.", "Wurde im Jahr 2013 zum UNESCO-Weltkulturerbe ernannt.", "Heimat der Brüder Grimm, die hier ihre Märchensammlung begannen.", "Das Herkules-Denkmal ist das weithin sichtbare Wahrzeichen der Stadt.", "Wichtiger Standort der Automobilzuliefer- und Schienenfahrzeugindustrie."],
      hu: [
        "A(z) Kassel területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Kassel tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Was ist das Wahrzeichen von Kassel?",
                "a": "Das Herkules-Monument im Bergpark Wilhelmshöhe."
            },
            {
                "q": "Wie oft findet die documenta statt?",
                "a": "Die Weltkunstausstellung findet alle fünf Jahre in Kassel statt."
            },
            {
                "q": "Was ist die Löwenburg?",
                "a": "Eine künstlich errichtete Burgruine im Bergpark Wilhelmshöhe, erbaut um 1800."
            },
            {
                "q": "Welche berühmten Sammler lebten in Kassel?",
                "a": "Die Brüder Grimm lebten und arbeiteten lange Zeit in der Stadt."
            }
        ],
        "hu": [
            {
                "q": "Mi Kassel jelképe?",
                "a": "A Herkules-emlékmű a Wilhelmshöhe hegyi parkban."
            },
            {
                "q": "Milyen gyakran rendezik meg a documentát?",
                "a": "A világművészeti kiállítást ötévente rendezik meg Kasselben."
            },
            {
                "q": "Mi az a Löwenburg?",
                "a": "Egy mesterségesen épített várrom a Wilhelmshöhe hegyi parkban, 1800 körül épült."
            },
            {
                "q": "Mely híres gyűjtők éltek Kasselben?",
                "a": "A Grimm testvérek hosszú ideig éltek és dolgoztak a városban."
            }
        ],
        "ro": [
            {
                "q": "Care este simbolul orașului Kassel?",
                "a": "Monumentul Hercule din parcul Wilhelmshöhe."
            },
            {
                "q": "Cât de des are loc documenta?",
                "a": "Expoziția mondială de artă are loc la fiecare cinci ani în Kassel."
            },
            {
                "q": "Ce este Löwenburg?",
                "a": "O ruină de castel construită artificial în parcul Wilhelmshöhe, ridicată în jurul anului 1800."
            },
            {
                "q": "Ce colecționari celebri au trăit în Kassel?",
                "a": "Frații Grimm au trăit și au lucrat mult timp în oraș."
            }
        ],
        "en": [
            {
                "q": "What is the landmark of Kassel?",
                "a": "The Hercules monument in Wilhelmshöhe mountain park."
            },
            {
                "q": "How often does documenta take place?",
                "a": "The world art exhibition takes place every five years in Kassel."
            },
            {
                "q": "What is the Löwenburg?",
                "a": "An artificially constructed castle ruin in Wilhelmshöhe mountain park, built around 1800."
            },
            {
                "q": "Which famous collectors lived in Kassel?",
                "a": "The Brothers Grimm lived and worked in the city for a long time."
            }
        ]
    },
  },
  {
    id: "city-marburg-extra",
    type: "city",
    parent: "DE-HE",
    coords: [8.7667, 50.8021],
    name: { de: "Marburg", hu: "Marburg", ro: "Marburg", en: "Marburg" },
    description: {
      de: "Marburg an der Lahn ist eine mittelalterliche Universitätsstadt mit prächtiger Altstadt.",
      hu: "Marburg an der Lahn egy középkori egyetemváros pompás óvárossal.",
      ro: "Marburg an der Lahn este un oraș universitar medieval cu un centru istoric superb.",
      en: "Marburg an der Lahn is a medieval university town with a magnificent old town.",
    },
    facts: {
      de: ["Heimat der ältesten protestantischen Universität Deutschlands (1527).", "Das Schloss Marburg überblickt die gesamte Stadt.", "Auf dem Jakobsweg gelegen."],
      hu: ["Németország legrégebbi protestáns egyetemének otthona (1527).", "A Marburgi kastély az egész városra néz.", "A Jakab-út zarándokúton fekszik."],
      ro: ["Gazda celei mai vechi universități protestante din Germania (1527).", "Castelul Marburg domină întregul oraș.", "Situat pe Drumul Sfântului Iacob."],
      en: ["Home to Germany's oldest Protestant university (1527).", "Marburg Castle overlooks the entire city.", "Located along the pilgrimage route Jakobsweg."],
    },
    descriptionAdvanced: {
      de: "Marburg an der Lahn ist eine klassische deutsche Universitätsstadt mit einer der ältesten Hochschulen der Welt, der 1527 gegründeten Philipps-Universität. Die Stadt ist berühmt für ihre malerische 'Oberstadt', eine mittelalterliche Altstadt mit engen Gassen und zahlreichen Fachwerkhäusern, die sich terrassenartig den Schlossberg hinaufzieht. Über allem thront das Marburger Landgrafenschloss, Schauplatz des berühmten Marburger Religionsgesprächs zwischen Luther und Zwingli. Marburg war zudem ein wichtiger Wirkungsort der Romantiker und der Brüder Grimm. Die hohe Studentendichte verleiht der Stadt eine lebendige, intellektuelle Atmosphäre, während die Elisabethkirche als eine der frühesten rein gotischen Hallenkirchen Deutschlands gilt. Geschichte K7 – Universitäten und Reformation in Deutschland.",
      hu: "A(z) Marburg egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Marburg ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Heimat der ersten protestantisch gegründeten Universität der Welt (1527).", "Die Elisabethkirche beherbergt das Grabmal der Heiligen Elisabeth.", "Das Landgrafenschloss liegt markant 100 Meter über der Lahn.", "In der Altstadt gibt es aufgrund der Hanglage hunderte von Treppenstufen.", "Wirkungsort von Jacob und Wilhelm Grimm während ihres Studiums.", "Marburg blieb von Zerstörungen im Zweiten Weltkrieg weitgehend verschont."],
      hu: [
        "A(z) Marburg területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Marburg tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Was ist das markanteste Gebäude in Marburg?",
                "a": "Das Landgrafenschloss, das hoch über der Altstadt thront."
            },
            {
                "q": "Welche berühmte Persönlichkeit studierte in Marburg?",
                "a": "Die Brüder Grimm studierten an der Universität Marburg Jura."
            },
            {
                "q": "Warum gibt es in Marburg so viele Treppen?",
                "a": "Da die Stadt an einem steilen Hang gebaut ist, verbinden zahlreiche Treppen die Oberstadt mit der Unterstadt."
            },
            {
                "q": "Wer ist die Schutzpatronin der Stadt?",
                "a": "Die Heilige Elisabeth von Thüringen, der die Elisabethkirche gewidmet ist."
            }
        ],
        "hu": [
            {
                "q": "Mi a legjelentősebb épület Marburgban?",
                "a": "A Landgrafenschloss, amely magasan az óváros felett tornyosul."
            },
            {
                "q": "Melyik híres személyiség tanult Marburgban?",
                "a": "A Grimm testvérek jogot tanultak a Marburgi Egyetemen."
            },
            {
                "q": "Miért van annyi lépcső Marburgban?",
                "a": "Mivel a város meredek lejtőre épült, számos lépcső köti össze a felsővárost az alsóvárossal."
            },
            {
                "q": "Ki a város védőszentje?",
                "a": "Türingiai Szent Erzsébet, akinek az Erzsébet-templomot szentelték."
            }
        ],
        "ro": [
            {
                "q": "Care este cea mai proeminentă clădire din Marburg?",
                "a": "Castelul Landgrafen, care domină orașul vechi de la înălțime."
            },
            {
                "q": "Ce personalitate celebră a studiat în Marburg?",
                "a": "Frații Grimm au studiat dreptul la Universitatea din Marburg."
            },
            {
                "q": "De ce sunt atât de multe scări în Marburg?",
                "a": "Deoarece orașul este construit pe o pantă abruptă, numeroase scări leagă orașul de sus de orașul de jos."
            },
            {
                "q": "Cine este protectoarea orașului?",
                "a": "Sfânta Elisabeta a Turingiei, căreia îi este dedicată Biserica Sfânta Elisabeta."
            }
        ],
        "en": [
            {
                "q": "What is the most prominent building in Marburg?",
                "a": "The Landgrave's Castle, which towers high above the old town."
            },
            {
                "q": "Which famous person studied in Marburg?",
                "a": "The Brothers Grimm studied law at the University of Marburg."
            },
            {
                "q": "Why are there so many stairs in Marburg?",
                "a": "Since the city is built on a steep slope, numerous stairs connect the upper town with the lower town."
            },
            {
                "q": "Who is the patron saint of the city?",
                "a": "Saint Elizabeth of Thuringia, to whom St. Elizabeth's Church is dedicated."
            }
        ]
    },
  },
  {
    id: "mnt-taunus-extra",
    type: "mountain",
    parent: "DE-HE",
    coords: [8.4500, 50.2333],
    name: { de: "Taunus", hu: "Taunus", ro: "Taunus", en: "Taunus" },
    description: {
      de: "Der Taunus ist ein Mittelgebirge in Hessen nördlich von Frankfurt mit dem Großen Feldberg als höchstem Gipfel.",
      hu: "A Taunus egy középhegység Hessenben, Frankfurttól északra, legmagasabb csúcsa a Großer Feldberg.",
      ro: "Taunus este un lanț muntos din Hessa, la nord de Frankfurt, cu vârful Großer Feldberg ca punct culminant.",
      en: "The Taunus is a low mountain range in Hesse north of Frankfurt, with the Großer Feldberg as its highest peak.",
    },
    facts: {
      de: ["Der Große Feldberg ist mit 879 m der höchste Gipfel.", "Beliebtes Naherholungsgebiet für Frankfurt.", "Heimat keltischer Ringwälle und römischer Limesanlagen."],
      hu: ["A Großer Feldberg 879 m-rel a legmagasabb csúcs.", "Frankfurt kedvelt kirándulóhelye.", "Kelta gyűrűsáncok és római limes maradványainak otthona."],
      ro: ["Großer Feldberg cu 879 m este vârful cel mai înalt.", "Zonă de recreere preferată pentru Frankfurt.", "Gazda cetăților inelare celtice și ale Limesului roman."],
      en: ["Großer Feldberg at 879 m is the highest peak.", "Popular recreation area for Frankfurt.", "Home to Celtic ring forts and Roman Limes fortifications."],
    },
    descriptionAdvanced: {
      de: "Der Taunus ist ein deutsches Mittelgebirge nördlich von Frankfurt, das durch seine bewaldeten Höhenzüge und mineralreichen Heilquellen geprägt ist. Die höchste Erhebung ist der Große Feldberg mit 881 Metern, der einen weiten Blick über die Rhein-Main-Ebene bis zum Odenwald bietet. Historisch ist der Taunus durch den Limes, die ehemalige Grenzbefestigung des Römischen Reiches, bedeutsam. Die rekonstruierte Römerburg Saalburg vermittelt heute lebendige Einblicke in das Leben an der antiken Grenze. Die Region ist zudem bekannt für ihre mondänen Kurorte wie Bad Homburg und Kronberg, die seit dem 19. Jahrhundert die Aristokratie und das Bürgertum anzogen. Geographie K6 – Naturraum Mittelgebirge und historische Grenzen.",
      hu: "A(z) Taunus egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Taunus ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Höchste Erhebung ist der Große Feldberg mit 881 Metern Höhe.", "Teil des Rheinischen Schiefergebirges in Hessen und Rheinland-Pfalz.", "Beherbergt den Limes, der zum UNESCO-Weltkulturerbe zählt.", "Die Saalburg ist das weltweit einzige wiederaufgebaute Römerkastell.", "Bekannt für seine zahlreichen Mineral- und Heilwasserquellen.", "Wichtiger Erholungsraum für die Bewohner des Rhein-Main-Gebiets."],
      hu: [
        "A(z) Taunus területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Taunus tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Wie hoch ist der höchste Berg im Taunus?",
                "a": "Der Große Feldberg ist mit 879 m die höchste Erhebung."
            },
            {
                "q": "Gibt es römische Überreste im Taunus?",
                "a": "Ja, der obergermanisch-raetische Limes verlief durch den Taunus, inklusive des Kastells Saalburg."
            },
            {
                "q": "Was ist das Freilichtmuseum Hessenpark?",
                "a": "Ein Museum im Taunus, das historische Fachwerkhäuser aus ganz Hessen zeigt."
            },
            {
                "q": "Ist der Taunus ein vulkanisches Gebirge?",
                "a": "Nein, der Taunus besteht hauptsächlich aus Schiefer und Quarzit."
            }
        ],
        "hu": [
            {
                "q": "Milyen magas a Taunus legmagasabb hegye?",
                "a": "A Großer Feldberg a legmagasabb pont, 879 méterrel."
            },
            {
                "q": "Vannak római maradványok a Taunusban?",
                "a": "Igen, a felső-germán-raetiai limes áthaladt a Taunuson, beleértve a Saalburg erődöt."
            },
            {
                "q": "Mi a Hessenpark szabadtéri múzeum?",
                "a": "Egy múzeum a Taunusban, amely Hessen egész területéről származó történelmi favázas házakat mutat be."
            },
            {
                "q": "A Taunus vulkáni hegység?",
                "a": "Nem, a Taunus főként palából és kvarcitból áll."
            }
        ],
        "ro": [
            {
                "q": "Cât de înalt este cel mai înalt munte din Taunus?",
                "a": "Großer Feldberg este cel mai înalt punct, având 879 m."
            },
            {
                "q": "Există vestigii romane în Taunus?",
                "a": "Da, Limesul Germaniei Superioare-Raetiei trecea prin Taunus, incluzând castrul Saalburg."
            },
            {
                "q": "Ce este muzeul în aer liber Hessenpark?",
                "a": "Un muzeu din Taunus care prezintă case istorice cu cadre de lemn din întreaga Hessă."
            },
            {
                "q": "Este Taunus un masiv vulcanic?",
                "a": "Nu, Taunus este format în principal din șist și cuarțit."
            }
        ],
        "en": [
            {
                "q": "How high is the highest mountain in the Taunus?",
                "a": "The Großer Feldberg is the highest elevation at 879 m."
            },
            {
                "q": "Are there Roman remains in the Taunus?",
                "a": "Yes, the Upper Germanic-Rhaetian Limes ran through the Taunus, including the Saalburg fort."
            },
            {
                "q": "What is the Hessenpark Open Air Museum?",
                "a": "A museum in the Taunus that displays historic half-timbered houses from all over Hesse."
            },
            {
                "q": "Is the Taunus a volcanic mountain range?",
                "a": "No, the Taunus consists mainly of slate and quartzite."
            }
        ]
    },
  },
  {
    id: "river-lahn-extra",
    type: "river",
    parent: "DE-HE",
    coords: [8.6000, 50.5000],
    name: { de: "Lahn", hu: "Lahn", ro: "Lahn", en: "Lahn" },
    description: {
      de: "Die Lahn ist ein rechter Nebenfluss des Rheins, der durch Hessen und Rheinland-Pfalz fließt.",
      hu: "A Lahn a Rajna jobb oldali mellékfolyója, amely Hessenen és Rajna-vidék-Pfalzon folyik át.",
      ro: "Lahn este un afluent drept al Rinului, care curge prin Hessa și Renania-Palatinat.",
      en: "The Lahn is a right tributary of the Rhine flowing through Hesse and Rhineland-Palatinate.",
    },
    facts: {
      de: ["Etwa 245 km lang.", "Beliebt für Kanuwandern und Radwege.", "Fließt durch Marburg, Gießen, Limburg und Lahnstein."],
      hu: ["Körülbelül 245 km hosszú.", "Kedvelt kenu-túrázáshoz és kerékpározáshoz.", "Marburg, Gießen, Limburg és Lahnstein érintésével folyik."],
      ro: ["Aproximativ 245 km lungime.", "Popular pentru caiac și cicloturism.", "Curge prin Marburg, Gießen, Limburg și Lahnstein."],
      en: ["Approximately 245 km long.", "Popular for canoeing and cycling.", "Flows through Marburg, Gießen, Limburg, and Lahnstein."],
    },
    descriptionAdvanced: {
      de: "Die Lahn ist einer der schönsten und naturbelassensten Nebenflüsse des Rheins und fließt auf 245 Kilometern durch Hessen und Rheinland-Pfalz. Sie entspringt im Rothaargebirge und schlängelt sich durch ein enges, waldreiches Tal, vorbei an historischen Städten wie Marburg, Gießen, Wetzlar und Limburg. Die Lahn ist ein beliebtes Ziel für Kanuwanderer, da sie auf weiten Strecken ruhig fließt und viele Schleusen besitzt. Historisch war das Lahntal ein wichtiger Bergbaustandort für Eisenerz. Heute steht der sanfte Tourismus im Vordergrund, wobei der Lahnradweg und zahlreiche Schlösser und Burgen am Ufer die Region zu einem Highlight für Aktivurlauber machen. Geographie K6 – Flusslandschaften und nachhaltiger Tourismus.",
      hu: "A(z) Lahn egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Lahn ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Gesamtlänge von 245 km mit Mündung in den Rhein bei Lahnstein.", "Gilt als einer der beliebtesten Flüsse Deutschlands für Kanutouren.", "Entspringt aus der Lahnquelle im Rothaargebirge auf ca. 600 m Höhe.", "Passiert das imposante Weilburger Schloss und den Limburger Dom.", "Der Lahnradweg gehört zu den Top-Fernradwegen in Deutschland.", "Historisch bedeutend für den Transport von Eisenerz aus dem Lahntal."],
      hu: [
        "A(z) Lahn területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Lahn tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Wo entspringt die Lahn?",
                "a": "Die Lahn entspringt im Rothaargebirge in Nordrhein-Westfalen."
            },
            {
                "q": "In welchen Fluss mündet die Lahn?",
                "a": "Die Lahn mündet bei Lahnstein in den Rhein."
            },
            {
                "q": "Ist die Lahn schiffbar?",
                "a": "Ja, im unteren Verlauf ist sie für kleinere Schiffe und Sportboote schiffbar."
            },
            {
                "q": "Welche bekannten Städte liegen an der Lahn?",
                "a": "Marburg, Gießen, Wetzlar, Weilburg und Limburg."
            }
        ],
        "hu": [
            {
                "q": "Hol ered a Lahn?",
                "a": "A Lahn az észak-rajna-vesztfáliai Rothaargebirge-ben ered."
            },
            {
                "q": "Melyik folyóba torkollik a Lahn?",
                "a": "A Lahn Lahnsteinnél torkollik a Rajnába."
            },
            {
                "q": "Hajózható a Lahn?",
                "a": "Igen, az alsó szakaszon kisebb hajók és sportcsónakok számára hajózható."
            },
            {
                "q": "Mely ismert városok fekszenek a Lahn mentén?",
                "a": "Marburg, Gießen, Wetzlar, Weilburg és Limburg."
            }
        ],
        "ro": [
            {
                "q": "Unde izvorăște Lahn?",
                "a": "Lahn izvorăște în munții Rothaargebirge din Renania de Nord-Westfalia."
            },
            {
                "q": "În ce râu se varsă Lahn?",
                "a": "Lahn se varsă în Rin la Lahnstein."
            },
            {
                "q": "Este Lahn navigabil?",
                "a": "Da, pe cursul inferior este navigabil pentru nave mici și ambarcațiuni sportive."
            },
            {
                "q": "Ce orașe cunoscute sunt situate pe Lahn?",
                "a": "Marburg, Gießen, Wetzlar, Weilburg și Limburg."
            }
        ],
        "en": [
            {
                "q": "Where does the Lahn originate?",
                "a": "The Lahn originates in the Rothaar Mountains in North Rhine-Westphalia."
            },
            {
                "q": "Into which river does the Lahn flow?",
                "a": "The Lahn flows into the Rhine at Lahnstein."
            },
            {
                "q": "Is the Lahn navigable?",
                "a": "Yes, in its lower reaches it is navigable for small vessels and pleasure boats."
            },
            {
                "q": "Which well-known cities are located on the Lahn?",
                "a": "Marburg, Gießen, Wetzlar, Weilburg, and Limburg."
            }
        ]
    },
  },
  {
    id: "forest-kellerwald-extra",
    type: "forest",
    parent: "DE-HE",
    coords: [9.0000, 51.1167],
    name: { de: "Kellerwald-Edersee", hu: "Kellerwald-Edersee", ro: "Kellerwald-Edersee", en: "Kellerwald-Edersee" },
    description: {
      de: "Der Nationalpark Kellerwald-Edersee ist eines der wenigen verbliebenen Buchenwaldgebiete in Mitteleuropa.",
      hu: "A Kellerwald-Edersee Nemzeti Park Közép-Európa egyik utolsó bükköserdő területe.",
      ro: "Parcul Național Kellerwald-Edersee este una dintre puținele zone de pădure de fag rămase în Europa Centrală.",
      en: "Kellerwald-Edersee National Park is one of the few remaining beech forest areas in Central Europe.",
    },
    facts: {
      de: ["Teil des UNESCO-Weltnaturerbes 'Alte Buchenwälder Europas'.", "Der Edersee ist einer der größten Stauseen Deutschlands.", "Heimat von Wildkatzen und seltenen Vogelarten."],
      hu: ["Az UNESCO 'Európa őserdei' természeti világörökség része.", "Az Edersee Németország egyik legnagyobb mesterséges tava.", "Vadmacskák és ritka madárfajok otthona."],
      ro: ["Parte a Patrimoniului Natural Mondial UNESCO 'Pădurile Antice de Fag din Europa'.", "Edersee este unul dintre cele mai mari lacuri de acumulare din Germania.", "Gazda pisicilor sălbatice și speciilor rare de păsări."],
      en: ["Part of the UNESCO World Natural Heritage 'Ancient Beech Forests of Europe'.", "The Edersee is one of Germany's largest reservoirs.", "Home to wildcats and rare bird species."],
    },
    descriptionAdvanced: {
      de: "Der Kellerwald im Norden Hessens beherbergt den Nationalpark Kellerwald-Edersee, der für seine uralten, urigen Buchenwälder berühmt ist. Seit 2011 gehören Teile des Nationalparks zum UNESCO-Weltnaturerbe 'Alte Buchenwälder'. Auf rund 6.000 Hektar darf sich die Natur ohne menschliche Eingriffe entwickeln, was zu einer außergewöhnlichen Artenvielfalt bei Pilzen, Käfern und Pflanzen führt. Die hügelige Landschaft mit ihren steilen Hängen zum Edersee bietet spektakuläre Ausblicke und erinnert an ursprüngliche Wildnis. Der Kellerwald ist zudem die Heimat seltener Tierarten wie Schwarzstorch und Rotwild und ein Zentrum für Umweltbildung in der Region. Biologie K6 – Ökosystem Buchenwald und UNESCO-Weltnaturerbe.",
      hu: "A(z) Kellerwald-Edersee egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Kellerwald-Edersee ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Beherbergt einen der letzten großen Buchenurwälder Mitteleuropas.", "Nationalpark-Kernzone ist Teil des UNESCO-Weltnaturerbes.", "Umfasst eine Gesamtfläche von ca. 6.000 Hektar reinen Waldes.", "Heimat für über 800 verschiedene Farn- und Blütenpflanzenarten.", "Höchste Erhebung im Nationalpark ist der Traddelkopf (626 m).", "Einer der wenigen Orte in Deutschland mit Vorkommen der Wildkatze."],
      hu: [
        "A(z) Kellerwald-Edersee területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Kellerwald-Edersee tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Was schützt der Nationalpark Kellerwald-Edersee?",
                "a": "Vor allem die alten, großflächigen Buchenwälder."
            },
            {
                "q": "Kann man im Kellerwald wandern?",
                "a": "Ja, es gibt zahlreiche Wanderwege, darunter den bekannten Kellerwaldsteig."
            },
            {
                "q": "Gibt es dort Wildtiere?",
                "a": "Ja, unter anderem leben dort Rotwild, Wildschweine und sogar Wildkatzen."
            },
            {
                "q": "Ist der Park das ganze Jahr über zugänglich?",
                "a": "Ja, der Nationalpark ist jederzeit für Besucher offen."
            }
        ],
        "hu": [
            {
                "q": "Mit véd a Kellerwald-Edersee Nemzeti Park?",
                "a": "Elsősorban a régi, nagy kiterjedésű bükkerdőket."
            },
            {
                "q": "Lehet túrázni a Kellerwaldban?",
                "a": "Igen, számos túraútvonal van, köztük az ismert Kellerwaldsteig."
            },
            {
                "q": "Vannak ott vadon élő állatok?",
                "a": "Igen, többek között gímszarvasok, vaddisznók és még vadmacskák is élnek ott."
            },
            {
                "q": "A park egész évben látogatható?",
                "a": "Igen, a nemzeti park bármikor nyitva áll a látogatók előtt."
            }
        ],
        "ro": [
            {
                "q": "Ce protejează Parcul Național Kellerwald-Edersee?",
                "a": "În special pădurile de fag vechi și întinse."
            },
            {
                "q": "Se poate face drumeție în Kellerwald?",
                "a": "Da, există numeroase trasee de drumeție, inclusiv cunoscutul Kellerwaldsteig."
            },
            {
                "q": "Există animale sălbatice acolo?",
                "a": "Da, printre altele trăiesc acolo cerbi carpatini, porci mistreți și chiar pisici sălbatice."
            },
            {
                "q": "Parcul este accesibil tot timpul anului?",
                "a": "Da, parcul național este deschis vizitatorilor în orice moment."
            }
        ],
        "en": [
            {
                "q": "What does the Kellerwald-Edersee National Park protect?",
                "a": "Primarily the old, extensive beech forests."
            },
            {
                "q": "Can you go hiking in the Kellerwald?",
                "a": "Yes, there are numerous hiking trails, including the well-known Kellerwaldsteig."
            },
            {
                "q": "Are there wild animals there?",
                "a": "Yes, among others, red deer, wild boar, and even wildcats live there."
            },
            {
                "q": "Is the park accessible year-round?",
                "a": "Yes, the national park is open to visitors at all times."
            }
        ]
    },
  },
  {
    id: "lake-edersee-extra",
    type: "lake",
    parent: "DE-HE",
    coords: [9.0167, 51.1833],
    name: { de: "Edersee", hu: "Edersee", ro: "Lacul Eder", en: "Edersee" },
    description: {
      de: "Der Edersee ist ein großer Stausee in Nordhessen, umgeben von Wäldern und ideal für Wassersport.",
      hu: "Az Edersee egy nagy tározótó Észak-Hessenben, erdőktől övezve, vízisportokra ideális.",
      ro: "Edersee este un lac de acumulare mare în nordul Hessei, înconjurat de păduri, ideal pentru sporturi nautice.",
      en: "The Edersee is a large reservoir in northern Hesse, surrounded by forests and ideal for water sports.",
    },
    facts: {
      de: ["Entstand durch den Edertalsperre-Staudamm (1914).", "Fläche von ca. 11,5 km².", "Im Zweiten Weltkrieg durch die Dambusters-Raid beschädigt."],
      hu: ["Az Eder-völgyzáró gát megépítésével jött létre (1914).", "Területe kb. 11,5 km².", "A második világháborúban a Dambusters-raid megrongálta."],
      ro: ["A apărut prin barajul văii Eder (1914).", "Suprafață de aproximativ 11,5 km².", "Avariat în Al Doilea Război Mondial de raidul Dambusters."],
      en: ["Created by the Eder Valley dam (1914).", "Surface area of approximately 11.5 km².", "Damaged in World War II by the Dambusters raid."],
    },
    descriptionAdvanced: {
      de: "Der Edersee im Norden Hessens ist einer der größten und landschaftlich reizvollsten Stauseen Deutschlands. Eingebettet in die Berge des Kellerwalds, erstreckt sich das Gewässer über eine Länge von fast 27 Kilometern. Die gewaltige Edertalsperre wurde zwischen 1908 und 1914 errichtet, um die Weserschifffahrt zu regulieren und Strom zu erzeugen. Weltberühmt wurde die Staumauer im Zweiten Weltkrieg durch ihre Zerstörung bei den 'Dambusters'-Angriffen. Heute ist der See ein Magnet für Wassersportler und Wanderer. Eine Besonderheit bei niedrigem Wasserstand ist das 'Edersee-Atlantis' – Ruinen von Dörfern und Brücken, die einst für den Bau des Sees geflutet wurden. Geographie K7 – Wasserbauwerke und touristische Nutzung von Talsperren.",
      hu: "A(z) Edersee egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Edersee ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Zweitgrößter Stausee in Deutschland gemessen an der Wasserfläche.", "Die Staumauer ist 48 Meter hoch und exakt 400 Meter lang.", "Erbaut in den Jahren 1908 bis 1914 unter Kaiser Wilhelm II.", "Beherbergt versunkene Ruinen ('Atlantis'), die bei Ebbe sichtbar werden.", "Wichtiger Wasserspeicher zur Regulierung der Weser und des Mittellandkanals.", "Schauplatz einer der bekanntesten Bombardierungen des Zweiten Weltkriegs."],
      hu: [
        "A(z) Edersee területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Edersee tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Wie tief ist der Edersee?",
                "a": "An der tiefsten Stelle vor der Staumauer ist er etwa 42 Meter tief."
            },
            {
                "q": "Was ist das 'Edersee-Atlantis'?",
                "a": "Bei sehr niedrigem Wasserstand werden Ruinen versunkener Dörfer sichtbar."
            },
            {
                "q": "Kann man auf dem Edersee Boot fahren?",
                "a": "Ja, Segeln, Elektrobootfahren und Personenschifffahrt sind sehr beliebt."
            },
            {
                "q": "Was ist das Schloss Waldeck?",
                "a": "Eine mittelalterliche Burg auf einem Berg direkt über dem Edersee."
            }
        ],
        "hu": [
            {
                "q": "Milyen mély az Edersee?",
                "a": "A legmélyebb pontján, a gát előtt, körülbelül 42 méter mély."
            },
            {
                "q": "Mi az az 'Edersee-Atlantis'?",
                "a": "Nagyon alacsony vízállásnál láthatóvá válnak az elsüllyedt falvak romjai."
            },
            {
                "q": "Lehet csónakázni az Edersee-n?",
                "a": "Igen, a vitorlázás, az elektromos csónakázás és a személyszállító hajózás nagyon népszerű."
            },
            {
                "q": "Mi a Waldeck kastély?",
                "a": "Egy középkori vár egy hegyen, közvetlenül az Edersee felett."
            }
        ],
        "ro": [
            {
                "q": "Cât de adânc este Edersee?",
                "a": "În cel mai adânc punct, în fața barajului, are o adâncime de aproximativ 42 de metri."
            },
            {
                "q": "Ce este 'Edersee-Atlantis'?",
                "a": "La un nivel foarte scăzut al apei, devin vizibile ruinele satelor scufundate."
            },
            {
                "q": "Se poate merge cu barca pe Edersee?",
                "a": "Da, navigația cu pânze, cu bărci electrice și transportul de pasageri sunt foarte populare."
            },
            {
                "q": "Ce este Castelul Waldeck?",
                "a": "O cetate medievală pe un munte direct deasupra lacului Edersee."
            }
        ],
        "en": [
            {
                "q": "How deep is the Edersee?",
                "a": "At its deepest point in front of the dam wall, it is about 42 meters deep."
            },
            {
                "q": "What is 'Edersee-Atlantis'?",
                "a": "At very low water levels, the ruins of sunken villages become visible."
            },
            {
                "q": "Can you go boating on the Edersee?",
                "a": "Yes, sailing, electric boating, and passenger shipping are very popular."
            },
            {
                "q": "What is Waldeck Castle?",
                "a": "A medieval castle on a hill directly above the Edersee."
            }
        ]
    },
  },
  {
    id: "hist-fulda-extra",
    type: "historical",
    parent: "DE-HE",
    coords: [9.6740, 50.5558],
    name: { de: "Kloster Fulda", hu: "Fuldai kolostor", ro: "Mănăstirea Fulda", en: "Fulda Abbey" },
    description: {
      de: "Das Kloster Fulda wurde 744 gegründet und war eines der wichtigsten Kulturzentren des Mittelalters.",
      hu: "A fuldai kolostort 744-ben alapították, és a középkor egyik legfontosabb kulturális központja volt.",
      ro: "Mănăstirea Fulda a fost fondată în 744 și a fost unul dintre cele mai importante centre culturale medievale.",
      en: "Fulda Abbey was founded in 744 and was one of the most important cultural centers of the Middle Ages.",
    },
    facts: {
      de: ["Gegründet vom Heiligen Bonifatius, dem 'Apostel der Deutschen'.", "Das Grab des Bonifatius befindet sich im Dom zu Fulda.", "Wichtiges Zentrum für Buchmalerei und Gelehrsamkeit im Mittelalter."],
      hu: ["Bonifác, a 'németek apostola' alapította.", "Bonifác sírja a fuldai dómban található.", "Fontos könyvfestészeti és tudományos központ a középkorban."],
      ro: ["Fondată de Sfântul Bonifaciu, 'apostolul germanilor'.", "Mormântul lui Bonifaciu se află în catedrala din Fulda.", "Important centru de iluminare a manuscriselor și erudition în Evul Mediu."],
      en: ["Founded by Saint Boniface, the 'Apostle of the Germans'.", "The tomb of Boniface is located in Fulda Cathedral.", "An important center for manuscript illumination and scholarship in the Middle Ages."],
    },
    descriptionAdvanced: {
      de: "Fulda ist eine Stadt von herausragender religiöser und kunsthistorischer Bedeutung und wird oft als die 'Barockstadt' Deutschlands bezeichnet. Gegründet um das im Jahr 744 errichtete Benediktinerkloster des Heiligen Bonifatius, entwickelte sich Fulda zum geistigen Zentrum des frühen Mittelalters. Der Fuldaer Dom, in dem Bonifatius begraben liegt, ist heute das Wahrzeichen der Stadt und ein Meisterwerk des Barock-Architekten Johann Dientzenhofer. Das Barockviertel mit dem prächtigen Stadtschloss, dem Schlossgarten und der Orangerie bildet ein einzigartiges Ensemble. Fulda ist zudem Sitz eines Bistums und ein wichtiger Knotenpunkt an der ICE-Trasse zwischen Nord und Süd. Geschichte K6 – Klösterliche Kultur und Barockarchitektur.",
      hu: "A(z) Kloster Fulda egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Kloster Fulda ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Gegründet im Jahr 744 durch Sturmius im Auftrag von Bonifatius.", "Der Fuldaer Dom ist die Grablege des 'Apostels der Deutschen'.", "Besitzt eines der besterhaltenen geschlossenen Barockviertel Europas.", "Das Stadtschloss war die Residenz der Fuldaer Fürstäbte.", "Die Michaeliskirche gilt als eine der ältesten Kirchen Deutschlands (9. Jh.).", "Zentrum der katholischen Deutschen Bischofskonferenz."],
      hu: [
        "A(z) Kloster Fulda területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Kloster Fulda tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Was ist das berühmteste Gebäude in Fulda?",
                "a": "Der Fuldaer Dom St. Salvator."
            },
            {
                "q": "Wer war der Heilige Bonifatius?",
                "a": "Ein Missionar, der als 'Apostel der Deutschen' gilt und in Fulda begraben liegt."
            },
            {
                "q": "Was ist das Stadtschloss Fulda?",
                "a": "Die ehemalige Residenz der Fürstäbte und Fürstbischöfe von Fulda."
            },
            {
                "q": "Welchen Baustil findet man oft in Fulda?",
                "a": "Das Barockviertel prägt mit seinen prachtvollen Bauten das Stadtbild."
            }
        ],
        "hu": [
            {
                "q": "Mi Fulda leghíresebb épülete?",
                "a": "A fuldai Szent Szalvátor-székesegyház."
            },
            {
                "q": "Ki volt Szent Bonifác?",
                "a": "Egy misszionárius, akit a 'németek apostolának' tekintenek, és Fuldában van eltemetve."
            },
            {
                "q": "Mi a fuldai Stadtschloss?",
                "a": "A fuldai hercegapátok és hercegpüspökök egykori rezidenciája."
            },
            {
                "q": "Milyen építészeti stílus található meg gyakran Fuldában?",
                "a": "A barokk negyed pompás épületeivel meghatározza a városképet."
            }
        ],
        "ro": [
            {
                "q": "Care este cea mai faimoasă clădire din Fulda?",
                "a": "Catedrala Sf. Salvator din Fulda."
            },
            {
                "q": "Cine a fost Sfântul Bonifaciu?",
                "a": "Un misionar considerat 'Apostolul Germanilor', înmormântat în Fulda."
            },
            {
                "q": "Ce este Castelul Orașului Fulda?",
                "a": "Fosta reședință a prinților-abați și prinților-episcopi de Fulda."
            },
            {
                "q": "Ce stil arhitectural se găsește des în Fulda?",
                "a": "Cartierul baroc definește panorama urbană cu clădirile sale splendide."
            }
        ],
        "en": [
            {
                "q": "What is the most famous building in Fulda?",
                "a": "The Fulda Cathedral of St. Salvator."
            },
            {
                "q": "Who was Saint Boniface?",
                "a": "A missionary considered the 'Apostle of the Germans' who is buried in Fulda."
            },
            {
                "q": "What is the Fulda City Palace?",
                "a": "The former residence of the prince-abbots and prince-bishops of Fulda."
            },
            {
                "q": "What architectural style is frequently found in Fulda?",
                "a": "The Baroque quarter shapes the cityscape with its magnificent buildings."
            }
        ]
    },
  },
  {
    id: "landmark-mathildenhoehe-extra",
    type: "landmark",
    parent: "DE-HE",
    coords: [8.6720, 49.8779],
    name: { de: "Mathildenhöhe Darmstadt", hu: "Mathildenhöhe Darmstadt", ro: "Mathildenhöhe Darmstadt", en: "Mathildenhöhe Darmstadt" },
    description: {
      de: "Die Mathildenhöhe ist ein Jugendstil-Ensemble in Darmstadt und seit 2021 UNESCO-Weltkulturerbe.",
      hu: "A Mathildenhöhe egy szecessziós épületegyüttes Darmstadtban, 2021 óta UNESCO világörökség.",
      ro: "Mathildenhöhe este un ansamblu Art Nouveau din Darmstadt, inclus în lista UNESCO din 2021.",
      en: "Mathildenhöhe is an Art Nouveau ensemble in Darmstadt and a UNESCO World Heritage Site since 2021.",
    },
    facts: {
      de: ["UNESCO-Weltkulturerbe seit 2021.", "Errichtet von der Künstlerkolonie Darmstadt um 1900.", "Das Russische Kapellchen und der Hochzeitsturm sind Wahrzeichen."],
      hu: ["2021 óta UNESCO világörökség.", "A darmstadti Művésztelep alkotta kb. 1900 körül.", "Az orosz kápolna és a Hochzeitsturm a jelképei."],
      ro: ["Patrimoniu Mondial UNESCO din 2021.", "Creat de Colonia de Artiști din Darmstadt în jurul anului 1900.", "Capela Rusă și Turnul Nunții sunt repere emblematice."],
      en: ["UNESCO World Heritage Site since 2021.", "Created by the Darmstadt Artists' Colony around 1900.", "The Russian Chapel and the Wedding Tower are iconic landmarks."],
    },
    descriptionAdvanced: {
      de: "Die Mathildenhöhe in Darmstadt ist ein Gesamtkunstwerk der Moderne und eines der bedeutendsten Zeugnisse des Jugendstils weltweit. Gegründet 1899 von Großherzog Ernst Ludwig als Künstlerkolonie, arbeiteten hier namhafte Künstler wie Joseph Maria Olbrich und Peter Behrens an der Vision einer modernen Lebenswelt. Der Hochzeitsturm mit seinen fünf Zinnen und das Ausstellungsgebäude prägen die markante Silhouette. Seit 2021 gehört das Ensemble zum UNESCO-Weltkulturerbe. Die Mathildenhöhe vereint Architektur, Gartenkunst und Design auf einzigartige Weise und markiert den Übergang vom Historismus zur sachlichen Moderne des 20. Jahrhunderts. Kunstgeschichte K8 – Jugendstil und die Anfänge modernen Designs.",
      hu: "A(z) Mathildenhöhe Darmstadt egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Mathildenhöhe Darmstadt ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Gegründet im Jahr 1899 als Zentrum für moderne Kunst und Handwerk.", "Der 48 Meter hohe Hochzeitsturm ist das Wahrzeichen von Darmstadt.", "UNESCO-Weltkulturerbe seit Juli 2021 aufgrund seiner Einzigartigkeit.", "Beherbergt eine Russische Kapelle, die für den Zaren Nikolaus II. erbaut wurde.", "Die Künstlerhäuser im Viertel wurden individuell von den Bewohnern entworfen.", "Zentrum der vier großen Ausstellungen zwischen 1901 und 1914."],
      hu: [
        "A(z) Mathildenhöhe Darmstadt területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Mathildenhöhe Darmstadt tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Was ist die Mathildenhöhe?",
                "a": "Ein Hügel in Darmstadt, auf dem eine bedeutende Jugendstil-Künstlerkolonie entstand."
            },
            {
                "q": "Was ist der Hochzeitsturm?",
                "a": "Das 48 m hohe Wahrzeichen der Mathildenhöhe mit fünf markanten Bögen."
            },
            {
                "q": "Warum steht dort eine russische Kapelle?",
                "a": "Sie wurde für Zar Nikolaus II. erbaut, der mit einer Darmstädter Prinzessin verheiratet war."
            },
            {
                "q": "Seit wann ist die Mathildenhöhe Weltkulturerbe?",
                "a": "Sie wurde im Jahr 2021 in die UNESCO-Welterbeliste aufgenommen."
            }
        ],
        "hu": [
            {
                "q": "Mi a Mathildenhöhe?",
                "a": "Egy domb Darmstadtban, ahol egy jelentős szecessziós művésztelep jött létre."
            },
            {
                "q": "Mi az a Hochzeitsturm?",
                "a": "A Mathildenhöhe 48 méter magas jelképe öt jellegzetes ívvel."
            },
            {
                "q": "Miért áll ott egy orosz kápolna?",
                "a": "II. Miklós cár számára épült, aki egy darmstadti hercegnőt vett feleségül."
            },
            {
                "q": "Mióta világörökség a Mathildenhöhe?",
                "a": "2021-ben került fel az UNESCO világörökségi listájára."
            }
        ],
        "ro": [
            {
                "q": "Ce este Mathildenhöhe?",
                "a": "Un deal în Darmstadt unde a fost înființată o importantă colonie de artiști Art Nouveau."
            },
            {
                "q": "Ce este Turnul Nunții?",
                "a": "Simbolul de 48 m al Mathildenhöhe, cu cinci arcade distinctive."
            },
            {
                "q": "De ce se află acolo o capelă rusească?",
                "a": "A fost construită pentru țarul Nicolae al II-lea, care a fost căsătorit cu o prințesă de Darmstadt."
            },
            {
                "q": "De când este Mathildenhöhe Patrimoniu Mondial?",
                "a": "A fost inclusă pe lista Patrimoniului Mondial UNESCO în anul 2021."
            }
        ],
        "en": [
            {
                "q": "What is Mathildenhöhe?",
                "a": "A hill in Darmstadt where a significant Art Nouveau artists' colony was established."
            },
            {
                "q": "What is the Wedding Tower?",
                "a": "The 48 m high landmark of Mathildenhöhe with five distinctive arches."
            },
            {
                "q": "Why is there a Russian chapel there?",
                "a": "It was built for Tsar Nicholas II, who was married to a Darmstadt princess."
            },
            {
                "q": "Since when has Mathildenhöhe been a World Heritage Site?",
                "a": "It was added to the UNESCO World Heritage List in 2021."
            }
        ]
    },
  },
  {
    id: "mnt-vogelsberg-extra",
    type: "mountain",
    parent: "DE-HE",
    coords: [9.2500, 50.5167],
    name: { de: "Vogelsberg", hu: "Vogelsberg", ro: "Vogelsberg", en: "Vogelsberg" },
    description: {
      de: "Der Vogelsberg ist das größte zusammenhängende Basaltmassiv Mitteleuropas und ein erloschener Vulkan.",
      hu: "A Vogelsberg Közép-Európa legnagyobb összefüggő bazaltmasszívuma, egy kialudt vulkán.",
      ro: "Vogelsberg este cel mai mare masiv de bazalt continuu din Europa Centrală, un vulcan stins.",
      en: "Vogelsberg is the largest contiguous basalt massif in Central Europe and an extinct volcano.",
    },
    facts: {
      de: ["Erloschener Schildvulkan, ca. 15–18 Millionen Jahre alt.", "Höchster Gipfel ist der Taufstein mit 773 m.", "Naturpark und wichtiges Wasserreservoir für die Region."],
      hu: ["Kialudt pajzsvulkán, kb. 15–18 millió éves.", "Legmagasabb csúcsa a Taufstein 773 m-rel.", "Természeti park és fontos vízrezervátor a régió számára."],
      ro: ["Vulcan scut stins, cu vârsta de aproximativ 15–18 milioane de ani.", "Vârful cel mai înalt este Taufstein cu 773 m.", "Parc natural și rezervor important de apă pentru regiune."],
      en: ["Extinct shield volcano, approximately 15–18 million years old.", "Highest peak is Taufstein at 773 m.", "Nature park and important water reservoir for the region."],
    },
    descriptionAdvanced: {
      de: "Der Vogelsberg in Hessen ist das größte zusammenhängende Vulkanmassiv Mitteleuropas und eine faszinierende Naturregion. Entstanden vor rund 15 bis 17 Millionen Jahren, besteht er aus einer riesigen Basaltscholle, die sich über 2.500 Quadratkilometer erstreckt. Im Gegensatz zu den spitzen Gipfeln der Eifel ist der Vogelsberg ein sanft gewelltes Hochland mit ausgedehnten Wäldern und Hochmooren. Die höchste Erhebung ist der Hoherodskopf (764 m), ein beliebtes Ziel für Wanderer und Wintersportler. Als Naturpark schützt die Region seltene Biotope und ist ein wichtiges Wassereinzugsgebiet für das Rhein-Main-Gebiet. Die markanten Felsformationen aus erstarrter Lava zeugen überall von der feurigen Vergangenheit des Berges. Geographie K6 – Vulkanismus und Formschatz der Mittelgebirge.",
      hu: "A(z) Vogelsberg egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Vogelsberg ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Größtes geschlossenes Basaltmassiv auf dem europäischen Festland.", "Höchster Punkt ist der Taufstein mit 773 Metern Höhe.", "Vulkanische Tätigkeit endete vor etwa 7 Millionen Jahren.", "Zentraler Punkt des Naturparks Vulkanregion Vogelsberg.", "Besitzt eine radiale Flusssystem-Struktur (alle Bäche fließen nach außen).", "Wichtiges Forschungsgebiet für die Geologie des Tertiärs."],
      hu: [
        "A(z) Vogelsberg területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Vogelsberg tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Was ist das Besondere am Vogelsberg?",
                "a": "Er ist das größte geschlossene Basaltmassiv in Europa."
            },
            {
                "q": "Gibt es dort Vulkane?",
                "a": "Der gesamte Vogelsberg ist ein erloschener Vulkan."
            },
            {
                "q": "Welche Freizeitaktivitäten sind beliebt?",
                "a": "Radfahren auf dem Vulkanradweg und Wandern sind sehr beliebt."
            },
            {
                "q": "Wie heißt der höchste Gipfel?",
                "a": "Der Taufstein ist mit 773 Metern die höchste Erhebung."
            }
        ],
        "hu": [
            {
                "q": "Mi a különleges a Vogelsbergben?",
                "a": "Ez Európa legnagyobb összefüggő bazaltmasszívuma."
            },
            {
                "q": "Vannak ott vulkánok?",
                "a": "Az egész Vogelsberg egy kialudt vulkán."
            },
            {
                "q": "Mely szabadidős tevékenységek népszerűek?",
                "a": "A Vulkanradweg-en való kerékpározás és a túrázás nagyon népszerű."
            },
            {
                "q": "Hogy hívják a legmagasabb csúcsot?",
                "a": "A Taufstein a legmagasabb pont, 773 méterrel."
            }
        ],
        "ro": [
            {
                "q": "Ce este special la Vogelsberg?",
                "a": "Este cel mai mare masiv de bazalt continuu din Europa."
            },
            {
                "q": "Există vulcani acolo?",
                "a": "Întregul Vogelsberg este un vulcan stins."
            },
            {
                "q": "Ce activități de agrement sunt populare?",
                "a": "Ciclismul pe traseul Vulkanradweg și drumețiile sunt foarte populare."
            },
            {
                "q": "Cum se numește cel mai înalt vârf?",
                "a": "Taufstein este cel mai înalt punct, având 773 de metri."
            }
        ],
        "en": [
            {
                "q": "What is special about the Vogelsberg?",
                "a": "It is the largest contiguous basalt massif in Europe."
            },
            {
                "q": "Are there volcanoes there?",
                "a": "The entire Vogelsberg is an extinct volcano."
            },
            {
                "q": "Which leisure activities are popular?",
                "a": "Cycling on the Vulkanradweg and hiking are very popular."
            },
            {
                "q": "What is the name of the highest peak?",
                "a": "The Taufstein is the highest elevation at 773 meters."
            }
        ]
    },
  },
  {
    id: "hist-bad-homburg-extra",
    type: "historical",
    parent: "DE-HE",
    coords: [8.6183, 50.2267],
    name: { de: "Schloss Bad Homburg", hu: "Bad Homburg-i kastély", ro: "Castelul Bad Homburg", en: "Bad Homburg Palace" },
    description: {
      de: "Schloss Bad Homburg war Sommerresidenz der preußischen Könige und Deutschen Kaiser.",
      hu: "A Bad Homburg-i kastély a porosz királyok és a német császárok nyári rezidenciája volt.",
      ro: "Castelul Bad Homburg a fost reședința de vară a regilor prusaci și a împăraților germani.",
      en: "Bad Homburg Palace served as the summer residence of Prussian kings and German emperors.",
    },
    facts: {
      de: ["Erbaut im 17. Jahrhundert, mehrfach umgebaut.", "Kaiser Wilhelm II. liebte den Ort besonders.", "Die benachbarte Spielbank Bad Homburg ist eine der ältesten Deutschlands."],
      hu: ["A 17. században épült, többször átalakították.", "II. Vilmos császár különösen kedvelte a helyet.", "A szomszédos Bad Homburgos kaszinó Németország egyik legrégebbike."],
      ro: ["Construit în secolul al XVII-lea, reamenajat de mai multe ori.", "Împăratul Wilhelm al II-lea îndrăgea în mod special acest loc.", "Cazinoul vecin din Bad Homburg este unul dintre cele mai vechi din Germania."],
      en: ["Built in the 17th century, renovated multiple times.", "Emperor Wilhelm II particularly loved this place.", "The nearby Bad Homburg casino is one of Germany's oldest."],
    },
    descriptionAdvanced: {
      de: "Bad Homburg vor der Höhe ist eine traditionsreiche Kurstadt und ehemalige Residenz der Landgrafen von Hessen-Homburg. Berühmt wurde die Stadt im 19. Jahrhundert als 'Kurort der Kaiser und Könige', der Gäste aus ganz Europa anzog. Das Landgrafenschloss mit dem weithin sichtbaren Weißen Turm und der weitläufige Kurpark mit seinen historischen Quellen und Tempeln zeugen von diesem Glanz. Bad Homburg beherbergt zudem das erste Casino der Welt sowie eine der bedeutendsten Spielbanken Deutschlands. Eine kuriose Besonderheit ist die thailändische Sala, ein Geschenk des Königs von Siam. Heute ist die Stadt ein exklusiver Wohnstandort im Frankfurter Speckgürtel und ein Zentrum für Gesundheit und Wellness. Geschichte K7 – Kurkultur und höfische Tradition.",
      hu: "A(z) Schloss Bad Homburg egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Schloss Bad Homburg ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Ehemalige Residenzstadt der Landgrafen von Hessen-Homburg.", "Der Weiße Turm des Schlosses ist 48 Meter hoch und ein Wahrzeichen.", "Besitzt den ersten Golfplatz und die ersten Tennisplätze in Deutschland.", "Der Kurpark wurde von Peter Joseph Lenné entworfen.", "Heimat des 'Homburg'-Hutes, der durch Edward VII. populär wurde.", "Sitz der Zentrale des Gesundheitskonzerns Fresenius."],
      hu: [
        "A(z) Schloss Bad Homburg területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Schloss Bad Homburg tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Was kann man im Schloss Bad Homburg sehen?",
                "a": "Die historischen Wohnräume der Landgrafen und späteren Kaiser."
            },
            {
                "q": "Was ist der Weiße Turm?",
                "a": "Der Bergfried der mittelalterlichen Burg, der als Wahrzeichen des Schlosses erhalten blieb."
            },
            {
                "q": "Wer nutzte das Schloss als Sommerresidenz?",
                "a": "Die preußischen Könige und die deutschen Kaiser, insbesondere Wilhelm II."
            },
            {
                "q": "Gibt es einen Park am Schloss?",
                "a": "Ja, der Schlosspark ist ein weitläufiger englischer Landschaftsgarten."
            }
        ],
        "hu": [
            {
                "q": "Mit lehet látni a Bad Homburg-i kastélyban?",
                "a": "A landgrafok és a későbbi császárok történelmi lakószobáit."
            },
            {
                "q": "Mi a Fehér Torony?",
                "a": "A középkori vár öregtornya, amely a kastély jelképeként maradt meg."
            },
            {
                "q": "Ki használta a kastélyt nyári rezidenciaként?",
                "a": "A porosz királyok és a német császárok, különösen II. Vilmos."
            },
            {
                "q": "Van park a kastélynál?",
                "a": "Igen, a kastélypark egy kiterjedt angol tájképi kert."
            }
        ],
        "ro": [
            {
                "q": "Ce se poate vedea în Castelul Bad Homburg?",
                "a": "Apartamentele istorice ale landgrafilor și ale împăraților de mai târziu."
            },
            {
                "q": "Ce este Turnul Alb?",
                "a": "Turnul principal al cetății medievale, care a fost păstrat ca simbol al castelului."
            },
            {
                "q": "Cine a folosit castelul ca reședință de vară?",
                "a": "Regii prusaci și împărații germani, în special Wilhelm al II-lea."
            },
            {
                "q": "Există un parc la castel?",
                "a": "Da, parcul castelului este o grădină peisagistică englezească vastă."
            }
        ],
        "en": [
            {
                "q": "What can be seen in Bad Homburg Palace?",
                "a": "The historic living quarters of the landgraves and later emperors."
            },
            {
                "q": "What is the White Tower?",
                "a": "The keep of the medieval castle, which was preserved as a landmark of the palace."
            },
            {
                "q": "Who used the palace as a summer residence?",
                "a": "The Prussian kings and German emperors, especially Wilhelm II."
            },
            {
                "q": "Is there a park at the palace?",
                "a": "Yes, the palace park is an extensive English landscape garden."
            }
        ]
    },
  },
  {
    id: "city-giessen-extra",
    type: "city",
    parent: "DE-HE",
    coords: [8.6753, 50.5840],
    name: { de: "Gießen", hu: "Gießen", ro: "Gießen", en: "Gießen" },
    description: {
      de: "Gießen ist eine Universitätsstadt in Mittelhessen an der Lahn mit lebhaftem Studentenleben.",
      hu: "Gießen egy középhesseni egyetemváros a Lahn folyó mentén, élénk diákélettel.",
      ro: "Gießen este un oraș universitar din centrul Hessei, pe râul Lahn, cu o viață studențească animată.",
      en: "Gießen is a university city in central Hesse on the Lahn river with a vibrant student life.",
    },
    facts: {
      de: ["Die Justus-Liebig-Universität ist nach dem Chemiker Justus von Liebig benannt.", "Liebig gilt als Begründer der Agrikulturchemie.", "Bedeutendes medizinisches und naturwissenschaftliches Zentrum."],
      hu: ["A Justus-Liebig Egyetem a kémikus Justus von Liebig nevét viseli.", "Liebig az agrokémia megalapítójának tekinthető.", "Fontos orvostudományi és természettudományi központ."],
      ro: ["Universitatea Justus-Liebig este numită după chimistul Justus von Liebig.", "Liebig este considerat fondatorul chimiei agricole.", "Centru important de medicină și științe naturale."],
      en: ["Justus-Liebig University is named after chemist Justus von Liebig.", "Liebig is considered the founder of agricultural chemistry.", "An important center for medicine and natural sciences."],
    },
    descriptionAdvanced: {
      de: "Gießen ist eine bedeutende Universitätsstadt in Mittelhessen und ein Zentrum von Wissenschaft und Forschung. Die 1607 gegründete Justus-Liebig-Universität prägt das Leben in der Stadt, in der fast jeder zweite Einwohner ein Student ist. Gießen blickt auf eine große Tradition in der Chemie zurück, was durch das Liebig-Museum, die ehemalige Wirkungsstätte des berühmten Chemikers Justus von Liebig, gewürdigt wird. Eine moderne Attraktion ist das Mathematikum, das weltweit erste Mitmach-Museum für Mathematik, das trockene Formeln spielerisch begreifbar macht. Trotz schwerer Zerstörungen im Zweiten Weltkrieg hat die Stadt ihren Charakter als lebendiger Bildungsstandort bewahrt und ist ein wichtiger Verkehrsknotenpunkt in Hessen. Physik K8 – Wissenschaftsgeschichte und moderne Didaktik.",
      hu: "A(z) Gießen egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Gießen ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Höchste Studentendichte aller deutschen Großstädte (ca. 45 %).", "Heimat der Justus-Liebig-Universität (gegründet im Jahr 1607).", "Das Mathematikum zieht jährlich rund 150.000 Besucher an.", "Wirkungsstätte von Wilhelm Conrad Röntgen und Justus von Liebig.", "Besitzt mit dem botanischen Garten einen der ältesten in Deutschland.", "Wichtiger Standort für die Forschung an Bio- und Nanotechnologie."],
      hu: [
        "A(z) Gießen területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Gießen tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Wofür ist Gießen bekannt?",
                "a": "Als bedeutende Universitätsstadt und Forschungsstandort."
            },
            {
                "q": "Was ist das Mathematikum?",
                "a": "Das erste mathematische Mitmach-Museum der Welt."
            },
            {
                "q": "Wer war Justus von Liebig?",
                "a": "Ein berühmter Chemiker, der lange Zeit in Gießen lehrte."
            },
            {
                "q": "Fließt ein Fluss durch Gießen?",
                "a": "Ja, die Stadt liegt an der Lahn."
            }
        ],
        "hu": [
            {
                "q": "Miről ismert Gießen?",
                "a": "Jelentős egyetemvárosként és kutatási helyszínként."
            },
            {
                "q": "Mi a Mathematikum?",
                "a": "A világ első interaktív matematikai múzeuma."
            },
            {
                "q": "Ki volt Justus von Liebig?",
                "a": "Egy híres kémikus, aki hosszú ideig tanított Gießenben."
            },
            {
                "q": "Folyik folyó Gießenen keresztül?",
                "a": "Igen, a város a Lahn mentén fekszik."
            }
        ],
        "ro": [
            {
                "q": "Pentru ce este cunoscut Gießen?",
                "a": "Ca un important oraș universitar și centru de cercetare."
            },
            {
                "q": "Ce este Mathematikum?",
                "a": "Primul muzeu de matematică interactiv din lume."
            },
            {
                "q": "Cine a fost Justus von Liebig?",
                "a": "Un chimist celebru care a predat mult timp în Gießen."
            },
            {
                "q": "Curge un râu prin Gießen?",
                "a": "Da, orașul este situat pe râul Lahn."
            }
        ],
        "en": [
            {
                "q": "What is Gießen known for?",
                "a": "As a significant university city and research location."
            },
            {
                "q": "What is the Mathematikum?",
                "a": "The first interactive mathematics museum in the world."
            },
            {
                "q": "Who was Justus von Liebig?",
                "a": "A famous chemist who taught in Gießen for a long time."
            },
            {
                "q": "Does a river flow through Gießen?",
                "a": "Yes, the city is located on the Lahn."
            }
        ]
    },
  },
  {
    id: "mnt-rhoen-hessen-extra",
    type: "mountain",
    parent: "DE-HE",
    coords: [9.9333, 50.4833],
    name: { de: "Rhön (Hessen)", hu: "Rhön (Hessen)", ro: "Rhön (Hessa)", en: "Rhön (Hesse)" },
    description: {
      de: "Die Rhön ist ein Mittelgebirge im Dreiländereck Bayern-Hessen-Thüringen, bekannt für weite Basaltlandschaften.",
      hu: "A Rhön egy Bajorország-Hessen-Türingia hármas határán fekvő középhegység, széles bazalttájairól ismert.",
      ro: "Rhön este un lanț muntos la granița dintre Bavaria, Hessa și Turingia, cunoscut pentru peisajele de bazalt.",
      en: "The Rhön is a low mountain range at the tripoint of Bavaria, Hesse, and Thuringia, known for its wide basalt landscapes.",
    },
    facts: {
      de: ["Als 'Land der offenen Fernen' bezeichnet.", "UNESCO-Biosphärenreservat seit 1991.", "Wasserkuppe (950 m) ist der höchste Gipfel – auf bayerischer Seite."],
      hu: ["'A nyílt távolságok földjének' hívják.", "1991 óta UNESCO bioszféra-rezervátum.", "A Wasserkuppe (950 m) a legmagasabb csúcs – a bajor oldalon."],
      ro: ["Denumit 'Țara orizonturilor deschise'.", "Rezervație a Biosferei UNESCO din 1991.", "Wasserkuppe (950 m) este cel mai înalt vârf – pe partea bavareză."],
      en: ["Known as the 'Land of Open Distances'.", "UNESCO Biosphere Reserve since 1991.", "Wasserkuppe (950 m) is the highest peak – on the Bavarian side."],
    },
    descriptionAdvanced: {
      de: "Die Rhön, oft als 'Land der offenen Fernen' bezeichnet, ist ein Mittelgebirge im Dreiländereck von Hessen, Bayern und Thüringen. Charakteristisch für die vulkanisch geprägte Landschaft sind die weiten, baumlosen Gipfelplateaus, die durch jahrhundertelange Beweidung entstanden sind. Die Wasserkuppe ist mit 950 Metern der höchste Berg Hessens und gilt als 'Wiege des Segelflugs'. Die gesamte Region ist als UNESCO-Biosphärenreservat anerkannt und schützt wertvolle Lebensräume wie Borstgrasrasen und Hochmoore. In wolkenlosen Nächten bietet die Rhön zudem einen der dunkelsten Himmel Deutschlands, was ihr den Titel 'Sternenpark' eingebracht hat. Geographie K6 – Nachhaltige Regionalentwicklung und Biosphärenreservate.",
      hu: "A(z) Rhön (Hessen) egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Rhön (Hessen) ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["UNESCO-Biosphärenreservat seit 1991 aufgrund ihrer Biodiversität.", "Die Wasserkuppe (950 m) ist der höchste Berg des Bundeslandes Hessen.", "Gilt weltweit als Ursprungsort des Segelflugsports.", "Offiziell zertifizierter Internationaler Sternenpark (geringe Lichtverschmutzung).", "Beherbergt das Schwarze Moor, eines der bedeutendsten Hochmoore Mitteleuropas.", "Vulkanische Entstehung vor ca. 25 Millionen Jahren."],
      hu: [
        "A(z) Rhön (Hessen) területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Rhön (Hessen) tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Was ist die Wasserkuppe?",
                "a": "Der höchste Berg der Rhön und die 'Wiege des Segelflugs'."
            },
            {
                "q": "Welche Tiere sind typisch für die Rhön?",
                "a": "Das Rhönschaf mit seinem charakteristischen schwarzen Kopf."
            },
            {
                "q": "Was bedeutet 'Land der offenen Fernen'?",
                "a": "Es beschreibt die weiten, baumlosen Hochflächen mit Panoramablick."
            },
            {
                "q": "Ist die Rhön ein Biosphärenreservat?",
                "a": "Ja, sie ist ein UNESCO-Biosphärenreservat."
            }
        ],
        "hu": [
            {
                "q": "Mi a Wasserkuppe?",
                "a": "A Rhön legmagasabb hegye és a 'vitorlázórepülés bölcsője'."
            },
            {
                "q": "Mely állatok jellemzőek a Rhönre?",
                "a": "A rhön-juh a jellegzetes fekete fejével."
            },
            {
                "q": "Mit jelent a 'nyílt távolságok földje'?",
                "a": "A tágas, fátlan fennsíkokat írja le, panorámás kilátással."
            },
            {
                "q": "A Rhön bioszféra-rezervátum?",
                "a": "Igen, ez egy UNESCO bioszféra-rezervátum."
            }
        ],
        "ro": [
            {
                "q": "Ce este Wasserkuppe?",
                "a": "Cel mai înalt munte din Rhön și 'leagănul planorismului'."
            },
            {
                "q": "Ce animale sunt tipice pentru Rhön?",
                "a": "Oaia de Rhön cu capul său negru caracteristic."
            },
            {
                "q": "Ce înseamnă 'Țara orizonturilor deschise'?",
                "a": "Descrie podișurile vaste, fără copaci, cu vederi panoramice."
            },
            {
                "q": "Este Rhön o rezervație a biosferei?",
                "a": "Da, este o rezervație a biosferei UNESCO."
            }
        ],
        "en": [
            {
                "q": "What is the Wasserkuppe?",
                "a": "The highest mountain in the Rhön and the 'cradle of gliding'."
            },
            {
                "q": "Which animals are typical for the Rhön?",
                "a": "The Rhön sheep with its characteristic black head."
            },
            {
                "q": "What does 'Land of Open Distances' mean?",
                "a": "It describes the wide, treeless plateaus with panoramic views."
            },
            {
                "q": "Is the Rhön a biosphere reserve?",
                "a": "Yes, it is a UNESCO biosphere reserve."
            }
        ]
    },
  },
  {
    id: "landmark-loreley-rhein-he-extra",
    type: "landmark",
    parent: "DE-HE",
    coords: [8.1333, 50.1333],
    name: { de: "Rheingau", hu: "Rheingau", ro: "Rheingau", en: "Rheingau" },
    description: {
      de: "Der Rheingau ist eine der bekanntesten Weinregionen Deutschlands am Südhang des Taunus.",
      hu: "A Rheingau Németország egyik leghíresebb borvidéke a Taunus déli lejtőin.",
      ro: "Rheingau este una dintre cele mai renumite regiuni viticole din Germania, pe versanții sudici ai Taunusului.",
      en: "The Rheingau is one of Germany's most famous wine regions on the southern slopes of the Taunus.",
    },
    facts: {
      de: ["Bekannt für Riesling-Wein von Weltklasse.", "Schloss Johannisberg ist eines der ältesten Weingüter.", "Das Kloster Eberbach war früher ein bedeutendes Weingut der Zisterzienser."],
      hu: ["Világi szintű Riesling boráról ismert.", "A Johannisberg kastély az egyik legrégebbi borgazdaság.", "Az Eberbach kolostor egykor a ciszterciek jelentős szőlőbirtoka volt."],
      ro: ["Cunoscut pentru vinul Riesling de clasă mondială.", "Castelul Johannisberg este una dintre cele mai vechi ferme viticole.", "Mănăstirea Eberbach a fost odinioară o importantă proprietate cisterciana."],
      en: ["Known for world-class Riesling wine.", "Schloss Johannisberg is one of the oldest wine estates.", "Eberbach Abbey was formerly a significant Cistercian wine estate."],
    },
    descriptionAdvanced: {
      de: "Der Loreley-Felsen bei Sankt Goarshausen ist der Inbegriff der Rheinromantik und einer der sagenumwobensten Orte Deutschlands. Der 132 Meter hohe Schieferfelsen ragt steil an einer der engsten und tiefsten Stellen des Mittelrheins auf, wo die starke Strömung früher vielen Schiffern zum Verhängnis wurde. Die Legende der schönen Nixe Loreley, die mit ihrem Gesang die Seeleute ins Verderben lockt, wurde durch Heinrich Heines Gedicht weltberühmt. Das Loreley-Plateau ist heute Teil des UNESCO-Welterbes Oberes Mittelrheintal und bietet einen spektakulären Panoramablick auf die vorbeiziehenden Schiffe und die umliegenden Burgen. Die Freilichtbühne auf dem Felsen ist zudem ein renommierter Ort für internationale Rock- und Klassikkonzerte. Literatur K7 – Deutsche Romantik und rheinische Mythen.",
      hu: "A(z) Rheingau egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Rheingau ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Markanter Schieferfelsen mit einer Höhe von 132 Metern über dem Rhein.", "Engste Stelle des schiffbaren Rheins (nur ca. 113 Meter breit).", "Teil des UNESCO-Welterbes Oberes Mittelrheintal seit 2002.", "Berühmt durch das Gedicht von Heinrich Heine und die Melodie von Silcher.", "Die Loreley-Statue im Hafenbecken wurde 1983 aufgestellt.", "Beliebter Aussichtspunkt mit modernem Besucherzentrum auf dem Plateau."],
      hu: [
        "A(z) Rheingau területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Rheingau tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Was wird im Rheingau hauptsächlich angebaut?",
                "a": "Vor allem Riesling-Trauben von hoher Qualität."
            },
            {
                "q": "Was ist das Kloster Eberbach?",
                "a": "Eine ehemalige Zisterzienserabtei, bekannt für ihren Weinbau und als Drehort von 'Der Name der Rose'."
            },
            {
                "q": "Was ist das Niederwalddenkmal?",
                "a": "Ein monumentales Denkmal bei Rüdesheim, das an die Reichsgründung 1871 erinnert."
            },
            {
                "q": "Gibt es dort Schlösser?",
                "a": "Ja, z.B. Schloss Johannisberg und Schloss Vollrads."
            }
        ],
        "hu": [
            {
                "q": "Mit termesztenek főként a Rheingau-ban?",
                "a": "Főleg kiváló minőségű rajnai rizling szőlőt."
            },
            {
                "q": "Mi az Eberbach kolostor?",
                "a": "Egy egykori ciszterci apátság, amely borászatáról és 'A rózsa neve' forgatási helyszíneként ismert."
            },
            {
                "q": "Mi a Niederwalddenkmal?",
                "a": "Egy monumentális emlékmű Rüdesheim közelében, amely az 1871-es birodalomalapításra emlékeztet."
            },
            {
                "q": "Vannak ott kastélyok?",
                "a": "Igen, pl. a Johannisberg kastély és a Vollrads kastély."
            }
        ],
        "ro": [
            {
                "q": "Ce se cultivă în principal în Rheingau?",
                "a": "În special struguri Riesling de înaltă calitate."
            },
            {
                "q": "Ce este Mănăstirea Eberbach?",
                "a": "O fostă abație cisterciană, cunoscută pentru viticultură și ca loc de filmare pentru 'Numele trandafirului'."
            },
            {
                "q": "Ce este Niederwalddenkmal?",
                "a": "Un monument monumental lângă Rüdesheim, care comemorează fondarea imperiului în 1871."
            },
            {
                "q": "Există castele acolo?",
                "a": "Da, de ex. Castelul Johannisberg și Castelul Vollrads."
            }
        ],
        "en": [
            {
                "q": "What is primarily grown in the Rheingau?",
                "a": "Primarily high-quality Riesling grapes."
            },
            {
                "q": "What is Eberbach Abbey?",
                "a": "A former Cistercian abbey, known for its winemaking and as a filming location for 'The Name of the Rose'."
            },
            {
                "q": "What is the Niederwald Monument?",
                "a": "A monumental memorial near Rüdesheim commemorating the founding of the empire in 1871."
            },
            {
                "q": "Are there castles there?",
                "a": "Yes, e.g., Schloss Johannisberg and Schloss Vollrads."
            }
        ]
    },
  },
  {
    id: "hist-limburg-dom-extra",
    type: "historical",
    parent: "DE-HE",
    coords: [8.0667, 50.3833],
    name: { de: "Limburger Dom", hu: "Limburgi dóm", ro: "Catedrala din Limburg", en: "Limburg Cathedral" },
    description: {
      de: "Der Limburger Dom ist eine romanisch-gotische Kathedrale aus dem 13. Jahrhundert über der Lahn.",
      hu: "A limburgi dóm egy 13. századi román-gótikus katedrális a Lahn felett.",
      ro: "Catedrala din Limburg este o catedrală romano-gotică din secolul al XIII-lea deasupra râului Lahn.",
      en: "Limburg Cathedral is a Romanesque-Gothic cathedral from the 13th century above the Lahn river.",
    },
    facts: {
      de: ["Gilt als eines der schönsten mittelalterlichen Bauwerke Deutschlands.", "Die sieben Türme sind das Wahrzeichen von Limburg.", "Enthält das Staurothek, eine wertvolle byzantinische Reliquie."],
      hu: ["Németország egyik legszebb középkori épületének tartják.", "A hét torony Limburg jelképe.", "A Staurothek, egy értékes bizánci ereklye található benne."],
      ro: ["Considerată una dintre cele mai frumoase construcții medievale din Germania.", "Cele șapte turnuri sunt simbolul Limburgului.", "Conține Staurothek-ul, o valoroasă relicvă bizantină."],
      en: ["Considered one of Germany's most beautiful medieval buildings.", "The seven towers are the landmark of Limburg.", "Contains the Staurothek, a valuable Byzantine relic."],
    },
    descriptionAdvanced: {
      de: "Der Limburger Dom, auch Georgsdom genannt, ist eines der vollendetsten Bauwerke der späten Romanik und frühen Gotik in Deutschland. Mit seinen sieben Türmen thront er majestätisch auf einem Felsen oberhalb der Lahn und prägt die Silhouette der historischen Altstadt. Erbaut im 13. Jahrhundert, beeindruckt der Dom durch seine farbenfrohe Außenbemalung, die nach alten Befunden rekonstruiert wurde. Im Inneren finden sich bedeutende mittelalterliche Wandmalereien. Die Architektur markiert den spannenden Übergang vom wuchtigen romanischen Stil zur lichten gotischen Bauweise. Als Kathedrale des Bistums Limburg ist der Dom ein spirituelles Zentrum von europäischem Rang und ein Meisterwerk der Sakralbaukunst. Kunstgeschichte K6 – Sakrale Architektur am Übergang von Romanik zu Gotik.",
      hu: "A(z) Limburger Dom egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Limburger Dom ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Besitzt insgesamt sieben Türme, mehr als jede andere Kirche in Deutschland.", "Eingeweiht im Jahr 1235 nach ca. 40 Jahren Bauzeit.", "Erbaut auf einem steilen Kalkfelsen direkt am Ufer der Lahn.", "Wurde im Jahr 1985 umfangreich nach Originalfarben restauriert.", "War auf der Rückseite des 1.000-D-Mark-Scheins der dritten Serie abgebildet.", "Diente im Mittelalter als Stiftskirche St. Georg."],
      hu: [
        "A(z) Limburger Dom területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Limburger Dom tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Wie viele Türme hat der Limburger Dom?",
                "a": "Der Dom hat sieben Türme."
            },
            {
                "q": "Wann wurde der Dom erbaut?",
                "a": "Er wurde im frühen 13. Jahrhundert vollendet."
            },
            {
                "q": "Was ist die Limburger Staurothek?",
                "a": "Eine wertvolle byzantinische Kreuzreliquie aus dem 10. Jahrhundert."
            },
            {
                "q": "Welchen Baustil zeigt der Dom?",
                "a": "Er ist ein Beispiel für den Übergang von der Romanik zur Gotik."
            }
        ],
        "hu": [
            {
                "q": "Hány tornya van a limburgi dómnak?",
                "a": "A dómnak hét tornya van."
            },
            {
                "q": "Mikor épült a dóm?",
                "a": "A 13. század elején készült el."
            },
            {
                "q": "Mi a limburgi Staurothek?",
                "a": "Egy értékes bizánci kereszt-ereklye a 10. századból."
            },
            {
                "q": "Milyen építészeti stílust mutat a dóm?",
                "a": "A romanikából a gótikába való átmenet egyik példája."
            }
        ],
        "ro": [
            {
                "q": "Câte turnuri are Catedrala din Limburg?",
                "a": "Catedrala are șapte turnuri."
            },
            {
                "q": "Când a fost construită catedrala?",
                "a": "A fost finalizată la începutul secolului al XIII-lea."
            },
            {
                "q": "Ce este Staurothek-ul din Limburg?",
                "a": "O valoroasă relicvă a crucii bizantine din secolul al X-lea."
            },
            {
                "q": "Ce stil arhitectural prezintă catedrala?",
                "a": "Este un exemplu de tranziție de la stilul romanic la cel gotic."
            }
        ],
        "en": [
            {
                "q": "How many towers does Limburg Cathedral have?",
                "a": "The cathedral has seven towers."
            },
            {
                "q": "When was the cathedral built?",
                "a": "It was completed in the early 13th century."
            },
            {
                "q": "What is the Limburg Staurothek?",
                "a": "A valuable Byzantine cross relic from the 10th century."
            },
            {
                "q": "What architectural style does the cathedral show?",
                "a": "It is an example of the transition from Romanesque to Gothic."
            }
        ]
    },
  },

  // DE-NI (Niedersachsen) — 15 POIs
  {
    id: "city-wolfsburg-extra",
    type: "city",
    parent: "DE-NI",
    coords: [10.7865, 52.4231],
    name: { de: "Wolfsburg", hu: "Wolfsburg", ro: "Wolfsburg", en: "Wolfsburg" },
    description: {
      de: "Wolfsburg ist Stammsitz des Volkswagen-Konzerns und eine moderne Planstadt in Niedersachsen.",
      hu: "Wolfsburg a Volkswagen-csoport székhelye és egy modern tervezett város Alsó-Szászországban.",
      ro: "Wolfsburg este sediul grupului Volkswagen și un oraș planificat modern din Saxonia Inferioară.",
      en: "Wolfsburg is the headquarters of the Volkswagen Group and a modern planned city in Lower Saxony.",
    },
    facts: {
      de: ["Die Stadt wurde 1938 für VW-Arbeiter gegründet.", "Das Volkswagen-Werk ist das größte Automobilwerk der Welt.", "Die Autostadt ist ein Automobilthemenpark von Weltrang."],
      hu: ["A várost 1938-ban alapították VW-munkások számára.", "A Volkswagen-gyár a világ legnagyobb autógyára.", "Az Autostadt egy világhírű autótematikus park."],
      ro: ["Orașul a fost fondat în 1938 pentru muncitorii VW.", "Uzina Volkswagen este cea mai mare fabrică de automobile din lume.", "Autostadt este un parc tematic auto de renume mondial."],
      en: ["The city was founded in 1938 for VW workers.", "The Volkswagen plant is the world's largest automobile factory.", "The Autostadt is a world-class automotive theme park."],
    },
    descriptionAdvanced: {
      de: "Wolfsburg ist eine der jüngsten Großstädte Deutschlands und untrennbar mit dem Volkswagen-Konzern verbunden. Gegründet im Jahr 1938 für die Mitarbeiter des VW-Werks, hat sich die Stadt zu einem globalen Zentrum der Automobilindustrie entwickelt. Das Werk selbst ist eines der größten zusammenhängenden Fabrikgebäude der Welt. Eine Hauptattraktion ist die 'Autostadt', ein Themen- und Erlebnispark, der die Marken des Konzerns präsentiert und ein Zentrum für moderne Architektur ist. Wolfsburg bietet zudem erstklassige Kultur- und Wissenschaftserlebnisse, wie das futuristische Science-Center phæno von Zaha Hadid oder das Kunstmuseum. Die Stadt ist ein Paradebeispiel für eine geplante Industriestadt der Moderne. Geographie K7 – Die monostrukturierte Industriestadt im Wandel.",
      hu: "A(z) Wolfsburg egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Wolfsburg ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Gegründet am 1. Juli 1938 unter dem Namen 'Stadt des KdF-Wagens'.", "Hauptsitz der Volkswagen AG, dem größten Arbeitgeber der Region.", "Die Autostadt wurde zur EXPO 2000 als Erlebnispark eröffnet.", "Das phæno wurde von der Stararchitektin Zaha Hadid entworfen.", "Das VW-Werk umfasst eine Fläche von über 6 Quadratkilometern.", "Beherbergt den erfolgreichsten Frauenfußball-Verein Deutschlands (VfL Wolfsburg)."],
      hu: [
        "A(z) Wolfsburg területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Wolfsburg tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Warum wurde Wolfsburg gegründet?",
                "a": "Die Stadt wurde 1938 als Wohnort für die Arbeiter des Volkswagenwerks gegründet."
            },
            {
                "q": "Was ist die Autostadt?",
                "a": "Ein Erlebniszentrum und Themenpark von Volkswagen direkt neben dem Werk."
            },
            {
                "q": "Was kann man im Phaeno sehen?",
                "a": "Es ist ein interaktives Science Center mit über 350 Experimentierstationen."
            },
            {
                "q": "Wie heißt das Fußballstadion in Wolfsburg?",
                "a": "Die Volkswagen Arena, Heimat des VfL Wolfsburg."
            }
        ],
        "hu": [
            {
                "q": "Miért alapították Wolfsburgot?",
                "a": "A várost 1938-ban alapították a Volkswagen-gyár munkásainak lakóhelyéül."
            },
            {
                "q": "Mi az az Autostadt?",
                "a": "A Volkswagen élményközpontja és élményparkja közvetlenül a gyár mellett."
            },
            {
                "q": "Mit lehet látni a Phaenóban?",
                "a": "Ez egy interaktív tudományos központ több mint 350 kísérleti állomással."
            },
            {
                "q": "Hogy hívják a wolfsburgi futballstadiont?",
                "a": "A Volkswagen Arena, a VfL Wolfsburg otthona."
            }
        ],
        "ro": [
            {
                "q": "De ce a fost fondat Wolfsburg?",
                "a": "Orașul a fost fondat în 1938 ca locuință pentru muncitorii uzinei Volkswagen."
            },
            {
                "q": "Ce este Autostadt?",
                "a": "Un centru de experiență și parc tematic al Volkswagen, direct lângă uzină."
            },
            {
                "q": "Ce se poate vedea la Phaeno?",
                "a": "Este un centru de știință interactiv cu peste 350 de stații de experimentare."
            },
            {
                "q": "Cum se numește stadionul de fotbal din Wolfsburg?",
                "a": "Volkswagen Arena, sediul VfL Wolfsburg."
            }
        ],
        "en": [
            {
                "q": "Why was Wolfsburg founded?",
                "a": "The city was founded in 1938 as a place of residence for the workers of the Volkswagen plant."
            },
            {
                "q": "What is the Autostadt?",
                "a": "An experience center and theme park by Volkswagen right next to the plant."
            },
            {
                "q": "What can be seen at Phaeno?",
                "a": "It is an interactive science center with over 350 experimental stations."
            },
            {
                "q": "What is the name of the football stadium in Wolfsburg?",
                "a": "The Volkswagen Arena, home of VfL Wolfsburg."
            }
        ]
    },
  },
  {
    id: "city-braunschweig-extra",
    type: "city",
    parent: "DE-NI",
    coords: [10.5268, 52.2689],
    name: { de: "Braunschweig", hu: "Braunschweig", ro: "Braunschweig", en: "Brunswick" },
    description: {
      de: "Braunschweig ist eine Großstadt in Niedersachsen mit reicher Geschichte als ehemalige Residenzstadt.",
      hu: "Braunschweig Alsó-Szászország egyik nagyváros, gazdag történelemmel mint egykori rezidenciaváros.",
      ro: "Braunschweig este un oraș mare din Saxonia Inferioară cu o istorie bogată ca fost oraș rezidențial.",
      en: "Brunswick is a major city in Lower Saxony with a rich history as a former residence city.",
    },
    facts: {
      de: ["Der Burglöwe auf dem Burgplatz ist das Wahrzeichen der Stadt.", "Heimat des weltweit bekannten Forschungszentrums DLR.", "Die Technische Universität Braunschweig ist eine der ältesten in Deutschland."],
      hu: ["A Burgplatz-on álló Burglöwe (oroszlán) a város jelképe.", "A világhírű DLR kutatóközpont otthona.", "A Braunschweigi Műszaki Egyetem Németország legrégebbjei közé tartozik."],
      ro: ["Leul Burglöwe de pe Burgplatz este simbolul orașului.", "Gazda centrului de cercetare DLR de renume mondial.", "Universitatea Tehnică din Braunschweig este una dintre cele mai vechi din Germania."],
      en: ["The Burglöwe (castle lion) on Burgplatz is the city's landmark.", "Home of the world-renowned DLR research center.", "Braunschweig Technical University is one of Germany's oldest."],
    },
    descriptionAdvanced: {
      de: "Braunschweig, die 'Löwenstadt', blickt auf eine über tausendjährige Geschichte zurück und war einst eine mächtige Hansestadt und Residenz der Welfen. Herzog Heinrich der Löwe machte die Stadt im 12. Jahrhundert zu seinem Machtzentrum, wovon der Braunschweiger Löwe auf dem Burgplatz und der Dom St. Blasii zeugen. Heute ist Braunschweig ein führender Standort für Wissenschaft und Forschung in Europa, geprägt durch die Technische Universität (gegründet 1745) und zahlreiche Bundesforschungsinstitute. Die Stadt verbindet historische Traditionen, wie das rekonstruierte Residenzschloss, mit hochmoderner Technologieentwicklung in den Bereichen Verkehr und Luftfahrt. Geschichte K7 – Mittelalterliche Machtzentren und hanseatischer Handel.",
      hu: "A(z) Braunschweig egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Braunschweig ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Einstige Residenz von Heinrich dem Löwen im 12. Jahrhundert.", "Der Braunschweiger Löwe auf dem Burgplatz ist die älteste Freiplastik nördlich der Alpen.", "Wichtigstes Forschungszentrum für Mobilität und Luftfahrt in Niedersachsen.", "Die TU Braunschweig ist die älteste technische Universität Deutschlands.", "Traditionelles Zentrum der deutschen Zuckerindustrie.", "Das Residenzschloss trägt die größte Quadriga Europas auf seinem Dach."],
      hu: [
        "A(z) Braunschweig területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Braunschweig tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Wer war Heinrich der Löwe?",
                "a": "Ein mächtiger Herzog, der Braunschweig im 12. Jahrhundert zu seiner Residenz ausbaute."
            },
            {
                "q": "Was ist das Happy Rizzi House?",
                "a": "Ein extrem buntes und ungewöhnlich geformtes Bürogebäude in der Braunschweiger Ackerhof."
            },
            {
                "q": "Welche Forschungsanstalt hat ihren Sitz in Braunschweig?",
                "a": "Unter anderem die Physikalisch-Technische Bundesanstalt (PTB), die die Zeit in Deutschland vorgibt."
            },
            {
                "q": "Was ist die Burg Dankwarderode?",
                "a": "Die historische Residenz von Heinrich dem Löwen, heute Teil des Herzog Anton Ulrich-Museums."
            }
        ],
        "hu": [
            {
                "q": "Ki volt Oroszlán Henrik?",
                "a": "Egy hatalmas herceg, aki a 12. században Braunschweiget tette rezidenciájává."
            },
            {
                "q": "Mi az a Happy Rizzi House?",
                "a": "Egy rendkívül színes és szokatlan formájú irodaház a braunschweigi Ackerhofban."
            },
            {
                "q": "Melyik kutatóintézet székhelye van Braunschweigben?",
                "a": "Többek között a Physikalisch-Technische Bundesanstalt (PTB), amely Németországban az időt határozza meg."
            },
            {
                "q": "Mi az a Dankwarderode vár?",
                "a": "Oroszlán Henrik történelmi rezidenciája, ma a Herzog Anton Ulrich-Museum része."
            }
        ],
        "ro": [
            {
                "q": "Cine a fost Henric Leul?",
                "a": "Un duce puternic care a transformat Braunschweig în reședința sa în secolul al XII-lea."
            },
            {
                "q": "Ce este Happy Rizzi House?",
                "a": "O clădire de birouri extrem de colorată și cu o formă neobișnuită în Ackerhof din Braunschweig."
            },
            {
                "q": "Ce institut de cercetare își are sediul în Braunschweig?",
                "a": "Printre altele, Institutul Federal de Fizică și Tehnică (PTB), care stabilește ora oficială în Germania."
            },
            {
                "q": "Ce este Castelul Dankwarderode?",
                "a": "Reședința istorică a lui Henric Leul, astăzi parte a Muzeului Herzog Anton Ulrich."
            }
        ],
        "en": [
            {
                "q": "Who was Henry the Lion?",
                "a": "A powerful duke who developed Brunswick into his residence in the 12th century."
            },
            {
                "q": "What is the Happy Rizzi House?",
                "a": "An extremely colorful and unusually shaped office building in Brunswick's Ackerhof."
            },
            {
                "q": "Which research institute is headquartered in Brunswick?",
                "a": "Among others, the National Metrology Institute of Germany (PTB), which determines the time in Germany."
            },
            {
                "q": "What is Dankwarderode Castle?",
                "a": "The historical residence of Henry the Lion, now part of the Herzog Anton Ulrich Museum."
            }
        ]
    },
  },
  {
    id: "mnt-brocken-ni-extra",
    type: "mountain",
    parent: "DE-NI",
    coords: [10.6153, 51.8003],
    name: { de: "Harz (Niedersachsen)", hu: "Harz (Alsó-Szászország)", ro: "Harz (Saxonia Inferioară)", en: "Harz (Lower Saxony)" },
    description: {
      de: "Der Harz erstreckt sich über Niedersachsen und Sachsen-Anhalt und ist das höchste Mittelgebirge Norddeutschlands.",
      hu: "A Harz Alsó-Szászország és Szász-Anhalt területén terül el, Észak-Németország legmagasabb középhegysége.",
      ro: "Harz se întinde pe teritoriul Saxoniei Inferioare și Saxoniei-Anhalt, fiind cel mai înalt lanț muntos din nordul Germaniei.",
      en: "The Harz extends across Lower Saxony and Saxony-Anhalt and is the highest mountain range in northern Germany.",
    },
    facts: {
      de: ["Der Brocken (1141 m) ist der höchste Gipfel.", "Bekannt aus Goethes 'Faust' und der Walpurgisnacht-Legende.", "Die Harzer Schmalspurbahn ist eine historische Dampfzahnradbahn."],
      hu: ["A Brocken (1141 m) a legmagasabb csúcs.", "Goethe 'Faust'-jából és a Walpurgis-éj legendájából ismert.", "A Harz keskenyvágányú vasút egy történelmi gőzfogaskerékút."],
      ro: ["Brocken (1141 m) este vârful cel mai înalt.", "Cunoscut din 'Faust' al lui Goethe și legenda Nopții Valpurgiei.", "Trenul cu cale îngustă Harz este un tren cu abur și cremalieră istoric."],
      en: ["Brocken (1141 m) is the highest peak.", "Known from Goethe's 'Faust' and the Walpurgis Night legend.", "The Harz narrow-gauge railway is a historic steam rack railway."],
    },
    descriptionAdvanced: {
      de: "Der Brocken ist mit 1.141 Metern der höchste Berg des Harzes und Norddeutschlands. Er ist ein Ort voller Mythen und Sagen, bekannt als Treffpunkt der Hexen zur Walpurgisnacht, wie es Goethe im 'Faust' verewigte. Durch seine exponierte Lage herrscht auf dem Gipfel ein extremes Klima, das dem der Alpen oder Islands gleicht. Während der deutschen Teilung war der Brocken militärisches Sperrgebiet und Standort wichtiger Abhörstationen der DDR und der Sowjetunion. Heute ist der Gipfel, der im Nationalpark Harz liegt, wieder ein beliebtes Ziel für Wanderer und die historische Brockenbahn. Die Flora des Berges mit dem Brockengarten beherbergt seltene Eiszeitrelikte, die unter strengem Schutz stehen. Geographie K6 – Hochgebirgsklima und ökologische Bedeutung der Mittelgebirge.",
      hu: "A(z) Harz (Niedersachsen) egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Harz (Niedersachsen) ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Höchster Berg in ganz Norddeutschland mit 1.141 Metern.", "Liegt an der Grenze zwischen Niedersachsen und Sachsen-Anhalt.", "Gipfel war von 1961 bis 1989 militärisches Sperrgebiet (Grenze).", "Wird täglich von dampfbetriebenen Zügen der Brockenbahn angefahren.", "Jährlich verzeichnet der Berg ca. 300 Nebeltage.", "Berühmt als Schauplatz der Walpurgisnacht in Goethes 'Faust'."],
      hu: [
        "A(z) Harz (Niedersachsen) területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Harz (Niedersachsen) tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Wie hoch ist der Brocken?",
                "a": "Er ist 1141 Meter hoch."
            },
            {
                "q": "Was ist das Brockengespenst?",
                "a": "Ein optischer Effekt, bei dem der Schatten eines Beobachters auf Nebel geworfen wird."
            },
            {
                "q": "Wie kommt man auf den Gipfel?",
                "a": "Zu Fuß oder mit der historischen Harzer Schmalspurbahn (Brockenbahn)."
            },
            {
                "q": "War der Brocken während der deutschen Teilung zugänglich?",
                "a": "Nein, er war militärisches Sperrgebiet und Standort von Abhöranlagen."
            }
        ],
        "hu": [
            {
                "q": "Milyen magas a Brocken?",
                "a": "1141 méter magas."
            },
            {
                "q": "Mi az a Brockengespenst?",
                "a": "Egy optikai hatás, amelynél a megfigyelő árnyéka a ködre vetül."
            },
            {
                "q": "Hogyan lehet feljutni a csúcsra?",
                "a": "Gyalog vagy a történelmi Harz keskenyvágányú vasúttal (Brockenbahn)."
            },
            {
                "q": "Látogatható volt a Brocken a német kettéosztottság idején?",
                "a": "Nem, katonai elzárt terület volt, ahol lehallgatóállomások működtek."
            }
        ],
        "ro": [
            {
                "q": "Cât de înalt este Brocken?",
                "a": "Are 1141 de metri înălțime."
            },
            {
                "q": "Ce este Brockengespenst (Spectrul Brocken)?",
                "a": "Un efect optic în care umbra unui observator este proiectată pe ceață."
            },
            {
                "q": "Cum se ajunge pe vârf?",
                "a": "Pe jos sau cu trenul istoric cu cale îngustă Harz (Brockenbahn)."
            },
            {
                "q": "Era Brocken accesibil în timpul divizării Germaniei?",
                "a": "Nu, era zonă militară restricționată și sediu al unor instalații de ascultare."
            }
        ],
        "en": [
            {
                "q": "How high is the Brocken?",
                "a": "It is 1141 meters high."
            },
            {
                "q": "What is the Brocken spectre?",
                "a": "An optical effect where an observer's shadow is cast onto mist or clouds."
            },
            {
                "q": "How do you get to the summit?",
                "a": "On foot or with the historic Harz Narrow Gauge Railway (Brocken Railway)."
            },
            {
                "q": "Was the Brocken accessible during the division of Germany?",
                "a": "No, it was a restricted military area and a site for listening posts."
            }
        ]
    },
  },
  {
    id: "forest-lueneburger-heide-extra",
    type: "forest",
    parent: "DE-NI",
    coords: [10.0833, 53.0500],
    name: { de: "Lüneburger Heide", hu: "Lüneburger Heide", ro: "Lüneburger Heide", en: "Lüneburg Heath" },
    description: {
      de: "Die Lüneburger Heide ist eine weite Heidelandschaft in Niedersachsen mit charakteristischer Moorvegetation.",
      hu: "A Lüneburger Heide egy széles pusztavidék Alsó-Szászországban, jellemző lápnövényzettel.",
      ro: "Lüneburger Heide este o vastă zonă de câmpie joasă în Saxonia Inferioară cu vegetație caracteristică de turbărie.",
      en: "The Lüneburg Heath is a wide heathland in Lower Saxony with characteristic moorland vegetation.",
    },
    facts: {
      de: ["Berühmt für blühende Heidekraut-Flächen im Spätsommer.", "Heimat des Heidschnucken-Schafs, einer alten Landrasse.", "Der Heidepark Soltau ist ein bekannter Freizeitpark."],
      hu: ["Nyár végi virágzó hangafüves területeiről ismert.", "A Heidschnucke juh, egy régi mezei fajta otthona.", "A Heidepark Soltau egy ismert vidámpark."],
      ro: ["Faimoasă pentru câmpurile de iarbă-de-nalbă înflorite la sfârșitul verii.", "Gazda oii Heidschnucke, o rasă veche de țară.", "Heidepark Soltau este un parc de distracții cunoscut."],
      en: ["Famous for blooming heather fields in late summer.", "Home to the Heidschnucke sheep, an old local breed.", "Heidepark Soltau is a well-known amusement park."],
    },
    descriptionAdvanced: {
      de: "Die Lüneburger Heide ist eine einzigartige Kulturlandschaft im Nordosten Niedersachsens, die durch jahrhundertelange Holzentnahme und Beweidung durch Heidschnucken entstanden ist. Im August und September verwandelt sich die Region in ein riesiges lilafarbenes Blütenmeer. Das Herzstück ist das autofreie Naturschutzgebiet um den Wilseder Berg, die höchste Erhebung der norddeutschen Tiefebene. Die Heide ist nicht nur ein Refugium für seltene Pflanzen und Tiere, sondern auch ein wichtiges Zentrum für den sanften Tourismus. Historisch ist die Region durch die Salzgewinnung in Lüneburg geprägt, die der Heide ihren Namen gab. Heute ist sie der älteste Naturpark Deutschlands und ein Vorbild für den Naturschutz. Biologie K6 – Kulturlandschaften und Erhaltung der Biodiversität.",
      hu: "A Lüneburger Heide (lüneburgi puszta) természetvédelmi terület és natúrpark Németországban. Németország első természetvédelmi parkja volt. A(z) Lüneburger Heide egy jelentős turisztikai célpont, amely Németország gazdag történelmét és kultúráját mutatja be. Számos látogatót vonz évről évre. A környék lenyűgöző atmoszférája és az itt található különleges értékek minden utazó számára életre szóló élményt kínálnak.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Ältester Naturpark Deutschlands, gegründet im Jahr 1921.", "Größte zusammenhängende Heidefläche in ganz Mitteleuropa.", "Wird durch rund 9.000 Heidschnucken (Schafe) gepflegt und offen gehalten.", "Der Wilseder Berg ist mit 169 m die höchste Erhebung der Tiefebene.", "Zentrum des regionalen Tourismus mit über 5 Millionen Übernachtungen.", "Der Heide-Honig ist eine überregional bekannte Spezialität."],
      hu: [
        "A(z) Lüneburger Heide területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Lüneburger Heide tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Wann blüht die Lüneburger Heide?",
                "a": "Meist von Anfang August bis Mitte September."
            },
            {
                "q": "Was ist der Wilseder Berg?",
                "a": "Mit 169 m die höchste Erhebung der Lüneburger Heide."
            },
            {
                "q": "Sind Autos in der Heide erlaubt?",
                "a": "In den Naturschutzgebieten wie um Wilsede herrscht Autofahrverbot."
            },
            {
                "q": "Was kann man in der Heide unternehmen?",
                "a": "Wandern, Radfahren und Kutschfahrten sind sehr beliebt."
            }
        ],
        "hu": [
            {
                "q": "Mikor virágzik a Lüneburger Heide?",
                "a": "Általában augusztus elejétől szeptember közepéig."
            },
            {
                "q": "Mi a Wilseder Berg?",
                "a": "169 méterrel a Lüneburger Heide legmagasabb pontja."
            },
            {
                "q": "Szabad autóval közlekedni a pusztán?",
                "a": "A természetvédelmi területeken, mint például Wilsede környékén, autótilalom van érvényben."
            },
            {
                "q": "Mit lehet csinálni a pusztán?",
                "a": "A túrázás, a kerékpározás és a lovaskocsikázás nagyon népszerű."
            }
        ],
        "ro": [
            {
                "q": "Când înflorește Lüneburger Heide?",
                "a": "De obicei de la începutul lui august până la mijlocul lui septembrie."
            },
            {
                "q": "Ce este Wilseder Berg?",
                "a": "Cea mai înaltă cotă din Lüneburger Heide, având 169 m."
            },
            {
                "q": "Sunt permise mașinile în landă?",
                "a": "În zonele protejate, cum ar fi cea din jurul Wilsede, există interdicție pentru mașini."
            },
            {
                "q": "Ce se poate face în landă?",
                "a": "Drumețiile, ciclismul și plimbările cu trăsura sunt foarte populare."
            }
        ],
        "en": [
            {
                "q": "When does the Lüneburg Heath bloom?",
                "a": "Usually from the beginning of August to mid-September."
            },
            {
                "q": "What is the Wilseder Berg?",
                "a": "At 169 m, the highest elevation of the Lüneburg Heath."
            },
            {
                "q": "Are cars allowed in the heath?",
                "a": "In nature reserves like the area around Wilsede, car driving is prohibited."
            },
            {
                "q": "What can you do in the heath?",
                "a": "Hiking, cycling, and horse-drawn carriage rides are very popular."
            }
        ]
    },
  },
  {
    id: "city-osnabrueck-extra",
    type: "city",
    parent: "DE-NI",
    coords: [8.0472, 52.2799],
    name: { de: "Osnabrück", hu: "Osnabrück", ro: "Osnabrück", en: "Osnabrück" },
    description: {
      de: "Osnabrück ist eine Großstadt in Niedersachsen, bekannt als Geburtsort von Erich Maria Remarque und Ort des Westfälischen Friedens.",
      hu: "Osnabrück Alsó-Szászország egyik nagyváros, Erich Maria Remarque szülővárosaként és a vesztfáliai béke helyszíneként ismert.",
      ro: "Osnabrück este un oraș mare din Saxonia Inferioară, cunoscut ca loc de naștere al lui Erich Maria Remarque și loc al Păcii Westfalice.",
      en: "Osnabrück is a major city in Lower Saxony, known as the birthplace of Erich Maria Remarque and a site of the Peace of Westphalia.",
    },
    facts: {
      de: ["Mitunterzeichnungsort des Westfälischen Friedens (1648).", "Geburtsort des Autors Erich Maria Remarque ('Im Westen nichts Neues').", "Heimat eines bedeutenden mittelalterlichen Doms."],
      hu: ["A vesztfáliai béke egyik aláírási helyszíne (1648).", "Erich Maria Remarque ('Nyugaton semmi újság') szülővárosa.", "Egy fontos középkori dóm otthona."],
      ro: ["Unul dintre locurile de semnare a Păcii Westfalice (1648).", "Locul de naștere al autorului Erich Maria Remarque ('Pe frontul de vest, nimic nou').", "Gazda unei importante catedrale medievale."],
      en: ["Co-signing location of the Peace of Westphalia (1648).", "Birthplace of author Erich Maria Remarque ('All Quiet on the Western Front').", "Home to an important medieval cathedral."],
    },
    descriptionAdvanced: {
      de: "Osnabrück ist als 'Friedensstadt' weltbekannt, da hier 1648 zusammen mit Münster der Westfälische Friede unterzeichnet wurde, der den Dreißigjährigen Krieg beendete. Die Stadt im Südwesten Niedersachsens verbindet diese historische Bedeutung mit einer dynamischen Gegenwart. Das historische Rathaus mit dem Friedenssaal ist das Wahrzeichen der Stadt. Osnabrück liegt inmitten des Natur- und Geoparks TERRA.vita und bietet eine hohe Lebensqualität zwischen Urbanität und Natur. Die Universität und zahlreiche innovative Unternehmen im Bereich Logistik und Metallverarbeitung prägen die Wirtschaftskraft. Auch als Geburtsstadt des Schriftstellers Erich Maria Remarque und des Malers Felix Nussbaum setzt Osnabrück wichtige kulturelle Akzente. Geschichte K7 – Der Westfälische Friede und seine Bedeutung für Europa.",
      hu: "A(z) Osnabrück egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Osnabrück ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Ort der Unterzeichnung des Westfälischen Friedens von 1648.", "Einzige deutsche Großstadt, die in einem Naturpark (TERRA.vita) liegt.", "Geburtsstadt des Autors von 'Im Westen nichts Neues', Erich Maria Remarque.", "Besitzt mit dem Felix-Nussbaum-Haus ein bedeutendes Museum von Daniel Libeskind.", "Wichtiger Eisenbahnknotenpunkt zwischen Hamburg und dem Ruhrgebiet.", "Das Osnabrücker Schloss dient heute als Hauptsitz der Universität."],
      hu: [
        "A(z) Osnabrück területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Osnabrück tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Warum nennt man Osnabrück 'Friedensstadt'?",
                "a": "Weil dort 1648 der Westfälische Friede zur Beendigung des Dreißigjährigen Krieges ausgehandelt wurde."
            },
            {
                "q": "Was ist das Felix-Nussbaum-Haus?",
                "a": "Ein Museum, das dem in Osnabrück geborenen jüdischen Maler Felix Nussbaum gewidmet ist."
            },
            {
                "q": "Gibt es einen Dom in Osnabrück?",
                "a": "Ja, der spätromanische Dom St. Peter prägt das Stadtbild."
            },
            {
                "q": "Was ist der Piesberg?",
                "a": "Ein ehemaliger Steinbruch, der heute als Kultur- und Landschaftspark dient."
            }
        ],
        "hu": [
            {
                "q": "Miért hívják Osnabrücköt 'a béke városának'?",
                "a": "Mert 1648-ban ott kötötték meg a vesztfáliai békét, amely véget vetett a harmincéves háborúnak."
            },
            {
                "q": "Mi a Felix-Nussbaum-Haus?",
                "a": "Egy múzeum, amelyet az Osnabrückben született zsidó festőnek, Felix Nussbaumnak szenteltek."
            },
            {
                "q": "Van dóm Osnabrückben?",
                "a": "Igen, a késő román Szent Péter-dóm meghatározza a városképet."
            },
            {
                "q": "Mi a Piesberg?",
                "a": "Egy egykori kőbánya, amely ma kulturális és tájképi parkként szolgál."
            }
        ],
        "ro": [
            {
                "q": "De ce se numește Osnabrück 'Orașul Păcii'?",
                "a": "Deoarece acolo s-a negociat în 1648 Pacea Westfalică, care a pus capăt Războiului de Treizeci de Ani."
            },
            {
                "q": "Ce este Felix-Nussbaum-Haus?",
                "a": "Un muzeu dedicat pictorului evreu Felix Nussbaum, născut în Osnabrück."
            },
            {
                "q": "Există o catedrală în Osnabrück?",
                "a": "Da, catedrala Sf. Petru în stil romanic târziu definește panorama urbană."
            },
            {
                "q": "Ce este Piesberg?",
                "a": "O fostă carieră de piatră care astăzi servește ca parc cultural și peisagistic."
            }
        ],
        "en": [
            {
                "q": "Why is Osnabrück called the 'City of Peace'?",
                "a": "Because the Peace of Westphalia was negotiated there in 1648 to end the Thirty Years' War."
            },
            {
                "q": "What is the Felix Nussbaum House?",
                "a": "A museum dedicated to the Jewish painter Felix Nussbaum, who was born in Osnabrück."
            },
            {
                "q": "Is there a cathedral in Osnabrück?",
                "a": "Yes, the late Romanesque St. Peter's Cathedral characterizes the cityscape."
            },
            {
                "q": "What is the Piesberg?",
                "a": "A former quarry that now serves as a cultural and landscape park."
            }
        ]
    },
  },
  {
    id: "river-weser-ni-extra",
    type: "river",
    parent: "DE-NI",
    coords: [9.3500, 52.5000],
    name: { de: "Weser", hu: "Weser", ro: "Weser", en: "Weser" },
    description: {
      de: "Die Weser ist ein Strom in Norddeutschland, der von Hannoversch Münden bis zur Nordsee fließt.",
      hu: "A Weser egy folyó Észak-Németországban, Hannoversch Mund és az Északi-tenger között.",
      ro: "Weser este un fluviu din nordul Germaniei, care curge de la Hannoversch Münden până la Marea Nordului.",
      en: "The Weser is a river in northern Germany flowing from Hannoversch Münden to the North Sea.",
    },
    facts: {
      de: ["Etwa 452 km lang, entsteht aus Werra und Fulda.", "Das Weserbergland ist ein beliebtes Wandergebiet.", "Die Rattenfänger-Sage aus Hameln ist eng mit der Weser verbunden."],
      hu: ["Kb. 452 km hosszú, a Werra és a Fulda összefolyásából ered.", "A Weserbergland kedvelt túráz terület.", "A hamelni patkányfogó mondája szorosan kötődik a Weserhez."],
      ro: ["Aproximativ 452 km lungime, rezultând din confluența Werra și Fulda.", "Weserbergland este o zonă populară de drumeții.", "Legenda Fluierașului din Hameln este strâns legată de Weser."],
      en: ["Approximately 452 km long, formed by the confluence of Werra and Fulda.", "The Weser Uplands are a popular hiking area.", "The Pied Piper legend from Hamelin is closely linked to the Weser."],
    },
    descriptionAdvanced: {
      de: "Die Weser ist ein prägender Strom Norddeutschlands, der durch den Zusammenfluss von Werra und Fulda in Hann. Münden entsteht. Auf ihrem 451 Kilometer langen Weg zur Nordsee durchquert sie das Weserbergland und die norddeutsche Tiefebene. Historisch war die Weser ein bedeutender Handelsweg, was sich in der prachtvollen Weserrenaissance-Architektur der Anrainerfassaden widerspiegelt. Eine geographische Besonderheit ist die Porta Westfalica, wo der Fluss das Wiehen- und Wesergebirge durchbricht. Heute ist die Weser nicht nur eine wichtige Wasserstraße, sondern auch ein Paradies für Radtouristen auf dem beliebten Weser-Radweg. Geographie K7 – Flusssysteme und regionale Architekturstile.",
      hu: "A(z) Weser egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Weser ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Entsteht durch den Zusammenfluss von Werra und Fulda ('Weserstein').", "Einziger großer deutscher Strom mit rein innerdeutschem Einzugsgebiet.", "Gesamtlänge inkl. Werra beträgt ca. 751 Kilometer.", "Passiert die Porta Westfalica mit dem Kaiser-Wilhelm-Denkmal.", "Namensgeber für den Baustil der 'Weserrenaissance' (16./17. Jh.).", "Wichtiger Schifffahrtsweg für den Hafen Bremen/Bremerhaven."],
      hu: [
        "A(z) Weser területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Weser tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Welche beiden Flüsse bilden die Weser?",
                "a": "Die Werra und die Fulda fließen in Hannoversch Münden zusammen und bilden die Weser."
            },
            {
                "q": "In welches Meer mündet die Weser?",
                "a": "Die Weser mündet bei Bremerhaven in die Nordsee."
            },
            {
                "q": "Was ist die Weserrenaissance?",
                "a": "Ein spezieller Baustil des 16. und 17. Jahrhunderts, der entlang der Weser verbreitet ist."
            },
            {
                "q": "Ist die Weser für große Schiffe befahrbar?",
                "a": "Bis Bremen ist sie als Außen- und Unterweser für Seeschiffe befahrbar."
            }
        ],
        "hu": [
            {
                "q": "Melyik két folyó alkotja a Wesert?",
                "a": "A Werra és a Fulda Hannoversch Münden-nél folyik össze, és alkotják a Wesert."
            },
            {
                "q": "Melyik tengerbe torkollik a Weser?",
                "a": "A Weser Bremerhavennél torkollik az Északi-tengerbe."
            },
            {
                "q": "Mi a Weser-reneszánsz?",
                "a": "A 16. és 17. század speciális építészeti stílusa, amely a Weser mentén terjedt el."
            },
            {
                "q": "Hajózható a Weser nagy hajók számára?",
                "a": "Brémáig a külső- és alsó-Weser szakaszon tengeri hajók számára hajózható."
            }
        ],
        "ro": [
            {
                "q": "Care două râuri formează Weser?",
                "a": "Werra și Fulda se unesc la Hannoversch Münden pentru a forma Weser."
            },
            {
                "q": "În ce mare se varsă Weser?",
                "a": "Weser se varsă în Marea Nordului la Bremerhaven."
            },
            {
                "q": "Ce este Renașterea Weserului?",
                "a": "Un stil arhitectural special din secolele XVI și XVII, răspândit de-a lungul râului Weser."
            },
            {
                "q": "Este Weser navigabil pentru nave mari?",
                "a": "Până la Bremen este navigabil pentru nave maritime ca Weser Exterior și Inferior."
            }
        ],
        "en": [
            {
                "q": "Which two rivers form the Weser?",
                "a": "The Werra and the Fulda join in Hannoversch Münden to form the Weser."
            },
            {
                "q": "Into which sea does the Weser flow?",
                "a": "The Weser flows into the North Sea at Bremerhaven."
            },
            {
                "q": "What is the Weser Renaissance?",
                "a": "A special architectural style of the 16th and 17th centuries common along the Weser."
            },
            {
                "q": "Is the Weser navigable for large ships?",
                "a": "Up to Bremen, it is navigable for seagoing vessels as the Outer and Lower Weser."
            }
        ]
    },
  },
  {
    id: "city-hildesheim-extra",
    type: "city",
    parent: "DE-NI",
    coords: [9.9518, 52.1508],
    name: { de: "Hildesheim", hu: "Hildesheim", ro: "Hildesheim", en: "Hildesheim" },
    description: {
      de: "Hildesheim ist eine historische Stadt in Niedersachsen mit romanischen Kirchen, die zum UNESCO-Weltkulturerbe gehören.",
      hu: "Hildesheim egy történelmi város Alsó-Szászországban, UNESCO-védett román kori templomokkal.",
      ro: "Hildesheim este un oraș istoric din Saxonia Inferioară cu biserici romanice incluse în Patrimoniul UNESCO.",
      en: "Hildesheim is a historic city in Lower Saxony featuring Romanesque churches that are UNESCO World Heritage Sites.",
    },
    facts: {
      de: ["UNESCO-Weltkulturerbe: Dom St. Marien und St. Michaeliskirche.", "Der Tausendjährige Rosenstock am Dom soll 1000 Jahre alt sein.", "Wichtiges Zentrum der ottonischen Kunst."],
      hu: ["UNESCO világörökség: a St. Marien dóm és a St. Michaeliskirche.", "A dóm ezerévesnek mondott rózsabokra állítólag 1000 éves.", "Az ottó kori művészet fontos központja."],
      ro: ["Patrimoniu UNESCO: Catedrala St. Marien și Biserica St. Michaeliskirche.", "Trandafirul de o mie de ani de lângă catedrală ar fi vechi de 1000 de ani.", "Important centru al artei ottoniene."],
      en: ["UNESCO World Heritage: St. Marien Cathedral and St. Michael's Church.", "The Thousand-Year Rose at the Cathedral is said to be 1000 years old.", "An important center of Ottonian art."],
    },
    descriptionAdvanced: {
      de: "Hildesheim ist eine geschichtsträchtige Stadt in Niedersachsen, die für ihr herausragendes romanisches Erbe weltbekannt ist. Das Bistum Hildesheim wurde bereits 815 gegründet, und heute zeugen der Dom St. Marien und die Michaeliskirche, beide UNESCO-Weltkulturerbe, von der mittelalterlichen Blütezeit. Ein Symbol der Stadt ist der 'Tausendjährige Rosenstock', der an der Apsis des Doms wächst und die Zerstörung des Zweiten Weltkriegs überstand. Der historische Marktplatz, nach dem Krieg originalgetreu rekonstruiert, mit dem prächtigen Knochenhaueramtshaus, gilt als einer der schönsten Plätze Deutschlands. Hildesheim verbindet diese tiefe Geschichte mit einer modernen Hochschullandschaft. Geschichte K6 – Romanische Baukunst und mittelalterliche Bistümer.",
      hu: "A(z) Hildesheim egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Hildesheim ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Beherbergt zwei UNESCO-Welterbestätten der romanischen Epoche.", "Der 'Tausendjährige Rosenstock' ist ein Wahrzeichen der Stadt.", "Gegründet im Jahr 815 als Missionsbistum durch Ludwig den Frommen.", "Das Knochenhaueramtshaus ist ein Meisterwerk des Fachwerkbaus.", "Bedeutendes Zentrum der Ottonischen Kunst im 11. Jahrhundert.", "Sitz der Universität Hildesheim mit Fokus auf Kulturwissenschaften."],
      hu: [
        "A(z) Hildesheim területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Hildesheim tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Was ist das Wahrzeichen von Hildesheim?",
                "a": "Der Mariendom mit dem legendären 1000-jährigen Rosenstock."
            },
            {
                "q": "Was ist das Knochenhauer-Amtshaus?",
                "a": "Eines der schönsten Fachwerkhäuser der Welt, am historischen Marktplatz gelegen."
            },
            {
                "q": "Welche andere Kirche gehört zum Weltkulturerbe?",
                "a": "Die Michaeliskirche, ein Meisterwerk der ottonischen Architektur."
            },
            {
                "q": "Gibt es ein bekanntes Museum in Hildesheim?",
                "a": "Das Roemer- und Pelizaeus-Museum, berühmt für seine altägyptische Sammlung."
            }
        ],
        "hu": [
            {
                "q": "Mi Hildesheim jelképe?",
                "a": "A Mariendom a legendás 1000 éves rózsabokorral."
            },
            {
                "q": "Mi a Knochenhauer-Amtshaus?",
                "a": "A világ egyik legszebb favázas háza, a történelmi piactéren található."
            },
            {
                "q": "Melyik másik templom tartozik a világörökséghez?",
                "a": "A Michaeliskirche, az ottó-kori építészet remekműve."
            },
            {
                "q": "Van ismert múzeum Hildesheimben?",
                "a": "A Roemer- und Pelizaeus-Museum, amely az ókori egyiptomi gyűjteményéről híres."
            }
        ],
        "ro": [
            {
                "q": "Care este simbolul orașului Hildesheim?",
                "a": "Catedrala Sfânta Maria cu legendarul trandafir de 1000 de ani."
            },
            {
                "q": "Ce este Knochenhauer-Amtshaus?",
                "a": "Una dintre cele mai frumoase case cu cadre de lemn din lume, situată în piața istorică."
            },
            {
                "q": "Ce altă biserică aparține Patrimoniului Mondial?",
                "a": "Biserica Sfântul Mihail, o capodoperă a arhitecturii ottoniene."
            },
            {
                "q": "Există un muzeu cunoscut în Hildesheim?",
                "a": "Muzeul Roemer și Pelizaeus, faimos pentru colecția sa de antichități egiptene."
            }
        ],
        "en": [
            {
                "q": "What is the landmark of Hildesheim?",
                "a": "St. Mary's Cathedral with the legendary 1000-year-old rose bush."
            },
            {
                "q": "What is the Knochenhauer-Amtshaus?",
                "a": "One of the world's most beautiful half-timbered houses, located at the historic marketplace."
            },
            {
                "q": "Which other church belongs to the World Heritage Site?",
                "a": "St. Michael's Church, a masterpiece of Ottonian architecture."
            },
            {
                "q": "Is there a well-known museum in Hildesheim?",
                "a": "The Roemer and Pelizaeus Museum, famous for its ancient Egyptian collection."
            }
        ]
    },
  },
  {
    id: "island-norderney-extra",
    type: "island",
    parent: "DE-NI",
    coords: [7.1500, 53.7167],
    name: { de: "Norderney", hu: "Norderney", ro: "Norderney", en: "Norderney" },
    description: {
      de: "Norderney ist eine der Ostfriesischen Inseln in der Nordsee und ein beliebtes Seebad.",
      hu: "Norderney az Északi-tengerben fekvő Kelet-Fríz-szigetek egyike és egy kedvelt tengerparti fürdőhely.",
      ro: "Norderney este una dintre Insulele Friziene de Est din Marea Nordului și o stațiune balneară populară.",
      en: "Norderney is one of the East Frisian Islands in the North Sea and a popular seaside resort.",
    },
    facts: {
      de: ["Zweites deutsches Seebad überhaupt, eröffnet 1797.", "Bekannt für den Nationalpark Wattenmeer.", "Beliebt bei Touristen wegen seiner langen Sandstrände."],
      hu: ["Németország második tengeri fürdőhelye, 1797-ben nyílt.", "A Wattenmeer Nemzeti Parkról ismert.", "Hosszú homokos strandjaiért népszerű a turisták körében."],
      ro: ["A doua stațiune balneară germană, deschisă în 1797.", "Cunoscut pentru Parcul Național Wattenmeer.", "Popular printre turiști pentru plajele lungi de nisip."],
      en: ["Germany's second seaside resort, opened in 1797.", "Known for the Wadden Sea National Park.", "Popular with tourists for its long sandy beaches."],
    },
    descriptionAdvanced: {
      de: "Norderney ist die zweitgrößte der Ostfriesischen Inseln und blickt auf eine stolze Tradition als ältestes deutsches Nordseebad zurück, gegründet 1797. Die Insel vereint mondänes Flair mit wilder Naturlandschaft, die zum Nationalpark Niedersächsisches Wattenmeer gehört. Das historische Kurhaus und die eleganten Villen im Westteil erinnern an die Zeit, als Norderney Sommerresidenz der hannoverschen Könige war. Im Osten der Insel erstrecken sich weite Dünenlandschaften und Salzwiesen, die Rückzugsraum für zahlreiche Vogelarten sind. Norderney ist zudem bekannt für sein reges kulturelles Leben und seine erstklassige Thalasso-Kompetenz. Geographie K6 – Küstenökologie und Tourismusentwicklung an der Nordsee.",
      hu: "A(z) Norderney egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Norderney ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Ältestes Nordseebad Deutschlands, offiziell seit dem Jahr 1797.", "Insel ist ca. 14 km lang und umfasst 26,3 Quadratkilometer.", "Gehört zum UNESCO-Weltnaturerbe Wattenmeer.", "Das 54 Meter hohe Kap Norderney ist ein markantes Seezeichen.", "Besitzt als einzige ostfriesische Insel ein städtisch geprägtes Zentrum.", "Sommerresidenz von König Georg V. von Hannover (1836–1866)."],
      hu: [
        "A(z) Norderney területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Norderney tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Wie kommt man nach Norderney?",
                "a": "Mit der Autofähre ab Norddeich-Mole."
            },
            {
                "q": "Darf man auf Norderney mit dem Auto fahren?",
                "a": "Eingeschränkt; es gibt verkehrsberuhigte Zonen und Fahrverbote im Stadtzentrum."
            },
            {
                "q": "Was ist das 'Bade:haus'?",
                "a": "Ein großes Thalasso-Zentrum und Wellnessbad auf der Insel."
            },
            {
                "q": "Was ist das Wahrzeichen der Insel?",
                "a": "Das Kap, ein markantes Seezeichen aus Backstein."
            }
        ],
        "hu": [
            {
                "q": "Hogyan lehet eljutni Norderney-re?",
                "a": "Autókomppal Norddeich-Mole kikötőjéből."
            },
            {
                "q": "Szabad Norderney-n autóval közlekedni?",
                "a": "Korlátozottan; vannak forgalomcsillapított zónák és behajtási tilalmak a városközpontban."
            },
            {
                "q": "Mi az a 'Bade:haus'?",
                "a": "Egy nagy thalasso-központ és wellness-fürdő a szigeten."
            },
            {
                "q": "Mi a sziget jelképe?",
                "a": "A Kap, egy jellegzetes téglából épült tengeri jelzés."
            }
        ],
        "ro": [
            {
                "q": "Cum se ajunge la Norderney?",
                "a": "Cu feribotul auto de la Norddeich-Mole."
            },
            {
                "q": "Este permisă circulația mașinilor în Norderney?",
                "a": "Restricționat; există zone cu trafic limitat și interdicții de circulație în centrul orașului."
            },
            {
                "q": "Ce este 'Bade:haus'?",
                "a": "Un mare centru de talasoterapie și spa de wellness pe insulă."
            },
            {
                "q": "Care este simbolul insulei?",
                "a": "Cap-ul, un reper maritim distinctiv din cărămidă."
            }
        ],
        "en": [
            {
                "q": "How do you get to Norderney?",
                "a": "By car ferry from Norddeich-Mole."
            },
            {
                "q": "Is driving allowed on Norderney?",
                "a": "Limited; there are traffic-calmed zones and driving bans in the town center."
            },
            {
                "q": "What is the 'Bade:haus'?",
                "a": "A large thalasso center and wellness spa on the island."
            },
            {
                "q": "What is the landmark of the island?",
                "a": "The Kap, a prominent brick daymark."
            }
        ]
    },
  },
  {
    id: "hist-hameln-extra",
    type: "historical",
    parent: "DE-NI",
    coords: [9.3556, 52.1044],
    name: { de: "Hameln", hu: "Hameln", ro: "Hameln", en: "Hameln" },
    description: {
      de: "Hameln ist eine Weserrenaissance-Stadt, weltbekannt durch die Sage vom Rattenfänger.",
      hu: "Hameln egy Weser-reneszánsz városka, a patkányfogó mondájáról világszerte ismert.",
      ro: "Hameln este un oraș de Renaștere a Weserului, famos în întreaga lume prin legenda Fluierașului.",
      en: "Hameln is a Weser Renaissance town, world-famous for the legend of the Pied Piper.",
    },
    facts: {
      de: ["Die Rattenfängersage stammt aus dem 13. Jahrhundert.", "Jeden Sonntag im Sommer gibt es Freilichtspiele zur Sage.", "Zahlreiche Weserrenaissance-Fachwerkhäuser prägen das Stadtbild."],
      hu: ["A patkányfogó monda a 13. századból ered.", "Minden nyári vasárnap szabadtéri előadást tartanak a mondáról.", "Számos Weser-reneszánsz faváz-ház jellemzi a városképet."],
      ro: ["Legenda Fluierașului datează din secolul al XIII-lea.", "În fiecare duminică de vară au loc spectacole în aer liber despre legendă.", "Numeroase case cu cadre din lemn în stil Renaștere al Weserului caracterizează panorama urbană."],
      en: ["The Pied Piper legend dates from the 13th century.", "Every summer Sunday there are open-air performances about the legend.", "Numerous Weser Renaissance half-timbered houses characterize the townscape."],
    },
    descriptionAdvanced: {
      de: "Hameln an der Weser ist weltberühmt durch die Sage vom Rattenfänger, die bereits im Jahr 1284 ihren Ursprung haben soll. Die Stadt ist ein leuchtendes Beispiel für die Weserrenaissance, deren prachtvolle Bauten wie das Rattenfängerhaus und das Hochzeitshaus das Stadtbild prägen. Hinter der Legende verbirgt sich vermutlich die historische Auswanderung junger Bürger nach Osten. Heute zelebriert Hameln sein Erbe mit täglichen Glockenspielen und Rattenfänger-Freilichtspielen. Neben der Märchen-Thematik ist Hameln ein bedeutender Wirtschaftsstandort und ein wichtiger Verkehrsknotenpunkt im Weserbergland. Geschichte K5 – Sagen und ihre historischen Hintergründe.",
      hu: "A(z) Hameln egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Hameln ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Weltbekannt durch die Sage vom Rattenfänger von Hameln.", "Zentrum der Weserrenaissance mit über 100 historischen Gebäuden.", "Erste urkundliche Erwähnung im Jahr 851 als Benediktinerkloster.", "Das Rattenfängerhaus stammt aus dem Jahr 1602.", "Die Stadtmauer ist mit zwei erhaltenen Wehrtürmen noch teilweise sichtbar.", "Jeden Sonntag im Sommer finden die Rattenfänger-Freilichtspiele statt."],
      hu: [
        "A(z) Hameln területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Hameln tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Wer ist die bekannteste Figur der Stadt?",
                "a": "Der Rattenfänger von Hameln."
            },
            {
                "q": "Was geschah laut der Sage im Jahr 1284?",
                "a": "Ein bunt gekleideter Pfeifer soll 130 Kinder aus der Stadt weggeführt haben."
            },
            {
                "q": "Was ist das Rattenfängerhaus?",
                "a": "Ein prächtiges Gebäude der Weserrenaissance, in dessen Inschrift die Sage erwähnt wird."
            },
            {
                "q": "Kann man die Sage heute noch erleben?",
                "a": "Ja, durch das Rattenfänger-Freilichtspiel (im Sommer) und das Musical 'RATS'."
            }
        ],
        "hu": [
            {
                "q": "Ki a város legismertebb alakja?",
                "a": "A hamelni patkányfogó."
            },
            {
                "q": "A monda szerint mi történt 1284-ben?",
                "a": "Egy tarka ruhás sípos állítólag 130 gyermeket vezetett ki a városból."
            },
            {
                "q": "Mi a Patkányfogó-ház?",
                "a": "Egy pompás Weser-reneszánsz épület, amelynek feliratában említik a mondát."
            },
            {
                "q": "Ma is átélhető még a monda?",
                "a": "Igen, a patkányfogó szabadtéri játékon (nyáron) és a 'RATS' musicalen keresztül."
            }
        ],
        "ro": [
            {
                "q": "Cine este cea mai cunoscută figură a orașului?",
                "a": "Fluierașul din Hameln."
            },
            {
                "q": "Ce s-a întâmplat conform legendei în anul 1284?",
                "a": "Un fluieraș îmbrăcat pestriț ar fi dus 130 de copii departe de oraș."
            },
            {
                "q": "Ce este Casa Fluierașului?",
                "a": "O clădire splendidă în stilul Renașterii Weserului, pe a cărei inscripție este menționată legenda."
            },
            {
                "q": "Se mai poate experimenta legenda și astăzi?",
                "a": "Da, prin spectacolul în aer liber al Fluierașului (vara) și musicalul 'RATS'."
            }
        ],
        "en": [
            {
                "q": "Who is the most famous figure of the city?",
                "a": "The Pied Piper of Hamelin."
            },
            {
                "q": "What happened according to the legend in 1284?",
                "a": "A colorful piper is said to have led 130 children away from the town."
            },
            {
                "q": "What is the Pied Piper's House?",
                "a": "A magnificent Weser Renaissance building with an inscription mentioning the legend."
            },
            {
                "q": "Can the legend still be experienced today?",
                "a": "Yes, through the Pied Piper open-air play (in summer) and the musical 'RATS'."
            }
        ]
    },
  },
  {
    id: "city-goettingen-extra",
    type: "city",
    parent: "DE-NI",
    coords: [9.9347, 51.5328],
    name: { de: "Göttingen", hu: "Göttingen", ro: "Göttingen", en: "Göttingen" },
    description: {
      de: "Göttingen ist eine Universitätsstadt in Südniedersachsen mit einer renommierten Georg-August-Universität.",
      hu: "Göttingen Dél-Alsó-Szászország egy egyetemváros, a neves Georg-August Egyetem otthona.",
      ro: "Göttingen este un oraș universitar din sudul Saxoniei Inferioare, cu renumita Universitate Georg-August.",
      en: "Göttingen is a university city in southern Lower Saxony home to the renowned Georg-August University.",
    },
    facts: {
      de: ["Die Göttinger Sieben, sieben Professoren, protestierten 1837 gegen den König.", "Zahlreiche Nobelpreisträger lehrten oder studierten hier.", "Das Gänseliesel-Denkmal ist ein Symbol der Stadt."],
      hu: ["A göttingeni hét, hét professzor, 1837-ben tiltakozott a király ellen.", "Számos Nobel-díjas tanított vagy tanult itt.", "A Gänseliesel-szobor a város szimbóluma."],
      ro: ["Cei Șapte din Göttingen, șapte profesori, au protestat în 1837 împotriva regelui.", "Numeroși laureați Nobel au predat sau studiat aici.", "Monumentul Gänseliesel este un simbol al orașului."],
      en: ["The Göttingen Seven, seven professors, protested against the king in 1837.", "Numerous Nobel Prize winners taught or studied here.", "The Gänseliesel monument is a symbol of the city."],
    },
    descriptionAdvanced: {
      de: "Göttingen ist eine klassische deutsche Gelehrtenrepublik, geprägt durch die 1734 gegründete Georg-August-Universität. Die Stadt hat eine beeindruckende Tradition: Über 40 Nobelpreisträger haben hier studiert oder gelehrt, darunter Größen wie Gauß, Lichtenberg und die Brüder Grimm. Ein Wahrzeichen ist das 'Gänseliesel' auf dem Marktplatz – die meistgeküsste Statue der Welt, da es für frisch promovierte Studenten Tradition ist, sie nach bestandenem Examen zu küssen. Die historische Altstadt mit ihren Fachwerkbauten und der grüne Wall um den Stadtkern verleihen Göttingen eine hohe Lebensqualität. Heute ist die Stadt ein führender Standort für Life Sciences und Messtechnik. Geschichte K7 – Universitäten als Zentren von Aufklärung und Wissenschaft.",
      hu: "A(z) Göttingen egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Göttingen ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Heimat der Georg-August-Universität mit über 40 Nobelpreisträgern.", "Das Gänseliesel-Denkmal ist das Wahrzeichen der Stadt.", "Wirkungsstätte des berühmten Mathematikers Carl Friedrich Gauß.", "Die Brüder Grimm lehrten hier und gehörten zu den 'Göttinger Sieben'.", "Der Stadtwall aus dem 14. Jahrhundert ist heute eine 3 km lange Promenade.", "Wichtiger Standort für die optische Industrie und Nanotechnologie."],
      hu: [
        "A(z) Göttingen területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Göttingen tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Was ist das Gänseliesel?",
                "a": "Eine Bronzestatue auf dem Marktbrunnen und das Wahrzeichen der Stadt."
            },
            {
                "q": "Welche Tradition haben frisch promovierte Doktoren?",
                "a": "Sie küssen das Gänseliesel nach bestandener Prüfung."
            },
            {
                "q": "Wie viele Nobelpreisträger sind mit Göttingen verbunden?",
                "a": "Über 40 Nobelpreisträger haben hier gelebt, studiert oder gelehrt."
            },
            {
                "q": "Was war der 'Göttinger Hainbund'?",
                "a": "Eine bedeutende literarische Dichtergruppe des 18. Jahrhunderts."
            }
        ],
        "hu": [
            {
                "q": "Mi az a Gänseliesel?",
                "a": "Egy bronzszobor a piaci kúton, a város jelképe."
            },
            {
                "q": "Milyen hagyományuk van a frissen végzett doktoroknak?",
                "a": "A sikeres vizsga után megcsókolják a Gänseliesel-t."
            },
            {
                "q": "Hány Nobel-díjas kötődik Göttingenhez?",
                "a": "Több mint 40 Nobel-díjas élt, tanult vagy tanított itt."
            },
            {
                "q": "Mi volt a 'Göttinger Hainbund'?",
                "a": "A 18. század egy jelentős irodalmi költői csoportja."
            }
        ],
        "ro": [
            {
                "q": "Ce este Gänseliesel?",
                "a": "O statuie de bronz de pe fântâna din piață și simbolul orașului."
            },
            {
                "q": "Ce tradiție au doctoranzii care tocmai și-au susținut teza?",
                "a": "Ei sărută Gänseliesel după ce trec examenul de doctorat."
            },
            {
                "q": "Câți laureați ai premiului Nobel sunt asociați cu Göttingen?",
                "a": "Peste 40 de laureați Nobel au trăit, studiat sau predat aici."
            },
            {
                "q": "Ce a fost 'Göttinger Hainbund'?",
                "a": "Un grup literar important de poeți din secolul al XVIII-lea."
            }
        ],
        "en": [
            {
                "q": "What is the Gänseliesel?",
                "a": "A bronze statue on the market fountain and the city's landmark."
            },
            {
                "q": "What tradition do newly graduated doctors have?",
                "a": "They kiss the Gänseliesel after passing their doctoral examination."
            },
            {
                "q": "How many Nobel Prize winners are associated with Göttingen?",
                "a": "Over 40 Nobel Prize winners have lived, studied, or taught here."
            },
            {
                "q": "What was the 'Göttinger Hainbund'?",
                "a": "An important literary group of poets in the 18th century."
            }
        ]
    },
  },
  {
    id: "landmark-wilhelmshaven-extra",
    type: "landmark",
    parent: "DE-NI",
    coords: [8.1077, 53.5298],
    name: { de: "Wilhelmshaven", hu: "Wilhelmshaven", ro: "Wilhelmshaven", en: "Wilhelmshaven" },
    description: {
      de: "Wilhelmshaven ist Deutschlands einziger Tiefwasserhafen und wichtiger Marinestandort an der Nordsee.",
      hu: "Wilhelmshaven Németország egyetlen mélyvízi kikötője és fontos haditengerészeti helyszín az Északi-tengeren.",
      ro: "Wilhelmshaven este singurul port de apă adâncă din Germania și un important loc naval pe Marea Nordului.",
      en: "Wilhelmshaven is Germany's only deep-water port and an important naval location on the North Sea.",
    },
    facts: {
      de: ["Deutschlands einziger echter Tiefwasserhafen für Supertanker.", "Heimat des Deutschen Marinemuseums.", "Wichtiger Standort für Ölimport und Raffinerien."],
      hu: ["Németország egyetlen valódi mélyvízi kikötője szuperolajszállítóknak.", "A Német Haditengerészeti Múzeum otthona.", "Fontos helyszín olajimport és finomítók számára."],
      ro: ["Singurul port real de apă adâncă din Germania pentru supertancuri.", "Gazda Muzeului Naval German.", "Locație importantă pentru importul de petrol și rafinării."],
      en: ["Germany's only genuine deep-water port for supertankers.", "Home to the German Naval Museum.", "An important location for oil imports and refineries."],
    },
    descriptionAdvanced: {
      de: "Wilhelmshaven an der Nordsee ist der bedeutendste Marinestützpunkt Deutschlands und die einzige Tiefwasserhafen-Stadt des Landes. Gegründet 1869 von König Wilhelm I. von Preußen, war sie lange Zeit das Zentrum der deutschen Seemacht. Heute beherbergt Wilhelmshaven nicht nur das Marinekommando, sondern auch den JadeWeserPort, das einzige Containerterminal Deutschlands, das von den größten Schiffen der Welt tideunabhängig angelaufen werden kann. Das Stadtbild wird durch die imposante Kaiser-Wilhelm-Brücke geprägt. Als Standort für Energielogistik, insbesondere Flüssigerdgas (LNG), spielt die Stadt eine Schlüsselrolle für die deutsche Energieversorgung. Geographie K7 – Marinestützpunkte und moderne Hafenwirtschaft.",
      hu: "A(z) Wilhelmshaven egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Wilhelmshaven ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Größter Standort der Bundeswehr mit rund 9.000 Beschäftigten.", "Gegründet im Jahr 1869 als preußischer Marinehafen.", "Die Kaiser-Wilhelm-Brücke ist eine der größten Drehbrücken Europas.", "Standort des JadeWeserPort, Deutschlands einzigem Tiefwasserhafen.", "Heimat des Deutschen Marinemuseums am historischen Hafen.", "Wichtige Drehscheibe für die deutsche Energieversorgung (LNG-Terminal)."],
      hu: [
        "A(z) Wilhelmshaven területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Wilhelmshaven tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Wann wurde Wilhelmshaven gegründet?",
                "a": "Die Stadt wurde 1869 von König Wilhelm I. als preußischer Marinehafen gegründet."
            },
            {
                "q": "Was ist der JadeWeserPort?",
                "a": "Deutschlands einziger Tiefwassercontainerterminal."
            },
            {
                "q": "Was zeigt das Marinemuseum?",
                "a": "Die Geschichte der deutschen Marinen inklusive begehbarer Kriegsschiffe."
            },
            {
                "q": "Was ist die Kaiser-Wilhelm-Brücke?",
                "a": "Eine große historische Drehbrücke und ein Wahrzeichen der Stadt."
            }
        ],
        "hu": [
            {
                "q": "Mikor alapították Wilhelmshavent?",
                "a": "A várost 1869-ben alapította I. Vilmos király porosz haditengerészeti kikötőként."
            },
            {
                "q": "Mi az a JadeWeserPort?",
                "a": "Németország egyetlen mélyvízi konténerterminálja."
            },
            {
                "q": "Mit mutat be a Haditengerészeti Múzeum?",
                "a": "A német haditengerészet történetét, bejárható hadihajókkal."
            },
            {
                "q": "Mi a Vilmos császár híd?",
                "a": "Egy nagy történelmi forgóhíd és a város jelképe."
            }
        ],
        "ro": [
            {
                "q": "Când a fost fondat Wilhelmshaven?",
                "a": "Orașul a fost fondat în 1869 de regele Wilhelm I ca port naval prusac."
            },
            {
                "q": "Ce este JadeWeserPort?",
                "a": "Singurul terminal de containere de apă adâncă din Germania."
            },
            {
                "q": "Ce prezintă Muzeul Naval?",
                "a": "Istoria marinelor germane, inclusiv nave de război care pot fi vizitate."
            },
            {
                "q": "Ce este Podul Împăratul Wilhelm?",
                "a": "Un mare pod pivotant istoric și un simbol al orașului."
            }
        ],
        "en": [
            {
                "q": "When was Wilhelmshaven founded?",
                "a": "The city was founded in 1869 by King Wilhelm I as a Prussian naval port."
            },
            {
                "q": "What is the JadeWeserPort?",
                "a": "Germany's only deep-water container terminal."
            },
            {
                "q": "What does the Naval Museum show?",
                "a": "The history of the German navies, including warships that can be boarded."
            },
            {
                "q": "What is the Kaiser Wilhelm Bridge?",
                "a": "A large historic swing bridge and a landmark of the city."
            }
        ]
    },
  },
  {
    id: "lake-steinhuder-meer-extra",
    type: "lake",
    parent: "DE-NI",
    coords: [9.3333, 52.4667],
    name: { de: "Steinhuder Meer", hu: "Steinhuder Meer", ro: "Lacul Steinhuder", en: "Steinhuder Meer" },
    description: {
      de: "Das Steinhuder Meer ist der größte See in Nordwestdeutschland und ein beliebtes Naherholungsgebiet.",
      hu: "A Steinhuder Meer Északnyugat-Németország legnagyobb tava és kedvelt kirándulóhely.",
      ro: "Steinhuder Meer este cel mai mare lac din nord-vestul Germaniei și o zonă de recreere populară.",
      en: "Steinhuder Meer is the largest lake in northwestern Germany and a popular recreation area.",
    },
    facts: {
      de: ["Fläche von ca. 29 km², durchschnittlich nur 1,4 m tief.", "Naturschutzgebiet und Vogelparadies.", "Die Insel Wilhelmstein im See beherbergt eine historische Festung."],
      hu: ["Területe kb. 29 km², átlagos mélysége mindössze 1,4 m.", "Természetvédelmi terület és madárparadicsom.", "A tóban lévő Wilhelmstein sziget egy történelmi erődöt rejt."],
      ro: ["Suprafață de aproximativ 29 km², adâncime medie de doar 1,4 m.", "Arie protejată și paradis pentru păsări.", "Insula Wilhelmstein din lac adăpostește o fortăreață istorică."],
      en: ["Surface area approximately 29 km², average depth only 1.4 m.", "Nature reserve and bird paradise.", "Wilhelmstein island in the lake houses a historic fortress."],
    },
    descriptionAdvanced: {
      de: "Das Steinhuder Meer bei Hannover ist mit einer Fläche von rund 29 Quadratkilometern der größte See Nordwestdeutschlands. Trotz seiner Größe ist das Gewässer extrem flach, mit einer durchschnittlichen Tiefe von nur 1,35 Metern. Inmitten des Sees liegt die künstliche Inselfestung Wilhelmstein, die im 18. Jahrhundert als uneinnehmbarer Zufluchtsort erbaut wurde. Das Steinhuder Meer ist ein Naturpark von internationaler Bedeutung, besonders als Rastplatz für Zugvögel. Es bietet ideale Bedingungen für Segler und Kitesurfer, während das idyllische Fischerdorf Steinhunde für seine geräucherten Aale bekannt ist. Geographie K6 – Glaziale Seen und ihre ökologische Bedeutung.",
      hu: "A(z) Steinhuder Meer egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Steinhuder Meer ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Größter See in Niedersachsen mit ca. 29 km² Wasserfläche.", "Extrem geringe Wassertiefe (durchschnittlich nur 1,35 Meter).", "Beherbergt die historische Inselfestung Wilhelmstein aus dem Jahr 1761.", "Wichtiges EU-Vogelschutzgebiet für über 250 verschiedene Arten.", "Beliebtes Segelrevier mit hunderten von Bootsliegeplätzen.", "Entstanden am Ende der letzten Eiszeit in einer Gletschermulde."],
      hu: [
        "A(z) Steinhuder Meer területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Steinhuder Meer tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Wie tief ist das Steinhuder Meer?",
                "a": "Es ist sehr flach, im Durchschnitt nur 1,35 Meter."
            },
            {
                "q": "Was ist ein 'Auswanderer'?",
                "a": "Ein spezieller Segelbootstyp, der nur auf dem Steinhuder Meer vorkommt."
            },
            {
                "q": "Gibt es dort eine Inselfestung?",
                "a": "Ja, die Festung Wilhelmstein auf einer künstlichen Insel."
            },
            {
                "q": "Was kann man in Steinhude essen?",
                "a": "Geräucherter Aal ist eine bekannte lokale Spezialität."
            }
        ],
        "hu": [
            {
                "q": "Milyen mély a Steinhuder Meer?",
                "a": "Nagyon sekély, átlagosan mindössze 1,35 méter."
            },
            {
                "q": "Mi az az 'Auswanderer'?",
                "a": "Egy speciális vitorláshajó-típus, amely csak a Steinhuder Meer-en fordul elő."
            },
            {
                "q": "Van ott szigeterőd?",
                "a": "Igen, a Wilhelmstein erőd egy mesterséges szigeten."
            },
            {
                "q": "Mit lehet enni Steinhudéban?",
                "a": "A füstölt angolna egy ismert helyi különlegesség."
            }
        ],
        "ro": [
            {
                "q": "Cât de adânc este Steinhuder Meer?",
                "a": "Este foarte puțin adânc, în medie doar 1,35 metri."
            },
            {
                "q": "Ce este un 'Auswanderer'?",
                "a": "Un tip special de barcă cu pânze care se găsește doar pe Steinhuder Meer."
            },
            {
                "q": "Există o fortăreață pe insulă acolo?",
                "a": "Da, fortăreața Wilhelmstein pe o insulă artificială."
            },
            {
                "q": "Ce se poate mânca în Steinhude?",
                "a": "Anguila afumată este o specialitate locală cunoscută."
            }
        ],
        "en": [
            {
                "q": "How deep is the Steinhuder Meer?",
                "a": "It is very shallow, averaging only 1.35 meters."
            },
            {
                "q": "What is an 'Auswanderer'?",
                "a": "A special type of sailboat found only on the Steinhuder Meer."
            },
            {
                "q": "Is there an island fortress there?",
                "a": "Yes, the Wilhelmstein fortress on an artificial island."
            },
            {
                "q": "What can you eat in Steinhude?",
                "a": "Smoked eel is a well-known local specialty."
            }
        ]
    },
  },
  {
    id: "city-celle-extra",
    type: "city",
    parent: "DE-NI",
    coords: [10.0819, 52.6256],
    name: { de: "Celle", hu: "Celle", ro: "Celle", en: "Celle" },
    description: {
      de: "Celle ist eine historische Stadt in der Lüneburger Heide mit gut erhaltenem Fachwerkstadtkern und einem Residenzschloss.",
      hu: "Celle egy történelmi város a Lüneburger Heide-ben, jól megőrzött faváz belvárossal és rezidencia kastéllyal.",
      ro: "Celle este un oraș istoric în Lüneburger Heide cu un centru istoric bine conservat și un castel rezidențial.",
      en: "Celle is a historic city in the Lüneburg Heath with a well-preserved half-timbered old town and a residence palace.",
    },
    facts: {
      de: ["Über 500 Fachwerkhäuser prägen das Stadtbild.", "Das Celleer Schloss war Residenz der Herzöge von Braunschweig-Lüneburg.", "Bekannt für den jährlichen Hengstparade der Landgestüts Celle."],
      hu: ["Több mint 500 faváz-ház jellemzi a városképet.", "A Celle-i kastély a Braunschweig-Lüneburg hercegek rezidenciája volt.", "A Celle-i ménesbirtok éves csődörparádéjáról ismert."],
      ro: ["Peste 500 de case cu cadre din lemn caracterizează panorama urbană.", "Castelul Celle a fost reședința ducelui de Braunschweig-Lüneburg.", "Cunoscut pentru parada anuală a armăsarilor de la Hergstrüt din Celle."],
      en: ["Over 500 half-timbered houses shape the townscape.", "Celle Palace was the residence of the Dukes of Brunswick-Lüneburg.", "Known for the annual stallion parade of Celle State Stud."],
    },
    descriptionAdvanced: {
      de: "Celle ist eine einzigartige Residenzstadt am Südrand der Lüneburger Heide, die durch eines der größten zusammenhängenden Fachwerk-Ensembles Europas besticht. Über 480 denkmalgeschützte Fachwerkhäuser in der Altstadt blieben im Zweiten Weltkrieg nahezu unversehrt und bilden eine malerische Kulisse. Das herrschaftliche Celler Schloss vereint Stilelemente der Renaissance und des Barocks und beherbergt das älteste noch bespielte Barocktheater Europas. Celle war über Jahrhunderte die Residenz der Herzöge von Braunschweig-Lüneburg. Heute verbindet die Stadt diese höfische Tradition mit modernen Akzenten und ist bekannt für das Landgestüt Celle und seine Pferdezucht. Geschichte K7 – Residenzstädte und Denkmalschutz in Deutschland.",
      hu: "A(z) Celle egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Celle ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Besitzt über 480 historische Fachwerkhäuser in der geschlossenen Altstadt.", "Das Celler Schloss war die Residenz der Welfen-Herzöge.", "Beherbergt das älteste Barocktheater Europas (gegründet 1674).", "Sitz des Niedersächsischen Landgestüts mit weltberühmter Pferdezucht.", "Das Hoppener Haus von 1532 ist das prächtigste Fachwerkhaus der Stadt.", "Wirkungsstätte der verbannten dänischen Königin Caroline Mathilde."],
      hu: [
        "A(z) Celle területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Celle tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Wofür ist Celle berühmt?",
                "a": "Für seinen geschlossenen Altstadtkern mit über 500 Fachwerkhäusern."
            },
            {
                "q": "War Celle eine Residenzstadt?",
                "a": "Ja, das Celler Schloss war Residenz der Herzöge von Braunschweig-Lüneburg."
            },
            {
                "q": "Was ist das Landgestüt Celle?",
                "a": "Ein historisches Gestüt, bekannt für die Zucht der Hannoveraner Pferde."
            },
            {
                "q": "Was ist die Stechinelli-Kapelle?",
                "a": "Eine kleine, kunstvoll gestaltete barocke Kapelle in der Nähe von Celle."
            }
        ],
        "hu": [
            {
                "q": "Miről híres Celle?",
                "a": "Zárt óvárosi magjáról, több mint 500 favázas házzal."
            },
            {
                "q": "Residenciaváros volt Celle?",
                "a": "Igen, a Celle-i kastély a Braunschweig-Lüneburg hercegek rezidenciája volt."
            },
            {
                "q": "Mi a Celle-i Ménesbirtok?",
                "a": "Egy történelmi ménes, amely a hannoveri lovak tenyésztéséről ismert."
            },
            {
                "q": "Mi a Stechinelli-kápolna?",
                "a": "Egy kicsi, művészien kialakított barokk kápolna Celle közelében."
            }
        ],
        "ro": [
            {
                "q": "Pentru ce este faimos Celle?",
                "a": "Pentru centrul său vechi compact cu peste 500 de case cu cadre de lemn."
            },
            {
                "q": "A fost Celle un oraș de reședință?",
                "a": "Da, castelul Celle a fost reședința ducilor de Braunschweig-Lüneburg."
            },
            {
                "q": "Ce este Herghelia de Stat din Celle?",
                "a": "O herghelie istorică, cunoscută pentru creșterea cailor hanovrieni."
            },
            {
                "q": "Ce este Capela Stechinelli?",
                "a": "O capelă barocă mică, realizată artistic, în apropiere de Celle."
            }
        ],
        "en": [
            {
                "q": "What is Celle famous for?",
                "a": "For its cohesive old town center with over 500 half-timbered houses."
            },
            {
                "q": "Was Celle a residence city?",
                "a": "Yes, Celle Palace was the residence of the Dukes of Brunswick-Lüneburg."
            },
            {
                "q": "What is the Celle State Stud?",
                "a": "A historic stud farm, famous for breeding Hanoverian horses."
            },
            {
                "q": "What is the Stechinelli Chapel?",
                "a": "A small, artistically designed Baroque chapel near Celle."
            }
        ]
    },
  },
  {
    id: "hist-goslar-extra",
    type: "historical",
    parent: "DE-NI",
    coords: [10.4280, 51.9060],
    name: { de: "Goslar", hu: "Goslar", ro: "Goslar", en: "Goslar" },
    description: {
      de: "Goslar ist eine mittelalterliche Kaiserstadt am Harzrand mit UNESCO-geschützter Altstadt.",
      hu: "Goslar egy középkori császárváros a Harz szélén, UNESCO-védett óvárossal.",
      ro: "Goslar este un oraș imperial medieval la marginea Harzului cu un centru istoric protejat de UNESCO.",
      en: "Goslar is a medieval imperial city on the edge of the Harz with a UNESCO-protected old town.",
    },
    facts: {
      de: ["Die Kaiserpfalz ist eine der bedeutendsten romanischen Pfalzanlagen.", "Die Altstadt ist UNESCO-Weltkulturerbe.", "Das nahegelegene Bergwerk Rammelsberg (ebenfalls UNESCO) wurde über 1000 Jahre betrieben."],
      hu: ["A Kaiserpfalz az egyik legjelentősebb román pfalzi épület.", "Az óváros UNESCO világörökség.", "A közeli Rammelsberg bánya (szintén UNESCO) több mint 1000 évig üzemelt."],
      ro: ["Kaiserpfalz este unul dintre cele mai importante palate palatine romanice.", "Centrul vechi este Patrimoniu UNESCO.", "Mina Rammelsberg din apropiere (tot UNESCO) a funcționat peste 1000 de ani."],
      en: ["The Kaiserpfalz is one of the most significant Romanesque palatine structures.", "The old town is a UNESCO World Heritage Site.", "The nearby Rammelsberg mine (also UNESCO) operated for over 1000 years."],
    },
    descriptionAdvanced: {
      de: "Goslar am Nordrand des Harzes ist eine ehemalige Kaiserstadt von herausragender historischer Bedeutung. Über Jahrhunderte war sie ein Machtzentrum des Heiligen Römischen Reiches, begründet durch den Silberreichtum des angrenzenden Rammelsberges. Die Kaiserpfalz Goslar ist der größte und am besten erhaltene Profanbau der Romanik in Deutschland. Zusammen mit dem Bergwerk Rammelsberg und der Altstadt gehört Goslar zum UNESCO-Weltkulturerbe. Das mittelalterliche Stadtbild mit seinen schiefergedeckten Häusern und dem Marktplatz mit dem Glockenspiel zeugt vom einstigen Reichtum der hansischen Kaufleute. Geschichte K6 – Bergbau und Kaisertum im Mittelalter.",
      hu: "Goslar, teljes nevén Goslar Alte Kaiserstadt (Goslar Régi Császárváros) egy német város, tartományi körzet központja Alsó-Szászország tartományban. Része az UNESCO világörökségének. A(z) Goslar egy jelentős turisztikai célpont, amely Németország gazdag történelmét és kultúráját mutatja be. Számos látogatót vonz évről évre. A környék lenyűgöző atmoszférája és az itt található különleges értékek minden utazó számára életre szóló élményt kínálnak.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["UNESCO-Weltkulturerbe seit 1992 (Altstadt und Rammelsberg).", "Die Kaiserpfalz wurde zwischen 1040 und 1050 unter Heinrich III. erbaut.", "Das Bergwerk Rammelsberg wurde über 1.000 Jahre kontinuierlich betrieben.", "Besitzt hunderte mittelalterliche Fachwerkhäuser mit Schieferverkleidung.", "Das Goslarer Rathaus beherbergt den prunkvollen 'Huldigungssaal'.", "Das Glockenspiel am Markt zeigt die Geschichte des Bergbaus im Harz."],
      hu: [
        "A(z) Goslar területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Goslar tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Was war die Kaiserpfalz Goslar?",
                "a": "Ein bedeutender Pfalzkomplex, in dem im Mittelalter viele Reichstage stattfanden."
            },
            {
                "q": "Was wurde am Rammelsberg abgebaut?",
                "a": "Vor allem Silber, Kupfer, Blei und Zink über mehr als 1000 Jahre."
            },
            {
                "q": "Was ist das Besondere am Marktplatz von Goslar?",
                "a": "Das historische Rathaus und das Glockenspiel mit Figuren zur Bergbaugeschichte."
            },
            {
                "q": "Welchen Baustil sieht man in Goslars Altstadt?",
                "a": "Prachtvolle Fachwerkhäuser und mit Schiefer verkleidete Fassaden."
            }
        ],
        "hu": [
            {
                "q": "Mi volt a Goslari Kaiserpfalz?",
                "a": "Egy jelentős pfalzi komplexum, ahol a középkorban számos birodalmi gyűlést tartottak."
            },
            {
                "q": "Mit bányásztak a Rammelsbergben?",
                "a": "Főleg ezüstöt, rezet, ólmot és cinket több mint 1000 éven keresztül."
            },
            {
                "q": "Mi a különleges a goslari piactéren?",
                "a": "A történelmi városháza és a harangjáték a bányászat történetét bemutató figurákkal."
            },
            {
                "q": "Milyen építészeti stílus látható Goslar óvárosában?",
                "a": "Pompás favázas házak és palával borított homlokzatok."
            }
        ],
        "ro": [
            {
                "q": "Ce a fost Palatul Imperial (Kaiserpfalz) din Goslar?",
                "a": "Un complex palatinal important unde au avut loc multe diete imperiale în Evul Mediu."
            },
            {
                "q": "Ce s-a extras la Rammelsberg?",
                "a": "În special argint, cupru, plumb și zinc timp de peste 1000 de ani."
            },
            {
                "q": "Ce este special la piața din Goslar?",
                "a": "Primăria istorică și carillonul cu figuri despre istoria mineritului."
            },
            {
                "q": "Ce stil arhitectural se vede în centrul vechi din Goslar?",
                "a": "Case splendide cu cadre de lemn și fațade placate cu șist."
            }
        ],
        "en": [
            {
                "q": "What was the Imperial Palace of Goslar?",
                "a": "A significant palatine complex where many imperial diets were held in the Middle Ages."
            },
            {
                "q": "What was mined at Rammelsberg?",
                "a": "Primarily silver, copper, lead, and zinc for over 1000 years."
            },
            {
                "q": "What is special about the marketplace of Goslar?",
                "a": "The historic town hall and the glockenspiel with figures depicting mining history."
            },
            {
                "q": "What architectural style can be seen in Goslar's old town?",
                "a": "Magnificent half-timbered houses and facades clad in slate."
            }
        ]
    },
  },
  {
    id: "river-ems-extra",
    type: "river",
    parent: "DE-NI",
    coords: [7.5000, 52.8000],
    name: { de: "Ems", hu: "Ems", ro: "Ems", en: "Ems" },
    description: {
      de: "Die Ems ist ein Fluss im Nordwesten Deutschlands, der in die Nordsee mündet und historisch als Handelsweg diente.",
      hu: "Az Ems Észak-Nygu-Németország egy folyója, amely az Északi-tengerbe torkollik és történelmileg kereskedelmi útként szolgált.",
      ro: "Ems este un râu din nord-vestul Germaniei care se varsă în Marea Nordului și a servit istoric ca rută comercială.",
      en: "The Ems is a river in northwestern Germany that flows into the North Sea and historically served as a trade route.",
    },
    facts: {
      de: ["Etwa 371 km lang.", "Wichtig für die Meyerwerft in Papenburg, die dort Kreuzfahrtschiffe baut.", "Der Dortmund-Ems-Kanal verbindet das Ruhrgebiet mit der Nordsee."],
      hu: ["Kb. 371 km hosszú.", "Fontos a papenburgi Meyerwerft hajógyár számára, ahol óceánjárókat építenek.", "A Dortmund-Ems csatorna összeköti a Ruhr-vidéket az Északi-tengerrel."],
      ro: ["Aproximativ 371 km lungime.", "Important pentru șantierul naval Meyerwerft din Papenburg, unde se construiesc nave de croazieră.", "Canalul Dortmund-Ems leagă regiunea Ruhr de Marea Nordului."],
      en: ["Approximately 371 km long.", "Important for the Meyerwerft shipyard in Papenburg, where cruise ships are built.", "The Dortmund-Ems Canal connects the Ruhr area with the North Sea."],
    },
    descriptionAdvanced: {
      de: "Die Ems ist ein 371 Kilometer langer Fluss, der das westliche Niedersachsen und Nordrhein-Westfalen durchquert. Sie entspringt in der Senne und mündet bei Emden in den Dollart und damit in die Nordsee. Eine weltweite Besonderheit ist ihre Rolle für den Schiffbau: Die Meyer Werft in Papenburg überführt ihre riesigen Kreuzfahrtschiffe über die gestaute Ems rückwärts in Richtung Meer – ein technisches und logistisches Meisterstück, das oft hunderte Schaulustige anlockt. Das Emsland ist zudem eine bedeutende Energieregion. Entlang des Flusses finden sich weite Moorlandschaften und wertvolle Feuchtgebiete, die unter Schutz stehen. Geographie K7 – Flussnutzung zwischen Logistik und Ökologie.",
      hu: "A(z) Ems egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Ems ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Gesamtlänge von 371 km von der Senne bis zur Nordsee-Mündung.", "Bekannt für die spektakulären Überführungen von Kreuzfahrtschiffen.", "Besitzt mit dem Ems-Sperrwerk ein wichtiges Küstenschutzbauwerk.", "Der Ems-Radweg gehört zu den flachsten und beliebtesten Radrouten.", "Dient als wichtige Wasserstraße für den Hafen Emden.", "Beherbergt seltene Fischarten wie den Stör durch Renaturierungsprojekte."],
      hu: [
        "A(z) Ems területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Ems tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Wo entspringt die Ems?",
                "a": "In der Senne bei Schloß Holte-Stukenbrock in Nordrhein-Westfalen."
            },
            {
                "q": "Was ist die Meyer Werft?",
                "a": "Eine weltbekannte Werft in Papenburg an der Ems, die riesige Kreuzfahrtschiffe baut."
            },
            {
                "q": "Wie gelangen die Kreuzfahrtschiffe zum Meer?",
                "a": "Sie werden bei der sogenannten 'Emsüberführung' rückwärts den Fluss hinunter zum Meer bugsiert."
            },
            {
                "q": "Welche Landschaften prägen den Lauf der Ems?",
                "a": "Das Emsland und Ostfriesland mit vielen Wiesen und Kanälen."
            }
        ],
        "hu": [
            {
                "q": "Hol ered az Ems?",
                "a": "Az észak-rajna-vesztfáliai Schloß Holte-Stukenbrock közelében, a Senne-ben."
            },
            {
                "q": "Mi az a Meyer Werft?",
                "a": "Egy világhírű hajógyár az Ems menti Papenburgban, ahol hatalmas óceánjárókat építenek."
            },
            {
                "q": "Hogyan jutnak el az óceánjárók a tengerhez?",
                "a": "Az úgynevezett 'Ems-átvezetés' során hátrafelé vontatják le őket a folyón a tengerig."
            },
            {
                "q": "Milyen tájak jellemzik az Ems folyását?",
                "a": "Az Emsland és Kelet-Frízföld, sok réttel és csatornával."
            }
        ],
        "ro": [
            {
                "q": "Unde izvorăște Ems?",
                "a": "În Senne lângă Schloß Holte-Stukenbrock în Renania de Nord-Westfalia."
            },
            {
                "q": "Ce este Meyer Werft?",
                "a": "Un șantier naval de renume mondial în Papenburg pe Ems, care construiește nave de croazieră uriașe."
            },
            {
                "q": "Cum ajung navele de croazieră la mare?",
                "a": "Ele sunt tractate cu spatele pe râu până la mare în cadrul așa-numitei 'transferări pe Ems'."
            },
            {
                "q": "Ce peisaje caracterizează cursul râului Ems?",
                "a": "Regiunea Emsland și Frizia de Est, cu multe pajiști și canale."
            }
        ],
        "en": [
            {
                "q": "Where does the Ems originate?",
                "a": "In the Senne near Schloß Holte-Stukenbrock in North Rhine-Westphalia."
            },
            {
                "q": "What is the Meyer Werft?",
                "a": "A world-famous shipyard in Papenburg on the Ems that builds huge cruise ships."
            },
            {
                "q": "How do the cruise ships get to the sea?",
                "a": "They are towed backward down the river to the sea during the so-called 'Ems conveyance'."
            },
            {
                "q": "What landscapes characterize the course of the Ems?",
                "a": "The Emsland and East Frisia with many meadows and canals."
            }
        ]
    },
  },

  // DE-SN (Sachsen) — 15 POIs
  {
    id: "city-chemnitz-extra",
    type: "city",
    parent: "DE-SN",
    coords: [12.9214, 50.8278],
    name: { de: "Chemnitz", hu: "Chemnitz", ro: "Chemnitz", en: "Chemnitz" },
    description: {
      de: "Chemnitz ist eine Industriestadt in Sachsen, die im 19. Jahrhundert als 'Sächsisches Manchester' bekannt war.",
      hu: "Chemnitz egy szász iparváros, amelyet a 19. században 'szász Manchesterként' ismertek.",
      ro: "Chemnitz este un oraș industrial din Saxonia, cunoscut în secolul al XIX-lea ca 'Manchester Saxon'.",
      en: "Chemnitz is an industrial city in Saxony known in the 19th century as the 'Saxon Manchester'.",
    },
    facts: {
      de: ["In der DDR als Karl-Marx-Stadt bekannt.", "Das Karl-Marx-Monument ist eines der größten Porträtmonumente der Welt.", "Europäische Kulturhauptstadt 2025."],
      hu: ["NDK idején Karl-Marx-Stadt volt a neve.", "A Karl-Marx-emlékmű a világ egyik legnagyobb portré-emlékműve.", "2025 európai kulturális fővárosa."],
      ro: ["Cunoscut ca Karl-Marx-Stadt în RDG.", "Monumentul Karl Marx este unul dintre cele mai mari monumente portret din lume.", "Capitală Culturală Europeană 2025."],
      en: ["Known as Karl-Marx-Stadt in the GDR.", "The Karl Marx Monument is one of the world's largest portrait monuments.", "European Capital of Culture 2025."],
    },
    descriptionAdvanced: {
      de: "Chemnitz, die drittgrößte Stadt Sachsens, ist ein bedeutender Industriestandort mit einer wechselvollen Geschichte. Im 19. Jahrhundert galt sie als das 'Sächsische Manchester', geprägt durch den Maschinenbau und die Textilindustrie. Während der DDR-Zeit trug die Stadt den Namen 'Karl-Marx-Stadt', wovon das monumentale Karl-Marx-Monument, der zweitgrößte freistehend modellierte Kopf der Welt, noch heute zeugt. Chemnitz hat sich nach der Wende erfolgreich als Zentrum für Hochtechnologie, Forschung und Kultur neu erfunden und wurde zur Europäischen Kulturhauptstadt 2025 gewählt. Die Stadt verbindet industrielle Moderne mit beeindruckenden Parkanlagen und dem Schlossberg-Ensemble. Geschichte K8 – Industrielle Revolution und urbaner Strukturwandel.",
      hu: "A(z) Chemnitz egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Chemnitz ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Wurde zur Europäischen Kulturhauptstadt des Jahres 2025 ernannt.", "Das Karl-Marx-Monument wiegt 40 Tonnen und ist 13 Meter hoch.", "Einst bedeutendstes Zentrum des deutschen Maschinenbaus (Richard Hartmann).", "Besitzt mit dem 'Versteinerten Wald' ein 290 Millionen Jahre altes Naturdenkmal.", "Wichtiger Automobilstandort mit dem VW-Motorenwerk Chemnitz.", "Die Kunstsammlungen Chemnitz gehören zu den renommiertesten Museen Ostdeutschlands."],
      hu: [
        "A(z) Chemnitz területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Chemnitz tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Welchen Namen trug Chemnitz früher?",
                "a": "Zwischen 1953 und 1990 hieß die Stadt Karl-Marx-Stadt."
            },
            {
                "q": "Was ist das Karl-Marx-Monument?",
                "a": "Ein riesiger bronzener Kopf von Karl Marx, der als Wahrzeichen der Stadt gilt."
            },
            {
                "q": "Was ist das 'Sächsische Manchester'?",
                "a": "Ein Beiname für Chemnitz im 19. Jahrhundert aufgrund seiner starken Textilindustrie."
            },
            {
                "q": "Gibt es ein bekanntes Industriemuseum?",
                "a": "Ja, das Sächsische Industriemuseum zeigt die Technikgeschichte der Region."
            }
        ],
        "hu": [
            {
                "q": "Mi volt Chemnitz korábbi neve?",
                "a": "1953 és 1990 között a város neve Karl-Marx-Stadt volt."
            },
            {
                "q": "Mi az a Karl-Marx-emlékmű?",
                "a": "Karl Marx hatalmas bronzfeje, amely a város jelképe."
            },
            {
                "q": "Mi az a 'Szász Manchester'?",
                "a": "Chemnitz beceneve a 19. században az erős textilipara miatt."
            },
            {
                "q": "Van ismert ipari múzeum?",
                "a": "Igen, a Szász Ipari Múzeum mutatja be a régió technikatörténetét."
            }
        ],
        "ro": [
            {
                "q": "Ce nume a purtat Chemnitz înainte?",
                "a": "Între 1953 și 1990, orașul s-a numit Karl-Marx-Stadt."
            },
            {
                "q": "Ce este Monumentul Karl Marx?",
                "a": "Un cap uriaș de bronz al lui Karl Marx, considerat simbolul orașului."
            },
            {
                "q": "Ce este 'Manchester-ul Saxon'?",
                "a": "O poreclă pentru Chemnitz în secolul al XIX-lea datorită industriei sale textile puternice."
            },
            {
                "q": "Există un muzeu industrial cunoscut?",
                "a": "Da, Muzeul Industrial Saxon prezintă istoria tehnologiei din regiune."
            }
        ],
        "en": [
            {
                "q": "What was the former name of Chemnitz?",
                "a": "Between 1953 and 1990, the city was named Karl-Marx-Stadt."
            },
            {
                "q": "What is the Karl Marx Monument?",
                "a": "A giant bronze head of Karl Marx, considered a landmark of the city."
            },
            {
                "q": "What is the 'Saxon Manchester'?",
                "a": "A nickname for Chemnitz in the 19th century due to its strong textile industry."
            },
            {
                "q": "Is there a well-known industrial museum?",
                "a": "Yes, the Saxon Museum of Industry displays the technical history of the region."
            }
        ]
    },
  },
  {
    id: "city-zwickau-extra",
    type: "city",
    parent: "DE-SN",
    coords: [12.4975, 50.7167],
    name: { de: "Zwickau", hu: "Zwickau", ro: "Zwickau", en: "Zwickau" },
    description: {
      de: "Zwickau ist eine sächsische Industriestadt, Geburtsort von Robert Schumann und bekannt für den Trabant.",
      hu: "Zwickau egy szász iparváros, Robert Schumann szülővárosa és a Trabant gyártásáról ismert.",
      ro: "Zwickau este un oraș industrial din Saxonia, locul de naștere al lui Robert Schumann și cunoscut pentru Trabant.",
      en: "Zwickau is a Saxon industrial city, birthplace of Robert Schumann and known for the Trabant.",
    },
    facts: {
      de: ["Geburtsstadt des Komponisten Robert Schumann (1810).", "Traditionelles Zentrum des Automobilbaus – hier wurde der Trabant hergestellt.", "Die Audi-Vorgängerunternehmen wurden hier gegründet."],
      hu: ["Robert Schumann zeneszerző szülővárosa (1810).", "Az autógyártás hagyományos központja – itt gyártották a Trabantot.", "Az Audi elődeinek alapítási helyszíne."],
      ro: ["Locul de naștere al compozitorului Robert Schumann (1810).", "Centrul tradițional al industriei auto – aici a fost fabricat Trabantul.", "Locul fondării predecesorilor Audi."],
      en: ["Birthplace of composer Robert Schumann (1810).", "Traditional center of automobile manufacturing – the Trabant was made here.", "Founding location of Audi's predecessor companies."],
    },
    descriptionAdvanced: {
      de: "Zwickau ist die Wiege der sächsischen Automobilindustrie und ein traditionsreiches Zentrum des Bergbaus. Hier gründete August Horch Anfang des 20. Jahrhunderts die Marken Horch und Audi, was den Grundstein für den Weltruf Sachsens als Autoland legte. In der DDR war Zwickau der Produktionsort des legendären Trabant. Heute ist das VW-Werk Zwickau ein Vorreiter der Elektromobilität in Europa. Kulturell ist die Stadt als Geburtsort des Komponisten der Romantik, Robert Schumann, bekannt. Die historische Altstadt mit den Priesterhäusern – den ältesten Wohnbauten Sachsens – und dem prächtigen Dom St. Marien zeugt von der reichen Geschichte als wohlhabende Bergbaustadt. Geschichte K7 – Mobilitätsgeschichte und industrielle Tradition.",
      hu: "A(z) Zwickau egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Zwickau ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Geburtsort der Marken Horch und Audi durch August Horch.", "Das August-Horch-Museum dokumentiert 120 Jahre Automobilgeschichte.", "Einstige 'Kohlenstadt' mit einer über 800-jährigen Bergbautradition.", "Produktionsort des Trabant 601 (über 3 Millionen Einheiten gefertigt).", "Geburtsstadt des berühmten Komponisten Robert Schumann (1810).", "Die 'Priesterhäuser' am Dom gehören zu den ältesten Gebäuden Deutschlands."],
      hu: [
        "A(z) Zwickau területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Zwickau tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Welches berühmte Auto wurde in Zwickau gebaut?",
                "a": "Der Trabant, das bekannteste Auto der DDR."
            },
            {
                "q": "Was ist das August Horch Museum?",
                "a": "Ein Automobilmuseum, das die Geschichte von Horch, Audi und dem Trabant zeigt."
            },
            {
                "q": "Welcher Komponist wurde in Zwickau geboren?",
                "a": "Robert Schumann wurde 1810 in Zwickau geboren."
            },
            {
                "q": "Gibt es ein Denkmal für Robert Schumann?",
                "a": "Ja, ein Denkmal und sein Geburtshaus, das heute ein Museum ist."
            }
        ],
        "hu": [
            {
                "q": "Melyik híres autót gyártották Zwickauban?",
                "a": "A Trabant, az NDK legismertebb autója."
            },
            {
                "q": "Mi az August Horch Múzeum?",
                "a": "Egy autómúzeum, amely a Horch, az Audi és a Trabant történetét mutatja be."
            },
            {
                "q": "Melyik zeneszerző született Zwickauban?",
                "a": "Robert Schumann 1810-ben született Zwickauban."
            },
            {
                "q": "Van emlékmű Robert Schumannnak?",
                "a": "Igen, egy emlékmű és a szülőháza, amely ma múzeum."
            }
        ],
        "ro": [
            {
                "q": "Ce mașină celebră a fost construită în Zwickau?",
                "a": "Trabant, cea mai cunoscută mașină din RDG."
            },
            {
                "q": "Ce este Muzeul August Horch?",
                "a": "Un muzeu auto care prezintă istoria Horch, Audi și a Trabantului."
            },
            {
                "q": "Ce compozitor s-a născut în Zwickau?",
                "a": "Robert Schumann s-a născut în Zwickau în 1810."
            },
            {
                "q": "Există un monument pentru Robert Schumann?",
                "a": "Da, un monument și casa sa natală, care astăzi este muzeu."
            }
        ],
        "en": [
            {
                "q": "Which famous car was built in Zwickau?",
                "a": "The Trabant, the most famous car of the GDR."
            },
            {
                "q": "What is the August Horch Museum?",
                "a": "An automobile museum displaying the history of Horch, Audi, and the Trabant."
            },
            {
                "q": "Which composer was born in Zwickau?",
                "a": "Robert Schumann was born in Zwickau in 1810."
            },
            {
                "q": "Is there a monument to Robert Schumann?",
                "a": "Yes, a monument and his birthplace, which is now a museum."
            }
        ]
    },
  },
  {
    id: "mnt-erzgebirge-extra",
    type: "mountain",
    parent: "DE-SN",
    coords: [13.0000, 50.4500],
    name: { de: "Erzgebirge", hu: "Érchegység", ro: "Munții Metaliferi", en: "Ore Mountains" },
    description: {
      de: "Das Erzgebirge ist ein Mittelgebirge an der Grenze zu Tschechien, bekannt für Bergbau und Holzschnitzkunst.",
      hu: "Az Érchegység egy Csehországgal határos középhegység, bányászatáról és fafaragó-művészetéről ismert.",
      ro: "Munții Metaliferi sunt un lanț muntos la granița cu Republica Cehă, cunoscuți pentru minerit și arta sculptorilor în lemn.",
      en: "The Ore Mountains are a low mountain range bordering the Czech Republic, known for mining and woodcarving.",
    },
    facts: {
      de: ["Der Fichtelberg (1215 m) ist der höchste sächsische Berg.", "Bekannt für Weihnachtsschmuck, Nussknacker und Räuchermänner.", "UNESCO-Welterbe 'Montanregion Erzgebirge/Krušnohoří' seit 2019."],
      hu: ["A Fichtelberg (1215 m) Szászország legmagasabb hegye.", "Karácsonyfa-díszekről, diótörőkről és füstös emberekről ismert.", "2019 óta UNESCO világörökség 'Montanregion Erzgebirge/Krušnohoří'."],
      ro: ["Fichtelberg (1215 m) este cel mai înalt munte saxon.", "Cunoscut pentru ornamente de Crăciun, spărgătoare de nuci și figurine fumătoare.", "Patrimoniu Mondial UNESCO 'Montanregion Erzgebirge/Krušnohoří' din 2019."],
      en: ["Fichtelberg (1215 m) is the highest Saxon mountain.", "Known for Christmas ornaments, nutcrackers, and incense smokers.", "UNESCO World Heritage 'Montanregion Erzgebirge/Krušnohoří' since 2019."],
    },
    descriptionAdvanced: {
      de: "Das Erzgebirge an der Grenze zwischen Sachsen und Böhmen ist eine weltweit einzigartige Kulturlandschaft, die über 800 Jahre durch den Bergbau geprägt wurde. Der Reichtum an Silber, Zinn und Uran gab der Region ihren Namen und machte Sachsen einst zu einem der wohlhabendsten Staaten Europas. Seit 2019 gehört die 'Montanregion Erzgebirge' zum UNESCO-Weltkulturerbe. Aus dem Bergbau entwickelte sich auch die berühmte Handwerkskunst des Schnitzens und Drechselns (Schwibbögen, Nussknacker). Das Gebirge mit seinem höchsten Gipfel, dem Fichtelberg (1.215 m), ist heute zudem ein bedeutendes Wander- und Wintersportgebiet und bewahrt mit seinen Traditionen wie der Bergparade eine lebendige Identität. Geschichte K6 – Montanwesen und kulturelle Identität.",
      hu: "A(z) Erzgebirge egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Erzgebirge ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["UNESCO-Weltkulturerbe Montanregion Erzgebirge/Krušnohoří seit 2019.", "Höchster Berg in Sachsen ist der Fichtelberg mit 1.215 Metern.", "Weltzentrum für traditionelle Holzkunst und Weihnachtsdekoration.", "Namensgebend durch den enormen Reichtum an Erzen (Silber, Zinn).", "Wichtigster Uranlieferant der Sowjetunion während des Kalten Krieges (SDAG Wismut).", "Beherbergt mit Annaberg-Buchholz eine der bedeutendsten Bergstädte."],
      hu: [
        "A(z) Erzgebirge területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Erzgebirge tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Warum heißt das Erzgebirge so?",
                "a": "Wegen der reichen Erzvorkommen (Silber, Zinn, Eisen), die dort jahrhundertelang abgebaut wurden."
            },
            {
                "q": "Was ist die 'Erzgebirgische Volkskunst'?",
                "a": "Bekannte Holzschnitzereien wie Nussknacker, Räuchermänner und Schwibbögen."
            },
            {
                "q": "Was ist die Bergparade?",
                "a": "Ein traditioneller Umzug von Bergleuten in historischen Uniformen, meist in der Adventszeit."
            },
            {
                "q": "Welcher ist der höchste Berg auf deutscher Seite?",
                "a": "Der Fichtelberg mit 1215 Metern."
            }
        ],
        "hu": [
            {
                "q": "Miért hívják Érchegységnek?",
                "a": "A gazdag érclelőhelyek (ezüst, ón, vas) miatt, amelyeket évszázadokon át bányásztak ott."
            },
            {
                "q": "Mi az 'érchegységi népművészet'?",
                "a": "Ismert fafaragások, mint a diótörők, füstölő figurák és gyertyatartók (Schwibbögen)."
            },
            {
                "q": "Mi a bányászfelvonulás?",
                "a": "Bányászok hagyományos felvonulása történelmi egyenruhában, általában advent idején."
            },
            {
                "q": "Melyik a legmagasabb hegy a német oldalon?",
                "a": "A Fichtelberg, 1215 méterrel."
            }
        ],
        "ro": [
            {
                "q": "De ce se numește Erzgebirge (Munții Metaliferi)?",
                "a": "Datorită zăcămintelor bogate de minereu (argint, cositor, fier) care au fost extrase acolo timp de secole."
            },
            {
                "q": "Ce este 'Arta Populară din Erzgebirge'?",
                "a": "Cunoscute sculpturi în lemn, cum ar fi spărgătoarele de nuci, figurinele fumătoare și arcadele luminoase."
            },
            {
                "q": "Ce este parada minerilor?",
                "a": "O paradă tradițională a minerilor în uniforme istorice, de obicei în perioada Adventului."
            },
            {
                "q": "Care este cel mai înalt munte de pe partea germană?",
                "a": "Fichtelberg, având 1215 metri."
            }
        ],
        "en": [
            {
                "q": "Why is it called the Ore Mountains?",
                "a": "Because of the rich ore deposits (silver, tin, iron) that were mined there for centuries."
            },
            {
                "q": "What is 'Ore Mountain Folk Art'?",
                "a": "Famous woodcarvings such as nutcrackers, incense smokers, and candle arches."
            },
            {
                "q": "What is the miner's parade?",
                "a": "A traditional parade of miners in historic uniforms, usually held during the Advent season."
            },
            {
                "q": "Which is the highest mountain on the German side?",
                "a": "The Fichtelberg at 1215 meters."
            }
        ]
    },
  },
  {
    id: "mnt-saechsische-schweiz-extra",
    type: "mountain",
    parent: "DE-SN",
    coords: [14.1833, 50.9167],
    name: { de: "Sächsische Schweiz", hu: "Szász Svájc", ro: "Elveția Saxonă", en: "Saxon Switzerland" },
    description: {
      de: "Die Sächsische Schweiz ist ein Sandsteingebirge in Sachsen mit spektakulären Felsformationen.",
      hu: "A Szász Svájc egy szász homokkőhegység látványos sziklaképződményekkel.",
      ro: "Elveția Saxonă este un masiv de gresie din Saxonia cu formațiuni stâncoase spectaculoase.",
      en: "Saxon Switzerland is a sandstone mountain range in Saxony with spectacular rock formations.",
    },
    facts: {
      de: ["Der Nationalpark Sächsische Schweiz schützt die Felslandschaft.", "Die Bastei ist das bekannteste Ausflugsziel.", "Beliebtes Gebiet für Klettern und Wandern."],
      hu: ["A Szász Svájc Nemzeti Park védi a sziklatájat.", "A Bastei a legismertebb kirándulóhely.", "Kedvelt hegymászó- és túrázó terület."],
      ro: ["Parcul Național Elveția Saxonă protejează peisajul stâncos.", "Bastei este cea mai cunoscută destinație turistică.", "Zonă populară pentru alpinism și drumeții."],
      en: ["Saxon Switzerland National Park protects the rocky landscape.", "The Bastei is the most famous excursion destination.", "A popular area for climbing and hiking."],
    },
    descriptionAdvanced: {
      de: "Die Sächsische Schweiz ist der deutsche Teil des Elbsandsteingebirges und eine der spektakulärsten Naturlandschaften Mitteleuropas. Charakteristisch sind die bizarren Felsformationen, tiefen Schluchten und markanten Tafelberge wie der Lilienstein. Das Wahrzeichen der Region ist die Basteibrücke, die einen atemberaubenden Blick über das Elbtal bietet. Die Landschaft wurde durch Millionen Jahre dauernde Erosion des Kreidesandsteins geformt und inspirierte Künstler der Romantik wie Caspar David Friedrich. Heute ist das Gebiet als Nationalpark geschützt und gilt als eines der anspruchsvollsten Wander- und Klettergebiete Deutschlands, wobei hier die weltweit einzigartige Sächsische Kletterregel ihren Ursprung hat. Geographie K6 – Erosion, Gesteinskunde und Naturschutz.",
      hu: "A(z) Sächsische Schweiz egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Sächsische Schweiz ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Besteht aus kreidezeitlichem Sandstein, geformt durch Erosion.", "Einziges Felsennationalparkgebiet in ganz Deutschland.", "Die Basteibrücke ist die bekannteste Touristenattraktion der Region.", "Wiege des freien Kletterns mit über 1.100 Klettergipfeln.", "Wirkungsstätte der Maler der Romantik (Caspar David Friedrich).", "Der Lilienstein ist der einzige Tafelberg rechts der Elbe."],
      hu: [
        "A(z) Sächsische Schweiz területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Sächsische Schweiz tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Was ist die Bastei?",
                "a": "Eine berühmte Felsformation mit einer steinernen Brücke und weitem Blick über das Elbtal."
            },
            {
                "q": "Kann man in der Sächsischen Schweiz klettern?",
                "a": "Ja, es ist eines der traditionsreichsten Klettergebiete der Welt (Sächsisches Bergsteigen)."
            },
            {
                "q": "Was ist die Festung Königstein?",
                "a": "Eine der größten Bergfestungen Europas, auf einem Tafelberg gelegen."
            },
            {
                "q": "Wie ist das Gebirge entstanden?",
                "a": "Durch Erosion von Ablagerungen eines kreidezeitlichen Meeres."
            }
        ],
        "hu": [
            {
                "q": "Mi az a Bastei?",
                "a": "Egy híres sziklaképződmény kőhíddal és tágas kilátással az Elba-völgyre."
            },
            {
                "q": "Lehet mászni a Szász Svájcban?",
                "a": "Igen, ez a világ egyik legnagyobb hagyományú mászóterülete (szász hegymászás)."
            },
            {
                "q": "Mi a Königstein erőd?",
                "a": "Európa egyik legnagyobb hegyi erődje, egy táblahegyen található."
            },
            {
                "q": "Hogyan keletkezett a hegység?",
                "a": "Egy kréta kori tenger üledékeinek eróziója révén."
            }
        ],
        "ro": [
            {
                "q": "Ce este Bastei?",
                "a": "O faimoasă formațiune stâncoasă cu un pod de piatră și o vedere largă asupra văii Elbei."
            },
            {
                "q": "Se poate face alpinism în Elveția Saxonă?",
                "a": "Da, este una dintre cele mai tradiționale zone de alpinism din lume (alpinismul saxon)."
            },
            {
                "q": "Ce este Fortăreața Königstein?",
                "a": "Una dintre cele mai mari cetăți montane din Europa, situată pe un munte tabular."
            },
            {
                "q": "Cum s-a format masivul muntos?",
                "a": "Prin eroziunea depozitelor unei mări din perioada cretacică."
            }
        ],
        "en": [
            {
                "q": "What is the Bastei?",
                "a": "A famous rock formation with a stone bridge and wide views over the Elbe Valley."
            },
            {
                "q": "Can you go climbing in Saxon Switzerland?",
                "a": "Yes, it is one of the world's most traditional climbing areas (Saxon climbing)."
            },
            {
                "q": "What is Königstein Fortress?",
                "a": "One of Europe's largest hilltop fortresses, situated on a table mountain."
            },
            {
                "q": "How was the mountain range formed?",
                "a": "Through the erosion of deposits from a Cretaceous sea."
            }
        ]
    },
  },
  {
    id: "river-elbe-sachsen-extra",
    type: "river",
    parent: "DE-SN",
    coords: [13.7400, 51.0500],
    name: { de: "Elbe (Sachsen)", hu: "Elba (Szászország)", ro: "Elba (Saxonia)", en: "Elbe (Saxony)" },
    description: {
      de: "Die Elbe durchfließt Sachsen von der tschechischen Grenze durch Dresden und prägt die Kulturlandschaft.",
      hu: "Az Elba Szászországon folyik át a cseh határon Drezdán át, és meghatározza a kultúrtájat.",
      ro: "Elba curge prin Saxonia de la granița cehă prin Dresda, modelând peisajul cultural.",
      en: "The Elbe flows through Saxony from the Czech border through Dresden, shaping the cultural landscape.",
    },
    facts: {
      de: ["Das Elbtal in Dresden ist als Kulturlandschaft von herausragendem Wert.", "Sächsische Schweiz entstand durch Elbeerosion über Millionen von Jahren.", "Wichtige Schifffahrtsroute seit dem Mittelalter."],
      hu: ["A drezdai Elba-völgy kiemelkedő értékű kultúrtájként ismert.", "A Szász Svájc az Elba millió éves eróziójából keletkezett.", "Fontos hajózási útvonal a középkor óta."],
      ro: ["Valea Elbei din Dresda este de o valoare remarcabilă ca peisaj cultural.", "Elveția Saxonă a fost formată prin eroziunea Elbei de-a lungul a milioane de ani.", "Rută importantă de navigație de la Evul Mediu."],
      en: ["The Elbe valley in Dresden is of outstanding value as a cultural landscape.", "Saxon Switzerland was created by Elbe erosion over millions of years.", "An important shipping route since the Middle Ages."],
    },
    descriptionAdvanced: {
      de: "Die Elbe durchfließt Sachsen auf einer Länge von rund 180 Kilometern und bildet das Rückgrat der sächsischen Kultur- und Wirtschaftsgeschichte. Von der Sächsischen Schweiz kommend, weitet sich das Tal bei Dresden zum weiten Elbkessel und passiert das berühmte Weinanbaugebiet um Meißen. Der Fluss war jahrhundertelang die Hauptschlagader für den Handel mit Böhmen und dem Norden. Die Elbwiesen in Dresden sind ein einzigartiges Flächendenkmal, das Natur und Barockarchitektur verbindet. In Meißen ermöglichte der Elbtransport einst den Export des berühmten Porzellans. Heute ist die Elbe ein wichtiger Naturraum mit einer faszinierenden Tierwelt in den Auenlandschaften und ein Magnet für den Tourismus. Geographie K7 – Flusslandschaften als Kultur- und Wirtschaftsraum.",
      hu: "A(z) Elbe (Sachsen) egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Elbe (Sachsen) ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Durchfließt Sachsen auf 180 km von Schmilka bis nach Torgau.", "Bildet bei Meißen eines der nördlichsten Weinanbaugebiete der Welt.", "Wichtigste Wasserstraße für den Güterverkehr zwischen Prag und Hamburg.", "Passiert das Elbtal in Dresden, ein Zentrum des europäischen Barock.", "Die Elbwiesen in Dresden umfassen ca. 400 Hektar unbebaute Fläche.", "Wichtiger Lebensraum für Biber und seltene Zugvogelarten."],
      hu: [
        "A(z) Elbe (Sachsen) területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Elbe (Sachsen) tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Woher kommt die Elbe?",
                "a": "Sie entspringt im Riesengebirge in Tschechien (Labe)."
            },
            {
                "q": "Was ist das Elbtal in Dresden?",
                "a": "Ein kulturell bedeutender Flussabschnitt, der früher UNESCO-Weltkulturerbe war."
            },
            {
                "q": "Kann man auf der Elbe mit historischen Schiffen fahren?",
                "a": "Ja, die Sächsische Dampfschifffahrt betreibt die älteste und größte Raddampferflotte der Welt."
            },
            {
                "q": "Welche Gefahr geht oft von der Elbe aus?",
                "a": "Starke Hochwasser können weite Teile der angrenzenden Gebiete überfluten."
            }
        ],
        "hu": [
            {
                "q": "Honnan ered az Elba?",
                "a": "A csehországi Óriás-hegységben ered (Labe)."
            },
            {
                "q": "Mi az a drezdai Elba-völgy?",
                "a": "Egy kulturálisan jelentős folyószakasz, amely korábban UNESCO világörökség volt."
            },
            {
                "q": "Lehet az Elbán történelmi hajókkal utazni?",
                "a": "Igen, a Szász Gőzhajózás üzemelteti a világ legrégebbi és legnagyobb lapátkerekes gőzhajó-flottáját."
            },
            {
                "q": "Milyen veszély forrása gyakran az Elba?",
                "a": "Az erős áradások elönthetik a környező területek nagy részét."
            }
        ],
        "ro": [
            {
                "q": "De unde vine Elba?",
                "a": "Izvorăște în Munții Karkonosze din Cehia (Labe)."
            },
            {
                "q": "Ce este Valea Elbei din Dresda?",
                "a": "O secțiune de râu importantă din punct de vedere cultural, care a fost anterior în Patrimoniul UNESCO."
            },
            {
                "q": "Se poate naviga pe Elba cu nave istorice?",
                "a": "Da, Compania Saxonă de Navigație cu Abur operează cea mai veche și mai mare flotă de nave cu pápale din lume."
            },
            {
                "q": "Ce pericol provine adesea de la Elba?",
                "a": "Inundațiile puternice pot acoperi părți vaste din zonele adiacente."
            }
        ],
        "en": [
            {
                "q": "Where does the Elbe come from?",
                "a": "It originates in the Giant Mountains in the Czech Republic (Labe)."
            },
            {
                "q": "What is the Elbe Valley in Dresden?",
                "a": "A culturally significant stretch of the river that was formerly a UNESCO World Heritage site."
            },
            {
                "q": "Can you travel on the Elbe with historic ships?",
                "a": "Yes, Saxon Steamship Navigation operates the world's oldest and largest fleet of paddle-wheel steamers."
            },
            {
                "q": "What danger often comes from the Elbe?",
                "a": "Strong floods can inundate large parts of the adjacent areas."
            }
        ]
    },
  },
  {
    id: "hist-meissen-extra",
    type: "historical",
    parent: "DE-SN",
    coords: [13.4703, 51.1622],
    name: { de: "Meißen", hu: "Meissen", ro: "Meissen", en: "Meissen" },
    description: {
      de: "Meißen ist eine historische Stadt an der Elbe, bekannt für die älteste Porzellanmanufaktur Europas.",
      hu: "Meissen egy történelmi város az Elba mentén, Európa legrégebbi porcelánmanufaktúrájáról ismert.",
      ro: "Meissen este un oraș istoric pe Elba, cunoscut pentru cea mai veche manufactură de porțelan din Europa.",
      en: "Meissen is a historic city on the Elbe, known for Europe's oldest porcelain manufactory.",
    },
    facts: {
      de: ["Die Meissner Porzellanmanufaktur wurde 1710 gegründet.", "Das Albrechtsburg-Schloss war zeitweise Heimat der geheimen Porzellanrezeptur.", "Weißes Gold nennt man das berühmte Meissner Porzellan."],
      hu: ["A meisseni porcelánmanufaktúra 1710-ben alapult.", "Az Albrechtsburg kastély egy ideig a titkos porcelánreceptnek adott otthont.", "A híres meisseni porcelánt 'fehér aranynak' nevezik."],
      ro: ["Manufactura de porțelan Meissen a fost fondată în 1710.", "Castelul Albrechtsburg a găzduit temporar formula secretă a porțelanului.", "Porțelanul faimos Meissen este numit 'aur alb'."],
      en: ["The Meissen Porcelain Manufactory was founded in 1710.", "Albrechtsburg Castle temporarily housed the secret porcelain formula.", "The famous Meissen porcelain is called 'white gold'."],
    },
    descriptionAdvanced: {
      de: "Meißen, die 'Wiege Sachsens', ist weltweit berühmt für die erste europäische Porzellanmanufaktur, die 1710 von August dem Starken gegründet wurde. Die gekreuzten Schwerter sind das älteste kontinuierlich genutzte Markenzeichen der Welt. Die Stadt wird von der Albrechtsburg, dem ersten deutschen Schlossbau des 15. Jahrhunderts, und dem gotischen Dom überragt. Meißen blieb im Zweiten Weltkrieg weitgehend verschont und besitzt eine prachtvolle mittelalterliche Altstadt. Der Weinbau an den steilen Elbhängen rund um die Stadt hat eine über 850-jährige Tradition und bringt exzellente sächsische Weine hervor. Meißen vereint in einzigartiger Weise höfische Tradition, Kunstfertigkeit und sächsische Geschichte. Kunstgeschichte K7 – Europäische Porzellankunst und Schlossbaukunst.",
      hu: "A(z) Meißen egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Meißen ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Sitz der Staatlichen Porzellan-Manufaktur Meissen seit 1710.", "Die Albrechtsburg gilt als das älteste Residenzschloss Deutschlands.", "Erstes europäisches Hartporzellan durch Johann Friedrich Böttger erfunden.", "Der Meißner Dom ist ein bedeutendes Zeugnis der reinen Gotik.", "Zentrum des kleinsten deutschen Weinanbaugebiets (Sachsen).", "Das Markenzeichen der gekreuzten Schwerter wird seit 1722 verwendet."],
      hu: [
        "A(z) Meißen területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Meißen tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Wann wurde die Porzellanmanufaktur gegründet?",
                "a": "Im Jahr 1710 auf Befehl von August dem Starken."
            },
            {
                "q": "Was ist das Meissener Markenzeichen?",
                "a": "Die gekreuzten blauen Schwerter."
            },
            {
                "q": "Was ist die Albrechtsburg?",
                "a": "Ein Schloss in Meißen, das als der erste deutsche Schlossbau gilt."
            },
            {
                "q": "Gibt es einen Dom in Meißen?",
                "a": "Ja, der Meißner Dom St. Johannis und St. Donatus ist ein bedeutendes Bauwerk der Gotik."
            }
        ],
        "hu": [
            {
                "q": "Mikor alapították a porcelánmanufaktúrát?",
                "a": "1710-ben, Erős Ágost parancsára."
            },
            {
                "q": "Mi a meisseni védjegy?",
                "a": "A keresztezett kék kardok."
            },
            {
                "q": "Mi az az Albrechtsburg?",
                "a": "Egy kastély Meissenben, amelyet az első német kastélyépületnek tartanak."
            },
            {
                "q": "Van dóm Meissenben?",
                "a": "Igen, a meisseni Szent János és Szent Donát dóm a gótika egyik jelentős épülete."
            }
        ],
        "ro": [
            {
                "q": "Când a fost fondată manufactura de porțelan?",
                "a": "În anul 1710, din ordinul lui August cel Puternic."
            },
            {
                "q": "Care este emblema Meissen?",
                "a": "Săbiile albastre încrucișate."
            },
            {
                "q": "Ce este Albrechtsburg?",
                "a": "Un castel din Meissen, considerat prima construcție de castel din Germania."
            },
            {
                "q": "Există o catedrală în Meissen?",
                "a": "Da, Catedrala din Meissen Sf. Ioan și Sf. Donatus este o construcție gotică importantă."
            }
        ],
        "en": [
            {
                "q": "When was the porcelain manufactory founded?",
                "a": "In 1710 by order of Augustus the Strong."
            },
            {
                "q": "What is the Meissen trademark?",
                "a": "The crossed blue swords."
            },
            {
                "q": "What is the Albrechtsburg?",
                "a": "A castle in Meissen considered the first German castle building."
            },
            {
                "q": "Is there a cathedral in Meissen?",
                "a": "Yes, Meissen Cathedral of St. John and St. Donatus is a significant Gothic building."
            }
        ]
    },
  },
  {
    id: "landmark-voelkerschlachtdenkmal-extra",
    type: "landmark",
    parent: "DE-SN",
    coords: [12.4131, 51.3120],
    name: { de: "Völkerschlachtdenkmal Leipzig", hu: "Völkerschlachtdenkmal Lipcse", ro: "Monumentul Bătăliei Națiunilor Leipzig", en: "Monument to the Battle of the Nations" },
    description: {
      de: "Das Völkerschlachtdenkmal in Leipzig erinnert an die Völkerschlacht von 1813, in der Napoleon besiegt wurde.",
      hu: "A lipcsei Völkerschlachtdenkmal az 1813-as népek csatájára emlékeztet, amelyben Napóleont legyőzték.",
      ro: "Monumentul Bătăliei Națiunilor din Leipzig comemorează Bătălia Națiunilor din 1813, în care Napoleon a fost înfrânt.",
      en: "The Monument to the Battle of the Nations in Leipzig commemorates the 1813 battle in which Napoleon was defeated.",
    },
    facts: {
      de: ["Mit 91 m eines der größten Denkmäler Europas.", "Eingeweiht 1913 zum 100. Jahrestag der Schlacht.", "Die Völkerschlacht war eine der größten Schlachten der Napoleonischen Kriege."],
      hu: ["91 m-rel Európa egyik legnagyobb emlékmüve.", "1913-ban avatták fel, a csata 100. évfordulóján.", "A népek csatája a napóleoni háborúk egyik legnagyobb ütközete volt."],
      ro: ["Cu 91 m, unul dintre cele mai mari monumente din Europa.", "Inaugurat în 1913, la centenarul bătăliei.", "Bătălia Națiunilor a fost una dintre cele mai mari bătălii ale Războaielor Napoleoniene."],
      en: ["At 91 m, one of the largest monuments in Europe.", "Inaugurated in 1913 on the 100th anniversary of the battle.", "The Battle of the Nations was one of the largest battles of the Napoleonic Wars."],
    },
    descriptionAdvanced: {
      de: "Das Völkerschlachtdenkmal in Leipzig ist eines der gewaltigsten Denkmäler Europas und erinnert an die entscheidende Schlacht gegen Napoleon im Jahr 1813. Mit einer Höhe von 91 Metern ist es ein monumentales Wahrzeichen der Stadt. Eingeweiht im Jahr 1913 zum 100. Jahrestag der Schlacht, beeindruckt der Bau durch seine wuchtige Architektur des Historismus und die monumentalen Wächterfiguren im Inneren. In der Ruhmeshalle symbolisieren riesige Statuen die Tugenden des Volkes. Von der Aussichtsplattform bietet sich ein weiter Blick über Leipzig und das Umland. Das Denkmal ist nicht nur ein Gedenkort für über 100.000 Gefallene, sondern auch ein architektonisches Zeugnis des deutschen Nationalgefühls vor dem Ersten Weltkrieg. Geschichte K7 – Die Napoleonischen Kriege und ihre Folgen.",
      hu: "A(z) Völkerschlachtdenkmal Leipzig egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Völkerschlachtdenkmal Leipzig ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Größtes Denkmalbauwerk Europas mit einer Höhe von 91 Metern.", "Erinnert an die Völkerschlacht bei Leipzig vom 16. bis 19. Oktober 1813.", "Erbaut aus rund 26.500 Blöcken aus Granitporphyr aus dem Erzgebirge.", "Die Aussichtsplattform erreicht man über genau 500 Treppenstufen.", "Besitzt eine Krypta mit 16 monumentalen Kriegerstatuen als Totenwache.", "Das vorgelagerte Wasserbecken wird 'See der Tränen' genannt."],
      hu: [
        "A(z) Völkerschlachtdenkmal Leipzig területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Völkerschlachtdenkmal Leipzig tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Was geschah in der Völkerschlacht?",
                "a": "Die verbündeten Heere Russlands, Preußens, Österreichs und Schwedens besiegten Napoleon."
            },
            {
                "q": "Kann man das Denkmal besteigen?",
                "a": "Ja, es gibt eine Aussichtsplattform an der Spitze mit weitem Blick über Leipzig."
            },
            {
                "q": "Was ist die Krypta?",
                "a": "Ein runder Raum im Inneren mit acht Statuen, die als 'Totenwächter' bekannt sind."
            },
            {
                "q": "Gibt es dort eine gute Akustik?",
                "a": "Ja, das Denkmal ist für seine außergewöhnliche Akustik und Chorkonzerte bekannt."
            }
        ],
        "hu": [
            {
                "q": "Mi történt a népek csatájában?",
                "a": "Oroszország, Poroszország, Ausztria és Svédország szövetséges seregei legyőzték Napóleont."
            },
            {
                "q": "Fel lehet menni az emlékműbe?",
                "a": "Igen, a tetején van egy kilátóterasz, ahonnan tágas kilátás nyílik Lipcsére."
            },
            {
                "q": "Mi az a kripta?",
                "a": "Egy belső kerek terem nyolc szoborral, amelyeket 'halottőröknek' hívnak."
            },
            {
                "q": "Jó ott az akusztika?",
                "a": "Igen, az emlékmű híres a rendkívüli akusztikájáról és a kóruskoncertekről."
            }
        ],
        "ro": [
            {
                "q": "Ce s-a întâmplat în Bătălia Națiunilor?",
                "a": "Armatele aliate ale Rusiei, Prusiei, Austriei și Suediei l-au învins pe Napoleon."
            },
            {
                "q": "Se poate urca în monument?",
                "a": "Da, există o platformă de observație în vârf, cu o vedere largă asupra orașului Leipzig."
            },
            {
                "q": "Ce este cripta?",
                "a": "O încăpere circulară în interior cu opt statui cunoscute sub numele de 'păzitori ai morților'."
            },
            {
                "q": "Există o acustică bună acolo?",
                "a": "Da, monumentul este cunoscut pentru acustica sa extraordinară și concertele corale."
            }
        ],
        "en": [
            {
                "q": "What happened in the Battle of the Nations?",
                "a": "The allied armies of Russia, Prussia, Austria, and Sweden defeated Napoleon."
            },
            {
                "q": "Can you climb the monument?",
                "a": "Yes, there is an observation platform at the top with a wide view over Leipzig."
            },
            {
                "q": "What is the crypt?",
                "a": "A circular room inside with eight statues known as 'watchers of the dead'."
            },
            {
                "q": "Is there good acoustics there?",
                "a": "Yes, the monument is known for its extraordinary acoustics and choral concerts."
            }
        ]
    },
  },
  {
    id: "landmark-augustusbruecke-extra",
    type: "landmark",
    parent: "DE-SN",
    coords: [13.7340, 51.0536],
    name: { de: "Augustusbrücke Dresden", hu: "Ágoston-híd Drezda", ro: "Podul Augustus Dresda", en: "Augustus Bridge Dresden" },
    description: {
      de: "Die Augustusbrücke ist eine historische Steinbrücke über die Elbe in Dresden, ein Symbol der Stadt.",
      hu: "Az Ágoston-híd egy történelmi kőhíd a drezdai Elbán, a város egyik jelképe.",
      ro: "Podul Augustus este un pod istoric de piatră peste Elba din Dresda, un simbol al orașului.",
      en: "The Augustus Bridge is a historic stone bridge over the Elbe in Dresden, a symbol of the city.",
    },
    facts: {
      de: ["Erste Steinbrücke über die Elbe in Sachsen, ursprünglich 1319 erbaut.", "Zerstört im Zweiten Weltkrieg, nach historischem Vorbild wiederaufgebaut.", "Verbindet die Altstadt mit der Neustadt."],
      hu: ["Az Elba feletti első kőhíd Szászországban, eredetileg 1319-ben épült.", "A második világháborúban megsemmisült, majd az eredeti mintájára újjáépítették.", "Az óvárost összeköti az újvárossal."],
      ro: ["Primul pod de piatră peste Elba din Saxonia, construit inițial în 1319.", "Distrus în Al Doilea Război Mondial, reconstruit după modelul istoric.", "Leagă Orașul Vechi de Orașul Nou."],
      en: ["First stone bridge over the Elbe in Saxony, originally built in 1319.", "Destroyed in World War II, rebuilt following historical design.", "Connects the Old Town with the New Town."],
    },
    descriptionAdvanced: {
      de: "Die Augustusbrücke in Dresden ist die historisch bedeutendste Verbindung über die Elbe und verbindet die barocke Altstadt mit der Neustadt. Die heutige Brücke aus Beton mit einer Verkleidung aus Sandstein wurde 1907-1910 nach Plänen von Wilhelm Kreis errichtet und ersetzte den berühmten Vorgängerbau von Matthäus Daniel Pöppelmann aus der Zeit Augusts des Starken. Die Brücke ist ein zentraler Bestandteil der 'Canaletto-Aussicht' und bietet einen ikonischen Blick auf die Frauenkirche, den Zwinger und die Semperoper. In den letzten Jahren wurde sie umfassend saniert und ist heute weitgehend dem öffentlichen Nahverkehr und Fußgängern vorbehalten, was sie zu einer wichtigen Flaniermeile der Stadt macht. Geographie K7 – Stadtentwicklung und historische Verkehrswege.",
      hu: "A(z) Augustusbrücke Dresden egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Augustusbrücke Dresden ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Wichtigste Verbindung zwischen Dresdner Altstadt und Neustadt.", "Heutiges Bauwerk ist die fünfte Elbbrücke an dieser Stelle.", "Wurde im Jahr 1910 fertiggestellt und trägt den Namen Augusts des Starken.", "Die Brücke ist exakt 328 Meter lang und 18 Meter breit.", "Besteht aus neun Bögen und ist mit Sandstein verkleidet.", "Bietet den berühmten Blick auf die Dresdner Stadtsilhouette ('Canaletto-Blick')."],
      hu: [
        "A(z) Augustusbrücke Dresden területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Augustusbrücke Dresden tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Wer gab der Brücke ihren Namen?",
                "a": "August der Starke, Kurfürst von Sachsen."
            },
            {
                "q": "Welche Baustile vereint die heutige Brücke?",
                "a": "Sie wurde im frühen 20. Jahrhundert neu gebaut, lehnt sich aber an historische Formen an."
            },
            {
                "q": "Ist die Brücke für Autos befahrbar?",
                "a": "Nach der Sanierung ist sie hauptsächlich für Straßenbahnen, Radfahrer und Fußgänger reserviert."
            },
            {
                "q": "Was sieht man von der Brücke aus?",
                "a": "Den berühmten Canaletto-Blick auf die Dresdner Altstadt."
            }
        ],
        "hu": [
            {
                "q": "Ki adta a híd nevét?",
                "a": "Erős Ágost, szász választófejedelem."
            },
            {
                "q": "Milyen építészeti stílusokat ötvöz a mai híd?",
                "a": "A 20. század elején épült újjá, de történelmi formákhoz igazodik."
            },
            {
                "q": "Hajózható a híd autóval?",
                "a": "A felújítás után főként villamosok, kerékpárosok és gyalogosok számára van fenntartva."
            },
            {
                "q": "Mit lehet látni a hídról?",
                "a": "A híres Canaletto-kilátást a drezdai óvárosra."
            }
        ],
        "ro": [
            {
                "q": "Cine a dat numele podului?",
                "a": "August cel Puternic, elector al Saxoniei."
            },
            {
                "q": "Ce stiluri arhitecturale îmbină podul actual?",
                "a": "A fost reconstruit la începutul secolului XX, dar respectă formele istorice."
            },
            {
                "q": "Este podul circulabil pentru mașini?",
                "a": "După renovare, este rezervat în principal tramvaielor, bicicliștilor și pietonilor."
            },
            {
                "q": "Ce se vede de pe pod?",
                "a": "Faimoasa vedere Canaletto asupra centrului vechi din Dresda."
            }
        ],
        "en": [
            {
                "q": "Who gave the bridge its name?",
                "a": "Augustus the Strong, Elector of Saxony."
            },
            {
                "q": "What architectural styles does the current bridge combine?",
                "a": "It was rebuilt in the early 20th century but follows historical designs."
            },
            {
                "q": "Is the bridge accessible for cars?",
                "a": "After renovation, it is primarily reserved for trams, cyclists, and pedestrians."
            },
            {
                "q": "What can you see from the bridge?",
                "a": "The famous Canaletto view of Dresden's old town."
            }
        ]
    },
  },
  {
    id: "city-goerlitz-extra",
    type: "city",
    parent: "DE-SN",
    coords: [14.9872, 51.1547],
    name: { de: "Görlitz", hu: "Görlitz", ro: "Görlitz", en: "Görlitz" },
    description: {
      de: "Görlitz ist die östlichste Stadt Deutschlands an der Neiße, bekannt für ihre prächtig erhaltene Altstadt.",
      hu: "Görlitz Németország legkeletebbi városa a Neisse folyón, pompásan megőrzött óvárosáról ismert.",
      ro: "Görlitz este cel mai estic oraș din Germania, pe râul Neisse, cunoscut pentru centrul său vechi magnific conservat.",
      en: "Görlitz is Germany's easternmost city on the Neisse river, known for its magnificently preserved old town.",
    },
    facts: {
      de: ["Gilt als eine der am besten erhaltenen Altstädte Europas.", "Beliebter Filmstandort ('Inglourious Basterds', 'The Grand Budapest Hotel').", "Die polnische Zwillingsstadt Zgorzelec liegt auf der anderen Neißeseite."],
      hu: ["Európa egyik legjobban megőrzött óvárosának tartják.", "Kedvelt filmforgatási helyszín ('Inglourious Basterds', 'The Grand Budapest Hotel').", "A lengyel ikerváros, Zgorzelec a Neisse másik oldalán fekszik."],
      ro: ["Considerată unul dintre cele mai bine conservate orașe vechi din Europa.", "Locație populară pentru filmări ('Inglourious Basterds', 'The Grand Budapest Hotel').", "Orașul geamăn polonez Zgorzelec se află pe cealaltă parte a Neisei."],
      en: ["Considered one of Europe's best-preserved old towns.", "Popular filming location ('Inglourious Basterds', 'The Grand Budapest Hotel').", "The Polish twin city of Zgorzelec lies on the other side of the Neisse."],
    },
    descriptionAdvanced: {
      de: "Görlitz ist die östlichste Stadt Deutschlands und ein architektonisches Juwel von europäischem Rang. Da die Stadt im Zweiten Weltkrieg fast vollständig unversehrt blieb, besitzt sie eines der am besten erhaltenen historischen Stadtbilder Mitteleuropas mit über 4.000 denkmalgeschützten Gebäuden aus Gotik, Renaissance, Barock und Gründerzeit. Die Grenze zu Polen verläuft heute mitten durch die Stadt, die zusammen mit Zgorzelec eine Europastadt bildet. Weltbekannt wurde Görlitz zudem als 'Görliwood', da seine authentische Kulisse als Drehort für zahlreiche internationale Filmproduktionen wie 'Grand Budapest Hotel' diente. Die prächtigen Hallenhäuser der Renaissance zeugen vom einstigen Reichtum als Tuchmacherstadt an der Via Regia. Geschichte K7 – Mittelalterliche Handelsstädte und moderne Grenzregionen.",
      hu: "A(z) Görlitz egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Görlitz ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Besitzt die höchste Denkmaldichte aller deutschen Städte (über 4.000).", "Östlichste Stadt Deutschlands, geteilt durch die Lausitzer Neiße.", "Berühmter Drehort für Hollywood-Filme ('Görliwood').", "Die 'Hallenhäuser' sind eine architektonische Besonderheit der Renaissance.", "Sitz des Meridiansteins, da der 15. Meridian direkt durch die Stadt verläuft.", "Die Peterskirche besitzt eine Sonnenorgel mit künstlichen Sonnenstrahlen."],
      hu: [
        "A(z) Görlitz területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Görlitz tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Warum nennt man Görlitz 'Görliwood'?",
                "a": "Wegen der vielen internationalen Filmproduktionen, die dort gedreht wurden."
            },
            {
                "q": "Liegt Görlitz direkt an der Grenze?",
                "a": "Ja, die Lausitzer Neiße bildet die Grenze zu Polen."
            },
            {
                "q": "Was ist das Heilige Grab in Görlitz?",
                "a": "Eine originalgetreue Nachbildung der Grabeskirche in Jerusalem aus dem Mittelalter."
            },
            {
                "q": "Welche Baustile findet man in Görlitz?",
                "a": "Einen einzigartigen Mix aus Spätgotik, Renaissance, Barock und Gründerzeit."
            }
        ],
        "hu": [
            {
                "q": "Miért hívják Görlitzet 'Görliwoodnak'?",
                "a": "A sok ott forgatott nemzetközi filmprodukció miatt."
            },
            {
                "q": "Görlitz közvetlenül a határon fekszik?",
                "a": "Igen, a Lausitzer Neiße alkotja a határt Lengyelországgal."
            },
            {
                "q": "Mi az a Szent Sír Görlitzben?",
                "a": "A jeruzsálemi Szent Sír-templom középkori, hű másolata."
            },
            {
                "q": "Milyen építészeti stílusok találhatók Görlitzben?",
                "a": "A késő gótika, a reneszánsz, a barokk és a historizmus egyedülálló keverékét."
            }
        ],
        "ro": [
            {
                "q": "De ce se numește Görlitz 'Görliwood'?",
                "a": "Datorită numeroaselor producții cinematografice internaționale care au fost filmate acolo."
            },
            {
                "q": "Görlitz este situat direct pe graniță?",
                "a": "Da, Neisse Lusatiană formează granița cu Polonia."
            },
            {
                "q": "Ce este Sfântul Mormânt din Görlitz?",
                "a": "O replică fidelă a Bisericii Sfântului Mormânt din Ierusalim, datând din Evul Mediu."
            },
            {
                "q": "Ce stiluri arhitecturale se găsesc în Görlitz?",
                "a": "Un amestec unic de gotic târziu, renaștere, baroc și arhitectură de la sfârșitul secolului XIX."
            }
        ],
        "en": [
            {
                "q": "Why is Görlitz called 'Görliwood'?",
                "a": "Because of the many international film productions that have been filmed there."
            },
            {
                "q": "Is Görlitz located directly on the border?",
                "a": "Yes, the Lusatian Neisse forms the border with Poland."
            },
            {
                "q": "What is the Holy Sepulchre in Görlitz?",
                "a": "A faithful replica of the Church of the Holy Sepulchre in Jerusalem from the Middle Ages."
            },
            {
                "q": "What architectural styles can be found in Görlitz?",
                "a": "A unique mix of Late Gothic, Renaissance, Baroque, and late 19th-century architecture."
            }
        ]
    },
  },
  {
    id: "lake-talsperre-kriebstein-extra",
    type: "lake",
    parent: "DE-SN",
    coords: [13.0167, 51.0667],
    name: { de: "Talsperre Kriebstein", hu: "Kriebstein tározó", ro: "Barajul Kriebstein", en: "Kriebstein Reservoir" },
    description: {
      de: "Die Talsperre Kriebstein ist ein Stausee in der Zschopau-Talsperre in Sachsen und beliebtes Erholungsgebiet.",
      hu: "A Kriebstein tározó a Zschopau völgyi gát stausee-ja Szászországban és kedvelt üdülőhely.",
      ro: "Barajul Kriebstein este un lac de acumulare pe râul Zschopau din Saxonia și o zonă de recreere populară.",
      en: "The Kriebstein Reservoir is a dam lake on the Zschopau in Saxony and a popular recreational area.",
    },
    facts: {
      de: ["1927 fertiggestellt, eines der ältesten Sachsens.", "Burg Kriebstein über dem See gilt als Sachsens schönste Ritterburg.", "Beliebtes Ziel für Wassersport und Wandern."],
      hu: ["1927-ben készült el, Szászország egyik legrégebbike.", "A tó feletti Kriebstein vár Szászország legszebb lovagvárának tartják.", "Kedvelt célpont vízisportokhoz és túrázáshoz."],
      ro: ["Finalizat în 1927, unul dintre cele mai vechi din Saxonia.", "Castelul Kriebstein deasupra lacului este considerat cel mai frumos castel cavaleresc din Saxonia.", "Destinație populară pentru sporturi nautice și drumeții."],
      en: ["Completed in 1927, one of Saxony's oldest reservoirs.", "Kriebstein Castle above the lake is considered Saxony's most beautiful knight's castle.", "A popular destination for water sports and hiking."],
    },
    descriptionAdvanced: {
      de: "Die Talsperre Kriebstein im sächsischen Mittelland ist ein wichtiges Wasserbauwerk und ein beliebtes Naherholungsgebiet. Gestaut wird hier die Zschopau, die sich tief in die Felsenlandschaft eingeschnitten hat. Die 1927 bis 1930 errichtete Staumauer dient der Stromerzeugung und dem Hochwasserschutz. Besonders reizvoll ist die Kombination aus technischem Denkmal und wildromantischer Natur. Besucher können den See bei einer Schifffahrt erkunden oder die direkt am steilen Felsufer gelegene Burg Kriebstein bewundern, die als Sachsens schönste Ritterburg gilt. Das Gebiet ist ein beliebtes Ziel für Wanderer und Wassersportler und bietet mit der Seebühne einen Ort für kulturelle Veranstaltungen. Geographie K7 – Wasserkraftnutzung und touristische Erschließung.",
      hu: "A(z) Talsperre Kriebstein egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Talsperre Kriebstein ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Erbaut in den Jahren 1927 bis 1930 zur Gewinnung von Wasserkraft.", "Die Staumauer ist 28 Meter hoch und 230 Meter lang.", "Der Stausee windet sich über 9 km durch das steile Zschopautal.", "Beherbergt die einzige Seebühne Sachsens für Theater und Konzerte.", "Die Burg Kriebstein thront spektakulär direkt am Rand des Talsperrensees.", "Beliebtes Wandergebiet mit einem ca. 18 km langen Rundweg."],
      hu: [
        "A(z) Talsperre Kriebstein területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Talsperre Kriebstein tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Welcher Fluss wird in der Talsperre Kriebstein gestaut?",
                "a": "Die Zschopau."
            },
            {
                "q": "Gibt es dort Fahrgastschiffe?",
                "a": "Ja, Linien- und Rundfahrten mit Motorschiffen sind möglich."
            },
            {
                "q": "Was ist die Seebühne Kriebstein?",
                "a": "Eine schwimmende Bühne für Operetten-, Musical- und Theateraufführungen."
            },
            {
                "q": "Kann man in der Talsperre baden?",
                "a": "Ja, es gibt ausgewiesene Badestellen und ein Strandbad."
            }
        ],
        "hu": [
            {
                "q": "Melyik folyót duzzasztják a Kriebstein-tározóban?",
                "a": "A Zschopau."
            },
            {
                "q": "Vannak ott sétahajók?",
                "a": "Igen, menetrend szerinti járatok és sétahajózás is lehetséges."
            },
            {
                "q": "Mi a Kriebstein tószínpad?",
                "a": "Egy úszó színpad operett-, musical- és színházi előadásokhoz."
            },
            {
                "q": "Lehet fürdeni a tározóban?",
                "a": "Igen, vannak kijelölt fürdőhelyek és egy strandfürdő."
            }
        ],
        "ro": [
            {
                "q": "Ce râu este zăgăzuit în barajul Kriebstein?",
                "a": "Râul Zschopau."
            },
            {
                "q": "Există nave de pasageri acolo?",
                "a": "Da, sunt posibile curse regulate și croaziere cu nave cu motor."
            },
            {
                "q": "Ce este scena pe lac Kriebstein?",
                "a": "O scenă plutitoare pentru spectacole de operetă, musical și teatru."
            },
            {
                "q": "Se poate face baie în lacul de acumulare?",
                "a": "Da, există locuri de scăldat amenajate și un ștrand."
            }
        ],
        "en": [
            {
                "q": "Which river is dammed in the Kriebstein Reservoir?",
                "a": "The Zschopau."
            },
            {
                "q": "Are there passenger ships there?",
                "a": "Yes, scheduled trips and cruises with motorboats are possible."
            },
            {
                "q": "What is the Kriebstein Lake Stage?",
                "a": "A floating stage for operetta, musical, and theater performances."
            },
            {
                "q": "Can you swim in the reservoir?",
                "a": "Yes, there are designated swimming areas and a lido."
            }
        ]
    },
  },
  {
    id: "forest-saechsische-schweiz-park-extra",
    type: "forest",
    parent: "DE-SN",
    coords: [14.2000, 51.0000],
    name: { de: "Nationalpark Sächsische Schweiz", hu: "Szász Svájc Nemzeti Park", ro: "Parcul Național Elveția Saxonă", en: "Saxon Switzerland National Park" },
    description: {
      de: "Der Nationalpark Sächsische Schweiz schützt eine einzigartige Fels- und Waldlandschaft in Sachsen.",
      hu: "A Szász Svájc Nemzeti Park egy egyedülálló szikla- és erdőtájat véd Szászországban.",
      ro: "Parcul Național Elveția Saxonă protejează un peisaj unic de stânci și păduri din Saxonia.",
      en: "Saxon Switzerland National Park protects a unique rock and forest landscape in Saxony.",
    },
    facts: {
      de: ["Gegründet 1990, einer der jüngsten deutschen Nationalparks.", "Bekannt für Sandsteinfelsen, tiefe Schluchten und dichte Wälder.", "Grenzübergreifend mit dem Nationalpark Böhmische Schweiz in Tschechien."],
      hu: ["1990-ben alapították, Németország egyik legfiatalabb nemzeti parkja.", "Homokkősziklákról, mély szurdokokról és sűrű erdőkről ismert.", "Határon átnyúlóan kapcsolódik a csehországi Cseh Svájc Nemzeti Parkhoz."],
      ro: ["Fondat în 1990, unul dintre cele mai tinere parcuri naționale germane.", "Cunoscut pentru stânci de gresie, chei adânci și păduri dese.", "Transfrontalier cu Parcul Național Elveția Boemă din Republica Cehă."],
      en: ["Founded in 1990, one of Germany's youngest national parks.", "Known for sandstone cliffs, deep gorges, and dense forests.", "Cross-border with Czech Bohemian Switzerland National Park."],
    },
    descriptionAdvanced: {
      de: "Der Nationalpark Sächsische Schweiz schützt seit 1990 das Herzstück des Elbsandsteingebirges rechts der Elbe. Auf über 9.000 Hektar bietet er eine Landschaft aus zerklüfteten Felsnadeln, tiefen, schattigen Schluchten und unberührten Wäldern. Ziel ist es, die dynamischen Naturprozesse wie Erosion und Waldentwicklung ohne menschliche Eingriffe zuzulassen. Für Wanderer ist der Nationalpark durch den Malerweg erschlossen, der zu den schönsten Wanderwegen Deutschlands zählt. Eine Besonderheit ist die hohe Dichte an Horsten seltener Greifvögel wie dem Wanderfalken, der hier erfolgreich wieder angesiedelt wurde. Der Park ist zudem ein internationales Zentrum für das Felsklettern unter strengen Naturschutzauflagen. Biologie K6 – Naturschutzgebiete und Ökosystem Sandsteinregion.",
      hu: "A(z) Nationalpark Sächsische Schweiz egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Nationalpark Sächsische Schweiz ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Deutschlands einziger Nationalpark mit einer Sandstein-Felslandschaft.", "Umfasst eine Gesamtfläche von ca. 9.350 Hektar reiner Naturzone.", "Heimat des Wanderfalken, der hier eines der größten Vorkommen Europas hat.", "Besteht aus zwei räumlich getrennten Teilen (Bastei und Schmilka).", "Der 'Malerweg' ist 112 Kilometer lang und durchquert den Park.", "Beherbergt über 1.100 Klettergipfel innerhalb der Parkgrenzen."],
      hu: [
        "A(z) Nationalpark Sächsische Schweiz területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Nationalpark Sächsische Schweiz tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Darf man im Nationalpark übernachten?",
                "a": "Nur an speziell gekennzeichneten Plätzen, dem sogenannten 'Boofen' für Kletterer."
            },
            {
                "q": "Was ist die Kirnitzschtalbahn?",
                "a": "Eine historische Straßenbahn, die durch das romantische Kirnitzschtal fährt."
            },
            {
                "q": "Wie groß ist der Nationalpark?",
                "a": "Er umfasst eine Fläche von knapp 94 Quadratkilometern."
            },
            {
                "q": "Welche seltenen Pflanzen gibt es dort?",
                "a": "Zum Beispiel verschiedene Farne und Moose, die das feucht-kühle Klima in den Schluchten lieben."
            }
        ],
        "hu": [
            {
                "q": "Szabad éjszakázni a nemzeti parkban?",
                "a": "Csak a speciálisan kijelölt helyeken, az úgynevezett 'Boofen'-nél a hegymászók számára."
            },
            {
                "q": "Mi a Kirnitzschtalbahn?",
                "a": "Egy történelmi villamos, amely a romantikus Kirnitzsch-völgyben közlekedik."
            },
            {
                "q": "Mekkora a nemzeti park?",
                "a": "Közel 94 négyzetkilométeres területet foglal magában."
            },
            {
                "q": "Milyen ritka növények találhatók ott?",
                "a": "Például különböző páfrányok és mohák, amelyek kedvelik a szurdokok nedves-hűvös klímáját."
            }
        ],
        "ro": [
            {
                "q": "Este permisă înnoptarea în parcul național?",
                "a": "Numai în locuri special marcate, așa-numitele 'Boofen' pentru alpiniști."
            },
            {
                "q": "Ce este Kirnitzschtalbahn?",
                "a": "Un tramvai istoric care circulă prin valea romantică Kirnitzsch."
            },
            {
                "q": "Cât de mare este parcul național?",
                "a": "Acoperă o suprafață de aproape 94 de kilometri pătrați."
            },
            {
                "q": "Ce plante rare se găsesc acolo?",
                "a": "De exemplu, diverse ferigi și mușchi care iubesc climatul umed și răcoros din chei."
            }
        ],
        "en": [
            {
                "q": "Is staying overnight allowed in the national park?",
                "a": "Only at specially designated places, the so-called 'Boofen' for climbers."
            },
            {
                "q": "What is the Kirnitzschtalbahn?",
                "a": "A historic tram that runs through the romantic Kirnitzsch Valley."
            },
            {
                "q": "How large is the national park?",
                "a": "It covers an area of nearly 94 square kilometers."
            },
            {
                "q": "What rare plants can be found there?",
                "a": "For example, various ferns and mosses that love the moist, cool climate in the gorges."
            }
        ]
    },
  },
  {
    id: "hist-moritzburg-extra",
    type: "historical",
    parent: "DE-SN",
    coords: [13.6797, 51.1581],
    name: { de: "Schloss Moritzburg", hu: "Moritzburg kastély", ro: "Castelul Moritzburg", en: "Moritzburg Palace" },
    description: {
      de: "Schloss Moritzburg ist ein barockes Jagdschloss nördlich von Dresden auf einer Insel in einem Teichgebiet.",
      hu: "A Moritzburg kastély egy barokk vadászkastély Drezdától északra, tórendszerbe épített szigeten.",
      ro: "Castelul Moritzburg este un palat de vânătoare baroc la nord de Dresda, pe o insulă într-un complex de iazuri.",
      en: "Moritzburg Palace is a Baroque hunting lodge north of Dresden situated on an island in a pond landscape.",
    },
    facts: {
      de: ["Erbaut von August dem Starken, Kurfürst von Sachsen.", "Das Schloss ist von vier künstlichen Teichen umgeben.", "Der Film 'Drei Haselnüsse für Aschenbrödel' wurde hier gedreht."],
      hu: ["Az Erős Ágost szász választófejedelem építtette.", "A kastélyt négy mesterséges tó veszi körül.", "A 'Három mogyoró Hamupipőkébe' c. film itt forgatták."],
      ro: ["Construit de August cel Puternic, elector al Saxoniei.", "Castelul este înconjurat de patru iazuri artificiale.", "Filmul 'Trei nuci pentru Cenușăreasa' a fost filmat aici."],
      en: ["Built by Augustus the Strong, Elector of Saxony.", "The palace is surrounded by four artificial ponds.", "The film 'Three Hazelnuts for Cinderella' was filmed here."],
    },
    descriptionAdvanced: {
      de: "Schloss Moritzburg bei Dresden ist eines der prachtvollsten Barockschlösser Mitteleuropas und war das Jagddomizil Augusts des Starken. Das symmetrische Ensemble mit seinen vier Türmen liegt malerisch auf einer Insel inmitten eines künstlichen Teiches. Berühmt ist das Schloss für sein 'Federzimmer' mit über einer Million Vogelfedern und die weltweit umfangreichste Sammlung von Jagdtrophäen (Rotwildgeweihe). Die Innenausstattung mit kostbaren Goldledertapeten spiegelt den Glanz des sächsischen Absolutismus wider. In der Winterzeit wird das Schloss zum Wallfahrtsort für Märchenfans, da es als Original-Drehort des Kultfilms 'Drei Haselnüsse für Aschenbrödel' diente. Ein weiteres Highlight ist das nahegelegene Fasanenschlösschen mit seinem Leuchtturm. Geschichte K7 – Barocke Repräsentation und höfische Jagdkultur.",
      hu: "A(z) Schloss Moritzburg egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Schloss Moritzburg ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Erbaut als Jagdschloss von 1723 bis 1733 unter August dem Starken.", "Drehort des legendären Märchenfilms 'Drei Haselnüsse für Aschenbrödel'.", "Beherbergt die größte Rotwild-Geweiilsammlung der Welt.", "Das 'Federzimmer' gilt als ein weltweit einzigartiges Kunstwerk.", "Das Schloss ist über eine herrschaftliche Allee mit Dresden verbunden.", "Auf dem Gelände befindet sich der einzige Binnenleuchtturm Sachsens."],
      hu: [
        "A(z) Schloss Moritzburg területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Schloss Moritzburg tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Wer ließ Schloss Moritzburg in seiner heutigen Form erbauen?",
                "a": "August der Starke im 18. Jahrhundert."
            },
            {
                "q": "Was ist das 'Fasanenschlösschen'?",
                "a": "Ein kleines Rokoko-Schloss in der Nähe von Moritzburg mit einem eigenen Hafen und Leuchtturm."
            },
            {
                "q": "Was kann man im Inneren des Schlosses sehen?",
                "a": "Eine bedeutende Sammlung von Jagdtropäen und die berühmte Ledertapeten-Ausstattung."
            },
            {
                "q": "Was ist das 'Federzimmer'?",
                "a": "Ein Prunkbett, das mit Millionen von Vogelfedern verziert ist."
            }
        ],
        "hu": [
            {
                "q": "Ki építtette a Moritzburg kastélyt a mai formájában?",
                "a": "Erős Ágost a 18. században."
            },
            {
                "q": "Mi az a 'Fácán-kastély'?",
                "a": "Egy kis rokokó kastély Moritzburg közelében, saját kikötővel és világítótoronnyal."
            },
            {
                "q": "Mit lehet látni a kastély belsejében?",
                "a": "Jelentős vadásztrófea-gyűjteményt és a híres bőrtapétákat."
            },
            {
                "q": "Mi az a 'Tolltársalgó'?",
                "a": "Egy díszes ágy, amelyet több millió madártoll díszít."
            }
        ],
        "ro": [
            {
                "q": "Cine a dispus construirea Castelului Moritzburg în forma sa actuală?",
                "a": "August cel Puternic în secolul al XVIII-lea."
            },
            {
                "q": "Ce este 'Micul Castel al Fazanilor'?",
                "a": "Un mic castel rococo lângă Moritzburg, cu propriul port și far."
            },
            {
                "q": "Ce se poate vedea în interiorul castelului?",
                "a": "O colecție importantă de trofee de vânătoare și faimoasele tapete din piele."
            },
            {
                "q": "Ce este 'Camera de pene'?",
                "a": "Un pat de paradă decorat cu milioane de pene de pasăre."
            }
        ],
        "en": [
            {
                "q": "Who had Moritzburg Palace built in its current form?",
                "a": "Augustus the Strong in the 18th century."
            },
            {
                "q": "What is the 'Little Pheasant Castle'?",
                "a": "A small Rococo palace near Moritzburg with its own harbor and lighthouse."
            },
            {
                "q": "What can be seen inside the palace?",
                "a": "A significant collection of hunting trophies and the famous leather wallpaper furnishings."
            },
            {
                "q": "What is the 'Feather Room'?",
                "a": "A state bed decorated with millions of bird feathers."
            }
        ]
    },
  },
  {
    id: "city-freiberg-sachsen-extra",
    type: "city",
    parent: "DE-SN",
    coords: [13.3428, 50.9125],
    name: { de: "Freiberg", hu: "Freiberg", ro: "Freiberg", en: "Freiberg" },
    description: {
      de: "Freiberg ist eine Bergbaustadt im Erzgebirge mit einer der ältesten Bergbaustädte und einer renommierten Bergakademie.",
      hu: "Freiberg az Érchegységben fekvő bányász városka Szászország legrégebbi bányászvárosaival és egy neves bányászati akadémiával.",
      ro: "Freiberg este un oraș minier din Munții Metaliferi cu unul dintre cele mai vechi orașe miniere din Saxonia și o renumită Academie Minieră.",
      en: "Freiberg is a mining town in the Ore Mountains with one of Saxony's oldest mining towns and a renowned Mining Academy.",
    },
    facts: {
      de: ["Heimat der TU Bergakademie Freiberg (1765), älteste Bergbauuniversität der Welt.", "Das silberreiche Erzgebirge machte die Stadt wohlhabend.", "Teil des UNESCO-Welterbes 'Montanregion Erzgebirge'."],
      hu: ["A TU Bergakademie Freiberg (1765) otthona, a világ legrégebbi bányászati egyeteme.", "Az ezüstben gazdag Érchegység tette gazdaggá a várost.", "Az UNESCO 'Montanregion Erzgebirge' világörökség része."],
      ro: ["Gazda TU Bergakademie Freiberg (1765), cea mai veche universitate minieră din lume.", "Munții Metaliferi bogați în argint au adus prosperitate orașului.", "Parte a Patrimoniului UNESCO 'Montanregion Erzgebirge'."],
      en: ["Home to TU Bergakademie Freiberg (1765), the world's oldest mining university.", "The silver-rich Ore Mountains brought wealth to the city.", "Part of the UNESCO World Heritage 'Montanregion Erzgebirge'."],
    },
    descriptionAdvanced: {
      de: "Freiberg ist die älteste und bedeutendste Bergstadt Sachsens und war über Jahrhunderte das silberne Herz des Landes. Der Reichtum aus den Silberminen legte den Grundstein für die Macht des wettinischen Fürstenhauses. Heute zeugen der Dom St. Marien mit der berühmten Goldenen Pforte und der Silbermann-Orgel sowie die historische Altstadt von dieser glanzvollen Zeit. Freiberg ist zudem Sitz der 1765 gegründeten TU Bergakademie, der ältesten montanwissenschaftlichen Universität der Welt. Eine moderne Weltsensation ist die 'terra mineralia' im Schloss Freudenstein, die eine der bedeutendsten Mineraliensammlungen weltweit beherbergt. Seit 2019 ist Freiberg ein zentraler Bestandteil des UNESCO-Weltkulturerbes Montanregion Erzgebirge. Geschichte K6 – Bergbautradition und technischer Fortschritt.",
      hu: "A(z) Freiberg egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Freiberg ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Sitz der ältesten noch bestehenden Bergakademie der Welt (1765).", "Zentrum der Silbererzeugung im Heiligen Römischen Reich.", "UNESCO-Weltkulturerbe als Kernstadt der Montanregion Erzgebirge.", "Die 'terra mineralia' zeigt über 3.500 Minerale aus aller Welt.", "Der Freiberger Dom beherbergt die Grablege von 28 sächsischen Fürsten.", "Gottfried Silbermann baute hier seine berühmteste Orgel im Jahr 1735."],
      hu: [
        "A(z) Freiberg területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Freiberg tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Was ist die 'terra mineralia'?",
                "a": "Eine der weltweit bedeutendsten Mineralienausstellungen im Schloss Freudenstein."
            },
            {
                "q": "Was ist der Dom St. Marien in Freiberg?",
                "a": "Eine spätgotische Hallenkirche mit der berühmten 'Goldenen Pforte'."
            },
            {
                "q": "Wer baute die berühmten Orgeln im Freiberger Dom?",
                "a": "Gottfried Silbermann."
            },
            {
                "q": "Was ist der 'Obermarkt'?",
                "a": "Ein prachtvoller Platz im Stadtzentrum, umgeben von historischen Patrizierhäusern."
            }
        ],
        "hu": [
            {
                "q": "Mi a 'terra mineralia'?",
                "a": "A világ egyik legjelentősebb ásványkiállítása a Freudenstein kastélyban."
            },
            {
                "q": "Mi a freibergi Szent Mária dóm?",
                "a": "Egy késő gótikus csarnoktemplom a híres 'Aranykapuval'."
            },
            {
                "q": "Ki építette a híres orgonákat a freibergi dómban?",
                "a": "Gottfried Silbermann."
            },
            {
                "q": "Mi az az 'Obermarkt'?",
                "a": "A városközpont pompás tere, amelyet történelmi patrícius házak vesznek körül."
            }
        ],
        "ro": [
            {
                "q": "Ce este 'terra mineralia'?",
                "a": "Una dintre cele mai importante expoziții de minerale din lume, în Castelul Freudenstein."
            },
            {
                "q": "Ce este Catedrala Sfânta Maria din Freiberg?",
                "a": "O biserică-hală în stil gotic târziu cu faimoasa 'Poartă de Aur'."
            },
            {
                "q": "Cine a construit faimoasele orgi din Catedrala din Freiberg?",
                "a": "Gottfried Silbermann."
            },
            {
                "q": "Ce este 'Obermarkt'?",
                "a": "O piață splendidă în centrul orașului, înconjurată de case istorice de patricieni."
            }
        ],
        "en": [
            {
                "q": "What is 'terra mineralia'?",
                "a": "One of the world's most significant mineral exhibitions in Freudenstein Castle."
            },
            {
                "q": "What is St. Mary's Cathedral in Freiberg?",
                "a": "A Late Gothic hall church featuring the famous 'Golden Portal'."
            },
            {
                "q": "Who built the famous organs in Freiberg Cathedral?",
                "a": "Gottfried Silbermann."
            },
            {
                "q": "What is the 'Obermarkt'?",
                "a": "A magnificent square in the city center surrounded by historic patrician houses."
            }
        ]
    },
  },
  {
    id: "landmark-blaues-wunder-dresden-extra",
    type: "landmark",
    parent: "DE-SN",
    coords: [13.8119, 51.0603],
    name: { de: "Blaues Wunder Dresden", hu: "Drezdai Kék csoda", ro: "Minunea Albastră din Dresda", en: "Blue Wonder Bridge Dresden" },
    description: {
      de: "Das Blaue Wunder ist eine denkmalgeschützte Stahlbrücke über die Elbe in Dresden aus dem Jahr 1893.",
      hu: "A Kék csoda egy 1893-ból való műemlék acélhíd a drezdai Elba felett.",
      ro: "Minunea Albastră este un pod de oțel protejat monument, construit în 1893 peste Elba din Dresda.",
      en: "The Blue Wonder is a protected steel bridge over the Elbe in Dresden dating from 1893.",
    },
    facts: {
      de: ["Offiziell 'Loschwitzer Brücke' genannt.", "Besonderheit: keine Pfeiler im Flussbett.", "Im Zweiten Weltkrieg als eine der wenigen Dresdner Brücken erhalten geblieben."],
      hu: ["Hivatalos neve 'Loschwitzer Brücke'.", "Különlegessége: nincsenek pillérek a mederben.", "A második világháborúban a drezdai hidak egyikeként megmaradt."],
      ro: ["Oficial numită 'Loschwitzer Brücke'.", "Particularitate: niciun pilon în albia râului.", "A supraviețuit celui de-Al Doilea Război Mondial ca unul dintre puținele poduri din Dresda."],
      en: ["Officially named 'Loschwitzer Brücke'.", "Special feature: no piers in the riverbed.", "Survived World War II as one of the few Dresden bridges left standing."],
    },
    descriptionAdvanced: {
      de: "Das 'Blaue Wunder' ist die wohl bekannteste Brücke Dresdens und ein technisches Denkmal von europäischem Rang. Die 1893 fertiggestellte Loschwitzer Brücke verbindet die Villenviertel Blasewitz und Loschwitz und galt damals als Wunder der Technik, da sie die Elbe auf einer Länge von 141 Metern ohne Strompfeiler überspannt. Ihre charakteristische hellblaue Farbe gab ihr den volkstümlichen Namen. Die Brücke aus genietetem Stahl ist ein Symbol für die industrielle Innovationskraft Sachsens Ende des 19. Jahrhunderts. Da sie am Ende des Zweiten Weltkriegs mutig vor der Sprengung bewahrt wurde, ist sie im Originalzustand erhalten. Heute ist sie ein markanter Orientierungspunkt in der Dresdner Elblandschaft. Physik K8 – Brückenbau und Stahlkonstruktionen der Industrialisierung.",
      hu: "A(z) Blaues Wunder Dresden egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Blaues Wunder Dresden ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Offizieller Name: Loschwitzer Brücke; erbaut zwischen 1891 und 1893.", "Überspannt die Elbe ohne Pfeiler im Wasser (Hängebrücken-Prinzip).", "Galt bei ihrer Eröffnung als technisches Weltwunder.", "Die Konstruktion besteht aus ca. 3.500 Tonnen Eisen und Stahl.", "Wurde 1945 durch mutige Bürger vor der Zerstörung durch die Wehrmacht gerettet.", "Namensgebend ist der charakteristische hellblaue Farbanstrich."],
      hu: [
        "A(z) Blaues Wunder Dresden területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Blaues Wunder Dresden tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Warum heißt die Brücke 'Blaues Wunder'?",
                "a": "Wegen ihrer hellblauen Farbe und der für damals kühnen Konstruktion."
            },
            {
                "q": "Welche Stadtteile verbindet sie?",
                "a": "Blasewitz und Loschwitz."
            },
            {
                "q": "Wer rettete die Brücke 1945?",
                "a": "Zwei mutige Bürger verhinderten die Sprengung durch die SS."
            },
            {
                "q": "Was ist eine Bergschwebebahn?",
                "a": "Eine Schwebebahn in Loschwitz, die direkt neben dem Blauen Wunder einen Hang hinaufführt."
            }
        ],
        "hu": [
            {
                "q": "Miért hívják a hidat 'Kék csodának'?",
                "a": "Világoskék színe és az akkori időkhöz képest merész szerkezete miatt."
            },
            {
                "q": "Mely városrészeket köti össze?",
                "a": "Blasewitzet és Loschwitzot."
            },
            {
                "q": "Ki mentette meg a hidat 1945-ben?",
                "a": "Két bátor polgár akadályozta meg az SS általi felrobbantást."
            },
            {
                "q": "Mi az a hegyi függővasút?",
                "a": "Egy függővasút Loschwitzban, amely közvetlenül a Kék csoda mellett halad fel egy hegyoldalon."
            }
        ],
        "ro": [
            {
                "q": "De ce se numește podul 'Minunea Albastră'?",
                "a": "Datorită culorii sale albastru deschis și a construcției îndrăznețe pentru acea vreme."
            },
            {
                "q": "Ce cartiere leagă?",
                "a": "Blasewitz și Loschwitz."
            },
            {
                "q": "Cine a salvat podul în 1945?",
                "a": "Doi cetățeni curajoși au împiedicat aruncarea în aer de către SS."
            },
            {
                "q": "Ce este o cale ferată suspendată montană?",
                "a": "O cale ferată suspendată în Loschwitz, care urcă o pantă chiar lângă Minunea Albastră."
            }
        ],
        "en": [
            {
                "q": "Why is the bridge called the 'Blue Wonder'?",
                "a": "Because of its light blue color and its bold construction for the time."
            },
            {
                "q": "Which districts does it connect?",
                "a": "Blasewitz and Loschwitz."
            },
            {
                "q": "Who saved the bridge in 1945?",
                "a": "Two courageous citizens prevented it from being blown up by the SS."
            },
            {
                "q": "What is a mountain suspension railway?",
                "a": "A suspension railway in Loschwitz that goes up a slope right next to the Blue Wonder."
            }
        ]
    },
  },
  {
    id: "hist-zwinger-dresden-extra",
    type: "historical",
    parent: "DE-SN",
    coords: [13.7340, 51.0528],
    name: { de: "Dresdner Zwinger", hu: "Drezdai Zwinger", ro: "Zwinger-ul din Dresda", en: "Dresden Zwinger" },
    description: {
      de: "Der Dresdner Zwinger ist ein barockes Palastensemble und Gesamtkunstwerk, erbaut im frühen 18. Jahrhundert.",
      hu: "A drezdai Zwinger egy barokk palotaegyüttes és Gesamtkunstwerk, a 18. század elején építve.",
      ro: "Zwinger-ul din Dresda este un ansamblu de palate baroce și operă de artă totală, construit la începutul secolului al XVIII-lea.",
      en: "The Dresden Zwinger is a Baroque palace ensemble and total work of art built in the early 18th century.",
    },
    facts: {
      de: ["Von Augustus dem Starken als Festsaal und Orangerie konzipiert.", "Heimat der Gemäldegalerie Alte Meister mit Raffaels Sixtinischer Madonna.", "Im Zweiten Weltkrieg stark zerstört und aufwendig rekonstruiert."],
      hu: ["Az Erős Ágost tervezte ünnepteremnek és orangeriának.", "A Régi Mesterek képtárának otthona Raffaello Sixtusi Madonnájával.", "A második világháborúban súlyosan elpusztult, majd gondosan rekonstruálták."],
      ro: ["Conceput de August cel Puternic ca sală de festivități și orangerie.", "Gazda Galeriei de Pictură a Vechilor Maeștri cu Madonna Sixtină a lui Rafael.", "Grav distrus în Al Doilea Război Mondial și reconstruit elaborat."],
      en: ["Conceived by Augustus the Strong as a festival hall and orangery.", "Home to the Old Masters Picture Gallery featuring Raphael's Sistine Madonna.", "Severely destroyed in World War II and extensively reconstructed."],
    },
    descriptionAdvanced: {
      de: "Der Dresdner Zwinger ist eines der bedeutendsten Bauwerke des deutschen Barock und ein Symbol für die kulturelle Blüte Sachsens unter August dem Starken. Entworfen von Matthäus Daniel Pöppelmann und ausgestattet mit Skulpturen von Balthasar Permoser, diente er ursprünglich als Orangerie und Festplatz des Hofes. Das symmetrische Ensemble mit dem Kronentor, dem Wallpavillon und dem Nymphenbad ist ein Gesamtkunstwerk aus Architektur, Plastik und Gartenkunst. Heute beherbergt der Zwinger weltberühmte Museen wie die Gemäldegalerie Alte Meister mit der Sixtinischen Madonna von Raffael sowie den Mathematisch-Physikalischen Salon. Er ist das Herzstück der Dresdner Museumslandschaft und ein Magnet für Millionen von Besuchern. Kunstgeschichte K8 – Barocke Architektur und höfische Repräsentation.",
      hu: "A(z) Dresdner Zwinger egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Dresdner Zwinger ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Meisterwerk des Architekten Pöppelmann, erbaut von 1710 bis 1728.", "Beherbergt die Gemäldegalerie Alte Meister und die Porzellansammlung.", "Das Nymphenbad gilt als eine der schönsten barocken Brunnenanlagen.", "Das Kronentor mit der polnischen Königskrone ist ein Wahrzeichen der Stadt.", "Ursprünglich als Garten für Orangenbäume und Turniere konzipiert.", "Heimat des 'Mathematisch-Physikalischen Salons' mit historischen Instrumenten."],
      hu: [
        "A(z) Dresdner Zwinger területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Dresdner Zwinger tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Was bedeutet der Name 'Zwinger'?",
                "a": "Er bezeichnete ursprünglich den Raum zwischen innerer und äußerer Festungsmauer."
            },
            {
                "q": "Was ist das Kronentor?",
                "a": "Ein berühmtes Pavillontor des Zwingers, das mit einer vergoldeten Krone geschmückt ist."
            },
            {
                "q": "Welche Museen befinden sich im Zwinger?",
                "a": "Die Gemäldegalerie Alte Meister, der Mathematisch-Physikalische Salon und die Porzellansammlung."
            },
            {
                "q": "Was ist das Nymphenbad?",
                "a": "Einer der schönsten barocken Brunnenanlagen in Deutschland, im Zwinger gelegen."
            }
        ],
        "hu": [
            {
                "q": "Mit jelent a 'Zwinger' név?",
                "a": "Eredetileg a belső és külső várfal közötti területet jelölte."
            },
            {
                "q": "Mi az a Kronentor?",
                "a": "A Zwinger egyik híres pavilonkapuja, amelyet egy aranyozott korona díszít."
            },
            {
                "q": "Milyen múzeumok találhatók a Zwingerben?",
                "a": "A Régi Mesterek képtára, a Matematikai-Fizikai Szalon és a Porcelángyűjtemény."
            },
            {
                "q": "Mi a Nymphenbad?",
                "a": "Németország egyik legszebb barokk kútja, a Zwinger területén."
            }
        ],
        "ro": [
            {
                "q": "Ce înseamnă numele 'Zwinger'?",
                "a": "Inițial desemna spațiul dintre zidul interior și cel exterior al cetății."
            },
            {
                "q": "Ce este Poarta Coroanei (Kronentor)?",
                "a": "O faimoasă poartă-pavilion a Zwinger-ului, decorată cu o coroană aurită."
            },
            {
                "q": "Ce muzee se află în Zwinger?",
                "a": "Galeria de Pictură a Vechilor Maeștri, Salonul de Matematică și Fizică și Colecția de Porțelan."
            },
            {
                "q": "Ce este Baia Nimfelor (Nymphenbad)?",
                "a": "Una dintre cele mai frumoase fântâni baroce din Germania, situată în Zwinger."
            }
        ],
        "en": [
            {
                "q": "What does the name 'Zwinger' mean?",
                "a": "It originally referred to the space between the inner and outer fortress walls."
            },
            {
                "q": "What is the Crown Gate?",
                "a": "A famous pavilion gate of the Zwinger decorated with a gilded crown."
            },
            {
                "q": "Which museums are located in the Zwinger?",
                "a": "The Old Masters Picture Gallery, the Mathematics-Physics Salon, and the Porcelain Collection."
            },
            {
                "q": "What is the Nymphs' Bath?",
                "a": "One of the most beautiful Baroque fountain complexes in Germany, located in the Zwinger."
            }
        ]
    },
  },

  // DE-RP (Rheinland-Pfalz) — 15 POIs
  {
    id: "city-koblenz-extra",
    type: "city",
    parent: "DE-RP",
    coords: [7.5890, 50.3560],
    name: { de: "Koblenz", hu: "Koblenz", ro: "Koblenz", en: "Koblenz" },
    description: {
      de: "Koblenz liegt am Deutschen Eck, der Mündung der Mosel in den Rhein, und ist eine historische Festungsstadt.",
      hu: "Koblenz a Deutsches Ecknél, a Mosel és a Rajna összefolyásánál fekvő történelmi erődváros.",
      ro: "Koblenz este situată la Colțul German, confluența Moselei cu Rinul, și este un oraș-fortăreață istoric.",
      en: "Koblenz is located at the Deutsches Eck, the confluence of the Moselle and Rhine, and is a historic fortress city.",
    },
    facts: {
      de: ["Das Deutsche Eck ist das Symbol der Stadt.", "Die Festung Ehrenbreitstein überragt die Stadt gegenüber.", "Tor zur UNESCO-geschützten Kulturlandschaft Oberes Mittelrheintal."],
      hu: ["A Deutsches Eck a város szimbóluma.", "Az Ehrenbreitstein erőd magasodik a várossal szemben.", "Kapu az UNESCO-védett Felső-Közép-Rajna-völgy kulturális tájhoz."],
      ro: ["Colțul German este simbolul orașului.", "Fortăreața Ehrenbreitstein domină orașul din față.", "Poartă spre peisajul cultural protejat UNESCO al Rinului Mijlociu Superior."],
      en: ["The Deutsches Eck is the symbol of the city.", "Ehrenbreitstein Fortress rises opposite the city.", "Gateway to the UNESCO-protected Upper Middle Rhine Valley cultural landscape."],
    },
    descriptionAdvanced: {
      de: "Koblenz ist eine der ältesten Städte Deutschlands und liegt malerisch am 'Deutschen Eck', dem Zusammenfluss von Rhein und Mosel. Die Stadt blickt auf eine über 2.000-jährige Geschichte zurück, die bis in die Römerzeit reicht. Ein Wahrzeichen ist das monumentale Reiterstandbild Kaiser Wilhelms I. am Zusammenfluss. Hoch über der Stadt thront die Festung Ehrenbreitstein, eine der größten erhaltenen Festungsanlagen Europas, die über eine Seilbahn mit der Altstadt verbunden ist. Als Tor zum UNESCO-Welterbe Oberes Mittelrheintal ist Koblenz ein Zentrum des Tourismus und der Weinkultur. Die Stadt verbindet preußische Militärgeschichte mit rheinischer Lebensfreude und ist ein bedeutender Verwaltungsstandort in Rheinland-Pfalz. Geschichte K7 – Deutsche Einigung und historische Grenzfestungen.",
      hu: "A(z) Koblenz egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Koblenz ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Gegründet von den Römern im Jahr 9 v. Chr. als 'Confluentes'.", "Am 'Deutschen Eck' treffen der Rhein und die Mosel aufeinander.", "Die Festung Ehrenbreitstein ist die zweitgrößte erhaltene Festung Europas.", "Die Seilbahn über den Rhein wurde zur Bundesgartenschau 2011 errichtet.", "Einstige Residenzstadt der Kurfürsten von Trier im 18. Jahrhundert.", "Beherbergt das Schloss Stolzenfels, ein Hauptwerk der Rheinromantik."],
      hu: [
        "A(z) Koblenz területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Koblenz tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Wie alt ist Koblenz?",
                "a": "Koblenz wurde vor über 2000 Jahren von den Römern gegründet und ist eine der ältesten Städte Deutschlands."
            },
            {
                "q": "Was ist die Festung Ehrenbreitstein?",
                "a": "Eine mächtige Festungsanlage auf einem Felsen gegenüber dem Deutschen Eck."
            },
            {
                "q": "Gibt es eine Seilbahn in Koblenz?",
                "a": "Ja, sie führt über den Rhein vom Rheinufer hinauf zur Festung Ehrenbreitstein."
            },
            {
                "q": "Was ist der Schängelbrunnen?",
                "a": "Ein Brunnen am Rathaus, dessen Figur (der 'Schängel') in unregelmäßigen Abständen Wasser spuckt."
            }
        ],
        "hu": [
            {
                "q": "Milyen idős Koblenz?",
                "a": "Koblenz-et több mint 2000 évvel ezelőtt alapították a rómaiak, és Németország egyik legrégebbi városa."
            },
            {
                "q": "Mi az Ehrenbreitstein erőd?",
                "a": "Egy hatalmas erődítmény egy sziklán, a Deutsches Eck-kel szemben."
            },
            {
                "q": "Van kötélpálya Koblenzben?",
                "a": "Igen, a Rajna felett vezet a folyópartról fel az Ehrenbreitstein erődhöz."
            },
            {
                "q": "Mi a Schängel-kút?",
                "a": "Egy kút a városházánál, amelynek figurája (a 'Schängel') szabálytalan időközönként vizet köp."
            }
        ],
        "ro": [
            {
                "q": "Câți ani are Koblenz?",
                "a": "Koblenz a fost fondat de romani acum peste 2000 de ani și este unul dintre cele mai vechi orașe din Germania."
            },
            {
                "q": "Ce este Fortăreața Ehrenbreitstein?",
                "a": "O fortăreață impunătoare pe o stâncă aflată vis-a-vis de Colțul German."
            },
            {
                "q": "Există o telecabină în Koblenz?",
                "a": "Da, aceasta traversează Rinul de la malul râului până la Fortăreața Ehrenbreitstein."
            },
            {
                "q": "Ce este Fântâna Schängel?",
                "a": "O fântână de la primărie, a cărei figură ('Schängel') scuipă apă la intervale neregulate."
            }
        ],
        "en": [
            {
                "q": "How old is Koblenz?",
                "a": "Koblenz was founded by the Romans over 2000 years ago and is one of Germany's oldest cities."
            },
            {
                "q": "What is Ehrenbreitstein Fortress?",
                "a": "A powerful fortress on a rock opposite the Deutsches Eck."
            },
            {
                "q": "Is there a cable car in Koblenz?",
                "a": "Yes, it runs across the Rhine from the riverbank up to Ehrenbreitstein Fortress."
            },
            {
                "q": "What is the Schängel Fountain?",
                "a": "A fountain at the town hall whose figure (the 'Schängel') spits water at irregular intervals."
            }
        ]
    },
  },
  {
    id: "river-mosel-rp-extra",
    type: "river",
    parent: "DE-RP",
    coords: [7.0000, 50.0000],
    name: { de: "Mosel", hu: "Mosel", ro: "Mosela", en: "Moselle" },
    description: {
      de: "Die Mosel ist ein Nebenfluss des Rheins, der durch Rheinland-Pfalz fließt und für seine Weinlagen weltbekannt ist.",
      hu: "A Mosel a Rajna mellékfolyója, Rajna-vidék-Pfalzon folyik át és világhírű borvidékeiről ismert.",
      ro: "Mosela este un afluent al Rinului, care curge prin Renania-Palatinat și este renumit la nivel mondial pentru podgoriile sale.",
      en: "The Moselle is a tributary of the Rhine flowing through Rhineland-Palatinate, world-famous for its wine-growing slopes.",
    },
    facts: {
      de: ["Einer der bekanntesten Weinflüsse Deutschlands mit steilen Schieferlagen.", "Die Moselschleife bei Bremm ist eine der engsten Flussschleifen Europas.", "Verbindet Frankreich (Lothringen) mit Deutschland."],
      hu: ["Németország egyik leghíresebb borfolyója meredek palavidékkel.", "A Bremmnél lévő Mosel-kanyar Európa egyik legszűkebb folyókanyarulata.", "Franciaországot (Lotaringiát) köti össze Németországgal."],
      ro: ["Unul dintre cele mai cunoscute râuri viticole din Germania, cu pante de șist abrupte.", "Cotul Mosellei de la Bremm este unul dintre cele mai înguste meandre din Europa.", "Leagă Franța (Lorena) de Germania."],
      en: ["One of Germany's most famous wine rivers with steep slate slopes.", "The Moselle bend near Bremm is one of Europe's tightest river bends.", "Connects France (Lorraine) with Germany."],
    },
    descriptionAdvanced: {
      de: "Die Mosel ist der größte deutsche Nebenfluss des Rheins und prägt eine der ältesten und schönsten Kulturlandschaften Europas. Auf ihrem Weg durch Rheinland-Pfalz schlängelt sie sich in engen Schleifen durch das rheinische Schiefergebirge. Weltberühmt ist die Region für ihren Weinbau auf extremen Steillagen wie dem Bremmer Calmont, dem steilsten Weinberg der Welt. Die Flusslandschaft ist gesäumt von mittelalterlichen Burgen wie der Burg Eltz und historischen Winzerdörfern wie Cochem und Bernkastel-Kues. Die Mosel ist nicht nur ein bedeutender Lieferant für erstklassigen Riesling, sondern auch eine wichtige Wasserstraße, die Deutschland mit Frankreich und Luxemburg verbindet. Geographie K7 – Weinbauökologie und Flussmorphologie.",
      hu: "A(z) Mosel egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Mosel ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Beherbergt mit dem Bremmer Calmont (65 Grad) den steilsten Weinberg Europas.", "Gesamtlänge der Mosel beträgt 544 km, davon 232 km in Deutschland.", "Wichtigstes Anbaugebiet für deutschen Riesling auf Schieferböden.", "Wurde in den 1950er Jahren durch 28 Staustufen schiffbar gemacht.", "Die Moseltalbrücke bei Winningen ist mit 136 m eine der höchsten Europas.", "Traditionsreiche Handelsroute seit der Antike für Wein und Erze."],
      hu: [
        "A(z) Mosel területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Mosel tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "In welchem Land entspringt die Mosel?",
                "a": "In Frankreich, in den Vogesen."
            },
            {
                "q": "Was ist die Moselschleife?",
                "a": "Eine spektakuläre 180-Grad-Kurve des Flusses, besonders bekannt bei Bremm."
            },
            {
                "q": "Welche Rebsorte dominiert an der Mosel?",
                "a": "Der Riesling."
            },
            {
                "q": "Gibt es viele Burgen an der Mosel?",
                "a": "Ja, zahlreiche Burgen und Ruinen wie Burg Eltz oder die Reichsburg Cochem prägen das Tal."
            }
        ],
        "hu": [
            {
                "q": "Melyik országban ered a Mosel?",
                "a": "Franciaországban, a Vogézekben."
            },
            {
                "q": "Mi az a Mosel-kanyar?",
                "a": "A folyó látványos, 180 fokos kanyarulata, különösen híres Bremmnél."
            },
            {
                "q": "Melyik szőlőfajta dominál a Mosel mentén?",
                "a": "A rizling."
            },
            {
                "q": "Sok vár található a Mosel mentén?",
                "a": "Igen, számos vár és rom, mint például az Eltz-vár vagy a Cochemi birodalmi vár jellemzi a völgyet."
            }
        ],
        "ro": [
            {
                "q": "În ce țară izvorăște Mosela?",
                "a": "În Franța, în munții Vosgi."
            },
            {
                "q": "Ce este Meandrul Moselei?",
                "a": "O curbă spectaculoasă de 180 de grade a râului, deosebit de cunoscută la Bremm."
            },
            {
                "q": "Ce soi de struguri domină pe Mosela?",
                "a": "Riesling."
            },
            {
                "q": "Există multe castele pe Mosela?",
                "a": "Da, numeroase castele și ruine, cum ar fi Castelul Eltz sau Castelul Imperial Cochem, definesc valea."
            }
        ],
        "en": [
            {
                "q": "In which country does the Moselle originate?",
                "a": "In France, in the Vosges mountains."
            },
            {
                "q": "What is the Moselle Bend?",
                "a": "A spectacular 180-degree curve of the river, especially famous at Bremm."
            },
            {
                "q": "Which grape variety dominates along the Moselle?",
                "a": "Riesling."
            },
            {
                "q": "Are there many castles along the Moselle?",
                "a": "Yes, numerous castles and ruins such as Eltz Castle or Cochem Imperial Castle characterize the valley."
            }
        ]
    },
  },
  {
    id: "city-ludwigshafen-extra",
    type: "city",
    parent: "DE-RP",
    coords: [8.4419, 49.4774],
    name: { de: "Ludwigshafen", hu: "Ludwigshafen", ro: "Ludwigshafen", en: "Ludwigshafen" },
    description: {
      de: "Ludwigshafen am Rhein ist ein wichtiger Industriestandort in Rheinland-Pfalz, Heimat des BASF-Konzerns.",
      hu: "Ludwigshafen am Rhein Rajna-vidék-Pfalz egy fontos ipari helyszíne, a BASF-csoport otthona.",
      ro: "Ludwigshafen am Rhein este un important centru industrial din Renania-Palatinat, sediul grupului BASF.",
      en: "Ludwigshafen am Rhein is an important industrial location in Rhineland-Palatinate, home to the BASF Group.",
    },
    facts: {
      de: ["Heimat der BASF SE, eines der weltgrößten Chemieunternehmen.", "Das BASF-Werk ist das größte zusammenhängende Chemiewerk der Welt.", "Geburtsstadt von Bundeskanzler Helmut Kohl."],
      hu: ["A BASF SE, a világ egyik legnagyobb vegyipari vállalata otthona.", "A BASF-üzem a világ legnagyobb összefüggő vegyipari üzeme.", "Helmut Kohl szövetségi kancellár szülővárosa."],
      ro: ["Gazda BASF SE, una dintre cele mai mari companii chimice din lume.", "Uzina BASF este cea mai mare fabrică chimică contiguă din lume.", "Locul de naștere al cancelarului federal Helmut Kohl."],
      en: ["Home to BASF SE, one of the world's largest chemical companies.", "The BASF plant is the world's largest contiguous chemical plant.", "Birthplace of Federal Chancellor Helmut Kohl."],
    },
    descriptionAdvanced: {
      de: "Ludwigshafen am Rhein ist die jüngste Großstadt in Rheinland-Pfalz und ein industrielles Kraftzentrum von Weltrang. Die Stadt entstand Mitte des 19. Jahrhunderts aus einer Rheinschanze und ist untrennbar mit dem Aufstieg der chemischen Industrie verbunden. Heute beherbergt sie mit der BASF das größte zusammenhängende Chemieareal der Welt, das das wirtschaftliche Leben und das Stadtbild maßgeblich prägt. Ludwigshafen ist zudem ein bedeutender Logistikknotenpunkt mit einem leistungsfähigen Rheinhafen. Trotz ihres industriellen Charakters bietet die Stadt mit dem Ebertpark und der Rheinpromenade grüne Oasen. Sie gilt als multikulturelle Stadt und ist bekannt für das Festival des deutschen Films auf der Parkinsel. Geographie K7 – Die Industriestadt als modernes Wirtschaftszentrum.",
      hu: "A(z) Ludwigshafen egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Ludwigshafen ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Größte Stadt in der Pfalz und Sitz des Chemiekonzerns BASF.", "Erst im Jahr 1853 offiziell zur Stadt erhoben (nach Ludwig I. benannt).", "Beherbergt das weltweit größte integrierte Chemie-Verbundareal.", "Besitzt einen der leistungsfähigsten Binnenhäfen am Oberrhein.", "Bedeutender ICE-Knotenpunkt in der Metropolregion Rhein-Neckar.", "Standort der Deutschen Staatsphilharmonie Rheinland-Pfalz."],
      hu: [
        "A(z) Ludwigshafen területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Ludwigshafen tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Was ist das Hauptmerkmal von Ludwigshafen?",
                "a": "Die Stadt ist ein bedeutender Industriestandort, geprägt durch die chemische Industrie."
            },
            {
                "q": "Liegt Ludwigshafen direkt gegenüber einer anderen Stadt?",
                "a": "Ja, direkt gegenüber am anderen Rheinufer liegt Mannheim."
            },
            {
                "q": "Was ist die 'Eberthalle'?",
                "a": "Eine bekannte Mehrzweckhalle in Ludwigshafen für Sport und Kultur."
            },
            {
                "q": "Gibt es in Ludwigshafen Parks?",
                "a": "Ja, der Ebertpark ist eine grüne Oase im Herzen der Stadt."
            }
        ],
        "hu": [
            {
                "q": "Mi Ludwigshafen fő jellemzője?",
                "a": "A város jelentős ipari központ, amelyet a vegyipar határoz meg."
            },
            {
                "q": "Ludwigshafen közvetlenül egy másik várossal szemben fekszik?",
                "a": "Igen, közvetlenül szemben, a Rajna túlpartján fekszik Mannheim."
            },
            {
                "q": "Mi az az 'Eberthalle'?",
                "a": "Ismert többcélú csarnok Ludwigshafenben sport- és kulturális eseményekhez."
            },
            {
                "q": "Vannak parkok Ludwigshafenben?",
                "a": "Igen, az Ebertpark egy zöld oázis a város szívében."
            }
        ],
        "ro": [
            {
                "q": "Care este principala caracteristică a orașului Ludwigshafen?",
                "a": "Orașul este un important centru industrial, definit de industria chimică."
            },
            {
                "q": "Ludwigshafen se află direct vis-a-vis de un alt oraș?",
                "a": "Da, chiar vis-a-vis, pe celălalt mal al Rinului, se află Mannheim."
            },
            {
                "q": "Ce este 'Eberthalle'?",
                "a": "O cunoscută sală polivalentă din Ludwigshafen pentru sport și cultură."
            },
            {
                "q": "Există parcuri în Ludwigshafen?",
                "a": "Da, Ebertpark este o oază verde în inima orașului."
            }
        ],
        "en": [
            {
                "q": "What is the main feature of Ludwigshafen?",
                "a": "The city is a significant industrial location, characterized by the chemical industry."
            },
            {
                "q": "Is Ludwigshafen located directly opposite another city?",
                "a": "Yes, Mannheim is located directly opposite on the other side of the Rhine."
            },
            {
                "q": "What is the 'Eberthalle'?",
                "a": "A well-known multi-purpose hall in Ludwigshafen for sports and culture."
            },
            {
                "q": "Are there parks in Ludwigshafen?",
                "a": "Yes, the Ebertpark is a green oasis in the heart of the city."
            }
        ]
    },
  },
  {
    id: "hist-trier-porta-nigra-extra",
    type: "historical",
    parent: "DE-RP",
    coords: [6.6413, 49.7564],
    name: { de: "Trier – Porta Nigra", hu: "Trier – Porta Nigra", ro: "Trier – Porta Nigra", en: "Trier – Porta Nigra" },
    description: {
      de: "Die Porta Nigra in Trier ist das best erhaltene römische Stadttor nördlich der Alpen.",
      hu: "A trieri Porta Nigra az Alpoktól északra legjobban megőrzött római városkapu.",
      ro: "Porta Nigra din Trier este cel mai bine conservat poartă urbană romană la nord de Alpi.",
      en: "The Porta Nigra in Trier is the best-preserved Roman city gate north of the Alps.",
    },
    facts: {
      de: ["UNESCO-Weltkulturerbe als Teil der 'Römischen Baudenkmäler in Trier'.", "Erbaut im 2. Jahrhundert n. Chr.", "Im Mittelalter als Kirche genutzt."],
      hu: ["UNESCO világörökség a 'trieri római műemlékek' részeként.", "Kr.u. 2. században épült.", "A középkorban templomként használták."],
      ro: ["Patrimoniu UNESCO ca parte a 'Monumentelor romane din Trier'.", "Construit în secolul al II-lea d.Hr.", "Folosit ca biserică în Evul Mediu."],
      en: ["UNESCO World Heritage as part of the 'Roman Monuments in Trier'.", "Built in the 2nd century AD.", "Used as a church in the Middle Ages."],
    },
    descriptionAdvanced: {
      de: "Die Porta Nigra in Trier ist das am besten erhaltene römische Stadttor nördlich der Alpen und das unbestrittene Wahrzeichen der ältesten Stadt Deutschlands. Erbaut um 170 n. Chr. aus riesigen Sandsteinblöcken ohne Mörtel, zeugt sie von der Bedeutung Triers (Augusta Treverorum) als 'zweites Rom' und kaiserliche Residenz der Spätantike. Ihren Namen 'Schwarzes Tor' erhielt sie im Mittelalter aufgrund der dunklen Verfärbung des Steins. Dass das Tor erhalten blieb, verdankt es dem heiligen Simeon, der darin als Eremit lebte, woraufhin das Bauwerk in eine Doppelkirche umgewandelt wurde. Heute ist die Porta Nigra Teil des UNESCO-Weltkulturerbes und ein imposantes Tor in die Geschichte des Römischen Reiches. Geschichte K6 – Das Römische Reich und seine Provinzhauptstädte.",
      hu: "A(z) Trier – Porta Nigra egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Trier – Porta Nigra ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Bestes erhaltenes antikes Stadttor der römischen Welt außerhalb Italiens.", "Erbaut im späten 2. Jahrhundert n. Chr. aus bis zu 6 Tonnen schweren Blöcken.", "UNESCO-Weltkulturerbe seit 1986 als Teil der römischen Baudenkmäler Triers.", "Die Steine sind durch Eisenklammern, nicht durch Mörtel verbunden.", "Überlebte das Mittelalter durch die Umwandlung in eine Kirche.", "Trier war unter Konstantin dem Großen zeitweise Hauptstadt des Römischen Reiches."],
      hu: [
        "A(z) Trier – Porta Nigra területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Trier – Porta Nigra tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Was bedeutet 'Porta Nigra'?",
                "a": "Es ist lateinisch für 'Schwarzes Tor', benannt nach der dunklen Verfärbung des Sandsteins."
            },
            {
                "q": "Aus welcher Zeit stammt das Tor?",
                "a": "Es wurde um 170 n. Chr. von den Römern erbaut."
            },
            {
                "q": "Wie wurden die Steine zusammengehalten?",
                "a": "Ohne Mörtel, nur durch ihr eigenes Gewicht und Eisenklammern."
            },
            {
                "q": "Warum ist das Tor heute noch so gut erhalten?",
                "a": "Weil es im Mittelalter als Teil einer Kirche genutzt und dadurch nicht als Steinbruch missbraucht wurde."
            }
        ],
        "hu": [
            {
                "q": "Mit jelent a 'Porta Nigra'?",
                "a": "Latinul 'Fekete Kapu', a homokkő sötét elszíneződése után kapta a nevét."
            },
            {
                "q": "Melyik korból származik a kapu?",
                "a": "Kr.u. 170 körül építették a rómaiak."
            },
            {
                "q": "Hogyan fogták össze a köveket?",
                "a": "Habarcs nélkül, csak a saját súlyuk és vas kapcsok tartották össze őket."
            },
            {
                "q": "Miért maradt meg a kapu ilyen jó állapotban máig?",
                "a": "Mert a középkorban egy templom részeként használták, így nem hordták el építőanyagnak."
            }
        ],
        "ro": [
            {
                "q": "Ce înseamnă 'Porta Nigra'?",
                "a": "În latină înseamnă 'Poarta Neagră', numită astfel după culoarea închisă a gresiei."
            },
            {
                "q": "Din ce perioadă datează poarta?",
                "a": "A fost construită de romani în jurul anului 170 d.Hr."
            },
            {
                "q": "Cum au fost fixate pietrele?",
                "a": "Fără mortar, doar prin propria greutate și cleme de fier."
            },
            {
                "q": "De ce este poarta atât de bine conservată astăzi?",
                "a": "Deoarece în Evul Mediu a fost folosită ca parte a unei biserici, nefiind astfel utilizată ca sursă de piatră."
            }
        ],
        "en": [
            {
                "q": "What does 'Porta Nigra' mean?",
                "a": "It is Latin for 'Black Gate', named after the dark discoloration of the sandstone."
            },
            {
                "q": "From what period does the gate date?",
                "a": "It was built by the Romans around 170 AD."
            },
            {
                "q": "How were the stones held together?",
                "a": "Without mortar, only by their own weight and iron clamps."
            },
            {
                "q": "Why is the gate so well preserved today?",
                "a": "Because it was used as part of a church in the Middle Ages and therefore not looted for stone."
            }
        ]
    },
  },
  {
    id: "mnt-pfaelzerwald-extra",
    type: "forest",
    parent: "DE-RP",
    coords: [7.7500, 49.3333],
    name: { de: "Pfälzerwald", hu: "Pfalzi-erdő", ro: "Pădurea Palatinatului", en: "Palatinate Forest" },
    description: {
      de: "Der Pfälzerwald ist das größte zusammenhängende Waldgebiet Deutschlands und UNESCO-Biosphärenreservat.",
      hu: "A Pfalzi-erdő Németország legnagyobb összefüggő erdőterülete és UNESCO bioszféra-rezervátum.",
      ro: "Pădurea Palatinatului este cea mai mare suprafață forestieră contiguă din Germania și Rezervație UNESCO a Biosferei.",
      en: "The Palatinate Forest is Germany's largest contiguous forest area and a UNESCO Biosphere Reserve.",
    },
    facts: {
      de: ["UNESCO-Biosphärenreservat seit 1992.", "Bekannt für Burgruinen, rote Sandsteinfelsen und Wanderwege.", "Grenzt direkt an das Nordvogesen-Biosphärenreservat in Frankreich."],
      hu: ["1992 óta UNESCO bioszféra-rezervátum.", "Váromladékokról, vörös homokkősziklákról és túraútvonalairól ismert.", "Közvetlenül határos a franciaországi Északi-Vogézek bioszféra-rezervátummal."],
      ro: ["Rezervație a Biosferei UNESCO din 1992.", "Cunoscut pentru ruine de castele, stânci de gresie roșie și trasee de drumeție.", "Se învecinează direct cu Rezervația Biosferei Vosges du Nord din Franța."],
      en: ["UNESCO Biosphere Reserve since 1992.", "Known for castle ruins, red sandstone rocks, and hiking trails.", "Directly adjoins the Northern Vosges Biosphere Reserve in France."],
    },
    descriptionAdvanced: {
      de: "Der Pfälzerwald im Südwesten Deutschlands ist das größte zusammenhängende Waldgebiet der Bundesrepublik und eine faszinierende Buntsandsteinlandschaft. Zusammen mit den angrenzenden Nordvogesen bildet er ein grenzüberschreitendes UNESCO-Biosphärenreservat. Die Region ist geprägt durch weite Kiefern- und Buchenwälder, markante Felsformationen wie den Teufelstisch und eine außergewöhnliche Dichte an mittelalterlichen Burgen, darunter die Reichsfestung Trifels. Ein dichtes Netz an Wanderwegen und die traditionellen Pfälzerwald-Hütten machen die Region zu einem Paradies für Naturfreunde. Die klimatisch begünstigte 'Weinstraße' an seinem Ostrand ist zudem berühmt für ihren Weinbau und das milde Klima. Geographie K6 – Biosphärenreservate und nachhaltiger Tourismus.",
      hu: "A(z) Pfälzerwald egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Pfälzerwald ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Größtes zusammenhängendes Waldgebiet in ganz Deutschland (ca. 177.000 ha).", "UNESCO-Biosphärenreservat Pfälzerwald-Nordvogesen seit 1992.", "Besteht geologisch überwiegend aus Schichten des Buntsandsteins.", "Beherbergt über 500 mittelalterliche Burgen und Burgruinen.", "Höchster Gipfel ist die Kalmit mit 673 Metern Höhe.", "Die Pfälzerwald-Hütten-Kultur gehört zum immateriellen Kulturerbe der UNESCO."],
      hu: [
        "A(z) Pfälzerwald területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Pfälzerwald tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Was ist das Besondere am Pfälzerwald?",
                "a": "Er ist Teil des grenzüberschreitenden Biosphärenreservats Pfälzerwald-Nordvogesen."
            },
            {
                "q": "Gibt es dort viele Burgen?",
                "a": "Ja, der Pfälzerwald ist bekannt für seine vielen Felsenburgen wie den Trifels."
            },
            {
                "q": "Was sind die 'Pfälzerwald-Hütten'?",
                "a": "Ein dichtes Netz von bewirtschafteten Wanderhütten, die für ihre regionale Küche bekannt sind."
            },
            {
                "q": "Welche Gesteinsart prägt die Landschaft?",
                "a": "Der Buntsandstein mit seinen markanten roten Felsformationen."
            }
        ],
        "hu": [
            {
                "q": "Mi a különleges a Pfalzi-erdőben?",
                "a": "A Pfalzi-erdő-Északi-Vogézek határon átnyúló bioszféra-rezervátum része."
            },
            {
                "q": "Sok vár található ott?",
                "a": "Igen, a Pfalzi-erdő híres számos sziklaváráról, mint például a Trifels."
            },
            {
                "q": "Mik azok a 'Pfalzi-erdő kunyhók'?",
                "a": "Gyalogos turistaházak sűrű hálózata, amelyek a regionális konyhájukról ismertek."
            },
            {
                "q": "Melyik kőzetfajta határozza meg a tájat?",
                "a": "A tarka homokkő a jellegzetes vörös sziklaképződményeivel."
            }
        ],
        "ro": [
            {
                "q": "Ce este special la Pădurea Palatinatului?",
                "a": "Face parte din rezervația biosferei transfrontaliere Pădurea Palatinatului-Vosgii de Nord."
            },
            {
                "q": "Există multe castele acolo?",
                "a": "Da, Pădurea Palatinatului este cunoscută pentru numeroasele sale cetăți pe stâncă, precum Trifels."
            },
            {
                "q": "Ce sunt 'Cabanele din Pădurea Palatinatului'?",
                "a": "O rețea densă de cabane montane cu servire, cunoscute pentru bucătăria lor regională."
            },
            {
                "q": "Ce tip de rocă definește peisajul?",
                "a": "Gresia pestriță cu formațiunile sale stâncoase roșii distinctive."
            }
        ],
        "en": [
            {
                "q": "What is special about the Palatinate Forest?",
                "a": "It is part of the cross-border Palatinate Forest-North Vosges Biosphere Reserve."
            },
            {
                "q": "Are there many castles there?",
                "a": "Yes, the Palatinate Forest is known for its many rock castles such as Trifels."
            },
            {
                "q": "What are the 'Palatinate Forest Huts'?",
                "a": "A dense network of managed hiking huts known for their regional cuisine."
            },
            {
                "q": "What type of rock characterizes the landscape?",
                "a": "Bunter sandstone with its prominent red rock formations."
            }
        ]
    },
  },
  {
    id: "river-nahe-extra",
    type: "river",
    parent: "DE-RP",
    coords: [7.5000, 49.9000],
    name: { de: "Nahe", hu: "Nahe", ro: "Nahe", en: "Nahe" },
    description: {
      de: "Die Nahe ist ein linker Nebenfluss des Rheins in Rheinland-Pfalz, bekannt für ihr Weinbaugebiet.",
      hu: "A Nahe a Rajna bal oldali mellékfolyója Rajna-vidék-Pfalzban, borvidékéről ismert.",
      ro: "Nahe este un afluent stâng al Rinului în Renania-Palatinat, cunoscut pentru zona sa viticolă.",
      en: "The Nahe is a left tributary of the Rhine in Rhineland-Palatinate, known for its wine-growing area.",
    },
    facts: {
      de: ["Fließt durch Bad Kreuznach und mündet bei Bingen in den Rhein.", "Das Weinanbaugebiet Nahe ist eines der kleinsten Qualitätsweingebiete Deutschlands.", "Berühmt für Heilsteine und Edelsteine in der Region."],
      hu: ["Bad Kreuznachon folyik át és Bingennél torkollik a Rajnába.", "A Nahe borvidék Németország egyik legkisebb minőségi bortermő vidéke.", "A régió gyógyköveivel és ékköveivel is híressé vált."],
      ro: ["Curge prin Bad Kreuznach și se varsă în Rin la Bingen.", "Regiunea viticolă Nahe este una dintre cele mai mici zone de vin de calitate din Germania.", "Renumit și pentru pietrele prețioase și pietrele vindecătoare din regiune."],
      en: ["Flows through Bad Kreuznach and joins the Rhine at Bingen.", "The Nahe wine-growing region is one of Germany's smallest quality wine areas.", "Famous for healing stones and gemstones in the region."],
    },
    descriptionAdvanced: {
      de: "Die Nahe ist ein 125 Kilometer langer linker Nebenfluss des Rheins, der eine der geologisch abwechslungsreichsten Landschaften Deutschlands durchfließt. Weltbekannt ist das Nahetal für Idar-Oberstein, die 'Edelsteinstadt', deren Tradition auf den Funden von Achaten und Amethysten im 14. Jahrhundert beruht. Ein spektakuläres Naturdenkmal am Flusslauf ist der Rotenfels, die höchste Steilwand nördlich der Alpen. Die Naheregion ist zudem ein renommiertes Weinanbaugebiet, das für seine charakterstarken Rieslinge auf vulkanischem Boden geschätzt wird. Historische Brückenhäuser in Bad Kreuznach und die Mündung in den Rhein bei Bingen prägen den Lauf dieses faszinierenden Flusses. Geographie K7 – Gesteinsvielfalt und regionale Wirtschaftskreisläufe.",
      hu: "A(z) Nahe egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Nahe ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Gesamtlänge von 125 km mit Mündung in den Rhein bei Bingen.", "Zentrum der deutschen Edelsteinindustrie in Idar-Oberstein.", "Der Rotenfels am Ufer ist mit 202 m die höchste Steilwand Deutschlands.", "Erste urkundliche Erwähnung durch Tacitus als 'Navas' (ca. 100 n. Chr.).", "Besitzt eines der vielfältigsten Weinbaugebiete auf engstem Raum.", "Die Drususbrücke in Bingen ist eine der ältesten Steinbrücken des Landes."],
      hu: [
        "A(z) Nahe területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Nahe tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Wo mündet die Nahe?",
                "a": "Bei Bingen am Rhein."
            },
            {
                "q": "Was ist das Besondere an Idar-Oberstein an der Nahe?",
                "a": "Es ist weltbekannt als Edelsteinstadt."
            },
            {
                "q": "Gibt es Kurorte an der Nahe?",
                "a": "Ja, z.B. Bad Kreuznach und Bad Münster am Stein-Ebernburg."
            },
            {
                "q": "Wofür ist das Weinbaugebiet Nahe bekannt?",
                "a": "Für seine große Bodenvielfalt auf engem Raum und elegante Rieslinge."
            }
        ],
        "hu": [
            {
                "q": "Hol torkollik a Nahe?",
                "a": "Bingennél a Rajnába."
            },
            {
                "q": "Mi a különleges az Idar-Oberstein-ben a Nahe mentén?",
                "a": "Világhírű drágakővárosként ismert."
            },
            {
                "q": "Vannak gyógyfürdők a Nahe mentén?",
                "a": "Igen, pl. Bad Kreuznach és Bad Münster am Stein-Ebernburg."
            },
            {
                "q": "Miről ismert a Nahe borvidék?",
                "a": "A kis területen belüli nagy talajváltozatosságáról és elegáns rizlingjeiről ismert."
            }
        ],
        "ro": [
            {
                "q": "Unde se varsă Nahe?",
                "a": "La Bingen, în Rin."
            },
            {
                "q": "Ce este special la Idar-Oberstein pe Nahe?",
                "a": "Este cunoscut la nivel mondial ca oraș al pietrelor prețioase."
            },
            {
                "q": "Există stațiuni balneare pe Nahe?",
                "a": "Da, de ex. Bad Kreuznach și Bad Münster am Stein-Ebernburg."
            },
            {
                "q": "Pentru ce este cunoscută regiunea viticolă Nahe?",
                "a": "Pentru marea diversitate a solului pe un spațiu restrâns și Riesling-urile elegante."
            }
        ],
        "en": [
            {
                "q": "Where does the Nahe flow into?",
                "a": "At Bingen into the Rhine."
            },
            {
                "q": "What is special about Idar-Oberstein on the Nahe?",
                "a": "It is world-famous as a gemstone city."
            },
            {
                "q": "Are there spa towns on the Nahe?",
                "a": "Yes, e.g., Bad Kreuznach and Bad Münster am Stein-Ebernburg."
            },
            {
                "q": "What is the Nahe wine region known for?",
                "a": "For its great soil diversity within a small area and elegant Rieslings."
            }
        ]
    },
  },
  {
    id: "landmark-deutsches-eck-extra",
    type: "landmark",
    parent: "DE-RP",
    coords: [7.5944, 50.3639],
    name: { de: "Deutsches Eck", hu: "Deutsches Eck", ro: "Colțul German", en: "Deutsches Eck" },
    description: {
      de: "Das Deutsche Eck in Koblenz ist das Landspitzenkap, wo Mosel in den Rhein mündet, mit einem markanten Denkmal.",
      hu: "A koblenzi Deutsches Eck az a földnyelvcsúcs, ahol a Mosel a Rajnába ömlik, egy kiemelkedő emlékművel.",
      ro: "Colțul German din Koblenz este promontoriul unde Mosela se varsă în Rin, cu un monument remarcabil.",
      en: "The Deutsches Eck in Koblenz is the headland where the Moselle flows into the Rhine, featuring a prominent monument.",
    },
    facts: {
      de: ["Ein Reiterstandbild Kaiser Wilhelms I. steht hier.", "Im Zweiten Weltkrieg zerstört, 1993 wiederaufgestellt.", "Eines der meistbesuchten Wahrzeichen in Rheinland-Pfalz."],
      hu: ["I. Vilmos császár lovas szobra áll itt.", "A második világháborúban megsemmisült, 1993-ban újra felállították.", "Rajna-vidék-Pfalz egyik leglátogatottabb jelképe."],
      ro: ["Statuia ecvestră a împăratului Wilhelm I se află aici.", "Distrus în Al Doilea Război Mondial, refăcut în 1993.", "Unul dintre cele mai vizitate repere din Renania-Palatinat."],
      en: ["An equestrian statue of Emperor Wilhelm I stands here.", "Destroyed in World War II, re-erected in 1993.", "One of the most visited landmarks in Rhineland-Palatinate."],
    },
    descriptionAdvanced: {
      de: "Das Deutsche Eck in Koblenz ist eine künstlich angelegte Landzunge am Zusammenfluss von Rhein und Mosel und einer der symbolträchtigsten Orte der deutschen Einheit. Seinen Namen verdankt der Ort dem Deutschen Orden, der sich hier im Jahr 1216 niederließ. Das monumentale Reiterstandbild von Kaiser Wilhelm I., das 1897 errichtet wurde, sollte die Gründung des Deutschen Reiches feiern. Nach seiner Zerstörung im Zweiten Weltkrieg diente der Sockel als Mahnmal für die deutsche Einheit, bevor das Standbild 1993 rekonstruiert wurde. Heute ist das Deutsche Eck ein Magnet für Touristen aus aller Welt und der Ausgangspunkt für die Seilbahn zur Festung Ehrenbreitstein. Geschichte K7 – Reichsgründung und nationale Denkmäler.",
      hu: "A(z) Deutsches Eck egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Deutsches Eck ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Markiert den Zusammenfluss der Bundeswasserstraßen Rhein und Mosel.", "Das Reiterstandbild ist insgesamt 37 Meter hoch (Figur 14 Meter).", "Benannt nach der Niederlassung des Deutschen Ordens im 13. Jahrhundert.", "Diente von 1953 bis 1993 als Mahnmal für die deutsche Wiedervereinigung.", "Gehört zum UNESCO-Welterbe Oberes Mittelrheintal.", "Besitzt Flaggenmasten aller 16 deutschen Bundesländer am Uferweg."],
      hu: [
        "A(z) Deutsches Eck területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Deutsches Eck tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Welche Flüsse treffen am Deutschen Eck zusammen?",
                "a": "Rhein und Mosel."
            },
            {
                "q": "Wen stellt das große Denkmal dar?",
                "a": "Kaiser Wilhelm I. auf einem Pferd."
            },
            {
                "q": "Warum heißt es 'Deutsches Eck'?",
                "a": "Nach der Ansiedlung des Deutschen Ordens an dieser Stelle im Jahr 1216."
            },
            {
                "q": "Was ist im Sockel des Denkmals zu sehen?",
                "a": "Wappen aller deutschen Bundesländer."
            }
        ],
        "hu": [
            {
                "q": "Mely folyók találkoznak a Deutsches Eck-nél?",
                "a": "A Rajna és a Mosel."
            },
            {
                "q": "Kit ábrázol a nagy emlékmű?",
                "a": "I. Vilmos császárt lovon."
            },
            {
                "q": "Miért hívják 'Deutsches Eck'-nek?",
                "a": "A Német Lovagrend 1216-os itteni letelepedése után kapta a nevét."
            },
            {
                "q": "Mi látható az emlékmű talpazatánál?",
                "a": "Az összes német szövetségi állam címere."
            }
        ],
        "ro": [
            {
                "q": "Ce râuri se întâlnesc la Colțul German?",
                "a": "Rinul și Mosela."
            },
            {
                "q": "Pe cine reprezintă marele monument?",
                "a": "Împăratul Wilhelm I pe cal."
            },
            {
                "q": "De ce se numește 'Colțul German'?",
                "a": "După așezarea Ordinului Teuton în acest loc în anul 1216."
            },
            {
                "q": "Ce se poate vedea la baza monumentului?",
                "a": "Stemele tuturor landurilor germane."
            }
        ],
        "en": [
            {
                "q": "Which rivers meet at the Deutsches Eck?",
                "a": "The Rhine and the Moselle."
            },
            {
                "q": "Who does the large monument represent?",
                "a": "Emperor Wilhelm I on a horse."
            },
            {
                "q": "Why is it called 'Deutsches Eck'?",
                "a": "After the settlement of the Teutonic Order at this location in 1216."
            },
            {
                "q": "What can be seen in the base of the monument?",
                "a": "Coats of arms of all German federal states."
            }
        ]
    },
  },
  {
    id: "mnt-eifel-rp-extra",
    type: "mountain",
    parent: "DE-RP",
    coords: [6.7500, 50.3500],
    name: { de: "Eifel (Rheinland-Pfalz)", hu: "Eifel (Rajna-vidék-Pfalz)", ro: "Eifel (Renania-Palatinat)", en: "Eifel (Rhineland-Palatinate)" },
    description: {
      de: "Die Eifel ist ein Mittelgebirge in Rheinland-Pfalz mit Maaren, Vulkankraterseen und ausgedehnten Wäldern.",
      hu: "Az Eifel egy középhegység Rajna-vidék-Pfalzban, vulkáni krátertavakkal (Maar) és kiterjedt erdőkkel.",
      ro: "Eifel este un lanț muntos din Renania-Palatinat cu maare, lacuri în cratere vulcanice și păduri extinse.",
      en: "The Eifel is a low mountain range in Rhineland-Palatinate with maar lakes, volcanic crater lakes, and extensive forests.",
    },
    facts: {
      de: ["Bekannt für Vulkane und Maare (z.B. Laacher See).", "Der Nürburgring liegt in der Eifel.", "Nationalpark Eifel wurde 2004 eröffnet."],
      hu: ["Vulkánjairól és maárjairól ismert (pl. Laacher See).", "A Nürburgring az Eifelben található.", "Az Eifel Nemzeti Park 2004-ben nyílt meg."],
      ro: ["Cunoscut pentru vulcani și maare (de ex. Laacher See).", "Nürburgring se află în Eifel.", "Parcul Național Eifel a fost deschis în 2004."],
      en: ["Known for volcanoes and maar lakes (e.g., Laacher See).", "The Nürburgring is located in the Eifel.", "Eifel National Park opened in 2004."],
    },
    descriptionAdvanced: {
      de: "Die Eifel ist ein faszinierendes Mittelgebirge vulkanischen Ursprungs, das sich über Rheinland-Pfalz und Nordrhein-Westfalen erstreckt. Einzigartig in Deutschland sind die 'Maare' – wassergefüllte Kraterseen, die durch gewaltige Wasserdampfexplosionen entstanden sind und als 'Augen der Eifel' bezeichnet werden. Die Region ist geologisch noch immer aktiv, was sich an aufsteigenden Gasen im Laacher See zeigt. Neben spektakulärer Natur bietet die Eifel historische Schätze wie die Burg Eltz und das mittelalterliche Monschau. Der Nürburgring, eine der berühmtesten Rennstrecken der Welt, ist ebenfalls hier beheimatet. Die Eifel ist heute ein bedeutendes Schutzgebiet mit dem ersten Nationalpark in Nordrhein-Westfalen. Geographie K6 – Vulkanismus und Formschatz der Mittelgebirge.",
      hu: "A(z) Eifel (Rheinland-Pfalz) egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Eifel (Rheinland-Pfalz) ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Umfasst eine Gesamtfläche von ca. 5.300 Quadratkilometern.", "Besitzt mit dem Pulvermaar eines der tiefsten Maare Deutschlands (72 m).", "Letzter großer Vulkanausbruch erfolgte vor nur ca. 13.000 Jahren.", "Standort des Nürburgrings, der 'Grünen Hölle' der Eifel.", "Besteht geologisch aus dem rheinischen Schiefergebirge.", "UNESCO Global Geopark Vulkaneifel schützt das erdgeschichtliche Erbe."],
      hu: [
        "A(z) Eifel (Rheinland-Pfalz) területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Eifel (Rheinland-Pfalz) tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Was ist ein 'Maar'?",
                "a": "Ein durch Wasserdampfexplosionen entstandener Vulkankrater, der oft mit Wasser gefüllt ist."
            },
            {
                "q": "Gibt es in der Eifel noch aktive Vulkane?",
                "a": "Die Vulkane gelten als schlafend, aber nicht als erloschen."
            },
            {
                "q": "Was ist die Hohe Acht?",
                "a": "Mit 747 m der höchste Berg der Eifel."
            },
            {
                "q": "Was ist das 'Dahner Felsenland'?",
                "a": "Eine Region in der Südpfalz (nicht Eifel), bekannt für bizarre Sandsteinfelsen."
            }
        ],
        "hu": [
            {
                "q": "Mi az a 'Maar'?",
                "a": "Vízgőzrobbanás által keletkezett vulkáni kráter, amely gyakran vízzel telített."
            },
            {
                "q": "Vannak még aktív vulkánok az Eifelben?",
                "a": "A vulkánok alvónak számítanak, de nem kialudtnak."
            },
            {
                "q": "Mi a Hohe Acht?",
                "a": "747 méterrel az Eifel legmagasabb hegye."
            },
            {
                "q": "Mi az a 'Dahner Felsenland'?",
                "a": "Egy régió Dél-Pfalzban (nem az Eifelben), amely bizarr homokkőszikláiról ismert."
            }
        ],
        "ro": [
            {
                "q": "Ce este un 'Maar'?",
                "a": "Un crater vulcanic format prin explozii de vapori de apă, care este adesea umplut cu apă."
            },
            {
                "q": "Mai există vulcani activi în Eifel?",
                "a": "Vulcanii sunt considerați adormiți, dar nu stinși."
            },
            {
                "q": "Ce este Hohe Acht?",
                "a": "Cea mai înaltă cotă din Eifel, având 747 m."
            },
            {
                "q": "Ce este 'Dahner Felsenland'?",
                "a": "O regiune din Palatinatul de Sud (nu în Eifel), cunoscută pentru stâncile bizare de gresie."
            }
        ],
        "en": [
            {
                "q": "What is a 'Maar'?",
                "a": "A volcanic crater formed by steam explosions, often filled with water."
            },
            {
                "q": "Are there still active volcanoes in the Eifel?",
                "a": "The volcanoes are considered dormant, but not extinct."
            },
            {
                "q": "What is the Hohe Acht?",
                "a": "At 747 m, the highest mountain in the Eifel."
            },
            {
                "q": "What is the 'Dahner Felsenland'?",
                "a": "A region in the Southern Palatinate (not Eifel), known for bizarre sandstone rocks."
            }
        ]
    },
  },
  {
    id: "lake-laacher-see-extra",
    type: "lake",
    parent: "DE-RP",
    coords: [7.2667, 50.4000],
    name: { de: "Laacher See", hu: "Laacher-tó", ro: "Lacul Laacher", en: "Laacher See" },
    description: {
      de: "Der Laacher See ist ein Vulkankratersee (Maar) in der Eifel und der größte natürliche See in Rheinland-Pfalz.",
      hu: "A Laacher-tó egy vulkáni krátertó (Maar) az Eifelben, Rajna-vidék-Pfalz legnagyobb természetes tava.",
      ro: "Lacul Laacher este un lac în craterul unui vulcan (maar) din Eifel și cel mai mare lac natural din Renania-Palatinat.",
      en: "Laacher See is a volcanic crater lake (maar) in the Eifel and the largest natural lake in Rhineland-Palatinate.",
    },
    facts: {
      de: ["Entstand durch einen Vulkanausbruch vor ca. 12.900 Jahren.", "Heute noch CO₂-Ausgasungen an der Seeoberfläche.", "Die Abtei Maria Laach liegt direkt am Seeufer."],
      hu: ["Kb. 12.900 évvel ezelőtti vulkánkitörés hozta létre.", "Ma is CO₂ szivárog a tó felszínén.", "A Maria Laach kolostor közvetlenül a tó partján áll."],
      ro: ["Format printr-o erupție vulcanică acum aproximativ 12.900 de ani.", "Încă apar degajări de CO₂ la suprafața lacului.", "Abația Maria Laach este situată direct pe malul lacului."],
      en: ["Formed by a volcanic eruption approximately 12,900 years ago.", "CO₂ emissions still occur on the lake surface today.", "Maria Laach Abbey is located directly on the lakeshore."],
    },
    descriptionAdvanced: {
      de: "Der Laacher See in der Vulkaneifel ist kein gewöhnlicher See, sondern die wassergefüllte Caldera eines schlafenden Vulkans. Er entstand nach der gewaltigen Eruption des Laacher Vulkans vor etwa 13.000 Jahren, die ganz Mitteleuropa mit Asche bedeckte. Heute ist er der größte See in Rheinland-Pfalz und ein Naturschutzgebiet von europäischem Rang. An seinem Ostufer steigen noch immer vulkanische Gase (Mofetten) in Form von Bläschen auf – ein Zeichen für die magmatische Aktivität im Untergrund. Direkt am Seeufer liegt die prachtvolle hochromanische Abtei Maria Laach, ein kulturelles Juwel des Mittelalters. Der See verbindet auf faszinierende Weise Erdgeschichte mit sakraler Architektur. Geographie K6 – Magmatismus und Vulkanformen in Deutschland.",
      hu: "A(z) Laacher See egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Laacher See ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Größter See in Rheinland-Pfalz mit ca. 3,3 km² Wasserfläche.", "Entstand durch einen der gewaltigsten Vulkanausbrüche Europas.", "Maximaltiefe des Sees beträgt 51 Meter.", "Aufsteigende CO2-Bläschen am Ufer belegen den aktiven Vulkanismus.", "Heimat der berühmten Benediktinerabtei Maria Laach (gegründet 1093).", "Das gesamte Gebiet steht seit 1935 unter Naturschutz."],
      hu: [
        "A(z) Laacher See területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Laacher See tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Ist der Laacher See ein echter Kratersee?",
                "a": "Er ist eine wassergefüllte Caldera, die nach einem gewaltigen Vulkanausbruch eingebrochen ist."
            },
            {
                "q": "Was sind die 'Mofetten' am Ostufer?",
                "a": "Aufsteigende CO₂-Blasen im Wasser, die auf vulkanische Aktivität hinweisen."
            },
            {
                "q": "Was ist Maria Laach?",
                "a": "Eine berühmte hochmittelalterliche Benediktinerabtei direkt am See."
            },
            {
                "q": "Kann man im Laacher See schwimmen?",
                "a": "Ja, am Campingplatz gibt es eine ausgewiesene Badestelle."
            }
        ],
        "hu": [
            {
                "q": "A Laacher See valódi krátertó?",
                "a": "Ez egy vízzel telt kaldera, amely egy hatalmas vulkánkitörés után omlott be."
            },
            {
                "q": "Mik azok a 'mofetták' a keleti parton?",
                "a": "A vízben feláramló CO₂ buborékok, amelyek vulkáni aktivitásra utalnak."
            },
            {
                "q": "Mi az a Maria Laach?",
                "a": "Egy híres középkori bencés apátság közvetlenül a tó partján."
            },
            {
                "q": "Lehet úszni a Laacher See-ben?",
                "a": "Igen, a kempingnél van egy kijelölt fürdőhely."
            }
        ],
        "ro": [
            {
                "q": "Este Lacul Laacher un lac de crater adevărat?",
                "a": "Este o calderă umplută cu apă, care s-a prăbușit după o erupție vulcanică violentă."
            },
            {
                "q": "Ce sunt 'mofetele' de pe malul estic?",
                "a": "Bule de CO₂ care se ridică în apă, indicând activitate vulcanică."
            },
            {
                "q": "Ce este Maria Laach?",
                "a": "O faimoasă abație benedictină din Evul Mediu clasic, situată chiar pe malul lacului."
            },
            {
                "q": "Se poate înota în Lacul Laacher?",
                "a": "Da, există un loc de scăldat amenajat la locul de camping."
            }
        ],
        "en": [
            {
                "q": "Is Laacher See a true crater lake?",
                "a": "It is a water-filled caldera that collapsed after a massive volcanic eruption."
            },
            {
                "q": "What are the 'mofettes' on the east bank?",
                "a": "Rising CO₂ bubbles in the water that indicate volcanic activity."
            },
            {
                "q": "What is Maria Laach?",
                "a": "A famous high medieval Benedictine abbey located right on the lake."
            },
            {
                "q": "Can you swim in Laacher See?",
                "a": "Yes, there is a designated swimming area at the campsite."
            }
        ]
    },
  },
  {
    id: "hist-speyer-dom-extra",
    type: "historical",
    parent: "DE-RP",
    coords: [8.4350, 49.3175],
    name: { de: "Speyerer Dom", hu: "Speyeri dóm", ro: "Catedrala din Speyer", en: "Speyer Cathedral" },
    description: {
      de: "Der Speyerer Dom ist eine romanische Kaiserkathedrale aus dem 11. Jahrhundert und UNESCO-Weltkulturerbe.",
      hu: "A speyeri dóm egy 11. századi román stílusú császári katedrális és UNESCO világörökség.",
      ro: "Catedrala din Speyer este o catedrală imperială romanică din secolul al XI-lea și Patrimoniu UNESCO.",
      en: "Speyer Cathedral is a Romanesque imperial cathedral from the 11th century and a UNESCO World Heritage Site.",
    },
    facts: {
      de: ["UNESCO-Weltkulturerbe seit 1981.", "Eines der größten romanischen Bauwerke der Welt.", "Grabstätte mehrerer salischer und staufischer Kaiser."],
      hu: ["1981 óta UNESCO világörökség.", "A világ egyik legnagyobb román kori épülete.", "Több saliai és stauf császár temetkezési helye."],
      ro: ["Patrimoniu UNESCO din 1981.", "Una dintre cele mai mari construcții romanice din lume.", "Loc de înmormântare al mai multor împărați salici și Hohenstaufen."],
      en: ["UNESCO World Heritage Site since 1981.", "One of the largest Romanesque buildings in the world.", "Burial site of several Salian and Staufen emperors."],
    },
    descriptionAdvanced: {
      de: "Der Kaiserdom zu Speyer ist das bedeutendste Baudenkmal der Romanik und war 1981 eines der ersten deutschen Denkmäler auf der UNESCO-Welterbeliste. Errichtet ab 1030 unter Konrad II., sollte er die größte Kirche der christlichen Welt sein und den Machtanspruch der salischen Kaiser untermauern. Mit seiner monumentalen Krypta beherbergt er die Grablege von acht mittelalterlichen Kaisern und Königen. Die Architektur mit dem einzigartigen Blendarkaden-System und dem Zwerggalerie-Umlauf beeinflusste den Kirchenbau in ganz Europa. Der Speyerer Dom ist ein Symbol für das Heilige Römische Reich und eine spirituelle Landmarke am Rhein, die fast 1.000 Jahre Geschichte atmet. Geschichte K6 – Das salische Kaisertum und romanische Sakralbauten.",
      hu: "A(z) Speyerer Dom egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Speyerer Dom ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Größte erhaltene romanische Kirche der Welt (UNESCO-Welterbe seit 1981).", "Grablege von acht mittelalterlichen Kaisern und Königen.", "Die Krypta ist die größte romanische Hallenkrypta in Europa.", "Erbaut als monumentale Grabstätte der Salier-Dynastie ab ca. 1030.", "Besitzt eine Gesamtlänge von 134 Metern und eine Turmhöhe von 71 Metern.", "Überlebte die Zerstörung der Stadt im Pfälzischen Erbfolgekrieg 1689 teilweise."],
      hu: [
        "A(z) Speyerer Dom területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Speyerer Dom tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Was ist das Besondere an der Krypta des Speyerer Doms?",
                "a": "Sie ist die größte romanische Hallenkrypta Europas und Grablege deutscher Kaiser."
            },
            {
                "q": "Was bedeutet 'Kaiserdom'?",
                "a": "Dass der Bau von einem Kaiser (Konrad II.) gestiftet und als Grablege geplant wurde."
            },
            {
                "q": "Was ist der 'Domnapf'?",
                "a": "Eine große Steinschale vor dem Dom, die früher bei besonderen Anlässen mit Wein gefüllt wurde."
            },
            {
                "q": "Aus welchem Material besteht der Dom?",
                "a": "Hauptsächlich aus rotem Sandstein."
            }
        ],
        "hu": [
            {
                "q": "Mi a különleges a speyeri dóm kriptájában?",
                "a": "Ez Európa legnagyobb román stílusú csarnokkriptája és német császárok temetkezési helye."
            },
            {
                "q": "Mit jelent a 'Kaiserdom'?",
                "a": "Azt, hogy az építést egy császár (II. Konrád) alapította és temetkezési helynek szánta."
            },
            {
                "q": "Mi az a 'Domnapf'?",
                "a": "Egy nagy kőtál a dóm előtt, amelyet korábban különleges alkalmakkor borral töltöttek meg."
            },
            {
                "q": "Milyen anyagból készült a dóm?",
                "a": "Főként vörös homokkőből."
            }
        ],
        "ro": [
            {
                "q": "Ce este special la cripta Catedralei din Speyer?",
                "a": "Este cea mai mare criptă-hală romanică din Europa și loc de înmormântare al împăraților germani."
            },
            {
                "q": "Ce înseamnă 'Catedrală Imperială'?",
                "a": "Că edificiul a fost ctitorit de un împărat (Conrad al II-lea) și planificat ca loc de înmormântare."
            },
            {
                "q": "Ce este 'Domnapf'?",
                "a": "Un mare vas de piatră în fața catedralei, care odinioară era umplut cu vin la ocazii speciale."
            },
            {
                "q": "Din ce material este construită catedrala?",
                "a": "În principal din gresie roșie."
            }
        ],
        "en": [
            {
                "q": "What is special about the crypt of Speyer Cathedral?",
                "a": "It is the largest Romanesque hall crypt in Europe and the burial site of German emperors."
            },
            {
                "q": "What does 'Imperial Cathedral' mean?",
                "a": "That the building was endowed by an emperor (Conrad II) and planned as a burial site."
            },
            {
                "q": "What is the 'Domnapf'?",
                "a": "A large stone bowl in front of the cathedral that used to be filled with wine on special occasions."
            },
            {
                "q": "What material is the cathedral made of?",
                "a": "Primarily from red sandstone."
            }
        ]
    },
  },
  {
    id: "landmark-loreley-rp-extra",
    type: "landmark",
    parent: "DE-RP",
    coords: [7.7244, 50.1339],
    name: { de: "Loreley", hu: "Loreley", ro: "Loreley", en: "Loreley" },
    description: {
      de: "Die Loreley ist ein 132 m hoher Schieferfelsen am Rhein, verbunden mit der Sagengestalt der Loreley.",
      hu: "A Loreley egy 132 m magas palaazikla a Rajnán, a Loreley mondaalakhoz kötődő helyszín.",
      ro: "Loreley este o stâncă de șist de 132 m pe Rin, asociată cu figura legendară Loreley.",
      en: "The Loreley is a 132 m slate rock on the Rhine, associated with the legendary figure of the Loreley.",
    },
    facts: {
      de: ["Die Enge bei der Loreley ist die gefährlichste Stelle des Rheins für die Schifffahrt.", "Die Sage von der schönen Loreley wurde durch Heinrich Heine weltweit bekannt.", "Teil des UNESCO-Welterbes 'Oberes Mittelrheintal'."],
      hu: ["A Loreleinél lévő szoros a Rajna leghajózóbb szempontból legveszélyesebb helye.", "A szép Loreley mondáját Heinrich Heine tette világhírűvé.", "Az UNESCO 'Felső-Közép-Rajna-völgy' világörökség része."],
      ro: ["Strimtoarea de la Loreley este cel mai periculos loc de pe Rin pentru navigație.", "Legenda frumoasei Loreley a fost făcută faimoasă la nivel mondial de Heinrich Heine.", "Parte a Patrimoniului UNESCO 'Valea Rinului Mijlociu Superior'."],
      en: ["The narrows at the Loreley are the most dangerous stretch of the Rhine for shipping.", "The legend of the beautiful Loreley was made world-famous by Heinrich Heine.", "Part of the UNESCO World Heritage 'Upper Middle Rhine Valley'."],
    },
    descriptionAdvanced: {
      de: "Der Loreley-Felsen bei Sankt Goarshausen ist der Inbegriff der Rheinromantik und gehört zum UNESCO-Welterbe Oberes Mittelrheintal. Der 132 Meter hohe Schieferfelsen ragt steil an einer der engsten und tiefsten Stellen des Rheins auf, wo die starke Strömung früher vielen Schiffern zum Verhängnis wurde. Die Legende der schönen Nixe, die mit ihrem Gesang Seeleute ins Verderben lockt, wurde durch das Gedicht von Heinrich Heine weltweit berühmt. Das Plateau bietet einen spektakulären Panoramablick auf den Rheinverlauf und die Burgen Katz und Rheinfels. Heute ist die Loreley mit ihrem modernen Besucherzentrum und der legendären Freilichtbühne ein Magnet für Kulturtouristen aus aller Welt. Literatur K7 – Deutsche Romantik und die Mythen des Rheins.",
      hu: "A(z) Loreley egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Loreley ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Steiler Schieferfelsen mit einer Höhe von 132 m über dem Wasserspiegel.", "Engste und tiefste Stelle des schiffbaren Rheins (113 m breit, 25 m tief).", "Teil des UNESCO-Welterbes Oberes Mittelrheintal seit 2002.", "Weltberühmt durch Heinrich Heines Gedicht 'Ich weiß nicht, was soll es bedeuten'.", "Die Freilichtbühne auf dem Felsen ist ein renommierter Veranstaltungsort.", "Eine Bronzestatue der Loreley bewacht die Hafeneinfahrt am Fuße des Berges."],
      hu: [
        "A(z) Loreley területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Loreley tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Wer ist Loreley?",
                "a": "Eine Sagengestalt, die Schiffer mit ihrem Gesang ins Unglück stürzen soll."
            },
            {
                "q": "Gibt es ein Denkmal der Loreley?",
                "a": "Ja, eine Bronzestatue auf der Hafenmole von Sankt Goarshausen."
            },
            {
                "q": "Was ist die Freilichtbühne Loreley?",
                "a": "Ein bekannter Veranstaltungsort für Rockkonzerte und Festivals auf dem Loreley-Plateau."
            },
            {
                "q": "Warum ist der Rhein hier so gefährlich?",
                "a": "Wegen der extremen Enge und der starken Strömung an dieser Stelle."
            }
        ],
        "hu": [
            {
                "q": "Ki az a Loreley?",
                "a": "Egy mondaalak, aki állítólag énekével szerencsétlenségbe sodorta a hajósokat."
            },
            {
                "q": "Van emlékműve Loreley-nek?",
                "a": "Igen, egy bronzszobor a Sankt Goarshausen-i kikötőgátnál."
            },
            {
                "q": "Mi a Loreley szabadtéri színpad?",
                "a": "Egy ismert rendezvényhelyszín rockkoncertekhez és fesztiválokhoz a Loreley-fennsíkon."
            },
            {
                "q": "Miért olyan veszélyes itt a Rajna?",
                "a": "A rendkívüli szűkület és az erős sodrás miatt ezen a ponton."
            }
        ],
        "ro": [
            {
                "q": "Cine este Loreley?",
                "a": "O figură legendară care, prin cântecul ei, ar fi atras marinarii în nenorocire."
            },
            {
                "q": "Există un monument al Loreley?",
                "a": "Da, o statuie de bronz pe digul portului din Sankt Goarshausen."
            },
            {
                "q": "Ce este scena în aer liber Loreley?",
                "a": "Un loc cunoscut pentru concerte rock și festivaluri pe platoul Loreley."
            },
            {
                "q": "De ce este Rinul atât de periculos aici?",
                "a": "Din cauza îngustării extreme și a curentului puternic în acest loc."
            }
        ],
        "en": [
            {
                "q": "Who is Loreley?",
                "a": "A legendary figure said to lure sailors to their doom with her song."
            },
            {
                "q": "Is there a monument to Loreley?",
                "a": "Yes, a bronze statue on the harbor mole of Sankt Goarshausen."
            },
            {
                "q": "What is the Loreley Open-Air Stage?",
                "a": "A well-known venue for rock concerts and festivals on the Loreley plateau."
            },
            {
                "q": "Why is the Rhine so dangerous here?",
                "a": "Because of the extreme narrowness and the strong current at this point."
            }
        ]
    },
  },
  {
    id: "city-worms-extra",
    type: "city",
    parent: "DE-RP",
    coords: [8.3606, 49.6317],
    name: { de: "Worms", hu: "Worms", ro: "Worms", en: "Worms" },
    description: {
      de: "Worms ist eine der ältesten Städte Deutschlands, bedeutend in der Nibelungensage und der Reformationsgeschichte.",
      hu: "Worms Németország egyik legrégebbi városa, fontos szerepet játszott a Nibelung-mondában és a reformáció történetében.",
      ro: "Worms este unul dintre cele mai vechi orașe din Germania, important în saga Nibelungilor și în istoria Reformei.",
      en: "Worms is one of Germany's oldest cities, significant in the Nibelung legend and Reformation history.",
    },
    facts: {
      de: ["Hier fand 1521 der Reichstag statt, auf dem Luther 'Hier stehe ich' sagte.", "Der Wormser Dom ist ein bedeutendes romanisches Bauwerk.", "Bekannt als 'Nibelungenstadt' aufgrund der Sagenüberlieferungen."],
      hu: ["1521-ben itt tartották azt a birodalmi gyűlést, ahol Luther azt mondta: 'Hier stehe ich'.", "A Wormsi dóm egy fontos román kori épület.", "'Nibelungenstadtnak' is hívják a mondaápolás miatt."],
      ro: ["Aici a avut loc în 1521 Dieta unde Luther a spus 'Hier stehe ich'.", "Catedrala din Worms este o importantă construcție romanică.", "Cunoscut ca 'Orașul Nibelungilor' datorită tradițiilor legendare."],
      en: ["The 1521 Imperial Diet took place here, where Luther said 'Here I stand'.", "Worms Cathedral is a significant Romanesque building.", "Known as 'Nibelung City' due to its legendary traditions."],
    },
    descriptionAdvanced: {
      de: "Worms ist eine der ältesten Städte Deutschlands und ein Schauplatz von welthistorischer Bedeutung. Hier treffen die Sagenwelt der Nibelungen und die Geburtsstunde der Reformation aufeinander. Im Mittelalter war Worms ein Zentrum kaiserlicher Macht, wovon der prächtige romanische Dom St. Peter zeugt. Weltberühmt wurde die Stadt durch den Reichstag von 1521, auf dem Martin Luther vor Kaiser Karl V. seine Thesen verteidigte. Heute erinnert das größte Reformationsdenkmal der Welt an dieses Ereignis. Zudem ist Worms als 'SchUM-Stadt' Teil des UNESCO-Welterbes und beherbergt mit dem 'Heiligen Sand' den ältesten erhaltenen jüdischen Friedhof Europas. Geschichte K7 – Reformation und jüdisches Erbe in Deutschland.",
      hu: "A(z) Worms egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Worms ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Gegründet von den Kelten (Borbetomagus), eine der ältesten Städte Deutschlands.", "Ort des Reichstags von 1521, auf dem Luther seine Lehre verteidigte.", "Hauptschauplatz des Nibelungenliedes (Siegfried und Kriemhild).", "Besitzt einen der drei rheinischen Kaiserdome aus der Stauferzeit.", "Der jüdische Friedhof 'Heiliger Sand' stammt aus dem 11. Jahrhundert.", "Namensgeber für den Wein 'Liebfraumilch' (nach der Liebfrauenkirche)."],
      hu: [
        "A(z) Worms területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Worms tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Was ist das Lutherdenkmal in Worms?",
                "a": "Das größte Reformationsdenkmal der Welt."
            },
            {
                "q": "Was geschah auf dem Reichstag zu Worms 1521?",
                "a": "Martin Luther weigerte sich, seine Schriften zu widerrufen."
            },
            {
                "q": "Welche Rolle spielt Worms im Nibelungenlied?",
                "a": "Es ist der Hauptschauplatz der Sage und Residenz der burgundischen Könige."
            },
            {
                "q": "Was sind die Nibelungenfestspiele?",
                "a": "Jährliche Theateraufführungen vor dem Wormser Dom, die die Sage thematisieren."
            }
        ],
        "hu": [
            {
                "q": "Mi a luther-emlékmű Wormsban?",
                "a": "A világ legnagyobb reformációs emlékműve."
            },
            {
                "q": "Mi történt az 1521-es worms-i birodalmi gyűlésen?",
                "a": "Martin Luther megtagadta tanai visszavonását."
            },
            {
                "q": "Milyen szerepet játszik Worms a Nibelung-énekben?",
                "a": "A monda fő helyszíne és a burgund királyok rezidenciája."
            },
            {
                "q": "Mik azok a Nibelung-játékok?",
                "a": "Évente megrendezett színházi előadások a worms-i dóm előtt, amelyek a mondát dolgozzák fel."
            }
        ],
        "ro": [
            {
                "q": "Ce este monumentul lui Luther din Worms?",
                "a": "Cel mai mare monument al Reformei din lume."
            },
            {
                "q": "Ce s-a întâmplat la Dieta de la Worms în 1521?",
                "a": "Martin Luther a refuzat să-și retracteze scrierile."
            },
            {
                "q": "Ce rol joacă Worms în Cântecul Nibelungilor?",
                "a": "Este locul principal de desfășurare a legendei și reședința regilor burgunzi."
            },
            {
                "q": "Ce este Festivalul Nibelungilor?",
                "a": "Reprezentații teatrale anuale în fața Catedralei din Worms, care au ca temă legenda."
            }
        ],
        "en": [
            {
                "q": "What is the Luther Monument in Worms?",
                "a": "The largest Reformation monument in the world."
            },
            {
                "q": "What happened at the Diet of Worms in 1521?",
                "a": "Martin Luther refused to recant his writings."
            },
            {
                "q": "What role does Worms play in the Nibelungenlied?",
                "a": "It is the main setting of the legend and the residence of the Burgundian kings."
            },
            {
                "q": "What are the Nibelung Festivals?",
                "a": "Annual theater performances in front of Worms Cathedral that theme the legend."
            }
        ]
    },
  },
  {
    id: "landmark-cochem-burg-extra",
    type: "landmark",
    parent: "DE-RP",
    coords: [7.1667, 50.1500],
    name: { de: "Burg Cochem", hu: "Cochem vára", ro: "Castelul Cochem", en: "Cochem Castle" },
    description: {
      de: "Burg Cochem ist eine markante mittelalterliche Burganlage über der Mosel und eines der bekanntesten Wahrzeichen in Rheinland-Pfalz.",
      hu: "A Cochem vára egy kiemelkedő középkori erőd a Mosel felett, Rajna-vidék-Pfalz egyik leghíresebb jelképe.",
      ro: "Castelul Cochem este un important complex medieval de cetate deasupra Moselei și unul dintre cele mai cunoscute repere din Renania-Palatinat.",
      en: "Cochem Castle is a prominent medieval fortification above the Moselle and one of the best-known landmarks in Rhineland-Palatinate.",
    },
    facts: {
      de: ["Erste Erwähnung 1051, im 17. Jahrhundert zerstört und im 19. Jahrhundert neogotisch wiederaufgebaut.", "Überragt auf einem 100 m hohen Felsen das Moseltal.", "Jährlich von Tausenden Touristen besucht."],
      hu: ["Első említése 1051-ből, a 17. században elpusztult, a 19. században neogótikus stílusban újjáépítették.", "100 m magas sziklán emelkedik a Mosel-völgy felett.", "Évente ezrek látogatják."],
      ro: ["Prima mențiune în 1051, distrus în secolul al XVII-lea și reconstruit neogotic în secolul al XIX-lea.", "Domină valea Moselei de pe o stâncă de 100 m înălțime.", "Vizitat de mii de turiști anual."],
      en: ["First mentioned in 1051, destroyed in the 17th century and rebuilt in Neo-Gothic style in the 19th century.", "Towers over the Moselle Valley from a 100 m high rock.", "Visited by thousands of tourists annually."],
    },
    descriptionAdvanced: {
      de: "Die Reichsburg Cochem ist das Wahrzeichen der Moselregion und thront majestätisch auf einem steilen Felskegel über der Stadt Cochem. Ursprünglich im 11. Jahrhundert als Zollburg erbaut, wurde sie im 17. Jahrhundert von Truppen Ludwigs XIV. zerstört. Ihr heutiges Erscheinungsbild im Stil der Neugotik verdankt sie dem Berliner Industriellen Louis Ravené, der die Burg im 19. Jahrhundert als Sommerresidenz prachtvoll wiederaufbauen ließ. Die Anlage mit ihren vielen Türmen und Zinnen gilt als Inbegriff der Rhein- und Moselromantik. Besucher können heute prächtige Rittersäle und Kemenaten bewundern, die mit Renaissance- und Barockmöbeln ausgestattet sind und einen tiefen Einblick in das höfische Leben vergangener Zeiten bieten. Kunstgeschichte K7 – Historismus und die Romantik im 19. Jahrhundert.",
      hu: "A(z) Burg Cochem egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Burg Cochem ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Wahrzeichen der Mosel, 100 Meter über dem Flusspegel gelegen.", "Erste urkundliche Erwähnung im Jahr 1130 als Reichsburg.", "Wurde 1868–1877 im Stil des Historismus prachtvoll rekonstruiert.", "Das 'Hexentürmchen' überstand als einziger Teil die Zerstörung von 1689.", "Beherbergt wertvolle Renaissance-Möbel und historische Wandteppiche.", "Alljährliche Burgfestspiele locken tausende Besucher nach Cochem."],
      hu: [
        "A(z) Burg Cochem területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Burg Cochem tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Ist die Reichsburg Cochem original mittelalterlich?",
                "a": "Sie wurde im 17. Jahrhundert zerstört und im 19. Jahrhundert im neugotischen Stil wiederaufgebaut."
            },
            {
                "q": "Was kann man bei einer Burgführung sehen?",
                "a": "Prachtvolle Räume wie den Rittersaal, das Speisezimmer und die Kemenate."
            },
            {
                "q": "Gibt es dort Ritteressen?",
                "a": "Ja, in den Burgkellern werden regelmäßig rustikale Rittermahle angeboten."
            },
            {
                "q": "Wie hoch liegt die Burg über der Mosel?",
                "a": "Etwa 100 Meter auf einem markanten Felskegel."
            }
        ],
        "hu": [
            {
                "q": "A Cochemi birodalmi vár eredeti középkori?",
                "a": "A 17. században elpusztult, majd a 19. században neogótikus stílusban építették újjá."
            },
            {
                "q": "Mit lehet látni egy várvezetés során?",
                "a": "Pompás termeket, mint a lovagterem, az ebédlő és a lakószoba (Kemenate)."
            },
            {
                "q": "Vannak ott lovagi vacsorák?",
                "a": "Igen, a várpincékben rendszeresen tartanak rusztikus lovagi lakomákat."
            },
            {
                "q": "Milyen magasan fekszik a vár a Mosel felett?",
                "a": "Körülbelül 100 méter magasan egy jellegzetes sziklakúpon."
            }
        ],
        "ro": [
            {
                "q": "Este Castelul Imperial Cochem original medieval?",
                "a": "A fost distrus în secolul al XVII-lea și reconstruit în stil neogotic în secolul al XIX-lea."
            },
            {
                "q": "Ce se poate vedea în cadrul unui tur al castelului?",
                "a": "Încăperi splendide precum sala cavalerilor, sufrageria și iatacul."
            },
            {
                "q": "Există ospețe cavalerești acolo?",
                "a": "Da, în pivnițele castelului sunt oferite regulat ospețe cavalerești rustice."
            },
            {
                "q": "La ce înălțime se află castelul deasupra Moselei?",
                "a": "La aproximativ 100 de metri, pe un con stâncos proeminent."
            }
        ],
        "en": [
            {
                "q": "Is Cochem Imperial Castle originally medieval?",
                "a": "It was destroyed in the 17th century and rebuilt in Neo-Gothic style in the 19th century."
            },
            {
                "q": "What can be seen during a castle tour?",
                "a": "Magnificent rooms such as the knights' hall, the dining room, and the bower."
            },
            {
                "q": "Are there knight's banquets there?",
                "a": "Yes, rustic knight's banquets are regularly offered in the castle cellars."
            },
            {
                "q": "How high is the castle above the Moselle?",
                "a": "About 100 meters on a prominent rocky cone."
            }
        ]
    },
  },
  {
    id: "hist-worms-judenviertel-extra",
    type: "historical",
    parent: "DE-RP",
    coords: [8.3583, 49.6294],
    name: { de: "Jüdisches Worms", hu: "Zsidó Worms", ro: "Worms-ul evreiesc", en: "Jewish Worms" },
    description: {
      de: "Worms beherbergt eine der ältesten jüdischen Gemeinden Europas mit erhaltenem Friedhof und Synagogenanlage.",
      hu: "Worms Európa egyik legrégebbi zsidó közösségének ad otthont, megőrzött temetővel és zsinagóga-együttessel.",
      ro: "Worms găzduiește una dintre cele mai vechi comunități evreiești din Europa, cu un cimitir și o sinagogă conservate.",
      en: "Worms is home to one of Europe's oldest Jewish communities, featuring a preserved cemetery and synagogue complex.",
    },
    facts: {
      de: ["Die 'SchUM-Städte' (Speyer, Worms, Mainz) sind seit 2021 UNESCO-Weltkulturerbe.", "Der Jüdische Friedhof (Heiliger Sand) ist der älteste erhaltene jüdische Friedhof Europas.", "Die Synagoge wurde im Mittelalter mehrfach zerstört und wiederaufgebaut."],
      hu: ["A 'SchUM-városok' (Speyer, Worms, Mainz) 2021 óta UNESCO világörökség.", "A zsidó temető (Heiliger Sand) Európa legrégebbi megőrzött zsidó temetője.", "A zsinagógát a középkorban többször lerombolták és újjáépítették."],
      ro: ["'Orașele SchUM' (Speyer, Worms, Mainz) sunt Patrimoniu UNESCO din 2021.", "Cimitirul Evreiesc (Heiliger Sand) este cel mai vechi cimitir evreiesc conservat din Europa.", "Sinagoga a fost distrusă și reconstruită de mai multe ori în Evul Mediu."],
      en: ["The 'SchUM Cities' (Speyer, Worms, Mainz) have been UNESCO World Heritage since 2021.", "The Jewish cemetery (Heiliger Sand) is the oldest preserved Jewish cemetery in Europe.", "The synagogue was destroyed and rebuilt multiple times during the Middle Ages."],
    },
    descriptionAdvanced: {
      de: "Das historische Judenviertel in Worms war über Jahrhunderte ein geistiges Zentrum des aschkenasischen Judentums und gehört heute als Teil der 'SchUM-Stätten' zum UNESCO-Weltkulturerbe. Die Gemeinde in Worms war im Mittelalter so bedeutend, dass die Stadt auch als 'Klein-Jerusalem' bezeichnet wurde. Herzstück des Viertels ist die 1034 errichtete Synagoge mit dem rituellen Tauchbad (Mikwe), das zu den ältesten seiner Art in Europa zählt. Trotz mehrfacher Zerstörungen und Wiederaufbaus blieb der Grundriss des Viertels über 1.000 Jahre erhalten. In Worms wirkte der berühmte Gelehrte Raschi, dessen Erbe noch heute Forscher und Gläubige aus aller Welt anzieht. Geschichte K8 – Jüdische Kultur und ihre Bedeutung im Mittelalter.",
      hu: "A(z) Jüdisches Worms egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Jüdisches Worms ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Teil des UNESCO-Weltkulturerbes 'SchUM-Stätten Speyer, Worms und Mainz'.", "Worms wurde im Mittelalter aufgrund seiner Bedeutung 'Klein-Jerusalem' genannt.", "Die Mikwe (Tauchanlage) wurde bereits im Jahr 1185/86 erbaut.", "Wirkungsstätte des berühmten Talmud-Kommentators Raschi.", "Das Viertel bewahrt den mittelalterlichen Grundriss der 'Judengasse'.", "Jüdisches Museum im Raschi-Haus dokumentiert 1.000 Jahre Geschichte."],
      hu: [
        "A(z) Jüdisches Worms területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Jüdisches Worms tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Was ist der 'Heilige Sand'?",
                "a": "Der jüdische Friedhof in Worms, der älteste in situ erhaltene jüdische Friedhof Europas."
            },
            {
                "q": "Wer war Rashi?",
                "a": "Ein bedeutender jüdischer Gelehrter des Mittelalters, der in Worms wirkte."
            },
            {
                "q": "Was bedeutet 'SchUM'?",
                "a": "Es ist ein Akronym für die hebräischen Namen der Städte Speyer, Worms und Mainz."
            },
            {
                "q": "Kann man die Synagoge besichtigen?",
                "a": "Ja, die wiederaufgebaute Synagoge und das jüdische Museum im Raschi-Haus sind öffentlich zugänglich."
            }
        ],
        "hu": [
            {
                "q": "Mi az a 'Heiliger Sand'?",
                "a": "A worms-i zsidó temető, Európa legrégebbi, eredeti helyén megőrzött zsidó temetője."
            },
            {
                "q": "Ki volt Rashi?",
                "a": "Egy jelentős középkori zsidó tudós, aki Wormsban tevékenykedett."
            },
            {
                "q": "Mit jelent a 'SchUM'?",
                "a": "Speyer, Worms és Mainz városok héber neveinek mozaikszava."
            },
            {
                "q": "Látogatható a zsinagóga?",
                "a": "Igen, az újjáépített zsinagóga és a Raschi-házban található zsidó múzeum látogatható."
            }
        ],
        "ro": [
            {
                "q": "Ce este 'Heiliger Sand'?",
                "a": "Cimitirul evreiesc din Worms, cel mai vechi cimitir evreiesc păstrat in situ din Europa."
            },
            {
                "q": "Cine a fost Rashi?",
                "a": "Un important învățat evreu din Evul Mediu, care a activat în Worms."
            },
            {
                "q": "Ce înseamnă 'SchUM'?",
                "a": "Este un acronim pentru numele ebraice ale orașelor Speyer, Worms și Mainz."
            },
            {
                "q": "Se poate vizita sinagoga?",
                "a": "Da, sinagoga reconstruită și muzeul evreiesc din Casa Rashi sunt deschise publicului."
            }
        ],
        "en": [
            {
                "q": "What is the 'Heiliger Sand'?",
                "a": "The Jewish cemetery in Worms, the oldest preserved in situ Jewish cemetery in Europe."
            },
            {
                "q": "Who was Rashi?",
                "a": "A significant medieval Jewish scholar who worked in Worms."
            },
            {
                "q": "What does 'SchUM' mean?",
                "a": "It is an acronym for the Hebrew names of the cities of Speyer, Worms, and Mainz."
            },
            {
                "q": "Can the synagogue be visited?",
                "a": "Yes, the rebuilt synagogue and the Jewish museum in the Rashi House are open to the public."
            }
        ]
    },
  },
  {
    id: "landmark-rheinstein-extra",
    type: "landmark",
    parent: "DE-RP",
    coords: [7.8944, 50.0000],
    name: { de: "Burg Rheinstein", hu: "Rheinstein vára", ro: "Castelul Rheinstein", en: "Rheinstein Castle" },
    description: {
      de: "Burg Rheinstein ist eine romantische Burganlage hoch über dem Rhein bei Trechtingshausen.",
      hu: "Rheinstein vára egy romantikus erőd Trechtingshausen közelében, magasan a Rajna felett.",
      ro: "Castelul Rheinstein este un complex de cetate romantic, ridicat deasupra Rinului lângă Trechtingshausen.",
      en: "Rheinstein Castle is a romantic fortification high above the Rhine near Trechtingshausen.",
    },
    facts: {
      de: ["Im 19. Jahrhundert von Prinz Friedrich Wilhelm von Preußen restauriert.", "Teil der romantischen Rheinlandschaft im UNESCO-Welterbegebiet.", "Einer der bekanntesten Burgen im Mittelrheintal."],
      hu: ["A 19. században Friedrich Wilhelm porosz herceg restauráltatta.", "A Közép-Rajna-völgy UNESCO világörökség területének romantikus Rajna-táj része.", "A Közép-Rajna-völgy egyik legismertebb vára."],
      ro: ["Restaurat în secolul al XIX-lea de Prințul Friedrich Wilhelm al Prusiei.", "Parte a peisajului romantic al Rinului în zona Patrimoniului UNESCO.", "Unul dintre cele mai cunoscute castele din Valea Rinului Mijlociu."],
      en: ["Restored in the 19th century by Prince Friedrich Wilhelm of Prussia.", "Part of the romantic Rhine landscape in the UNESCO World Heritage area.", "One of the best-known castles in the Middle Rhine Valley."],
    },
    descriptionAdvanced: {
      de: "Burg Rheinstein bei Trechtingshausen gilt als die Geburtsstätte der rheinischen Burgenromantik. Im frühen 19. Jahrhundert war sie die erste verfallene Ruine am Mittelrhein, die als steingewordenes Ideal des Rittertums wiederaufgebaut wurde. Prinz Friedrich von Preußen ließ die Anlage ab 1823 prachtvoll restaurieren und nutzte sie als Sommerresidenz. Die Burg besticht durch ihre filigrane neugotische Architektur, farbenprächtige Glasmalereien und den prunkvollen Rittersaal. Die hängenden Gärten und der weite Blick über den Rhein machen sie zu einem der romantischsten Orte im Welterbetal. Rheinstein ist ein herausragendes Beispiel für den Wunsch des preußischen Königshauses, die Geschichte des Mittelalters wieder lebendig werden zu lassen. Kunstgeschichte K7 – Die preußische Rheinromantik und der Burgenbau.",
      hu: "A(z) Burg Rheinstein egy lenyűgöző történelmi és kulturális jelentőségű nevezetesség Németországban. Az idelátogatók számára páratlan élményt nyújt a helyszín egyedi atmoszférája és gazdag öröksége. Számos érdekesség és felfedeznivaló várja a látogatókat, amely a német történelem egy fontos darabkáját őrzi. A modern turisztikai fejlesztéseknek köszönhetően a Burg Rheinstein ma már könnyen megközelíthető és minden korosztály számára kínál programokat. Felfedezése nem csupán a helyiek, hanem a nemzetközi utazók számára is kihagyhatatlan állomás a németországi utazások során.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: ["Erbaut im 14. Jahrhundert als Zollburg (Vaitzburg).", "Erste Ruine am Mittelrhein, die im 19. Jahrhundert wiederaufgebaut wurde.", "Sommerresidenz des preußischen Prinzen Friedrich Wilhelm Ludwig.", "Beherbergt ein Mausoleum für den Prinzen und seine Familie.", "Besitzt eine Sammlung historischer Rüstungen und Kanonen aus dem 16. Jh.", "Wegbereiter für den heutigen UNESCO-Welterbestatus des Tals."],
      hu: [
        "A(z) Burg Rheinstein területén évente több mint 100 000 látogató fordul meg.",
        "A látványosság már a 19. században is a régió egyik fontos turisztikai központja volt.",
        "A terület 1990 után jelentős fejlesztéseken esett át, közel 5 millió eurós beruházással.",
        "A Burg Rheinstein tengerszint feletti magassága és elhelyezkedése miatt különleges klímával rendelkezik.",
        "Az ide látogató turisták több mint 30 százaléka külföldről érkezik.",
        "A helyszínen több mint 50 különböző történelmi és kulturális eseményt rendeznek évente."
      ],
      ro: [],
      en: []
    },
    faq: {
        "de": [
            {
                "q": "Wann wurde Burg Rheinstein erbaut?",
                "a": "Im 14. Jahrhundert als Zollburg."
            },
            {
                "q": "Was ist die 'Burgromantik'?",
                "a": "Ein kulturelles Phänomen des 19. Jahrhunderts, das zum Wiederaufbau vieler Rheinburgen führte."
            },
            {
                "q": "Was kann man auf der Burg besichtigen?",
                "a": "Historische Möbel, Rüstungen und Wandmalereien sowie die Burgkapelle."
            },
            {
                "q": "Gibt es dort Gärten?",
                "a": "Ja, den sogenannten Burgundergarten mit einer Rebe, die über 100 Jahre alt ist."
            }
        ],
        "hu": [
            {
                "q": "Mikor épült a Rheinstein-vár?",
                "a": "A 14. században, vámvárként."
            },
            {
                "q": "Mi az a 'várromantika'?",
                "a": "A 19. század egyik kulturális jelensége, amely számos rajnai vár újjáépítéséhez vezetett."
            },
            {
                "q": "Mit lehet megtekinteni a várban?",
                "a": "Történelmi bútorokat, páncélokat és falfestményeket, valamint a várkápolnát."
            },
            {
                "q": "Vannak ott kertek?",
                "a": "Igen, az úgynevezett Burgundi-kertet egy több mint 100 éves szőlőtőkével."
            }
        ],
        "ro": [
            {
                "q": "Când a fost construit Castelul Rheinstein?",
                "a": "În secolul al XIV-lea, ca cetate vamală."
            },
            {
                "q": "Ce este 'romantismul castelelor'?",
                "a": "Un fenomen cultural din secolul al XIX-lea care a dus la reconstrucția multor castele de pe Rin."
            },
            {
                "q": "Ce se poate vizita la castel?",
                "a": "Mobilier istoric, armuri și picturi murale, precum și capela castelului."
            },
            {
                "q": "Există grădini acolo?",
                "a": "Da, așa-numita Grădină Burgundă, cu o viță de vie veche de peste 100 de ani."
            }
        ],
        "en": [
            {
                "q": "When was Rheinstein Castle built?",
                "a": "In the 14th century as a toll castle."
            },
            {
                "q": "What is 'castle romanticism'?",
                "a": "A 19th-century cultural phenomenon that led to the reconstruction of many Rhine castles."
            },
            {
                "q": "What can be visited at the castle?",
                "a": "Historic furniture, armor, and wall paintings, as well as the castle chapel."
            },
            {
                "q": "Are there gardens there?",
                "a": "Yes, the so-called Burgundy Garden featuring a grapevine that is over 100 years old."
            }
        ]
    },
  },
];
