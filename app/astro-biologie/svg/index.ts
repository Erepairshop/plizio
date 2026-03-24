// ─── Bio SVG Library — közös újrafelhasználható illusztrációk ────────────────
// Használat: import { FishAnatomySvg, HeartSvg } from "@/app/astro-biologie/svg";
//
// STRUKTÚRA:
//   FishSvg.tsx       — K5 i1: Halak & Kétéltűek (MUSTER/TEMPLATE)
//   ReptileBirdSvg.tsx— K5 i2: Hüllők & Madarak
//   MammalSvg.tsx     — K5 i3: Emlősök
//   PlantSvg.tsx      — K5 i4-i5: Növények, Virágok
//   BodySvg.tsx       — K5 i6-i9: Csontváz, Szervek, Érzékszervek, Táplálkozás
//   ArthropodSvg.tsx  — K6 i1-i2: Ízeltlábúak, Puhatestűek, Férgek
//   EcosystemSvg.tsx  — K6 i3-i4: Erdő, Víz ökoszisztéma
//   CellSvg.tsx       — K7 i1-i4: Sejt, Mitózis, Fotoszintézis, DNS
//   SystemsSvg.tsx    — K7-K8: Keringés, Immunrendszer, Idegrendszer, Hormonok

// ── K5: Halak & Kétéltűek ──
export { FishAnatomySvg, FishScalesSvg, FrogLifeSvg } from "./FishSvg";

// ── K5: Hüllők & Madarak ──
export { ReptileAnatomySvg, BirdAnatomySvg, ReptileVsBirdSvg } from "./ReptileBirdSvg";

// ── K5: Emlősök ──
export { MammalGroupsSvg, MammalAnatomySvg, FoodChainSvg } from "./MammalSvg";

// ── K5: Növények & Virágok ──
export { PlantAnatomySvg, PhotosynthesisSvg, FlowerPartsSvg, PollinationSvg } from "./PlantSvg";

// ── K5: Emberi test ──
export { SkeletonSvg, MusclesSvg, DigestiveSvg, HeartSvg, LungsSvg, EyeSvg, EarSvg, NutritionPyramidSvg } from "./BodySvg";

// ── K6: Ízeltlábúak & Férgek ──
export { InsectAnatomySvg, SpiderAnatomySvg, ArthropodGroupsSvg, MolluskSvg, WormSvg } from "./ArthropodSvg";

// ── K6: Ökoszisztémák ──
export { ForestLayersSvg, FoodWebSvg, WaterEcosystemSvg, DecomposerSvg } from "./EcosystemSvg";

// ── K7: Sejt & DNS ──
export { CellStructureSvg, MitosisSvg, ChloroplastSvg, MitochondriaSvg, DNAHelixSvg } from "./CellSvg";

// ── K7-K8: Rendszerek ──
export { CirculationSvg, ImmuneSystemSvg, NervousSystemSvg, BrainRegionsSvg, HormoneSvg, ReproductionSvg } from "./SystemsSvg";
