# Új tantárgyak — Sachkunde, Biologie, Geographie

## Közös: LanguageTestEngine motor újrafelhasználás

Mindhárom tantárgy a meglévő `LanguageTestEngine`-re épül, mint az English/Romanian teszt.
Szükséges fájlok tantárgyanként:
- `lib/<subject>Curriculum.ts` — témák, subtopicok, grade-ek
- `lib/<subject>Generators.ts` — kérdésgenerátorok (MCQ + typing)
- `app/<subject>test/page.tsx` — config + LanguageTestEngine hívás
- `app/<subject>test/layout.tsx` — SEO

---

## 1. Sachkunde (Környezetismeret, Klasse 1-4)

**Route:** `/sachkundetest`
**SEO:** `/sachkunde-test/klasse-1/` ... `/klasse-4/`
**Országok:** DE (Note 1-6), AT (Note 1-5), CH (Note 6-1)

### Témakörök grade-enként:

**Klasse 1:**
- Mein Körper (testrészek, érzékszervek)
- Tiere (háziállatok, vadállatok, állathangok)
- Pflanzen (évszakok, fák, virágok)
- Wetter & Jahreszeiten (időjárás, hónapok)
- Familie & Zusammenleben (család, szabályok)
- Verkehr & Sicherheit (közlekedés, biztonság)

**Klasse 2:**
- Mein Körper (táplálkozás, fogápolás, egészség)
- Tiere & Lebensräume (élőhelyek, táplálékláncok)
- Pflanzen (részek, növekedés, mag→virág)
- Wasser (vízkörforgás, halmazállapotok)
- Zeit & Kalender (óra, naptár, ünnepek)
- Berufe (szakmák, mit csinálnak)

**Klasse 3:**
- Mein Körper (csontváz, izmok, szervek)
- Tiere (csoportosítás: emlősök, madarak, halak, rovarok)
- Feuer & Brandschutz (tűz, tűzoltás)
- Magnetismus & Strom (mágnes, egyszerű áramkör)
- Deutschland (tartományok, fővárosok, térkép)
- Medien & Werbung (média, reklám, internet biztonság)

**Klasse 4:**
- Mein Körper (szaporodás, pubertás — korosztálynak megfelelő)
- Ökosysteme (erdő, rét, víz — részletesebb)
- Strom & Energie (áramkör, vezető/szigetelő, megújuló energia)
- Karten & Kompass (térkép olvasás, égtájak)
- Europa (országok, zászlók, kontinensek)
- Radfahrprüfung (kerékpáros vizsga — közlekedési szabályok)

### Vizuális kérdéstípusok (újrafelhasználható):
- Képes felismerés (állatok, növények, testrészek) → `bild-beschriften` adaptáció
- Sorrendbe rakás (vízkörforgás, növekedés) → `GravitySort` / `geschichte-sortieren`
- Kategória rendezés (emlős/madár/hal) → `wortarten-sortieren` adaptáció

### Generátor minta:
```ts
// Példa: Tiere Klasse 2
const TIERE_DATA = [
  { tier: "Hund", lebensraum: "Haustier", nahrung: "Fleisch, Trockenfutter", beine: 4 },
  { tier: "Adler", lebensraum: "Gebirge", nahrung: "Fische, Mäuse", beine: 2 },
  ...
];
// MCQ: "Wo lebt der Adler?" → Gebirge / Meer / Wald / Wüste
// MCQ: "Wie viele Beine hat ein Hund?" → 4 / 2 / 6 / 8
// Typing: "Welches Tier lebt als Haustier und frisst Trockenfutter?" → Hund
```

### Token becslés: ~300-400K (1 nap)

---

## 2. Biologie (Klasse 5-8)

**Route:** `/biologietest`
**SEO:** `/biologie-test/klasse-5/` ... `/klasse-8/`
**Megjegyzés:** Sachkunde természetes folytatása

### Témakörök grade-enként:

**Klasse 5:**
- Wirbeltiere (gerinces állatok: halak, kétéltűek, hüllők, madarak, emlősök)
- Pflanzen (fotoszintézis alapok, virág részei, beporzás)
- Mein Körper (csontváz, izomzat, mozgás)
- Sinnesorgane (érzékszervek részletesen: szem, fül)
- Ernährung & Verdauung (táplálkozás, emésztés)

**Klasse 6:**
- Wirbellose Tiere (gerinctelenek: rovarok, pókok, puhatestűek)
- Ökosystem Wald (erdei ökoszisztéma, táplálékháló)
- Ökosystem Gewässer (vízi ökoszisztéma)
- Blut & Kreislauf (vérkeringés, szív)
- Atmung (légzés, tüdő)
- Pubertät & Sexualkunde (korosztálynak megfelelő)

**Klasse 7:**
- Zellen & Mikroskop (sejtek, mikroszkóp használat)
- Fotosynthese & Zellatmung (részletes)
- Ökologie (populáció, ökológiai niche, verseny)
- Immunsystem (immunrendszer, védőoltás)
- Nervensystem (idegrendszer, reflex)
- Evolution Grundlagen (evolúció alapok)

**Klasse 8:**
- Genetik (genetika: DNS, gének, öröklődés, Mendel)
- Hormonsystem (hormonrendszer)
- Sinnesphysiologie (érzékelés fiziológiája)
- Ökologie & Umweltschutz (környezetvédelem, klímaváltozás)
- Evolution (természetes szelekció, fajkeletkezés)
- Biotechnologie (biotechnológia alapok)

### Token becslés: ~400-500K (1 nap)

---

## 3. Geographie (Klasse 5-8)

**Route:** `/geographietest`
**SEO:** `/geographie-test/klasse-5/` ... `/klasse-8/`

### Témakörök grade-enként:

**Klasse 5:**
- Deutschland (16 tartomány, fővárosok, folyók, hegységek)
- Karten & Orientierung (térkép típusok, legenda, égtájak, mérték)
- Europa Überblick (országok, fővárosok, zászlók)
- Klima & Wetter (éghajlat vs időjárás, éghajlati övek)
- Stadt & Land (város vs vidék, települések)

**Klasse 6:**
- Europa Vertiefung (EU, gazdaság, kultúra)
- Afrika (országok, éghajlat, természetföldrajz)
- Asien (országok, kultúra, gazdaság)
- Vulkane & Erdbeben (vulkánok, földrengések, lemeztektonika)
- Gewässer (folyók, tavak, óceánok)

**Klasse 7:**
- Nord- & Südamerika (országok, természetföldrajz)
- Klimazonen (trópusi, szubtrópusi, mérsékelt, sarkvidéki)
- Tropischer Regenwald (esőerdő, biodiverzitás)
- Wüsten & Trockengebiete (sivatagok)
- Weltbevölkerung (népesedés, demográfia)
- Globalisierung Grundlagen (globalizáció alapok)

**Klasse 8:**
- Australien & Ozeanien
- Weltmeere & Meeresströmungen (óceánok, áramlatok)
- Klimawandel (klímaváltozás, üvegházhatás)
- Ressourcen & Nachhaltigkeit (erőforrások, fenntarthatóság)
- Wirtschaftsgeographie (gazdaságföldrajz, fejlett vs fejlődő)
- Migration & Urbanisierung (migráció, városiasodás)

### Vizuális kérdéstípusok:
- Térkép alapú kérdések (hol van X ország?) → új vizuális komponens
- Zászló felismerés → képes MCQ
- Sorrendbe rakás (folyók hossza, hegyek magassága) → GravitySort

### Token becslés: ~400-500K (1 nap)

---

## Összefoglaló

| Tantárgy | Grade-ek | Témák | Becsült token | Idő |
|----------|----------|-------|--------------|-----|
| Sachkunde | K1-K4 | ~24 | ~300-400K | 1 nap |
| Biologie | K5-K8 | ~24 | ~400-500K | 1 nap |
| Geographie | K5-K8 | ~24 | ~400-500K | 1 nap |
| **Összesen** | K1-K8 | ~72 | ~1.1-1.4M | 3 nap |

## Implementációs sorrend

1. **Sachkunde** először — K1-K4, nagy piac, egyszerű tartalom
2. **Biologie** — Sachkunde természetes folytatása K5-K8
3. **Geographie** — vizuálisan legérdekesebb, térkép komponens bónusz

## Fájl struktúra (tantárgyanként):
```
lib/<subject>Curriculum.ts        ← témák, subtopicok G1-G4/G5-G8
lib/<subject>Generators.ts        ← kérdésgenerátorok
lib/<subject>VisualGenerators.ts  ← vizuális kérdések (opcionális)
app/<subject>test/page.tsx        ← LanguageTestEngine config
app/<subject>test/layout.tsx      ← SEO
app/<subject>-test/page.tsx       ← SEO hub oldal
app/<subject>-test/klasse-N/      ← SEO landing oldalak
```
