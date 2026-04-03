# Gravitas Session World and Combat Notes

> Ez a dokumentum a mostani sessionben lefektetett Gravitas world, resource, combat és későbbi galaxy-meta irányokat rögzíti. Nem végleges systemspec, hanem egy közös referenciadoksi a döntésekről és szándékokról.

## 1. Általános irány

- A Gravitas jelenlegi fókusza `singleplayer-first`.
- A mostani rendszerek legyenek `future-multi-safe`, de ne épüljön most szinkron, presence, shared state vagy realtime multi infrastruktúra.
- A cél: előbb működjön jól a játék mint egységes singleplayer rendszer, és csak utána jöhet a multiplayer réteg.

## 2. Galaxy map alapelvek

- A galaxy térkép adatvezérelt legyen, ne kézzel szétszórt JSX-elemekből álljon.
- A vizuális háttér és a gameplay layer különüljön el.
- A fontos interaktív pontok közös entity/node modellre épüljenek.
- A galaxy mérete jelenleg nagy, szellős világként legyen kezelve, ne túlzsúfolt ikonvászonként.

Jelenlegi alapelv:
- világos visual layer
- külön world/entity layer
- külön interakciós/UI layer

## 3. Koordináta rendszer

- A koordináta a truth source.
- A képernyőn látott pozíció csak renderelt következmény legyen.
- Minden fontos galaxy entity világkoordinátában éljen.

Miért kell:
- bázisáthelyezés
- meteor spawn / respawn
- event placement
- későbbi objective és battle site placement
- ütközéselkerülés

Elv:
- `world size` és `render size` külön fogalom
- későbbi térképnövelés mellett is működnie kell
- a jelenlegi százalékos UI pozíciózás hosszú távon nem elég

## 4. Meteor rendszer

### 4.1 Alap felosztás

- `6` meteor/material típus van
- minden típusból `5` példány jelenik meg
- összesen `30` meteor node van a galaxy world layerben

### 4.2 Anyagok

Rögzített material készlet:

1. `Lumen Dust`
2. `Verdant Crystals`
3. `Aether Ore`
4. `Ember Shards`
5. `Sable Alloy`
6. `Rift Stone`

### 4.3 Ritkaság és kitermelési karakter

Könnyűtől nehézig:

1. `Lumen Dust`
2. `Verdant Crystals`
3. `Aether Ore`
4. `Ember Shards`
5. `Sable Alloy`
6. `Rift Stone`

Elv:
- a könnyebb anyagból ugyanannyi idő alatt több szerezhető
- a nehezebb anyagból ugyanannyi idő alatt kevesebb szerezhető

### 4.4 Meteor asset irány

- A meteorok külön, rendes assetek legyenek.
- A cél: tiszta, egységes, felismerhető meteorvariánsok.
- A térképen ne csak statikus ikonként jelenjenek meg, hanem legyen körülöttük finom field/node érzet.

Vizuális elemek:
- glow
- finom pulse
- scan ring
- apró kísérő törmelék
- ritka csillanás

## 5. Bányászat alapelvek

### 5.1 Anyagtípus és konkrét meteor különbsége

Az anyagtípus nem ugyanaz, mint a konkrét meteor példány.

- `material` adja az alap karaktert
- a konkrét meteor node adja a konkrét kitermelési időt és hozamot

Ezért azonos anyagon belül is lehet könnyebb és nehezebb node.

### 5.2 Időtartomány

A meteorok kitermelési ideje ne legyen teljesen fix. A cél, hogy a konkrét meteorok `1-4 óra` közötti sávban mozogjanak.

Anyagonkénti irány:

- `Lumen Dust`: inkább az alsó sávban
- `Verdant Crystals`: alsó-közép sáv
- `Aether Ore`: közép sáv
- `Ember Shards`: közép-felső sáv
- `Sable Alloy`: felső sáv
- `Rift Stone`: a legfelső sávban

Elv:
- a világ élőbbnek hasson
- ne minden node legyen teljesen ugyanaz
- a nehezebb anyag tovább tartson és kevesebbet adjon

### 5.3 Későbbi player logistics

- A player `logistics` fejlődés később gyorsíthatja a bányászatot.
- Példa elv: `lvl 2 logistics = +20% mining efficiency`.
- Ezt most még nem kell teljesen kiépíteni, de az alap formulák fogadják majd ezt a bónuszt.

## 6. Meteor/node szintek és világfejlődés

Fontos különbség:
- a player level/progression nem ugyanaz
- a meteor/node level sem ugyanaz
- a világfázis/cycle megint külön fogalom

Tervezett rétegek:
- `material`
- `nodeLevel`
- `worldPhaseRequired` vagy hasonló mező

Alapelv:
- a világ is fejlődjön, ne csak a játékos
- a világ fejlődése nagyjából a normál játékostempóhoz legyen igazítva
- a világ ne fusson túl gyorsan előre
- de ne is maradjon túl sokáig primitív állapotban

Pacing alapelv:
- ki kell számolni, hogy egy normál játékos mikor ér el egy adott fejlődési szintet
- a világ ehhez igazítva nyisson új node levelt, ritkább anyagokat vagy nehezebb encounteröket

Példa irány:
- korai fázis: főleg `lvl 1` node-ok
- később: ritkán `lvl 2`
- később: egyre több `lvl 2`, majd ritka `lvl 3`

## 7. Resource HUD

- A felső UI-ban a 6 anyag jelenjen meg kompakt formában.
- Jól látható legyen, de ne foglaljon túl nagy helyet.
- A cél egy keskeny, gyorsan olvasható `resource strip`.

Elv:
- rövid név vagy rövid kód
- mennyiség
- saját szín
- kis helyigény
- később könnyen köthető valódi inventoryhoz

## 8. Támadható encounter pontok

A meteoritok mellett kell legalább egy külön node kategória, ami támadható és harci szimulációt indít.

Ez ne player/klan célpont legyen az első körben, hanem semleges encounter típus.

Példa fantasy:
- elhagyott outpost
- raider nest
- fortified relay
- roncsmező védelmi drónokkal

## 9. Encounter típusok és nehézség

Legalább `3` támadható encounter típus / nehézségi szint kell.

Alapelv:
- mindegyik máshogy viselkedjen
- ne ugyanaz a setup működjön minden ellen
- a játékosnak meg kell tanulnia, mire hogyan reagáljon

Lehetséges felosztás:
- `Minor Encounter`
- `Standard Encounter`
- `High-Risk Encounter`

Vagy tematikus felosztás:
- `Derelict Outpost`
- `Raider Nest`
- `Fortified Relay`

## 10. Harci rendszer alapelve

A harc ne csak nyers stat összeadás legyen.

Alapelv:
- a játékosnak tudnia kell, mire számítson
- az ellenfelek különbözően reagálnak
- a játékos döntése számítson
- jó játékkal egy gyengébb is legyőzhessen egy erősebbet

Ezért:
- nincs univerzálisan legjobb build
- csata előtt dönteni kell az erőelosztásról
- a célpont viselkedése számít
- a rendszer tanulható legyen

## 11. Avatar és military power

A játékos harci ereje két nagy rétegből állhat:

- `Avatar Power`
- `Military Power`

Irányelv:
- az avatar kb. `50%` súlyt adhat a teljes harci erőnek
- a military a másik nagy réteg

### 11.1 Military power fejlesztések

A military power több fejleszthető alrendszerből épüljön fel.

Irány:
- legalább `10` fejlesztési pont / tengely
- mindegyik más hatással legyen a csatára
- a játékosnak számítson, mit húz fel

Lényeg:
- nem elég csak magasabb számot építeni
- a build-specializáció és az aktivált setup is számítson

## 12. Avatar origin / kérdések hatása

Az avatar elején adott válaszoknak valódi hatása legyen.

Miért fontos:
- nem minden játékos ugyanúgy válaszol
- ettől a karakterek ténylegesen különböznek
- ez hatással lehet a harcokra és a buildre is

Elv:
- a kezdő kérdésekből egy háttérprofil születik
- ez nem csak kozmetikai döntés
- a későbbi combat működésre is hat

## 13. Harci setup és döntés

A játékosnak csata előtt tudnia kell dönteni:
- mit aktivál
- mibe mennyi erőt tesz
- melyik statot mennyire húzza fel az adott encounterhöz

Fontos cél:
- egy ügyes játékos okos erőelosztással megverhessen papíron erősebb ellenfelet is

Ez a rendszer csak akkor jó, ha:
- minden célpont máshogy reagál
- a játékos tanulhat
- a rendszer érthető visszajelzést ad

## 14. Battle report és üzenetek

Minden csata után legyen battle report / statisztika.

Ez ne csak egyszeri képernyő legyen, hanem maradjon meg visszanézhető formában az üzenetek között.

Miért fontos:
- a játékos tanulni tudjon belőle
- lássa, mi működött
- lássa, mit rontott el
- később visszakereshesse

Minimum tartalom:
- célpont neve
- nehézség
- győzelem vagy vereség
- vitt setup
- fő statisztikák
- loot
- rendszerüzenet / rövid értelmezés

## 15. Későbbi raid és battle ablakok

Későbbi multiplayer/szociális irányban fontos alapelv:

- ne lehessen mindig támadni
- legyenek kijelölt időszakok / raid window-k

Miért:
- a gyengébb játékos ne érezze magát 24/7 prédának
- a konfliktusnak legyen ritmusa és súlya
- a védekezés és az időzítés váljon játékelemmé

## 16. Későbbi kláncsaták

Későbbi nagyobb kláncsatákhoz cél:
- objective alapú csata
- nem csak nyers mészárlás

Példa:
- van egy épület vagy objective
- ezt `15 percig` tartani kell
- max `10` játékos mehet be
- ezek a klán legerősebb vagy legjobban összeválogatott tagjai

Elv:
- szerepkiosztás
- szinergia
- objective control
- nem csak összerő

## 17. Klánvezető szerepe

Később a jó klánvezetőnek valódi stratégiai súlya legyen.

Miért:
- a rendszer megértése értéket kap
- a szervezés és a döntés számít
- a galaxis uralása ne csak nyers szám kérdése legyen

Az ideális állapot:
- a legjobb klánvezető komoly előnyt szerezhet
- de egy gyengébb klánnak is maradjon esélye jó counterrel és jobb döntéssel

## 18. Uralkodó rendszer

Későbbi világ/meta cél:
- a galaxisnak lehessen ideiglenes uralkodója

Elv:
- ez csak egy bizonyos világfejlődési szint után nyíljon meg
- havonta legyen egy nagy csata vagy objective
- a győztes klán kijelölhet `1` embert
- az lesz az uralkodó a következő nagy alkalomig

Miért jó:
- presztízs
- időszakos hatalom
- politikai súly
- nem örök, bebetonozott uralom

Az uralkodó hatásának elve:
- legyen jelentős
- de ne törje szét a balanszt

## 19. Fejlesztési stratégia

Fontos szabály:
- a rendszer lehet mély
- a játékos élménye legyen fokozatosan tanulható

Nem cél:
- mindent egyszerre ráborítani a játékosra

Cél:
- belül egységes, összetett rendszer
- kívül fokozatosan feltáruló élmény

## 20. Rövid prioritási sorrend

Jelenlegi jó sorrend:

1. world coordinate alapok
2. node és world layer tisztázása
3. meteor/resource rendszer
4. encounter node-ok
5. combat loop alapok
6. battle report rendszer
7. később node level és world phase pacing
8. jóval később social/multi rendszerek

## 21. Fontos megjegyzés

Ez a doksi a mostani beszélgetésekből született irányrögzítés. A cél nem az, hogy minden pont azonnal implementálva legyen, hanem hogy a jövőbeni döntések ne menjenek szembe ezekkel az alapelvekkel.
