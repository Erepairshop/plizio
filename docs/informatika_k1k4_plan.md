# Informatika K1-K4 Buildplan

**Cél:** K1-K4 informatika teljes coverage (test + astro). Age-appropriate digital literacy curriculum.

## Scope

- **25 topic / grade**
- **25 MCQ + 10 typing / topic** (~35 tasks)
- **4 nyelv** (de, en, hu, ro) — JSON content
- **4 grade** (K1-K4)
- **Test-route**: informatikatest K1-K4 támogatás
- **Astro-route**: astrinformatika K1-K4 explorer + interakciós játékok

**Fájlok:**
- 4 grade × 4 lang × 25 topic = **400 JSON fájl** (`data/informatika/class-{N}/{lang}/{i}.json`)
- 4 curriculum-TS (`lib/informatikaCurriculum{1-4}.ts`)
- 4 astro-TS (`lib/astroInformatika{1-4}.ts`)
- Route support (`app/informatikatest/page.tsx`, `app/astrinformatika/page.tsx`)

## 25 topic / grade — tentative list (age-appropriate)

### K1 (~6-7 év — First contact)
1. Mi a számítógép?
2. A képernyő
3. Az egér (left click)
4. A billentyűzet
5. Bekapcsolás / kikapcsolás
6. Első játék indítása
7. Kilépés
8. Hangerő
9. Zene lejátszás
10. Videó nézés
11. Kép megnyitása
12. Rajzolás (egyszerű)
13. Színek
14. Tanulói helyzet (testtartás)
15. Képernyőidő (max 30 perc)
16. Szemvédelem
17. Jelszó titok
18. Idegenekkel nem beszélünk
19. Segítségkérés (szülő)
20. Barátságos kép
21. A ceruza és a számítógép
22. Bekapcsolás — kikapcsolás
23. Computer tisztán tartása
24. Kedvenc karakter
25. Kreatív játék

### K2 (~7-8 év — Basic interaction)
1. Ikonok
2. Asztal (desktop)
3. Mappa/fájl koncepció
4. Duplakattintás
5. Drag & drop
6. Jobb klikk
7. Billentyű: nagy/kis betű
8. Szám billentyűk
9. Backspace / Delete
10. Első szövegszerkesztő
11. Szöveg mentése
12. Megnyitás
13. Rajzprogram (Paint)
14. Eszközök (ecset, radír)
15. Rajz mentése
16. Színek a rajzon
17. Print alap
18. Kopja-paste ötlete
19. Fájl-kukába
20. Keresés (ctrl+F)
21. Első játékos tanulás
22. Hangprogram
23. Képek az internetről
24. Forma/méret (rajzon)
25. Csoportosítás

### K3 (~8-9 év — Internet + Office basics)
1. Internet — mi ez?
2. Böngésző
3. URL (cím)
4. Első keresés
5. Link/hivatkozás
6. Google alapok
7. YouTube gyerek módban
8. Email (ötlet)
9. Chat alapok
10. Word — írás
11. Betűméret / stílus
12. Cím / bekezdés
13. Lista
14. Táblázat alap
15. Excel — cellák
16. Egyszerű számítás
17. PowerPoint — dia
18. Kép beillesztés
19. Print preview
20. PDF ötlete
21. Fájltípus (.docx .jpg)
22. Zip/tömörítés
23. Screenshot
24. Bookmark
25. Helyesírás-ellenőrzés

### K4 (~9-10 év — Creativity + logic)
1. Scratch bevezető
2. Block-based programozás
3. Algoritmus fogalma
4. Utasítás-sorozat
5. Loop (ismétlés)
6. Condition (if)
7. Változó fogalma
8. Input / output
9. Sprite / animáció (Scratch)
10. Zenei loop
11. Photo editing alap
12. Video editing alap
13. PowerPoint haladó
14. Prezentációs szabályok
15. Research (keresési kulcsszó)
16. Wikipédia gyerek módban
17. Source/forrás megbízható-e
18. Digital footprint
19. Biztonság: erős jelszó
20. Cyberbullying
21. Screenshot advanced
22. Cloud alap (Drive)
23. Kollaboráció (Docs)
24. Első HTML alap
25. Kreatív projekt

## Végrehajtási terv (16 batch)

| # | Gép | Grade | Langs | Fájlok |
|---|-----|-------|-------|--------|
| 1 | Win | K1 | de | 25 JSON + curriculum TS |
| 2 | CB | K1 | hu | 25 JSON |
| 3 | Win | K1 | en + ro | 50 JSON |
| 4 | CB | K2 | de | 25 JSON + curriculum TS |
| 5 | Win | K2 | hu | 25 JSON |
| 6 | CB | K2 | en + ro | 50 JSON |
| 7 | Win | K3 | de | 25 JSON + curriculum TS |
| 8 | CB | K3 | hu | 25 JSON |
| 9 | Win | K3 | en + ro | 50 JSON |
| 10 | CB | K4 | de | 25 JSON + curriculum TS |
| 11 | Win | K4 | hu | 25 JSON |
| 12 | CB | K4 | en + ro | 50 JSON |
| 13 | Win | astroInformatika K1-K2 TS | — | 2 TS |
| 14 | CB | astroInformatika K3-K4 TS | — | 2 TS |
| 15 | Win | Route integráció + explorer pools | — | page.tsx + pools |
| 16 | CB | Tests + TSC check | — | verification |

**Időigény**: 16 batch × ~5-10 min = 1.5-3 óra
