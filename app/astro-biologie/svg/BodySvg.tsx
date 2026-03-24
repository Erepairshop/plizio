"use client";
// ─── BodySvg — Human body / organ illustrations ────────────────────────────
// Exports:
//   SkeletonSvg          — skull / spine / ribs
//   MusclesSvg           — biceps / triceps / major muscle groups
//   DigestiveSvg         — stomach / intestine / esophagus
//   HeartSvg             — heart chambers / blood flow
//   LungsSvg             — lungs / alveoli / breathing
//   EyeSvg               — eye cross-section (retina, lens, cornea)
//   EarSvg               — ear anatomy (eardrum, cochlea)
//   NutritionPyramidSvg  — food pyramid (vitamins, proteins, carbs)
//
// TODO: Replace placeholder SVGs with detailed illustrations

import { memo } from "react";

// ─── SKELETON ───────────────────────────────────────────────────────────────

const SKELETON_LABELS: Record<string, Record<string, string>> = {
  en: { title: "The Skeleton", skull: "Skull", spine: "Spine", ribs: "Ribs", pelvis: "Pelvis", femur: "Femur", joints: "Joints", bones206: "206 bones" },
  de: { title: "Das Skelett", skull: "Schädel", spine: "Wirbelsäule", ribs: "Rippen", pelvis: "Becken", femur: "Oberschenkelknochen", joints: "Gelenke", bones206: "206 Knochen" },
  hu: { title: "A csontváz", skull: "Koponya", spine: "Gerinc", ribs: "Bordák", pelvis: "Medence", femur: "Combcsont", joints: "Ízületek", bones206: "206 csont" },
  ro: { title: "Scheletul", skull: "Craniu", spine: "Coloana vertebrală", ribs: "Coaste", pelvis: "Bazin", femur: "Femur", joints: "Articulații", bones206: "206 oase" },
};

export const SkeletonSvg = memo(function SkeletonSvg({ lang = "de" }: { lang?: string }) {
  const l = SKELETON_LABELS[lang as keyof typeof SKELETON_LABELS] || SKELETON_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="skeletonBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#171540" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#skeletonBg)" rx="12" />
      {/* TODO: detailed skeleton illustration */}
      <text x="120" y="62" textAnchor="middle" fontSize="32">💀</text>
      <text x="120" y="88" textAnchor="middle" fontSize="9" fontWeight="700" fill="#c4b5fd">{l.title}</text>
      <text x="120" y="104" textAnchor="middle" fontSize="7" fill="#c4b5fd" opacity="0.6">{l.skull} · {l.spine} · {l.ribs} · {l.bones206}</text>
    </svg>
  );
});

// ─── MUSCLES ────────────────────────────────────────────────────────────────

const MUSCLES_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Muscles", biceps: "Biceps", triceps: "Triceps", heart: "Heart muscle", flexor: "Flexor", extensor: "Extensor", voluntary: "Voluntary", involuntary: "Involuntary" },
  de: { title: "Muskeln", biceps: "Bizeps", triceps: "Trizeps", heart: "Herzmuskel", flexor: "Beuger", extensor: "Strecker", voluntary: "Willkürlich", involuntary: "Unwillkürlich" },
  hu: { title: "Izmok", biceps: "Bicepsz", triceps: "Tricepsz", heart: "Szívizom", flexor: "Hajlító", extensor: "Feszítő", voluntary: "Akaratlagos", involuntary: "Nem akaratlagos" },
  ro: { title: "Mușchii", biceps: "Biceps", triceps: "Triceps", heart: "Mușchiul inimii", flexor: "Flexor", extensor: "Extensor", voluntary: "Voluntar", involuntary: "Involuntar" },
};

export const MusclesSvg = memo(function MusclesSvg({ lang = "de" }: { lang?: string }) {
  const l = MUSCLES_LABELS[lang as keyof typeof MUSCLES_LABELS] || MUSCLES_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="musclesBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#1a1745" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#musclesBg)" rx="12" />
      {/* TODO: detailed muscles illustration */}
      <text x="120" y="62" textAnchor="middle" fontSize="32">💪</text>
      <text x="120" y="88" textAnchor="middle" fontSize="9" fontWeight="700" fill="#c4b5fd">{l.title}</text>
      <text x="120" y="104" textAnchor="middle" fontSize="7" fill="#c4b5fd" opacity="0.6">{l.biceps} · {l.triceps} · {l.flexor} · {l.extensor}</text>
    </svg>
  );
});

// ─── DIGESTIVE SYSTEM ───────────────────────────────────────────────────────

const DIGESTIVE_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Digestive System", mouth: "Mouth", esophagus: "Esophagus", stomach: "Stomach", smallIntestine: "Small intestine", largeIntestine: "Large intestine", liver: "Liver", nutrients: "Absorbs nutrients" },
  de: { title: "Verdauungssystem", mouth: "Mund", esophagus: "Speiseröhre", stomach: "Magen", smallIntestine: "Dünndarm", largeIntestine: "Dickdarm", liver: "Leber", nutrients: "Nimmt Nährstoffe auf" },
  hu: { title: "Emésztőrendszer", mouth: "Száj", esophagus: "Nyelőcső", stomach: "Gyomor", smallIntestine: "Vékonybél", largeIntestine: "Vastagbél", liver: "Máj", nutrients: "Tápanyagot szív fel" },
  ro: { title: "Sistemul digestiv", mouth: "Gură", esophagus: "Esofag", stomach: "Stomac", smallIntestine: "Intestin subțire", largeIntestine: "Intestin gros", liver: "Ficat", nutrients: "Absoarbe nutrienți" },
};

export const DigestiveSvg = memo(function DigestiveSvg({ lang = "de" }: { lang?: string }) {
  const l = DIGESTIVE_LABELS[lang as keyof typeof DIGESTIVE_LABELS] || DIGESTIVE_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="digestiveBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#1c1848" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#digestiveBg)" rx="12" />
      {/* TODO: detailed digestive system illustration */}
      <text x="120" y="62" textAnchor="middle" fontSize="32">🫁</text>
      <text x="120" y="88" textAnchor="middle" fontSize="9" fontWeight="700" fill="#c4b5fd">{l.title}</text>
      <text x="120" y="104" textAnchor="middle" fontSize="7" fill="#c4b5fd" opacity="0.6">{l.stomach} · {l.smallIntestine} · {l.liver}</text>
    </svg>
  );
});

// ─── HEART ──────────────────────────────────────────────────────────────────

const HEART_LABELS: Record<string, Record<string, string>> = {
  en: { title: "The Heart", leftAtrium: "Left atrium", rightAtrium: "Right atrium", leftVentricle: "Left ventricle", rightVentricle: "Right ventricle", aorta: "Aorta", veins: "Veins", arteries: "Arteries", oxygen: "Oxygen-rich blood" },
  de: { title: "Das Herz", leftAtrium: "Linker Vorhof", rightAtrium: "Rechter Vorhof", leftVentricle: "Linke Kammer", rightVentricle: "Rechte Kammer", aorta: "Aorta", veins: "Venen", arteries: "Arterien", oxygen: "Sauerstoffreiches Blut" },
  hu: { title: "A szív", leftAtrium: "Bal pitvar", rightAtrium: "Jobb pitvar", leftVentricle: "Bal kamra", rightVentricle: "Jobb kamra", aorta: "Aorta", veins: "Vénák", arteries: "Artériák", oxygen: "Oxigéndús vér" },
  ro: { title: "Inima", leftAtrium: "Atriul stâng", rightAtrium: "Atriul drept", leftVentricle: "Ventriculul stâng", rightVentricle: "Ventriculul drept", aorta: "Aorta", veins: "Vene", arteries: "Artere", oxygen: "Sânge oxigenat" },
};

export const HeartSvg = memo(function HeartSvg({ lang = "de" }: { lang?: string }) {
  const l = HEART_LABELS[lang as keyof typeof HEART_LABELS] || HEART_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="heartBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#251e50" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#heartBg)" rx="12" />
      {/* TODO: detailed heart cross-section illustration */}
      <text x="120" y="62" textAnchor="middle" fontSize="32">❤️</text>
      <text x="120" y="88" textAnchor="middle" fontSize="9" fontWeight="700" fill="#c4b5fd">{l.title}</text>
      <text x="120" y="104" textAnchor="middle" fontSize="7" fill="#c4b5fd" opacity="0.6">{l.aorta} · {l.arteries} · {l.veins}</text>
    </svg>
  );
});

// ─── LUNGS ──────────────────────────────────────────────────────────────────

const LUNGS_LABELS: Record<string, Record<string, string>> = {
  en: { title: "The Lungs", trachea: "Trachea", bronchi: "Bronchi", alveoli: "Alveoli", diaphragm: "Diaphragm", inhale: "Inhale", exhale: "Exhale", gasExchange: "Gas exchange" },
  de: { title: "Die Lunge", trachea: "Luftröhre", bronchi: "Bronchien", alveoli: "Lungenbläschen", diaphragm: "Zwerchfell", inhale: "Einatmen", exhale: "Ausatmen", gasExchange: "Gasaustausch" },
  hu: { title: "A tüdő", trachea: "Légcső", bronchi: "Hörgők", alveoli: "Léghólyagok", diaphragm: "Rekeszizom", inhale: "Belégzés", exhale: "Kilégzés", gasExchange: "Gázcsere" },
  ro: { title: "Plămânii", trachea: "Trahee", bronchi: "Bronhii", alveoli: "Alveole", diaphragm: "Diafragmă", inhale: "Inspirație", exhale: "Expirație", gasExchange: "Schimb de gaze" },
};

export const LungsSvg = memo(function LungsSvg({ lang = "de" }: { lang?: string }) {
  const l = LUNGS_LABELS[lang as keyof typeof LUNGS_LABELS] || LUNGS_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="lungsBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#1f1c50" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#lungsBg)" rx="12" />
      {/* TODO: detailed lungs illustration */}
      <text x="120" y="62" textAnchor="middle" fontSize="32">🫁</text>
      <text x="120" y="88" textAnchor="middle" fontSize="9" fontWeight="700" fill="#c4b5fd">{l.title}</text>
      <text x="120" y="104" textAnchor="middle" fontSize="7" fill="#c4b5fd" opacity="0.6">{l.alveoli} · {l.bronchi} · {l.gasExchange}</text>
    </svg>
  );
});

// ─── EYE ────────────────────────────────────────────────────────────────────

const EYE_LABELS: Record<string, Record<string, string>> = {
  en: { title: "The Eye", cornea: "Cornea", lens: "Lens", retina: "Retina", pupil: "Pupil", iris: "Iris", opticNerve: "Optic nerve", rods: "Rods & Cones" },
  de: { title: "Das Auge", cornea: "Hornhaut", lens: "Linse", retina: "Netzhaut", pupil: "Pupille", iris: "Iris", opticNerve: "Sehnerv", rods: "Stäbchen & Zapfen" },
  hu: { title: "A szem", cornea: "Szaruhártya", lens: "Lencse", retina: "Retina", pupil: "Pupilla", iris: "Írisz", opticNerve: "Látóideg", rods: "Csapok és pálcikák" },
  ro: { title: "Ochiul", cornea: "Cornee", lens: "Cristalin", retina: "Retină", pupil: "Pupilă", iris: "Iris", opticNerve: "Nerv optic", rods: "Bastonașe și conuri" },
};

export const EyeSvg = memo(function EyeSvg({ lang = "de" }: { lang?: string }) {
  const l = EYE_LABELS[lang as keyof typeof EYE_LABELS] || EYE_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="eyeBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#1a174a" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#eyeBg)" rx="12" />
      {/* TODO: detailed eye cross-section illustration */}
      <text x="120" y="62" textAnchor="middle" fontSize="32">👁️</text>
      <text x="120" y="88" textAnchor="middle" fontSize="9" fontWeight="700" fill="#c4b5fd">{l.title}</text>
      <text x="120" y="104" textAnchor="middle" fontSize="7" fill="#c4b5fd" opacity="0.6">{l.retina} · {l.lens} · {l.cornea}</text>
    </svg>
  );
});

// ─── EAR ────────────────────────────────────────────────────────────────────

const EAR_LABELS: Record<string, Record<string, string>> = {
  en: { title: "The Ear", outerEar: "Outer ear", earDrum: "Eardrum", ossicles: "Ossicles", cochlea: "Cochlea", auditoryNerve: "Auditory nerve", balance: "Balance organ", soundWaves: "Sound waves" },
  de: { title: "Das Ohr", outerEar: "Außenohr", earDrum: "Trommelfell", ossicles: "Gehörknöchelchen", cochlea: "Schnecke", auditoryNerve: "Hörnerv", balance: "Gleichgewichtsorgan", soundWaves: "Schallwellen" },
  hu: { title: "A fül", outerEar: "Külső fül", earDrum: "Dobhártya", ossicles: "Hallócsontok", cochlea: "Csiga", auditoryNerve: "Hallóideg", balance: "Egyensúlyszerv", soundWaves: "Hanghullámok" },
  ro: { title: "Urechea", outerEar: "Urechea externă", earDrum: "Timpan", ossicles: "Oscioarle", cochlea: "Cohlee", auditoryNerve: "Nerv auditiv", balance: "Organ de echilibru", soundWaves: "Unde sonore" },
};

export const EarSvg = memo(function EarSvg({ lang = "de" }: { lang?: string }) {
  const l = EAR_LABELS[lang as keyof typeof EAR_LABELS] || EAR_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="earBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#1d1a4e" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#earBg)" rx="12" />
      {/* TODO: detailed ear cross-section illustration */}
      <text x="120" y="62" textAnchor="middle" fontSize="32">👂</text>
      <text x="120" y="88" textAnchor="middle" fontSize="9" fontWeight="700" fill="#c4b5fd">{l.title}</text>
      <text x="120" y="104" textAnchor="middle" fontSize="7" fill="#c4b5fd" opacity="0.6">{l.earDrum} · {l.cochlea} · {l.auditoryNerve}</text>
    </svg>
  );
});

// ─── NUTRITION PYRAMID ──────────────────────────────────────────────────────

const NUTRITION_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Nutrition Pyramid", carbs: "Carbohydrates", proteins: "Proteins", fats: "Fats", vitamins: "Vitamins", minerals: "Minerals", water: "Water", fiber: "Fiber", sugar: "Sugar (less!)" },
  de: { title: "Ernährungspyramide", carbs: "Kohlenhydrate", proteins: "Proteine", fats: "Fette", vitamins: "Vitamine", minerals: "Mineralstoffe", water: "Wasser", fiber: "Ballaststoffe", sugar: "Zucker (weniger!)" },
  hu: { title: "Táplálkozási piramis", carbs: "Szénhidrátok", proteins: "Fehérjék", fats: "Zsírok", vitamins: "Vitaminok", minerals: "Ásványi anyagok", water: "Víz", fiber: "Rostok", sugar: "Cukor (kevesebb!)" },
  ro: { title: "Piramida alimentară", carbs: "Carbohidrați", proteins: "Proteine", fats: "Grăsimi", vitamins: "Vitamine", minerals: "Minerale", water: "Apă", fiber: "Fibre", sugar: "Zahăr (mai puțin!)" },
};

export const NutritionPyramidSvg = memo(function NutritionPyramidSvg({ lang = "de" }: { lang?: string }) {
  const l = NUTRITION_LABELS[lang as keyof typeof NUTRITION_LABELS] || NUTRITION_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="nutritionBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#211d52" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#nutritionBg)" rx="12" />
      {/* TODO: detailed food pyramid illustration */}
      <text x="80" y="52" textAnchor="middle" fontSize="18">🥦</text>
      <text x="120" y="52" textAnchor="middle" fontSize="18">🍞</text>
      <text x="160" y="52" textAnchor="middle" fontSize="18">🥩</text>
      <text x="120" y="88" textAnchor="middle" fontSize="9" fontWeight="700" fill="#c4b5fd">{l.title}</text>
      <text x="120" y="104" textAnchor="middle" fontSize="7" fill="#c4b5fd" opacity="0.6">{l.carbs} · {l.proteins} · {l.vitamins}</text>
    </svg>
  );
});
