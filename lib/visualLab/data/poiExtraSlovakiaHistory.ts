import { POI } from "./poi";

export const slovakiaHistory: POI[] = [
  {
    id: "historical-spis-castle",
    type: "historical",
    parent: "country-slovakia",
    coords: [20.768, 49.001],
    name: { de: "Zipser Burg", hu: "Szepesi vár", ro: "Cetatea Spiš", en: "Spiš Castle" },
    description: {
      de: "Die Zipser Burg ist eine der größten Burganlagen Mitteleuropas und gehört zum UNESCO-Weltkulturerbe. Sie thront über der Landschaft und zeugt von der bewegten Geschichte der Region.",
      hu: "A Szepesi vár Közép-Európa egyik legnagyobb váregyüttese, amely az UNESCO Világörökség része. Magasan trónol a táj fölött, és a régió viszontagságos történelméről tanúskodik.",
      ro: "Cetatea Spiš este unul dintre cele mai mari ansambluri de fortificații din Europa Centrală și face parte din Patrimoniul Mondial UNESCO. Se înalță deasupra peisajului și mărturisește istoria tumultoasă a regiunii.",
      en: "Spiš Castle is one of the largest castle complexes in Central Europe and is a UNESCO World Heritage site. It towers over the landscape, bearing witness to the region's turbulent history."
    },
    descriptionAdvanced: {
      de: "",
      hu: "A Szepesi vár a 12. században épült, és évszázadokon keresztül a Szepesség közigazgatási és politikai központja volt. A várrom ma Európa egyik legnagyobb kiterjedésű vára, amely az 1780-as tűzvész után vált elhagyatottá. A vár területén végzett régészeti feltárások és a középkori életmód bemutatása a K6-os történelem tantervben a középkori várak és a társadalmi rendszerek tanulmányozásához nyújt kiváló, konkrét példát.",
      ro: "Construită pe o stâncă impunătoare în secolul al XII-lea, Cetatea Spiš a servit secole la rând drept centru administrativ, politic și cultural al regiunii Spiš. Complexul, care se întinde pe o suprafață considerabilă, reprezintă un exemplu remarcabil al evoluției arhitecturii militare și rezidențiale medievale, incluzând fortificații gotice, renascentiste și structuri mai timpurii. Distrusă parțial de un incendiu în 1780, cetatea a rămas o ruină impresionantă, fiind astăzi una dintre cele mai importante situri arheologice și turistice din Slovacia, oferind elevilor ocazia de a studia importanța strategică a castelelor în sistemul feudal.",
      en: "Perched majestically on a travertine hill overlooking the surrounding Spiš landscape, this massive castle complex serves as an iconic symbol of medieval military architecture in Central Europe. Established in the 12th century, it expanded over generations, incorporating Romanesque, Gothic, and Renaissance elements, and functioned as a crucial political and administrative seat for the Hungarian Kingdom's northern frontier. Today, its dramatic ruins offer an immersive look at feudal life, military defense, and architectural evolution, making it a cornerstone for students studying medieval societal structures, castle fortification, and European heritage conservation under the K6 history curriculum."
    },
    facts: {
      de: [
        "Sie ist seit 1993 UNESCO-Weltkulturerbe.",
        "Die Burganlage erstreckt sich über eine Fläche von 4 Hektar.",
        "Sie war eine der größten Burgen Mitteleuropas.",
        "Die Burg wurde 1780 durch einen Brand zerstört."
      ],
      hu: [
        "1993 óta az UNESCO Világörökség része.",
        "A váregyüttes 4 hektáros területen terül el.",
        "Közép-Európa egyik legnagyobb vára volt.",
        "A várat egy 1780-as tűzvész pusztította el."
      ],
      ro: [
        "Este parte a Patrimoniului Mondial UNESCO din 1993.",
        "Ansamblul cetății se întinde pe o suprafață de 4 hectare.",
        "A fost una dintre cele mai mari cetăți din Europa Centrală.",
        "Cetatea a fost distrusă de un incendiu în 1780."
      ],
      en: [
        "It has been a UNESCO World Heritage site since 1993.",
        "The castle complex covers an area of 4 hectares.",
        "It was one of the largest castles in Central Europe.",
        "The castle was destroyed by a fire in 1780."
      ]
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A várban 1970 óta folynak szisztematikus régészeti és helyreállítási munkák.",
        "A területen korábban kelta település is létezett.",
        "A 15. században a vár jelentős átépítéseken ment keresztül a gótikus stílusban.",
        "A Szepesi vár környéke a történelmi Magyarország egyik leggazdagabb vidéke volt.",
        "A vár területén rendszeresen rendeznek történelmi bemutatókat és lovagi tornákat.",
        "A vár a Szepesség egyik leglátogatottabb turisztikai célpontja.",
        "A romokból csodálatos kilátás nyílik a Szepesi-medencére és a Magas-Tátrára."
      ],
      ro: [
        "Lucrările sistematice de arheologie și restaurare au început în 1970.",
        "În zonă a existat o așezare celtică înainte de construcția cetății medievale.",
        "În secolul al XV-lea, cetatea a suferit transformări majore în stil gotic.",
        "Împrejurimile cetății Spiš au fost printre cele mai bogate regiuni ale Ungariei istorice.",
        "Situl găzduiește regulat reconstituiri istorice și turniruri medievale pentru vizitatori.",
        "Cetatea este unul dintre cele mai vizitate obiective turistice din regiunea Spiš.",
        "Ruinele oferă panorame spectaculoase asupra bazinului Spiš și a munților Tatra Înaltă."
      ],
      en: [
        "Systematic archaeological research and restoration efforts have been ongoing at the site since 1970.",
        "The hill site was inhabited by a prehistoric Celtic settlement long before the medieval castle was built.",
        "Extensive Gothic renovations during the 15th century transformed the castle into its current sprawling layout.",
        "The Spiš region surrounding the castle was historically among the wealthiest areas in the Hungarian Kingdom.",
        "The site now serves as a dynamic educational venue, frequently hosting reenactments and medieval festivals.",
        "It ranks among the most visited tourist destinations in Slovakia for both history and architecture enthusiasts.",
        "The upper castle ruins offer clear, panoramic views across the Spiš basin toward the High Tatra mountain range."
      ]
    },
    image: "/geo-images/slovakia/historical-spis-castle.webp"
  }
];
