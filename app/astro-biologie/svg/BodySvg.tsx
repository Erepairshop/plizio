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

import { memo } from "react";

// ─── SHARED DEFS ────────────────────────────────────────────────────────────
const LabelGlow = () => (
  <filter id="lblGlow">
    <feGaussianBlur stdDeviation="1.2" result="b" />
    <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
  </filter>
);

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
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <LabelGlow />
      </defs>
      <rect width="240" height="140" fill="url(#skeletonBg)" rx="12" />
      
      {/* ── Skeleton Graphic ── */}
      <g stroke="#e2e8f0" strokeLinecap="round" strokeLinejoin="round">
        {/* Skull */}
        <path d="M 112 35 C 112 25, 128 25, 128 35 C 128 42, 124 45, 124 48 L 116 48 C 116 45, 112 42, 112 35 Z" fill="#cbd5e1" strokeWidth="1.5" />
        <circle cx="116" cy="36" r="1.5" fill="#0f172a" stroke="none" />
        <circle cx="124" cy="36" r="1.5" fill="#0f172a" stroke="none" />
        <path d="M 120 42 L 120 44" strokeWidth="1" />
        
        {/* Spine */}
        <line x1="120" y1="48" x2="120" y2="85" strokeWidth="3" strokeDasharray="2 1" />
        
        {/* Ribs */}
        {[55, 62, 69, 76].map((y, i) => (
          <g key={`rib${i}`}>
            <path d={`M 120 ${y} Q 105 ${y-2} 105 ${y+5}`} fill="none" strokeWidth="1.5" />
            <path d={`M 120 ${y} Q 135 ${y-2} 135 ${y+5}`} fill="none" strokeWidth="1.5" />
          </g>
        ))}

        {/* Pelvis */}
        <path d="M 110 85 C 105 85, 105 95, 115 95 L 120 98 L 125 95 C 135 95, 135 85, 130 85 Z" fill="#cbd5e1" strokeWidth="1" />
        
        {/* Arms */}
        <path d="M 105 55 L 90 75 L 85 95" fill="none" strokeWidth="2.5" />
        <path d="M 135 55 L 150 75 L 155 95" fill="none" strokeWidth="2.5" />
        <circle cx="90" cy="75" r="1.5" fill="#f8fafc" />
        <circle cx="150" cy="75" r="1.5" fill="#f8fafc" />

        {/* Legs (Femur etc) */}
        <path d="M 112 95 L 105 115 L 105 135" fill="none" strokeWidth="3" />
        <path d="M 128 95 L 135 115 L 135 135" fill="none" strokeWidth="3" />
        {/* Joints */}
        <circle cx="105" cy="115" r="2" fill="#f8fafc" />
        <circle cx="135" cy="115" r="2" fill="#f8fafc" />
      </g>

      {/* ── Labels ── */}
      <line x1="112" y1="30" x2="80" y2="20" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="65" y="19" textAnchor="middle" fontSize="6" fontWeight="700" fill="#f1f5f9" filter="url(#lblGlow)">{l.skull}</text>

      <line x1="120" y1="65" x2="165" y2="40" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="180" y="38" textAnchor="middle" fontSize="6" fontWeight="700" fill="#f1f5f9" filter="url(#lblGlow)">{l.ribs}</text>

      <line x1="120" y1="50" x2="175" y2="55" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="190" y="57" textAnchor="middle" fontSize="6" fontWeight="700" fill="#cbd5e1" filter="url(#lblGlow)">{l.spine}</text>

      <line x1="110" y1="90" x2="65" y2="90" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="50" y="92" textAnchor="middle" fontSize="6" fontWeight="700" fill="#cbd5e1" filter="url(#lblGlow)">{l.pelvis}</text>

      <line x1="131" y1="105" x2="180" y2="105" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="195" y="107" textAnchor="middle" fontSize="6" fontWeight="700" fill="#f1f5f9" filter="url(#lblGlow)">{l.femur}</text>

      <line x1="135" y1="115" x2="180" y2="125" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="195" y="127" textAnchor="middle" fontSize="6" fontWeight="700" fill="#94a3b8" filter="url(#lblGlow)">{l.joints}</text>
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
          <stop offset="0%" stopColor="#2e1025" />
          <stop offset="100%" stopColor="#1a0b16" />
        </linearGradient>
        <linearGradient id="muscleRed" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#991b1b" />
        </linearGradient>
        <LabelGlow />
      </defs>
      <rect width="240" height="140" fill="url(#musclesBg)" rx="12" />
      
      {/* ── Arm & Muscle Graphic ── */}
      <g transform="translate(10, 10)">
        {/* Bones (subtle) */}
        <path d="M 60 50 L 120 50 L 160 20" fill="none" stroke="#cbd5e1" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
        <circle cx="120" cy="50" r="5" fill="#cbd5e1" opacity="0.5" />

        {/* Biceps (Flexor) */}
        <path d="M 60 45 C 80 20, 110 25, 120 45 Z" fill="url(#muscleRed)" stroke="#fca5a5" strokeWidth="0.5" />
        {/* Muscle fibers */}
        <path d="M 70 40 Q 90 30 110 40 M 75 35 Q 90 27 105 35" fill="none" stroke="#7f1d1d" strokeWidth="0.8" />

        {/* Triceps (Extensor) */}
        <path d="M 60 55 C 80 75, 110 70, 120 55 Z" fill="url(#muscleRed)" stroke="#fca5a5" strokeWidth="0.5" />
        <path d="M 70 60 Q 90 68 110 60" fill="none" stroke="#7f1d1d" strokeWidth="0.8" />

        {/* Forearm muscles */}
        <path d="M 120 45 C 135 25, 155 15, 160 20 C 140 35, 120 55, 120 55 Z" fill="url(#muscleRed)" stroke="#fca5a5" strokeWidth="0.5" />
        
        {/* Tendons (white) */}
        <path d="M 115 45 L 120 45 L 125 40" fill="none" stroke="#f1f5f9" strokeWidth="1.5" />
        <path d="M 115 55 L 120 55 L 125 50" fill="none" stroke="#f1f5f9" strokeWidth="1.5" />
      </g>

      {/* ── Labels ── */}
      <line x1="100" y1="42" x2="80" y2="20" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <rect x="50" y="8" width="45" height="12" rx="6" fill="rgba(0,0,0,0.5)" />
      <text x="72.5" y="16" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#fca5a5" filter="url(#lblGlow)">{l.biceps} ({l.flexor})</text>

      <line x1="100" y1="78" x2="80" y2="105" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <rect x="50" y="105" width="45" height="12" rx="6" fill="rgba(0,0,0,0.5)" />
      <text x="72.5" y="113.5" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#fca5a5" filter="url(#lblGlow)">{l.triceps} ({l.extensor})</text>

      {/* Heart muscle reference */}
      <circle cx="190" cy="80" r="16" fill="none" stroke="rgba(239,68,68,0.3)" strokeWidth="1" strokeDasharray="2 2" />
      <path d="M 190 75 Q 185 70 180 75 Q 180 85 190 92 Q 200 85 200 75 Q 195 70 190 75 Z" fill="url(#muscleRed)" />
      <text x="190" y="105" textAnchor="middle" fontSize="5" fontWeight="700" fill="#cbd5e1" filter="url(#lblGlow)">{l.heart} ({l.involuntary})</text>
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
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>
        <LabelGlow />
      </defs>
      <rect width="240" height="140" fill="url(#digestiveBg)" rx="12" />
      
      {/* ── Anatomy Graphic ── */}
      <g strokeLinejoin="round">
        {/* Esophagus */}
        <path d="M 120 15 L 120 50" fill="none" stroke="#fca5a5" strokeWidth="4" />
        
        {/* Liver */}
        <path d="M 120 50 C 90 45, 95 70, 115 75 Z" fill="#7f1d1d" opacity="0.9" />
        
        {/* Stomach */}
        <path d="M 120 50 C 140 45, 155 60, 140 75 C 130 80, 120 70, 120 65 Z" fill="#fb7185" stroke="#f43f5e" strokeWidth="1" />
        
        {/* Large Intestine */}
        <path d="M 100 115 L 100 85 C 100 75, 140 75, 140 85 L 140 110 L 120 120 L 120 130" fill="none" stroke="#065f46" strokeWidth="7" strokeLinecap="round" />
        <path d="M 100 115 L 100 85 C 100 75, 140 75, 140 85 L 140 110 L 120 120 L 120 130" fill="none" stroke="#34d399" strokeWidth="4" strokeLinecap="round" strokeDasharray="3 2" />

        {/* Small Intestine */}
        <path d="M 115 75 Q 105 85 115 95 Q 130 85 125 100 Q 110 100 115 110 L 120 115" fill="none" stroke="#fcd34d" strokeWidth="4" strokeLinecap="round" />
      </g>

      {/* ── Labels ── */}
      <line x1="120" y1="30" x2="165" y2="25" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="185" y="27" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fca5a5" filter="url(#lblGlow)">{l.esophagus}</text>

      <line x1="145" y1="60" x2="170" y2="60" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="185" y="62" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fb7185" filter="url(#lblGlow)">{l.stomach}</text>

      <line x1="105" y1="60" x2="75" y2="60" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="60" y="62" textAnchor="middle" fontSize="6" fontWeight="700" fill="#f87171" filter="url(#lblGlow)">{l.liver}</text>

      <line x1="140" y1="95" x2="175" y2="95" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="200" y="97" textAnchor="middle" fontSize="6" fontWeight="700" fill="#34d399" filter="url(#lblGlow)">{l.largeIntestine}</text>

      <line x1="115" y1="95" x2="70" y2="95" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="45" y="97" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fcd34d" filter="url(#lblGlow)">{l.smallIntestine}</text>
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
          <stop offset="0%" stopColor="#450a0a" />
          <stop offset="100%" stopColor="#2e1065" />
        </linearGradient>
        <LabelGlow />
      </defs>
      <rect width="240" height="140" fill="url(#heartBg)" rx="12" />
      
      {/* ── Heart Cross-Section ── */}
      <g transform="translate(120, 75)">
        {/* Superior Vena Cava & Pulmonary Artery */}
        <path d="M -20 -30 L -20 -50 L -10 -50 L -10 -30 Z" fill="#3b82f6" />
        <path d="M -5 -30 L -5 -45 C 5 -55 15 -50 20 -40 L 15 -35 C 10 -40 5 -40 0 -30 Z" fill="#3b82f6" />
        
        {/* Aorta */}
        <path d="M 0 -30 L 0 -45 C -5 -60 -25 -60 -25 -40 L -15 -40 C -15 -50 -5 -50 -5 -40 L -5 -30 Z" fill="#ef4444" />
        
        {/* Right Atrium & Ventricle (Blue, patient's right -> screen left) */}
        <path d="M -10 -30 C -35 -30 -35 0 -25 20 L -5 35 Z" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="1" />
        <path d="M -5 -30 L -25 -10" fill="none" stroke="#60a5fa" strokeWidth="2" strokeDasharray="1 2" /> {/* Valve */}
        
        {/* Left Atrium & Ventricle (Red, patient's left -> screen right) */}
        <path d="M -5 35 L 5 45 C 30 20 30 -30 10 -30 Z" fill="#7f1d1d" stroke="#f87171" strokeWidth="1" />
        <path d="M 10 -30 L 25 -10" fill="none" stroke="#f87171" strokeWidth="2" strokeDasharray="1 2" /> {/* Valve */}
        
        {/* Septum */}
        <path d="M -5 -30 L -5 35 L 5 45 Z" fill="#b91c1c" />
      </g>

      {/* ── Labels ── */}
      <line x1="100" y1="25" x2="70" y2="20" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="50" y="21" textAnchor="middle" fontSize="6" fontWeight="700" fill="#93c5fd" filter="url(#lblGlow)">{l.veins}</text>

      <line x1="120" y1="20" x2="160" y2="15" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="175" y="16" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fca5a5" filter="url(#lblGlow)">{l.aorta}</text>

      {/* Screen Left = Right Heart */}
      <line x1="95" y1="55" x2="60" y2="55" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="40" y="57" textAnchor="middle" fontSize="6" fontWeight="700" fill="#93c5fd" filter="url(#lblGlow)">{l.rightAtrium}</text>

      <line x1="100" y1="85" x2="65" y2="105" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="45" y="108" textAnchor="middle" fontSize="6" fontWeight="700" fill="#93c5fd" filter="url(#lblGlow)">{l.rightVentricle}</text>

      {/* Screen Right = Left Heart */}
      <line x1="140" y1="55" x2="180" y2="55" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="205" y="57" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fca5a5" filter="url(#lblGlow)">{l.leftAtrium}</text>

      <line x1="135" y1="95" x2="175" y2="115" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="195" y="118" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fca5a5" filter="url(#lblGlow)">{l.leftVentricle}</text>
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
          <stop offset="0%" stopColor="#082f49" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="lungGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f472b6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#db2777" stopOpacity="0.9" />
        </linearGradient>
        <LabelGlow />
      </defs>
      <rect width="240" height="140" fill="url(#lungsBg)" rx="12" />
      
      {/* Trachea */}
      <path d="M 120 15 L 120 45" fill="none" stroke="#e2e8f0" strokeWidth="6" />
      {[18, 24, 30, 36, 42].map(y => (
        <line key={`tr${y}`} x1="116" y1={y} x2="124" y2={y} stroke="#64748b" strokeWidth="1.5" />
      ))}
      
      {/* Bronchi */}
      <path d="M 120 45 L 105 55" fill="none" stroke="#e2e8f0" strokeWidth="5" />
      <path d="M 120 45 L 135 55" fill="none" stroke="#e2e8f0" strokeWidth="5" />

      {/* Left Lung (Screen Left) */}
      <path d="M 110 50 C 80 35, 75 80, 80 100 C 90 110, 110 100, 110 80 Z" fill="url(#lungGradient)" stroke="#be185d" strokeWidth="1" />
      {/* Right Lung (Screen Right, drawn with internal branching) */}
      <path d="M 130 50 C 160 35, 165 80, 160 100 C 150 110, 130 100, 130 80 Z" fill="url(#lungGradient)" stroke="#be185d" strokeWidth="1" opacity="0.6" />
      <path d="M 135 55 L 145 65 M 140 60 L 150 55 M 145 65 L 155 75 M 145 65 L 140 80 M 155 75 L 160 85" fill="none" stroke="#e2e8f0" strokeWidth="1.5" strokeLinecap="round" />

      {/* Diaphragm */}
      <path d="M 70 105 Q 120 95 170 105" fill="none" stroke="#fca5a5" strokeWidth="3" />

      {/* ── Labels ── */}
      <line x1="120" y1="25" x2="80" y2="25" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="60" y="27" textAnchor="middle" fontSize="6" fontWeight="700" fill="#e2e8f0" filter="url(#lblGlow)">{l.trachea}</text>

      <line x1="135" y1="55" x2="175" y2="35" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="190" y="34" textAnchor="middle" fontSize="6" fontWeight="700" fill="#e2e8f0" filter="url(#lblGlow)">{l.bronchi}</text>

      <line x1="155" y1="75" x2="190" y2="75" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="205" y="77" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fbcfe8" filter="url(#lblGlow)">{l.alveoli}</text>

      <line x1="120" y1="100" x2="120" y2="120" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <rect x="95" y="120" width="50" height="12" rx="6" fill="rgba(0,0,0,0.5)" />
      <text x="120" y="128.5" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fca5a5" filter="url(#lblGlow)">{l.diaphragm}</text>
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
          <stop offset="0%" stopColor="#172554" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>
        <LabelGlow />
      </defs>
      <rect width="240" height="140" fill="url(#eyeBg)" rx="12" />
      
      {/* ── Eye Cross-Section ── */}
      <g transform="translate(120, 70)">
        {/* Optic Nerve */}
        <path d="M 35 -5 L 60 -10 L 60 10 L 35 5 Z" fill="#fde047" opacity="0.8" />
        
        {/* Sclera & Retina */}
        <circle cx="0" cy="0" r="35" fill="#f8fafc" />
        <path d="M -15 -31.6 A 33 33 0 1 1 -15 31.6" fill="none" stroke="#f87171" strokeWidth="2" /> {/* Retina */}
        
        {/* Cornea */}
        <path d="M -25 -25 A 25 25 0 0 0 -25 25 A 35 35 0 0 1 -25 -25 Z" fill="#bae6fd" opacity="0.4" />
        
        {/* Iris */}
        <path d="M -22 -15 L -26 -5 M -22 15 L -26 5" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />
        
        {/* Lens */}
        <ellipse cx="-15" cy="0" rx="4" ry="12" fill="#e0f2fe" opacity="0.8" />
      </g>

      {/* ── Labels ── */}
      <line x1="85" y1="70" x2="50" y2="40" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="45" y="37" textAnchor="middle" fontSize="6" fontWeight="700" fill="#bae6fd" filter="url(#lblGlow)">{l.cornea}</text>

      <line x1="105" y1="70" x2="80" y2="105" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="75" y="112" textAnchor="middle" fontSize="6" fontWeight="700" fill="#e0f2fe" filter="url(#lblGlow)">{l.lens}</text>

      <line x1="94" y1="60" x2="60" y2="60" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="45" y="62" textAnchor="middle" fontSize="6" fontWeight="700" fill="#60a5fa" filter="url(#lblGlow)">{l.iris}</text>

      <line x1="150" y1="50" x2="180" y2="30" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="195" y="28" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fca5a5" filter="url(#lblGlow)">{l.retina}</text>

      <line x1="165" y1="70" x2="195" y2="70" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="215" y="72" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fef08a" filter="url(#lblGlow)">{l.opticNerve}</text>
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
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <LabelGlow />
      </defs>
      <rect width="240" height="140" fill="url(#earBg)" rx="12" />
      
      {/* Sound waves */}
      <path d="M 20 55 A 15 15 0 0 1 20 85 M 30 50 A 25 25 0 0 1 30 90 M 40 45 A 35 35 0 0 1 40 95" fill="none" stroke="#60a5fa" strokeWidth="1.5" opacity="0.5" />

      {/* ── Anatomy Graphic ── */}
      <g strokeLinejoin="round">
        {/* Outer Ear */}
        <path d="M 65 40 C 50 30, 45 60, 50 70 C 45 80, 50 95, 65 95 C 75 95, 70 80, 70 75" fill="none" stroke="#fca5a5" strokeWidth="4" strokeLinecap="round" />
        
        {/* Ear Canal */}
        <path d="M 68 65 L 110 65 M 68 80 L 110 80" fill="none" stroke="#fca5a5" strokeWidth="2" />
        
        {/* Eardrum */}
        <line x1="110" y1="62" x2="110" y2="83" stroke="#fef08a" strokeWidth="2.5" />
        
        {/* Ossicles */}
        <path d="M 112 72 L 120 70 L 125 75 L 132 72" fill="none" stroke="#cbd5e1" strokeWidth="2.5" />
        
        {/* Cochlea (Snail shell) */}
        <path d="M 135 72 C 135 60, 150 60, 150 72 C 150 80, 140 80, 140 72 C 140 68, 145 68, 145 72" fill="none" stroke="#a78bfa" strokeWidth="3" />
        
        {/* Semicircular canals (Balance) */}
        <path d="M 135 72 C 130 55, 145 50, 140 65" fill="none" stroke="#a78bfa" strokeWidth="2" />
        
        {/* Auditory Nerve */}
        <path d="M 152 75 L 180 75" fill="none" stroke="#fde047" strokeWidth="4" />
      </g>

      {/* ── Labels ── */}
      <line x1="55" y1="45" x2="80" y2="25" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="95" y="22" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fca5a5" filter="url(#lblGlow)">{l.outerEar}</text>

      <line x1="110" y1="85" x2="110" y2="115" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="110" y="123" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fef08a" filter="url(#lblGlow)">{l.earDrum}</text>

      <line x1="122" y1="68" x2="140" y2="40" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="155" y="38" textAnchor="middle" fontSize="6" fontWeight="700" fill="#cbd5e1" filter="url(#lblGlow)">{l.ossicles}</text>

      <line x1="145" y1="80" x2="145" y2="105" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="145" y="113" textAnchor="middle" fontSize="6" fontWeight="700" fill="#a78bfa" filter="url(#lblGlow)">{l.cochlea}</text>

      <line x1="170" y1="72" x2="195" y2="55" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="210" y="52" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fde047" filter="url(#lblGlow)">{l.auditoryNerve}</text>
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
          <stop offset="0%" stopColor="#064e3b" />
          <stop offset="100%" stopColor="#022c22" />
        </linearGradient>
        <LabelGlow />
      </defs>
      <rect width="240" height="140" fill="url(#nutritionBg)" rx="12" />
      
      {/* ── Pyramid Graphic ── */}
      <g transform="translate(120, 20)">
        {/* Tier 1 (Base): Water & Carbs */}
        <polygon points="-80,100 80,100 64,80 -64,80" fill="#b45309" stroke="#1e293b" strokeWidth="1" />
        <text x="-30" y="93" textAnchor="middle" fontSize="10">🍞</text>
        <text x="0" y="93" textAnchor="middle" fontSize="10">💧</text>
        <text x="30" y="93" textAnchor="middle" fontSize="10">🍚</text>

        {/* Tier 2: Fruits & Veggies (Vitamins/Minerals) */}
        <polygon points="-64,80 64,80 44,55 -44,55" fill="#15803d" stroke="#1e293b" strokeWidth="1" />
        <text x="-20" y="72" textAnchor="middle" fontSize="10">🥦</text>
        <text x="20" y="72" textAnchor="middle" fontSize="10">🍎</text>

        {/* Tier 3: Proteins & Fats */}
        <polygon points="-44,55 44,55 20,25 -20,25" fill="#1d4ed8" stroke="#1e293b" strokeWidth="1" />
        <text x="-12" y="45" textAnchor="middle" fontSize="10">🥩</text>
        <text x="12" y="45" textAnchor="middle" fontSize="10">🧀</text>

        {/* Tier 4 (Top): Sugar & Sweets */}
        <polygon points="-20,25 20,25 0,0" fill="#be185d" stroke="#1e293b" strokeWidth="1" />
        <text x="0" y="20" textAnchor="middle" fontSize="8">🍬</text>
      </g>

      {/* ── Labels ── */}
      <line x1="80" y1="110" x2="50" y2="110" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="30" y="112" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#fcd34d" filter="url(#lblGlow)">{l.carbs} / {l.water}</text>

      <line x1="170" y1="85" x2="195" y2="85" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="215" y="87" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#86efac" filter="url(#lblGlow)">{l.vitamins}</text>

      <line x1="90" y1="60" x2="60" y2="60" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="35" y="62" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#93c5fd" filter="url(#lblGlow)">{l.proteins} / {l.fats}</text>

      <line x1="140" y1="35" x2="180" y2="25" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="200" y="23" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#f9a8d4" filter="url(#lblGlow)">{l.sugar}</text>
    </svg>
  );
});
