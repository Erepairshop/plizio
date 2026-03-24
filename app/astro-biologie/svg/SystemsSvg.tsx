"use client";
// ─── SystemsSvg — Human body systems illustrations ─────────────────────────
// Exports:
//   CirculationSvg    — circulatory system (arteries, veins, capillaries)
//   ImmuneSystemSvg   — immune system (antibodies, white blood cells, vaccine)
//   NervousSystemSvg  — nervous system (neuron, synapse, axon)
//   BrainRegionsSvg   — brain regions (cerebrum, cerebellum, brainstem)
//   HormoneSvg        — endocrine system (insulin, adrenaline, thyroid)
//   ReproductionSvg   — reproduction (egg, sperm, embryo)

import { memo } from "react";

// ─── SHARED DEFS ────────────────────────────────────────────────────────────
const LabelGlow = () => (
  <filter id="lblGlow">
    <feGaussianBlur stdDeviation="1.2" result="b" />
    <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
  </filter>
);

// ─── CIRCULATION ──────────────────────────────────────────────────────────

const CIRC_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Circulatory System", arteries: "Arteries", veins: "Veins", capillaries: "Capillaries", heart: "Heart", blood: "Blood Flow" },
  de: { title: "Kreislaufsystem", arteries: "Arterien", veins: "Venen", capillaries: "Kapillaren", heart: "Herz", blood: "Blutfluss" },
  hu: { title: "Keringési rendszer", arteries: "Artériák", veins: "Vénák", capillaries: "Hajszálerek", heart: "Szív", blood: "Véráramlás" },
  ro: { title: "Sistemul circulator", arteries: "Artere", veins: "Vene", capillaries: "Capilare", heart: "Inimă", blood: "Flux sanguin" },
};

export const CirculationSvg = memo(function CirculationSvg({ lang = "de" }: { lang?: string }) {
  const l = CIRC_LABELS[lang as keyof typeof CIRC_LABELS] || CIRC_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="circSysBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2e1010" />
          <stop offset="100%" stopColor="#1a0505" />
        </linearGradient>
        <LabelGlow />
      </defs>
      <rect width="240" height="140" fill="url(#circSysBg)" rx="12" />
      
      {/* ── Capillary Network (Center) ── */}
      <g strokeWidth="1.5" strokeLinecap="round" opacity="0.8">
        {/* Transition area */}
        <path d="M 110 50 L 130 50 M 110 60 L 130 60 M 110 70 L 130 70 M 110 80 L 130 80 M 110 90 L 130 90" stroke="#a855f7" />
        <path d="M 115 45 L 125 55 M 115 55 L 125 65 M 115 65 L 125 75 M 115 75 L 125 85 M 115 85 L 125 95" stroke="#a855f7" />
        
        {/* Artery side (Red) */}
        <path d="M 80 70 L 110 50 M 80 70 L 110 60 M 80 70 L 110 70 M 80 70 L 110 80 M 80 70 L 110 90" stroke="#ef4444" />
        <path d="M 50 70 L 80 70" stroke="#ef4444" strokeWidth="6" />
        
        {/* Vein side (Blue) */}
        <path d="M 160 70 L 130 50 M 160 70 L 130 60 M 160 70 L 130 70 M 160 70 L 130 80 M 160 70 L 130 90" stroke="#3b82f6" />
        <path d="M 190 70 L 160 70" stroke="#3b82f6" strokeWidth="6" />
      </g>

      {/* ── Heart (Simplified representation) ── */}
      <path d="M 45 65 C 45 55, 30 55, 30 65 C 30 75, 45 85, 45 85 C 45 85, 60 75, 60 65 C 60 55, 45 55, 45 65 Z" fill="#ef4444" stroke="#f87171" strokeWidth="1" />
      <path d="M 45 65 C 45 55, 30 55, 30 65 C 30 75, 45 85, 45 85 L 45 65 Z" fill="#3b82f6" opacity="0.8" /> {/* Blue half for right heart */}

      {/* ── Arrows (Blood Flow) ── */}
      <path d="M 65 65 L 75 65 L 70 62 M 75 65 L 70 68" fill="none" stroke="#fca5a5" strokeWidth="1.5" />
      <path d="M 175 75 L 165 75 L 170 72 M 165 75 L 170 78" fill="none" stroke="#93c5fd" strokeWidth="1.5" />

      {/* ── Labels ── */}
      <line x1="60" y1="70" x2="60" y2="105" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="60" y="115" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fca5a5" filter="url(#lblGlow)">{l.arteries}</text>

      <line x1="180" y1="70" x2="180" y2="105" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="180" y="115" textAnchor="middle" fontSize="6" fontWeight="700" fill="#93c5fd" filter="url(#lblGlow)">{l.veins}</text>

      <line x1="120" y1="50" x2="120" y2="30" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="120" y="25" textAnchor="middle" fontSize="6" fontWeight="700" fill="#d8b4fe" filter="url(#lblGlow)">{l.capillaries}</text>

      <line x1="45" y1="55" x2="45" y2="35" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="45" y="30" textAnchor="middle" fontSize="6" fontWeight="700" fill="#f87171" filter="url(#lblGlow)">{l.heart}</text>

      <rect x="180" y="25" width="50" height="12" rx="6" fill="rgba(0,0,0,0.5)" />
      <text x="205" y="33.5" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#cbd5e1" filter="url(#lblGlow)">{l.blood}</text>
    </svg>
  );
});

// ─── IMMUNE SYSTEM ────────────────────────────────────────────────────────

const IMMUNE_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Immune System", antibodies: "Antibodies", whiteBloodCells: "White Blood Cell", vaccine: "Vaccine", pathogen: "Pathogen", lymphNode: "Lymph Node" },
  de: { title: "Immunsystem", antibodies: "Antikörper", whiteBloodCells: "Weißes Blutkörperchen", vaccine: "Impfstoff", pathogen: "Krankheitserreger", lymphNode: "Lymphknoten" },
  hu: { title: "Immunrendszer", antibodies: "Antitestek", whiteBloodCells: "Fehérvérsejt", vaccine: "Vakcina", pathogen: "Kórokozó", lymphNode: "Nyirokcsomó" },
  ro: { title: "Sistemul imunitar", antibodies: "Anticorpi", whiteBloodCells: "Globulă albă", vaccine: "Vaccin", pathogen: "Patogen", lymphNode: "Ganglion limfatic" },
};

export const ImmuneSystemSvg = memo(function ImmuneSystemSvg({ lang = "de" }: { lang?: string }) {
  const l = IMMUNE_LABELS[lang as keyof typeof IMMUNE_LABELS] || IMMUNE_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="immunSysBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </linearGradient>
        <LabelGlow />
      </defs>
      <rect width="240" height="140" fill="url(#immunSysBg)" rx="12" />
      
      {/* ── Pathogen (Virus/Bacteria) ── */}
      <g transform="translate(180, 70)">
        <circle cx="0" cy="0" r="14" fill="#65a30d" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => (
          <path key={`spike${angle}`} d="M 0 -14 L 3 -18 L -3 -18 Z" fill="#84cc16" transform={`rotate(${angle})`} />
        ))}
      </g>

      {/* ── White Blood Cell (Macrophage) ── */}
      <g transform="translate(90, 70)">
        <path d="M 0 -25 C 20 -30, 40 -10, 45 10 C 50 30, 25 35, 10 30 C -10 25, -30 35, -35 15 C -40 -5, -20 -20, 0 -25 Z" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="2" opacity="0.9" />
        {/* Nucleus */}
        <path d="M 0 -10 C 10 -15, 20 0, 10 10 C 0 20, -15 10, -5 -5 Z" fill="#94a3b8" opacity="0.6" />
        {/* Phagocytosis arm reaching out */}
        <path d="M 35 -5 C 55 -20, 75 -5, 75 0 C 75 5, 55 -5, 45 5" fill="#e2e8f0" />
        <path d="M 40 15 C 60 30, 75 15, 75 10 C 75 5, 60 15, 45 10" fill="#e2e8f0" />
      </g>

      {/* ── Antibodies (Y-shapes) ── */}
      <g stroke="#f472b6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 140 40 L 145 45 L 145 52 M 145 45 L 150 40" />
        <path d="M 155 95 L 150 90 L 150 83 M 150 90 L 145 95" />
        <path d="M 195 45 L 190 50 L 183 50 M 190 50 L 195 55" />
      </g>

      {/* ── Vaccine (Syringe) ── */}
      <g transform="translate(40, 30) rotate(45)">
        <rect x="-5" y="0" width="10" height="20" rx="2" fill="#bae6fd" opacity="0.7" stroke="#38bdf8" strokeWidth="1" />
        <rect x="-5" y="10" width="10" height="10" fill="#38bdf8" />
        <line x1="0" y1="20" x2="0" y2="30" stroke="#94a3b8" strokeWidth="1" />
        <rect x="-8" y="-4" width="16" height="4" fill="#94a3b8" />
        <rect x="-2" y="-12" width="4" height="8" fill="#94a3b8" />
        <circle cx="0" cy="35" r="1.5" fill="#38bdf8" /> {/* drop */}
      </g>

      {/* ── Lymph Node (Bean shape) ── */}
      <path d="M 30 110 C 50 100, 60 120, 50 130 C 30 140, 10 120, 30 110 Z" fill="#fde047" stroke="#eab308" strokeWidth="2" opacity="0.8" />
      <circle cx="35" cy="118" r="3" fill="#ca8a04" opacity="0.5" />
      <circle cx="45" cy="122" r="2" fill="#ca8a04" opacity="0.5" />

      {/* ── Labels ── */}
      <line x1="80" y1="70" x2="60" y2="70" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="35" y="72" textAnchor="middle" fontSize="6" fontWeight="700" fill="#f8fafc" filter="url(#lblGlow)">{l.whiteBloodCells}</text>

      <line x1="180" y1="56" x2="200" y2="30" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="215" y="27" textAnchor="middle" fontSize="6" fontWeight="700" fill="#a3e635" filter="url(#lblGlow)">{l.pathogen}</text>

      <line x1="150" y1="50" x2="160" y2="30" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="165" y="25" textAnchor="middle" fontSize="6" fontWeight="700" fill="#f472b6" filter="url(#lblGlow)">{l.antibodies}</text>

      <line x1="45" y1="120" x2="80" y2="120" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="100" y="122" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fde047" filter="url(#lblGlow)">{l.lymphNode}</text>

      <text x="40" y="55" textAnchor="middle" fontSize="6" fontWeight="700" fill="#7dd3fc" filter="url(#lblGlow)">{l.vaccine}</text>
    </svg>
  );
});

// ─── NERVOUS SYSTEM ───────────────────────────────────────────────────────

const NERVE_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Nervous System", neuron: "Neuron", synapse: "Synapse", axon: "Axon", dendrite: "Dendrite", myelinSheath: "Myelin Sheath" },
  de: { title: "Nervensystem", neuron: "Neuron", synapse: "Synapse", axon: "Axon", dendrite: "Dendrit", myelinSheath: "Myelinscheide" },
  hu: { title: "Idegrendszer", neuron: "Idegsejt", synapse: "Szinapszis", axon: "Axon", dendrite: "Dendrit", myelinSheath: "Mielinhüvely" },
  ro: { title: "Sistemul nervos", neuron: "Neuron", synapse: "Sinapsă", axon: "Axon", dendrite: "Dendrită", myelinSheath: "Teacă de mielină" },
};

export const NervousSystemSvg = memo(function NervousSystemSvg({ lang = "de" }: { lang?: string }) {
  const l = NERVE_LABELS[lang as keyof typeof NERVE_LABELS] || NERVE_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="nervSysBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#020617" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <radialGradient id="glowG" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
        </radialGradient>
        <LabelGlow />
      </defs>
      <rect width="240" height="140" fill="url(#nervSysBg)" rx="12" />
      
      {/* ── Neuron ── */}
      {/* Glow behind soma */}
      <circle cx="60" cy="70" r="30" fill="url(#glowG)" />

      {/* Dendrites */}
      <g stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" fill="none">
        <path d="M 60 70 L 40 40 L 30 35 M 40 40 L 45 25" />
        <path d="M 60 70 L 35 70 L 20 65 M 35 70 L 25 80" />
        <path d="M 60 70 L 45 100 L 35 110 M 45 100 L 55 115" />
        <path d="M 60 70 L 75 45 L 85 35" />
        <path d="M 60 70 L 80 95 L 90 105" />
      </g>

      {/* Soma & Nucleus */}
      <path d="M 50 60 C 70 50, 80 70, 70 85 C 50 90, 40 75, 50 60 Z" fill="#0284c7" />
      <circle cx="62" cy="72" r="5" fill="#e0f2fe" />

      {/* Axon */}
      <line x1="75" y1="70" x2="160" y2="70" stroke="#38bdf8" strokeWidth="3" />
      
      {/* Myelin Sheaths */}
      {[85, 105, 125, 145].map(x => (
        <rect key={x} x={x} y="66" width="15" height="8" rx="3" fill="#fde047" stroke="#ca8a04" strokeWidth="1" />
      ))}

      {/* Axon Terminals */}
      <g stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" fill="none">
        <path d="M 160 70 L 175 55 M 160 70 L 180 70 M 160 70 L 175 85" />
      </g>
      <circle cx="175" cy="55" r="2.5" fill="#38bdf8" />
      <circle cx="180" cy="70" r="2.5" fill="#38bdf8" />
      <circle cx="175" cy="85" r="2.5" fill="#38bdf8" />

      {/* ── Synapse Zoom (Circle Inset) ── */}
      <circle cx="205" cy="70" r="25" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
      {/* Pre-synaptic terminal */}
      <path d="M 195 45 C 205 60, 215 60, 225 45" fill="#0284c7" opacity="0.8" />
      {/* Post-synaptic membrane */}
      <path d="M 190 90 C 200 80, 220 80, 230 90" fill="#38bdf8" opacity="0.6" />
      {/* Neurotransmitters */}
      <circle cx="205" cy="65" r="1.5" fill="#fde047" />
      <circle cx="212" cy="68" r="1.5" fill="#fde047" />
      <circle cx="200" cy="72" r="1.5" fill="#fde047" />
      <circle cx="210" cy="75" r="1.5" fill="#fde047" />
      <circle cx="206" cy="80" r="1.5" fill="#fde047" />

      {/* ── Labels ── */}
      <line x1="60" y1="50" x2="70" y2="25" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="80" y="22" textAnchor="middle" fontSize="6" fontWeight="700" fill="#e0f2fe" filter="url(#lblGlow)">{l.neuron}</text>

      <line x1="30" y1="35" x2="30" y2="20" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="30" y="15" textAnchor="middle" fontSize="6" fontWeight="700" fill="#7dd3fc" filter="url(#lblGlow)">{l.dendrite}</text>

      <line x1="115" y1="70" x2="115" y2="95" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="115" y="102" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fde047" filter="url(#lblGlow)">{l.myelinSheath}</text>

      <line x1="140" y1="70" x2="140" y2="45" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="140" y="42" textAnchor="middle" fontSize="6" fontWeight="700" fill="#38bdf8" filter="url(#lblGlow)">{l.axon}</text>

      <line x1="205" y1="95" x2="205" y2="115" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <rect x="180" y="115" width="50" height="12" rx="6" fill="rgba(0,0,0,0.6)" />
      <text x="205" y="123.5" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fde047" filter="url(#lblGlow)">{l.synapse}</text>
    </svg>
  );
});

// ─── BRAIN REGIONS ────────────────────────────────────────────────────────

const BRAIN_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Brain Regions", cerebrum: "Cerebrum", cerebellum: "Cerebellum", brainstem: "Brainstem", frontalLobe: "Frontal Lobe", temporalLobe: "Temporal Lobe" },
  de: { title: "Gehirnregionen", cerebrum: "Großhirn", cerebellum: "Kleinhirn", brainstem: "Hirnstamm", frontalLobe: "Frontallappen", temporalLobe: "Temporallappen" },
  hu: { title: "Agyi régiók", cerebrum: "Nagyagy", cerebellum: "Kisagy", brainstem: "Agytörzs", frontalLobe: "Homloklebeny", temporalLobe: "Halántéklebeny" },
  ro: { title: "Regiunile creierului", cerebrum: "Cerebrum", cerebellum: "Cerebel", brainstem: "Trunchi cerebral", frontalLobe: "Lob frontal", temporalLobe: "Lob temporal" },
};

export const BrainRegionsSvg = memo(function BrainRegionsSvg({ lang = "de" }: { lang?: string }) {
  const l = BRAIN_LABELS[lang as keyof typeof BRAIN_LABELS] || BRAIN_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="brainRegBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2e1065" />
          <stop offset="100%" stopColor="#4c1d95" />
        </linearGradient>
        <LabelGlow />
      </defs>
      <rect width="240" height="140" fill="url(#brainRegBg)" rx="12" />
      
      {/* ── Brain Profile ── */}
      <g transform="translate(120, 70)">
        {/* Brainstem */}
        <path d="M -5 20 C -5 40, -15 50, -10 60 L 10 60 C 15 50, 5 40, 5 20 Z" fill="#93c5fd" />
        
        {/* Cerebellum */}
        <path d="M 10 15 C 40 10, 45 40, 20 45 C 5 45, 0 30, 10 15 Z" fill="#fca5a5" />
        {/* Cerebellum folds */}
        <path d="M 15 20 Q 30 25 20 35 M 10 30 Q 25 35 15 40" fill="none" stroke="#ef4444" strokeWidth="1" />

        {/* Cerebrum - Temporal Lobe (bottom middle) */}
        <path d="M -20 5 C 10 5, 15 25, 0 30 C -20 35, -30 20, -20 5 Z" fill="#fde047" />
        
        {/* Cerebrum - Occipital Lobe (back) */}
        <path d="M -5 -20 C 35 -15, 45 10, 25 20 C 10 20, 0 5, -5 -20 Z" fill="#86efac" />
        
        {/* Cerebrum - Parietal Lobe (top back) */}
        <path d="M -20 -35 C 10 -45, 40 -15, 20 0 C 0 10, -15 -5, -20 -35 Z" fill="#d8b4fe" />

        {/* Cerebrum - Frontal Lobe (front) */}
        <path d="M -20 -35 C -60 -30, -60 15, -30 25 C -15 15, -10 -10, -20 -35 Z" fill="#fb923c" />

        {/* Brain folds (Sulci/Gyri) */}
        <g stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" fill="none" strokeLinecap="round">
          <path d="M -40 -10 Q -30 -20 -20 -10 Q -10 0 -20 10" />
          <path d="M -30 -20 Q -15 -30 0 -20" />
          <path d="M 10 -25 Q 20 -15 10 -5" />
          <path d="M 5 5 Q 20 15 5 20" />
          <path d="M -15 15 Q -5 25 -15 25" />
        </g>
      </g>

      {/* ── Labels ── */}
      <line x1="90" y1="50" x2="65" y2="30" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="50" y="27" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fdba74" filter="url(#lblGlow)">{l.frontalLobe}</text>

      <line x1="110" y1="85" x2="75" y2="105" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="60" y="110" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fef08a" filter="url(#lblGlow)">{l.temporalLobe}</text>

      <line x1="145" y1="95" x2="185" y2="105" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="200" y="108" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fca5a5" filter="url(#lblGlow)">{l.cerebellum}</text>

      <line x1="120" y1="110" x2="120" y2="125" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="120" y="133" textAnchor="middle" fontSize="6" fontWeight="700" fill="#93c5fd" filter="url(#lblGlow)">{l.brainstem}</text>

      {/* Cerebrum bracket */}
      <path d="M 80 20 Q 120 -5 150 35" fill="none" stroke="#d8b4fe" strokeWidth="1" strokeDasharray="2 2" />
      <text x="120" y="15" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#d8b4fe" filter="url(#lblGlow)">{l.cerebrum}</text>
    </svg>
  );
});

// ─── HORMONE / ENDOCRINE ──────────────────────────────────────────────────

const HORMONE_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Endocrine System", insulin: "Insulin", adrenaline: "Adrenaline", thyroid: "Thyroid", pituitary: "Pituitary Gland", pancreas: "Pancreas" },
  de: { title: "Hormonsystem", insulin: "Insulin", adrenaline: "Adrenalin", thyroid: "Schilddrüse", pituitary: "Hypophyse", pancreas: "Bauchspeicheldrüse" },
  hu: { title: "Hormonrendszer", insulin: "Inzulin", adrenaline: "Adrenalin", thyroid: "Pajzsmirigy", pituitary: "Agyalapi mirigy", pancreas: "Hasnyálmirigy" },
  ro: { title: "Sistemul endocrin", insulin: "Insulină", adrenaline: "Adrenalină", thyroid: "Tiroidă", pituitary: "Glandă pituitară", pancreas: "Pancreas" },
};

export const HormoneSvg = memo(function HormoneSvg({ lang = "de" }: { lang?: string }) {
  const l = HORMONE_LABELS[lang as keyof typeof HORMONE_LABELS] || HORMONE_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="hormSysBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#172554" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <LabelGlow />
      </defs>
      <rect width="240" height="140" fill="url(#hormSysBg)" rx="12" />
      
      {/* ── Human Outline ── */}
      <path d="M 120 15 C 110 15, 105 25, 105 35 C 105 45, 115 50, 115 55 L 105 60 C 90 65, 80 80, 80 100 L 80 135 L 160 135 L 160 100 C 160 80, 150 65, 135 60 L 125 55 C 125 50, 135 45, 135 35 C 135 25, 130 15, 120 15 Z" fill="none" stroke="#334155" strokeWidth="2" strokeDasharray="3 3" />

      {/* ── Glands ── */}
      {/* Pituitary (Brain) */}
      <circle cx="120" cy="35" r="2.5" fill="#fcd34d" />
      
      {/* Thyroid (Neck) */}
      <path d="M 116 52 C 116 50, 120 54, 124 52 C 126 55, 122 58, 120 56 C 118 58, 114 55, 116 52 Z" fill="#ef4444" />
      
      {/* Adrenal Glands (on top of kidneys) */}
      <path d="M 105 85 Q 110 80 112 85 Z" fill="#f97316" />
      <path d="M 135 85 Q 130 80 128 85 Z" fill="#f97316" />
      {/* Kidneys (context) */}
      <ellipse cx="108" cy="92" rx="4" ry="7" fill="#64748b" opacity="0.5" />
      <ellipse cx="132" cy="92" rx="4" ry="7" fill="#64748b" opacity="0.5" />

      {/* Pancreas */}
      <path d="M 115 75 Q 125 70 135 80 Q 125 78 115 75 Z" fill="#a3e635" />

      {/* ── Chemical Structures (Abstract) ── */}
      <g stroke="#fcd34d" strokeWidth="1" fill="none" transform="translate(40, 40)">
        <polygon points="0,0 10,-5 20,0 20,10 10,15 0,10" />
        <line x1="20" y1="10" x2="28" y2="15" />
        <circle cx="28" cy="15" r="1.5" fill="#fcd34d" />
      </g>
      <g stroke="#a3e635" strokeWidth="1" fill="none" transform="translate(180, 90)">
        <polygon points="0,0 10,-5 20,0 20,10 10,15 0,10" />
        <circle cx="10" cy="5" r="1.5" fill="#a3e635" />
      </g>

      {/* ── Labels ── */}
      <line x1="118" y1="35" x2="80" y2="25" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="65" y="22" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fde047" filter="url(#lblGlow)">{l.pituitary}</text>

      <line x1="123" y1="54" x2="160" y2="50" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="175" y="48" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fca5a5" filter="url(#lblGlow)">{l.thyroid}</text>

      <line x1="130" y1="78" x2="165" y2="78" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="180" y="80" textAnchor="middle" fontSize="6" fontWeight="700" fill="#bef264" filter="url(#lblGlow)">{l.pancreas}</text>
      <text x="180" y="87" textAnchor="middle" fontSize="5" fill="#a3e635">({l.insulin})</text>

      <line x1="110" y1="83" x2="80" y2="75" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="60" y="73" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fdba74" filter="url(#lblGlow)">{l.adrenaline}</text>
    </svg>
  );
});

// ─── REPRODUCTION ─────────────────────────────────────────────────────────

const REPRO_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Reproduction", egg: "Egg Cell", sperm: "Sperm Cell", embryo: "Embryo", fertilization: "Fertilization", zygote: "Zygote" },
  de: { title: "Fortpflanzung", egg: "Eizelle", sperm: "Samenzelle", embryo: "Embryo", fertilization: "Befruchtung", zygote: "Zygote" },
  hu: { title: "Szaporodás", egg: "Petesejt", sperm: "Hímivarsejt", embryo: "Embrió", fertilization: "Megtermékenyítés", zygote: "Zigóta" },
  ro: { title: "Reproducere", egg: "Ovul", sperm: "Spermatozoid", embryo: "Embrion", fertilization: "Fecundare", zygote: "Zigot" },
};

export const ReproductionSvg = memo(function ReproductionSvg({ lang = "de" }: { lang?: string }) {
  const l = REPRO_LABELS[lang as keyof typeof REPRO_LABELS] || REPRO_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="reproSysBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2e1065" />
          <stop offset="100%" stopColor="#831843" />
        </linearGradient>
        <marker id="arrowRepro" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#fbcfe8" />
        </marker>
        <LabelGlow />
      </defs>
      <rect width="240" height="140" fill="url(#reproSysBg)" rx="12" />
      
      {/* ── Egg Cell (Left) ── */}
      <g transform="translate(60, 70)">
        {/* Zona pellucida (outer layer) */}
        <circle cx="0" cy="0" r="28" fill="rgba(244,114,182,0.2)" stroke="#f472b6" strokeWidth="2" strokeDasharray="3 3" />
        {/* Cytoplasm */}
        <circle cx="0" cy="0" r="24" fill="#be185d" />
        {/* Nucleus */}
        <circle cx="5" cy="-5" r="8" fill="#fbcfe8" opacity="0.8" />
        <circle cx="3" cy="-7" r="3" fill="#831843" />
      </g>

      {/* ── Sperm Cells ── */}
      <g fill="#93c5fd" stroke="#93c5fd" strokeWidth="1.5">
        {/* Sperm 1 (Fertilizing) */}
        <path d="M 28 75 Q 15 80 5 70" fill="none" />
        <ellipse cx="30" cy="74" rx="4" ry="2.5" transform="rotate(-15 30 74)" />
        
        {/* Sperm 2 */}
        <path d="M 20 40 Q 5 45 10 30" fill="none" />
        <ellipse cx="22" cy="41" rx="4" ry="2.5" transform="rotate(25 22 41)" />
        
        {/* Sperm 3 */}
        <path d="M 25 105 Q 15 95 5 110" fill="none" />
        <ellipse cx="26" cy="103" rx="4" ry="2.5" transform="rotate(-40 26 103)" />
      </g>

      {/* ── Arrow to Zygote ── */}
      <path d="M 100 70 L 140 70" fill="none" stroke="#fbcfe8" strokeWidth="2" markerEnd="url(#arrowRepro)" />
      <text x="120" y="65" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fbcfe8" filter="url(#lblGlow)">{l.fertilization}</text>

      {/* ── Zygote/Embryo (Right) ── */}
      <g transform="translate(180, 70)">
        <circle cx="0" cy="0" r="24" fill="rgba(244,114,182,0.2)" stroke="#f472b6" strokeWidth="2" />
        {/* Cleavage stage cells (4 cells) */}
        <circle cx="-8" cy="-8" r="10" fill="#be185d" stroke="#fbcfe8" strokeWidth="0.5" />
        <circle cx="8" cy="-8" r="10" fill="#be185d" stroke="#fbcfe8" strokeWidth="0.5" />
        <circle cx="-8" cy="8" r="10" fill="#be185d" stroke="#fbcfe8" strokeWidth="0.5" />
        <circle cx="8" cy="8" r="10" fill="#be185d" stroke="#fbcfe8" strokeWidth="0.5" />
        {/* Nuclei */}
        <circle cx="-8" cy="-8" r="2" fill="#fbcfe8" />
        <circle cx="8" cy="-8" r="2" fill="#fbcfe8" />
        <circle cx="-8" cy="8" r="2" fill="#fbcfe8" />
        <circle cx="8" cy="8" r="2" fill="#fbcfe8" />
      </g>

      {/* ── Labels ── */}
      <line x1="20" y1="41" x2="20" y2="25" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="20" y="20" textAnchor="middle" fontSize="6" fontWeight="700" fill="#93c5fd" filter="url(#lblGlow)">{l.sperm}</text>

      <line x1="60" y1="98" x2="60" y2="120" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="60" y="128" textAnchor="middle" fontSize="6" fontWeight="700" fill="#f9a8d4" filter="url(#lblGlow)">{l.egg}</text>

      <line x1="180" y1="94" x2="180" y2="120" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="180" y="128" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fbcfe8" filter="url(#lblGlow)">{l.zygote} / {l.embryo}</text>
    </svg>
  );
});
