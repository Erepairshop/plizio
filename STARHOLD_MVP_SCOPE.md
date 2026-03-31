# STARHOLD MVP SCOPE

> Cél: a `REALTIME_WORLD_GAME_PLAN.md` alapján egy első, valóban megépíthető MVP meghatározása.

## 1. MVP cél

Az első verzió ne “sok funkció, kevés élmény” legyen, hanem:

- rövid idő alatt érthető
- 2-4 játékossal működőképes
- stratégiai döntéseket ad
- közben időnként gyors reakciót igényel
- újrajátszható

Az MVP célja nem az, hogy teljes játék legyen, hanem hogy bebizonyítsa:

- működik a realtime co-op loop
- működik a bázis + esemény + akció keverék
- van benne elég feszültség és visszatérési potenciál

## 2. Session modell

Az MVP session-based legyen.

### Miért

- egyszerűbb multiplayer
- egyszerűbb balansz
- könnyebb tesztelni
- nem kell rögtön persistent világ

### MVP session paraméterek

- játékosok: 2-4
- run hossz: 15-25 perc
- cél: egy állomás túlélése és stabilizálása adott időn / eseményhullámon át

### Run vége

Egy run akkor ér véget, ha:

- a bázis stabilan túlélte a ciklust
- vagy összeomlott egy kritikus rendszer miatt
- vagy a final eventet nem sikerült kezelni

## 3. Core fantasy az MVP-ben

Az MVP világa:

- egy elszigetelt űrállomás egy veszélyes szektor szélén
- kevés erőforrással
- folyamatos környezeti és rendszerszintű fenyegetésekkel

A játékosok feladata:

- életben tartani az állomást
- fejleszteni a kulcsmodulokat
- kezelni a vészhelyzeteket
- elérni a run végét teljes összeomlás nélkül

## 4. MVP fő rendszerek

### 4.1 Power

Ez a legfontosabb gerinc.

Funkció:

- minden modul energiaigényes
- túlterhelés veszélye
- átterelhető energia vészhelyzetben

Állapotok:

- normal
- strained
- overloaded
- offline

### 4.2 Stability

Egy globális túlélési mutató.

Funkció:

- mutatja, mennyire közel a rendszerösszeomlás
- egyes események ezt támadják
- jó döntések és javítások stabilizálják

Ha túl alacsony:

- láncreakció indulhat
- több esemény aktiválódik

### 4.3 Materials

Az építés és javítás erőforrása.

Felhasználás:

- modul javítás
- modul upgrade
- emergency rebuild

### 4.4 Science

A runon belüli fejlesztési erőforrás.

Felhasználás:

- gyors ideiglenes buff
- kutatás
- rendszeroptimalizálás

### 4.5 Crew Load

Egyszerűsített humán terhelési mutató.

Funkció:

- ha túl sok feladat van egyszerre, romlik a hatékonyság
- ettől fontos lesz a prioritáskezelés

## 5. MVP modulok

Az első 4 modul:

### 5.1 Reactor

Fő szerep:

- energia termelés

Ha sérül:

- az egész rendszer instabillá válik

### 5.2 Lab

Fő szerep:

- science termelés
- anomália / esemény analízis

Ha sérül:

- lassulnak a döntési és kutatási opciók

### 5.3 Defense Grid

Fő szerep:

- külső veszélyek enyhítése
- event impact csökkentése

Ha sérül:

- keményebben ütnek a külső események

### 5.4 Logistics

Fő szerep:

- materials beérkezés
- javítási sebesség
- modulok közti működési stabilitás

Ha sérül:

- nő a reakcióidő és a költség

## 6. MVP játékos akciók

Az első aktív akciólista legyen rövid és tiszta.

### Stratégiai akciók

- upgrade module
- repair module
- reroute power
- start research
- prioritize system

### Gyors akciók

- emergency patch
- breach containment
- overload dump
- signal calibration

## 7. MVP akciószakaszok

Az MVP-ben két rövid, feszes akciómodul elég.

### 7.1 Emergency Reroute

Szituáció:

- energiahiba vagy túlterhelés

Játékos feladat:

- gyorsan át kell kötni a hálózatot
- nem minden modul menthető egyszerre

Miért jó:

- könnyen érthető
- stratégiai következménye van

### 7.2 Breach Containment

Szituáció:

- egy modul megsérült vagy külső fenyegetés áttörte a védelmet

Játékos feladat:

- gyorsan lokalizálni és lezárni a hibát
- rossz reakció esetén stability veszteség

Miért jó:

- akciósabb
- feszültebb

## 8. MVP események

Az első körben 8-10 eseménytípus elég.

### Javasolt események

1. Reactor surge
2. Supply delay
3. Sensor ghost signal
4. Lab contamination
5. External storm front
6. Defense misfire
7. Crew overload
8. Material fracture
9. Unknown anomaly ping
10. Chain instability warning

### Jó esemény ismérvei

- röviden olvasható
- több rendszerre hat
- döntést kényszerít ki
- nem pusztán binary

## 9. MVP run szerkezet

### Fázis 1: Stabil indulás

- rövid tanuló szakasz
- alap resource flow
- első kis zavar

### Fázis 2: Növekvő nyomás

- több event egyszerre
- modul prioritás fontos lesz
- első komoly akciószakasz

### Fázis 3: Kritikus szakasz

- összetettebb event kombinációk
- kevesebb hibázási lehetőség
- dönteni kell, mit áldoznak fel

### Fázis 4: Final crisis

- egy nagy záró esemény
- a korábbi fejlesztések és döntések itt számítanak

## 10. Multiplayer MVP

### Első verzió

- co-op only
- minden játékos ugyanabban a shared state-ben van
- nincs inventory loot trade
- nincs PvP

### Szerepelosztás érzete

Nem kell merev role system, de legyen:

- valaki energiát menedzsel
- valaki javít
- valaki lab / research irányt visz
- valaki gyors reakciókat csinál

### MVP networking cél

- minden fontos állapot közös
- játékosok akciói azonnal látszanak
- reconnect nélkül is már jó lehet az első prototípus

Reconnect / late join később jöhet.

## 11. Generator integráció az MVP-ben

Az MVP-ben még nem kell minden meglévő generatorra ráülni.

Először csak korlátozottan használjuk:

- eseményleírás variáció
- döntési helyzetek
- kutatási kimenetek
- anomália flavor és logikai háttér

### Fontos

A generator ne így jelenjen meg:

- “oldd meg ezt a feladatot”

Hanem így:

- “ezt a helyzetet így értelmezte a rendszer”
- “ezt a protokollt javasolja a labor”
- “ez a választás milyen következménnyel járhat”

## 12. MVP UI rétegek

### React UI

- top HUD
- modul panelek
- resource bar
- alerts
- multiplayer/lobby
- run summary

### Phaser / aktív jelenet

- bázis vizuális tér
- modul animáció
- esemény effektek
- rövid akciószakaszok

### Sim core

- resource számolás
- modul állapot
- event queue
- run progression
- játékos akciók következménye

## 13. MVP sikerfeltétel

Az MVP akkor sikeres, ha ez teljesül:

- 2 játékos már élvezetesen tud együtt játszani
- egy run végigvihető
- legalább 2-3 eltérő stratégiai döntés értelmes
- a két akciószakasz nem érződik idegennek
- van “még egy run” érzés

## 14. Ami nem része ennek az MVP-nek

- persistent világ
- guild rendszer
- szezon rendszer
- loot economy
- avatarrendszer bekötése
- PvP
- sok külön biome
- több mint 4 fő modul
- bonyolult crew management

## 15. Következő dokumentumok

Ha ez jó, innen a következő logikus doksik:

1. `STARHOLD_TECH_ARCHITECTURE.md`
2. `STARHOLD_SIM_CORE.md`
3. `STARHOLD_EVENT_MODEL.md`
4. `STARHOLD_VERTICAL_SLICE.md`

## 16. Javasolt következő gyakorlati lépés

Mielőtt bármilyen kód elkezdődik, még ezt a 4 döntést rögzíteni kell:

1. pontos munkacím
2. run hossza: 15, 20 vagy 25 perc
3. végső MVP resource set
4. final crisis típusa

Ha ez megvan, már lehet technikai architektúrát tervezni úgy, hogy ne kelljen később újraforgatni az egész irányt.
