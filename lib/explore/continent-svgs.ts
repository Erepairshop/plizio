// Stylized continent SVG previews for POI "explore" block.
// Brand: ocean gradient bg + green continent silhouette, 200x140 viewBox.

const BG = `<defs><linearGradient id="o" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3aa0d8"/><stop offset="1" stop-color="#1d5a86"/></linearGradient></defs><rect width="200" height="140" fill="url(#o)" rx="10"/>`;
const LAND = "#6BCF7F";
const STROKE = `stroke="#ffffff" stroke-width="0.8" stroke-opacity="0.55" stroke-linejoin="round"`;

export const CONTINENT_SVG: Record<string, string> = {
  "europe-map": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 140" role="img" aria-label="Európa">${BG}<g fill="${LAND}" ${STROKE}>
<path d="M40 50 Q35 40 45 38 L60 36 Q70 30 80 34 L92 30 Q100 28 105 34 L120 30 Q132 32 138 40 L150 38 Q160 42 158 50 L150 56 Q155 62 148 66 L140 70 Q142 78 132 80 L120 82 Q115 90 105 88 L92 92 Q85 96 78 92 L70 88 Q60 92 55 86 L48 80 Q40 78 42 70 L44 62 Q38 56 40 50 Z"/>
<path d="M48 32 Q55 26 62 30 L65 36 L58 38 Q52 36 48 32 Z"/>
<circle cx="72" cy="98" r="2.5"/><circle cx="110" cy="100" r="2"/>
</g></svg>`,

  "northamerica-map": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 140" role="img" aria-label="Észak-Amerika">${BG}<g fill="${LAND}" ${STROKE}>
<path d="M35 38 Q30 30 42 28 L70 26 Q90 24 110 28 L130 30 Q145 32 150 42 L148 56 Q140 64 130 62 L120 68 Q115 78 108 76 L100 82 Q95 92 90 96 L88 108 Q82 116 78 110 L74 100 Q68 92 70 84 L62 78 Q52 76 50 68 L42 60 Q34 54 36 46 L35 38 Z"/>
<path d="M150 38 Q160 36 165 42 L162 50 Q156 52 152 48 Z"/>
<circle cx="120" cy="95" r="2"/>
</g></svg>`,

  "southamerica-map": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 140" role="img" aria-label="Dél-Amerika">${BG}<g fill="${LAND}" ${STROKE}>
<path d="M90 22 Q100 18 115 22 L125 30 Q132 40 128 50 L122 60 Q118 72 112 80 L108 92 Q104 104 100 112 L96 120 Q92 124 88 118 L86 108 Q82 96 84 86 L80 76 Q76 64 82 56 L86 44 Q84 34 88 28 L90 22 Z"/>
</g></svg>`,

  "africa-map": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 140" role="img" aria-label="Afrika">${BG}<g fill="${LAND}" ${STROKE}>
<path d="M70 28 Q85 22 105 24 L125 26 Q140 28 145 38 L142 50 Q135 58 128 56 L130 66 Q125 76 120 80 L115 92 Q108 104 100 110 L92 116 Q86 118 82 112 L78 100 Q72 90 74 80 L68 72 Q60 64 64 54 L68 42 Q66 34 70 28 Z"/>
</g></svg>`,

  "asia-map": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 140" role="img" aria-label="Ázsia">${BG}<g fill="${LAND}" ${STROKE}>
<path d="M30 38 Q42 28 60 30 L85 28 Q110 26 130 32 L155 34 Q172 38 178 48 L175 58 Q165 64 158 62 L168 70 Q172 80 162 82 L150 84 Q140 90 132 86 L128 96 Q122 102 116 96 L108 92 Q102 100 96 94 L90 86 Q80 88 72 82 L62 76 Q52 74 48 66 L38 60 Q30 52 32 44 L30 38 Z"/>
<path d="M118 96 Q124 108 120 116 Q114 118 112 110 L114 100 Z"/>
<circle cx="160" cy="100" r="2"/><circle cx="170" cy="106" r="1.8"/>
</g></svg>`,

  "oceania-map": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 140" role="img" aria-label="Óceánia">${BG}<g fill="${LAND}" ${STROKE}>
<path d="M70 68 Q80 60 100 62 L130 64 Q145 68 148 78 L144 90 Q135 96 122 94 L100 96 Q82 96 72 88 L66 78 Q66 72 70 68 Z"/>
<path d="M155 110 Q162 106 168 112 L164 118 Q158 118 155 114 Z"/>
<circle cx="50" cy="50" r="2"/><circle cx="172" cy="64" r="2.2"/><circle cx="160" cy="80" r="1.6"/><circle cx="178" cy="92" r="1.5"/><circle cx="40" cy="100" r="1.8"/>
</g></svg>`,
};

export function getContinentSvg(slug: string): string | null {
  return CONTINENT_SVG[slug] ?? null;
}
