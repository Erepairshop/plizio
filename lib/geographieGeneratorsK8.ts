import { createMCQ, createTyping, mulberry32, type GeographieQuestion } from "./geographieCurriculumShared";

const q = (hu: string, en: string, de: string, ro: string, lang: string) => {
  if (lang === "hu") return hu;
  if (lang === "de") return de;
  if (lang === "ro") return ro;
  return en;
};

const makeMCQs = (subtopic: string, lang: string, rng: any, data: any[]) =>
  data.map(d => createMCQ("geographie", subtopic, q(d.q[0], d.q[1], d.q[2], d.q[3], lang), q(d.c[0], d.c[1], d.c[2], d.c[3], lang), [q(d.w1[0], d.w1[1], d.w1[2], d.w1[3], lang), q(d.w2[0], d.w2[1], d.w2[2], d.w2[3], lang), q(d.w3[0], d.w3[1], d.w3[2], d.w3[3], lang)], rng));

const makeTyping = (subtopic: string, lang: string, data: any[]) =>
  data.map(d => createTyping("geographie", subtopic, q(d.q[0], d.q[1], d.q[2], d.q[3], lang), [q(d.a[0], d.a[1], d.a[2], d.a[3], lang)]));

// ─── DATA SOURCES K8 ────────────────────────────────────────────────────────

const DATA_K8: any = {
  weathering_erosion: {
    mcq: [
      { q: ["Mi a fizikai mállás fő oka?", "What is the main cause of physical weathering?", "Was ist die Hauptursache für physikalische Verwitterung?", "Care este cauza principală a dezagregării fizice?"], c: ["Hőmérséklet-ingadozás", "Temperature fluctuations", "Temperaturschwankungen", "Fluctuațiile de temperatură"], w1: ["Savas eső", "Acid rain", "Saurer Regen", "Ploaia acidă"], w2: ["Baktériumok", "Bacteria", "Bakterien", "Bacteriile"], w3: ["Oxidáció", "Oxidation", "Oxidation", "Oxidarea"] },
      { q: ["Melyik folyamat során változik meg a kőzet kémiai összetétele?", "In which process does the chemical composition of the rock change?", "Bei welchem Prozess ändert sich die chemische Zusammensetzung des Gesteins?", "În ce proces se schimbă compoziția chimică a rocii?"], c: ["Kémiai mállás", "Chemical weathering", "Chemische Verwitterung", "Alterarea chimică"], w1: ["Fizikai mállás", "Physical weathering", "Physikalische Verwitterung", "Dezagregarea fizică"], w2: ["Abrázió", "Abrasion", "Abrasion", "Abraziunea"], w3: ["Defláció", "Deflation", "Deflation", "Deflația"] },
      { q: ["Mi a biológiai mállás egyik példája?", "What is an example of biological weathering?", "Was ist ein Beispiel für biologische Verwitterung?", "Care este un exemplu de alterare biologică?"], c: ["Növényi gyökerek feszítőereje", "Expansion force of plant roots", "Sprengkraft von Pflanzenwurzeln", "Forța de expansiune a rădăcinilor plantelor"], w1: ["Fagyrepesztés", "Frost wedging", "Frostsprengung", "Îngheț-dezgheț"], w2: ["Szélvihar", "Windstorm", "Windsturm", "Furtuna de vânt"], w3: ["Napsugárzás", "Solar radiation", "Sonneneinstrahlung", "Radiația solară"] },
      { q: ["Hogy hívjuk a szél koptató munkáját?", "What is the abrasive work of the wind called?", "Wie nennt man die abschleifende Wirkung des Windes?", "Cum se numește acțiunea abrazivă a vântului?"], c: ["Korrázió", "Corrasion", "Korrasion", "Coraziune"], w1: ["Erózió", "Erosion", "Erosion", "Eroziune"], w2: ["Akkumuláció", "Accumulation", "Akkumulation", "Acumulare"], w3: ["Szedimentáció", "Sedimentation", "Sedimentation", "Sedimentare"] },
      { q: ["Melyik éghajlaton a leggyorsabb a kémiai mállás?", "In which climate is chemical weathering fastest?", "In welchem Klima ist die chemische Verwitterung am schnellsten?", "În ce climat este cea mai rapidă alterarea chimică?"], c: ["Forró és nedves", "Hot and humid", "Heiß und feucht", "Cald și umed"], w1: ["Hideg és száraz", "Cold and dry", "Kalt und trocken", "Rece și uscat"], w2: ["Mérsékelt", "Temperate", "Gemäßigt", "Temperat"], w3: ["Sarki", "Polar", "Polar", "Polar"] },
      { q: ["Mi okozza a fagyrepesztést?", "What causes frost wedging?", "Was verursacht Frostsprengung?", "Ce cauzează îngheț-dezghețul rocilor?"], c: ["A víz megfagyáskori tágulása", "Expansion of water when freezing", "Ausdehnung von Wasser beim Gefrieren", "Expansiunea apei la îngheț"], w1: ["A jég súlya", "Weight of ice", "Gewicht von Eis", "Greutatea gheții"], w2: ["A szél ereje", "Wind power", "Windkraft", "Puterea vântului"], w3: ["A sókristályok növekedése", "Growth of salt crystals", "Wachstum von Salzkristallen", "Creșterea cristalelor de sare"] },
      { q: ["Mi a defláció?", "What is deflation?", "Was ist Deflation?", "Ce este deflația?"], c: ["A szél kifúvó munkája", "The wind's blowing action", "Ausblasung durch Wind", "Acțiunea de spulberare a vântului"], w1: ["A folyó hordalékszállítása", "River sediment transport", "Sedimenttransport durch Flüsse", "Transportul de sedimente al râului"], w2: ["A tenger hullámzása", "Sea waves", "Meereswellen", "Valurile mării"], w3: ["A jég csiszolása", "Ice grinding", "Gletscherschliff", "Slefuirea gheții"] },
      { q: ["Mi a karsztosodás?", "What is karstification?", "Was ist Verkarstung?", "Ce este carstificarea?"], c: ["Mészkő oldódása szénsavas vízben", "Dissolution of limestone in carbonated water", "Lösung von Kalkstein in kohlensäurehaltigem Wasser", "Dizolvarea calcarului în apă carbonatată"], w1: ["Homokkő mállása", "Weathering of sandstone", "Verwitterung von Sandstein", "Alterarea gresiei"], w2: ["Vulkáni tevékenység", "Volcanic activity", "Vulkanische Aktivität", "Activitate vulcanică"], w3: ["Folyóvízi építés", "Fluvial construction", "Flussablagerung", "Depunerea fluvială"] },
      { q: ["Hogy nevezzük a mállott kőzetet?", "What do we call weathered rock debris?", "Wie nennt man verwittertes Gesteinsmaterial?", "Cum se numește materialul de rocă alterată?"], c: ["Törmelék", "Debris", "Schutt", "Detritus"], w1: ["Magma", "Magma", "Magma", "Magmă"], w2: ["Érc", "Ore", "Erz", "Minereu"], w3: ["Kristály", "Crystal", "Kristall", "Cristal"] },
      { q: ["Melyik folyamat koptatja a folyómedret?", "Which process abrades the riverbed?", "Welcher Prozess schleift das Flussbett ab?", "Care proces abradează albia râului?"], c: ["Erózió", "Erosion", "Erosion", "Eroziune"], w1: ["Akkumuláció", "Accumulation", "Akkumulation", "Acumulare"], w2: ["Kondenzáció", "Condensation", "Kondensation", "Condensare"], w3: ["Evaporáció", "Evaporation", "Evapotranspiration", "Evaporare"] },
      { q: ["Mit jelent az oxidáció a mállásban?", "What does oxidation mean in weathering?", "Was bedeutet Oxidation bei der Verwitterung?", "Ce înseamnă oxidarea în procesul de alterare?"], c: ["Ásványok reakciója oxigénnel", "Reaction of minerals with oxygen", "Reaktion von Mineralien mit Sauerstoff", "Reacția mineralelor cu oxigenul"], w1: ["Víz elpárolgása", "Water evaporation", "Verdunstung von Wasser", "Evaporarea apei"], w2: ["Kőzetek olvadása", "Melting of rocks", "Schmelzen von Gesteinen", "Topirea rocilor"], w3: ["Savak hatása", "Effect of acids", "Wirkung von Säuren", "Efectul acizilor"] },
      { q: ["Melyik erő hajtja a tömegmozgásokat?", "Which force drives mass movements?", "Welche Kraft treibt Massenbewegungen an?", "Ce forță determină mișcările de masă?"], c: ["Gravitáció", "Gravity", "Gravitation", "Gravitația"], w1: ["Szél", "Wind", "Wind", "Vântul"], w2: ["Mágnesesség", "Magnetism", "Magnetismus", "Magnetismul"], w3: ["Dagály", "Tide", "Gezeiten", "Mareea"] },
      { q: ["Mi a mállás és erózió közti fő különbség?", "What is the main difference between weathering and erosion?", "Was ist der Hauptunterschied zwischen Verwitterung und Erosion?", "Care este diferența principală între alterare și eroziune?"], c: ["Az erózió elszállítja az anyagot", "Erosion transports material", "Erosion transportiert Material", "Eroziunea transportă materialul"], w1: ["Nincs különbség", "No difference", "Kein Unterschied", "Nicio diferență"], w2: ["A mállás gyorsabb", "Weathering is faster", "Verwitterung ist schneller", "Alterarea este mai rapidă"], w3: ["Az erózió csak kémiai", "Erosion is only chemical", "Erosion ist nur chemisch", "Eroziunea este doar chimică"] },
      { q: ["Hogy hívják a kőzetek aprózódását?", "What is the fragmentation of rocks called?", "Wie nennt man das Zerfallen von Gesteinen?", "Cum se numește fragmentarea rocilor?"], c: ["Aprózódás", "Disintegration", "Zerstückelung", "Dezagregare"], w1: ["Kristályosodás", "Crystallization", "Kristallisation", "Cristalizare"], w2: ["Kompakció", "Compaction", "Kompaktion", "Compactare"], w3: ["Metamorfózis", "Metamorphosis", "Metamorphose", "Metamorfism"] },
      { q: ["Melyik típusú mállás jellemző a sivatagokra?", "Which type of weathering is typical for deserts?", "Welche Art der Verwitterung ist typisch für Wüsten?", "Ce tip de alterare este tipic pentru deșerturi?"], c: ["Fizikai (hő)", "Physical (heat)", "Physikalisch (Hitze)", "Fizică (căldură)"], w1: ["Biológiai", "Biological", "Biologisch", "Biologică"], w2: ["Kémiai", "Chemical", "Chemisch", "Chimică"], w3: ["Gleccseri", "Glacial", "Glazial", "Glaciară"] },
      { q: ["Mi az abrázió?", "What is abrasion?", "Was ist Abrasion?", "Ce este abraziunea?"], c: ["A hullámverés romboló munkája", "The destructive work of waves", "Zerstörende Wirkung der Brandung", "Acțiunea distructivă a valurilor"], w1: ["Szélvihar", "Windstorm", "Windsturm", "Furtuna de vânt"], w2: ["Esőzés", "Rainfall", "Regenfall", "Precipitații"], w3: ["Növényi növekedés", "Plant growth", "Pflanzenwachstum", "Creșterea plantelor"] },
      { q: ["Melyik kőzet mállik legkönnyebben karsztosodással?", "Which rock weathers most easily by karstification?", "Welches Gestein verwittert am leichtesten durch Verkarstung?", "Care rocă se alterează cel mai ușor prin carstificare?"], c: ["Mészkő", "Limestone", "Kalkstein", "Calcar"], w1: ["Gránit", "Granite", "Granit", "Granit"], w2: ["Bazalt", "Basalt", "Basalt", "Bazalt"], w3: ["Homokkő", "Sandstone", "Sandstein", "Gresie"] },
      { q: ["Hogy nevezzük az elszállított és lerakott anyagot?", "What do we call transported and deposited material?", "Wie nennt man transportiertes und abgelagertes Material?", "Cum se numește materialul transportat și depus?"], c: ["Hordalék", "Sediment", "Sediment", "Sediment"], w1: ["Láva", "Lava", "Lava", "Lavă"], w2: ["Talaj", "Soil", "Boden", "Sol"], w3: ["Kavics", "Gravel", "Kies", "Pietriș"] },
      { q: ["Mi a mállás?", "What is weathering?", "Was ist Verwitterung?", "Ce este alterarea?"], c: ["Kőzetek helyben történő felbomlása", "In-situ breakdown of rocks", "Zerfall von Gesteinen an Ort und Stelle", "Descompunerea rocilor in situ"], w1: ["Kőzetek szállítása", "Transport of rocks", "Transport von Gesteinen", "Transportul rocilor"], w2: ["Hegyek emelkedése", "Rising of mountains", "Hebung von Bergen", "Ridicarea munților"], w3: ["Földrengés", "Earthquake", "Erdbeben", "Cutremur"] },
      { q: ["Melyik gáz játszik szerepet a kémiai mállásban?", "Which gas plays a role in chemical weathering?", "Welches Gas spielt eine Rolle bei der chemischen Verwitterung?", "Ce gaz joacă un rol în alterarea chimică?"], c: ["Szén-dioxid", "Carbon dioxide", "Kohlendioxid", "Dioxid de carbon"], w1: ["Hélium", "Helium", "Helium", "Heliu"], w2: ["Nitrogén", "Nitrogen", "Stickstoff", "Azot"], w3: ["Argon", "Argon", "Argon", "Argon"] }
    ],
    typing: [
      { q: ["Mi a kőzetek helyben történő felbomlása?", "What is the in-situ breakdown of rocks?", "Was ist der Zerfall von Gesteinen vor Ort?", "Ce este descompunerea rocilor pe loc?"], a: ["Mállás", "Weathering", "Verwitterung", "Alterare"] },
      { q: ["Melyik folyamat szállítja el a hordalékot?", "Which process transports the sediment?", "Welcher Prozess transportiert das Sediment?", "Care proces transportă sedimentul?"], a: ["Erózió", "Erosion", "Erosion", "Eroziune"] },
      { q: ["Mi a szél kifúvó munkája?", "What is the wind's blowing action?", "Wie heißt die Ausblasung durch Wind?", "Cum se numește spulberarea de către vânt?"], a: ["Defláció", "Deflation", "Deflation", "Deflație"] },
      { q: ["Milyen mállás a fagyrepesztés?", "What kind of weathering is frost wedging?", "Welche Art der Verwitterung ist Frostsprengung?", "Ce fel de alterare este îngheț-dezghețul?"], a: ["Fizikai", "Physical", "Physikalisch", "Fizică"] },
      { q: ["Mi a mészkő oldódásának folyamata?", "What is the process of limestone dissolution?", "Wie nennt man die Lösung von Kalkstein?", "Cum se numește procesul de dizolvare a calcarului?"], a: ["Karsztosodás", "Karstification", "Verkarstung", "Carstificare"] },
      { q: ["Mi mozgatja a lejtős tömegmozgásokat?", "What moves slope mass movements?", "Was treibt Massenbewegungen an Hängen an?", "Ce determină mișcările de masă pe versanți?"], a: ["Gravitáció", "Gravity", "Gravitation", "Gravitația"] },
      { q: ["Mi a tengerpart rombolásának neve?", "What is the name for coastal destruction?", "Wie nennt man die Küstenzerstörung?", "Cum se numește distrugerea țărmului?"], a: ["Abrázió", "Abrasion", "Abrasion", "Abraziune"] },
      { q: ["Mi a szél koptató munkája?", "What is the wind's abrasive work?", "Wie heißt die schleifende Wirkung des Windes?", "Cum se numește abraziunea eoliană?"], a: ["Korrázió", "Corrasion", "Korrasion", "Coraziune"] },
      { q: ["Melyik mállás igényel vizet?", "Which weathering requires water?", "Welche Verwitterung benötigt Wasser?", "Ce tip de alterare necesită apă?"], a: ["Kémiai", "Chemical", "Chemische", "Chimică"] },
      { q: ["Mi a kőzetet takaró málladékréteg?", "What is the layer of weathered rock?", "Wie nennt man die Schicht aus verwittertem Gestein?", "Cum se numește stratul de rocă alterată?"], a: ["Regolit", "Regolith", "Regolith", "Regolit"] }
    ]
  },
  fluvial_landforms: {
    mcq: [
      { q: ["Hogy hívjuk a folyó kanyarulatait?", "What are the curves of a river called?", "Wie nennt man die Flusswindungen?", "Cum se numesc curbele unui râu?"], c: ["Meander", "Meanders", "Meander", "Meandre"], w1: ["Delta", "Delta", "Delta", "Deltă"], w2: ["Völgy", "Valley", "Tal", "Vale"], w3: ["Kanyon", "Canyon", "Canyon", "Canyon"] },
      { q: ["Mi a V-alakú völgy fő okozója?", "What is the main cause of a V-shaped valley?", "Was ist die Hauptursache für ein V-Tal?", "Care este cauza principală a unei văi în formă de V?"], c: ["Bevágódó erózió", "Downcutting erosion", "Tiefenerosion", "Eroziune de adâncime"], w1: ["Szél", "Wind", "Wind", "Vânt"], w2: ["Gleccser", "Glacier", "Gletscher", "Ghețar"], w3: ["Oldalirányú erózió", "Lateral erosion", "Seitenerosion", "Eroziune laterală"] },
      { q: ["Melyik torkolattípusra jellemző a hordaléklerakás?", "Which estuary type is characterized by sediment deposition?", "Welcher Mündungstyp ist durch Sedimentablagerung gekennzeichnet?", "Care tip de gură de vărsare este caracterizat prin depunerea sedimentelor?"], c: ["Delta", "Delta", "Delta", "Deltă"], w1: ["Tölcsértorkolat", "Estuary", "Ästuar", "Estuar"], w2: ["Fjord", "Fjord", "Fjord", "Fjord"], w3: ["Lagúna", "Lagoon", "Lagune", "Lagună"] },
      { q: ["Hogy hívják a leválasztott folyókanyarulatot?", "What is a detached river bend called?", "Wie nennt man eine abgeschnürte Flusswindung?", "Cum se numește un cot de râu abandonat?"], c: ["Morotvató", "Oxbow lake", "Altwasser", "Braț părăsit"], w1: ["Lagúna", "Lagoon", "Lagune", "Lagună"], w2: ["Tengerszem", "Tarn", "Karsee", "Iezer"], w3: ["Gázló", "Ford", "Furt", "Vad"] },
      { q: ["Hol rakja le a folyó a legtöbb hordalékot?", "Where does the river deposit most sediment?", "Wo lagert der Fluss die meisten Sedimente ab?", "Unde depune râul cele mai multe sedimente?"], c: ["Alsószakasz", "Lower course", "Unterlauf", "Curs inferior"], w1: ["Felsőszakasz", "Upper course", "Oberlauf", "Curs superior"], w2: ["Középszakasz", "Middle course", "Mittellauf", "Curs mijlociu"], w3: ["Forrás", "Source", "Quelle", "Izvor"] },
      { q: ["Mi a folyóterasz?", "What is a river terrace?", "Was ist eine Flussterrasse?", "Ce este o terasă fluvială?"], c: ["Egykori ártér maradványa", "Remnant of a former floodplain", "Überrest einer ehemaligen Aue", "Rămășița unei foste lunci"], w1: ["Híd", "Bridge", "Brücke", "Pod"], w2: ["Gát", "Dam", "Damm", "Baraj"], w3: ["Sziget", "Island", "Insel", "Insulă"] },
      { q: ["Mi a hordalékkúp?", "What is an alluvial fan?", "Was ist ein Schwemmfegel?", "Ce este un con de dejecție?"], c: ["Hegylábi lerakódás", "Piedmont deposit", "Ablagerung am Gebirgsfuß", "Depozit la baza muntelui"], w1: ["Víz alatti barlang", "Underwater cave", "Unterwasserhöhle", "Peșteră subacvatică"], w2: ["Folyó kanyarulata", "River bend", "Flusswindung", "Cot de râu"], w3: ["Mocsár", "Swamp", "Sumpf", "Mlaștină"] },
      { q: ["Melyik szakaszra jellemző az oldalirányú erózió?", "Which course is characterized by lateral erosion?", "Welcher Lauf ist durch Seitenerosion gekennzeichnet?", "Care curs este caracterizat prin eroziune laterală?"], c: ["Középszakasz", "Middle course", "Mittellauf", "Curs mijlociu"], w1: ["Felsőszakasz", "Upper course", "Oberlauf", "Curs superior"], w2: ["Forrásvidék", "Source area", "Quellgebiet", "Zonă de izvor"], w3: ["Delta", "Delta", "Delta", "Deltă"] },
      { q: ["Mi a tölcsértorkolat?", "What is an estuary?", "Was ist ein Ästuar?", "Ce este un estuar?"], c: ["Tölcsér alakú, kimélyített torkolat", "Funnel-shaped, deepened mouth", "Trichtermündung", "Gură de vărsare în formă de pâlnie"], w1: ["Sokágú torkolat", "Multi-branched mouth", "Vielarmige Mündung", "Gură de vărsare cu mai multe brațe"], w2: ["Zárt öböl", "Closed bay", "Geschlossene Bucht", "Golf închis"], w3: ["Kiszáradt meder", "Dry bed", "Trockenes Bett", "Albie secată"] },
      { q: ["Mi a vízesés?", "What is a waterfall?", "Was ist ein Wasserfall?", "Ce este o cascadă?"], c: ["Vízszint hirtelen esése", "Sudden drop in water level", "Plötzlicher Abfall des Wasserspiegels", "Cădere bruscă a nivelului apei"], w1: ["Lassú folyás", "Slow flow", "Langsamer Fluss", "Curs lent"], w2: ["Víz alatti áramlat", "Underwater current", "Unterwasserströmung", "Curent subacvatic"], w3: ["Mellékfolyó", "Tributary", "Nebenfluss", "Afluent"] },
      { q: ["Mi a hordalék?", "What is sediment?", "Was ist Geschiebe?", "Ce sunt aluviunile?"], c: ["Folyó által szállított anyag", "Material transported by the river", "Vom Fluss transportiertes Material", "Material transportat de râu"], w1: ["Tiszta víz", "Pure water", "Reines Wasser", "Apă pură"], w2: ["Folyami halak", "River fish", "Flussfische", "Pești de râu"], w3: ["Parti növényzet", "Riparian vegetation", "Ufervegetation", "Vegetație riverană"] },
      { q: ["Mi az ártér?", "What is a floodplain?", "Was ist eine Aue?", "Ce este lunca?"], c: ["Áradások által elöntött terület", "Area flooded by overflows", "Vom Hochwasser überflutetes Gebiet", "Zonă inundată de revărsări"], w1: ["A völgy legmagasabb pontja", "Highest point of the valley", "Höchster Punkt des Tales", "Cel mai înalt punct al văii"], w2: ["Kiszáradt tómeder", "Dry lake bed", "Trockener Seeboden", "Fundul unui lac secat"], w3: ["Sziklás part", "Rocky shore", "Felsiges Ufer", "Țărm stâncos"] },
      { q: ["Hogy hívjuk a folyó kezdőpontját?", "What is the starting point of a river called?", "Wie nennt man den Anfang eines Flusses?", "Cum se numește punctul de plecare al unui râu?"], c: ["Forrás", "Source", "Quelle", "Izvor"], w1: ["Torkolat", "Mouth", "Mündung", "Gură de vărsare"], w2: ["Meder", "Bed", "Bett", "Albie"], w3: ["Ág", "Branch", "Arm", "Braț"] },
      { q: ["Mi a vízgyűjtő terület?", "What is a drainage basin?", "Was ist ein Einzugsgebiet?", "Ce este un bazin hidrografic?"], c: ["Ahonnan a víz a folyóba jut", "Where water drains into the river", "Gebiet, aus dem das Wasser in den Fluss fließt", "Zona din care apa se scurge în râu"], w1: ["A folyó hossza", "The length of the river", "Die Länge des Flusses", "Lungimea râului"], w2: ["Víz alatti barlang", "Underwater cave", "Unterwasserhöhle", "Peșteră subacvatică"], w3: ["Vízszintmérő", "Water level gauge", "Pegel", "Mira hidrometrică"] },
      { q: ["Mi a vízválasztó?", "What is a drainage divide?", "Was ist eine Wasserscheide?", "Ce este o cumpănă de ape?"], c: ["Vízgyűjtőket elválasztó határvonal", "Boundary line between basins", "Grenzlinie zwischen Einzugsgebieten", "Linia de demarcație între bazine"], w1: ["Folyóág", "River branch", "Flussarm", "Braț de râu"], w2: ["Gát", "Dam", "Damm", "Baraj"], w3: ["Örvény", "Whirlpool", "Wirbel", "Vârtej"] },
      { q: ["Mi az üst?", "What is a plunge pool?", "Was ist ein Kolk?", "Ce este o marmită?"], c: ["Vízesés alatti mélyedés", "Depression below a waterfall", "Vertiefung unter einem Wasserfall", "Depresiune sub o cascadă"], w1: ["Folyó kanyarulata", "River bend", "Flusswindung", "Cot de râu"], w2: ["Sziget", "Island", "Insel", "Insulă"], w3: ["Homokpad", "Sandbar", "Sandbank", "Banc de nisip"] },
      { q: ["Melyik folyó épített hatalmas deltát?", "Which river built a huge delta?", "Welcher Fluss bildete ein riesiges Delta?", "Care râu a construit o deltă uriașă?"], c: ["Nílus", "Nile", "Nil", "Nil"], w1: ["Amazonas", "Amazon", "Amazonas", "Amazon"], w2: ["Rajna", "Rhine", "Rhein", "Rin"], w3: ["Temze", "Thames", "Themse", "Tamisa"] },
      { q: ["Melyik folyóra jellemző a tölcsértorkolat?", "Which river is characterized by an estuary?", "Welcher Fluss ist durch ein Ästuar gekennzeichnet?", "Care râu este caracterizat printr-un estuar?"], c: ["Szent Lőrinc-folyó", "St. Lawrence River", "Sankt-Lorenz-Strom", "Sfântul Laurențiu"], w1: ["Duna", "Danube", "Donau", "Dunărea"], w2: ["Mississippi", "Mississippi", "Mississippi", "Mississippi"], w3: ["Volga", "Volga", "Wolga", "Volga"] },
      { q: ["Mi a folyómeder?", "What is a riverbed?", "Was ist ein Flussbett?", "Ce este albia râului?"], c: ["A folyóvíz állandó útja", "The permanent path of river water", "Der ständige Weg des Flusswassers", "Calea permanentă a apei râului"], w1: ["A folyó partja", "The river bank", "Das Flussufer", "Malul râului"], w2: ["A folyó torkolata", "The river mouth", "Die Flussmündung", "Gura râului"], w3: ["A folyó forrása", "The river source", "Die Flussquelle", "Izvorul râului"] },
      { q: ["Melyik folyamat mélyíti a kanyont?", "Which process deepens the canyon?", "Welcher Prozess vertieft den Canyon?", "Ce proces adâncește canionul?"], c: ["Bevágódó erózió", "Downcutting erosion", "Tiefenerosion", "Eroziune de adâncime"], w1: ["Szél", "Wind", "Wind", "Vânt"], w2: ["Szedimentáció", "Sedimentation", "Sedimentation", "Sedimentare"], w3: ["Párolgás", "Evaporation", "Verdunstung", "Evaporare"] }
    ],
    typing: [
      { q: ["Hogy hívjuk a folyó kanyarulatait?", "What are river curves called?", "Wie nennt man Flusswindungen?", "Cum se numesc curbele râului?"], a: ["Meander", "Meanders", "Meander", "Meandre"] },
      { q: ["Melyik torkolat ágazik szét?", "Which mouth branches out?", "Welche Mündung verzweigt sich?", "Care gură de vărsare se ramifică?"], a: ["Delta", "Delta", "Delta", "Deltă"] },
      { q: ["Melyik torkolat tölcsér alakú?", "Which mouth is funnel-shaped?", "Welche Mündung ist trichterförmig?", "Care gură de vărsare are formă de pâlnie?"], a: ["Estuár", "Estuary", "Ästuar", "Estuar"] },
      { q: ["Mi a folyó kezdőpontja?", "What is the starting point of a river?", "Was ist der Anfang eines Flusses?", "Care este punctul de început al unui râu?"], a: ["Forrás", "Source", "Quelle", "Izvor"] },
      { q: ["Mi a folyó végpontja?", "What is the end point of a river?", "Was ist das Ende eines Flusses?", "Care este punctul final al unui râu?"], a: ["Torkolat", "Mouth", "Mündung", "Gură de vărsare"] },
      { q: ["Hogy hívjuk a levágott kanyarulatot?", "What is a cut-off meander called?", "Wie nennt man ein Altwasser?", "Cum se numește un braț părăsit?"], a: ["Morotva", "Oxbow", "Altwasser", "Morotvă"] },
      { q: ["Mi a folyó által szállított kőzet?", "What is the rock transported by the river?", "Was ist das vom Fluss transportierte Gestein?", "Care este roca transportată de râu?"], a: ["Hordalék", "Sediment", "Geschiebe", "Aluviune"] },
      { q: ["Mi a hegyvidéki völgy alakja?", "What is the shape of a mountain valley?", "Welche Form hat ein Gebirgstal?", "Ce formă are o vale montană?"], a: ["V-alak", "V-shape", "V-Form", "Formă de V"] },
      { q: ["Melyik folyamat mélyíti a medret?", "Which process deepens the bed?", "Welcher Prozess vertieft das Bett?", "Ce proces adâncește albia?"], a: ["Erózió", "Erosion", "Erosion", "Eroziune"] },
      { q: ["Mi az áradások által lerakott terület?", "What is the area deposited by floods?", "Wie nennt man das Schwemmland?", "Cum se numește zona de depunere a inundațiilor?"], a: ["Ártér", "Floodplain", "Aue", "Luncă"] }
    ]
  },
  glacial_landforms: {
    mcq: [
      { q: ["Milyen alakú völgyet váj a gleccser?", "What shape valley does a glacier carve?", "Welche Talform schnitzt ein Gletscher?", "Ce formă de vale sapă un ghețar?"], c: ["U-alakú", "U-shaped", "U-Form", "În formă de U"], w1: ["V-alakú", "V-shaped", "V-Form", "În formă de V"], w2: ["W-alakú", "W-shaped", "W-Form", "În formă de W"], w3: ["Lapos", "Flat", "Flach", "Plată"] },
      { q: ["Mi a moréna?", "What is a moraine?", "Was ist eine Moräne?", "Ce este o morenă?"], c: ["Gleccser által szállított törmelék", "Debris transported by a glacier", "Vom Gletscher transportierter Schutt", "Detritus transportat de ghețar"], w1: ["Folyami homok", "River sand", "Flusssand", "Nisip fluvial"], w2: ["Vulkáni hamu", "Volcanic ash", "Vulkanische Asche", "Cenușă vulcanică"], w3: ["Sivatagi dűne", "Desert dune", "Wüstendüne", "Dună de deșert"] },
      { q: ["Mi a fjord?", "What is a fjord?", "Was ist ein Fjord?", "Ce este un fjord?"], c: ["Tengerrel elöntött gleccservölgy", "Glacial valley flooded by the sea", "Vom Meer überflutetes Glazialtal", "Vale glaciară inundată de mare"], w1: ["Folyó torkolata", "River mouth", "Flussmündung", "Gura râului"], w2: ["Korallzátony", "Coral reef", "Korallenriff", "Recif de corali"], w3: ["Vulkáni kráter", "Volcanic crater", "Vulkankrater", "Crater vulcanic"] },
      { q: ["Hogy hívjuk a gleccser jégrepedéseit?", "What are glacier ice cracks called?", "Wie nennt man die Gletscherspalten?", "Cum se numesc crăpăturile ghețarului?"], c: ["Gleccserhasadék", "Crevasses", "Gletscherspalten", "Crevase"], w1: ["Kanyon", "Canyons", "Canyons", "Canoane"], w2: ["Barlang", "Caves", "Höhlen", "Peșteri"], w3: ["Kráter", "Craters", "Krater", "Cratere"] },
      { q: ["Mi a tengerszem?", "What is a tarn?", "Was ist ein Karsee?", "Ce este un iezer?"], c: ["Gleccservájta tó", "Glacier-carved lake", "Vom Gletscher ausgehobeltes Seebecken", "Lac sapat de ghețar"], w1: ["Sós sivatagi tó", "Salt desert lake", "Salzsee", "Lac sărat"], w2: ["Krátertó", "Crater lake", "Kratersee", "Lac vulcanic"], w3: ["Mesterséges tó", "Artificial lake", "Stausee", "Lac de acumulare"] },
      { q: ["Mi a belföldi jégtakaró?", "What is an ice sheet?", "Was ist ein Inlandeis?", "Ce este o calotă glaciară?"], c: ["Kontinenst beborító jég", "Ice covering a continent", "Eis, das einen Kontinent bedeckt", "Gheață care acoperă un continent"], w1: ["Hegycsúcs jegesedése", "Glaciation of a peak", "Vergletscherung eines Gipfels", "Ghețar montan"], w2: ["Fagyott tó", "Frozen lake", "Gefrorener See", "Lac înghețat"], w3: ["Úszó jégtábla", "Floating ice floe", "Eisscholle", "Banchiză"] },
      { q: ["Hol található ma a legnagyobb jégtakaró?", "Where is the largest ice sheet today?", "Wo befindet sich heute das größte Inlandeis?", "Unde se află astăzi cea mai mare calotă glaciară?"], c: ["Antarktisz", "Antarctica", "Antarktis", "Antarctica"], w1: ["Grönland", "Greenland", "Grönland", "Groenlanda"], w2: ["Alpok", "Alps", "Alpen", "Alpi"], w3: ["Himalája", "Himalayas", "Himalaya", "Himalaya"] },
      { q: ["Mi a gleccser?", "What is a glacier?", "Was ist ein Gletscher?", "Ce este un ghețar?"], c: ["Lassan mozgó jégtömeg", "Slowly moving ice mass", "Langsam fließende Eismasse", "Masă de gheață în mișcare lentă"], w1: ["Folyékony víz", "Liquid water", "Flüssiges Wasser", "Apă lichidă"], w2: ["Hóvihar", "Snowstorm", "Schneesturm", "Viscol"], w3: ["Jéghegy", "Iceberg", "Eisberg", "Iceberg"] },
      { q: ["Hogy hívják a gleccser gyűjtőmedencéjét?", "What is the glacier's accumulation basin called?", "Wie nennt man das Sammelbecken des Gletschers?", "Cum se numește bazinul de acumulare al ghețarului?"], c: ["Firnmező", "Cirque", "Kar", "Circ glaciar"], w1: ["Völgy", "Valley", "Tal", "Vale"], w2: ["Delta", "Delta", "Delta", "Deltă"], w3: ["Dűne", "Dune", "Düne", "Dună"] },
      { q: ["Mi a vándorkő?", "What is an erratic block?", "Was ist ein Findling?", "Ce este un bloc erratic?"], c: ["Jég által messzire vitt szikla", "Rock carried far by ice", "Vom Eis weit transportierter Felsblock", "Rocă transportată departe de gheață"], w1: ["Vulkáni bomba", "Volcanic bomb", "Vulkanische Bombe", "Bombă vulcanică"], w2: ["Meteorit", "Meteorite", "Meteorit", "Meteorit"], w3: ["Folyami kavics", "River pebble", "Flusskies", "Prundis fluvial"] },
      { q: ["Melyik hegységben vannak ma gleccserek?", "In which mountains are there glaciers today?", "In welchem Gebirge gibt es heute Gletscher?", "În ce munți există ghețari astăzi?"], c: ["Alpok", "Alps", "Alpen", "Alpi"], w1: ["Mátra", "Mátra", "Mátra", "Mátra"], w2: ["Urál", "Urals", "Ural", "Ural"], w3: ["Appenninek", "Apennines", "Apenninen", "Apenini"] },
      { q: ["Mi történik a gleccser végénél?", "What happens at the end of the glacier?", "Was passiert am Ende des Gletschers?", "Ce se întâmplă la capătul ghețarului?"], c: ["Olvadás és hordaléklerakás", "Melting and sediment deposition", "Abschmelzen und Sedimentablagerung", "Topire și depunere de sedimente"], w1: ["Megfagyás", "Freezing", "Gefrieren", "Înghețare"], w2: ["Párolgás", "Evaporation", "Verdunstung", "Evaporare"], w3: ["Vulkánkitörés", "Volcanic eruption", "Vulkanausbruch", "Erupție vulcanică"] },
      { q: ["Mi a drumlin?", "What is a drumlin?", "Was ist ein Drumlin?", "Ce este un drumlin?"], c: ["Csepp alakú morénahalom", "Teardrop-shaped moraine hill", "Tropfenförmiger Moränenhügel", "Deal de morenă în formă de picătură"], w1: ["Mély árok", "Deep trench", "Tiefer Graben", "Șanț adânc"], w2: ["Sziklás part", "Rocky coast", "Felsküste", "Coastă stâncoasă"], w3: ["Homokdűne", "Sand dune", "Sanddüne", "Dună de nisip"] },
      { q: ["Mi az óz?", "What is an esker?", "Was ist ein Os?", "Ce este un esker?"], c: ["Gleccserpatak hordalékgerince", "Sediment ridge of a glacial stream", "Wallrücken eines Gletscherbachs", "Creastă de sedimente a unui râu glaciar"], w1: ["Jégbarlang", "Ice cave", "Eishöhle", "Peșteră de gheață"], w2: ["Magas hegycsúcs", "High peak", "Hoher Gipfel", "Vârf ínalt"], w3: ["Mély völgy", "Deep valley", "Tiefes Tal", "Vale adâncă"] },
      { q: ["Mi a jéghegy?", "What is an iceberg?", "Was ist ein Eisberg?", "Ce este un iceberg?"], c: ["Tengerbe szakadt jégtömeg", "Ice mass broken off into the sea", "Ins Meer abgebrochene Eismasse", "Masă de gheață desprinsă în mare"], w1: ["Fagyott hullám", "Frozen wave", "Gefrorene Welle", "Val înghețat"], w2: ["Hegycsúcs jéggel", "Mountain peak with ice", "Berggipfel mit Eis", "Vârf muntos cu gheață"], w3: ["Úszó sziget", "Floating island", "Schwimmende Insel", "Insulă plutitoare"] },
      { q: ["Mi a tőzegmoha?", "What is peat moss?", "Was ist Torfmoos?", "Ce este mușchiul de turbă?"], c: ["Lápos területek növénye", "Plant of marshy areas", "Pflanze mooriges Gebiete", "Plantă a zonelor mlăștinoase"], w1: ["Sivatagi fű", "Desert grass", "Wüstengras", "Iarbă de deșert"], w2: ["Tengeri alga", "Seaweed", "Meeresalge", "Algă marină"], w3: ["Erdei gomba", "Forest mushroom", "Waldpilz", "Ciupercă de pădure"] },
      { q: ["Mi a gleccserkapu?", "What is a glacier snout?", "Was ist ein Gletschertor?", "Ce este poarta ghețarului?"], c: ["Ahol a gleccserpatak kilép", "Where the glacial stream emerges", "Stelle, an der der Gletscherbach austritt", "Locul unde iese râul glaciar"], w1: ["A gleccser teteje", "Top of the glacier", "Spitze des Gletschers", "Vârful ghețarului"], w2: ["Jéghegy közepe", "Middle of an iceberg", "Mitte eines Eisbergs", "Mijlocul unui iceberg"], w3: ["Moréna vége", "End of a moraine", "Ende einer Moräne", "Capătul morenei"] },
      { q: ["Mi a kár?", "What is a cirque?", "Was ist ein Kar?", "Ce este un circ glaciar?"], c: ["Félkör alakú sziklamedence", "Semicircular rock basin", "Halbkreisförmiges Felsbecken", "Bazin stâncos semicircular"], w1: ["Mély folyóvölgy", "Deep river valley", "Tiefes Flusstal", "Vale fluvială adâncă"], w2: ["Sivatagi dűne", "Desert dune", "Wüstendüne", "Dună de deșert"], w3: ["Homokpad", "Sandbar", "Sandbank", "Banc de nisip"] },
      { q: ["Melyik országban híresek a fjordok?", "In which country are fjords famous?", "In welchem Land sind Fjorde berühmt?", "În ce țară sunt faimoase fjordurile?"], c: ["Norvégia", "Norway", "Norwegen", "Norvegia"], w1: ["Magyarország", "Hungary", "Ungarn", "Ungaria"], w2: ["Egyiptom", "Egypt", "Ägypten", "Egipt"], w3: ["Brazília", "Brazil", "Brasilien", "Brazilia"] },
      { q: ["Mi a trogvölgy?", "What is a trough valley?", "Was ist ein Trogthal?", "Ce este o vale de tip trog?"], c: ["Gleccser vájta U-völgy", "Glacier-carved U-valley", "Vom Gletscher geformtes U-Tal", "Vale în U formată de ghețar"], w1: ["V-alakú völgy", "V-shaped valley", "V-Tal", "Vale în V"], w2: ["Szurdok", "Gorge", "Schlucht", "Chei"], w3: ["Kanyon", "Canyon", "Canyon", "Canion"] }
    ],
    typing: [
      { q: ["Milyen alakú a gleccservölgy?", "What shape is a glacial valley?", "Welche Form hat ein Glazialtal?", "Ce formă are o vale glaciară?"], a: ["U-alak", "U-shape", "U-Form", "Formă de U"] },
      { q: ["Mi a gleccser által szállított törmelék?", "What is the debris carried by a glacier?", "Wie heißt der Gletscherschutt?", "Ce este detritusul transportat de ghețar?"], a: ["Moréna", "Moraine", "Moräne", "Morenă"] },
      { q: ["Mi a tengerpart rombolásának neve?", "What is the name for coastal destruction?", "Wie nennt man die Küstenzerstörung?", "Cum se numește distrugerea țărmului?"], a: ["Abrázió", "Abrasion", "Abrasion", "Abraziune"] },
      { q: ["Mi a tengerrel elöntött gleccservölgy?", "What is a glacial valley flooded by the sea?", "Wie heißt ein Meeresarm im Glazialtal?", "Ce este o vale glaciară inundată de mare?"], a: ["Fjord", "Fjord", "Fjord", "Fjord"] },
      { q: ["Mi a gleccser vájta tó?", "What is a glacier-carved lake?", "Wie heißt ein See im Kar?", "Cum se numește lacul sapat de ghețar?"], a: ["Tengerszem", "Tarn", "Karsee", "Iezer"] },
      { q: ["Mi a lassan mozgó jégtömeg?", "What is a slowly moving ice mass?", "Was ist eine fließende Eismasse?", "Ce este o masă de gheață în mișcare?"], a: ["Gleccser", "Glacier", "Gletscher", "Ghețar"] },
      { q: ["Mi az Antarktiszt borító jég?", "What is the ice covering Antarctica?", "Was bedeckt die Antarktis?", "Ce acoperă Antarctica?"], a: ["Jégtakaró", "Ice sheet", "Inlandeis", "Calotă"] },
      { q: ["Mi a jégbe fagyott repedés?", "What is a crack in the ice?", "Wie heißt ein Riss im Eis?", "Cum se numește o crăpătură în gheață?"], a: ["Hasadék", "Crevasse", "Spalte", "Crevasă"] },
      { q: ["Mi a messzire vitt sziklatömb?", "What is a far-carried rock block?", "Wie heißt ein ferntransportierter Block?", "Ce este un bloc transportat departe?"], a: ["Vándorkő", "Erratic", "Findling", "Bloc erratic"] },
      { q: ["Mi a jégből kialakult domb?", "What is a hill formed from ice deposits?", "Wie heißt ein glazialer Hügel?", "Cum se numește un deal format de ghețar?"], a: ["Drumlin", "Drumlin", "Drumlin", "Drumlin"] }
    ]
  },
  aeolian_landforms: {
    mcq: [
      { q: ["Mi a dűne?", "What is a dune?", "Was ist eine Düne?", "Ce este o dună?"], c: ["Szél által épített homokbucka", "Sand hill built by wind", "Vom Wind aufgeschütteter Sandhügel", "Deal de nisip construit de vânt"], w1: ["Vulkáni kúp", "Volcanic cone", "Vulkankegel", "Con vulcanic"], w2: ["Folyami hordalék", "River sediment", "Flusssediment", "Sediment fluvial"], w3: ["Gleccser moréna", "Glacial moraine", "Gletschermoräne", "Morenă glaciară"] },
      { q: ["Mi a lösz?", "What is loess?", "Was ist Löss?", "Ce este loessul?"], c: ["Finom szemcséjű porlerakódás", "Fine-grained dust deposit", "Feinkörnige Staubablagerung", "Depozit de praf fin"], w1: ["Kemény bazalt", "Hard basalt", "Harter Basalt", "Bazalt dur"], w2: ["Tengeri iszap", "Marine mud", "Meerschlamm", "Nămol marin"], w3: ["Kőszén", "Coal", "Kohle", "Cărbune"] },
      { q: ["Melyik forma jellemző a sivatagi szélre?", "Which form is typical for desert wind?", "Welche Form ist typisch für Wüstenwind?", "Care formă este tipică pentru vântul de deșert?"], c: ["Barkán", "Barchan", "Barchan", "Barcană"], w1: ["Fjord", "Fjord", "Fjord", "Fjord"], w2: ["Meander", "Meander", "Meander", "Meandru"], w3: ["Moréna", "Moraine", "Moräne", "Morenă"] },
      { q: ["Mi a defláció?", "What is deflation?", "Was ist Deflation?", "Ce este deflația?"], c: ["A szél kifúvó munkája", "The blowing action of the wind", "Ausblasung durch Wind", "Acțiunea de spulberare a vântului"], w1: ["A szél lerakó munkája", "The depositing action of the wind", "Ablagerung durch Wind", "Acțiunea de depunere a vântului"], w2: ["A víz eróziója", "Water erosion", "Wassererosion", "Eroziunea apei"], w3: ["A kőzetek mállása", "Weathering of rocks", "Verwitterung von Gesteinen", "Alterarea rocilor"] },
      { q: ["Mi a korrázió?", "What is corrasion?", "Was ist Korrasion?", "Ce este coraziunea?"], c: ["A szél koptató munkája", "The abrasive work of the wind", "Schleifwirkung des Windes", "Acțiunea abrazivă a vântului"], w1: ["Víz elpárolgása", "Water evaporation", "Wasserverdunstung", "Evaporarea apei"], w2: ["Jég olvadása", "Ice melting", "Eisschmelze", "Topirea gheții"], w3: ["Hordalék lerakása", "Sediment deposition", "Sedimentablagerung", "Depunerea sedimentelor"] },
      { q: ["Mi a gombaszikla?", "What is a mushroom rock?", "Was ist ein Pilzfelsen?", "Ce este o stâncă ciupercă?"], c: ["Szélerózió formálta szikla", "Rock shaped by wind erosion", "Vom Wind geformter Felsen", "Rocă modelată de eroziunea eoliană"], w1: ["Vízesés alatti kő", "Stone under a waterfall", "Stein unterm Wasserfall", "Piatră sub o cascadă"], w2: ["Vulkáni maradvány", "Volcanic remnant", "Vulkanrest", "Rămășiță vulcanică"], w3: ["Ember alkotta szobor", "Man-made statue", "Vom Menschen geschaffene Statue", "Statuie creată de om"] },
      { q: ["Mi a hamada?", "What is a hamada?", "Was ist eine Hamada?", "Ce este o hamadă?"], c: ["Sziklasivatag", "Rocky desert", "Felswüste", "Deșert stâncos"], w1: ["Homoksivatag", "Sand desert", "Sandwüste", "Deșert de nisip"], w2: ["Kavicssivatag", "Gravel desert", "Kieswüste", "Deșert de pietriș"], w3: ["Jégsivatag", "Ice desert", "Eiswüste", "Deșert de gheață"] },
      { q: ["Mi az erg?", "What is an erg?", "Was ist ein Erg?", "Ce este un erg?"], c: ["Homoksivatag", "Sand desert", "Sandwüste", "Deșert de nisip"], w1: ["Sziklasivatag", "Rocky desert", "Felswüste", "Deșert stâncos"], w2: ["Hegyi legelő", "Mountain pasture", "Bergweide", "Pășune montană"], w3: ["Sós mocsár", "Salt marsh", "Salzsumpf", "Mlaștină sărată"] },
      { q: ["Mi a szerir?", "What is a serir?", "Was ist ein Serir?", "Ce este un serir?"], c: ["Kavicssivatag", "Gravel desert", "Kieswüste", "Deșert de pietriș"], w1: ["Oázis", "Oasis", "Oase", "Oază"], w2: ["Folyómeder", "Riverbed", "Flussbett", "Albie"], w3: ["Hegycsúcs", "Mountain peak", "Berggipfel", "Vârf muntos"] },
      { q: ["Hogy hívjuk a kifli alakú dűnét?", "What is a crescent-shaped dune called?", "Wie nennt man eine sichelförmige Düne?", "Cum se numește o dună în formă de semilună?"], c: ["Barkán", "Barchan", "Barchan", "Barcană"], w1: ["Löszfal", "Loess wall", "Lösswand", "Perete de loess"], w2: ["Gombaszikla", "Mushroom rock", "Pilzfelsen", "Stâncă ciupercă"], w3: ["Kanyon", "Canyon", "Canyon", "Canion"] },
      { q: ["Hol rakódott le nagy mennyiségű lösz?", "Where was a large amount of loess deposited?", "Wo lagerte sich viel Löss ab?", "Unde s-a depus o cantitate mare de loess?"], c: ["Kínai-alföld", "North China Plain", "Nordchinesisches Tiefland", "Câmpia Chineză"], w1: ["Amazonas-medence", "Amazon Basin", "Amazonasbecken", "Bazinul Amazonului"], w2: ["Szahara", "Sahara", "Sahara", "Sahara"], w3: ["Grönland", "Greenland", "Grönland", "Groenlanda"] },
      { q: ["Mi a szélerózió?", "What is wind erosion?", "Was ist Winderosion?", "Ce este eroziunea eoliană?"], c: ["Szél romboló munkája", "The destructive work of wind", "Zerstörung durch Wind", "Acțiunea distructivă a vântului"], w1: ["Szél építő munkája", "The constructive work of wind", "Aufbau durch Wind", "Acțiunea constructivă a vântului"], w2: ["Vízszállító szél", "Water-bearing wind", "Wassertransportierender Wind", "Vânt care aduce ploaia"], w3: ["Tájfun", "Typhoon", "Taifun", "Taifun"] },
      { q: ["Miért termékeny a lösz?", "Why is loess fertile?", "Warum ist Löss fruchtbar?", "De ce este loessul fertil?"], c: ["Ásványi anyagokban gazdag", "Rich in minerals", "Reich an Mineralien", "Bogat în minerale"], w1: ["Sok benne a víz", "Contains a lot of water", "Enthält viel Wasser", "Conține multă apă"], w2: ["Fekete színe miatt", "Because of its black color", "Wegen der schwarzen Farbe", "Datorită culorii negre"], w3: ["Vulkáni eredetű", "Volcanic origin", "Vulkanischen Ursprungs", "De origine vulcanică"] },
      { q: ["Mi az oázis?", "What is an oasis?", "Was ist eine Oase?", "Ce este o oază?"], c: ["Vizes, termékeny hely a sivatagban", "Watery, fertile place in the desert", "Wasserstelle in der Wüste", "Loc cu apă și fertil în deșert"], w1: ["Kiszáradt tó", "Dry lake", "Austrocknender See", "Lac secat"], w2: ["Homokvihar", "Sandstorm", "Sandsturm", "Furtună de nisip"], w3: ["Magas dűne", "High dune", "Hohe Düne", "Dună înaltă"] },
      { q: ["Mi a vadi?", "What is a wadi?", "Was ist ein Wadi?", "Ce este un uadi?"], c: ["Időszakos sivatagi folyómeder", "Periodic desert riverbed", "Trockenflusstal in der Wüste", "Albie de râu temporară în deșert"], w1: ["Örökzöld erdő", "Evergreen forest", "Immergrüner Wald", "Pădure veșnic verde"], w2: ["Hegyi hágó", "Mountain pass", "Bergpass", "Pas montan"], w3: ["Sós dűne", "Salt dune", "Salzdüne", "Dună sărată"] },
      { q: ["Melyik sivatag a legnagyobb a Földön?", "Which desert is the largest on Earth?", "Welche Wüste ist die größte der Erde?", "Care este cel mai mare deșert de pe Pământ?"], c: ["Szahara", "Sahara", "Sahara", "Sahara"], w1: ["Góbi", "Gobi", "Gobi", "Gobi"], w2: ["Atacama", "Atacama", "Atacama", "Atacama"], w3: ["Viktória-sivatag", "Victoria Desert", "Victoriawüste", "Deșertul Victoria"] },
      { q: ["Melyik kontinensen nincs sivatag?", "Which continent has no desert?", "Auf welchem Kontinent gibt es keine Wüste?", "Pe ce continent nu există deșert?"], c: ["Európa", "Europe", "Europa", "Europa"], w1: ["Ausztrália", "Australia", "Australien", "Australia"], w2: ["Afrika", "Africa", "Afrika", "Africa"], w3: ["Ázsia", "Asia", "Asien", "Asia"] },
      { q: ["Mi a sivatagosodás?", "What is desertification?", "Was ist Wüstenbildung?", "Ce este deșertificarea?"], c: ["Sivatagok terjeszkedése", "Expansion of deserts", "Ausbreitung von Wüsten", "Extinderea deșerturilor"], w1: ["Sivatagok öntözése", "Irrigation of deserts", "Bewässerung von Wüsten", "Irigarea deșerturilor"], w2: ["Homok bányászata", "Mining of sand", "Sandabbau", "Exploatarea nisipului"], w3: ["Oázisok eltűnése", "Disappearance of oases", "Verschwinden von Oasen", "Dispariția oazelor"] },
      { q: ["Mi az eolikus folyamat?", "What is an aeolian process?", "Was ist ein äolischer Prozess?", "Ce este un proces eolian?"], c: ["Szél felszínformálása", "Wind shaping the surface", "Oberflächenformung durch Wind", "Modelarea suprafeței de către vânt"], w1: ["Folyóvízi formálás", "Fluvial shaping", "Flussformung", "Modelare fluvială"], w2: ["Vulkáni folyamat", "Volcanic process", "Vulkanischer Prozess", "Proces vulcanic"], w3: ["Hullámverés", "Wave action", "Brandung", "Acțiunea valurilor"] },
      { q: ["Mi a sivatagi mállás fő oka?", "What is the main cause of desert weathering?", "Was ist die Ursache für Wüstenverwitterung?", "Care este cauza principală a alterării în deșert?"], c: ["Hőingadozás", "Temperature changes", "Temperaturschwankungen", "Variațiile de temperatură"], w1: ["Savas eső", "Acid rain", "Saurer Regen", "Ploaia acidă"], w2: ["Fagy", "Frost", "Frost", "Îngheț"], w3: ["Biológiai aktivitás", "Biological activity", "Biologische Aktivität", "Activitate biologică"] }
    ],
    typing: [
      { q: ["Mi a szél építette homokbucka?", "What is a wind-built sand hill?", "Wie heißt ein Windhügel?", "Ce este o dună?"], a: ["Dűne", "Dune", "Düne", "Dună"] },
      { q: ["Mi a szél kifúvó munkája?", "What is the wind's blowing action?", "Wie heißt die Ausblasung?", "Cum se numește spulberarea vântului?"], a: ["Defláció", "Deflation", "Deflation", "Deflație"] },
      { q: ["Mi a szél koptató munkája?", "What is the wind's abrasive work?", "Wie heißt die Schleifwirkung?", "Cum se numește abraziunea vântului?"], a: ["Korrázió", "Corrasion", "Korrasion", "Coraziune"] },
      { q: ["Mi a finom szemcséjű porlerakódás?", "What is the fine-grained dust deposit?", "Wie heißt die Staubablagerung?", "Ce este loessul?"], a: ["Lösz", "Loess", "Löss", "Loess"] },
      { q: ["Mi a homoksivatag neve?", "What is the name for a sand desert?", "Wie heißt eine Sandwüste?", "Cum se numește deșertul de nisip?"], a: ["Erg", "Erg", "Erg", "Erg"] },
      { q: ["Mi a sziklasivatag neve?", "What is the name for a rocky desert?", "Wie heißt eine Felswüste?", "Cum se numește deșertul stâncos?"], a: ["Hamada", "Hamada", "Hamada", "Hamadă"] },
      { q: ["Mi a kifli alakú dűne?", "What is a crescent-shaped dune?", "Wie heißt eine Sicheldüne?", "Cum se numește duna semilună?"], a: ["Barkán", "Barchan", "Barchan", "Barcană"] },
      { q: ["Mi a sivatagi vizes hely?", "What is a watery place in the desert?", "Wie heißt eine Wasserstelle?", "Cum se numește o oază?"], a: ["Oázis", "Oasis", "Oase", "Oază"] },
      { q: ["Mi a szélerózió formálta szikla?", "What is a rock shaped by wind erosion?", "Wie heißt ein Pilzfelsen?", "Ce este stânca ciupercă?"], a: ["Gombaszikla", "Mushroom rock", "Pilzfelsen", "Stâncă ciupercă"] },
      { q: ["Mi a szél felszínformáló neve?", "What is the wind's surface shaping name?", "Wie nennt man die Windformung?", "Cum se numește acțiunea vântului?"], a: ["Eolikus", "Aeolian", "Äolisch", "Eolian"] }
    ]
  },
  economic_sectors: {
    mcq: [
      { q: ["Melyik szektorba tartozik a mezőgazdaság?", "Which sector does agriculture belong to?", "Welchem Sektor gehört die Landwirtschaft an?", "Cărui sector îi aparține agricultura?"], c: ["Primer", "Primary", "Primärer", "Primar"], w1: ["Szekunder", "Secondary", "Sekundärer", "Secundar"], w2: ["Tercier", "Tertiary", "Tertiärer", "Terțiar"], w3: ["Kvaterner", "Quaternary", "Quartärer", "Cuaternar"] },
      { q: ["Melyik szektor az ipar és feldolgozás?", "Which sector is industry and processing?", "Welcher Sektor ist Industrie und Verarbeitung?", "Care sector este industria și prelucrarea?"], c: ["Szekunder", "Secondary", "Sekundärer", "Secundar"], w1: ["Primer", "Primary", "Primärer", "Primar"], w2: ["Tercier", "Tertiary", "Tertiärer", "Terțiar"], w3: ["Kvaterner", "Quaternary", "Quartärer", "Cuaternar"] },
      { q: ["Melyik szektorba tartoznak a szolgáltatások?", "Which sector do services belong to?", "Welchem Sektor gehören Dienstleistungen an?", "Cărui sector îi aparțin serviciile?"], c: ["Tercier", "Tertiary", "Tertiärer", "Terțiar"], w1: ["Primer", "Primary", "Primärer", "Primar"], w2: ["Szekunder", "Secondary", "Sekundärer", "Secundar"], w3: ["Kvaterner", "Quaternary", "Quartärer", "Cuaternar"] },
      { q: ["Mit jelent a kvaterner szektor?", "What does the quaternary sector mean?", "Was bedeutet der quartäre Sektor?", "Ce înseamnă sectorul cuaternar?"], c: ["Kutatás és informatika", "Research and IT", "Forschung und IT", "Cercetare și IT"], w1: ["Bányászat", "Mining", "Bergbau", "Minerit"], w2: ["Építőipar", "Construction", "Bauwesen", "Construcții"], w3: ["Kereskedelem", "Trade", "Handel", "Comerț"] },
      { q: ["Melyik szektor dominál a fejlett országokban?", "Which sector dominates in developed countries?", "Welcher Sektor dominiert in Industrieländern?", "Care sector domină în țările dezvoltate?"], c: ["Tercier", "Tertiary", "Tertiärer", "Terțiar"], w1: ["Primer", "Primary", "Primärer", "Primar"], w2: ["Szekunder", "Secondary", "Sekundärer", "Secundar"], w3: ["Mezőgazdaság", "Agriculture", "Landwirtschaft", "Agricultură"] },
      { q: ["Hová tartozik az oktatás és egészségügy?", "Where do education and healthcare belong?", "Wohin gehören Bildung und Gesundheit?", "Unde aparțin educația și sănătatea?"], c: ["Tercier", "Tertiary", "Tertiärer", "Terțiar"], w1: ["Primer", "Primary", "Primärer", "Primar"], w2: ["Szekunder", "Secondary", "Sekundärer", "Secundar"], w3: ["Gyártás", "Manufacturing", "Fertigung", "Producție"] },
      { q: ["Mi a bányászat szektora?", "What is the sector for mining?", "Welcher Sektor ist der Bergbau?", "Care este sectorul pentru minerit?"], c: ["Primer", "Primary", "Primärer", "Primar"], w1: ["Szekunder", "Secondary", "Sekundärer", "Secundar"], w2: ["Tercier", "Tertiary", "Tertiärer", "Terțiar"], w3: ["Kvaterner", "Quaternary", "Quartärer", "Cuaternar"] },
      { q: ["Hová tartozik az autógyártás?", "Where does car manufacturing belong?", "Wohin gehört die Automobilherstellung?", "Unde aparține fabricarea mașinilor?"], c: ["Szekunder", "Secondary", "Sekundärer", "Secundar"], w1: ["Primer", "Primary", "Primärer", "Primar"], w2: ["Tercier", "Tertiary", "Tertiärer", "Terțiar"], w3: ["Kvaterner", "Quaternary", "Quartärer", "Cuaternar"] },
      { q: ["Mit jelent a 'szektorváltás'?", "What does 'sectoral shift' mean?", "Was bedeutet 'Sektorwandel'?", "Ce înseamnă 'schimbarea sectorială'?"], c: ["Gazdaság súlypontjának áthelyeződése", "Shifting the economy's focus", "Gewichtsverlagerung der Wirtschaft", "Schimbarea centrului de greutate al economiei"], w1: ["Cégnév változtatás", "Company name change", "Firmennamensänderung", "Schimbarea numelui companiei"], w2: ["Import növekedése", "Import increase", "Importzunahme", "Creșterea importurilor"], w3: ["Állami támogatás", "State subsidy", "Staatliche Subvention", "Subvenție de stat"] },
      { q: ["Melyik szektor a legfontosabb a legkevésbé fejlett országokban?", "Which sector is most important in least developed countries?", "Welcher Sektor ist in am wenigsten entwickelten Ländern am wichtigsten?", "Care sector este cel mai important în țările cele mai puțin dezvoltate?"], c: ["Primer", "Primary", "Primärer", "Primar"], w1: ["Szekunder", "Secondary", "Sekundärer", "Secundar"], w2: ["Tercier", "Tertiary", "Tertiärer", "Terțiar"], w3: ["High-tech", "High-tech", "Hightech", "High-tech"] },
      { q: ["Hová tartozik a bank és biztosítás?", "Where do banks and insurance belong?", "Wohin gehören Banken und Versicherungen?", "Unde aparțin băncile și asigurările?"], c: ["Tercier", "Tertiary", "Tertiärer", "Terțiar"], w1: ["Primer", "Primary", "Primärer", "Primar"], w2: ["Szekunder", "Secondary", "Sekundärer", "Secundar"], w3: ["Építőipar", "Construction", "Baugewerbe", "Construcții"] },
      { q: ["Mi a szekunder szektor alapanyaga?", "What is the raw material for the secondary sector?", "Was ist der Rohstoff für den sekundären Sektor?", "Care este materia primă pentru sectorul secundar?"], c: ["A primer szektor termékei", "Products of the primary sector", "Produkte des primären Sektors", "Produsele sectorului primar"], w1: ["Információ", "Information", "Information", "Informația"], w2: ["Csak fém", "Only metal", "Nur Metall", "Doar metal"], w3: ["Szolgáltatás", "Service", "Dienstleistung", "Serviciu"] },
      { q: ["Hová tartozik a szoftverfejlesztés?", "Where does software development belong?", "Wohin gehört die Softwareentwicklung?", "Unde aparține dezvoltarea de software?"], c: ["Kvaterner", "Quaternary", "Quartärer", "Cuaternar"], w1: ["Primer", "Primary", "Primärer", "Primar"], w2: ["Szekunder", "Secondary", "Sekundärer", "Secundar"], w3: ["Tercier", "Tertiary", "Tertiärer", "Terțiar"] },
      { q: ["Melyik szektor használja a legtöbb vizet globálisan?", "Which sector uses the most water globally?", "Welcher Sektor verbraucht weltweit das meiste Wasser?", "Care sector consumă cea mai multă apă la nivel global?"], c: ["Primer (mezőgazdaság)", "Primary (agriculture)", "Primärer (Landwirtschaft)", "Primar (agricultură)"], w1: ["Szekunder", "Secondary", "Sekundärer", "Secundar"], w2: ["Tercier", "Tertiary", "Tertiärer", "Terțiar"], w3: ["Turizmus", "Tourism", "Tourismus", "Turism"] },
      { q: ["Mi a tercier szektor másik neve?", "What is another name for the tertiary sector?", "Wie nennt man den tertiären Sektor noch?", "Care este un alt nume pentru sectorul terțiar?"], c: ["Szolgáltatások", "Services", "Dienstleistungssektor", "Sectorul serviciilor"], w1: ["Ipari szektor", "Industrial sector", "Industriesektor", "Sectorul industrial"], w2: ["Nyersanyagszektor", "Raw material sector", "Rohstoffsektor", "Sectorul materiilor prime"], w3: ["Közszféra", "Public sector", "Öffentlicher Dienst", "Sectorul public"] },
      { q: ["Melyik tevékenység NEM primer szektor?", "Which activity is NOT primary sector?", "Welche Tätigkeit ist KEIN primärer Sektor?", "Care activitate NU face parte din sectorul primar?"], c: ["Kenyérsütés", "Baking bread", "Brotbacken", "Coacerea pâinii"], w1: ["Horgászat", "Fishing", "Fischerei", "Pescuit"], w2: ["Erdőgazdálkodás", "Forestry", "Forstwirtschaft", "Silvicultură"], w3: ["Állattenyésztés", "Livestock farming", "Viehzucht", "Creșterea animalelor"] },
      { q: ["Hová tartozik az energiatermelés?", "Where does energy production belong?", "Wohin gehört die Energieerzeugung?", "Unde aparține producția de energie?"], c: ["Szekunder", "Secondary", "Sekundärer", "Secundar"], w1: ["Primer", "Primary", "Primärer", "Primar"], w2: ["Tercier", "Tertiary", "Tertiärer", "Terțiar"], w3: ["Mezőgazdaság", "Agriculture", "Landwirtschaft", "Agricultură"] },
      { q: ["Mi a turizmus szektora?", "What is the sector for tourism?", "Welcher Sektor ist der Tourismus?", "Care este sectorul pentru turism?"], c: ["Tercier", "Tertiary", "Tertiärer", "Terțiar"], w1: ["Primer", "Primary", "Primärer", "Primar"], w2: ["Szekunder", "Secondary", "Sekundärer", "Secundar"], w3: ["Élelmiszeripar", "Food industry", "Lebensmittelindustrie", "Industria alimentară"] },
      { q: ["Melyik országban magas a primer szektor aránya?", "Which country has a high primary sector share?", "In welchem Land ist der Anteil des primären Sektors hoch?", "În ce țară este ridicată ponderea sectorului primar?"], c: ["Etiópia", "Ethiopia", "Äthiopien", "Etiopia"], w1: ["Németország", "Germany", "Deutschland", "Germania"], w2: ["Japán", "Japan", "Japan", "Japonia"], w3: ["USA", "USA", "USA", "USA"] },
      { q: ["Hová tartozik a tudományos kutatás?", "Where does scientific research belong?", "Wohin gehört die wissenschaftliche Forschung?", "Unde aparține cercetarea științifică?"], c: ["Kvaterner", "Quaternary", "Quartärer", "Cuaternar"], w1: ["Primer", "Primary", "Primärer", "Primar"], w2: ["Szekunder", "Secondary", "Sekundärer", "Secundar"], w3: ["Kereskedelem", "Trade", "Handel", "Comerț"] }
    ],
    typing: [
      { q: ["Melyik a mezőgazdasági szektor?", "Which is the agricultural sector?", "Wie heißt der Sektor für Landwirtschaft?", "Care este sectorul agricol?"], a: ["Primer", "Primary", "Primärer", "Primar"] },
      { q: ["Melyik az ipari szektor?", "Which is the industrial sector?", "Wie heißt der Industriesektor?", "Care este sectorul industrial?"], a: ["Szekunder", "Secondary", "Sekundärer", "Secundar"] },
      { q: ["Melyik a szolgáltató szektor?", "Which is the service sector?", "Wie heißt der Dienstleistungssektor?", "Care este sectorul serviciilor?"], a: ["Tercier", "Tertiary", "Tertiärer", "Terțiar"] },
      { q: ["Melyik a kutatási szektor?", "Which is the research sector?", "Wie heißt der Forschungssektor?", "Care este sectorul de cercetare?"], a: ["Kvaterner", "Quaternary", "Quartärer", "Cuaternar"] },
      { q: ["Hová tartozik a bányászat?", "Where does mining belong?", "Wohin gehört Bergbau?", "Unde aparține mineritul?"], a: ["Primer", "Primary", "Primärer", "Primar"] },
      { q: ["Hová tartozik a szállítás?", "Where does transport belong?", "Wohin gehört Transport?", "Unde aparține transportul?"], a: ["Tercier", "Tertiary", "Tertiärer", "Terțiar"] },
      { q: ["Hová tartozik az építőipar?", "Where does construction belong?", "Wohin gehört das Bauwesen?", "Unde aparține construcția?"], a: ["Szekunder", "Secondary", "Sekundärer", "Secundar"] },
      { q: ["Hová tartozik az informatika?", "Where does IT belong?", "Wohin gehört IT?", "Unde aparține informatica?"], a: ["Kvaterner", "Quaternary", "Quartärer", "Cuaternar"] },
      { q: ["Hová tartozik a kereskedelem?", "Where does trade belong?", "Wohin gehört Handel?", "Unde aparține comerțul?"], a: ["Tercier", "Tertiary", "Tertiärer", "Terțiar"] },
      { q: ["Hová tartozik a halászat?", "Where does fishing belong?", "Wohin gehört Fischerei?", "Unde aparține pescuitul?"], a: ["Primer", "Primary", "Primärer", "Primar"] }
    ]
  },
  globalization_impact: {
    mcq: [

    ],
    typing: [

    ]
  },
  world_trade_routes: {
    mcq: [

    ],
    typing: [

    ]
  },
  locational_factors: {
    mcq: [

    ],
    typing: [

    ]
  },
  amazon_rainforest_use: {
    mcq: [

    ],
    typing: [

    ]
  },
  brazil_economic_power: {
    mcq: [

    ],
    typing: [

    ]
  },
  andes_mining_climate: {
    mcq: [

    ],
    typing: [

    ]
  },
  central_america_islands: {
    mcq: [

    ],
    typing: [

    ]
  },
  africa_climate_zones: {
    mcq: [

    ],
    typing: [

    ]
  },
  hunger_resource_conflict: {
    mcq: [

    ],
    typing: [

    ]
  },
  developing_aid_projects: {
    mcq: [

    ],
    typing: [

    ]
  },
  africa_megacities_dev: {
    mcq: [

    ],
    typing: [

    ]
  },
  australia_outback_resources: {
    mcq: [

    ],
    typing: [

    ]
  },
  oceania_islands_threat: {
    mcq: [

    ],
    typing: [

    ]
  },
  great_barrier_reef_env: {
    mcq: [

    ],
    typing: [

    ]
  },
  antarctica_research: {
    mcq: [

    ],
    typing: [

    ]
  },
  energy_transition_global: {
    mcq: [

    ],
    typing: [

    ]
  },
  sustainable_development_goals: {
    mcq: [

    ],
    typing: [

    ]
  },
  digitalization_world: {
    mcq: [

    ],
    typing: [

    ]
  },
  future_cities_planning: {
    mcq: [

    ],
    typing: [

    ]
  },
  global_development_hdi: {
    mcq: [

    ],
    typing: [

    ]
  },
  urbanization_process: {
    mcq: [

    ],
    typing: [

    ]
  }
};

export const K8_GEOGRAPHIE_GENERATORS: any = {};
const keys = ["weathering_erosion", "fluvial_landforms", "glacial_landforms", "aeolian_landforms", "economic_sectors", "globalization_impact", "world_trade_routes", "locational_factors", "amazon_rainforest_use", "brazil_economic_power", "andes_mining_climate", "central_america_islands", "africa_climate_zones", "hunger_resource_conflict", "developing_aid_projects", "africa_megacities_dev", "australia_outback_resources", "ocean_currents", "rivers_life", "water_scarcity", "glaciers_ice", "energy_transition_global", "sustainable_development_goals", "digitalization_world", "future_cities_planning", "oceania_islands_threat", "great_barrier_reef_env", "antarctica_research"];

keys.forEach(k => {
  const gen = (lang: string, seed: number) => makeMCQs(k, lang, mulberry32(seed), DATA_K8[k].mcq);
  K8_GEOGRAPHIE_GENERATORS[k] = gen;
  K8_GEOGRAPHIE_GENERATORS[`${k}_mcq`] = gen;
  K8_GEOGRAPHIE_GENERATORS[`${k}_typing`] = (lang: string, seed: number) => makeTyping(k, lang, DATA_K8[k].typing);
});

Object.assign(K8_GEOGRAPHIE_GENERATORS, {
  globalization_impact_k8: K8_GEOGRAPHIE_GENERATORS.globalization_impact,
  globalization_impact_k8_mcq: K8_GEOGRAPHIE_GENERATORS.globalization_impact_mcq,
  globalization_impact_k8_typing: K8_GEOGRAPHIE_GENERATORS.globalization_impact_typing,

  great_barrier_reef_env: (lang: string, seed: number) => makeMCQs("great_barrier_reef_env", lang, mulberry32(seed), DATA_K8.great_barrier_reef_env.mcq),
  great_barrier_reef_env_mcq: (lang: string, seed: number) => makeMCQs("great_barrier_reef_env", lang, mulberry32(seed), DATA_K8.great_barrier_reef_env.mcq),
  great_barrier_reef_env_typing: (lang: string, seed: number) => makeTyping("great_barrier_reef_env", lang, DATA_K8.great_barrier_reef_env.typing),

  renewable_energy_k8: K8_GEOGRAPHIE_GENERATORS.energy_transition_global,
  renewable_energy_k8_mcq: K8_GEOGRAPHIE_GENERATORS.energy_transition_global_mcq,
  renewable_energy_k8_typing: K8_GEOGRAPHIE_GENERATORS.energy_transition_global_typing,

  global_development_hdi: (lang: string, seed: number) => makeMCQs("global_development_hdi", lang, mulberry32(seed), DATA_K8.global_development_hdi.mcq),
  global_development_hdi_mcq: (lang: string, seed: number) => makeMCQs("global_development_hdi", lang, mulberry32(seed), DATA_K8.global_development_hdi.mcq),
  global_development_hdi_typing: (lang: string, seed: number) => makeTyping("global_development_hdi", lang, DATA_K8.global_development_hdi.typing),

  ecological_footprint_k8: (lang: string, seed: number) => makeMCQs("ecological_footprint_k8", lang, mulberry32(seed), DATA_K8.ecological_footprint_k8.mcq),
  ecological_footprint_k8_mcq: (lang: string, seed: number) => makeMCQs("ecological_footprint_k8", lang, mulberry32(seed), DATA_K8.ecological_footprint_k8.mcq),
  ecological_footprint_k8_typing: (lang: string, seed: number) => makeTyping("ecological_footprint_k8", lang, DATA_K8.ecological_footprint_k8.typing),

  urbanization_process: (lang: string, seed: number) => makeMCQs("urbanization_process", lang, mulberry32(seed), DATA_K8.urbanization_process.mcq),
  urbanization_process_mcq: (lang: string, seed: number) => makeMCQs("urbanization_process", lang, mulberry32(seed), DATA_K8.urbanization_process.mcq),
  urbanization_process_typing: (lang: string, seed: number) => makeTyping("urbanization_process", lang, DATA_K8.urbanization_process.typing),
});
