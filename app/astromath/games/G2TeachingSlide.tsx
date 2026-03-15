"use client";
import { useMemo } from "react";
import {
  TeachingShell, DotGroup, MiniEquation,
  type RoundDef,
} from "./TeachingActivities";

// ─── Props ─────────────────────────────────────────────────────────────────────
interface Props {
  islandId: string;   // "i1" .. "i9"
  lang: string;
  color: string;
  onDone: (score: number, total: number) => void;
  onExit?: () => void;
}

// ─── Visual helpers (G2-specific) ───────────────────────────────────────────────

function TenFrame({ filled, color, total = 10 }: { filled: number; color: string; total?: number }) {
  return (
    <div className="grid grid-cols-5 gap-1" style={{ maxWidth: 130 }}>
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className="w-5 h-5 rounded-md border"
          style={{
            background: i < filled ? color : "rgba(255,255,255,0.06)",
            borderColor: i < filled ? color : "rgba(255,255,255,0.15)",
          }} />
      ))}
    </div>
  );
}

function PlaceValueBlock({ tens, ones, color }: { tens: number; ones: number; color: string }) {
  return (
    <div className="flex items-end gap-3">
      <div className="flex flex-col items-center gap-0.5">
        {Array.from({ length: tens }).map((_, i) => (
          <div key={i} className="w-6 h-2.5 rounded-sm" style={{ background: color }} />
        ))}
        <span className="text-[10px] font-bold text-white/50 mt-0.5">{tens}T</span>
      </div>
      <div className="flex flex-col items-center gap-0.5">
        <div className="flex flex-wrap gap-0.5" style={{ maxWidth: 28 }}>
          {Array.from({ length: ones }).map((_, i) => (
            <div key={i} className="w-3 h-3 rounded-sm" style={{ background: `${color}88` }} />
          ))}
        </div>
        <span className="text-[10px] font-bold text-white/50 mt-0.5">{ones}O</span>
      </div>
    </div>
  );
}

function DotArray({ rows, cols, color }: { rows: number; cols: number; color: string }) {
  return (
    <div className="flex flex-col gap-1 items-center">
      {Array.from({ length: rows }).map((_, r) => (
        <div key={r} className="flex gap-1">
          {Array.from({ length: cols }).map((_, c) => (
            <div key={c} className="w-4 h-4 rounded-full" style={{ background: color }} />
          ))}
        </div>
      ))}
      <span className="text-xs font-bold text-white/50">{rows} × {cols} = {rows * cols}</span>
    </div>
  );
}

function ShareVisual({ total, groups, color }: { total: number; groups: number; color: string }) {
  const perGroup = Math.floor(total / groups);
  return (
    <div className="flex gap-3 items-end">
      {Array.from({ length: groups }).map((_, g) => (
        <div key={g} className="flex flex-col items-center gap-1">
          <div className="flex gap-0.5">
            {Array.from({ length: perGroup }).map((_, i) => (
              <div key={i} className="w-3.5 h-3.5 rounded-full" style={{ background: color }} />
            ))}
          </div>
          <div className="w-10 h-0.5 rounded-full" style={{ background: `${color}44` }} />
        </div>
      ))}
    </div>
  );
}

// ─── Island round definitions ──────────────────────────────────────────────────

function getIslandRounds(islandId: string, lang: string): RoundDef[] {
  switch (islandId) {

    // ── i1: Numbers to 100 — place value, tens & ones, comparing ──────────────
    case "i1": return [
      {
        type: "tap-reveal",
        instruction: {
          en: "Tap each number to discover its tens & ones!",
          hu: "Koppints minden számra a tízesek és egyesek felfedezéséhez!",
          de: "Tippe auf jede Zahl um Zehner und Einer zu entdecken!",
          ro: "Atinge fiecare număr pentru zeci și unități!",
        },
        cols: 3,
        items: [23, 45, 67, 38, 91, 52].map(n => ({
          display: <span className="text-xl font-black text-white/40">{n}</span>,
          hidden: (
            <div className="flex flex-col items-center">
              <span className="text-lg font-black text-white">{n}</span>
              <span className="text-[10px] font-bold text-white/50">{Math.floor(n / 10)}T + {n % 10}E</span>
            </div>
          ),
        })),
      },
      {
        type: "choose",
        question: { en: "How many tens in 47?", hu: "Hány tízes van a 47-ben?", de: "Wie viele Zehner hat 47?", ro: "Câte zeci are 47?" },
        visual: (_, color) => <PlaceValueBlock tens={4} ones={7} color={color} />,
        options: [
          { label: "3", correct: false },
          { label: "4", correct: true },
          { label: "7", correct: false },
          { label: "47", correct: false },
        ],
      },
      {
        type: "choose",
        question: { en: "Which number is 3 tens and 5 ones?", hu: "Melyik szám a 3 tízes és 5 egyes?", de: "Welche Zahl sind 3 Zehner und 5 Einer?", ro: "Ce număr e 3 zeci și 5 unități?" },
        visual: (_, color) => <PlaceValueBlock tens={3} ones={5} color={color} />,
        options: [
          { label: "53", correct: false },
          { label: "35", correct: true },
          { label: "8", correct: false },
          { label: "30", correct: false },
        ],
      },
      {
        type: "choose",
        question: { en: "Which is bigger: 38 or 56?", hu: "Melyik a nagyobb: 38 vagy 56?", de: "Was ist größer: 38 oder 56?", ro: "Care e mai mare: 38 sau 56?" },
        visual: (_, color) => (
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center gap-1">
              <PlaceValueBlock tens={3} ones={8} color={`${color}88`} />
              <span className="text-xl font-black text-white/70">38</span>
            </div>
            <span className="text-3xl font-black text-white/30">?</span>
            <div className="flex flex-col items-center gap-1">
              <PlaceValueBlock tens={5} ones={6} color={color} />
              <span className="text-xl font-black text-white/70">56</span>
            </div>
          </div>
        ),
        options: [
          { label: "38", correct: false },
          { label: "56", correct: true },
        ],
      },
      {
        type: "order",
        instruction: {
          en: "Put the numbers in order!",
          hu: "Rakd sorba a számokat!",
          de: "Ordne die Zahlen!",
          ro: "Pune numerele în ordine!",
        },
        values: [72, 28, 55, 13, 91],
        ascending: true,
      },
    ];

    // ── i2: Mental Arithmetic — adding/subtracting tens, sequences ─────────────
    case "i2": return [
      {
        type: "choose",
        question: { en: "30 + 20 = ?", hu: "30 + 20 = ?", de: "30 + 20 = ?", ro: "30 + 20 = ?" },
        visual: (_, color) => (
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-center gap-1">
              <TenFrame filled={10} color={`${color}66`} />
              <TenFrame filled={10} color={`${color}66`} />
              <TenFrame filled={10} color={`${color}66`} />
              <span className="text-xs font-bold text-white/40">30</span>
            </div>
            <span className="text-xl font-black text-white/40">+</span>
            <div className="flex flex-col items-center gap-1">
              <TenFrame filled={10} color={color} />
              <TenFrame filled={10} color={color} />
              <span className="text-xs font-bold text-white/40">20</span>
            </div>
          </div>
        ),
        options: [
          { label: "40", correct: false },
          { label: "50", correct: true },
          { label: "60", correct: false },
          { label: "45", correct: false },
        ],
      },
      {
        type: "choose",
        question: { en: "70 – 30 = ?", hu: "70 – 30 = ?", de: "70 – 30 = ?", ro: "70 – 30 = ?" },
        visual: (_, color) => <MiniEquation parts={[70, "–", 30, "=", "?"]} color={color} />,
        options: [
          { label: "30", correct: false },
          { label: "40", correct: true },
          { label: "50", correct: false },
          { label: "35", correct: false },
        ],
      },
      {
        type: "tap-reveal",
        instruction: {
          en: "Discover the round-number pairs! Tap each card!",
          hu: "Fedezd fel a kerek számpárokat! Koppints!",
          de: "Entdecke die Zehnerzahlen-Paare! Tippe!",
          ro: "Descoperă perechile cu zeci! Atinge!",
        },
        cols: 2,
        items: [
          { display: <span className="text-lg font-bold text-white/40">20+40=?</span>, hidden: <MiniEquation parts={[20,"+",40,"=",60]} color="#22c55e" /> },
          { display: <span className="text-lg font-bold text-white/40">80–50=?</span>, hidden: <MiniEquation parts={[80,"–",50,"=",30]} color="#f59e0b" /> },
          { display: <span className="text-lg font-bold text-white/40">40+30=?</span>, hidden: <MiniEquation parts={[40,"+",30,"=",70]} color="#22c55e" /> },
          { display: <span className="text-lg font-bold text-white/40">90–60=?</span>, hidden: <MiniEquation parts={[90,"–",60,"=",30]} color="#f59e0b" /> },
        ],
      },
      {
        type: "choose",
        question: { en: "What comes next? 10, 20, 30, 40, ?", hu: "Mi jön? 10, 20, 30, 40, ?", de: "Was kommt? 10, 20, 30, 40, ?", ro: "Ce urmează? 10, 20, 30, 40, ?" },
        visual: (_, color) => (
          <div className="flex gap-1.5">
            {[10,20,30,40].map(n => (
              <div key={n} className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black text-white"
                style={{ background: `${color}44` }}>{n}</div>
            ))}
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black border-2 border-dashed"
              style={{ borderColor: color, color }}>?</div>
          </div>
        ),
        options: [
          { label: "45", correct: false },
          { label: "50", correct: true },
          { label: "60", correct: false },
          { label: "55", correct: false },
        ],
      },
      {
        type: "choose",
        question: { en: "45 + 10 = ?", hu: "45 + 10 = ?", de: "45 + 10 = ?", ro: "45 + 10 = ?" },
        visual: (_, color) => <MiniEquation parts={[45, "+", 10, "=", "?"]} color={color} />,
        options: [
          { label: "55", correct: true },
          { label: "50", correct: false },
          { label: "56", correct: false },
          { label: "65", correct: false },
        ],
      },
    ];

    // ── i3: Addition without carrying (e.g. 32+15) ───────────────────────────
    case "i3": return [
      {
        type: "choose",
        question: { en: "23 + 14 = ?", hu: "23 + 14 = ?", de: "23 + 14 = ?", ro: "23 + 14 = ?" },
        visual: (_, color) => (
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-4">
              <PlaceValueBlock tens={2} ones={3} color={`${color}88`} />
              <span className="text-xl font-black text-white/40">+</span>
              <PlaceValueBlock tens={1} ones={4} color={color} />
            </div>
            <span className="text-xs font-bold text-white/40">
              {lang === "de" ? "Zehner + Zehner, Einer + Einer" : lang === "hu" ? "Tízesek + tízesek, egyesek + egyesek" : lang === "ro" ? "Zeci + zeci, unități + unități" : "Tens + tens, ones + ones"}
            </span>
          </div>
        ),
        options: [
          { label: "37", correct: true },
          { label: "36", correct: false },
          { label: "38", correct: false },
          { label: "27", correct: false },
        ],
      },
      {
        type: "choose",
        question: { en: "41 + 35 = ?", hu: "41 + 35 = ?", de: "41 + 35 = ?", ro: "41 + 35 = ?" },
        visual: (_, color) => (
          <div className="flex flex-col items-center gap-1">
            <MiniEquation parts={[41, "+", 35, "=", "?"]} color={color} />
            <span className="text-xs text-white/40">4T+3T=7T, 1E+5E=6E</span>
          </div>
        ),
        options: [
          { label: "76", correct: true },
          { label: "75", correct: false },
          { label: "66", correct: false },
          { label: "86", correct: false },
        ],
      },
      {
        type: "choose",
        question: { en: "12 + 23 + 14 = ?", hu: "12 + 23 + 14 = ?", de: "12 + 23 + 14 = ?", ro: "12 + 23 + 14 = ?" },
        visual: (_, color) => <MiniEquation parts={[12, "+", 23, "+", 14, "=", "?"]} color={color} />,
        options: [
          { label: "49", correct: true },
          { label: "48", correct: false },
          { label: "39", correct: false },
          { label: "59", correct: false },
        ],
      },
      {
        type: "choose",
        question: { en: "24 + ? = 57", hu: "24 + ? = 57", de: "24 + ? = 57", ro: "24 + ? = 57" },
        visual: (_, color) => (
          <div className="flex flex-col items-center gap-2">
            <MiniEquation parts={[24, "+", "?", "=", 57]} color={color} />
            <span className="text-xs text-white/40">
              {lang === "de" ? "Tipp: 5T–2T=3T, 7E–4E=3E" : lang === "hu" ? "Tipp: 5T–2T=3T, 7E–4E=3E" : lang === "ro" ? "Indiciu: 5Z–2Z=3Z, 7U–4U=3U" : "Hint: 5T–2T=3T, 7E–4E=3E"}
            </span>
          </div>
        ),
        options: [
          { label: "33", correct: true },
          { label: "23", correct: false },
          { label: "43", correct: false },
          { label: "32", correct: false },
        ],
      },
      {
        type: "tap-reveal",
        instruction: {
          en: "Tap to discover addition without carrying!",
          hu: "Fedezd fel az átvitel nélküli összeadást!",
          de: "Entdecke die Addition ohne Übertrag!",
          ro: "Descoperă adunarea fără transport!",
        },
        cols: 2,
        items: [
          { display: <span className="text-lg font-bold text-white/40">32+25=?</span>, hidden: <MiniEquation parts={[32,"+",25,"=",57]} color="#22c55e" /> },
          { display: <span className="text-lg font-bold text-white/40">51+18=?</span>, hidden: <MiniEquation parts={[51,"+",18,"=",69]} color="#22c55e" /> },
          { display: <span className="text-lg font-bold text-white/40">43+21=?</span>, hidden: <MiniEquation parts={[43,"+",21,"=",64]} color="#22c55e" /> },
          { display: <span className="text-lg font-bold text-white/40">60+34=?</span>, hidden: <MiniEquation parts={[60,"+",34,"=",94]} color="#22c55e" /> },
        ],
      },
    ];

    // ── i4: Subtraction without borrowing (e.g. 56–23) ──────────────────────
    case "i4": return [
      {
        type: "choose",
        question: { en: "58 – 23 = ?", hu: "58 – 23 = ?", de: "58 – 23 = ?", ro: "58 – 23 = ?" },
        visual: (_, color) => (
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-4">
              <PlaceValueBlock tens={5} ones={8} color={color} />
              <span className="text-xl font-black text-white/40">–</span>
              <PlaceValueBlock tens={2} ones={3} color="#ef444488" />
            </div>
            <span className="text-xs font-bold text-white/40">
              {lang === "de" ? "5T–2T=3T, 8E–3E=5E" : lang === "hu" ? "5T–2T=3T, 8E–3E=5E" : lang === "ro" ? "5Z–2Z=3Z, 8U–3U=5U" : "5T–2T=3T, 8E–3E=5E"}
            </span>
          </div>
        ),
        options: [
          { label: "35", correct: true },
          { label: "25", correct: false },
          { label: "45", correct: false },
          { label: "34", correct: false },
        ],
      },
      {
        type: "choose",
        question: { en: "76 – 42 = ?", hu: "76 – 42 = ?", de: "76 – 42 = ?", ro: "76 – 42 = ?" },
        visual: (_, color) => <MiniEquation parts={[76, "–", 42, "=", "?"]} color={color} />,
        options: [
          { label: "34", correct: true },
          { label: "44", correct: false },
          { label: "24", correct: false },
          { label: "36", correct: false },
        ],
      },
      {
        type: "choose",
        question: { en: "Which picture shows 49 – 17?", hu: "Melyik kép mutatja a 49 – 17-et?", de: "Welches Bild zeigt 49 – 17?", ro: "Care imagine arată 49 – 17?" },
        visual: (_, color) => (
          <div className="flex flex-col items-center gap-1">
            <PlaceValueBlock tens={4} ones={9} color={color} />
            <span className="text-xs font-bold text-white/40 mt-1">
              {lang === "de" ? "Wir nehmen 1T und 7E weg" : lang === "hu" ? "Elveszünk 1T-t és 7E-t" : lang === "ro" ? "Scoatem 1Z și 7U" : "We take away 1T and 7E"}
            </span>
          </div>
        ),
        options: [
          { label: "32", correct: true },
          { label: "22", correct: false },
          { label: "42", correct: false },
          { label: "33", correct: false },
        ],
      },
      {
        type: "choose",
        question: { en: "89 – ? = 54", hu: "89 – ? = 54", de: "89 – ? = 54", ro: "89 – ? = 54" },
        visual: (_, color) => <MiniEquation parts={[89, "–", "?", "=", 54]} color={color} />,
        options: [
          { label: "35", correct: true },
          { label: "25", correct: false },
          { label: "45", correct: false },
          { label: "34", correct: false },
        ],
      },
      {
        type: "tap-reveal",
        instruction: {
          en: "Tap to discover subtraction without borrowing!",
          hu: "Fedezd fel a kivonást átvitel nélkül!",
          de: "Entdecke die Subtraktion ohne Übertrag!",
          ro: "Descoperă scăderea fără împrumut!",
        },
        cols: 2,
        items: [
          { display: <span className="text-lg font-bold text-white/40">67–34=?</span>, hidden: <MiniEquation parts={[67,"–",34,"=",33]} color="#f59e0b" /> },
          { display: <span className="text-lg font-bold text-white/40">98–51=?</span>, hidden: <MiniEquation parts={[98,"–",51,"=",47]} color="#f59e0b" /> },
          { display: <span className="text-lg font-bold text-white/40">85–43=?</span>, hidden: <MiniEquation parts={[85,"–",43,"=",42]} color="#f59e0b" /> },
          { display: <span className="text-lg font-bold text-white/40">79–26=?</span>, hidden: <MiniEquation parts={[79,"–",26,"=",53]} color="#f59e0b" /> },
        ],
      },
    ];

    // ── i5: Addition WITH carrying (e.g. 37+28) ────────────────────────────
    case "i5": return [
      {
        type: "choose",
        question: {
          en: "What happens when ones add up to more than 9?",
          hu: "Mi történik, ha az egyesek összege több mint 9?",
          de: "Was passiert, wenn die Einer zusammen mehr als 9 ergeben?",
          ro: "Ce se întâmplă când unitățile depășesc 9?",
        },
        visual: (_, color) => (
          <div className="flex flex-col items-center gap-2">
            <MiniEquation parts={[17, "+", 15, "=", "?"]} color={color} />
            <span className="text-xs font-bold text-white/50">7 + 5 = 12 → {lang === "de" ? "1 Zehner übertragen!" : lang === "hu" ? "1 tízes átvitel!" : lang === "ro" ? "transport de 1 zece!" : "carry 1 ten!"}</span>
          </div>
        ),
        options: [
          { label: "22", correct: false },
          { label: "32", correct: true },
          { label: "33", correct: false },
          { label: "31", correct: false },
        ],
      },
      {
        type: "choose",
        question: { en: "28 + 35 = ?", hu: "28 + 35 = ?", de: "28 + 35 = ?", ro: "28 + 35 = ?" },
        visual: (_, color) => (
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-4">
              <PlaceValueBlock tens={2} ones={8} color={`${color}88`} />
              <span className="text-xl font-black text-white/40">+</span>
              <PlaceValueBlock tens={3} ones={5} color={color} />
            </div>
            <span className="text-xs font-bold text-white/40">8+5=13 → {lang === "de" ? "3 schreiben, 1 übertragen" : lang === "hu" ? "3 leírni, 1 átvitel" : lang === "ro" ? "scriem 3, transport 1" : "write 3, carry 1"}</span>
          </div>
        ),
        options: [
          { label: "63", correct: true },
          { label: "53", correct: false },
          { label: "64", correct: false },
          { label: "62", correct: false },
        ],
      },
      {
        type: "choose",
        question: { en: "46 + 37 = ?", hu: "46 + 37 = ?", de: "46 + 37 = ?", ro: "46 + 37 = ?" },
        visual: (_, color) => <MiniEquation parts={[46, "+", 37, "=", "?"]} color={color} />,
        options: [
          { label: "83", correct: true },
          { label: "73", correct: false },
          { label: "84", correct: false },
          { label: "82", correct: false },
        ],
      },
      {
        type: "choose",
        question: {
          en: "Emma has 27 stickers and gets 15 more. How many?",
          hu: "Emmának van 27 matricája és kap még 15-öt. Hány van?",
          de: "Emma hat 27 Sticker und bekommt 15 dazu. Wie viele?",
          ro: "Emma are 27 abțibilduri și primește încă 15. Câte are?",
        },
        visual: () => <span className="text-5xl">🎀</span>,
        options: [
          { label: "42", correct: true },
          { label: "32", correct: false },
          { label: "43", correct: false },
          { label: "41", correct: false },
        ],
      },
      {
        type: "tap-reveal",
        instruction: {
          en: "Tap to see addition with carrying!",
          hu: "Koppints az átviteles összeadás megtekintéséhez!",
          de: "Tippe um Addition mit Übertrag zu sehen!",
          ro: "Atinge pentru a vedea adunarea cu transport!",
        },
        cols: 2,
        items: [
          { display: <span className="text-lg font-bold text-white/40">19+24=?</span>, hidden: <MiniEquation parts={[19,"+",24,"=",43]} color="#22c55e" /> },
          { display: <span className="text-lg font-bold text-white/40">38+47=?</span>, hidden: <MiniEquation parts={[38,"+",47,"=",85]} color="#22c55e" /> },
          { display: <span className="text-lg font-bold text-white/40">56+26=?</span>, hidden: <MiniEquation parts={[56,"+",26,"=",82]} color="#22c55e" /> },
          { display: <span className="text-lg font-bold text-white/40">45+38=?</span>, hidden: <MiniEquation parts={[45,"+",38,"=",83]} color="#22c55e" /> },
        ],
      },
    ];

    // ── i6: Subtraction WITH borrowing (e.g. 52–27) ────────────────────────
    case "i6": return [
      {
        type: "choose",
        question: {
          en: "What happens when we subtract and the ones aren't enough?",
          hu: "Mi történik, ha kivonásnál nem elég az egyes?",
          de: "Was passiert, wenn die Einer beim Subtrahieren nicht reichen?",
          ro: "Ce se întâmplă când unitățile nu ajung la scădere?",
        },
        visual: (_, color) => (
          <div className="flex flex-col items-center gap-2">
            <MiniEquation parts={[42, "–", 18, "=", "?"]} color={color} />
            <span className="text-xs font-bold text-white/50">2–8? → {lang === "de" ? "1 Zehner entbündeln!" : lang === "hu" ? "1 tízest feltörünk!" : lang === "ro" ? "desfacem 1 zece!" : "unbundle 1 ten!"}</span>
          </div>
        ),
        options: [
          { label: "24", correct: true },
          { label: "34", correct: false },
          { label: "26", correct: false },
          { label: "22", correct: false },
        ],
      },
      {
        type: "choose",
        question: { en: "63 – 28 = ?", hu: "63 – 28 = ?", de: "63 – 28 = ?", ro: "63 – 28 = ?" },
        visual: (_, color) => (
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-4">
              <PlaceValueBlock tens={6} ones={3} color={color} />
              <span className="text-xl font-black text-white/40">–</span>
              <PlaceValueBlock tens={2} ones={8} color="#ef444488" />
            </div>
            <span className="text-xs font-bold text-white/40">3–8? → {lang === "de" ? "13–8=5" : "13–8=5"}</span>
          </div>
        ),
        options: [
          { label: "35", correct: true },
          { label: "45", correct: false },
          { label: "25", correct: false },
          { label: "34", correct: false },
        ],
      },
      {
        type: "choose",
        question: { en: "81 – 46 = ?", hu: "81 – 46 = ?", de: "81 – 46 = ?", ro: "81 – 46 = ?" },
        visual: (_, color) => <MiniEquation parts={[81, "–", 46, "=", "?"]} color={color} />,
        options: [
          { label: "35", correct: true },
          { label: "45", correct: false },
          { label: "25", correct: false },
          { label: "36", correct: false },
        ],
      },
      {
        type: "choose",
        question: {
          en: "There are 52 kids. 27 go home. How many are left?",
          hu: "Van 52 gyerek. 27 hazamegy. Hány maradt?",
          de: "Es sind 52 Kinder. 27 gehen heim. Wie viele bleiben?",
          ro: "Sunt 52 copii. 27 pleacă. Câți rămân?",
        },
        visual: () => <span className="text-5xl">👦</span>,
        options: [
          { label: "25", correct: true },
          { label: "35", correct: false },
          { label: "15", correct: false },
          { label: "24", correct: false },
        ],
      },
      {
        type: "tap-reveal",
        instruction: {
          en: "Tap to see subtraction with borrowing!",
          hu: "Koppints az átviteles kivonás megtekintéséhez!",
          de: "Tippe um Subtraktion mit Übertrag zu sehen!",
          ro: "Atinge pentru a vedea scăderea cu împrumut!",
        },
        cols: 2,
        items: [
          { display: <span className="text-lg font-bold text-white/40">73–38=?</span>, hidden: <MiniEquation parts={[73,"–",38,"=",35]} color="#f59e0b" /> },
          { display: <span className="text-lg font-bold text-white/40">51–24=?</span>, hidden: <MiniEquation parts={[51,"–",24,"=",27]} color="#f59e0b" /> },
          { display: <span className="text-lg font-bold text-white/40">90–56=?</span>, hidden: <MiniEquation parts={[90,"–",56,"=",34]} color="#f59e0b" /> },
          { display: <span className="text-lg font-bold text-white/40">65–39=?</span>, hidden: <MiniEquation parts={[65,"–",39,"=",26]} color="#f59e0b" /> },
        ],
      },
    ];

    // ── i7: Times Tables — ×2, ×5, ×10, repeated addition ─────────────────
    case "i7": return [
      {
        type: "tap-reveal",
        instruction: {
          en: "Tap to discover the ×2 table!",
          hu: "Fedezd fel a 2-es szorzótáblát!",
          de: "Entdecke das 2er-Einmaleins!",
          ro: "Descoperă tabla înmulțirii cu 2!",
        },
        cols: 5,
        items: [1,2,3,4,5,6,7,8,9,10].map(n => ({
          display: <span className="text-base font-bold text-white/40">{n}×2</span>,
          hidden: (
            <div className="flex flex-col items-center">
              <span className="text-xs text-white/50">{n}×2</span>
              <span className="text-lg font-black text-white">{n * 2}</span>
            </div>
          ),
        })),
      },
      {
        type: "choose",
        question: { en: "3 × 5 = ?  (3 groups of 5)", hu: "3 × 5 = ? (3 csoport 5-tel)", de: "3 × 5 = ?  (3 Gruppen à 5)", ro: "3 × 5 = ? (3 grupuri de 5)" },
        visual: (_, color) => (
          <div className="flex gap-3">
            {[0,1,2].map(g => (
              <DotGroup key={g} count={5} color={g === 2 ? color : `${color}66`} size={16} />
            ))}
          </div>
        ),
        options: [
          { label: "10", correct: false },
          { label: "15", correct: true },
          { label: "20", correct: false },
          { label: "8", correct: false },
        ],
      },
      {
        type: "choose",
        question: { en: "4 × 2 = ?", hu: "4 × 2 = ?", de: "4 × 2 = ?", ro: "4 × 2 = ?" },
        visual: (_, color) => <DotArray rows={4} cols={2} color={color} />,
        options: [
          { label: "6", correct: false },
          { label: "8", correct: true },
          { label: "10", correct: false },
          { label: "4", correct: false },
        ],
      },
      {
        type: "choose",
        question: { en: "7 × 10 = ?", hu: "7 × 10 = ?", de: "7 × 10 = ?", ro: "7 × 10 = ?" },
        visual: (_, color) => <MiniEquation parts={[7, "×", 10, "=", "?"]} color={color} />,
        options: [
          { label: "70", correct: true },
          { label: "17", correct: false },
          { label: "7", correct: false },
          { label: "100", correct: false },
        ],
      },
      {
        type: "choose",
        question: {
          en: "2+2+2+2 is the same as…",
          hu: "2+2+2+2 ugyanaz, mint…",
          de: "2+2+2+2 ist dasselbe wie…",
          ro: "2+2+2+2 este la fel ca…",
        },
        visual: (_, color) => (
          <div className="flex flex-col items-center gap-1">
            <div className="flex gap-2">
              {[0,1,2,3].map(g => <DotGroup key={g} count={2} color={color} size={16} />)}
            </div>
            <span className="text-xs text-white/40">2+2+2+2 = ?×?</span>
          </div>
        ),
        options: [
          { label: "4 × 2", correct: true },
          { label: "2 × 2", correct: false },
          { label: "3 × 2", correct: false },
          { label: "4 + 2", correct: false },
        ],
      },
    ];

    // ── i8: Division — sharing, grouping, ÷ ────────────────────────────────
    case "i8": return [
      {
        type: "choose",
        question: {
          en: "Share 12 candies equally among 3 kids. How many each?",
          hu: "Oszd el 12 cukorkát 3 gyerek közt egyenlően! Hányat kap mindenki?",
          de: "Verteile 12 Bonbons gleichmäßig auf 3 Kinder. Wie viele bekommt jedes?",
          ro: "Împarte 12 bomboane la 3 copii egal. Câte primește fiecare?",
        },
        visual: (_, color) => <ShareVisual total={12} groups={3} color={color} />,
        options: [
          { label: "3", correct: false },
          { label: "4", correct: true },
          { label: "6", correct: false },
          { label: "2", correct: false },
        ],
      },
      {
        type: "choose",
        question: { en: "10 ÷ 2 = ?", hu: "10 ÷ 2 = ?", de: "10 ÷ 2 = ?", ro: "10 ÷ 2 = ?" },
        visual: (_, color) => <ShareVisual total={10} groups={2} color={color} />,
        options: [
          { label: "5", correct: true },
          { label: "4", correct: false },
          { label: "8", correct: false },
          { label: "3", correct: false },
        ],
      },
      {
        type: "choose",
        question: { en: "15 ÷ 5 = ?", hu: "15 ÷ 5 = ?", de: "15 ÷ 5 = ?", ro: "15 ÷ 5 = ?" },
        visual: (_, color) => <MiniEquation parts={[15, "÷", 5, "=", "?"]} color={color} />,
        options: [
          { label: "3", correct: true },
          { label: "5", correct: false },
          { label: "2", correct: false },
          { label: "10", correct: false },
        ],
      },
      {
        type: "choose",
        question: {
          en: "If 4 × 5 = 20, then 20 ÷ 5 = ?",
          hu: "Ha 4 × 5 = 20, akkor 20 ÷ 5 = ?",
          de: "Wenn 4 × 5 = 20, dann 20 ÷ 5 = ?",
          ro: "Dacă 4 × 5 = 20, atunci 20 ÷ 5 = ?",
        },
        visual: (_, color) => (
          <div className="flex flex-col items-center gap-1">
            <MiniEquation parts={[4, "×", 5, "=", 20]} color="#22c55e" />
            <MiniEquation parts={[20, "÷", 5, "=", "?"]} color={color} />
          </div>
        ),
        options: [
          { label: "4", correct: true },
          { label: "5", correct: false },
          { label: "10", correct: false },
          { label: "15", correct: false },
        ],
      },
      {
        type: "tap-reveal",
        instruction: {
          en: "Tap to discover division facts!",
          hu: "Fedezd fel az osztás összefüggéseit!",
          de: "Entdecke Divisionsaufgaben!",
          ro: "Descoperă operații de împărțire!",
        },
        cols: 2,
        items: [
          { display: <span className="text-lg font-bold text-white/40">6÷2=?</span>, hidden: <MiniEquation parts={[6,"÷",2,"=",3]} color="#22c55e" /> },
          { display: <span className="text-lg font-bold text-white/40">20÷10=?</span>, hidden: <MiniEquation parts={[20,"÷",10,"=",2]} color="#22c55e" /> },
          { display: <span className="text-lg font-bold text-white/40">8÷2=?</span>, hidden: <MiniEquation parts={[8,"÷",2,"=",4]} color="#22c55e" /> },
          { display: <span className="text-lg font-bold text-white/40">30÷5=?</span>, hidden: <MiniEquation parts={[30,"÷",5,"=",6]} color="#22c55e" /> },
        ],
      },
    ];

    // ── i9: Measurement & Word Problems — length, time, weight, money ──────
    case "i9": return [
      {
        type: "choose",
        question: {
          en: "Which is longer: 1 meter or 50 centimeters?",
          hu: "Melyik hosszabb: 1 méter vagy 50 centiméter?",
          de: "Was ist länger: 1 Meter oder 50 Zentimeter?",
          ro: "Care e mai lung: 1 metru sau 50 centimetri?",
        },
        visual: (_, color) => (
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-center">
                <div className="h-2 rounded-full" style={{ width: 100, background: color }} />
                <span className="text-xs font-bold text-white/50 mt-0.5">1 m = 100 cm</span>
              </div>
              <span className="text-lg text-white/30">?</span>
              <div className="flex flex-col items-center">
                <div className="h-2 rounded-full" style={{ width: 50, background: `${color}66` }} />
                <span className="text-xs font-bold text-white/50 mt-0.5">50 cm</span>
              </div>
            </div>
          </div>
        ),
        options: [
          { label: "1 m", correct: true },
          { label: "50 cm", correct: false },
        ],
      },
      {
        type: "choose",
        question: {
          en: "1 hour = ? minutes",
          hu: "1 óra = ? perc",
          de: "1 Stunde = ? Minuten",
          ro: "1 oră = ? minute",
        },
        visual: () => <span className="text-5xl">⏰</span>,
        options: [
          { label: "30", correct: false },
          { label: "60", correct: true },
          { label: "100", correct: false },
          { label: "45", correct: false },
        ],
      },
      {
        type: "choose",
        question: {
          en: "Which is heavier: 1 kg or 500 g?",
          hu: "Melyik nehezebb: 1 kg vagy 500 g?",
          de: "Was ist schwerer: 1 kg oder 500 g?",
          ro: "Care e mai greu: 1 kg sau 500 g?",
        },
        visual: (_, color) => (
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center">
              <span className="text-3xl">🏋️</span>
              <span className="text-sm font-black" style={{ color }}>1 kg</span>
            </div>
            <span className="text-2xl text-white/30">?</span>
            <div className="flex flex-col items-center">
              <span className="text-3xl">🏋️</span>
              <span className="text-sm font-black text-white/60">500 g</span>
            </div>
          </div>
        ),
        options: [
          { label: "1 kg", correct: true },
          { label: "500 g", correct: false },
        ],
      },
      {
        type: "choose",
        question: {
          en: "Lisa has 50 cents. She buys a pencil for 20 cents. How much left?",
          hu: "Lisának van 50 centje. Vesz egy ceruzát 20 centért. Mennyi maradt?",
          de: "Lisa hat 50 Cent. Sie kauft einen Bleistift für 20 Cent. Wie viel bleibt?",
          ro: "Lisa are 50 de cenți. Cumpără un creion cu 20 de cenți. Cât rămâne?",
        },
        visual: () => (
          <div className="flex items-center gap-2">
            <span className="text-3xl">💰</span>
            <span className="text-xl font-black text-white/40">–</span>
            <span className="text-3xl">✏️</span>
          </div>
        ),
        options: [
          { label: "30", correct: true },
          { label: "20", correct: false },
          { label: "40", correct: false },
          { label: "70", correct: false },
        ],
      },
      {
        type: "choose",
        question: {
          en: "A bus has 34 passengers. 18 get off. How many are still on the bus?",
          hu: "Egy buszon 34 utas van. 18 leszáll. Hányan maradtak?",
          de: "In einem Bus sitzen 34 Fahrgäste. 18 steigen aus. Wie viele sind noch drin?",
          ro: "Un autobuz are 34 pasageri. 18 coboară. Câți au rămas?",
        },
        visual: () => <span className="text-5xl">🚌</span>,
        options: [
          { label: "16", correct: true },
          { label: "26", correct: false },
          { label: "12", correct: false },
          { label: "18", correct: false },
        ],
      },
    ];

    default: return [];
  }
}

// ─── Main component ────────────────────────────────────────────────────────────

export default function G2TeachingSlide({ islandId, lang, color, onDone, onExit }: Props) {
  const rounds = useMemo(() => getIslandRounds(islandId, lang), [islandId, lang]);

  if (rounds.length === 0) {
    onDone(1, 1);
    return null;
  }

  return <TeachingShell rounds={rounds} lang={lang} color={color} onDone={onDone} onExit={onExit} />;
}
