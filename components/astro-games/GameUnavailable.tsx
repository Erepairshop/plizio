import type { AstroGameProps } from "./types";

type Lang = AstroGameProps<unknown>["lang"];

const COPY: Record<Lang, { title: string; detail: string }> = {
  de: { title: "Diese Aufgabe ist gerade nicht verfügbar.", detail: "Kehre zur Missionsauswahl zurück und versuche eine andere Aufgabe." },
  en: { title: "This activity is not available right now.", detail: "Return to the mission picker and try another activity." },
  hu: { title: "Ez a feladat jelenleg nem érhető el.", detail: "Térj vissza a küldetésválasztóhoz, és próbálj ki egy másik feladatot." },
  ro: { title: "Această activitate nu este disponibilă momentan.", detail: "Revino la lista misiunilor și încearcă o altă activitate." },
};

export default function GameUnavailable({ lang }: { lang: Lang }) {
  const text = COPY[lang] ?? COPY.en;
  return (
    <div className="mx-auto w-full max-w-lg rounded-2xl border border-amber-300/30 bg-amber-950/40 p-6 text-center text-white" role="alert">
      <p className="text-lg font-black">{text.title}</p>
      <p className="mt-2 text-sm text-white/70">{text.detail}</p>
    </div>
  );
}
