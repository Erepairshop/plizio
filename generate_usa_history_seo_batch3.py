import json

items = [
    {
        "id": "st-augustine-history-v2",
        "descriptionAdvanced": "St. Augustine Floridában a legrégebbi, európaiak által alapított folyamatosan lakott város az Egyesült Államokban. 1565-ben alapították spanyol telepesek, ami mély nyomot hagyott a város építészetében és kultúrájában. A város a gyarmati spanyol stílusú épületeivel és erődítményeivel, mint a Castillo de San Marcos, egyedülálló történelmi élményt nyújt. Történelem K7 — spanyol gyarmatosítás Amerikában.",
        "factsAdvanced": [
            "1565-ben alapították spanyol konkvisztádorok.",
            "A város több mint 450 éves múlttal rendelkezik.",
            "A Castillo de San Marcos az egyetlen fennmaradt 17. századi erődítmény az USA-ban.",
            "St. Augustine Florida fővárosa volt 1821-ig.",
            "A város történelmi központja keskeny utcáival spanyol hangulatot áraszt.",
            "A város stratégiai fontossággal bírt a spanyol tengeri kereskedelmi útvonalak védelmében."
        ]
    },
    {
        "id": "mission-san-juan-capistrano-history-v2",
        "descriptionAdvanced": "A San Juan Capistrano missziót 1776-ban alapították spanyol ferences szerzetesek Kaliforniában. A misszió központi szerepet játszott az őslakosok keresztény hitre térítésében és az európai mezőgazdasági technológiák meghonosításában a régióban. Bár a nagy kőtemploma 1812-ben egy földrengésben elpusztult, a maradványai ma is megtekinthetők. Történelem K6 — missziók és gyarmati terjeszkedés.",
        "factsAdvanced": [
            "A missziót 1776. november 1-jén alapították.",
            "A nagy kőtemplom építése 1797-ben kezdődött.",
            "A templom az 1812-es földrengésben részben elpusztult.",
            "A misszió a 'Kaliforniai missziók ékköve' néven ismert.",
            "A helyszín ma múzeum és történelmi emlékhely.",
            "A szerzetesek nagy szerepet játszottak a régió szőlőtermesztésének megkezdésében."
        ]
    },
    {
        "id": "manzanar-history-v2",
        "descriptionAdvanced": "Manzanar az egyik legjelentősebb internálótábor volt az Egyesült Államokban, ahol a második világháború alatt több mint 10 000 japán származású amerikai állampolgárt tartottak fogva. A tábor kegyetlen emléke az amerikai történelem egyik sötét fejezetének, a faji előítéletek és a háborús paranoia következményeinek. Ma nemzeti történelmi emlékhelyként emlékeztet az igazságtalanságra. Történelem K8 — a második világháború és az emberi jogok.",
        "factsAdvanced": [
            "A tábor 1942 és 1945 között működött.",
            "Kalifornia állam keleti részén, a Sierra Nevada hegység lábánál található.",
            "A foglyok többsége amerikai születésű állampolgár volt.",
            "A tábor területén ma egy látogatóközpont mutatja be a korszakot.",
            "Az internálás az 1941-es Pearl Harbor elleni támadás következménye volt.",
            "Az elhunytak emlékére ma egy emlékmű áll a tábor területén."
        ]
    },
    {
        "id": "wounded-knee-battlefield-history-v2",
        "descriptionAdvanced": "Wounded Knee az amerikai történelem egyik legvéresebb és legtraumatikusabb eseményének helyszíne, ahol 1890-ben az amerikai hadsereg katonái lemészárolták a lakota sziú indiánok egy csoportját. A mészárlás a 'Szellem-tánc' mozgalom elnyomása során történt, és mély nyomot hagyott az amerikai indiánok tudatában. A helyszín ma az indiánok küzdelmeinek és fájdalmának jelképe. Történelem K8 — az indián háborúk vége.",
        "factsAdvanced": [
            "A tragédia 1890. december 29-én történt.",
            "Körülbelül 150-300 lakota indián vesztette életét.",
            "Ez az esemény az 'indián háborúk' végének tekinthető.",
            "Az áldozatok emlékére egy közös síremléket emeltek.",
            "A mészárlás a Szellem-tánc mozgalom betiltása miatt fajult el.",
            "Az esemény máig a lakota nép történelmi traumájának része."
        ]
    },
    {
        "id": "angel-island-immigration-station-history-v2",
        "descriptionAdvanced": "Angel Island az 'nyugati Ellis-szigetként' ismert, ahol 1910 és 1940 között több százezer ázsiai bevándorlót, elsősorban kínaiakat tartottak fogva és vizsgáltak meg. A szigorú bevándorlási törvények miatt sokan hosszú hónapokat töltöttek itt kihallgatásokon, várva a belépési engedélyre. A létesítmény ma múzeum, amely bemutatja a bevándorlók nehéz sorsát. Történelem K7 — bevándorlás és társadalom.",
        "factsAdvanced": [
            "A bevándorlási állomás 1910-ben nyitotta meg kapuit.",
            "Több mint 175 000 kínai bevándorló ment keresztül az állomáson.",
            "A sziget a San Francisco-öbölben található.",
            "A bevándorlók sorsa gyakran évekig bizonytalan volt.",
            "Az épület falaira írt versek megőrizték a bevándorlók szenvedéseit.",
            "Az állomást 1940-ben egy tűzvész után zárták be végleg."
        ]
    },
    {
        "id": "shiloh-national-military-park-history-v2",
        "descriptionAdvanced": "Shiloh a polgárháború egyik legjelentősebb és legvéresebb csatája volt 1862 áprilisában, ahol a szövetségi és konföderációs erők hatalmas veszteségeket szenvedtek. A csata bebizonyította, hogy a háború sokkal tovább és véresebben fog folytatódni, mint azt az elején remélték. A nemzeti katonai park ma gondosan megőrzi a csatatér eredeti állapotát. Történelem K7 — polgárháború és katonai stratégiák.",
        "factsAdvanced": [
            "A csata 1862. április 6-án és 7-én zajlott.",
            "Több mint 23 000 áldozata volt a két napnak.",
            "Ez volt az első nagy csata a nyugati hadszíntéren.",
            "Az Unió Ulysses S. Grant vezetésével győzedelmeskedett.",
            "A csatatér Tennessee államban, a folyó közelében található.",
            "A park területén számos emlékmű áll a résztvevő ezredek tiszteletére."
        ]
    },
    {
        "id": "vicksburg-national-military-park-history-v2",
        "descriptionAdvanced": "Vicksburg ostroma és elfoglalása 1863-ban a polgárháború egyik legfontosabb stratégiai sikere volt az Unió számára. A város elfoglalásával az északi csapatok megszerezték az irányítást a Mississippi folyó felett, ezzel kettévágva a Konföderációt. A hosszú, több hónapig tartó ostrom a város lakóinak körében is súlyos szenvedéseket okozott. Történelem K8 — a Mississippi feletti irányítás.",
        "factsAdvanced": [
            "Az ostrom 47 napig tartott, és 1863. július 4-én ért véget.",
            "Az unió győzelme kulcsfontosságú volt a folyami kereskedelemhez.",
            "A védők kénytelenek voltak barlangokban élni az állandó ágyúzás miatt.",
            "Ulysses S. Grant tábornok irányította az ostromló csapatokat.",
            "A Vicksburgi Nemzeti Katonai Park 1899-ben alakult meg.",
            "Az erődítmény elfoglalása a polgárháború egyik fordulópontja volt."
        ]
    }
]

data = {
    "lang": "hu",
    "country": "usa",
    "files": ["lib/visualLab/data/poiExtraUsaHistoryV2.ts"],
    "items": items
}
with open("seo_usa_hu_history_batch3.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
