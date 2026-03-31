# Gravitas Agent Master Prompt

Ezt a promptot használd a Gravitas projekthez, amikor kisebb modellen vagy agenten akarsz hosszabb ideig dolgozni. A cél nem az, hogy minden körben új irányba vigye a játékot, hanem hogy a már kijelölt Gravitas víziót következetesen, biztonságosan, sok kisebb fejlesztési körön át építse tovább.

## Projektkontekstus

A Gravitas a Plizio kiemelt, hosszú távon épülő flagship játéka. Nem klasszikus minijáték, hanem egy mélyebb, rendszerszintű, stratégiai túlélőjáték, amely később shared galaxy / clan / sector map irányba nőhet tovább.

Jelenlegi fókusz:
- a **pre-galaxy Gravitas first loop**
- vagyis az a teljes első nagy játékkör, amíg a játékos még nem kerül ki a galaxisrétegbe

Ez a jelenlegi loop nagyjából:
- sérült állomás
- resource loop
- modulkezelés
- események
- threat cycle
- aftershock / recovery
- awakening / activation
- progression / stars / in-game shop foundation
- marks / anomalies / world-state nyomok

Most **nem** a galaxy map, multiplayer shared world, clan, sector ownership vagy teljes metagame az elsődleges cél, hanem a Gravitas első köre legyen erős, tiszta, élvezhető, jól visszajelző és bővíthető.

## Alapelvek

Mindig ezek szerint dolgozz:

1. A Gravitas jelenlegi alapját **mélyíteni** kell, nem szétírni.
2. Ne írj teljes új frameworköt, ha egy meglévő réteget lehet tisztítani vagy bővíteni.
3. A játék ne legyen lapos: mindig legyen döntés, következmény, visszajelzés.
4. A UI ne legyen hosszú scrollos dashboard. A Gravitas full-screen, game-like irányba megy.
5. Minden fontos játékosdöntésnek legyen látható következménye:
   - alert
   - journal
   - scene reaction
   - module emphasis
   - state change
6. A rendszerlogika ne csússzon vissza a page/UI rétegbe.
7. A Gravitasnál a design/UX irány érzékeny. Ne redesignold önállóan a teljes játékot.
8. Ha valami már bent van a mainben, ne vezesd be újra.
9. Mindig a jelenlegi mainhez igazodj, ne régi lokális állapothoz.
10. Push/commit nincs. Csak lokális, reviewzható állapotig dolgozz.

## Mit kell kerülni

Ne csináld ezeket:

- ne pusholj
- ne commitolj
- ne nyúlj a Gravitas körön kívüli játékokhoz
- ne kezdj el galaxy mapet implementálni
- ne építs teljes multiplayert vagy clan rendszert
- ne bontsd vissza a már bent lévő:
  - progression
  - stars
  - in-game shop foundation
  - threat cycle
  - aftershock
  - crisis/highStability pacing
- ne hozz vissza gyenge típustrükköt:
  - `any`
  - workaround helper
  - régi state-újra-bevezetés
- ne redesignold teljesen a Gravitas UI-t
- ne írj új minijátékot a Gravitas helyett

## Jelenlegi architektúra fókusz

Ezekre a rétegekre építs:

- `app/gravitas/page.tsx`
- `components/gravitas/*`
- `lib/gravitas/sim/*`
- `lib/gravitas/phaser/*`

Általános szabály:
- `sim` = világlogika
- `page` = orchestration/UI composition
- `components` = felületi réteg
- `phaser` = vizuális scene/input feedback

## Milyen típusú munka jó most

Jó körök:
- threat aftermath mélyítés
- recovery prioritization
- action feedback erősítése
- reward visibility javítása
- module identity finomítása
- star/progression/shop foundation csiszolása
- alert/journal/state feedback tisztítása
- first-loop pacing finomhangolása
- minor HUD/scene/gameplay cohesion javítás

Nem jó körök most:
- galaxy map
- sector colonization
- true shared multiplayer
- clan implementation
- monetization rendszer
- komplett UI redesign

## Minőségi cél a Gravitas first loophoz

A játékos érezze, hogy:

- mindig történik valami rövid időn belül
- a threat közeledik és számít
- a module choice számít
- a rossz döntések nyomot hagynak
- a recovery valódi döntés
- a jutalom és előrelépés látható
- az activation/awakening fontos pillanat
- a rendszer él és reagál

Nem lehet olyan érzése, hogy:
- 1 órát itt volt és semmi nem történt
- csak számok változtak, de nem tudja miért
- túl sok a scroll és a zaj
- minden modul ugyanolyan
- a threat csak dísz

## Agent munkamód

Minden kör előtt:

1. Nézd meg a jelenlegi mainhez közeli állapotot.
2. Azonosítsd, hogy mi már bent van.
3. Csak arra építs rá.

Minden kör után:

1. Röviden sorold fel a módosított fájlokat.
2. Mondd el, pontosan mi lett jobb.
3. Írd le, maradt-e push előtti kockázat.
4. Ne állítsd, hogy “teljesen kész”, ha még láthatóan csak egy iteráció.

## Ajánlott nagy feladattípusok

Ha nincs külön feladat megadva, ezekből válassz egyet:

1. Recovery / aftershock mélyítés
2. Threat-specific consequence layer
3. Action feedback / module emphasis
4. Reward visibility / progression polish
5. First-loop pacing finomhangolás
6. Minor code cleanup a Gravitas rétegek között

## Standard nagy prompt

Használd ezt, ha általános Gravitas fejlesztői kör kell:

```text
Folytasd a Gravitas projektet a /home/borota25/Desktop/plizio repóban. A jelenlegi cél a pre-galaxy Gravitas first loop tökéletesítése. A core loop már létezik: resources, modulok, activation/awakening, events, anomalies, marks, threat cycle, aftershock, progression, stars, in-game shop foundation, crisis/highStability pacing. Most ezt kell tovább mélyíteni, nem új nagy rendszert kezdeni.

Fő célok ebben a körben:

1. A first loop stratégiai mélyítése
- Tedd erősebbé a döntési súlyt a jelenlegi állomás-loopban.
- A játékos jobban érezze, hogy mit javítson, mire költsön, mit kockáztat.

2. Recovery / aftermath / prioritization
- Threat és aftershock után legyen még világosabb, mit érdemes előbb rendbe tenni.
- Ne új rendszert írj, hanem a meglévőt mélyítsd.

3. Action feedback
- Minden fontos döntéshez erősítsd a visszajelzést:
  - alert
  - journal
  - scene
  - state
  - emphasis

4. Reward visibility
- A játékos jobban lássa, mikor és miért haladt előre.
- A stars / milestone / shop irány legyen olvashatóbb.

5. Module identity
- A reactor / logistics / core / sensor legyen még karakteresebb.
- Nem sok új gomb kell, hanem jobb különbség.

6. Kódminőség
- Ha van könnyen rendezhető duplikáció vagy széttartás a sim/page/scene között, tisztítsd ki.
- Ne írj új frameworköt.

Szabályok:
- Ne pusholj, ne commitolj.
- Ne nyúlj a Gravitas körön kívüli játékokhoz.
- Ne kezdj galaxy/shared-world/clan implementációt.
- Ne redesignold teljesen a Gravitas UI-t.
- Ne bontsd vissza a meglévő progression/shop/threat foundationt.

A végén írd meg röviden:
- mely fájlokat módosítottad
- miben lett jobb a loop
- maradt-e push előtti aggály
```

## Standard javító prompt

Használd ezt, ha egy előző Gravitas kör integrációs hibás volt:

```text
Javítsd és igazítsd a Gravitas legutóbbi körét a JELENLEGI main állapothoz a /home/borota25/Desktop/plizio repóban. A cél most nem új feature, hanem tiszta integráció.

Fő célok:
1. Csak a valódi plusz értéket tartsd meg a mostani körből.
2. Ne vezesd be újra azt, ami már bent van a mainben.
3. Ne hozz vissza régi állapotot vagy workaround típustrükköt.
4. Szedd ki a diff-zajt, whitespace-et, félkész maradékot.
5. Maradjon pusholható Gravitas kör.

Szabályok:
- Ne pusholj, ne commitolj.
- Ne nyúlj a Gravitas körön kívüli játékokhoz.
- Ez integrációs kör, nem redesign.

A végén írd meg:
- mely fájlokat módosítottad
- mit tartottál meg
- mit hagytál el, mert már bent volt
- maradt-e push előtti aggály
```

## Review checklist

Mielőtt azt mondod, hogy kész:

- a patch a jelenlegi mainre épül?
- nem vezet vissza régebbi szerkezetet?
- nem törli a progression/shop foundationt?
- nem duplikál state mezőket?
- nincs `any` workaround?
- nincs nyers, félkész UI string?
- nincs trailing whitespace / diff-zaj?
- a játék jobb lett tőle, nem csak nagyobb?

## Fontos

Ha bizonytalan vagy:
- inkább kisebb, tisztább javítást csinálj
- ne próbálj egyszerre túl sok Gravitas réteget megmozgatni
- a cél a first loop tökéletesítése

Ez a promptfájl hosszabb távra készült. Több körön át használd ugyanebben a szellemben.
