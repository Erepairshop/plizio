# Román Teszt — Hiányosság Felmérés (vs Deutsch Teszt)

## Grade lefedettség

| Grade | Deutsch | Román | Státusz |
|-------|---------|-------|---------|
| Grade 1 | 12 téma, 24 subtopic | 7 téma, 28 subtopic | ✅ Van |
| Grade 2 | 5 téma, 37 subtopic | 7 téma, 21 subtopic | ✅ Van |
| Grade 3 | 11 téma, 33 subtopic | 7 téma, 16 subtopic | ✅ Van |
| Grade 4 | 14 téma, 47 subtopic | — | ❌ HIÁNYZIK |
| Grade 5 | 19 téma, 27 subtopic | — | ❌ HIÁNYZIK |
| Grade 6 | 14 téma, 51 subtopic | — | ❌ HIÁNYZIK |
| Grade 7 | 16 téma, 51 subtopic | — | ❌ HIÁNYZIK |
| Grade 8 | 18 téma, 19 subtopic | — | ❌ HIÁNYZIK |
| **Összesen** | **109 téma, 289 subtopic** | **21 téma, 65 subtopic** | 3/8 grade |

## Vizuális kérdéstípusok

| Típus | Deutsch | Román |
|---|---|---|
| fehler-finden (hiba keresés) | K2-K5 | ✅ C1 only |
| satz-ordnen (mondatrendezés) | K2, K5 | ✅ C1 only |
| luecken-text (szövegkitöltés) | K8 | ✅ C1 only |
| wortfamilien-baum (szócsaládok) | K2-K5 | ❌ HIÁNYZIK |
| wortarten-sortieren (szófaj osztályozás) | K3-K5 | ❌ HIÁNYZIK |
| zeitformen-zuordnen (igeidő felismerés) | K3-K5 | ❌ HIÁNYZIK |
| satzglied-markieren (mondatrész jelölés) | K3-K5 | ❌ HIÁNYZIK |
| bild-beschriften (kép feliratozás) | K2 | ❌ HIÁNYZIK |
| geschichte-sortieren (történet rendezés) | K2 | ❌ HIÁNYZIK |
| kasus-markieren (eset jelölés) | K4-K5 | ❌ HIÁNYZIK |
| adjektiv-endungen (melléknév végződések) | K4-K5 | ❌ HIÁNYZIK |
| **Összesen** | **14 típus** | **3 típus (C1 only)** |

## Olvasási teszt (Lesetest)

| Grade | Deutsch | Román |
|-------|---------|-------|
| Grade 1 | 3 szöveg | 20 szöveg ✅ |
| Grade 2 | 16 szöveg | ❌ 0 |
| Grade 3 | 13 szöveg | ❌ 0 |
| Grade 4-8 | 3-3 szöveg (24 total) | ❌ 0 |
| **Összesen** | **57 szöveg** | **20 (C1 only)** |

## Kérdéstípusok

| Típus | Deutsch | Román |
|-------|---------|-------|
| MCQ | ✅ Minden grade | ✅ Minden grade |
| Typing (szabad szöveg) | ✅ 628+ kérdés K1-ben | ❌ 0 typing kérdés |
| Vizuális/interaktív | ✅ 14 típus K1-K8 | ⚠️ 3 típus C1 only |

## Hiányzó funkciók

| Funkció | Deutsch | Román |
|---------|---------|-------|
| Válasz validáció (typo tolerancia) | ✅ deutschValidation.ts | ❌ Nincs |
| PDF export | ✅ generateDeutschTestPdf | ❌ Nincs |
| SEO landing oldalak | ✅ /deutsch-test/klasse-1..8/ | ❌ Nincs |
| Ország variánsok | 3 (DE, AT, CH) | 1 (RO) — OK |

## Fájlok

| Fájl | Tartalom |
|------|---------|
| `lib/romanianCurriculum.ts` | Teljes curriculum C1-C3 |
| `lib/romanianGenerators.ts` | C1 generátorok |
| `lib/romanianGeneratorsC2.ts` | C2 generátorok |
| `lib/romanianGeneratorsC3.ts` | C3 generátorok |
| `lib/romanianVisualGenerators.ts` | 3 vizuális típus, C1 only |
| `lib/romanianLesetest.ts` | 20 C1 szöveg |

## Prioritásos implementációs terv

### P1 — Kritikus (nagy hiányok)
1. **C4-C8 curriculum + generátorok** — 5 grade teljesen hiányzik
2. **Typing kérdések** — 0 db, hozzá kell adni C1-C3-hoz is
3. **Lesetest C2-C8** — olvasási szövegek hiányoznak

### P2 — Fontos (Deutsch-hoz való felzárkózás)
4. **Vizuális kérdések C2-C3-ra** — jelenleg csak C1-ben vannak
5. **Új vizuális típusok** — szócsaládok, szófaj, igeidő, mondatrész (román specifikus adatokkal)
6. **PDF export**
7. **Válasz validáció** (romanianValidation.ts)

### P3 — Kiegészítő
8. **SEO landing oldalak** (/teste-romana/clasa-1..8/)
9. **Olvasási szövegek C2-C3-ra**

## Token becslés

| Feladat | Becsült token |
|---------|--------------|
| C4 curriculum + generátorok | ~300K |
| C5 curriculum + generátorok | ~300K |
| C6 curriculum + generátorok | ~300K |
| C7 curriculum + generátorok | ~300K |
| C8 curriculum + generátorok | ~300K |
| Typing kérdések C1-C3 | ~150K |
| Vizuális típusok bővítés | ~200K |
| Lesetest C2-C8 | ~200K |
| PDF export | ~100K |
| SEO oldalak | ~100K |
| **Összesen** | **~2.2M token** (több hét munka) |
