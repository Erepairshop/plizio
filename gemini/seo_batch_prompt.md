# POI SEO Batch Prompt — Plizio térkép (manuális Gemini futtatás)

## FELADAT
Töltsd fel/bővítsd a POI-k `description` és `facts` mezőit SEO-gazdag, Wikipedia-szintű valós tartalommal, 4 nyelven (de/hu/ro/en). **Közvetlen file edit**, NE találj ki adatot.

## CÉLFÁJLOK (válassz egyszerre 1 országot, ne többet!)
```
~/Desktop/plizio/lib/visualLab/data/greecePoi.ts
~/Desktop/plizio/lib/visualLab/data/portugalPoi.ts
~/Desktop/plizio/lib/visualLab/data/luxembourgPoi.ts
~/Desktop/plizio/lib/visualLab/data/bulgariaPoi.ts
~/Desktop/plizio/lib/visualLab/data/lithuaniaPoi.ts
~/Desktop/plizio/lib/visualLab/data/latviaPoi.ts
~/Desktop/plizio/lib/visualLab/data/estoniaPoi.ts
~/Desktop/plizio/lib/visualLab/data/slovakiaPoi.ts
~/Desktop/plizio/lib/visualLab/data/sloveniaPoi.ts
~/Desktop/plizio/lib/visualLab/data/swedenPoi.ts
~/Desktop/plizio/lib/visualLab/data/norwayPoi.ts
~/Desktop/plizio/lib/visualLab/data/switzerlandPoi.ts
~/Desktop/plizio/lib/visualLab/data/finlandPoi.ts
~/Desktop/plizio/lib/visualLab/data/irelandPoi.ts
~/Desktop/plizio/lib/visualLab/data/denmarkPoi.ts
~/Desktop/plizio/lib/visualLab/data/belgiumPoi.ts
~/Desktop/plizio/lib/visualLab/data/czechRepublicPoi.ts
~/Desktop/plizio/lib/visualLab/data/croatiaPoi.ts
~/Desktop/plizio/lib/visualLab/data/austriaPoi.ts
```

## TIER SYSTEM (POI `type` + név alapján döntsd el)

### TIER-1 (400–500 szó description, 10 fact/lang)
- `type: "country"` (mindig)
- `type: "state-capital"` vagy fővárosok (Athén, Lisszabon, Bukarest, Varsó…)
- Legikonikusabb látnivalók: Acropolis, Delphi, Olympia, Meteora, Santorini, Alhambra, Sagrada Família, Kolozsvári vár, Plitvicei-tavak, stb.

### TIER-2 (250–350 szó, 7–8 fact/lang)
- `type: "city"` nagyváros (250k+)
- UNESCO-helyszínek (`type: "historical"`)
- Major `landmark` (Parthenon, Fehér-torony, Pena palota)

### TIER-3 (150–250 szó, 5–6 fact/lang)
- Kisebb `city`, `landmark`, `mountain`, `lake`, `island` — helyi jelentőség

## TARTALMI SZABÁLYOK
- **VALÓS ADAT**: UNESCO-felvétel éve, építés dátuma, magasság, terület, népesség — csak ha biztos
- **4 NYELV**: de/hu/ro/en MINDEGYIK egyformán értékes (NE csak en + auto-fordítás)
- **SEO-barát fogalmazás**: long-tail keywords természetesen ("Mit látni Athénban?", "Santorini kaldera túra", "Bamberg Sehenswürdigkeiten")
- **NE legyen keyword-stuffing**, természetes szöveg
- **Facts**: konkrét számadatok, nem csak "híres hely"

## JSON STRUKTÚRA (amit módosítasz)
```ts
{
  id: "cult-mycenae",          // NE módosítsd
  type: "historical",          // NE módosítsd
  parent: "greece",             // NE módosítsd
  coords: [22.753, 37.73],     // NE módosítsd
  name: { de: "...", hu: "...", ro: "...", en: "..." },  // NE módosítsd
  description: {
    de: "... (400 szó SEO-content) ...",   // ← MÓDOSÍTANDÓ
    hu: "...",                               // ← MÓDOSÍTANDÓ
    ro: "...",                               // ← MÓDOSÍTANDÓ
    en: "..."                                // ← MÓDOSÍTANDÓ
  },
  facts: {
    de: ["tény 1", "tény 2", ...],          // ← MÓDOSÍTANDÓ
    hu: [...],
    ro: [...],
    en: [...]
  },
  image: "/geo-images/greece/cult-mycenae.webp"   // NE módosítsd
}
```

## BEFEJEZÉS
Írd ki: `POI <ORSZÁG> SEO DONE` és hány POI-t bővítettél.

## PÉLDA PROMPT EGY ORSZÁGRA

```bash
cat > ~/seo_greece.txt << 'EOF'
Nyisd meg: ~/Desktop/plizio/lib/visualLab/data/greecePoi.ts

Minden POI-ban ahol description < 200 karakter egy nyelven, bővítsd a TIER rendszer szerint:
- TIER-1 (Athén, Acropolis, Santorini, Meteora stb.): 400+ szó / lang, 10 fact / lang
- TIER-2 (Thessaloniki, Crete, Delphi, Mykonos stb.): 250+ szó, 7 fact
- TIER-3 (kisebb városok, helyek): 150+ szó, 5 fact

4 nyelv (de/hu/ro/en), Wikipedia-szintű VALÓS adat. SEO-barát fogalmazás.

id/type/parent/coords/name/image NE módosítsd.

BEFEJEZÉS: "POI GREECE SEO DONE" + POI-szám.
EOF

cd ~/Desktop/plizio
cat ~/seo_greece.txt | gemini -m gemini-3-flash-preview
```

## PACING (fontos!)
- 1 országot futtass egyszerre, ne 3-at parallel
- Ha 429 → várj 30 percet, aztán újra
- Ha 30 percnél tovább fut → CTRL+C + 10 perc szünet + retry
- Flash stabilabb mint Pro szerver-overload esetén
