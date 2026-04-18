# Új Visual Lab Játékok — Design Dokumentum

4 új, subject-specifikus játék terve (bio, kemia, geschichte, geographie). Csak DESIGN — nincs implementáció.

---

## 1. BIO — OrganMatch

**Leírás:** Egy űrhajós testet látsz siluettben; a beérkező szerv-ikonokat a helyes testtájra kell húzni (szív -> mellkas, máj -> has, agy -> fej stb.).

**Core mechanika:** Drag & drop. Körönként 1 szerv érkezik felülről lebegve; a játékos ráhúzza a megfelelő testzónára (hotspot). Helyes -> zóna felvillan, szerv beúszik; rossz -> visszapattan, life -1.

**Adatstruktúra:**
```ts
{
  bodyType: 'human' | 'plant' | 'cell',
  zones: [{ id: string, label: string, svgPath: string }],
  organs: [{ id: string, name: string, correctZoneId: string, icon: string }],
  timeLimit: number
}
```

**UI:** (1) Nagy test-silhouette középen glow-olt zónákkal, (2) Felülről beúszó szerv-ikon címkével, (3) Timer sáv fent, (4) Life (3 szív) és score HUD.

**Scoring:** +10 helyes, -1 élet rossz drop-ra, +5 bonus ha 2 mp alatt. 3 élet elfogyása = game over.

**Grade skálázás:**
- **K5:** 4 zóna (fej, mellkas, has, végtag), 6 szerv, címkék láthatók a zónákon.
- **K6:** 6 zóna, 10 szerv, címke csak hover-re.
- **K7:** Növényi és állati test váltakozik, 12 elem.
- **K8:** Sejtszintre is lemegy (mitokondrium, sejtmag), funkció alapján is kérdezhet.

---

## 2. KEMIA — MoleculeForge

**Leírás:** A képernyőn egy célmolekula képlete jelenik meg (pl. H₂O); a játékosnak a lebegő atomokból kell összeállítania a helyes kötésekkel.

**Core mechanika:** Kattintással atomokat rakunk a munkaterületre, majd kötéseket húzunk közöttük (vonal-drag). Submit gomb ellenőrzi az összetételt és a vegyérték helyességét.

**Adatstruktúra:**
```ts
{
  targetFormula: string,     // "H2O"
  targetName: string,        // "Wasser"
  availableAtoms: [{ symbol: string, valence: number, count: number }],
  correctBonds: [{ from: string, to: string, order: 1|2|3 }],
  hint?: string
}
```

**UI:** (1) Fent a célképlet nagy betűvel, (2) Középen üres munkaterület, (3) Alul atom-tálca (H, O, C, N…) count-badge-el, (4) „Bind" toggle és „Submit" gomb.

**Scoring:** +20 tökéletes molekula, +10 csak atomok jók, -5 rossz submit. Idő-bonus: +1/sec maradék.

**Grade skálázás:**
- **K5:** 2-atomos molekulák (H₂, O₂, HCl), név megadva.
- **K6:** 3-atomos, egyszeres kötések (H₂O, CO₂).
- **K7:** Szerves alapok (CH₄, C₂H₆), többszörös kötés.
- **K8:** Ionos + kovalens megkülönböztetés, reakcióegyenlet kiegészítés.

---

## 3. GESCHICHTE — EraScroll

**Leírás:** Kaotikus sorrendben megjelennek történelmi események (képkártyák); a játékosnak időtengelyre kell raknia a helyes évszámmal/korszakkal.

**Core mechanika:** Drag & drop egy horizontális timeline-ra. Kártyát a timeline slot-jára húzod; ha a helyes sorrendben van, beugrik, ha nem, villog és visszatér.

**Adatstruktúra:**
```ts
{
  events: [{ id: string, title: string, year: number, image: string, era: string }],
  timelineMode: 'order' | 'year' | 'era',
  slotCount: number
}
```

**UI:** (1) Alul hosszú timeline évszám-markerekkel, (2) Fent event-kártya kézbe fogható stack, (3) Korszak-legenda oldalt (antik/közép/újkor), (4) Progress „X/Y helyes".

**Scoring:** +15 helyes slot, +30 tökéletes round bonus, -3 rossz kísérlet. Streak multiplier x1.5 3+ egymás utáni helyes után.

**Grade skálázás:**
- **K5:** 4 kártya, csak relatív sorrend (régebbi -> újabb), képekkel.
- **K6:** 6 kártya, korszak-besorolás (antik/közép/újkor).
- **K7:** 8 kártya, pontos évszázad megadása.
- **K8:** 10 kártya, konkrét évszám ±10 év tolerancia, okozati láncolás is.

---

## 4. GEOGRAPHIE — CapitalCompass

**Leírás:** Egy forgó űr-iránytű középen; ország neve villan fel, a játékosnak a 4 lebegő főváros-bolygó közül kell kiválasztania a helyeset, mielőtt az iránytű kifut az időből.

**Core mechanika:** Tap/click választás. 4 opció kering orbit-pályán; ország-hint a közepén pulzál, a távolság a helyes válaszhoz az orbit-méret (nehézség).

**Adatstruktúra:**
```ts
{
  question: { country: string, flagSvg: string, continent: string },
  options: [{ capital: string, isCorrect: boolean }],
  timeLimit: number,
  mode: 'capital' | 'country-from-flag' | 'river-to-country'
}
```

**UI:** (1) Közepén ország-zászló + név, (2) Körülötte 4 orbit-bolygó főváros-névvel, (3) Iránytű-tű ami az időt mutatja, (4) Score + streak HUD.

**Scoring:** +10 helyes, +5 gyorsasági bonus (<3 sec), -1 élet hibára. 5 streak -> extra élet.

**Grade skálázás:**
- **K5:** EU + szomszéd országok fővárosai, zászlóval segítve.
- **K6:** Egész Európa, zászló nélkül.
- **K7:** Világ kontinensek főbb országai + folyók.
- **K8:** Mix-mód: fővárosok, folyók, hegységek, éghajlati zónák, ±időzóna.

---

## Összegzés

Mindegyik játék a meglévő Visual Lab motor-mintákat követi (round-based, grade-scaling, score+lives), és a subject-specifikus adatpoolok könnyen bővíthetők a meglévő `lib/visualLab/pools/` struktúrában.
