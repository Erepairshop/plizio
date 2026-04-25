import type { POI } from "./poi";

export const poiExtraHu1: POI[] = [
  // HU-BU: Budapest
  {
    id: "city-obuda-extra",
    type: "city",
    parent: "HU-BU",
    coords: [19.04, 47.54],
    name: { de: "Óbuda", hu: "Óbuda", ro: "Óbuda", en: "Óbuda" },
    description: {
      de: "Óbuda ist einer der ältesten Teile von Budapest, bekannt für seine römischen Ruinen und charmanten Kopfsteinpflasterstraßen.",
      hu: "Óbuda Budapest egyik legrégebbi része, amely római kori romjairól és hangulatos macskaköves utcáiról ismert.",
      ro: "Óbuda este una dintre cele mai vechi părți ale Budapestei, cunoscută pentru ruinele sale romane și străzile fermecătoare cu piatră cubică.",
      en: "Óbuda is one of the oldest parts of Budapest, known for its Roman ruins and charming cobblestone streets."
    },
    descriptionAdvanced: {
      de: "Óbuda, heute der III. Bezirk von Budapest, war einst eine eigenständige Stadt mit einer Geschichte, die bis in die Römerzeit zurückreicht, als sie als Aquincum bekannt war. Besucher können heute noch die Überreste der römischen Zivilisation in Form von Amphitheatern und Ruinenfeldern besichtigen. Das Zentrum von Óbuda bewahrt mit seinem barocken Hauptplatz und den gemütlichen Restaurants den Charme einer Kleinstadt inmitten der Metropole.",
      hu: "Óbuda, ma Budapest III. kerülete, egykor önálló város volt, melynek történelme a római korig nyúlik vissza, amikor Aquincum néven volt ismert. A látogatók ma is megtekinthetik a római civilizáció maradványait amfiteátrumok és romkertek formájában. Óbuda központja a barokk Fő térrel és hangulatos éttermeivel megőrizte kisvárosi báját a világváros közepén.",
      ro: "Óbuda, astăzi sectorul III al Budapestei, a fost odată un oraș independent cu o istorie care datează din epoca romană, când era cunoscut sub numele de Aquincum. Vizitatorii pot vedea și astăzi rămășițele civilizației romane sub formă de amfiteatre și câmpuri de ruine. Centrul orașului Óbuda, cu piața sa principală barocă și restaurantele primitoare, păstrează farmecul unui orășel în mijlocul metropolei.",
      en: "Óbuda, today the 3rd district of Budapest, was once an independent city with a history dating back to Roman times when it was known as Aquincum. Visitors can still see the remains of Roman civilization today in the form of amphitheaters and ruin fields. The center of Óbuda, with its Baroque main square and cozy restaurants, has preserved its small-town charm in the middle of the metropolis."
    },
    facts: {
      de: ["Heimat der antiken römischen Stadt Aquincum.", "Besitzt zwei römische Amphitheater.", "Der Hauptplatz ist für seine barocke Architektur bekannt.", "Austragungsort des Sziget-Festivals auf der Óbuda-Insel."],
      hu: ["Az ókori római Aquincum városa itt terült el.", "Két római amfiteátrummal is rendelkezik.", "Fő tere a barokk építészetéről nevezetes.", "Az Óbudai-sziget ad otthont a Sziget Fesztiválnak."],
      ro: ["Casa orașului antic roman Aquincum.", "Deține două amfiteatre romane.", "Piața principală este cunoscută pentru arhitectura sa barocă.", "Gazda Festivalului Sziget pe insula Óbuda."],
      en: ["Home to the ancient Roman city of Aquincum.", "Features two Roman amphitheaters.", "The main square is famous for its Baroque architecture.", "Host to the Sziget Festival on Óbuda Island."]
    }
  },
  {
    id: "city-ujpest-extra",
    type: "city",
    parent: "HU-BU",
    coords: [19.09, 47.56],
    name: { de: "Újpest", hu: "Újpest", ro: "Újpest", en: "Újpest" },
    description: {
      de: "Újpest ist ein lebendiger Stadtteil im Norden von Budapest, bekannt für seine Industriegeschichte und seinen Fußballverein.",
      hu: "Újpest egy élettel teli kerület Budapest északi részén, amely ipari múltjáról és futballcsapatáról ismert.",
      ro: "Újpest este un sector vibrant din nordul Budapestei, cunoscut pentru istoria sa industrială și clubul său de fotbal.",
      en: "Újpest is a vibrant district in northern Budapest, known for its industrial history and football club."
    },
    descriptionAdvanced: {
      de: "Újpest wurde im 19. Jahrhundert als Industriezentrum gegründet und im Jahr 1950 an Budapest angeschlossen. Der Stadtteil beherbergt den Újpest FC, einen der ältesten und erfolgreichsten Fußballvereine Ungarns. Das Rathaus von Újpest ist ein beeindruckendes Beispiel für eklektische Architektur und steht im Zentrum des Bezirks.",
      hu: "Újpestet a 19. században alapították ipari központként, és 1950-ben csatolták Budapesthez. A kerület ad otthont az Újpest FC-nek, Magyarország egyik legrégebbi és legsikeresebb futballcsapatának. Az újpesti városháza az eklektikus építészet lenyűgöző példája, és a kerület központjában áll.",
      ro: "Újpest a fost fondat în secolul al XIX-lea ca centru industrial și a fost anexat Budapestei în 1950. Sectorul găzduiește Újpest FC, unul dintre cele mai vechi și mai de succes cluburi de fotbal din Ungaria. Primăria din Újpest este un exemplu impresionant de arhitectură eclectică și se află în centrul districtului.",
      en: "Újpest was founded in the 19th century as an industrial center and was annexed to Budapest in 1950. The district is home to Újpest FC, one of Hungary's oldest and most successful football clubs. The Újpest City Hall is a stunning example of eclectic architecture and stands at the heart of the district."
    },
    facts: {
      de: ["Gegründet im Jahr 1840.", "Bekannt für den Fußballverein Újpest FC.", "Besitzt ein prächtiges eklektisches Rathaus.", "Einst ein Zentrum der Leder- und Möbelindustrie."],
      hu: ["1840-ben alapították.", "Az Újpest FC futballcsapatáról híres.", "Gyönyörű eklektikus városházája van.", "Egykor a bőr- és bútoripar központja volt."],
      ro: ["Fondat în anul 1840.", "Cunoscut pentru clubul de fotbal Újpest FC.", "Deține o primărie eclectică magnifică.", "Odată un centru al industriei pielăriei și mobilei."],
      en: ["Founded in 1840.", "Known for the Újpest FC football club.", "Has a magnificent eclectic city hall.", "Once a center for the leather and furniture industry."]
    }
  },
  {
    id: "geo-gellert-hegy-extra",
    type: "geo",
    parent: "HU-BU",
    coords: [19.047, 47.486],
    name: { de: "Gellértberg", hu: "Gellért-hegy", ro: "Dealul Gellért", en: "Gellért Hill" },
    description: {
      de: "Der Gellértberg bietet den besten Panoramablick über Budapest und beherbergt die Citadella.",
      hu: "A Gellért-hegy kínálja a legjobb panorámát Budapestre, és itt található a Citadella is.",
      ro: "Dealul Gellért oferă cea mai bună vedere panoramică asupra Budapestei și găzduiește Citadela.",
      en: "Gellért Hill offers the best panoramic view over Budapest and is home to the Citadella."
    },
    descriptionAdvanced: {
      de: "Der 235 Meter hohe Gellértberg erhebt sich am Donauufer in Buda. Er wurde nach dem Heiligen Gellért benannt, der dort den Märtyrertod starb. Auf dem Gipfel befindet sich die Citadella, eine Festung aus dem 19. Jahrhundert, sowie die Freiheitsstatue, die von fast überall in der Stadt aus sichtbar ist. Der Berg gehört zum UNESCO-Welterbe.",
      hu: "A 235 méter magas Gellért-hegy a Duna partján magasodik Budán. Szent Gellértről nevezték el, aki itt halt mártírhalált. A hegytetőn található a Citadella, egy 19. századi erőd, valamint a Szabadság-szobor, amely a város szinte minden pontjáról látható. A hegy az UNESCO Világörökség része.",
      ro: "Dealul Gellért, înalt de 235 de metri, se ridică pe malul Dunării în Buda. A fost numit după Sfântul Gellért, care a murit acolo ca martir. În vârf se află Citadela, o fortăreață din secolul al XIX-lea, precum și Statuia Libertății, care este vizibilă de aproape oriunde din oraș. Dealul face parte din patrimoniul mondial UNESCO.",
      en: "The 235-meter-high Gellért Hill rises on the banks of the Danube in Buda. It was named after Saint Gellért, who died there as a martyr. At the summit is the Citadella, a 19th-century fortress, and the Liberty Statue, which is visible from almost everywhere in the city. The hill is a UNESCO World Heritage site."
    },
    facts: {
      de: ["UNESCO-Welterbestätte.", "235 Meter hoch.", "Beherbergt die Freiheitsstatue.", "Bekannt für seine natürlichen Höhlen."],
      hu: ["UNESCO Világörökségi helyszín.", "235 méter magas.", "Itt áll a Szabadság-szobor.", "Természetes barlangjairól is ismert."],
      ro: ["Sit al patrimoniului mondial UNESCO.", "235 de metri înălțime.", "Găzduiește Statuia Libertății.", "Cunoscut pentru peșterile sale naturale."],
      en: ["UNESCO World Heritage site.", "235 meters high.", "Home to the Liberty Statue.", "Known for its natural caves."]
    }
  },
  {
    id: "geschichte-citadella-extra",
    type: "geschichte",
    parent: "HU-BU",
    coords: [19.047, 47.487],
    name: { de: "Citadella", hu: "Citadella", ro: "Citadela", en: "Citadella" },
    description: {
      de: "Die Citadella ist eine historische Festung auf dem Gipfel des Gellértbergs in Budapest.",
      hu: "A Citadella egy történelmi erőd a Gellért-hegy tetején, Budapesten.",
      ro: "Citadela este o fortăreață istorică aflată în vârful dealului Gellért din Budapesta.",
      en: "The Citadella is a historic fortress on top of Gellért Hill in Budapest."
    },
    descriptionAdvanced: {
      de: "Die Citadella wurde 1854 von den Habsburgern erbaut, um die Stadt nach der ungarischen Revolution von 1848 zu kontrollieren. Sie ist etwa 220 Meter lang und hat 4 Meter dicke Mauern. Heute ist sie ein beliebtes Touristenziel mit Museen und einem atemberaubenden Ausblick auf die Donau und die Stadt.",
      hu: "A Citadellát a Habsburgok építtették 1854-ben, hogy ellenőrizzék a várost az 1848-as forradalom után. Körülbelül 220 méter hosszú, falai pedig 4 méter vastagok. Ma népszerű turisztikai célpont múzeumokkal és lenyűgöző kilátással a Dunára és a városra.",
      ro: "Citadela a fost construită de habsburgi în 1854 pentru a controla orașul după Revoluția Maghiară din 1848. Are aproximativ 220 de metri lungime și ziduri groase de 4 metri. Astăzi este o destinație turistică populară, cu muzee și o vedere uluitoare asupra Dunării și a orașului.",
      en: "The Citadella was built by the Habsburgs in 1854 to control the city after the Hungarian Revolution of 1848. It is about 220 meters long and has 4-meter-thick walls. Today, it is a popular tourist destination with museums and a breathtaking view of the Danube and the city."
    },
    facts: {
      de: ["Erbaut von den Habsburgern.", "Strategischer Aussichtspunkt.", "Beherbergt Ausstellungen zum Zweiten Weltkrieg.", "Teil des UNESCO-Welterbes."],
      hu: ["A Habsburgok építtették.", "Stratégiai kilátópont.", "Második világháborús kiállításoknak ad otthont.", "Az UNESCO Világörökség része."],
      ro: ["Construită de habsburgi.", "Punct de observație strategic.", "Găzduiește expoziții despre cel de-al Doilea Război Mondial.", "Parte a patrimoniului mondial UNESCO."],
      en: ["Built by the Habsburgs.", "Strategic viewpoint.", "Houses World War II exhibitions.", "Part of the UNESCO World Heritage."]
    }
  },
  {
    id: "geschichte-vajdahunyad-vara-extra",
    type: "geschichte",
    parent: "HU-BU",
    coords: [19.082, 47.514],
    name: { de: "Burg Vajdahunyad", hu: "Vajdahunyad vára", ro: "Castelul Vajdahunyad", en: "Vajdahunyad Castle" },
    description: {
      de: "Ein märchenhaftes Schloss im Stadtwäldchen, das verschiedene ungarische Baustile vereint.",
      hu: "Egy mesebeli vár a Városligetben, amely különböző magyar építészeti stílusokat ötvöz.",
      ro: "Un castel de poveste în Parcul Orașului, care îmbină diverse stiluri arhitecturale maghiare.",
      en: "A fairytale castle in the City Park, combining various Hungarian architectural styles."
    },
    descriptionAdvanced: {
      de: "Die Burg Vajdahunyad wurde 1896 für die Milleniumsausstellung erbaut, um die 1000-jährige Geschichte Ungarns zu feiern. Ursprünglich aus Holz und Pappe errichtet, war sie so beliebt, dass sie später aus Stein neu gebaut wurde. Die Burg zeigt Kopien berühmter Gebäude aus dem historischen Ungarn, darunter die Burg von Hunedoara (Hunyadi-Burg) in Siebenbürgen.",
      hu: "A Vajdahunyad vára 1896-ban épült a millenniumi kiállításra, Magyarország 1000 éves történelmének megünneplésére. Eredetileg fából és kartonból készült, de annyira népszerű volt, hogy később kőből újjáépítették. A vár a történelmi Magyarország híres épületeinek másolatait mutatja be, köztük az erdélyi Vajdahunyad várát.",
      ro: "Castelul Vajdahunyad a fost construit în 1896 pentru expoziția milenară, celebrând cei 1000 de ani de istorie ai Ungariei. Construit inițial din lemn și carton, a fost atât de popular încât a fost reconstruit ulterior din piatră. Castelul prezintă copii ale unor clădiri faimoase din Ungaria istorică, inclusiv Castelul Huniazilor din Transilvania.",
      en: "Vajdahunyad Castle was built in 1896 for the Millennial Exhibition to celebrate 1000 years of Hungarian history. Originally made of wood and cardboard, it was so popular that it was later rebuilt in stone. The castle features copies of famous buildings from historical Hungary, including the Castle of Hunedoara (Hunyadi Castle) in Transylvania."
    },
    facts: {
      de: ["Beherbergt das Landwirtschaftsmuseum.", "Kombiniert Romanik, Gotik, Renaissance und Barock.", "Steht auf einer Insel im Stadtwäldchen-See.", "Davor steht die Statue von 'Anonymus'."],
      hu: ["A Mezőgazdasági Múzeumnak ad otthont.", "Ötvözi a román, gótikus, reneszánsz és barokk stílusokat.", "A Városligeti-tó egyik szigetén áll.", "Előtte áll Anonymus szobra."],
      ro: ["Găzduiește Muzeul Agriculturii.", "Combină stilurile romanic, gotic, renașcentist și baroc.", "Se află pe o insulă în lacul din Parcul Orașului.", "În fața sa se află statuia lui 'Anonymus'."],
      en: ["Houses the Museum of Agriculture.", "Combines Romanesque, Gothic, Renaissance, and Baroque styles.", "Stands on an island in the City Park lake.", "The statue of 'Anonymus' stands in front of it."]
    }
  },
  // HU-BA: Baranya
  {
    id: "city-komlo-extra",
    type: "city",
    parent: "HU-BA",
    coords: [18.26, 46.19],
    name: { de: "Komló", hu: "Komló", ro: "Komló", en: "Komló" },
    description: {
      de: "Komló ist eine ehemalige Bergbaustadt im Mecsek-Gebirge.",
      hu: "Komló egykori bányászváros a Mecsek hegységben.",
      ro: "Komló este un fost oraș minier din munții Mecsek.",
      en: "Komló is a former mining town in the Mecsek Mountains."
    },
    descriptionAdvanced: {
      de: "Komló entwickelte sich im 20. Jahrhundert zu einem bedeutenden Zentrum des Steinkohlebergbaus in Ungarn. Nach der Schließung der Minen hat sich die Stadt zu einem Tor zum wunderschönen Mecsek-Gebirge gewandelt. Die Umgebung bietet zahlreiche Wanderwege und Naturerlebnisse.",
      hu: "Komló a 20. században Magyarország egyik jelentős feketekőszén-bányászati központjává fejlődött. A bányák bezárása után a város a gyönyörű Mecsek hegység kapujává vált. A környék számos túraútvonalat és természeti élményt kínál.",
      ro: "Komló s-a dezvoltat într-un centru important de minierit al cărbunelui în Ungaria în secolul al XX-lea. După închiderea minelor, orașul s-a transformat într-o poartă către minunații munți Mecsek. Împrejurimile oferă numeroase trasee de drumeție și experiențe în natură.",
      en: "Komló developed into a significant center for hard coal mining in Hungary during the 20th century. After the mines closed, the town transformed into a gateway to the beautiful Mecsek Mountains. The surrounding area offers numerous hiking trails and nature experiences."
    },
    facts: {
      de: ["Ehemaliges Bergbauzentrum.", "Liegt im Mecsek-Gebirge.", "Zweitgrößte Stadt im Komitat Baranya.", "Bekannt für das Komlóer Mini-Zoo."],
      hu: ["Egykori bányászati központ.", "A Mecsek hegységben fekszik.", "Baranya vármegye második legnagyobb városa.", "Az úti cél az újkori Komlói Mini Zoo."],
      ro: ["Fost centru minier.", "Situat în munții Mecsek.", "Al doilea oraș ca mărime din județul Baranya.", "Cunoscut pentru Mini Zoo din Komló."],
      en: ["Former mining center.", "Located in the Mecsek Mountains.", "Second largest city in Baranya county.", "Known for the Komló Mini Zoo."]
    }
  },
  {
    id: "city-szentlorinc-extra",
    type: "city",
    parent: "HU-BA",
    coords: [17.98, 46.04],
    name: { de: "Szentlőrinc", hu: "Szentlőrinc", ro: "Szentlőrinc", en: "Szentlőrinc" },
    description: {
      de: "Szentlőrinc ist eine charmante Kleinstadt in der Nähe von Pécs.",
      hu: "Szentlőrinc egy hangulatos kisváros Pécs közelében.",
      ro: "Szentlőrinc este un orășel fermecător lângă Pécs.",
      en: "Szentlőrinc is a charming small town near Pécs."
    },
    descriptionAdvanced: {
      de: "Szentlőrinc liegt in der Baranya-Ebene und ist bekannt für seine Landwirtschaftsmessen. Die Stadt dient als lokales Zentrum für die umliegenden Dörfer und bietet eine ruhige, ländliche Atmosphäre mit guter Anbindung an die Regionalhauptstadt Pécs.",
      hu: "Szentlőrinc a Baranyai-síkságon fekszik, és mezőgazdasági vásárairól ismert. A város a környező falvak helyi központjaként szolgál, nyugodt, vidéki hangulatot kínálva, jó összeköttetéssel a vármegyeszékhelyhez, Pécshez.",
      ro: "Szentlőrinc se află în Câmpia Baranya și este cunoscut pentru târgurile sale agricole. Orașul servește ca centru local pentru satele din jur, oferind o atmosferă rurală liniștită, cu legături bune către capitala regională Pécs.",
      en: "Szentlőrinc is located in the Baranya Plain and is known for its agricultural fairs. The town serves as a local center for the surrounding villages, offering a quiet, rural atmosphere with good connections to the regional capital, Pécs."
    },
    facts: {
      de: ["Austragungsort der Szentlőrinc-Landwirtschaftstage.", "Wichtiger Eisenbahnknotenpunkt.", "Liegt westlich von Pécs.", "Hat eine reiche landwirtschaftliche Tradition."],
      hu: ["A Szentlőrinci Gazdanapok helyszíne.", "Fontos vasúti csomópont.", "Pécstől nyugatra fekszik.", "Gazdag mezőgazdasági hagyományokkal rendelkezik."],
      ro: ["Gazda Zilelor Fermierilor din Szentlőrinc.", "Nod feroviar important.", "Situat la vest de Pécs.", "Are o bogată tradiție agricolă."],
      en: ["Host of the Szentlőrinc Farmers' Days.", "Important railway junction.", "Located west of Pécs.", "Has a rich agricultural tradition."]
    }
  },
  {
    id: "geo-mecsek-extra",
    type: "geo",
    parent: "HU-BA",
    coords: [18.23, 46.15],
    name: { de: "Mecsek", hu: "Mecsek", ro: "Mecsek", en: "Mecsek" },
    description: {
      de: "Das Mecsek ist ein Mittelgebirge in Südungarn, bekannt für seine Wälder und Höhlen.",
      hu: "A Mecsek egy középhegység Dél-Magyarországon, erdőiről és barlangjairól ismert.",
      ro: "Mecsek este un lanț muntos de înălțime medie din sudul Ungariei, cunoscut pentru pădurile și peșterile sale.",
      en: "The Mecsek is a medium-height mountain range in southern Hungary, known for its forests and caves."
    },
    descriptionAdvanced: {
      de: "Das Mecsek-Gebirge erstreckt sich über das Komitat Baranya und bietet eine einzigartige Flora und Fauna. Sein höchster Punkt ist der Zengő (682 m). Die Region ist reich an Bodenschätzen, darunter Uran und Kohle, und ist heute ein beliebtes Ziel für Wanderer und Naturliebhaber. In den Tälern liegen malerische Dörfer und historische Klöster.",
      hu: "A Mecsek hegység Baranya vármegyében terül el, egyedülálló flórát és faunát kínálva. Legmagasabb pontja a Zengő (682 m). A régió gazdag ásványkincsekben, köztük uránban és szénben, ma pedig a túrázók és természetbarátok kedvelt célpontja. Völgyeiben festői falvak és történelmi kolostorok bújnak meg.",
      ro: "Munții Mecsek se întind în județul Baranya și oferă o floră și faună unică. Cel mai înalt punct este Zengő (682 m). Regiunea este bogată în resurse minerale, inclusiv uraniu și cărbune, iar astăzi este o destinație populară pentru drumeți și iubitorii de natură. În văile sale se află sate pitorești și mănăstiri istorice.",
      en: "The Mecsek Mountains stretch across Baranya county, offering unique flora and fauna. Its highest point is Zengő (682 m). The region is rich in mineral resources, including uranium and coal, and is today a popular destination for hikers and nature lovers. Picturesque villages and historic monasteries lie in its valleys."
    },
    facts: {
      de: ["Höchster Punkt ist der Zengő (682 m).", "Beherbergt die Abaliget-Höhle.", "Bekannt für das submediterrane Klima.", "Reich an Flora und Fauna."],
      hu: ["Legmagasabb pontja a Zengő (682 m).", "Itt található az Abaligeti-barlang.", "Szubmediterrán éghajlatáról ismert.", "Gazdag növény- és állatvilággal rendelkezik."],
      ro: ["Cel mai înalt punct este Zengő (682 m).", "Găzduiește peștera Abaliget.", "Cunoscut pentru climatul submediteranean.", "Bogat în floră și faună."],
      en: ["Highest point is Zengő (682 m).", "Home to the Abaliget Cave.", "Known for its sub-Mediterranean climate.", "Rich in flora and fauna."]
    }
  },
  {
    id: "geschichte-pecsvaradi-var-extra",
    type: "geschichte",
    parent: "HU-BA",
    coords: [18.47, 46.16],
    name: { de: "Burg von Pécsvárad", hu: "Pécsváradi vár", ro: "Cetatea Pécsvárad", en: "Pécsvárad Castle" },
    description: {
      de: "Eine mittelalterliche Burg und ehemalige Benediktinerabtei am Fuße des Mecsek.",
      hu: "Középkori vár és egykori bencés apátság a Mecsek lábánál.",
      ro: "O cetate medievală și fostă abație benedictină la poalele munților Mecsek.",
      en: "A medieval castle and former Benedictine abbey at the foot of the Mecsek."
    },
    descriptionAdvanced: {
      de: "Die Burg von Pécsvárad wurde im 10. Jahrhundert gegründet und war eine der ersten christlichen Zentren in Ungarn. Die Benediktinerabtei spielte eine entscheidende Rolle bei der Bekehrung der Ungarn. Die Burgruine beherbergt heute eine Kapelle mit byzantinischen Fresken und ein Museum.",
      hu: "A pécsváradi várat a 10. században alapították, és Magyarország egyik első keresztény központja volt. A bencés apátság döntő szerepet játszott a magyarok megtérítésében. A várrom ma egy bizánci freskókkal díszített kápolnának és egy múzeumnak ad otthont.",
      ro: "Cetatea Pécsvárad a fost fondată în secolul al X-lea și a fost unul dintre primele centre creștine din Ungaria. Abația benedictină a jucat un rol crucial în convertirea maghiarilor. Ruinele cetății găzduiesc astăzi o capelă cu fresce bizantine și un muzeu.",
      en: "Pécsvárad Castle was founded in the 10th century and was one of the first Christian centers in Hungary. The Benedictine abbey played a crucial role in the conversion of the Hungarians. The castle ruins now house a chapel with Byzantine frescoes and a museum."
    },
    facts: {
      de: ["Gegründet um 998.", "Ehemalige Benediktinerabtei.", "Besitzt fresken aus dem 11. Jahrhundert.", "Bekannt für seine Schlosskapelle."],
      hu: ["998 körül alapították.", "Egykor bencés apátság.", "11. századi freskókkal rendelkezik.", "Várkápolnájáról híres."],
      ro: ["Fondată în jurul anului 998.", "Fostă abație benedictină.", "Deține fresce din secolul al XI-lea.", "Cunoscută pentru capela castelului."],
      en: ["Founded around 998.", "Former Benedictine abbey.", "Features 11th-century frescoes.", "Famous for its castle chapel."]
    }
  },
  {
    id: "geschichte-mecseknadasdi-templom-extra",
    type: "geschichte",
    parent: "HU-BA",
    coords: [18.46, 46.22],
    name: { de: "Árpád-Zeit Kirche Mecseknádasd", hu: "Mecseknádasdi Árpád-kori templom", ro: "Biserica din epoca Arpadiană Mecseknádasd", en: "Árpád-era Church Mecseknádasd" },
    description: {
      de: "Eine kleine, gut erhaltene Kirche aus der Árpád-Zeit in Mecseknádasd.",
      hu: "Egy kis méretű, jó állapotban megmaradt Árpád-kori templom Mecseknádasdon.",
      ro: "O biserică mică, bine conservată, din epoca Arpadiană în Mecseknádasd.",
      en: "A small, well-preserved church from the Árpád era in Mecseknádasd."
    },
    descriptionAdvanced: {
      de: "Die St.-Stephans-Kirche in Mecseknádasd stammt aus dem 13. Jahrhundert und ist ein bedeutendes Denkmal der romanischen Architektur in Ungarn. Die Kirche steht auf einem Hügel über dem Dorf und ist von einem historischen Friedhof umgeben. Sie bewahrt mittelalterliche Wandmalereien und eine einzigartige Atmosphäre.",
      hu: "A mecseknádasdi Szent István-templom a 13. századból származik, és a román kori építészet jelentős emléke Magyarországon. A templom a falu feletti dombon áll, és egy történelmi temető veszi körül. Középkori falfestményeket és egyedülálló hangulatot őriz.",
      ro: "Biserica Sfântul Ștefan din Mecseknádasd datează din secolul al XIII-lea și este un monument important al arhitecturii romanice din Ungaria. Biserica se află pe un deal deasupra satului și este înconjurată de un cimitir istoric. Păstrează picturi murale medievale și o atmosferă unică.",
      en: "The St. Stephen's Church in Mecseknádasd dates from the 13th century and is a significant monument of Romanesque architecture in Hungary. The church stands on a hill above the village and is surrounded by a historic cemetery. It preserves medieval wall paintings and a unique atmosphere."
    },
    facts: {
      de: ["Erbaut im 13. Jahrhundert.", "Romanischer Stil.", "Bedeutendes Baudenkmal.", "Umgeben von alten Grabsteinen."],
      hu: ["A 13. században épült.", "Román stílusú.", "Jelentős műemlék.", "Régi sírkövek veszik körül."],
      ro: ["Construită în secolul al XIII-lea.", "Stil romanic.", "Monument arhitectural important.", "Înconjurată de pietre funerare vechi."],
      en: ["Built in the 13th century.", "Romanesque style.", "Significant architectural monument.", "Surrounded by old gravestones."]
    }
  },
  // HU-BK: Bács-Kiskun
  {
    id: "city-kiskunhalas-extra",
    type: "city",
    parent: "HU-BK",
    coords: [19.48, 46.43],
    name: { de: "Kiskunhalas", hu: "Kiskunhalas", ro: "Kiskunhalas", en: "Kiskunhalas" },
    description: {
      de: "Kiskunhalas ist weltberühmt für seine handgefertigte Spitze.",
      hu: "Kiskunhalas világhírű a kézzel készített csipkéjéről.",
      ro: "Kiskunhalas este faimos în întreaga lume pentru dantela sa lucrată manual.",
      en: "Kiskunhalas is world-famous for its handmade lace."
    },
    descriptionAdvanced: {
      de: "Kiskunhalas liegt zwischen der Donau und der Theiß. Das Halaser Spitzenhaus ist das kulturelle Zentrum der Stadt, wo die jahrhundertealte Tradition der Spitzenherstellung bewahrt wird. Die Stadt hat auch bedeutende Thermalbäder und eine reiche protestantische Kirchengeschichte.",
      hu: "Kiskunhalas a Duna és a Tisza között fekszik. A Halasi Csipkeház a város kulturális központja, ahol a csipkekészítés évszázados hagyományát őrzik. A város jelentős termálfürdővel és gazdag protestáns egyháztörténettel is rendelkezik.",
      ro: "Kiskunhalas se află între Dunăre și Tisa. Casa Dantelei din Halas este centrul cultural al orașului, unde se păstrează tradiția seculară a fabricării dantelei. Orașul are, de asemenea, băi termale importante și o bogată istorie a bisericii protestante.",
      en: "Kiskunhalas is located between the Danube and the Tisza rivers. The Halas Lace House is the cultural center of the city, where the centuries-old tradition of lace-making is preserved. The city also has significant thermal baths and a rich Protestant church history."
    },
    facts: {
      de: ["Heimat der Halaser Spitze.", "Besitzt ein Spitzenmuseum.", "Bedeutendes Thermalbad.", "Liegt in der Großen Ungarischen Tiefebene."],
      hu: ["A halasi csipke hazája.", "Csipkemúzeummal rendelkezik.", "Jelentős termálfürdője van.", "Az Alföldön fekszik."],
      ro: ["Patria dantelei din Halas.", "Deține un muzeu al dantelei.", "Baie termală importantă.", "Situat în Marea Câmpie Ungară."],
      en: ["Home of the Halas Lace.", "Has a lace museum.", "Significant thermal bath.", "Located in the Great Hungarian Plain."]
    }
  },
  {
    id: "city-lajosmizse-extra",
    type: "city",
    parent: "HU-BK",
    coords: [19.55, 47.02],
    name: { de: "Lajosmizse", hu: "Lajosmizse", ro: "Lajosmizse", en: "Lajosmizse" },
    description: {
      de: "Lajosmizse ist bekannt für seine Gastfreundschaft und traditionellen ungarischen Csárdas.",
      hu: "Lajosmizse a vendégszeretetéről és a hagyományos magyar csárdákról ismert.",
      ro: "Lajosmizse este cunoscut pentru ospitalitatea sa și csárda-urile tradiționale maghiare.",
      en: "Lajosmizse is known for its hospitality and traditional Hungarian csárdas (inns)."
    },
    descriptionAdvanced: {
      de: "Lajosmizse ist ein wichtiges Zentrum des Reittourismus in Ungarn. Die Stadt ist berühmt für ihre Pferdevorführungen und die authentische Puszta-Atmosphäre. Viele Besucher kommen hierher, um die traditionelle ungarische Küche in den örtlichen Csárdas zu genießen.",
      hu: "Lajosmizse a lovasturizmus egyik fontos központja Magyarországon. A város híres lovasbemutatóiról és az autentikus pusztai hangulatról. Sok látogató érkezik ide, hogy élvezze a hagyományos magyar konyhát a helyi csárdákban.",
      ro: "Lajosmizse este un centru important al turismului ecvestru în Ungaria. Orașul este faimos pentru spectacolele sale de călărie și atmosfera autentică de puszta. Mulți vizitatori vin aici pentru a se bucura de bucătăria tradițională maghiară în csárda-urile locale.",
      en: "Lajosmizse is an important center for equestrian tourism in Hungary. The town is famous for its horse shows and the authentic Puszta atmosphere. Many visitors come here to enjoy traditional Hungarian cuisine in the local csárdas (inns)."
    },
    facts: {
      de: ["Zentrum des Reittourismus.", "Berühmt für Pferdevorführungen.", "Traditionelle Csárdas (Wirtshäuser).", "Tor zur Puszta."],
      hu: ["A lovasturizmus központja.", "Híres lovasbemutatóiról.", "Hagyományos csárdák.", "A Puszta kapuja."],
      ro: ["Centru al turismului ecvestru.", "Faimos pentru spectacolele de călărie.", "Csárda-uri tradiționale.", "Poarta către Puszta."],
      en: ["Center for equestrian tourism.", "Famous for horse shows.", "Traditional csárdas (inns).", "Gateway to the Puszta."]
    }
  },
  {
    id: "geo-kiskunsagi-nemzeti-park-extra",
    type: "geo",
    parent: "HU-BK",
    coords: [19.41, 46.85],
    name: { de: "Kiskunság-Nationalpark", hu: "Kiskunsági Nemzeti Park", ro: "Parcul Național Kiskunság", en: "Kiskunság National Park" },
    description: {
      de: "Ein Nationalpark, der die einzigartige Puszta-Landschaft zwischen Donau und Theiß schützt.",
      hu: "Nemzeti park, amely a Duna és a Tisza közötti egyedülálló pusztai tájat védi.",
      ro: "Un parc național care protejează peisajul unic de puszta dintre Dunăre și Tisa.",
      en: "A national park protecting the unique Puszta landscape between the Danube and Tisza rivers."
    },
    descriptionAdvanced: {
      de: "Der Kiskunság-Nationalpark wurde 1975 gegründet und besteht aus mehreren getrennten Gebieten. Er bewahrt Alkaliseen, Sanddünen und die typische Steppenlandschaft (Puszta). Der Park ist ein wichtiges Vogelschutzgebiet und beherbergt traditionelle ungarische Haustierrassen wie das Graurind.",
      hu: "A Kiskunsági Nemzeti Parkot 1975-ben alapították, és több különálló egységből áll. Szikes tavakat, homokbuckákat és a jellegzetes pusztai tájat őrzi. A park fontos madárvédelmi terület, és olyan hagyományos magyar állatfajtáknak ad otthont, mint a szürkemarha.",
      ro: "Parcul Național Kiskunság a fost fondat în 1975 și constă din mai multe zone separate. Acesta păstrează lacuri alcaline, dune de nisip și peisajul tipic de stepă (puszta). Parcul este o zonă importantă de protecție a păsărilor și găzduiește rase tradiționale de animale domestice maghiare, cum ar fi vitele sure.",
      en: "The Kiskunság National Park was founded in 1975 and consists of several separate areas. It preserves alkali lakes, sand dunes, and the typical steppe landscape (Puszta). The park is an important bird sanctuary and is home to traditional Hungarian domestic animal breeds such as the Grey Cattle."
    },
    facts: {
      de: ["Gegründet 1975.", "Besteht aus 9 getrennten Gebieten.", "Bekannt für Sanddünen und Alkaliseen.", "Heimat des ungarischen Graurinds."],
      hu: ["1975-ben alapították.", "9 különálló egységből áll.", "Homokbuckáiról és szikes tavairól ismert.", "A magyar szürkemarha hazája."],
      ro: ["Fondat în 1975.", "Constă din 9 zone separate.", "Cunoscut pentru dunele de nisip și lacurile alcaline.", "Patria vitelor sure maghiare."],
      en: ["Founded in 1975.", "Consists of 9 separate areas.", "Known for sand dunes and alkali lakes.", "Home to the Hungarian Grey Cattle."]
    }
  },
  {
    id: "geschichte-cifrapalota-extra",
    type: "geschichte",
    parent: "HU-BK",
    coords: [19.69, 46.91],
    name: { de: "Cifrapalota", hu: "Cifrapalota", ro: "Cifrapalota", en: "Cifrapalota" },
    description: {
      de: "Ein prächtiges Sezessionsgebäude in Kecskemét, bekannt für seine bunte Zsolnay-Keramik.",
      hu: "Pompás szecessziós épület Kecskeméten, amely színes Zsolnay-kerámiáiról ismert.",
      ro: "O clădire magnifică în stil Secession în Kecskemét, cunoscută pentru ceramica sa colorată Zsolnay.",
      en: "A magnificent Secessionist building in Kecskemét, known for its colorful Zsolnay ceramics."
    },
    descriptionAdvanced: {
      de: "Die Cifrapalota (wörtlich: Schmuckpalast) wurde 1902 erbaut und ist eines der schönsten Beispiele des ungarischen Jugendstils. Die Fassade ist reich mit farbenfrohen Keramikelementen der Zsolnay-Manufaktur geschmückt. Heute beherbergt das Gebäude die Kecskeméter Kunstgalerie.",
      hu: "A Cifrapalota 1902-ben épült, és a magyar szecessziós építészet egyik legszebb példája. Homlokzatát a Zsolnay-manufaktúra színes kerámiaelemei díszítik gazdagon. Ma az épület a Kecskeméti Képtárnak ad otthont.",
      ro: "Cifrapalota (literalmente: Palatul Împroșcat) a fost construit în 1902 și este unul dintre cele mai frumoase exemple ale stilului Secession maghiar. Fațada este bogat decorată cu elemente ceramice colorate de la manufactura Zsolnay. Astăzi, clădirea găzduiește Galeria de Artă din Kecskemét.",
      en: "The Cifrapalota (literally: Ornamental Palace) was built in 1902 and is one of the most beautiful examples of Hungarian Secessionist architecture. The facade is richly decorated with colorful ceramic elements from the Zsolnay manufacture. Today, the building houses the Kecskemét Art Gallery."
    },
    facts: {
      de: ["Meisterwerk des ungarischen Jugendstils.", "Erbaut 1902.", "Geschmückt mit Zsolnay-Keramik.", "Beherbergt eine Kunstgalerie."],
      hu: ["A magyar szecesszió remekműve.", "1902-ben épült.", "Zsolnay-kerámiákkal díszített.", "Művészeti galériának ad otthont."],
      ro: ["Capodoperă a stilului Secession maghiar.", "Construit în 1902.", "Decorat cu ceramică Zsolnay.", "Găzduiește o galerie de artă."],
      en: ["Masterpiece of Hungarian Secession.", "Built in 1902.", "Decorated with Zsolnay ceramics.", "Houses an art gallery."]
    }
  },
  {
    id: "geschichte-kiskun-muzeum-extra",
    type: "geschichte",
    parent: "HU-BK",
    coords: [19.83, 46.71],
    name: { de: "Kiskun-Museum", hu: "Kiskun Múzeum", ro: "Muzeul Kiskun", en: "Kiskun Museum" },
    description: {
      de: "Ein Regionalmuseum in Kiskunfélegyháza, das die Geschichte der Kumanen zeigt.",
      hu: "Regionális múzeum Kiskunfélegyházán, amely a kunok történelmét mutatja be.",
      ro: "Un muzeu regional în Kiskunfélegyháza, care prezintă istoria cumanilor.",
      en: "A regional museum in Kiskunfélegyháza, showcasing the history of the Cumans."
    },
    descriptionAdvanced: {
      de: "Das Kiskun-Museum befindet sich in einem ehemaligen Gefängnisgebäude aus dem 18. Jahrhundert. Es präsentiert die Geschichte und Kultur der Kumanen (Kun), eines Reitervolkes, das sich im Mittelalter in Ungarn niederließ. Besonders beeindruckend ist die Windmühle im Garten des Museums.",
      hu: "A Kiskun Múzeum egy 18. századi egykori börtönépületben található. Bemutatja a kunok történetét és kultúráját, akik a középkorban telepedtek le Magyarországon. Különösen lenyűgöző a múzeum kertjében álló szélmalom.",
      ro: "Muzeul Kiskun se află într-o fostă clădire de închisoare din secolul al XVIII-lea. Prezintă istoria și cultura cumanilor (kun), un popor de călăreți care s-a stabilit în Ungaria în Evul Mediu. Deosebit de impresionantă este moara de vânt din grădina muzeului.",
      en: "The Kiskun Museum is located in a former prison building from the 18th century. It presents the history and culture of the Cumans (Kun), a horse-riding people who settled in Hungary in the Middle Ages. The windmill in the museum's garden is particularly impressive."
    },
    facts: {
      de: ["Sitz in einem alten Gefängnis.", "Präsentiert kumanische Geschichte.", "Besitzt eine historische Windmühle.", "Wichtiges lokales Kulturzentrum."],
      hu: ["Egy régi börtönben működik.", "A kiskunsági történelmet mutatja be.", "Helytörténeti és néprajzi gyűjtemény.", "Kertjében szélmalom látható."],
      ro: ["Sediu într-o veche închisoare.", "Prezintă istoria cumană.", "Deține o moară de vânt istorică.", "Important centru cultural local."],
      en: ["Located in an old prison.", "Presents Cuman history.", "Features a historic windmill.", "Important local cultural center."]
    }
  },
  // HU-BE: Békés
  {
    id: "city-bekes-city-extra",
    type: "city",
    parent: "HU-BE",
    coords: [21.13, 46.77],
    name: { de: "Békés", hu: "Békés", ro: "Békés", en: "Békés" },
    description: {
      de: "Die namensgebende Stadt des Komitats Békés am Ufer der Körös.",
      hu: "Békés vármegye névadó városa a Körös partján.",
      ro: "Orașul care dă numele județului Békés, pe malul râului Körös.",
      en: "The namesake city of Békés county on the banks of the Körös river."
    },
    descriptionAdvanced: {
      de: "Békés ist eine der ältesten Siedlungen der Region und liegt am Zusammenfluss der Weißen und Schwarzen Körös. Die Stadt hat ein ruhiges, kleinstädtisches Flair und ist bekannt für ihre Brücken und die umliegenden Gewässer, die hervorragende Möglichkeiten zum Angeln und Wassersport bieten.",
      hu: "Békés a régió egyik legrégebbi települése, a Fehér- és a Fekete-Körös találkozásánál fekszik. A város nyugodt, kisvárosi hangulattal rendelkezik, hídjairól és a környező vizekről ismert, amelyek kiváló horgászati és vízisportolási lehetőségeket kínálnak.",
      ro: "Békés este una dintre cele mai vechi așezări din regiune, situată la confluența râurilor Körös Alb și Körös Negru. Orașul are o atmosferă liniștită de orășel și este cunoscut pentru podurile sale și apele înconjurătoare, care oferă oportunități excelente pentru pescuit și sporturi nautice.",
      en: "Békés is one of the oldest settlements in the region, located at the confluence of the White and Black Körös rivers. The city has a quiet, small-town atmosphere and is known for its bridges and the surrounding waters, which offer excellent opportunities for fishing and water sports."
    },
    facts: {
      de: ["Namensgeber des Komitats.", "Stadt der Brücken.", "Liegt an der Körös.", "Wichtiges Zentrum für Kanufahrer."],
      hu: ["A vármegye névadója.", "A hidak városa.", "A Körös partján fekszik.", "Fontos kajak-kenu központ."],
      ro: ["Orașul care dă numele județului.", "Orașul podurilor.", "Situat pe râul Körös.", "Centru important pentru canotaj."],
      en: ["Namesake of the county.", "City of bridges.", "Located on the Körös river.", "Important center for canoeing."]
    }
  },
  {
    id: "city-gyomaendrod-extra",
    type: "city",
    parent: "HU-BE",
    coords: [20.82, 46.93],
    name: { de: "Gyomaendrőd", hu: "Gyomaendrőd", ro: "Gyomaendrőd", en: "Gyomaendrőd" },
    description: {
      de: "Gyomaendrőd ist berühmt für seine Thermalbäder und das Kner-Druckereimuseum.",
      hu: "Gyomaendrőd híres termálfürdőjéről és a Kner Nyomdaipari Múzeumról.",
      ro: "Gyomaendrőd este renumit pentru băile sale termale și Muzeul Tipografiei Kner.",
      en: "Gyomaendrőd is famous for its thermal baths and the Kner Printing Museum."
    },
    descriptionAdvanced: {
      de: "Die Stadt entstand durch die Vereinigung von Gyoma und Endrőd. Sie ist ein bedeutendes kulturelles Zentrum der Region, insbesondere durch die Kner-Familie, die die ungarische Buchdruckkunst revolutionierte. Das Liget-Bad bietet Entspannung in Heilwasser, während die Altarme der Körös Naturliebhaber anziehen.",
      hu: "A város Gyoma és Endrőd egyesülésével jött létre. A régió jelentős kulturális központja, különösen a Kner család révén, akik forradalmasították a magyar könyvnyomtatást. A Liget fürdő gyógyvizes kikapcsolódást nyújt, míg a Körös holtágai a természetkedvelőket vonzzák.",
      ro: "Orașul a fost format prin unirea localităților Gyoma și Endrőd. Este un centru cultural important al regiunii, în special datorită familiei Kner, care a revoluționat arta tipografică maghiară. Baia Liget oferă relaxare în apă termală, în timp ce brațele moarte ale râului Körös atrag iubitorii de natură.",
      en: "The city was formed through the merger of Gyoma and Endrőd. It is a significant cultural center of the region, especially through the Kner family, who revolutionized Hungarian book printing. The Liget Bath offers relaxation in medicinal water, while the dead arms of the Körös river attract nature lovers."
    },
    facts: {
      de: ["Heimat der berühmten Kner-Druckerei.", "Besitzt 16 Brücken.", "Bekannt für seine Fischsuppe.", "Bedeutendes Heilbad."],
      hu: ["A híres Kner Nyomda hazája.", "16 híddal rendelkezik.", "Halászlevéről is nevezetes.", "Jelentős gyógyfürdője van."],
      ro: ["Patria faimoasei tipografii Kner.", "Deține 16 poduri.", "Cunoscut pentru ciorba de pește.", "Stațiune balneară importantă."],
      en: ["Home of the famous Kner printing house.", "Has 16 bridges.", "Known for its fish soup.", "Significant medicinal spa."]
    }
  },
  {
    id: "geo-koros-maros-nemzeti-park-extra",
    type: "geo",
    parent: "HU-BE",
    coords: [21.15, 46.5],
    name: { de: "Körös-Maros-Nationalpark", hu: "Körös-Maros Nemzeti Park", ro: "Parcul Național Körös-Maros", en: "Körös-Maros National Park" },
    description: {
      de: "Ein Nationalpark, der die Steppen und Flussauen in Südostungarn schützt.",
      hu: "Nemzeti park, amely a délkelet-magyarországi pusztákat és folyóártereket védi.",
      ro: "Un parc național care protejează stepele și luncile râurilor din sud-estul Ungariei.",
      en: "A national park protecting the steppes and floodplains in southeastern Hungary."
    },
    descriptionAdvanced: {
      de: "Der Körös-Maros-Nationalpark bewahrt die charakteristische Landschaft der Region Tiszántúl. Er beherbergt die größte Trappentrappen-Population Mitteleuropas. Der Park umfasst wichtige Feuchtgebiete entlang der Flüsse Körös und Maros sowie ausgedehnte Salzwiesen.",
      hu: "A Körös-Maros Nemzeti Park a Tiszántúl jellegzetes tájait őrzi. Itt él Közép-Európa legnagyobb túzokpopulációja. A park fontos vizes élőhelyeket foglal magában a Körös és a Maros mentén, valamint kiterjedt szikes pusztákat.",
      ro: "Parcul Național Körös-Maros conservă peisajul caracteristic al regiunii Tiszántúl. Găzduiește cea mai mare populație de dropii din Europa Centrală. Parcul cuprinde zone umede importante de-a lungul râurilor Körös și Maros, precum și puste sărate întinse.",
      en: "The Körös-Maros National Park preserves the characteristic landscape of the Tiszántúl region. It is home to the largest Great Bustard population in Central Europe. The park includes important wetlands along the Körös and Maros rivers as well as extensive salt steppes."
    },
    facts: {
      de: ["Schutzgebiet für die Großtrappe.", "Reiche Vogelwelt.", "Sumpfgebiete und Salzwiesen.", "Bedeutendes Naturschutzgebiet."],
      hu: ["A túzok védett élőhelye.", "Gazdag madárvilág.", "Mocsarak és szikes puszták.", "Jelentős természetvédelmi terület."],
      ro: ["Zonă protejată pentru dropie.", "Lume a păsărilor bogată.", "Zone mlăștinoase și puste sărate.", "Rezervație naturală importantă."],
      en: ["Protected area for the Great Bustard.", "Rich birdlife.", "Marshlands and salt steppes.", "Significant nature reserve."]
    }
  },
  {
    id: "geschichte-wenckheim-kastely-extra",
    type: "geschichte",
    parent: "HU-BE",
    coords: [21.03, 46.71],
    name: { de: "Wenckheim-Schloss", hu: "Wenckheim-kastély", ro: "Castelul Wenckheim", en: "Wenckheim Castle" },
    description: {
      de: "Ein prächtiges neorenaissance Schloss in Szabadkígyós.",
      hu: "Pompás neoreneszánsz kastély Szabadkígyóson.",
      ro: "Un castel magnific în stil neorenașcentist în Szabadkígyós.",
      en: "A magnificent Neo-Renaissance castle in Szabadkígyós."
    },
    descriptionAdvanced: {
      de: "Das Wenckheim-Schloss wurde nach Plänen von Miklós Ybl zwischen 1875 und 1879 erbaut. Es hat so viele Fenster wie Tage im Jahr (365), so viele Zimmer wie Wochen (52) und so viele Eingänge wie Jahreszeiten (4). Es gilt als eines der schönsten Schlösser Ungarns und ist von einem weitläufigen Park umgeben.",
      hu: "A Wenckheim-kastély Ybl Miklós tervei alapján épült 1875 és 1879 között. Annyi ablaka van, ahány nap az évben (365), annyi szobája, ahány hét (52), és annyi bejárata, ahány évszak (4). Magyarország egyik legszebb kastélyaként tartják számon, és hatalmas park veszi körül.",
      ro: "Castelul Wenckheim a fost construit după planurile lui Miklós Ybl între 1875 și 1879. Are atâtea ferestre câte zile are anul (365), atâtea camere câte săptămâni (52) și atâtea intrări câte anotimpuri (4). Este considerat unul dintre cele mai frumoase castele din Ungaria și este înconjurat de un parc vast.",
      en: "The Wenckheim Castle was built according to plans by Miklós Ybl between 1875 and 1879. It has as many windows as there are days in the year (365), as many rooms as weeks (52), and as many entrances as seasons (4). It is considered one of the most beautiful castles in Hungary and is surrounded by an extensive park."
    },
    facts: {
      de: ["Entworfen von Miklós Ybl.", "365 Fenster und 52 Zimmer.", "Neorenaissancestil.", "Wunderschöner Landschaftspark."],
      hu: ["Ybl Miklós tervezte.", "365 ablaka és 52 szobája van.", "Neoreneszánsz stílus.", "Gyönyörű kastélypark."],
      ro: ["Proiectat de Miklós Ybl.", "365 de ferestre și 52 de camere.", "Stil neorenașcentist.", "Parc peisagistic minunat."],
      en: ["Designed by Miklós Ybl.", "365 windows and 52 rooms.", "Neo-Renaissance style.", "Beautiful landscape park."]
    }
  },
  {
    id: "geschichte-geotermikus-kozpont-extra",
    type: "geschichte",
    parent: "HU-BE",
    coords: [21.05, 46.65],
    name: { de: "Geothermisches Zentrum Orosháza", hu: "Orosházi Geotermikus Központ", ro: "Centrul Geotermal Orosháza", en: "Geothermal Center Orosháza" },
    description: {
      de: "Ein modernes Forschungs- und Erlebniszentrum für erneuerbare Energien.",
      hu: "Modern kutató- és élményközpont a megújuló energiákról.",
      ro: "Un centru modern de cercetare și experiență pentru energii regenerabile.",
      en: "A modern research and experience center for renewable energies."
    },
    descriptionAdvanced: {
      de: "Das Geothermische Zentrum in Orosháza-Gyopárosfürdő widmet sich der Nutzung von Erdwärme. Die Region ist reich an geothermischen Ressourcen, die sowohl für die Beheizung als auch für therapeutische Zwecke in den örtlichen Bädern genutzt werden. Das Zentrum bietet interaktive Ausstellungen für Besucher.",
      hu: "Az orosházi geotermikus központ a földhő hasznosításával foglalkozik. A régió gazdag geotermikus forrásokban, amelyeket fűtésre és a helyi fürdőkben gyógyászati célokra is használnak. A központ interaktív kiállításokat kínál a látogatóknak.",
      ro: "Centrul geotermal din Orosháza-Gyopárosfürdő este dedicat utilizării căldurii pământului. Regiunea este bogată în resurse geotermale, care sunt folosite atât pentru încălzire, cât și în scopuri terapeutice în băile locale. Centrul oferă expoziții interactive pentru vizitatori.",
      en: "The Geothermal Center in Orosháza-Gyopárosfürdő is dedicated to the use of geothermal heat. The region is rich in geothermal resources, which are used both for heating and for therapeutic purposes in the local baths. The center offers interactive exhibitions for visitors."
    },
    facts: {
      de: ["Fokus auf erneuerbare Energie.", "Interaktive Ausstellungen.", "Nutzt lokale Erdwärme.", "Modernes Bildungszentrum."],
      hu: ["A megújuló energiára fókuszál.", "Interaktív kiállítások.", "A helyi földhőt hasznosítja.", "Modern oktatási központ."],
      ro: ["Focus pe energia regenerabilă.", "Expoziții interactive.", "Utilizează căldura locală a pământului.", "Centru educațional modern."],
      en: ["Focus on renewable energy.", "Interactive exhibitions.", "Utilizes local geothermal heat.", "Modern educational center."]
    }
  },
  // HU-BZ: Borsod-Abaúj-Zemplén
  {
    id: "city-kazincbarcika-extra",
    type: "city",
    parent: "HU-BZ",
    coords: [20.62, 48.25],
    name: { de: "Kazincbarcika", hu: "Kazincbarcika", ro: "Kazincbarcika", en: "Kazincbarcika" },
    description: {
      de: "Kazincbarcika ist die 'Bunte Stadt', bekannt für ihre Wandmalereien und Industrie.",
      hu: "Kazincbarcika a 'Színes Város', falfestményeiről és iparáról ismert.",
      ro: "Kazincbarcika este 'Orașul Colorat', cunoscut pentru picturile sale murale și industrie.",
      en: "Kazincbarcika is the 'Colorful City', known for its murals and industry."
    },
    descriptionAdvanced: {
      de: "Kazincbarcika war eine geplante sozialistische Industriestadt, hat sich aber in den letzten Jahren durch das Projekt 'KolorCity' komplett gewandelt. Die grauen Fassaden der Plattenbauten wurden durch riesige, farbenfrohe Kunstwerke ersetzt, was die Stadt zu einer Freiluftgalerie macht.",
      hu: "Kazincbarcika egy tervezett szocialista iparváros volt, de az elmúlt években a 'KolorCity' projekt révén teljesen átalakult. A lakótelepek szürke homlokzatait óriási, színes műalkotások váltották fel, így a város egy szabadtéri galériává vált.",
      ro: "Kazincbarcika a fost un oraș industrial socialist planificat, dar s-a transformat complet în ultimii ani prin proiectul 'KolorCity'. Fațadele gri ale blocurilor au fost înlocuite de opere de artă uriașe și colorate, transformând orașul într-o galerie în aer liber.",
      en: "Kazincbarcika was a planned socialist industrial city, but it has completely transformed in recent years through the 'KolorCity' project. The gray facades of the apartment buildings were replaced by huge, colorful artworks, turning the city into an open-air gallery."
    },
    facts: {
      de: ["Bekannt als 'KolorCity'.", "Riesige Wandmalereien (Murals).", "Ehemalige sozialistische Industriestadt.", "Beherbergt das Kolor-Festival."],
      hu: ["'KolorCity' néven is ismert.", "Hatalmas falfestmények (muralok) díszítik.", "Egykori szocialista iparváros.", "A Kolorcity Fesztivál helyszíne."],
      ro: ["Cunoscut sub numele de 'KolorCity'.", "Picturi murale uriașe.", "Fost oraș industrial socialist.", "Găzduiește Festivalul Kolor."],
      en: ["Known as 'KolorCity'.", "Huge murals.", "Former socialist industrial city.", "Hosts the Kolor Festival."]
    }
  },
  {
    id: "city-mezokovesd-extra",
    type: "city",
    parent: "HU-BZ",
    coords: [20.58, 47.81],
    name: { de: "Mezőkövesd", hu: "Mezőkövesd", ro: "Mezőkövesd", en: "Mezőkövesd" },
    description: {
      de: "Das Zentrum der Matyó-Volkskunst und bekannt für das Zsóry-Heilbad.",
      hu: "A Matyó népművészet központja és a Zsóry-fürdőről nevezetes.",
      ro: "Centrul artei populare Matyó și faimos pentru băile termale Zsóry.",
      en: "The center of Matyó folk art and famous for the Zsóry medicinal bath."
    },
    descriptionAdvanced: {
      de: "Mezőkövesd ist die Heimat der Matyó, einer Volksgruppe mit einzigartigen Sticktraditionen, die zum UNESCO-Weltkulturerbe gehören. Das historische Stadtviertel 'Hadas' bewahrt das alte dörfliche Leben. Das Zsóry-Heilbad ist eines der beliebtesten Bäder in Nordungarn.",
      hu: "Mezőkövesd a matyók hazája, akiknek egyedülálló hímzési hagyománya az UNESCO szellemi világörökség része. A 'Hadas' városrész őrzi a régi falusi életformát. A Zsóry-fürdő Észak-Magyarország egyik legnépszerűbb gyógyfürdője.",
      ro: "Mezőkövesd este patria poporului Matyó, a cărui tradiție unică de broderie face parte din patrimoniul mondial UNESCO. Cartierul istoric 'Hadas' păstrează vechea viață rurală. Baia termală Zsóry este una dintre cele mai populare băi din nordul Ungariei.",
      en: "Mezőkövesd is the home of the Matyó, a folk group with unique embroidery traditions that belong to the UNESCO World Heritage. The 'Hadas' historic district preserves the old village life. The Zsóry medicinal bath is one of the most popular baths in northern Hungary."
    },
    facts: {
      de: ["UNESCO-Weltkulturerbe Matyó-Stickerei.", "Besitzt das Zsóry-Heilbad.", "Historisches Viertel 'Hadas'.", "Heimat des Landwirtschaftsmaschinen-Museums."],
      hu: ["Matyó hímzés - UNESCO világörökség.", "Itt található a Zsóry-fürdő.", "Történelmi 'Hadas' városrész.", "Mezőgazdasági Gépmúzeumnak is otthont ad."],
      ro: ["Broderia Matyó - patrimoniu mondial UNESCO.", "Deține băile termale Zsóry.", "Cartierul istoric 'Hadas'.", "Găzduiește Muzeul Mașinilor Agricole."],
      en: ["UNESCO World Heritage Matyó embroidery.", "Features the Zsóry medicinal bath.", "Hadas historic district.", "Home to the Agricultural Machinery Museum."]
    }
  },
  {
    id: "geo-bukk-nemzeti-park-extra",
    type: "geo",
    parent: "HU-BZ",
    coords: [20.52, 48.05],
    name: { de: "Bükk-Nationalpark", hu: "Bükki Nemzeti Park", ro: "Parcul Național Bükk", en: "Bükk National Park" },
    description: {
      de: "Ungarns größter Berg-Nationalpark mit ausgedehnten Buchenwäldern.",
      hu: "Magyarország legnagyobb hegyvidéki nemzeti parkja kiterjedt bükkösökkel.",
      ro: "Cel mai mare parc național montan din Ungaria, cu păduri vaste de fag.",
      en: "Hungary's largest mountainous national park with extensive beech forests."
    },
    descriptionAdvanced: {
      de: "Der Bükk-Nationalpark umfasst das Bükk-Gebirge, ein Kalksteingebirge mit Hunderten von Höhlen. Er ist bekannt für seine reiche Artenvielfalt und spektakuläre Karstlandschaften. Das Bükk-Plateau ist eine einzigartige Hochebene mit alpiner Vegetation. Der Park bietet unzählige Wanderwege und Aussichtspunkte.",
      hu: "A Bükki Nemzeti Park a Bükk-hegységet foglalja magában, amely egy több száz barlanggal rendelkező mészkőhegység. Gazdag biológiai sokféleségéről és látványos karsztformáiról ismert. A Bükk-fennsík egyedülálló magaslati terület alpesi növényzettel. A park számtalan túraútvonalat és kilátót kínál.",
      ro: "Parcul Național Bükk cuprinde munții Bükk, un lanț muntos de calcar cu sute de peșteri. Este cunoscut pentru biodiversitatea sa bogată și peisajele carstice spectaculoase. Platoul Bükk este o zonă înaltă unică cu vegetație alpină. Parcul oferă nenumărate trasee de drumeție și puncte de observație.",
      en: "The Bükk National Park encompasses the Bükk Mountains, a limestone range with hundreds of caves. It is known for its rich biodiversity and spectacular karst landscapes. The Bükk Plateau is a unique high-altitude area with alpine vegetation. The park offers countless hiking trails and viewpoints."
    },
    facts: {
      de: ["Größter Nationalpark Ungarns.", "Hunderte von Höhlen.", "Berühmt für das Bükk-Plateau.", "Reiche Flora und Fauna."],
      hu: ["Magyarország legnagyobb kiterjedésű nemzeti parkja.", "Több száz barlang található itt.", "Híres a Bükk-fennsíkról.", "Gazdag növény- és állatvilág."],
      ro: ["Cel mai mare parc național din Ungaria.", "Sute de peșteri.", "Faimos pentru platoul Bükk.", "Floră și faună bogată."],
      en: ["Largest national park in Hungary.", "Hundreds of caves.", "Famous for the Bükk Plateau.", "Rich flora and fauna."]
    }
  },
  {
    id: "geschichte-fuzeri-var-extra",
    type: "geschichte",
    parent: "HU-BZ",
    coords: [21.46, 48.54],
    name: { de: "Burg von Füzér", hu: "Füzéri vár", ro: "Cetatea Füzér", en: "Füzér Castle" },
    description: {
      de: "Eine spektakuläre mittelalterliche Burg auf einem vulkanischen Gipfel.",
      hu: "Látványos középkori vár egy vulkáni csúcson.",
      ro: "O cetate medievală spectaculoasă pe un vârf vulcanic.",
      en: "A spectacular medieval castle on a volcanic peak."
    },
    descriptionAdvanced: {
      de: "Die Burg von Füzér ist eine der ältesten Steinburgen Ungarns und thront auf einem steilen Vulkankegel in den Zemplén-Bergen. Sie wurde nach der ungarischen Niederlage bei Mohács genutzt, um die ungarische Krone vor den Türken zu verstecken. Die Burg wurde in den letzten Jahren aufwendig restauriert.",
      hu: "A füzéri vár Magyarország egyik legrégebbi kővára, amely a Zempléni-hegység egyik meredek vulkáni kúpján trónol. A mohácsi vész után itt őrizték a Szent Koronát, hogy megmentsék a törököktől. A várat az elmúlt években jelentősen felújították.",
      ro: "Cetatea Füzér este una dintre cele mai vechi cetăți de piatră din Ungaria, situată pe un con vulcanic abrupt în munții Zemplén. A fost folosită după înfrângerea maghiară de la Mohács pentru a ascunde Coroana Sfântă de turci. Cetatea a fost restaurată extensiv în ultimii ani.",
      en: "Füzér Castle is one of Hungary's oldest stone castles, perched on a steep volcanic cone in the Zemplén Mountains. It was used after the Hungarian defeat at Mohács to hide the Holy Crown from the Turks. The castle has been extensively restored in recent years."
    },
    facts: {
      de: ["Erbaut auf einem Vulkankegel.", "Die Heilige Krone wurde hier aufbewahrt.", "Eine der ältesten Burgen Ungarns.", "Bietet eine fantastische Aussicht."],
      hu: ["Vulkáni kúpon épült.", "Itt őrizték a Szent Koronát.", "Magyarország egyik legrégebbi vára.", "Fantasztikus kilátást nyújt."],
      ro: ["Construită pe un con vulcanic.", "Sfânta Coroană a fost păstrată aici.", "Una dintre cele mai vechi cetăți din Ungaria.", "Oferă o vedere fantastică."],
      en: ["Built on a volcanic cone.", "The Holy Crown was kept here.", "One of the oldest castles in Hungary.", "Offers a fantastic view."]
    }
  },
  {
    id: "geschichte-edelenyi-kastelysziget-extra",
    type: "geschichte",
    parent: "HU-BZ",
    coords: [20.74, 48.30],
    name: { de: "Schlossinsel Edelény", hu: "Edelényi kastélysziget", ro: "Insula castelului Edelény", en: "Edelény Castle Island" },
    description: {
      de: "Ein wunderschönes Barockschloss, das auf einer künstlichen Insel liegt.",
      hu: "Gyönyörű barokk kastély, amely egy mesterséges szigeten fekszik.",
      ro: "Un castel baroc frumos, situat pe o insulă artificială.",
      en: "A beautiful Baroque castle located on an artificial island."
    },
    descriptionAdvanced: {
      de: "Das L'Huillier-Coburg-Schloss in Edelény ist eines der größten und prächtigsten Barockschlösser Ungarns. Es wurde im 18. Jahrhundert erbaut und ist für seine einzigartigen Wandmalereien von Lieb-Fülöp bekannt. Das Schloss ist von einem malerischen Park umgeben, der von den Armen des Flusses Bódva umflossen wird.",
      hu: "Az edelényi L'Huillier-Coburg-kastély Magyarország egyik legnagyobb és legpompásabb barokk kastélya. A 18. században épült, és Lieb-Fülöp egyedülálló falfestményeiről ismert. A kastélyt festői park veszi körül, amelyet a Bódva folyó ágai ölelnek át.",
      ro: "Castelul L'Huillier-Coburg din Edelény este unul dintre cele mai mari și mai magnifice castele baroce din Ungaria. A fost construit în secolul al XVIII-lea și este cunoscut pentru picturile sale murale unice realizate de Lieb-Fülöp. Castelul este înconjurat de un parc pitoresc, înconjurat de brațele râului Bódva.",
      en: "The L'Huillier-Coburg Castle in Edelény is one of Hungary's largest and most magnificent Baroque castles. It was built in the 18th century and is known for its unique wall paintings by Lieb-Fülöp. The castle is surrounded by a picturesque park encircled by the arms of the Bódva river."
    },
    facts: {
      de: ["Barockes Meisterwerk.", "Liegt auf einer Insel.", "Einzigartige Wandmalereien.", "Umfangreich restauriert."],
      hu: ["Barokk remekmű.", "Szigeten fekszik.", "Egyedülálló falfestmények.", "Teljeskörűen felújítva."],
      ro: ["Capodoperă barocă.", "Situat pe o insulă.", "Picturi murale unice.", "Restaurat integral."],
      en: ["Baroque masterpiece.", "Located on an island.", "Unique wall paintings.", "Extensively restored."]
    }
    
    },
    // HU-CS: Csongrád-Csanád
    {
    id: "city-csongrad-city-extra",
    type: "city",
    parent: "HU-CS",
    coords: [20.14, 46.71],
    name: { de: "Csongrád", hu: "Csongrád", ro: "Csongrád", en: "Csongrád" },
    description: {
      de: "Csongrád ist eine historische Stadt an der Theiß, bekannt für ihr 'Körös-torok'-Ufer.",
      hu: "Csongrád történelmi város a Tisza partján, a 'Körös-torok' homokos strandjáról ismert.",
      ro: "Csongrád este un oraș istoric pe malul Tisei, cunoscut pentru plaja 'Körös-torok'.",
      en: "Csongrád is a historic town on the banks of the Tisza, known for its 'Körös-torok' sandy beach."
    },
    descriptionAdvanced: {
      de: "Csongrád liegt am Zusammenfluss von Theiß und Körös. Die Altstadt (Belsőváros) bewahrt mit ihren reetgedeckten Fischerhäusern den Charme vergangener Jahrhunderte. Das 'Körös-torok' ist im Sommer ein beliebter Badeort mit einem feinen Sandstrand, der an das Meer erinnert.",
      hu: "Csongrád a Tisza és a Körös találkozásánál fekszik. A Belsőváros nádtetős halászházaival a múlt századok hangulatát idézi. A Körös-torok nyáron népszerű üdülőhely finomhomokos strandjával, amely a tengerpartra emlékeztet.",
      ro: "Csongrád se află la confluența râurilor Tisa și Körös. Orașul vechi (Belsőváros) păstrează farmecul secolelor trecute cu casele sale de pescari acoperite cu stuf. 'Körös-torok' este o stațiune populară de vară, cu o plajă de nisip fin care amintește de litoral.",
      en: "Csongrád is located at the confluence of the Tisza and Körös rivers. The Old Town (Belsőváros) preserves the charm of past centuries with its thatched fishermen's houses. The 'Körös-torok' is a popular summer resort with a fine sandy beach that reminds one of the seaside."
    },
    facts: {
      de: ["Historisches Fischerviertel.", "Bekannter Sandstrand am Fluss.", "Liegt an der Theiß.", "Berühmt für seinen Wein (Csongrádi Kadarka)."],
      hu: ["Történelmi halásznegyed.", "Híres folyóparti homokstrand.", "A Tisza partján fekszik.", "Csongrádi Kadarka boráról nevezetes."],
      ro: ["Cartier istoric de pescari.", "Plajă de nisip renumită pe râu.", "Situat pe Tisa.", "Faimos pentru vinul său (Kadarka de Csongrád)."],
      en: ["Historic fishermen's quarter.", "Famous riverside sandy beach.", "Located on the Tisza.", "Famous for its wine (Csongrádi Kadarka)."]
    }
    },
    {
    id: "city-szentes-extra",
    type: "city",
    parent: "HU-CS",
    coords: [20.26, 46.65],
    name: { de: "Szentes", hu: "Szentes", ro: "Szentes", en: "Szentes" },
    description: {
      de: "Szentes ist bekannt für sein Thermalwasser und seinen Gemüseanbau.",
      hu: "Szentes a termálvizéről és a zöldségtermesztéséről ismert.",
      ro: "Szentes este cunoscut pentru apa sa termală și cultivarea legumelor.",
      en: "Szentes is known for its thermal water and vegetable cultivation."
    },
    descriptionAdvanced: {
      de: "Szentes liegt in der südlichen Tiefebene und ist ein bedeutendes Zentrum der ungarischen Landwirtschaft, besonders bekannt für seine Paprika und Tomaten. Die Stadt nutzt intensiv geothermische Energie. Das Szenteser Thermalbad bietet Entspannung in einer wunderschönen Parkanlage.",
      hu: "Szentes a Dél-Alföldön fekszik, és a magyar mezőgazdaság egyik jelentős központja, különösen a paprikájáról és paradicsomjáról híres. A város intenzíven használja a geotermikus energiát. A szentesi termálfürdő gyönyörű parkos környezetben kínál kikapcsolódást.",
      ro: "Szentes se află în Câmpia de Sud și este un centru important al agriculturii maghiare, fiind faimos în special pentru ardeii și roșiile sale. Orașul utilizează intens energia geotermală. Baia termală din Szentes oferă relaxare într-un cadru de parc minunat.",
      en: "Szentes is located in the Southern Great Plain and is a significant center of Hungarian agriculture, especially famous for its peppers and tomatoes. The city makes intensive use of geothermal energy. The Szentes thermal bath offers relaxation in a beautiful park setting."
    },
    facts: {
      de: ["Zentrum des Gartenbaus.", "Große geothermische Ressourcen.", "Besitzt ein schönes Thermalbad.", "Heimat vieler Wasserballer."],
      hu: ["A kertészet központja.", "Jelentős geotermikus erőforrások.", "Szép termálfürdővel rendelkezik.", "Számos vízilabdázó hazája."],
      ro: ["Centru al horticulturii.", "Resurse geotermale mari.", "Deține o baie termală frumoasă.", "Patria multor jucători de polo pe apă."],
      en: ["Center of horticulture.", "Large geothermal resources.", "Has a beautiful thermal bath.", "Home to many water polo players."]
    }
    },
    {
    id: "geo-maros-folyo-extra",
    type: "geo",
    parent: "HU-CS",
    coords: [20.30, 46.15],
    name: { de: "Maros", hu: "Maros", ro: "Mureș", en: "Mureș River" },
    description: {
      de: "Die Maros ist ein bedeutender Fluss in Südungarn, der bei Szeged in die Theiß mündet.",
      hu: "A Maros Dél-Magyarország egyik jelentős folyója, amely Szegednél ömlik a Tiszába.",
      ro: "Mureșul este un râu important din sudul Ungariei, care se varsă în Tisa la Szeged.",
      en: "The Mureș is a significant river in southern Hungary, flowing into the Tisza at Szeged."
    },
    descriptionAdvanced: {
      de: "Die Maros (Mureș) entspringt in den Karpaten und fließt durch Rumänien und Ungarn. Sie ist bekannt für ihre unberührte Natur und ihre Flussauen. In der Vergangenheit war sie ein wichtiger Transportweg für Salz und Holz. Heute ist sie ein Paradies für Kanufahrer und Angler.",
      hu: "A Maros a Kárpátokban ered, Románián és Magyarországon folyik keresztül. Érintetlen természetéről és ártéri erdőiről ismert. A múltban fontos szállítási útvonal volt a só és a fa számára. Ma a kajakosok és horgászok paradicsoma.",
      ro: "Mureșul izvorăște din Carpați și curge prin România și Ungaria. Este cunoscut pentru natura sa virgină și luncile sale. În trecut, a fost o cale importantă de transport pentru sare și lemn. Astăzi este un paradis pentru canotiști și pescari.",
      en: "The Mureș originates in the Carpathians and flows through Romania and Hungary. It is known for its untouched nature and floodplains. In the past, it was an important transport route for salt and wood. Today, it is a paradise for canoeists and anglers."
    },
    facts: {
      de: ["Mündet bei Szeged in die Theiß.", "Grenzfluss zwischen Ungarn und Rumänien.", "Bekannt für seine Sandbänke.", "Reich an Fischarten."],
      hu: ["Szegednél torkollik a Tiszába.", "Határfolyó Magyarország és Románia között.", "Homokpadjairól ismert.", "Halban gazdag."],
      ro: ["Se varsă în Tisa la Szeged.", "Râu de frontieră între Ungaria și România.", "Cunoscut pentru bancurile sale de nisip.", "Bogat în specii de pești."],
      en: ["Flows into the Tisza at Szeged.", "Border river between Hungary and Romania.", "Known for its sandbanks.", "Rich in fish species."]
    }
    },
    {
    id: "geschichte-opusztaszer-extra",
    type: "geschichte",
    parent: "HU-CS",
    coords: [20.08, 46.49],
    name: { de: "Nationaler Gedenkpark Ópusztaszer", hu: "Ópusztaszeri Nemzeti Történeti Emlékpark", ro: "Parcul Național Memorial Ópusztaszer", en: "Ópusztaszer National Heritage Park" },
    description: {
      de: "Ein historischer Gedenkpark, der an die ungarische Landnahme erinnert.",
      hu: "Történelmi emlékpark, amely a magyar honfoglalásra emlékeztet.",
      ro: "Un parc memorial istoric care comemorează descălecarea maghiarilor.",
      en: "A historic heritage park commemorating the Hungarian conquest."
    },
    descriptionAdvanced: {
      de: "Ópusztaszer gilt als der Ort, an dem die ungarischen Stämme unter Árpád ihre erste Versammlung abhielten. Die Hauptattraktion des Parks ist das monumentale Feszty-Panorama, ein Rundgemälde, das die Landnahme der Ungarn darstellt. Der Park umfasst auch ein Freilichtmuseum (Skanzen), das das ländliche Leben zeigt.",
      hu: "Ópusztaszer az a hely, ahol az Árpád vezette magyar törzsek az első országgyűlésüket tartották. A park fő látványossága a monumentális Feszty-körkép, amely a magyarok honfoglalását ábrázolja. A park része egy skanzen is, amely a vidéki életet mutatja be.",
      ro: "Ópusztaszer este considerat locul unde triburile maghiare conduse de Árpád au ținut prima lor adunare. Atracția principală a parcului este monumentala Panoramă Feszty, o pictură circulară care înfățișează descălecarea maghiarilor. Parcul include și un muzeu în aer liber (skanzen) care prezintă viața rurală.",
      en: "Ópusztaszer is considered the place where the Hungarian tribes under Árpád held their first assembly. The park's main attraction is the monumental Feszty Panorama, a cyclorama painting depicting the conquest of the Magyars. The park also includes an open-air museum (Skanzen) showing rural life."
    },
    facts: {
      de: ["Beherbergt das Feszty-Panorama.", "Ort der ersten ungarischen Nationalversammlung.", "Großes Freilichtmuseum.", "Historisches Symbol der ungarischen Einheit."],
      hu: ["Itt látható a Feszty-körkép.", "Az első magyar országgyűlés helyszíne.", "Hatalmas szabadtéri néprajzi múzeum.", "A magyar egység történelmi szimbóluma."],
      ro: ["Găzduiește Panorama Feszty.", "Locul primei adunări naționale maghiare.", "Muzeu în aer liber mare.", "Simbol istoric al unității maghiare."],
      en: ["Home to the Feszty Panorama.", "Site of the first Hungarian national assembly.", "Large open-air museum.", "Historic symbol of Hungarian unity."]
    }
    },
    {
    id: "geschichte-szegedi-dom-extra",
    type: "geschichte",
    parent: "HU-CS",
    coords: [20.149, 46.248],
    name: { de: "Votivkirche von Szeged", hu: "Szegedi Dóm", ro: "Catedrala din Szeged", en: "Votive Church of Szeged" },
    description: {
      de: "Die Kathedrale von Szeged ist ein beeindruckendes neoromanisches Bauwerk auf dem Domplatz.",
      hu: "A szegedi dóm egy lenyűgöző neoromán épület a Dóm téren.",
      ro: "Catedrala din Szeged este o construcție neoromanică impresionantă în Piața Domului.",
      en: "The Votive Church of Szeged is an impressive Neo-Romanesque building on Cathedral Square."
    },
    descriptionAdvanced: {
      de: "Die Votivkirche wurde nach der großen Flut von 1879 erbaut, als die Bürger von Szeged gelobten, eine prachtvolle Kirche zu errichten, wenn die Stadt wieder aufgebaut wird. Sie ist die viertgrößte Kirche Ungarns. Der Domplatz ist im Sommer Austragungsort der berühmten Szegeder Freilichtspiele.",
      hu: "A Fogadalmi Templom az 1879-es nagy árvíz után épült, amikor a szegediek megfogadták, hogy pompás templomot emelnek, ha a város újjáépül. Ez Magyarország negyedik legnagyobb temploma. A Dóm tér nyáron a híres Szegedi Szabadtéri Játékok helyszíne.",
      ro: "Biserica Votivă a fost construită după marea inundație din 1879, când cetățenii din Szeged au jurat să ridice o biserică magnifică dacă orașul va fi reconstruit. Este a patra biserică ca mărime din Ungaria. Piața Domului găzduiește vara faimoasele Jocuri în Aer Liber din Szeged.",
      en: "The Votive Church was built after the great flood of 1879, when the citizens of Szeged vowed to build a magnificent church if the city was rebuilt. It is the fourth largest church in Hungary. Cathedral Square is the venue for the famous Szeged Open-Air Festival in summer."
    },
    facts: {
      de: ["Erbaut als Einlösung eines Gelübdes.", "Neoromanischer Stil.", "Zwei 81 Meter hohe Türme.", "Besitzt eine der größten Orgeln Europas."],
      hu: ["Fogadalomból épült.", "Neoromán stílusú.", "Két 81 méter magas tornya van.", "Európa egyik legnagyobb orgonájával rendelkezik."],
      ro: ["Construită ca îndeplinire a unui jurământ.", "Stil neoromanic.", "Două turnuri de 81 de metri înălțime.", "Deține una dintre cele mai mari orgi din Europa."],
      en: ["Built as the fulfillment of a vow.", "Neo-Romanesque style.", "Two 81-meter-high towers.", "Has one of the largest organs in Europe."]
    }
    },
    // HU-FE: Fejér
    {
    id: "city-mor-extra",
    type: "city",
    parent: "HU-FE",
    coords: [18.20, 47.37],
    name: { de: "Mór", hu: "Mór", ro: "Mór", en: "Mór" },
    description: {
      de: "Mór ist das Zentrum einer berühmten Weinregion, bekannt für den Wein 'Móri Ezerjó'.",
      hu: "Mór egy híres borvidék központja, a 'Móri Ezerjó' boráról ismert.",
      ro: "Mór este centrul unei regiuni viticole faimoase, cunoscut pentru vinul 'Móri Ezerjó'.",
      en: "Mór is the center of a famous wine region, known for the 'Móri Ezerjó' wine."
    },
    descriptionAdvanced: {
      de: "Mór liegt zwischen dem Vértes- und Bakony-Gebirge. Die Stadt blickt auf eine lange Weinbautradition zurück, die von deutschen Siedlern geprägt wurde. Das Lamberg-Schloss, ein wunderschönes Barockbauwerk, ist das kulturelle Herz der Stadt. Jedes Jahr finden hier die bekannten Mórer Weintage statt.",
      hu: "Mór a Vértes és a Bakony között fekszik. A város hosszú borászati hagyományokkal rendelkezik, amelyet a német telepesek is formáltak. A Lamberg-kastély, egy gyönyörű barokk épület, a város kulturális szíve. Minden évben itt rendezik meg a híres Móri Bornapokat.",
      ro: "Mór se află între munții Vértes și Bakony. Orașul are o lungă tradiție viticolă, influențată de coloniștii germani. Castelul Lamberg, o frumoasă clădire barocă, este inima culturală a orașului. În fiecare an, aici au loc faimoasele Zile ale Vinului din Mór.",
      en: "Mór is located between the Vértes and Bakony mountains. The city has a long winemaking tradition, shaped by German settlers. The Lamberg Castle, a beautiful Baroque building, is the cultural heart of the city. Every year, the famous Mór Wine Days are held here."
    },
    facts: {
      de: ["Zentrum der Weinregion Mór.", "Bekannt für den 'Ezerjó'-Wein.", "Besitzt das barocke Lamberg-Schloss.", "Starke deutsche Traditionen."],
      hu: ["A Móri borvidék központja.", "Az 'Ezerjó' boráról híres.", "Itt található a barokk Lamberg-kastély.", "Erős német hagyományok."],
      ro: ["Centrul regiunii viticole Mór.", "Faimos pentru vinul 'Ezerjó'.", "Deține castelul baroc Lamberg.", "Tradiții germane puternice."],
      en: ["Center of the Mór wine region.", "Famous for 'Ezerjó' wine.", "Home to the Baroque Lamberg Castle.", "Strong German traditions."]
    }
    },
    {
    id: "city-bicske-extra",
    type: "city",
    parent: "HU-FE",
    coords: [18.63, 47.48],
    name: { de: "Bicske", hu: "Bicske", ro: "Bicske", en: "Bicske" },
    description: {
      de: "Bicske ist eine Stadt im Becken von Zsámbék, bekannt für ihr Schloss und die Sternwarte.",
      hu: "Bicske a Zsámbéki-medencében fekvő város, kastélyáról és csillagvizsgálójáról ismert.",
      ro: "Bicske este un oraș în bazinul Zsámbék, cunoscut pentru castelul și observatorul său.",
      en: "Bicske is a town in the Zsámbék Basin, known for its castle and observatory."
    },
    descriptionAdvanced: {
      de: "Bicske liegt an der wichtigen Verkehrsachse zwischen Budapest und Wien. Das Batthyány-Schloss ist ein bedeutendes Baudenkmal der Stadt. In der Nähe befindet sich auch das erste astronomische Observatorium Ungarns, das von Károly Nagy gegründet wurde.",
      hu: "Bicske a Budapest és Bécs közötti fontos közlekedési tengely mentén fekszik. A Batthyány-kastély a város jelentős műemléke. A közelben található Magyarország első csillagvizsgálója is, amelyet Nagy Károly alapított.",
      ro: "Bicske se află pe axa importantă de transport între Budapesta și Viena. Castelul Batthyány este un monument arhitectural important al orașului. În apropiere se află și primul observator astronomic din Ungaria, fondat de Károly Nagy.",
      en: "Bicske is located along the important transport axis between Budapest and Vienna. The Batthyány Castle is a significant architectural monument of the city. Nearby is also Hungary's first astronomical observatory, founded by Károly Nagy."
    },
    facts: {
      de: ["Bedeutendes Batthyány-Schloss.", "Erste Sternwarte Ungarns.", "Wichtiger Verkehrsknotenpunkt.", "Liegt im Becken von Zsámbék."],
      hu: ["Jelentős Batthyány-kastély.", "Itt volt Magyarország első csillagvizsgálója.", "Fontos közlekedési csomópont.", "A Zsámbéki-medencében fekszik."],
      ro: ["Castel Batthyány important.", "Primul observator astronomic din Ungaria.", "Nod de transport important.", "Situat în bazinul Zsámbék."],
      en: ["Significant Batthyány Castle.", "First observatory in Hungary.", "Important transport hub.", "Located in the Zsámbék Basin."]
    }
    },
    {
    id: "geo-velencei-hegyseg-extra",
    type: "geo",
    parent: "HU-FE",
    coords: [18.55, 47.25],
    name: { de: "Velence-Gebirge", hu: "Velencei-hegység", ro: "Munții Velence", en: "Velence Mountains" },
    description: {
      de: "Ein Gebirge aus Granitgestein nördlich des Velence-Sees, bekannt für seine Wackelsteine.",
      hu: "Gránitkőzetekből álló hegység a Velencei-tótól északra, az ingóköveiről ismert.",
      ro: "Un lanț muntos format din granit la nord de lacul Velence, cunoscut pentru pietrele sale mișcătoare.",
      en: "A mountain range made of granite rock north of Lake Velence, known for its balancing rocks."
    },
    descriptionAdvanced: {
      de: "Das Velence-Gebirge ist geologisch eines der ältesten Gebirge Ungarns. Seine charakteristischen Granitformationen, die sogenannten Wackelsteine (Ingókövek), entstanden durch Erosion. Der höchste Punkt ist der Meleg-hegy (352 m). Die Region bietet hervorragende Wanderwege mit Blick auf den Velence-See.",
      hu: "A Velencei-hegység földtanilag Magyarország egyik legidősebb hegysége. Jellegzetes gránitformációi, az úgynevezett ingókövek, az erózió révén jöttek létre. Legmagasabb pontja a Meleg-hegy (352 m). A régió kiváló túraútvonalakat kínál kilátással a Velencei-tóra.",
      ro: "Munții Velence sunt din punct de vedere geologic unii dintre cei mai vechi munți din Ungaria. Formațiunile sale caracteristice de granit, așa-numitele pietre mișcătoare (ingókövek), s-au format prin eroziune. Cel mai înalt punct este Meleg-hegy (352 m). Regiunea oferă trasee de drumeție excelente cu vedere la lacul Velence.",
      en: "Geologically, the Velence Mountains are among the oldest in Hungary. Its characteristic granite formations, the so-called balancing rocks (Ingókövek), were formed by erosion. The highest point is Meleg-hegy (352 m). The region offers excellent hiking trails with views of Lake Velence."
    },
    facts: {
      de: ["Besteht hauptsächlich aus Granit.", "Berühmt für die Wackelsteine.", "Ältestes Gebirge des Landes.", "Höchster Gipfel: Meleg-hegy."],
      hu: ["Főleg gránitból áll.", "Híres az ingóköveiről.", "Az ország egyik legidősebb hegysége.", "Legmagasabb csúcsa a Meleg-hegy."],
      ro: ["Format în principal din granit.", "Faimos pentru pietrele mișcătoare.", "Cei mai vechi munți din țară.", "Cel mai înalt vârf: Meleg-hegy."],
      en: ["Consists mainly of granite.", "Famous for the balancing rocks.", "One of the oldest mountains in the country.", "Highest peak: Meleg-hegy."]
    }
    },
    {
    id: "geschichte-pazmand-vizimalom-extra",
    type: "geschichte",
    parent: "HU-FE",
    coords: [18.65, 47.28],
    name: { de: "Wassermühle von Pázmánd", hu: "Pázmándi vízimalom", ro: "Moara de apă din Pázmánd", en: "Pázmánd Watermill" },
    description: {
      de: "Eine restaurierte historische Wassermühle in einer malerischen Umgebung.",
      hu: "Felújított történelmi vízimalom festői környezetben.",
      ro: "O moară de apă istorică restaurată într-un cadru pitoresc.",
      en: "A restored historic watermill in a picturesque setting."
    },
    descriptionAdvanced: {
      de: "Die Wassermühle von Pázmánd ist ein technisches Denkmal am Fuße des Velence-Gebirges. Sie wurde originalgetreu restauriert und zeigt Besuchern den Mahlprozess vergangener Zeiten. Die Mühle liegt an einem kleinen Bach und ist ein beliebtes Ziel für Ausflügler.",
      hu: "A pázmándi vízimalom egy ipari műemlék a Velencei-hegység lábánál. Hűen restaurálták, és bemutatja a látogatóknak a régi idők őrlési folyamatát. A malom egy kis patak partján fekszik, és kedvelt kirándulóhely.",
      ro: "Moara de apă din Pázmánd este un monument industrial la poalele munților Velence. A fost restaurată fidel și prezintă vizitatorilor procesul de măcinare de odinioară. Moara se află pe malul unui pârâu mic și este un loc preferat de excursioniști.",
      en: "The Pázmánd watermill is an industrial monument at the foot of the Velence Mountains. It has been faithfully restored and shows visitors the grinding process of former times. The mill is located on the banks of a small stream and is a popular destination for excursionists."
    },
    facts: {
      de: ["Funktionsfähige Wassermühle.", "Technisches Denkmal.", "Liegt am Pázmánd-Bach.", "Eintritt für Besucher möglich."],
      hu: ["Működőképes vízimalom.", "Ipari műemlék.", "A Pázmándi-patak partján áll.", "Látogatható a közönség számára."],
      ro: ["Moară de apă funcțională.", "Monument industrial.", "Situată pe pârâul Pázmánd.", "Accesibilă vizitatorilor."],
      en: ["Functional watermill.", "Industrial monument.", "Located on the Pázmánd stream.", "Open to visitors."]
    }
    },
    {
    id: "geschichte-taci-gorsium-extra",
    type: "geschichte",
    parent: "HU-FE",
    coords: [18.42, 47.08],
    name: { de: "Gorsium Archäologischer Park", hu: "Gorsium Régészeti Park", ro: "Parcul Arheologic Gorsium", en: "Gorsium Archaeological Park" },
    description: {
      de: "Eine bedeutende römische Ausgrabungsstätte in der Nähe von Tác.",
      hu: "Jelentős római kori régészeti lelőhely Tác közelében.",
      ro: "Un sit arheologic roman important lângă Tác.",
      en: "A significant Roman archaeological site near Tác."
    },
    descriptionAdvanced: {
      de: "Gorsium war eine der wichtigsten römischen Städte in der Provinz Pannonia. Die Ausgrabungsstätte umfasst Tempel, Foren und ein Amphitheater. Der Park ist eines der größten Freilichtmuseen für Archäologie in Ungarn und bietet einen tiefen Einblick in das Leben der Römer.",
      hu: "Gorsium a római Pannónia provincia egyik legfontosabb városa volt. A régészeti terület templomokat, fórumokat és egy amfiteátrumot is magában foglal. A park Magyarország egyik legnagyobb régészeti skanzenje, amely mély betekintést nyújt a rómaiak életébe.",
      ro: "Gorsium a fost unul dintre cele mai importante orașe romane din provincia Pannonia. Situl arheologic cuprinde temple, forumuri și un amfiteatru. Parcul este unul dintre cele mai mari muzee arheologice în aer liber din Ungaria și oferă o perspectivă profundă asupra vieții romanilor.",
      en: "Gorsium was one of the most important Roman cities in the province of Pannonia. The archaeological site includes temples, forums, and an amphitheater. The park is one of the largest open-air archaeological museums in Hungary, offering deep insight into Roman life."
    },
    facts: {
      de: ["Ehemalige römische Stadt.", "Größter archäologischer Park Ungarns.", "Beherbergt das Floralia-Festival.", "Liegt an einer alten Handelsstraße."],
      hu: ["Egykori római város.", "Magyarország legnagyobb régészeti parkja.", "A Floralia fesztivál helyszíne.", "Egykori kereskedelmi útvonal mentén fekszik."],
      ro: ["Fost oraș roman.", "Cel mai mare parc arheologic din Ungaria.", "Găzduiește festivalul Floralia.", "Situat pe un vechi drum comercial."],
      en: ["Former Roman city.", "Largest archaeological park in Hungary.", "Hosts the Floralia festival.", "Located on an ancient trade route."]
    }
    },
    // HU-GS: Győr-Moson-Sopron
    {
    id: "city-mosonmagyarovar-extra",
    type: "city",
    parent: "HU-GS",
    coords: [17.27, 47.87],
    name: { de: "Mosonmagyaróvár", hu: "Mosonmagyaróvár", ro: "Mosonmagyaróvár", en: "Mosonmagyaróvár" },
    description: {
      de: "Eine Stadt im Nordwesten Ungarns, bekannt für ihr Thermalwasser und die Universität für Landwirtschaft.",
      hu: "Város Északnyugat-Magyarországon, termálvizéről és agrár-egyeteméről ismert.",
      ro: "Un oraș în nord-vestul Ungariei, cunoscut pentru apa sa termală și universitatea de agricultură.",
      en: "A city in northwestern Hungary, known for its thermal water and agricultural university."
    },
    descriptionAdvanced: {
      de: "Mosonmagyaróvár entstand durch die Vereinigung der Städte Moson und Magyaróvár. Die Stadt liegt an der Leitha und der Donau. Sie ist ein bekanntes Zentrum für Zahntourismus und beherbergt eine der ältesten landwirtschaftlichen Bildungseinrichtungen der Welt. Die Burg von Magyaróvár ist ein bedeutendes Wahrzeichen.",
      hu: "Mosonmagyaróvár Moson és Magyaróvár városok egyesülésével jött létre. A város a Lajta és a Duna mentén fekszik. A fogászati turizmus ismert központja, és itt működik a világ egyik legrégebbi agrár-felsőoktatási intézménye. A magyaróvári vár a város jelentős jelképe.",
      ro: "Mosonmagyaróvár a fost format prin unirea orașelor Moson și Magyaróvár. Orașul se află pe malul râurilor Leitha și Dunăre. Este un centru cunoscut pentru turismul dentar și găzduiește una dintre cele mai vechi instituții de învățământ agricol din lume. Cetatea din Magyaróvár este un simbol important.",
      en: "Mosonmagyaróvár was formed through the merger of Moson and Magyaróvár. The city is located on the Leitha and Danube rivers. It is a well-known center for dental tourism and houses one of the oldest agricultural educational institutions in the world. The Castle of Magyaróvár is a significant landmark."
    },
    facts: {
      de: ["Zentrum des Zahntourismus.", "Besitzt eine Burg aus dem 13. Jahrhundert.", "Wichtige Universität für Landwirtschaft.", "Liegt am Dreiländereck (AT-SK-HU)."],
      hu: ["A fogászati turizmus központja.", "13. századi várral rendelkezik.", "Fontos agrár-egyetem városa.", "A hármashatár közelében fekszik (AT-SK-HU)."],
      ro: ["Centru al turismului dentar.", "Deține o cetate din secolul al XIII-lea.", "Universitate importantă de agricultură.", "Situat lângă triplex confinium (AT-SK-HU)."],
      en: ["Center for dental tourism.", "Has a 13th-century castle.", "Important agricultural university.", "Located near the triple border (AT-SK-HU)."]
    }
    },
    {
    id: "city-csorna-extra",
    type: "city",
    parent: "HU-GS",
    coords: [17.25, 47.61],
    name: { de: "Csorna", hu: "Csorna", ro: "Csorna", en: "Csorna" },
    description: {
      de: "Csorna ist das Zentrum der Region Rábaköz, bekannt für seine Prämonstratenser-Abtei.",
      hu: "Csorna a Rábaköz központja, a premontrei apátságáról ismert.",
      ro: "Csorna este centrul regiunii Rábaköz, cunoscut pentru abația sa premonstratensă.",
      en: "Csorna is the center of the Rábaköz region, known for its Premonstratensian Abbey."
    },
    descriptionAdvanced: {
      de: "Csorna liegt im Herzen der fruchtbaren Rábaköz-Ebene. Das wichtigste Wahrzeichen der Stadt ist die Prämonstratenser-Abtei, die im 12. Jahrhundert gegründet wurde. Die Abteikirche und das Klostergebäude sind bedeutende kulturelle Schätze. Die Region ist auch für ihre reiche Volkskunst und Trachten bekannt.",
      hu: "Csorna a termékeny Rábaköz szívében fekszik. A város legfontosabb látnivalója a 12. században alapított premontrei apátság. Az apátsági templom és a rendház épülete jelentős kulturális kincs. A környék gazdag népművészetéről és népviseletéről is ismert.",
      ro: "Csorna se află în inima câmpiei fertile Rábaköz. Cel mai important reper al orașului este abația premonstratensă, fondată în secolul al XII-lea. Biserica abației și clădirea mănăstirii sunt comori culturale importante. Regiunea este cunoscută și pentru bogata sa artă populară și portul tradițional.",
      en: "Csorna is located in the heart of the fertile Rábaköz plain. The town's most important landmark is the Premonstratensian Abbey, founded in the 12th century. The abbey church and the monastery building are significant cultural treasures. The region is also known for its rich folk art and traditional costumes."
    },
    facts: {
      de: ["Sitz der Prämonstratenser-Abtei.", "Zentrum der Rábaköz-Region.", "Wichtiger Verkehrsknotenpunkt.", "Bekannt für traditionelle Volkskunst."],
      hu: ["A premontrei apátság székhelye.", "A Rábaköz központja.", "Fontos közlekedési csomópont.", "Hagyományos népművészetéről ismert."],
      ro: ["Sediul abației premonstratense.", "Centrul regiunii Rábaköz.", "Nod de transport important.", "Cunoscut pentru arta populară tradițională."],
      en: ["Seat of the Premonstratensian Abbey.", "Center of the Rábaköz region.", "Important transport hub.", "Known for traditional folk art."]
    }
    },
    {
    id: "geo-fert-to-extra",
    type: "geo",
    parent: "HU-GS",
    coords: [16.75, 47.75],
    name: { de: "Neusiedler See", hu: "Fertő-tó", ro: "Lacul Fertő", en: "Lake Neusiedl" },
    description: {
      de: "Der zweitgrößte Steppensee Mitteleuropas, geteilt zwischen Österreich und Ungarn.",
      hu: "Közép-Európa második legnagyobb sztyepptava, Ausztria és Magyarország között megosztva.",
      ro: "Al doilea cel mai mare lac de stepă din Europa Centrală, împărțit între Austria și Ungaria.",
      en: "The second largest steppe lake in Central Europe, shared between Austria and Hungary."
    },
    descriptionAdvanced: {
      de: "Der Neusiedler See (Fertő-tó) ist ein UNESCO-Welterbe. Er ist bekannt für seinen ausgedehnten Schilfgürtel, seine geringe Tiefe und seine einzigartige Vogelwelt. Der ungarische Teil gehört zum Nationalpark Fertő-Hanság. Der See ist ein Paradies für Segler, Surfer und Naturbeobachter.",
      hu: "A Fertő-tó az UNESCO Világörökség része. Hatalmas nádasairól, sekély mélységéről és egyedülálló madárvilágáról ismert. A magyar rész a Fertő-Hanság Nemzeti Parkhoz tartozik. A tó a vitorlázók, szörfösök és természetmegfigyelők paradicsoma.",
      ro: "Lacul Fertő face parte din patrimoniul mondial UNESCO. Este cunoscut pentru stuful său vast, adâncimea mică și lumea unică a păsărilor. Partea maghiară aparține Parcului Național Fertő-Hanság. Lacul este un paradis pentru navigatori, surferi și observatori de natură.",
      en: "Lake Neusiedl (Fertő-tó) is a UNESCO World Heritage site. It is known for its extensive reed belt, shallow depth, and unique birdlife. The Hungarian part belongs to the Fertő-Hanság National Park. The lake is a paradise for sailors, surfers, and nature watchers."
    },
    facts: {
      de: ["UNESCO-Welterbe.", "Grenzüberschreitender Nationalpark.", "Durchschnittliche Tiefe nur ca. 1 Meter.", "Wichtiges Vogelschutzgebiet."],
      hu: ["UNESCO Világörökségi helyszín.", "Határon átnyúló nemzeti park.", "Átlagos mélysége mindössze kb. 1 méter.", "Fontos madárvédelmi terület."],
      ro: ["Patrimoniu mondial UNESCO.", "Parc național transfrontalier.", "Adâncimea medie de doar aproximativ 1 metru.", "Zonă importantă de protecție a păsărilor."],
      en: ["UNESCO World Heritage site.", "Cross-border national park.", "Average depth only about 1 meter.", "Important bird sanctuary."]
    }
    },
    {
    id: "geschichte-eszterhazy-kastely-extra",
    type: "geschichte",
    parent: "HU-GS",
    coords: [16.87, 47.55],
    name: { de: "Schloss Esterházy (Fertőd)", hu: "Esterházy-kastély (Fertőd)", ro: "Castelul Esterházy (Fertőd)", en: "Esterházy Palace (Fertőd)" },
    description: {
      de: "Das 'ungarische Versailles', ein prächtiges Rokokoschloss in Fertőd.",
      hu: "A 'magyar Versailles', egy pompás rokokó kastély Fertődön.",
      ro: "„Versailles-ul maghiar”, un castel rococo magnific în Fertőd.",
      en: "The 'Hungarian Versailles', a magnificent Rococo palace in Fertőd."
    },
    descriptionAdvanced: {
      de: "Das Esterházy-Schloss in Fertőd ist das größte und schönste Barock-Rokokoschloss Ungarns. Es wurde im 18. Jahrhundert von Fürst Nikolaus I. Esterházy erbaut. Der Komponist Joseph Haydn lebte und arbeitete hier über 30 Jahre lang. Das Schloss ist berühmt für seinen Prunksaal, das Opernhaus und die weitläufigen Gärten.",
      hu: "A fertődi Esterházy-kastély Magyarország legnagyobb és legszebb barokk-rokokó kastélya. A 18. században építtette Esterházy 'Fényes' Miklós herceg. Joseph Haydn zeneszerző több mint 30 éven át élt és alkotott itt. A kastély híres díszterméről, operaházáról és hatalmas kertjeiről.",
      ro: "Castelul Esterházy din Fertőd este cel mai mare și mai frumos castel baroc-rococo din Ungaria. A fost construit în secolul al XVIII-lea de prințul Nikolaus I Esterházy. Compozitorul Joseph Haydn a trăit și a lucrat aici timp de peste 30 de ani. Castelul este faimos pentru sala sa de gală, opera și grădinile vaste.",
      en: "The Esterházy Palace in Fertőd is the largest and most beautiful Baroque-Rococo palace in Hungary. It was built in the 18th century by Prince Nikolaus I Esterházy. The composer Joseph Haydn lived and worked here for over 30 years. The palace is famous for its banquet hall, opera house, and extensive gardens."
    },
    facts: {
      de: ["Größtes Rokokoschloss Ungarns.", "Wirkungsstätte von Joseph Haydn.", "Hunderte von Zimmern.", "Wunderschöne französische Gärten."],
      hu: ["Magyarország legnagyobb rokokó kastélya.", "Joseph Haydn munkahelye volt.", "Több száz szobával rendelkezik.", "Gyönyörű francia kertek."],
      ro: ["Cel mai mare castel rococo din Ungaria.", "Locul unde a activat Joseph Haydn.", "Sute de camere.", "Grădini franceze minunate."],
      en: ["Largest Rococo palace in Hungary.", "Workplace of Joseph Haydn.", "Hundreds of rooms.", "Beautiful French gardens."]
    }
    },
    {
    id: "geschichte-pannonhalmi-foapatsag-extra",
    type: "geschichte",
    parent: "HU-GS",
    coords: [17.76, 47.55],
    name: { de: "Erzabtei Pannonhalma", hu: "Pannonhalmi Főapátság", ro: "Abația Pannonhalma", en: "Archabbey of Pannonhalma" },
    description: {
      de: "Eine der ältesten historischen Denkmäler Ungarns und ein UNESCO-Welterbe.",
      hu: "Magyarország egyik legrégebbi történelmi emléke és UNESCO Világörökségi helyszín.",
      ro: "Unul dintre cele mai vechi monumente istorice din Ungaria și patrimoniu mondial UNESCO.",
      en: "One of Hungary's oldest historic monuments and a UNESCO World Heritage site."
    },
    descriptionAdvanced: {
      de: "Die Erzabtei von Pannonhalma wurde 996 gegründet und ist das geistige Zentrum des Benediktinerordens in Ungarn. Das Kloster beherbergt eine wertvolle Bibliothek mit über 400.000 Bänden und das Gründungsdokument der Abtei von Tihany. Die Basilika und die Krypta sind herausragende Beispiele mittelalterlicher Architektur.",
      hu: "A Pannonhalmi Főapátságot 996-ban alapították, és a magyarországi bencés rend szellemi központja. A kolostor több mint 400 000 kötetes értékes könyvtárnak és a tihanyi apátság alapítólevelének ad otthont. A bazilika és a kripta a középkori építészet kiemelkedő példái.",
      ro: "Abația Pannonhalma a fost fondată în 996 și este centrul spiritual al ordinului benedictin din Ungaria. Mănăstirea găzduiește o bibliotecă valoroasă cu peste 400.000 de volume și documentul de ctitorire al abației Tihany. Bazilica și cripta sunt exemple remarcabile de arhitectură medievală.",
      en: "The Archabbey of Pannonhalma was founded in 996 and is the spiritual center of the Benedictine order in Hungary. The monastery houses a valuable library with over 400,000 volumes and the founding charter of the Tihany Abbey. The basilica and the crypt are outstanding examples of medieval architecture."
    },
    facts: {
      de: ["Gegründet im Jahr 996.", "UNESCO-Welterbe.", "Besitzt eine riesige Bibliothek.", "Produziert eigenen Wein und Lavendelprodukte."],
      hu: ["996-ban alapították.", "UNESCO Világörökségi helyszín.", "Hatalmas könyvtárral rendelkezik.", "Saját bort és levendula-termékeket állít elő."],
      ro: ["Fondată în anul 996.", "Patrimoniu mondial UNESCO.", "Deține o bibliotecă uriașă.", "Produce propriul vin și produse din levănțică."],
      en: ["Founded in 996.", "UNESCO World Heritage site.", "Has a huge library.", "Produces its own wine and lavender products."]
    }
    },
    // HU-HB: Hajdú-Bihar
    {
    id: "city-hajduboszormeny-extra",
    type: "city",
    parent: "HU-HB",
    coords: [21.51, 47.67],
    name: { de: "Hajdúböszörmény", hu: "Hajdúböszörmény", ro: "Hajdúböszörmény", en: "Hajdúböszörmény" },
    description: {
      de: "Die größte Heiduckenstadt mit einer einzigartigen ringförmigen Stadtstruktur.",
      hu: "A legnagyobb hajdúváros egyedülálló, gyűrűs városszerkezettel.",
      ro: "Cel mai mare oraș al haiducilor, cu o structură urbană circulară unică.",
      en: "The largest Hajdú (Haiduck) town with a unique ring-shaped urban structure."
    },
    descriptionAdvanced: {
      de: "Hajdúböszörmény war das Zentrum des Heiducken-Distrikts. Die Stadtstruktur ist außergewöhnlich: Die inneren Grundstücke sind kreisförmig angeordnet, umgeben von einem äußeren Ring von Gärten und Ställen. Dies diente in der Vergangenheit Verteidigungszwecken. Das Hajdúsági-Museum präsentiert die Geschichte der Heiducken.",
      hu: "Hajdúböszörmény volt a Hajdúkerület központja. A város szerkezete rendkívüli: a belső telkek kör alakban helyezkednek el, melyeket kertek és istállók külső gyűrűje vesz körül. Ez a múltban védelmi célokat szolgált. A Hajdúsági Múzeum a hajdúk történetét mutatja be.",
      ro: "Hajdúböszörmény a fost centrul districtului haiducilor. Structura orașului este extraordinară: loturile interioare sunt dispuse circular, înconjurate de un inel exterior de grădini și grajduri. Acest lucru a servit în trecut unor scopuri defensive. Muzeul Hajdúsági prezintă istoria haiducilor.",
      en: "Hajdúböszörmény was the center of the Hajdú district. The town structure is extraordinary: the inner plots are arranged in a circular fashion, surrounded by an outer ring of gardens and stables. This served defensive purposes in the past. The Hajdúsági Museum presents the history of the Hajdú people."
    },
    facts: {
      de: ["Einzigartige ringförmige Struktur.", "Ehemaliges Heiduckenzentrum.", "Besitzt das Hajdúsági-Museum.", "Liegt in der Nähe von Debrecen."],
      hu: ["Egyedülálló gyűrűs városszerkezet.", "Egykori hajdúközpont.", "Hajdúsági Múzeumnak ad otthont.", "Debrecen közelében fekszik."],
      ro: ["Structură circulară unică.", "Fost centru al haiducilor.", "Găzduiește Muzeul Hajdúsági.", "Situat lângă Debrecen."],
      en: ["Unique ring-shaped structure.", "Former Hajdú center.", "Home to the Hajdúsági Museum.", "Located near Debrecen."]
    }
    },
    {
    id: "city-berettyoujfalu-extra",
    type: "city",
    parent: "HU-HB",
    coords: [21.54, 47.22],
    name: { de: "Berettyóújfalu", hu: "Berettyóújfalu", ro: "Berettyóújfalu", en: "Berettyóújfalu" },
    description: {
      de: "Eine Stadt im Süden des Komitats, bekannt für das Bihar-Museum und sein Heilwasser.",
      hu: "Város a vármegye déli részén, a Bihari Múzeumról és gyógyvizéről ismert.",
      ro: "Un oraș în sudul județului, cunoscut pentru Muzeul Bihar și apa sa curativă.",
      en: "A town in the south of the county, known for the Bihar Museum and its medicinal water."
    },
    descriptionAdvanced: {
      de: "Berettyóújfalu liegt am Ufer des Flusses Berettyó. Die Stadt ist ein wichtiges regionales Zentrum in der Region Bihar. Das Bihar-Museum bewahrt das kulturelle Erbe des historischen Komitats Bihar. Das örtliche Thermalbad bietet Entspannung in brom- und jodhaltigem Heilwasser.",
      hu: "Berettyóújfalu a Berettyó folyó partján fekszik. A város Bihar vidékének fontos regionális központja. A Bihari Múzeum a történelmi Bihar vármegye kulturális örökségét őrzi. A helyi termálfürdő brómos-jódos gyógyvízzel várja a pihenni vágyókat.",
      ro: "Berettyóújfalu se află pe malul râului Berettyó. Orașul este un centru regional important în regiunea Bihar. Muzeul Bihar păstrează moștenirea culturală a județului istoric Bihar. Baia termală locală oferă relaxare în apă curativă bogată în brom și iod.",
      en: "Berettyóújfalu is located on the banks of the Berettyó river. The town is an important regional center in the Bihar region. The Bihar Museum preserves the cultural heritage of the historical Bihar county. The local thermal bath offers relaxation in medicinal water containing bromine and iodine."
    },
    facts: {
      de: ["Liegt am Fluss Berettyó.", "Beherbergt das Bihar-Museum.", "Bekannt für sein Heilwasser.", "Regionales Zentrum von Bihar."],
      hu: ["A Berettyó folyó partján fekszik.", "A Bihari Múzeumnak ad otthont.", "Gyógyvizéről ismert.", "Bihar regionális központja."],
      ro: ["Situat pe râul Berettyó.", "Găzduiește Muzeul Bihar.", "Cunoscut pentru apa sa curativă.", "Centru regional al Biharului."],
      en: ["Located on the Berettyó river.", "Home to the Bihar Museum.", "Known for its medicinal water.", "Regional center of Bihar."]
    }
    },
    {
    id: "geo-nagyerdo-extra",
    type: "geo",
    parent: "HU-HB",
    coords: [21.63, 47.55],
    name: { de: "Großer Wald (Nagyerdő)", hu: "Nagyerdő", ro: "Pădurea Mare", en: "Great Forest (Nagyerdő)" },
    description: {
      de: "Der 'Nagyerdő' ist ein Stadtwald in Debrecen und war das erste Naturschutzgebiet Ungarns.",
      hu: "A Nagyerdő Debrecen városerdeje, és Magyarország első természetvédelmi területe volt.",
      ro: "Nagyerdő este o pădure urbană în Debrecen și a fost prima rezervație naturală din Ungaria.",
      en: "The 'Nagyerdő' is a city forest in Debrecen and was Hungary's first nature reserve."
    },
    descriptionAdvanced: {
      de: "Der Nagyerdő ist das grüne Herz von Debrecen. Er wurde 1939 zum ersten Naturschutzgebiet Ungarns erklärt. Heute ist er ein beliebtes Erholungsgebiet mit einem Zoo, einem botanischen Garten, dem Nagyerdei-Stadion und dem Erlebnisbad Aquaticum. Hunderte Jahre alte Eichen prägen das Bild des Waldes.",
      hu: "A Nagyerdő Debrecen zöld szíve. 1939-ben Magyarország első természetvédelmi területévé nyilvánították. Ma népszerű pihenőhely állatkerttel, botanikus kerttel, a Nagyerdei Stadionnal és az Aquaticum élményfürdővel. A több száz éves tölgyfák meghatározzák az erdő képét.",
      ro: "Nagyerdő este inima verde a orașului Debrecen. În 1939 a fost declarată prima rezervație naturală din Ungaria. Astăzi este o zonă de recreere populară cu o grădină zoologică, o grădină botanică, Stadionul Nagyerdei și parcul acvatic Aquaticum. Stejarii de sute de ani definesc imaginea pădurii.",
      en: "The Nagyerdő is the green heart of Debrecen. It was declared Hungary's first nature reserve in 1939. Today, it is a popular recreation area with a zoo, a botanical garden, the Nagyerdei Stadium, and the Aquaticum water park. Hundreds of years old oaks characterize the forest."
    },
    facts: {
      de: ["Erstes Naturschutzgebiet Ungarns (1939).", "Hundertjährige Eichen.", "Freizeitpark und Zoo.", "Heimat des Aquaticum-Bads."],
      hu: ["Magyarország első természetvédelmi területe (1939).", "Százéves tölgyfák.", "Vidámpark és állatkert.", "Az Aquaticum fürdő otthona."],
      ro: ["Prima rezervație naturală din Ungaria (1939).", "Stejari centenari.", "Parc de distracții și grădină zoologică.", "Gazda băilor Aquaticum."],
      en: ["Hungary's first nature reserve (1939).", "Century-old oaks.", "Amusement park and zoo.", "Home to the Aquaticum bath."]
    }
    },
    {
    id: "geschichte-debreceni-reformatus-nagytemplom-extra",
    type: "geschichte",
    parent: "HU-HB",
    coords: [21.624, 47.532],
    name: { de: "Reformierte Große Kirche Debrecen", hu: "Debreceni Református Nagytemplom", ro: "Marea Biserică Reformată din Debrecen", en: "Reformed Great Church of Debrecen" },
    description: {
      de: "Das Symbol von Debrecen und die größte reformierte Kirche Ungarns.",
      hu: "Debrecen jelképe és Magyarország legnagyobb református temploma.",
      ro: "Simbolul orașului Debrecen și cea mai mare biserică reformată din Ungaria.",
      en: "The symbol of Debrecen and the largest Reformed church in Hungary."
    },
    descriptionAdvanced: {
      de: "Die Große Kirche wurde im klassizistischen Stil erbaut. Sie ist von großer historischer Bedeutung, da hier 1849 Lajos Kossuth die Unabhängigkeitserklärung Ungarns verlas. Die Kirche beherbergt die Kossuth-Reliquien und bietet von ihren Türmen einen weiten Blick über die Stadt.",
      hu: "A Nagytemplom klasszicista stílusban épült. Hatalmas történelmi jelentőséggel bír, mivel 1849-ben itt olvasta fel Kossuth Lajos a Magyar Függetlenségi Nyilatkozatot. A templom Kossuth-ereklyéket őriz, tornyaiból pedig pazar kilátás nyílik a városra.",
      ro: "Marea Biserică a fost construită în stil clasicist. Are o mare importanță istorică, deoarece aici, în 1849, Lajos Kossuth a citit Declarația de Independență a Ungariei. Biserica găzduiește relicve ale lui Kossuth și oferă din turnurile sale o vedere largă asupra orașului.",
      en: "The Great Church was built in the Classicist style. It is of great historical significance, as it was here in 1849 that Lajos Kossuth read the Declaration of Independence of Hungary. The church houses Kossuth relics and offers an expansive view over the city from its towers."
    },
    facts: {
      de: ["Größte reformierte Kirche des Landes.", "Ort der Unabhängigkeitserklärung 1849.", "Klassizistische Architektur.", "Beherbergt den Kossuth-Stuhl."],
      hu: ["Az ország legnagyobb református temploma.", "Az 1849-es Függetlenségi Nyilatkozat helyszíne.", "Klasszicista építészet.", "Itt található Kossuth széke."],
      ro: ["Cea mai mare biserică reformată din țară.", "Locul Declarației de Independență din 1849.", "Arhitectură clasicistă.", "Găzduiește scaunul lui Kossuth."],
      en: ["Largest Reformed church in the country.", "Site of the Declaration of Independence in 1849.", "Classicist architecture.", "Houses the Kossuth chair."]
    }
    },
    {
    id: "geschichte-hortobagyi-kilenclyuku-hid-extra",
    type: "geschichte",
    parent: "HU-HB",
    coords: [21.14, 47.58],
    name: { de: "Neunbögige Brücke", hu: "Kilenclyukú híd", ro: "Podul cu nouă arcuri", en: "Nine-arched Bridge" },
    description: {
      de: "Die längste Steinbrücke Ungarns und das Wahrzeichen von Hortobágy.",
      hu: "Magyarország leghosszabb kőhídja és a Hortobágy jelképe.",
      ro: "Cel mai lung pod de piatră din Ungaria și simbolul regiunii Hortobágy.",
      en: "The longest stone bridge in Hungary and the symbol of Hortobágy."
    },
    descriptionAdvanced: {
      de: "Die Neunbögige Brücke (Kilenclyukú híd) wurde zwischen 1827 und 1833 erbaut. Sie erleichterte den Viehtrieb über den Fluss Hortobágy während der Überschwemmungen. Die Brücke ist Teil des UNESCO-Welterbes Hortobágy und Schauplatz des berühmten Brückenmarktes (Hídi vásár).",
      hu: "A Kilenclyukú híd 1827 és 1833 között épült. Megkönnyítette az állatok áthajtását a Hortobágy folyón az áradások idején is. A híd a Hortobágyi Nemzeti Park részeként az UNESCO Világörökség része, és a híres Hídi vásár helyszíne.",
      ro: "Podul cu nouă arcuri a fost construit între 1827 și 1833. A facilitat trecerea vitelor peste râul Hortobágy în timpul inundațiilor. Podul face parte din patrimoniul mondial UNESCO ca parte a regiunii Hortobágy și este locul unde are loc faimosul târg de la pod (Hídi vásár).",
      en: "The Nine-arched Bridge was built between 1827 and 1833. It facilitated the driving of livestock across the Hortobágy river during floods. The bridge is part of the UNESCO World Heritage as part of the Hortobágy region and is the scene of the famous Bridge Fair (Hídi vásár)."
    },
    facts: {
      de: ["Längste Steinbrücke Ungarns (167 m).", "Erbaut im 19. Jahrhundert.", "UNESCO-Welterbe.", "Bekannt für den Brückenmarkt."],
      hu: ["Magyarország leghosszabb kőhídja (167 m).", "A 19. században épült.", "UNESCO Világörökségi helyszín.", "A Hídi vásár helyszíne."],
      ro: ["Cel mai lung pod de piatră din Ungaria (167 m).", "Construit în secolul al XIX-lea.", "Patrimoniu mondial UNESCO.", "Cunoscut pentru târgul de la pod."],
      en: ["Longest stone bridge in Hungary (167 m).", "Built in the 19th century.", "UNESCO World Heritage site.", "Known for the Bridge Fair."]
    }
    },
    // HU-HE: Heves
    {
    id: "city-hatvan-extra",
    type: "city",
    parent: "HU-HE",
    coords: [19.67, 47.67],
    name: { de: "Hatvan", hu: "Hatvan", ro: "Hatvan", en: "Hatvan" },
    description: {
      de: "Eine Stadt an der Zagyva, bekannt für ihr Jagdmuseum und ihre Schokoladenfabrik.",
      hu: "Város a Zagyva partján, vadászati múzeumáról és csokoládégyáráról ismert.",
      ro: "Un oraș pe râul Zagyva, cunoscut pentru muzeul de vânătoare și fabrica de ciocolată.",
      en: "A town on the Zagyva river, known for its hunting museum and chocolate factory."
    },
    descriptionAdvanced: {
      de: "Hatvan bedeutet wörtlich 'Sechzig'. Die Stadt liegt an einem wichtigen Verkehrsknotenpunkt. Das Grassalkovich-Schloss beherbergt heute das Ungarische Jagdmuseum. Hatvan ist auch bekannt für seine Industriegeschichte und die Produktion von Süßwaren.",
      hu: "Hatvan neve szó szerint a 60-as számot jelenti. A város fontos közlekedési csomópontban fekszik. A Grassalkovich-kastély ma a Magyar Vadászati Múzeumnak ad otthont. Hatvan ipari múltjáról és édességgyártásáról is ismert.",
      ro: "Hatvan înseamnă literalmente 'șaizeci'. Orașul se află la un nod important de transport. Castelul Grassalkovich găzduiește astăzi Muzeul Maghiar de Vânătoare. Hatvan este, de asemenea, cunoscut pentru istoria sa industrială și producția de dulciuri.",
      en: "Hatvan literally means 'sixty'. The town is located at an important transport hub. The Grassalkovich Castle now houses the Hungarian Hunting Museum. Hatvan is also known for its industrial history and confectionery production."
    },
    facts: {
      de: ["Name bedeutet 'Sechzig'.", "Besitzt ein prächtiges Grassalkovich-Schloss.", "Heimat des Ungarischen Jagdmuseums.", "Wichtiger Eisenbahnknotenpunkt."],
      hu: ["Neve a 60-as számot jelenti.", "Itt található a Grassalkovich-kastély.", "A Magyar Vadászati Múzeum székhelye.", "Fontos vasúti csomópont."],
      ro: ["Numele înseamnă 'șaizeci'.", "Deține castelul magnific Grassalkovich.", "Patria Muzeului Maghiar de Vânătoare.", "Nod feroviar important."],
      en: ["Name means 'sixty'.", "Features a magnificent Grassalkovich Castle.", "Home to the Hungarian Hunting Museum.", "Important railway junction."]
    }
    },
    {
    id: "city-fuzesabony-extra",
    type: "city",
    parent: "HU-HE",
    coords: [20.41, 47.75],
    name: { de: "Füzesabony", hu: "Füzesabony", ro: "Füzesabony", en: "Füzesabony" },
    description: {
      de: "Ein wichtiger Eisenbahnknotenpunkt in Nordungarn mit reicher archäologischer Geschichte.",
      hu: "Fontos vasúti csomópont Észak-Magyarországon, gazdag régészeti múlttal.",
      ro: "Un nod feroviar important în nordul Ungariei, cu o istorie arheologică bogată.",
      en: "An important railway junction in northern Hungary with a rich archaeological history."
    },
    descriptionAdvanced: {
      de: "Füzesabony ist bekannt für seine bedeutenden bronzezeitlichen Ausgrabungen. Die Stadt dient als Tor zum Bükk-Gebirge und zur Theiß-See-Region. Das Bahnhofsgebäude ist ein beeindruckendes Beispiel der Architektur des späten 19. Jahrhunderts.",
      hu: "Füzesabony jelentős bronzkori régészeti leleteiről ismert. A város a Bükk-hegység és a Tisza-tó vidékének kapujaként szolgál. Vasútállomásának épülete a 19. század végi építészet lenyűgöző példája.",
      ro: "Füzesabony este cunoscut pentru descoperirile arheologice importante din epoca bronzului. Orașul servește ca poartă către munții Bükk și regiunea lacului Tisa. Clădirea gării este un exemplu impresionant al arhitecturii de la sfârșitul secolului al XIX-lea.",
      en: "Füzesabony is known for its significant Bronze Age archaeological excavations. The town serves as a gateway to the Bükk Mountains and the Lake Tisza region. The station building is an impressive example of late 19th-century architecture."
    },
    facts: {
      de: ["Bedeutende Funde aus der Bronzezeit.", "Strategischer Eisenbahnknotenpunkt.", "Liegt zwischen Eger und dem Theiß-See.", "Tor zum Bükk-Gebirge."],
      hu: ["Jelentős bronzkori leletek.", "Stratégiai vasúti csomópont.", "Eger és a Tisza-tó között fekszik.", "A Bükk kapuja."],
      ro: ["Descoperiri importante din epoca bronzului.", "Nod feroviar strategic.", "Situat între Eger și lacul Tisa.", "Poarta către munții Bükk."],
      en: ["Significant Bronze Age finds.", "Strategic railway junction.", "Located between Eger and Lake Tisza.", "Gateway to the Bükk Mountains."]
    }
    },
    {
    id: "geo-kekes-teto-extra",
    type: "geo",
    parent: "HU-HE",
    coords: [20.01, 47.87],
    name: { de: "Kékes", hu: "Kékes-tető", ro: "Vârful Kékes", en: "Kékes Peak" },
    description: {
      de: "Der höchste Berg Ungarns, gelegen im Mátra-Gebirge.",
      hu: "Magyarország legmagasabb hegycsúcsa, a Mátra hegységben található.",
      ro: "Cel mai înalt munte din Ungaria, situat în munții Mátra.",
      en: "The highest peak in Hungary, located in the Mátra Mountains."
    },
    descriptionAdvanced: {
      de: "Der Kékestető ist mit 1014 Metern der höchste Punkt Ungarns. Sein Name bedeutet 'bläulicher Gipfel'. Auf dem Gipfel befindet sich ein Fernsehturm mit einer Aussichtsplattform. Die Region ist ein beliebtes Ziel für Wanderer im Sommer und Skifahrer im Winter. Die Luft hier gilt als besonders gesundheitsfördernd.",
      hu: "A Kékestető 1014 méteres magasságával Magyarország legmagasabb pontja. Nevét kékes árnyalatáról kapta. A csúcson egy tévétorony található kilátóval. A régió népszerű célpont a túrázók számára nyáron és a síelőknek télen. A levegő itt különösen jó hatással van az egészségre.",
      ro: "Kékestető este cel mai înalt punct din Ungaria, având 1014 metri. Numele său înseamnă „vârf albăstrui”. În vârf se află un turn de televiziune cu o platformă de observare. Regiunea este o destinație populară pentru drumeți vara și schiori iarna. Aerul de aici este considerat a fi deosebit de benefic pentru sănătate.",
      en: "Kékestető is the highest point in Hungary at 1014 meters. Its name means 'bluish peak'. At the summit is a television tower with a viewing platform. The region is a popular destination for hikers in summer and skiers in winter. The air here is considered particularly beneficial for health."
    },
    facts: {
      de: ["Höchster Punkt Ungarns (1014 m).", "Liegt im Mátra-Gebirge.", "Fernseh- und Aussichtsturm auf dem Gipfel.", "Beliebtes Skigebiet."],
      hu: ["Magyarország legmagasabb pontja (1014 m).", "A Mátra hegységben található.", "Tévétorony és kilátó a csúcson.", "Népszerű síterep."],
      ro: ["Cel mai înalt punct din Ungaria (1014 m).", "Situat în munții Mátra.", "Turn de televiziune și observație în vârf.", "Stațiune de schi populară."],
      en: ["Highest point in Hungary (1014 m).", "Located in the Mátra Mountains.", "TV and lookout tower on the summit.", "Popular ski resort."]
    }
    },
    {
    id: "geschichte-sirok-vara-extra",
    type: "geschichte",
    parent: "HU-HE",
    coords: [20.19, 47.94],
    name: { de: "Burg von Sirok", hu: "Siroki vár", ro: "Cetatea Sirok", en: "Sirok Castle" },
    description: {
      de: "Eine faszinierende Felsenburg im Mátra-Gebirge, teilweise in den Tuffstein gehauen.",
      hu: "Lenyűgöző sziklavár a Mátrában, részben a tufába vésve.",
      ro: "O cetate spectaculoasă în stâncă în munții Mátra, parțial săpată în tuf.",
      en: "A fascinating rock castle in the Mátra Mountains, partly carved into the tuff."
    },
    descriptionAdvanced: {
      de: "Die Burg von Sirok ist die am spektakulärsten gelegene Felsenburg Ungarns. Ein großer Teil der Burg wurde direkt in den Berggipfel gehauen, einschließlich Tunneln und Gängen. Sie bietet einen herrlichen Rundblick auf das Mátra- und Bükk-Gebirge. Die 'Barát' (Mönch) und 'Apáca' (Nonne) genannten Felsformationen in der Nähe sind ebenfalls sehenswert.",
      hu: "A siroki vár Magyarország leglátványosabb elhelyezkedésű sziklavára. A vár nagy részét közvetlenül a hegycsúcsba vésték, alagutakkal és folyosókkal együtt. Csodálatos körpanorámát nyújt a Mátrára és a Bükkre. A közelben található 'Barát' és 'Apáca' sziklaformációk szintén figyelemre méltóak.",
      ro: "Cetatea Sirok este cetatea din stâncă cu cea mai spectaculoasă locație din Ungaria. O mare parte a cetății a fost săpată direct în vârful muntelui, inclusiv tuneluri și pasaje. Oferă o vedere panoramică superbă asupra munților Mátra și Bükk. Formațiunile stâncoase din apropiere, numite 'Călugărul' (Barát) și 'Călugărița' (Apáca), merită de asemenea vizitate.",
      en: "Sirok Castle is the most spectacularly located rock castle in Hungary. A large part of the castle was carved directly into the mountain peak, including tunnels and passages. It offers a magnificent circular view of the Mátra and Bükk mountains. The rock formations nearby called 'Monk' (Barát) and 'Nun' (Apáca) are also worth seeing."
    },
    facts: {
      de: ["In den Fels gehauene Burg.", "Gelegen im östlichen Mátra-Gebirge.", "Bietet Panoramablick.", "Einzigartige Höhlensysteme in der Burg."],
      hu: ["Sziklába vájt vár.", "A Keleti-Mátrában található.", "Panorámás kilátást nyújt.", "Egyedülálló barlangrendszer a váron belül."],
      ro: ["Cetate săpată în stâncă.", "Situată în munții Mátra de Est.", "Oferă vedere panoramică.", "Sisteme de peșteri unice în interiorul cetății."],
      en: ["Castle carved into rock.", "Located in the Eastern Mátra Mountains.", "Offers panoramic views.", "Unique cave systems within the castle."]
    }
    },
    {
    id: "geschichte-egri-bazilika-extra",
    type: "geschichte",
    parent: "HU-HE",
    coords: [20.37, 47.90],
    name: { de: "Basilika von Eger", hu: "Egri Bazilika", ro: "Catedrala din Eger", en: "Basilica of Eger" },
    description: {
      de: "Die zweitgrößte religiöse Stätte Ungarns, ein klassizistisches Meisterwerk.",
      hu: "Magyarország második legnagyobb vallási épülete, klasszicista remekmű.",
      ro: "Al doilea cel mai mare lăcaș religios din Ungaria, o capodoperă clasicistă.",
      en: "Hungary's second largest religious site, a Classicist masterpiece."
    },
    descriptionAdvanced: {
      de: "Die Kathedrale von Eger wurde im 19. Jahrhundert nach Plänen von József Hild erbaut. Sie ist das einzige Gebäude in Eger, das den Domplatz dominiert. Mit ihrer monumentalen Freitreppe und den imposanten Statuen ist sie ein Symbol der Stadt. Im Inneren befinden sich beeindruckende Fresken und die größte Orgel Ungarns aus jener Zeit.",
      hu: "Az egri bazilika a 19. században épült Hild József tervei alapján. Ez az egyetlen épület, amely meghatározza az egri dóm teret. Monumentális lépcsősorával és impozáns szobraival a város jelképe. Belsejében lenyűgöző freskók és az ország korabeli legnagyobb orgonája található.",
      ro: "Catedrala din Eger a fost construită în secolul al XIX-lea după planurile lui József Hild. Este singura clădire care domină piața catedralei din Eger. Cu scara sa monumentală și statuile impunătoare, este un simbol al orașului. În interior se află fresce impresionante și cea mai mare orgă din Ungaria din acea epocă.",
      en: "The Basilica of Eger was built in the 19th century according to plans by József Hild. It is the only building that dominates the Cathedral Square of Eger. With its monumental staircase and imposing statues, it is a symbol of the city. Inside are stunning frescoes and the largest organ in Hungary from that time."
    },
    facts: {
      de: ["Zweitgrößte Kathedrale Ungarns.", "Klassizistische Architektur von József Hild.", "Monumentale Freitreppe.", "Besitzt eine berühmte Orgel."],
      hu: ["Magyarország második legnagyobb székesegyháza.", "Hild József klasszicista tervei alapján épült.", "Monumentális díszlépcső.", "Híres orgonával rendelkezik."],
      ro: ["A doua cea mai mare catedrală din Ungaria.", "Arhitectură clasicistă de József Hild.", "Scară monumentală.", "Deține o orgă faimoasă."],
      en: ["Second largest cathedral in Hungary.", "Classicist architecture by József Hild.", "Monumental staircase.", "Has a famous organ."]
    }
    },
    // HU-JN: Jász-Nagykun-Szolnok
    {
    id: "city-karcag-extra",
    type: "city",
    parent: "HU-JN",
    coords: [20.92, 47.31],
    name: { de: "Karcag", hu: "Karcag", ro: "Karcag", en: "Karcag" },
    description: {
      de: "Die Hauptstadt der Großkumanien-Region, bekannt für ihre Hammelgulasch-Tradition.",
      hu: "Nagykunság fővárosa, híres birkapörkölt-hagyományairól.",
      ro: "Capitala regiunii Cumania Mare, faimoasă pentru tradiția gulașului de berbec.",
      en: "The capital of the Great Cumania region, famous for its mutton stew tradition."
    },
    descriptionAdvanced: {
      de: "Karcag ist das geistige und kulturelle Zentrum von Großkumanien (Nagykunság). Die Stadt bewahrt stolz das Erbe der Kumanen. Das Karcager Hammelgulasch ist ein UNESCO-geschütztes immaterielles Kulturerbe. Sehenswert sind auch die Windmühle und das Györffy-István-Nagykun-Museum.",
      hu: "Karcag a Nagykunság szellemi és kulturális központja. A város büszkén őrzi a kunok örökségét. A karcagi birkapörkölt az UNESCO szellemi világörökség része. Látnivalói közé tartozik a szélmalom és a Györffy István Nagykun Múzeum.",
      ro: "Karcag este centrul spiritual și cultural al Cumaniei Mari (Nagykunság). Orașul păstrează cu mândrie moștenirea cumanilor. Gulașul de berbec din Karcag face parte din patrimoniul cultural imaterial UNESCO. Printre atracții se numără moara de vânt și Muzeul Nagykun Györffy István.",
      en: "Karcag is the spiritual and cultural center of Great Cumania (Nagykunság). The town proudly preserves the Cuman heritage. The Karcag mutton stew is part of the UNESCO intangible cultural heritage. Sights include the windmill and the Györffy István Nagykun Museum."
    },
    facts: {
      de: ["Hauptstadt von Großkumanien.", "Berühmt für Hammelgulasch.", "Besitzt eine historische Windmühle.", "Zentrum der Kumanen-Kultur."],
      hu: ["A Nagykunság fővárosa.", "Híres a birkapörköltjéről.", "Történelmi szélmalommal rendelkezik.", "A kunkultúra központja."],
      ro: ["Capitala Cumaniei Mari.", "Faimos pentru gulașul de berbec.", "Deține o moară de vânt istorică.", "Centrul culturii cumane."],
      en: ["Capital of Great Cumania.", "Famous for mutton stew.", "Has a historic windmill.", "Center of Cuman culture."]
    }
    },
    {
    id: "city-tiszafured-extra",
    type: "city",
    parent: "HU-JN",
    coords: [20.75, 47.61],
    name: { de: "Tiszafüred", hu: "Tiszafüred", ro: "Tiszafüred", en: "Tiszafüred" },
    description: {
      de: "Die Hauptstadt des Theiß-Sees, ein Paradies für Ökotourismus.",
      hu: "A Tisza-tó fővárosa, az ökoturizmus paradicsoma.",
      ro: "Capitala lacului Tisa, un paradis pentru ecoturism.",
      en: "The capital of Lake Tisza, a paradise for ecotourism."
    },
    descriptionAdvanced: {
      de: "Tiszafüred ist das wichtigste touristische Zentrum am Theiß-See. Die Stadt bietet zahlreiche Möglichkeiten für Wassersport, Angeln und Naturbeobachtungen. Das Kiss-Pál-Museum präsentiert die lokale Geschichte und die berühmte Tiszafüreder Keramik. In der Nähe befindet sich der Hortobágy-Nationalpark.",
      hu: "Tiszafüred a Tisza-tó legfontosabb turisztikai központja. A város számos lehetőséget kínál vízi sportokra, horgászatra és természetmegfigyelésre. A Kiss Pál Múzeum a helytörténetet és a híres tiszafüredi kerámiát mutatja be. A közelben található a Hortobágyi Nemzeti Park.",
      ro: "Tiszafüred este cel mai important centru turistic de la lacul Tisa. Orașul oferă numeroase oportunități pentru sporturi nautice, pescuit și observarea naturii. Muzeul Kiss Pál prezintă istoria locală și faimoasa ceramică de Tiszafüred. În apropiere se află Parcul Național Hortobágy.",
      en: "Tiszafüred is the most important tourist center on Lake Tisza. The town offers numerous opportunities for water sports, fishing, and nature watching. The Kiss Pál Museum presents local history and the famous Tiszafüred ceramics. Nearby is the Hortobágy National Park."
    },
    facts: {
      de: ["Tor zum Theiß-See.", "Zentrum der Keramikherstellung.", "Beliebter Badeort.", "Reiche Vogelwelt in der Umgebung."],
      hu: ["A Tisza-tó kapuja.", "Kerámiagyártás központja.", "Népszerű üdülőhely.", "Gazdag madárvilág a környéken."],
      ro: ["Poarta către lacul Tisa.", "Centru de fabricare a ceramicii.", "Stațiune populară.", "Lume a păsărilor bogată în împrejurimi."],
      en: ["Gateway to Lake Tisza.", "Center of ceramics production.", "Popular resort town.", "Rich birdlife in the area."]
    }
    },
    {
    id: "geo-tisza-to-extra",
    type: "geo",
    parent: "HU-JN",
    coords: [20.65, 47.60],
    name: { de: "Theiß-See", hu: "Tisza-tó", ro: "Lacul Tisa", en: "Lake Tisza" },
    description: {
      de: "Ungarns zweitgrößter See, ein künstliches Gewässer mit reicher Flora und Fauna.",
      hu: "Magyarország második legnagyobb tava, mesterséges vízfelület gazdag flórával és faunával.",
      ro: "Al doilea cel mai mare lac din Ungaria, un luciu de apă artificial cu floră și faună bogată.",
      en: "Hungary's second largest lake, a man-made body of water with rich flora and fauna."
    },
    descriptionAdvanced: {
      de: "Der Theiß-See (Tisza-tó) entstand in den 1970er Jahren durch die Anstauung der Theiß. Er ist ein einzigartiges Ökosystem mit Inseln, Kanälen und riesigen offenen Wasserflächen. Ein großer Teil des Sees gehört zum UNESCO-Welterbe Hortobágy. Der Öko-Zentrum in Poroszló beherbergt das größte Süßwasseraquarium Europas.",
      hu: "A Tisza-tó az 1970-es években jött létre a Tisza felduzzasztásával. Egyedülálló ökoszisztéma szigetekkel, csatornákkal és hatalmas nyílt vízfelületekkel. A tó nagy része a Hortobágyi Világörökség része. A poroszlói Ökocentrum ad otthont Európa legnagyobb édesvízi akváriumának.",
      ro: "Lacul Tisa a fost creat în anii 1970 prin bararea râului Tisa. Este un ecosistem unic cu insule, canale și suprafețe mari de apă deschisă. O mare parte a lacului face parte din patrimoniul mondial UNESCO Hortobágy. Ecocentrul din Poroszló găzduiește cel mai mare acvariu de apă dulce din Europa.",
      en: "Lake Tisza was created in the 1970s by damming the Tisza river. It is a unique ecosystem with islands, channels, and vast open water areas. A large part of the lake is part of the Hortobágy UNESCO World Heritage site. The Eco-center in Poroszló houses the largest freshwater aquarium in Europe."
    },
    facts: {
      de: ["Künstlich angelegter See.", "Zweitgrößter See Ungarns.", "Teil des UNESCO-Welterbes.", "Beherbergt ein riesiges Süßwasseraquarium."],
      hu: ["Mesterségesen létrehozott tó.", "Magyarország második legnagyobb tava.", "Az UNESCO Világörökség része.", "Hatalmas édesvízi akváriummal rendelkezik."],
      ro: ["Lac creat artificial.", "Al doilea cel mai mare lac din Ungaria.", "Parte a patrimoniului mondial UNESCO.", "Găzduiește un acvariu de apă dulce uriaș."],
      en: ["Man-made lake.", "Second largest lake in Hungary.", "Part of the UNESCO World Heritage.", "Houses a huge freshwater aquarium."]
    }
    },
    {
    id: "geschichte-szolnoki-muvesztelep-extra",
    type: "geschichte",
    parent: "HU-JN",
    coords: [20.20, 47.17],
    name: { de: "Künstlerkolonie Szolnok", hu: "Szolnoki Művésztelep", ro: "Colonia de Artiști din Szolnok", en: "Szolnok Artists' Colony" },
    description: {
      de: "Die älteste Künstlerkolonie Ungarns, gelegen am Zusammenfluss von Theiß und Zagyva.",
      hu: "Magyarország legrégebbi művésztelepe, a Tisza és a Zagyva találkozásánál.",
      ro: "Cea mai veche colonie de artiști din Ungaria, situată la confluența râurilor Tisa și Zagyva.",
      en: "The oldest artists' colony in Hungary, located at the confluence of the Tisza and Zagyva rivers."
    },
    descriptionAdvanced: {
      de: "Die Künstlerkolonie Szolnok wurde 1902 gegründet und spielte eine wichtige Rolle in der Entwicklung der modernen ungarischen Malerei. Die Lage am Flussufer bot den Künstlern einzigartige Lichtverhältnisse und Motive. Heute ist sie ein lebendiges Kulturzentrum mit Ateliers und Ausstellungsräumen.",
      hu: "A Szolnoki Művésztelepet 1902-ben alapították, és fontos szerepet játszott a modern magyar festészet fejlődésében. A folyóparti elhelyezkedés egyedülálló fényviszonyokat és témákat kínált a művészeknek. Ma is élő kulturális központ műtermekkel és kiállítóterekkel.",
      ro: "Colonia de artiști din Szolnok a fost fondată în 1902 și a jucat un rol important în dezvoltarea picturii moderne maghiare. Locația de pe malul râului a oferit artiștilor condiții de lumină și motive unice. Astăzi este un centru cultural viu, cu ateliere și spații expoziționale.",
      en: "The Szolnok Artists' Colony was founded in 1902 and played an important role in the development of modern Hungarian painting. The riverside location offered artists unique lighting conditions and subjects. Today it is a vibrant cultural center with studios and exhibition spaces."
    },
    facts: {
      de: ["Gegründet im Jahr 1902.", "Älteste Künstlerkolonie des Landes.", "Befindet sich in einem schönen Park.", "Wichtiger Ort der ungarischen Kunstgeschichte."],
      hu: ["1902-ben alapították.", "Az ország legrégebbi művésztelepe.", "Szép parkos környezetben található.", "A magyar művészettörténet fontos helyszíne."],
      ro: ["Fondată în anul 1902.", "Cea mai veche colonie de artiști din țară.", "Situată într-un parc frumos.", "Loc important al istoriei artei maghiare."],
      en: ["Founded in 1902.", "Oldest artists' colony in the country.", "Located in a beautiful park.", "Important site of Hungarian art history."]
    }
    },
    {
    id: "geschichte-tiszaderzs-romtemplom-extra",
    type: "geschichte",
    parent: "HU-JN",
    coords: [20.63, 47.50],
    name: { de: "Kirchenruine von Tiszaderzs", hu: "Tiszaderzsi romtemplom", ro: "Ruina bisericii din Tiszaderzs", en: "Church Ruin of Tiszaderzs" },
    description: {
      de: "Eine mittelalterliche Kirchenruine aus dem 13. Jahrhundert in der Nähe des Theiß-Sees.",
      hu: "13. századi középkori templomrom a Tisza-tó közelében.",
      ro: "O ruină de biserică medievală din secolul al XIII-lea lângă lacul Tisa.",
      en: "A medieval church ruin from the 13th century near Lake Tisza."
    },
    descriptionAdvanced: {
      de: "Die Kirchenruine von Tiszaderzs ist ein bedeutendes Denkmal der romanischen Architektur. Die Kirche wurde während der Türkenkriege zerstört, aber ihre Mauern stehen noch heute eindrucksvoll in der Landschaft. Sie ist ein stilles Zeugnis der mittelalterlichen Siedlungsgeschichte der Region.",
      hu: "A tiszaderzsi templomrom a román kori építészet jelentős emléke. A templom a török hódoltság idején pusztult el, de falai ma is impozánsan magasodnak a tájban. A régió középkori településtörténetének néma tanúja.",
      ro: "Ruina bisericii din Tiszaderzs este un monument important al arhitecturii romanice. Biserica a fost distrusă în timpul ocupației otomane, dar zidurile sale se ridică și astăzi impunător în peisaj. Este un martor tăcut al istoriei așezărilor medievale din regiune.",
      en: "The church ruin of Tiszaderzs is a significant monument of Romanesque architecture. The church was destroyed during the Ottoman wars, but its walls still rise impressively in the landscape today. It is a silent witness to the medieval settlement history of the region."
    },
    facts: {
      de: ["Erbaut im 13. Jahrhundert.", "Romanischer Stil.", "Baudenkmal der Árpád-Zeit.", "Gelegen in einer ruhigen Umgebung."],
      hu: ["A 13. században épült.", "Román stílusú.", "Árpád-kori műemlék.", "Nyugodt környezetben található."],
      ro: ["Construită în secolul al XIII-lea.", "Stil romanic.", "Monument din epoca Arpadiană.", "Situată într-un cadru liniștit."],
      en: ["Built in the 13th century.", "Romanesque style.", "Architectural monument from the Árpád era.", "Located in a quiet setting."]
    }
    },
    // HU-KE: Komárom-Esztergom
    {
    id: "city-dorog-extra",
    type: "city",
    parent: "HU-KE",
    coords: [18.73, 47.72],
    name: { de: "Dorog", hu: "Dorog", ro: "Dorog", en: "Dorog" },
    description: {
      de: "Dorog ist eine traditionelle Bergbaustadt im Pilis-Gebirge.",
      hu: "Dorog hagyományos bányászváros a Pilis hegységben.",
      ro: "Dorog este un oraș minier tradițional în munții Pilis.",
      en: "Dorog is a traditional mining town in the Pilis Mountains."
    },
    descriptionAdvanced: {
      de: "Dorog blickt auf eine über 200-jährige Bergbaugeschichte zurück. Die Stadt liegt im Tal zwischen dem Pilis- und dem Gerecse-Gebirge. Nach der Einstellung des Kohlebergbaus hat sich Dorog zu einem modernen Industriezentrum entwickelt. Der Palatinus-See in der Nähe ist ein beliebtes Naherholungsgebiet.",
      hu: "Dorog több mint 200 éves bányászati múltra tekint vissza. A város a Pilis és a Gerecse közötti völgyben fekszik. A szénbányászat megszűnése után Dorog modern ipari központtá fejlődött. A közeli Palatinus-tó népszerű pihenőhely.",
      ro: "Dorog are o istorie minieră de peste 200 de ani. Orașul se află în valea dintre munții Pilis și Gerecse. După încetarea exploatării cărbunelui, Dorog s-a dezvoltat într-un centru industrial modern. Lacul Palatinus din apropiere este o zonă populară de recreere.",
      en: "Dorog has a mining history of over 200 years. The town is located in the valley between the Pilis and Gerecse mountains. After the cessation of coal mining, Dorog developed into a modern industrial center. The nearby Palatinus Lake is a popular recreation spot."
    },
    facts: {
      de: ["Historisches Bergbauzentrum.", "Liegt am Fuße des Pilis-Gebirges.", "Besitzt ein Bergbaumuseum.", "Bekannt für seine Sporttraditionen."],
      hu: ["Történelmi bányászati központ.", "A Pilis lábánál fekszik.", "Bányászati múzeummal rendelkezik.", "Híres sportmúltjáról."],
      ro: ["Centru minier istoric.", "Situat la poalele munților Pilis.", "Deține un muzeu al mineritului.", "Cunoscut pentru tradițiile sale sportive."],
      en: ["Historic mining center.", "Located at the foot of the Pilis Mountains.", "Has a mining museum.", "Famous for its sporting traditions."]
    }
    },
    {
    id: "city-orosz lany-extra",
    type: "city",
    parent: "HU-KE",
    coords: [18.31, 47.48],
    name: { de: "Oroszlány", hu: "Oroszlány", ro: "Oroszlány", en: "Oroszlány" },
    description: {
      de: "Oroszlány ist bekannt für seine Bergbauvergangenheit und das nahegelegene Kamaldulenser-Kloster.",
      hu: "Oroszlány bányászati múltjáról és a közeli Kamalduli Remeteségről ismert.",
      ro: "Oroszlány este cunoscut pentru trecutul său minier și Schitul Camaldulenz din apropiere.",
      en: "Oroszlány is known for its mining past and the nearby Camaldolese Hermitage."
    },
    descriptionAdvanced: {
      de: "Oroszlány entwickelte sich im 20. Jahrhundert zu einer bedeutenden Bergbaustadt. Heute ist die Stadt für das nahegelegene Majkpuszta bekannt, wo sich die Kamaldulenser-Eremitage befindet – eine einzigartige Anlage aus kleinen Einsiedlerhäusern. Die Stadt selbst ist ein regionales Industriezentrum.",
      hu: "Oroszlány a 20. században vált jelentős bányászvárossá. Ma a város a közeli Majkpusztáról híres, ahol a Kamalduli Remeteség található – egy egyedülálló, kis cellaházakból álló épületegyüttes. A város maga regionális ipari központ.",
      ro: "Oroszlány s-a dezvoltat într-un oraș minier important în secolul al XX-lea. Astăzi, orașul este faimos pentru localitatea apropiată Majkpuszta, unde se află Schitul Camaldulenz – un complex unic de mici case de pustnici. Orașul în sine este un centru industrial regional.",
      en: "Oroszlány developed into a significant mining town in the 20th century. Today, the town is famous for the nearby Majkpuszta, where the Camaldolese Hermitage is located – a unique complex of small hermit houses. The town itself is a regional industrial center."
    },
    facts: {
      de: ["Ehemalige Bergbaustadt.", "In der Nähe liegt die Eremitage Majk.", "Besitzt ein Bergbaumuseum.", "Bedeutende Energiewirtschaft."],
      hu: ["Egykori bányászváros.", "Közelében található a majki remeteség.", "Bányászati múzeuma van.", "Jelentős energiagazdálkodás."],
      ro: ["Fost oraș minier.", "În apropiere se află schitul Majk.", "Deține un muzeu al mineritului.", "Sector energetic important."],
      en: ["Former mining town.", "The Majk Hermitage is located nearby.", "Has a mining museum.", "Significant energy industry."]
    }
    },
    {
    id: "geo-gerecse-extra",
    type: "geo",
    parent: "HU-KE",
    coords: [18.45, 47.65],
    name: { de: "Gerecse", hu: "Gerecse", ro: "Gerecse", en: "Gerecse" },
    description: {
      de: "Ein Gebirge im Norden Transdanubiens, bekannt für seinen roten Marmor.",
      hu: "Észak-dunántúli hegység, amely a vörös márványáról ismert.",
      ro: "Un lanț muntos în nordul Transdanubiei, cunoscut pentru marmura sa roșie.",
      en: "A mountain range in northern Transdanubia, known for its red marble."
    },
    descriptionAdvanced: {
      de: "Das Gerecse-Gebirge ist ein Kalksteinmassiv zwischen Tatabánya und der Donau. Es ist weltberühmt für den 'roten Marmor' von Tardos, der eigentlich ein dichter Kalkstein ist und in vielen historischen Gebäuden Europas verwendet wurde. Das Gebirge ist reich an Höhlen und bietet wunderschöne Wanderwege durch Buchen- und Eichenwälder.",
      hu: "A Gerecse hegység egy mészkőhegység Tatabánya és a Duna között. Világhírű a tardosi 'vörös márványról', amely valójában egy tömör mészkő, és Európa számos történelmi épületében felhasználták. A hegység barlangokban gazdag, és gyönyörű túraútvonalakat kínál bükkösökön és tölgyeseken át.",
      ro: "Munții Gerecse sunt un masiv calcaros între Tatabánya și Dunăre. Sunt renumiți în întreaga lume pentru „marmura roșie” de Tardos, care este de fapt un calcar dens și a fost folosită în multe clădiri istorice din Europa. Munții sunt bogați în peșteri și oferă trasee de drumeție frumoase prin păduri de fag și stejar.",
      en: "The Gerecse Mountains are a limestone massif between Tatabánya and the Danube. They are world-famous for the 'red marble' of Tardos, which is actually a dense limestone and has been used in many historic buildings across Europe. The mountains are rich in caves and offer beautiful hiking trails through beech and oak forests."
    },
    facts: {
      de: ["Bekannt für roten Marmor.", "Höchster Gipfel: Nagy-Gerecse (633 m).", "Reich an Kalksteinhöhlen.", "Wichtiger Fundort von Fossilien."],
      hu: ["Vörös márványáról nevezetes.", "Legmagasabb csúcsa a Nagy-Gerecse (633 m).", "Mészkőbarlangokban gazdag.", "Fontos kövületlelőhely."],
      ro: ["Cunoscut pentru marmura roșie.", "Cel mai înalt vârf: Nagy-Gerecse (633 m).", "Bogat în peșteri de calcar.", "Sursă importantă de fosile."],
      en: ["Famous for red marble.", "Highest peak: Nagy-Gerecse (633 m).", "Rich in limestone caves.", "Important site for fossils."]
    }
    },
    {
    id: "geschichte-turul-emlekmu-extra",
    type: "geschichte",
    parent: "HU-KE",
    coords: [18.41, 47.58],
    name: { de: "Turul-Denkmal", hu: "Turul-emlékmű", ro: "Monumentul Turul", en: "Turul Monument" },
    description: {
      de: "Die größte Vogelstatue Mitteleuropas, gelegen auf dem Kő-Berg über Tatabánya.",
      hu: "Közép-Európa legnagyobb madárszobra, a Tatabánya feletti Kő-hegyen.",
      ro: "Cea mai mare statuie de pasăre din Europa Centrală, situată pe muntele Kő deasupra orașului Tatabánya.",
      en: "The largest bird statue in Central Europe, located on Kő Hill above Tatabánya."
    },
    descriptionAdvanced: {
      de: "Das Turul-Denkmal wurde 1907 zum Gedenken an den Sieg der Ungarn über Svatopluk errichtet. Der Turul ist ein mythischer Vogel der ungarischen Sagenwelt. Die Bronzestatue hat eine Flügelspannweite von 15 Metern. Vom Denkmal aus bietet sich ein großartiger Blick auf die Stadt Tatabánya und die Umgebung.",
      hu: "A Turul-emlékmű 1907-ben épült a magyarok Szvatopluk feletti győzelmének emlékére. A turul a magyar mondavilág mitikus madara. A bronzszobor szárnyfesztávolsága 15 méter. Az emlékműtől nagyszerű kilátás nyílik Tatabányára és a környékre.",
      ro: "Monumentul Turul a fost ridicat în 1907 pentru a comemora victoria maghiarilor asupra lui Svatopluk. Turul este o pasăre mitică din mitologia maghiară. Statuia de bronz are o anvergură a aripilor de 15 metri. De la monument se oferă o vedere superbă asupra orașului Tatabánya și a împrejurimilor.",
      en: "The Turul Monument was erected in 1907 to commemorate the victory of the Hungarians over Svatopluk. The Turul is a mythical bird of Hungarian legends. The bronze statue has a wingspan of 15 meters. From the monument, there is a magnificent view of the city of Tatabánya and its surroundings."
    },
    facts: {
      de: ["Größte Vogelstatue Mitteleuropas.", "Flügelspannweite von 15 Metern.", "Erbaut 1907.", "Bietet weite Aussicht."],
      hu: ["Közép-Európa legnagyobb madárszobra.", "15 méteres szárnyfesztávolság.", "1907-ben készült.", "Pazar kilátást nyújt."],
      ro: ["Cea mai mare statuie de pasăre din Europa Centrală.", "Anvergura aripilor de 15 metri.", "Construit în 1907.", "Oferă o vedere panoramică."],
      en: ["Largest bird statue in Central Europe.", "Wingspan of 15 meters.", "Built in 1907.", "Offers wide views."]
    }
    },
    {
    id: "geschichte-tatai-var-extra",
    type: "geschichte",
    parent: "HU-KE",
    coords: [18.318, 47.648],
    name: { de: "Burg von Tata", hu: "Tatai vár", ro: "Cetatea din Tata", en: "Tata Castle" },
    description: {
      de: "Eine wunderschöne Wasserburg am Ufer des Öreg-Sees in Tata.",
      hu: "Gyönyörű vízi vár Tatán, az Öreg-tó partján.",
      ro: "O cetate de apă frumoasă pe malul lacului Öreg din Tata.",
      en: "A beautiful water castle on the shores of Lake Öreg in Tata."
    },
    descriptionAdvanced: {
      de: "Die Burg von Tata wurde Ende des 14. Jahrhunderts erbaut und war eine beliebte Sommerresidenz der ungarischen Könige, insbesondere unter Sigismund von Luxemburg und Matthias Corvinus. Die Burg ist von einem Wassergraben umgeben und bietet eine romantische Kulisse direkt am See. Heute beherbergt sie das Kuny-Domokos-Museum.",
      hu: "A tatai vár a 14. század végén épült, és a magyar királyok, különösen Luxemburgi Zsigmond és Hunyadi Mátyás kedvelt nyári rezidenciája volt. A várat vizesárok veszi körül, és romantikus látványt nyújt közvetlenül a tó partján. Ma a Kuny Domokos Múzeumnak ad otthont.",
      ro: "Cetatea din Tata a fost construită la sfârșitul secolului al XIV-lea și a fost o reședință de vară preferată a regilor maghiari, în special sub Sigismund de Luxemburg și Matei Corvin. Cetatea este înconjurată de un șanț cu apă și oferă un cadru romantic chiar pe malul lacului. Astăzi găzduiește Muzeul Kuny Domokos.",
      en: "Tata Castle was built at the end of the 14th century and was a favorite summer residence of Hungarian kings, especially under Sigismund of Luxembourg and Matthias Corvinus. The castle is surrounded by a moat and offers a romantic setting directly on the lakeshore. Today it houses the Kuny Domokos Museum."
    },
    facts: {
      de: ["Ehemalige königliche Residenz.", "Liegt am Öreg-See.", "Umgeben von einem Wassergraben.", "Beherbergt ein Museum."],
      hu: ["Egykori királyi rezidencia.", "Az Öreg-tó partján áll.", "Vizesárok veszi körül.", "Múzeumnak ad otthont."],
      ro: ["Fostă reședință regală.", "Situată pe malul lacului Öreg.", "Înconjurată de un șanț cu apă.", "Găzduiește un muzeu."],
      en: ["Former royal residence.", "Located on Lake Öreg.", "Surrounded by a moat.", "Houses a museum."]
    }
    },
    // HU-NO: Nógrád
    {
    id: "city-paszto-extra",
    type: "city",
    parent: "HU-NO",
    coords: [19.69, 47.92],
    name: { de: "Pásztó", hu: "Pásztó", ro: "Pásztó", en: "Pásztó" },
    description: {
      de: "Eine historische Kleinstadt am Fuße des Cserhát- und Mátra-Gebirges.",
      hu: "Történelmi kisváros a Cserhát és a Mátra lábánál.",
      ro: "Un orășel istoric la poalele munților Cserhát și Mátra.",
      en: "A historic small town at the foot of the Cserhát and Mátra mountains."
    },
    descriptionAdvanced: {
      de: "Pásztó ist eine der ältesten Siedlungen der Region. Die Stadt ist bekannt für ihre mittelalterlichen Denkmäler, darunter die Zisterzienserabtei und das gotische Schulmeisterhaus. Pásztó dient als kulturelles Zentrum des Zagyva-Tals und ist ein idealer Ausgangspunkt für Wanderungen.",
      hu: "Pásztó a régió egyik legrégebbi települése. A város középkori műemlékeiről ismert, mint például a ciszterci apátság és a gótikus oskolamester háza. Pásztó a Zagyva-völgy kulturális központja, és ideális kiindulópont túrázáshoz.",
      ro: "Pásztó este una dintre cele mai vechi așezări din regiune. Orașul este cunoscut pentru monumentele sale medievale, inclusiv abația cisterciană și casa gotică a maestrului școlii. Pásztó servește ca centru cultural al văii Zagyva și este un punct de plecare ideal pentru drumeții.",
      en: "Pásztó is one of the oldest settlements in the region. The town is known for its medieval monuments, including the Cistercian Abbey and the Gothic schoolmaster's house. Pásztó serves as the cultural center of the Zagyva Valley and is an ideal starting point for hiking."
    },
    facts: {
      de: ["Ehemalige Zisterzienserabtei.", "Besitzt ein gotisches Schulhaus.", "Tor zum Mátra-Gebirge.", "Reiche mittelalterliche Geschichte."],
      hu: ["Egykori ciszterci apátság.", "Gótikus iskolamesteri háza van.", "A Mátra kapuja.", "Gazdag középkori történelem."],
      ro: ["Fostă abație cisterciană.", "Deține o școală gotică.", "Poarta către munții Mátra.", "Bogat în istorie medievală."],
      en: ["Former Cistercian abbey.", "Has a Gothic schoolmaster's house.", "Gateway to the Mátra Mountains.", "Rich medieval history."]
    }
    },
    {
    id: "city-szecseny-extra",
    type: "city",
    parent: "HU-NO",
    coords: [19.51, 48.08],
    name: { de: "Szécsény", hu: "Szécsény", ro: "Szécsény", en: "Szécsény" },
    description: {
      de: "Szécsény ist eine historische Stadt, in der wichtige Nationalversammlungen stattfanden.",
      hu: "Szécsény történelmi város, ahol fontos országgyűléseket tartottak.",
      ro: "Szécsény este un oraș istoric unde au avut loc adunări naționale importante.",
      en: "Szécsény is a historic town where important national assemblies were held."
    },
    descriptionAdvanced: {
      de: "Szécsény ist berühmt für die Nationalversammlung von 1705, bei der Ferenc Rákóczi II. zum regierenden Fürsten gewählt wurde. Das Forgách-Schloss ist ein bedeutendes Barockgebäude, das heute das Kubinyi-Ferenc-Museum beherbergt. Die Altstadt bewahrt viele mittelalterliche und barocke Gebäude.",
      hu: "Szécsény az 1705-ös országgyűlésről nevezetes, ahol II. Rákóczi Ferencet vezérlő fejedelemmé választották. A Forgách-kastély jelentős barokk épület, amely ma a Kubinyi Ferenc Múzeumnak ad otthont. Az óváros számos középkori és barokk épületet őriz.",
      ro: "Szécsény este faimos pentru adunarea națională din 1705, unde Francisc Rákóczi al II-lea a fost ales principe regent. Castelul Forgách este o clădire barocă importantă, care găzduiește astăzi Muzeul Kubinyi Ferenc. Orașul vechi păstrează multe clădiri medievale și baroce.",
      en: "Szécsény is famous for the national assembly of 1705, where Ferenc Rákóczi II was elected ruling prince. The Forgách Castle is a significant Baroque building that today houses the Kubinyi Ferenc Museum. The old town preserves many medieval and Baroque buildings."
    },
    facts: {
      de: ["Ort der Rákóczi-Nationalversammlung.", "Besitzt das Forgách-Schloss.", "Historischer Hauptplatz.", "Bedeutendes Franziskanerkloster."],
      hu: ["Rákóczi-országgyűlés helyszíne.", "Forgách-kastély otthona.", "Történelmi főtér.", "Jelentős ferences kolostor."],
      ro: ["Locul adunării naționale a lui Rákóczi.", "Găzduiește castelul Forgách.", "Piață principală istorică.", "Mănăstire franciscană importantă."],
      en: ["Site of the Rákóczi national assembly.", "Home to the Forgách Castle.", "Historic main square.", "Significant Franciscan monastery."]
    }
    },
    {
    id: "geo-karanc-extra",
    type: "geo",
    parent: "HU-NO",
    coords: [19.79, 48.16],
    name: { de: "Karancs", hu: "Karancs", ro: "Karancs", en: "Karancs" },
    description: {
      de: "Der 'Olymp der Paloczen', ein markanter Berg an der ungarisch-slowakischen Grenze.",
      hu: "A 'palóc Olimposz', jellegzetes hegy a magyar-szlovák határon.",
      ro: "„Olimpul Palocilor”, un munte distinctiv la granița ungaro-slovacă.",
      en: "The 'Olympus of the Palóc', a distinctive mountain on the Hungarian-Slovak border."
    },
    descriptionAdvanced: {
      de: "Der Karancs ist der höchste Gipfel des Karancs-Gebirges (729 m). Er wird oft als der Olymp der Paloczen (einer lokalen Volksgruppe) bezeichnet. Auf dem Gipfel steht ein Aussichtsturm, der einen weiten Blick über das Nógráder Bergland und bis in die Slowakei bietet. Die Region ist reich an Sagen und Legenden.",
      hu: "A Karancs a Karancs-hegység legmagasabb csúcsa (729 m). Gyakran nevezik a palócok Olimposzának. A csúcson kilátó áll, ahonnan pazar kilátás nyílik a Nógrádi-dombságra és Szlovákiára is. A környék gazdag mondákban és legendákban.",
      ro: "Karancs este cel mai înalt vârf din munții Karancs (729 m). Este adesea numit Olimpul palocilor (un grup etnic local). În vârf se află un turn de observație care oferă o vedere largă asupra dealurilor Nógrád și până în Slovacia. Regiunea este bogată în mituri și legende.",
      en: "The Karancs is the highest peak of the Karancs Mountains (729 m). It is often referred to as the Olympus of the Palóc (a local ethnic group). At the summit stands a lookout tower offering a wide view over the Nógrád hills and into Slovakia. The region is rich in myths and legends."
    },
    facts: {
      de: ["Höchster Gipfel des Karancs-Gebirges (729 m).", "Grenzberg zur Slowakei.", "Wird 'Olymp der Paloczen' genannt.", "Aussichtsturm auf dem Gipfel."],
      hu: ["A Karancs-hegység legmagasabb pontja (729 m).", "Határhegy Szlovákia felé.", "A 'palóc Olimposzként' ismerik.", "Kilátó a hegytetőn."],
      ro: ["Cel mai înalt vârf din munții Karancs (729 m).", "Munte de frontieră cu Slovacia.", "Numit „Olimpul Palocilor”.", "Turn de observație în vârf."],
      en: ["Highest peak of the Karancs Mountains (729 m).", "Border mountain with Slovakia.", "Known as the 'Olympus of the Palóc'.", "Lookout tower on the summit."]
    }
    },
    {
    id: "geschichte-somoskoi-var-extra",
    type: "geschichte",
    parent: "HU-NO",
    coords: [19.85, 48.17],
    name: { de: "Burg von Somoskő", hu: "Somoskői vár", ro: "Cetatea Somoskő", en: "Somoskő Castle" },
    description: {
      de: "Eine beeindruckende Burgruine direkt an der Grenze, bekannt für ihre Basaltsäulen.",
      hu: "Lenyűgöző várrom közvetlenül a határon, bazaltorgonáiról nevezetes.",
      ro: "O ruină de cetate impresionantă chiar pe graniță, faimoasă pentru coloanele sale de bazalt.",
      en: "An impressive castle ruin right on the border, famous for its basalt columns."
    },
    descriptionAdvanced: {
      de: "Die Burg von Somoskő liegt auf einem steilen Basaltkegel. Obwohl die Burg heute technisch gesehen in der Slowakei liegt, ist sie vom ungarischen Dorf Somoskő aus am besten erreichbar. Weltberühmt sind die 'Basaltorgeln' – gebogene Basaltsäulen, die durch vulkanische Aktivität entstanden sind. Die Burg spielte eine wichtige Rolle in den Grenzkriegen gegen die Türken.",
      hu: "A somoskői vár egy meredek bazaltkúpon áll. Bár a vár ma technikailag Szlovákiához tartozik, a magyarországi Somoskő faluból érhető el a legkönnyebben. Világhírűek a közelében található 'bazaltorgonák' – íves bazaltoszlopok, amelyek vulkáni tevékenység hatására jöttek létre. A vár fontos szerepet játszott a török elleni végvári harcokban.",
      ro: "Cetatea Somoskő se află pe un con de bazalt abrupt. Deși cetatea aparține astăzi tehnic Slovaciei, este cel mai ușor accesibilă din satul maghiar Somoskő. „Orga de bazalt” – coloane de bazalt curbate formate prin activitate vulcanică – este faimoasă în întreaga lume. Cetatea a jucat un rol important în luptele de frontieră împotriva turcilor.",
      en: "Somoskő Castle stands on a steep basalt cone. Although the castle today technically belongs to Slovakia, it is most easily accessible from the Hungarian village of Somoskő. The 'basalt organs' – curved basalt columns formed by volcanic activity – are world-famous. The castle played an important role in the border wars against the Turks."
    },
    facts: {
      de: ["Liegt auf einem Basaltkegel.", "Berühmte Basaltorgeln daneben.", "Grenzburg.", "Bietet tolle Aussicht auf das Karancs-Gebiet."],
      hu: ["Bazaltkúpon fekszik.", "Híres bazaltorgonák a közelében.", "Határvár.", "Remek kilátás a Karancs vidékére."],
      ro: ["Situată pe un con de bazalt.", "Faimoasele orgi de bazalt alături.", "Cetate de frontieră.", "Oferă o vedere minunată asupra zonei Karancs."],
      en: ["Located on a basalt cone.", "Famous basalt organs nearby.", "Border castle.", "Offers great views of the Karancs area."]
    }
    },
    {
    id: "geschichte-szandavari-varrom-extra",
    type: "geschichte",
    parent: "HU-NO",
    coords: [19.41, 47.91],
    name: { de: "Burgruine Szanda", hu: "Szandavári várrom", ro: "Ruina cetății Szanda", en: "Szanda Castle Ruin" },
    description: {
      de: "Eine mittelalterliche Ruine auf einem vulkanischen Gipfel im Cserhát-Gebirge.",
      hu: "Középkori rom egy vulkáni csúcson a Cserhátban.",
      ro: "O ruină medievală pe un vârf vulcanic în munții Cserhát.",
      en: "A medieval ruin on a volcanic peak in the Cserhát Mountains."
    },
    descriptionAdvanced: {
      de: "Die Burg Szanda wurde im 13. Jahrhundert auf einem markanten Andesit-Gipfel erbaut. Sie diente im Mittelalter als Verteidigungsanlage. Heute sind nur noch einige Mauerreste erhalten, aber der Ort ist wegen seiner spektakulären geologischen Formationen und des Rundpanoramas sehr beliebt.",
      hu: "A szandai vár a 13. században épült egy jellegzetes andezitcsúcson. A középkorban védelmi célokat szolgált. Ma már csak néhány falmaradvány látható, de a helyszín látványos geológiai formációi és a körpanoráma miatt igen kedvelt.",
      ro: "Cetatea Szanda a fost construită în secolul al XIII-lea pe un vârf de andezit distinctiv. În Evul Mediu a servit ca structură defensivă. Astăzi mai sunt vizibile doar câteva resturi de ziduri, dar locația este foarte populară pentru formațiunile geologice spectaculoase și panorama circulară.",
      en: "Szanda Castle was built in the 13th century on a distinctive andesite peak. It served as a defensive structure in the Middle Ages. Today only a few remnants of walls are visible, but the site is very popular for its spectacular geological formations and circular panorama."
    },
    facts: {
      de: ["Erbaut auf einem Andesit-Gipfel.", "Mittelalterliche Festung.", "Bekannt für das 360-Grad-Panorama.", "Wichtiger Ort für Geologen."],
      hu: ["Andezitcsúcson épült.", "Középkori erődítmény.", "360 fokos panorámájáról ismert.", "Fontos geológiai lelőhely."],
      ro: ["Construită pe un vârf de andezit.", "Fortăreață medievală.", "Cunoscută pentru panorama de 360 de grade.", "Loc important pentru geologi."],
      en: ["Built on an andesite peak.", "Medieval fortress.", "Known for the 360-degree panorama.", "Important site for geologists."]
    }
    },
    // HU-PE: Pest
    {
    id: "city-rackeve-extra",
    type: "city",
    parent: "HU-PE",
    coords: [18.94, 47.16],
    name: { de: "Ráckeve", hu: "Ráckeve", ro: "Ráckeve", en: "Ráckeve" },
    description: {
      de: "Eine charmante Stadt an der Csepel-Donau, bekannt für ihr Savoyer Schloss.",
      hu: "Hangulatos város a Csepel-Duna mentén, a Savoyai-kastélyról ismert.",
      ro: "Un oraș fermecător pe brațul Csepel al Dunării, cunoscut pentru castelul Savoyai.",
      en: "A charming town along the Csepel Danube, known for its Savoy Castle."
    },
    descriptionAdvanced: {
      de: "Ráckeve liegt auf der Insel Csepel. Das Savoyer Schloss, erbaut von Prinz Eugen von Savoyen, ist ein Meisterwerk des Barock. Die Stadt besitzt auch die einzige gotische serbisch-orthodoxe Kirche Ungarns. Der Wochenmarkt am Donauufer ist weithin bekannt für seine Atmosphäre.",
      hu: "Ráckeve a Csepel-szigeten fekszik. A Savoyai-kastély, amelyet Savoyai Jenő herceg építtetett, a barokk építészet remekműve. A városban található Magyarország egyetlen gótikus szerb ortodox temploma is. A Duna-parti hetivásár messze földön híres a hangulatáról.",
      ro: "Ráckeve se află pe insula Csepel. Castelul Savoyai, construit de prințul Eugen de Savoia, este o capodoperă a barocului. Orașul deține și singura biserică ortodoxă sârbă gotică din Ungaria. Piața săptămânală de pe malul Dunării este renumită pentru atmosfera sa.",
      en: "Ráckeve is located on Csepel Island. The Savoy Castle, built by Prince Eugene of Savoy, is a masterpiece of Baroque architecture. The town also has the only Gothic Serbian Orthodox church in Hungary. The weekly market on the Danube bank is widely known for its atmosphere."
    },
    facts: {
      de: ["Barockes Savoyer Schloss.", "Einzige gotische serbische Kirche Ungarns.", "Liegt an der 'Kleinen Donau'.", "Berühmt für den Boot-Markt."],
      hu: ["Barokk Savoyai-kastély.", "Magyarország egyetlen gótikus szerb temploma.", "A Kis-Duna mentén fekszik.", "Híres a csónakos piacáról."],
      ro: ["Castel baroc Savoyai.", "Singura biserică sârbă gotică din Ungaria.", "Situat pe „Dunărea Mică”.", "Faimos pentru piața sa cu bărci."],
      en: ["Baroque Savoy Castle.", "Only Gothic Serbian church in Hungary.", "Located on the 'Small Danube'.", "Famous for its boat market."]
    }
    },
    {
    id: "city-nagymaros-extra",
    type: "city",
    parent: "HU-PE",
    coords: [18.96, 47.79],
    name: { de: "Nagymaros", hu: "Nagymaros", ro: "Nagymaros", en: "Nagymaros" },
    description: {
      de: "Eine malerische Stadt am Donauknie, gegenüber der Burg Visegrád.",
      hu: "Festői város a Dunakanyarban, szemben a visegrádi várral.",
      ro: "Un oraș pitoresc în Cotul Dunării, vis-à-vis de cetatea Visegrád.",
      en: "A picturesque town in the Danube Bend, opposite Visegrád Castle."
    },
    descriptionAdvanced: {
      de: "Nagymaros bietet einen der schönsten Ausblicke auf das Donauknie und die gegenüberliegende Burg Visegrád. Die Stadt ist ein beliebtes Ziel für Wanderer, die das Pilis- oder Börzsöny-Gebirge erkunden wollen. Die Uferpromenade ist ideal zum Entspannen. Nagymaros ist auch bekannt für seine Kastanienhaine.",
      hu: "Nagymaros kínálja az egyik legszebb kilátást a Dunakanyarra és a szemközti visegrádi várra. A város népszerű célpont a túrázók számára, akik a Pilis vagy a Börzsöny felfedezésére indulnak. A Duna-parti sétány ideális a kikapcsolódásra. Nagymaros szelídgesztenyéseiről is ismert.",
      ro: "Nagymaros oferă una dintre cele mai frumoase vederi asupra Cotului Dunării și a cetății Visegrád de pe malul opus. Orașul este o destinație populară pentru drumeții care doresc să exploreze munții Pilis sau Börzsöny. Promenada de pe malul Dunării este ideală pentru relaxare. Nagymaros este cunoscut și pentru livezile sale de castani.",
      en: "Nagymaros offers one of the most beautiful views of the Danube Bend and Visegrád Castle on the opposite bank. The town is a popular destination for hikers wanting to explore the Pilis or Börzsöny mountains. The Danube promenade is ideal for relaxation. Nagymaros is also known for its chestnut groves."
    },
    facts: {
      de: ["Bester Blick auf die Burg Visegrád.", "Liegt am Donauknie.", "Beliebtes Wanderzentrum.", "Bekannt für Esskastanien."],
      hu: ["Legjobb kilátás a visegrádi várra.", "A Dunakanyarban fekszik.", "Népszerű túraközpont.", "Szelídgesztenyéjéről ismert."],
      ro: ["Cea mai bună vedere spre cetatea Visegrád.", "Situat în Cotul Dunării.", "Centru popular pentru drumeții.", "Cunoscut pentru castane comestibile."],
      en: ["Best view of Visegrád Castle.", "Located in the Danube Bend.", "Popular hiking center.", "Known for sweet chestnuts."]
    }
    },
    {
    id: "geo-duna-kanyar-extra",
    type: "geo",
    parent: "HU-PE",
    coords: [18.98, 47.79],
    name: { de: "Donauknie", hu: "Dunakanyar", ro: "Cotul Dunării", en: "Danube Bend" },
    description: {
      de: "Einer der spektakulärsten Abschnitte der Donau, wo der Fluss seinen Lauf nach Süden ändert.",
      hu: "A Duna egyik leglátványosabb szakasza, ahol a folyó délnek veszi az irányt.",
      ro: "Una dintre cele mai spectaculoase porțiuni ale Dunării, unde fluviul își schimbă cursul spre sud.",
      en: "One of the most spectacular sections of the Danube, where the river changes its course to the south."
    },
    descriptionAdvanced: {
      de: "Das Donauknie (Dunakanyar) ist eine Region von außergewöhnlicher natürlicher Schönheit. Hier bricht die Donau durch das Visegráder Gebirge und das Börzsöny-Gebirge. Die Region ist reich an historischen Städten wie Visegrád, Esztergom und Szentendre. Es ist ein UNESCO-Welterbe-Kandidat und eines der wichtigsten Erholungsgebiete Ungarns.",
      hu: "A Dunakanyar kivételes természeti szépségű régió. Itt töri át a Duna a Visegrádi-hegységet és a Börzsönyt. A térség gazdag történelmi városokban, mint Visegrád, Esztergom és Szentendre. UNESCO Világörökség-jelölt és Magyarország egyik legfontosabb üdülőkörzete.",
      ro: "Cotul Dunării (Dunakanyar) este o regiune de o frumusețe naturală excepțională. Aici Dunărea străpunge munții Visegrád și Börzsöny. Regiunea este bogată în orașe istorice precum Visegrád, Esztergom și Szentendre. Este candidat la patrimoniul mondial UNESCO și una dintre cele mai importante zone de recreere din Ungaria.",
      en: "The Danube Bend (Dunakanyar) is a region of exceptional natural beauty. Here the Danube breaks through the Visegrád and Börzsöny mountains. The region is rich in historic towns such as Visegrád, Esztergom, and Szentendre. It is a UNESCO World Heritage candidate and one of Hungary's most important recreation areas."
    },
    facts: {
      de: ["Spektakuläre Flussbiegung.", "Reich an historischen Städten.", "Beliebt für Schifffahrten.", "Umgeben von Gebirgen."],
      hu: ["Látványos folyókanyarulat.", "Történelmi városokban gazdag.", "Népszerű hajókirándulóhely.", "Hegyek veszik körül."],
      ro: ["Cot spectaculos al fluviului.", "Bogat în orașe istorice.", "Loc popular pentru croaziere.", "Înconjurat de munți."],
      en: ["Spectacular river bend.", "Rich in historic towns.", "Popular for boat trips.", "Surrounded by mountains."]
    }
    },
    {
    id: "geschichte-vac-dom-extra",
    type: "geschichte",
    parent: "HU-PE",
    coords: [19.12, 47.77],
    name: { de: "Dom von Vác", hu: "Váci dóm", ro: "Catedrala din Vác", en: "Vác Cathedral" },
    description: {
      de: "Die Kathedrale von Vác ist ein monumentales spätbarock-klassizistisches Bauwerk.",
      hu: "A váci dóm egy monumentális késő barokk-klasszicista épület.",
      ro: "Catedrala din Vác este o construcție monumentală în stil baroc târziu și clasicist.",
      en: "Vác Cathedral is a monumental late Baroque-Classicist building."
    },
    descriptionAdvanced: {
      de: "Der Dom von Vác (Mariä-Himmelfahrt-Kathedrale) wurde im 18. Jahrhundert erbaut. Er ist eines der bedeutendsten Beispiele der französischen klassizistischen Architektur in Ungarn. Die Fassade ist mit monumentalen Statuen geschmückt. Der Innenraum beherbergt wertvolle Fresken von Franz Anton Maulbertsch.",
      hu: "A váci dóm (Nagyboldogasszony-székesegyház) a 18. században épült. A magyarországi francia klasszicista építészet egyik legjelentősebb példája. Homlokzatát monumentális szobrok díszítik. Belsejében Franz Anton Maulbertsch értékes freskói láthatók.",
      ro: "Catedrala din Vác (Catedrala Adormirea Maicii Domnului) a fost construită în secolul al XVIII-lea. Este unul dintre cele mai importante exemple de arhitectură clasicistă franceză din Ungaria. Fațada este decorată cu statui monumentale. Interiorul găzduiește fresce valoroase de Franz Anton Maulbertsch.",
      en: "Vác Cathedral (Cathedral of the Assumption) was built in the 18th century. It is one of the most important examples of French Classicist architecture in Hungary. Its facade is decorated with monumental statues. The interior houses valuable frescoes by Franz Anton Maulbertsch."
    },
    facts: {
      de: ["Meisterwerk des Klassizismus.", "Statuen von József Bechert.", "Fresken von Maulbertsch.", "Monumentale Erscheinung."],
      hu: ["A klasszicizmus remekműve.", "Bechert József szobrai díszítik.", "Maulbertsch-freskók láthatók benne.", "Monumentális megjelenés."],
      ro: ["Capodoperă a clasicismului.", "Statui de József Bechert.", "Fresce de Maulbertsch.", "Aspect monumental."],
      en: ["Masterpiece of Classicism.", "Statues by József Bechert.", "Frescoes by Maulbertsch.", "Monumental appearance."]
    }
    },
    {
    id: "geschichte-zambek-romtemplom-extra",
    type: "geschichte",
    parent: "HU-PE",
    coords: [18.71, 47.54],
    name: { de: "Kirchenruine von Zsámbék", hu: "Zsámbéki romtemplom", ro: "Ruina bisericii din Zsámbék", en: "Zsámbék Church Ruin" },
    description: {
      de: "Die Ruine einer spätromanisch-gotischen Basilika, eines der schönsten Denkmäler Ungarns.",
      hu: "Késő román-gótikus bazilika romja, Magyarország egyik legszebb műemléke.",
      ro: "Ruina unei bazilici în stil romanic târziu și gotic, unul dintre cele mai frumoase monumente din Ungaria.",
      en: "The ruin of a late Romanesque-Gothic basilica, one of Hungary's most beautiful monuments."
    },
    descriptionAdvanced: {
      de: "Die Klosterkirche in Zsámbék wurde im 13. Jahrhundert für den Prämonstratenserorden erbaut. Sie wurde 1763 durch ein schweres Erdbeben zerstört und nie wieder aufgebaut. Die Ruine bewahrt beeindruckende Details der romanischen und gotischen Architektur. Neben der Kirche befinden sich die Überreste des Klosters.",
      hu: "A zsámbéki kolostortemplom a 13. században épült a premontrei rend számára. 1763-ban egy súlyos földrengés rombolta le, és soha nem építették újjá. A rom a román és gótikus építészet lenyűgöző részleteit őrzi. A templom mellett a kolostor maradványai is láthatók.",
      ro: "Biserica mănăstirii din Zsámbék a fost construită în secolul al XIII-lea pentru ordinul premonstratens. A fost distrusă de un cutremur puternic în 1763 și nu a mai fost reconstruită niciodată. Ruina păstrează detalii impresionante ale arhitecturii romanice și gotice. Lângă biserică se află resturile mănăstirii.",
      en: "The monastery church in Zsámbék was built in the 13th century for the Premonstratensian order. It was destroyed by a severe earthquake in 1763 and was never rebuilt. The ruin preserves impressive details of Romanesque and Gothic architecture. Beside the church are the remains of the monastery."
    },
    facts: {
      de: ["Erbaut im 13. Jahrhundert.", "Zerstört durch Erdbeben 1763.", "Spätromanischer und gotischer Stil.", "Ikonische Silhouette."],
      hu: ["A 13. században épült.", "1763-as földrengés pusztította el.", "Késő román és gótikus stílus.", "Ikonikus sziluett."],
      ro: ["Construită în secolul al XIII-lea.", "Distrusă de cutremurul din 1763.", "Stil romanic târziu și gotic.", "Siluetă iconică."],
      en: ["Built in the 13th century.", "Destroyed by earthquake in 1763.", "Late Romanesque and Gothic style.", "Iconic silhouette."]
    }
    },
    // HU-SO: Somogy
    {
    id: "city-fonyod-extra",
    type: "city",
    parent: "HU-SO",
    coords: [17.55, 46.74],
    name: { de: "Fonyód", hu: "Fonyód", ro: "Fonyód", en: "Fonyód" },
    description: {
      de: "Eine Stadt am Südufer des Balatons, bekannt für ihre Aussichtspunkte und Strände.",
      hu: "Város a Balaton déli partján, kilátóiról és strandjairól ismert.",
      ro: "Un oraș pe malul sudic al lacului Balaton, cunoscut pentru punctele sale de observație și plaje.",
      en: "A town on the southern shore of Lake Balaton, known for its lookout points and beaches."
    },
    descriptionAdvanced: {
      de: "Fonyód liegt auf zwei markanten Hügeln am Südufer des Balatons. Vom Sipos-hegy und Vár-hegy bietet sich der wohl schönste Blick über den See auf die Basaltberge des Nordufers. Die Stadt hat den längsten Pier am See und ist ein beliebter Ferienort mit zahlreichen kostenlosen Stränden.",
      hu: "Fonyód két jellegzetes dombon fekszik a Balaton déli partján. A Sipos-hegyről és a Vár-hegyről nyílik talán a legszebb kilátás a tóra és az északi part bazalthegyeire. A város rendelkezik a tó leghosszabb mólójával, és népszerű üdülőhely számos szabadstranddal.",
      ro: "Fonyód se află pe două dealuri distinctive pe malul sudic al lacului Balaton. De pe Sipos-hegy și Vár-hegy se oferă probabil cea mai frumoasă vedere asupra lacului către munții de bazalt de pe malul nordic. Orașul are cel mai lung dig de pe lac și este o stațiune populară cu numeroase plaje gratuite.",
      en: "Fonyód is located on two distinctive hills on the southern shore of Lake Balaton. From Sipos Hill and Vár Hill, one can enjoy perhaps the most beautiful view over the lake towards the basalt mountains of the northern shore. The town has the longest pier on the lake and is a popular resort with numerous free beaches."
    },
    facts: {
      de: ["Besitzt den längsten Pier am Balaton.", "Toller Blick auf den Badacsony.", "Zwei markante Aussichtshügel.", "Beliebter Ferienort."],
      hu: ["Itt van a Balaton leghosszabb mólója.", "Pazar kilátás a Badacsonyra.", "Két jellegzetes kilátóhegy.", "Népszerű üdülőváros."],
      ro: ["Deține cel mai lung dig de pe Balaton.", "Vedere superbă spre Badacsony.", "Două dealuri de observație distinctive.", "Stațiune de vacanță populară."],
      en: ["Has the longest pier on Lake Balaton.", "Great view of Badacsony.", "Two distinctive lookout hills.", "Popular holiday resort."]
    }
    },
    {
    id: "city-barcs-extra",
    type: "city",
    parent: "HU-SO",
    coords: [17.46, 45.96],
    name: { de: "Barcs", hu: "Barcs", ro: "Barcs", en: "Barcs" },
    description: {
      de: "Eine Grenzstadt an der Drau, das Zentrum des Drau-Naturschutzgebiets.",
      hu: "Határváros a Dráva partján, a Dráva menti természetvédelmi terület központja.",
      ro: "Un oraș de frontieră pe malul râului Drava, centrul rezervației naturale Drava.",
      en: "A border town on the Drava river, the center of the Drava nature reserve."
    },
    descriptionAdvanced: {
      de: "Barcs liegt direkt an der Grenze zu Kroatien. Die Drau ist hier einer der saubersten und unberührtesten Flüsse Europas. Die Stadt ist das Tor zum Donau-Drau-Nationalpark. Besonders beliebt sind die Bootstouren auf der Drau und das lokale Thermalbad.",
      hu: "Barcs közvetlenül a horvát határ mentén fekszik. A Dráva itt Európa egyik legtisztább és legérintetlenebb folyója. A város a Duna-Dráva Nemzeti Park kapuja. Különösen népszerűek a drávai hajókirándulások és a helyi termálfürdő.",
      ro: "Barcs se află chiar pe granița cu Croația. Râul Drava este aici unul dintre cele mai curate și neatinse râuri din Europa. Orașul este poarta către Parcul Național Dunăre-Drava. Sunt deosebit de populare excursiile cu barca pe Drava și baia termală locală.",
      en: "Barcs is located right on the border with Croatia. The Drava river here is one of the cleanest and most untouched rivers in Europe. The town is the gateway to the Danube-Drava National Park. Boat trips on the Drava and the local thermal bath are particularly popular."
    },
    facts: {
      de: ["Grenzstadt zu Kroatien.", "Liegt an der unberührten Drau.", "Besitzt ein schönes Thermalbad.", "Tor zum Donau-Drau-Nationalpark."],
      hu: ["Határváros Horvátország felé.", "Az érintetlen Dráva partján fekszik.", "Szép termálfürdővel rendelkezik.", "A Duna-Dráva Nemzeti Park kapuja."],
      ro: ["Oraș de frontieră cu Croația.", "Situat pe râul virgin Drava.", "Deține o baie termală frumoasă.", "Poarta către Parcul Național Dunăre-Drava."],
      en: ["Border town to Croatia.", "Located on the untouched Drava river.", "Has a beautiful thermal bath.", "Gateway to the Danube-Drava National Park."]
    }
    },
    {
    id: "geo-zselic-extra",
    type: "geo",
    parent: "HU-SO",
    coords: [17.75, 46.25],
    name: { de: "Zselic", hu: "Zselic", ro: "Zselic", en: "Zselic" },
    description: {
      de: "Ein hügeliges Waldgebiet, bekannt als einer der dunkelsten Orte Ungarns für Sternbeobachtung.",
      hu: "Dombvidéki erdőterület, amely Magyarország egyik legsötétebb helyeként ismert csillagmegfigyelésre.",
      ro: "O zonă deluroasă împădurită, cunoscută ca unul dintre cele mai întunecate locuri din Ungaria pentru observarea stelelor.",
      en: "A hilly forested area, known as one of the darkest places in Hungary for stargazing."
    },
    descriptionAdvanced: {
      de: "Das Zselic-Hügelland ist bekannt für seine ausgedehnten Buchenwälder und seine geringe Lichtverschmutzung. Der Zselic-Sternenpark war der erste internationale Sternenpark in Europa. Hier kann man die Milchstraße in ihrer vollen Pracht sehen. Die Region bietet auch zahlreiche Wanderwege und eine reiche Tierwelt.",
      hu: "A Zselic dombsága hatalmas bükköseiről és alacsony fényszennyezettségéről ismert. A Zselici Csillagpark Európa első nemzetközi csillagoségbolt-parkja volt. Itt a Tejút teljes pompájában látható. A régió számos túraútvonalat és gazdag vadállományt is kínál.",
      ro: "Dealurile Zselic sunt cunoscute pentru pădurile vaste de fag și poluarea luminoasă scăzută. Parcul Stelat Zselic a fost primul parc internațional de cer stelat din Europa. Aici Calea Lactee poate fi văzută în toată splendoarea sa. Regiunea oferă, de asemenea, numeroase trasee de drumeție și o faună bogată.",
      en: "The Zselic hills are known for their extensive beech forests and low light pollution. The Zselic Starry Sky Park was the first international dark sky park in Europe. Here the Milky Way can be seen in its full glory. The region also offers numerous hiking trails and rich wildlife."
    },
    facts: {
      de: ["Internationaler Sternenpark.", "Sehr geringe Lichtverschmutzung.", "Ausgedehnte Buchenwälder.", "Reiche Hirschpopulation."],
      hu: ["Nemzetközi csillagoségbolt-park.", "Nagyon alacsony fényszennyezés.", "Hatalmas bükkerdők.", "Gazdag szarvasállomány."],
      ro: ["Parc internațional de cer stelat.", "Poluare luminoasă foarte scăzută.", "Păduri vaste de fag.", "Populație bogată de cerbi."],
      en: ["International Dark Sky Park.", "Very low light pollution.", "Extensive beech forests.", "Rich deer population."]
    }
    },
    {
    id: "geschichte-szantodpuszta-extra",
    type: "geschichte",
    parent: "HU-SO",
    coords: [17.90, 46.88],
    name: { de: "Szántódpuszta", hu: "Szántódpuszta", ro: "Szántódpuszta", en: "Szántódpuszta" },
    description: {
      de: "Ein historisches Gutszentrum, das das bäuerliche Leben des 18. und 19. Jahrhunderts zeigt.",
      hu: "Történelmi majorság, amely a 18-19. századi gazdálkodói életet mutatja be.",
      ro: "Un centru istoric de moșie care prezintă viața rurală din secolele XVIII și XIX.",
      en: "A historic estate center showing rural life of the 18th and 19th centuries."
    },
    descriptionAdvanced: {
      de: "Szántódpuszta ist ein Freilichtmuseum und Kulturzentrum in der Nähe von Zamárdi. Die Anlage bewahrt über 30 historische Gebäude, darunter Wohnhäuser, Ställe, eine Kapelle und eine Schnapsbrennerei. Es vermittelt ein authentisches Bild der traditionellen Landwirtschaft in der Balaton-Region.",
      hu: "Szántódpuszta egy skanzen és kulturális központ Zamárdi közelében. Az együttes több mint 30 történelmi épületet őriz, köztük lakóházakat, istállókat, egy kápolnát és egy pálinkafőzdét. Hiteles képet nyújt a Balaton-felvidék hagyományos gazdálkodásáról.",
      ro: "Szántódpuszta este un muzeu în aer liber și centru cultural lângă Zamárdi. Ansamblul păstrează peste 30 de clădiri istorice, inclusiv case de locuit, grajduri, o capelă și o distilerie de pălincă. Oferă o imagine autentică a agriculturii tradiționale din regiunea Balaton.",
      en: "Szántódpuszta is an open-air museum and cultural center near Zamárdi. The complex preserves over 30 historic buildings, including dwelling houses, stables, a chapel, and a brandy distillery. It provides an authentic picture of traditional farming in the Balaton region."
    },
    facts: {
      de: ["Über 30 historische Gebäude.", "Besitzt eine Kapelle von 1735.", "Zeigt traditionelles Handwerk.", "Nahe der Balaton-Fähre."],
      hu: ["Több mint 30 történelmi épület.", "1735-ből származó kápolnája van.", "Hagyományos mesterségeket mutat be.", "A balatoni komp közelében található."],
      ro: ["Peste 30 de clădiri istorice.", "Deține o capelă din 1735.", "Prezintă meșteșuguri tradiționale.", "Lângă feribotul de pe Balaton."],
      en: ["Over 30 historic buildings.", "Has a chapel from 1735.", "Shows traditional crafts.", "Near the Balaton ferry."]
    }
    },
    {
    id: "geschichte-somogyvar-extra",
    type: "geschichte",
    parent: "HU-SO",
    coords: [17.58, 46.59],
    name: { de: "Somogyvár Ruinenpark", hu: "Somogyvári Nemzeti Emlékhely", ro: "Parcul Arheologic Somogyvár", en: "Somogyvár National Heritage Site" },
    description: {
      de: "Die Ruinen der von König Ladislaus gegründeten Abtei, ein bedeutendes historisches Denkmal.",
      hu: "A Szent László király által alapított apátság romjai, jelentős történelmi emlékhely.",
      ro: "Ruinele abației fondate de regele Ladislau, un monument istoric important.",
      en: "The ruins of the abbey founded by King Ladislaus, a significant historic monument."
    },
    descriptionAdvanced: {
      de: "Somogyvár war im Mittelalter eines der religiösen und kulturellen Zentren Ungarns. König Ladislaus I. gründete hier 1091 eine Benediktinerabtei, die dem Heiligen Ägidius geweiht war. Es war einst eines der prächtigsten Klöster des Landes. Heute kann man die beeindruckenden Grundmauern und archäologischen Funde besichtigen.",
      hu: "Somogyvár a középkori Magyarország egyik vallási és kulturális központja volt. Szent László király 1091-ben alapított itt bencés apátságot, amelyet Szent Egyednek szenteltek. Egykor az ország egyik legpompásabb kolostora volt. Ma a lenyűgöző alapfalak és régészeti leletek tekinthetők meg.",
      ro: "Somogyvár a fost unul dintre centrele religioase și culturale ale Ungariei medievale. Regele Ladislau I a fondat aici în 1091 o abație benedictină dedicată Sfântului Egidiu. A fost odată una dintre cele mai magnifice mănăstiri din țară. Astăzi se pot vizita fundațiile impresionante și descoperirile arheologice.",
      en: "Somogyvár was one of the religious and cultural centers of medieval Hungary. King Ladislaus I founded a Benedictine abbey here in 1091, dedicated to Saint Giles. It was once one of the country's most magnificent monasteries. Today, one can visit the impressive foundations and archaeological finds."
    },
    facts: {
      de: ["Gegründet von König Ladislaus I.", "Ehemals riesige Benediktinerabtei.", "Nationales Denkmal.", "Bedeutende Ausgrabungsstätte."],
      hu: ["Szent László király alapította.", "Egykor hatalmas bencés apátság.", "Nemzeti emlékhely.", "Jelentős régészeti feltárás."],
      ro: ["Fondată de regele Ladislau I.", "Odinioară o abație benedictină uriașă.", "Monument național.", "Sit arheologic important."],
      en: ["Founded by King Ladislaus I.", "Formerly a huge Benedictine abbey.", "National heritage site.", "Significant archaeological site."]
    }
  },
  // HU-SZ: Szabolcs-Szatmár-Bereg
  {
    id: "city-fehergyarmat-extra",
    type: "city",
    parent: "HU-SZ",
    coords: [22.518, 47.986],
    name: { de: "Fehérgyarmat", hu: "Fehérgyarmat", ro: "Fehérgyarmat", en: "Fehérgyarmat" },
    description: {
      de: "Fehérgyarmat ist eine Stadt im Nordosten Ungarns, das Zentrum der Region Szatmár.",
      hu: "Fehérgyarmat város Magyarország északkeleti részén, a Szatmári kistérség központja.",
      ro: "Fehérgyarmat este un oraș în nord-estul Ungariei, centrul regiunii Szatmár.",
      en: "Fehérgyarmat is a town in northeastern Hungary, the center of the Szatmár region."
    },
    descriptionAdvanced: {
      de: "Fehérgyarmat liegt am linken Ufer des Flusses Szamos. Die Stadt ist für ihre reformierte Kirche aus dem 15. Jahrhundert bekannt, die ein schönes Beispiel für die spätgotische Architektur der Region ist. Die Umgebung bietet unberührte Natur und traditionelle ländliche Atmosphäre.",
      hu: "Fehérgyarmat a Szamos bal partján fekszik. A város nevezetes a 15. századi református templomáról, amely a régió késő gótikus építészetének szép példája. A környék érintetlen természetet és hagyományos falusi hangulatot kínál.",
      ro: "Fehérgyarmat se află pe malul stâng al râului Someș. Orașul este cunoscut pentru biserica sa reformată din secolul al XV-lea, care este un exemplu frumos de arhitectură gotică târzie din regiune. Împrejurimile oferă natură virgină și atmosferă rurală tradițională.",
      en: "Fehérgyarmat is located on the left bank of the Szamos River. The town is notable for its 15th-century Reformed church, which is a fine example of late Gothic architecture in the region. The surroundings offer pristine nature and a traditional rural atmosphere."
    },
    facts: {
      de: ["Zentrum der Szatmár-Region.", "Gotische reformierte Kirche.", "Am Fluss Szamos gelegen.", "Wichtiger Verkehrsknotenpunkt."],
      hu: ["A Szatmári kistérség központja.", "Gótikus református templom.", "A Szamos folyó mentén fekszik.", "Fontos közlekedési csomópont."],
      ro: ["Centrul regiunii Szatmár.", "Biserică reformată gotică.", "Situat de-a lungul râului Someș.", "Nod de transport important."],
      en: ["Center of the Szatmár region.", "Gothic Reformed church.", "Located along the Szamos River.", "Important transport hub."]
    }
  },
  {
    id: "city-ujfeherto-extra",
    type: "city",
    parent: "HU-SZ",
    coords: [21.683, 47.817],
    name: { de: "Újfehértó", hu: "Újfehértó", ro: "Újfehértó", en: "Újfehértó" },
    description: {
      de: "Újfehértó ist eine Stadt südlich von Nyíregyháza, bekannt für ihren Obstanbau.",
      hu: "Újfehértó Nyíregyházától délre fekvő város, híres gyümölcstermesztéséről.",
      ro: "Újfehértó este un oraș la sud de Nyíregyháza, cunoscut pentru cultivarea fructelor.",
      en: "Újfehértó is a town south of Nyíregyháza, famous for its fruit growing."
    },
    descriptionAdvanced: {
      de: "Újfehértó liegt in der Region Nyírség. Die Stadt ist vor allem für ihre saftigen Äpfel und Sauerkirschen bekannt, die weithin exportiert werden. Kulturell ist die griechisch-katholische Kirche der Stadt ein bedeutendes Wahrzeichen.",
      hu: "Újfehértó a Nyírségben található. A város főként zamatos almájáról és meggyéről híres, amelyet széles körben exportálnak. Kulturális szempontból a város görögkatolikus temploma jelentős jelkép.",
      ro: "Újfehértó se află în regiunea Nyírség. Orașul este faimos în special pentru merele și vișinele sale suculente, care sunt exportate pe scară largă. Din punct de vedere cultural, biserica greco-catolică a orașului este un simbol semnificativ.",
      en: "Újfehértó is located in the Nyírség region. The town is primarily famous for its juicy apples and sour cherries, which are widely exported. Culturally, the town's Greek Catholic church is a significant landmark."
    },
    facts: {
      de: ["Berühmt für Äpfel und Sauerkirschen.", "Liegt in der Nyírség-Region.", "Griechisch-katholische Tradition.", "Wichtiger Agrarstandort."],
      hu: ["Híres az almájáról és meggyéről.", "A Nyírségben található.", "Görögkatolikus hagyományok.", "Fontos mezőgazdasági központ."],
      ro: ["Faimos pentru mere și vișine.", "Situat în regiunea Nyírség.", "Tradiție greco-catolică.", "Centru agricol important."],
      en: ["Famous for apples and sour cherries.", "Located in the Nyírség region.", "Greek Catholic tradition.", "Important agricultural center."]
    }
  },
  {
    id: "geo-szatmari-siksag-extra",
    type: "river",
    parent: "HU-SZ",
    coords: [22.667, 48.0],
    name: { de: "Szatmárer Ebene", hu: "Szatmári-síkság", ro: "Câmpia Sătmarului", en: "Szatmár Plain" },
    description: {
      de: "Die Szatmárer Ebene ist eine flache, wasserreiche Region im äußersten Osten Ungarns.",
      hu: "A Szatmári-síkság egy lapos, vízjárta vidék Magyarország legkeletibb részén.",
      ro: "Câmpia Sătmarului este o regiune plană, bogată în ape, în extremitatea estică a Ungariei.",
      en: "The Szatmár Plain is a flat, water-rich region in the far east of Hungary."
    },
    descriptionAdvanced: {
      de: "Die Region ist geprägt von den Flüssen Szamos, Túr und Tisza. Sie bewahrt eine einzigartige Volkskultur und eine reiche Flora und Fauna. Die zahlreichen Altwässer und Sümpfe sind wichtige Rückzugsgebiete für seltene Vögel.",
      hu: "A vidéket a Szamos, a Túr és a Tisza folyók határozzák meg. Egyedülálló népi kultúrát, valamint gazdag növény- és állatvilágot őriz. A számos holtág és mocsár fontos menedékhely a ritka madarak számára.",
      ro: "Regiunea este marcată de râurile Someș, Tur și Tisa. Aceasta păstrează o cultură populară unică și o floră și faună bogată. Numeroasele brațe moarte și mlaștini sunt zone de refugiu importante pentru păsări rare.",
      en: "The region is defined by the Szamos, Túr, and Tisza rivers. It preserves a unique folk culture and rich flora and fauna. The numerous oxbow lakes and swamps are important refuges for rare birds."
    },
    facts: {
      de: ["Grenzregion zwischen Ungarn, Rumänien und der Ukraine.", "Geprägt von Flüssen.", "Reiche Vogelwelt.", "Traditionelle Volksarchitektur."],
      hu: ["Határvidék Magyarország, Románia és Ukrajna között.", "Folyók szabdalta táj.", "Gazdag madárvilág.", "Hagyományos népi építészet."],
      ro: ["Regiune de frontieră între Ungaria, România și Ucraina.", "Peisaj marcat de râuri.", "Avifaună bogată.", "Arhitectură populară tradițională."],
      en: ["Border region between Hungary, Romania, and Ukraine.", "Landscape marked by rivers.", "Rich birdlife.", "Traditional folk architecture."]
    }
  },
  {
    id: "historical-csaroda-templom-extra",
    type: "historical",
    parent: "HU-SZ",
    coords: [22.434, 48.163],
    name: { de: "Kirche von Csaroda", hu: "Csarodai templom", ro: "Biserica din Csaroda", en: "Church of Csaroda" },
    description: {
      de: "Die reformierte Kirche von Csaroda ist ein spätromanisches Juwel aus dem 13. Jahrhundert.",
      hu: "A csarodai református templom egy 13. századi késő román kori ékszerdoboz.",
      ro: "Biserica reformată din Csaroda este o bijuterie în stil romanic târziu din secolul al XIII-lea.",
      en: "The Reformed church of Csaroda is a late Romanesque gem from the 13th century."
    },
    descriptionAdvanced: {
      de: "Die Kirche ist berühmt für ihre mittelalterlichen Wandmalereien, die 'lächelnde Heilige' darstellen. Trotz der Reformation blieben diese Fresken erhalten. Die Kirche hat einen charakteristischen schlanken Turm mit Holzschindeln.",
      hu: "A templom híres középkori falfestményeiről, amelyek 'mosolygó szenteket' ábrázolnak. A reformáció ellenére ezek a freskók megmaradtak. A templom jellegzetes, karcsú, fapikkelyes toronnyal rendelkezik.",
      ro: "Biserica este faimoasă pentru picturile sale murale medievale care înfățișează 'sfinți zâmbitori'. În ciuda Reformei, aceste fresce au fost păstrate. Biserica are un turn zvelt caracteristic, cu șindrilă de lemn.",
      en: "The church is famous for its medieval wall paintings depicting 'smiling saints.' Despite the Reformation, these frescoes were preserved. The church has a characteristic slender tower with wooden shingles."
    },
    facts: {
      de: ["Spätromanischer Stil.", "Fresken mit lächelnden Heiligen.", "Holzschindelturm.", "Wichtiges Denkmal der Bereg-Region."],
      hu: ["Késő román stílus.", "Mosolygó szenteket ábrázoló freskók.", "Fapikkelyes torony.", "A Beregi-vidék fontos műemléke."],
      ro: ["Stil romanic târziu.", "Fresce cu sfinți zâmbitori.", "Turn cu șindrilă de lemn.", "Monument important al regiunii Bereg."],
      en: ["Late Romanesque style.", "Frescoes with smiling saints.", "Wooden shingle tower.", "Important monument of the Bereg region."]
    }
  },
  {
    id: "landmark-tarpaiszarazmalom-extra",
    type: "landmark",
    parent: "HU-SZ",
    coords: [22.531, 48.104],
    name: { de: "Rossmühle von Tarpa", hu: "Tarpai szárazmalom", ro: "Moara de cai din Tarpa", en: "Horse mill of Tarpa" },
    description: {
      de: "Die Rossmühle von Tarpa ist eines der seltenen erhaltenen Industriedenkmäler dieser Art.",
      hu: "A tarpai szárazmalom egyike a ritka, eredeti helyén megőrzött ilyen típusú ipartörténeti emlékeknek.",
      ro: "Moara de cai din Tarpa este unul dintre rarele monumente industriale de acest tip păstrate.",
      en: "The horse mill of Tarpa is one of the rare surviving industrial monuments of its kind."
    },
    descriptionAdvanced: {
      de: "Die Mühle wurde im 19. Jahrhundert erbaut und durch Pferde angetrieben. Sie besteht aus einem riesigen Radgehäuse und dem Mahlhaus. Die gesamte Konstruktion ist aus Eichenholz gefertigt und mit Schindeln gedeckt.",
      hu: "A malom a 19. században épült és lovak hajtották. Egy hatalmas kerékházból és az őrlőházból áll. A teljes szerkezet tölgyfából készült és zsindellyel fedett.",
      ro: "Moara a fost construită în secolul al XIX-lea și era acționată de cai. Aceasta constă dintr-o carcasă uriașă pentru roată și casa de măcinat. Întreaga construcție este realizată din lemn de stejar și acoperită cu șindrilă.",
      en: "The mill was built in the 19th century and was driven by horses. It consists of a huge wheel housing and the grinding house. The entire construction is made of oak wood and covered with shingles."
    },
    facts: {
      de: ["Industriegeschichtliches Denkmal.", "Angetrieben durch Pferde.", "Eichenholzkonstruktion.", "Originalgetreu restauriert."],
      hu: ["Ipartörténeti emlékhely.", "Lovak hajtották.", "Tölgyfa szerkezet.", "Eredeti állapotában restaurálva."],
      ro: ["Monument de istorie industrială.", "Acționată de cai.", "Construcție din stejar.", "Restaurată fidel originalului."],
      en: ["Industrial history monument.", "Driven by horses.", "Oak wood construction.", "Faithfully restored."]
    }
  },
  // HU-TO: Tolna
  {
    id: "city-tamasi-extra",
    type: "city",
    parent: "HU-TO",
    coords: [18.288, 46.632],
    name: { de: "Tamási", hu: "Tamási", ro: "Tamási", en: "Tamási" },
    description: {
      de: "Tamási ist eine Stadt in Transdanubien, bekannt für ihr Thermalbad und Wildgehege.",
      hu: "Tamási dunántúli város, híres termálfürdőjéről és vadaskertjéről.",
      ro: "Tamási este un oraș din Transdanubia, cunoscut pentru băile sale termale și parcul de vânătoare.",
      en: "Tamási is a town in Transdanubia, famous for its thermal bath and game park."
    },
    descriptionAdvanced: {
      de: "Tamási liegt am Rande des Gebirges Tolnai-Hegyhát. Das Thermalbad ist eines der beliebtesten in der Region. In der Nähe befindet sich das Wildgehege Gyulaj, das für seinen Bestand an Damhirschen weltberühmt ist.",
      hu: "Tamási a Tolnai-Hegyhát szélén fekszik. Termálfürdője a régió egyik legnépszerűbb fürdője. A közelben található a Gyulaji vadaskert, amely dámvadállományáról világhírű.",
      ro: "Tamási se află la marginea dealurilor Tolnai-Hegyhát. Băile sale termale sunt printre cele mai populare din regiune. În apropiere se află parcul de vânătoare Gyulaj, faimos în întreaga lume pentru populația sa de cerbi lopătari.",
      en: "Tamási is located on the edge of the Tolnai-Hegyhát hills. Its thermal bath is one of the most popular in the region. Nearby is the Gyulaj game park, world-famous for its fallow deer population."
    },
    facts: {
      de: ["Beliebtes Thermalbad.", "Wildgehege Gyulaj in der Nähe.", "Damhirsch-Hauptstadt.", "Schöne natürliche Umgebung."],
      hu: ["Népszerű termálfürdő.", "Gyulaji vadaskert a közelben.", "Dámvad-főváros.", "Szép természeti környezet."],
      ro: ["Băi termale populare.", "Parcul de vânătoare Gyulaj în apropiere.", "Capitala cerbilor lopătari.", "Cadru natural frumos."],
      en: ["Popular thermal bath.", "Gyulaj game park nearby.", "Fallow deer capital.", "Beautiful natural surroundings."]
    }
  },
  {
    id: "city-tolna-city-extra",
    type: "city",
    parent: "HU-TO",
    coords: [18.783, 46.425],
    name: { de: "Tolna", hu: "Tolna", ro: "Tolna", en: "Tolna" },
    description: {
      de: "Tolna ist eine historische Stadt an einem Toten Arm der Donau.",
      hu: "Tolna történelmi város a Duna egyik holtága mentén.",
      ro: "Tolna este un oraș istoric situat pe un braț mort al Dunării.",
      en: "Tolna is a historic town along a dead arm of the Danube."
    },
    descriptionAdvanced: {
      de: "Die Stadt gab dem Komitat Tolna seinen Namen. Früher lag sie direkt an der Donau, heute an der Tolnaer Donau-Altarm. Bekannt ist sie für ihre Seidenspinnerei-Tradition und das Blaufärber-Handwerk.",
      hu: "A város Tolna vármegye névadója. Korábban közvetlenül a Dunánál feküdt, ma a Tolnai-Duna-holtág mellett. Ismert a selyemfonó hagyományairól és a kékfestő mesterségről.",
      ro: "Orașul a dat numele județului Tolna. Anterior se afla direct pe Dunăre, astăzi lângă brațul mort Tolnai-Duna. Este cunoscut pentru tradițiile sale de filatură de mătase și meșteșugul vopsitului în albastru.",
      en: "The town gave Tolna County its name. Previously it was located directly on the Danube, today by the Tolna-Danube oxbow lake. It is known for its silk spinning traditions and blue-dyeing craft."
    },
    facts: {
      de: ["Namensgeber des Komitats.", "Am Donau-Altarm gelegen.", "Seidenspinnerei-Museum.", "Blaufärber-Tradition."],
      hu: ["A vármegye névadója.", "A Duna-holtág mentén fekszik.", "Selyemfonó múzeum.", "Kékfestő hagyományok."],
      ro: ["Eponimul județului.", "Situat pe brațul mort al Dunării.", "Muzeul filaturii de mătase.", "Tradiția vopsitului în albastru."],
      en: ["Namesake of the county.", "Located by the Danube oxbow lake.", "Silk spinning museum.", "Blue-dyeing tradition."]
    }
  },
  {
    id: "geo-siocsatorna-extra",
    type: "river",
    parent: "HU-TO",
    coords: [18.583, 46.5],
    name: { de: "Sió-Kanal", hu: "Sió-csatorna", ro: "Canalul Sió", en: "Sió Canal" },
    description: {
      de: "Der Sió-Kanal verbindet den Balaton mit der Donau.",
      hu: "A Sió-csatorna köti össze a Balatont a Dunával.",
      ro: "Canalul Sió leagă lacul Balaton de Dunăre.",
      en: "The Sió Canal connects Lake Balaton with the Danube."
    },
    descriptionAdvanced: {
      de: "Er dient der Regulierung des Wasserstandes des Balaton. Der Kanal folgt teilweise dem alten Flussbett des Sió. Er fließt durch die Komitate Somogy, Fejér und Tolna, bevor er in die Donau mündet.",
      hu: "A Balaton vízszintjének szabályozására szolgál. A csatorna részben a Sió régi medrét követi. Somogy, Fejér és Tolna vármegyéken folyik keresztül, mielőtt a Dunába torkollik.",
      ro: "Servește la reglarea nivelului apei din lacul Balaton. Canalul urmează parțial vechea albie a râului Sió. Trece prin județele Somogy, Fejér și Tolna înainte de a se vărsa în Dunăre.",
      en: "It serves to regulate the water level of Lake Balaton. The canal partially follows the old riverbed of the Sió. It flows through Somogy, Fejér, and Tolna counties before joining the Danube."
    },
    facts: {
      de: ["Abfluss des Balaton.", "Wichtige wasserbauliche Anlage.", "Durchquert Tolna.", "Beliebt für Kanutouren."],
      hu: ["A Balaton lefolyója.", "Fontos vízügyi létesítmény.", "Keresztülszeli Tolnát.", "Népszerű a vízi túrázók körében."],
      ro: ["Scurgerea lacului Balaton.", "Construcție hidrotehnică importantă.", "Traversează Tolna.", "Popular pentru excursii cu caiacul."],
      en: ["Outflow of Lake Balaton.", "Important hydraulic engineering facility.", "Crosses Tolna.", "Popular for canoeing."]
    }
  },
  {
    id: "historical-graboc-extra",
    type: "historical",
    parent: "HU-TO",
    coords: [18.608, 46.289],
    name: { de: "Kloster Grábóc", hu: "Grábóci kolostor", ro: "Mănăstirea Grábóc", en: "Grábóc Monastery" },
    description: {
      de: "Das serbisch-orthodoxe Kloster von Grábóc ist ein einzigartiges spirituelles Zentrum in Ungarn.",
      hu: "A grábóci szerb ortodox kolostor egyedülálló szellemi központ Magyarországon.",
      ro: "Mănăstirea sârbă ortodoxă din Grábóc este un centru spiritual unic în Ungaria.",
      en: "The Serbian Orthodox monastery of Grábóc is a unique spiritual center in Hungary."
    },
    descriptionAdvanced: {
      de: "Es wurde im 14. Jahrhundert von Mönchen aus dem Kloster Dalša gegründet. Die heutige Barockkirche stammt aus dem 18. Jahrhundert. Das Kloster ist ein bedeutendes Denkmal der serbischen Minderheit in Ungarn und für seine Ikonostase bekannt.",
      hu: "A 14. században alapították a dalšai kolostorból érkező szerzetesek. A mai barokk templom a 18. századból származik. A kolostor a magyarországi szerb kisebbség fontos műemléke, híres az ikonosztázáról.",
      ro: "A fost fondată în secolul al XIV-lea de călugări veniți de la mănăstirea Dalša. Biserica barocă actuală datează din secolul al XVIII-lea. Mănăstirea este un monument important al minorității sârbe din Ungaria și este cunoscută pentru iconostasul său.",
      en: "It was founded in the 14th century by monks from the Dalša monastery. The current Baroque church dates from the 18th century. The monastery is an important monument of the Serbian minority in Hungary and is known for its iconostasis."
    },
    facts: {
      de: ["Serbisch-orthodoxes Kloster.", "Barockarchitektur.", "Wertvolle Ikonostase.", "Inmitten der Szekszárder Hügel."],
      hu: ["Szerb ortodox kolostor.", "Barokk építészet.", "Értékes ikonosztáz.", "A Szekszárdi-dombság szívében."],
      ro: ["Mănăstire sârbă ortodoxă.", "Arhitectură barocă.", "Iconostas valoros.", "În inima dealurilor Szekszárd."],
      en: ["Serbian Orthodox monastery.", "Baroque architecture.", "Valuable iconostasis.", "In the heart of the Szekszárd hills."]
    }
  },
  {
    id: "landmark-ozora-extra",
    type: "landmark",
    parent: "HU-TO",
    coords: [18.399, 46.753],
    name: { de: "Burgschloss Ozora", hu: "Ozorai Pipo vára", ro: "Cetatea din Ozora", en: "Ozora Castle" },
    description: {
      de: "Das Burgschloss von Ozora ist ein elegantes Renaissance-Bauwerk aus dem 15. Jahrhundert.",
      hu: "Az ozorai várkastély egy elegáns, 15. századi reneszánsz építmény.",
      ro: "Castelul din Ozora este o construcție renascentistă elegantă din secolul al XV-lea.",
      en: "The Ozora castle is an elegant 15th-century Renaissance building."
    },
    descriptionAdvanced: {
      de: "Es wurde von Filippo Scolari, bekannt als Pipo von Ozora, erbaut. Im Gegensatz zu vielen anderen Burgen war es eher ein herrschaftlicher Wohnsitz als eine Festung. Die Burg wurde wunderschön restauriert und beherbergt ein Museum.",
      hu: "Filippo Scolari, azaz Ozorai Pipo építtette. Sok más várral ellentétben inkább volt főúri lakóhely, mint erődítmény. A várat gyönyörűen restaurálták, és múzeumnak ad otthont.",
      ro: "A fost construit de Filippo Scolari, cunoscut sub numele de Pipo de Ozora. Spre deosebire de multe alte cetăți, a fost mai degrabă o reședință nobiliară decât o fortificație. Castelul a fost restaurat superb și găzduiește un muzeu.",
      en: "It was built by Filippo Scolari, known as Pipo of Ozora. Unlike many other castles, it was more of a noble residence than a fortification. The castle has been beautifully restored and houses a museum."
    },
    facts: {
      de: ["Erbaut von Filippo Scolari.", "Italienische Renaissance-Einflüsse.", "Quadratischer Grundriss.", "Museum über das Ritterleben."],
      hu: ["Filippo Scolari építtette.", "Itáliai reneszánsz hatások.", "Négyzetes alaprajz.", "Múzeum a lovagi életről."],
      ro: ["Construit de Filippo Scolari.", "Influențe renascentiste italiene.", "Plan pătrat.", "Muzeu despre viața cavalerilor."],
      en: ["Built by Filippo Scolari.", "Italian Renaissance influences.", "Square floor plan.", "Museum about knightly life."]
    }
  },
  // HU-VA: Vas
  {
    id: "city-vasvar-extra",
    type: "city",
    parent: "HU-VA",
    coords: [16.804, 47.051],
    name: { de: "Vasvár", hu: "Vasvár", ro: "Vasvár", en: "Vasvár" },
    description: {
      de: "Vasvár ist eine geschichtsträchtige Kleinstadt und ehemaliges Zentrum des Eisen-Komitats.",
      hu: "Vasvár nagy múltú kisváros, Vas vármegye egykori központja.",
      ro: "Vasvár este un orășel cu o istorie bogată, fostul centru al județului Vas.",
      en: "Vasvár is a small town with a long history and former center of Vas County."
    },
    descriptionAdvanced: {
      de: "Bekannt ist die Stadt durch den Frieden von Vasvár (1664). Das Dominikanerkloster ist eines der ältesten Gebäude der Stadt. Jährlich findet hier das 'Hegyháti' Kulturfestival statt.",
      hu: "A város a vasvári béke (1664) révén vált ismertté. A dominikánus kolostor a város egyik legrégebbi épülete. Évente itt rendezik meg a Hegyháti Napok kulturális fesztivált.",
      ro: "Orașul a devenit cunoscut prin pacea de la Vasvár (1664). Mănăstirea dominicană este una dintre cele mai vechi clădiri din oraș. Anual, aici are loc festivalul cultural 'Hegyháti'.",
      en: "The town became famous for the Peace of Vasvár (1664). The Dominican monastery is one of the oldest buildings in the town. Every year, the 'Hegyháti' cultural festival is held here."
    },
    facts: {
      de: ["Ort des Friedens von 1664.", "Altes Dominikanerkloster.", "Ehemaliger Komitatssitz.", "Tor zum Hegyhát."],
      hu: ["Az 1664-es béke helyszíne.", "Régi dominikánus kolostor.", "Egykori vármegyeszékhely.", "A Hegyhát kapuja."],
      ro: ["Locul păcii din 1664.", "Veche mănăstire dominicană.", "Fostă reședință de județ.", "Poarta către Hegyhát."],
      en: ["Site of the 1664 peace treaty.", "Old Dominican monastery.", "Former county seat.", "Gateway to Hegyhát."]
    }
  },
  {
    id: "city-janoshaza-extra",
    type: "city",
    parent: "HU-VA",
    coords: [17.163, 47.127],
    name: { de: "Jánosháza", hu: "Jánosháza", ro: "Jánosháza", en: "Jánosháza" },
    description: {
      de: "Jánosháza ist eine Kleinstadt im Osten des Komitats Vas.",
      hu: "Jánosháza kisváros Vas vármegye keleti részén.",
      ro: "Jánosháza este un orășel în partea de est a județului Vas.",
      en: "Jánosháza is a small town in the eastern part of Vas County."
    },
    descriptionAdvanced: {
      de: "Das bedeutendste Wahrzeichen ist das Schloss Erdődy-Choron. Die Stadt liegt an einem wichtigen Verkehrsknotenpunkt, wo sich mehrere Hauptstraßen kreuzen. Sie bewahrt ihren kleinstädtischen transdanubischen Charakter.",
      hu: "A legjelentősebb látnivaló az Erdődy-Choron várkastély. A város fontos közlekedési csomópontban fekszik, ahol több főút találkozik. Megőrzi kisvárosi dunántúli jellegét.",
      ro: "Cea mai importantă atracție este castelul Erdődy-Choron. Orașul se află la un important nod de transport, unde se intersectează mai multe drumuri principale. Își păstrează caracterul transdanubian de orășel.",
      en: "The most significant landmark is the Erdődy-Choron castle. The town is located at an important transport hub where several main roads meet. It preserves its small-town Transdanubian character."
    },
    facts: {
      de: ["Schloss Erdődy-Choron.", "Verkehrsknotenpunkt.", "Transdanubischer Charakter.", "Historische Wurzeln."],
      hu: ["Erdődy-Choron várkastély.", "Közlekedési csomópont.", "Dunántúli jelleg.", "Történelmi gyökerek."],
      ro: ["Castelul Erdődy-Choron.", "Nod de transport.", "Caracter transdanubian.", "Rădăcini istorice."],
      en: ["Erdődy-Choron castle.", "Transport hub.", "Transdanubian character.", "Historic roots."]
    }
  },
  {
    id: "geo-pinka-extra",
    type: "river",
    parent: "HU-VA",
    coords: [16.483, 47.167],
    name: { de: "Pinka", hu: "Pinka", ro: "Pinka", en: "Pinka" },
    description: {
      de: "Die Pinka ist ein grenzüberschreitender Fluss zwischen Österreich und Ungarn.",
      hu: "A Pinka egy Ausztrián és Magyarországon átfolyó határmenti folyó.",
      ro: "Pinka este un râu transfrontalier care curge prin Austria și Ungaria.",
      en: "The Pinka is a cross-border river flowing through Austria and Hungary."
    },
    descriptionAdvanced: {
      de: "Sie entspringt in der Steiermark und mündet in die Raab. Der Flussabschnitt in Vas ist bekannt für seine malerischen Schluchten und sauberes Wasser. Er ist ein Paradies für Angler und Naturliebhaber.",
      hu: "Stájerországban ered és a Rábába torkollik. Vas vármegyei szakasza festői szurdokairól és tiszta vizéről ismert. A horgászok és természetjárók paradicsoma.",
      ro: "Izvorăște în Stiria și se varsă în Rába. Secțiunea râului din județul Vas este cunoscută pentru cheile sale pitorești și apa curată. Este un paradis pentru pescari și iubitorii de natură.",
      en: "It rises in Styria and flows into the Raab. The river section in Vas County is known for its picturesque gorges and clean water. It is a paradise for anglers and nature lovers."
    },
    facts: {
      de: ["Grenzüberschreitend.", "Mündet in die Raab.", "Schluchtenlandschaft.", "Reich an Fischen."],
      hu: ["Határon átnyúló.", "A Rábába torkollik.", "Szurdokos táj.", "Halakban gazdag."],
      ro: ["Transfrontalier.", "Se varsă în Rába.", "Peisaj cu chei.", "Bogat în pește."],
      en: ["Cross-border.", "Flows into the Raab.", "Gorge landscape.", "Rich in fish."]
    }
  },
  {
    id: "historical-sitke-extra",
    type: "historical",
    parent: "HU-VA",
    coords: [17.026, 47.193],
    name: { de: "Kapelle von Sitke", hu: "Sitkei kápolna", ro: "Capela din Sitke", en: "Chapel of Sitke" },
    description: {
      de: "Die Kalvarienkapelle von Sitke ist eine romantische Kapelle auf einem Hügel.",
      hu: "A sitkei kálváriakápolna egy dombtetőn álló romantikus stílusú kápolna.",
      ro: "Capela calvarului din Sitke este o capelă romantică situată pe un deal.",
      en: "The Calvary chapel of Sitke is a Romantic-style chapel standing on a hilltop."
    },
    descriptionAdvanced: {
      de: "Sie wurde im 19. Jahrhundert im neugotischen Stil erbaut. Die Kapelle wurde durch Rockkonzerte bekannt, deren Erlös für ihre Restaurierung verwendet wurde. Sie bietet einen herrlichen Ausblick auf die Umgebung.",
      hu: "A 19. században épült neogótikus stílusban. A kápolna a rockkoncertek révén vált ismertté, amelyek bevételét a restaurálására fordították. Gyönyörű kilátást nyújt a környékre.",
      ro: "A fost construită în secolul al XIX-lea în stil neogotic. Capela a devenit cunoscută prin concertele rock, ale căror încasări au fost folosite pentru restaurarea sa. Oferă o vedere superbă asupra împrejurimilor.",
      en: "It was built in the 19th century in neo-Gothic style. The chapel became famous through rock concerts, the proceeds of which were used for its restoration. It offers a beautiful view of the surroundings."
    },
    facts: {
      de: ["Neugotischer Stil.", "Bekannt für Rock-Festivals.", "Schöne Aussicht.", "Wahrzeichen von Sitke."],
      hu: ["Neogótikus stílus.", "Rockfesztiválokról ismert.", "Szép kilátás.", "Sitke jelképe."],
      ro: ["Stil neogotic.", "Cunoscută pentru festivaluri rock.", "Vedere frumoasă.", "Simbolul din Sitke."],
      en: ["Neo-Gothic style.", "Known for rock festivals.", "Beautiful view.", "Symbol of Sitke."]
    }
  },
  {
    id: "landmark-pityerszer-extra",
    type: "landmark",
    parent: "HU-VA",
    coords: [16.347, 46.883],
    name: { de: "Pityerszer", hu: "Pityerszer", ro: "Pityerszer", en: "Pityerszer" },
    description: {
      de: "Pityerszer ist ein Freilichtmuseum im Őrség, das die traditionelle Bauweise zeigt.",
      hu: "Pityerszer egy őrségi falumúzeum (szabadtéri néprajzi gyűjtemény), amely a hagyományos építészetet mutatja be.",
      ro: "Pityerszer este un muzeu al satului în Őrség, care prezintă arhitectura tradițională.",
      en: "Pityerszer is an open-air museum in Őrség showing traditional architecture."
    },
    descriptionAdvanced: {
      de: "Das Ensemble in Szalafő bewahrt die ursprüngliche Siedlungsform der 'Szer'. Man kann hier die charakteristischen 'umzäunten Häuser' und Holzhäuser sehen. Es ist einer der authentischsten Orte, um die Volkskultur des Őrség kennenzulernen.",
      hu: "A szalafői együttes az eredeti 'szeres' települési formát őrzi. Itt láthatók a jellegzetes 'kerített házak' és boronaházak. Az Őrség népi kultúrájának egyik leghitelesebb megismerőhelye.",
      ro: "Ansamblul din Szalafő păstrează forma originală de așezare numită 'szer'. Aici pot fi văzute 'casele împrejmuite' și casele din bârne caracteristice. Este unul dintre cele mai autentice locuri pentru a cunoaște cultura populară din Őrség.",
      en: "The ensemble in Szalafő preserves the original 'szer' settlement form. You can see characteristic 'fenced houses' and log houses here. It is one of the most authentic places to learn about the folk culture of Őrség."
    },
    facts: {
      de: ["Freilichtmuseum.", "Traditionelle 'Szer'-Siedlung.", "Umzäunte Häuser.", "Teil des Őrség-Nationalparks."],
      hu: ["Szabadtéri múzeum.", "Hagyományos 'szeres' település.", "Kerített házak.", "Az Őrségi Nemzeti Park része."],
      ro: ["Muzeu în aer liber.", "Așezare tradițională de tip 'szer'.", "Case împrejmuite.", "Parte a Parcului Național Őrség."],
      en: ["Open-air museum.", "Traditional 'szer' settlement.", "Fenced houses.", "Part of the Őrség National Park."]
    }
  },
  // HU-VE: Veszprém
  {
    id: "city-ajka-extra",
    type: "city",
    parent: "HU-VE",
    coords: [17.558, 47.102],
    name: { de: "Ajka", hu: "Ajka", ro: "Ajka", en: "Ajka" },
    description: {
      de: "Ajka ist eine Industriestadt im Bakony-Gebirge, bekannt für Glasherstellung und Bergbau.",
      hu: "Ajka iparváros a Bakonyban, híres az üveggyártásáról és a bányászatáról.",
      ro: "Ajka este un oraș industrial în munții Bakony, cunoscut pentru fabricarea sticlei și minerit.",
      en: "Ajka is an industrial town in the Bakony Mountains, famous for glassmaking and mining."
    },
    descriptionAdvanced: {
      de: "Die Stadt hat eine lange Tradition in der Kristallglasherstellung (Ajka Crystal). Umgeben von den Bergen des Bakony, bietet die Stadt auch Zugang zu schönen Wanderwegen. Das Bergbaumuseum zeigt die Geschichte des Kohlebergbaus in der Region.",
      hu: "A város hosszú hagyományokkal rendelkezik az ólomkristály-gyártásban (Ajka Kristály). A Bakony hegyei által körülvett város szép túraútvonalakat is kínál. A Bányászati Múzeum bemutatja a környék szénbányászatának történetét.",
      ro: "Orașul are o lungă tradiție în fabricarea cristalului (Ajka Crystal). Înconjurat de munții Bakony, orașul oferă și acces la trasee frumoase de drumeție. Muzeul Mineritului prezintă istoria exploatării cărbunelui în regiune.",
      en: "The town has a long tradition in crystal glass manufacturing (Ajka Crystal). Surrounded by the Bakony Mountains, the town also offers access to beautiful hiking trails. The Mining Museum shows the history of coal mining in the region."
    },
    facts: {
      de: ["Berühmte Kristallglasmanufaktur.", "Bergbaumuseum.", "Im Bakony-Gebirge.", "Industrielles Zentrum."],
      hu: ["Híres kristályüveg-gyártás.", "Bányászati Múzeum.", "A Bakonyban található.", "Ipari központ."],
      ro: ["Fabrică de cristal faimoasă.", "Muzeul Mineritului.", "În munții Bakony.", "Centru industrial."],
      en: ["Famous crystal glass factory.", "Mining Museum.", "In the Bakony Mountains.", "Industrial center."]
    }
  },
  {
    id: "city-berhida-extra",
    type: "city",
    parent: "HU-VE",
    coords: [18.132, 47.113],
    name: { de: "Berhida", hu: "Berhida", ro: "Berhida", en: "Berhida" },
    description: {
      de: "Berhida ist eine kleine Stadt in der Nähe des Balaton.",
      hu: "Berhida kisváros a Balaton közelében.",
      ro: "Berhida este un orășel situat în apropiere de Balaton.",
      en: "Berhida is a small town near Lake Balaton."
    },
    descriptionAdvanced: {
      de: "Die Stadt ist vor allem für ihre spätgotische katholische Kirche aus dem 14. Jahrhundert bekannt. Sie liegt am Fluss Séd. Berhida hat eine Mischung aus industrieller Vergangenheit und ländlichem Charme.",
      hu: "A város leginkább a 14. századi késő gótikus katolikus templomáról ismert. A Séd folyó mentén fekszik. Berhida az ipari múlt és a vidéki báj keverékét nyújtja.",
      ro: "Orașul este cunoscut în special pentru biserica sa catolică gotică târzie din secolul al XIV-lea. Se află pe râul Séd. Berhida are un amestec de trecut industrial și farmec rural.",
      en: "The town is primarily known for its 14th-century late Gothic Catholic church. It is located along the Séd River. Berhida has a blend of industrial past and rural charm."
    },
    facts: {
      de: ["Spätgotische Kirche.", "Am Fluss Séd.", "In der Nähe von Veszprém.", "Kleinstädtische Atmosphäre."],
      hu: ["Késő gótikus templom.", "A Séd folyó mentén.", "Veszprém közelében.", "Kisvárosi hangulat."],
      ro: ["Biserică gotică târzie.", "Pe râul Séd.", "Lângă Veszprém.", "Atmosferă de orășel."],
      en: ["Late Gothic church.", "Along the Séd River.", "Near Veszprém.", "Small-town atmosphere."]
    }
  },
  {
    id: "geo-csobanc-extra",
    type: "mountain",
    parent: "HU-VE",
    coords: [17.502, 46.871],
    name: { de: "Csobánc", hu: "Csobánc", ro: "Csobánc", en: "Csobánc" },
    description: {
      de: "Csobánc ist einer der charakteristischen Zeugenberge des Tapolca-Beckens.",
      hu: "A Csobánc a Tapolcai-medence egyik jellegzetes tanúhegye.",
      ro: "Csobánc este unul dintre dealurile martor caracteristice ale bazinului Tapolca.",
      en: "Csobánc is one of the characteristic witness hills of the Tapolca Basin."
    },
    descriptionAdvanced: {
      de: "Auf dem Gipfel befinden sich die Ruinen der Burg Csobánc. Der Berg ist ein beliebtes Ziel für Wanderer und Gleitschirmflieger. Die Hänge sind mit Weinreben bedeckt und bieten ein fantastisches Panorama auf den Balaton.",
      hu: "A csúcsán találhatók Csobánc várának romjai. A hegy a túrázók és a siklóernyősök kedvelt célpontja. Oldalát szőlőültetvények borítják, és fantasztikus panorámát nyújt a Balatonra.",
      ro: "Pe vârful său se află ruinele cetății Csobánc. Dealul este o destinație populară pentru drumeți și parapantiști. Versanții sunt acoperiți cu viță de vie și oferă o panoramă fantastică asupra Balatonului.",
      en: "On its summit are the ruins of Csobánc Castle. The hill is a popular destination for hikers and paragliders. Its slopes are covered with vineyards and offer a fantastic panorama of Lake Balaton."
    },
    facts: {
      de: ["Zeugenberg vulkanischen Ursprungs.", "Burgruine auf dem Gipfel.", "Paragliding-Spot.", "Berühmte Weinregion."],
      hu: ["Vulkanikus eredetű tanúhegy.", "Várrom a csúcson.", "Siklóernyős helyszín.", "Híres bortermelő vidék."],
      ro: ["Deal martor de origine vulcanică.", "Ruine de cetate pe vârf.", "Loc pentru parapantă.", "Faimoasă regiune viticolă."],
      en: ["Witness hill of volcanic origin.", "Castle ruins on the summit.", "Paragliding spot.", "Famous wine region."]
    }
  },
  {
    id: "historical-csesznek-extra",
    type: "historical",
    parent: "HU-VE",
    coords: [17.861, 47.351],
    name: { de: "Burg Csesznek", hu: "Cseszneki vár", ro: "Cetatea Csesznek", en: "Csesznek Castle" },
    description: {
      de: "Die Burg Csesznek ist eine beeindruckende mittelalterliche Festung im Bakony-Gebirge.",
      hu: "A cseszneki vár egy lenyűgöző középkori erődítmény a Bakonyban.",
      ro: "Cetatea Csesznek este o fortificație medievală impresionantă în munții Bakony.",
      en: "The Csesznek castle is an impressive medieval fortress in the Bakony Mountains."
    },
    descriptionAdvanced: {
      de: "Sie wurde im 13. Jahrhundert nach dem Tatarensturm erbaut. Die auf einem steilen Felsen gelegene Burg wechselte oft ihre Besitzer, darunter die Familien Cseszneky, Garai und Esterházy. Heute ist sie eine der romantischsten Ruinen Ungarns.",
      hu: "A 13. században épült a tatárjárás után. A meredek sziklára épült vár gyakran cserélt gazdát, tulajdonosai között voltak a Cseszneky, a Garai és az Esterházy családok. Ma Magyarország egyik legromantikusabb várroma.",
      ro: "A fost construită în secolul al XIII-lea, după invazia tătară. Cetatea situată pe o stâncă abruptă și-a schimbat des stăpânii, printre aceștia numărându-se familiile Cseszneky, Garai și Esterházy. Astăzi este una dintre cele mai romantice ruine din Ungaria.",
      en: "It was built in the 13th century after the Mongol invasion. The castle, situated on a steep rock, often changed owners, including the Cseszneky, Garai, and Esterházy families. Today it is one of Hungary's most romantic castle ruins."
    },
    facts: {
      de: ["Auf einem Felsen gelegen.", "Mittelalterliche Wurzeln.", "Via Ferrata in der Nähe.", "Wunderschöne Aussicht auf den Bakony."],
      hu: ["Sziklára épült.", "Középkori gyökerek.", "Via Ferrata a közelben.", "Gyönyörű kilátás a Bakonyra."],
      ro: ["Situată pe o stâncă.", "Rădăcini medievale.", "Via Ferrata în apropiere.", "Vedere superbă asupra munților Bakony."],
      en: ["Built on a rock.", "Medieval roots.", "Via Ferrata nearby.", "Beautiful view of the Bakony."]
    }
  },
  {
    id: "landmark-osku-extra",
    type: "landmark",
    parent: "HU-VE",
    coords: [18.069, 47.163],
    name: { de: "Rundkirche von Öskü", hu: "Ösküi kerektemplom", ro: "Biserica rotundă din Öskü", en: "Round church of Öskü" },
    description: {
      de: "Die Rundkirche von Öskü ist ein einzigartiges mittelalterliches Gebäude mit einem Pilzdach.",
      hu: "Az ösküi kerektemplom egyedülálló középkori épület gomba alakú tetővel.",
      ro: "Biserica rotundă din Öskü este o clădire medievală unică cu acoperiș în formă de ciupercă.",
      en: "The round church of Öskü is a unique medieval building with a mushroom-shaped roof."
    },
    descriptionAdvanced: {
      de: "Die Rotunde stammt vermutlich aus dem 11. Jahrhundert. Ihr charakteristisches Dach verleiht ihr ein märchenhaftes Aussehen. Die Kirche steht auf einem kleinen Hügel und ist eines der meistfotografierten Baudenkmäler der Region.",
      hu: "A rotunda valószínűleg a 11. századból származik. Jellegzetes teteje mesebeli megjelenést kölcsönöz neki. A templom egy kis dombon áll, és a régió egyik legtöbbet fotózott műemléke.",
      ro: "Rotunda datează probabil din secolul al XI-lea. Acoperișul său caracteristic îi conferă un aspect de basm. Biserica stă pe un mic deal și este unul dintre cele mai fotografiate monumente din regiune.",
      en: "The rotunda probably dates from the 11th century. Its characteristic roof gives it a fairytale appearance. The church stands on a small hill and is one of the most photographed monuments in the region."
    },
    facts: {
      de: ["Mittelalterliche Rotunde.", "Pilzförmiges Dach.", "Auf einem Hügel gelegen.", "Seltene Architekturform."],
      hu: ["Középkori rotunda.", "Gomba alakú tető.", "Domboldalon fekszik.", "Ritka építészeti forma."],
      ro: ["Rotundă medievală.", "Acoperiș în formă de ciupercă.", "Situată pe un deal.", "Formă arhitecturală rară."],
      en: ["Medieval rotunda.", "Mushroom-shaped roof.", "Situated on a hill.", "Rare architectural form."]
    }
  },
  // HU-ZA: Zala
  {
    id: "city-letenye-extra",
    type: "city",
    parent: "HU-ZA",
    coords: [16.724, 46.434],
    name: { de: "Letenye", hu: "Letenye", ro: "Letenye", en: "Letenye" },
    description: {
      de: "Letenye ist eine Grenzstadt zu Kroatien, bekannt für ihren alten Schlosspark.",
      hu: "Letenye horvát határmenti város, híres régi kastélyparkjáról.",
      ro: "Letenye este un oraș de frontieră cu Croația, cunoscut pentru vechiul său parc al castelului.",
      en: "Letenye is a border town with Croatia, famous for its old castle park."
    },
    descriptionAdvanced: {
      de: "Die Stadt liegt am Fluss Mura. Der Park des Schlosses Szapáry beherbergt eine riesige, über 150 Jahre alte Platane, die als eine der schönsten des Landes gilt. Letenye ist ein wichtiger Grenzübergang.",
      hu: "A város a Mura folyó mentén fekszik. A Szapáry-kastély parkjában található egy hatalmas, több mint 150 éves platánfa, amelyet az ország egyik legszebbjének tartanak. Letenye fontos határátkelőhely.",
      ro: "Orașul este situat pe râul Mura. Parcul castelului Szapáry găzduiește un platan uriaș, vechi de peste 150 de ani, considerat unul dintre cei mai frumoși din țară. Letenye este un punct important de trecere a frontierei.",
      en: "The town is located along the Mura River. The park of the Szapáry Castle houses a huge plane tree, over 150 years old, considered one of the most beautiful in the country. Letenye is an important border crossing."
    },
    facts: {
      de: ["An der kroatischen Grenze.", "Schlosspark mit Riesenplatane.", "Am Fluss Mura.", "Wichtiger Verkehrsknotenpunkt."],
      hu: ["A horvát határnál.", "Kastélypark óriás platánnal.", "A Mura folyó mentén.", "Fontos közlekedési csomópont."],
      ro: ["La granița cu Croația.", "Parcul castelului cu un platan uriaș.", "Pe râul Mura.", "Nod de transport important."],
      en: ["On the Croatian border.", "Castle park with giant plane tree.", "Along the Mura River.", "Important transport hub."]
    }
  },
  {
    id: "city-zalalovo-extra",
    type: "city",
    parent: "HU-ZA",
    coords: [16.586, 46.848],
    name: { de: "Zalalövő", hu: "Zalalövő", ro: "Zalalövő", en: "Zalalövő" },
    description: {
      de: "Zalalövő ist eine Stadt am Fluss Zala, die auf römischen Ruinen erbaut wurde.",
      hu: "Zalalövő a Zala folyó mentén fekvő város, amely római romokra épült.",
      ro: "Zalalövő este un oraș pe râul Zala, construit pe ruine romane.",
      en: "Zalalövő is a town along the Zala River built on Roman ruins."
    },
    descriptionAdvanced: {
      de: "Früher hieß die römische Siedlung Salla. Die Stadt ist ein Tor zur Region Őrség. In der Nähe befindet sich der Borostyán-See, ein beliebtes Freizeitzentrum für Schwimmer und Angler.",
      hu: "Korábban a római település neve Salla volt. A város az Őrség kapuja. A közelben található a Borostyán-tó, amely a fürdőzők és horgászok kedvelt szabadidőközpontja.",
      ro: "Anterior, așezarea romană se numea Salla. Orașul este o poartă către regiunea Őrség. În apropiere se află lacul Borostyán, un centru de recreere popular pentru înotători și pescari.",
      en: "Previously, the Roman settlement was called Salla. The town is a gateway to the Őrség region. Nearby is the Borostyán Lake, a popular leisure center for swimmers and anglers."
    },
    facts: {
      de: ["Römische Siedlung Salla.", "Tor zum Őrség.", "Borostyán-See.", "Am Fluss Zala."],
      hu: ["Salla néven római település.", "Az Őrség kapuja.", "Borostyán-tó.", "A Zala folyó mentén."],
      ro: ["Așezarea romană Salla.", "Poarta către Őrség.", "Lacul Borostyán.", "Pe râul Zala."],
      en: ["Roman settlement Salla.", "Gateway to Őrség.", "Borostyán Lake.", "By the Zala River."]
    }
  },
  {
    id: "geo-kisbalaton-extra",
    type: "lake",
    parent: "HU-ZA",
    coords: [17.183, 46.667],
    name: { de: "Kis-Balaton", hu: "Kis-Balaton", ro: "Micul Balaton", en: "Little Balaton" },
    description: {
      de: "Der Kis-Balaton ist ein riesiges Feuchtgebiet und Naturschutzgebiet am Westende des Balaton.",
      hu: "A Kis-Balaton egy hatalmas vizes élőhely és természetvédelmi terület a Balaton nyugati végénél.",
      ro: "Micul Balaton este o zonă umedă uriașă și o rezervație naturală la capătul vestic al Balatonului.",
      en: "The Little Balaton is a huge wetland and nature reserve at the western end of Lake Balaton."
    },
    descriptionAdvanced: {
      de: "Er ist ein international bedeutendes Vogelparadies und Teil des Balaton-Oberland-Nationalparks. Das Gebiet filtert das Wasser des Zala-Flusses, bevor es in den Balaton fließt. Die Insel Kányavári ist der am besten zugängliche Teil für Besucher.",
      hu: "Nemzetközi jelentőségű madárparadicsom és a Balaton-felvidéki Nemzeti Park része. A terület megszűri a Zala folyó vizét, mielőtt az a Balatonba ömlene. A Kányavári-sziget a látogatók számára leginkább megközelíthető rész.",
      ro: "Este un paradis al păsărilor de importanță internațională și face parte din Parcul Național Balaton-felvidék. Zona filtrează apa râului Zala înainte ca aceasta să se verse în Balaton. Insula Kányavári este cea mai accesibilă parte pentru vizitatori.",
      en: "It is an internationally significant bird paradise and part of the Balaton Uplands National Park. The area filters the water of the Zala River before it flows into Lake Balaton. Kányavári Island is the most accessible part for visitors."
    },
    facts: {
      de: ["Vogelparadies.", "Natürliches Filtersystem.", "Kányavári-Insel.", "Büffelreservat in der Nähe."],
      hu: ["Madárparadicsom.", "Természetes szűrőrendszer.", "Kányavári-sziget.", "Bivalyrezervátum a közelben."],
      ro: ["Paradisul păsărilor.", "Sistem de filtrare natural.", "Insula Kányavári.", "Rezervație de bivoli în apropiere."],
      en: ["Bird paradise.", "Natural filter system.", "Kányavári Island.", "Buffalo reserve nearby."]
    }
  },
  {
    id: "historical-egervar-extra",
    type: "historical",
    parent: "HU-ZA",
    coords: [16.858, 46.937],
    name: { de: "Burgschloss Egervár", hu: "Egervári várkastély", ro: "Castelul din Egervár", en: "Egervár Castle" },
    description: {
      de: "Das Burgschloss von Egervár ist eine spätgotische und Renaissance-Festung.",
      hu: "Az egervári várkastély egy késő gótikus és reneszánsz stílusú erődítmény.",
      ro: "Castelul din Egervár este o fortificație în stil gotic târziu și renaștere.",
      en: "The Egervár castle is a late Gothic and Renaissance style fortification."
    },
    descriptionAdvanced: {
      de: "Sie war eine wichtige Grenzfestung während der Türkenkriege. Die vierflügelige Burg mit Ecktürmen wurde im 18. Jahrhundert barockisiert. Heute dient sie als Kulturzentrum und beherbergt Theateraufführungen im Sommer.",
      hu: "Fontos végvár volt a török időkben. A négyszárnyú, saroktornyos várat a 18. században barokk stílusban alakították át. Ma kulturális központként működik, és nyaranta színházi előadásoknak ad otthont.",
      ro: "A fost o cetate de frontieră importantă în timpul războaielor cu turcii. Castelul cu patru aripi și turnuri de colț a fost transformat în stil baroc în secolul al XVIII-lea. Astăzi funcționează ca centru cultural și găzduiește spectacole de teatru vara.",
      en: "It was an important border fortress during the Turkish wars. The four-wing castle with corner towers was remodeled in Baroque style in the 18th century. Today it serves as a cultural center and hosts theater performances in summer."
    },
    facts: {
      de: ["Ehemalige Grenzfestung.", "Barockschloss mit Ecktürmen.", "Sommertheater.", "In der Nähe von Zalaegerszeg."],
      hu: ["Egykori végvár.", "Barokk várkastély saroktornyokkal.", "Nyári színház.", "Zalaegerszeg közelében."],
      ro: ["Fostă cetate de frontieră.", "Castel baroc cu turnuri de colț.", "Teatru de vară.", "Lângă Zalaegerszeg."],
      en: ["Former border fortress.", "Baroque castle with corner towers.", "Summer theater.", "Near Zalaegerszeg."]
    }
  },
  {
    id: "landmark-gocsej-falumuzeum-extra",
    type: "landmark",
    parent: "HU-ZA",
    coords: [16.837, 46.843],
    name: { de: "Freilichtmuseum Göcsej", hu: "Göcseji Falumúzeum", ro: "Muzeul satului din Göcsej", en: "Göcsej Village Museum" },
    description: {
      de: "Das Göcseji Falumúzeum war das erste Freilichtmuseum Ungarns.",
      hu: "A Göcseji Falumúzeum Magyarország első szabadtéri néprajzi múzeuma volt.",
      ro: "Muzeul satului din Göcsej a fost primul muzeu al satului în aer liber din Ungaria.",
      en: "The Göcsej Village Museum was the first open-air museum in Hungary."
    },
    descriptionAdvanced: {
      de: "Es liegt am Ufer der Zala in Zalaegerszeg. Das Museum präsentiert die traditionelle Holzarchitektur der Region Göcsej. Man kann hier originale Bauernhäuser, eine Wassermühle und eine Holzkirche besichtigen.",
      hu: "A Zala folyó partján fekszik Zalaegerszegen. A múzeum Göcsej hagyományos faépítészetét mutatja be. Eredeti parasztházak, vízimalom és egy fatemplom is megtekinthető.",
      ro: "Este situat pe malul râului Zala în Zalaegerszeg. Muzeul prezintă arhitectura tradițională din lemn a regiunii Göcsej. Se pot vizita case țărănești originale, o moară de apă și o biserică de lemn.",
      en: "It is located on the banks of the Zala River in Zalaegerszeg. The museum presents the traditional wooden architecture of the Göcsej region. You can visit original farmhouses, a water mill, and a wooden church."
    },
    facts: {
      de: ["Erstes Freilichtmuseum Ungarns.", "Holzbau-Tradition.", "Originale Wassermühle.", "Einblick in das Bauernleben."],
      hu: ["Magyarország első falumúzeuma.", "Faépítészeti hagyományok.", "Eredeti vízimalom.", "Betekintés a paraszti életbe."],
      ro: ["Primul muzeu al satului din Ungaria.", "Tradiții în construcția de lemn.", "Moară de apă originală.", "Perspectivă asupra vieții țărănești."],
      en: ["Hungary's first village museum.", "Wooden construction traditions.", "Original water mill.", "Insight into peasant life."]
    }
  }
];

