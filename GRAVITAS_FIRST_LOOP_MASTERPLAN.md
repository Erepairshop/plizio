# Gravitas First Loop Masterplan

## Cél

Ez a dokumentum a Gravitas első nagy, önállóan játszható szakaszának összefogó master terve.  
Nem a teljes jövőbeli Gravitas világot írja le, hanem azt a **pre-galaxy first loopot**, amelynek működőképesnek, élvezhetőnek és bővíthetőnek kell lennie, mielőtt a játékos kikerül a shared galaxy rétegbe.

Ez a doksi handoff alap:
- Claude / másik modell számára
- későbbi saját fejlesztési körök számára
- design és rendszerdöntések ellenőrzőpontjaként

## Mi a Gravitas most?

A Gravitas a Plizio központi, kiemelt, hosszú távon épülő játékprojektje.

Nem cél:
- sima meghívásos multiplayer
- egy egyszerű iskolás játék
- egy rövid sessionös minijáték

A Gravitas célja:
- stratégia
- túlélés
- fenyegetési ciklusok
- modulkezelés
- állomásépítés / stabilizálás
- avatar-ébresztés
- maradandó világállapotok
- később shared galaxy / klán / jelenlét

## Jelenlegi scope

### Amit MOST építünk

A pre-galaxy first loopot:

- sérült állomás
- alap resource loop
- négy fő modul
- események
- threat cycle
- aftershock / recovery
- awakening / activation
- marks / anomalies / entropy
- stars / milestone / in-game shop foundation

### Amit MOST még nem építünk

- galaxy map
- shared galaxy presence
- klánrendszer
- bolygók / kolonizáció
- shared realtime world
- nagy metagame
- teljes redesign

## Az első nagy kör játékosélménye

A játékos ezt a sorrendet élje át:

1. Belép egy sérült állomásra.
2. Kevés erőforrással indul.
3. Megtanulja a négy modul szerepét.
4. Kisebb eseményekkel és romlással találkozik.
5. Érzi, hogy közeleg egy nagyobb fenyegetés.
6. Felkészül rá a rendelkezésére álló kevés erőforrással.
7. A hullám becsapódik.
8. Aftershock és recovery döntések következnek.
9. Halad az avatar-ébresztés felé.
10. Megkapja az első komoly “születési” pillanatot.
11. Az awakening után is folytatódik a station loop, csak mélyebb világállapotokkal.
12. Ezen a ponton közelítünk ahhoz a határhoz, ahol a későbbi galaxisréteg egyszer megnyílhat.

## Mi számít az első lezárásnak?

Az első lezárás **nem a teljes játék vége**.

Az első lezárás az, amikor:

- a pre-galaxy station loop erős és önállóan játszható
- a threat cycle jól működik
- a recovery loop valódi stratégiai súlyt ad
- az activation / awakening működik és emlékezetes
- a progression / stars / shop foundation látható értelmet kap
- a játék már nem csak prototípus, hanem “kerek első szakasz”

Ezután lehet megnyitni a következő réteget:
- shared galaxy
- presence
- távolabbi szektorok
- későbbi klán / kapcsolat

## Core gameplay loop

Az első loop szerkezete:

1. Resource gain
- power
- materials
- stability menedzsment

2. Module management
- reactor
- logistics
- sensor
- core

3. Small system pressure
- marks
- anomalies
- entropy
- kisebb események

4. Threat preparation
- countdown
- prep actionök
- modul prioritás

5. Threat impact
- külső fenyegetés
- becsapódás
- maradandó kár

6. Aftershock / recovery
- gyors túlélés
- hosszú távú helyreállítás
- döntés, mit javíts előbb

7. Progress / awakening pressure
- activation readiness
- avatar shell feléledése
- a játékos közelebb kerül az első nagy mérföldkőhöz

8. Reward / continuation
- stars
- milestone
- shop döntések
- új stratégiai helyzet

## Modulok szerepe

### Reactor

Feladata:
- power termelés
- threat prep támogatás
- shell fortification

Stratégiai szerepe:
- nagy erejű, de veszélyes döntések
- túlterhelés árán mentheti a runt
- rossz állapotban komoly sebet hagy

### Logistics

Feladata:
- materials flow
- javítás
- meteor / külső kár utáni recovery

Stratégiai szerepe:
- tempót és túlélést ad
- gyengülése lassú összeomláshoz vezet

### Sensor

Feladata:
- threat előrejelzés
- signal dampening
- deep scan és detection

Stratégiai szerepe:
- előnyt ad, nem brute force-ot
- jobb döntést tesz lehetővé
- void és anomaly játékban fontos

### Core

Feladata:
- activation
- resonance
- avatar shell
- metafizikai / pszichikus réteg

Stratégiai szerepe:
- a Gravitas identitásközpontja
- későbbi mélyebb állapotok alapja

## Resource és world-state rétegek

### Resource-ok

- `power`
- `materials`
- `stability`
- `activation`

### Tartós world-state nyomok

- `reactorScar`
- `shellStrain`
- `supplyStress`
- `voidEcho`
- `entropy`

### Külön rendszerállapotok

- `anomalies`
- `aftershock`
- `crisis`
- `highStability`
- később: `lockdown`, mélyebb trap state-ek

## Threat cycle szerepe

A Gravitas nem maradhat nyugodt javítgatós loop.  
Kell egy visszatérő külső nyomás.

Ez a threat cycle.

Feladata:
- ritmust ad
- előre látható nyomást ad
- build-tesztet ad
- felkészülési döntésre kényszerít
- kárt hagy maga után

Alapelv:
- a threat ne csak countdown legyen
- a threat típusa számítson
- a felkészülés típusa számítson
- az utóhatás számítson

Az első körben már bent lehetnek:
- distortion wave
- void storm
- meteor shower

## Aftershock / recovery elv

A fenyegetés után a játék ne csak visszaugrik “normál állapotba”.

Kell:
- aftershock
- lingering damage
- recovery prioritization

Ettől lesz stratégiai a loop:
- mit javítasz először
- mit hagysz romlani
- mire költöd a maradék energiát
- mi kell a túléléshez
- mi kell a hosszú távú stabilizáláshoz

## Awakening / activation szerepe

Az awakening nem mellékes UI elem.  
Ez a Gravitas egyik legerősebb első érzelmi pillanata.

Elv:
- a user tényleg energiát ad át
- nem passzív cutscene
- az állomás állapota befolyásolja a folyamatot
- az activation akkor jó, ha személyes és veszélyes egyszerre

A first loopban az awakening:
- korai nagy milestone
- identitásképző pillanat
- a teljes Gravitas-világ központi eseménye

## Progression / stars / shop

Az első loopban már legyen látható fejlődés, de ne borítsa a balanszt.

### Stars

A stars szerepe:
- látható jutalom
- haladásérzet
- misszió / milestone kapcsolat
- shop currency

### Milestone

A milestone szerepe:
- ritmust ad
- a játékos tudja, miért kapott jutalmat
- nem csak túlél, hanem előrehalad

### In-game shop

A shop:
- a játékon belül nyíljon
- ne kelljen visszamenni főoldalra
- inkább utility / sidegrade / kozmetikai irány
- ne legyen pay-to-win jellegű

## UI / UX elvek

A Gravitas UI-ja:
- full-screen játékérzet
- minimális scroll
- gyorsan elérhető akciók
- kontextusos panelek
- erős vizuális feedback

Mindig látszódjon:
- station view
- fő resource-ok
- threat állapot
- selected module
- sürgős teendő

Ne legyen mindig nyitva:
- hosszú journal
- teljes history
- minden részlet egyszerre

Mobilon:
- legyen áttekinthető
- kevés scroll
- fő akciók könnyen elérhetők

## Pacing cél

A Gravitas first loop nem lehet unalmas.

Alapszabály:
- rövid időn belül mindig történjen valami
- a játékos mindig lássa a következő fontos célt
- legyen feszültség, döntés és előrehaladás

Ne történjen meg:
- sokáig csak számok változnak
- a player nem érti, mi a fontos
- túl lapos a loop
- 1 órát játszik és nincs jutalomérzet

## Milyen készültségi szint kell a first loop lezárásához?

Az első szakaszt akkor tekintjük elég jónak a következő réteg megnyitásához, ha:

1. A station loop önmagában élvezhető.
2. A threat cycle jól olvasható és fair.
3. A recovery valódi döntést ad.
4. A modulok nem mosódnak össze.
5. Az activation / awakening erős pillanat.
6. A progression és a stars látható értelmet ad.
7. A UI elég tiszta mobilon is.
8. A játék nem csak prototípusérzetű.

## Mi jön csak ezután?

Csak ezután jöjjön:

- galaxy presence
- shared galaxy
- más játékosok láthatósága
- klán / társulás
- sector map
- kolonizálás / támadható zónák

Vagyis:
- először a Gravitas első zárt köre legyen erős
- csak utána nyíljon ki a nagyobb világ

## Fejlesztési sorrend

Ajánlott sorrend a további körökre:

1. first-loop stability
2. threat / aftermath / recovery polish
3. action feedback és prioritás
4. progression / reward clarity
5. awakening polish
6. UI tisztítás és mobil olvashatóság
7. csak utána: outer world planning -> galaxy opening

## Rövid döntési szabály fejlesztés közben

Ha egy új ötletnél nem világos, hogy most kell-e:

Kérdés:
- erősíti a pre-galaxy first loopot?

Ha igen:
- most jó kör lehet

Ha nem:
- későbbi rétegbe kell tolni

Ez legyen a Gravitas első szakasz fő szűrője.
