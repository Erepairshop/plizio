// ─── MAGYAR TEST — OLVASÁSVIZSGÁLATOK ─────────────────────────────────────────
// Szövegek 1–8. osztályhoz, MCQ és gépelés kérdésekkel
//
// ═══════════════════════════════════════════════════════════════════════════════
// FORMÁTUM — szövegek és kérdések hozzáadása:
//
//   text:  A valódi szöveg (több mondat)
//   title: Cím (ajánlott)
//
//   MCQ-kérdés:
//   { type: "mcq",
//     question: "Mit csinál Péter?",
//     options: ["alszik", "játszik", "olvas", "eszik"],
//     correct: 1 }        ← helyes válasz indexe (0 = első)
//
//   Gépelés kérdés:
//   { type: "typing",
//     question: "Milyen szín a labda?",
//     answer: "piros" }   ← vagy több: answer: ["piros", "Piros"]
//
// ═══════════════════════════════════════════════════════════════════════════════

export interface LeseQuestion {
  type: "mcq" | "typing";
  question: string;
  options?: string[];       // csak mcq-nál
  correct?: number;         // csak mcq-nál (0-indexed)
  answer?: string | string[]; // csak typing-nál
}

export interface Lesepassage {
  id: string;
  title: string;
  text: string;
  questions: LeseQuestion[];
}

export const MAGYAR_LESETEST: Record<number, Lesepassage[]> = {

// ─── 1. OSZTÁLY ─── (2-3 egyszerű mondat · ki? mit? hol? milyen szín?)
  1: [
    {
      id: "m1_1",
      title: "Péter a kertben",
      text: "Péter a kertben játszik. Van egy piros labdája. A labda nagyon szép.",
      questions: [
        { type: "mcq", question: "Mit csinál Péter?", options: ["alszik", "játszik", "olvas", "eszik"], correct: 1 },
        { type: "typing", question: "Milyen szín a labda?", answer: ["piros", "Piros"] },
        { type: "mcq", question: "Hol van Péter?", options: ["a házban", "az iskolában", "a kertben"], correct: 2 },
      ],
    },
    {
      id: "m1_2",
      title: "Mici a macska",
      text: "Mici egy macska. Fehér a szőre. Szereti a tejet.",
      questions: [
        { type: "mcq", question: "Mi az Mici?", options: ["egy kutya", "egy macska", "egy madár"], correct: 1 },
        { type: "typing", question: "Milyen szín Mici szőre?", answer: ["fehér", "Fehér"] },
        { type: "typing", question: "Mit szereti Mici?", answer: ["a tejet", "tejet", "tej"] },
      ],
    },
    {
      id: "m1_3",
      title: "Az iskolában",
      text: "A gyerek az iskolában tanul. Írásmunkafüzetébe ír. A füzet kék.",
      questions: [
        { type: "mcq", question: "Hol tanul a gyerek?", options: ["a parkban", "az iskolában", "a szobában"], correct: 1 },
        { type: "typing", question: "Mire ír a gyerek?", answer: ["füzetébe", "füzetre", "füzet"] },
        { type: "mcq", question: "Milyen szín a füzet?", options: ["kék", "sárga", "zöld"], correct: 0 },
      ],
    },
    {
      id: "m1_4",
      title: "Anna és a báb",
      text: "Anna egy szép bábot tart a kezében. Kék a ruhája. Anna nagyon szereti a bábot.",
      questions: [
        { type: "mcq", question: "Mit tart Anna?", options: ["egy labdát", "egy bábot", "egy könyvet"], correct: 1 },
        { type: "typing", question: "Milyen szín a báb ruhája?", answer: ["kék", "Kék"] },
        { type: "mcq", question: "Szereti-e Anna a bábot?", options: ["igen", "nem", "talán"], correct: 0 },
      ],
    },
    {
      id: "m1_5",
      title: "János és a virág",
      text: "János egy gyönyörű piros virágot talál. A virág nagyon illatos. János boldogan hazaviszi.",
      questions: [
        { type: "mcq", question: "Mit talál János?", options: ["egy követ", "egy virágot", "egy toll"], correct: 1 },
        { type: "typing", question: "Milyen szín a virág?", answer: ["piros", "Piros"] },
        { type: "mcq", question: "Mit csinál János a virággal?", options: ["elégetí", "hazaviszi", "eldobja"], correct: 1 },
      ],
    },
    {
      id: "m1_6",
      title: "A cica és az egér",
      text: "Egy kicsi cica játszik. Egy szürke egér fut el. A cica nem fogja meg az egeret.",
      questions: [
        { type: "mcq", question: "Ki játszik?", options: ["egy kutya", "egy cica", "egy madár"], correct: 1 },
        { type: "typing", question: "Milyen szín az egér?", answer: ["szürke", "Szürke"] },
        { type: "mcq", question: "Fogja-e meg a cica az egeret?", options: ["igen", "nem", "talán"], correct: 1 },
      ],
    },
    {
      id: "m1_7",
      title: "Zsófi és a könyv",
      text: "Zsófi egy érdekes könyvet olvas. A könyv képekben van. Nagyon szép a könyv.",
      questions: [
        { type: "mcq", question: "Mit csinál Zsófi?", options: ["játszik", "alszik", "olvas"], correct: 2 },
        { type: "typing", question: "Mi van a könyvben?", answer: ["képek", "Képek"] },
        { type: "mcq", question: "Szép-e a könyv?", options: ["igen", "nem", "nem tudom"], correct: 0 },
      ],
    },
    {
      id: "m1_8",
      title: "Márk és a sárkány",
      text: "Márk egy zöld sárkányt készít papírból. Hosszú farka van. Márk fent az égen röptetni szeretné.",
      questions: [
        { type: "mcq", question: "Mit készít Márk?", options: ["egy házat", "egy sárkányt", "egy autót"], correct: 1 },
        { type: "typing", question: "Milyen szín a sárkány?", answer: ["zöld", "Zöld"] },
        { type: "mcq", question: "Hova szeretné röptetni Márk a sárkányt?", options: ["az égen", "a vízbe", "a házba"], correct: 0 },
      ],
    },
    {
      id: "m1_9",
      title: "Éva és a virágok",
      text: "Éva a virágokat locsolja. Sok szép virág van a kertben. A virágok vidámak és szépek.",
      questions: [
        { type: "mcq", question: "Mit csinál Éva?", options: ["a fűvet nyírja", "a virágokat locsolja", "a fákat ültet"], correct: 1 },
        { type: "typing", question: "Hol vannak a virágok?", answer: ["a kertben", "kertben"] },
        { type: "mcq", question: "Szépek-e a virágok?", options: ["igen", "nem", "valami más"], correct: 0 },
      ],
    },
    {
      id: "m1_10",
      title: "Tamás és a teknős",
      text: "Tamás egy lassú teknőst figyel. A teknős zöld. Nagyon lassan megy.",
      questions: [
        { type: "mcq", question: "Mit figyel Tamás?", options: ["egy repülőt", "egy teknőst", "egy halat"], correct: 1 },
        { type: "typing", question: "Milyen szín a teknős?", answer: ["zöld", "Zöld"] },
        { type: "mcq", question: "Gyors vagy lassú-e a teknős?", options: ["gyors", "lassú", "közepes"], correct: 1 },
      ],
    },
    {
      id: "m1_11",
      title: "Lina és az almák",
      text: "Lina almákat szed a fáról. Az almák piros és zöld. Sok alma van.",
      questions: [
        { type: "mcq", question: "Mit szed Lina?", options: ["meggyet", "almákat", "körtet"], correct: 1 },
        { type: "typing", question: "Honnan szedi Lina az almákat?", answer: ["a fáról", "fáról"] },
        { type: "mcq", question: "Milyen szín az alma?", options: ["piros és zöld", "sárga", "lila"], correct: 0 },
      ],
    },
    {
      id: "m1_12",
      title: "Sándor és az autó",
      text: "Sándor egy piros autóval játszik. Az autó gyors. Szeret vele játszani.",
      questions: [
        { type: "mcq", question: "Mit csinál Sándor?", options: ["olvas", "alszik", "játszik"], correct: 2 },
        { type: "typing", question: "Milyen szín az autó?", answer: ["piros", "Piros"] },
        { type: "mcq", question: "Gyors vagy lassú az autó?", options: ["gyors", "lassú", "mozdulatlan"], correct: 0 },
      ],
    },
    {
      id: "m1_13",
      title: "Rozália és a csokoládé",
      text: "Rozália egy finom csokoládét eszik. Barna a szín. Nagyon ízletes.",
      questions: [
        { type: "mcq", question: "Mit eszik Rozália?", options: ["fagylaltot", "csokoládét", "kekszet"], correct: 1 },
        { type: "typing", question: "Milyen szín a csokoládé?", answer: ["barna", "Barna"] },
        { type: "mcq", question: "Ízletes-e a csokoládé?", options: ["igen", "nem", "talán"], correct: 0 },
      ],
    },
    {
      id: "m1_14",
      title: "Viktor és a szamár",
      text: "Viktor egy szamarat látogat meg. Szürke a szamár. Van egy hosszú farka.",
      questions: [
        { type: "mcq", question: "Mit látogat meg Viktor?", options: ["egy lovakat", "egy szamarat", "egy szarvasmarha"], correct: 1 },
        { type: "typing", question: "Milyen szín a szamár?", answer: ["szürke", "Szürke"] },
        { type: "mcq", question: "Van-e farka a szamárnak?", options: ["igen", "nem", "talán"], correct: 0 },
      ],
    },
    {
      id: "m1_15",
      title: "Vera és a marek",
      text: "Vera márkákat gyűjt. Sok szép márka van. Az egyik kék, másik sárga.",
      questions: [
        { type: "mcq", question: "Mit gyűjt Vera?", options: ["érméket", "márkákat", "képeslapokat"], correct: 1 },
        { type: "typing", question: "Milyen szín az egyik márka?", answer: ["kék", "Kék"] },
        { type: "mcq", question: "Van-e sok márka?", options: ["igen", "nem", "talán"], correct: 0 },
      ],
    },
  ],

// ─── 2. OSZTÁLY ─── (4-5 mondat · cselekmény, szereplők, egyszerű oka)
  2: [
    {
      id: "m2_1",
      title: "Az éhes sün",
      text: "Ősszel egy kis sün almákat keres az erdőben. Hirtelen talál egy nagy piros almát a fa alatt. Mert nagyon éhes, azonnal megeszi az almát. Aztán egy meleg helyet keres a száraz levelek között. Megfelelően aludni fog az egész télen.",
      questions: [
        { type: "mcq", question: "Mit keres az sün az erdőben?", options: ["gombát", "almákat", "bogyókat"], correct: 1 },
        { type: "typing", question: "Miért eszi meg azonnal az almát?", answer: ["éhes", "mert éhes", "nagyéhes"] },
        { type: "mcq", question: "Hol alszik az sün?", options: ["egy fára", "száraz levelek között", "egy odúban"], correct: 1 },
      ],
    },
    {
      id: "m2_2",
      title: "Egy nap a tónál",
      text: "Péter és apja kerékpáron mennek egy szép kék tóhoz. A nap sütni kezd, de a víz még hideg az eső után. Péter óvatosan belép a vízbe csak a lábaival, mert nem szeretne megfagyni. Az apja viszont rögtön beugrik és úszik egy gyors kört a gáthoz. Este fagyasztott csokis jégkrémet esznek együtt.",
      questions: [
        { type: "mcq", question: "Hogyan mennek a tóhoz?", options: ["autóval", "gyalog", "kerékpáron"], correct: 2 },
        { type: "typing", question: "Miért óvatosan lép be Péter?", answer: ["hideg", "mert hideg", "a víz hideg"] },
        { type: "mcq", question: "Mi van azután este?", options: ["úsznak", "jégkrémet esznek", "alvat mennek"], correct: 1 },
      ],
    },
    {
      id: "m2_3",
      title: "A kicsi nyuszi",
      text: "Egy kicsi fehér nyuszi élettudása mély az erdő altatrészében. Reggel friss rétet ette nagy szívvel. Hirtelen egy nagy sötét farkas jelenik meg az erdőben. A nyuszi félelmesen szalad a bozótba és elbújik. Később nyugodtan jön elő és megint rég eszik.",
      questions: [
        { type: "mcq", question: "Mi az a nyuszi szőre szín?", options: ["fekete", "fehér", "szürke"], correct: 1 },
        { type: "typing", question: "Mit eszik a nyuszi reggel?", answer: ["rétet", "Rétet", "zöld rét"] },
        { type: "mcq", question: "Hol bújik el a nyuszi?", options: ["egy odúban", "a fán", "a bozótban"], correct: 2 },
      ],
    },
    {
      id: "m2_4",
      title: "A születésnapi torta",
      text: "Ma Éva születésnapja és az anyja egy nagy, szép tortát sütött. Vannak rózsaszín virágok a tetején. Éva barátai meghívást kaptak a partira. Mindenki vidáman énekli a születésnapi éneket. Éva fúj a gyertyákat és a család meg a barátok együtt eszik a tortát.",
      questions: [
        { type: "mcq", question: "Mi sült az anyja?", options: ["kenyér", "torta", "palacsinta"], correct: 1 },
        { type: "typing", question: "Milyen szín a virág a tortán?", answer: ["rózsaszín", "Rózsaszín"] },
        { type: "mcq", question: "Ki énekli a születésnapi éneket?", options: ["az anya", "mindenki", "a tanító"], correct: 1 },
      ],
    },
    {
      id: "m2_5",
      title: "A kertész és a virágok",
      text: "János egy kertész. Minden nap a virágokkal dolgozik. Locsolja őket és nyeszi ki a gyomokat. A virágok szépek és vidámak a gondos munkájának köszönhetően. Sok ember látogat el a kertjébe és csodálja a virágokat.",
      questions: [
        { type: "mcq", question: "Mi a János foglalkozása?", options: ["tanár", "kertész", "orvos"], correct: 1 },
        { type: "typing", question: "Mit csinál János a virágokkal?", answer: ["locsolja", "Locsolja"] },
        { type: "mcq", question: "Jönnek-e emberek megtekinteni a virágokat?", options: ["igen", "nem", "néha"], correct: 0 },
      ],
    },
    {
      id: "m2_6",
      title: "A téli szánkó",
      text: "Telente sokat esik a hó az egész városban. Tamás a nagybátyja segítségével egy szánkót készít fa és kötél használatával. A szánka piros és nagyon erős. Az első nap lefelé szánkóznak a nagy dombról. Tamás még nagyobb szánkózásnak szabadon kíváncsian.",
      questions: [
        { type: "mcq", question: "Kinek segít Tamás?", options: ["az apjának", "a nagybátyájának", "az öccsének"], correct: 1 },
        { type: "typing", question: "Milyen szín a szánka?", answer: ["piros", "Piros"] },
        { type: "mcq", question: "Hová szánkóznak?", options: ["az utcán", "a nagy dombról", "a parkban"], correct: 1 },
      ],
    },
    {
      id: "m2_7",
      title: "A kiváló tanszéklet",
      text: "Sándor az első, aki az osztályban egy nagyon figyelmes és okos gyerek. Minden tanulóról és tanóráról gondoskodik. A tanítónő észreveszi, hogy milyen jó Sándor az iskolában. Minden vizsgáján kiváló jegyet kap és több barátja van. A szülei nagyon büszkék rá.",
      questions: [
        { type: "mcq", question: "Milyen diák Sándor?", options: ["lusta", "figyelmes", "zavaros"], correct: 1 },
        { type: "typing", question: "Mit vesz észre a tanítónő?", answer: ["jó Sándor", "Sándor jó", "milyen jó"] },
        { type: "mcq", question: "Milyen jegyet kap Sándor?", options: ["közepes", "kiváló", "rossz"], correct: 1 },
      ],
    },
    {
      id: "m2_8",
      title: "A nyelvtan óra",
      text: "Egy szép szeptemberi nap egy új tanár jön az osztályba. Az új tanár nyelvtannak tanít. Az első óra érdekes és szórakoztató. Mindenki figyel és jó kérdéseket tesz fel. A tanár minden tanulónak dicsér és ajándékot ad.",
      questions: [
        { type: "mcq", question: "Mi az új tanár tantárgya?", options: ["matematika", "nyelvtan", "fizika"], correct: 1 },
        { type: "typing", question: "Milyen az első óra?", answer: ["érdekes", "szórakoztató", "jó"] },
        { type: "mcq", question: "Mit adnak a tanulóknak?", options: ["könyvet", "ajándékot", "jegyet"], correct: 1 },
      ],
    },
    {
      id: "m2_9",
      title: "A vidéki vasárnap",
      text: "Vasárnap Balázs a nagyszüleihez utazik a vidékre. A vidéken sok kisállatai vannak: csirkék, sertések és szamarak. Balázs nagy szívvel játszik az állatokkal és eteti őket. A nagymama finom ebédet készít és az egész család az asztal körül ül. Balázs szereti a vidéki vasárnapokat nagymamájával.",
      questions: [
        { type: "mcq", question: "Hova utazik Balázs?", options: ["az ország fővárosa", "a tenger partjára", "a nagyszüleihez"], correct: 2 },
        { type: "typing", question: "Mik vannak a nagyszüleinél?", answer: ["kisállatok", "Kisállatok"] },
        { type: "mcq", question: "Mit csinál a nagymama?", options: ["pihen", "készül", "ebédet készít"], correct: 2 },
      ],
    },
    {
      id: "m2_10",
      title: "A késői iskolai munkával",
      text: "Marci egy saját projektmunka-feladatot kell végeznie az iskolához. Ugyanakkor futballedzésre jár a csapatát edzik. Marci fáradt, de nem adja fel. Nap nap után dolgozik a projektjén és gyakorol a futballon. Végül sikerül felkészülte mind a munkáját és az edzéseit.",
      questions: [
        { type: "mcq", question: "Mit kell Marcinak csinálnia?", options: ["tanulni", "projektmunkát végezni", "házimunkát"], correct: 1 },
        { type: "typing", question: "Mire jár Marci?", answer: ["futballedzésre", "futball", "edzésre"] },
        { type: "mcq", question: "Adja-e fel Marci a munkát?", options: ["igen", "nem", "részben"], correct: 1 },
      ],
    },
    {
      id: "m2_11",
      title: "Az erdei kaland",
      text: "Szép tavaszi nap egy apja és fia a erdőben sétálni mennek. Gyakran találnak szép virágokat és hallanak madarakat énekét. Az apja megmutatja a fiának a különböző növényeket és állatok nyomait. A fiú meglátja az első pillangót a tavaszon. Összesítve egy wunderbare napja van az erdőben.",
      questions: [
        { type: "mcq", question: "Kivel megy az fia az erdőbe?", options: ["a barátjával", "az apjával", "az anyukájával"], correct: 1 },
        { type: "typing", question: "Mit hallanak az erdőben?", answer: ["madarakat énekét", "énekét", "madár énekét"] },
        { type: "mcq", question: "Mit lát a fiú először a tavaszon?", options: ["egy virágot", "egy pillangót", "egy rovart"], correct: 1 },
      ],
    },
    {
      id: "m2_12",
      title: "Az ügyeskezű művész",
      text: "Judit egy nagyon tehetséges festő. Sok szép képet fest az iskolában. Az egyik képén egy napsugarak világít a házra, egy másikon kék víz csordogál. A tanítónő meglátja azokat egy nagy előadásra felkészületesítette. Az egész iskola Judit képeit szemléli és dicsérte.",
      questions: [
        { type: "mcq", question: "Mi az Judit hobbija?", options: ["zene", "festés", "tánc"], correct: 1 },
        { type: "typing", question: "Mi van az egyik képén?", answer: ["napsugarak", "ház", "világító szobák"] },
        { type: "mcq", question: "Mit csinálnak az iskola?", options: ["kritizál", "szemléli és dicsérte", "elfelejti"], correct: 1 },
      ],
    },
    {
      id: "m2_13",
      title: "A szerzásos koala",
      text: "Egy koala az Ausztráliában él az eukaliptusz fákon. Az szürke szőre és fekete orrú. Egy nap egy állatkutató a fák között méri a koalák számát. A kutató nagy szeretete van az állatok iránt. Végül száz koalat figyel meg és sok információt gyűjt.",
      questions: [
        { type: "mcq", question: "Hol él a koala?", options: ["Amerikában", "Afrikában", "Ausztráliában"], correct: 2 },
        { type: "typing", question: "Mi az a fa, amely a koala eszik?", answer: ["eukaliptusz", "Eukaliptusz"] },
        { type: "mcq", question: "Mit csinál az állatkutató?", options: ["játszik", "figyel és mér", "alszik"], correct: 1 },
      ],
    },
    {
      id: "m2_14",
      title: "A régi házfelújítás",
      text: "Gyuri Familie egy öreg házat vásárolt a vidéken. Az ház nagyon régi és megrongálódott. Az egész család segít a felújításban. Az apja javít az ablakokat, az anyja a falakat festik, és Gyuri takarítja az udvar. Néhány hét után a ház újra szép és az egész család nagyon boldog.",
      questions: [
        { type: "mcq", question: "Mit vásárolt a család?", options: ["egy autót", "egy házat", "egy keretet"], correct: 1 },
        { type: "typing", question: "Ki javít az ablakokat?", answer: ["az apja", "Apja", "az apa"] },
        { type: "mcq", question: "Szép-e a ház a felújítás után?", options: ["igen", "nem", "részben"], correct: 0 },
      ],
    },
    {
      id: "m2_15",
      title: "Az üzletben a kaland",
      text: "Éva és az anyja az élelmiszerboltba mennek vásárolni. Az üzletben sok szép dolgok vannak, például gyümölcsök, zöldségek és tejtermékek. Éva meglátja a csokis kekszeket, amelyeket a legjobban szereti. Az anyja azt mondom csak egy csomag vehet meg. Éva boldogan a kekszek kicsit az anyja mellett hazamegy.",
      questions: [
        { type: "mcq", question: "Hova mennek Éva és anyja?", options: ["a parkba", "a boltba", "az iskolába"], correct: 1 },
        { type: "typing", question: "Mit szereti a legjobban Éva?", answer: ["csokis kekszek", "Csokis kekszek"] },
        { type: "mcq", question: "Hány csomagot vehet meg Éva?", options: ["kettő", "egy", "három"], correct: 1 },
      ],
    },
  ],

// ─── 3–8. OSZTÁLY: TODO Szövegek később kerülnek hozzáadásra
  3: [
    {
      id: "m3_1",
      title: "Egy nap a tanyán",
      text: "Bodri, a hűséges puli kutya már kora reggel ébren volt. A tanyán ilyenkor kezdődik az élet. Gazdája, János bácsi, először a lovakat látogatta meg az istállóban. Csillag és Szellő halkan nyerítettek, amikor megkapták a friss szénát és a zabot. Bodri közben a tyúkokat terelgette ki az udvarra, hogy ne menjenek túl messzire a kerítéstől. A tehenek a legelőn pihentek, és békésen kérődztek a reggeli napsütésben. Délután a gyerekek is kijöttek a városból, hogy segítsenek az állatok körül. Nagyon élvezték, amikor megsimogathatták a kisbárányok puha gyapját. Bodri büszkén figyelte a birtokot a ház tornácáról, hiszen az ő feladata volt vigyázni mindenkire. Estére minden állat visszatért a helyére, és a tanya elcsendesedett a csillagos égbolt alatt. János bácsi megpaskolta Bodri fejét, aki elégedetten vackolta be magát a kutyaházba, tudva, hogy holnap ismét fontos feladatok várnak rá a magyar vidéken.",
      questions: [
        { type: "mcq", question: "Ki Bodri?", options: ["egy macska", "egy puli kutya", "egy ló", "egy bárány"], correct: 1 },
        { type: "mcq", question: "Mit kaptak a lovak reggelire?", options: ["almát", "kenyeret", "szénát és zabot", "kukoricát"], correct: 2 },
        { type: "mcq", question: "Hol pihentek a tehenek?", options: ["az istállóban", "a legelőn", "a házban", "a kertben"], correct: 1 },
        { type: "typing", question: "Ki a tanya gazdája?", answer: ["János bácsi", "János"] },
        { type: "typing", question: "Milyen állatnak simogatták meg a gyerekek a gyapját?", answer: ["kisbárány", "bárány", "kisbárányok", "bárányok"] },
      ],
    },
    {
      id: "m3_2",
      title: "Az erdő változásai",
      text: "Az erdő minden évszakban más arcát mutatja nekünk. Tavasszal a fák rügyezni kezdenek, és a földet ellepik a hóvirágok és az ibolyák. Ilyenkor a madarak vidám éneke tölti be a tájat, miközben fészket építenek a sűrű ágak között. Nyáron a lombkorona sötétzöldé válik, és hűvös árnyékot ad a vándoroknak. A patak vize ilyenkor kristálytisztán csillog a napsütésben. Az ősz beköszöntével a levelek sárgára, vörösre és barnára színeződnek, majd lassan lehullanak a földre, puha szőnyeget alkotva. A mókusok szorgalmasan gyűjtik a makkot és a mogyorót a téli álom előtt. Télen az erdő elcsendesedik, és gyakran fehér hótakaró borítja be a tájat. A vadállatok, mint az őzek és a szarvasok, ilyenkor nehezebben találnak élelmet, ezért a vadőrök szénát tesznek ki nekik az etetőkbe. Az erdő nyugalma és szépsége minden látogatót lenyűgöz, bármikor is járjon a fák között. Fontos, hogy vigyázzunk a természetre, és ne szemeteljünk kirándulás közben.",
      questions: [
        { type: "mcq", question: "Milyen virágok jelennek meg tavasszal az erdőben?", options: ["rózsa", "hóvirág és ibolya", "tulipán", "napraforgó"], correct: 1 },
        { type: "mcq", question: "Mit csinálnak a mókusok ősszel?", options: ["alszanak", "fészket építenek", "makkot és mogyorót gyűjtenek", "énekelnek"], correct: 2 },
        { type: "mcq", question: "Ki segít az állatoknak télen élelmet találni?", options: ["a gyerekek", "a vándorok", "a vadőrök", "a mókusok"], correct: 2 },
        { type: "typing", question: "Milyen színűvé válik a lombkorona nyáron?", answer: ["sötétzöld", "sötétzöldé", "zöld"] },
        { type: "typing", question: "Mit alkotnak a lehullott levelek a földön?", answer: ["szőnyeget", "puha szőnyeget", "szőnyeg"] },
      ],
    },
    {
      id: "m3_3",
      title: "Süteménysütés nagymamával",
      text: "Kata minden szombat délutánt a nagymamájánál tölt a kis faluban. Ilyenkor mindig valami finomságot készítenek a konyhában. Ezen a hétvégén a nagymama úgy döntött, hogy megtanítja Katát a híres almás pite elkészítésére. Először a tésztát gyúrták össze lisztből, vajból és egy kevés cukorból. Kata nagyon ügyesen bánt a nyújtófával, bár a liszt néha az orrára is ráragadt, amin jót nevettek. Közben a nagymama lereszelte az almákat, és megszórták őket illatos fahéjjal. A konyhát hamarosan belengte az édes illat. Amíg a sütemény a sütőben sült, a nagymama régi történeteket mesélt arról, amikor ő volt kislány. Kata tátott szájjal hallgatta a meséket a régi iskoláról és a bálokról. Amikor a pite elkészült, kivették a sütőből, és megvárták, amíg egy kicsit kihűl. Porcukorral a tetején tálalták fel a családnak. Mindenki egyetértett abban, hogy ez volt a legfinomabb sütemény, amit valaha ettek, és Kata nagyon büszke volt az első közös munkájukra.",
      questions: [
        { type: "mcq", question: "Mit sütött Kata és a nagymama?", options: ["pogácsát", "almás pitét", "csokitortát", "kenyeret"], correct: 1 },
        { type: "mcq", question: "Mivel szórták meg a lereszelt almát?", options: ["sóval", "fahéjjal", "borssal", "kakaóval"], correct: 1 },
        { type: "mcq", question: "Mit csináltak, amíg sült a sütemény?", options: ["tévét néztek", "a kertben játszottak", "történeteket meséltek", "aludtak"], correct: 2 },
        { type: "typing", question: "Mit használt Kata a tészta kinyújtásához?", answer: ["nyújtófa", "nyújtófával", "nyújtófát"] },
        { type: "typing", question: "Mivel szórták meg a kész pite tetejét?", answer: ["porcukorral", "porcukor"] },
      ],
    },
    {
      id: "m3_4",
      title: "Az első tanítási nap",
      text: "Szeptember elsején reggel Marci izgatottan ébredt fel. Ez volt az első napja a harmadik osztályban. Gyorsan felvette az új ruháját, és ellenőrizte, hogy minden benne van-e az iskolatáskájában: a füzetek, a tolltartó és a színes ceruzák. Az iskola udvarán már sok gyerek gyülekezett. Mindenki örült, hogy újra látja a barátait a hosszú nyári szünet után. Az ünnepség után a tanító néni, Erika néni, bekísérte az osztályt a terembe. A falakon új dekorációk voltak, és minden padon ott vártak a friss illatú tankönyvek. Marci a legjobb barátja, Peti mellé ült. Az első órán elmesélték egymásnak a nyári élményeiket. Marci a balatoni nyaralásról beszélt, ahol megtanult fejest ugrani a vízbe. Erika néni elmondta, hogy ebben az évben sok érdekes dolgot fognak tanulni a természetről és a magyar történelemről. Marci rájött, hogy bár a nyár véget ért, az iskola is tartogat sok izgalmas kalandot és új ismeretet.",
      questions: [
        { type: "mcq", question: "Hányadik osztályt kezdte el Marci?", options: ["első", "második", "harmadik", "negyedik"], correct: 2 },
        { type: "mcq", question: "Ki kísérte be a gyerekeket a terembe?", options: ["az igazgató", "Erika néni", "a szülők", "a portás"], correct: 1 },
        { type: "mcq", question: "Miről mesélt Marci az első órán?", options: ["a hegyi túráról", "a balatoni nyaralásról", "a kutyájáról", "egy filmről"], correct: 1 },
        { type: "typing", question: "Milyen hónapban kezdődik az iskola?", answer: ["szeptember", "Szeptember"] },
        { type: "typing", question: "Ki mellé ült Marci a padban?", answer: ["Peti", "Peti mellé"] },
      ],
    },
    {
      id: "m3_5",
      title: "Húsvéti készülődés",
      text: "A húsvét az egyik legszebb tavaszi ünnep Magyarországon. A gyerekek már napokkal előtte elkezdenek készülni rá. Luca és az öccse, Tomi, idén is kifújt tojásokat festettek. Különböző színeket használtak: pirosat, kéket és sárgát, majd apró mintákat rajzoltak rájuk ecsettel. A nagymama segített nekik a hagyományos technikákban, például levélmintákat tettek a tojásokra, mielőtt a festékbe mártották volna őket. Húsvéthétfő reggelén Tomi korán kelt, hogy felkészüljön a locsolkodásra. Elővette a kölnivizét, és megtanult egy rövid locsolóverset is. Először az édesanyját és Lucát locsolta meg, hogy el ne hervadjanak, mint a virágok. Cserébe gyönyörű piros tojásokat és csokoládényuszit kapott. Később a rokonaikhoz is ellátogattak, ahol az asztal roskadozott a finomságoktól: volt ott füstölt sonka, főtt tojás és friss torma is. Ez az ünnep a családi együttlétről és a népi hagyományok őrzéséről szól, amit mindenki nagyon élvezett.",
      questions: [
        { type: "mcq", question: "Mit festettek a gyerekek húsvét előtt?", options: ["falat", "kerítést", "tojásokat", "képeket"], correct: 2 },
        { type: "mcq", question: "Mit kapott Tomi a locsolkodásért?", options: ["pénzt", "piros tojást és csokoládényuszit", "könyvet", "játékot"], correct: 1 },
        { type: "mcq", question: "Milyen ételek voltak az ünnepi asztalon?", options: ["pizza és tészta", "sonka, tojás és torma", "sült krumpli", "halászlé"], correct: 1 },
        { type: "typing", question: "Milyen napon mennek a fiúk locsolkodni?", answer: ["húsvéthétfő", "Húsvéthétfőn", "hétfőn"] },
        { type: "typing", question: "Mit mondanak a fiúk locsolkodás előtt?", answer: ["locsolóverset", "verset", "locsolóvers"] },
      ],
    },
    {
      id: "m3_6",
      title: "Ludas Matyi története",
      text: "Volt egyszer egy szegény legény, akit Ludas Matyinak hívtak. Matyi egy nap elindult a döbrögi vásárba, hogy eladja a tíz szép lúdját. A vásárban azonban találkozott a gőgös Döbrögi urasággal, akinek megtetszettek a ludak. Döbrögi nem akart tisztességes árat fizetni értük, és amikor Matyi ellenkezett, az uraság elvette a ludakat, Matyit pedig megverette a hajdúival. A legény azonban nem hagyta annyiban a dolgot. Megfogadta, hogy „háromszor veri ezt kenden Lúdas Matyi vissza!”. Évekkel később Matyi először olasz építőmesternek álcázta magát, és így sikerült először megleckéztetnie az uraságot az erdőben. Másodszor híres orvosnak adta ki magát, amikor Döbrögi beteg lett, és ismét elpáholta őt. Harmadszorra egy ügyes csellel csalta ki az uraságot a kastélyából, és betartotta az ígéretét. Döbrögi végül megbánta tetteit, és megtanulta, hogy nem szabad a szegényekkel igazságtalanul bánni. Matyi története azóta is a bátorság és az igazságosság jelképe a magyar gyerekek számára.",
      questions: [
        { type: "mcq", question: "Hány ludat akart eladni Matyi a vásárban?", options: ["ötöt", "tízet", "húszat", "egyet"], correct: 1 },
        { type: "mcq", question: "Hányszor ígérte meg Matyi, hogy visszaadja a verést?", options: ["egyszer", "kétszer", "háromszor", "négyszer"], correct: 2 },
        { type: "mcq", question: "Minek álcázta magát Matyi az első alkalommal?", options: ["orvosnak", "építőmesternek", "katonának", "kereskedőnek"], correct: 1 },
        { type: "typing", question: "Ki volt a gőgös uraság a történetben?", answer: ["Döbrögi", "Döbrögi uraság"] },
        { type: "typing", question: "Mit tanult meg Döbrögi a végén?", answer: ["igazságosságot", "nem szabad igazságtalanul bánni", "megbánta tetteit"] },
      ],
    },
    {
      id: "m3_7",
      title: "Utazás a faluba",
      text: "Gábor és az édesapja szombat reggel a buszpályaudvarra siettek. Megvették a jegyeket a pénztárnál, majd megkeresték a megfelelő kocsiállást. A sárga távolsági busz pontosan érkezett. Gábor az ablak mellé ült, mert szerette nézni az elsuhanó tájat. Ahogy elhagyták a várost, a magas házakat felváltották a zöld mezők és a napraforgótáblák. A buszvezető magabiztosan irányította a nagy járművet a kanyargós utakon. Útközben több kisebb faluban is megálltak, ahol emberek szálltak fel és le. Gábor figyelte a jegyellenőrt is, aki körbejárt, hogy ellenőrizze az utasok jegyeit. Az utazás körülbelül egy órát vett igénybe. Amikor megérkeztek a célállomásra, leszálltak a buszról, és Gábor megigazította a hátizsákját. A levegő itt sokkal frissebb volt, mint a városban. Gyalog indultak tovább a nagybácsi házához, ami a falu szélén állt. Gábor nagyon élvezte a buszozást, mert így sok érdekes dolgot láthatott az út mentén.",
      questions: [
        { type: "mcq", question: "Hol vették meg a jegyeket?", options: ["a buszon", "a pénztárnál", "az interneten", "a boltban"], correct: 1 },
        { type: "mcq", question: "Hol ült Gábor a buszon?", options: ["a sofőr mellett", "a hátsó sorban", "az ablak mellett", "a folyosón"], correct: 2 },
        { type: "mcq", question: "Mennyi ideig tartott az utazás?", options: ["fél órát", "egy órát", "két órát", "egész nap"], correct: 1 },
        { type: "typing", question: "Milyen színű volt a távolsági busz?", answer: ["sárga", "Sárga"] },
        { type: "typing", question: "Kihez mentek látogatóba a faluba?", answer: ["nagybácsihoz", "a nagybácsihoz", "nagybácsi"] },
      ],
    },
    {
      id: "m3_8",
      title: "Hogyan keletkezik a szivárvány?",
      text: "Biztosan te is láttál már az égen egy gyönyörű, színes ívet egy kiadós eső után. Ezt a jelenséget szivárványnak hívjuk. De vajon hogyan jön létre? A szivárvány kialakulásához két dologra van szükség egyszerre: napsütésre és esőcseppekre. Amikor a napfény áthalad a levegőben lévő vízcseppeken, a fény megtörik és színeire bomlik. A fehér fény valójában sok színből áll, amiket ilyenkor külön-külön is láthatunk. A szivárvány színei mindig ugyanabban a sorrendben követik egymást: kívülről befelé haladva vörös, narancs, sárga, zöld, kék, indigo és ibolya. Néha még egy második, halványabb szivárványt is észrevehetünk az első felett. Érdekesség, hogy a szivárvány valójában egy teljes kör, de a földről nézve csak egy félkört, vagyis egy ívet látunk belőle. Régen az emberek sok mesét találtak ki róla, például azt, hogy a végén egy fazék arany van elrejtve. Ma már tudjuk, hogy ez a természet egyik legcsodálatosabb optikai játéka, amit a fizika törvényei magyaráznak meg.",
      questions: [
        { type: "mcq", question: "Mi kell a szivárvány kialakulásához?", options: ["csak eső", "csak napsütés", "napsütés és esőcseppek", "szél"], correct: 2 },
        { type: "mcq", question: "Milyen alakúnak látjuk a szivárványt a földről?", options: ["körnek", "ívnek", "egyenesnek", "háromszögnek"], correct: 1 },
        { type: "mcq", question: "Milyen színű a szivárvány legkülső sávja?", options: ["kék", "zöld", "vörös", "sárga"], correct: 2 },
        { type: "typing", question: "Hány színből áll a szivárvány?", answer: ["hét", "7", "hétből"] },
        { type: "typing", question: "Mit hittek régen, mi van a szivárvány végén?", answer: ["egy fazék arany", "fazék arany", "arany"] },
      ],
    },
  ],
  4: [
    {
      id: "m4_1",
      title: "A puszta hűséges barátai",
      text: "A magyar alföldi tanyákon az élet elképzelhetetlen a hűséges állatok nélkül. Bodri, a bozontos szőrű kuvasz, már hajnalban körbejárja a birtokot, hogy meggyőződjön róla, minden rendben van-e. Az éjszaka csendesen telt, csak a távoli tücskök ciripelése törte meg a nyugalmat. János gazda korán kel, hiszen a lovak már türelmetlenül várják a reggelit az istállóban. Csillag, a pej kanca, halkan nyerít, amikor megérzi a friss széna illatát. A lovak nemcsak munkatársak, hanem igazi barátok is a tanyán; régen velük szántották a földeket, ma pedig büszkén vágtatnak a végtelen rónaságon. A karámban a szürkemarhák békésen kérődznek, hatalmas szarvaik tekintélyt parancsolóan csillognak a felkelő nap fényében. Ezek az állatok jól bírják a hideget és a meleget is, igazi túlélők. A tyúkok közben hangos kotkodácsolással veszik birtokba az udvart, keresve a földben megbújó magvakat és gilisztákat. Bodri ilyenkor leheveredik a tornácra, és fél szemmel mindig az állatokat figyeli. Tudja, hogy az ő feladata a rend fenntartása és a gyengébbek védelme. A tanyasi élet kemény munka, de az állatok szeretete és közelsége minden fáradtságot megér a gazda számára.",
      questions: [
        { type: "mcq", question: "Milyen fajtájú kutya Bodri?", options: ["puli", "kuvasz", "vizsla", "komondor"], correct: 1 },
        { type: "mcq", question: "Mit csinálnak a szürkemarhák a karámban?", options: ["vágtatnak", "alszanak", "kérődznek", "játszanak"], correct: 2 },
        { type: "mcq", question: "Miért fontosak a lovak a tanyán a szöveg szerint?", options: ["csak a szépségük miatt", "mert munkatársak és barátok", "mert tejet adnak", "mert őrzik a házat"], correct: 1 },
        { type: "mcq", question: "Mikor kezdődik az élet a tanyán?", options: ["délben", "este", "hajnalban", "éjfélkor"], correct: 2 },
        { type: "typing", question: "Ki a tanya gazdája?", answer: ["János", "János gazda"] },
      ],
    },
    {
      id: "m4_2",
      title: "Az erdő ezer arca",
      text: "Az erdő egy különleges világ, ahol minden évszakban más-más csodát láthatunk. Tavasszal, amikor a természet felébred téli álmából, a fák ágain apró, világoszöld rügyek jelennek meg. A földet ilyenkor fehér hóvirágok és illatos ibolyák borítják, mintha egy színes szőnyeget terítettek volna le a fák közé. A madarak, akik a telet délen töltötték, most visszatérnek, és vidám énekükkel töltik meg a lombkoronát. Nyáron az erdő sűrű és sötétzöld lesz, a hatalmas tölgyfák és bükkfák hűvös árnyékot nyújtanak a vándoroknak a tikkasztó hőségben. Ilyenkor a legélénkebb az élet: őzek surrannak át a tisztáson, és mókusok ugrándoznak az ágak között, mogyorót keresve. Az ősz beköszöntével az erdő aranyba és vörösbe öltözik. A levelek lassan lehullanak, és zizegnek a lábunk alatt, amikor sétálunk. Ez az időszak a gyűjtögetésé; a vadállatok szorgalmasan készülnek a hideg hónapokra. Télen az erdő elcsendesedik, és ha szerencsénk van, vastag hótakaró borítja be a tájat. A kopasz ágak között csak a szél süvít, és az állatok nyomait kereshetjük a friss hóban. Az erdő nyugalma segít nekünk is kikapcsolódni és feltöltődni energiával. Vigyázzunk erre az értékes kincsre, hogy unokáink is láthassák ezeket a csodákat!",
      questions: [
        { type: "mcq", question: "Milyen virágok borítják a földet tavasszal?", options: ["rózsák", "hóvirágok és ibolyák", "tulipánok", "napraforgók"], correct: 1 },
        { type: "mcq", question: "Mit csinálnak a madarak tavasszal?", options: ["elrepülnek délre", "elcsendesednek", "visszatérnek és énekelnek", "alszanak"], correct: 2 },
        { type: "mcq", question: "Milyen színeket ölt magára az erdő ősszel?", options: ["kék és lila", "arany és vörös", "csak zöld", "fekete és fehér"], correct: 1 },
        { type: "mcq", question: "Miért jó az erdőben lenni nyáron a szöveg szerint?", options: ["mert meleg van", "mert hűvös árnyékot ad", "mert nincsenek állatok", "mert lehet tüzet rakni"], correct: 1 },
        { type: "typing", question: "Milyen állatok ugrándoznak az ágak között?", answer: ["mókusok", "mókus"] },
      ],
    },
    {
      id: "m4_3",
      title: "Hétvégi kalandok a nagypapánál",
      text: "Máté mindig izgatottan várja a péntek délutánt, mert ilyenkor a szülei elviszik őt a nagypapájához a faluba. Nagypapa egy régi, tornácos házban lakik, ahol a kert végében egy kis patak csordogál. Amint Máté megérkezik, az első útja a műhelybe vezet, ahol a nagypapa éppen egy fából készült kishajón dolgozik. „Gyere, fiam, segíts nekem lecsiszolni az oldalát!” – mondja mosolyogva az öregúr. Máté büszkén veszi kézbe a csiszolópapírt, és óvatosan dolgozik a puha fán. Munka közben a nagypapa régi történeteket mesél a gyerekkoráról, amikor még nem volt televízió, és a gyerekek egész nap a szabadban játszottak. Elmeséli, hogyan tanult meg úszni a közeli tóban, és hogyan készítettek maguknak játékokat abból, amit a természetben találtak. Este, amikor a nap már lebukott a dombok mögött, a tornácon ülve hallgatják a tücskök zenéjét. Nagymama ilyenkor frissen sült pogácsát hoz ki, aminek az illata belengi az egész udvart. Máté ilyenkor érzi igazán, milyen jó dolog a család tagjának lenni, és mennyi mindent tanulhat az idősebbektől. A nagypapa bölcsessége és türelme mindig lenyűgöző a kisfiú számára, aki elhatározza, hogy ő is ilyen ügyes kezű és jószívű ember lesz, ha felnő.",
      questions: [
        { type: "mcq", question: "Hol lakik a nagypapa?", options: ["egy nagyvárosban", "egy faluban", "az erdő közepén", "a tengerparton"], correct: 1 },
        { type: "mcq", question: "Mit készít a nagypapa a műhelyben?", options: ["egy asztalt", "egy kishajót", "egy székeket", "egy autót"], correct: 1 },
        { type: "mcq", question: "Miről mesél a nagypapa munka közben?", options: ["a munkájáról", "a gyerekkoráról", "a hírekről", "a szomszédokról"], correct: 1 },
        { type: "mcq", question: "Mit csinálnak este a tornácon?", options: ["tévét néznek", "hallgatják a tücskök zenéjét", "olvasnak", "alszanak"], correct: 1 },
        { type: "typing", question: "Mit hoz ki a nagymama este?", answer: ["pogácsát", "frissen sült pogácsát"] },
      ],
    },
    {
      id: "m4_4",
      title: "Az első nap az új osztályban",
      text: "Szeptember elseje mindig különleges nap a gyerekek életében, de Balázs számára az idei év még izgalmasabb volt, mint a korábbiak. A családja a nyáron költözött át egy másik városba, így Balázsnak új iskolában kellett megkezdenie a negyedik osztályt. Reggel, ahogy felvette az ünneplő ruháját, egy kicsit izgult: vajon milyenek lesznek az osztálytársai? Kedves lesz-e a tanító néni? Az iskola udvarán hatalmas volt a nyüzsgés, mindenki a barátait kereste. Balázs egyedül állt a tömegben, amíg egy barna hajú fiú oda nem lépett hozzá. „Szia, én Marci vagyok! Te vagy az új fiú?” – kérdezte barátságosan. Balázs megkönnyebbülten bólintott, és hamarosan már együtt mentek fel a tanterembe. Az osztályfőnök, Judit néni, nagy szeretettel fogadta őket. A terem falait színes rajzok és térképek díszítették, a padokon pedig ott sorakoztak az új, illatos tankönyvek. Az első órán mindenki bemutatkozott, és elmesélte a legérdekesebb nyári élményét. Balázs a hegyi túrázásról beszélt, amit a szüleivel tett meg a Magas-Tátrában. A nap végére Balázs már nem érezte magát idegennek. Rájött, hogy az újrakezdés bár nehéz, de sok új barátot és lehetőséget is tartogat.",
      questions: [
        { type: "mcq", question: "Hányadik osztályt kezdte el Balázs?", options: ["harmadik", "negyedik", "ötödik", "első"], correct: 1 },
        { type: "mcq", question: "Miért volt izgatott Balázs az első napon?", options: ["mert nem tanult", "mert új iskolába került", "mert elvesztette a táskáját", "mert álmos volt"], correct: 1 },
        { type: "mcq", question: "Ki lépett oda Balázshoz az udvaron?", options: ["a tanító néni", "egy Marci nevű fiú", "az igazgató", "egy kislány"], correct: 1 },
        { type: "mcq", question: "Miről mesélt Balázs a bemutatkozáskor?", options: ["a kutyájáról", "a hegyi túrázásról", "a régi iskolájáról", "a kedvenc ételéről"], correct: 1 },
        { type: "typing", question: "Hogy hívják az osztályfőnököt?", answer: ["Judit néni", "Judit"] },
      ],
    },
    {
      id: "m4_5",
      title: "A Mikulás várása",
      text: "December elején, amikor az első hópihék táncolni kezdenek a levegőben, minden gyerek szíve izgalommal telik meg. December ötödikén este nálunk is nagy a készülődés, hiszen tudjuk, hogy éjszaka megérkezik a Mikulás. Luca és Peti gondosan megtisztították a csizmáikat, hogy egyetlen porszem se maradjon rajtuk, majd kitették őket az ablakpárkányra. „Vajon idén is kapunk virgácsot?” – kérdezte Peti halkan, miközben a sötét utcát figyelte. Luca csak mosolygott, mert tudta, hogy bár néha rosszalkodtak, alapvetően jó gyerekek voltak. Lefekvés előtt még egy kis tálka kekszet és egy pohár tejet is készítettek az asztalra, hátha a Mikulás megéhezik a hosszú út során. Másnap reggel, alighogy felkelt a nap, a gyerekek mezítláb szaladtak az ablakhoz. A csizmák tele voltak mindenféle földi jóval: piros almával, mogyoróval, szaloncukorral és egy-egy kisebb játékkal is. A Mikulás még egy kedves levelet is hagyott nekik, amiben megdicsérte őket a szorgalmukért. Bár a Mikulást magát sosem látták, a szeretet és a figyelem, amit tőle kaptak, az egész napjukat bearanyozta. Ez az ünnep emlékeztet minket arra, hogy adni legalább olyan jó érzés, mint kapni, és hogy a jóság mindig elnyeri méltó jutalmát.",
      questions: [
        { type: "mcq", question: "Mikkor érkezik a Mikulás a szöveg szerint?", options: ["december 24-én", "december 6-án hajnalban", "január 1-jén", "húsvétkor"], correct: 1 },
        { type: "mcq", question: "Mit csináltak a gyerekek a csizmáikkal?", options: ["kidobták őket", "megtisztították és az ablakba tették", "eldugták őket", "újat vettek"], correct: 1 },
        { type: "mcq", question: "Mit tettek az asztalra a Mikulásnak?", options: ["vizet és kenyeret", "kekszet és tejet", "gyümölcsöt", "semmit"], correct: 1 },
        { type: "mcq", question: "Mik voltak a csizmákban reggel?", options: ["csak virgács", "alma, mogyoró és édesség", "ruhák", "könyvek"], correct: 1 },
        { type: "typing", question: "Hogy hívják a két gyereket a történetben?", answer: ["Luca és Peti", "Luca", "Peti"] },
      ],
    },
    {
      id: "m4_6",
      title: "Toldi Miklós ereje",
      text: "Arany János híres elbeszélő költeménye, a Toldi, egy olyan ifjúról szól, akinek ereje és bátorsága párját ritkította a magyar vidéken. Toldi Miklós egy egyszerű falusi legény volt, aki a mezőn dolgozott, de szíve mélyén vitézi tettekről álmodozott. Egy nap, amikor Laczfi nádor és serege elvonult mellette, az egyik katona gúnyosan megkérdezte tőle az utat Buda felé. Miklós, hogy megmutassa erejét, egy hatalmas petrencés rudat emelt fel fél kézzel, és azzal mutatta meg az irányt a seregnek. A katonák ámultak a hihetetlen erő láttán, de a nádor nem vette őt magával. Később Miklósnak menekülnie kellett otthonról, mert véletlenül megölt egy katonát, aki bosszantotta őt. Útja során sok kalandba keveredett, például puszta kézzel győzött le két éhes farkast a nádasban, akik az életére törtek. Ez a tett is bizonyította, hogy nemcsak erős, hanem rendkívül bátor is. Végül Budára érkezett, ahol egy cseh vitézzel kellett megküzdenie, aki minden magyar vitézt legyőzött korábban. Miklós diadalmaskodott, és ezzel kivívta a király elismerését is. Toldi alakja a magyar nép számára az őszinte, tiszta szívű hős jelképe, aki a legnagyobb nehézségek közepette is megállja a helyét.",
      questions: [
        { type: "mcq", question: "Ki írta a Toldi című művet?", options: ["Petőfi Sándor", "Arany János", "Ady Endre", "Móra Ferenc"], correct: 1 },
        { type: "mcq", question: "Mivel mutatta meg Miklós az utat a katonáknak?", options: ["a kezével", "egy petrencés rúddal", "egy karddal", "egy zászlóval"], correct: 1 },
        { type: "mcq", question: "Milyen állatokat győzött le Miklós a nádasban?", options: ["medvéket", "farkasokat", "oroszlánokat", "vaddisznókat"], correct: 1 },
        { type: "mcq", question: "Hol zajlott a végső küzdelem a cseh vitézzel?", options: ["falun", "Budán", "az erdőben", "a tengeren"], correct: 1 },
        { type: "typing", question: "Milyen vitézzel küzdött meg Miklós Budán?", answer: ["cseh", "cseh vitéz", "cseh vitézzel"] },
      ],
    },
    {
      id: "m4_7",
      title: "Utazás a falusi autóbusszal",
      text: "A falusi közlekedés egyik legfontosabb eszköze a menetrend szerinti autóbusz, amely összeköti a kistelepüléseket a közeli várossal. Anna és az édesanyja szombat reggel a falu központjában lévő megállóban várakoztak. A levegő még hűvös volt, és a közeli pékségből friss kenyér illata szállt. Hamarosan feltűnt a kanyarban a nagy, sárga busz, amely hangos fékezéssel állt meg előttük. Anna felszállt, és büszkén mutatta meg a diákigazolványát a sofőrnek, aki kedvesen köszönt neki. A buszon már sokan ültek: nénikék kosarakkal, akik a piacra tartottak, és diákok, akik különórára utaztak be a városba. Anna az ablak mellé ült, mert imádta nézni a tájat. Ahogy a busz zötykölődött a kátyús utakon, elhaladtak a végtelen búzatáblák és a legelésző tehenek mellett. Minden megállónál újabb utasok érkeztek, és a busz belseje megtelt halk duruzsolással. Az emberek ismerték egymást, és vidáman beszélgettek a napi hírekről. Bár az út néha rázós volt, Anna élvezte a közösségi utazás élményét. Rájött, hogy a busz nemcsak egy jármű, hanem egy hely is, ahol a falusi emberek találkozhatnak és megoszthatják egymással örömeiket. Amikor beértek a városi pályaudvarra, Anna hálával gondolt a sofőrre, aki minden nap biztonságban célba juttatja az utasokat.",
      questions: [
        { type: "mcq", question: "Hol várakozott Anna és az édesanyja?", options: ["a vasútállomáson", "a falu központjában lévő megállóban", "a házuk előtt", "a boltban"], correct: 1 },
        { type: "mcq", question: "Mit mutatott meg Anna a buszsofőrnek?", options: ["a jegyét", "a diákigazolványát", "a táskáját", "a könyvét"], correct: 1 },
        { type: "mcq", question: "Kik utaztak még a buszon a szöveg szerint?", options: ["csak gyerekek", "nénikék kosarakkal és diákok", "katonák", "turisták"], correct: 1 },
        { type: "mcq", question: "Milyen volt az út a busz számára?", options: ["sima és gyors", "néha rázós és zötykölődő", "unalmas", "veszélyes"], correct: 1 },
        { type: "typing", question: "Milyen színű volt az autóbusz?", answer: ["sárga", "Sárga"] },
      ],
    },
    {
      id: "m4_8",
      title: "A természet festője: A szivárvány",
      text: "A szivárvány az egyik leglátványosabb természeti jelenség, amely mindig ámulatba ejti az embereket. De vajon elgondolkoztál-e már azon, hogyan keletkezik ez a színes híd az égen? A tudomány válasza egyszerű, mégis lenyűgöző. A szivárvány kialakulásához két alapvető feltétel szükséges: a napfény és a levegőben lévő vízcseppek. Amikor a fehér napfény áthalad egy esőcseppen, a fény megtörik és különböző színeire bomlik szét. Ezt a folyamatot fénytörésnek nevezzük. A vízcsepp úgy működik, mint egy apró prizma, amely láthatóvá teszi a fényben rejlő összes színt. A szivárvány színei mindig meghatározott sorrendben követik egymást: a külső ív vörös, majd narancs, sárga, zöld, kék, indigo és végül az ibolya következik. Érdekesség, hogy szivárványt nemcsak eső után láthatunk, hanem vízesések közelében vagy akár a kerti locsoló sugarában is, ha jó szögben esik rá a fény. Bár a földről nézve csak egy félkört látunk, ha egy repülőgépen ülnénk, láthatnánk, hogy a szivárvány valójában egy teljes kör. Régen az emberek azt hitték, hogy a szivárvány egy híd az istenek és az emberek világa között. Ma már tudjuk, hogy ez a fizika csodálatos játéka, amely emlékeztet minket a természet törvényszerűségeire és szépségére.",
      questions: [
        { type: "mcq", question: "Mi kell a szivárvány kialakulásához?", options: ["csak szél", "napfény és vízcseppek", "csak sötétség", "jég és hó"], correct: 1 },
        { type: "mcq", question: "Hogy hívják azt a folyamatot, amikor a fény színeire bomlik?", options: ["fényvisszaverődés", "fénytörés", "fényszórás", " fényelnyelés"], correct: 1 },
        { type: "mcq", question: "Milyen színű a szivárvány legbelső íve?", options: ["vörös", "sárga", "ibolya", "zöld"], correct: 2 },
        { type: "mcq", question: "Milyen alakú valójában a szivárvány?", options: ["háromszög", "félkör", "teljes kör", "négyzet"], correct: 2 },
        { type: "typing", question: "Mihez hasonlítja a szöveg a vízcseppet?", answer: ["prizma", "prizmához", "apró prizma"] },
      ],
    },
  ],
  5: [
    {
      id: "m5_1",
      title: "A csodaszarvas regéje",
      text: "A magyarok eredetének egyik legszebb története a csodaszarvas regéje. A monda szerint Hunor és Magor, Enéh és Ménrót két fia, egy napon vadászni indultak vitézeikkel. Ahogy a pusztán vágtattak, hirtelen egy gyönyörű, ezüstösen csillogó szarvas tűnt fel előttük. Az állat kecsesen futott, és mindig éppen csak annyira maradt előttük, hogy ne veszítsék szem elől, de ne is tudják elejteni. A vadászok napokon át követték a vadat, átkelve folyókon és mocsarakon, mígnem egy csodálatos, dús legelőkkel és tiszta vizű forrásokkal teli vidékre értek. Ez a hely Meótisz ingoványos területe volt, amely védett volt az ellenségtől, de bőséges élelmet kínált. Itt a szarvas hirtelen köddé vált, Hunor és Magor pedig rájöttek, hogy az állat valójában egy égi jel volt, amely új hazába vezette őket. A két testvér és vitézeik itt telepedtek le, és feleséget választottak maguknak az alán fejedelmek lányai közül. Hunor leszármazottaiból lettek a hunok, Magor utódaiból pedig a magyarok. Ez a rege nemcsak a vándorlásról szól, hanem a testvéri összetartozásról és a sors vezetésébe vetett hitről is. A csodaszarvas alakja azóta is a magyar népművészet és költészet egyik legfontosabb jelképe, amely a szabadságvágyat és az újrakezdés reményét hordozza.",
      questions: [
        { type: "mcq", question: "Ki volt Hunor és Magor apja a monda szerint?", options: ["Árpád", "Ménrót", "Attila", "Emese"], correct: 1 },
        { type: "mcq", question: "Milyen állatot követtek a vadászok?", options: ["egy aranyhalat", "egy fehér lovat", "egy csodaszarvast", "egy turulmadarat"], correct: 2 },
        { type: "mcq", question: "Hova vezette a szarvas a vitézeket?", options: ["a Kárpát-medencébe", "Meótisz ingoványaihoz", "a tengerpartra", "a hegyekbe"], correct: 1 },
        { type: "mcq", question: "Mit jelképez a csodaszarvas a magyar kultúrában?", options: ["a pusztulást", "a szabadságvágyat és az újrakezdést", "a gazdagságot", "a háborút"], correct: 1 },
        { type: "typing", question: "Hogy hívták Hunor és Magor édesanyját?", answer: ["Enéh", "Enéhnek"] },
        { type: "typing", question: "Melyik nép származik Magor utódaiból?", answer: ["magyarok", "magyar", "a magyarok"] },
      ],
    },
    {
      id: "m5_2",
      title: "Szent István, az államalapító",
      text: "István király a magyar történelem egyik legmeghatározóbb alakja, aki a 10. század végén és a 11. század elején uralkodott. Géza fejedelem fiaként született Vajk néven, de a keresztségben az István nevet kapta. Felismerte, hogy a magyarság csak akkor maradhat fenn Európa szívében, ha felveszi a kereszténységet és szilárd államszervezetet hoz létre. 1000-ben (vagy 1001-ben) koronázták királlyá a pápától kapott koronával, amivel Magyarország elismert keresztény királysággá vált. Uralkodása alatt tíz egyházmegyét alapított, és elrendelte, hogy minden tíz falu építsen egy templomot. Törvénykönyvei szigorúak voltak, de a rendet és a biztonságot szolgálták. Nemcsak a hit terjesztésében játszott szerepet, hanem a vármegyerendszer kiépítésével a közigazgatást is modernizálta. Fia, Imre herceg számára írt 'Intelmei' a mai napig a bölcs kormányzás alapművének számítanak, amelyben a türelemre, az alázatra és az idegenek befogadására intette utódját. Istvánt 1083-ban avatták szentté, és azóta is őt tekintjük a magyar állam alapítójának. Ünnepe, augusztus 20-a, Magyarország egyik legfontosabb nemzeti ünnepe, amikor az államalapításra és az új kenyérre emlékezünk.",
      questions: [
        { type: "mcq", question: "Mi volt István eredeti neve?", options: ["Álmos", "Vajk", "Koppány", "Bulcsú"], correct: 1 },
        { type: "mcq", question: "Mikor koronázták Istvánt királlyá?", options: ["896-ban", "1000-ben", "1222-ben", "1526-ban"], correct: 1 },
        { type: "mcq", question: "Hány templom építését rendelte el a falvak számára?", options: ["minden faluban egyet", "minden tíz falu után egyet", "csak a városokban", "nem rendelt el ilyet"], correct: 1 },
        { type: "mcq", question: "Kinek írta István az 'Intelmeket'?", options: ["a népnek", "Imre hercegnek", "a pápának", "Gellért püspöknek"], correct: 1 },
        { type: "typing", question: "Ki volt István király apja?", answer: ["Géza", "Géza fejedelem"] },
        { type: "typing", question: "Melyik napon ünnepeljük Szent Istvánt?", answer: ["augusztus 20", "augusztus 20-án", "augusztus huszadika"] },
      ],
    },
    {
      id: "m5_3",
      title: "Mátyás király és az igazság",
      text: "Hunyadi Mátyás, akit a nép csak 'Igazságos Mátyásként' emleget, a 15. század második felében uralkodott. Ő volt az első olyan magyar király, akit nem dinasztikus úton, hanem a nemesség választott meg a Duna jegén. Mátyás udvara a reneszánsz kultúra központjává vált, híres könyvtára, a Bibliotheca Corviniana, világszerte ismert volt. Uralkodása alatt megerősítette a királyi hatalmat, és létrehozta a híres 'fekete sereget', amely Európa egyik legmodernebb zsoldoshadserege volt. A nép körében számos monda kering róla, amelyekben gyakran álruhát öltve járja az országot, hogy saját szemével lássa a szegények sorsát és megbüntesse a gőgös urakat. Az egyik legismertebb történetben kolozsvári bírót leckézteti meg, aki igazságtalanul bánt a polgárokkal. Mátyás nemcsak hadvezérként, hanem diplomataként is kiváló volt, és igyekezett Magyarországot a térség vezető hatalmává tenni. Halála után a nép úgy érezte, hogy az igazság is odaveszett, amit a közmondás is őriz: 'Meghalt Mátyás, oda az igazság'. Alakja a magyar történelemben a dicsőséges, erős és igazságos uralkodó eszményképévé vált.",
      questions: [
        { type: "mcq", question: "Hogyan választották meg Mátyást királlyá?", options: ["öröklés útján", "a Duna jegén választották meg", "háborúban győzött", "a pápa nevezte ki"], correct: 1 },
        { type: "mcq", question: "Hogy hívták Mátyás híres zsoldoshadseregét?", options: ["vörös sereg", "fekete sereg", "fehér sereg", "turul sereg"], correct: 1 },
        { type: "mcq", question: "Mi volt a neve Mátyás híres könyvtárának?", options: ["Magyar Könyvtár", "Bibliotheca Corviniana", "Királyi Archívum", "Reneszánsz Gyűjtemény"], correct: 1 },
        { type: "mcq", question: "Milyen stílusirányzat jellemezte Mátyás udvarát?", options: ["gótika", "barokk", "reneszánsz", "klasszicizmus"], correct: 2 },
        { type: "typing", question: "Hogy hívták Mátyás apját, a törökverő hőst?", answer: ["Hunyadi János", "János"] },
        { type: "typing", question: "Milyen ruhában járt Mátyás a mondák szerint a nép közé?", answer: ["álruhában", "álruha"] },
      ],
    },
    {
      id: "m5_4",
      title: "Petőfi Sándor: János vitéz",
      text: "Petőfi Sándor 1844-ben írt elbeszélő költeménye, a János vitéz, a magyar irodalom egyik legnépszerűbb alkotása. A történet főhőse Kukorica Jancsi, egy szegény juhászlegény, aki szerelmes a szép Iluskába. Jancsinak el kell hagynia a faluját, mert a nyájat elszéledni hagyta, miközben Iluskával beszélgetett. Útja során katonának áll, és huszárként eljut Franciaországba, ahol megmenti a francia királylányt a törökök fogságából. Hőstetteiért a király gazdaggá akarja tenni, de Jancsi szíve hazahúzza Iluskához. Hazatérve azonban megtudja, hogy szerelme meghalt a gonosz mostoha kínzásai miatt. Jancsi bánatában újra útnak indul, és számos mesés kalandba keveredett: óriásokkal küzd meg, boszorkányokat győz le, és végül eljut Tündérországba. Itt a tóba dobott rózsa, amely Iluska sírjáról származott, visszahozza kedvesét az életbe. Jancsi, aki ekkor már a János vitéz nevet viseli, Tündérország fejedelme lesz Iluska oldalán. A mű a népmesei elemeket ötvözi a valósággal, és azt üzeni, hogy a kitartás, a hűség és a tiszta szív végül elnyeri méltó jutalmát. Petőfi nyelvezete egyszerű, mégis képszerű, ami közel hozza a történetet minden korosztályhoz.",
      questions: [
        { type: "mcq", question: "Mi volt a főhős eredeti neve?", options: ["János vitéz", "Kukorica Jancsi", "Toldi Miklós", "Ludas Matyi"], correct: 1 },
        { type: "mcq", question: "Milyen katonának állt Jancsi?", options: ["gyalogosnak", "huszárnak", "tüzérnek", "haditengerésznek"], correct: 1 },
        { type: "mcq", question: "Melyik ország királylányát mentette meg a törököktől?", options: ["angol", "francia", "német", "olasz"], correct: 1 },
        { type: "mcq", question: "Hova jut el Jancsi a történet végén?", options: ["Budára", "Tündérországba", "Amerikába", "a pokolba"], correct: 1 },
        { type: "typing", question: "Hogy hívták Jancsi szerelmét?", answer: ["Iluska", "Iluskát"] },
        { type: "typing", question: "Milyen virág hozta vissza Iluskát az életbe?", answer: ["rózsa", "egy rózsa"] },
      ],
    },
    {
      id: "m5_5",
      title: "A Dunakanyar szépségei",
      text: "A Dunakanyar Magyarország egyik legszebb és leglátogatottabb tájegysége, ahol a folyó a Börzsöny és a Visegrádi-hegység között kanyarogva északról délre fordul. Ez a vidék nemcsak természeti szépségekben, hanem történelmi emlékekben is rendkívül gazdag. Visegrád városa a középkorban a magyar királyok egyik székhelye volt. A fellegvár, amely a hegytetőn magasodik, lenyűgöző kilátást nyújt a folyó kanyarulatára. Itt őrizték egykor a szent koronát is. Esztergom, a Dunakanyar északi kapuja, a magyar katolikus egyház központja, ahol az ország legnagyobb bazilikája található. Szentendre városa pedig mediterrán hangulatú utcáival, galériáival és a Szabadtéri Néprajzi Múzeummal (Skanzen) vonzza a turistákat. A környék kiváló kirándulóhelyeket kínál: a Prédikálószék-kilátó vagy a Rám-szakadék a túrázók kedvence. A Dunakanyar élővilága is különleges, a folyóparti ártéri erdők számos védett madárfajnak adnak otthont. A térség hajóval is könnyen megközelíthető Budapestről, ami különleges élményt nyújt a látogatóknak. A Dunakanyar az UNESCO világörökségi várományosi listáján is szerepel, mint az ember és a természet harmonikus együttélésének példája.",
      questions: [
        { type: "mcq", question: "Melyik két hegység között kanyarog a Duna ezen a szakaszon?", options: ["Mátra és Bükk", "Börzsöny és Visegrádi-hegység", "Bakony és Mecsek", "Alpok és Kárpátok"], correct: 1 },
        { type: "mcq", question: "Melyik városban található Magyarország legnagyobb bazilikája?", options: ["Budapesten", "Esztergomban", "Vácott", "Szentendrén"], correct: 1 },
        { type: "mcq", question: "Mit őriztek egykor a visegrádi fellegvárban?", options: ["a királyi kincstárat", "a szent koronát", "hadi titkokat", "élelmet"], correct: 1 },
        { type: "mcq", question: "Hogy hívják a szentendrei Szabadtéri Néprajzi Múzeumot?", options: ["Vár", "Skanzen", "Galéria", "Panoptikum"], correct: 1 },
        { type: "typing", question: "Melyik város híres mediterrán hangulatáról és galériáiról?", answer: ["Szentendre", "Szentendrén"] },
        { type: "typing", question: "Melyik kilátóból nyílik a legszebb kilátás a Dunakanyarra?", answer: ["Prédikálószék", "Prédikálószék-kilátó"] },
      ],
    },
    {
      id: "m5_6",
      title: "Eger várának védelme",
      text: "Az 1552-es egri ostrom a magyar történelem egyik legdicsőségesebb eseménye, amikor a maroknyi védősereg megállította a hatalmas török túlerőt. A várat Dobó István kapitány vezette, aki esküvel kötelezte katonáit, hogy az utolsó csepp vérükig védik a falakat. A török sereg, amelyet Ahmed és Ali pasa vezetett, több mint tízszeres túlerőben volt, mégis kudarcot vallott. Az ostrom során nemcsak a katonák, hanem az egri nők is hősiesen küzdöttek: forró vizet és szurkot öntöttek a falakra mászó ellenségre, és kövekkel dobálták őket. Gárdonyi Géza 'Egri csillagok' című regénye állít örök emléket ennek a küzdelemnek, bemutatva Bornemissza Gergely alakját is, aki ötletes tüzes kerekeivel és bombáival okozott nagy veszteséget a törököknek. A harmincnyolc napig tartó ostrom végén a törökök, látva a magyarok elszántságát és a közelgő telet, elvonultak a vár alól. Ez a győzelem reményt adott az egész országnak, és bebizonyította, hogy az összefogás és a hazaszeretet képes legyőzni a legnagyobb túlerőt is. Eger vára ma is a nemzeti büszkeség szimbóluma, ahol minden évben megemlékeznek a hős védőkről.",
      questions: [
        { type: "mcq", question: "Ki volt az egri vár kapitánya az 1552-es ostrom idején?", options: ["Zrínyi Miklós", "Dobó István", "Hunyadi János", "Rákóczi Ferenc"], correct: 1 },
        { type: "mcq", question: "Melyik író írt híres regényt az egri ostromról?", options: ["Jókai Mór", "Gárdonyi Géza", "Mikszáth Kálmán", "Móra Ferenc"], correct: 1 },
        { type: "mcq", question: "Hogyan segítettek az egri nők a védekezésben?", options: ["ételt főztek", "forró szurkot és vizet öntöttek az ellenségre", "elmenekültek", "imádkoztak"], correct: 1 },
        { type: "mcq", question: "Ki volt a magyar sereg ötletes tűzmestere?", options: ["Dobó István", "Bornemissza Gergely", "Mekcsey István", "Ahmed pasa"], correct: 1 },
        { type: "typing", question: "Hány napig tartott az egri vár ostroma?", answer: ["38", "harmincnyolc"] },
        { type: "typing", question: "Melyik birodalom serege támadta meg Egert?", answer: ["török", "Török Birodalom", "oszmán"] },
      ],
    },
    {
      id: "m5_7",
      title: "A Hortobágy és a puszta világa",
      text: "A Hortobágyi Nemzeti Park Magyarország legrégebbi és legnagyobb kiterjedésű nemzeti parkja, amely az UNESCO világörökség része. Ez a vidék a 'puszta' szimbóluma, ahol a végtelen rónaságot csak néhol szakítja meg egy-egy gémeskút vagy tanya. A Hortobágy élővilága egyedülálló: itt él a híres magyar szürkemarha, a rackajuh és a nóniusz ló. A pásztorélet hagyományai a mai napig élnek: a csikósok, gulyások és juhászok őrzik őseik tudását és viseletét. A puszta egyik leglátványosabb eseménye a tavaszi és őszi madárvonulás, különösen a darvak érkezése, amikor több tízezer madár pihen meg a halastavaknál. A Hortobágy jelképe a Kilenclyukú híd, amely az ország leghosszabb kőhídja. A látogatók megismerkedhetnek a pusztai ételekkel is, mint például a bográcsban készült gulyással vagy a slambuccal. A délibáb jelensége is gyakori itt a forró nyári napokon, amikor a távoli tárgyak a levegőben lebegni látszanak. A Hortobágy nemcsak egy táj, hanem a magyar néplélek és szabadságvágy megtestesítője is, amely Petőfi Sándort is számos vers írására ihlette.",
      questions: [
        { type: "mcq", question: "Melyik híd a Hortobágy legismertebb jelképe?", options: ["Lánchíd", "Kilenclyukú híd", "Megyeri híd", "Sóhajok hídja"], correct: 1 },
        { type: "mcq", question: "Melyik madár vonulása vonzza a legtöbb látogatót ősszel?", options: ["gólya", "daru", "fecske", "sas"], correct: 1 },
        { type: "mcq", question: "Milyen különleges optikai jelenség látható a pusztán nyáron?", options: ["szivárvány", "délibáb", "sarki fény", "napfogyatkozás"], correct: 1 },
        { type: "mcq", question: "Melyik állat nem jellemző a hortobágyi pusztára?", options: ["szürkemarha", "jegesmedve", "rackajuh", "nóniusz ló"], correct: 1 },
        { type: "typing", question: "Hogy hívják a lovakat őrző pásztort?", answer: ["csikós", "csikósok"] },
        { type: "typing", question: "Milyen kút jellemző a pusztai tájra?", answer: ["gémeskút", "gémes"] },
      ],
    },
    {
      id: "m5_8",
      title: "Arany János: Családi kör",
      text: "Arany János 1851-ben írt verse, a Családi kör, a magyar líra egyik legszebb életképe. A költemény egy falusi este hangulatát idézi fel, bemutatva egy parasztcsalád békés hétköznapjait. A vers elején a természet elcsendesedését láthatjuk: a nap lemegy, a bogarak zümmögése elhallgat, és a falu nyugovóra tér. A középpontban a ház tornáca áll, ahol a családtagok összegyűlnek. Az anya a vacsorát készíti, a gyerekek játszanak, a nagypapa pedig a múltról mesél. A vers egyik legfontosabb mozzanata a családfő, a gazda hazatérése a mezőről. Fáradt, de a családja körében megnyugvást talál. Megjelenik egy vendég is, egy kiszolgált katona, aki történeteivel színesíti az estét. Arany mesterien ábrázolja a részleteket: a macska dorombolását, a lámpa fényét, az ételek illatát. A mű nemcsak egy egyszerű leírás, hanem az otthon melegének, a biztonságnak és a szeretetnek a dicsérete. A 'Családi kör' azt sugallja, hogy a legnagyobb nehézségek idején is a család az a biztos pont, ahol az ember békére lelhet. A vers ritmusa és dallamossága miatt könnyen tanulható és maradandó élményt nyújt az olvasónak.",
      questions: [
        { type: "mcq", question: "Milyen napszakot ábrázol a vers?", options: ["reggel", "dél", "este", "éjfél"], correct: 2 },
        { type: "mcq", question: "Ki tér haza a mezőről a családhoz?", options: ["a szomszéd", "a gazda (édesapa)", "a postás", "a tanító"], correct: 1 },
        { type: "mcq", question: "Ki érkezik vendégségbe a családhoz?", options: ["egy vándorló zenész", "egy kiszolgált katona", "a király", "egy kereskedő"], correct: 1 },
        { type: "mcq", question: "Mit jelképez a vers a szöveg szerint?", options: ["a magányt", "az otthon melegét és a szeretetet", "a háború borzalmait", "a városi életet"], correct: 1 },
        { type: "typing", question: "Ki írta a Családi kör című verset?", answer: ["Arany János", "Arany"] },
        { type: "typing", question: "Mit csinál az anya a versben?", answer: ["vacsorát készít", "főz", "vacsorát főz"] },
      ],
    },
  ],
  6: [
    {
      id: "m6_1",
      title: "Eger várának dicsősége (1552)",
      text: "Az 1552-es esztendő a magyar történelem egyik legválságosabb, mégis legfényesebb fejezete volt. A hatalmas Oszmán Birodalom seregei, Ahmed és Ali pasa vezetésével, sorra foglalták el a magyar várakat, és végül Eger alá érkeztek. Eger vára volt az utolsó jelentős akadály, amely megállíthatta a törökök északi irányú terjeszkedését. A vár védelmét Dobó István kapitány látta el, akinek irányítása alatt mindössze kétezer-egyszáz védő állt szemben a közel nyolcvanezres török ármádiával. Dobó tudta, hogy csak a legvégső elszántság mentheti meg a várat, ezért megeskette katonáit: 'Esküszöm az egy élő Istenre, hogy Eger várát el nem hagyom, a várat pogány kézre nem adom!' Az ostrom harmincnyolc napig tartott, és a törökök minden elképzelhető eszközt bevetettek: ágyúzták a falakat, aknákat ástak, és sorozatos rohamokat indítottak. A védők között nemcsak katonák, hanem az egri nők is hősiesen küzdöttek. Amikor a törökök már majdnem áttörték a falakat, az asszonyok forró szurkot, vizet és köveket zúdítottak az ellenségre, megmutatva, hogy a hazaszeretet nem ismer nemi különbséget. Bornemissza Gergely, a vár ötletes tűzmestere, saját készítésű bombáival és tüzes kerekeivel okozott hatalmas pusztítást a támadók soraiban. A törökök végül, látva a magyarok megtörhetetlen ellenállását és a közelgő hideg őszi időt, október 17-én feladták az ostromot és elvonultak. Ez a győzelem világraszóló diadal volt, amely évtizedekre megakasztotta a török hódítást, és reményt adott a meggyötört országnak. Gárdonyi Géza 'Egri csillagok' című regénye állított örök emléket ezeknek a hősöknek, akik bebizonyították, hogy a falak ereje nem a kőben, hanem a védők lelkében van.",
      questions: [
        { type: "mcq", question: "Ki volt az egri vár kapitánya az 1552-es ostrom idején?", options: ["Zrínyi Miklós", "Dobó István", "Hunyadi János", "Bornemissza Gergely"], correct: 1 },
        { type: "mcq", question: "Körülbelül mekkora volt a török sereg létszáma?", options: ["kétezer fő", "tízezer fő", "nyolcvanezer fő", "félmillió fő"], correct: 2 },
        { type: "mcq", question: "Hogyan segítettek az egri nők a védekezésben?", options: ["ételt főztek a katonáknak", "forró szurkot és vizet öntöttek az ellenségre", "elmenekültek a várból", "imádkoztak a templomban"], correct: 1 },
        { type: "mcq", question: "Melyik író örökítette meg az ostromot az 'Egri csillagok' című művében?", options: ["Jókai Mór", "Mikszáth Kálmán", "Gárdonyi Géza", "Arany János"], correct: 2 },
        { type: "typing", question: "Hány napig tartott az egri vár ostroma?", answer: ["38", "harmincnyolc"] },
        { type: "typing", question: "Ki volt a vár ötletes tűzmestere, aki bombákat készített?", answer: ["Bornemissza Gergely", "Bornemissza"] },
      ],
    },
    {
      id: "m6_2",
      title: "II. Rákóczi Ferenc és a szabadságharc",
      text: "A 18. század elején Magyarország a Habsburg-ház elnyomása alatt sínylődött. A nemesség és a parasztság egyaránt elégedetlen volt a magas adók, a vallásszabadság korlátozása és az idegen katonaság jelenléte miatt. Ebben a feszült helyzetben állt a mozgalom élére II. Rákóczi Ferenc, az ország egyik leggazdagabb főura. Rákóczi, aki korábban Bécsben nevelkedett, 1703-ban adta ki híres kiáltványát Brezán várában, amelyben hadba hívta az ország minden lakóját a szabadságért. A zászlókra a 'Cum Deo pro Patria et Libertate' (Istennel a hazáért és a szabadságért) felirat került. A szabadságharc kezdetben hatalmas sikereket aratott; a kuruc seregek – ahogy a felkelőket nevezték – az ország nagy részét ellenőrzésük alá vonták. Rákóczi célja egy önálló, független magyar állam megteremtése volt, ahol a rendek és a nép jogai érvényesülnek. 1707-ben az ónodi országgyűlésen kimondták a Habsburg-ház trónfosztását, ami a küzdelem tetőpontját jelentette. Azonban a nemzetközi helyzet kedvezőtlenre fordult, a francia segélyek elmaradtak, és a pestisjárvány is tizedelte a lakosságot. A kuruc sereg, bár vitézül harcolt, fokozatosan visszaszorult a túlerőben lévő labanc (császári) csapatokkal szemben. A szabadságharc végül 1711-ben a szatmári békével zárult, amely bár nem hozta el a teljes függetlenséget, biztosította a rendi alkotmányt és a vallásszabadságot. Rákóczi nem fogadta el a kegyelmet, és önkéntes száműzetésbe vonult, végül a törökországi Rodostóban hunyt el. Alakja a magyar szabadságvágy és az önfeláldozó hazaszeretet örök jelképe maradt, akit a nép csak 'nagyságos fejedelemként' emlegetett.",
      questions: [
        { type: "mcq", question: "Melyik évben kezdődött a Rákóczi-szabadságharc?", options: ["1526", "1703", "1848", "1956"], correct: 1 },
        { type: "mcq", question: "Mi volt a kuruc zászlókra írt latin jelmondat jelentése?", options: ["A királyért és a hazáért", "Istennel a hazáért és a szabadságért", "Szabadság vagy halál", "Mindenki egyért, egy mindenkiért"], correct: 1 },
        { type: "mcq", question: "Hol mondták ki a Habsburg-ház trónfosztását 1707-ben?", options: ["Budán", "Pozsonyban", "Ónodon", "Debrecenben"], correct: 2 },
        { type: "mcq", question: "Hogy hívták a császárhű katonákat a szabadságharc idején?", options: ["kurucok", "labancok", "huszárok", "hajdúk"], correct: 1 },
        { type: "typing", question: "Melyik törökországi városban töltötte száműzetését Rákóczi?", answer: ["Rodostó", "Rodostóban"] },
        { type: "typing", question: "Hogy nevezte a nép II. Rákóczi Ferencet?", answer: ["nagyságos fejedelem", "a nagyságos fejedelem"] },
      ],
    },
    {
      id: "m6_3",
      title: "Jókai Mór: A kőszívű ember fiai (A Baradlay-ház)",
      text: "Jókai Mór, a nagy magyar mesemondó egyik legjelentősebb regénye az 1848-49-es szabadságharc eseményeit és egy család drámáját mutatja be. A történet középpontjában a Baradlay család áll. Az apa, Baradlay Kazimir, végrendeletében azt hagyja feleségére, hogy fiait a császári udvar hűségében nevelje fel, és tartsák távol őket a magyar szabadságeszméktől. Azonban az anya, Baradlayné, férje halála után szembeszáll a végakarattal. Úgy dönt, hogy fiait hazahívja, és a haza szolgálatába állítja őket. A legidősebb fiú, Ödön, Szentpétervárról tér haza kalandos úton, hogy a vármegyei életben és a politikában vállaljon szerepet. Richárd, a huszárkapitány, Bécsből vezeti haza egységét a magyar határon át, dacolva a császári parancsokkal és az üldözőkkel. A legfiatalabb, Jenő, aki kezdetben a leggyengébbnek tűnik, végül a legnagyobb áldozatot hozza: bátyja, Ödön helyett vállalja a vértanúhalált a szabadságharc bukása után. Jókai regénye nemcsak a történelmi eseményeket festi le monumentális erővel, hanem a becsület, a testvéri szeretet és az anyai önfeláldozás példaképét is elénk állítja. A mű nyelvezete gazdag, romantikus és magával ragadó, amelyben a hősök nagyobbak az életnél, és a sorsfordító pillanatokban mindig a szívükre hallgatnak. A Baradlay-fiúk sorsa a magyar nemzet sorsát tükrözi: a küzdelmet, a reményt és a tragikus, de dicsőséges bukást. Jókai ezzel a művével a nemzeti öntudat egyik legfontosabb tartóoszlopát alkotta meg, amely generációk számára tette átélhetővé a reformkor és a szabadságharc szellemét.",
      questions: [
        { type: "mcq", question: "Ki volt a Baradlay család feje, aki a végrendeletet írta?", options: ["Ödön", "Kazimir", "Richárd", "Jenő"], correct: 1 },
        { type: "mcq", question: "Honnan tért haza Ödön, a legidősebb fiú?", options: ["Párizsból", "Bécsből", "Szentpétervárról", "Londonból"], correct: 2 },
        { type: "mcq", question: "Melyik fiú hozta meg a legnagyobb áldozatot a történet végén?", options: ["Ödön", "Richárd", "Jenő", "egyik sem"], correct: 2 },
        { type: "mcq", question: "Milyen katonai egységet vezetett Richárd?", options: ["tüzérséget", "gyalogságot", "huszárokat", "haditengerészetet"], correct: 2 },
        { type: "typing", question: "Melyik történelmi esemény idején játszódik a regény?", answer: ["1848-49-es szabadságharc", "1848", "szabadságharc"] },
        { type: "typing", question: "Ki döntött úgy, hogy a fiúknak haza kell térniük?", answer: ["Baradlayné", "az anyjuk", "édesanyjuk"] },
      ],
    },
    {
      id: "m6_4",
      title: "Széchenyi István és a Reformkor",
      text: "A 19. század első fele, amelyet reformkornak nevezünk, Magyarország újjászületésének időszaka volt. Ennek a korszaknak az egyik legkiemelkedőbb alakja gróf Széchenyi István, akit Kossuth Lajos a 'legnagyobb magyarnak' nevezett. Széchenyi felismerte, hogy az ország elmaradottságát csak alapos gazdasági és társadalmi reformokkal lehet felszámolni. 1825-ben, a pozsonyi országgyűlésen felajánlotta birtokainak egyéves jövedelmét a Magyar Tudós Társaság (a mai Tudományos Akadémia) megalapítására. Fő műveiben, a 'Hitel'-ben, a 'Világ'-ban és a 'Stádium'-ban kifejtette programját: a robot és a céhek eltörlését, a közteherviselést és a modern hitelrendszer bevezetését szorgalmazta. Széchenyi nemcsak elméleti szakember volt, hanem gyakorlati alkotó is. Nevéhez fűződik a Duna és a Tisza szabályozása, a balatoni gőzhajózás elindítása és a Lánchíd felépítése, amely az első állandó híd volt Buda és Pest között. Úgy vélte, hogy Magyarországnak a Habsburg Birodalmon belül, békés úton kell fejlődnie, elkerülve a forradalmi rázkódásokat. Emiatt később éles vitába keveredett Kossuth Lajossal, aki radikálisabb változásokat és teljes függetlenséget követelt. Széchenyi munkássága alapozta meg a modern Magyarországot; intézményei és alkotásai a mai napig meghatározzák Budapest és az ország arculatát. Tragikus sorsa – a szabadságharc alatti összeomlása és későbbi halála – ellenére emléke a nemzetépítő munka és a felelős gondolkodás szimbólumaként él a magyarok szívében.",
      questions: [
        { type: "mcq", question: "Hogyan nevezte Kossuth Lajos Széchenyi Istvánt?", options: ["A haza bölcse", "A legnagyobb magyar", "A nemzet ébresztője", "A szabadság hőse"], correct: 1 },
        { type: "mcq", question: "Melyik intézmény megalapítására ajánlotta fel jövedelmét 1825-ben?", options: ["Nemzeti Múzeum", "Magyar Tudományos Akadémia", "Nemzeti Színház", "Lánchíd Társaság"], correct: 1 },
        { type: "mcq", question: "Mi volt Széchenyi egyik legfontosabb gyakorlati alkotása Budapesten?", options: ["A Parlament", "A Lánchíd", "A Budavári Palota", "A Hősök tere"], correct: 1 },
        { type: "mcq", question: "Melyik folyók szabályozása fűződik a nevéhez?", options: ["Duna és Tisza", "Rába és Dráva", "Maros és Körös", "Zala és Sajó"], correct: 0 },
        { type: "typing", question: "Mi a címe Széchenyi 1830-ban megjelent fő művének?", answer: ["Hitel"] },
        { type: "typing", question: "Melyik városok között épült fel a Lánchíd?", answer: ["Buda és Pest", "Buda, Pest"] },
      ],
    },
    {
      id: "m6_5",
      title: "A magyar huszárok története",
      text: "A huszárság a magyar hadtörténet legjellegzetesebb és világszerte legismertebb fegyverneme. A huszárok könnyűlovas katonák voltak, akiknek története a 15. századig, Hunyadi Mátyás koráig nyúlik vissza. Nevük eredetére több magyarázat is létezik, az egyik szerint a 'húsz' számból ered, mivel húsz jobbágytelek után kellett egy lovas katonát kiállítani. A huszárok felszerelése és harcmódja egyedülálló volt: gyorsaságukra, bátorságukra és váratlan rajtaütéseikre alapoztak. Jellegzetes viseletük a díszes dolmány, a mentének nevezett prémes felsőkabát, a zsinóros nadrág és a csákó volt. Fegyverzetüket a szablya, a karabély és a pisztoly alkotta. A 18. és 19. században a magyar huszárok Európa-szerte híressé váltak; szinte minden nagyhatalom (franciák, poroszok, angolok) igyekezett magyar mintára saját huszáregységeket felállítani. A huszár nemcsak katona volt, hanem a magyar virtus, a lovagiasság és a hazaszeretet megtestesítője is. Az 1848-49-es szabadságharcban a huszárezredek döntő szerepet játszottak a győztes csatákban, például Isaszegnél vagy hatvani ütközetben. Olyan legendás parancsnokok vezették őket, mint Damjanich János vagy a lengyel származású Bem József. A huszárok híresek voltak bajtársiasságukról és arról, hogy a legreménytelenebb helyzetekben is kitartottak. Bár a modern hadviselés megjelenésével a lovasság szerepe megszűnt, a huszár hagyományok a mai napig élnek a magyar népművészetben, a dalokban és a díszegységek bemutatóiban. A huszár alakja a magyar identitás elválaszthatatlan része, a szabadság és a bátorság örök szimbóluma.",
      questions: [
        { type: "mcq", question: "Melyik uralkodó korában jelentek meg az első huszárok?", options: ["Szent István", "Hunyadi Mátyás", "II. Rákóczi Ferenc", "Ferenc József"], correct: 1 },
        { type: "mcq", question: "Mi volt a huszárok jellegzetes fejfedője?", options: ["sisak", "csákó", "kalap", "süveg"], correct: 1 },
        { type: "mcq", question: "Melyik fegyver volt a huszárok legfontosabb támadóeszköze?", options: ["lándzsa", "szablya", "íj", "bárd"], correct: 1 },
        { type: "mcq", question: "Milyen típusú katonák voltak a huszárok?", options: ["nehézlovasok", "könnyűlovasok", "gyalogosok", "tüzérek"], correct: 1 },
        { type: "typing", question: "Hogy hívták a huszárok díszes, zsinóros felsőkabátját?", answer: ["mente", "mentének"] },
        { type: "typing", question: "Melyik számból eredhet a huszár elnevezés?", answer: ["húsz", "20"] },
      ],
    },
    {
      id: "m6_6",
      title: "Kinizsi Pál, a verhetetlen hős",
      text: "Kinizsi Pál a magyar történelem egyik leglegendásabb alakja, akinek erejéről és vitézségéről számos monda született. A hagyomány szerint egyszerű molnárlegényként kezdte pályafutását. A történet úgy tartja, hogy egyszer Mátyás király vadászat közben megszomjazott, és egy malomnál kért inni. Kinizsi egy hatalmas malomkövön, mint egy tálcán nyújtotta át a kupát az uralkodónak. Mátyás rögtön felismerte a legényben rejlő rendkívüli erőt, és magával vitte a seregébe. Kinizsi gyorsan emelkedett a ranglétrán, és a híres 'fekete sereg' egyik legkiválóbb vezére lett. Legnagyobb győzelmét 1479-ben, a kenyérmezei csatában aratta a törökök felett. A monda szerint a csata hevében mindkét kezében kardot forgatott, és a győzelem utáni örömtánc közben egy-egy török foglyot tartott a hóna alatt, egyet pedig a fogaival emelt a magasba. Kinizsi Pál volt az egyetlen magyar hadvezér, aki egyetlen csatát sem vesztett el élete során. Mátyás király hűséges embere maradt, és az uralkodó halála után is védte az ország határait. Birtokközpontja Nagyvázsonyban volt, ahol a várat jelentősen megerősítette. Kinizsi nemcsak fizikai erejével, hanem stratégiai érzékével is kiemelkedett kortársai közül. Alakja a népmesékben és a mondákban a legyőzhetetlen magyar hős eszményképévé vált, aki puszta erejével és bátorságával képes volt gátat szabni a török hódításnak. Sírja ma is Nagyvázsonyban található, emlékeztetve az utókort a dicsőséges Hunyadi-korra.",
      questions: [
        { type: "mcq", question: "Mi volt Kinizsi Pál eredeti foglalkozása a legenda szerint?", options: ["kovács", "molnárlegény", "paraszt", "katona"], correct: 1 },
        { type: "mcq", question: "Melyik híres csatában aratott döntő győzelmet a törökök felett 1479-ben?", options: ["mohácsi csata", "kenyérmezei csata", "rigómezei csata", "nándorfehérvári csata"], correct: 1 },
        { type: "mcq", question: "Melyik seregnek volt az egyik vezére Kinizsi?", options: ["kuruc sereg", "fekete sereg", "vörös sereg", "huszár sereg"], correct: 1 },
        { type: "mcq", question: "Hol volt Kinizsi Pál birtokközpontja?", options: ["Egerben", "Nagyvázsonyban", "Budán", "Visegrádon"], correct: 1 },
        { type: "typing", question: "Milyen tárgyon nyújtotta át a vizet a királynak a legenda szerint?", answer: ["malomkő", "malomkövön"] },
        { type: "typing", question: "Hány csatát vesztett el Kinizsi Pál az élete során?", answer: ["nullát", "0", "egyet sem"] },
      ],
    },
    {
      id: "m6_7",
      title: "A magyar népi hagyományok: A Busójárás",
      text: "A busójárás a magyarországi horvátok, a sokácok messze földön híres farsangi népszokása, amelyet Mohácson rendeznek meg minden évben. Ez a hagyomány a tél elűzését és a tavasz köszöntését jelképezi, és az UNESCO szellemi kulturális örökségének is része. A busók félelmetes megjelenésű alakok: kifordított birkabőrt viselnek, derekukra kolompot kötnek, a kezükben pedig kereplőt vagy buzogányt tartanak. Legfontosabb kellékük a fűzfából faragott, állatvérrel festett, ijesztő maszk. A legenda szerint a busójárás eredete a török időkbe nyúlik vissza. A monda úgy tartja, hogy a Mohács-szigeti mocsárvilágba menekült lakosok ijesztő álarcokba öltözve, zajkeltő eszközökkel keltek át a Dunán az éjszaka leple alatt, és úgy ráijesztettek a babonás török katonákra, hogy azok fejvesztve menekültek el a városból. Bár a történeti kutatások szerint a szokás inkább a Balkánról betelepülő sokácokkal érkezett, a mohácsiak számára ez a legenda a bátorság és az összefogás jelképe. A busójárás csúcspontja a 'farsangvasárnap', amikor a busók csónakokkal átkelnek a Dunán, végigvonulnak a városon, majd a főtéren hatalmas máglyát gyújtanak, amelyen elégetik a telet jelképező koporsót. A rendezvény alatt a város megtelik zenével, tánccal és vidámsággal, a látogatókat pedig fánkkal és borral kínálják. A busójárás nemcsak egy látványos karnevál, hanem az ősök tiszteletének és a közösségi összetartozásnak az ünnepe is, amely minden évben több tízezer embert vonz Mohácsra.",
      questions: [
        { type: "mcq", question: "Melyik városban rendezik meg a busójárást?", options: ["Budapesten", "Mohácson", "Pécsett", "Szegeden"], correct: 1 },
        { type: "mcq", question: "Milyen népcsoporthoz kötődik eredetileg ez a hagyomány?", options: ["székelyek", "sokácok", "palócok", "kunok"], correct: 1 },
        { type: "mcq", question: "Mit jelképez a busójárás a néphagyomány szerint?", options: ["a háború végét", "a tél elűzését és a tavasz várását", "az aratási ünnepet", "a szüretet"], correct: 1 },
        { type: "mcq", question: "Miből készül a busók ijesztő maszkja?", options: ["műanyagból", "fűzfából", "fémből", "papírból"], correct: 1 },
        { type: "typing", question: "Milyen állat bőrét viselik magukon a busók?", answer: ["birka", "birkabőrt"] },
        { type: "typing", question: "Mit égetnek el a máglyán a busójárás végén?", answer: ["koporsót", "a telet jelképező koporsót"] },
      ],
    },
    {
      id: "m6_8",
      title: "Zrínyi Miklós és a szigetvári ostrom",
      text: "1566-ban a világ akkori leghatalmasabb uralkodója, I. Szulejmán szultán utolsó hadjáratára indult Magyarország ellen. Célja Bécs elfoglalása volt, de útját állta egy kis dunántúli vár: Szigetvár. A vár védelmét a horvát származású magyar főúr, Zrínyi Miklós vezette, aki mindössze kétezer-ötszáz katonájával nézett szembe a százezres török sereggel. Szulejmán azt hitte, hogy a mocsarakkal körülvett várat napok alatt beveszi, de a védők elszántsága minden várakozást felülmúlt. Az ostrom több mint egy hónapig tartott, és a törökök hatalmas veszteségeket szenvedtek. A szultán megpróbálta megvesztegetni Zrínyit, felajánlva neki egész Horvátországot, de a kapitány hű maradt esküjéhez és hazájához. Szeptember elejére a belső vár is lángokban állt, és a védők száma maroknyira apadt. Ekkor történt a drámai fordulat: a szultán a sátrában meghalt, de vezérei eltitkolták halálát a sereg előtt, hogy ne törjön meg a harci kedv. Zrínyi, látva, hogy nincs tovább remény a segítségre, nem adta meg magát. Szeptember 8-án katonáival együtt kitört a lángoló várból, és hősies küzdelemben mindannyian életüket vesztették. Bár Szigetvár elesett, Zrínyiék önfeláldozása megállította a török hadjáratot, és Bécs megmenekült. Dédunokája, a költő és hadvezér Zrínyi Miklós, 'Szigeti veszedelem' című eposzában állított halhatatlan emléket dédapja vitézségének. Szigetvár ma a 'leghősiesebb város' (Civitas Invicta) címet viseli, és a magyar-török megbékélés parkja is itt található, emlékeztetve a közös múltra és a hősök tiszteletére.",
      questions: [
        { type: "mcq", question: "Melyik török szultán vezette az ostromot Szigetvár ellen?", options: ["II. Mohamed", "I. Szulejmán", "I. Szelim", "IV. Murád"], correct: 1 },
        { type: "mcq", question: "Milyen címet visel Szigetvár városa a hősies védekezés emlékére?", options: ["A hűség városa", "A leghősiesebb város", "A szabadság városa", "A királyok városa"], correct: 1 },
        { type: "mcq", question: "Mi történt a szultánnal az ostrom utolsó napjaiban?", options: ["elmenekült", "meghalt a sátrában", "fogságba esett", "megsebesült"], correct: 1 },
        { type: "mcq", question: "Ki írta a 'Szigeti veszedelem' című eposzt?", options: ["Zrínyi Miklós (a dédunoka)", "Balassi Bálint", "Petőfi Sándor", "Arany János"], correct: 0 },
        { type: "typing", question: "Hány katonája volt Zrínyinek a százezres török sereggel szemben?", answer: ["2500", "kétezer-ötszáz"] },
        { type: "typing", question: "Melyik évben zajlott Szigetvár ostroma?", answer: ["1566"] },
      ],
    },
  ],
  7: [
    {
      id: "m7_1",
      title: "1848. március 15. – A szabadság születése",
      text: "1848. március 15-e a magyar történelem egyik legfényesebb napja, a modern magyar nemzet születésének pillanata. Az események a pesti Pilvax kávéházban kezdődtek, ahol a 'márciusi ifjak' – köztük Petőfi Sándor, Jókai Mór és Vasvári Pál – összegyűltek, hogy hangot adjanak a nemzet követeléseinek. A hangulat feszült, de elszánt volt; Európa-szerte forradalmi hullám söpört végig, és a magyar ifjúság nem akart lemaradni a változásokról. Első útjuk az egyetemre vezetett, ahol Petőfi elszavalta a Nemzeti dalt, amelynek refrénje – 'A magyarok istenére esküszünk, esküszünk, hogy rabok tovább nem leszünk!' – villámcsapásként érte a tömeget. Innen a Landerer és Heckenast nyomdához vonultak, ahol a cenzúra engedélye nélkül kinyomtatták a 12 pontot és a Nemzeti dalt. Ez volt a sajtószabadság első gyakorlati megnyilvánulása. A 12 pont világos és határozott követeléseket tartalmazott: sajtószabadság, felelős minisztérium Buda-Pesten, évenkénti országgyűlés, törvény előtti egyenlőség, nemzeti őrsereg, közös teherviselés, úrbéri viszonyok megszüntetése, esküdtszék, nemzeti bank, a katonaság esküje az alkotmányra, a magyar katonák hazahozatala és az unió Erdéllyel. Délután a tömeg a Nemzeti Múzeum előtt gyűlt össze, ahol Petőfi ismét elszavalta költeményét, majd a városházára vonultak, hogy a tanácsot is a forradalom mellé állítsák. Az események csúcspontja a budai várban történt, ahol a Helytartótanács, látva a hatalmas tömeget, elfogadta a követeléseket és szabadon bocsátotta Táncsics Mihályt, a politikai foglyot. Este a Nemzeti Színházban a Bánk bán díszelőadásával ünnepelték a vértelen győzelmet. Március 15-e nemcsak egy politikai fordulat volt, hanem a polgári átalakulás kezdete, amely felszámolta a feudális kiváltságokat és megnyitotta az utat a modern, független Magyarország felé. A nap sikere az összefogásban és a tiszta célokban rejlett, emléke pedig azóta is a magyar szabadságvágy legfőbb forrása.",
      questions: [
        { type: "mcq", question: "Hol gyülekeztek a márciusi ifjak a forradalom reggelén?", options: ["A Nemzeti Múzeumban", "A Pilvax kávéházban", "A budai várban", "A Parlamentben"], correct: 1 },
        { type: "mcq", question: "Mi volt a 12 pont első követelése?", options: ["Nemzeti bank", "Sajtószabadság", "Unió Erdéllyel", "Közös teherviselés"], correct: 1 },
        { type: "mcq", question: "Ki volt az a politikai fogoly, akit Budán szabadon bocsátottak?", options: ["Kossuth Lajos", "Táncsics Mihály", "Széchenyi István", "Deák Ferenc"], correct: 1 },
        { type: "mcq", question: "Melyik nyomdában nyomtatták ki a cenzúra nélkül a követeléseket?", options: ["Landerer és Heckenast", "Franklin Társulat", "Athenaeum", "Állami Nyomda"], correct: 0 },
        { type: "mcq", question: "Melyik színdarabot adták elő este a Nemzeti Színházban?", options: ["Csongor és Tünde", "Bánk bán", "Az ember tragédiája", "Ludas Matyi"], correct: 1 },
        { type: "typing", question: "Ki írta a Nemzeti dalt?", answer: ["Petőfi Sándor", "Petőfi"] },
        { type: "typing", question: "Hány pontból állt a magyar nemzet követeléseinek listája?", answer: ["12", "tizenkettő"] },
      ],
    },
    {
      id: "m7_2",
      title: "Kosztolányi Dezső és az Esti Kornél világa",
      text: "Kosztolányi Dezső a 20. századi magyar irodalom egyik legsokoldalúbb és legmodernebb alkotója, a Nyugat első nemzedékének kiemelkedő alakja. Életművének egyik legizgalmasabb és legrejtélyesebb darabja az Esti Kornél című novellaciklus, amely 1933-ban jelent meg. Esti Kornél nem csupán egy irodalmi hős, hanem a szerző alteregója, 'másik énje', aki megtestesíti mindazt, amit az író a polgári élet keretei között nem tehetett meg. Míg Kosztolányi a fegyelmezett, családapa és elismert újságíró, addig Esti a gátlástalan, kalandvágyó, cinikus és szabad szellem. A mű bevezető fejezetében az író és Esti Kornél egy éjszakai találkozás során szövetséget kötnek: Esti fogja megélni azokat a kalandokat, amiket az író csak megálmodik. A novellák során Esti bejárja Európát, különös figurákkal találkozik, és gyakran kerül abszurd vagy tragikomikus helyzetekbe. Kosztolányi stílusa ebben a műben éri el csúcspontját: nyelvezete tiszta, pontos, mégis tele van iróniával és mély emberismerettel. Az Esti Kornél központi témája az emberi személyiség kettőssége, az élet kiszámíthatatlansága és a halállal való szembenézés. Az egyik leghíresebb fejezetben, a 'Sárga villamos'-ban, Esti a gyermekkori emlékek és a felnőttkori kiábrándultság között őrlődik. Kosztolányi számára a nyelv nemcsak eszköz, hanem a létezés egyetlen biztos pontja; hitt a szavak erejében és a művészet vigasztaló hatásában. Az Esti Kornél-történetek ma is frissek és aktuálisak, mert az emberi lélek legmélyebb ellentmondásairól beszélnek játékos, mégis megrázó formában. Az író ezzel a művével bebizonyította, hogy a modern irodalom képes egyszerre lenni szórakoztató és filozófiai mélységű, miközben az egyén szabadságát hirdeti a társadalmi konvenciókkal szemben.",
      questions: [
        { type: "mcq", question: "Melyik folyóirathoz köthető Kosztolányi Dezső munkássága?", options: ["Huszadik Század", "Nyugat", "Napkelet", "Válasz"], correct: 1 },
        { type: "mcq", question: "Ki Esti Kornél a szerzőhöz képest?", options: ["A gyerekkori barátja", "Az alteregója, a 'másik énje'", "A legnagyobb ellensége", "A fia"], correct: 1 },
        { type: "mcq", question: "Melyik évben jelent meg az Esti Kornél kötet?", options: ["1906", "1919", "1933", "1945"], correct: 2 },
        { type: "mcq", question: "Mi jellemzi Kosztolányi stílusát ebben a műben?", options: ["Bonyolult, nehezen érthető körmondatok", "Tiszta, pontos nyelvezet iróniával fűszerezve", "Népies, tájszavakkal teli beszédmód", "Kizárólag tudományos szakkifejezések"], correct: 1 },
        { type: "mcq", question: "Mi az Esti Kornél-történetek egyik központi témája?", options: ["A paraszti élet nehézségei", "Az emberi személyiség kettőssége", "A világháború borzalmai", "A technikai fejlődés dicsérete"], correct: 1 },
        { type: "typing", question: "Hogy hívják a novellaciklus főhősét?", answer: ["Esti Kornél", "Esti"] },
        { type: "typing", question: "Milyen jármű szerepel az egyik leghíresebb fejezet címében?", answer: ["villamos", "sárga villamos"] },
      ],
    },
    {
      id: "m7_3",
      title: "Móricz Zsigmond és a magyar ugar valósága",
      text: "Móricz Zsigmond a magyar realista próza legnagyobb mestere, aki kíméletlen őszinteséggel ábrázolta a 20. század eleji magyar társadalom, különösen a parasztság és a vidéki dzsentri világát. 1908-ban a Nyugatban megjelent 'Hét krajcár' című novellájával robbant be az irodalmi köztudatba, amely a szegénységet nem sajnálkozva, hanem mély humanizmussal mutatta be. Móricz írói módszere a megfigyelésen és a népnyelv alapos ismeretén alapult. Egyik legmegrázóbb alkotása a 'Barbárok' című novella, amely a pusztai élet kegyetlenségét és az emberi ösztönök sötét oldalát tárja fel. A történetben két juhász meggyilkolja társukat és annak családját néhány juhért, majd évekig titkolják tettüket, amíg a lelkiismeret vagy a véletlen le nem leplezi őket. Móricz ebben a művében a 'barbárságot' nemcsak a gyilkosságban, hanem a pusztai lét elszigeteltségében és az erkölcsi normák hiányában látja. Regényeiben, mint az 'Úri muri' vagy a 'Rokonok', a vidéki Magyarország pusztulását, a korrupciót és a tehetetlenséget ábrázolja. Az 'Úri muri' a dzsentri réteg mulatozásba fojtott kétségbeesését mutatja be, ahol a hősök képtelenek a valódi cselekvésre, és energiáikat önpusztító tivornyákban vezetik le. A 'Rokonok' pedig a hivatali világ összefonódásait, a 'mutyi' rendszerét elemzi, amely ma is fájóan aktuálisnak tűnik. Móricz nemcsak a sötét oldalt látta; gyermekkoráról írt 'Légy jó mindhalálig' című regénye a gyermeki tisztaság és a felnőttvilág igazságtalanságának örök konfliktusát dolgozza fel Nyilas Misi alakján keresztül. Móricz Zsigmond életműve a magyar sors és jellem mélyreható elemzése, stílusa pedig a magyar nyelv erejének és ízének egyik legszebb példája.",
      questions: [
        { type: "mcq", question: "Melyik novellájával vált híressé Móricz Zsigmond 1908-ban?", options: ["Barbárok", "Hét krajcár", "Tragédia", "Ebéd"], correct: 1 },
        { type: "mcq", question: "Miről szól a 'Barbárok' című novella?", options: ["Egy szerelmi történetről", "A pusztai élet kegyetlenségéről és egy gyilkosságról", "A városi polgárság életéről", "A szabadságharc hőseiről"], correct: 1 },
        { type: "mcq", question: "Ki a főhőse a 'Légy jó mindhalálig' című regénynek?", options: ["Kopjáss István", "Szakhmáry Zoltán", "Nyilas Misi", "Toldi Miklós"], correct: 2 },
        { type: "mcq", question: "Melyik társadalmi réteget ábrázolja az 'Úri muri'?", options: ["A munkásságot", "A vidéki dzsentrit", "A papságot", "A külföldi kereskedőket"], correct: 1 },
        { type: "mcq", question: "Mi jellemzi Móricz írói stílusát?", options: ["Elvont szimbolizmus", "Kíméletlen realizmus és népnyelv", "Túlzó romantika", "Kizárólagos optimizmus"], correct: 1 },
        { type: "typing", question: "Melyik híres folyóiratban jelentek meg Móricz első fontos művei?", answer: ["Nyugat"] },
        { type: "typing", question: "Hogy hívják a 'Rokonok' című regény főszereplőjét?", answer: ["Kopjáss István", "Kopjáss"] },
      ],
    },
    {
      id: "m7_4",
      title: "Kölcsey Ferenc és a Himnusz története",
      text: "A magyar nemzet imádsága, a Himnusz, Kölcsey Ferenc tollából született 1823. január 22-én, Csekén. Ez a nap ma a magyar kultúra napja, amely emlékeztet minket szellemi örökségünk fontosságára. Kölcsey a reformkor egyik legműveltebb és legelkötelezettebb alakja volt, aki a nemzeti ébredés programját a költészet és a politika nyelvén egyaránt hirdette. A Himnusz alcíme – 'A magyar nép zivataros századaiból' – jelzi, hogy a vers nem csupán egy dicsőítő ének, hanem a magyar történelem tragikus eseményeinek összefoglalása és Istenhez intézett könyörgés. A költemény szerkezete keretes: az első és az utolsó versszak a fohász, amelyben a költő áldást kér a magyarra. A közbülső szakaszok végigveszik a múlt dicső pillanatait (Honfoglalás, Mátyás király kora), majd a pusztító csapásokat (tatárjárás, török hódoltság, belső viszályok). Kölcsey szemlélete szerint a magyarság már megbűnhődte a múltat és a jövendőt, ezért érdemes az isteni kegyelemre. A vers nyelvezete archaizáló, ünnepélyes, a 16-17. századi protestáns zsoltárok hangvételét idézi. Érdekesség, hogy a Himnusz több mint húsz évig csak versként élt, mígnem 1844-ben Erkel Ferenc megzenésítette a Nemzeti Színház pályázatára. Erkel dallama tökéletesen illeszkedik a vers méltóságteljes, mégis fájdalmas hangulatához. Hivatalosan csak 1989-ben került be az Alkotmányba mint nemzeti jelkép, bár a nép szívében már a 19. század közepe óta az első számú nemzeti énekké vált. A Himnusz éneklése minden magyar számára az összetartozás és a közös sors vállalásának pillanata, amely túlmutat a politikai és társadalmi különbségeken.",
      questions: [
        { type: "mcq", question: "Melyik napon írta Kölcsey Ferenc a Himnuszt?", options: ["Március 15-én", "Január 22-én", "Augusztus 20-án", "Október 23-án"], correct: 1 },
        { type: "mcq", question: "Mi a Himnusz alcíme?", options: ["Isten, áldd meg a magyart", "A magyar nép zivataros századaiból", "Nemzeti dal", "Szózat"], correct: 1 },
        { type: "mcq", question: "Ki zenésítette meg a Himnuszt 1844-ben?", options: ["Liszt Ferenc", "Erkel Ferenc", "Kodály Zoltán", "Bartók Béla"], correct: 1 },
        { type: "mcq", question: "Milyen történelmi korszakokat idéz fel a vers a dicső múltból?", options: ["A reformkort", "A honfoglalást és Mátyás korát", "A világháborúkat", "Az ipari forradalmat"], correct: 1 },
        { type: "mcq", question: "Milyen a Himnusz hangvétele?", options: ["Vidám és táncos", "Ünnepélyes és fohászkodó", "Harcias és agresszív", "Gúnyos és ironikus"], correct: 1 },
        { type: "typing", question: "Melyik településen írta Kölcsey a Himnuszt?", answer: ["Cseke", "Szatmárcseke"] },
        { type: "typing", question: "Melyik ünnepünket tartjuk a Himnusz születésnapján?", answer: ["A magyar kultúra napja", "magyar kultúra napja"] },
      ],
    },
    {
      id: "m7_5",
      title: "A digitális nyelvhasználat hatása a magyar nyelvre",
      text: "Az elmúlt két évtizedben az internet és az okostelefonok elterjedése alapjaiban változtatta meg kommunikációs szokásainkat, és ezzel együtt a magyar nyelv használatát is. A nyelvészek és a pedagógusok körében élénk vita folyik arról, hogy a digitális nyelvhasználat – az úgynevezett 'netnyelv' – gazdagítja vagy inkább rombolja anyanyelvünket. A legszembetűnőbb változás az írásbeliség és a szóbeliség határainak elmosódása. Az azonnali üzenetküldő alkalmazásokban (Messenger, WhatsApp) használt nyelv közelebb áll az élőbeszédhez, mint a hagyományos levélíráshoz: jellemzőek a rövidítések, a hiányos mondatszerkezetek és az írásjelek elhagyása. Az emotikonok és emojik megjelenése egyfajta vizuális kiegészítést ad a szövegnek, pótolva a személyes beszélgetés során jelen lévő gesztusokat és arckifejezéseket. Ugyanakkor aggodalomra ad okot a helyesírási szabályok háttérbe szorulása és a szókincs beszűkülése. Sok fiatal számára nehézséget okoz a hivatalos és a magánjellegű kommunikáció szétválasztása, ami az iskolai dolgozatokban vagy későbbi munkavállalás során is problémát jelenthet. Az angol nyelvű kifejezések (pl. 'lájkol', 'posztol', 'csetel') beépülése a mindennapi beszédbe természetes folyamat, de fontos a mértéktartás, hogy a magyar nyelv sajátos szerkezete és dallama ne sérüljön. A nyelvészek többsége szerint a nyelv élő szervezet, amely folyamatosan alkalmazkodik a környezeti változásokhoz. A digitális korszak nem a nyelv halálát, hanem egy új típusú nyelvi réteg kialakulását hozta el. A feladatunk nem a tiltás, hanem a tudatos nyelvhasználat fejlesztése: meg kell tanulnunk, hogy mikor és hol melyik nyelvi formát érdemes használnunk, megőrizve közben a magyar nyelv gazdagságát és szépségét.",
      questions: [
        { type: "mcq", question: "Mi a legszembetűnőbb változás a digitális nyelvhasználatban?", options: ["A latin nyelv visszatérése", "Az írásbeliség és szóbeliség határainak elmosódása", "A könyvnyomtatás megszűnése", "A versek eltűnése"], correct: 1 },
        { type: "mcq", question: "Mire szolgálnak az emojik a digitális kommunikációban?", options: ["Helyettesítik a betűket", "Pótolják a gesztusokat és érzelmeket", "Lassítják az üzenetküldést", "Nincs semmilyen funkciójuk"], correct: 1 },
        { type: "mcq", question: "Milyen veszélyt látnak a szakemberek a netnyelvben?", options: ["A papír árának emelkedését", "A helyesírás romlását és a szókincs beszűkülését", "Az elektromos hálózat túlterhelését", "A beszédképesség elvesztését"], correct: 1 },
        { type: "mcq", question: "Hogyan tekintenek a nyelvészek a nyelvre a szöveg szerint?", options: ["Mint egy halott tárgyra", "Mint egy élő szervezetre, amely alkalmazkodik", "Mint egy megváltoztathatatlan szabálygyűjteményre", "Mint egy felesleges teherre"], correct: 1 },
        { type: "mcq", question: "Mi a szerző véleménye az angol jövevényszavakról?", options: ["Teljesen be kell tiltani őket", "Természetes folyamat, de mértéktartás kell", "Csak angolul szabadna beszélni", "Minden magyar szót angolra kell cserélni"], correct: 1 },
        { type: "typing", question: "Hogy hívják az azonnali üzenetküldésben használt nyelvi réteget?", answer: ["netnyelv", "digitális nyelvhasználat"] },
        { type: "typing", question: "Melyik idegen nyelv hatása a legerősebb a mai magyar nyelvre?", answer: ["angol", "az angol"] },
      ],
    },
    {
      id: "m7_6",
      title: "A pákozdi csata – A honvédség tűzkeresztsége",
      text: "1848. szeptember 29-én a Velencei-tó partján, Pákozd és Sukoró térségében zajlott le a szabadságharc első jelentős ütközete, amely a frissen szervezett magyar honvédség győzelmével zárult. A feszültség a nyár végén hágott a tetőfokára, amikor Jellasics horvát bán a bécsi udvar támogatásával átlépte a Drávát, hogy fegyverrel vessen véget a magyar önállóságnak. A magyar sereg, amely nagyrészt tapasztalatlan újoncokból és nemzetőrökből állt, Móga János altábornagy vezetésével foglalt el védelmi állásokat a tó északi partján. Jellasics magabiztos volt, hiszen serege létszámban és felszerelésben is felülmúlta a magyart, és arra számított, hogy a 'lázadók' az első ágyúszóra szétfutnak. A csata délelőtt kezdődött a horvátok támadásával, de a magyar tüzérség – amelynek tisztjei korábban a császári seregben szolgáltak – pontos és hatékony válasza megállította az előrenyomulást. A gyalogság is hősiesen kitartott, visszaverve a rohamokat. A küzdelem során a magyar katonák bebizonyították, hogy képesek felvenni a harcot a reguláris erőkkel szemben. Jellasics, látva serege sikertelenségét és a magyarok elszántságát, fegyverszünetet kért, majd az éjszaka leple alatt Bécs felé menekült. A pákozdi győzelem jelentősége felbecsülhetetlen volt: megmentette a forradalom fővárosát, Pestet, és önbizalmat adott a nemzetnek a további küzdelemhez. Szeptember 29-e hosszú ideig a néphadsereg, ma pedig a honvédség napja Magyarországon. A csata helyszínén ma katonai emlékpark áll, amely bemutatja a szabadságharc haditechnikáját és emléket állít a hősöknek. Pákozd neve azóta is az összefogás és a sikeres honvédelem jelképe a magyar történelemben.",
      questions: [
        { type: "mcq", question: "Melyik tó partján zajlott a pákozdi csata?", options: ["Balaton", "Velencei-tó", "Fertő-tó", "Tisza-tó"], correct: 1 },
        { type: "mcq", question: "Ki vezette a támadó horvát sereget?", options: ["Windisch-Grätz", "Jellasics", "Haynau", "Metternich"], correct: 1 },
        { type: "mcq", question: "Ki volt a magyar sereg főparancsnoka a csatában?", options: ["Görgei Artúr", "Móga János", "Bem József", "Kossuth Lajos"], correct: 1 },
        { type: "mcq", question: "Mi volt a csata kimenetele?", options: ["Magyar vereség", "Magyar győzelem és a horvátok visszavonulása", "Döntetlen, mindkét sereg megsemmisült", "A felek békét kötöttek örökre"], correct: 1 },
        { type: "mcq", question: "Melyik fegyvernem játszott döntő szerepet a magyar sikerben?", options: ["A lovasság", "A tüzérség", "A haditengerészet", "A légierő"], correct: 1 },
        { type: "typing", question: "Melyik hónapban és napon zajlott a csata?", answer: ["szeptember 29", "szeptember 29-én"] },
        { type: "typing", question: "Melyik város megmentése volt a csata tétje?", answer: ["Pest", "Buda-Pest", "Budapest"] },
      ],
    },
    {
      id: "m7_7",
      title: "Arany János: Toldi estéje – A hős alkonya",
      text: "Arany János Toldi-trilógiájának befejező része, a Toldi estéje, 1854-ben jelent meg, és a megöregedett hős utolsó napjait, valamint a lovagkor és az új világ közötti konfliktust mutatja be. Míg az első részben a fiatal, ereje teljében lévő Toldi Miklóst ismertük meg, itt egy elfeledett, magányos öregembert látunk, aki Nagyfalu szélén, a sírját ásva várja a halált. A történet akkor vesz fordulatot, amikor Lajos király udvarába egy gőgös olasz vitéz érkezik, aki sorra győzi le a magyar lovagokat és gúnyolja a nemzetet. A királynak szüksége van egy bajnokra, és bár Toldi korábban kegyvesztett lett, most mégis érte küldenek. Toldi, bár teste meggyengült, lelki ereje és hazaszeretete a régi: álruhában Budára megy, és a párviadalban legyőzi az olasz lovagot. Azonban a győzelem utáni ünneplés tragédiába torkollik. Toldi nem tudja elviselni az udvaroncok gúnyolódását és az új idők 'piperkőc' szokásait, ezért haragjában megöli az egyik gúnyolódót. A király halálra ítéli, de végül megbocsát neki. A mű csúcspontja a haldokló Toldi és Lajos király vitája. Toldi a régi erkölcsöket, a nyers erőt és az őszinteséget képviseli, míg a király a műveltséget, a fejlődést és a diplomáciát. Arany János nem foglal egyértelműen állást; elismeri a fejlődés szükségességét, de fájlalja a régi értékek elvesztését. Toldi halála egy korszak végét jelképezi. A mű nyelvezete méltóságteljes, melankolikus, tele van mély bölcsességgel az élet mulandóságáról. A Toldi estéje nemcsak egy hős búcsúja, hanem a költő töprengése is a nemzet jövőjéről a szabadságharc bukása utáni nehéz években.",
      questions: [
        { type: "mcq", question: "Melyik évben jelent meg a Toldi estéje?", options: ["1846", "1848", "1854", "1867"], correct: 2 },
        { type: "mcq", question: "Mivel foglalkozik a megöregedett Toldi a mű elején?", options: ["Vadászik az erdőben", "A sírját ássa", "A királyi udvarban tanít", "Háborúba készül"], correct: 1 },
        { type: "mcq", question: "Milyen nemzetiségű vitézt kell Toldinak legyőznie Budán?", options: ["Német", "Olasz", "Cseh", "Török"], correct: 1 },
        { type: "mcq", question: "Mi okozza a konfliktust Toldi és az udvaroncok között?", options: ["Pénzügyi vita", "Toldi nem bírja a gúnyolódást és az új szokásokat", "A királyi trón megszerzése", "Egy elmaradt párbaj"], correct: 1 },
        { type: "mcq", question: "Miről szól a haldokló Toldi és a király vitája?", options: ["A haditechnikáról", "A régi erkölcsök és az új világ ellentétéről", "A vadászati jogokról", "Az adózási rendszerről"], correct: 1 },
        { type: "typing", question: "Ki a Toldi-trilógia szerzője?", answer: ["Arany János", "Arany"] },
        { type: "typing", question: "Melyik király uralkodása alatt játszódik a történet?", answer: ["Nagy Lajos", "Lajos", "I. Lajos"] },
      ],
    },
    {
      id: "m7_8",
      title: "Semmelweis Ignác – Az anyák megmentője",
      text: "Semmelweis Ignác a világszerte legismertebb magyar orvos, akinek felfedezése milliók életét mentette meg, bár saját korában meg nem értettség és ellenségesség övezte. Az 1840-es években a bécsi közkórház szülészeti osztályán dolgozott, ahol kétségbeejtő állapotok uralkodtak: az anyák jelentős része gyermekágyi lázban halt meg. Semmelweis észrevette, hogy abban az osztályban, ahol orvostanhallgatók segédkeztek, sokkal magasabb a halálozási arány, mint ott, ahol csak bábák dolgoztak. A megoldásra egy tragikus véletlen vezette rá: barátja, Kolletschka professzor egy boncolás közbeni vágás után hasonló tünetekkel halt meg, mint a kismamák. Semmelweis rájött, hogy az orvosok és a hallgatók a boncolóasztaloktól közvetlenül a szülőszobákba menve, láthatatlan 'hullarészecskékkel' fertőzik meg az anyákat. Megoldásként kötelezővé tette a klórmészoldatos kézmosást a vizsgálatok előtt. Az eredmények döbbenetesek voltak: a halálozási arány töredékére esett vissza. Felfedezése azonban heves ellenállást váltott ki kollégáiból, akik sértésnek vették, hogy ők maguk okoznák a betegek halálát. Semmelweis nem adta fel, harcolt az igazáért, de a folyamatos támadások és a szakmai elszigeteltség felőrölték az idegeit. Élete végén elmegyógyintézetbe került, ahol tisztázatlan körülmények között halt meg 1865-ben. Csak évtizedekkel később, Pasteur és Lister munkássága nyomán ismerték el, hogy Semmelweisnek igaza volt a fertőzések terjedésével kapcsolatban. Ma a modern orvostudomány egyik úttörőjeként tiszteljük, nevét egyetemek és kórházak viselik. Élete a tudományos igazság melletti kitartás és az önfeláldozó gyógyítás példaképe. Semmelweis tragédiája emlékeztet minket arra, hogy az újító gondolatok gyakran nehezen törnek utat maguknak a megszokásokkal szemben.",
      questions: [
        { type: "mcq", question: "Milyen betegség ellen küzdött Semmelweis Ignác?", options: ["Pestis", "Gyermekágyi láz", "Influenza", "Kolera"], correct: 1 },
        { type: "mcq", question: "Mi volt Semmelweis korszakalkotó felfedezése?", options: ["A védőoltás feltalálása", "A klórmészoldatos kézmosás fontossága", "A röntgensugárzás alkalmazása", "A gyógynövények hatása"], correct: 1 },
        { type: "mcq", question: "Melyik város kórházában tette megfigyeléseit?", options: ["Budapest", "Bécs", "Párizs", "London"], correct: 1 },
        { type: "mcq", question: "Hogyan fogadta a korabeli orvostársadalom a felfedezését?", options: ["Azonnal elismerték és kitüntették", "Ellenségesen és elutasítóan", "Közönnyel, senkit nem érdekelt", "Csak a bábák támogatták"], correct: 1 },
        { type: "mcq", question: "Milyen néven ismerik Semmelweist világszerte?", options: ["A szegények orvosa", "Az anyák megmentője", "A magyar Pasteur", "A sebészet atyja"], correct: 1 },
        { type: "typing", question: "Milyen oldattal kellett kezet mosniuk az orvosoknak Semmelweisnél?", answer: ["klórmész", "klórmészoldat", "klórmészoldattal"] },
        { type: "typing", question: "Melyik évben halt meg Semmelweis Ignác?", answer: ["1865"] },
      ],
    },
  ],
  8: [],
};

export function getMagyarPassage(grade: number, index?: number): Lesepassage | null {
  const passages = MAGYAR_LESETEST[grade];
  if (!passages || passages.length === 0) return null;
  if (index !== undefined) return passages[Math.min(index, passages.length - 1)];
  return passages[Math.floor(Math.random() * passages.length)];
}

export function getAllMagyarPassages(grade: number): Lesepassage[] {
  return MAGYAR_LESETEST[grade] || [];
}

/** Adapter: returns a ReadingPassage-compatible object for LanguageTestEngine */
export function getRandomMagyarPassage(grade: number): import("./languageTestTypes").ReadingPassage | null {
  const p = getMagyarPassage(grade);
  if (!p) return null;
  const mcqQuestions = p.questions
    .filter((q) => q.type === "mcq" && Array.isArray(q.options) && q.options.length >= 2)
    .slice(0, 3)
    .map((q) => {
      const opts = q.options ?? [];
      // Pad to 4 options if needed
      while (opts.length < 4) opts.push("—");
      return { type: "mcq" as const, question: q.question, options: opts, correct: q.correct ?? 0 };
    });
  if (mcqQuestions.length === 0) return null;
  return { title: p.title, text: p.text, questions: mcqQuestions };
}
