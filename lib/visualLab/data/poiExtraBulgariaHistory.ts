import { POI } from "./poi";

export const poiExtraBulgariaHistory: POI[] = [
  {
    id: "cult-rila-monastery",
    type: "landmark",
    parent: "bg-country",
    coords: [23.3405, 42.1333],
    name: { de: "Rila-Kloster", hu: "Rilai kolostor", ro: "Mănăstirea Rila", en: "Rila Monastery" },
    description: {
      de: "UNESCO-geschütztes bulgarisch-orthodoxes Kloster aus dem 10. Jahrhundert.",
      hu: "UNESCO-védett bolgár ortodox kolostor a 10. századból.",
      ro: "Mănăstire ortodoxă bulgară din secolul al X-lea, inclusă în UNESCO.",
      en: "A UNESCO-protected Bulgarian Orthodox monastery from the 10th century."
    },
    facts: {
      de: ["UNESCO-Welterbe", "Gegründet im 10. Jahrhundert", "Wichtiges orthodoxes Zentrum"],
      hu: ["UNESCO világörökség", "A 10. században alapították", "Fontos ortodox központ"],
      ro: ["Patrimoniu mondial UNESCO", "Fondată în secolul al X-lea", "Centru ortodox important"],
      en: ["UNESCO World Heritage site", "Founded in the 10th century", "Important Orthodox center"]
    },
    descriptionAdvanced: {
      de: "Das Rila-Kloster, tief im Rila-Gebirge gelegen, ist das größte und berühmteste ostorthodoxe Kloster Bulgariens. Gegründet im 10. Jahrhundert vom Einsiedler Iwan von Rila, ist es seit über tausend Jahren ein spirituelles und kulturelles Leuchtfeuer für das bulgarische Volk. Der Klosterkomplex ist ein Meisterwerk der bulgarischen Wiedergeburtsarchitektur mit eindrucksvollen schwarz-weiß gestreiften Arkaden, kunstvollen Holzschnitzereien und farbenprächtigen Fresken, die Außen- und Innenwände bedecken. Als UNESCO-Welterbe verkörpert das Kloster bis heute die bulgarische Identität und den geistigen Widerstand in Zeiten der Fremdherrschaft. Besonders beeindruckend sind die Hauptkirche Mariä Geburt mit einer der schönsten Ikonostasen des Balkans und der Hreljo-Turm, das älteste erhaltene Gebäude der Anlage. Die ruhige Berglage und die tiefe spirituelle Atmosphäre machen das Rila-Kloster zu einem unverzichtbaren Pilger- und Kulturziel.",
      hu: "A Rilai kolostor, a Rila-hegység mélyén, Bulgária legnagyobb és leghíresebb ortodox kolostora. A 10. században alapította Rilai Szent János remete, és több mint ezer éve a bolgár nép szellemi és kulturális iránymutatója. A kolostoregyüttes a bolgár újjászületés-kori építészet remekműve: jellegzetes fekete-fehér csíkos árkádokkal, finom faragásokkal és élénk színű freskókkal, melyek a külső és belső falakat is borítják. Az UNESCO-világörökség részeként ma is a bolgár identitás és a megszálló hatalmakkal szembeni szellemi ellenállás jelképe. Különösen lenyűgöző a Szűz Mária születése-főtemplom – a Balkán egyik legszebb ikonosztázával – és a Hreljo-torony, a komplexum legrégebbi fennmaradt épülete. A nyugodt hegyvidéki környezet és a mély spirituális hangulat zarándok- és kulturális úti céllá teszi.",
      ro: "Mănăstirea Rila, ascunsă adânc în Munții Rila, este cea mai mare și cea mai cunoscută mănăstire ortodoxă din Bulgaria. Întemeiată în secolul al X-lea de pustnicul Sfântul Ioan de Rila, este de peste un mileniu un far spiritual și cultural al poporului bulgar. Complexul mănăstiresc este o capodoperă a arhitecturii din perioada Renașterii bulgare, cu arcade impresionante în dungi alb-negru, sculpturi delicate în lemn și fresce vii care acoperă atât pereții exteriori, cât și pe cei interiori. Inclusă în Patrimoniul Mondial UNESCO, mănăstirea rămâne un simbol al identității bulgare și al rezistenței spirituale în perioadele de stăpânire străină. Sunt deosebit de impresionante Biserica Principală a Nașterii Maicii Domnului, cu unul dintre cele mai frumoase iconostase din Balcani, și Turnul lui Hreljo, cea mai veche clădire a complexului. Liniștea muntelui și atmosfera profund spirituală fac din Mănăstirea Rila un loc esențial de pelerinaj și o destinație culturală de top.",
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
        "A jelenlegi főtemplom 1834 és 1837 között épült, és 1200 különálló freskót tartalmaz.",
        "Az 1335-ben emelt Hreljo-torony az egyetlen épület, amely megmaradt az 1833-as nagy tűzvész után.",
        "A kolostor múzeumában látható a híres Raffail-kereszt – egy fafaragású kereszt 104 vallási jelenettel és 650 miniatűr alakkal.",
        "Raffail szerzetes több mint 12 éven át (1790–1802) dolgozott a kereszten, és a finom faragások miatt elveszítette látását.",
        "A kolostor könyvtára több mint 250 kéziratot és 9000 régi nyomtatványt őriz.",
        "A kolostor 1147 méteres magasságban fekszik, a Rila Nemzeti Parkban.",
        "A Rilai kolostor 1983-ban került fel az UNESCO világörökségi listájára."
      ],
      ro: [
        "Mănăstirea Rila se întinde pe 8.800 de metri pătrați și are aproximativ 300 de chilii.",
        "Biserica principală actuală a fost construită între 1834 și 1837 și conține 1.200 de fresce individuale.",
        "Turnul lui Hreljo, ridicat în 1335, este singura construcție care a supraviețuit marelui incendiu din 1833.",
        "Muzeul mănăstirii adăpostește celebra Cruce a lui Rafail, sculptată în lemn cu 104 scene religioase și 650 de figuri miniaturale.",
        "Crucea lui Rafail a fost realizată în peste 12 ani (1790–1802), iar călugărul Rafail și-a pierdut treptat vederea din cauza muncii migăloase.",
        "Biblioteca mănăstirii păstrează peste 250 de manuscrise și 9.000 de tipărituri vechi.",
        "Complexul se află la o altitudine de 1.147 de metri, în Parcul Natural Rila.",
        "Mănăstirea Rila a fost înscrisă pe lista Patrimoniului Mondial UNESCO în 1983."
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
      hu: "A Bojana-templom Szófia szélén, a Vitosa-hegység lábánál található középkori bolgár ortodox templom, amely 1979 óta az UNESCO Világörökség része. A templom világhírű az 1259-ből származó, rendkívül jó állapotban fennmaradt freskóiról, amelyek a középkori kelet-európai művészet egyik legjelentősebb példájának számítanak. A falfestményeket a korukhoz képest szokatlan realizmus és az alakok mély pszichológiai ábrázolása jellemzi, ami a reneszánsz előfutárává teszi őket. Különösen lenyűgözőek az adományozók, Kalojan szebasztokrátor és felesége, Desziszlava, valamint Konsztantin Tih bolgár cár és Irina cárné portréi. A Bojana-templom felbecsülhetetlen kulturális értékkel bír, és kötelező látnivaló minden Szófiába látogató számára, akit érdekel a művészettörténet és a spiritualitás.",
      ro: "Biserica Boiana, situată la marginea Sofiei, la poalele muntelui Vitosha, este un lăcaș de cult ortodox bulgar medieval și face parte din Patrimoniul Mondial UNESCO din 1979. Biserica este faimoasă în întreaga lume pentru frescele sale excepțional de bine conservate din anul 1259, considerate unul dintre cele mai importante exemple de artă medievală est-europeană. Picturile murale se caracterizează printr-un realism neobișnuit pentru acea perioadă și o reprezentare psihologică profundă a figurilor, ceea ce le face precursoare ale Renașterii. Deosebit de impresionante sunt portretele ctitorilor, sebastocratorul Kaloyan și soția sa Desislava, precum și ale țarului bulgar Constantin Tih și ale țarinei Irina. Biserica Boiana este un loc de o valoare culturală inestimabilă și o vizită obligatorie pentru orice vizitator al Sofiei interesat de istoria artei și spiritualitate.",
      en: "The Boyana Church, located on the outskirts of Sofia at the foot of Vitosha Mountain, is a medieval Bulgarian Orthodox church and has been a UNESCO World Heritage site since 1979. The church is world-famous for its exceptionally well-preserved frescoes dating from 1259, considered one of the most significant examples of medieval Eastern European art. The murals are characterized by a realism unusual for the period and a deep psychological portrayal of the figures, making them precursors to the Renaissance. Particularly impressive are the portraits of the donors, Sebastocrator Kaloyan and his wife Desislava, as well as the Bulgarian Tsar Constantine Tikh and Tsaritsa Irina. The Boyana Church is a site of inestimable cultural value and a must-see for any visitor to Sofia interested in art history and spirituality."
    },
    facts: {
      de: ["Status: UNESCO-Weltkulturerbe seit 1979", "Alter: Fresken von 1259", "Bedeutung: Vorläufer der Renaissance-Kunst", "Lage: Am Fuße des Witoscha-Gebirges", "Highlight: Porträts von Kalojan und Desislawa", "Architektur: Drei Bauphasen (11., 13. und 19. Jh.)"],
      hu: ["Státusz: UNESCO Világörökség 1979 óta", "Kor: 1259-es freskók", "Jelentőség: A reneszánsz művészet előfutára", "Fekvés: A Vitosa-hegység lábánál", "Látnivaló: Kalojan és Desziszlava portréi", "Építészet: Három építési szakasz (11., 13. és 19. sz.)"],
      ro: ["Statut: Patrimoniu Mondial UNESCO din 1979", "Vârstă: Fresce din 1259", "Importanță: Precursor al artei Renașterii", "Locație: La poalele muntelui Vitosha", "Atracție: Portretele lui Kaloyan și Desislava", "Arhitectură: Trei faze de construcție (sec. XI, XIII și XIX)"],
      en: ["Status: UNESCO World Heritage site since 1979", "Age: Frescoes from 1259", "Significance: Precursor to Renaissance art", "Location: At the foot of Vitosha Mountain", "Highlight: Portraits of Kaloyan and Desislava", "Architecture: Three construction phases (11th, 13th, and 19th centuries)"]
    },
    factsAdvanced: {
      de: [
        "Die Kirche von Bojana zeigt 240 menschliche Figuren in 89 verschiedenen biblischen Szenen.",
        "Die Fresken von 1259 stammen von einem anonymen Meister, der heute als „Bojana-Meister“ bezeichnet wird.",
        "Die Kirche wurde in drei Bauphasen errichtet: 11. Jahrhundert, Mitte 13. Jahrhundert und Mitte 19. Jahrhundert.",
        "Das Bild des heiligen Nikolaus gilt als eine der frühesten realistischen Darstellungen in der orthodoxen Kunst.",
        "Das Porträt der Zarin Irina wird wegen seiner außergewöhnlichen Schönheit und der detaillierten mittelalterlichen Gewänder gelobt.",
        "Anfang des 20. Jahrhunderts sollte die Kirche zugunsten eines größeren Gotteshauses abgerissen werden, wurde aber durch Königin Eleonore von Bulgarien gerettet.",
        "Die etwa 1 Meter dicken Mauern halten die Temperatur konstant und schützen die Fresken.",
        "Die Fresken wurden in einer der „Fresco buono“ ähnlichen Technik auf feuchten Putz aufgetragen."
      ],
      hu: [
        "A Bojana-templomban 240 emberi alak látható 89 különböző bibliai jelenetben.",
        "Az 1259-es freskókat egy ismeretlen mester készítette, akit ma „Bojana-mesternek” neveznek.",
        "A templomot három szakaszban építették: a 11. században, a 13. század közepén és a 19. század közepén.",
        "A templom Szent Miklós-ábrázolása az ortodox művészet egyik legkorábbi realisztikus alkotásának számít.",
        "Irina cárné portréját kivételes szépségéért és a középkori öltözékek aprólékos megjelenítéséért dicsérik.",
        "A 20. század elején majdnem lebontották egy nagyobb templom javára, de Eleonóra bolgár királyné mentette meg.",
        "A mintegy 1 méter vastag falak állandó hőmérsékletet biztosítanak, segítve a freskók megőrzését.",
        "A freskókat a „fresco buono”-hoz hasonló technikával, nedves vakolatra festették."
      ],
      ro: [
        "Biserica Boiana cuprinde 240 de figuri umane în 89 de scene biblice distincte.",
        "Frescele din 1259 au fost realizate de un maestru anonim, cunoscut astăzi drept „Maestrul de la Boiana”.",
        "Biserica a fost extinsă în trei etape: în secolul al XI-lea, la mijlocul secolului al XIII-lea și la mijlocul secolului al XIX-lea.",
        "Imaginea Sfântului Nicolae din biserică este considerată una dintre cele mai vechi reprezentări realiste din arta ortodoxă.",
        "Portretul țarinei Irina este lăudat pentru frumusețea sa excepțională și pentru detaliile veșmintelor medievale.",
        "La începutul secolului XX, biserica era să fie demolată pentru a face loc unui lăcaș mai mare, dar a fost salvată de regina Eleonora a Bulgariei.",
        "Pereții bisericii au aproximativ 1 metru grosime, ceea ce a ajutat la menținerea unei temperaturi constante și la conservarea frescelor.",
        "Frescele sunt realizate într-o tehnică asemănătoare cu „fresco buono”, prin care vopseaua este aplicată pe tencuială umedă."
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
      ro: "Peninsulă UNESCO cu peste 3000 de ani de istorie, pe litoralul Mării Negre.",
      en: "A UNESCO peninsula with over 3,000 years of history on the Black Sea coast."
    },
    facts: {
      de: ["UNESCO-Welterbe", "Antike und byzantinische Schichten", "Beliebtes Küstenziel"],
      hu: ["UNESCO világörökség", "Ókori és bizánci rétegek", "Népszerű tengerparti célpont"],
      ro: ["Patrimoniu mondial UNESCO", "Straturi antice și bizantine", "Destinație de coastă populară"],
      en: ["UNESCO World Heritage site", "Ancient and Byzantine layers", "Popular coastal destination"]
    },
    descriptionAdvanced: {
      de: "Alt-Nessebar liegt auf einer felsigen Halbinsel, die nur durch einen schmalen, künstlichen Damm mit dem Festland verbunden ist, und zählt zu den malerischsten und geschichtsträchtigsten Orten der bulgarischen Schwarzmeerküste. Mit über 3.000 Jahren ununterbrochener Besiedlung begann die Stadt als thrakische Siedlung Mesambria, bevor sie zur griechischen Kolonie und später zu einem bedeutenden byzantinischen Handelszentrum wurde. Wegen ihrer dichten Konzentration mittelalterlicher Kirchen wird Nessebar gern „Stadt der 40 Kirchen“ genannt – darunter die Sophienkirche aus dem 5. Jahrhundert und die kunstvoll verzierte Pantokrator-Kirche aus dem 14. Jahrhundert. Als UNESCO-Welterbe gleicht die Stadt einem lebenden Museum, in dem antike Festungsmauern neben traditionellen Holzhäusern aus dem 19. Jahrhundert stehen. Besucher schlendern durch Kopfsteingassen, entdecken archäologische Ruinen und erleben die einmalige maritime Atmosphäre eines modernen Badeortes mit jahrtausendealter Vergangenheit.",
      hu: "Ó-Neszebár egy sziklás félszigeten fekszik, amelyet csak keskeny, mesterséges földnyelv köt össze a szárazfölddel; a bolgár Fekete-tenger partjának egyik legfestőibb és legősibb városa. Több mint 3000 éves folyamatos lakottsággal, a város Meszembria néven trák településként indult, majd görög gyarmat, később pedig fontos bizánci kereskedelmi központ lett. Sűrű középkori templomállományáról „a 40 templom városaként” emlegetik – itt áll az 5. századi Szófia-templom és a 14. századi, gazdagon díszített Pantokrátor-templom. UNESCO-világörökségi helyszínként a város élő múzeum, ahol ősi várfalak és 19. századi hagyományos faházak találkoznak. A látogatók macskaköves sikátorokban barangolnak, régészeti romokat fedeznek fel, és átélik a több évezredes történelmet ötvöző modern tengerparti üdülőhely sajátos hangulatát.",
      ro: "Vechiul Nesebar, situat pe o peninsulă stâncoasă legată de continent printr-un istm îngust, construit de mâna omului, este unul dintre cele mai pitorești și mai bogate orașe istorice de pe litoralul bulgar al Mării Negre. Cu peste 3.000 de ani de locuire neîntreruptă, orașul a început ca o așezare tracică numită Mesambria, devenind apoi colonie grecească și un important centru comercial bizantin. Cunoscut ca „Orașul celor 40 de biserici”, păstrează o concentrare extraordinară de arhitectură religioasă medievală, printre care Biserica Sfânta Sofia din secolul al V-lea și ornata Biserică Hristos Pantocrator din secolul al XIV-lea. Recunoscut de UNESCO ca patrimoniu mondial, Nesebar este un muzeu viu, unde ziduri antice de fortificație coexistă cu casele tradiționale din lemn ale secolului al XIX-lea. Vizitatorii pot rătăci pe străduțe pavate cu piatră, pot descoperi ruine arheologice și se pot bucura de atmosfera maritimă unică, ce îmbină milenii de istorie cu viața unei stațiuni moderne.",
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
        "Az ókori város jelentős része – köztük néhány védőfal – a tengerszint emelkedése miatt ma a víz alatt található.",
        "A földnyelv elején álló ikonikus fa szélmalom a város egyik legtöbbet fotózott jelképe.",
        "Neszebár volt a világ egyik első városa, amely Kr. e. 5. században saját aranypénzt veretett.",
        "A várost 1956-ban építészeti és régészeti rezervátummá nyilvánították, 1983-ban pedig felkerült az UNESCO-listára."
      ],
      ro: [
        "Nesebar este unul dintre cele mai vechi orașe din Europa, fondat ca așezare tracică în jurul anului 1.000 î.Hr.",
        "Peninsula pe care se află orașul vechi are doar 850 de metri lungime și 300 de metri lățime.",
        "În perioada de apogeu din secolele XIII–XIV, Nesebarul avea aproape 40 de biserici pe această suprafață mică.",
        "Biserica Sfântul Ioan Aliturgetos nu a fost niciodată sfințită, deoarece un muncitor și-a pierdut viața în timpul construcției.",
        "O mare parte din orașul antic, inclusiv unele ziduri de apărare, se află astăzi sub apă din cauza creșterii nivelului mării.",
        "Iconica moară de vânt din lemn de la intrarea pe istm este unul dintre cele mai fotografiate simboluri ale orașului.",
        "Nesebar a fost unul dintre primele orașe din lume care a bătut propriile monede de aur, în secolul al V-lea î.Hr.",
        "Orașul a fost declarat rezervație arhitecturală și arheologică în 1956 și inclus în Patrimoniul UNESCO în 1983."
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
      hu: "A kazanlaki trák sírkamra a Rózsák völgyének szívében található, az ókori művészet remekműve, amely 1979 óta az UNESCO Világörökség része. A sírkamra a Krisztus előtti 4. század végéről származik, és világhírű a sírkamrában és a folyosón található, rendkívül jó állapotban fennmaradt freskóiról. A falfestmények rituális halotti tort, trák harcosokat és lóversenyeket ábrázolnak, amelyek lenyűgöző betekintést nyújtanak a trákok kultúrájába és hiedelemvilágába. Különösen megható a trák uralkodó és felesége ábrázolása, amint egymás kezét fogják. A kazanlaki sírkamra a trák kultúra legjelentősebb emléke Bulgáriában, és kötelező látnivaló a történelem iránt érdeklődők számára.",
      ro: "Mormântul tracic de la Kazanlak, situat în inima Văii Trandafirilor, este o capodoperă a artei antice și face parte din Patrimoniul Mondial UNESCO din 1979. Mormântul datează de la sfârșitul secolului al IV-lea î.Hr. și este faimos pentru frescele sale excepțional de bine conservate din camera funerară și coridor. Picturile murale înfățișează scene ale unui ospăț funerar ritual, războinici traci și curse de cai, oferind o perspectivă fascinantă asupra culturii și credințelor tracilor. Deosebit de impresionantă este reprezentarea conducătorului trac și a soției sale, ținându-se de mână. Mormântul de la Kazanlak este cel mai important monument al culturii trace din Bulgaria și o vizită obligatorie pentru orice pasionat de istorie.",
      en: "The Thracian Tomb of Kazanlak, located in the heart of the Rose Valley, is a masterpiece of ancient art and has been a UNESCO World Heritage site since 1979. The tomb dates from the late 4th century BCE and is famous for its exceptionally well-preserved frescoes in the burial chamber and corridor. The murals depict scenes of a ritual funeral feast, Thracian warriors, and horse races, providing a fascinating insight into Thracian culture and beliefs. Particularly impressive is the depiction of the Thracian ruler and his wife holding hands. The Kazanlak Tomb is the most significant monument of Thracian culture in Bulgaria and a must-see for anyone interested in history."
    },
    facts: {
      de: ["Status: UNESCO-Weltkulturerbe seit 1979", "Alter: Spätes 4. Jh. v. Chr.", "Bedeutung: Meisterwerk thrakischer Kunst", "Lage: Im Rosental bei Kasanlak", "Highlight: Fresken des Totenmahls", "Kultur: Einblick in thrakische Rituale"],
      hu: ["Státusz: UNESCO Világörökség 1979 óta", "Kor: Kr. e. 4. század vége", "Jelentőség: A trák művészet remekműve", "Fekvés: A Rózsák völgyében, Kazanlaknál", "Látnivaló: Halotti tor freskói", "Kultúra: Betekintés a trák rituálékba"],
      ro: ["Statut: Patrimoniu Mondial UNESCO din 1979", "Vârstă: Sfârșitul sec. IV î.Hr.", "Importanță: Capodoperă a artei trace", "Locație: În Valea Trandafirilor, lângă Kazanlak", "Atracție: Frescele ospățului funerar", "Cultură: Perspectivă asupra ritualurilor trace"],
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
        "A freskók a hellenisztikus festészet egyetlen teljesen megőrzött példái a világon.",
        "A főkamra átmérője mindössze 2,65 méter, magassága 3,25 méter.",
        "Az eredeti freskók védelme érdekében a sírkamra zárva van a látogatók elől, de közvetlenül mellette egy hiteles, méretarányos másolat áll.",
        "A kupolafreskó 12 harci szekeret és számos lovat ábrázol egy dinamikus versenyjelenetben.",
        "A sír egy trák uralkodóé lehetett, talán Roigosé, aki a Krisztus előtti 4. század végén vagy a 3. század elején uralkodott.",
        "A Kazanlaki sírkamra volt az első bolgár emlék, amely felkerült az UNESCO világörökségi listájára.",
        "A trák királyok völgyében – ahol a sír található – több mint 1500 halomsír található."
      ],
      ro: [
        "Mormântul a fost descoperit întâmplător în 1944 de soldați care săpau o tranșee.",
        "Frescele sunt singurele exemple complet conservate de pictură elenistică din întreaga lume.",
        "Camera principală a mormântului are un diametru de doar 2,65 m și o înălțime de 3,25 m.",
        "Pentru a proteja frescele originale, mormântul este închis publicului, dar lângă el se află o replică fidelă, la scară reală.",
        "Pictura din cupolă înfățișează 12 care de luptă și numeroși cai într-o scenă dinamică de cursă.",
        "Mormântul a aparținut unui conducător trac, posibil Roigos, care a domnit la sfârșitul secolului al IV-lea sau la începutul secolului al III-lea î.Hr.",
        "Mormântul de la Kazanlak a fost primul monument bulgar inclus pe lista Patrimoniului Mondial UNESCO.",
        "Valea Regilor Traci, unde se află mormântul, cuprinde peste 1.500 de tumuli funerari."
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
    name: { de: "Madarareiter", hu: "Madarai lovas", ro: "Călărețul de la Madara", en: "Madara Rider" },
    description: {
      de: "UNESCO-Felsrelief aus dem 8. Jahrhundert, ein Symbol des frühen bulgarischen Staates.",
      hu: "UNESCO-szikladombormű a 8. századból, a korai bolgár állam jelképe.",
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
      de: "Der Madarareiter ist ein eindrucksvolles Felsrelief, das in eine senkrechte, 100 Meter hohe Klippe in der Nähe des Dorfes Madara im Nordosten Bulgariens gehauen wurde. Entstanden im frühen 8. Jahrhundert während des Ersten Bulgarischen Reiches, zeigt es einen lebensgroßen Reiter, der mit einer Lanze einen Löwen durchbohrt, begleitet von einem Jagdhund. Das monumentale Kunstwerk ist einzigartig in Europa und gilt als tief verwurzeltes Symbol bulgarischer Staatlichkeit und militärischen Triumphs. Rund um das Relief finden sich mehrere mittelgriechische Inschriften, die wichtige Details zur Herrschaft der Khane Tervel, Kormisosch und Omurtag liefern. Als UNESCO-Welterbe zählt der Madarareiter zu den bedeutendsten Denkmälern frühmittelalterlicher Kunst und wurde 2008 in einer öffentlichen Abstimmung zum „globalen Symbol Bulgariens“ gewählt.",
      hu: "A Madarai lovas lenyűgöző sziklarelief, amelyet egy 100 méter magas, függőleges sziklafalba véstek a bulgáriai északkeleten fekvő Madara falu közelében. A 8. század elején, az Első Bolgár Birodalom idején készült alkotás életnagyságú lovast ábrázol, amint lándzsával oroszlánt döf le, vadászkutyával az oldalán. Ez a monumentális mű Európában egyedülálló, és a bolgár államiság, valamint a katonai diadal mély szimbóluma. A reliefet több középgörög nyelvű felirat veszi körül, amelyek fontos részleteket árulnak el Tervel, Kormiszos és Omurtag kánok uralkodásáról. A Madarai lovas UNESCO-világörökség, a kora középkori művészet egyik legjelentősebb emléke, és 2008-ban hivatalos közönségszavazáson Bulgária „globális szimbólumává” választották.",
      ro: "Călărețul de la Madara este un basorelief impresionant, sculptat într-o stâncă verticală înaltă de 100 de metri, în apropierea satului Madara, în nord-estul Bulgariei. Realizat la începutul secolului al VIII-lea, în timpul Primului Țarat Bulgar, înfățișează un călăreț în mărime naturală care străpunge cu sulița un leu, însoțit de un câine de vânătoare. Această operă monumentală este unică în Europa și constituie un simbol profund al statalității bulgare și al triumfului militar. În jurul reliefului se află mai multe inscripții în greaca medievală, care oferă detalii cruciale despre domniile hanilor Tervel, Kormesios și Omurtag. Ca sit al Patrimoniului Mondial UNESCO, Călărețul de la Madara este considerat unul dintre cele mai importante monumente ale artei medievale timpurii și a fost ales oficial, prin vot public, drept „simbolul global al Bulgariei” în 2008.",
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
        "A dombormű körülbelül 2,6 méter magas és 3,1 méter széles.",
        "A lovas körüli feliratok több mint 100 év bolgár történelmét ölelik fel (705–831 között).",
        "Maga a sziklafal a Madara-fennsík része, amely az újkőkor óta szent helynek számít.",
        "A lovas alatt egy felirat arról szól, hogyan segített Tervel kán II. Justinianus bizánci császárnak visszaszerezni a trónját.",
        "A Madarai lovast 1979-ben vették fel az UNESCO világörökségi listára.",
        "A Madarai lovas képe minden kisebb bolgár érme (sztotinki) hátoldalán szerepel.",
        "A környező régészeti rezervátum részét képezik barlangok, trák szentélyek és egy nagy római villa is."
      ],
      ro: [
        "Călărețul de la Madara este sculptat la o înălțime de 23 de metri față de baza stâncii.",
        "Basorelieful are aproximativ 2,6 metri înălțime și 3,1 metri lățime.",
        "Inscripțiile din jurul călărețului acoperă o perioadă de peste 100 de ani din istoria Bulgariei (705–831 d.Hr.).",
        "Stânca însăși face parte din Platoul Madara, considerat un loc sacru încă din neolitic.",
        "O inscripție de sub călăreț menționează cum hanul Tervel l-a ajutat pe împăratul bizantin Iustinian al II-lea să își recâștige tronul.",
        "Călărețul de la Madara a fost inclus pe lista Patrimoniului Mondial UNESCO în 1979.",
        "Imaginea Călărețului apare pe reversul tuturor monedelor bulgare mai mici (stotinki).",
        "Rezervația arheologică din jur include peșteri, sanctuare trace și o vilă romană de mari dimensiuni."
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
    name: { de: "Belogradtschik-Festung", hu: "Belogradcsik erőd", ro: "Cetatea Belogradchik", en: "Belogradchik Fortress" },
    description: {
      de: "Eine der spektakulärsten Festungen Bulgariens, direkt zwischen roten Felsformationen gebaut. Die Anlage ist ein Top-Name für historische Reisen im Nordwesten. Romanische, osmanische und bulgarische Schichten prägen den Ort. Für SEO rund um Festungen in Bulgarien ist Belogradchik extrem stark.",
      hu: "Bulgária egyik leglátványosabb erődje, közvetlenül vörös sziklaképződmények közé építve. Az északnyugat-bolgár történelmi utak egyik csúcspontja. A helyen római, oszmán és bolgár rétegek találkoznak. A bolgár várak SEO-jában Belogradcsik kiemelkedő.",
      ro: "Una dintre cele mai spectaculoase cetăți ale Bulgariei, construită chiar printre stâncile roșii. Este un nume de top pentru turismul istoric din nord-vest. Straturi romane, otomane și bulgare definesc locul. Pentru SEO despre fortărețele Bulgariei, Belogradchik este foarte puternic.",
      en: "One of Bulgaria's most spectacular fortresses, built amid red rock formations. It is a top name for historic travel in the northwest. Roman, Ottoman, and Bulgarian layers define the site. For fortress-focused Bulgaria SEO, Belogradchik is extremely strong."
    },
    facts: {
      de: ["Rote Felsen", "Nordwestbulgarien", "Festung auf Höhenzug", "Militärgeschichte", "Fotomagnet"],
      hu: ["Vörös sziklák", "Északnyugat-Bulgária", "Magashegyi erőd", "Katonai történelem", "Fotóhelyszín"],
      ro: ["Stânci roșii", "Nord-vestul Bulgariei", "Cetate pe relief înalt", "Istorie militară", "Loc fotogenic"],
      en: ["Red rocks", "Northwestern Bulgaria", "Hilltop fortress", "Military history", "Photogenic landmark"]
    },
    descriptionAdvanced: {
      de: "Die Festung von Belogradtschik, auch Kaleto genannt, ist ein Meisterwerk militärischer Baukunst, das die surrealen, hoch aufragenden roten Felsformationen des Balkangebirges als natürliche Verteidigungsmauern nutzt. Im Nordwesten Bulgariens gelegen, wurde die ursprüngliche Anlage im 3. Jahrhundert n. Chr. von den Römern errichtet und später von bulgarischen Zaren sowie osmanischen Herrschern erweitert. Mit über 10.000 Quadratmetern Fläche und drei durch massive Tore verbundenen Höfen beeindruckt die Festung vor allem durch die Art, wie sie sich nahtlos in die bis zu 200 Meter hohen Kalk- und Sandsteinsäulen einfügt – ein nahezu unbezwingbares Bollwerk, das im Laufe der Jahrhunderte zahlreiche Belagerungen abwehrte. Vom höchsten Punkt aus eröffnet sich ein atemberaubendes Panorama über die zerklüfteten Belogradtschik-Felsen und die weite Berglandschaft. Hier verschmelzen Naturwunder und antike Geschichte zu einem der unvergesslichsten Reiseziele Bulgariens.",
      hu: "A Belogradcsiki erőd – más néven Kaleto – a katonai építészet remeke, amely a Balkán-hegység szürreális, magasra törő vörös sziklaalakzatait használja fel természetes védőfalként. Bulgária északnyugati részén található; eredeti formáját a rómaiak hozták létre a 3. században, később a bolgár cárok és az oszmán hódítók bővítették. A több mint 10 000 négyzetméteres erődnek három, masszív kapukkal összekötött udvara van. Igazán lenyűgöző, ahogy a falak akár 200 méter magas mészkő- és homokkő-pillérekre támaszkodnak, így gyakorlatilag bevehetetlen védelmi rendszert alkotva, amely évszázadokon át sikeresen állta az ostromokat. A legmagasabb pontról elképesztő panoráma nyílik a Belogradcsiki-sziklák csipkés csúcsaira és a tág hegyvidéki tájra. Itt a természet csodája és az ókori történelem egymásba olvad, megteremtve Bulgária egyik legfelejthetetlenebb látványosságát.",
      ro: "Cetatea Belogradchik, cunoscută și sub numele de Kaleto, este o capodoperă a ingineriei militare, care folosește formațiunile stâncoase roșii și impunătoare ale Munților Balcani drept ziduri naturale de apărare. Situată în nord-vestul Bulgariei, fortăreața originală a fost ridicată de romani în secolul al III-lea d.Hr. și extinsă ulterior de țari bulgari și de ocupanți otomani. Cetatea acoperă peste 10.000 de metri pătrați și are trei curți distincte, conectate prin porți masive. Cel mai impresionant aspect al sitului este modul în care pereții se sprijină pe coloanele naturale de calcar și gresie, unele înalte de până la 200 de metri, formând o barieră aproape inexpugnabilă care a respins numeroase asedii. Urcând până la cel mai înalt punct, se deschide o panoramă spectaculoasă asupra peisajului montan și a stâncilor zimțate de la Belogradchik. Este un loc unde minunea naturală și istoria antică se întâlnesc, formând una dintre cele mai memorabile destinații din Bulgaria.",
      en: "The Belogradchik Fortress, also known as Kaleto, is a marvel of military engineering that utilizes the surreal, towering red rock formations of the Balkan Mountains as its primary defensive walls. Located in northwestern Bulgaria, the original stronghold was established by the Romans in the 3rd century AD, with later expansions by Bulgarian Tsars and Ottoman occupiers. The fortress covers over 10,000 square meters and features three distinct courtyards connected by massive gates. The most striking aspect of the site is the way the natural limestone and sandstone pillars, some reaching up to 200 meters in height, form an impenetrable barrier that once held off numerous sieges. Climbing to the highest point of the fortress offers a breathtaking panorama of the vast mountain landscape and the jagged peaks of the Belogradchik Rocks. It is a site where natural wonder and ancient history collide, creating one of Bulgaria's most unforgettable landmarks."
    },
    factsAdvanced: {
      de: [
        "Die Mauern der Festung sind teilweise über 2 Meter dick und bis zu 12 Meter hoch.",
        "Die natürlichen Felsen, die einen Teil der Mauern bilden, entstanden vor über 200 Millionen Jahren.",
        "Im 14. Jahrhundert war die Festung ein wichtiger militärischer Stützpunkt in den bulgarisch-byzantinischen Kriegen.",
        "Anfang des 19. Jahrhunderts ließen die Osmanen die Festung mit Hilfe europäischer Ingenieure vollständig umbauen.",
        "Die Belogradtschik-Felsen waren 2009 für die „Neuen Sieben Naturwunder“ nominiert.",
        "In der Region gibt es über 200 einzelne Felsformationen, jede mit eigener Legende und eigenem Namen wie „Die Madonna“ oder „Der Reiter“.",
        "Im Serbisch-Bulgarischen Krieg von 1885 wurde die Festung zuletzt im Kampf eingesetzt.",
        "Das Gebiet der Belogradtschik-Felsen umfasst rund 90 Quadratkilometer."
      ],
      hu: [
        "Az erőd falai egyes szakaszokon több mint 2 méter vastagok és akár 12 méter magasak.",
        "A falak részét képező természetes sziklák több mint 200 millió éve formálódtak.",
        "Az erőd a 14. századi bolgár–bizánci háborúk fontos katonai bástyája volt.",
        "Az oszmánok a 19. század elején európai mérnökök segítségével teljesen átépítették az erődöt.",
        "A Belogradcsiki-sziklákat 2009-ben jelölték a „Természet hét új csodája” közé.",
        "A térségben több mint 200 önálló sziklaalakzat található, mindegyiknek saját legendája és neve van, például „A Madonna” vagy „A lovas”.",
        "Az erődöt utoljára az 1885-ös szerb–bolgár háborúban használták harcokra.",
        "A Belogradcsiki-sziklák területe összesen mintegy 90 négyzetkilométer."
      ],
      ro: [
        "Zidurile cetății au peste 2 metri grosime și ajung pe alocuri la 12 metri înălțime.",
        "Stâncile naturale care fac parte din ziduri s-au format în urmă cu peste 200 de milioane de ani.",
        "Cetatea a fost un avanpost militar cheie în timpul războaielor bulgaro-bizantine din secolul al XIV-lea.",
        "La începutul secolului al XIX-lea, otomanii au reconstruit complet cetatea cu ajutorul unor ingineri europeni.",
        "Stâncile Belogradchik au fost nominalizate în 2009 la concursul „Noile Șapte Minuni ale Naturii”.",
        "În zonă există peste 200 de formațiuni stâncoase individuale, fiecare cu propria legendă și nume, precum „Madona” sau „Călărețul”.",
        "Cetatea a fost folosită ultima dată în lupte în timpul Războiului Sârbo-Bulgar din 1885.",
        "Suprafața totală a Stâncilor Belogradchik acoperă aproximativ 90 de kilometri pătrați."
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
    name: { de: "Zarewez-Festung", hu: "Carevec erőd", ro: "Cetatea Țareveț", en: "Tsarevets Fortress" },
    description: {
      de: "Mittelalterliche Zarenfestung über Weliko Tarnowo mit starker Silhouette. Sie war das politische Herz des Zweiten Bulgarischen Reiches. Besucher kommen wegen Mauern, Türmen und Panoramablicken. Als historische Ikone ist Tsarevets ein Schlüsselbegriff für Bulgarien.",
      hu: "Középkori cári erőd Veliko Tarnovo felett, erős panorámával. A második Bolgár Birodalom politikai központja volt. A látogatók falak, tornyok és kilátás miatt érkeznek. Tsarevec Bulgária egyik fő történelmi kulcsszava.",
      ro: "Cetate medievală a țarilor deasupra orașului Veliko Târnovo, cu o siluetă puternică. A fost inima politică a celui de-al Doilea Țarat Bulgar. Vizitatorii vin pentru ziduri, turnuri și panorame. Ca simbol istoric, Tsarevets este esențial pentru Bulgaria.",
      en: "A medieval tsar fortress above Veliko Tarnovo with a powerful skyline. It was the political heart of the Second Bulgarian Empire. Visitors come for the walls, towers, and panoramic views. As a historic icon, Tsarevets is a key Bulgaria search term."
    },
    facts: {
      de: ["Weliko Tarnowo", "Zarenzeit", "Hügelburg", "Panoramablick", "Nationales Symbol"],
      hu: ["Veliko Tarnovo", "Cári korszak", "Hegyi vár", "Panoráma", "Nemzeti jelkép"],
      ro: ["Veliko Târnovo", "Epoca Țarilor", "Cetate pe colină", "Panoramă", "Simbol național"],
      en: ["Veliko Tarnovo", "Tsar era", "Hill fortress", "Panoramic views", "National symbol"]
    },
    descriptionAdvanced: {
      de: "Die Festung Zarewez ist das imposante Zentrum von Weliko Tarnowo und war im Zweiten Bulgarischen Reich (1185–1396) die wichtigste Machtzentrale der bulgarischen Zaren. Umschlossen von den Schleifen der Jantra, beherbergt der Festungshügel den Zarenpalast, die Patriarchenkathedrale sowie mehr als 400 Wohngebäude und 22 Kirchen aus dem Mittelalter. Berühmtester Bau innerhalb der Mauern ist der Balduin-Turm, benannt nach dem lateinischen Kaiser Balduin I. von Flandern, der hier der Legende nach nach der Schlacht von Adrianopel gefangen gehalten wurde. Heute ist die Festung vor allem für ihre „Ton und Licht“-Show bekannt – ein audiovisuelles Spektakel mit Lasern und Musik, das den dramatischen Aufstieg und Fall der Stadt im Osmanischen Reich erzählt. Wer durch die mächtigen Tore und entlang der wiederhergestellten Wehrgänge schreitet, spürt die Pracht und Dimension des mittelalterlichen Goldenen Zeitalters Bulgariens.",
      hu: "A Carevec-erőd Veliko Tarnovo lenyűgöző központja, és a Második Bolgár Birodalom (1185–1396) idején a bolgár cárok fő hatalmi székhelye volt. A Jantra folyó kanyarjaival körbeölelt erőddomb otthont adott a királyi palotának, a Patriarchális székesegyháznak, valamint több mint 400 középkori lakóépületnek és 22 templomnak. A falakon belül a leghíresebb épület a Balduin-torony, melyet I. Balduin flandriai latin császárról neveztek el, akit a hagyomány szerint az adrianopoliszi csata után itt tartottak fogva. Ma az erőd elsősorban a „Hang és Fény” show-jával vált ismertté: ez a lézert és zenét felvonultató audiovizuális látványosság a város felemelkedését és az oszmánok kezébe kerülését meséli el. A masszív kapukon átsétálva és a helyreállított védőfalak mentén a látogatók valóban átélhetik Bulgária középkori aranykorának fenségét és léptékét.",
      ro: "Cetatea Tsarevets este centrul impunător al orașului Veliko Târnovo, fiind principala reședință a țarilor bulgari în timpul celui de-al Doilea Țarat Bulgar (1185–1396). Înconjurată de meandrele râului Yantra, dealul cetății găzduiește palatul regal, Catedrala Patriarhală și peste 400 de clădiri rezidențiale și 22 de biserici din perioada medievală. Cea mai cunoscută construcție din interiorul zidurilor este Turnul lui Balduin, numit după împăratul latin Baldovin I al Flandrei, despre care legenda spune că a fost închis aici după bătălia de la Adrianopol. Astăzi, cetatea este renumită pentru spectacolul „Sunet și Lumină”, o reprezentație audiovizuală cu lasere și muzică ce povestește ascensiunea dramatică și căderea orașului în mâinile Imperiului Otoman. Trecând prin porțile masive și plimbându-se de-a lungul zidurilor reconstruite, vizitatorii pot simți cu adevărat măreția și dimensiunea epocii de aur medievale a Bulgariei.",
      en: "Tsarevets Fortress is the imposing centerpiece of Veliko Tarnovo, serving as the primary seat of power for the Bulgarian Tsars during the Second Bulgarian Empire (1185–1396). Encircled by the loops of the Yantra River, the fortress hill is home to the royal palace, the Patriarchal Cathedral, and over 400 residential buildings and 22 churches from the medieval era. The most famous structure within the walls is the Baldwin Tower, named after the Latin Emperor Baldwin I of Flanders, who was legendarily imprisoned here after the Battle of Adrianople. Today, the fortress is famous for the 'Sound and Light' show, an audio-visual spectacle that uses lasers and music to recount the city's dramatic rise and eventual fall to the Ottoman Empire. Walking through its massive gates and along the reconstructed battlements, visitors can truly feel the majesty and scale of Bulgaria's medieval golden age."
    },
    factsAdvanced: {
      de: [
        "Der Festungshügel ist seit dem 2. Jahrtausend v. Chr. besiedelt, zunächst durch Thraker, später durch Römer.",
        "Der Zarewez-Hügel erhebt sich auf eine Höhe von 206 Metern über dem Meeresspiegel.",
        "Die äußere Verteidigungsmauer war ursprünglich 1,1 km lang, bis zu 3,6 m dick und 10 m hoch.",
        "Die Patriarchenkathedrale „Heilige Himmelfahrt des Herrn“ wurde in den 1980er Jahren komplett wiederaufgebaut.",
        "Archäologen entdeckten innerhalb der Mauern die Überreste von 470 einzelnen Gebäuden.",
        "Vom „Hinrichtungsfelsen“ am Rand der Festung wurden im Mittelalter Verräter in die Jantra gestoßen.",
        "Über 200 Jahre lang war Zarewez die Hauptstadt Bulgariens, bis die Festung 1393 an die Osmanen fiel.",
        "Die Festung erstreckt sich auf dem Hügel über eine Gesamtfläche von rund 12 Hektar."
      ],
      hu: [
        "Az erőddomb a Krisztus előtti 2. évezred óta lakott, először trákok, majd később rómaiak telepedtek meg itt.",
        "A Carevec-domb 206 méteres magasságban emelkedik a tengerszint fölé.",
        "A külső védőfal eredetileg 1,1 km hosszú, helyenként 3,6 m vastag és 10 m magas volt.",
        "Az „Úr mennybemenetele” patriarchális székesegyházat az 1980-as években teljesen újjáépítették.",
        "A régészek 470 különálló épület maradványait tárták fel az erődfalakon belül.",
        "Az erőd peremén álló „Kivégzősziklát” a középkorban arra használták, hogy az árulókat a Jantrába dobják róla.",
        "A Carevec több mint 200 éven át Bulgária fővárosa volt, mígnem 1393-ban az oszmánok elfoglalták.",
        "Az erőd összesen körülbelül 12 hektáron terül el a dombon."
      ],
      ro: [
        "Dealul cetății este locuit din mileniul al II-lea î.Hr., inițial de către traci, apoi de romani.",
        "Dealul Tsarevets se înalță la o altitudine de 206 metri deasupra nivelului mării.",
        "Zidul exterior de apărare avea inițial 1,1 km lungime, până la 3,6 m grosime și 10 m înălțime.",
        "Catedrala Patriarhală „Înălțarea Domnului” a fost complet reconstruită în anii 1980.",
        "Arheologii au descoperit, în interiorul zidurilor cetății, rămășițele a 470 de clădiri individuale.",
        "„Stânca Execuțiilor” de la marginea cetății era folosită în Evul Mediu pentru a-i arunca pe trădători în râul Yantra.",
        "Tsarevets a fost capitala Bulgariei timp de peste 200 de ani, până la căderea în mâinile otomanilor în 1393.",
        "Cetatea acoperă o suprafață totală de aproximativ 12 hectare pe deal."
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
      hu: "Nagy trák sziklakomplexum a Keleti-Rodopokban, szentéllyel és településnyomokkal. Perperikon Bulgária egyik legkeresettebb régészeti helyszíne. A táj fölé emelkedő fekvés különösen látványossá teszi. Történelemhez, régészethez és Dél-Bulgáriához Perperikon erős SEO-célpont.",
      ro: "Complex tracic mare în Munții Rodopi de Est, cu sanctuar și urme de așezare. Perperikon este unul dintre cele mai căutate situri arheologice din Bulgaria. Poziția deasupra peisajului îl face memorabil. Pentru istorie, arheologie și sudul Bulgariei, Perperikon este un termen SEO foarte bun.",
      en: "A major Thracian rock complex in the Eastern Rhodopes with sanctuary and settlement traces. Perperikon is one of Bulgaria's most searched archaeological sites. Its elevated setting above the landscape makes it especially impressive. For history, archaeology, and southern Bulgaria, Perperikon is a strong SEO term."
    },
    facts: {
      de: ["Thrakische Stätte", "Ost-Rhodopen", "Archäologie", "Heiligtum", "Felskomplex"],
      hu: ["Trák helyszín", "Keleti-Rodopok", "Régészet", "Szentély", "Sziklakomplexum"],
      ro: ["Sit tracic", "Rodopii de Est", "Arheologie", "Sanctuar", "Complex stâncos"],
      en: ["Thracian site", "Eastern Rhodopes", "Archaeology", "Sanctuary", "Rock complex"]
    },
    descriptionAdvanced: {
      de: "Perperikon ist eine monumentale antike Felsenstadt in den Ost-Rhodopen Südbulgariens und wird oft als „bulgarisches Machu Picchu“ bezeichnet. Auf einem hohen Felsgipfel gelegen, ist dieser archäologische Schatz seit über 8.000 Jahren ein heiliger Ort und begann als neolithisches Heiligtum. Am bekanntesten ist Perperikon als legendärer Schauplatz des Dionysos-Orakels, an dem Alexander der Große der Überlieferung nach eine Prophezeiung über seine Welteroberung erhielt. Die Anlage besteht aus einem riesigen Palastheiligtum, einer Akropolis und zwei Außenstädten, die alle direkt in den Fels gehauen wurden. Besucher entdecken antike Altäre, ausgeklügelte Wasserkanäle und einen großen Saal, in dem einst königliche Gastmähler stattfanden. Perperikon zeugt von der hochentwickelten Ingenieurskunst und tiefen Spiritualität der Thraker und wurde später von Römern, Byzantinern und Bulgaren genutzt – heute ist es eines der bedeutendsten archäologischen Ziele der Balkanhalbinsel.",
      hu: "Perperikon monumentális ókori sziklaváros Dél-Bulgáriában, a Keleti-Rodopék hegyvonulatában, melyet sokan „bolgár Machu Picchunak” is neveznek. A magas sziklacsúcson fekvő régészeti csoda több mint 8000 éve számít szent helynek, eredetileg újkőkori szentélyként szolgált. Leghíresebb mint a Dionüszosz-jósda legendás helyszíne, ahol a hagyomány szerint Nagy Sándor jövendölést kapott világhódító útjáról. A komplexum egy hatalmas palotaszentélyből, akropoliszból és két külvárosból áll, melyeket közvetlenül a sziklába véstek. A látogatók ősi oltárokat, kifinomult vízelvezető rendszereket és egy nagytermet fedezhetnek fel, ahol egykor királyi lakomák zajlottak. Perperikon a trákok fejlett mérnöki tudásának és mély lelki életének tanúja, amelyet később rómaiak, bizánciak és bolgárok is használtak – ma a Balkán-félsziget egyik legjelentősebb régészeti úti célja.",
      ro: "Perperikon este un oraș monumental antic săpat în stâncă, situat în Munții Rodopi de Est, în sudul Bulgariei, supranumit adesea „Machu Picchu-ul bulgar”. Așezat pe un vârf înalt de stâncă, această minune arheologică a fost un loc sacru de peste 8.000 de ani, începându-și existența ca sanctuar neolitic. Este celebru ca loc legendar al Oracolului lui Dionysos, unde, potrivit tradiției, Alexandru cel Mare ar fi primit o profeție despre cucerirea lumii. Situl cuprinde un palat-sanctuar imens, o acropolă și două orașe exterioare, toate săpate direct în stâncă. Vizitatorii pot descoperi altare antice, sisteme sofisticate de drenaj al apei și o sală mare unde se desfășurau ospețe regale. Perperikon stă mărturie inginerie avansate și vieții spirituale profunde a tracilor, fiind ulterior folosit de romani, bizantini și bulgari — astăzi este una dintre cele mai importante destinații arheologice din Peninsula Balcanică.",
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
        "A régészeti lelőhely körülbelül 5 négyzetkilométeren terül el.",
        "Perperikonon az első emberi tevékenység nyomai a Krisztus előtti 6. évezredre nyúlnak vissza.",
        "Egy 3 méter széles, kör alakú oltárt találtak itt, melyet feltehetően a Dionüszosznak szentelt bor- és tűzrítusokhoz használtak.",
        "A nagy palotát hét szinten faragták a sziklába, és több mint 50 különálló helyiséget tartalmaz.",
        "Az 5. században Perperikon fontos kora keresztény központtá vált, saját püspökséggel.",
        "A helyszínen található egy sziklába vájt hatalmas ciszterna, amely több mint 270 köbméter vizet tárolhatott.",
        "Perperikon mindössze 15 kilométerre északkeletre fekszik a mai Kardzsali várostól."
      ],
      ro: [
        "Perperikon este situat la o altitudine de 470 de metri, pe un vârf masiv de stâncă.",
        "Situl arheologic se întinde pe o suprafață de aproximativ 5 kilometri pătrați.",
        "Primele dovezi de activitate umană la Perperikon datează din mileniul al VI-lea î.Hr.",
        "Un altar circular de 3 metri lățime descoperit aici a fost folosit, cel mai probabil, pentru ritualuri de vin și foc dedicate lui Dionysos.",
        "Palatul cel mare de la Perperikon este săpat pe șapte niveluri și conține peste 50 de încăperi individuale.",
        "În secolul al V-lea d.Hr., Perperikon a devenit un important centru creștin timpuriu, cu propria episcopie.",
        "La sit există o cisternă uriașă săpată în stâncă, ce putea reține peste 270 de metri cubi de apă.",
        "Perperikon se află la doar 15 kilometri nord-est de orașul modern Kărdzhali."
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
      hu: "Vidin legismertebb erődje és Bulgária egyik legjobb állapotban fennmaradt középkori vára. Baba Vida közvetlenül a Duna partján áll, és meghatározza a város látképét. A hely határtörténelmet, védelmet és folyami kereskedelmet egyesít. A váras tartalmakhoz és a Duna-útvonalakhoz Baba Vida erős SEO-célpont.",
      ro: "Cea mai cunoscută fortăreață din Vidin și una dintre cele mai bine păstrate cetăți medievale ale Bulgariei. Baba Vida stă chiar pe malul Dunării și definește profilul orașului. Locul combină istoria de frontieră, apărarea și comerțul fluvial. Pentru paginile despre castele și traseele dunărene, Baba Vida este foarte puternic.",
      en: "Vidin's best-known fortress and one of Bulgaria's best-preserved medieval castles. Baba Vida stands right on the Danube and shapes the city skyline. It combines border history, defense, and river trade. For castle pages and Danube routes, Baba Vida is a strong SEO target."
    },
    facts: {
      de: ["Donauufer", "Vidin", "Mittelalterliche Burg", "Grenzgeschichte", "Stadtikon"],
      hu: ["Duna-part", "Vidin", "Középkori vár", "Határtörténelem", "Városi jelkép"],
      ro: ["Malul Dunării", "Vidin", "Cetate medievală", "Istorie de frontieră", "Simbol urban"],
      en: ["Danube bank", "Vidin", "Medieval castle", "Border history", "City icon"]
    },
    descriptionAdvanced: {
      de: "Baba Vida ist eine majestätische mittelalterliche Festung am südlichen Donauufer in Vidin im Nordwesten Bulgariens. Sie ist die einzige vollständig erhaltene mittelalterliche Burg des Landes und beeindruckt mit einem doppelten Mauerring sowie einem tiefen Wassergraben. Errichtet auf den Grundmauern der römischen Festung Bononia, erlebte die Burg ihre Blütezeit im 14. Jahrhundert als Residenz der Vidiner Zaren. Die Architektur prägen neun Verteidigungstürme – vier davon sind vollständig erhalten – und mächtige Steinzinnen, die einen weiten Blick über den Fluss bis nach Rumänien bieten. Im Inneren erwarten Besucher gewölbte Säle, alte Verliese und militärische Lagerräume, die jahrhundertelange Kriegswirren überstanden haben. Baba Vida ist nicht nur ein Meisterwerk mittelalterlicher Militärarchitektur, sondern auch ein kraftvolles Symbol bulgarischer Widerstandskraft und der strategischen Bedeutung der Stadt als Donau-Bollwerk.",
      hu: "Baba Vida lenyűgöző középkori erőd a Duna déli partján, a Bulgária északnyugati részén fekvő Vidinben. Ez az ország egyetlen teljesen épen maradt középkori vára, mely félelmetes védelmi rendszerrel, két koncentrikus fallal és mély vizesárokkal büszkélkedhet. A vár a Bononia néven ismert ókori római erőd alapjaira épült, és a 14. században élte virágkorát a vidini cárok fő rezidenciájaként. Építészetét kilenc védőtorony határozza meg – ezek közül négy teljesen épségben maradt –, valamint hatalmas kőormós falak, amelyekről széles kilátás nyílik a folyóra és Románia irányába. Bent a látogatók boltozatos termeket, ősi börtöncellákat és katonai raktárakat fedezhetnek fel, amelyek évszázadok háborúit állták ki. Baba Vida nemcsak a középkori katonai építészet remekműve, hanem a bolgár ellenálló képesség és Vidin folyami erődként betöltött stratégiai szerepének erős jelképe is.",
      ro: "Baba Vida este o impunătoare fortăreață medievală situată pe malul sudic al Dunării, în Vidin, nord-vestul Bulgariei. Este singurul castel medieval păstrat integral din țară, cu un sistem defensiv formidabil compus din două ziduri concentrice și un șanț adânc. Construit pe fundațiile vechii fortărețe romane Bononia, castelul a atins apogeul în secolul al XIV-lea, ca reședință principală a țarilor de Vidin. Arhitectura este definită de cele nouă turnuri de apărare, dintre care patru sunt complet păstrate, și de zidurile masive cu metereze, oferind o panoramă largă asupra fluviului până în România. În interior, vizitatorii pot explora săli boltite, vechi închisori și depozite militare care au rezistat secolelor de războaie. Baba Vida este nu doar o capodoperă a arhitecturii militare medievale, ci și un puternic simbol al rezilienței bulgare și al importanței strategice a orașului ca bastion fluvial.",
      en: "Baba Vida is a majestic medieval fortress located on the southern bank of the Danube River in Vidin, northwestern Bulgaria. It stands as the only entirely preserved medieval castle in the country, boasting a formidable defensive system of two concentric walls and a deep moat. Built on the foundations of the ancient Roman fortress of Bononia, the castle reached its prominence during the 14th century as the primary residence of the Vidin Tsars. The architecture is characterized by its nine defensive towers, four of which are fully intact, and its massive stone battlements that offer commanding views over the river toward Romania. Inside, visitors can explore vaulted halls, ancient prisons, and military storerooms that have withstood centuries of warfare. Baba Vida is not only a masterpiece of medieval military architecture but also a powerful symbol of Bulgarian resilience and the city's strategic importance as a riverine stronghold."
    },
    factsAdvanced: {
      de: [
        "Baba Vida besteht aus zwei Hauptbereichen: einer inneren Verteidigungsmauer mit 9 Türmen und einer äußeren Mauer mit eigenen Wassergräben.",
        "Der Burggraben wurde ursprünglich direkt mit Wasser aus der Donau gefüllt.",
        "Der Name „Baba Vida“ geht auf eine lokale Legende über eine bulgarische Prinzessin zurück, die das Schloss zu ihrem Schutz erbauen ließ.",
        "Der heutige Bau stammt überwiegend aus dem 13. und 14. Jahrhundert, aus der Zeit Zar Iwan Stratsimirs.",
        "Fast 200 Jahre lang war die Festung ein wichtiger Militärstützpunkt der osmanischen Donauflotte.",
        "Baba Vida diente als Kulisse für über 50 bulgarische und internationale Historienfilme.",
        "Im Innenhof der Burg befindet sich ein rekonstruiertes mittelalterliches Theater, in dem im Sommer noch heute Aufführungen stattfinden.",
        "Die Mauern bestehen größtenteils aus Kalkstein und Ziegeln, die mit einem außergewöhnlich haltbaren Mörtel verbunden sind."
      ],
      hu: [
        "Baba Vida két fő részből áll: egy belső védőfalból kilenc toronnyal és egy külső falból, saját vizesárkokkal.",
        "A várárkot eredetileg közvetlenül a Duna vizével töltötték fel.",
        "A „Baba Vida” elnevezés egy helyi legendából származik egy bolgár hercegnőről, aki saját védelmére építtette a várat.",
        "A jelenlegi épület nagyrészt a 13. és 14. századból, Iván Sztracimir cár uralkodásának idejéből származik.",
        "Közel 200 éven át az erőd az Oszmán Birodalom dunai flottájának egyik legfontosabb katonai bázisa volt.",
        "Baba Vidát több mint 50 bolgár és nemzetközi történelmi film helyszíneként használták.",
        "A vár belső udvarán helyreállított középkori színpad működik, mely ma is nyári előadásoknak ad otthont.",
        "A falak főleg mészkőből és téglából épültek, melyeket rendkívül tartós habarcs köt össze."
      ],
      ro: [
        "Baba Vida este formată din două sectoare principale: un zid interior de apărare cu 9 turnuri și un zid exterior cu propriile șanțuri.",
        "Șanțul cetății era umplut inițial cu apă adusă direct din Dunăre.",
        "Numele „Baba Vida” provine dintr-o legendă locală despre o prințesă bulgară care a construit castelul pentru a se apăra.",
        "Structura actuală datează în mare parte din secolele al XIII-lea și al XIV-lea, în timpul domniei țarului Ivan Stratsimir.",
        "Cetatea a fost o bază militară-cheie a flotei dunărene a Imperiului Otoman timp de aproape 200 de ani.",
        "Baba Vida a fost folosită ca decor în peste 50 de filme istorice bulgare și internaționale.",
        "Curtea interioară a castelului adăpostește un teatru medieval reconstruit, unde se țin spectacole vara.",
        "Zidurile castelului sunt construite în principal din calcar și cărămidă, fiind legate cu un mortar extrem de durabil."
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
