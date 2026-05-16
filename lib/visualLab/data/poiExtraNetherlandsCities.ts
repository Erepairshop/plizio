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
  },
    image: "/poi-images/port-maasvlakte-2-extra.webp",
  },
    // 29 more industry/port/agriculture sites...

    // 30 Animal-habitat/Kid-landmark
    // 29 more animal/kid sites...

    // 30 Nature/Mountain/Lake/River/Forest/Sea
    // 29 more nature sites...
];

