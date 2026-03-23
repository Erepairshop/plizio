"use client";
// AddSubExplorer — Addition/Subtraction visualized (G1 i2, i3)
// Now powered by ExplorerEngine v2

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const noSvg = () => null;

const LABELS = {
  en: {
    addTitle: "Addition Explorer",
    subTitle: "Subtraction Explorer",
    addIntro: "When we ADD, numbers get BIGGER!",
    subIntro: "When we SUBTRACT, numbers get SMALLER!",
    add3plus2: "3 apples + 2 apples = ?",
    add4plus3: "4 stars + 3 stars = ?",
    add2plus5: "2 flowers + 5 flowers = ?",
    sub7minus3: "7 birds - 3 birds = ?",
    sub6minus2: "6 stars - 2 stars = ?",
    sub8minus5: "8 flowers - 5 flowers = ?",
  },
  hu: {
    addTitle: "Összeadás felfedezés",
    subTitle: "Kivonás felfedezés",
    addIntro: "Ha HOZZÁADUNK, a számok NAGYOBBAK lesznek!",
    subIntro: "Ha ELVESZÜNK, a számok KISEBBEK lesznek!",
    add3plus2: "3 alma + 2 alma = ?",
    add4plus3: "4 csillag + 3 csillag = ?",
    add2plus5: "2 virág + 5 virág = ?",
    sub7minus3: "7 madár - 3 madár = ?",
    sub6minus2: "6 csillag - 2 csillag = ?",
    sub8minus5: "8 virág - 5 virág = ?",
  },
  de: {
    addTitle: "Addition entdecken",
    subTitle: "Subtraktion entdecken",
    addIntro: "Wenn wir ADDIEREN, werden Zahlen GRÖSSER!",
    subIntro: "Wenn wir SUBTRAHIEREN, werden Zahlen KLEINER!",
    add3plus2: "3 Äpfel + 2 Äpfel = ?",
    add4plus3: "4 Sterne + 3 Sterne = ?",
    add2plus5: "2 Blumen + 5 Blumen = ?",
    sub7minus3: "7 Vögel - 3 Vögel = ?",
    sub6minus2: "6 Sterne - 2 Sterne = ?",
    sub8minus5: "8 Blumen - 5 Blumen = ?",
  },
  ro: {
    addTitle: "Explorare adunare",
    subTitle: "Explorare scădere",
    addIntro: "Când ADUNĂM, numerele devin MAI MARI!",
    subIntro: "Când SCĂDEM, numerele devin MAI MICI!",
    add3plus2: "3 mere + 2 mere = ?",
    add4plus3: "4 stele + 3 stele = ?",
    add2plus5: "2 flori + 5 flori = ?",
    sub7minus3: "7 păsări - 3 păsări = ?",
    sub6minus2: "6 stele - 2 stele = ?",
    sub8minus5: "8 flori - 5 flori = ?",
  },
};

const ADD_DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "info",
      infoTitle: "addTitle",
      infoText: "addIntro",
      svg: noSvg,
      bulletKeys: ["add3plus2"],
    },
    {
      type: "mcq",
      infoTitle: "addTitle",
      infoText: "add3plus2",
      svg: noSvg,
      questions: [{ question: "add3plus2", choices: ["5", "3", "6", "2"], answer: "5" }],
    },
    {
      type: "mcq",
      infoTitle: "addTitle",
      infoText: "add4plus3",
      svg: noSvg,
      questions: [{ question: "add4plus3", choices: ["7", "5", "8", "6"], answer: "7" }],
    },
    {
      type: "mcq",
      infoTitle: "addTitle",
      infoText: "add2plus5",
      svg: noSvg,
      questions: [{ question: "add2plus5", choices: ["7", "5", "8", "6"], answer: "7" }],
    },
    {
      type: "mcq",
      infoTitle: "addTitle",
      infoText: "addIntro",
      svg: noSvg,
      questions: [
        { question: "add3plus2", choices: ["5", "3", "6", "2"], answer: "5" },
        { question: "add4plus3", choices: ["7", "5", "8", "6"], answer: "7" },
        { question: "add2plus5", choices: ["7", "5", "8", "6"], answer: "7" },
      ],
    },
  ],
};

const SUB_DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "info",
      infoTitle: "subTitle",
      infoText: "subIntro",
      svg: noSvg,
      bulletKeys: ["sub7minus3"],
    },
    {
      type: "mcq",
      infoTitle: "subTitle",
      infoText: "sub7minus3",
      svg: noSvg,
      questions: [{ question: "sub7minus3", choices: ["4", "5", "6", "3"], answer: "4" }],
    },
    {
      type: "mcq",
      infoTitle: "subTitle",
      infoText: "sub6minus2",
      svg: noSvg,
      questions: [{ question: "sub6minus2", choices: ["4", "3", "5", "2"], answer: "4" }],
    },
    {
      type: "mcq",
      infoTitle: "subTitle",
      infoText: "sub8minus5",
      svg: noSvg,
      questions: [{ question: "sub8minus5", choices: ["3", "4", "5", "2"], answer: "3" }],
    },
    {
      type: "mcq",
      infoTitle: "subTitle",
      infoText: "subIntro",
      svg: noSvg,
      questions: [
        { question: "sub7minus3", choices: ["4", "5", "6", "3"], answer: "4" },
        { question: "sub6minus2", choices: ["4", "3", "5", "2"], answer: "4" },
        { question: "sub8minus5", choices: ["3", "4", "5", "2"], answer: "3" },
      ],
    },
  ],
};

const AddSubExplorer = memo(function AddSubExplorer({
  color = "#3B82F6",
  onDone,
  lang = "en",
  isAdd = true,
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
  isAdd?: boolean;
}) {
  const def = isAdd ? ADD_DEF : SUB_DEF;
  return <ExplorerEngine def={def} grade={1} explorerId="math_g1_addsub" color={color} lang={lang} onDone={onDone} />;
});

export default AddSubExplorer;
