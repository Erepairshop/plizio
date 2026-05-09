import { POI } from "./poi";

export const poiExtraBulgariaHistory: POI[] = [
  {
    id: "cult-rila-monastery",
    type: "landmark",
    parent: "bg-country",
    coords: [23.3405, 42.1333],
    name: { de: "Rila-Kloster", hu: "Rilai kolostor", ro: "Manastirea Rila", en: "Rila Monastery" },
    description: {
      de: "UNESCO-geschütztes bulgarisch-orthodoxes Kloster aus dem 10. Jahrhundert.",
      hu: "UNESCO-védett bolgár ortodox kolostor a 10. századból.",
      ro: "Manastire ortodoxa bulgara din secolul al X-lea, inclusa în UNESCO.",
      en: "A UNESCO-protected Bulgarian Orthodox monastery from the 10th century."
    },
    facts: {
      de: ["UNESCO-Welterbe", "Gegründet im 10. Jahrhundert", "Wichtiges orthodoxes Zentrum"],
      hu: ["UNESCO világörökség", "A 10. században alapították", "Fontos ortodox központ"],
      ro: ["Patrimoniu mondial UNESCO", "Fondata în secolul al X-lea", "Centru ortodox important"],
      en: ["UNESCO World Heritage site", "Founded in the 10th century", "Important Orthodox center"]
    },
    descriptionAdvanced: {
      de: "Das Rila-Kloster, tief im Rila-Gebirge gelegen, ist das größte und berühmteste ostorthodoxe Kloster Bulgariens. Gegründet im 10. Jahrhundert vom Einsiedler Iwan von Rila, ist es seit über tausend Jahren ein spirituelles und kulturelles Leuchtfeuer für das bulgarische Volk. Der Klosterkomplex ist ein Meisterwerk der bulgarischen Wiedergeburtsarchitektur mit eindrucksvollen schwarz-weiß gestreiften Arkaden, kunstvollen Holzschnitzereien und farbenprächtigen Fresken, die Außen- und Innenwände bedecken. Als UNESCO-Welterbe verkörpert das Kloster bis heute die bulgarische Identität und den geistigen Widerstand in Zeiten der Fremdherrschaft. Besonders beeindruckend sind die Hauptkirche Mariä Geburt mit einer der schönsten Ikonostasen des Balkans und der Hreljo-Turm, das älteste erhaltene Gebäude der Anlage. Die ruhige Berglage und die tiefe spirituelle Atmosphäre machen das Rila-Kloster zu einem unverzichtbaren Pilger- und Kulturziel.",
      hu: "A Rilai kolostor, a Rila-hegység mélyén, Bulgária legnagyobb és leghíresebb ortodox kolostora. A 10. században alapította Rilai Szent János remete, és több mint ezer éve a bolgár nép szellemi és kulturális iránymutatója. A kolostoregyüttes a bolgár újjászületés-kori építészet remekmuve: jellegzetes fekete-fehér csíkos árkádokkal, finom faragásokkal és élénk színu freskókkal, melyek a külso és belso falakat is borítják. Az UNESCO-világörökség részeként ma is a bolgár identitás és a megszálló hatalmakkal szembeni szellemi ellenállás jelképe. Különösen lenyugözo a Szuz Mária születése-fotemplom – a Balkán egyik legszebb ikonosztázával – és a Hreljo-torony, a komplexum legrégebbi fennmaradt épülete. A nyugodt hegyvidéki környezet és a mély spirituális hangulat zarándok- és kulturális úti céllá teszi.",
      ro: "Manastirea Rila, ascunsa adânc în Mun?ii Rila, este cea mai mare ?i cea mai cunoscuta manastire ortodoxa din Bulgaria. Întemeiata în secolul al X-lea de pustnicul Sfântul Ioan de Rila, este de peste un mileniu un far spiritual ?i cultural al poporului bulgar. Complexul manastiresc este o capodopera a arhitecturii din perioada Rena?terii bulgare, cu arcade impresionante în dungi alb-negru, sculpturi delicate în lemn ?i fresce vii care acopera atât pere?ii exteriori, cât ?i pe cei interiori. Inclusa în Patrimoniul Mondial UNESCO, manastirea ramâne un simbol al identita?ii bulgare ?i al rezisten?ei spirituale în perioadele de stapânire straina. Sunt deosebit de impresionante Biserica Principala a Na?terii Maicii Domnului, cu unul dintre cele mai frumoase iconostase din Balcani, ?i Turnul lui Hreljo, cea mai veche cladire a complexului. Lini?tea muntelui ?i atmosfera profund spirituala fac din Manastirea Rila un loc esen?ial de pelerinaj ?i o destinație culturala de top.",
      en: "The Rila Monastery, nestled in the deep recesses of the Rila Mountains, is the largest and most famous Eastern Orthodox monastery in Bulgaria. Founded in the 10th century by the hermit Saint John of Rila, it has served as a spiritual and cultural beacon for the Bulgarian people for over a millennium. The monastery complex is a masterpiece of Bulgarian National Revival architecture, featuring stunning black-and-white striped arches, intricate wood carvings, and vibrant frescoes that cover its exterior and interior walls. Recognized as a UNESCO World Heritage site, it remains a symbol of Bulgarian identity and resistance during periods of foreign rule. Visitors are often captivated by the Main Church of the Nativity, which houses one of the finest iconostases in the Balkans, and the Hrelyo Tower, the oldest surviving building in the complex. The monastery's tranquil mountain setting and profound spiritual atmosphere make it an essential pilgrimage site and a top destination for cultural exploration in Bulgaria."
    },
    factsAdvanced: {
      de: [
        "Das Rila-Kloster erstreckt sich über 8.800 Quadratmeter und verfügt über rund 300 Mönchszellen.",
        "Die heutige Hauptkirche wurde zwischen 1834 und 1837 erbaut und enthält 1.200 einzelne Fresken.",
        "Der 1335 errichtete Hreljo-Turm war als einziges Bauwerk vom großen Brand von 1833 verschont geblieben.",
        "Im Klostermuseum wird das berühmte Raffail-Kreuz gezeigt – ein Holzkreuz mit 104 religiösen Szenen und 650 Miniaturfiguren.",
        "Mönch Raffail arbeitete über 12 Jahre (1790–1802) an dem Kreuz und verlor durch die feinen Schnitzereien sein Augenlicht.",
        "Die Klosterbibliothek umfasst über 250 Handschriften und 9.000 alte Drucke.",
        "Das Kloster liegt auf 1.147 Metern Höhe im Rila-Naturpark.",
        "Das Rila-Kloster wurde 1983 in die UNESCO-Welterbeliste aufgenommen."
      ],
      hu: [
        "A Rilai kolostor 8800 négyzetméteren fekszik, és mintegy 300 szerzetesi cellával rendelkezik.",
        "A jelenlegi fotemplom 1834 és 1837 között épült, és 1200 különálló freskót tartalmaz.",
        "Az 1335-ben emelt Hreljo-torony az egyetlen épület, amely megmaradt az 1833-as nagy tuzvész után.",
        "A kolostor múzeumában látható a híres Raffail-kereszt – egy fafaragású kereszt 104 vallási jelenettel és 650 miniatur alakkal.",
        "Raffail szerzetes több mint 12 éven át (1790–1802) dolgozott a kereszten, és a finom faragások miatt elveszítette látását.",
        "A kolostor könyvtára több mint 250 kéziratot és 9000 régi nyomtatványt oriz.",
        "A kolostor 1147 méteres magasságban fekszik, a Rila Nemzeti Parkban.",
        "A Rilai kolostor 1983-ban került fel az UNESCO világörökségi listájára."
      ],
      ro: [
        "Manastirea Rila se întinde pe 8.800 de metri patrați ?i are aproximativ 300 de chilii.",
        "Biserica principala actuala a fost construita între 1834 ?i 1837 ?i con?ine 1.200 de fresce individuale.",
        "Turnul lui Hreljo, ridicat în 1335, este singura construcție care a supravie?uit marelui incendiu din 1833.",
        "Muzeul manastirii adapostește celebra Cruce a lui Rafail, sculptata în lemn cu 104 scene religioase ?i 650 de figuri miniaturale.",
        "Crucea lui Rafail a fost realizata în peste 12 ani (1790–1802), iar calugarul Rafail ?i-a pierdut treptat vederea din cauza muncii migaloase.",
        "Biblioteca manastirii pastreaza peste 250 de manuscrise ?i 9.000 de tiparituri vechi.",
        "Complexul se afla la o altitudine de 1.147 de metri, în Parcul Natural Rila.",
        "Manastirea Rila a fost înscrisa pe lista Patrimoniului Mondial UNESCO în 1983."
      ],
      en: [
        "The Rila Monastery covers an area of 8,800 square meters and has approximately 300 monk cells.",
        "The current main church was built between 1834 and 1837 and features 1,200 individual frescoes.",
        "Hrelyo's Tower, built in 1335, is the only structure that survived the great fire of 1833.",
        "The monastery's museum houses the famous Rafail's Cross, a wooden cross carved with 104 religious scenes and 650 miniature figures.",
        "Rafail's Cross took over 12 years to complete (1790-1802), and the monk Rafail eventually lost his sight due to the painstaking work.",
        "The monastery library contains over 250 manuscript books and 9,000 old printed volumes.",
        "The complex is located at an altitude of 1,147 meters in the Rila Nature Park.",
        "The Rila Monastery was added to the UNESCO World Heritage list in 1983."
      ]
    },
    image: "/geo-images/bulgaria/cult-rila-monastery.webp"
  },
  {
    id: "cult-boyana",
    type: "landmark",
    parent: "bg-country",
    coords: [23.265, 42.6435],
    name: { de: "Boyana-Kirche", hu: "Boyana templom", ro: "Biserica Boyana", en: "Boyana Church" },
    description: {
      de: "Die Kirche von Bojana, am Rande von Sofia am Fuße des Witoscha-Gebirges gelegen, ist ein mittelalterliches bulgarisch-orthodoxes Gotteshaus und gehört seit 1979 zum UNESCO-Weltkulturerbe. Die Kirche ist weltberühmt für ihre außergewöhnlich gut erhaltenen Fresken aus dem Jahr 1259, die als eines der bedeutendsten Beispiele mittelalterlicher osteuropäischer Kunst gelten. Die Wandmalereien zeichnen sich durch einen für die damalige Zeit ungewöhnlichen Realismus und eine tiefe psychologische Darstellung der Figuren aus, was sie zu Vorläufern der Renaissance macht. Besonders beeindruckend sind die Porträts der Stifter, Sebastokrator Kalojan und seiner Frau Desislawa, sowie des bulgarischen Zaren Konstantin Tich und der Zarin Irina. Die Kirche von Bojana ist ein Ort von unschätzbarem kulturellem Wert und ein Muss für jeden Besucher Sofias, der sich für Kunstgeschichte und Spiritualität interessiert.",
      hu: "A Bojana-templom Szófia szélén, a Vitosa-hegység lábánál található középkori bolgár ortodox templom, amely 1979 óta az UNESCO Világörökség része. A templom világhíru az 1259-bol származó, rendkívül jó állapotban fennmaradt freskóiról, amelyek a középkori kelet-európai muvészet egyik legjelentosebb példájának számítanak. A falfestményeket a korukhoz képest szokatlan realizmus és az alakok mély pszichológiai ábrázolása jellemzi, ami a reneszánsz elofutárává teszi oket. Különösen lenyugözoek az adományozók, Kalojan szebasztokrátor és felesége, Desziszlava, valamint Konsztantin Tih bolgár cár és Irina cárné portréi. A Bojana-templom felbecsülhetetlen kulturális értékkel bír, és kötelezo látnivaló minden Szófiába látogató számára, akit érdekel a muvészettörténet és a spiritualitás.",
      ro: "Biserica Boiana, situata la marginea Sofiei, la poalele muntelui Vitosha, este un laca? de cult ortodox bulgar medieval ?i face parte din Patrimoniul Mondial UNESCO din 1979. Biserica este faimoasa în întreaga lume pentru frescele sale excepțional de bine conservate din anul 1259, considerate unul dintre cele mai importante exemple de arta medievala est-europeana. Picturile murale se caracterizeaza printr-un realism neobi?nuit pentru acea perioada ?i o reprezentare psihologica profunda a figurilor, ceea ce le face precursoare ale Rena?terii. Deosebit de impresionante sunt portretele ctitorilor, sebastocratorul Kaloyan ?i soția sa Desislava, precum ?i ale ?arului bulgar Constantin Tih ?i ale ?arinei Irina. Biserica Boiana este un loc de o valoare culturala inestimabila ?i o vizita obligatorie pentru orice vizitator al Sofiei interesat de istoria artei ?i spiritualitate.",
      en: "The Boyana Church, located on the outskirts of Sofia at the foot of Vitosha Mountain, is a medieval Bulgarian Orthodox church and has been a UNESCO World Heritage site since 1979. The church is world-famous for its exceptionally well-preserved frescoes dating from 1259, considered one of the most significant examples of medieval Eastern European art. The murals are characterized by a realism unusual for the period and a deep psychological portrayal of the figures, making them precursors to the Renaissance. Particularly impressive are the portraits of the donors, Sebastocrator Kaloyan and his wife Desislava, as well as the Bulgarian Tsar Constantine Tikh and Tsaritsa Irina. The Boyana Church is a site of inestimable cultural value and a must-see for any visitor to Sofia interested in art history and spirituality."
    },
    facts: {
      de: ["Status: UNESCO-Weltkulturerbe seit 1979", "Alter: Fresken von 1259", "Bedeutung: Vorläufer der Renaissance-Kunst", "Lage: Am Fuße des Witoscha-Gebirges", "Highlight: Porträts von Kalojan und Desislawa", "Architektur: Drei Bauphasen (11., 13. und 19. Jh.)"],
      hu: ["Státusz: UNESCO Világörökség 1979 óta", "Kor: 1259-es freskók", "Jelentoség: A reneszánsz muvészet elofutára", "Fekvés: A Vitosa-hegység lábánál", "Látnivaló: Kalojan és Desziszlava portréi", "Építészet: Három építési szakasz (11., 13. és 19. sz.)"],
      ro: ["Statut: Patrimoniu Mondial UNESCO din 1979", "Vârsta: Fresce din 1259", "Importan?a: Precursor al artei Rena?terii", "Locație: La poalele muntelui Vitosha", "Atracție: Portretele lui Kaloyan ?i Desislava", "Arhitectura: Trei faze de construcție (sec. XI, XIII ?i XIX)"],
      en: ["Status: UNESCO World Heritage site since 1979", "Age: Frescoes from 1259", "Significance: Precursor to Renaissance art", "Location: At the foot of Vitosha Mountain", "Highlight: Portraits of Kaloyan and Desislava", "Architecture: Three construction phases (11th, 13th, and 19th centuries)"]
    },
    factsAdvanced: {
      de: [
        "Die Kirche von Bojana zeigt 240 menschliche Figuren in 89 verschiedenen biblischen Szenen.",
        "Die Fresken von 1259 stammen von einem anonymen Meister, der heute als \\\\\\\"Bojana-Meister\\\\\\\" bezeichnet wird.",
        "Die Kirche wurde in drei Bauphasen errichtet: 11. Jahrhundert, Mitte 13. Jahrhundert und Mitte 19. Jahrhundert.",
        "Das Bild des heiligen Nikolaus gilt als eine der frühesten realistischen Darstellungen in der orthodoxen Kunst.",
        "Das Porträt der Zarin Irina wird wegen seiner außergewöhnlichen Schönheit und der detaillierten mittelalterlichen Gewänder gelobt.",
        "Anfang des 20. Jahrhunderts sollte die Kirche zugunsten eines größeren Gotteshauses abgerissen werden, wurde aber durch Königin Eleonore von Bulgarien gerettet.",
        "Die etwa 1 Meter dicken Mauern halten die Temperatur konstant und schützen die Fresken.",
        "Die Fresken wurden in einer der \\\\\\\"Fresco buono\\\\\\\" ähnlichen Technik auf feuchten Putz aufgetragen."
      ],
      hu: [
        "A Bojana-templomban 240 emberi alak látható 89 különbözo bibliai jelenetben.",
        "Az 1259-es freskókat egy ismeretlen mester készítette, akit ma \\\\\\\"Bojana-mesternek\\\\\\\" neveznek.",
        "A templomot három szakaszban építették: a 11. században, a 13. század közepén és a 19. század közepén.",
        "A templom Szent Miklós-ábrázolása az ortodox muvészet egyik legkorábbi realisztikus alkotásának számít.",
        "Irina cárné portréját kivételes szépségéért és a középkori öltözékek aprólékos megjelenítéséért dicsérik.",
        "A 20. század elején majdnem lebontották egy nagyobb templom javára, de Eleonóra bolgár királyné mentette meg.",
        "A mintegy 1 méter vastag falak állandó homérsékletet biztosítanak, segítve a freskók megorzését.",
        "A freskókat a \\\\\\\"fresco buono\\\\\\\"-hoz hasonló technikával, nedves vakolatra festették."
      ],
      ro: [
        "Biserica Boiana cuprinde 240 de figuri umane în 89 de scene biblice distincte.",
        "Frescele din 1259 au fost realizate de un maestru anonim, cunoscut astazi drept \\\\\\\"Maestrul de la Boiana\\\\\\\".",
        "Biserica a fost extinsa în trei etape: în secolul al XI-lea, la mijlocul secolului al XIII-lea ?i la mijlocul secolului al XIX-lea.",
        "Imaginea Sfântului Nicolae din biserica este considerata una dintre cele mai vechi reprezentari realiste din arta ortodoxa.",
        "Portretul ?arinei Irina este laudat pentru frumuse?ea sa excepționala ?i pentru detaliile ve?mintelor medievale.",
        "La începutul secolului XX, biserica era sa fie demolata pentru a face loc unui laca? mai mare, dar a fost salvata de regina Eleonora a Bulgariei.",
        "Pere?ii bisericii au aproximativ 1 metru grosime, ceea ce a ajutat la men?inerea unei temperaturi constante ?i la conservarea frescelor.",
        "Frescele sunt realizate într-o tehnica asemanatoare cu \\\\\\\"fresco buono\\\\\\\", prin care vopseaua este aplicata pe tencuiala umeda."
      ],
      en: [
        "The Boyana Church contains 240 human images across 89 distinct biblical scenes.",
        "The frescoes from 1259 were painted by an anonymous master, now referred to as the 'Boyana Master'.",
        "The church was expanded in three stages: the 11th century, the mid-13th century, and the mid-19th century.",
        "The image of Saint Nicholas in the church is considered one of the earliest realistic portrayals in Orthodox art.",
        "Tsaritsa Irina's portrait is often praised for its exceptional beauty and detailed medieval garment representation.",
        "The church was nearly demolished in the early 20th century to build a larger parish church, but was saved by Queen Eleonore of Bulgaria.",
        "The walls of the church are about 1 meter thick, which helped preserve the frescoes' constant temperature.",
        "The frescoes are applied using a technique similar to 'fresco buono,' where paint is applied to wet plaster."
      ]
    },
    image: "/geo-images/bulgaria/cult-boyana.webp"
  },
  {
    id: "cult-nessebar",
    type: "landmark",
    parent: "bg-country",
    coords: [27.7269, 42.6587],
    name: { de: "Alt-Nessebar", hu: "Neszebár óváros", ro: "Orașul vechi Nessebar", en: "Old Nessebar" },
    description: {
      de: "UNESCO-Halbinsel mit über 3000 Jahren Geschichte an der Schwarzmeerküste.",
      hu: "UNESCO-félsziget több mint 3000 év történelmével a Fekete-tenger partján.",
      ro: "Peninsula UNESCO cu peste 3000 de ani de istorie, pe litoralul Marii Negre.",
      en: "A UNESCO peninsula with over 3,000 years of history on the Black Sea coast."
    },
    facts: {
      de: ["UNESCO-Welterbe", "Antike und byzantinische Schichten", "Beliebtes Küstenziel"],
      hu: ["UNESCO világörökség", "Ókori és bizánci rétegek", "Népszeru tengerparti célpont"],
      ro: ["Patrimoniu mondial UNESCO", "Straturi antice ?i bizantine", "Destinație de coasta populara"],
      en: ["UNESCO World Heritage site", "Ancient and Byzantine layers", "Popular coastal destination"]
    },
    descriptionAdvanced: {
      de: "Alt-Nessebar liegt auf einer felsigen Halbinsel, die nur durch einen schmalen, künstlichen Damm mit dem Festland verbunden ist, und zählt zu den malerischsten und geschichtsträchtigsten Orten der bulgarischen Schwarzmeerküste. Mit über 3.000 Jahren ununterbrochener Besiedlung begann die Stadt als thrakische Siedlung Mesambria, bevor sie zur griechischen Kolonie und später zu einem bedeutenden byzantinischen Handelszentrum wurde. Wegen ihrer dichten Konzentration mittelalterlicher Kirchen wird Nessebar gern \\\\\\\"Stadt der 40 Kirchen\\\\\\\" genannt – darunter die Sophienkirche aus dem 5. Jahrhundert und die kunstvoll verzierte Pantokrator-Kirche aus dem 14. Jahrhundert. Als UNESCO-Welterbe gleicht die Stadt einem lebenden Museum, in dem antike Festungsmauern neben traditionellen Holzhäusern aus dem 19. Jahrhundert stehen. Besucher schlendern durch Kopfsteingassen, entdecken archäologische Ruinen und erleben die einmalige maritime Atmosphäre eines modernen Badeortes mit jahrtausendealter Vergangenheit.",
      hu: "Ó-Neszebár egy sziklás félszigeten fekszik, amelyet csak keskeny, mesterséges földnyelv köt össze a szárazfölddel; a bolgár Fekete-tenger partjának egyik legfestoibb és legosibb városa. Több mint 3000 éves folyamatos lakottsággal, a város Meszembria néven trák településként indult, majd görög gyarmat, késobb pedig fontos bizánci kereskedelmi központ lett. Suru középkori templomállományáról \\\\\\\"a 40 templom városaként\\\\\\\" emlegetik – itt áll az 5. századi Szófia-templom és a 14. századi, gazdagon díszített Pantokrátor-templom. UNESCO-világörökségi helyszínként a város élo múzeum, ahol osi várfalak és 19. századi hagyományos faházak találkoznak. A látogatók macskaköves sikátorokban barangolnak, régészeti romokat fedeznek fel, és átélik a több évezredes történelmet ötvözo modern tengerparti üdülohely sajátos hangulatát.",
      ro: "Vechiul Nesebar, situat pe o peninsula stâncoasa legata de continent printr-un istm îngust, construit de mâna omului, este unul dintre cele mai pitorești ?i mai bogate ora?e istorice de pe litoralul bulgar al Marii Negre. Cu peste 3.000 de ani de locuire neîntrerupta, orașul a început ca o a?ezare tracica numita Mesambria, devenind apoi colonie greceasca ?i un important centru comercial bizantin. Cunoscut ca \\\\\\\"Orașul celor 40 de biserici\\\\\\\", pastreaza o concentrare extraordinara de arhitectura religioasa medievala, printre care Biserica Sfânta Sofia din secolul al V-lea ?i ornata Biserica Hristos Pantocrator din secolul al XIV-lea. Recunoscut de UNESCO ca patrimoniu mondial, Nesebar este un muzeu viu, unde ziduri antice de fortificație coexista cu casele tradiționale din lemn ale secolului al XIX-lea. Vizitatorii pot rataci pe stradu?e pavate cu piatra, pot descoperi ruine arheologice ?i se pot bucura de atmosfera maritima unica, ce îmbina milenii de istorie cu viața unei stațiuni moderne.",
      en: "Old Nessebar, situated on a rocky peninsula connected to the mainland by a narrow man-made isthmus, is one of the most picturesque and historically rich towns on the Bulgarian Black Sea coast. With over 3,000 years of continuous habitation, it began as a Thracian settlement known as Mesambria before becoming a Greek colony and a major Byzantine trading hub. The town is famously called the 'City of 40 Churches,' showcasing an extraordinary concentration of medieval religious architecture, such as the 5th-century Church of Saint Sophia and the ornate 14th-century Church of Christ Pantocrator. Recognized by UNESCO as a World Heritage site, Nessebar is a living museum where ancient fortification walls stand alongside traditional 19th-century wooden houses. Visitors can wander through cobblestone alleys, explore archaeological ruins, and enjoy the unique maritime atmosphere that blends millennia of history with the vibrant life of a modern coastal resort."
    },
    factsAdvanced: {
      de: [
        "Nessebar zählt zu den ältesten Städten Europas und wurde um 1.000 v. Chr. als thrakische Siedlung gegründet.",
        "Die Halbinsel der Altstadt ist nur 850 Meter lang und 300 Meter breit.",
        "In ihrer Blütezeit im 13. und 14. Jahrhundert standen in Nessebar fast 40 Kirchen auf engstem Raum.",
        "Die Kirche des Heiligen Johannes Aliturgetos wurde nie geweiht, weil ein Arbeiter beim Bau verunglückte.",
        "Ein großer Teil der antiken Stadt, einschließlich einiger Verteidigungsmauern, liegt heute infolge des steigenden Meeresspiegels unter Wasser.",
        "Die ikonische Holzwindmühle am Beginn des Damms zählt zu den meistfotografierten Wahrzeichen der Stadt.",
        "Im 5. Jahrhundert v. Chr. war Nessebar eine der ersten Städte der Welt, die eigene Goldmünzen prägte.",
        "Die Stadt wurde 1956 als Architektur- und Archäologiereservat ausgewiesen und 1983 in die UNESCO-Liste aufgenommen."
      ],
      hu: [
        "Neszebár Európa egyik legrégebbi városa, eredetileg trák településként alapították Kr. e. 1000 körül.",
        "Az óvárost magában foglaló félsziget mindössze 850 méter hosszú és 300 méter széles.",
        "A 13–14. századi virágkorában Neszebárban közel 40 templom állt ezen a kis területen.",
        "Az Aliturgétosz Szent János-templomot soha nem szentelték fel, mert az építkezés során egy munkás életét vesztette.",
        "Az ókori város jelentos része – köztük néhány védofal – a tengerszint emelkedése miatt ma a víz alatt található.",
        "A földnyelv elején álló ikonikus fa szélmalom a város egyik legtöbbet fotózott jelképe.",
        "Neszebár volt a világ egyik elso városa, amely Kr. e. 5. században saját aranypénzt veretett.",
        "A várost 1956-ban építészeti és régészeti rezervátummá nyilvánították, 1983-ban pedig felkerült az UNESCO-listára."
      ],
      ro: [
        "Nesebar este unul dintre cele mai vechi ora?e din Europa, fondat ca a?ezare tracica în jurul anului 1.000 î.Hr.",
        "Peninsula pe care se afla orașul vechi are doar 850 de metri lungime ?i 300 de metri la?ime.",
        "În perioada de apogeu din secolele XIII–XIV, Nesebarul avea aproape 40 de biserici pe aceasta suprafa?a mica.",
        "Biserica Sfântul Ioan Aliturgetos nu a fost niciodata sfin?ita, deoarece un muncitor ?i-a pierdut viața în timpul construcției.",
        "O mare parte din orașul antic, inclusiv unele ziduri de aparare, se afla astazi sub apa din cauza cre?terii nivelului marii.",
        "Iconica moara de vânt din lemn de la intrarea pe istm este unul dintre cele mai fotografiate simboluri ale orașului.",
        "Nesebar a fost unul dintre primele ora?e din lume care a batut propriile monede de aur, în secolul al V-lea î.Hr.",
        "Orașul a fost declarat rezervație arhitecturala ?i arheologica în 1956 ?i inclus în Patrimoniul UNESCO în 1983."
      ],
      en: [
        "Nessebar is one of the oldest towns in Europe, originally founded as a Thracian settlement around 1,000 BCE.",
        "The peninsula on which the old town sits is only 850 meters long and 300 meters wide.",
        "During its peak in the 13th and 14th centuries, Nessebar had nearly 40 churches within its small area.",
        "The Church of Saint John Aliturgetos was never consecrated because a worker died during its construction.",
        "A large portion of the ancient town, including some defensive walls, is now underwater due to rising sea levels.",
        "The iconic wooden windmill at the entrance of the isthmus is one of the town's most photographed symbols.",
        "Nessebar was one of the first cities in the world to mint its own gold coins in the 5th century BCE.",
        "The town was declared an architectural and archaeological reserve in 1956 and a UNESCO site in 1983."
      ]
    },
    image: "/geo-images/bulgaria/cult-nessebar.webp"
  },
  {
    id: "cult-kazanlak",
    type: "landmark",
    parent: "bg-country",
    coords: [25.3942, 42.6175],
    name: {
      de: "Thrakische Grabkammer von Kazanlak",
      hu: "Kazanlaki trák sír",
      ro: "Mormântul tracic de la Kazanlak",
      en: "Kazanlak Thracian Tomb"
    },
    description: {
      de: "Das thrakische Grabmal von Kasanlak, im Herzen des Rosentals gelegen, ist ein Meisterwerk der antiken Kunst und gehört seit 1979 zum UNESCO-Weltkulturerbe. Das Grabmal stammt aus dem späten 4. Jahrhundert v. Chr. und ist berühmt für seine außergewöhnlich gut erhaltenen Fresken in der Grabkammer und im Korridor. Die Wandmalereien zeigen Szenen eines rituellen Totenmahls, thrakische Krieger und Pferderennen, die einen faszinierenden Einblick in die Kultur und den Glauben der Thraker bieten. Besonders beeindruckend ist die Darstellung des thrakischen Herrschers und seiner Frau, die sich an den Händen halten. Das Grabmal von Kasanlak ist das bedeutendste Denkmal der thrakischen Kultur in Bulgarien und ein Muss für jeden Geschichtsinteressierten.",
      hu: "A kazanlaki trák sírkamra a Rózsák völgyének szívében található, az ókori muvészet remekmuve, amely 1979 óta az UNESCO Világörökség része. A sírkamra a Krisztus elotti 4. század végérol származik, és világhíru a sírkamrában és a folyosón található, rendkívül jó állapotban fennmaradt freskóiról. A falfestmények rituális halotti tort, trák harcosokat és lóversenyeket ábrázolnak, amelyek lenyugözo betekintést nyújtanak a trákok kultúrájába és hiedelemvilágába. Különösen megható a trák uralkodó és felesége ábrázolása, amint egymás kezét fogják. A kazanlaki sírkamra a trák kultúra legjelentosebb emléke Bulgáriában, és kötelezo látnivaló a történelem iránt érdeklodok számára.",
      ro: "Mormântul tracic de la Kazanlak, situat în inima Vaii Trandafirilor, este o capodopera a artei antice ?i face parte din Patrimoniul Mondial UNESCO din 1979. Mormântul dateaza de la sfâr?itul secolului al IV-lea î.Hr. ?i este faimos pentru frescele sale excepțional de bine conservate din camera funerara ?i coridor. Picturile murale înfați?eaza scene ale unui ospa? funerar ritual, razboinici traci ?i curse de cai, oferind o perspectiva fascinanta asupra culturii ?i credin?elor tracilor. Deosebit de impresionanta este reprezentarea conducatorului trac ?i a soției sale, ?inându-se de mâna. Mormântul de la Kazanlak este cel mai important monument al culturii trace din Bulgaria ?i o vizita obligatorie pentru orice pasionat de istorie.",
      en: "The Thracian Tomb of Kazanlak, located in the heart of the Rose Valley, is a masterpiece of ancient art and has been a UNESCO World Heritage site since 1979. The tomb dates from the late 4th century BCE and is famous for its exceptionally well-preserved frescoes in the burial chamber and corridor. The murals depict scenes of a ritual funeral feast, Thracian warriors, and horse races, providing a fascinating insight into Thracian culture and beliefs. Particularly impressive is the depiction of the Thracian ruler and his wife holding hands. The Kazanlak Tomb is the most significant monument of Thracian culture in Bulgaria and a must-see for anyone interested in history."
    },
    facts: {
      de: ["Status: UNESCO-Weltkulturerbe seit 1979", "Alter: Spätes 4. Jh. v. Chr.", "Bedeutung: Meisterwerk thrakischer Kunst", "Lage: Im Rosental bei Kasanlak", "Highlight: Fresken des Totenmahls", "Kultur: Einblick in thrakische Rituale"],
      hu: ["Státusz: UNESCO Világörökség 1979 óta", "Kor: Kr. e. 4. század vége", "Jelentoség: A trák muvészet remekmuve", "Fekvés: A Rózsák völgyében, Kazanlaknál", "Látnivaló: Halotti tor freskói", "Kultúra: Betekintés a trák rituálékba"],
      ro: ["Statut: Patrimoniu Mondial UNESCO din 1979", "Vârsta: Sfâr?itul sec. IV î.Hr.", "Importan?a: Capodopera a artei trace", "Locație: În Valea Trandafirilor, lânga Kazanlak", "Atracție: Frescele ospa?ului funerar", "Cultura: Perspectiva asupra ritualurilor trace"],
      en: ["Status: UNESCO World Heritage site since 1979", "Age: Late 4th century BCE", "Significance: Masterpiece of Thracian art", "Location: In the Rose Valley near Kazanlak", "Highlight: Frescoes of the funeral feast", "Culture: Insight into Thracian rituals"]
    },
    factsAdvanced: {
      de: [
        "Das Grabmal wurde 1944 zufällig von Soldaten beim Ausheben eines Schützengrabens entdeckt.",
        "Die Fresken sind weltweit die einzigen vollständig erhaltenen Beispiele hellenistischer Malerei.",
        "Die Hauptgrabkammer hat einen Durchmesser von nur 2,65 m und eine Höhe von 3,25 m.",
        "Zum Schutz der Originalfresken ist das Grab für die Öffentlichkeit gesperrt; direkt daneben steht ein originalgetreuer Nachbau.",
        "Das Kuppelgemälde zeigt 12 Streitwagen und zahlreiche Pferde in einer dynamischen Rennszene.",
        "Das Grab gehörte einem thrakischen Herrscher, möglicherweise Roigos, der im späten 4. oder frühen 3. Jahrhundert v. Chr. regierte.",
        "Das Grabmal von Kasanlak war das erste bulgarische Denkmal, das in die UNESCO-Welterbeliste aufgenommen wurde.",
        "Im Tal der thrakischen Könige, in dem sich das Grab befindet, liegen über 1.500 Grabhügel."
      ],
      hu: [
        "A sírkamrát 1944-ben véletlenül fedezték fel katonák, akik lövészárkot ástak.",
        "A freskók a hellenisztikus festészet egyetlen teljesen megorzött példái a világon.",
        "A fokamra átméroje mindössze 2,65 méter, magassága 3,25 méter.",
        "Az eredeti freskók védelme érdekében a sírkamra zárva van a látogatók elol, de közvetlenül mellette egy hiteles, méretarányos másolat áll.",
        "A kupolafreskó 12 harci szekeret és számos lovat ábrázol egy dinamikus versenyjelenetben.",
        "A sír egy trák uralkodóé lehetett, talán Roigosé, aki a Krisztus elotti 4. század végén vagy a 3. század elején uralkodott.",
        "A Kazanlaki sírkamra volt az elso bolgár emlék, amely felkerült az UNESCO világörökségi listájára.",
        "A trák királyok völgyében – ahol a sír található – több mint 1500 halomsír található."
      ],
      ro: [
        "Mormântul a fost descoperit întâmplator în 1944 de soldați care sapau o tran?ee.",
        "Frescele sunt singurele exemple complet conservate de pictura elenistica din întreaga lume.",
        "Camera principala a mormântului are un diametru de doar 2,65 m ?i o înal?ime de 3,25 m.",
        "Pentru a proteja frescele originale, mormântul este închis publicului, dar lânga el se afla o replica fidela, la scara reala.",
        "Pictura din cupola înfați?eaza 12 care de lupta ?i numero?i cai într-o scena dinamica de cursa.",
        "Mormântul a apar?inut unui conducator trac, posibil Roigos, care a domnit la sfâr?itul secolului al IV-lea sau la începutul secolului al III-lea î.Hr.",
        "Mormântul de la Kazanlak a fost primul monument bulgar inclus pe lista Patrimoniului Mondial UNESCO.",
        "Valea Regilor Traci, unde se afla mormântul, cuprinde peste 1.500 de tumuli funerari."
      ],
      en: [
        "The tomb was discovered by accident in 1944 by soldiers digging a trench.",
        "The frescoes are the only fully preserved examples of Hellenistic painting in the entire world.",
        "The main burial chamber has a diameter of only 2.65 meters and a height of 3.25 meters.",
        "To protect the original frescoes, the tomb is closed to the public, but a full-scale exact replica stands right next to it.",
        "The mural in the dome features 12 chariots and numerous horses in a highly dynamic racing scene.",
        "The tomb belonged to a Thracian ruler, possibly Roigos, who ruled in the late 4th or early 3rd century BCE.",
        "The Kazanlak Tomb was the first Bulgarian monument to be included in the UNESCO World Heritage list.",
        "The Valley of the Thracian Kings, where the tomb is located, contains over 1,500 burial mounds."
      ]
    },
    image: "/geo-images/bulgaria/cult-kazanlak.webp"
  },
  {
    id: "cult-madara",
    type: "landmark",
    parent: "bg-country",
    coords: [27.1177, 43.2856],
    name: { de: "Madarareiter", hu: "Madarai lovas", ro: "Calare?ul de la Madara", en: "Madara Rider" },
    description: {
      de: "UNESCO-Felsrelief aus dem 8. Jahrhundert, ein Symbol des frühen bulgarischen Staates.",
      hu: "UNESCO-szikladombormu a 8. századból, a korai bolgár állam jelképe.",
      ro: "Basorelief UNESCO din secolul al VIII-lea, simbol al primului stat bulgar.",
      en: "A UNESCO rock relief from the 8th century and a symbol of the early Bulgarian state."
    },
    facts: {
      de: ["UNESCO-Welterbe", "8. Jahrhundert", "Frühes bulgarisches Symbol"],
      hu: ["UNESCO világörökség", "8. század", "Korai bolgár jelkép"],
      ro: ["Patrimoniu UNESCO", "Secolul al VIII-lea", "Simbol bulgar timpuriu"],
      en: ["UNESCO World Heritage site", "8th century", "Early Bulgarian symbol"]
    },
    descriptionAdvanced: {
      de: "Der Madarareiter ist ein eindrucksvolles Felsrelief, das in eine senkrechte, 100 Meter hohe Klippe in der Nähe des Dorfes Madara im Nordosten Bulgariens gehauen wurde. Entstanden im frühen 8. Jahrhundert während des Ersten Bulgarischen Reiches, zeigt es einen lebensgroßen Reiter, der mit einer Lanze einen Löwen durchbohrt, begleitet von einem Jagdhund. Das monumentale Kunstwerk ist einzigartig in Europa und gilt als tief verwurzeltes Symbol bulgarischer Staatlichkeit und militärischen Triumphs. Rund um das Relief finden sich mehrere mittelgriechische Inschriften, die wichtige Details zur Herrschaft der Khane Tervel, Kormisosch und Omurtag liefern. Als UNESCO-Welterbe zählt der Madarareiter zu den bedeutendsten Denkmälern frühmittelalterlicher Kunst und wurde 2008 in einer öffentlichen Abstimmung zum \\\\\\\"globalen Symbol Bulgariens\\\\\\\" gewählt.",
      hu: "A Madarai lovas lenyugözo sziklarelief, amelyet egy 100 méter magas, függoleges sziklafalba véstek a bulgáriai északkeleten fekvo Madara falu közelében. A 8. század elején, az Elso Bolgár Birodalom idején készült alkotás életnagyságú lovast ábrázol, amint lándzsával oroszlánt döf le, vadászkutyával az oldalán. Ez a monumentális mu Európában egyedülálló, és a bolgár államiság, valamint a katonai diadal mély szimbóluma. A reliefet több középgörög nyelvu felirat veszi körül, amelyek fontos részleteket árulnak el Tervel, Kormiszos és Omurtag kánok uralkodásáról. A Madarai lovas UNESCO-világörökség, a kora középkori muvészet egyik legjelentosebb emléke, és 2008-ban hivatalos közönségszavazáson Bulgária \\\\\\\"globális szimbólumává\\\\\\\" választották.",
      ro: "Calare?ul de la Madara este un basorelief impresionant, sculptat într-o stânca verticala înalta de 100 de metri, în apropierea satului Madara, în nord-estul Bulgariei. Realizat la începutul secolului al VIII-lea, în timpul Primului ?arat Bulgar, înfați?eaza un calare? în marime naturala care strapunge cu suli?a un leu, înso?it de un câine de vânatoare. Aceasta opera monumentala este unica în Europa ?i constituie un simbol profund al statalita?ii bulgare ?i al triumfului militar. În jurul reliefului se afla mai multe inscrip?ii în greaca medievala, care ofera detalii cruciale despre domniile hanilor Tervel, Kormesios ?i Omurtag. Ca sit al Patrimoniului Mondial UNESCO, Calare?ul de la Madara este considerat unul dintre cele mai importante monumente ale artei medievale timpurii ?i a fost ales oficial, prin vot public, drept \\\\\\\"simbolul global al Bulgariei\\\\\\\" în 2008.",
      en: "The Madara Rider is an awe-inspiring rock relief carved into a vertical 100-meter-high cliff near the village of Madara in northeastern Bulgaria. Created in the early 8th century, during the First Bulgarian Empire, it depicts a life-sized horseman thrusting a spear into a lion, accompanied by a hunting dog. This monumental artwork is the only one of its kind in Europe and serves as a profound symbol of Bulgarian statehood and military triumph. The relief is surrounded by several inscriptions in Medieval Greek, which provide crucial historical details about the reigns of Khans Tervel, Kormisosh, and Omurtag. As a UNESCO World Heritage site, the Madara Rider is considered one of the most significant monuments of early medieval art and was officially voted by the public as the 'Global Symbol of Bulgaria' in 2008."
    },
    factsAdvanced: {
      de: [
        "Der Madarareiter wurde in 23 Metern Höhe über dem Fuß der Felswand gemeißelt.",
        "Das Relief ist etwa 2,6 m hoch und 3,1 m breit.",
        "Die Inschriften rund um den Reiter erfassen mehr als 100 Jahre bulgarischer Geschichte (705–831 n. Chr.).",
        "Die Felswand gehört zum Madara-Plateau, das schon seit der Jungsteinzeit eine heilige Stätte ist.",
        "Eine Inschrift unter dem Reiter berichtet, wie Khan Tervel dem byzantinischen Kaiser Justinian II. half, den Thron zurückzugewinnen.",
        "Der Madarareiter wurde 1979 in die UNESCO-Welterbeliste aufgenommen.",
        "Auf der Rückseite aller kleineren bulgarischen Münzen (Stotinki) ist der Madarareiter abgebildet.",
        "Das umliegende Archäologische Reservat umfasst Höhlen, thrakische Heiligtümer und eine große römische Villa."
      ],
      hu: [
        "A Madarai lovas a sziklafal aljától 23 méter magasságban van vésve.",
        "A dombormu körülbelül 2,6 méter magas és 3,1 méter széles.",
        "A lovas körüli feliratok több mint 100 év bolgár történelmét ölelik fel (705–831 között).",
        "Maga a sziklafal a Madara-fennsík része, amely az újkokor óta szent helynek számít.",
        "A lovas alatt egy felirat arról szól, hogyan segített Tervel kán II. Justinianus bizánci császárnak visszaszerezni a trónját.",
        "A Madarai lovast 1979-ben vették fel az UNESCO világörökségi listára.",
        "A Madarai lovas képe minden kisebb bolgár érme (sztotinki) hátoldalán szerepel.",
        "A környezo régészeti rezervátum részét képezik barlangok, trák szentélyek és egy nagy római villa is."
      ],
      ro: [
        "Calare?ul de la Madara este sculptat la o înal?ime de 23 de metri fa?a de baza stâncii.",
        "Basorelieful are aproximativ 2,6 metri înal?ime ?i 3,1 metri la?ime.",
        "Inscripțiile din jurul calare?ului acopera o perioada de peste 100 de ani din istoria Bulgariei (705–831 d.Hr.).",
        "Stânca însați face parte din Platoul Madara, considerat un loc sacru înca din neolitic.",
        "O inscripție de sub calare? men?ioneaza cum hanul Tervel l-a ajutat pe împaratul bizantin Iustinian al II-lea sa î?i recâ?tige tronul.",
        "Calare?ul de la Madara a fost inclus pe lista Patrimoniului Mondial UNESCO în 1979.",
        "Imaginea Calare?ului apare pe reversul tuturor monedelor bulgare mai mici (stotinki).",
        "Rezervația arheologica din jur include pe?teri, sanctuare trace ?i o vila romana de mari dimensiuni."
      ],
      en: [
        "The Madara Rider is carved at a height of 23 meters from the base of the cliff.",
        "The relief measures approximately 2.6 meters in height and 3.1 meters in width.",
        "The inscriptions around the horseman cover a period of over 100 years of Bulgarian history (705–831 AD).",
        "The cliff itself is part of the Madara Plateau, which has been a sacred site since the Neolithic period.",
        "Beneath the horseman, an inscription mentions Khan Tervel assisting the Byzantine Emperor Justinian II in reclaiming his throne.",
        "The Madara Rider was included in the UNESCO World Heritage list in 1979.",
        "An image of the Madara Rider is featured on the back of all smaller Bulgarian coins (stotinki).",
        "The surrounding archaeological reserve includes caves, Thracian sanctuaries, and a large Roman villa."
      ]
    },
    image: "/geo-images/bulgaria/cult-madara.webp"
  },
  {
    id: "hist-belogradchik-fortress",
    type: "historical",
    parent: "bg-country",
    coords: [22.6848, 43.6257],
    name: { de: "Belogradtschik-Festung", hu: "Belogradcsik erod", ro: "Cetatea Belogradchik", en: "Belogradchik Fortress" },
    description: {
      de: "Eine der spektakulärsten Festungen Bulgariens, direkt zwischen roten Felsformationen gebaut. Die Anlage ist ein Top-Name für historische Reisen im Nordwesten. Romanische, osmanische und bulgarische Schichten prägen den Ort. Für SEO rund um Festungen in Bulgarien ist Belogradchik extrem stark.",
      hu: "Bulgária egyik leglátványosabb erodje, közvetlenül vörös sziklaképzodmények közé építve. Az északnyugat-bolgár történelmi utak egyik csúcspontja. A helyen római, oszmán és bolgár rétegek találkoznak. A bolgár várak SEO-jában Belogradcsik kiemelkedo.",
      ro: "Una dintre cele mai spectaculoase cetați ale Bulgariei, construita chiar printre stâncile ro?ii. Este un nume de top pentru turismul istoric din nord-vest. Straturi romane, otomane ?i bulgare definesc locul. Pentru SEO despre fortare?ele Bulgariei, Belogradchik este foarte puternic.",
      en: "One of Bulgaria's most spectacular fortresses, built amid red rock formations. It is a top name for historic travel in the northwest. Roman, Ottoman, and Bulgarian layers define the site. For fortress-focused Bulgaria SEO, Belogradchik is extremely strong."
    },
    facts: {
      de: ["Rote Felsen", "Nordwestbulgarien", "Festung auf Höhenzug", "Militärgeschichte", "Fotomagnet"],
      hu: ["Vörös sziklák", "Északnyugat-Bulgária", "Magashegyi erod", "Katonai történelem", "Fotóhelyszín"],
      ro: ["Stânci ro?ii", "Nord-vestul Bulgariei", "Cetate pe relief înalt", "Istorie militara", "Loc fotogenic"],
      en: ["Red rocks", "Northwestern Bulgaria", "Hilltop fortress", "Military history", "Photogenic landmark"]
    },
    descriptionAdvanced: {
      de: "Die Festung von Belogradtschik, auch Kaleto genannt, ist ein Meisterwerk militärischer Baukunst, das die surrealen, hoch aufragenden roten Felsformationen des Balkangebirges als natürliche Verteidigungsmauern nutzt. Im Nordwesten Bulgariens gelegen, wurde die ursprüngliche Anlage im 3. Jahrhundert n. Chr. von den Römern errichtet und später von bulgarischen Zaren sowie osmanischen Herrschern erweitert. Mit über 10.000 Quadratmetern Fläche und drei durch massive Tore verbundenen Höfen beeindruckt die Festung vor allem durch die Art, wie sie sich nahtlos in die bis zu 200 Meter hohen Kalk- und Sandsteinsäulen einfügt – ein nahezu unbezwingbares Bollwerk, das im Laufe der Jahrhunderte zahlreiche Belagerungen abwehrte. Vom höchsten Punkt aus eröffnet sich ein atemberaubendes Panorama über die zerklüfteten Belogradtschik-Felsen und die weite Berglandschaft. Hier verschmelzen Naturwunder und antike Geschichte zu einem der unvergesslichsten Reiseziele Bulgariens.",
      hu: "A Belogradcsiki erod – más néven Kaleto – a katonai építészet remeke, amely a Balkán-hegység szürreális, magasra töro vörös sziklaalakzatait használja fel természetes védofalként. Bulgária északnyugati részén található; eredeti formáját a rómaiak hozták létre a 3. században, késobb a bolgár cárok és az oszmán hódítók bovítették. A több mint 10 000 négyzetméteres erodnek három, masszív kapukkal összekötött udvara van. Igazán lenyugözo, ahogy a falak akár 200 méter magas mészko- és homokko-pillérekre támaszkodnak, így gyakorlatilag bevehetetlen védelmi rendszert alkotva, amely évszázadokon át sikeresen állta az ostromokat. A legmagasabb pontról elképeszto panoráma nyílik a Belogradcsiki-sziklák csipkés csúcsaira és a tág hegyvidéki tájra. Itt a természet csodája és az ókori történelem egymásba olvad, megteremtve Bulgária egyik legfelejthetetlenebb látványosságát.",
      ro: "Cetatea Belogradchik, cunoscuta ?i sub numele de Kaleto, este o capodopera a ingineriei militare, care folosește forma?iunile stâncoase ro?ii ?i impunatoare ale Mun?ilor Balcani drept ziduri naturale de aparare. Situata în nord-vestul Bulgariei, fortarea?a originala a fost ridicata de romani în secolul al III-lea d.Hr. ?i extinsa ulterior de ?ari bulgari ?i de ocupan?i otomani. Cetatea acopera peste 10.000 de metri patrați ?i are trei cur?i distincte, conectate prin por?i masive. Cel mai impresionant aspect al sitului este modul în care pere?ii se sprijina pe coloanele naturale de calcar ?i gresie, unele înalte de pâna la 200 de metri, formând o bariera aproape inexpugnabila care a respins numeroase asedii. Urcând pâna la cel mai înalt punct, se deschide o panorama spectaculoasa asupra peisajului montan ?i a stâncilor zim?ate de la Belogradchik. Este un loc unde minunea naturala ?i istoria antica se întâlnesc, formând una dintre cele mai memorabile destina?ii din Bulgaria.",
      en: "The Belogradchik Fortress, also known as Kaleto, is a marvel of military engineering that utilizes the surreal, towering red rock formations of the Balkan Mountains as its primary defensive walls. Located in northwestern Bulgaria, the original stronghold was established by the Romans in the 3rd century AD, with later expansions by Bulgarian Tsars and Ottoman occupiers. The fortress covers over 10,000 square meters and features three distinct courtyards connected by massive gates. The most striking aspect of the site is the way the natural limestone and sandstone pillars, some reaching up to 200 meters in height, form an impenetrable barrier that once held off numerous sieges. Climbing to the highest point of the fortress offers a breathtaking panorama of the vast mountain landscape and the jagged peaks of the Belogradchik Rocks. It is a site where natural wonder and ancient history collide, creating one of Bulgaria's most unforgettable landmarks."
    },
    factsAdvanced: {
      de: [
        "Die Mauern der Festung sind teilweise über 2 Meter dick und bis zu 12 Meter hoch.",
        "Die natürlichen Felsen, die einen Teil der Mauern bilden, entstanden vor über 200 Millionen Jahren.",
        "Im 14. Jahrhundert war die Festung ein wichtiger militärischer Stützpunkt in den bulgarisch-byzantinischen Kriegen.",
        "Anfang des 19. Jahrhunderts ließen die Osmanen die Festung mit Hilfe europäischer Ingenieure vollständig umbauen.",
        "Die Belogradtschik-Felsen waren 2009 für die \\\\\\\"Neuen Sieben Naturwunder\\\\\\\" nominiert.",
        "In der Region gibt es über 200 einzelne Felsformationen, jede mit eigener Legende und eigenem Namen wie \\\\\\\"Die Madonna\\\\\\\" oder \\\\\\\"Der Reiter\\\\\\\".",
        "Im Serbisch-Bulgarischen Krieg von 1885 wurde die Festung zuletzt im Kampf eingesetzt.",
        "Das Gebiet der Belogradtschik-Felsen umfasst rund 90 Quadratkilometer."
      ],
      hu: [
        "Az erod falai egyes szakaszokon több mint 2 méter vastagok és akár 12 méter magasak.",
        "A falak részét képezo természetes sziklák több mint 200 millió éve formálódtak.",
        "Az erod a 14. századi bolgár–bizánci háborúk fontos katonai bástyája volt.",
        "Az oszmánok a 19. század elején európai mérnökök segítségével teljesen átépítették az erodöt.",
        "A Belogradcsiki-sziklákat 2009-ben jelölték a \\\\\\\"Természet hét új csodája\\\\\\\" közé.",
        "A térségben több mint 200 önálló sziklaalakzat található, mindegyiknek saját legendája és neve van, például \\\\\\\"A Madonna\\\\\\\" vagy \\\\\\\"A lovas\\\\\\\".",
        "Az erodöt utoljára az 1885-ös szerb–bolgár háborúban használták harcokra.",
        "A Belogradcsiki-sziklák területe összesen mintegy 90 négyzetkilométer."
      ],
      ro: [
        "Zidurile ceta?ii au peste 2 metri grosime ?i ajung pe alocuri la 12 metri înal?ime.",
        "Stâncile naturale care fac parte din ziduri s-au format în urma cu peste 200 de milioane de ani.",
        "Cetatea a fost un avanpost militar cheie în timpul razboaielor bulgaro-bizantine din secolul al XIV-lea.",
        "La începutul secolului al XIX-lea, otomanii au reconstruit complet cetatea cu ajutorul unor ingineri europeni.",
        "Stâncile Belogradchik au fost nominalizate în 2009 la concursul \\\\\\\"Noile ?apte Minuni ale Naturii\\\\\\\".",
        "În zona exista peste 200 de formațiuni stâncoase individuale, fiecare cu propria legenda ?i nume, precum \\\\\\\"Madona\\\\\\\" sau \\\\\\\"Calare?ul\\\\\\\".",
        "Cetatea a fost folosita ultima data în lupte în timpul Razboiului Sârbo-Bulgar din 1885.",
        "Suprafa?a totala a Stâncilor Belogradchik acopera aproximativ 90 de kilometri patrați."
      ],
      en: [
        "The Belogradchik Fortress has walls that are over 2 meters thick and 12 meters high in some sections.",
        "The natural rocks that form part of the fortress walls were shaped over 200 million years ago.",
        "The fortress was a key military outpost during the Bulgarian-Byzantine wars of the 14th century.",
        "The Ottoman Turks completely reconstructed the fortress in the early 19th century using European engineers.",
        "The Belogradchik Rocks were nominated for the New Seven Wonders of Nature in 2009.",
        "There are over 200 individual rock formations in the area, each with its own legend and name (like 'The Madonna' or 'The Horseman').",
        "The fortress was last used in military combat during the Serbo-Bulgarian War of 1885.",
        "The total area of the Belogradchik Rocks covers approximately 90 square kilometers."
      ]
    },
    image: "/geo-images/bulgaria/hist-belogradchik-fortress.webp"
  },
  {
    id: "hist-tsarevets-fortress",
    type: "historical",
    parent: "bg-country",
    coords: [25.6170, 43.0862],
    name: { de: "Zarewez-Festung", hu: "Carevec erod", ro: "Cetatea ?areve?", en: "Tsarevets Fortress" },
    description: {
      de: "Mittelalterliche Zarenfestung über Weliko Tarnowo mit starker Silhouette. Sie war das politische Herz des Zweiten Bulgarischen Reiches. Besucher kommen wegen Mauern, Türmen und Panoramablicken. Als historische Ikone ist Tsarevets ein Schlüsselbegriff für Bulgarien.",
      hu: "Középkori cári erod Veliko Tarnovo felett, eros panorámával. A második Bolgár Birodalom politikai központja volt. A látogatók falak, tornyok és kilátás miatt érkeznek. Tsarevec Bulgária egyik fo történelmi kulcsszava.",
      ro: "Cetate medievala a ?arilor deasupra orașului Veliko Târnovo, cu o silueta puternica. A fost inima politica a celui de-al Doilea ?arat Bulgar. Vizitatorii vin pentru ziduri, turnuri ?i panorame. Ca simbol istoric, Tsarevets este esen?ial pentru Bulgaria.",
      en: "A medieval tsar fortress above Veliko Tarnovo with a powerful skyline. It was the political heart of the Second Bulgarian Empire. Visitors come for the walls, towers, and panoramic views. As a historic icon, Tsarevets is a key Bulgaria search term."
    },
    facts: {
      de: ["Weliko Tarnowo", "Zarenzeit", "Hügelburg", "Panoramablick", "Nationales Symbol"],
      hu: ["Veliko Tarnovo", "Cári korszak", "Hegyi vár", "Panoráma", "Nemzeti jelkép"],
      ro: ["Veliko Târnovo", "Epoca ?arilor", "Cetate pe colina", "Panorama", "Simbol național"],
      en: ["Veliko Tarnovo", "Tsar era", "Hill fortress", "Panoramic views", "National symbol"]
    },
    descriptionAdvanced: {
      de: "Die Festung Zarewez ist das imposante Zentrum von Weliko Tarnowo und war im Zweiten Bulgarischen Reich (1185–1396) die wichtigste Machtzentrale der bulgarischen Zaren. Umschlossen von den Schleifen der Jantra, beherbergt der Festungshügel den Zarenpalast, die Patriarchenkathedrale sowie mehr als 400 Wohngebäude und 22 Kirchen aus dem Mittelalter. Berühmtester Bau innerhalb der Mauern ist der Balduin-Turm, benannt nach dem lateinischen Kaiser Balduin I. von Flandern, der hier der Legende nach nach der Schlacht von Adrianopel gefangen gehalten wurde. Heute ist die Festung vor allem für ihre \\\\\\\"Ton und Licht\\\\\\\"-Show bekannt – ein audiovisuelles Spektakel mit Lasern und Musik, das den dramatischen Aufstieg und Fall der Stadt im Osmanischen Reich erzählt. Wer durch die mächtigen Tore und entlang der wiederhergestellten Wehrgänge schreitet, spürt die Pracht und Dimension des mittelalterlichen Goldenen Zeitalters Bulgariens.",
      hu: "A Carevec-erod Veliko Tarnovo lenyugözo központja, és a Második Bolgár Birodalom (1185–1396) idején a bolgár cárok fo hatalmi székhelye volt. A Jantra folyó kanyarjaival körbeölelt eroddomb otthont adott a királyi palotának, a Patriarchális székesegyháznak, valamint több mint 400 középkori lakóépületnek és 22 templomnak. A falakon belül a leghíresebb épület a Balduin-torony, melyet I. Balduin flandriai latin császárról neveztek el, akit a hagyomány szerint az adrianopoliszi csata után itt tartottak fogva. Ma az erod elsosorban a \\\\\\\"Hang és Fény\\\\\\\" show-jával vált ismertté: ez a lézert és zenét felvonultató audiovizuális látványosság a város felemelkedését és az oszmánok kezébe kerülését meséli el. A masszív kapukon átsétálva és a helyreállított védofalak mentén a látogatók valóban átélhetik Bulgária középkori aranykorának fenségét és léptékét.",
      ro: "Cetatea Tsarevets este centrul impunator al orașului Veliko Târnovo, fiind principala re?edin?a a ?arilor bulgari în timpul celui de-al Doilea ?arat Bulgar (1185–1396). Înconjurata de meandrele râului Yantra, dealul ceta?ii gazduiește palatul regal, Catedrala Patriarhala ?i peste 400 de cladiri reziden?iale ?i 22 de biserici din perioada medievala. Cea mai cunoscuta construcție din interiorul zidurilor este Turnul lui Balduin, numit dupa împaratul latin Baldovin I al Flandrei, despre care legenda spune ca a fost închis aici dupa batalia de la Adrianopol. Astazi, cetatea este renumita pentru spectacolul \\\\\\\"Sunet ?i Lumina\\\\\\\", o reprezentație audiovizuala cu lasere ?i muzica ce povestește ascensiunea dramatica ?i caderea orașului în mâinile Imperiului Otoman. Trecând prin por?ile masive ?i plimbându-se de-a lungul zidurilor reconstruite, vizitatorii pot sim?i cu adevarat mareția ?i dimensiunea epocii de aur medievale a Bulgariei.",
      en: "Tsarevets Fortress is the imposing centerpiece of Veliko Tarnovo, serving as the primary seat of power for the Bulgarian Tsars during the Second Bulgarian Empire (1185–1396). Encircled by the loops of the Yantra River, the fortress hill is home to the royal palace, the Patriarchal Cathedral, and over 400 residential buildings and 22 churches from the medieval era. The most famous structure within the walls is the Baldwin Tower, named after the Latin Emperor Baldwin I of Flanders, who was legendarily imprisoned here after the Battle of Adrianople. Today, the fortress is famous for the 'Sound and Light' show, an audio-visual spectacle that uses lasers and music to recount the city's dramatic rise and eventual fall to the Ottoman Empire. Walking through its massive gates and along the reconstructed battlements, visitors can truly feel the majesty and scale of Bulgaria's medieval golden age."
    },
    factsAdvanced: {
      de: [
        "Der Festungshügel ist seit dem 2. Jahrtausend v. Chr. besiedelt, zunächst durch Thraker, später durch Römer.",
        "Der Zarewez-Hügel erhebt sich auf eine Höhe von 206 Metern über dem Meeresspiegel.",
        "Die äußere Verteidigungsmauer war ursprünglich 1,1 km lang, bis zu 3,6 m dick und 10 m hoch.",
        "Die Patriarchenkathedrale \\\\\\\"Heilige Himmelfahrt des Herrn\\\\\\\" wurde in den 1980er Jahren komplett wiederaufgebaut.",
        "Archäologen entdeckten innerhalb der Mauern die Überreste von 470 einzelnen Gebäuden.",
        "Vom \\\\\\\"Hinrichtungsfelsen\\\\\\\" am Rand der Festung wurden im Mittelalter Verräter in die Jantra gestoßen.",
        "Über 200 Jahre lang war Zarewez die Hauptstadt Bulgariens, bis die Festung 1393 an die Osmanen fiel.",
        "Die Festung erstreckt sich auf dem Hügel über eine Gesamtfläche von rund 12 Hektar."
      ],
      hu: [
        "Az eroddomb a Krisztus elotti 2. évezred óta lakott, eloször trákok, majd késobb rómaiak telepedtek meg itt.",
        "A Carevec-domb 206 méteres magasságban emelkedik a tengerszint fölé.",
        "A külso védofal eredetileg 1,1 km hosszú, helyenként 3,6 m vastag és 10 m magas volt.",
        "Az \\\\\\\"Úr mennybemenetele\\\\\\\" patriarchális székesegyházat az 1980-as években teljesen újjáépítették.",
        "A régészek 470 különálló épület maradványait tárták fel az erodfalakon belül.",
        "Az erod peremén álló \\\\\\\"Kivégzosziklát\\\\\\\" a középkorban arra használták, hogy az árulókat a Jantrába dobják róla.",
        "A Carevec több mint 200 éven át Bulgária fovárosa volt, mígnem 1393-ban az oszmánok elfoglalták.",
        "Az erod összesen körülbelül 12 hektáron terül el a dombon."
      ],
      ro: [
        "Dealul ceta?ii este locuit din mileniul al II-lea î.Hr., ini?ial de catre traci, apoi de romani.",
        "Dealul Tsarevets se înal?a la o altitudine de 206 metri deasupra nivelului marii.",
        "Zidul exterior de aparare avea ini?ial 1,1 km lungime, pâna la 3,6 m grosime ?i 10 m înal?ime.",
        "Catedrala Patriarhala \\\\\\\"Înal?area Domnului\\\\\\\" a fost complet reconstruita în anii 1980.",
        "Arheologii au descoperit, în interiorul zidurilor ceta?ii, ramați?ele a 470 de cladiri individuale.",
        "\\\\\\\"Stânca Execuțiilor\\\\\\\" de la marginea ceta?ii era folosita în Evul Mediu pentru a-i arunca pe tradatori în râul Yantra.",
        "Tsarevets a fost capitala Bulgariei timp de peste 200 de ani, pâna la caderea în mâinile otomanilor în 1393.",
        "Cetatea acopera o suprafa?a totala de aproximativ 12 hectare pe deal."
      ],
      en: [
        "The fortress hill has been inhabited since the 2nd millennium BCE, with Thracian and later Roman settlements.",
        "The Tsarevets hill rises to a height of 206 meters above sea level.",
        "The outer defensive wall was originally 1.1 km long, up to 3.6 meters thick, and 10 meters high.",
        "The Patriarchal Cathedral of the Holy Ascension of the Lord was completely rebuilt in the 1980s.",
        "Archaeologists have discovered the remains of 470 individual buildings within the fortress walls.",
        "The 'Execution Rock' at the edge of the fortress was used in the Middle Ages to push traitors into the Yantra River.",
        "Tsarevets was the capital of Bulgaria for over 200 years until it fell to the Ottomans in 1393.",
        "The fortress covers a total area of about 12 hectares on the hill."
      ]
    },
    image: "/geo-images/bulgaria/hist-tsarevets-fortress.webp"
  },
  {
    id: "hist-perperikon",
    type: "historical",
    parent: "bg-country",
    coords: [25.6465, 41.6760],
    name: { de: "Perperikon", hu: "Perperikon", ro: "Perperikon", en: "Perperikon" },
    description: {
      de: "Großer thrakischer Felskomplex in den Ost-Rhodopen mit Heiligtum und Siedlungsspuren. Perperikon zählt zu den meistgesuchten archäologischen Orten Bulgariens. Die Lage über der Landschaft macht den Besuch besonders eindrucksvoll. Für Geschichte, Archäologie und Südbulgarien ist Perperikon ein Top-Begriff.",
      hu: "Nagy trák sziklakomplexum a Keleti-Rodopokban, szentéllyel és településnyomokkal. Perperikon Bulgária egyik legkeresettebb régészeti helyszíne. A táj fölé emelkedo fekvés különösen látványossá teszi. Történelemhez, régészethez és Dél-Bulgáriához Perperikon eros SEO-célpont.",
      ro: "Complex tracic mare în Mun?ii Rodopi de Est, cu sanctuar ?i urme de a?ezare. Perperikon este unul dintre cele mai cautate situri arheologice din Bulgaria. Poziția deasupra peisajului îl face memorabil. Pentru istorie, arheologie ?i sudul Bulgariei, Perperikon este un termen SEO foarte bun.",
      en: "A major Thracian rock complex in the Eastern Rhodopes with sanctuary and settlement traces. Perperikon is one of Bulgaria's most searched archaeological sites. Its elevated setting above the landscape makes it especially impressive. For history, archaeology, and southern Bulgaria, Perperikon is a strong SEO term."
    },
    facts: {
      de: ["Thrakische Stätte", "Ost-Rhodopen", "Archäologie", "Heiligtum", "Felskomplex"],
      hu: ["Trák helyszín", "Keleti-Rodopok", "Régészet", "Szentély", "Sziklakomplexum"],
      ro: ["Sit tracic", "Rodopii de Est", "Arheologie", "Sanctuar", "Complex stâncos"],
      en: ["Thracian site", "Eastern Rhodopes", "Archaeology", "Sanctuary", "Rock complex"]
    },
    descriptionAdvanced: {
      de: "Perperikon ist eine monumentale antike Felsenstadt in den Ost-Rhodopen Südbulgariens und wird oft als \\\\\\\"bulgarisches Machu Picchu\\\\\\\" bezeichnet. Auf einem hohen Felsgipfel gelegen, ist dieser archäologische Schatz seit über 8.000 Jahren ein heiliger Ort und begann als neolithisches Heiligtum. Am bekanntesten ist Perperikon als legendärer Schauplatz des Dionysos-Orakels, an dem Alexander der Große der Überlieferung nach eine Prophezeiung über seine Welteroberung erhielt. Die Anlage besteht aus einem riesigen Palastheiligtum, einer Akropolis und zwei Außenstädten, die alle direkt in den Fels gehauen wurden. Besucher entdecken antike Altäre, ausgeklügelte Wasserkanäle und einen großen Saal, in dem einst königliche Gastmähler stattfanden. Perperikon zeugt von der hochentwickelten Ingenieurskunst und tiefen Spiritualität der Thraker und wurde später von Römern, Byzantinern und Bulgaren genutzt – heute ist es eines der bedeutendsten archäologischen Ziele der Balkanhalbinsel.",
      hu: "Perperikon monumentális ókori sziklaváros Dél-Bulgáriában, a Keleti-Rodopék hegyvonulatában, melyet sokan \\\\\\\"bolgár Machu Picchunak\\\\\\\" is neveznek. A magas sziklacsúcson fekvo régészeti csoda több mint 8000 éve számít szent helynek, eredetileg újkokori szentélyként szolgált. Leghíresebb mint a Dionüszosz-jósda legendás helyszíne, ahol a hagyomány szerint Nagy Sándor jövendölést kapott világhódító útjáról. A komplexum egy hatalmas palotaszentélybol, akropoliszból és két külvárosból áll, melyeket közvetlenül a sziklába véstek. A látogatók osi oltárokat, kifinomult vízelvezeto rendszereket és egy nagytermet fedezhetnek fel, ahol egykor királyi lakomák zajlottak. Perperikon a trákok fejlett mérnöki tudásának és mély lelki életének tanúja, amelyet késobb rómaiak, bizánciak és bolgárok is használtak – ma a Balkán-félsziget egyik legjelentosebb régészeti úti célja.",
      ro: "Perperikon este un ora? monumental antic sapat în stânca, situat în Mun?ii Rodopi de Est, în sudul Bulgariei, supranumit adesea \\\\\\\"Machu Picchu-ul bulgar\\\\\\\". A?ezat pe un vârf înalt de stânca, aceasta minune arheologica a fost un loc sacru de peste 8.000 de ani, începându-?i existen?a ca sanctuar neolitic. Este celebru ca loc legendar al Oracolului lui Dionysos, unde, potrivit tradiției, Alexandru cel Mare ar fi primit o profeție despre cucerirea lumii. Situl cuprinde un palat-sanctuar imens, o acropola ?i doua ora?e exterioare, toate sapate direct în stânca. Vizitatorii pot descoperi altare antice, sisteme sofisticate de drenaj al apei ?i o sala mare unde se desfa?urau ospe?e regale. Perperikon sta marturie inginerie avansate ?i vie?ii spirituale profunde a tracilor, fiind ulterior folosit de romani, bizantini ?i bulgari — astazi este una dintre cele mai importante destina?ii arheologice din Peninsula Balcanica.",
      en: "Perperikon is a monumental ancient rock city located in the Eastern Rhodope Mountains of southern Bulgaria, often dubbed the 'Bulgarian Machu Picchu.' Perched on a high rocky peak, this archaeological wonder has been a sacred site for over 8,000 years, beginning as a Neolithic sanctuary. It is most famous as the legendary location of the Oracle of Dionysus, where Alexander the Great is said to have received a prophecy about his world conquest. The site consists of a massive palace-sanctuary, an acropolis, and two outer cities, all carved directly into the bedrock. Visitors can explore ancient altars, sophisticated water drainage systems, and a grand hall that once hosted royal banquets. Perperikon stands as a testament to the advanced engineering and deep spiritual life of the Thracians, later utilized by Romans, Byzantines, and Bulgarians, making it one of the most important archaeological destinations in the Balkan Peninsula."
    },
    factsAdvanced: {
      de: [
        "Perperikon liegt auf 470 Metern Höhe auf einem mächtigen Felsgipfel.",
        "Das archäologische Areal erstreckt sich über etwa 5 Quadratkilometer.",
        "Die ersten menschlichen Spuren in Perperikon stammen aus dem 6. Jahrtausend v. Chr.",
        "Ein 3 Meter breiter, kreisförmiger Altar an der Stätte diente vermutlich für Wein-Feuer-Rituale zu Ehren des Dionysos.",
        "Der große Palast in Perperikon ist auf sieben Ebenen in den Fels gehauen und umfasst über 50 einzelne Räume.",
        "Im 5. Jahrhundert n. Chr. wurde Perperikon ein bedeutendes frühchristliches Zentrum mit eigenem Bistum.",
        "An der Stätte befindet sich eine in den Fels geschlagene Zisterne, die über 270 Kubikmeter Wasser fasste.",
        "Perperikon liegt nur 15 Kilometer nordöstlich der heutigen Stadt Kardschali."
      ],
      hu: [
        "Perperikon 470 méteres magasságban, egy hatalmas sziklacsúcson fekszik.",
        "A régészeti lelohely körülbelül 5 négyzetkilométeren terül el.",
        "Perperikonon az elso emberi tevékenység nyomai a Krisztus elotti 6. évezredre nyúlnak vissza.",
        "Egy 3 méter széles, kör alakú oltárt találtak itt, melyet feltehetoen a Dionüszosznak szentelt bor- és tuzrítusokhoz használtak.",
        "A nagy palotát hét szinten faragták a sziklába, és több mint 50 különálló helyiséget tartalmaz.",
        "Az 5. században Perperikon fontos kora keresztény központtá vált, saját püspökséggel.",
        "A helyszínen található egy sziklába vájt hatalmas ciszterna, amely több mint 270 köbméter vizet tárolhatott.",
        "Perperikon mindössze 15 kilométerre északkeletre fekszik a mai Kardzsali várostól."
      ],
      ro: [
        "Perperikon este situat la o altitudine de 470 de metri, pe un vârf masiv de stânca.",
        "Situl arheologic se întinde pe o suprafa?a de aproximativ 5 kilometri patrați.",
        "Primele dovezi de activitate umana la Perperikon dateaza din mileniul al VI-lea î.Hr.",
        "Un altar circular de 3 metri la?ime descoperit aici a fost folosit, cel mai probabil, pentru ritualuri de vin ?i foc dedicate lui Dionysos.",
        "Palatul cel mare de la Perperikon este sapat pe ?apte niveluri ?i con?ine peste 50 de încaperi individuale.",
        "În secolul al V-lea d.Hr., Perperikon a devenit un important centru cre?tin timpuriu, cu propria episcopie.",
        "La sit exista o cisterna uria?a sapata în stânca, ce putea re?ine peste 270 de metri cubi de apa.",
        "Perperikon se afla la doar 15 kilometri nord-est de orașul modern Kardzhali."
      ],
      en: [
        "Perperikon is situated at an altitude of 470 meters on a massive rock peak.",
        "The archaeological site covers an area of approximately 5 square kilometers.",
        "The first evidence of human activity at Perperikon dates back to 6,000 years BCE.",
        "A 3-meter-wide circular altar discovered at the site was likely used for wine-fire rituals dedicated to Dionysus.",
        "The grand palace at Perperikon is carved on seven levels and contains over 50 individual rooms.",
        "In the 5th century AD, Perperikon became an important early Christian center with its own bishopric.",
        "The site features a massive cistern carved into the rock that could hold over 270 cubic meters of water.",
        "Perperikon is located only 15 kilometers northeast of the modern city of Kardzhali."
      ]
    },
    image: "/geo-images/bulgaria/hist-perperikon.webp"
  },
  {
    id: "hist-baba-vida",
    type: "historical",
    parent: "bg-country",
    coords: [22.8890, 43.9950],
    name: { de: "Baba Vida", hu: "Baba Vida", ro: "Baba Vida", en: "Baba Vida Fortress" },
    description: {
      de: "Die bekannteste Festung von Vidin und die am besten erhaltene mittelalterliche Burg Bulgariens. Baba Vida steht direkt am Donauufer und prägt die Stadtansicht. Der Ort verbindet Grenzgeschichte, Verteidigung und Flusshandel. Für Burgenseiten und Donau-Routen ist Baba Vida ein starkes SEO-Ziel.",
      hu: "Vidin legismertebb erodje és Bulgária egyik legjobb állapotban fennmaradt középkori vára. Baba Vida közvetlenül a Duna partján áll, és meghatározza a város látképét. A hely határtörténelmet, védelmet és folyami kereskedelmet egyesít. A váras tartalmakhoz és a Duna-útvonalakhoz Baba Vida eros SEO-célpont.",
      ro: "Cea mai cunoscuta fortarea?a din Vidin ?i una dintre cele mai bine pastrate cetați medievale ale Bulgariei. Baba Vida sta chiar pe malul Dunarii ?i definește profilul orașului. Locul combina istoria de frontiera, apararea ?i comer?ul fluvial. Pentru paginile despre castele ?i traseele dunarene, Baba Vida este foarte puternic.",
      en: "Vidin's best-known fortress and one of Bulgaria's best-preserved medieval castles. Baba Vida stands right on the Danube and shapes the city skyline. It combines border history, defense, and river trade. For castle pages and Danube routes, Baba Vida is a strong SEO target."
    },
    facts: {
      de: ["Donauufer", "Vidin", "Mittelalterliche Burg", "Grenzgeschichte", "Stadtikon"],
      hu: ["Duna-part", "Vidin", "Középkori vár", "Határtörténelem", "Városi jelkép"],
      ro: ["Malul Dunarii", "Vidin", "Cetate medievala", "Istorie de frontiera", "Simbol urban"],
      en: ["Danube bank", "Vidin", "Medieval castle", "Border history", "City icon"]
    },
    descriptionAdvanced: {
      de: "Baba Vida ist eine majestätische mittelalterliche Festung am südlichen Donauufer in Vidin im Nordwesten Bulgariens. Sie ist die einzige vollständig erhaltene mittelalterliche Burg des Landes und beeindruckt mit einem doppelten Mauerring sowie einem tiefen Wassergraben. Errichtet auf den Grundmauern der römischen Festung Bononia, erlebte die Burg ihre Blütezeit im 14. Jahrhundert als Residenz der Vidiner Zaren. Die Architektur prägen neun Verteidigungstürme – vier davon sind vollständig erhalten – und mächtige Steinzinnen, die einen weiten Blick über den Fluss bis nach Rumänien bieten. Im Inneren erwarten Besucher gewölbte Säle, alte Verliese und militärische Lagerräume, die jahrhundertelange Kriegswirren überstanden haben. Baba Vida ist nicht nur ein Meisterwerk mittelalterlicher Militärarchitektur, sondern auch ein kraftvolles Symbol bulgarischer Widerstandskraft und der strategischen Bedeutung der Stadt als Donau-Bollwerk.",
      hu: "Baba Vida lenyugözo középkori erod a Duna déli partján, a Bulgária északnyugati részén fekvo Vidinben. Ez az ország egyetlen teljesen épen maradt középkori vára, mely félelmetes védelmi rendszerrel, két koncentrikus fallal és mély vizesárokkal büszkélkedhet. A vár a Bononia néven ismert ókori római erod alapjaira épült, és a 14. században élte virágkorát a vidini cárok fo rezidenciájaként. Építészetét kilenc védotorony határozza meg – ezek közül négy teljesen épségben maradt –, valamint hatalmas koormós falak, amelyekrol széles kilátás nyílik a folyóra és Románia irányába. Bent a látogatók boltozatos termeket, osi börtöncellákat és katonai raktárakat fedezhetnek fel, amelyek évszázadok háborúit állták ki. Baba Vida nemcsak a középkori katonai építészet remekmuve, hanem a bolgár ellenálló képesség és Vidin folyami erodként betöltött stratégiai szerepének eros jelképe is.",
      ro: "Baba Vida este o impunatoare fortarea?a medievala situata pe malul sudic al Dunarii, în Vidin, nord-vestul Bulgariei. Este singurul castel medieval pastrat integral din ?ara, cu un sistem defensiv formidabil compus din doua ziduri concentrice ?i un ?an? adânc. Construit pe fundațiile vechii fortare?e romane Bononia, castelul a atins apogeul în secolul al XIV-lea, ca re?edin?a principala a ?arilor de Vidin. Arhitectura este definita de cele noua turnuri de aparare, dintre care patru sunt complet pastrate, ?i de zidurile masive cu metereze, oferind o panorama larga asupra fluviului pâna în România. În interior, vizitatorii pot explora sali boltite, vechi închisori ?i depozite militare care au rezistat secolelor de razboaie. Baba Vida este nu doar o capodopera a arhitecturii militare medievale, ci ?i un puternic simbol al rezilien?ei bulgare ?i al importan?ei strategice a orașului ca bastion fluvial.",
      en: "Baba Vida is a majestic medieval fortress located on the southern bank of the Danube River in Vidin, northwestern Bulgaria. It stands as the only entirely preserved medieval castle in the country, boasting a formidable defensive system of two concentric walls and a deep moat. Built on the foundations of the ancient Roman fortress of Bononia, the castle reached its prominence during the 14th century as the primary residence of the Vidin Tsars. The architecture is characterized by its nine defensive towers, four of which are fully intact, and its massive stone battlements that offer commanding views over the river toward Romania. Inside, visitors can explore vaulted halls, ancient prisons, and military storerooms that have withstood centuries of warfare. Baba Vida is not only a masterpiece of medieval military architecture but also a powerful symbol of Bulgarian resilience and the city's strategic importance as a riverine stronghold."
    },
    factsAdvanced: {
      de: [
        "Baba Vida besteht aus zwei Hauptbereichen: einer inneren Verteidigungsmauer mit 9 Türmen und einer äußeren Mauer mit eigenen Wassergräben.",
        "Der Burggraben wurde ursprünglich direkt mit Wasser aus der Donau gefüllt.",
        "Der Name \\\\\\\"Baba Vida\\\\\\\" geht auf eine lokale Legende über eine bulgarische Prinzessin zurück, die das Schloss zu ihrem Schutz erbauen ließ.",
        "Der heutige Bau stammt überwiegend aus dem 13. und 14. Jahrhundert, aus der Zeit Zar Iwan Stratsimirs.",
        "Fast 200 Jahre lang war die Festung ein wichtiger Militärstützpunkt der osmanischen Donauflotte.",
        "Baba Vida diente als Kulisse für über 50 bulgarische und internationale Historienfilme.",
        "Im Innenhof der Burg befindet sich ein rekonstruiertes mittelalterliches Theater, in dem im Sommer noch heute Aufführungen stattfinden.",
        "Die Mauern bestehen größtenteils aus Kalkstein und Ziegeln, die mit einem außergewöhnlich haltbaren Mörtel verbunden sind."
      ],
      hu: [
        "Baba Vida két fo részbol áll: egy belso védofalból kilenc toronnyal és egy külso falból, saját vizesárkokkal.",
        "A várárkot eredetileg közvetlenül a Duna vizével töltötték fel.",
        "A \\\\\\\"Baba Vida\\\\\\\" elnevezés egy helyi legendából származik egy bolgár hercegnorol, aki saját védelmére építtette a várat.",
        "A jelenlegi épület nagyrészt a 13. és 14. századból, Iván Sztracimir cár uralkodásának idejébol származik.",
        "Közel 200 éven át az erod az Oszmán Birodalom dunai flottájának egyik legfontosabb katonai bázisa volt.",
        "Baba Vidát több mint 50 bolgár és nemzetközi történelmi film helyszíneként használták.",
        "A vár belso udvarán helyreállított középkori színpad muködik, mely ma is nyári eloadásoknak ad otthont.",
        "A falak foleg mészkobol és téglából épültek, melyeket rendkívül tartós habarcs köt össze."
      ],
      ro: [
        "Baba Vida este formata din doua sectoare principale: un zid interior de aparare cu 9 turnuri ?i un zid exterior cu propriile ?an?uri.",
        "?an?ul ceta?ii era umplut ini?ial cu apa adusa direct din Dunare.",
        "Numele \\\\\\\"Baba Vida\\\\\\\" provine dintr-o legenda locala despre o prin?esa bulgara care a construit castelul pentru a se apara.",
        "Structura actuala dateaza în mare parte din secolele al XIII-lea ?i al XIV-lea, în timpul domniei ?arului Ivan Stratsimir.",
        "Cetatea a fost o baza militara-cheie a flotei dunarene a Imperiului Otoman timp de aproape 200 de ani.",
        "Baba Vida a fost folosita ca decor în peste 50 de filme istorice bulgare ?i internaționale.",
        "Curtea interioara a castelului adapostește un teatru medieval reconstruit, unde se ?in spectacole vara.",
        "Zidurile castelului sunt construite în principal din calcar ?i caramida, fiind legate cu un mortar extrem de durabil."
      ],
      en: [
        "Baba Vida consists of two main sections: an inner defensive wall with 9 towers and an outer wall with its own moats.",
        "The fortress moat was originally filled with water directly from the Danube River.",
        "The name 'Baba Vida' comes from a local legend about a Bulgarian princess who built the castle to protect herself.",
        "The current structure mostly dates from the 13th and 14th centuries during the reign of Tsar Ivan Stratsimir.",
        "The fortress was a key military base for the Ottoman Empire's Danubian fleet for nearly 200 years.",
        "Baba Vida has been used as a backdrop for over 50 Bulgarian and international historical films.",
        "The inner courtyard of the castle features a reconstructed medieval theater that still hosts summer performances.",
        "The castle walls are constructed primarily of limestone and bricks bonded with incredibly durable mortar."
      ]
    },
    image: "/geo-images/bulgaria/hist-baba-vida.webp"
  }
];
