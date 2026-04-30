import { apply_seo_json } from "./apply_seo_json";

const monacoCities = [
  {
    id: "city-avenue-princesse-grace-extra",
    huDesc: "A Princesse Grace sugárút a monacói Larvotto negyed egyik legelőkelőbb és legismertebb része, amely a Földközi-tenger partvonala mentén húzódik. A népszerűségét nemcsak a lenyűgöző tengeri panoráma, hanem a világ legdrágább ingatlanpiacának számító környezete is biztosítja. Az utca az elegancia és a modern luxusépítészet jelképe, ahol a világszínvonalú lakóparkok mellett számos exkluzív szolgáltatás is elérhető. A helyszín ideális példája annak, hogyan integrálható a nagyvárosi luxus a tengerparti tájba. Földrajz K7 — városi infrastruktúra és tengerparti települések.",
    huFacts: [
        "A sugárút Grace Kelly hercegnéről kapta a nevét.",
        "A világ egyik legdrágább ingatlanárral rendelkező utcája.",
        "A Larvotto negyed központi, reprezentatív része.",
        "Teljes egészében a tengerparti védvonal mentén húzódik.",
        "Az utca modern luxuslakóparkoknak ad otthont.",
        "Közvetlen hozzáférést biztosít a Larvotto-strandhoz.",
        "A monacói modern városkép egyik meghatározó tengelye."
    ]
  },
  {
    id: "city-boulevard-des-moulins-extra",
    huDesc: "A Boulevard des Moulins Monte-Carlo egyik legpezsgőbb és legforgalmasabb központi sugárútja, amely a város kereskedelmi és társadalmi életének találkozási pontja. Az út összeköti a történelmi épületeket a modern bevásárlónegyedekkel, miközben elegáns kávéházai és exkluzív butikjai a monacói életérzést tükrözik. A századfordulós építészet és a modern kiskereskedelmi funkciók ötvözete teszi különlegessé. Ez a sugárút a helyiek és a látogatók számára is központi csomópont, amely stratégiailag fontos kapcsolatot teremt a híres Kaszinó tér felé. Gazdaságtan K6 — turizmus és kereskedelem.",
    huFacts: [
        "Monte-Carlo egyik fő közlekedési és bevásárló artériája.",
        "Számos tradicionális kávéház és luxusüzlet otthona.",
        "Építészetileg a Belle Époque korszak stílusjegyeit hordozza.",
        "Központi összeköttetést biztosít a Kaszinó tér irányába.",
        "Fontos szerepet tölt be a város gyalogosforgalmában.",
        "Történelmileg az egyik legjelentősebb üzleti utca.",
        "A sugárút mentén számos neves márka üzlete található."
    ]
  },
  {
    id: "city-rue-princesse-caroline-extra",
    huDesc: "A Rue Princesse Caroline Monaco egyik meghatározó sétálóutcája, amely a La Condamine negyedben biztosít nyugodt, autómentes övezetet. A kifejezetten gyalogosok számára tervezett terület sokszínű gasztronómiai kínálatával és számos kiülős éttermével a helyi lakosok kedvelt közösségi tere. A nyugodt, családias légkör éles ellentétben áll a város forgalmasabb részeivel, így ideális kikapcsolódási helyszín. Nevét Caroline hannoveri hercegnőről kapta, ezzel is tisztelegve a fejedelmi család előtt. Társadalomismeret K5 — közterületek és közösségi terek.",
    huFacts: [
        "Monaco egyik kevés, teljes értékű sétálóutcája.",
        "Nevét Caroline hannoveri hercegnőről kapta.",
        "Számos teraszos étterem és kávézó található itt.",
        "A Condamine piac közelsége miatt nagy a gyalogosforgalom.",
        "A negyed közösségi életének központi találkozóhelye.",
        "Rendszeres helyszíne helyi rendezvényeknek és piacoknak.",
        "A helyiek által preferált pihenőzóna a városi forgatagban."
    ]
  },
  {
    id: "city-avenue-saint-martin-extra",
    huDesc: "Az Avenue Saint-Martin Monaco-Ville történelmi negyedének – más néven Le Rocher-nak – legfestőibb sétánya, amely a hercegi palotát köti össze a világhírű Oceanográfiai Múzeummal. A sziklafalak peremén végigfutó út elképesztő panorámát nyújt a Földközi-tengerre és a monacói kikötőre. A környék a történelmi építészet és a gondozott egzotikus kertek harmonikus egységét mutatja be, így a város egyik leglátogatottabb turisztikai célpontja. A sétány nemcsak közlekedési útvonal, hanem a monacói történelem és kultúra élő múzeuma is. Földrajz K7 — turisztikai látnivalók.",
    huFacts: [
        "A történelmi Le Rocher-sziklán halad végig.",
        "Közvetlen összeköttetés a hercegi palota és az Oceanográfiai Múzeum között.",
        "Látványos kilátást kínál a tengerre és a kikötőre.",
        "A Szent Márton-kertek (Jardin Saint-Martin) bejárata itt található.",
        "A monacói óváros legfontosabb sétálóútvonala.",
        "Történelmi épületek sora szegélyezi az utat.",
        "Az Oceanográfiai Múzeum látogatásának elsődleges útja."
    ]
  },
  {
    id: "city-le-portier-extra",
    huDesc: "A Le Portier egy innovatív városfejlesztési projekt, amely a tengeri feltöltés technikáját alkalmazva bővíti Monaco korlátozott területét egy új, fenntartható öko-negyeddel. A koncepció célja a legmagasabb szintű környezetvédelmi és építészeti szabványok ötvözése, amely luxuslakásokkal, nyilvános zöldterületekkel és egy modern kikötővel bővíti a fejedelemséget. Ez a projekt a monacói innováció és a jövőbe mutató tértervezés jelképe, amely megmutatja, hogyan lehet harmonikusan kezelni a növekedési igényeket a korlátozott erőforrások mellett. Környezetismeret K8 — fenntartható városfejlesztés.",
    huFacts: [
        "Mesterséges földterületen épülő modern városnegyed.",
        "Úttörő fenntarthatósági és ökológiai elveket követ.",
        "Jelentősen növeli Monaco szárazföldi területét.",
        "Komplex fejlesztés, amely lakó- és közösségi tereket is magába foglal.",
        "A környezeti hatások minimalizálására tervezve.",
        "Monaco jövőbeli urbanisztikai fejlődésének egyik alapköve.",
        "Luxuslakások, marina és parkok együttes fejlesztése."
    ]
  },
  {
    id: "city-saint-roman-extra",
    huDesc: "Saint Roman Monaco keleti peremén elhelyezkedő nyugodt lakónegyed, amely a Franciaországgal való határközelsége miatt is jelentős szerepet tölt be a fejedelemség életében. A terület a modern toronyházakról és a csendesebb környezetről ismert, így ideális választás azok számára, akik a városi pezsgés mellett a határ menti kényelmet is keresik. A kiváló infrastrukturális háttér és a folyamatos fejlesztések, mint például a közeli La Rousse negyed átalakulása, vonzóvá teszik a térséget az ingázók számára is. Földrajz K5 — településszerkezet.",
    huFacts: [
        "Közvetlen határmenti kapcsolat Franciaországgal.",
        "Elsősorban lakó funkciójú negyed.",
        "Modern toronyházak határozzák meg az építészeti stílusát.",
        "A város keleti kapujaként is funkcionál.",
        "Csendesebb lakhatási környezetet nyújt, mint Monte-Carlo.",
        "Jól integrált infrastruktúra és közlekedés jellemzi.",
        "Fontos szerepet játszik a monacói ingázók ellátásában."
    ]
  },
  {
    id: "city-les-revoires-extra",
    huDesc: "A Les Révoires negyed földrajzilag a legmagasabban fekvő terület Monaco fejedelemségében, és otthont ad a Chemin des Révoires legmagasabb pontjának is. A kevésbé sűrű beépítettségnek köszönhetően a negyed zöldebb, és egyfajta természetes oázisként funkcionál a városi sűrűségben. Itt található a méltán híres Jardin Exotique (Egzotikus Kert), amely különleges szukkulens növényzetével és meredek szikláival minden látogatót lenyűgöz. A terület geológiai jelentősége és botanikai gazdagsága teszi különlegessé ezt a városrészt. Biológia K6 — flóra és vegetáció.",
    huFacts: [
        "Monaco legmagasabb pontja itt található.",
        "A világhírű Jardin Exotique botanikus kert otthona.",
        "A város legkisebb népsűrűségű negyedeinek egyike.",
        "Meredek, látványos geológiai sziklaformációk jellemzik.",
        "Zöldterületei fontos mikroklímát biztosítanak.",
        "Panorámás kilátást kínál az egész fejedelemségre.",
        "A természeti és városi környezet különleges találkozása."
    ]
  },
  {
    id: "city-moneghetti-extra",
    huDesc: "Moneghetti Monaco északnyugati oldalán található családias hangulatú lakónegyed, amely a meredek terepviszonyokat kihasználó teraszos villáiról és szépen gondozott privát kertjeiről ismert. A negyed csendesebb, intimebb légköre éles kontrasztban áll a fejedelemség nyüzsgőbb részeivel, így a város egyik legélhetőbb területének számít. Az itt fellelhető változatos építészeti stílusok a monacói várostervezés különböző korszakait tükrözik. A jó megközelíthetőség mellett az itt található ingatlanok egyedi hangulata teszi vonzóvá a negyedet. Társadalomismeret K7 — életminőség.",
    huFacts: [
        "A város északnyugati, dombos részén fekszik.",
        "Kiemelkedően csendes és családbarát lakókörnyezet.",
        "Teraszos építési mód jellemzi a domborzat miatt.",
        "Történelmi villákban bővelkedő utcakép.",
        "Számos rejtett magánkert gazdagítja a környezetet.",
        "Jó közlekedési kapcsolatok az alsóbb városrészekkel.",
        "A város egyik legmagasabb presztízsű lakónegyede."
    ]
  },
  {
    id: "city-place-d-armes-extra",
    huDesc: "A Place d'Armes a La Condamine negyed központi tere, amely Monaco társadalmi és kereskedelmi életének egyik legmeghatározóbb találkozóhelye. A híres Condamine piac itt működik, ahol a friss, szezonális termékek és helyi specialitások várják a vásárlókat. A teret szegélyező számos étterem és kávéház vibráló, barátságos hangulatot biztosít, amely a helyiek és a turisták körében is népszerű. Ez a helyszín a történelmi hagyományok és a mindennapi monacói életforma tökéletes ötvözete, amely kihagyhatatlan látnivaló mindenki számára. Gazdaságtan K5 — helyi piacok.",
    huFacts: [
        "A La Condamine negyed szociális központja.",
        "Napi rendszerességgel működő frissárupiac.",
        "Számos étterem és kávézó öleli körül a teret.",
        "A helyi közösségi élet egyik elsődleges helyszíne.",
        "Hagyományos piac, amely a régi és új Monaco találkozása.",
        "A kikötő és az óváros közötti közlekedési csomópont.",
        "Gazdag választék a regionális kulináris termékekből."
    ]
  }
];

apply_seo_json("lib/visualLab/data/poiExtraMonacoCities.ts", monacoCities);
