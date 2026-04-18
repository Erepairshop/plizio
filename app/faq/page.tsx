"use client";

import { useLang } from "@/components/LanguageProvider";
import SimplePageLayout from "@/components/SimplePageLayout";

type Lang = "de" | "hu" | "ro" | "en";

const CONTENT: Record<Lang, { title: string; items: { q: string; a: string }[] }> = {
  de: {
    title: "FAQ",
    items: [
      { q: "Ist Plizio kostenlos?", a: "Ja, alle Lerninhalte sind kostenlos nutzbar." },
      { q: "Welche Sprachen werden unterstützt?", a: "Deutsch, Englisch, Ungarisch und Rumänisch. Alle Fächer sind in allen Sprachen verfügbar." },
      { q: "Brauche ich ein Konto?", a: "Nein, für die grundlegende Nutzung nicht. Ein Konto speichert den Fortschritt auf mehreren Geräten." },
      { q: "Gibt es Werbung?", a: "Nein. Plizio ist komplett werbefrei." },
      { q: "Funktioniert es offline?", a: "Grundsätzlich ja — nach dem ersten Laden funktionieren viele Spiele auch offline." },
      { q: "Welche Altersgruppe?", a: "6 bis 14 Jahre (Klasse 1 bis 8). Einige Spiele eignen sich auch für jüngere Kinder." },
    ],
  },
  hu: {
    title: "Gyakori kérdések",
    items: [
      { q: "Ingyenes a Plizio?", a: "Igen, minden tanulási tartalom ingyenes." },
      { q: "Milyen nyelvek támogatottak?", a: "Német, angol, magyar és román. Minden tantárgy elérhető minden nyelven." },
      { q: "Kell fiók?", a: "Az alapvető használathoz nem. A fiók több eszközön is menti a haladást." },
      { q: "Van reklám?", a: "Nincs. A Plizio teljesen reklámmentes." },
      { q: "Működik offline?", a: "Alapvetően igen — az első betöltés után sok játék offline is működik." },
      { q: "Milyen korosztály?", a: "6-14 év (1-8. osztály). Néhány játék fiatalabb gyerekeknek is alkalmas." },
    ],
  },
  ro: {
    title: "Întrebări frecvente",
    items: [
      { q: "Este Plizio gratuit?", a: "Da, tot conținutul educațional este gratuit." },
      { q: "Ce limbi sunt acceptate?", a: "Germană, engleză, maghiară și română. Toate materiile sunt disponibile în toate limbile." },
      { q: "Am nevoie de cont?", a: "Nu pentru utilizarea de bază. Un cont salvează progresul pe mai multe dispozitive." },
      { q: "Există reclame?", a: "Nu. Plizio este complet fără reclame." },
      { q: "Funcționează offline?", a: "În principiu da — după prima încărcare, multe jocuri funcționează și offline." },
      { q: "Ce vârstă?", a: "6 până la 14 ani (clasele 1-8). Unele jocuri sunt potrivite și pentru copii mai mici." },
    ],
  },
  en: {
    title: "FAQ",
    items: [
      { q: "Is Plizio free?", a: "Yes, all learning content is free to use." },
      { q: "Which languages are supported?", a: "German, English, Hungarian and Romanian. All subjects are available in all languages." },
      { q: "Do I need an account?", a: "Not for basic use. An account saves progress across multiple devices." },
      { q: "Are there ads?", a: "No. Plizio is completely ad-free." },
      { q: "Does it work offline?", a: "Mostly yes — after initial load, many games work offline." },
      { q: "Which age group?", a: "6 to 14 years (grades 1 to 8). Some games are also suitable for younger children." },
    ],
  },
};

export default function FaqPage() {
  const { lang } = useLang();
  const c = CONTENT[(lang as Lang) ?? "de"];
  return (
    <SimplePageLayout title={c.title}>
      {c.items.map((item, i) => (
        <details key={i} className="mb-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 group">
          <summary className="cursor-pointer font-bold text-white list-none flex items-center justify-between">
            <span>{item.q}</span>
            <span className="text-white/50 text-xl group-open:rotate-45 transition-transform">+</span>
          </summary>
          <p className="mt-3 text-white/70 text-sm leading-relaxed">{item.a}</p>
        </details>
      ))}
    </SimplePageLayout>
  );
}
