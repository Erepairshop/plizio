# Gravitas Meteor Asset Spec

Cel: `6-7` kulonallo meteor/asteroid asset, atlatszo hatterrel, egyseges gravitas stilusban, hogy a galaxy mapen tobb meteor-tipus ismertetoen es elethubben jelenjen meg.

## Altalanos irany

- Formatum: preferalt `webp` + opcionisan `png`
- Hatter: teljesen atlatszo
- Hasznalat: galaxy map resource node-ok
- Stilus: stilizalt sci-fi, de nem rajzfilmes
- Nezet: enyhen felulrol / izometrikus kozelites
- Kontur: eros, jol felismerheto sziluett mar `68-80px` meretben is
- Feny: sajat belso asvanyfeny vagy repedesfeny
- Kerulendo:
  - tul sok apro reszlet
  - tul sotet massza, ami kis meretben eltunik
  - fotorealisztikus zavaros hatter
  - aura, ami onallo hatterfoltnak tunik

## Technikai kovetelmenyek

- Minden asset egyetlen meteor-klasztert mutasson
- Legyen kozepre komponalva
- A forma ne erjen tul kozel a kep szelere
- Asset meret: master `1024x1024`
- Webes render: kesobb `68-80px` savban
- Fajlnev konvencio:
  - `public/gravitas/galaxy/meteor-aether.webp`
  - `public/gravitas/galaxy/meteor-ember.webp`
  - `public/gravitas/galaxy/meteor-verdant.webp`
  - `public/gravitas/galaxy/meteor-sable.webp`
  - `public/gravitas/galaxy/meteor-lumen.webp`
  - `public/gravitas/galaxy/meteor-rift.webp`
  - opcionisan `public/gravitas/galaxy/meteor-mythic.webp`

## Stilus szabaly

- Ugyanabban a vizualis csaladban legyenek
- A kozetanyag alapja maradjon hasonlo
- A kulonbseg az asvany, repedes, tomeg es forma legyen
- Mindegyiknek legyen egyedi silhouette-je
- Kis meretben is legyen konnyen megkulonboztetheto

## Asset tipusok

### 1. Aether

- Fajlnev: `meteor-aether.webp`
- Szerep: alap kozepes resource node
- Forma: kiegyensulyozott, kompakt klaszter
- Feny: cyan-kek ereszkedo kristalyfenyek
- Erzet: stabil, kozepes ritkasag
- Kulcsszavak:
  - balanced rocky asteroid cluster
  - cyan crystal veins
  - medium density

### 2. Ember

- Fajlnev: `meteor-ember.webp`
- Szerep: forro, agresszivebb erzetu node
- Forma: hosszabb, repedezett, elesebb
- Feny: narancs-parazs repedesek
- Erzet: veszelyesebb, forrobb, ritkabb
- Kulcsszavak:
  - fractured asteroid
  - glowing ember cracks
  - hot orange magma seams

### 3. Verdant

- Fajlnev: `meteor-verdant.webp`
- Szerep: gyorsabb, konnyebb kitermelesu node
- Forma: nyitottabb, tobb kifuto kristaly
- Feny: zold kristalyok
- Erzet: tisztabb, frissebb, energikusabb
- Kulcsszavak:
  - asteroid with green crystal growth
  - brighter mineral bloom
  - readable crystal silhouette

### 4. Sable

- Fajlnev: `meteor-sable.webp`
- Szerep: suru, nehez, magasabb tier
- Forma: tomorebb, sulyos tomeg
- Feny: minimalis hideg femes csillanas
- Erzet: sotet, iparibb, nehez
- Kulcsszavak:
  - dense heavy asteroid mass
  - dark mineral core
  - muted metallic highlights

### 5. Lumen

- Fajlnev: `meteor-lumen.webp`
- Szerep: kisebb, latvanyosabb, vilagito node
- Forma: lazabb, enyhen viragzo klaszter
- Feny: lila-vilagos ragyogas
- Erzet: konnyedebb, ritmusosabb, jobban lathato
- Kulcsszavak:
  - luminous asteroid bloom
  - violet inner glow
  - elegant floating crystal cluster

### 6. Rift

- Fajlnev: `meteor-rift.webp`
- Szerep: endgame / magas feszultsegu node
- Forma: megnyult hasadekgerinc
- Feny: kek-cyan hasadekfeny
- Erzet: ritka, veszelyes, magas tier
- Kulcsszavak:
  - elongated rift asteroid
  - blue fracture light
  - sharp strategic silhouette

### 7. Mythic opcionális

- Fajlnev: `meteor-mythic.webp`
- Szerep: nagyon ritka kulonleges node
- Forma: nagyobb, ikonikus sziluett
- Feny: tobb szinu, de visszafogott, nem giccses
- Erzet: kulonleges, egyedi, ritka spawn
- Kulcsszavak:
  - mythical rare asteroid
  - mixed crystal inclusions
  - premium landmark-quality silhouette

## Prompt sablon

Hasznalhato kiindulasi prompt:

```text
Use case: stylized-concept
Asset type: game world resource icon
Primary request: create a single floating sci-fi asteroid resource cluster for a galaxy map in a stylized but grounded 3D game look
Scene/backdrop: transparent background, no stars, no nebula, no environment
Subject: one isolated asteroid cluster with clear silhouette, readable at small size
Style/medium: polished 3D concept render, game-ready bitmap asset
Composition/framing: centered object, full object visible, generous transparent padding around the silhouette
Lighting/mood: dramatic rim light plus internal mineral glow
Materials/textures: rough rocky asteroid surface, embedded minerals, glowing seams/crystals
Constraints: transparent background only, no text, no watermark, no extra objects, no cut-off edges, keep the asset readable at small UI map size
Avoid: busy background, smoke clouds, excessive particle effects, blurry silhouette, over-detailed noise
```

## Variant prompt kiegeszitesek

### Aether prompt extra

```text
Variant details: balanced rocky asteroid cluster with cyan-blue crystal veins, medium rarity, stable silhouette, compact readable mass.
```

### Ember prompt extra

```text
Variant details: fractured asteroid with glowing orange ember cracks and hot magma seams, slightly aggressive silhouette, sharper rock plates.
```

### Verdant prompt extra

```text
Variant details: asteroid with vivid green crystal growth, brighter and more open cluster silhouette, energetic and clean readability.
```

### Sable prompt extra

```text
Variant details: dense dark heavy asteroid core with muted metallic reflections, compact and weighty silhouette, high-tier industrial feel.
```

### Lumen prompt extra

```text
Variant details: luminous violet crystal bloom asteroid, lighter structure, elegant floating shape, highly readable glowing edges.
```

### Rift prompt extra

```text
Variant details: elongated asteroid spine with blue-cyan fracture light, dangerous rare-node feel, long asymmetric silhouette.
```

### Mythic prompt extra

```text
Variant details: premium rare asteroid landmark with mixed subtle crystal colors, iconic silhouette, unique but still in the same asset family.
```

## Minosegi ellenorzes

Minden asset akkor jo, ha:

- kis meretben is masnak tunik, mint a tobbi
- nincs levagott szel
- nincs hattermaradvany
- nem mosodik ossze sotet foltta
- a glow nem nyeli el a forma konturjat
- ugyanabba a gravitas vilagba illik

## Bekotesi terv

Ha az assetek keszen vannak, ezeket kell majd atirni:

- `lib/gravitas/world/demo.ts`
- variantonkent kulon `assetSrc`
- a jelenlegi filter-alapu placeholder classok helyett visszafogottabb finomites
- lehet kulon meret is variansonkent, de maradjon kb. `68-80px` savban

## Javasolt elso kor

- Eloszor legyen meg a 6 alap asset
- Mythic csak utana, ha tenyleg kell
- Ha valamelyik tul hasonlo, inkabb ujrageneralni, mint gyenge varianssal bent hagyni
