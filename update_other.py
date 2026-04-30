
import os

content = r'''import { POI } from './poi';

export const spainWirtschaftLebenAllPoi: POI[] = [
  {
    id: 'es-port-algeciras',
    type: 'port',
    parent: 'ES-AN',
    coords: [-5.441, 36.133],
    name: { de: 'Hafen von Algeciras', en: 'Port of Algeciras', hu: 'Algecirasi kikötő', ro: 'Portul Algeciras' },
    description: {
      de: 'Einer der größten und verkehrsreichsten Häfen Europas, ein wichtiger Knotenpunkt für den globalen Seehandel.',
      en: 'One of the largest and busiest ports in Europe, a key hub for global maritime trade.',
      hu: 'Európa egyik legnagyobb és legforgalmasabb kikötője, a globális tengeri kereskedelem kulcsfontosságú csomópontja.',
      ro: 'Unul dintre cele mai mari și mai aglomerate porturi din Europa, un centru cheie pentru comerțul maritim global.',
    },
    descriptionAdvanced: {
      de: 'Der Hafen von Algeciras in der Bucht von Gibraltar ist der größte Hafen Spaniens und einer der verkehrsreichsten im Mittelmeerraum. Er dient als primärer Umschlagplatz für Container, die zwischen Asien, Europa und Afrika transportiert werden. Seine strategische Lage an der Straße von Gibraltar macht ihn zu einem unverzichtbaren Akteur in den globalen Lieferketten. Jährlich werden hier über 100 Millionen Tonnen Fracht und fast 5 Millionen TEU-Container umgeschlagen. Der Hafen ist auch ein bedeutender Passagierhafen, der das europäische Festland mit Nordafrika verbindet. Physik K7 – Logistik und globale Strömungen.',
      en: 'The Port of Algeciras, located in the Bay of Gibraltar, is the largest port in Spain and one of the busiest in the Mediterranean. It serves as a primary transshipment hub for containers moving between Asia, Europe, and Africa. Its strategic location at the Strait of Gibraltar makes it an indispensable player in global supply chains. Over 100 million tons of cargo and nearly 5 million TEUs are handled here annually. The port is also a major passenger port, connecting mainland Europe with North Africa. Physics K7 – Logistics and Global Flows.',
      hu: 'Az Algecirasi-öbölben található kikötő Spanyolország legnagyobb és a Földközi-tenger egyik legforgalmasabb kikötője. Elsődleges átrakodóközpontként szolgál az Ázsia, Európa és Afrika között mozgó konténerek számára. Stratégiai elhelyezkedése a Gibraltári-szorosnál nélkülözhetetlen szereplővé teszi a globális ellátási láncokban. Évente több mint 100 millió tonna árut és közel 5 millió TEU konténert kezelnek itt. A kikötő emellett jelentős személyforgalmi kikötő is, amely összeköti az európai kontinentést Észak-Afrikával. Fizika K7 – Logisztika és globális áramlások.',
      ro: 'Portul Algeciras, situat în Golful Gibraltar, este cel mai mare port din Spania și unul dintre cele mai aglomerate din Marea Mediterană. Acesta servește ca un centru primar de transbordare pentru containerele care se deplasează între Asia, Europa și Africa. Locația sa strategică la Strâmtoarea Gibraltar îl face un jucător indispensabil în lanțurile de aprovizionare globale. Peste 100 de milioane de tone de marfă și aproape 5 milioane de TEU-uri sunt manipulate aici anual. Portul este, de asemenea, un important port de pasageri, care leagă Europa continentală de Africa de Nord. Fizică K7 – Logistica și fluxurile globale.',
    },
    facts: {
      de: ['Größter Hafen Spaniens nach Tonnage.', 'Wichtiger Umschlagplatz für den Ost-West-Handel.', 'Verbindet Europa und Afrika.', 'Jährlich über 100 Millionen Tonnen Fracht.', 'Moderne Terminals für Super-Post-Panamax-Schiffe.', 'Bedeutender Arbeitgeber in Andalusien.'],
      en: ['Largest port in Spain by tonnage.', 'Key transshipment hub for East-West trade routes.', 'Connects Europe and Africa.', 'Over 100 million tons of cargo annually.', 'Modern terminals capable of handling Super-Post-Panamax ships.', 'Major employer in Andalusia.'],
      hu: ['Spanyolország legnagyobb kikötője tonnában mérve.', 'Fontos átrakodóközpont a kelet-nyugati kereskedelmi útvonalakon.', 'Összeköti Európát és Afrikát.', 'Évente több mint 100 millió tonna áru.', 'Modern terminálok, amelyek Super-Post-Panamax hajókat is tudnak fogadni.', 'Jelentős munkaadó Andalúziában.'],
      ro: ['Cel mai mare port din Spania după tonaj.', 'Nod cheie de transbordare pentru rutele comerciale Est-Vest.', 'Conectează Europa și Africa.', 'Peste 100 de milioane de tone de marfă anual.', 'Terminale moderne capabile să gestioneze nave Super-Post-Panamax.', 'Angajator major în Andaluzia.'],
    },
    factsAdvanced: {
      de: ['Der Hafen ist tief genug, um die größten Containerschiffe der Welt aufzunehmen.', 'Er ist ein wichtiger Punkt für den Import von Erdgas nach Spanien.', 'Die Fährverbindungen nach Tanger-Med in Marokko sind einige der verkehrsreichsten der Welt.', 'Der Hafen investiert stark in Automatisierung und Nachhaltigkeit.', 'Seine Gründung geht auf das römische Portus Albus zurück.'],
      en: ['The port has a natural deep draft capable of accommodating the world\'s largest container ships.', 'It is a key entry point for natural gas into Spain.', 'Ferry services to Tanger-Med in Morocco are among the busiest in the world.', 'The port is heavily investing in automation and sustainability.', 'Its origins date back to the Roman port of Portus Albus.'],
      hu: ['A kikötő természetes mélyvízi adottságokkal rendelkezik, így a világ legnagyobb konténerhajóit is képes fogadni.', 'Spanyolország egyik legfontosabb földgázimport-pontja.', 'A marokkói Tanger-Medbe irányuló kompjáratok a világ legforgalmasabbjai közé tartoznak.', 'A kikötő jelentős összegeket fektet az automatizálásba és a fenntarthatóságba.', 'Eredete a római Portus Albus kikötőig nyúlik vissza.'],
      ro: ['Portul are un pescaj natural adânc, capabil să primească cele mai mari nave de containere din lume.', 'Este un punct cheie de intrare pentru gazele naturale în Spania.', 'Serviciile de feribot către Tanger-Med în Maroc sunt printre cele mai aglomerate din lume.', 'Portul investește masiv în automatizare și sustenabilitate.', 'Originile sale datează de la portul roman Portus Albus.'],
    },
    faq: {
      de: { 'Was ist die Hauptfunktion des Hafens von Algeciras?': 'Er ist hauptsächlich ein Umschlaghafen.', 'Wie viele Passagiere nutzen den Hafen jährlich?': 'Über 6 Millionen Passagiere.' },
      en: { 'What is the main function of the Port of Algeciras?': 'It is primarily a transshipment port.', 'How many passengers use the port annually?': 'Over 6 million passengers.' },
      hu: { 'Mi az Algecirasi kikötő fő funkciója?': 'Elsősorban átrakodókikötő, ahol az interkontinentális útvonalakon közlekedő nagy hajók és a regionális célállomásokra tartó kisebb hajók között rakodják át a rakományt.', 'Hány utas használja a kikötőt évente?': 'A világjárvány előtt több mint 6 millió utas használta a kikötőt, főként Marokkóba utazva.' },
      ro: { 'Care este funcția principală a Portului Algeciras?': 'Este în principal un port de transbordare.', 'Câți pasageri folosesc portul anual?': 'Peste 6 milioane de pasageri.' },
    },
  },
  {
    id: 'es-agricultura-rioja',
    type: 'agriculture',
    parent: 'ES-RI',
    coords: [-2.66, 42.4],
    name: { de: 'Weinregion La Rioja', en: 'La Rioja Wine Region', hu: 'La Rioja borvidék', ro: 'Regiunea viticolă La Rioja' },
    description: {
      de: 'Eine der berühmtesten Weinregionen der Welt, bekannt für ihre hochwertigen Tempranillo-Rotweine.',
      en: 'One of the most famous wine regions in the world, renowned for its high-quality Tempranillo red wines.',
      hu: 'A világ egyik leghíresebb borvidéke, amely kiváló minőségű Tempranillo vörösborairól ismert.',
      ro: 'Una dintre cele mai faimoase regiuni viticole din lume, renumită pentru vinurile sale roșii de înaltă calitate din soiul Tempranillo.',
    },
    descriptionAdvanced: {
      de: 'Die Weinregion La Rioja, die sich hauptsächlich entlang des Ebro-Flusses erstreckt, ist Spaniens renommiertestes Weinanbaugebiet. Die Region hat den höchsten spanischen Qualitätsstatus (DOCa) und ist weltweit für ihre Weine bekannt, die hauptsächlich aus der Tempranillo-Traube gekeltert werden. Die Weinherstellung hier ist eine Mischung aus Tradition und moderner Technologie, wobei viele Bodegas (Weingüter) Eichenfässer für die Reifung verwenden, was den Weinen ihre charakteristischen Vanille- und Gewürznoten verleiht. Die Landschaft ist geprägt von sanften Hügeln, die mit Weinreben bedeckt sind, und historischen Dörfern, was sie auch zu einem beliebten Ziel für den Weintourismus macht. Landwirtschaft K6 – Kulturpflanzen und Terroir.',
      en: 'The La Rioja wine region, stretching primarily along the Ebro River, is Spain\'s most prestigious wine-producing area. The region holds the highest Spanish quality status (DOCa) and is globally renowned for its wines, made predominantly from the Tempranillo grape. Winemaking here is a blend of tradition and modern technology, with many bodegas (wineries) using oak barrel aging, which imparts the wines\' characteristic vanilla and spice notes. The landscape is characterized by rolling hills covered in vineyards and historic villages, making it a popular destination for wine tourism as well. Agriculture K6 – Crops and Terroir.',
      hu: 'A La Rioja borvidék Spanyolország és talán az egész világ egyik legelismertebb bortermelő vidéke, amely az Ebro folyó mentén terül el. A régió büszkélkedhet a legmagasabb minőségi besorolással (DOCa), ami szigorú szabályozást és kiváló minőséget garantál. A bortermelés alapját a Tempranillo szőlőfajta adja, amelyből testes, elegáns és hosszú érlelési potenciállal rendelkező vörösborokat készítenek. A helyi pincészetek, vagyis bodegák, gyakran ötvözik a több évszázados tradíciókat a legmodernebb technológiával, az érleléshez használt amerikai és francia tölgyfahordók pedig egyedi vaníliás karaktert kölcsönöznek a nemes italoknak. A vidék tájai lélegzetelállítóak: szőlőtőkékkel borított domboldalak, középkori falvak és ultramodern építészetű borászatok váltják egymást. A borturizmus a helyi gazdaság létfontosságú része, vonzva az ínyenceket a világ minden tájáról. Mezőgazdaság K6 – Kultúrnövények és terroir.',
      ro: 'Regiunea viticolă La Rioja este cea mai prestigioasă zonă producătoare de vin din Spania, renumită pentru vinurile roșii de calitate superioară.',
    },
    facts: {
      de: ['Spaniens berühmteste Weinregion.', 'Haupttraube ist Tempranillo.', 'Hält den höchsten Qualitätsstatus (DOCa).'],
      en: ['Spain\'s most famous wine region.', 'Main grape variety is Tempranillo.', 'Holds the highest quality designation (DOCa).'],
      hu: ['Spanyolország leghíresebb borvidéke.', 'Fő szőlőfajtája a Tempranillo.', 'A legmagasabb minőségi besorolással (DOCa) rendelkezik.', 'Három alrégióra oszlik: Rioja Alta, Rioja Alavesa és Rioja Oriental.', 'Híres a tölgyfahordós érlelési folyamatáról.', 'Több mint 600 pincészet (bodega) otthona.'],
      ro: ['Cea mai faimoasă regiune viticolă din Spania.', 'Soiul principal este Tempranillo.', 'Statut DOCa.'],
    },
    factsAdvanced: {
      de: ['Die Weinherstellung geht auf die Römerzeit zurück.', 'Über 600 Weingüter in der Region.'],
      en: ['Winemaking dates back to Roman times.', 'Over 600 wineries in the region.'],
      hu: ['A bortermelés gyökerei a római időkig nyúlnak vissza a térségben.', 'A 19. századi filoxéravész idején sok francia borász települt át ide.', 'A Crianza, Reserva és Gran Reserva címkék az érlelési időt mutatják.', 'Haro városában minden évben megrendezik a híres Borcsatát.', 'A szőlőültetvények jelentős része 300-800 méter magasan fekszik.', 'A régió klímája az atlanti és a mediterrán hatások keveréke.', 'Számos borászatot világhírű építészek, például Frank Gehry terveztek.'],
      ro: ['Tradiție din epoca romană.', 'Peste 600 de crame.'],
    },
    faq: {
      de: { 'Was ist die Haupttraube?': 'Tempranillo.' },
      en: { 'What is the main grape?': 'Tempranillo.' },
      hu: { 'Melyik a legfontosabb szőlőfajta Riojában?': 'A Tempranillo a legfontosabb, de használnak Graciano-t és Mazuelo-t is.', 'Mit jelent a DOCa besorolás?': 'Ez a legmagasabb szintű minőségi kategória a spanyol borjogban.' },
      ro: { 'Care este soiul principal?': 'Tempranillo.' },
    },
  },
  {
    id: 'es-industry-inditex',
    type: 'industry',
    parent: 'ES-GA',
    coords: [-8.407, 43.336],
    name: { de: 'Inditex Hauptsitz (Zara)', en: 'Inditex Headquarters (Zara)', hu: 'Inditex központ (Zara)', ro: 'Sediul Inditex (Zara)' },
    description: {
      de: 'Der Hauptsitz eines der weltweit größten Modekonzerne, bekannt für seine Fast-Fashion-Marke Zara.',
      en: 'The headquarters of one of the world\'s largest fashion conglomerates, famous for its fast-fashion brand Zara.',
      hu: 'A világ egyik legnagyobb divat-konglomerátumának székhelye, amely a Zara fast-fashion márkájáról híres.',
      ro: 'Sediul unuia dintre cele mai mari conglomerate de modă din lume, faimos pentru marca sa de fast-fashion Zara.',
    },
    descriptionAdvanced: {
      de: 'In Arteixo, einer kleinen Stadt in Galicien, befindet sich der Hauptsitz von Inditex, dem Mutterkonzern von Marken wie Zara, Pull&Bear und Massimo Dutti. Dieser Komplex ist das Nervenzentrum eines globalen Modeimperiums, das die \"Fast Fashion\"-Industrie revolutioniert hat.',
      en: 'Located in Arteixo, a small town in Galicia, is the headquarters of Inditex, the parent company of brands like Zara, Pull&Bear, and Massimo Dutti. This complex is the nerve center of a global fashion empire that has revolutionized the \"fast fashion\" industry.',
      hu: 'Az Inditex galíciai, Arteixóban található központja a globális divatipar egyik legbefolyásosabb helyszíne. Itt található a Zara, a Pull&Bear, a Massimo Dutti és több más világszerte ismert márka anyavállalatának agytrösztje. A cég forradalmasította a \"fast fashion\" modellt, amelynek lényege a rendkívül gyors reakcióidő: a tervezőasztaltól az üzletek polcaiig mindössze néhány hét alatt jut el egy új kollekció. Ez a hatékonyság a központosított logisztikának és a vertikálisan integrált gyártási folyamatoknak köszönhető. A hatalmas komplexum nemcsak irodákat, hanem saját tervezőstúdiókat, prototípus-gyárakat és automatizált elosztóközpontokat is magában foglal, ahonnan heti kétszer szállítanak árut a világ minden pontjára. Amancio Ortega alapító öröksége meghatározza a régió gazdaságát, Galíciát a nemzetközi divatvilág térképére helyezve. Gazdaságtan K8 – Globális értékláncok.',
      ro: 'Situat în Arteixo, Galicia, sediul Inditex este inima unui imperiu global al modei.',
    },
    facts: {
      de: ['Größter Modehändler der Welt.', 'Gegründet von Amancio Ortega.', 'Hauptmarke ist Zara.'],
      en: ['World\'s largest fashion retailer.', 'Founded by Amancio Ortega.', 'Flagship brand is Zara.'],
      hu: ['A világ legnagyobb ruházati kiskereskedője.', 'Amancio Ortega alapította a céget.', 'Zászlóshajó márkája a Zara.', 'Több mint 7000 üzletük van világszerte.', 'A fast fashion üzleti modell úttörője.', 'Székhelye a galíciai Arteixóban található.'],
      ro: ['Cel mai mare retailer de modă.', 'Fondat de Amancio Ortega.', 'Zara este marca principală.'],
    },
    factsAdvanced: {
      de: ['Nutzt RFID-Technologie für den Bestand.', 'Erste Zara-Filiale 1975 eröffnet.'],
      en: ['Uses RFID technology for inventory.', 'First Zara store opened in 1975.'],
      hu: ['A vállalat RFID technológiát használ a készletek valós idejű követésére.', 'A ruhák jelentős részét még mindig Spanyolországban és a környező országokban gyártják.', 'A Zara név eredetileg Zorba lett volna, a híres film után.', 'Amancio Ortega a világ egyik leggazdagabb embere, de kerüli a nyilvánosságot.', 'A központban minden márkának külön épülete és logisztikai bázisa van.', 'Évente több mint 1,5 milliárd ruhadarabot értékesítenek.', 'A cég elkötelezett a fenntarthatóbb divat és az újrahasznosítás mellett.'],
      ro: ['Tehnologie RFID.', 'Primul magazin în 1975.'],
    },
    faq: {
      de: { 'Wer gründete Inditex?': 'Amancio Ortega.' },
      en: { 'Who founded Inditex?': 'Amancio Ortega.' },
      hu: { 'Mely márkák tartoznak az Inditex csoporthoz?': 'Hozzájuk tartozik a Zara, Pull&Bear, Massimo Dutti, Bershka, Stradivarius, Oysho és a Zara Home.', 'Hol van a cég központja?': 'A spanyolországi Galíciában, Arteixo városában.' },
      ro: { 'Cine a fondat Inditex?': 'Amancio Ortega.' },
    },
  },
  {
    id: 'es-agricultura-manchego',
    type: 'agriculture',
    parent: 'ES-CM',
    coords: [-3.0, 39.5],
    name: { de: 'Manchego-Käse-Region', en: 'Manchego Cheese Region', hu: 'Manchego sajt régió', ro: 'Regiunea brânzei Manchego' },
    description: {
      de: 'Die Heimat des weltberühmten Manchego-Käses, der aus der Milch von Manchega-Schafen hergestellt wird.',
      en: 'The home of the world-famous Manchego cheese, made from the milk of Manchega sheep.',
      hu: 'A világhírű Manchego sajt hazája, amelyet a La Mancha régióban élő Manchega juhok tejéből készítenek.',
      ro: 'Patria faimoasei brânze Manchego, făcută din laptele oilor Manchega.',
    },
    descriptionAdvanced: {
      de: 'Die trockene Ebene von La Mancha ist die geschützte Herkunftsregion (D.O.P.) für Manchego-Käse. Er wird nur aus der Milch der Manchega-Schafrasse hergestellt.',
      en: 'The arid plain of La Mancha is the protected region (D.O.P.) for Manchego cheese, made exclusively from Manchega sheep milk.',
      hu: 'Kasztília-La Mancha végtelen síkságai nemcsak Don Quijote kalandjainak színterei, hanem Spanyolország legkarakteresebb sajtjának, a Manchegónak a bölcsője is. Ez a kemény juhsajt kizárólag az őshonos Manchega juhfajta tejéből készülhet, amely kiválóan alkalmazkodott a régió szélsőséges, száraz klímájához. A sajt oltalom alatt álló eredetmegjelöléssel (D.O.P.) rendelkezik, ami szavatolja az autentikus előállítási módot. A Manchego íze a rövid érlelésű (fresco) enyhe, krémes aromájától a hosszú ideig érlelt (viejo) diós, pikáns és enyhén csípős karakteréig terjed. Külső megjelenése is jellegzetes: a héján látható cikk-cakk minta a hagyományosan használt fonott fűformák (pleitas) emlékét őrzi. A sajtkészítés ezen a területen évszázadok óta a helyi kultúra és gazdaság tartóoszlopa, elválaszthatatlan része a spanyol gasztronómiának és a mediterrán életmódnak. Mezőgazdaság K5 – Állattenyésztés és termékek.',
      ro: 'Câmpia La Mancha este regiunea protejată pentru brânza Manchego.',
    },
    facts: {
      de: ['100% Manchega-Schafmilch.', 'D.O.P. Siegel.', 'Zickzack-Muster auf der Rinde.'],
      en: ['100% Manchega sheep milk.', 'D.O.P. designation.', 'Zigzag pattern on the rind.'],
      hu: ['Kizárólag Manchega juhok tejéből készülhet.', 'Oltalom alatt álló eredetmegjelöléssel (D.O.P.) rendelkezik.', 'A héján jellegzetes cikk-cakk minta látható.', 'Az érlelési idő 60 naptól akár 2 évig is tarthat.', 'Diós és enyhén pikáns ízvilág jellemzi.', 'Már a római korban is készítettek itt hasonló sajtokat.'],
      ro: ['Lapte de oaie Manchega.', 'Statut D.O.P.', 'Model pe coajă.'],
    },
    factsAdvanced: {
      de: ['Don Quijote erwähnt den Käse.', 'Über 700 registrierte Farmen.'],
      en: ['Mentioned in Don Quixote.', 'Over 700 registered farms.'],
      hu: ['Cervantes világhírű regényében, a Don Quijote-ban is említést tesznek erről a sajtról.', 'Az ehetetlen héjat hagyományosan olívaolajjal dörzsölik be a tartósítás érdekében.', 'A valódi Manchego sajt speciális kazein-emblémával van ellátva az azonosíthatóságért.', 'Több mint 700 regisztrált gazdaság foglalkozik a speciális juhfajta tenyésztésével.', 'A tej magas zsír- és fehérjetartalma adja a sajt gazdag textúráját.', 'A régióban a sajtkészítés technológiája apáról fiúra száll a családokban.'],
      ro: ['Menționată în Don Quijote.', 'Peste 700 de ferme.'],
    },
    faq: {
      de: { 'Ist es echter Manchego?': 'Nur mit D.O.P. Siegel.' },
      en: { 'Is it real Manchego?': 'Only with D.O.P. label.' },
      hu: { 'Hogyan fogyasztják leggyakrabban a Manchego sajtot?': 'Általában vékony szeletekre vágva, tapasként, gyakran birsalmasajttal (membrillo) párosítva.', 'Minden spanyol juhsajt Manchego?': 'Nem, csak a La Mancha régióban, meghatározott szabályok szerint készülteket hívhatjuk így.' },
      ro: { 'Este autentică?': 'Doar cu sigiliu D.O.P.' },
    },
  },
  {
    id: 'es-port-valencia',
    type: 'port',
    parent: 'ES-VC',
    coords: [-0.306, 39.453],
    name: { de: 'Hafen von Valencia', en: 'Port of Valencia', hu: 'Valenciai kikötő', ro: 'Portul Valencia' },
    description: {
      de: 'Der verkehrsreichste Containerhafen im Mittelmeerraum und ein wichtiger Wirtschaftsmotor für Spanien.',
      en: 'The busiest container port in the Mediterranean and a major economic engine for Spain.',
      hu: 'A Földközi-tenger legforgalmasabb konténerkikötője és Spanyolország egyik legfontosabb gazdasági motorja.',
      ro: 'Cel mai aglomerat port de containere din Marea Mediterană și un motor economic major pentru Spania.',
    },
    descriptionAdvanced: {
      de: 'Der Hafen von Valencia ist Spaniens wichtigstes maritimes Tor zum Mittelmeer...',
      en: 'The Port of Valencia is Spain\'s leading maritime gateway to the Mediterranean...',
      hu: 'A Valenciai kikötő nem csupán Spanyolország legnagyobb konténerkikötője, hanem az egész Földközi-tengeri térség logisztikai központja is. Stratégiai elhelyezkedése a Gibraltári-szoros és a Szuezi-csatorna közötti útvonalon elengedhetetlenné teszi a globális kereskedelem számára. A hatalmas komplexum több ezer hektáron terül el, és olyan modern terminálokkal rendelkezik, amelyek képesek a világ legnagyobb, több mint 20 000 konténert szállító hajóinak fogadására is. A kikötő jelentősége túlmutat az áruszállításon: Valencia és Madrid közötti vasúti folyosó révén a spanyol belső területek elsődleges ellátási útvonala. Az innováció területén is élen jár, hiszen célul tűzte ki, hogy 2030-ra teljesen karbonsemlegessé válik, hidrogén alapú technológiák bevezetésével. A városi látkép részét képező monumentális daruk a régió gazdasági erejének és dinamizmusának szimbólumai. Gazdaságtan K7 – Logisztika.',
      ro: 'Portul din Valencia este cea mai importantă poartă maritimă a Spaniei în Marea Mediterană.',
    },
    facts: {
      de: ['Größter Containerhafen am Mittelmeer.', 'Wichtigstes Tor für den spanischen Außenhandel.'],
      en: ['Largest container port in the Mediterranean.', 'Key gateway for Spanish foreign trade.'],
      hu: ['A Földközi-tenger legforgalmasabb konténerkikötője.', 'Európa egyik legfontosabb logisztikai csomópontja.', 'Több mint 1000 kikötővel áll kapcsolatban világszerte.', 'Évente több mint 5 millió TEU konténert kezelnek itt.', 'A spanyol GDP jelentős részéhez járul hozzá közvetve.', '2007-ben és 2010-ben az America\'s Cup vitorlásversenynek is helyt adott.'],
      ro: ['Cel mai mare port de containere.', 'Poartă cheie pentru comerțul exterior.'],
    },
    factsAdvanced: {
      de: ['Umschlag von over 5 Millionen TEU.', 'Ehrgeizige Umweltziele bis 2030.'],
      en: ['Handles over 5 million TEUs.', 'Ambitious environmental goals by 2030.'],
      hu: ['A kikötő területe közvetlenül és közvetve több mint 75 000 munkahelyet tart fenn.', 'A \'Valenciaport 2030\' stratégia a teljes dekarbonizációt célozza meg.', 'Saját vasúti hálózata közvetlen összeköttetést biztosít Madrid ipari övezeteivel.', 'A luxus tengerjáró hajók egyik legnépszerűbb mediterrán kikötőhelye.', 'Az exportált áruk között kiemelkedő a spanyol kerámia és az autóipar termékei.', 'A kikötői hatóság folyamatosan fejleszti a digitalizációt és a mesterséges intelligencia alapú irányítást.'],
      ro: ['Peste 5 milioane de containere.', 'Zero emisii până în 2030.'],
    },
    faq: {
      de: { 'Wie wichtig ist der Hafen?': 'Sehr wichtig für das BIP.' },
      en: { 'How important is the port?': 'Crucial for the GDP.' },
      hu: { 'Milyen árukat kezelnek itt a legtöbbet?': 'Főként konténeres árukat, gépjárműveket és mezőgazdasági termékeket exportálnak és importálnak.', 'Látogatható a kikötő területe?': 'Az ipari zónák zárva vannak, de a modern kikötői negyed és a Marina nyitva áll a turisták előtt.' },
      ro: { 'Cât de important este portul?': 'Crucial pentru PIB.' },
    },
  },
  {
    id: 'es-zoo-madrid',
    type: 'animal-habitat',
    parent: 'ES-MD',
    coords: [-3.763, 40.409],
    name: { de: 'Zoo Aquarium Madrid', en: 'Zoo Aquarium Madrid', hu: 'Madridi Állatkert és Akvárium', ro: 'Grădina Zoologică și Acvariul din Madrid' },
    description: {
      de: 'Ein großer Zoo und ein Aquarium im Park Casa de Campo, der eine große Vielfalt an Tieren aus aller Welt beherbergt.',
      en: 'A large zoo and aquarium located in the Casa de Campo park, home to a wide variety of animals from around the world.',
      hu: 'A Casa de Campo parkban található nagy állatkert és akvárium, amely a világ minden tájáról származó állatok széles választékának ad otthont.',
      ro: 'O grădină zoologică mare și un acvariu situate în parcul Casa de Campo, care găzduiesc o mare varietate de animale din întreaga lume.',
    },
    descriptionAdvanced: {
      de: 'Der Zoo Aquarium Madrid ist eine der wichtigsten zoologischen Einrichtungen Spaniens...',
      en: 'The Zoo Aquarium Madrid is one of Spain\'s most important zoological institutions...',
      hu: 'A Madridi Állatkert és Akvárium a spanyol főváros tüdejeként ismert Casa de Campo parkban található, és a világ egyik legrégebbi, folyamatosan működő állatkertje. Ez az intézmény különleges, mivel egy helyen egyesít egy hagyományos állatkertet, egy modern akváriumot, egy delfináriumot és egy ragadozómadár-röpdét. A több mint 20 hektáros területen az öt kontinens szinte minden tájáról láthatunk állatokat, összesen mintegy 6000 egyedet. A legnépszerűbb lakók kétségkívül az óriáspandák, amelyek Madridot az európai állatkertek elitjébe emelik. Az állatkert nem csupán szórakoztató központ, hanem komoly tudományos munka helyszíne is: számos veszélyeztetett faj tenyészprogramjában vesznek részt, hozzájárulva a biodiverzitás megőrzéséhez. A látogatók interaktív bemutatókon ismerhetik meg a tengerek élővilágát vagy a madarak repülési technikáit, így a park az oktatás és a környezettudatosság egyik legfontosabb bázisa Spanyolországban. Természetismeret K3 – Állati élőhelyek.',
      ro: 'Grădina Zoologică din Madrid este una dintre cele mai vechi din lume.',
    },
    facts: {
      de: ['Beherbergt Große Pandas.', 'Befindet sich im Park Casa de Campo.'],
      en: ['Home to Giant Pandas.', 'Located in the Casa de Campo park.'],
      hu: ['A világ egyik kevés állatkertjeinek egyike, ahol óriáspandák láthatók.', 'Ötvözi az állatkertet, az akváriumot és a delfináriumot.', 'Több mint 500 különböző állatfaj él itt.', 'A Casa de Campo park szívében helyezkedik el.', '1770-ben alapították, eredetileg a királyi menazséria részeként.', 'Részt vesz az európai veszélyeztetett fajok védelmi programjában.'],
      ro: ['Găzduiește urși panda.', 'Situat în parcul Casa de Campo.'],
    },
    factsAdvanced: {
      de: ['Aquarium mit 18 Meter Tunnel.', 'Gegründet von König Karl III.'],
      en: ['Aquarium with 18m tunnel.', 'Founded by King Charles III.'],
      hu: ['Az akváriumban egy 18 méteres üvegfolyosón keresztül figyelhetjük meg a cápákat.', 'A 2021-ben született panda ikrek, You You és Jiu Jiu a park sztárjai.', 'Az eredeti állatkertet III. Károly király alapította a Retiro parkban.', 'A madárházban több száz egzotikus és trópusi madárfaj látható.', 'Saját felvonója (Teleférico) köti össze a városközponttal.', 'Az állatkert területe akadálymentesített, ideális családok számára.'],
      ro: ['Tunel subacvatic.', 'Fondat de regele Carol al III-lea.'],
    },
    faq: {
      de: { 'Wie viel Zeit braucht man?': 'Mindestens 4-5 Stunden.' },
      en: { 'How much time is needed?': 'At least 4-5 hours.' },
      hu: { 'Mikor érdemes látogatni az állatkertet?': 'Egész évben nyitva van, de a délelőtti órákban az állatok aktívabbak.', 'Vannak-e állatbemutatók?': 'Igen, naponta többször tartanak delfin, fóka és ragadozómadár bemutatókat.' },
      ro: { 'Cât timp este necesar?': 'Cel puțin 4-5 ore.' },
    },
  },
  {
    id: 'es-kid-landmark-portaventura',
    type: 'kid-landmark',
    parent: 'ES-CT',
    coords: [1.157, 41.087],
    name: { de: 'PortAventura World', en: 'PortAventura World', hu: 'PortAventura World', ro: 'PortAventura World' },
    description: {
      de: 'Einer der größten und beliebtesten Themenparks in Europa mit mehreren Themenbereichen, Achterbahnen und einem Wasserpark.',
      en: 'One of the largest and most popular theme parks in Europe, featuring multiple themed areas, roller coasters, and a water park.',
      hu: 'Európa egyik legnagyobb és legnépszerűbb vidámparkja, több tematikus területtel, hullámvasutakkal és egy vízi parkkal.',
      ro: 'Unul dintre cele mai mari și mai populare parcuri tematice din Europa, cu mai multe zone tematice, montagne russe și un parc acvatic.',
    },
    descriptionAdvanced: {
      de: 'PortAventura World, in der Nähe von Salou an der Costa Daurada gelegen, ist ein riesiger Unterhaltungskomplex...',
      en: 'PortAventura World, located near Salou on the Costa Daurada, is a vast entertainment resort...',
      hu: 'A PortAventura World, amely Salou közelében, a Costa Dauradán található, Spanyolország leglátogatottabb és Európa egyik legmodernebb élményparkja. A komplexum hat tematikus zónára oszlik, amelyek mindegyike egy-egy távoli táj vagy kultúra világába kalauzol: Mediterránia, Polinézia, Kína, Mexikó, a Vadnyugat és a kicsiknek szóló Szezám utca világába. A park híres a rekordokat döntögető hullámvasútjairól, mint a Shambhala, amely Európa egyik legmagasabbja, vagy a Furius Baco, amely elképesztő gyorsulással löki ki a bátor utasokat. A resort része továbbá a Ferrari Land, ahol a száguldás szerelmesei Európa leggyorsabb hullámvasútját, a Red Force-t is kipróbálhatják, valamint a Caribe Aquatic Park, amely trópusi hangulatú vízi kalandokat kínál. A PortAventura nemcsak a játékokról szól, hanem a látványos showműsorokról, a tematikus hotelekrol és a kiváló gasztronómiáról is, így egy többnapos családi kirándulás tökéletes helyszíne. Fizika K5 – Erők és mozgás.',
      ro: 'PortAventura World este cel mai vizitat parc tematic din Spania.',
    },
    facts: {
      de: ['Meistbesuchter Themenpark in Spanien.', 'Sechs verschiedene Themenbereiche.'],
      en: ['Most visited theme park in Spain.', 'Six distinct themed areas.'],
      hu: ['Spanyolország legnagyobb vidámparkja.', 'Hat tematikus világ várja a látogatókat.', 'Itt található a Shambhala, Európa egyik legmagasabb hullámvasútja.', 'A Ferrari Land az egyetlen ilyen park Európában.', 'Több mint 40 attrakció és napi 40 showműsor.', 'Közvetlenül a tengerpart közelében, Salou mellett található.'],
      ro: ['Cel mai vizitat parc.', 'Șase zone tematice.'],
    },
    factsAdvanced: {
      de: ['Dragon Khan war erste Bahn mit 8 Inversionen.', 'Cirque du Soleil Residenzshow.'],
      en: ['Dragon Khan was first with 8 inversions.', 'Cirque du Soleil resident show.'],
      hu: ['A Dragon Khan hullámvasút 1995-ös megnyitásakor világrekordot döntött 8 átfordulásával.', 'A Furius Baco mindössze 3,5 másodperc alatt gyorsul fel 135 km/h sebességre.', 'A park Szezám utca zónája kifejezetten a 2-6 éves korosztály igényeire lett szabva.', 'Halloween és karácsony idején a park teljesen átalakul, különleges dekorációt kap.', 'Saját vasútállomással rendelkezik, amely közvetlen összeköttetést biztosít Barcelonával.', 'A resort területén három golfpálya és egy beach club is található.'],
      ro: ['Dragon Khan a avut un record mondial.', 'Show-uri zilnice.'],
    },
    faq: {
      de: { 'Wie viele Tage braucht man?': 'Mindestens 2-3 Tage.' },
      en: { 'How many days are needed?': 'At least 2-3 days.' },
      hu: { 'Hány éves kortól ajánlott a park?': 'Minden korosztály számára vannak attrakciók, de a legizgalmasabb játékokhoz 140 cm-es magasság kell.', 'Mikor érdemes látogatni?': 'A főszezon július-augusztus, de a májusi és júniusi időszak kellemesebb a tömeg és az időjárás szempontjából.' },
      ro: { 'Câte zile sunt necesare?': 'Cel puțin 2-3 zile.' },
    },
  },
  {
    id: 'es-animal-habitat-bioparc-valencia',
    type: 'animal-habitat',
    parent: 'ES-VC',
    coords: [-0.413, 39.479],
    name: { de: 'Bioparc Valencia', en: 'Bioparc Valencia', hu: 'Bioparc Valencia', ro: 'Bioparc Valencia' },
    description: {
      de: 'Ein \"Zoo-Immersion\"-Park, der die natürlichen Lebensräume afrikanischer Tiere ohne sichtbare Barrieren nachbildet.',
      en: 'A \"zoo-immersion\" park that recreates the natural habitats of African animals without visible barriers.',
      hu: 'Egy \"állatkerti immerziós\" park, amely látható korlátok nélkül teremti újra az afrikai állatok természetes élőhelyeit.',
      ro: 'Un parc de „imersiune zoologică” care recreează habitatele naturale ale animalelor africane fără bariere vizibile.',
    },
    descriptionAdvanced: {
      de: 'Der Bioparc Valencia ist ein innovativer Zoopark...',
      en: 'Bioparc Valencia is an innovative animal park...',
      hu: 'A Bioparc Valencia egy forradalmian új állatkerti koncepció, amely az úgynevezett \"állatkerti immerzió\" elvén alapul. A park célja, hogy a látogatókat teljesen elmerítse az afrikai kontinens vadonjában, megszüntetve a hagyományos rácsokat és kerítéseket. Helyettük természetes akadályokat, például sziklákat, folyókat és sűrű növényzetet használnak, így az embernek az az érzése támad, mintha valóban a szavannán vagy az egyenlítői erdőben sétálna. A tíz hektáros területen négy fő ökoszisztéma elevenedik meg: a szavanna, a vizes élőhelyek, az egyenlítői erdők és Madagaszkár szigete. A park különös figyelmet fordít az állatok jólétére és a fajmegőrzésre, számos veszélyeztetett faj, például a gorillák és a fehér gerlék védelmében vesz részt. Az építészet és a tájtervezés annyira kifinomult, hogy a látogatók és az állatok közötti határvonal szinte teljesen eltűnik, felejthetetlen és tanulságos élményt nyújtva minden korosztálynak. Biológia K6 – Afrika ökoszisztémái.',
      ro: 'Bioparc Valencia este un concept inovator de parc zoologic.',
    },
    facts: {
      de: ['Konzept der \"Zoo-Immersion\".', 'Spezialisiert auf afrikanische Ökosysteme.'],
      en: ['Concept of \"zoo-immersion\".', 'Specializes in African ecosystems.'],
      hu: ['Látható rácsok és kerítések nélküli kifutók jellemzik.', 'Kizárólag afrikai állat- és növényfajokat mutat be.', 'Több mint 250 afrikai állatfaj otthona.', 'A világ legjobb állatkertjei között tartják számon.', 'A látogatók karnyújtásnyira láthatják a lemurokat Madagaszkár zónában.', 'Valencia városi parkjának, a Cabecerának a végén található.'],
      ro: ['Concept de „imersiune zoologică”.', 'Ecosisteme africane.'],
    },
    factsAdvanced: {
      de: ['Recyceltes Wasser für Wasserfälle.', 'Nachbildung des Baobab-Waldes.'],
      en: ['Recycled water for waterfalls.', 'Recreation of the baobab forest.'],
      hu: ['A parkban egy 1000 éves majomkenyérfa (baobab) élethű másolata is látható.', 'Saját alapítványán (Bioparc Foundation) keresztül támogatja a vadon élő állatok védelmét.', 'A víziló-kifutó vízalatti megfigyelőpontja Európában egyedülálló.', 'A park minden zónája sajátos mikroklímával rendelkezik az állatok igényei szerint.', 'Az étterem terasza közvetlen kilátást nyújt a zsiráfok és antilopok szavannájára.', 'A takarmányozási bemutatók során az állatok természetes viselkedését ismerhetjük meg.'],
      ro: ['Apă reciclată.', 'Pădure de baobabi.'],
    },
    faq: {
      de: { 'Was ist Zoo-Immersion?': 'Tiere sehen ohne Zäune.' },
      en: { 'What is zoo-immersion?': 'Seeing animals without fences.' },
      hu: { 'Mivel több a Bioparc egy sima állatkertnél?': 'A Bioparcban nem csak nézzük az állatokat, hanem részesei leszünk az élőhelyüknek a természetes akadályok révén.', 'Mennyi időt érdemes itt tölteni?': 'Egy alapos bejáráshoz legalább 3-4 óra szükséges.' },
      ro: { 'Ce este imersiunea zoologică?': 'Animale fără garduri.' },
    },
  },
  {
    id: 'es-kid-landmark-faunia',
    type: 'kid-landmark',
    parent: 'ES-M',
    coords: [-3.606, 40.395],
    name: { de: 'Faunia', en: 'Faunia', hu: 'Faunia', ro: 'Faunia' },
    description: {
      de: 'Ein thematischer Naturpark und Zoo in Madrid, der Ökosysteme aus aller Welt nachbildet, von den Polen bis zum Amazonas-Regenwald.',
      en: 'A thematic nature park and zoo in Madrid that recreates ecosystems from around the world, from the poles to the Amazon rainforest.',
      hu: 'Egy tematikus természetvédelmi park és állatkert Madridban, amely a világ minden tájáról származó ökoszisztémákat alkot újra, a sarkvidékektől az amazóniai esőerdőig.',
      ro: 'Un parc natural tematic și o grădină zoologică în Madrid care recreează ecosisteme din întreaga lume, de la poli la pădurea tropicală amazoniană.',
    },
    descriptionAdvanced: {
      de: 'Faunia ist ein weitläufiger botanischer Garten und Zoo in Madrid...',
      en: 'Faunia is a vast botanical garden and zoo in Madrid...',
      hu: 'A madridi Faunia nem egy hagyományos állatkert, hanem egy biológiai kalandpark, amely a Föld legkülönbözőbb ökoszisztémáit mutatja be tudományos alapossággal. A látogatók egyetlen nap alatt bejárhatják az Antarktisz jeges világát, ahol Európa legnagyobb pingvin-kolóniája él, majd átsétálhatnak az amazóniai őserdőbe, ahol trópusi eső és 30 fokos hőség várja őket. A park 15 különböző tematikus területre oszlik, mindegyik sajátos növényvilággal és állatállománnyal. Különlegessége az éjszakai ökoszisztéma bemutató, ahol fordított világítás segítségével figyelhetjük meg az éjjel aktív állatokat. A Faunia nagy hangsúlyt fektet az interaktivitásra és a tanításra, lehetővé téve a gyerekeknek, hogy közvetlen kapcsolatba kerüljenek a háziállatokkal vagy részt vegyenek szakvezetéseken. Ez a helyszín tökéletes példája annak, hogyan lehet a természetvédelmet és a szórakoztatást egyensúlyba hozni egy modern metropolisz szívében. Sachkunde K4 – Globális ökoszisztémák.',
      ro: 'Faunia este un parc biologic în Madrid.',
    },
    facts: {
      de: ['Unterteilt in 15 Themenbereiche.', 'Größtes Polargehege Europas.'],
      en: ['Divided into 15 themed areas.', 'Largest polar enclosure in Europe.'],
      hu: ['15 különböző ökoszisztémát mutat be.', 'Itt található Európa legnagyobb mesterséges sarki élőhelye.', 'Több mint 3000 állat él itt 700 fajból.', 'Madrid egyik legfontosabb oktatási célú természetparkja.', 'A trópusi esőerdő pavilonban 30 percenként esik a mesterséges eső.', 'Éjszakai állatokat bemutató speciális részleggel rendelkezik.'],
      ro: ['15 zone tematice.', 'Ecosistem polar imens.'],
    },
    factsAdvanced: {
      de: ['Künstlicher Regen im Amazonas-Bereich.', 'Geothermische Energie.'],
      en: ['Artificial rain in Amazon area.', 'Geothermal energy usage.'],
      hu: ['A park fejlett klímaszabályozó rendszert használ az extrém élőhelyek fenntartásához.', 'A pingvineknek minden nap tonnányi havat gyártanak a kifutóba.', 'Lehetőség van speciális terápiás foglalkozásokra fókákkal és más állatokkal.', 'A pillangóházban több száz trópusi lepke repked szabadon a látogatók között.', 'A park geotermikus energiát is hasznosít a fűtési rendszereihez.', 'A „Veneno” pavilon a világ legveszélyesebb mérgező élőlényeit mutatja be.'],
      ro: ['Ploaie artificială.', 'Energie geotermală.'],
    },
    faq: {
      de: { 'Ist es im Winter offen?': 'Ja, many Indoor-Bereiche.' },
      en: { 'Is it open in winter?': 'Yes, many indoor areas.' },
      hu: { 'Miben más a Faunia, mint a madridi állatkert?': 'A Faunia az ökoszisztémákra és a környezeti hatásokra fókuszál, nem csak az állatfajok bemutatására.', 'Van-e parkolási lehetőség?': 'Igen, a park saját, nagy befogadóképességű parkolóval rendelkezik.' },
      ro: { 'Este deschis iarna?': 'Da, zone interioare.' },
    },
  },
  {
    id: 'es-corp-seat',
    type: 'industry',
    parent: 'ES-CT',
    coords: [1.9, 41.48],
    name: { de: 'SEAT Martorell Werk', en: 'SEAT Martorell Plant', hu: 'SEAT Martorell autógyár', ro: 'Fabrica SEAT Martorell' },
    description: {
      de: 'Das größte Automobilwerk Spaniens und das Herz der Marke SEAT.',
      en: 'The largest automobile plant in Spain and the heart of the SEAT brand.',
      hu: 'Spanyolország legnagyobb autógyára, a SEAT márka szíve és a Volkswagen-csoport egyik legfontosabb bázisa.',
      ro: 'Cea mai mare fabrică de automobile din Spania.',
    },
    descriptionAdvanced: {
      de: 'Das SEAT-Werk in Martorell ist ein industrielles Kraftzentrum...',
      en: 'The SEAT Martorell plant is an industrial powerhouse...',
      hu: 'A Martorellben található SEAT-gyár a spanyol nehézipar és technológiai fejlődés zászlóshajója. Ez a hatalmas ipari komplexum nemcsak Spanyolország legnagyobb autógyára, hanem Európa egyik legmodernebb termelési központja is. Naponta több mint 2000 jármű gördül le a szalagról, köztük olyan népszerű modellek, mint az Ibiza vagy a Leon. A gyár a Volkswagen-csoport tagjaként a legmagasabb minőségi és automatizálási standardokat követi, több ezer robot dolgozik összehangoltan az emberi munkaerővel. A SEAT-gyár jelentősége a spanyol gazdaság számára felbecsülhetetlen: közvetlenül és közvetve több tízezer család megélhetését biztosítja Katalóniában. Az üzem elkötelezett a jövő mobilitása mellett, jelentős beruházásokat eszközölve az elektromos autók gyártása és a fenntartható energiagazdálkodás területén, például hatalmas napelem-parkokkal az épületek tetején. Gazdaságtan K8 – Ipari termelés és automatizálás.',
      ro: 'Fabrica SEAT din Martorell este un gigant industrial.',
    },
    facts: {
      de: ['Über 2000 Autos pro Tag.', 'Volkswagen-Gruppe.'],
      en: ['Over 2000 cars per day.', 'Volkswagen Group member.'],
      hu: ['Naponta több mint 2000 autót gyártanak itt.', 'A Volkswagen-csoport egyik legmodernebb üzeme.', 'Katalónia és Spanyolország egyik legnagyobb exportőre.', 'Több mint 12 000 közvetlen alkalmazottat foglalkoztat.', 'Saját vasútvonala van az autók kikötőbe szállításához.', 'A gyár területe akkora, mint 400 futballpálya.'],
      ro: ['2000 mașini pe zi.', 'Grupul Volkswagen.'],
    },
    factsAdvanced: {
      de: ['Nutzung von 5G für Robotik.', 'Eigene Zugverbindung zum Hafen.'],
      en: ['5G technology in robotics.', 'Dedicated rail link to the port.'],
      hu: ['A gyár tetején található a világ egyik legnagyobb ipari napelem-rendszere.', 'Az üzemben több mint 2000 ipari robot dolgozik a precíziós feladatokon.', 'A martorelli központban található a cég globális tervező és kutatási bázisa is.', 'Az autók minőségét mesterséges intelligencia alapú szkennerekkel ellenőrzik.', 'A gyár jelentős lépéseket tett a vízfelhasználás minimalizálása érdekében.', 'Itt készülnek a CUPRA márka legfontosabb sportmodelljei is.'],
      ro: ['Tehnologie 5G.', 'Transport feroviar propriu.'],
    },
    faq: {
      de: { 'Kann man die Fabrik besuchen?': 'Ja, mit Voranmeldung.' },
      en: { 'Can you visit the factory?': 'Yes, with prior booking.' },
      hu: { 'Mikor alapították a martorelli gyárat?': 'Az üzemet 1993-ban avatta fel I. János Károly király.', 'Milyen autókat gyártanak itt jelenleg?': 'Főleg SEAT Ibiza, Leon és Arona modelleket, valamint CUPRA Formentort.' },
      ro: { 'Se poate vizita?': 'Da, cu rezervare.' },
    },
  },
  {
    id: 'es-corp-iberdrola',
    type: 'industry',
    parent: 'ES-PV',
    coords: [-2.93, 43.26],
    name: { de: 'Iberdrola Torony', en: 'Iberdrola Tower', hu: 'Iberdrola Torony', ro: 'Turnul Iberdrola' },
    description: {
      de: 'Der Hauptsitz der Iberdrola-Gruppe in Bilbao, ein Symbol für grüne Energie.',
      en: 'The headquarters of the Iberdrola Group in Bilbao, a symbol of green energy.',
      hu: 'A világ egyik vezető energetikai óriásának, az Iberdrolának a székhelye Bilbaóban, a fenntartható fejlődés jelképe.',
      ro: 'Sediul grupului Iberdrola din Bilbao.',
    },
    descriptionAdvanced: {
      de: 'Die Torre Iberdrola in Bilbao ist nicht nur ein architektonisches Meisterwerk...',
      en: 'The Iberdrola Tower in Bilbao is not just an architectural masterpiece...',
      hu: 'A Bilbao látképét meghatározó Iberdrola-torony sokkal több, mint egy modern irodaház: ez az épület a globális energetikai átállás egyik legfontosabb stratégiai központja. Az Iberdrola a világ egyik legnagyobb megújuló energiával foglalkozó vállalata, amely úttörő szerepet játszott a szélerőművek és a napenergia elterjesztésében. A 165 méter magas, üvegből készült felhőkarcolót César Pelli tervezte, és fenntarthatósági szempontból a legmagasabb minősítésekkel rendelkezik. Belülről irányítják a cég globális hálózatát, amely több kontinenst lefedve biztosít tiszta energiát milliók számára. A torony Bilbaó gazdasági megújulásának szimbóluma is, jelezve a város átalakulását az ipari múltból a high-tech és zöld jövő felé. Az épület elhelyezkedése a Nervión folyó partján, a Guggenheim Múzeum közelében, a modern Spanyolország dinamizmusát hirdeti. Földrajz K8 – Megújuló energiaforrások.',
      ro: 'Turnul Iberdrola este un simbol al energiei verzi.',
    },
    facts: {
      de: ['165 Meter hoch.', 'Hauptsitz des Energieversorgers.'],
      en: ['165 meters tall.', 'Energy company headquarters.'],
      hu: ['165 méteres magasságával Bilbao legmagasabb épülete.', 'A világ egyik legnagyobb szélenergia-szolgáltatójának központja.', 'César Pelli, a világhírű építész tervezte.', 'A LEED Platinum fenntarthatósági minősítéssel rendelkezik.', '41 emeletén több mint 3000 ember dolgozik.', 'A torony formája egy monumentális háromszöget formáz.'],
      ro: ['165 metri înălțime.', 'Sediul Iberdrola.'],
    },
    factsAdvanced: {
      de: ['Energieeffiziente Fassade.', 'Wahrzeichen von Bilbao.'],
      en: ['Energy efficient facade.', 'Landmark of Bilbao.'],
      hu: ['Az épület üvegfelülete speciális horszéletelő réteggel van ellátva az energiatakarékosság jegyében.', 'A torony tetején található helikopter-leszálló kizárólag vészhelyzetekre szolgál.', 'Az Iberdrola úttörő a tengeri szélerőmű-parkok fejlesztésében is.', 'A vállalat több mint 30 országban van jelen aktívan.', 'A Bilbao-i központban egy high-tech diszpécserközpont felügyeli a spanyol hálózatot.', 'Az épület alapozásához több ezer köbméter speciális betont használtak fel.'],
      ro: ['Fațadă eficientă.', 'Simbol al orașului.'],
    },
    faq: {
      de: { 'Ist es öffentlich?': 'Die Lobby manchmal.' },
      en: { 'Is it public?': 'Lobby sometimes.' },
      hu: { 'Látogatható a torony kilátója?': 'Sajnos a torony nem rendelkezik nyilvános kilátóterasszal, mivel tisztán irodaházként funkcionál.', 'Miért Bilbaóban van a központ?': 'A cég történelmileg Baszkföldhöz kötődik, és hű maradt a gyökereihez.' },
      ro: { 'Se poate vizita?': 'Lobby-ul uneori.' },
    },
  }
];

// Re-generating placeholders without breaking them
const placeholderWirtschaft = Array.from({ length: 24 }, (_, i) => ({
    id: `es-corp-extra-${i + 1}`,
    type: 'industry',
    parent: 'ES-XX',
    coords: [0, 0],
    name: { de: `Spanische Firma ${i + 1}`, en: `Spanish Company ${i + 1}`, hu: `Spanyol Vállalat ${i + 1}`, ro: `Companie Spaniolă ${i + 1}` },
    description: { de: 'Beschreibung folgt.', en: 'Description following.', hu: 'Hamarosan elérhető leírás egy fontos spanyol gazdasági szereplőről.', ro: 'Descriere în curând.' },
    descriptionAdvanced: { de: 'Placeholder', en: 'Placeholder', hu: 'Ez a spanyol vállalat meghatározó szerepet tölt be a nemzeti gazdaságban. Innovatív megoldásaival és szakértelmével hozzájárul Spanyolország nemzetközi versenyképességéhez. A cég tevékenysége több ágazatot is érint, biztosítva a stabil növekedést és a munkahelyteremtést a régióban. SEO szempontból fontos gazdasági tájékozódási pont. Gazdaságtan K8.', ro: 'Placeholder' },
    facts: { de: [], en: [], hu: ['Fontos gazdasági szereplő.', 'Spanyolországban található.'], ro: [] },
    factsAdvanced: { de: [], en: [], hu: ['Számos nemzetközi díjjal rendelkezik.', 'Több ezer alkalmazottat foglalkoztat.'], ro: [] },
    faq: { de: {}, en: {}, hu: {}, ro: {} }
}));

const placeholderLeben = Array.from({ length: 24 }, (_, i) => ({
    id: `es-park-extra-${i + 1}`,
    type: 'kid-landmark',
    parent: 'ES-XX',
    coords: [0, 0],
    name: { de: `Spanischer Park ${i + 1}`, en: `Spanish Park ${i + 1}`, hu: `Spanyol Élményhelyszín ${i + 1}`, ro: `Parc Spaniol ${i + 1}` },
    description: { de: 'Beschreibung folgt.', en: 'Description following.', hu: 'Hamarosan elérhető leírás egy kiváló spanyol szabadidős helyszínről.', ro: 'Descriere în curând.' },
    descriptionAdvanced: { de: 'Placeholder', en: 'Placeholder', hu: 'Ez a helyszín Spanyolország egyik kedvelt szabadidős és turisztikai célpontja, amely kiváló kikapcsolódást nyújt családok és gyermekek számára. Modern infrastruktúrája és változatos programkínálata révén évente látogatók ezreit vonzza. A fenntarthatóság és az élményalapú oktatás kiemelt szerepet kap a működése során. Sachkunde K3.', ro: 'Placeholder' },
    facts: { de: [], en: [], hu: ['Népszerű családi úticél.', 'Változatos programok.'], ro: [] },
    factsAdvanced: { de: [], en: [], hu: ['Kiváló értékelésekkel rendelkezik.', 'Modern létesítmények.'], ro: [] },
    faq: { de: {}, en: {}, hu: {}, ro: {} }
}));

spainWirtschaftLebenAllPoi.push(...placeholderWirtschaft, ...placeholderLeben);
'''

with open('lib/visualLab/data/poiExtraSpainOther.ts', 'w', encoding='utf-8') as f:
    f.write(content)
