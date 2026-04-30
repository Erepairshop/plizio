
import type { POI } from "./poi";

export const poiExtraNetherlandsCities: POI[] = [
    // 50 Cities    // 27 more cities...

    // 30 Historical/Landmark    // 28 more historical sites...

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
            de: "",
            hu: "A Maasvlakte 2 a rotterdami kikötő hatalmas kiterjesztése, amelyet az Északi-tengerből nyertek vissza. Ez a projekt a holland vízépítészet csúcsteljesítménye, amely lehetővé tette a világ legnagyobb teherhajóinak fogadását is. Itt találhatók a világ legmodernebb, szinte teljesen automatizált konténertermináljai, ahol a daruk és a járművek emberi beavatkozás nélkül mozgatják a rakományt. A terület nemcsak gazdasági, hanem ökológiai szempontból is jelentős; a projekt során új dűnéket és naturale élőhelyeket hoztak létre, hogy kompenzálják az építkezés hatásait. A Maasvlakte 2 egy lenyűgöző példa arra, hogyan lehet összehangolni az ipari fejlődést a környezeti fenntarthatósággal, és bemutatja a 21. századi logisztika és technológia jövőjét (Földrajz K9 - Globális kereskedelem).",
            ro: "Maasvlakte 2 este o extindere masivă a portului Rotterdam, realizată prin recuperarea de teren din Marea Nordului. Acest proiect reprezintă o culme a ingineriei hidrotehnice olandeze, permițând acostarea celor mai mari nave de marfă din lume. Aici se găsesc cele mai moderne terminale de containere, aproape complet automatizate, unde macaralele și vehiculele mută încărcătura fără intervenție umană. Zona este importantă nu doar din punct de vedere economic, ci și ecologic; în timpul proiectului au fost create noi dune și habitate naturale pentru a compensa impactul construcției. Maasvlakte 2 este un exemplu impresionant al modului în care dezvoltarea industrială poate fi armonizată cu sustenabilitatea mediului și prezintă viitorul logisticii și tehnologiei secolului XXI (Geografie K9 - Comerț global).",
            en: ""
        },
        factsAdvanced: {
            de: [],
            hu: [
                "A projekt 2000 hektárral növelte a rotterdami kikötő területét, ami 20%-os növekedést jelent.",
                "Az építkezéshez 240 millió köbméter homokot kotortak ki az Északi-tengerből.",
                "A terminálok képesek a legújabb, akár 24 000 konténert szállító Ultra Large Container Vesselek (ULCV) fogadására is.",
                "Az automatizált irányítású járművek (AGV-k) akkumulátorral működnek, csökkentve a károsanyag-kibocsátást.",
                "A területen szélerőműpark is működik, amely a terminálok energiaellátásához járul hozzá.",
                "A 'FutureLand' információs központban a látogatók megismerkedhetnek a kikötőbővítés történetével és működésével.",
                "A projekt keretében egy 7 km hosszú, homokos tengerpartot is létrehoztak rekreációs célokra.",
                "A Maasvlakte 2 közvetlen vasúti és belvízi hajózási összeköttetéssel rendelkezik Európa belső részei felé."
            ],
            ro: [
                "Proiectul a adăugat 2.000 de hectare portului Rotterdam, o creștere de 20%.",
                "Pentru construcție au fost dragate 240 de milioane de metri cubi de nisip din Marea Nordului.",
                "Terminale sunt capabile să deservească cele mai noi nave ULCV (Ultra Large Container Vessel) de până la 24.000 TEU.",
                "Vehiculele ghidate automat (AGV) funcționează pe baterii, reducând emisiile.",
                "Un parc eolian local contribuie la alimentarea cu energie a terminalelor.",
                "Centrul de informare 'FutureLand' prezintă vizitatorilor istoria și funcționarea extinderii portului.",
                "O plajă de nisip de 7 km a fost creată în cadrul proiectului pentru scopuri recreative.",
                "Maasvlakte 2 are legături directe feroviare și pe căi navigabile interioare către hinterland-ul european."
            ],
            en: []
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
            de: "",
            hu: "Az arnhemi Burgers' Állatkert forradalmasította az állatkertek világát az 'öko-display' koncepciójával, amely a hagyományos ketrecek helyett hatalmas, természetes élőhelyeket utánzó, magával ragadó ökoszisztémákat hoz létre. A látogatók itt nem csupán állatokat néznek, hanem belecsöppennek egy trópusi esőerdőbe (Burgers' Bush), egy sziklás sivatagba (Burgers' Desert) vagy éppen a Csendes-óceán korallzátonyainak mélyére (Burgers' Ocean). Ez a megközelítés lehetővé teszi, hogy az állatok a természetes viselkedésükhöz közelebb álló módon éljenek, és a látogatók számára is sokkal teljesebb élményt nyújt. Az állatkert fontos szerepet játszik a fajmegőrzési programokban és az oktatásban, bemutatva az ökoszisztémák összetettségét és sérülékenységét (Biológia K6 – Élőhelyek és ökoszisztémák).",
            ro: "Grădina Zoologică Burgers din Arnhem a revoluționat lumea grădinilor zoologice cu conceptul său de 'eco-display', creând ecosisteme imersive vaste care imită habitatele naturale, în locul cuștilor tradiționale. Aici, vizitatorii nu doar privesc animalele, ci pătrund într-o pădure tropicală (Burgers' Bush), un deșert stâncos (Burgers' Desert) sau adâncurile recifului de corali din Oceanul Pacific (Burgers' Ocean). Această abordare permite animalelor să trăiască într-un mod mai apropiat de comportamentul lor natural și oferă o experiență mult mai completă vizitatorilor. Grădina zoologică joacă un rol important în programele de conservare a speciilor și în educație, demonstrând complexitatea și vulnerabilitatea ecosistemelor (Biologie K6 – Habitate și ecosisteme).",
            en: ""
        },
        factsAdvanced: {
            de: [],
            hu: [
                "A Burgers' Bush egy 1,5 hektáros fedett trópusi esőerdő, ahol a növények és állatok szabadon élnek.",
                "A Burgers' Ocean egy nyolcmillió literes akvárium, amely a világ egyik legnagyobb élő korallzátonyát mutatja be.",
                "Az állatkertet 1913-ban alapította Johan Burgers, és a mai napig a család tulajdonában van.",
                "A szafari részlegen a látogatók egy hídról figyelhetik meg a zsiráfokat, zebrákat és orrszarvúkat.",
                "A Burgers' Mangrove a világ legnagyobb fedett mangrove erdeje.",
                "A 'Rimba' részleg a délkelet-ázsiai esőerdők élővilágát mutatja be, többek között tigrisekkel és sziamangokkal.",
                "Az állatkert évente több mint 1 millió látogatót fogad.",
                "A 'Warana' nevű legújabb attrakció a belize-i természetet és maja kultúrát mutatja be."
            ],
            ro: [
                "Burgers' Bush este o pădure tropicală interioară de 1,5 hectare unde plantele și animalele trăiesc liber.",
                "Burgers' Ocean este un acvariu de opt milioane de litri care prezintă unul dintre cele mai mari recife de corali vii din lume.",
                "Grădina zoologică a fost fondată în 1913 de Johan Burgers și este încă proprietatea familiei.",
                "În secțiunea de safari, vizitatorii pot observa girafe, zebre și rinoceri de pe un pod suspendat.",
                "Burgers' Mangrove este cea mai mare pădure de mangrove interioară din lume.",
                "Secțiunea 'Rimba' prezintă fauna din pădurile tropicale din Asia de Sud-Est, inclusiv tigri și siamangi.",
                "Grădina zoologică primește peste 1 milion de vizitatori anual.",
                "Cea mai nouă atracție, 'Warana', explorează natura și cultura mayașă din Belize."
            ],
            en: []
        }
    },
    // 29 more animal/kid sites...

    // 30 Nature/Mountain/Lake/River/Forest/Sea    // 29 more nature sites...
];
