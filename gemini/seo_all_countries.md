# POI SEO — minden ország (tömör)

## TILTÁS
NE használj sub-agent/generalist ügynököt. Csak read_file + replace/write.

## CÉLFÁJLOK
~/Desktop/plizio/lib/visualLab/data/<COUNTRY>Poi.ts
Országok: austria, belgium, bulgaria, croatia, czechRepublic, denmark, estonia, finland, france, greece, hungary, ireland, italy, latvia, lithuania, luxembourg, netherlands, norway, poland, portugal, romania, slovakia, slovenia, spain, sweden, switzerland, unitedkingdom

## TIER (POI type+név alapján)
- **T1** (400+ szó, 10 fact/lang): country, state-capital, főváros, ikonikus UNESCO (pl Acropolis, Alhambra, Plitvice, Rila-kolostor)
- **T2** (250+ szó, 7 fact/lang): nagyváros city, UNESCO-helyek, major landmark
- **T3** (150+ szó, 5 fact/lang): kisebb city, lokális landmark/nature

## SZABÁLY
- 4 NYELV mindegyik külön-külön (de/hu/ro/en), VALÓS Wikipedia-szintű adat, NE fordítás
- SEO long-tail keywords természetesen
- NE módosítsd: id, type, parent, coords, name, image

## STRUKTÚRA
description: { de, hu, ro, en } — mindegyik szöveg (tier szerinti hossz)
facts: { de, hu, ro, en } — mindegyik bullet array

## PACING
- 1 ország/batch, ne parallel
- 429 → várj 30p, újra
- 30+perc futás → CTRL+C + 10p szünet

## BEFEJEZÉS
"POI <ORSZÁG> SEO DONE" + POI-szám

## HASZNÁLAT
cat ~/Desktop/plizio/gemini/seo_all_countries.md | gemini -m gemini-3-flash-preview --prompt-addon 'Most dolgozz a <COUNTRY>-on'
