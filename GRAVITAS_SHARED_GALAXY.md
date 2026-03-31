# Gravitas Shared Galaxy

## Cél

A Gravitas multiplayer rétege ne klasszikus meghívásos meccs legyen, hanem egy élő, közös galaxisrendszer.

Az alapgondolat:

- a játékos először a saját belső Gravitas loopját játssza
- amikor elér egy bizonyos fejlődési szintet vagy fázist
- kikerül egy közös galaxisrétegbe
- ott más játékosok is láthatják
- ebből később klánok, szektorharcok, kolonizálás és közös meta nő ki

## Miért jobb ez, mint az invite multiplayer

- természetesebben illik a Gravitas világához
- nem kell külön "matchmaking játékot" ráerőltetni
- a singleplayer és a multiplayer nem két külön termékérzet lesz
- a közös tér később sokkal jobban bővíthető
- könnyebb belőle hosszú távú retention és közösségi meta

## Belépési logika

A játékos nem az első perctől van a közös galaxisban.

Előbb végigmegy a belső induló rendszeren:

- sérült állomás
- stabilizálás
- modulkezelés
- threat cycle
- avatar activation / awakening

Amikor elér egy meghatározott küszöböt, megnyílik a galaxisréteg.

Ez a küszöb lehet például:

- első sikeres awakening
- bizonyos station tier
- első stabil threat cycle túlélés
- első expedition readiness

## A shared galaxy szerepe

A galaxisréteg legyen a Gravitas második nagy játékszintje.

Itt a játékos:

- megjelenik a térképen
- lát más játékosokat
- lát szektorokat és zónákat
- láthat közeli kolóniákat, állomásokat, aktivitást
- később dönthet:
  - csatlakozik valamihez
  - saját útvonalat épít
  - kolonizál
  - védekezik
  - terjeszkedik

## A galaxis szerkezete

Ne egyetlen túlzsúfolt világ legyen, hanem több galaxy instance vagy shard.

Például:

- több galaxis
- galaxison belül több szektor
- szektoron belül zónák / bolygók / roncsmezők / anomália-terek

Ez azért jó, mert:

- skálázhatóbb
- jobban kezelhető presence szinten
- könnyebb közösségeket és klánokat szervezni
- lehet különböző stílusú vagy nehézségű galaxisokat később nyitni

## Mit lát a játékos a galaxisban

Az MVP-ben még nem kell teljes MMO-világ.

Első körben elég:

- a saját pozíciója
- néhány közeli más játékos-jelenlét
- szektorok állapota
- mely zónák aktívak / veszélyesek / kolonizálhatók
- ritka események vagy közös fenyegetések

Később bővíthető:

- tényleges játékosnevek / avatarjelek
- klánszínek
- befolyási zónák
- aktív konfliktusok
- kereskedelmi útvonalak

## Játékos-jelenlét

A presence ne teljes realtime avatárszintű szinkron legyen induláskor.

Inkább:

- állomás vagy hajó ikon
- státusz
- szektorpozíció
- aktivitásjelző
- frakció/klán jelölés

Tehát először:

- "látható vagy a galaxisban"
- nem pedig azonnali teljes kooperatív sandbox

Ez csökkenti a technikai kockázatot.

## Klánok

A klánok csak a galaxisrétegben nyíljanak meg, nem az első órában.

Lehetséges szerepük:

- közös bónuszok
- közös szektorvédelem
- közös kolonizálás
- közös threat response
- közös kutatás / fejlesztés
- presztízs és láthatóság

A klán legyen inkább stratégiai és társas meta, ne csak chatcsoport.

## Multiplayer modell

Ez nem klasszikus "match-based multiplayer".

Ez inkább:

- shared presence
- shared galaxy state
- később co-op és indirect competition

Tehát a multiplayer réteg lépései:

1. visible presence
2. shared sector state
3. clan system
4. shared objectives
5. később real-time co-op vagy territory systems

## Kapcsolat a belső Gravitas loopkal

A saját állomás továbbra is a játékos fő otthona marad.

A galaxis nem váltja le a belső loopot, hanem kibővíti:

- bent menedzseled az állomást
- kint látod a világot
- kint indítasz expedíciót, kolonizálást, kapcsolatot
- a két réteg egymást táplálja

Ez fontos, mert így a Gravitas magja megmarad.

## Jutalmak és kockázatok

A galaxisréteg adhat:

- új missziókat
- új csillagjutalmakat
- ritka anyagokat
- kolóniakapcsolt bónuszokat
- klánszintű előnyöket

De hozhat:

- új threat-et
- nagyobb veszteségeket
- területi nyomást
- közös eseményeket

## MVP javaslat

Az első shared galaxy MVP még legyen könnyű:

- belépési küszöb a Gravitas első nagy fázisa után
- egyszerű galaxy screen
- több shard vagy galaxy instance
- saját pozíció
- néhány más jelenlétjelző
- szektorok státusza
- egy-két elérhető küldetés vagy expedíciós pont

Még ne legyen benne:

- teljes klánrendszer
- territory war
- teljes realtime co-op
- teljes gazdasági réteg

## Hosszú távú irány

Később a galaxisréteg lehet a Gravitas hosszú távú multiplayer magja:

- shared world
- klánok
- közös threat védelem
- kolonizálás
- látható terjeszkedés
- galaxy eventek
- ritka, közös világállapot-váltások

## Technikai következmény

Ha ez az irány marad, akkor a multiplayer architektúrát így kell majd tervezni:

- player presence service
- galaxy shard state
- sector visibility
- clan membership
- delayed / partial realtime sync
- később shared event propagation

Ez már nem lobby-logika, hanem shared-world logika.

## Lényeg

A Gravitas multiplayer rétege ne meghívásos minijáték legyen, hanem egy közös galaxisvilág.

Előbb:

- saját állomás
- saját awakening
- saját túlélés

Utána:

- shared galaxy
- látható jelenlét
- klánok
- közös meta

Ez sokkal jobban illik a Gravitas vízióhoz, és hosszú távon sokkal erősebb platformszintű rendszert ad.
