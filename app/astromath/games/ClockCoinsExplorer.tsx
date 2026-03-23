"use client";
// ClockCoinsExplorer — Clock & Coin learning (G1 i8)
// Now powered by ExplorerEngine v2

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const noSvg = () => null;

const LABELS = {
  en: {
    title: "Clock & Coins",
    clockIntro: "The SHORT hand shows the HOUR!",
    coinIntro: "Let's count the money!",
    clock3: "What time? The short hand points to 3",
    clock7: "What time? The short hand points to 7",
    clock11: "What time? The short hand points to 11",
    coin1: "Count: 10¢ + 10¢ + 5¢ + 5¢ + 1¢ = ?",
    coin2: "Count: 20¢ + 10¢ + 10¢ + 5¢ = ?",
    coin3: "Count: 50¢ + 20¢ + 10¢ + 5¢ + 5¢ + 2¢ = ?",
  },
  hu: {
    title: "Óra & Pénz",
    clockIntro: "A RÖVID mutató mutatja az ÓRÁT!",
    coinIntro: "Számoljuk meg a pénzt!",
    clock3: "Hány óra? A rövid mutató a 3-ra mutat",
    clock7: "Hány óra? A rövid mutató a 7-re mutat",
    clock11: "Hány óra? A rövid mutató a 11-re mutat",
    coin1: "Összesen: 10¢ + 10¢ + 5¢ + 5¢ + 1¢ = ?",
    coin2: "Összesen: 20¢ + 10¢ + 10¢ + 5¢ = ?",
    coin3: "Összesen: 50¢ + 20¢ + 10¢ + 5¢ + 5¢ + 2¢ = ?",
  },
  de: {
    title: "Uhr & Geld",
    clockIntro: "Der KURZE Zeiger zeigt die STUNDE!",
    coinIntro: "Zählen wir das Geld!",
    clock3: "Wie spät ist es? Der Zeiger zeigt auf 3",
    clock7: "Wie spät ist es? Der Zeiger zeigt auf 7",
    clock11: "Wie spät ist es? Der Zeiger zeigt auf 11",
    coin1: "Zusammen: 10¢ + 10¢ + 5¢ + 5¢ + 1¢ = ?",
    coin2: "Zusammen: 20¢ + 10¢ + 10¢ + 5¢ = ?",
    coin3: "Zusammen: 50¢ + 20¢ + 10¢ + 5¢ + 5¢ + 2¢ = ?",
  },
  ro: {
    title: "Ceas & Bani",
    clockIntro: "Acul SCURT arată ORA!",
    coinIntro: "Să numărăm banii!",
    clock3: "Cât este ceasul? Acul scurt arată la 3",
    clock7: "Cât este ceasul? Acul scurt arată la 7",
    clock11: "Cât este ceasul? Acul scurt arată la 11",
    coin1: "Total: 10¢ + 10¢ + 5¢ + 5¢ + 1¢ = ?",
    coin2: "Total: 20¢ + 10¢ + 10¢ + 5¢ = ?",
    coin3: "Total: 50¢ + 20¢ + 10¢ + 5¢ + 5¢ + 2¢ = ?",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "info",
      infoTitle: "title",
      infoText: "clockIntro",
      svg: noSvg,
      bulletKeys: ["clock3"],
    },
    {
      type: "mcq",
      infoTitle: "title",
      infoText: "clock3",
      svg: noSvg,
      questions: [{ question: "clock3", choices: ["3 o'clock", "7 o'clock", "11 o'clock", "1 o'clock"], answer: "3 o'clock" }],
    },
    {
      type: "mcq",
      infoTitle: "title",
      infoText: "clock7",
      svg: noSvg,
      questions: [{ question: "clock7", choices: ["7 o'clock", "3 o'clock", "11 o'clock", "5 o'clock"], answer: "7 o'clock" }],
    },
    {
      type: "mcq",
      infoTitle: "title",
      infoText: "coinIntro",
      svg: noSvg,
      questions: [{ question: "coin1", choices: ["31¢", "30¢", "32¢", "29¢"], answer: "31¢" }],
    },
    {
      type: "mcq",
      infoTitle: "title",
      infoText: "coinIntro",
      svg: noSvg,
      questions: [
        { question: "coin2", choices: ["45¢", "44¢", "46¢", "43¢"], answer: "45¢" },
        { question: "coin3", choices: ["92¢", "91¢", "93¢", "90¢"], answer: "92¢" },
        { question: "clock11", choices: ["11 o'clock", "3 o'clock", "7 o'clock", "9 o'clock"], answer: "11 o'clock" },
      ],
    },
  ],
};

const ClockCoinsExplorer = memo(function ClockCoinsExplorer({
  color = "#EC4899",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={1} explorerId="math_g1_clockcoins" color={color} lang={lang} onDone={onDone} />;
});

export default ClockCoinsExplorer;
