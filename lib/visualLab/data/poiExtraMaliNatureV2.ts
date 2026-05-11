// @ts-nocheck
import type { POI } from "./poi";

export const poiExtraMaliNatureV2: POI[] = [
  {
    id: "niger-river-nature-v2",
    type: "river",
    parent: "ML-BM",
    coords: [-3.5, 16.5],
    name: { de: "Niger", hu: "Niger", ro: "Niger", en: "Niger" },
    description: { de: "Der drittlängste Fluss Afrikas, der durch Mali fließt und eine Lebensader für das Land darstellt.", hu: "Afrika harmadik leghosszabb folyója, amely átfolyik Malin, és az ország éltető ere.", ro: "Al treilea cel mai lung fluviu din Africa, care curge prin Mali și reprezintă o linie de viață pentru țară.", en: "The third longest river in Africa, flowing through Mali and serving as a lifeline for the country." },
    facts: {
      de: ["Lebensader Malis", "UNESCO-Welterbe am Ufer"],
      hu: ["Mali éltető ere", "UNESCO világörökség a partján"],
      ro: ["Linia de viață a Maliului", "Patrimoniu UNESCO pe mal"],
      en: ["Lifeline of Mali", "UNESCO World Heritage sites on its banks"]
    }
  },
  {
    id: "hombori-tondo-nature-v2",
    type: "mountain",
    parent: "ML-DD",
    coords: [-1.68, 15.26],
    name: { de: "Hombori Tondo", hu: "Hombori Tondo", ro: "Hombori Tondo", en: "Hombori Tondo" },
    description: { de: "Der höchste Berg Malis, ein markanter Tafelberg in der Region Mopti.", hu: "Mali legmagasabb hegye, egy jellegzetes táblahegy Mopti régióban.", ro: "Cel mai înalt munte din Mali, un munte plat distinctiv în regiunea Mopti.", en: "The highest mountain in Mali, a prominent table mountain in the Mopti region." },
    facts: {
      de: ["Höchster Punkt Malis", "Geologische Formation"],
      hu: ["Mali legmagasabb pontja", "Geológiai képződmény"],
      ro: ["Cel mai înalt punct din Mali", "Formațiune geologică"],
      en: ["Highest point in Mali", "Geological formation"]
    }, image: "/poi-images/hombori-tondo-nature-v2.webp"},
  {
    id: "lake-faguibine-nature-v2",
    type: "lake",
    parent: "ML-TB",
    coords: [-3.8, 16.7],
    name: { de: "Lac Faguibine", hu: "Faguibine-tó", ro: "Lacul Faguibine", en: "Lake Faguibine" },
    description: { de: "Ein bedeutender, aber saisonal stark schwankender See im Norden Malis.", hu: "Egy jelentős, de szezonálisan erősen ingadozó tó Mali északi részén.", ro: "Un lac important, dar care fluctuează puternic sezonier în nordul Maliului.", en: "A significant but seasonally fluctuating lake in northern Mali." },
    facts: {
      de: ["Saisonaler See", "Wichtig für die Landwirtschaft"],
      hu: ["Szezonális tó", "Fontos a mezőgazdaság számára"],
      ro: ["Lac sezonier", "Important pentru agricultură"],
      en: ["Seasonal lake", "Important for agriculture"]
    }, image: "/poi-images/lake-faguibine-nature-v2.webp"},
  {
    id: "baoule-river-nature-v2",
    type: "river",
    parent: "ML-KK",
    coords: [-7.8, 12.8],
    name: { de: "Baoulé", hu: "Baoulé", ro: "Baoulé", en: "Baoulé" },
    description: { de: "Ein Nebenfluss des Bakoy im Westen Malis, der durch das Baoulé-Reservat fließt.", hu: "A Bakoy mellékfolyója Mali nyugati részén, amely átfolyik a Baoulé rezervátumon.", ro: "Un afluent al râului Bakoy în vestul Maliului, care curge prin rezervația Baoulé.", en: "A tributary of the Bakoy river in western Mali, flowing through the Baoulé reserve." },
    facts: {
      de: ["Zufluss des Bakoy", "Naturschutzgebiet"],
      hu: ["A Bakoy mellékfolyója", "Természetvédelmi terület"],
      ro: ["Afluent al Bakoy", "Rezervație naturală"],
      en: ["Tributary of Bakoy", "Nature reserve"]
    }
  },
  {
    id: "faleme-river-nature-v2",
    type: "river",
    parent: "ML-KY",
    coords: [-11.8, 14.7],
    name: { de: "Falémé", hu: "Falémé", ro: "Falémé", en: "Falémé" },
    description: { de: "Ein Grenzfluss zwischen Mali und dem Senegal.", hu: "Határfolyó Mali és Szenegál között.", ro: "Un râu de frontieră între Mali și Senegal.", en: "A border river between Mali and Senegal." },
    facts: {
      de: ["Grenzfluss", "Goldvorkommen"],
      hu: ["Határfolyó", "Aranylelőhely"],
      ro: ["Râu de frontieră", "Zăcăminte de aur"],
      en: ["Border river", "Gold deposits"]
    }
  },
  {
    id: "lake-debore-nature-v2",
    type: "lake",
    parent: "ML-MP",
    coords: [-4.2, 14.9],
    name: { de: "Lac Débo", hu: "Débo-tó", ro: "Lacul Débo", en: "Lake Débo" },
    description: { de: "Ein großer See im Niger-Binnendelta in Mali.", hu: "Egy nagy tó a Niger belső deltájában, Maliban.", ro: "Un lac mare în delta interioară a Nigerului din Mali.", en: "A large lake in the Inner Niger Delta in Mali." },
    facts: {
      de: ["Niger-Binnendelta", "Wichtiges Feuchtgebiet"],
      hu: ["Niger belső deltája", "Fontos vizes élőhely"],
      ro: ["Delta interioară a Nigerului", "Zonă umedă importantă"],
      en: ["Inner Niger Delta", "Important wetland"]
    }, image: "/poi-images/lake-debore-nature-v2.webp"},
  {
    id: "mount-dimamou-nature-v2",
    type: "mountain",
    parent: "ML-KK",
    coords: [-8.2, 13.1],
    name: { de: "Mont Dimamou", hu: "Dimamou-hegy", ro: "Muntele Dimamou", en: "Mount Dimamou" },
    description: { de: "Ein Berg im westlichen Hochland von Mali.", hu: "Egy hegy Mali nyugati felföldjén.", ro: "Un munte în podișul vestic al Maliului.", en: "A mountain in the western highlands of Mali." },
    facts: {
      de: ["Westliches Hochland", "Bergregion"],
      hu: ["Nyugati felföld", "Hegyvidék"],
      ro: ["Podișul vestic", "Regiune montană"],
      en: ["Western highlands", "Mountain region"]
    }, image: "/poi-images/mount-dimamou-nature-v2.webp"},
  {
    id: "bafing-river-nature-v2",
    type: "river",
    parent: "ML-KK",
    coords: [-10.8, 12.3],
    name: { de: "Bafing", hu: "Bafing", ro: "Bafing", en: "Bafing" },
    description: { de: "Ein wichtiger Nebenfluss, der in Mali entspringt und den Senegal-Fluss bildet.", hu: "Egy fontos mellékfolyó, amely Maliban ered, és alkotja a Szenegál folyót.", ro: "Un afluent important care izvorăște în Mali și formează râul Senegal.", en: "An important tributary that originates in Mali and forms the Senegal River." },
    facts: {
      de: ["Quellfluss des Senegal", "Wasserkraftpotenzial"],
      hu: ["A Szenegál folyó forrása", "Vízenergia potenciál"],
      ro: ["Sursa râului Senegal", "Potențial hidroenergetic"],
      en: ["Source of Senegal River", "Hydroelectric potential"]
    }, image: "/poi-images/bafing-river-nature-v2.webp",
    descriptionAdvanced: {
      de: "Der Bafing ist ein bedeutender Fluss in Guinea und einer der beiden Hauptquellflüsse des Senegal-Stroms. Geografisch entspringt er im Herzen des Fouta-Djallon-Hochlandes, in der Nähe der Stadt Mamou, und fließt in nördlicher Richtung durch tief eingeschnittene Täler und unberührte Landschaften. Der Name 'Bafing' bedeutet in der Sprache der Mandinka 'Schwarzer Fluss', was auf die dunkle Farbe seines Wassers in tiefen Abschnitten hindeutet. Auf seinem Weg durch Guinea bildet der Fluss zahlreiche Stromschnellen und Wasserfälle, die ihm eine wilde Schönheit verleihen. Historisch gesehen ist der Bafing die Lebensader für die Gemeinschaften im nördlichen Hochland und dient seit Jahrhunderten als natürliche Grenze und Wasserquelle. Eine der modernsten und wirtschaftlich wichtigsten Strukturen am Fluss ist der Manantali-Staudamm (in Mali), der jedoch maßgeblich vom Wasserzufluss aus Guinea abhängt. Ökologisch ist der Bafing von herausragender Bedeutung, da sein Einzugsgebiet Rückzugsorte für bedrohte Tierarten wie Schimpansen und Flusspferde bietet. Das Leben am Fluss ist durch den Rhythmus der Regenzeit geprägt, wenn der Bafing zu einem reißenden Strom anschwillt. Für Guinea ist der Bafing ein Symbol für den ökologischen Reichtum des Hochlandes und die grenzüberschreitende Verbundenheit Westafrikas durch seine Wasserwege.",
      hu: "A Bafing Guinea egyik legfontosabb folyója, a Szenegál-folyam két fő forráságának egyike. Földrajzilag a Fouta Djallon-hegység szívében, Mamou városa közelében ered, és északi irányba tartva mély völgyeken és érintetlen tájakon halad keresztül. A 'Bafing' név mandinka nyelven 'Fekete folyót' jelent, ami a mélyebb szakaszokon látható sötét vízfelületre utal. Útja során a folyó számos zúgót és kisebb vízesést alkot, ami vadregényes szépséget kölcsönöz neki. Történelmileg a Bafing az északi felföld közösségeinek éltető eleme, évszázadok óta természetes határként és ivóvízforrásként szolgál. Gazdaságilag a folyó jelentősége óriási: vize táplálja a mali területen található Manantali-gátat, amely az egész régió áramellátásának és öntözésének egyik alapköve. Ökológiai szempontból a Bafing mente kritikus fontosságú, hiszen a folyóparti galériaerdők menedéket nyújtanak a veszélyeztetett nyugat-afrikai csimpánzoknak és vízilovaknak. A folyó menti élet a csapadékos évszak ritmusához igazodik, amikor a Bafing hatalmas, hömpölygő áradattá duzzad. Guinea számára a Bafing a hegyvidéki vízkincs szimbóluma, amely összeköti az országot a szubszaharai Afrika más államaival.",
      ro: "Bafing este un râu major din Guineea și unul dintre cei doi afluenți principali care formează fluviul Senegal. Geografic, acesta își are izvoarele în inima masivului Fouta Djallon, în apropierea orașului Mamou, și curge spre nord traversând văi adânci și peisaje virgine. Numele „Bafing” înseamnă în limba Mandinka „Râul Negru”, referindu-se la culoarea închisă a apelor sale în zonele cu adâncime mare. De-a lungul cursului său guineean, râul formează numeroase repezișuri și cascade care îi conferă o frumusețe sălbatică. Din punct de vedere istoric, Bafing a fost artera vitală pentru comunitățile din podișul nordic, servind drept frontieră naturală și sursă de apă de milenii. Din punct de vedere economic, importanța sa este majoră la nivel regional, alimentând barajul Manantali din Mali, esențial pentru irigații și energie în bazinul fluviului Senegal. Ecologic, valoarea râului Bafing este inestimabilă, bazinul său oferind refugiu unor specii protejate, precum cimpanzeii și hipopotamii. Viața riverană este dictată de succesiunea sezoanelor, râul devenind un torent impunător în timpul ploilor abundente. Pentru Guineea, Bafing simbolizează bogăția hidrologică a munților săi și conectivitatea transfrontalieră prin resursele de apă.",
      en: "The Bafing is a significant river in Guinea and one of the two primary headwaters of the Senegal River. Geographically, it originates in the heart of the Fouta Djallon highlands near the city of Mamou, flowing northward through deeply incised valleys and pristine landscapes. The name 'Bafing' translates to 'Black River' in the Mandinka language, reflecting the dark hue of its waters in its deeper reaches. Along its journey through Guinea, the river forms numerous rapids and waterfalls that lend it a raw, untamed beauty. Historically, the Bafing has been the lifeblood for communities in the northern highlands, serving as a natural boundary and a reliable water source for centuries. Economically, the river is of immense regional importance as its flow is the primary contributor to the Manantali Dam in Mali, which provides power and irrigation for the entire Senegal River basin. Ecologically, the Bafing is vital, as its basin offers sanctuary to endangered species such as West African chimpanzees and hippos. Life along the river is governed by the rainy season, when the Bafing transforms into a powerful torrent. For Guinea, the Bafing is a symbol of the highlands' ecological wealth and West Africa's transboundary interconnectedness through its waterways."
    },
    factsAdvanced: {
      de: ["Der Bafing ist der wasserreichste Quellfluss des Senegal-Stromes.", "Sein Name bedeutet 'Schwarzer Fluss' in der Sprache der Mandinka.", "Der Fluss entspringt auf einer Höhe von etwa 800 Metern im Fouta Djallon.", "Der Bafing-Nationalpark in der Nähe schützt eine große Schimpansen-Population.", "Der Fluss ist eine wichtige Quelle für die handwerkliche Fischerei im Norden.", "Er bildet auf langen Strecken die natürliche Grenze zwischen regionalen Provinzen."],
      hu: ["A Bafing a Szenegál-folyam legbővizűbb forrásága.", "A folyó neve mandinka nyelven 'Fekete folyót' jelent.", "A forrásvidéke Mamou városától északra, a hegyekben található.", "A folyó vize táplálja a Manantali vízerőművet a szomszédos Maliban.", "A folyóparti erdők Guinea egyik legfontosabb csimpánz-élőhelyei.", "Az esős évszakban a folyó vízszintje akár 5-10 métert is emelkedhet."],
      ro: ["Bafing parcurge peste 350 de kilometri pe teritoriul Guineei înainte de a intra în Mali.", "Confluența sa cu râul Bakoye formează oficial fluviul Senegal la Bafoulabé.", "Râul traversează zone cu depozite minerale importante, precum bauxita.", "Ecologia râului este monitorizată prin acorduri internaționale în cadrul OMVS.", "În bazinele sale adânci se găsesc varietăți rare de pești de apă dulce.", "Bafing este reprezentat în tradițiile orale ca un spirit puternic și misterios."],
      en: ["The Bafing provides over 50% of the total water volume for the Senegal River.", "Its name originates from the Mandinka word for 'Black River'.", "The river's headwaters are situated in the high-rainfall zone of the Fouta Djallon.", "It serves as a critical corridor for the movement of West African wildlife.", "The Bafing is central to the transboundary water management organization OMVS.", "Traditional fishing in the Bafing is a primary protein source for inland villages."]
    }
  },
  {
    id: "mount-kourou-nature-v2",
    type: "mountain",
    parent: "ML-SK",
    coords: [-6.5, 11.2],
    name: { de: "Mont Kourou", hu: "Kourou-hegy", ro: "Muntele Kourou", en: "Mount Kourou" },
    description: { de: "Ein Berg im südlichen Mali, nahe der Grenze zur Elfenbeinküste.", hu: "Egy hegy Dél-Maliban, közel az Elefántcsontpart határához.", ro: "Un munte în sudul Maliului, aproape de granița cu Coasta de Fildeș.", en: "A mountain in southern Mali, near the border with Ivory Coast." },
    facts: {
      de: ["Südliches Mali", "Grenznah"],
      hu: ["Dél-Mali", "Határközeli"],
      ro: ["Sudul Maliului", "Aproape de graniță"],
      en: ["Southern Mali", "Near the border"]
    }, image: "/poi-images/mount-kourou-nature-v2.webp"},
  {
    id: "lake-tanda-nature-v2",
    type: "lake",
    parent: "ML-KY",
    coords: [-12.1, 14.2],
    name: { de: "Lac Tanda", hu: "Tanda-tó", ro: "Lacul Tanda", en: "Lake Tanda" },
    description: { de: "Ein kleiner See im Grenzgebiet zu Senegal.", hu: "Egy kis tó a Szenegállal határos területen.", ro: "Un mic lac în zona de frontieră cu Senegalul.", en: "A small lake in the border area with Senegal." },
    facts: {
      de: ["Kleiner See", "Grenzregion"],
      hu: ["Kis tó", "Határvidék"],
      ro: ["Mic lac", "Regiune de frontieră"],
      en: ["Small lake", "Border region"]
    }, image: "/poi-images/lake-tanda-nature-v2.webp"},
  {
    id: "mount-sarro-nature-v2",
    type: "mountain",
    parent: "ML-KK",
    coords: [-9.5, 12.5],
    name: { de: "Mont Sarro", hu: "Sarro-hegy", ro: "Muntele Sarro", en: "Mount Sarro" },
    description: { de: "Ein markanter Gipfel im Westen Malis.", hu: "Egy jellegzetes csúcs Mali nyugati részén.", ro: "Un vârf distinctiv în vestul Maliului.", en: "A prominent peak in western Mali." },
    facts: {
      de: ["West-Mali", "Berg"],
      hu: ["Nyugat-Mali", "Hegy"],
      ro: ["Vestul Maliului", "Munte"],
      en: ["West Mali", "Mountain"]
    }, image: "/poi-images/mount-sarro-nature-v2.webp"},
  {
    id: "bakoy-river-nature-v2",
    type: "river",
    parent: "ML-KK",
    coords: [-8.8, 13.5],
    name: { de: "Bakoy", hu: "Bakoy", ro: "Bakoy", en: "Bakoy" },
    description: { de: "Ein bedeutender Nebenfluss, der in Mali den Senegal-Fluss speist.", hu: "Egy jelentős mellékfolyó, amely Maliban táplálja a Szenegál folyót.", ro: "Un afluent important care alimentează râul Senegal în Mali.", en: "An important tributary that feeds the Senegal River in Mali." },
    facts: {
      de: ["Zulauf des Senegal", "Wüstenrandfluss"],
      hu: ["A Szenegál folyó mellékága", "Sivatagi peremfolyó"],
      ro: ["Afluent al Senegalului", "Râu de marginea deșertului"],
      en: ["Tributary of Senegal", "Desert margin river"]
    }
  },
  {
    id: "lake-niangay-nature-v2",
    type: "lake",
    parent: "ML-TB",
    coords: [-3.5, 16.2],
    name: { de: "Lac Niangay", hu: "Niangay-tó", ro: "Lacul Niangay", en: "Lake Niangay" },
    description: { de: "Ein Feuchtgebiet im Norden, das für seine reiche Vogelwelt bekannt ist.", hu: "Egy északi vizes élőhely, amely gazdag madárvilágáról ismert.", ro: "O zonă umedă în nord, cunoscută pentru bogata sa viață aviară.", en: "A wetland in the north, known for its rich birdlife." },
    facts: {
      de: ["Feuchtgebiet", "Vogelparadies"],
      hu: ["Vizes élőhely", "Madárparadicsom"],
      ro: ["Zonă umedă", "Paradisul păsărilor"],
      en: ["Wetland", "Bird paradise"]
    }, image: "/poi-images/lake-niangay-nature-v2.webp"},
  {
    id: "mount-tombouctou-nature-v2",
    type: "mountain",
    parent: "ML-TB",
    coords: [-3.0, 16.7],
    name: { de: "Mont Tombouctou", hu: "Timbuktu-hegy", ro: "Muntele Tombouctou", en: "Mount Timbuktu" },
    description: { de: "Ein geologisches Relief in der Nähe der legendären Wüstenstadt.", hu: "Egy geológiai domborzati forma a legendás sivatagi város közelében.", ro: "Un relief geologic în apropierea legendarului oraș deșertic.", en: "A geological feature near the legendary desert city." },
    facts: {
      de: ["Wüstenrelief", "Wahrzeichen"],
      hu: ["Sivatagi domborzat", "Nevezetesség"],
      ro: ["Relief deșertic", "Emblemă"],
      en: ["Desert relief", "Landmark"]
    }, image: "/poi-images/mount-tombouctou-nature-v2.webp"},
  {
    id: "baoule-ba-river-nature-v2",
    type: "river",
    parent: "ML-KK",
    coords: [-7.5, 13.0],
    name: { de: "Baoulé-Ba", hu: "Baoulé-Ba", ro: "Baoulé-Ba", en: "Baoulé-Ba" },
    description: { de: "Ein weiterer wichtiger Arm des Baoulé-Flusssystems in Mali.", hu: "A Baoulé folyórendszer egy másik fontos ága Maliban.", ro: "O altă ramură importantă a sistemului hidrografic Baoulé din Mali.", en: "Another important branch of the Baoulé river system in Mali." },
    facts: {
      de: ["Flussarm", "Wassernetz"],
      hu: ["Folyóág", "Vízrendszer"],
      ro: ["Braț al râului", "Sistem hidrografic"],
      en: ["River branch", "Water system"]
    }, image: "/poi-images/baoule-ba-river-nature-v2.webp"},
  {
    id: "mount-koulou-nature-v2",
    type: "mountain",
    parent: "ML-SK",
    coords: [-6.8, 11.5],
    name: { de: "Mont Koulou", hu: "Koulou-hegy", ro: "Muntele Koulou", en: "Mount Koulou" },
    description: { de: "Ein markanter Gipfel in der Region Sikasso.", hu: "Egy jellegzetes csúcs Sikasso régióban.", ro: "Un vârf distinctiv în regiunea Sikasso.", en: "A prominent peak in the Sikasso region." },
    facts: {
      de: ["Region Sikasso", "Gipfel"],
      hu: ["Sikasso régió", "Csúcs"],
      ro: ["Regiunea Sikasso", "Vârf"],
      en: ["Sikasso region", "Peak"]
    }, image: "/poi-images/mount-koulou-nature-v2.webp"},
  {
    id: "lake-tele-nature-v2",
    type: "lake",
    parent: "ML-MP",
    coords: [-4.5, 14.5],
    name: { de: "Lac Télé", hu: "Télé-tó", ro: "Lacul Télé", en: "Lake Télé" },
    description: { de: "Ein malerischer See in der Nähe der Stadt Mopti.", hu: "Egy festői tó Mopti városának közelében.", ro: "Un lac pitoresc în apropierea orașului Mopti.", en: "A picturesque lake near the city of Mopti." },
    facts: {
      de: ["In der Nähe von Mopti", "Landschaft"],
      hu: ["Mopti közelében", "Tájkép"],
      ro: ["Aproape de Mopti", "Peisaj"],
      en: ["Near Mopti", "Landscape"]
    }, image: "/poi-images/lake-tele-nature-v2.webp"},
  {
    id: "bago-river-nature-v2",
    type: "river",
    parent: "ML-SK",
    coords: [-5.5, 12.0],
    name: { de: "Bago", hu: "Bago", ro: "Bago", en: "Bago" },
    description: { de: "Ein kleinerer Flusslauf im fruchtbaren Süden Malis.", hu: "Egy kisebb folyóvíz Mali termékeny déli részén.", ro: "Un curs de apă mai mic în sudul fertil al Maliului.", en: "A smaller watercourse in the fertile south of Mali." },
    facts: {
      de: ["Fruchtbarer Süden", "Fluss"],
      hu: ["Termékeny Dél", "Folyó"],
      ro: ["Sudul fertil", "Râu"],
      en: ["Fertile south", "River"]
    }, image: "/poi-images/bago-river-nature-v2.webp"},
  {
    id: "mount-gourma-nature-v2",
    type: "mountain",
    parent: "ML-GA",
    coords: [0.5, 16.0],
    name: { de: "Mont Gourma", hu: "Gourma-hegy", ro: "Muntele Gourma", en: "Mount Gourma" },
    description: { de: "Ein Bergmassiv in der Gourma-Region.", hu: "Egy hegyvonulat a Gourma régióban.", ro: "Un masiv muntos în regiunea Gourma.", en: "A mountain massif in the Gourma region." },
    facts: {
      de: ["Region Gourma", "Bergmassiv"],
      hu: ["Gourma régió", "Hegyvonulat"],
      ro: ["Regiunea Gourma", "Masiv muntos"],
      en: ["Gourma region", "Mountain massif"]
    }, image: "/poi-images/mount-gourma-nature-v2.webp"},
  {
    id: "lake-korientze-nature-v2",
    type: "lake",
    parent: "ML-MP",
    coords: [-3.8, 15.1],
    name: { de: "Lac Korientzé", hu: "Korientzé-tó", ro: "Lacul Korientzé", en: "Lake Korientzé" },
    description: { de: "Ein jahreszeitlich bedingter See in der Zentralregion von Mali.", hu: "Egy évszakfüggő tó Mali középső régiójában.", ro: "Un lac sezonier în regiunea centrală a Maliului.", en: "A seasonal lake in the central region of Mali." },
    facts: {
      de: ["Zentral-Mali", "Saisonal"],
      hu: ["Közép-Mali", "Szezonális"],
      ro: ["Mali central", "Sezonier"],
      en: ["Central Mali", "Seasonal"]
    }, image: "/poi-images/lake-korientze-nature-v2.webp"},
  {
    id: "mount-bam-nature-v2",
    type: "mountain",
    parent: "ML-BM",
    coords: [-3.2, 16.0],
    name: { de: "Mont Bam", hu: "Bam-hegy", ro: "Muntele Bam", en: "Mount Bam" },
    description: { de: "Ein sanftes Hügelrelief in der Region Bam.", hu: "Egy szelíd dombvidék Bam régióban.", ro: "Un relief deluros blând în regiunea Bam.", en: "A gentle hill relief in the Bam region." },
    facts: {
      de: ["Region Bam", "Hügelland"],
      hu: ["Bam régió", "Dombság"],
      ro: ["Regiunea Bam", "Regiune deluroasă"],
      en: ["Bam region", "Hill country"]
    }, image: "/poi-images/mount-bam-nature-v2.webp"},
  {
    id: "san-river-nature-v2",
    type: "river",
    parent: "ML-SG",
    coords: [-4.9, 13.3],
    name: { de: "San", hu: "San", ro: "San", en: "San" },
    description: { de: "Ein lokaler Flusslauf in der Region Ségou.", hu: "Egy helyi folyóvíz Ségou régióban.", ro: "Un curs de apă local în regiunea Ségou.", en: "A local watercourse in the Ségou region." },
    facts: {
      de: ["Region Ségou", "Fluss"],
      hu: ["Ségou régió", "Folyó"],
      ro: ["Regiunea Ségou", "Râu"],
      en: ["Ségou region", "River"]
    }
  },
  {
    id: "lake-doro-nature-v2",
    type: "lake",
    parent: "ML-DD",
    coords: [-1.2, 14.8],
    name: { de: "Lac Doro", hu: "Doro-tó", ro: "Lacul Doro", en: "Lake Doro" },
    description: { de: "Ein kleiner See nahe der Dogon-Region.", hu: "Egy kis tó a Dogon régió közelében.", ro: "Un mic lac în apropierea regiunii Dogon.", en: "A small lake near the Dogon region." },
    facts: {
      de: ["Dogon-Region", "See"],
      hu: ["Dogon régió", "Tó"],
      ro: ["Regiunea Dogon", "Lac"],
      en: ["Dogon region", "Lake"]
    }, image: "/poi-images/lake-doro-nature-v2.webp"},
  {
    id: "mount-dogon-nature-v2",
    type: "mountain",
    parent: "ML-DD",
    coords: [-1.5, 14.5],
    name: { de: "Mont Dogon", hu: "Dogon-hegy", ro: "Muntele Dogon", en: "Mount Dogon" },
    description: { de: "Teil des spektakulären Bandiagara-Steilhangs, der das Dogon-Land überragt.", hu: "A látványos Bandiagara-sziklafal része, amely a Dogon-föld fölé magasodik.", ro: "Parte a spectaculosului versant Bandiagara care domină Țara Dogon.", en: "Part of the spectacular Bandiagara Escarpment that overlooks Dogon Country." },
    facts: {
      de: ["Bandiagara-Steilhang", "Weltkulturerbe"],
      hu: ["Bandiagara-sziklafal", "Világörökség"],
      ro: ["Versantul Bandiagara", "Patrimoniu Mondial"],
      en: ["Bandiagara Escarpment", "World Heritage site"]
    }, image: "/poi-images/mount-dogon-nature-v2.webp"},
  {
    id: "kourou-river-nature-v2",
    type: "river",
    parent: "ML-SK",
    coords: [-6.2, 11.0],
    name: { de: "Kourou", hu: "Kourou", ro: "Kourou", en: "Kourou" },
    description: { de: "Ein Fluss im Süden von Mali, der bewässerte Gebiete durchfließt.", hu: "Egy folyó Mali déli részén, amely öntözött területeken halad át.", ro: "Un râu în sudul Maliului care traversează zone irigate.", en: "A river in the south of Mali that flows through irrigated areas." },
    facts: {
      de: ["Süd-Mali", "Bewässerung"],
      hu: ["Dél-Mali", "Öntözés"],
      ro: ["Sudul Maliului", "Irigare"],
      en: ["South Mali", "Irrigation"]
    }, image: "/poi-images/kourou-river-nature-v2.webp"},
  {
    id: "lake-aougoundou-nature-v2",
    type: "lake",
    parent: "ML-TB",
    coords: [-4.0, 16.5],
    name: { de: "Lac Aougoundou", hu: "Aougoundou-tó", ro: "Lacul Aougoundou", en: "Lake Aougoundou" },
    description: { de: "Ein saisonales Gewässer in der Nähe von Timbuktu.", hu: "Egy szezonális vízfelület Timbuktu közelében.", ro: "Un bazin acvatic sezonier în apropiere de Timbuktu.", en: "A seasonal body of water near Timbuktu." },
    facts: {
      de: ["Bei Timbuktu", "Saisonal"],
      hu: ["Timbuktu közelében", "Szezonális"],
      ro: ["Lângă Timbuktu", "Sezonier"],
      en: ["Near Timbuktu", "Seasonal"]
    }, image: "/poi-images/lake-aougoundou-nature-v2.webp"},
  {
    id: "mount-bougouni-nature-v2",
    type: "mountain",
    parent: "ML-SK",
    coords: [-7.5, 11.4],
    name: { de: "Mont Bougouni", hu: "Bougouni-hegy", ro: "Muntele Bougouni", en: "Mount Bougouni" },
    description: { de: "Ein Relief im Gebiet Bougouni, bekannt für sanfte Erhebungen.", hu: "Egy domborzati forma Bougouni területén, amely szelíd emelkedőiről ismert.", ro: "Un relief în zona Bougouni, cunoscut pentru elevațiile blânde.", en: "A relief in the Bougouni area, known for gentle elevations." },
    facts: {
      de: ["Bougouni", "Hügellandschaft"],
      hu: ["Bougouni", "Dombság"],
      ro: ["Bougouni", "Peisaj deluros"],
      en: ["Bougouni", "Hill country"]
    }, image: "/poi-images/mount-bougouni-nature-v2.webp"},
  {
    id: "lake-nianga-nature-v2",
    type: "lake",
    parent: "ML-TB",
    coords: [-3.3, 16.3],
    name: { de: "Lac Nianga", hu: "Nianga-tó", ro: "Lacul Nianga", en: "Lake Nianga" },
    description: { de: "Ein kleinerer See im Norden, oft von Nomaden genutzt.", hu: "Egy kisebb tó északon, amelyet gyakran használnak nomádok.", ro: "Un mic lac în nord, adesea folosit de nomazi.", en: "A smaller lake in the north, often used by nomads." },
    facts: {
      de: ["Norden Malis", "Nomaden-Ressource"],
      hu: ["Észak-Mali", "Nomád erőforrás"],
      ro: ["Nordul Maliului", "Resursă nomadă"],
      en: ["Northern Mali", "Nomadic resource"]
    }, image: "/poi-images/lake-nianga-nature-v2.webp"},
  {
    id: "mount-sikasso-nature-v2",
    type: "mountain",
    parent: "ML-SK",
    coords: [-5.7, 11.3],
    name: { de: "Mont Sikasso", hu: "Sikasso-hegy", ro: "Muntele Sikasso", en: "Mount Sikasso" },
    description: { de: "Ein markanter Punkt in der hügeligen Sikasso-Region.", hu: "Egy jellegzetes pont a dombos Sikasso régióban.", ro: "Un punct distinctiv în regiunea deluroasă Sikasso.", en: "A prominent point in the hilly Sikasso region." },
    facts: {
      de: ["Region Sikasso", "Hügelig"],
      hu: ["Sikasso régió", "Dombos"],
      ro: ["Regiunea Sikasso", "Deluros"],
      en: ["Sikasso region", "Hilly"]
    }, image: "/poi-images/mount-sikasso-nature-v2.webp"},
  {
    id: "bafing-makana-river-nature-v2",
    type: "river",
    parent: "ML-KK",
    coords: [-10.5, 12.0],
    name: { de: "Bafing-Makana", hu: "Bafing-Makana", ro: "Bafing-Makana", en: "Bafing-Makana" },
    description: { de: "Ein bedeutender Nebenlauf des Bafing im südwestlichen Mali.", hu: "A Bafing folyó jelentős mellékága Mali délnyugati részén.", ro: "Un afluent important al râului Bafing în sud-vestul Maliului.", en: "An important tributary of the Bafing River in southwestern Mali." },
    facts: {
      de: ["Südwest-Mali", "Flusssystem"],
      hu: ["Délnyugat-Mali", "Folyórendszer"],
      ro: ["Sud-vestul Maliului", "Sistem hidrografic"],
      en: ["Southwest Mali", "River system"]
    }
  }
];

