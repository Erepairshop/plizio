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
  4: [],
  5: [],
  6: [],
  7: [],
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
