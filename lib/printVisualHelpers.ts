/**
 * Static HTML renderers for visual block types in print mode.
 * Used by handlePrintBlank() in mathtest/page.tsx.
 *
 * Each function returns an HTML string array (lines) for the given visual sub-question.
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
type P = Record<string, any>;
type CC = string | undefined; // country code

function aLabel(cc: CC): string {
  if (cc === 'DE' || cc === 'AT' || cc === 'CH') return 'Deine Antwort';
  if (cc === 'HU') return 'Válaszod';
  if (cc === 'RO') return 'Răspunsul tău';
  return 'Your answer';
}

function blankLine(cc: CC, unit?: string): string {
  const u = unit ? ` ${unit}` : '';
  return `<div style="text-align:center; font-size:11pt; margin-top:4px;"><b>${aLabel(cc)}:</b> <span class="blank-line">________</span>${u}</div>`;
}

// ─── CLOCK SVG (shared by uhrzeit, g1-clock) ─────────────────────────────
function clockSvg(hour: number, minute: number): string {
  const hAngle = ((hour % 12) + minute / 60) * 30 - 90;
  const mAngle = minute * 6 - 90;
  const hRad = hAngle * Math.PI / 180;
  const mRad = mAngle * Math.PI / 180;
  const lines: string[] = [];
  lines.push(`<div style="text-align:center;"><svg width="100" height="100" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="white" stroke="#374151" stroke-width="2"/>`);
  for (let i = 1; i <= 12; i++) {
    const a = (i * 30 - 90) * Math.PI / 180;
    lines.push(`<text x="${50 + 36 * Math.cos(a)}" y="${50 + 36 * Math.sin(a)}" text-anchor="middle" dominant-baseline="central" font-size="9" font-weight="700" fill="#374151">${i}</text>`);
  }
  lines.push(`<line x1="50" y1="50" x2="${50 + 22 * Math.cos(hRad)}" y2="${50 + 22 * Math.sin(hRad)}" stroke="#1a1a2e" stroke-width="3" stroke-linecap="round"/>`);
  lines.push(`<line x1="50" y1="50" x2="${50 + 32 * Math.cos(mRad)}" y2="${50 + 32 * Math.sin(mRad)}" stroke="#374151" stroke-width="2" stroke-linecap="round"/>`);
  lines.push('<circle cx="50" cy="50" r="3" fill="#1a1a2e"/></svg></div>');
  return lines.join('');
}

// ─── NUMBER LINE SVG ─────────────────────────────────────────────────────
function numberLineSvg(min: number, max: number, step: number, marked?: number, showArrow = true): string {
  const W = 260, H = 50, pad = 20;
  const lineW = W - 2 * pad;
  const ticks = Math.round((max - min) / step) + 1;
  const lines: string[] = [];
  lines.push(`<div style="text-align:center;"><svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">`);
  // Main line
  lines.push(`<line x1="${pad}" y1="25" x2="${W - pad}" y2="25" stroke="#374151" stroke-width="1.5"/>`);
  // Ticks + labels
  for (let i = 0; i < ticks; i++) {
    const x = pad + (i / (ticks - 1)) * lineW;
    const val = min + i * step;
    lines.push(`<line x1="${x}" y1="20" x2="${x}" y2="30" stroke="#374151" stroke-width="1"/>`);
    lines.push(`<text x="${x}" y="42" text-anchor="middle" font-size="8" fill="#374151">${val}</text>`);
  }
  // Arrow marker
  if (marked !== undefined && showArrow) {
    const pos = pad + ((marked - min) / (max - min)) * lineW;
    lines.push(`<polygon points="${pos-5},14 ${pos+5},14 ${pos},20" fill="#ef4444"/>`);
    lines.push(`<text x="${pos}" y="10" text-anchor="middle" font-size="8" font-weight="700" fill="#ef4444">?</text>`);
  }
  lines.push('</svg></div>');
  return lines.join('');
}

// ─── BAR CHART SVG ───────────────────────────────────────────────────────
function barChartSvg(categories: { name?: string; label?: string; value: number }[]): string {
  const W = 220, H = 120, pad = 30, barW = 28;
  const maxVal = Math.max(...categories.map(c => c.value), 1);
  const chartH = H - pad - 20;
  const lines: string[] = [];
  lines.push(`<div style="text-align:center;"><svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">`);
  // Y axis
  lines.push(`<line x1="${pad}" y1="10" x2="${pad}" y2="${H - 20}" stroke="#374151" stroke-width="1"/>`);
  // X axis
  lines.push(`<line x1="${pad}" y1="${H - 20}" x2="${W - 10}" y2="${H - 20}" stroke="#374151" stroke-width="1"/>`);
  categories.forEach((c, i) => {
    const barH = (c.value / maxVal) * chartH;
    const x = pad + 10 + i * (barW + 10);
    const y = H - 20 - barH;
    lines.push(`<rect x="${x}" y="${y}" width="${barW}" height="${barH}" fill="#93c5fd" stroke="#374151" stroke-width="0.5"/>`);
    lines.push(`<text x="${x + barW / 2}" y="${y - 3}" text-anchor="middle" font-size="7" font-weight="700" fill="#374151">${c.value}</text>`);
    lines.push(`<text x="${x + barW / 2}" y="${H - 10}" text-anchor="middle" font-size="7" fill="#374151">${c.name || c.label || ''}</text>`);
  });
  lines.push('</svg></div>');
  return lines.join('');
}

// ─── FRACTION CIRCLE SVG ─────────────────────────────────────────────────
function fractionCircleSvg(num: number, den: number, cx = 40, r = 35): string {
  const lines: string[] = [];
  lines.push(`<svg width="${cx * 2}" height="${cx * 2}" viewBox="0 0 ${cx * 2} ${cx * 2}">`);
  for (let i = 0; i < den; i++) {
    const startA = (i * 360 / den - 90) * Math.PI / 180;
    const endA = ((i + 1) * 360 / den - 90) * Math.PI / 180;
    const x1 = cx + r * Math.cos(startA), y1 = cx + r * Math.sin(startA);
    const x2 = cx + r * Math.cos(endA), y2 = cx + r * Math.sin(endA);
    const large = 360 / den > 180 ? 1 : 0;
    lines.push(`<path d="M${cx},${cx} L${x1},${y1} A${r},${r} 0 ${large},1 ${x2},${y2} Z" fill="${i < num ? '#fbbf24' : '#f3f4f6'}" stroke="#374151" stroke-width="1.5"/>`);
  }
  lines.push('</svg>');
  return lines.join('');
}

// ─── COORDINATE PLANE SVG ────────────────────────────────────────────────
function coordPlaneSvg(pointX: number, pointY: number, range = 5): string {
  const S = 160, pad = 20, cx = S / 2, cy = S / 2;
  const scale = (S - 2 * pad) / (2 * range);
  const lines: string[] = [];
  lines.push(`<div style="text-align:center;"><svg width="${S}" height="${S}" viewBox="0 0 ${S} ${S}">`);
  // Grid
  for (let i = -range; i <= range; i++) {
    const x = cx + i * scale, y = cy - i * scale;
    lines.push(`<line x1="${x}" y1="${pad}" x2="${x}" y2="${S - pad}" stroke="#e5e7eb" stroke-width="0.5"/>`);
    lines.push(`<line x1="${pad}" y1="${y}" x2="${S - pad}" y2="${y}" stroke="#e5e7eb" stroke-width="0.5"/>`);
  }
  // Axes
  lines.push(`<line x1="${pad}" y1="${cy}" x2="${S - pad}" y2="${cy}" stroke="#374151" stroke-width="1.5"/>`);
  lines.push(`<line x1="${cx}" y1="${pad}" x2="${cx}" y2="${S - pad}" stroke="#374151" stroke-width="1.5"/>`);
  // Point
  const px = cx + pointX * scale, py = cy - pointY * scale;
  lines.push(`<circle cx="${px}" cy="${py}" r="4" fill="#ef4444"/>`);
  lines.push(`<text x="${px + 6}" y="${py - 4}" font-size="8" font-weight="700" fill="#ef4444">(${pointX}, ${pointY})</text>`);
  lines.push('</svg></div>');
  return lines.join('');
}

// ─── PIE CHART SVG ───────────────────────────────────────────────────────
function pieChartSvg(slices: { label: string; value: number; color: string }[], targetIndex: number): string {
  const R = 50, cx = 60, cy = 60;
  const total = slices.reduce((s, sl) => s + sl.value, 0);
  let startAngle = -90;
  const lines: string[] = [];
  lines.push(`<div style="text-align:center;"><svg width="120" height="120" viewBox="0 0 120 120">`);
  slices.forEach((sl, i) => {
    const sweep = (sl.value / total) * 360;
    const endAngle = startAngle + sweep;
    const startRad = startAngle * Math.PI / 180;
    const endRad = endAngle * Math.PI / 180;
    const x1 = cx + R * Math.cos(startRad), y1 = cy + R * Math.sin(startRad);
    const x2 = cx + R * Math.cos(endRad), y2 = cy + R * Math.sin(endRad);
    const large = sweep > 180 ? 1 : 0;
    const fill = i === targetIndex ? '#fbbf24' : (i % 2 === 0 ? '#e5e7eb' : '#d1d5db');
    lines.push(`<path d="M${cx},${cy} L${x1},${y1} A${R},${R} 0 ${large},1 ${x2},${y2} Z" fill="${fill}" stroke="#374151" stroke-width="1"/>`);
    // Label
    const midRad = (startAngle + sweep / 2) * Math.PI / 180;
    const lx = cx + (R * 0.6) * Math.cos(midRad), ly = cy + (R * 0.6) * Math.sin(midRad);
    lines.push(`<text x="${lx}" y="${ly}" text-anchor="middle" dominant-baseline="central" font-size="7" font-weight="${i === targetIndex ? '900' : '600'}" fill="#374151">${sl.value}%</text>`);
    startAngle = endAngle;
  });
  lines.push('</svg></div>');
  return lines.join('');
}

// ─── TRIANGLE SVG ────────────────────────────────────────────────────────
function triangleSvg(a?: number, b?: number, sides?: { a?: number; b?: number; c?: number }): string {
  const lines: string[] = [];
  lines.push('<div style="text-align:center;"><svg width="120" height="90" viewBox="0 0 120 90">');
  lines.push('<polygon points="60,10 10,80 110,80" fill="none" stroke="#374151" stroke-width="1.5"/>');
  if (a !== undefined) lines.push(`<text x="30" y="50" font-size="8" fill="#374151">${a}°</text>`);
  if (b !== undefined) lines.push(`<text x="80" y="50" font-size="8" fill="#374151">${b}°</text>`);
  if (a !== undefined && b !== undefined) lines.push(`<text x="56" y="22" font-size="9" font-weight="700" fill="#ef4444">?</text>`);
  if (sides?.a) lines.push(`<text x="10" y="88" font-size="7" fill="#374151">${sides.a}</text>`);
  if (sides?.b) lines.push(`<text x="100" y="88" font-size="7" fill="#374151">${sides.b}</text>`);
  lines.push('</svg></div>');
  return lines.join('');
}

// ─── CYLINDER SVG ────────────────────────────────────────────────────────
function cylinderSvg(r: number, h: number): string {
  const W = 100, H = 80;
  return `<div style="text-align:center;"><svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
    <ellipse cx="50" cy="18" rx="30" ry="10" fill="none" stroke="#374151" stroke-width="1.5"/>
    <line x1="20" y1="18" x2="20" y2="62" stroke="#374151" stroke-width="1.5"/>
    <line x1="80" y1="18" x2="80" y2="62" stroke="#374151" stroke-width="1.5"/>
    <ellipse cx="50" cy="62" rx="30" ry="10" fill="none" stroke="#374151" stroke-width="1.5"/>
    <text x="85" y="42" font-size="8" fill="#374151">h=${h}</text>
    <text x="50" y="75" font-size="8" fill="#374151" text-anchor="middle">r=${r}</text>
  </svg></div>`;
}

/**
 * Render a visual sub-question to static print HTML.
 * Returns HTML string or empty string if type is not recognized.
 */
export function renderVisualPrintHtml(
  visualType: string | undefined,
  params: P | undefined,
  question: string | undefined,
  cc: CC,
): string {
  if (!params || !visualType) {
    // Fallback: just show question text + blank
    return `<div style="font-size:11pt;">${question || ''}</div>${blankLine(cc)}`;
  }
  const p = params;

  switch (visualType) {
    // ─── Grade 1 ─────────────────────────────────────────────────────────
    case 'g1-clock': {
      return clockSvg(p.hour, p.minute) + blankLine(cc);
    }
    case 'g1-number-line': {
      return numberLineSvg(p.min, p.max, p.step, p.markedValue) + blankLine(cc);
    }
    case 'g1-place-value': {
      const qLabel = cc === 'DE' ? (p.question === 'tens' ? 'Zehner' : p.question === 'ones' ? 'Einer' : 'Zahl') : (p.question === 'tens' ? 'Tens' : p.question === 'ones' ? 'Ones' : 'Number');
      return `<div style="font-size:18pt; font-weight:900; text-align:center; letter-spacing:4px; margin:6px 0;">${p.number}</div><div style="text-align:center; font-size:10pt; color:#6b7280; margin-bottom:4px;">${qLabel} = ?</div>${blankLine(cc)}`;
    }
    case 'g1-grid-count': {
      const grid = p.grid as boolean[][];
      const html: string[] = [];
      html.push('<div style="display:inline-block; margin:4px auto; border:1px solid #d1d5db;">');
      grid.forEach(row => {
        html.push('<div style="display:flex;">');
        row.forEach(filled => {
          html.push(`<div style="width:20px; height:20px; border:1px solid #e5e7eb; background:${filled ? '#93c5fd' : 'white'};"></div>`);
        });
        html.push('</div>');
      });
      html.push('</div>');
      return html.join('') + blankLine(cc);
    }
    case 'g1-sequence': {
      const seq = p.sequence as (number | null)[];
      const display = seq.map(v => v === null ? '___' : String(v)).join(', ');
      return `<div style="font-size:14pt; font-family:monospace; letter-spacing:2px; text-align:center; margin:6px 0;">${display}</div>${blankLine(cc)}`;
    }
    case 'g1-coins': {
      const coins = p.coins as { value: number; count: number }[];
      const coinDisplay = coins.map(c => `${c.count} × ${c.value}${p.currency === '€' ? ' ct' : ''}`).join(' + ');
      return `<div style="font-size:12pt; text-align:center; margin:6px 0;">🪙 ${coinDisplay}</div>${blankLine(cc, p.currency === '€' ? 'ct' : '')}`;
    }
    case 'g1-timeline': {
      const durLabel = cc === 'DE' ? 'Dauer (Stunden)' : cc === 'HU' ? 'Időtartam (óra)' : 'Duration (hours)';
      return `<div style="font-size:12pt; text-align:center; margin:6px 0;">${p.startHour}:00 → ${p.endHour}:00</div><div style="text-align:center; font-size:11pt;"><b>${durLabel}:</b> <span class="blank-line">________</span></div>`;
    }
    case 'g1-fraction': {
      const total = p.totalParts as number;
      const colored = p.coloredParts as number;
      if (p.shape === 'pizza' || p.shape === 'circle') {
        return `<div style="text-align:center;">${fractionCircleSvg(colored, total)}</div>${blankLine(cc)}`;
      }
      // Rectangle
      const html: string[] = [];
      html.push('<div style="display:flex; gap:2px; justify-content:center; margin:6px 0;">');
      for (let i = 0; i < total; i++) {
        html.push(`<div style="width:30px; height:24px; border:1.5px solid #374151; background:${i < colored ? '#fbbf24' : '#f3f4f6'};"></div>`);
      }
      html.push('</div>');
      return html.join('') + blankLine(cc);
    }
    // Simple text-based G1 types
    case 'g1-dots': case 'g1-dice': case 'g1-fingers':
    case 'g1-compare': case 'g1-predecessor': case 'g1-successor':
    case 'g1-addition-pics': case 'g1-subtraction-pics':
    case 'g1-decompose': case 'g1-completion':
    case 'g1-shapes': case 'g1-directions': case 'g1-patterns':
    case 'g1-length': case 'g1-weight': case 'g1-volume':
    case 'g1-shopping': case 'g1-wordproblem': {
      return `<div style="font-size:11pt;">${question || ''}</div>${blankLine(cc)}`;
    }

    // ─── Grade 3 ─────────────────────────────────────────────────────────
    case 'g3-place-value': {
      const qLabel = cc === 'DE'
        ? (p.question === 'hundreds' ? 'Hunderter' : p.question === 'tens' ? 'Zehner' : 'Einer')
        : (p.question === 'hundreds' ? 'Hundreds' : p.question === 'tens' ? 'Tens' : 'Ones');
      return `<div style="font-size:18pt; font-weight:900; text-align:center; letter-spacing:4px; margin:6px 0;">${p.number}</div><div style="text-align:center; font-size:10pt; color:#6b7280;">${qLabel} = ?</div>${blankLine(cc)}`;
    }
    case 'g3-pattern': {
      const seq = p.sequence as string[];
      const blanks = p.blanks as number;
      const shown = seq.slice(0, seq.length - blanks);
      const COLORS: Record<string, string> = { red: '#ef4444', blue: '#3b82f6', green: '#22c55e', yellow: '#eab308', purple: '#a855f7' };
      const html: string[] = ['<div style="display:flex; gap:4px; justify-content:center; margin:6px 0;">'];
      shown.forEach(c => {
        html.push(`<div style="width:24px; height:24px; border-radius:4px; background:${COLORS[c] || '#d1d5db'}; border:1px solid #374151;"></div>`);
      });
      for (let i = 0; i < blanks; i++) {
        html.push('<div style="width:24px; height:24px; border-radius:4px; border:2px dashed #9ca3af; background:white;"></div>');
      }
      html.push('</div>');
      return html.join('') + blankLine(cc);
    }
    case 'g3-scale': {
      return `<div style="text-align:center; font-size:12pt; margin:6px 0;">⚖️ A: <b>${p.weightA} g</b> &nbsp; B: <b>${p.weightB} g</b></div>${blankLine(cc)}`;
    }
    case 'g3-shape': {
      return `<div style="font-size:11pt;">${question || `Shape: ${p.target}`}</div>${blankLine(cc)}`;
    }
    case 'g3-barchart': {
      return barChartSvg(p.categories) + blankLine(cc);
    }
    case 'g3-compose': {
      return `<div style="font-size:12pt; text-align:center; margin:6px 0;"><b>${p.hundreds}</b> H + <b>${p.tens}</b> Z + <b>${p.ones}</b> E = ?</div>${blankLine(cc)}`;
    }
    case 'g3-add-objects': {
      return `<div style="font-size:12pt; text-align:center; margin:6px 0;">${p.icon?.repeat(Math.min(p.groupA, 12))} + ${p.icon?.repeat(Math.min(p.groupB, 12))} = ?</div>${blankLine(cc)}`;
    }
    case 'g3-sub-objects': {
      return `<div style="font-size:12pt; text-align:center; margin:6px 0;">${p.icon?.repeat(Math.min(p.groupA, 12))} − ${p.groupB} = ?</div>${blankLine(cc)}`;
    }
    case 'g3-mul-group': {
      return `<div style="font-size:12pt; text-align:center; margin:6px 0;">${p.groupA} × ${p.groupB} ${p.icon || ''} = ?</div>${blankLine(cc)}`;
    }
    case 'g3-mul-array': {
      const rows = Math.min(p.rows, 8), cols = Math.min(p.cols, 8);
      const html: string[] = ['<div style="display:inline-block; margin:4px auto;">'];
      for (let r = 0; r < rows; r++) {
        html.push('<div style="display:flex; gap:2px;">');
        for (let c = 0; c < cols; c++) html.push('<div style="width:12px; height:12px; border-radius:50%; background:#374151;"></div>');
        html.push('</div>');
      }
      html.push('</div>');
      return `<div style="text-align:center;">${html.join('')}</div><div style="text-align:center; font-size:11pt; margin-top:2px;">${p.rows} × ${p.cols} = ?</div>${blankLine(cc)}`;
    }
    case 'g3-div-share': {
      return `<div style="font-size:12pt; text-align:center; margin:6px 0;">${p.groupA} ${p.icon || '●'} ÷ ${p.groupB} = ?</div>${blankLine(cc)}`;
    }
    case 'g3-nl-sub': {
      const end = p.start - p.stepSize * p.steps;
      return numberLineSvg(Math.min(end, 0), p.start + 2, p.stepSize > 5 ? p.stepSize : 1) + `<div style="text-align:center; font-size:11pt;">${p.start} − ${p.steps} × ${p.stepSize} = ?</div>${blankLine(cc)}`;
    }
    case 'g3-rightangle': {
      const degrees = p.angleType === 'right' ? 90 : p.angleType === 'acute' ? 45 : 135;
      const rad = degrees * Math.PI / 180;
      const svg = `<div style="text-align:center;"><svg width="100" height="70" viewBox="0 0 100 70"><line x1="10" y1="60" x2="90" y2="60" stroke="#374151" stroke-width="1.5"/><line x1="10" y1="60" x2="${10 + 60 * Math.cos(-rad)}" y2="${60 + 60 * Math.sin(-rad)}" stroke="#374151" stroke-width="1.5"/><text x="30" y="54" font-size="9" fill="#374151">?</text></svg></div>`;
      return svg + blankLine(cc);
    }
    case 'g3-perim-concept': {
      const w = p.width, h = p.height;
      return `<div style="text-align:center;"><svg width="140" height="80" viewBox="0 0 140 80"><rect x="20" y="10" width="${Math.min(w * 12, 100)}" height="${Math.min(h * 12, 55)}" fill="none" stroke="#374151" stroke-width="1.5"/><text x="${20 + Math.min(w * 6, 50)}" y="${Math.min(h * 12, 55) + 22}" text-anchor="middle" font-size="8" fill="#374151">${w} cm</text><text x="${Math.min(w * 12, 100) + 28}" y="${10 + Math.min(h * 6, 27)}" font-size="8" fill="#374151">${h} cm</text></svg></div>${blankLine(cc, 'cm')}`;
    }
    case 'g3-area-compare': {
      const sA = p.shapeA, sB = p.shapeB;
      return `<div style="display:flex; justify-content:center; gap:20px; margin:6px 0;">
        <div style="text-align:center;"><div style="width:${Math.min(sA.width * 14, 70)}px; height:${Math.min(sA.height * 14, 56)}px; background:#93c5fd; border:1px solid #374151;"></div><div style="font-size:8pt; color:#374151;">A: ${sA.width}×${sA.height}</div></div>
        <div style="text-align:center;"><div style="width:${Math.min(sB.width * 14, 70)}px; height:${Math.min(sB.height * 14, 56)}px; background:#fbbf24; border:1px solid #374151;"></div><div style="font-size:8pt; color:#374151;">B: ${sB.width}×${sB.height}</div></div>
      </div>${blankLine(cc)}`;
    }

    // ─── Grade 5 ─────────────────────────────────────────────────────────
    case 'g5-place-million': {
      return `<div style="font-size:18pt; font-weight:900; text-align:center; letter-spacing:3px; margin:6px 0;">${(p.number as number).toLocaleString()}</div>${blankLine(cc)}`;
    }
    case 'g5-number-line': {
      const step = Math.round((p.rangeEnd - p.rangeStart) / 10);
      return numberLineSvg(p.rangeStart, p.rangeEnd, step || 10000, p.target) + blankLine(cc);
    }
    case 'g5-rounding-large': {
      const base = Math.floor(p.target / p.step) * p.step;
      return numberLineSvg(base, base + p.step, p.step / 10, p.target) + blankLine(cc);
    }
    case 'g5-mul-array': {
      const rows = Math.min(p.rows, 10), cols = Math.min(p.cols, 6);
      const html: string[] = ['<div style="display:inline-block; margin:4px auto;">'];
      for (let r = 0; r < rows; r++) {
        html.push('<div style="display:flex; gap:1px;">');
        for (let c = 0; c < cols; c++) html.push('<div style="width:10px; height:10px; background:#374151; border-radius:1px;"></div>');
        html.push('</div>');
      }
      html.push('</div>');
      return `<div style="text-align:center;">${html.join('')}</div><div style="text-align:center; font-size:11pt; margin-top:2px;">${p.rows} × ${p.cols} = ?</div>${blankLine(cc)}`;
    }
    case 'g5-division-share': {
      return `<div style="font-size:14pt; font-weight:700; text-align:center; margin:6px 0;">${p.total} ÷ ${p.groups} = ?</div>${blankLine(cc)}`;
    }
    case 'g5-frac-compare': {
      const [nA, dA] = p.fracA as [number, number];
      const [nB, dB] = p.fracB as [number, number];
      return `<div style="display:flex; justify-content:center; gap:20px; align-items:center; margin:6px 0;">
        <div style="text-align:center;">${fractionCircleSvg(nA, dA, 35, 30)}<div style="font-size:11pt; font-weight:700;">${nA}/${dA}</div></div>
        <div style="font-size:16pt; font-weight:900;">?</div>
        <div style="text-align:center;">${fractionCircleSvg(nB, dB, 35, 30)}<div style="font-size:11pt; font-weight:700;">${nB}/${dB}</div></div>
      </div>${blankLine(cc)}`;
    }
    case 'g5-frac-equiv': {
      const { baseNum, baseDen, multiplier, hidePart } = p;
      const top = hidePart === 'numerator' ? '?' : baseNum * multiplier;
      const bot = hidePart === 'denominator' ? '?' : baseDen * multiplier;
      return `<div style="font-size:14pt; text-align:center; margin:6px 0;"><sup>${baseNum}</sup>/<sub>${baseDen}</sub> = <sup>${top}</sup>/<sub>${bot}</sub></div>${blankLine(cc)}`;
    }
    case 'g5-decimal-place': {
      return `<div style="font-size:18pt; font-weight:900; text-align:center; letter-spacing:2px; margin:6px 0;">${p.number}</div>${blankLine(cc)}`;
    }
    case 'g5-decimal-line': {
      return numberLineSvg(p.rangeStart, p.rangeEnd, 0.1, p.target) + blankLine(cc);
    }
    case 'g5-balance-scale': {
      const weights = p.leftWeights as number[];
      const wStr = weights.join(' + ');
      return `<div style="text-align:center; font-size:12pt; margin:6px 0;">⚖️ ${wStr} g = ? g</div>${blankLine(cc, 'g')}`;
    }
    case 'g5-shape-props': {
      const propLabel = cc === 'DE'
        ? (p.askProperty === 'sides' ? 'Seiten' : p.askProperty === 'right_angles' ? 'Rechte Winkel' : 'Parallele Seiten')
        : (p.askProperty === 'sides' ? 'Sides' : p.askProperty === 'right_angles' ? 'Right angles' : 'Parallel pairs');
      return `<div style="font-size:12pt; text-align:center; margin:6px 0;">📐 <b>${p.shapeId}</b> → ${propLabel} = ?</div>${blankLine(cc)}`;
    }
    case 'g5-angle-classify': {
      const deg = p.degrees as number;
      const rad = deg * Math.PI / 180;
      const svg = `<div style="text-align:center;"><svg width="120" height="80" viewBox="0 0 120 80">
        <line x1="10" y1="70" x2="110" y2="70" stroke="#374151" stroke-width="1.5"/>
        <line x1="10" y1="70" x2="${10 + 70 * Math.cos(-rad)}" y2="${70 + 70 * Math.sin(-rad)}" stroke="#374151" stroke-width="1.5"/>
        <text x="35" y="62" font-size="10" font-weight="700" fill="#374151">${deg}°</text>
      </svg></div>`;
      return svg + blankLine(cc);
    }
    case 'g5-perimeter': {
      const sides = p.sides as number[];
      const labels = sides.map(s => `${s} cm`).join(' + ');
      return `<div style="font-size:11pt; text-align:center; margin:6px 0;">P = ${labels} = ?</div>${blankLine(cc, 'cm')}`;
    }
    case 'g5-area-grid': {
      return `<div style="font-size:12pt; text-align:center; margin:6px 0;">📏 ${p.width} × ${p.height} = ? ${cc === 'DE' ? 'cm²' : 'cm²'}</div>${blankLine(cc, 'cm²')}`;
    }
    case 'g5-barchart': {
      const data = p.data as { label: string; value: number }[];
      const qType = p.questionType as string;
      const qLabel = cc === 'DE'
        ? (qType === 'max' ? 'Maximum' : qType === 'min' ? 'Minimum' : qType === 'total' ? 'Summe' : 'Differenz')
        : (qType === 'max' ? 'Maximum' : qType === 'min' ? 'Minimum' : qType === 'total' ? 'Total' : 'Difference');
      return barChartSvg(data) + `<div style="text-align:center; font-size:10pt; color:#6b7280;">${qLabel} = ?</div>${blankLine(cc)}`;
    }
    case 'g5-symmetry': {
      const axis = p.axis as 'vertical' | 'horizontal';
      const pts = p.sourcePoints as [number, number][];
      const gs = 9;
      const AXIS = 4;
      const html: string[] = ['<div style="display:inline-block; margin:4px auto;">'];
      for (let r = 0; r < gs; r++) {
        html.push('<div style="display:flex;">');
        for (let c = 0; c < gs; c++) {
          const isAxis = axis === 'vertical' ? c === AXIS : r === AXIS;
          const isFilled = pts.some(([pr, pc]) => pr === r && pc === c);
          const bg = isFilled ? '#93c5fd' : isAxis ? '#fecaca' : 'white';
          html.push(`<div style="width:14px; height:14px; border:1px solid #d1d5db; background:${bg};"></div>`);
        }
        html.push('</div>');
      }
      html.push('</div>');
      return `<div style="text-align:center;">${html.join('')}</div>${blankLine(cc)}`;
    }
    case 'g5-unit-convert': {
      return `<div style="font-size:14pt; font-weight:700; text-align:center; margin:6px 0;">${p.value} ${p.from} = ? ${p.to}</div>${blankLine(cc, p.to)}`;
    }
    case 'g5-nl-arith': {
      const op = p.operation === 'add' ? '+' : '−';
      return `<div style="font-size:14pt; font-weight:700; text-align:center; margin:6px 0;">${p.start} ${op} ${p.operand} = ?</div>${blankLine(cc)}`;
    }
    case 'g5-word-problem': {
      return `<div style="font-size:11pt;">${question || ''}</div>${blankLine(cc)}`;
    }
    case 'g5-neg-line': {
      const mn = Math.min(p.startNum, p.startNum + p.addNum, -5);
      const mx = Math.max(p.startNum, p.startNum + p.addNum, 5);
      return numberLineSvg(mn - 1, mx + 1, 1, p.startNum) +
        `<div style="text-align:center; font-size:12pt;">${p.startNum} + (${p.addNum}) = ?</div>${blankLine(cc)}`;
    }
    case 'g5-volume-cuboid': {
      return `<div style="text-align:center; font-size:12pt; margin:6px 0;">📦 ${p.length} × ${p.width} × ${p.height} = ?</div>${blankLine(cc, 'cm³')}`;
    }

    // ─── Grade 6 ─────────────────────────────────────────────────────────
    case 'g6-coord-4q': {
      return coordPlaneSvg(p.pointX, p.pointY) + blankLine(cc);
    }
    case 'g6-pie-chart': {
      return pieChartSvg(p.slices, p.targetIndex) + blankLine(cc, '%');
    }
    case 'g6-ratio-table': {
      const quantities = p.quantities as number[];
      const unit = p.unitValue as number;
      const hidden = p.hiddenIdx as number;
      const html: string[] = ['<table style="border-collapse:collapse; margin:6px auto; font-size:11pt;">'];
      html.push('<tr>');
      quantities.forEach((q, i) => {
        html.push(`<td style="border:1px solid #374151; padding:4px 12px; text-align:center; font-weight:700;">${q}</td>`);
      });
      html.push('</tr><tr>');
      quantities.forEach((q, i) => {
        const val = i === hidden ? '?' : String(q * unit);
        html.push(`<td style="border:1px solid #374151; padding:4px 12px; text-align:center; font-weight:${i === hidden ? '900; color:#ef4444' : '400'};">${val}</td>`);
      });
      html.push('</tr></table>');
      return html.join('') + blankLine(cc);
    }
    case 'g6-trapezoid-area': {
      const { baseA, baseB, height, shapeType } = p;
      const label = shapeType === 'trapezoid'
        ? `a=${baseA}, b=${baseB}, h=${height}`
        : `a=${baseA}, h=${height}`;
      const svg = `<div style="text-align:center;"><svg width="160" height="80" viewBox="0 0 160 80">
        ${shapeType === 'trapezoid'
          ? `<polygon points="40,15 120,15 140,65 20,65" fill="none" stroke="#374151" stroke-width="1.5"/>
             <text x="80" y="10" text-anchor="middle" font-size="8" fill="#374151">a=${baseA}</text>
             <text x="80" y="78" text-anchor="middle" font-size="8" fill="#374151">b=${baseB}</text>`
          : `<polygon points="30,15 130,15 130,65 30,65" fill="none" stroke="#374151" stroke-width="1.5"/>
             <text x="80" y="10" text-anchor="middle" font-size="8" fill="#374151">a=${baseA}</text>`}
        <text x="148" y="42" font-size="8" fill="#374151">h=${height}</text>
      </svg></div>`;
      return svg + blankLine(cc, 'cm²');
    }
    case 'g6-percent-bar': {
      const pct = p.percentage as number;
      return `<div style="text-align:center; margin:6px 0;">
        <div style="display:inline-block; width:200px; height:24px; background:#e5e7eb; border:1px solid #374151; border-radius:4px; position:relative;">
          <div style="width:${pct}%; height:100%; background:#fbbf24; border-radius:3px;"></div>
        </div>
        <div style="font-size:10pt; color:#374151; margin-top:2px;">? %</div>
      </div>${blankLine(cc, '%')}`;
    }

    // ─── Grade 7 ─────────────────────────────────────────────────────────
    case 'g7-pythagorean': {
      const { a, b, findC } = p;
      const label = findC ? `a=${a}, b=${b}, c=?` : `a=${a}, c=${b}, b=?`;
      return `<div style="text-align:center;"><svg width="120" height="90" viewBox="0 0 120 90">
        <polygon points="10,80 110,80 10,10" fill="none" stroke="#374151" stroke-width="1.5"/>
        <rect x="10" y="68" width="12" height="12" fill="none" stroke="#374151" stroke-width="0.5"/>
        <text x="60" y="95" text-anchor="middle" font-size="8" fill="#374151">${label}</text>
      </svg></div>${blankLine(cc)}`;
    }
    case 'g7-triangle-angles': {
      return triangleSvg(p.a, p.b) + blankLine(cc, '°');
    }
    case 'g7-inequality-line': {
      return `<div style="font-size:14pt; font-weight:700; text-align:center; margin:6px 0;">${p.expression}</div><div style="text-align:center; font-size:10pt; color:#6b7280;">x = ?</div>${blankLine(cc)}`;
    }
    case 'g7-power-grid': {
      const { n, type } = p;
      const expr = type === 'square' ? `${n}²` : `${n}³`;
      return `<div style="font-size:20pt; font-weight:900; text-align:center; margin:6px 0;">${expr} = ?</div>${blankLine(cc)}`;
    }
    case 'g7-circle': {
      const { r, findArea } = p;
      const label = findArea
        ? (cc === 'DE' ? `Fläche (r=${r})` : `Area (r=${r})`)
        : (cc === 'DE' ? `Umfang (r=${r})` : `Circumference (r=${r})`);
      return `<div style="text-align:center;"><svg width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="35" fill="none" stroke="#374151" stroke-width="1.5"/>
        <line x1="50" y1="50" x2="85" y2="50" stroke="#ef4444" stroke-width="1" stroke-dasharray="3,2"/>
        <text x="67" y="46" font-size="8" fill="#ef4444">r=${r}</text>
      </svg></div><div style="text-align:center; font-size:10pt; color:#6b7280;">${label} = ?</div>${blankLine(cc)}`;
    }
    case 'g7-cylinder-volume': {
      return cylinderSvg(p.r, p.h) + blankLine(cc, 'cm³');
    }
    case 'g7-statistics': {
      const data = p.data as number[];
      const stLabel = cc === 'DE'
        ? (p.statType === 'median' ? 'Median' : p.statType === 'mode' ? 'Modus' : 'Spannweite')
        : (p.statType === 'median' ? 'Median' : p.statType === 'mode' ? 'Mode' : 'Range');
      return `<div style="font-size:12pt; text-align:center; margin:6px 0;">📊 {${data.join(', ')}}</div><div style="text-align:center; font-size:10pt; color:#6b7280;">${stLabel} = ?</div>${blankLine(cc)}`;
    }

    // ─── Grade 8 ─────────────────────────────────────────────────────────
    case 'g8-function-graph': {
      const sq = (p.subQuestions as any[])?.[0] || p;
      const { m, b, x } = sq;
      const expr = `f(x) = ${m}x ${b >= 0 ? '+' : '−'} ${Math.abs(b)}`;
      return `<div style="font-size:14pt; font-weight:700; text-align:center; margin:6px 0;">${expr}</div><div style="text-align:center; font-size:11pt;">f(${x}) = ?</div>${blankLine(cc)}`;
    }
    case 'g8-probability-tree': {
      const sq = (p.subQuestions as any[])?.[0] || p;
      const { p1, p2, questionType, label1, label2 } = sq;
      const qLabel = questionType === 'both' ? `P(${label1} ∩ ${label2})` : questionType === 'neither' ? `P(¬${label1} ∩ ¬${label2})` : `P(${label1} ∪ ${label2})`;
      return `<div style="text-align:center; font-size:12pt; margin:6px 0;">P(${label1}) = ${p1}%, P(${label2}) = ${p2}%</div><div style="text-align:center; font-size:11pt; font-weight:700;">${qLabel} = ?</div>${blankLine(cc, '%')}`;
    }
    case 'g8-quadratic-sqrt': {
      const sq = (p.subQuestions as any[])?.[0] || p;
      const { n, mode } = sq;
      const label = mode === 'perfect' ? `√${n}` : `⌊√${n}⌋`;
      return `<div style="font-size:20pt; font-weight:900; text-align:center; margin:6px 0;">${label} = ?</div>${blankLine(cc)}`;
    }
    case 'g8-systems-balance': {
      const sq = (p.subQuestions as any[])?.[0] || p;
      return `<div style="text-align:center; font-size:13pt; font-weight:700; margin:6px 0;">${sq.eq1}<br/>${sq.eq2}</div><div style="text-align:center; font-size:10pt; color:#6b7280;">x = ?</div>${blankLine(cc)}`;
    }
    case 'g8-transformation-grid': {
      const sq = (p.subQuestions as any[])?.[0] || p;
      const tLabel = sq.transform === 'translate' ? `T(${sq.dx}, ${sq.dy})` : sq.transform === 'reflectX' ? 'Reflect X' : 'Reflect Y';
      return coordPlaneSvg(sq.x, sq.y) + `<div style="text-align:center; font-size:10pt;">(${sq.x}, ${sq.y}) → ${tLabel} → ?</div>${blankLine(cc)}`;
    }
    case 'g8-statistics-histogram': {
      const sq = (p.subQuestions as any[])?.[0] || p;
      const data = sq.data as number[];
      const labels = sq.labels as string[];
      const cats = labels.map((l: string, i: number) => ({ name: l, value: data[i] }));
      const stLabel = sq.mode === 'mean' ? (cc === 'DE' ? 'Mittelwert' : 'Mean') : 'Median';
      return barChartSvg(cats) + `<div style="text-align:center; font-size:10pt; color:#6b7280;">${stLabel} = ?</div>${blankLine(cc)}`;
    }
    case 'g8-cylinder-surface': {
      const sq = (p.subQuestions as any[])?.[0] || p;
      const modeLabel = sq.mode === 'volume'
        ? (cc === 'DE' ? 'Volumen' : 'Volume')
        : (cc === 'DE' ? 'Oberfläche' : 'Surface');
      return cylinderSvg(sq.r, sq.h) + `<div style="text-align:center; font-size:10pt; color:#6b7280;">${modeLabel} = ? (π ≈ 3)</div>${blankLine(cc)}`;
    }
    case 'g8-inequality-line': {
      const sq = (p.subQuestions as any[])?.[0] || p;
      return `<div style="font-size:14pt; font-weight:700; text-align:center; margin:6px 0;">${sq.lhs} ${sq.op} ${sq.rhs}</div><div style="text-align:center; font-size:10pt; color:#6b7280;">x = ?</div>${blankLine(cc)}`;
    }

    default:
      return `<div style="font-size:11pt;">${question || ''}</div>${blankLine(cc)}`;
  }
}
