
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
        },
        descriptionAdvanced: {
            de: "Groningen, oft als 'Metropole des Nordens' bezeichnet, ist ein Schmelztiegel aus historischem Erbe und moderner Dynamik. Die reiche Geschichte der Stadt als ehemaliges Mitglied der Hanse ist in der Architektur der Innenstadt, wie den Lagerhäusern entlang der Grachten, noch heute sichtbar. Abseits der historischen Pfade hat sich Groningen als Zentrum für Innovation und Wissenschaft etabliert, angetrieben durch die renommierte Reichsuniversität Groningen. Die Stadt ist ein Paradebeispiel für niederländische Stadtplanung, die dem Fahrrad als Hauptverkehrsmittel Vorrang gibt und so eine entspannte, grüne Atmosphäre schafft. Kulturell bietet die Stadt eine beeindruckende Vielfalt von der experimentellen Kunst im Groninger Museum bis hin zu zahlreichen Festivals, die das ganze Jahr über stattfinden. Dieses Spannungsfeld zwischen alt und neu macht Groningen zu einem faszinierenden Studienobjekt für Stadtentwicklung und Kulturgeschichte (Sozialkunde K8).",
            hu: "Groningen, az 'Észak Metropolisa', a történelmi örökség és a modern dinamizmus olvasztótégelye. A Hanza-szövetség egykori tagjaként gazdag történelme a belváros építészetében, például a csatornák menti raktárépületekben ma is látható. A történelmi ösvényeken túl Groningen az innováció és a tudomány központjává vált, melyet a neves Groningeni Egyetem hajt. A város a holland várostervezés mintapéldája, amely a kerékpárt helyezi előtérbe fő közlekedési eszközként, így teremtve egy nyugodt, zöld légkört. Kulturálisan a város lenyűgöző sokszínűséget kínál a Groninger Múzeum kísérleti művészetétől a számos, egész éven át tartó fesztiválig. Ez a régi és új közötti feszültség teszi Groningent a városfejlesztés és a kultúrtörténet lenyűgöző tanulmányává (Társadalomismeret K8).",
            ro: "Groningen, adesea supranumit 'Metropola Nordului', este un creuzet unde moștenirea istorică se îmbină cu dinamismul modern. Trecutul său bogat ca fost membru al Ligii Hanseatice este încă vizibil în arhitectura centrului orașului, cum ar fi depozitele de-a lungul canalelor. Dincolo de cărările istorice, Groningen s-a afirmat ca un centru de inovație și știință, propulsat de renumita Universitate din Groningen. Orașul este un exemplu elocvent de urbanism olandez, prioritizând bicicleta ca mijloc principal de transport, ceea ce creează o atmosferă relaxată și ecologică. Din punct de vedere cultural, orașul oferă o diversitate impresionantă, de la arta experimentală din Muzeul Groninger la numeroasele festivaluri anuale. Această interacțiune între vechi și nou face din Groningen un subiect fascinant pentru studiul dezvoltării urbane și istoriei culturale (Studii Sociale K8).",
            en: ""
        },
        factsAdvanced: {
            de: ["Die Reichsuniversität Groningen wurde 1614 gegründet und ist eine der ältesten und größten Universitäten der Niederlande.", "Der Grote Markt (Großer Markt) ist seit Jahrhunderten das pulsierende Herz der Stadt.", "Groningen wird oft als 'fahrradfreundlichste Stadt der Welt' bezeichnet, mit einem Radverkehrsanteil von über 60% im Stadtzentrum.", "Das Noorderzon Performing Arts Festival zieht jährlich über 135.000 Besucher an.", "Unter dem Hauptbahnhof befindet sich einer der größten Fahrradparkplätze der Welt mit Platz für rund 10.000 Fahrräder.", "Die Provinz Groningen ist ein wichtiger Standort für die Erdgasgewinnung in Europa.", "Das Groninger Museum wurde vom italienischen Designer Alessandro Mendini entworfen und gilt als Kunstwerk für sich.", "Die Stadt hat über 200.000 Einwohner, von denen etwa ein Viertel Studenten sind."],
            hu: [
                "A Groningeni Egyetemet 1614-ben alapították, és Hollandia egyik legrégebbi és legnagyobb egyeteme.",
                "A Grote Markt (Fő tér) évszázadok óta a város lüktető szíve.",
                "Groningent gyakran a 'világ legkerékpárbarátabb városának' nevezik, a városközpontban a kerékpáros közlekedés aránya meghaladja a 60%-ot.",
                "A Noorderzon Előadóművészeti Fesztivál évente több mint 135 000 látogatót vonz.",
                "A főpályaudvar alatt található a világ egyik legnagyobb kerékpárparkolója, ahol körülbelül 10 000 kerékpár fér el.",
                "Groningen tartomány fontos földgázkitermelő hely Európában.",
                "A Groninger Múzeumot az olasz tervező, Alessandro Mendini tervezte, és önmagában is műalkotásnak számít.",
                "A városnak több mint 200 000 lakosa van, akiknek körülbelül negyede diák."
            ],
            ro: [
                "Universitatea din Groningen, fondată în 1614, este una dintre cele mai vechi universități din Olanda.",
                "Grote Markt (Piața Mare) a fost inima vibrantă a orașului de secole.",
                "Groningen este adesea numit 'cel mai prietenos oraș cu bicicletele din lume', cu o pondere a cicliștilor de peste 60% în centru.",
                "Festivalul de Arte Performative Noorderzon atrage anual peste 135.000 de vizitatori.",
                "Sub gara centrală se află una dintre cele mai mari parcări de biciclete din lume, cu spațiu pentru 10.000 de biciclete.",
                "Provincia Groningen este o locație cheie pentru extracția de gaze naturale în Europa.",
                "Muzeul Groninger, proiectat de Alessandro Mendini, este considerat o capodoperă arhitecturală în sine.",
                "Aproximativ un sfert din cei peste 200.000 de locuitori ai orașului sunt studenți."
            ],
            en: []
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
        },
        descriptionAdvanced: {
            de: "Leiden, das 'Herz von Holland', ist eine Stadt, deren intellektuelles und kulturelles Erbe tief in der europäischen Geschichte verwurzelt ist. Als Wilhelm von Oranien der Stadt als Belohnung für ihre Tapferkeit während der spanischen Belagerung eine Universität schenkte, begann Leidens goldenes Zeitalter als Zentrum des Wissens. Diese akademische Tradition durchdringt die Stadt bis heute, sichtbar in den zahlreichen Museen von Weltrang, wie dem Rijksmuseum van Oudheden mit seiner ägyptischen Sammlung. Die malerischen Grachten, die von stattlichen Herrenhäusern aus dem 17. Jahrhundert gesäumt sind, erzählen Geschichten von Reichtum und Handel. Leiden ist auch ein Zentrum der Biowissenschaften und beherbergt den größten Life-Science-Cluster der Niederlande. Die Stadt bietet eine einzigartige Lektion über die Symbiose von Geschichte, Wissenschaft und Innovation (Geschichte K7 – Das Goldene Zeitalter).",
            hu: "Leiden, a 'Hollandia szíve', egy olyan város, amelynek intellektuális és kulturális öröksége mélyen gyökerezik az európai történelemben. Amikor Orániai Vilmos a spanyol ostrom alatti bátorságért jutalmul egyetemet ajándékozott a városnak, Leiden aranykora vette kezdetét a tudás központjaként. Ez az akadémiai hagyomány a mai napig áthatja a várost, ami a számos világszínvonalú múzeumban, például a Rijksmuseum van Oudheden egyiptomi gyűjteményében is látható. A festői csatornák, amelyeket 17. századi impozáns uradalmi házak szegélyeznek, a gazdagságról és a kereskedelemről mesélnek. Leiden a biotudományok központja is, itt található Hollandia legnagyobb élettudományi klasztere. A város egyedülálló leckét ad a történelem, a tudomány és az innováció szimbiózisáról (Történelem K7 – Az aranykor).",
            ro: "Leiden, 'Inima Olandei', este un oraș a cărui moștenire intelectuală și culturală este adânc înrădăcinată în istoria europeană. Când Wilhelm de Orania a dăruit orașului o universitate ca recompensă pentru curajul său în timpul asediului spaniol, a început epoca de aur a Leidenului ca centru al cunoașterii. Această tradiție academică pătrunde orașul și astăzi, vizibilă în numeroasele muzee de talie mondială, cum ar fi Rijksmuseum van Oudheden cu colecția sa egipteană. Canalele pitorești, mărginite de case impunătoare din secolul al XVII-lea, spun povești despre bogăție și comerț. Leiden este, de asemenea, un centru al bioștiințelor, găzduind cel mai mare cluster de științe ale vieții din Olanda. Orașul oferă o lecție unică despre simbioza dintre istorie, știință și inovație (Istorie K7 – Epoca de Aur).",
            en: ""
        },
        factsAdvanced: {
            de: ["Leiden beherbergt 13 Museen, darunter das Naturalis Biodiversity Center, das 2021 zum Europäischen Museum des Jahres gekürt wurde.", "Die Pieterskerk, eine Kirche aus dem 15. Jahrhundert, ist eng mit den Pilgervätern verbunden, die von hier aus nach Amerika aufbrachen.", "Der berühmte Maler Rembrandt van Rijn wurde 1606 in Leiden geboren und erhielt hier seine erste Ausbildung.", "Der Hortus Botanicus wurde 1590 gegründet und beherbergt die erste Tulpe, die in Westeuropa gepflanzt wurde.", "Während der Belagerung von Leiden im Jahr 1574 aßen die hungernden Einwohner angeblich eine Suppe aus Zwiebeln, Pastinaken und Karotten – das heutige Nationalgericht 'Hutspot'.", "Die Stadt hat über 2.800 historische Denkmäler und Gebäude.", "Das 'Leids Ontzet' (Befreiung von Leiden) wird jedes Jahr am 3. Oktober mit großen Feierlichkeiten begangen.", "Albert Einstein war in den 1920er Jahren regelmäßig als Gastprofessor an der Universität Leiden tätig."],
            hu: [
                "Leiden 13 múzeumnak ad otthont, köztük a Naturalis Biodiverzitás Központnak, amelyet 2021-ben az Év Európai Múzeumának választottak.",
                "A 15. századi Pieterskerk templom szorosan kapcsolódik a zarándok atyákhoz, akik innen indultak Amerikába.",
                "A híres festő, Rembrandt van Rijn 1606-ban Leidenben született és itt kapta első képzését.",
                "A Hortus Botanicus-t 1590-ben alapították, és itt található az első tulipán, amelyet Nyugat-Európában ültettek.",
                "Az 1574-es leideni ostrom alatt az éhező lakosok állítólag hagymából, paszternákból és sárgarépából készült levest ettek – a mai 'Hutspot' nemzeti ételt.",
                "A városnak több mint 2800 történelmi műemléke és épülete van.",
                "A 'Leids Ontzet'-et (Leiden felszabadítása) minden év október 3-án nagy ünnepségekkel ünneplik.",
                "Albert Einstein az 1920-as években rendszeresen vendégprofesszor volt a Leideni Egyetemen."
            ],
            ro: [
                "Leiden găzduiește 13 muzee, inclusiv Centrul de Biodiversitate Naturalis, numit Muzeul European al Anului 2021.",
                "Pieterskerk, o biserică din secolul al XV-lea, este strâns legată de Părinții Pelerini, care au pornit de aici spre America.",
                "Renumitul pictor Rembrandt van Rijn s-a născut în Leiden în 1606 și a primit aici prima sa educație.",
                "Hortus Botanicus, fondat în 1590, a găzduit prima lalea plantată în Europa de Vest.",
                "În timpul asediului din 1574, locuitorii au supraviețuit mâncând 'Hutspot', un fel de mâncare devenit tradițional.",
                "Orașul are peste 2.800 de monumente și clădiri istorice protejate.",
                "Eliberarea Leidenului ('Leids Ontzet') este sărbătorită anual pe 3 octombrie cu festivități ample.",
                "Albert Einstein a fost profesor invitat la Universitatea din Leiden în anii 1920."
            ],
            en: []
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
        },
        descriptionAdvanced: {
            de: "Maastricht, an der Maas im südlichsten Zipfel der Niederlande gelegen, ist eine Stadt von außergewöhnlicher europäischer Bedeutung. Ihre Geschichte reicht bis in die Römerzeit zurück, was sie zu einer der ältesten Städte des Landes macht. Das Stadtbild ist geprägt von mittelalterlichen Gassen, Kirchen und Plätzen, die eine fast südländische Atmosphäre verströmen. Der entscheidende Moment der jüngeren Geschichte war die Unterzeichnung des Vertrags von Maastricht im Jahr 1992, ein Meilenstein für die europäische Integration. Neben seiner politischen Wichtigkeit ist Maastricht ein Zentrum für gehobene Gastronomie und Mode, was ihm den Ruf einer 'burgundischen' Stadt eingebracht hat. Die beeindruckenden Höhlen des St. Pietersbergs, ein von Menschenhand geschaffenes Labyrinth, bieten einen Einblick in die geologische und soziale Geschichte der Region, von der Mergelgewinnung bis zur Nutzung als Zufluchtsort im Krieg (Geschichte K8 – Die Europäische Union).",
            hu: "Maastricht, amely a Maas folyó partján, Hollandia legdélibb csücskében fekszik, rendkívüli európai jelentőségű város. Története a római korig nyúlik vissza, ezzel az ország egyik legrégebbi városa. A városképet középkori sikátorok, templomok és terek határozzák meg, amelyek szinte déli hangulatot árasztanak. A közelmúlt történelmének döntő pillanata az 1992-es Maastrichti Szerződés aláírása volt, amely mérföldkő az európai integrációban. Politikai fontossága mellett Maastricht a minőségi gasztronómia és divat központja, ami a 'burgundi' város hírnevét vívta ki számára. A Szent Péter-hegy lenyűgöző barlangjai, egy ember alkotta labirintus, bepillantást engednek a régió geológiai és társadalmi történetébe, a márgabányászattól a háborús menedékhelyként való használatig (Történelem K8 – Az Európai Unió).",
            ro: "Maastricht, situat pe malul râului Meuse în extremitatea sudică a Olandei, este un oraș de o importanță europeană excepțională. Istoria sa datează din epoca romană, făcându-l unul dintre cele mai vechi orașe din țară. Peisajul urban este caracterizat de alei medievale, biserici și piețe care emană o atmosferă aproape sudică. Momentul crucial al istoriei recente a fost semnarea Tratatului de la Maastricht în 1992, o piatră de hotar pentru integrarea europeană. Pe lângă importanța sa politică, Maastricht este un centru pentru gastronomie rafinată și modă, ceea ce i-a adus reputația de oraș 'burgund'. Impresionantele peșteri ale Muntelui Sf. Petru, un labirint creat de om, oferă o perspectivă asupra istoriei geologice și sociale a regiunii, de la extragerea marnă la utilizarea ca refugiu în timpul războiului (Istorie K8 – Uniunea Europeană).",
            en: ""
        },
        factsAdvanced: {
            de: ["Der Vertrag von Maastricht wurde am 7. Februar 1992 unterzeichnet und schuf die Europäische Union sowie die gemeinsame Währung, den Euro.", "Die Basilika des Heiligen Servatius beherbergt das Grab des ersten Bischofs der Niederlande und ist ein wichtiger Wallfahrtsort.", "Das Bonnefantenmuseum, mit seinem markanten, raketenförmigen Turm, zeigt eine Mischung aus alter Kunst und zeitgenössischen Werken.", "Die TEFAF (The European Fine Art Fair) in Maastricht gilt als die weltweit führende Messe für Kunst und Antiquitäten.", "Die St. Pietersberg-Höhlen umfassen über 80 Kilometer an Tunneln und Gängen.", "Maastricht war eine der ersten niederländischen Städte, die von den Alliierten im Zweiten Weltkrieg befreit wurde (September 1944).", "Die Stadt hat eine eigene anerkannte Sprache, das Maastrichter Platt, einen limburgischen Dialekt.", "Der Karneval in Maastricht ist eine dreitägige Feier, die die Stadt jedes Jahr im Februar oder März in ein farbenfrohes Fest verwandelt."],
            hu: [
                "A Maastrichti Szerződést 1992. február 7-én írták alá, létrehozva az Európai Uniót és a közös valutát, az eurót.",
                "A Szent Szerváciusz-bazilika ad otthont Hollandia első püspökének sírjának, és fontos zarándokhely.",
                "A Bonnefanten Múzeum jellegzetes, rakéta alakú tornyával a régi művészet és a kortárs alkotások keverékét mutatja be.",
                "A maastrichti TEFAF-ot (The European Fine Art Fair) a világ vezető művészeti és régiségvásárának tartják.",
                "A Szent Péter-hegy barlangjai több mint 80 kilométernyi alagutat és járatot foglalnak magukban.",
                "Maastricht volt az egyik első holland város, amelyet a szövetségesek felszabadítottak a második világháborúban (1944. szeptember).",
                "A városnak saját elismert nyelve van, a maastrichti dialektus, egy limburgi nyelvjárás.",
                "A maastrichti karnevál egy háromnapos ünnepség, amely minden év februárjában vagy márciusában színes fesztivállá változtatja a várost."
            ],
            ro: [
                "Tratatul de la Maastricht, semnat la 7 februarie 1992, a creat Uniunea Europeană și moneda comună, euro.",
                "Bazilica Sf. Servatius găzduiește mormântul primului episcop al Olandei și este un important loc de pelerinaj.",
                "Muzeul Bonnefanten, cu turnul său distinctiv în formă de rachetă, expune o combinație de artă veche și lucrări contemporane.",
                "TEFAF (Târgul European de Artă Plastică) din Maastricht este considerat cel mai important târg de artă și antichități din lume.",
                "Peșterile Muntelui Sf. Petru (St. Pietersberg) cuprind peste 80 de kilometri de tuneluri.",
                "Maastricht a fost unul dintre primele orașe olandeze eliberate de Aliați în al Doilea Război Mondial (septembrie 1944).",
                "Orașul are propria sa limbă recunoscută, dialectul limburghez din Maastricht.",
                "Carnavalul din Maastricht este o sărbătoare de trei zile care transformă orașul într-un festival plin de culoare."
            ],
            en: []
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
        },
        descriptionAdvanced: {
            de: "Das Anne-Frank-Haus an der Prinsengracht in Amsterdam ist mehr als ein Museum; es ist ein weltweites Symbol für den Widerstand gegen Unterdrückung und die schrecklichen Folgen von Verfolgung. In diesem Haus versteckten sich Anne Frank und ihre Familie über zwei Jahre lang vor den Nationalsozialisten. Das Tagebuch, das Anne in dieser Zeit schrieb, ist ein zutiefst persönliches und doch universelles Zeugnis der menschlichen Widerstandsfähigkeit im Angesicht des Schreckens. Der Besuch des Museums führt die Besucher durch die leeren Räume des Hinterhauses, eine bewusste Entscheidung von Otto Frank, dem einzigen Überlebenden der Familie, um die Leere und den Verlust zu symbolisieren. Es dient als eindringliche Mahnung an die Gefahren von Intoleranz und Rassismus und ist ein unverzichtbarer Ort des Gedenkens und der Bildung für zukünftige Generationen (Geschichte K8 – Zweiter Weltkrieg und Holocaust).",
            hu: "Az amszterdami Prinsengrachton található Anne Frank Ház több mint múzeum; egyetemes szimbóluma az elnyomás elleni küzdelemnek és az üldöztetés szörnyű következményeinek. Ebben a házban rejtőzött Anne Frank és családja több mint két éven át a nácik elől. Az Anne által ez idő alatt írt napló mélységesen személyes, mégis egyetemes tanúságtétele az emberi ellenálló képességnek a borzalmakkal szemben. A múzeumlátogatás a hátsó traktus üres szobáin vezeti végig a látogatókat, ami Otto Frank, a család egyetlen túlélőjének tudatos döntése volt, hogy a hiányt és a veszteséget szimbolizálja. Ez a hely erőteljes figyelmeztetés az intolerancia és a rasszizmus veszélyeire, és a megemlékezés és az oktatás nélkülözhetetlen helyszíne a jövő generációi számára (Történelem K8 – Második világháború és holokauszt).",
            ro: "Casa Anne Frank de pe Prinsengracht din Amsterdam este mai mult decât un muzeu; este un simbol mondial al rezistenței împotriva opresiunii și al consecințelor teribile ale persecuției. În această casă, Anne Frank și familia ei s-au ascuns de naziști timp de peste doi ani. Jurnalul pe care Anne l-a scris în această perioadă este o mărturie profund personală, dar universală, a rezistenței umane în fața groazei. Vizita la muzeu îi poartă pe vizitatori prin camerele goale ale Anexei Secrete, o decizie conștientă a lui Otto Frank, singurul supraviețuitor al familiei, pentru a simboliza golul și pierderea. Acesta servește ca un memento puternic al pericolelor intoleranței și rasismului și este un loc indispensabil de comemorare și educație pentru generațiile viitoare (Istorie K8 – Al Doilea Război Mondial și Holocaustul).",
            en: ""
        },
        factsAdvanced: {
            de: ["Das Versteck befand sich im Hinterhaus des Gebäudes, das als Lager für Otto Franks Firma Opekta diente.", "Insgesamt acht Personen versteckten sich im Hinterhaus: die Familie Frank, die Familie van Pels und der Zahnarzt Fritz Pfeffer.", "Am 4. August 1944 wurde das Versteck verraten und die Bewohner wurden deportiert.", "Otto Frank erhielt Annes Tagebuch nach dem Krieg von Miep Gies, einer der Helferinnen, und veröffentlichte es 1947.", "Das Museum wurde 1960 eröffnet und zieht jährlich über eine Million Besucher an.", "Das originale Tagebuch und andere Schriften von Anne Frank sind im Museum ausgestellt.", "Das bewegliche Bücherregal, das den Eingang zum Versteck tarnte, ist bis heute ein zentrales Element der Ausstellung.", "Die Anne Frank Stiftung engagiert sich weltweit in Bildungsprojekten gegen Vorurteile und Diskriminierung."],
            hu: [
                "A rejtekhely az épület hátsó részében volt, amely Otto Frank Opekta nevű cégének raktáraként szolgált.",
                "Összesen nyolc személy rejtőzött a hátsó épületrészben: a Frank család, a van Pels család és Fritz Pfeffer fogorvos.",
                "1944. augusztus 4-én a rejtekhelyet elárulták, és a lakókat deportálták.",
                "Otto Frank a háború után Miep Giestől, az egyik segítőtől kapta meg Anne naplóját, és 1947-ben adta ki.",
                "A múzeum 1960-ban nyílt meg, és évente több mint egymillió látogatót vonz.",
                "Az eredeti napló és Anne Frank más írásai a múzeumban vannak kiállítva.",
                "A rejtekhely bejáratát álcázó mozgatható könyvespolc a mai napig a kiállítás központi eleme.",
                "Az Anne Frank Alapítvány világszerte oktatási projektekben vesz részt az előítéletek és a diszkrimináció ellen."
            ],
            ro: [
                "Ascunzătoarea se afla în anexa din spate a clădirii companiei lui Otto Frank, Opekta.",
                "În total, opt persoane s-au ascuns în Anexa Secretă: familia Frank, familia van Pels și dentistul Fritz Pfeffer.",
                "Pe 4 august 1944, ascunzătoarea a fost trădată, iar locuitorii săi au fost deportați.",
                "Otto Frank a primit jurnalul Annei după război de la Miep Gies, una dintre protectoare, și l-a publicat în 1947.",
                "Muzeul a fost deschis în 1960 și atrage peste un milion de vizitatori anual.",
                "Jurnalul original și alte scrieri ale Annei Frank sunt expuse în muzeu.",
                "Biblioteca mobilă care masca intrarea în ascunzătoare rămâne un element central al expoziției.",
                "Fundația Anne Frank este implicată la nivel mondial în proiecte educaționale împotriva prejudecăților și discriminării."
            ],
            en: []
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
        },
        descriptionAdvanced: {
            de: "Das Rijksmuseum in Amsterdam ist nicht nur das Nationalmuseum der Niederlande, sondern auch ein prächtiges Schatzhaus der Kunst und Geschichte, das Besucher auf eine Reise vom Mittelalter bis zur Gegenwart mitnimmt. Das Herzstück der Sammlung ist die Ehrengalerie, die den Meisterwerken des niederländischen Goldenen Zeitalters gewidmet ist, gekrönt von Rembrandts monumentaler 'Nachtwache'. Das Gebäude selbst, entworfen von Pierre Cuypers, ist eine Verschmelzung von gotischen und Renaissance-Elementen und wurde nach einer zehnjährigen Renovierung im 21. Jahrhundert wiedereröffnet, um Kunst in einem atemberaubenden neuen Licht zu präsentieren. Über die Malerei hinaus beherbergt das Museum eine beeindruckende Sammlung von Skulpturen, Kunsthandwerk und historischen Artefakten, die zusammen ein lebendiges Bild der niederländischen und globalen Geschichte zeichnen (Kunstgeschichte K7 – Barockmalerei).",
            hu: "Az amszterdami Rijksmuseum nem csupán Hollandia nemzeti múzeuma, hanem a művészet és a történelem pazar kincsesháza is, amely a középkortól napjainkig tartó utazásra invitálja a látogatókat. A gyűjtemény középpontjában a Dicsőség Csarnoka áll, amelyet a holland aranykor remekműveinek szenteltek, és amelyet Rembrandt monumentális 'Éjjeli őrjárata' koronáz meg. Maga az épület, amelyet Pierre Cuypers tervezett, a gótikus és reneszánsz elemek ötvözete, és a 21. században egy tízéves felújítás után nyitották meg újra, hogy a művészetet lenyűgöző új megvilágításban mutassa be. A festményeken túl a múzeum lenyűgöző szobor-, iparművészeti és történelmi tárgygyűjteménynek ad otthont, amelyek együttesen a holland és az egyetemes történelem élénk képét rajzolják meg (Művészettörténet K7 – Barokk festészet).",
            ro: "Rijksmuseum din Amsterdam nu este doar muzeul național al Olandei, ci și o magnifică tezaur de artă și istorie, purtând vizitatorii într-o călătorie din Evul Mediu până în prezent. Piesa centrală a colecției este Galeria de Onoare, dedicată capodoperelor Epocii de Aur olandeze, încoronată de monumentalul 'Rondul de noapte' al lui Rembrandt. Clădirea însăși, proiectată de Pierre Cuypers, este o fuziune de elemente gotice și renascentiste și a fost redeschisă în secolul XXI după o renovare de zece ani pentru a prezenta arta într-o lumină nouă, uimitoare. Dincolo de pictură, muzeul găzduiește o colecție impresionantă de sculpturi, arte decorative și artefacte istorice, care împreună conturează o imagine vie a istoriei olandeze și globale (Istoria Artei K7 – Pictura barocă).",
            en: ""
        },
        factsAdvanced: {
            de: ["Die Sammlung umfasst über 1 Million Objekte, von denen rund 8.000 ausgestellt sind.", "Die Renovierung von 2003-2013 kostete 375 Millionen Euro.", "Das Museum war das erste weltweit, das seine gesamte Sammlung digital in hoher Auflösung online zur Verfügung stellte.", "'Die Nachtwache' misst beeindruckende 363 cm × 437 cm.", "Die Bibliothek des Rijksmuseums ist die größte und älteste kunsthistorische Bibliothek der Niederlande.", "Eine einzigartige Besonderheit ist der öffentliche Radweg, der durch das Gebäude führt.", "Das Museum besitzt die umfangreichste Sammlung von Vermeers Werken, darunter 'Die Milchmagd'.", "Die asiatische Sammlung wird in einem eigenen, von Cruz y Ortiz entworfenen Pavillon gezeigt."],
            hu: [
                "A gyűjtemény több mint 1 millió tárgyat tartalmaz, amelyekből mintegy 8000 van kiállítva.",
                "A 2003-2013 közötti felújítás 375 millió euróba került.",
                "A múzeum volt az első a világon, amely teljes gyűjteményét digitálisan, nagy felbontásban tette elérhetővé online.",
                "Az 'Éjjeli őrjárat' mérete lenyűgöző, 363 cm × 437 cm.",
                "A Rijksmuseum könyvtára Hollandia legnagyobb és legrégebbi művészettörténeti könyvtára.",
                "Egyedülálló különlegesség az épületen átvezető nyilvános kerékpárút.",
                "A múzeum birtokolja Vermeer műveinek legátfogóbb gyűjteményét, köztük 'A tejeslány' címűt.",
                "Az ázsiai gyűjteményt egy külön, Cruz y Ortiz által tervezett pavilonban mutatja be."
            ],
            ro: [
                "Colecția muzeului cuprinde peste 1 milion de obiecte, dintre care aproximativ 8.000 sunt expuse.",
                "Renovarea din 2003-2013 a costat 375 de milioane de euro.",
                "A fost primul muzeu din lume care și-a pus la dispoziție întreaga colecție online, la rezoluție înaltă.",
                "'Rondul de noapte' măsoară impresionant 363 cm × 437 cm.",
                "Biblioteca Rijksmuseum este cea mai mare și mai veche bibliotecă de istoria artei din Olanda.",
                "O caracteristică unică este pista de biciclete publică care trece prin clădirea muzeului.",
                "Muzeul deține cea mai cuprinzătoare colecție de lucrări ale lui Vermeer, inclusiv 'Lăptăreasa'.",
                "Colecția asiatică este expusă într-un pavilion separat, proiectat de Cruz y Ortiz."
            ],
            en: []
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
        },
        descriptionAdvanced: {
            de: "",
            hu: "A Watt-tenger, amely Hollandia, Németország és Dánia partjai mentén húzódik, a világ legnagyobb összefüggő árapály-síksági rendszere és az UNESCO Világörökség része. Ez a dinamikus táj folyamatosan változik az apály és a dagály ritmusára, hatalmas iszapos és homokos területeket tárva fel, majd elárasztva azokat. Ez a rendkívül termékeny ökoszisztéma létfontosságú pihenő- és táplálkozóhely a vándormadarak milliói számára a kelet-atlanti vonulási útvonalon. Az apálykor végzett 'iszaptúrázás' (Wadlopen) egyedülálló élmény, amely során az emberek tapasztalt vezetőkkel átsétálhatnak a tengerfenéken a szárazföld és a Watt-szigetek között. A Watt-tenger egyedülálló példája a természet erejének és a geológiai folyamatoknak, és kulcsfontosságú terület a biológiai sokféleség megőrzése szempontjából (Földrajz K7 – Partvidéki formák).",
            ro: "Marea Wadden, care se întinde de-a lungul coastelor Olandei, Germaniei și Danemarcei, este cel mai mare sistem neîntrerupt de câmpii intertidale din lume și un sit al Patrimoniului Mondial UNESCO. Acest peisaj dinamic se schimbă constant odată cu ritmul fluxului și refluxului, expunând și apoi inundând vaste zone de nămol și nisip. Acest ecosistem extrem de productiv este o oprire vitală și o zonă de hrănire pentru milioane de păsări migratoare de-a lungul Căii de Zbor Est-Atlantice. 'Drumețiile pe nămol' (Wadlopen) la reflux sunt o experiență unică, permițând oamenilor să meargă pe fundul mării între continent și Insulele Wadden cu ghizi experimentați. Marea Wadden este un exemplu unic al puterii naturii și al proceselor geologice și o zonă crucială pentru conservarea biodiversității (Geografie K7 – Forme de relief costier).",
            en: ""
        },
        factsAdvanced: {
            de: [],
            hu: [
                "A Watt-tenger területe körülbelül 11 500 km².",
                "Évente több mint 10-12 millió vándormadár használja a területet pihenő- és táplálkozóhelyként.",
                "A területen több mint 10 000 állat- és növényfaj él, beleértve a borjúfókákat és a disznódelfineket.",
                "Az iszaptúrázás csak képzett vezetővel engedélyezett a gyorsan változó árapály miatt.",
                "A holland Watt-szigetek (Texel, Vlieland, Terschelling, Ameland és Schiermonnikoog) védelmet nyújtanak a szárazföldnek a viharokkal szemben.",
                "A területet 2009-ben vették fel az UNESCO Világörökségi listájára.",
                "A tengerfenék iszapja rendkívül gazdag férgekben, kagylókban és rákokban, amelyek a madarak fő táplálékforrását jelentik.",
                "A klímaváltozás és a tengerszint-emelkedés komoly veszélyt jelent a Watt-tenger egyedülálló ökoszisztémájára."
            ],
            ro: [
                "Marea Wadden acoperă o suprafață de aproximativ 11.500 km².",
                "Peste 10-12 milioane de păsări migratoare folosesc zona în fiecare an ca loc de popas și hrănire.",
                "Zona găzduiește peste 10.000 de specii de plante și animale, inclusiv foci comune și marsuini.",
                "Drumețiile pe nămol sunt permise doar cu un ghid autorizat din cauza mareelor care se schimbă rapid.",
                "Insulele Wadden olandeze (Texel, Vlieland etc.) protejează continentul de furtuni.",
                "A fost inclus în Patrimoniul Mondial UNESCO în 2009.",
                "Nămolul intertidal este extrem de bogat în viermi, scoici și crustacee, principala sursă de hrană pentru păsări.",
                "Schimbările climatice și creșterea nivelului mării reprezintă amenințări grave pentru acest ecosistem unic."
            ],
            en: []
        }
    }
    // 29 more nature sites...
];
