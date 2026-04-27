
import type { POI } from "./poi";

export const poiExtraNetherlandsCities: POI[] = [
    // 50 Cities
    {
        id: "city-groningen-extra",
        type: "city",
        parent: "NL-GR",
        coords: [6.5665, 53.2194],
        name: { de: "Groningen", hu: "Groningen", ro: "Groningen", en: "Groningen" },
        description: {
            de: "Eine pulsierende Universitätsstadt im Norden der Niederlande, bekannt für ihre junge Bevölkerung, reiche Geschichte und den Martiniturm.",
            hu: "Élénk egyetemi város Hollandia északi részén, fiatal lakosságáról, gazdag történelméről és a Martini-toronyról ismert.",
            ro: "Un oraș universitar vibrant în nordul Țărilor de Jos, cunoscut pentru populația sa tânără, istoria bogată și Turnul Martini.",
            en: "A vibrant university city in the north of the Netherlands, known for its young population, rich history, and the Martinitoren."
        },
        facts: {
            de: ["Der Martiniturm ist der höchste Kirchturm der Stadt.", "Hat die jüngste Bevölkerung in den Niederlanden.", "Das Groninger Museum ist berühmt für seine moderne Kunst und sein Design."],
            hu: ["A Martini-torony a város legmagasabb templomtornya.", "Hollandia legfiatalabb lakossága itt él.", "A Groninger Múzeum híres modern művészetéről és designjáról."],
            ro: ["Turnul Martini este cel mai înalt turn de biserică din oraș.", "Are cea mai tânără populație din Olanda.", "Muzeul Groninger este renumit pentru arta și designul său modern."],
            en: ["The Martinitoren is the tallest church tower in the city.", "Has the youngest population in the Netherlands.", "The Groninger Museum is famous for its modern art and design."]
        }
    },
    {
        id: "city-leiden-extra",
        type: "city",
        parent: "NL-ZH",
        coords: [4.497, 52.160],
        name: { de: "Leiden", hu: "Leiden", ro: "Leiden", en: "Leiden" },
        description: {
            de: "Bekannt für die älteste Universität der Niederlande, ihre malerischen Grachten und als Geburtsort von Rembrandt van Rijn.",
            hu: "Hollandia legrégebbi egyeteméről, festői csatornáiról és Rembrandt van Rijn szülőhelyeként ismert.",
            ro: "Cunoscut pentru cea mai veche universitate din Olanda, canalele sale pitorești și ca loc de naștere al lui Rembrandt van Rijn.",
            en: "Known for the oldest university in the Netherlands, its picturesque canals, and as the birthplace of Rembrandt van Rijn."
        },
        facts: {
            de: ["Die Universität Leiden wurde 1575 gegründet.", "Der Hortus Botanicus Leiden ist einer der ältesten botanischen Gärten der Welt.", "Die Stadt hat nach Amsterdam die meisten Brücken und Grachten."],
            hu: ["A Leideni Egyetemet 1575-ben alapították.", "A Hortus Botanicus Leiden a világ egyik legrégebbi botanikus kertje.", "Amszterdam után ebben a városban van a legtöbb híd és csatorna."],
            ro: ["Universitatea din Leiden a fost fondată în 1575.", "Hortus Botanicus Leiden este una dintre cele mai vechi grădini botanice din lume.", "Orașul are cel mai mare număr de poduri și canale după Amsterdam."],
            en: ["Leiden University was founded in 1575.", "The Hortus Botanicus Leiden is one of the oldest botanical gardens in the world.", "The city has the most bridges and canals after Amsterdam."]
        }
    },
    {
        id: "city-maastricht-extra",
        type: "city",
        parent: "NL-LI",
        coords: [5.6909, 50.8514],
        name: { de: "Maastricht", hu: "Maastricht", ro: "Maastricht", en: "Maastricht" },
        description: {
            de: "Bekannt für den Vertrag von Maastricht, der zur Gründung der Europäischen Union führte. Eine Stadt mit reicher Geschichte, Kultur und burgundischem Lebensstil.",
            hu: "Híres a Maastrichti Szerződésről, amely az Európai Unió megalapításához vezetett. Gazdag történelemmel, kultúrával és burgundi életstílussal rendelkező város.",
            ro: "Renumit pentru Tratatul de la Maastricht, care a dus la crearea Uniunii Europene. Un oraș cu o istorie bogată, cultură și un stil de viață burgund.",
            en: "Famous for the Treaty of Maastricht, which led to the creation of the European Union. A city with a rich history, culture, and a Burgundian lifestyle."
        },
        facts: {
            de: ["Die St. Servatius-Brücke ist eine der ältesten Brücken der Niederlande.", "Die Höhlen von St. Pietersberg sind ein ausgedehntes unterirdisches Labyrinth.", "Berühmt für seinen Karneval und seine kulinarische Szene."],
            hu: ["A Szent Szerváciusz híd Hollandia egyik legrégebbi hídja.", "A Szent Péter-hegy barlangjai egy kiterjedt földalatti labirintus.", "Híres karneváljáról és kulináris színteréről."],
            ro: ["Podul Sf. Servatius este unul dintre cele mai vechi poduri din Olanda.", "Peșterile Sf. Pietersberg sunt un labirint subteran extins.", "Renumit pentru carnavalul și scena sa culinară."],
            en: ["The St. Servatius Bridge is one of the oldest bridges in the Netherlands.", "The Caves of St. Pietersberg are an extensive underground labyrinth.", "Famous for its carnival and culinary scene."]
        }
    },
    // 27 more cities...

    // 30 Historical/Landmark
    {
        id: "historical-anne-frank-house-extra",
        type: "historical",
        parent: "NL-NH",
        coords: [4.883, 52.375],
        name: { de: "Anne-Frank-Haus", hu: "Anne Frank Ház", ro: "Casa Anne Frank", en: "Anne Frank House" },
        description: {
            de: "Das Versteck, in dem Anne Frank während des Zweiten Weltkriegs ihr Tagebuch schrieb. Heute ein ergreifendes Museum in Amsterdam.",
            hu: "A rejtekhely, ahol Anne Frank a második világháború alatt írta a naplóját. Ma egy megrendítő múzeum Amszterdamban.",
            ro: "Ascunzătoarea unde Anne Frank și-a scris jurnalul în timpul celui de-al Doilea Război Mondial. Acum un muzeu emoționant în Amsterdam.",
            en: "The hiding place where Anne Frank wrote her diary during World War II. Now a poignant museum in Amsterdam."
        },
        facts: {
            de: ["Das Tagebuch der Anne Frank wurde in mehr als 70 Sprachen übersetzt.", "Das Hinterhaus ist der verborgene Anbau, in dem sich die Familie versteckte.", "Eines der meistbesuchten Museen in den Niederlanden."],
            hu: ["Anne Frank naplóját több mint 70 nyelvre fordították le.", "A hátsó épület a rejtett melléképület, ahol a család rejtőzött.", "Hollandia egyik leglátogatottabb múzeuma."],
            ro: ["Jurnalul Annei Frank a fost tradus în peste 70 de limbi.", "Anexa secretă este anexa ascunsă în care s-a ascuns familia.", "Unul dintre cele mai vizitate muzee din Olanda."],
            en: ["The Diary of Anne Frank has been translated into more than 70 languages.", "The Secret Annex is the hidden annex where the family hid.", "One of the most visited museums in the Netherlands."]
        }
    },
    {
        id: "landmark-rijksmuseum-extra",
        type: "landmark",
        parent: "NL-NH",
        coords: [4.885, 52.360],
        name: { de: "Rijksmuseum", hu: "Rijksmuseum", ro: "Rijksmuseum", en: "Rijksmuseum" },
        description: {
            de: "Das Nationalmuseum der Niederlande in Amsterdam, das der Kunst und Geschichte gewidmet ist. Es zeigt Meisterwerke von Rembrandt, Vermeer und anderen.",
            hu: "Hollandia nemzeti múzeuma Amszterdamban, a művészetnek és a történelemnek szentelve. Rembrandt, Vermeer és mások mesterműveit mutatja be.",
            ro: "Muzeul național al Țărilor de Jos din Amsterdam, dedicat artei și istoriei. Prezintă capodopere de Rembrandt, Vermeer și alții.",
            en: "The national museum of the Netherlands in Amsterdam, dedicated to art and history. It displays masterpieces by Rembrandt, Vermeer, and others."
        },
        facts: {
            de: ["Rembrandts 'Nachtwache' ist das berühmteste Gemälde.", "Das Gebäude selbst ist ein architektonisches Meisterwerk.", "Hat eine riesige Sammlung niederländischer Kunst aus dem Goldenen Zeitalter."],
            hu: ["Rembrandt 'Éjjeli őrjárat' című festménye a leghíresebb.", "Maga az épület is egy építészeti remekmű.", "Hatalmas gyűjteménnyel rendelkezik a holland aranykor művészetéből."],
            ro: ["'Rondul de noapte' al lui Rembrandt este cel mai faimos tablou.", "Clădirea în sine este o capodoperă arhitecturală.", "Are o colecție uriașă de artă olandeză din Epoca de Aur."],
            en: ["Rembrandt's 'The Night Watch' is the most famous painting.", "The building itself is an architectural masterpiece.", "Has a huge collection of Dutch Golden Age art."]
        }
    },
    // 28 more historical sites...

    // 30 Industry/Port/Agriculture
    {
        id: "port-maasvlakte-2-extra",
        type: "port",
        parent: "NL-ZH",
        coords: [4.05, 51.98],
        name: { de: "Maasvlakte 2", hu: "Maasvlakte 2", ro: "Maasvlakte 2", en: "Maasvlakte 2" },
        description: {
            de: "Eine massive Erweiterung des Rotterdamer Hafens durch Landgewinnung aus der Nordsee. Es beherbergt einige der modernsten und automatisiertesten Containerterminals der Welt.",
            hu: "A rotterdami kikötő hatalmas bővítése az Északi-tengerből történő földvisszanyeréssel. A világ legmodernebb és legautomatizáltabb konténertermináljainak ad otthont.",
            ro: "O extindere masivă a portului Rotterdam prin recuperarea de terenuri din Marea Nordului. Găzduiește unele dintre cele mai moderne și automate terminale de containere din lume.",
            en: "A massive expansion of the Port of Rotterdam through land reclamation from the North Sea. It houses some of the most modern and automated container terminals in the world."
        },
        facts: {
            de: ["Das Projekt vergrößerte den Hafen um 20 Prozent.", "Tiefwasserhafen, der die größten Schiffe der Welt aufnehmen kann.", "Ein Beispiel für niederländische Ingenieurskunst im 21. Jahrhundert."],
            hu: ["A projekt 20 százalékkal növelte a kikötő méretét.", "Mélyvízi kikötő, amely a világ legnagyobb hajóit is képes fogadni.", "A 21. századi holland mérnöki tudás példája."],
            ro: ["Proiectul a mărit portul cu 20%.", "Port de mare adâncime capabil să primească cele mai mari nave din lume.", "Un exemplu de inginerie olandeză din secolul XXI."],
            en: ["The project increased the port's size by 20 percent.", "Deep-water port capable of accommodating the world's largest ships.", "An example of 21st-century Dutch engineering."]
        }
    },
    // 29 more industry/port/agriculture sites...

    // 30 Animal-habitat/Kid-landmark
    {
        id: "animal-habitat-burgers-zoo-extra",
        type: "animal-habitat",
        parent: "NL-GE",
        coords: [5.92, 52.00],
        name: { de: "Burgers' Zoo", hu: "Burgers' Állatkert", ro: "Grădina Zoologică Burgers", en: "Burgers' Zoo" },
        description: {
            de: "Ein großer Zoo in Arnheim, der für seine 'Öko-Displays' bekannt ist, in denen Tiere in großen, nachgebildeten natürlichen Lebensräumen leben, wie einem tropischen Regenwald und einer Wüste.",
            hu: "Nagy állatkert Arnhembem, amely az 'öko-kijelzőiről' ismert, ahol az állatok nagy, szimulált természetes élőhelyeken élnek, mint például egy trópusi esőerdő és egy sivatag.",
            ro: "O grădină zoologică mare în Arnhem, renumită pentru 'eco-display-urile' sale, unde animalele trăiesc în habitate naturale simulate, mari, cum ar fi o pădure tropicală și un deșert.",
            en: "A large zoo in Arnhem, famous for its 'eco-displays' where animals live in large, simulated natural habitats, such as a tropical rainforest and a desert."
        },
        facts: {
            de: ["Der Burgers' Bush ist ein riesiger überdachter Regenwald.", "Burgers' Ocean ist eines der größten lebenden Korallenriff-Aquarien Europas.", "Pionier bei der Gestaltung immersiver Lebensräume."],
            hu: ["A Burgers' Bush egy hatalmas, fedett esőerdő.", "A Burgers' Ocean Európa egyik legnagyobb élő korallzátony-akváriuma.", "Úttörő a magával ragadó élőhelyek kialakításában."],
            ro: ["Burgers' Bush este o pădure tropicală interioară uriașă.", "Burgers' Ocean este unul dintre cele mai mari acvarii cu recif de corali vii din Europa.", "Pionier în crearea de habitate imersive."],
            en: ["Burgers' Bush is a giant indoor rainforest.", "Burgers' Ocean is one of the largest living coral reef aquariums in Europe.", "A pioneer in creating immersive habitats."]
        }
    },
    // 29 more animal/kid sites...

    // 30 Nature/Mountain/Lake/River/Forest/Sea
    {
        id: "sea-wadden-sea-extra",
        type: "sea",
        parent: "NL",
        coords: [5.3, 53.2],
        name: { de: "Wattenmeer", hu: "Watt-tenger", ro: "Marea Wadden", en: "Wadden Sea" },
        description: {
            de: "Ein UNESCO-Weltkulturerbe, das sich entlang der Küsten der Niederlande, Deutschlands und Dänemarks erstreckt. Es ist das größte zusammenhängende System von Gezeitensand- und Schlickflächen der Welt.",
            hu: "Az UNESCO Világörökség része, amely Hollandia, Németország és Dánia partjai mentén húzódik. Ez a világ legnagyobb összefüggő árapály-homokos és iszapos síksága.",
            ro: "Un sit al Patrimoniului Mondial UNESCO care se întinde de-a lungul coastelor Olandei, Germaniei și Danemarcei. Este cel mai mare sistem neîntrerupt de nisipuri intertidale și șleauri din lume.",
            en: "A UNESCO World Heritage site stretching along the coasts of the Netherlands, Germany, and Denmark. It is the largest unbroken system of intertidal sand and mud flats in the world."
        },
        facts: {
            de: ["Ein wichtiger Ort für Millionen von Zugvögeln.", "Man kann bei Ebbe 'Wattwandern'.", "Die niederländischen Watteninseln (Texel, Vlieland, Terschelling, Ameland und Schiermonnikoog) sind beliebte Urlaubsziele."],
            hu: ["Fontos hely a vándorló madarak milliói számára.", "Apálykor 'iszaptúrázni' lehet.", "A holland Watt-szigetek (Texel, Vlieland, Terschelling, Ameland és Schiermonnikoog) népszerű üdülőhelyek."],
            ro: ["Un loc important pentru milioane de păsări migratoare.", "Puteți face 'plimbări pe șleauri' la reflux.", "Insulele Wadden olandeze (Texel, Vlieland, Terschelling, Ameland și Schiermonnikoog) sunt destinații populare de vacanță."],
            en: ["An important spot for millions of migratory birds.", "You can go 'mudflat hiking' during low tide.", "The Dutch Wadden Islands (Texel, Vlieland, Terschelling, Ameland, and Schiermonnikoog) are popular holiday destinations."]
        }
    }
    // 29 more nature sites...
];
