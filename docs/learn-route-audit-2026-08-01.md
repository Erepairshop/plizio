# Learn, Astro és Test route audit, 2026-08-01

## Hatókör és szabályok

Az audit a `/learn` belépőt, az összes Astro tantárgyat és osztályt, a közös játék- és explorer-motorokat, valamint az összes Test route-ot vizsgálja.

- Astro: vizuális, interaktív, egyértelmű feladatleírás és progress kötelező, látható visszaszámlálás tilos.
- Test: papírszerű, print-ready iskolai teszt, nagy standalone vizuálok nélkül.
- Közös motorban javítunk, ha ugyanaz a hiba több route-ot érint.
- Teljes Next build és teljes repó-typecheck nem része az auditnak. Célzott import- és inspector-ellenőrzések futnak.

## Kritikus találatok

1. A csak olvasási nyelvi tesztek üres végképernyőre kerülnek, mert `reward` állapot mellett nincs `earnedCard`.
2. A G7 AstroMath mind a nyolc és a G8 hét explorer missziója üres stub. A G8 négyzetgyök explorer már javítva és feltöltve.
3. Az AstroMath közös M2/M3 pooljai nem grade-, sziget- vagy témaspecifikusak, ezért a misszió címétől eltérő tartalmat adhatnak.
4. Az AstroMath K5-K8 checkpoint `RocketLaunch` látható visszaszámlálást és automatikus timeoutot használ.
5. Öt közös M2 view az utolsó helyes választ nem számolja bele az `onDone` eredménybe.
6. A K7/K8 biológia generált explorer-kvízeihez nincs regisztrált generátor.
7. A földrajz explorerek az adott sziget helyett a teljes grade poolt használják, az azonos label-kulcsok pedig felülírják egymást.
8. A K5 kémia interakciók prefix nélküli label-kulcsokat adnak a motornak, ezért nyers kulcsok jelenhetnek meg.
9. A földrajz K6 harmadik szigetének explorer poolja üres.
10. Az AI-teszt nem adja tovább az aktuális nyelvet a curriculum getternek, ezért minden nyelven magyar kérdések jöhetnek.

## Közepes találatok

1. Az Explorer `word-order` figyelmen kívül hagyja a konfigurált `correctOrder` értéket.
2. A K6 biológia több szigetén hiányzik feladatleírás vagy hint; egy kézi kvíz összes kérdéslabelje hiányzik.
3. A K7 biológia 4-9. szigetén hiányos a HU/EN/RO lokalizáció.
4. Az Informatika Visual Lab `Virus Vault` látható visszaszámlálást használ.
5. Több Astro Challenge leírás továbbra is időre teljesítést ígér, miközben a motorban nincs timer.
6. A közös M2/M3 státuszszövegek egy része angolul marad más nyelveken is.
7. A Test motor nem tölti vissza a mentett országot, és elfogad nem támogatott `?grade=` értékeket.
8. Három K8 Deutsch vizuális feladattípus hiányzik a tesztépítő vizuális listájából.
9. Az angol test landing 10-15 kérdést ígér, a motor legalább 30-at épít.
10. A biológia Visual Lab egy földrajzi Deutschland Map játékot is listáz.

## Célzott ellenőrzési eredmények

- A `/learn` által generált Astro és Test célroute-ok léteznek.
- A jelenleg hivatkozott M2/M3 `gameKey` értékek regisztrálva vannak.
- Az AstroMath kérdésgenerátor-validátor K1-K4 és K6-K8 esetén tiszta.
- AstroMath K5-ben hiányzó kérdésgenerátor-topikok: `g5_geo_rect`, `g5_geo_peri`, `g5_stat_graph`.
- A Test inspector által támogatott tárgyaknál nincs igazolt üres pool vagy valódi duplikált MCQ-opció.

## Javítási sorrend

1. Közös futási és pontozási hibák.
2. Explorer generator- és sziget-wiring.
3. Countdownok és időnyomásos szövegek eltávolítása.
4. Hiányzó lokalizációk és label-kulcsok.
5. G7/G8 Math explorer tartalom feltöltése.
6. Grade-, sziget- és témaspecifikus M2/M3 registry kialakítása.

## Elvégzett javítások

- A csak olvasási teszt már közvetlenül az eredményképernyőre lép.
- A Test motor validálja a támogatott évfolyamot, és csak érvényes mentett országot állít vissza.
- Az AI-teszt kérdésgenerátorai megkapják az aktuális `de/en/hu/ro` nyelvet.
- A földrajz K5-K8 Explorer az aktív sziget saját poolját és címkéit használja.
- A K6 földrajz i3 sziget 12 valódi, négynyelvű Europe Regions feladatot kapott.
- A K7/K8 biológia generátorai regisztrálva vannak a közös Explorerben.
- A K6 és K7 biológia hiányzó címkéi és lokalizációi ki lettek töltve.
- A K5 kémia témánként prefixeli az interaktív címkehivatkozásokat; mind a 9 pool validált.
- A `word-order` interakció tiszteletben tartja a konfigurált `correctOrder` értéket.
- Öt közös M2 nézet a végső válasz utáni pontszámot adja tovább.
- A RocketLaunch és Virus Vault látható visszaszámlálása megszűnt.
- Az AstroMath kérdésgenerátor-validátor K1-K8 között hibamentes.

## Második auditkör

- A régi `audit-explorers.mjs` 1471 jelzésének többsége hamis pozitív. A script fájlnév- és szövegheurisztikája nem követi a közös runtime dispatch-et.
- 28 valóban elérhetetlen Explore küldetés igazolt: English K4-K5 (18), Biológia K5/K8 (8), Math K5 (2).
- A G7 nyolc és a G8 hét matematika Explorer továbbra is üres stub.
- Az üres Explorer definíciók blank képernyőből egy kattintással teljesíthetők; ezt a közös motorban is védeni kell.
- A G7/G8 `visualType` mezős M2 küldetések nem jutnak el a visual rendererhez.
- A `SpeedRound`, `TrueFalseBlitz` és öt AstroDeutsch játék továbbra is látható időzítőt és timeoutot használ.
- A Sachkunde Test csak K1-K4 tananyagot tartalmaz, de K1-K8 választót mutat.
- Több lokalizált Test route TTS-, print- és jegyszámítási nyelve még a német alapértékhez kötött.
- A Test blank-print visual helper szövegek egy része hardcoded német.
- A Test motorhoz nincs fókuszált automata regressziós teszt a lokalizált route-okra, printre és billentyűzetes vezérlésre.

## Következő nagy tartalmi feladatok

1. G7 nyolc Explorer feltöltése legalább 3 teljes témával szigetenként.
2. G8 hét fennmaradó Explorer feltöltése ugyanilyen szerkezettel.
3. Üres Explorer definíciók runtime blokkolása, hogy ne lehessen blank tartalmat teljesíteni.
4. Grade-/island-/topic-specifikus M2/M3 tartalom-registry.
5. Test TTS, print és jegyskála lokalizációjának központi rendezése.

## Záró állapot, 2026-08-01

- A 28 igazolt, elérhetetlen Explore küldetés runtime routingja javítva.
- Az AstroMagyar K6 hiányzó M2/M3 renderelése javítva.
- A közös Explorer üres definíciót nem enged teljesíteni és bezáráskor nem ad `0/0` eredményt.
- A G7 mind a 8 matematika Explorerje valódi, négynyelvű tartalmat kapott (3-4 topic/Explorer).
- A G8 mind a 8 matematika Explorerje valódi, négynyelvű tartalmat tartalmaz (3 topic/Explorer).
- A `SpeedRound`, `TrueFalseBlitz` és az öt vizsgált AstroDeutsch játék countdown/timeout nélkül működik.
- A Test TTS és print locale a kiválasztott országból származik.
- A Test blank-print helper szövegek `de/en/hu/ro` nyelven lokalizáltak.
- A vizsgált Test route-ok jegyskálája országfüggő adaptert használ.
- A Sachkunde Test csak a támogatott K1-K4 évfolyamokat mutatja.
- Létrejött a tartós `scripts/audit-learn-routes.mts` regressziós audit.

Záró célzott ellenőrzések:

- `npx tsx scripts/audit-learn-routes.mts`: PASS, 0 Learn/Astro/Test audit hiba.
- `npx tsx scripts/check-astromath.ts`: PASS, K1-K8 hibamentes.
- G7 Explorer import: 8/8 nem üres, 3-4 topic definíciónként.
- G8 Explorer import: 8/8 nem üres, 3 topic definíciónként.
- Célzott `git diff --check`: hibamentes.

Nem futott teljes Next build vagy teljes repo typecheck. Két ügynök tévesen megpróbálta a teljes typechecket, de a nagy repo miatt memóriából kifutott; ez nem része a validált eredményeknek.

Alacsonyabb prioritású következő fejlesztések:

1. Grade-/island-/topic-specifikus M2/M3 tartalom-registry.
2. Astro Challenge leírások teljes szöveges felülvizsgálata az időnyomásos megfogalmazások miatt.
3. Biológia Visual Lab tantárgyidegen Deutschland Map elemének áthelyezése vagy eltávolítása.
4. Lokalizált Astro grade route-ok egységes URL-stratégiája.
