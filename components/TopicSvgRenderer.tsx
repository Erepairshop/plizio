"use client";
// TopicSvgRenderer.tsx
// Converts a SvgConfig data descriptor into an actual SVG component.
// Add new cases here when a new SvgConfig type is needed.

import type { SvgConfig } from "@/lib/explorerPools/types";
import * as BioSvgs from "@/app/astro-biologie/svg";

interface Props {
  config: SvgConfig;
  lang?: string;
}

export default function TopicSvgRenderer({ config, lang = "en" }: Props) {
  switch (config.type) {

    // ── Biology specific diagrams from the shared library ────────────
    case "biologie-diagram": {
      const { name, color, bg } = config;
      const SvgComp = (BioSvgs as any)[name];
      if (!SvgComp) return (
        <svg width="100%" viewBox="0 0 240 140">
          <rect width="240" height="140" fill="#FEF2F2" rx="20" />
          <text x="120" y="70" fontSize="12" fill="#EF4444" textAnchor="middle">SVG not found: {name}</text>
        </svg>
      );
      return (
        <div className="w-full h-full flex items-center justify-center p-1 rounded-2xl overflow-hidden" 
             style={{ backgroundColor: bg ?? "transparent" }}>
          <SvgComp lang={lang} color={color} />
        </div>
      );
    }

    // ── Row of colored circles with letters ──────────────────────────
    case "letter-circles": {
      const { letters, color, showNotes } = config;
      const n = letters.length;
      const cx = 120;
      const spacing = Math.min(44, 200 / Math.max(n, 1));
      const startX = cx - ((n - 1) * spacing) / 2;
      return (
        <svg width="100%" viewBox="0 0 240 140">
          <rect width="240" height="140" fill={color + "18"} rx="20" />
          <g transform="translate(0, 60)">
            {letters.map((l, i) => (
              <g key={i} transform={`translate(${startX + i * spacing}, 0)`}>
                <circle r="16" fill={color} opacity="0.9" />
                <text y="6" fontSize="17" fontWeight="900" fill="white" textAnchor="middle">{l}</text>
              </g>
            ))}
            {showNotes && (
              <>
                <text x={startX - 28} y="44" fontSize="13" fill={color} textAnchor="middle">♪</text>
                <text x={cx}          y="50" fontSize="17" fill={color} textAnchor="middle">♫</text>
                <text x={startX + (n - 1) * spacing + 28} y="44" fontSize="13" fill={color} textAnchor="middle">♪</text>
              </>
            )}
          </g>
        </svg>
      );
    }

    // ── Two bordered classification groups ───────────────────────────
    case "two-groups": {
      const { left, right, bg } = config;
      return (
        <svg width="100%" viewBox="0 0 240 140">
          <rect width="240" height="140" fill={bg ?? "#F8FAFC"} rx="20" />
          {/* Left group */}
          <rect x="15" y="30" width="95" height="80" rx="10" fill={left.bg} stroke={left.border} strokeWidth="1.5" />
          {left.items.slice(0, 4).map((item, i) => (
            <text key={i} x={63} y={60 + i * 20} fontSize="14" fontWeight="800"
              fill={left.border} textAnchor="middle">{item}</text>
          ))}
          {/* Right group */}
          <rect x="130" y="30" width="95" height="80" rx="10" fill={right.bg} stroke={right.border} strokeWidth="1.5" />
          {right.items.slice(0, 4).map((item, i) => (
            <text key={i} x={178} y={60 + i * 20} fontSize="14" fontWeight="800"
              fill={right.border} textAnchor="middle">{item}</text>
          ))}
        </svg>
      );
    }

    // ── Big/small letter pairs ────────────────────────────────────────
    case "letter-pairs": {
      const { pairs, color, dimColor } = config;
      const n = pairs.length;
      const spacing = Math.min(52, 220 / Math.max(n, 1));
      const startX = 120 - ((n - 1) * spacing) / 2;
      return (
        <svg width="100%" viewBox="0 0 240 140">
          <rect width="240" height="140" fill={color + "12"} rx="20" />
          <g transform="translate(0, 55)">
            {pairs.map(([big, small], i) => (
              <g key={i} transform={`translate(${startX + i * spacing}, 0)`}>
                <text y="-5"  fontSize="24" fontWeight="900" fill={color}             textAnchor="middle">{big}</text>
                <text y="5"   fontSize="11" fill="#94A3B8"                             textAnchor="middle">↕</text>
                <text y="25"  fontSize="22" fontWeight="900" fill={dimColor ?? color + "99"} textAnchor="middle">{small}</text>
              </g>
            ))}
          </g>
        </svg>
      );
    }

    // ── Word split into syllables ─────────────────────────────────────
    case "word-syllables": {
      const { parts, color, showClap } = config;
      const total = parts.reduce((s, p) => s + p.length, 0) + (parts.length - 1) * 2;
      const fontSize = total > 8 ? 18 : 24;
      return (
        <svg width="100%" viewBox="0 0 240 140">
          <rect width="240" height="140" fill={color + "14"} rx="20" />
          <g transform="translate(120, 65)">
            {/* render parts joined by dashes */}
            <text y="0" fontSize={fontSize} fontWeight="900" fill={color} textAnchor="middle">
              {parts.join("-")}
            </text>
            {showClap && (
              <>
                {parts.map((_, i) => (
                  <text key={i} x={-50 + i * (100 / Math.max(parts.length - 1, 1))} y="38"
                    fontSize="20" textAnchor="middle">👏</text>
                ))}
              </>
            )}
            <text y="62" fontSize="14" fontWeight="700" fill={color} textAnchor="middle">
              = {parts.length} ✂️
            </text>
          </g>
        </svg>
      );
    }

    // ── Row of colored oval bubbles ───────────────────────────────────
    case "text-bubbles": {
      const { items } = config;
      const n = items.length;
      const spacing = Math.min(70, 210 / Math.max(n, 1));
      const startX = 120 - ((n - 1) * spacing) / 2;
      return (
        <svg width="100%" viewBox="0 0 240 140">
          <rect width="240" height="140" fill="#FAFAFA" rx="20" />
          <g transform="translate(0, 70)">
            {items.map((item, i) => (
              <g key={i} transform={`translate(${startX + i * spacing}, 0)`}>
                <circle cx="0" cy="0" r="26" fill={item.bg} />
                <text x="0" y="6"  fontSize="18" fontWeight="900" fill={item.color} textAnchor="middle">{item.text}</text>
                {item.emoji && (
                  <text x="0" y="-32" fontSize="14" textAnchor="middle">{item.emoji}</text>
                )}
              </g>
            ))}
          </g>
        </svg>
      );
    }

    // ── Two words combining into a compound word ──────────────────────
    case "compound-word": {
      const { word1, word2, result, color } = config;
      return (
        <svg width="100%" viewBox="0 0 240 140">
          <rect width="240" height="140" fill={color + "12"} rx="20" />
          <g transform="translate(120, 45)">
            <text x="-40" y="0" fontSize="18" fontWeight="900" fill={color} textAnchor="middle">{word1}</text>
            <text x="0"   y="0" fontSize="14" fill="#94A3B8"   textAnchor="middle">+</text>
            <text x="40"  y="0" fontSize="18" fontWeight="900" fill={color} textAnchor="middle">{word2}</text>
            <text x="0"   y="25" fontSize="12" fill="#94A3B8"  textAnchor="middle">↓</text>
            <rect x="-55" y="35" width="110" height="34" rx="8" fill={color} opacity="0.9" />
            <text x="0"   y="57" fontSize="18" fontWeight="900" fill="white" textAnchor="middle">{result}</text>
          </g>
        </svg>
      );
    }

    // ── Article + noun display ────────────────────────────────────────
    case "article-noun": {
      const { article, articleColor, noun, emoji } = config;
      return (
        <svg width="100%" viewBox="0 0 240 140">
          <rect width="240" height="140" fill="#F0F9FF" rx="20" />
          <g transform="translate(120, 70)">
            {emoji && <text x="-55" y="8" fontSize="36" textAnchor="middle">{emoji}</text>}
            <rect x="-10" y="-30" width="60" height="36" rx="8" fill={articleColor} opacity="0.9" />
            <text x="20" y="-7" fontSize="20" fontWeight="900" fill="white" textAnchor="middle">{article}</text>
            <text x="20" y="25" fontSize="22" fontWeight="900" fill="#1E293B" textAnchor="middle">{noun}</text>
          </g>
        </svg>
      );
    }

    // ── Emoji icon grid ───────────────────────────────────────────────
    case "icon-grid": {
      const { items, bg } = config;
      const cols = items.length <= 4 ? 2 : 3;
      const rows = Math.ceil(items.length / cols);
      const cellW = 220 / cols;
      const cellH = 110 / rows;
      return (
        <svg width="100%" viewBox="0 0 240 140">
          <rect width="240" height="140" fill={bg ?? "#F8FAFC"} rx="20" />
          <g transform="translate(10, 15)">
            {items.map((item, i) => {
              const col = i % cols;
              const row = Math.floor(i / cols);
              const cx = col * cellW + cellW / 2;
              const cy = row * cellH + cellH / 2;
              return (
                <g key={i} transform={`translate(${cx}, ${cy})`}>
                  <text y="8" fontSize="26" textAnchor="middle">{item.emoji}</text>
                  {item.label && (
                    <text y="30" fontSize="9" fill="#475569" textAnchor="middle">{item.label}</text>
                  )}
                </g>
              );
            })}
          </g>
        </svg>
      );
    }

    // ── Two rhyming words ─────────────────────────────────────────────
    case "rhyme-pair": {
      const { word1, word2, emoji1, emoji2, color } = config;
      return (
        <svg width="100%" viewBox="0 0 240 140">
          <rect width="240" height="140" fill={color + "12"} rx="20" />
          <g transform="translate(120, 70)">
            <g transform="translate(-55, 0)">
              {emoji1 && <text y="-30" fontSize="28" textAnchor="middle">{emoji1}</text>}
              <text y="10" fontSize="20" fontWeight="900" fill={color} textAnchor="middle">{word1}</text>
            </g>
            <text x="0" y="10" fontSize="22" fill="#CBD5E1" textAnchor="middle">≈</text>
            <g transform="translate(55, 0)">
              {emoji2 && <text y="-30" fontSize="28" textAnchor="middle">{emoji2}</text>}
              <text y="10" fontSize="20" fontWeight="900" fill={color} textAnchor="middle">{word2}</text>
            </g>
          </g>
        </svg>
      );
    }

    // ── Sentence with highlighted words ──────────────────────────────
    case "sentence-display": {
      const { words, highlightIndices = [], color } = config;
      const lineW = 200;
      const charPx = 11;
      const totalChars = words.join(" ").length;
      const scale = totalChars > 18 ? Math.min(1, 18 / totalChars) : 1;
      const fs = Math.round(16 * scale);
      return (
        <svg width="100%" viewBox="0 0 240 140">
          <rect width="240" height="140" fill={color + "10"} rx="20" />
          <g transform="translate(120, 75)">
            {/* Rough word placement */}
            {words.map((word, i) => {
              const isHighlighted = highlightIndices.includes(i);
              const offset = (i - (words.length - 1) / 2) * (word.length * charPx * scale + 6);
              return (
                <text key={i} x={offset} y="0" fontSize={fs} fontWeight={isHighlighted ? "900" : "600"}
                  fill={isHighlighted ? color : "#475569"} textAnchor="middle">
                  {word}
                </text>
              );
            })}
          </g>
        </svg>
      );
    }

    // ── Single word with optional highlighted characters ──────────────
    case "word-display": {
      const { word, highlightChars = [], color, subtitle } = config;
      return (
        <svg width="100%" viewBox="0 0 240 140">
          <rect width="240" height="140" fill={color + "10"} rx="20" />
          <g transform="translate(120, 60)">
            {/* Render chars individually for highlighting */}
            {word.split("").map((ch, i) => {
              const isHL = highlightChars.includes(ch.toLowerCase()) || highlightChars.includes(ch.toUpperCase());
              const n = word.length;
              const charSpacing = Math.min(24, 180 / Math.max(n, 1));
              const x = (i - (n - 1) / 2) * charSpacing;
              return (
                <text key={i} x={x} y="0" fontSize={isHL ? 30 : 24} fontWeight="900"
                  fill={isHL ? color : "#64748B"} textAnchor="middle">
                  {ch}
                </text>
              );
            })}
            {subtitle && (
              <text y="38" fontSize="12" fill="#94A3B8" textAnchor="middle">{subtitle}</text>
            )}
          </g>
        </svg>
      );
    }

    // ── Large emoji with optional title (fallback / generic) ──────────
    case "simple-icon":
    default: {
      const cfg = config as { type: "simple-icon"; icon: string; title?: string; bg?: string; color?: string };
      return (
        <svg width="100%" viewBox="0 0 240 140">
          <rect width="240" height="140" fill={cfg.bg ?? "#F8FAFC"} rx="20" />
          <text x="120" y="75" fontSize="52" textAnchor="middle">{cfg.icon}</text>
          {cfg.title && (
            <text x="120" y="115" fontSize="13" fontWeight="700" fill={cfg.color ?? "#475569"} textAnchor="middle">
              {cfg.title}
            </text>
          )}
        </svg>
      );
    }
  }
}
