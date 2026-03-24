"use client";
// ─── SystemsSvg — Human body systems illustrations ─────────────────────────
// Exports:
//   CirculationSvg    — circulatory system (arteries, veins, capillaries)
//   ImmuneSystemSvg   — immune system (antibodies, white blood cells, vaccine)
//   NervousSystemSvg  — nervous system (neuron, synapse, axon)
//   BrainRegionsSvg   — brain regions (cerebrum, cerebellum, brainstem)
//   HormoneSvg        — endocrine system (insulin, adrenaline, thyroid)
//   ReproductionSvg   — reproduction (egg, sperm, embryo)
//
// TODO: Replace placeholder SVGs with detailed illustrations

import { memo } from "react";

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
          <stop offset="0%" stopColor="#450a0a" />
          <stop offset="100%" stopColor="#7f1d1d" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#circSysBg)" rx="12" />
      {/* TODO: detailed circulatory system illustration */}
      <text x="120" y="60" textAnchor="middle" fontSize="32">❤️</text>
      <text x="120" y="85" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fca5a5">{l.title}</text>
    </svg>
  );
});

// ─── IMMUNE SYSTEM ────────────────────────────────────────────────────────

const IMMUNE_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Immune System", antibodies: "Antibodies", whiteBloodCells: "White Blood Cells", vaccine: "Vaccine", pathogen: "Pathogen", lymphNode: "Lymph Node" },
  de: { title: "Immunsystem", antibodies: "Antikörper", whiteBloodCells: "Weiße Blutkörperchen", vaccine: "Impfstoff", pathogen: "Krankheitserreger", lymphNode: "Lymphknoten" },
  hu: { title: "Immunrendszer", antibodies: "Antitestek", whiteBloodCells: "Fehérvérsejtek", vaccine: "Vakcina", pathogen: "Kórokozó", lymphNode: "Nyirokcsomó" },
  ro: { title: "Sistemul imunitar", antibodies: "Anticorpi", whiteBloodCells: "Globule albe", vaccine: "Vaccin", pathogen: "Patogen", lymphNode: "Ganglion limfatic" },
};

export const ImmuneSystemSvg = memo(function ImmuneSystemSvg({ lang = "de" }: { lang?: string }) {
  const l = IMMUNE_LABELS[lang as keyof typeof IMMUNE_LABELS] || IMMUNE_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="immunSysBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#450a0a" />
          <stop offset="100%" stopColor="#991b1b" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#immunSysBg)" rx="12" />
      {/* TODO: detailed immune system illustration */}
      <text x="120" y="60" textAnchor="middle" fontSize="32">🛡️</text>
      <text x="120" y="85" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fca5a5">{l.title}</text>
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
          <stop offset="0%" stopColor="#450a0a" />
          <stop offset="100%" stopColor="#6b2121" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#nervSysBg)" rx="12" />
      {/* TODO: detailed nervous system illustration */}
      <text x="120" y="60" textAnchor="middle" fontSize="32">⚡</text>
      <text x="120" y="85" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fca5a5">{l.title}</text>
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
          <stop offset="0%" stopColor="#450a0a" />
          <stop offset="100%" stopColor="#881337" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#brainRegBg)" rx="12" />
      {/* TODO: detailed brain regions illustration */}
      <text x="120" y="60" textAnchor="middle" fontSize="32">🧠</text>
      <text x="120" y="85" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fca5a5">{l.title}</text>
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
          <stop offset="0%" stopColor="#450a0a" />
          <stop offset="100%" stopColor="#7c2d12" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#hormSysBg)" rx="12" />
      {/* TODO: detailed endocrine system illustration */}
      <text x="120" y="60" textAnchor="middle" fontSize="32">💉</text>
      <text x="120" y="85" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fca5a5">{l.title}</text>
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
          <stop offset="0%" stopColor="#450a0a" />
          <stop offset="100%" stopColor="#9a3412" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#reproSysBg)" rx="12" />
      {/* TODO: detailed reproduction illustration */}
      <text x="120" y="60" textAnchor="middle" fontSize="32">🧫</text>
      <text x="120" y="85" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fca5a5">{l.title}</text>
    </svg>
  );
});
