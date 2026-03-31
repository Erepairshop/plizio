# STARHOLD VERTICAL SLICE

> Cél: meghatározni a játék első ténylegesen megépíthető szeletét, amely már visszaadja a világ hangulatát, a stratégiai magot és az avatar felébresztésének kulcspillanatát.

## 1. A vertical slice szerepe

Ez nem a teljes játék első fejezete, hanem egy olyan kontrollált, röviden megépíthető szelet, ami már bizonyítja:

- működik a világ hangulata
- működik a nyugodtabb stratégiai indulás
- működik a resource loop
- működik az avatar feltámasztás mint emlékezetes pillanat
- működik a React + Phaser + sim core alapirány

## 2. A slice fókusza

Az első slice ne legyen még túl zajos.

Ne ez legyen:

- folyamatos krízissorozat
- túl sok event
- sok rendszer egyszerre

Hanem ez:

- sérült állomás
- lassú helyreállítás
- alapanyaggyűjtés
- első stratégiai döntések
- avatar aktiválás
- az állomás “felébredése”

## 3. Alaphangulat

### Érzet

- csendes
- kissé magányos
- sci-fi
- feszülten nyugodt
- valami nagyobb dolog még csak készülődik

### Nem cél az első 10 percben

- állandó akció
- sok UI-zaj
- túl sok tutorial szöveg

### Cél

- a játékos úgy érezze:
  - egy sérült, de fontos helyet indít újra
  - valami élő rendszert érint meg
  - és egy központi karaktert hív vissza az életbe

## 4. Első 10 perc szerkezete

### Fázis 1: Ébredő állomás

Idő:

- 0-2 perc

Mi történik:

- a játékos egy sérült állomást lát
- kevés modul működik
- sok minden offline
- kevés resource áll rendelkezésre

Feladat:

- első rendszerek átnézése
- alapanyag gyűjtés / kiosztás
- 1-2 kulcsmodul stabilizálása

### Fázis 2: Első kontroll visszaszerzése

Idő:

- 2-5 perc

Mi történik:

- a játékos elkezdi helyrehozni a bázis működését
- megjelenik az első érdemi döntés:
  - energia
  - javítás
  - kutatás

Feladat:

- Reactor részleges újraindítás
- Logistics bekapcsolás
- egy minimális stabilitási szint elérése

### Fázis 3: Avatar activation sequence

Idő:

- 5-7 perc

Mi történik:

- elérhetővé válik egy zárt vagy félhalott központi egység
- ez az avatar magja
- az állomás rendszer azt jelzi, hogy külső/emberi aktiváció kell

Ez a vertical slice csúcspontja.

### Fázis 4: Új egyensúly

Idő:

- 7-10 perc

Mi történik:

- az avatar felébred
- megváltozik a bázis érzete
- új lehetőség nyílik
- az állomás többé nem teljesen “üres rendszer”

Feladat:

- egy első egyszerűbb döntési helyzet
- egy kisebb threat vagy rendszerprobléma
- kilépés egy stabilabb, de még törékeny állapotba

## 5. A vertical slice moduljai

Első körben csak 4 modul látszódjon.

### 5.1 Reactor

Feladata:

- alapenergia biztosítása

Miért kell:

- ez az első stratégiai tengely

### 5.2 Logistics

Feladata:

- alapanyagáramlás
- repair flow

Miért kell:

- ez adja a “helyreállítás” érzetét

### 5.3 Core Chamber

Feladata:

- itt van az avatar shell / mag
- kezdetben inaktív

Miért kell:

- ez a vertical slice érzelmi közepe

### 5.4 Sensor / Research Node

Feladata:

- első jelek
- első kisebb anomália / helyzetértelmezés

Miért kell:

- ettől lesz a világ több, mint javítós bázis

## 6. Resource loop az első slice-ban

Az első körben ne legyen túl sok resource.

### Első resource set

- `power`
- `materials`
- `stability`
- `signal charge` vagy `activation energy`

### Miért jó ez

- tiszta
- kevés
- mégis elég az első döntésekhez

## 7. Az avatar feltámasztás pillanata

Ez a vertical slice legfontosabb designpontja.

### Elv

Ne átvezető videó legyen.

Ne passzív gombnyomás legyen.

Hanem:

- a játékos fizikailag aktív benne
- legyen erőátadás-érzet
- legyen “feltámasztási” súlya

## 8. Az activation sequence javasolt flow-ja

### 8.1 Előkészítés

A játékos előbb megszerzi a feltámasztáshoz kellő állapotot:

- minimális energia
- minimális stabilitás
- activation charge

### 8.2 Trigger

Egy központi konzolnál vagy kamránál elindítja a folyamatot.

### 8.3 Aktív beavatkozás

Itt nem csak nézi az eseményt.

Jó első MVP megoldás:

- nyomni kell egy gombot / tartani kell egy inputot
- és közben a rendszer instabil
- a játékosnak fenn kell tartania az energiát / ritmust / kapcsolatot

Lehetséges megvalósítás:

- press-and-hold
- pulzáló input timing
- energiacsatorna stabilizálás

### 8.4 Fizikai hatás

Ez az egyik legfontosabb megjegyzésed.

Az aktiválásnak úgy kell hatnia, mintha:

- a játékosból / rendszerből energia áramlana az avatarba
- tényleges átvezetés történne
- nem csak “bekapcsolunk valamit”

Vizuálisan:

- energiaív
- központi kamra fényesedése
- shell részleges mozdulata
- a bázis is reagál rá

### 8.5 Felébredés

Az avatar nem teljes pompában születik meg rögtön, hanem:

- először csak részben aktív
- félig instabil
- de már jelen van

Ez jó, mert később lehet tovább építeni.

## 9. Mi történjen a feltámasztás után

Nagyon fontos, hogy ne legyen “na kész, ennyi”.

Közvetlen utána:

- változzon meg a bázis hangulata
- legyen új kis rendszerfunkció
- legyen egy első rövid, de jelentős döntés

Példák:

- új panel nyílik meg
- az avatar egy első figyelmeztetést vagy választási helyzetet ad
- egy kis fenyegetés jelenik meg
- a játékos rájön, hogy ezzel nem lezárult valami, hanem elkezdődött

## 10. Az első stratégiai döntések

Az első slice-ban már kell 2-3 igazi döntés.

### Javaslatok

1. Reactor stabilitás vagy gyors energia?
2. Logistics javítás vagy activation charge gyűjtés?
3. Sensor node vizsgálat vagy Core Chamber aktiválás előkészítése?

Ezek egyszerre:

- tanítanak
- karaktert adnak
- újrajátszhatóvá teszik a slice-ot

## 11. Az első események

Az első slice-ban 3 esemény bőven elég.

### 11.1 Power fluctuation

- megtanítja az energia sérülékenységét

### 11.2 Material bottleneck

- megtanítja a prioritást

### 11.3 Signal pulse

- előrevetít valami nagyobbat
- köti az avatarhoz és a későbbi anomáliákhoz

## 12. Mi látszódjon a képernyőn

### React oldalon

- top resource HUD
- 4 modul állapota
- alerts
- activation objective

### Phaser oldalon

- bázis alaprajz / modulnézet
- gyenge fények
- sérülési effektek
- activation sequence vizuál

## 13. Milyen legyen a pacing

Az első slice ne pörgős legyen, hanem feszült.

Kulcsszó:

- anticipation

A játékos érezze:

- valami készül
- minden kis döntés számít
- az avatar felébresztése esemény

## 14. Vertical slice célállapot

A slice végére a játékos:

- helyreállította a bázis alapműködését
- felébresztette az avatárt
- túlélt egy kisebb rendszerfeszültséget
- megérezte, hogy ez a játék nagyobb és mélyebb lesz

## 15. Mi NEM kell a slice-ba

Ne legyen benne még:

- teljes multiplayer
- klán rendszer
- több bolygós térkép
- full persistent world
- sok event
- összetett crew rendszer
- teljes perk meta

## 16. Technikai MVP breakdown

### Első implementációs csomag

1. starhold route
2. state scaffold
3. 4 modul
4. 4 resource/state
5. 3 event
6. activation sequence
7. avatar placeholder shell

### Második csomag

1. tuning
2. jobb vizuál
3. első state-eltérés
4. első rejtett következmény

## 17. Miért jó ez a slice

Ez a vertical slice:

- nem túl nagy
- de már hordozza a játék szívét
- stratégiai indulást ad
- erős vizuális-pillanatot ad
- és rögtön platformidentitást ad az avataron keresztül

## 18. Következő lépés

Ha ez jó, akkor a következő konkrét dokumentum ez lehet:

- `STARHOLD_SYSTEM_SPEC.md`

Abban már ténylegesen le lehet írni:

- a state mezőket
- az első module state-eket
- az első commandokat
- az activation sequence pontos technikai flow-ját

Ez már közvetlenül scaffoldolható lenne kódba.
