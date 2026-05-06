// @ts-nocheck

import type { POI } from "./poi";

export const poiExtraNetherlandsCities: POI[] = [
    // 50 Cities
    // 27 more cities...

    // 30 Historical/Landmark
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
        },
        descriptionAdvanced: {
    de: "Die Maasvlakte 2 ist eine gigantische, künstliche Erweiterung des Rotterdamer Hafens, die komplett durch Landgewinnung aus der Nordsee geschaffen wurde. Dieses massive Infrastrukturprojekt wurde 2013 eröffnet und vergrößerte den Hafen um 2.000 Hektar direkt ins tiefe Wasser, ohne bestehende Naturräume an Land zu stören. Hier befinden sich einige der modernsten und am stärksten automatisierten Containerterminals der Welt, in denen führerlose Fahrzeuge und riesige Kräne den globalen Warenverkehr abwickeln. Die Erweiterung sichert Rotterdams Position als Europas wichtigstes Logistik-Drehkreuz und ermöglicht es auch den größten Containerschiffen der Welt, rund um die Uhr anzulegen. Wirtschaft K8: Maasvlakte 2 ist hochautomatisiert. Wie verändern Roboter und führerlose Kräne die Arbeit und Effizienz in modernen Häfen?",
    hu: "A Maasvlakte 2 a rotterdami kikötő hatalmas, tengerből elhódított mesterséges bővítése, amely 2013-ban készült el. Ez a 2000 hektáros terület úgy jött létre, hogy több millió köbméter homokot pumpáltak az Északi-tengerbe, új szárazföldet kialakítva, ahol a világ legnagyobb konténerszállító hajói kiköthetnek. A terminálokat a legmodernebb, teljesen automatizált (robotizált) daruk és önvezető szállítójárművek szolgálják ki, drasztikusan növelve a kikötő hatékonyságát és fenntartva Európa logisztikai kapujának státuszát. Gazdaság K8: Hogyan növeli az automatizáció (robotizáció) a konténerkikötők globális versenyképességét?",
    ro: "Maasvlakte 2 este o extindere artificială gigantică a portului Rotterdam, creată integral prin recuperarea terenului din Marea Nordului. Acest proiect masiv de infrastructură a fost inaugurat în 2013, mărind suprafața portului cu peste 2.000 de hectare, construite direct în apele adânci. Aici funcționează unele dintre cele mai moderne și mai automatizate terminale de containere de pe glob, unde vehiculele autonome și macaralele robotizate gestionează traficul global de mărfuri. Extinderea consolidează poziția Rotterdamului ca poartă logistică a Europei, permițând celor mai mari nave de containere din lume să ancoreze în orice moment. Economie K8: Maasvlakte 2 este un port extrem de automatizat. Cum influențează utilizarea roboților și a macaralelor fără șofer eficiența și organizarea muncii într-un port modern?",
    en: "Maasvlakte 2 is a massive artificial extension of the Port of Rotterdam, created entirely by reclaiming land from the North Sea. Opened in 2013, this colossal infrastructure project added 2,000 hectares to the port directly into deep water, avoiding disruption to existing natural landscapes onshore. It is home to some of the world's most advanced and highly automated container terminals, where driverless vehicles and robotic cranes handle global freight traffic. This expansion secures Rotterdam's position as Europe's premier logistics hub, allowing the largest container ships to dock around the clock. Economics K8: Maasvlakte 2 is highly automated. How do robots and driverless cranes change the work and efficiency in modern ports?"
  },
        factsAdvanced: {
    de: [
      "Für die Aufschüttung von Maasvlakte 2 wurden rund 240 Millionen Kubikmeter Sand aus dem Meeresboden gepumpt.",
      "Das Projekt hat die Landfläche der Niederlande um 2.000 Hektar (20 Quadratkilometer) vergrößert.",
      "Die Terminals auf der Maasvlakte 2 gehören zu den fortschrittlichsten der Welt, mit elektrisch betriebenen, fahrerlosen Transportfahrzeugen.",
      "Ein spezieller Bereich, der Maasvlakte-Strand, wurde als neues Erholungsgebiet am Rand des Hafens für die Öffentlichkeit zugänglich gemacht."
    ],
    hu: ["A Maasvlakte 2 vize 20 méter mély, így a valaha épült legnagyobb hajókat is fogadni tudja.", "A konténerterminálok a legmodernebb technológiának köszönhetően zéró szén-dioxid-kibocsátással (szélenergiával) működnek.", "A bővítés keretében új dűnéket és strandokat is kialakítottak a lakosság rekreációja és a természetvédelem céljából.", "A mesterséges félsziget építésekor több jégkorszaki őslény (például mamut) csontvázát is felszínre hozták a mélyből."],
    ro: [
      "Pentru crearea peninsulei Maasvlakte 2 au fost pompate aproximativ 240 de milioane de metri cubi de nisip de pe fundul mării.",
      "Acest proiect colosal a mărit efectiv suprafața totală a Țărilor de Jos cu 2.000 de hectare (20 de kilometri pătrați).",
      "Terminalele de pe Maasvlakte 2 sunt alimentate în mare parte cu energie regenerabilă, operând cu vehicule de transport autonome și complet electrice.",
      "O secțiune specială de coastă a fost amenajată ca zonă de recreere, oferind publicului o plajă vastă chiar lângă port."
    ],
    en: [
      "Around 240 million cubic meters of sand were pumped from the seabed to construct the landmass of Maasvlakte 2.",
      "The water depth at the port is 20 meters, making it accessible to the largest container ships ever built.",
      "The container terminals operate with almost zero carbon emissions, utilizing wind energy and fully electric autonomous vehicles.",
      "During the construction of the artificial peninsula, skeletons of Ice Age creatures like mammoths were dredged up from the deep."
    ]
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
        },
        descriptionAdvanced: {
    de: "Burgers' Zoo in Arnhem ist einer der bekanntesten und innovativsten Tierparks in Europa, der für seine gigantischen Öko-Displays berühmt ist. Anstatt Tiere in klassischen Käfigen zu zeigen, hat der Zoo riesige, natürlich nachempfundene Lebensräume geschaffen, in denen Besucher tief in die Umwelt der Tiere eintauchen können. Zu den beeindruckendsten Anlagen gehören der 'Bush' (ein echter tropischer Regenwald), das 'Ocean' (ein gigantisches tropisches Korallenriff-Aquarium) und die 'Desert' (eine amerikanische Felswüste). Diese immersive Art der Tierhaltung bietet Tieren ein natürlicheres Verhalten und den Besuchern ein beeindruckendes Erlebnis, bei dem sie oft direkt zwischen freifliegenden Vögeln oder inmitten eines Dschungels wandern. Biologie K6: In Burgers' Zoo leben viele Tiere in zusammenhängenden Ökosystemen. Was ist ein Ökosystem und warum ist das Gleichgewicht zwischen Pflanzen und Tieren darin so wichtig?",
    hu: "A Burgers' Zoo egy világhírű és innovatív állatkert Arnhemben (Gelderland tartományban), amely arról ismert, hogy hatalmas, fedett ökoszisztéma-csarnokokat ('öko-kibontakozásokat') hozott létre az állatok számára. Ezekben a csarnokokban (mint a trópusi esőerdő – Bush, a sivatag – Desert, és a tengeri akvárium – Ocean) az állatok nem hagyományos ketrecekben élnek, hanem a látogatók sétálnak át az aprólékosan rekonstruált, természetes élőhelyeken. Az állatkert élen jár az európai fajmegőrzési programokban is. Környezetismeret K5: Milyen előnyei vannak a hagyományos ketreces állatkertekkel szemben az ökoszisztéma-alapú bemutatásnak?",
    ro: "Burgers' Zoo din Arnhem este unul dintre cele mai faimoase și inovatoare parcuri zoologice din Europa, recunoscut internațional pentru habitatele sale gigantice, cunoscute sub numele de „eco-display-uri”. În loc să expună animalele în cuști clasice, grădina zoologică a recreat ecosisteme naturale complexe pe suprafețe uriașe, unde vizitatorii pot explora mediul alături de animale. Printre cele mai impresionante atracții se numără „Bush” (o veritabilă pădure tropicală acoperită), „Ocean” (un uriaș acvariu tropical cu recif de corali) și „Desert” (o reproducere a deșertului stâncos nord-american). Acest concept oferă animalelor posibilitatea unui comportament mai natural și vizitatorilor o experiență imersivă remarcabilă. Biologie K6: Animalele din Burgers' Zoo trăiesc în ecosisteme extinse. Ce este un ecosistem și de ce este important echilibrul dintre plante și animale în interiorul său?",
    en: "Burgers' Zoo in Arnhem is one of the most famous and innovative zoological parks in Europe, internationally renowned for its gigantic 'eco-displays'. Instead of exhibiting animals in classic cages, the zoo has recreated vast, natural-looking habitats where visitors can immerse themselves directly in the animals' environment. The most impressive enclosures include the 'Bush' (a massive indoor tropical rainforest), the 'Ocean' (a giant tropical coral reef aquarium), and the 'Desert' (a replica of the North American rocky desert). This immersive approach allows animals to exhibit more natural behaviors and gives visitors a remarkable experience, often walking among free-flying birds or deep within a jungle. Biology K6: Animals in Burgers' Zoo live in interconnected ecosystems. What is an ecosystem and why is the balance between plants and animals important within it?"
  },
        factsAdvanced: {
    de: [
      "Der Burgers' Bush ist eine riesige tropische Halle von über 1,5 Hektar, in der Vögel, Echsen und sogar Erdferkel frei herumlaufen.",
      "Das Burgers' Ocean verfügt über das größte lebende Korallenriff in einem Aquarium außerhalb von Australien.",
      "Der Zoo wurde 1913 von Johan Burgers gegründet und ist noch immer im Besitz der Familie.",
      "Anstatt klassischer Gehege war Burgers' Zoo weltweit einer der ersten, der gitterlose Tieranlagen nutzte."
    ],
    hu: ["A Burgers' Bush a világ egyik legnagyobb fedett beltéri esőerdeje.", "A Burgers' Ocean egy hatalmas, nyolcmillió literes tengeri akvárium, ahol az élő korallzátonyok növesztésében is világelsők.", "A Burgers' Mangrove a világ legnagyobb fedett mangróve-kupolája, amely belize-i lepkéket és manátuszokat mutat be.", "A parkot Johan Burgers alapította 1913-ban magánbirtokként, majd fázisokban bővítették mai formájára."],
    ro: [
      "Burgers' Bush este o hală tropicală uriașă de peste 1,5 hectare, unde păsări, reptile și chiar porci de pământ se mișcă liber printre vizitatori.",
      "Atracția Burgers' Ocean adăpostește unul dintre cele mai mari recife de corali vii din lume, crescut în afara Australiei.",
      "Parcul a fost fondat în anul 1913 de Johan Burgers ca o colecție privată și a rămas o afacere de familie până în prezent.",
      "La momentul inaugurării unor noi habitate, Burgers' Zoo a fost printre primele grădini zoologice la nivel global care a eliminat gratiile."
    ],
    en: [
      "The Burgers' Bush is a giant tropical hall covering over 1.5 hectares, where birds, reptiles, and even aardvarks roam freely among visitors.",
      "Burgers' Ocean features one of the largest living coral reefs in an aquarium outside of Australia, holding eight million liters of water.",
      "The park was founded in 1913 by Johan Burgers as a private collection and has remained a family-owned zoo to this day.",
      "Burgers' Mangrove is the world's largest indoor mangrove dome, specifically designed to showcase the diverse wildlife of Belize, including manatees and butterflies."
    ]
  }
    },
    // 29 more animal/kid sites...

    // 30 Nature/Mountain/Lake/River/Forest/Sea
    // 29 more nature sites...
];

