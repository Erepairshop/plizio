# REALTIME WORLD GAME PLAN

> Cél: egy nem iskolás, hosszú távon is játszható, realtime multiplayeres zászlóshajó játék megtervezése a Plizio ökoszisztémán belül, amely később képes a meglévő generatorokra támaszkodni.

## 1. Vízió

A játék ne egy újabb minijáték legyen, hanem egy élő rendszer:

- stratégia
- kis akció
- realtime co-op
- hosszú távú fejlődés
- emergens helyzetek
- napi visszatérésre alkalmas loop

A játékos ne kérdéseket oldjon meg, hanem:

- egy bázist vagy kolóniát üzemeltessen
- reagáljon eseményekre
- fejlessze a rendszereit
- közösen túléljen és terjeszkedjen másokkal

## 2. Fantasy

Első javaslat:

- egy távoli űrbázis / kolónia
- egy veszélyes, ismeretlen szektorban
- ahol a játékosok közösen tartanak életben és fejlesztenek egy állomást

Miért jó:

- könnyű rá stratégiai rendszereket építeni
- könnyű rá akcióhelyzeteket építeni
- jól illik a meglévő Plizio sci-fi / astro hangulathoz
- könnyen tematizálható eseményekkel, zónákkal, anomáliákkal

Munkacím:

- `Starhold`
- alternatíva: `Deep Sector`
- alternatíva: `Last Colony`

## 3. Játékosélmény

A kívánt élmény:

- 5 perc után is történjen valami érdekes
- 30 perc után legyen értelmes középtávú döntés
- 3 nap után legyen saját bázisidentitás
- 2 hét után legyen build, szerep és stratégiai specializáció

Ne ilyen legyen:

- “tanulós app” érzés
- tiszta quiz
- tiszta city builder
- tiszta arcade

Hanem ilyen:

- stratégiai menedzsment + realtime krízisek + felfedezés

## 4. Multiplayer irány

Elsődleges irány:

- realtime co-op first

Nem elsődleges:

- PvP first

Miért co-op:

- természetesebb a bázisüzemeltetéshez
- könnyebb szerepeket adni a játékosoknak
- kisebb a toxikus belépési küszöb
- jobban támogatja a hosszú sessionöket

Ajánlott első player count:

- 2-4 játékos / állomás

Későbbi lehetőség:

- aszinkron verseny ligák
- co-op szerverek közti meta verseny
- később event alapú PvP zónák

## 5. Mag loop

Az alap ciklus:

1. gyűjtesz erőforrásokat
2. fenntartod a bázist
3. reagálsz eseményekre
4. fejlesztesz modulokat
5. expedíciókat indítasz
6. új területeket és rendszereket nyitsz meg

Percről percre:

- kiosztás
- javítás
- energia menedzsment
- riasztáskezelés
- gyors döntések

10-20 perces loop:

- új modul építés
- veszélyhullám túlélése
- kutatás beindítása
- expedíció visszahozása

Órás loop:

- bázisstratégia
- build order
- specializáció
- ritka eseménylánc

Napi loop:

- napi anomália
- napi küldetés
- napi szektorprobléma
- jutalom és progresszió

## 6. Fő rendszerek

### 6.1 Bázis

A bázis moduláris:

- energia
- oxigén / életfenntartás
- kutatólabor
- védelmi rendszer
- logisztika
- lakómodul
- gyártás
- expedíciós hangár

Minden modul:

- fejleszthető
- sérülhet
- túlterhelhető
- boostolható

### 6.2 Erőforrások

Első MVP resource set:

- `power`
- `materials`
- `science`
- `crew morale`
- `stability`

Később:

- ritka anyag
- bioanyag
- adat
- üzemanyag

### 6.3 Crew / szerepek

A co-op miatt kellenek funkcionális szerepek:

- Engineer
- Scientist
- Operator
- Expedition Lead

Ez nem class-lock legyen, hanem:

- ki milyen modulra koncentrál
- ki mit kezel gyorsan
- ki milyen upgrade irányt húz

### 6.4 Expedíciók

Az expedíciók hozzák a felfedezés és kockázat érzetet.

Típusok:

- resource run
- scan mission
- rescue mission
- anomaly research
- hostile zone recon

Az expedíciók lehetnek:

- háttérben futók
- vagy rövid aktív beavatkozást kérők

### 6.5 Eseményrendszer

Ez a játék szíve.

Példák:

- energiahálózat instabil
- külső vihar közeleg
- idegen jel észlelve
- laborhiba
- morálzuhanás
- fertőzött szektor
- védelem túlterhelve
- rossz szállítmány
- ritka kutatási áttörés

Jó esemény:

- döntést kényszerít ki
- több rendszerre hat
- nem egyetlen jó válasza van

## 7. Akcióréteg

Nem teljes arcade, de kell benne gyors helyzetkezelés.

Lehetséges aktív szakaszok:

- moduljavító gyors minijáték
- vészhelyzeti átkapcsolás
- pajzs újrakalibrálás
- drónirányítás
- tűz / szivárgás lokalizálás
- kapurendszer újrahálózás

Ezek rövidek legyenek:

- 10-60 másodperc

Feladatuk:

- tempót törni
- adrenalint adni
- személyes ügyességet bevinni a stratégiai játékba

## 8. Generatorok szerepe

Itt a nagy áttörés kulcsa: a generator ne kérdésformában jelenjen meg.

A generatorból ezek származhatnak:

- események
- döntési opciók
- anomália leírások
- kutatási töredékek
- rendszerszintű problémák
- expedíciós leletek
- NPC jelentések

Tehát:

- nem “melyik a helyes válasz?”
- hanem “mit kezdünk ezzel a helyzettel?”

Példa:

- nem: “melyik elem reakcióképesebb?”
- hanem: “a laborban instabil reakció indult; melyik protokollal fogod meg?”

Vagy:

- nem: “mi a mondatrész?”
- hanem: “az üzenet félreérthető; melyik értelmezés alapján döntesz?”

Más szóval:

- a generator tudásmotorként működik
- nem vizsgamotorként

## 9. Architektúra

### 9.1 Alapelv

A játékot nem singleplayerből kell később multiplayeresíteni.

Kezdettől így kell tervezni:

- shared simulation
- realtime state sync
- player actions as commands
- client mint megjelenítő + input réteg

### 9.2 Rétegek

#### Simulation layer

Tartalma:

- bázisállapot
- modulállapotok
- erőforrások
- esemény queue
- expedíciók
- cooldownok
- crew state

#### Command layer

A játékosok nem állapotot küldenek, hanem parancsokat:

- build module
- reroute power
- repair module
- start research
- send expedition
- trigger emergency response

#### Presentation layer

A kliens ezt rajzolja:

- HUD
- base layout
- alerts
- effectek
- akciószegmensek

### 9.3 Realtime modell

Ajánlott:

- authoritative shared state
- tickelt sim vagy event-driven sim
- kliens oldali prediction csak ott, ahol kell

MVP-ben elég lehet:

- event + interval hybrid
- nem kell azonnal full action-game szintű tick precision

### 9.4 Sync kategóriák

Valós időben syncelendő:

- modul állapot
- erőforrások
- aktív események
- játékos akciók
- riasztási állapot

Nem kell frame-szinten syncelni:

- díszanimáció
- kisebb UI effektek
- lokális kameranézet

## 10. Session modell

Ajánlott első kör:

- session alapú co-op run
- 20-45 perces menetek
- egy run végén eredmény és meta progress

Miért nem teljes persistent world first:

- sokkal bonyolultabb backend
- reconnect és griefing nehezebb
- balancing nehezebb

Későbbi bővítés:

- persistent station meta
- szezonális szektor
- guild / fleet alapú szerveződés

## 11. Progresszió

Kétféle progress kell.

### Run progress

- modulok
- event chain
- ideiglenes fejlesztések
- túlélési állapot

### Meta progress

- új modul unlock
- új crew perk
- új expedíció típus
- új biome / szektor
- új ritka események
- kozmetika

## 12. Retention

A játék attól lesz “még egy kör” élményű, hogy:

- mindig van rövid távú veszély
- mindig van középtávú cél
- ritkán történik valami különleges
- a build nem lineáris
- a szerepek miatt minden játékos fontos

Retention eszközök:

- napi szektor esemény
- heti globális fenyegetés
- ritka artifact
- run leaderboard
- co-op streak
- modul mastery

## 13. Mi NEM legyen az MVP-ben

Ezeket első verzióban érdemes kerülni:

- teljes open world
- túl sok resource típus
- PvP first
- túl sok aktív minijáték
- bonyolult karakteranimáció
- teljes avatar export rendszer
- túl mély gazdasági szimuláció

## 14. MVP javaslat

### MVP cél

Legyen egy rövid, már izgalmas realtime co-op bázisjáték.

### MVP tartalom

- 1 bázis
- 4 fő modul
- 5 resource / állapot
- 8-12 eseménytípus
- 2 rövid akcióhelyzet
- 2-4 játékos co-op
- 20 perces run
- 1 expedíciós rendszer
- 1 meta unlock sáv

### MVP fő modulok

- Power Core
- Lab
- Defense
- Logistics

### MVP akcióhelyzetek

- emergency reroute
- breach containment

### MVP sikerfeltétel

- egy teljes co-op run legyen feszes, izgalmas, és újrajátszható

## 15. Későbbi fázisok

### Fázis 2

- több szektor
- specializált crew
- ritka modulok
- összetettebb event láncok

### Fázis 3

- persistent meta station
- guild/fleet layer
- versenyrendszer
- extra akciószegmensek

### Fázis 4

- opcionális PvP zónák
- szezon rendszer
- élő world eventek

## 16. Technikai döntések, amiket korán el kell dönteni

Ezek blokkoló kérdések:

- session run vagy persistent world first
- 2-4 player cap vagy több
- realtime co-op server authority pontos modellje
- generatorok seedelt vagy szerveroldali eseményforrásként mennek
- események mennyire determinisztikusak
- reconnect és late join támogatás MVP-ben kell-e

## 17. Ajánlott következő dokumentumok

Ha ez az irány jó, utána ezeket érdemes megírni:

1. `STARHOLD_CORE_LOOP.md`
2. `STARHOLD_REALTIME_ARCHITECTURE.md`
3. `STARHOLD_EVENT_SYSTEM.md`
4. `STARHOLD_MVP_SCOPE.md`

## 18. Döntési javaslat

Első konkrét irány:

- realtime co-op first
- session-based runs
- űrbázis fantasy
- stratégia + rövid akciószegmensek
- generator mint esemény- és döntésmotor
- MVP-ben kompakt, de már mély rendszer

Ez most elég erős alap ahhoz, hogy a projekt ne egy újabb minijáték legyen, hanem egy külön kategóriás rendszer a Plizión belül.
