"use client";

import { useLang } from "@/components/LanguageProvider";
import SimplePageLayout from "@/components/SimplePageLayout";

type Lang = "de" | "hu" | "ro" | "en";

const CONTENT: Record<Lang, { title: string; body: { h: string; p: string }[] }> = {
  de: {
    title: "Für Eltern",
    body: [
      { h: "Was ist Plizio?", p: "Eine sichere, werbefreie Lernumgebung für Kinder von 6 bis 14. Zwei Lernmodi: Astro (spielerisches Lernen) und Test (Klassenarbeit-Vorbereitung)." },
      { h: "Mehrsprachig", p: "Ihr Kind kann in der eigenen Muttersprache lernen — oder eine Fremdsprache üben. Der Wechsel ist jederzeit möglich." },
      { h: "Fortschritt", p: "Jedes Kind sammelt Sterne und Karten für gelöste Aufgaben. Der Fortschritt ist altersgerecht gestaltet." },
      { h: "Datenschutz", p: "Wir sammeln keine personenbezogenen Daten ohne Einwilligung. Kinder können offline lernen." },
    ],
  },
  hu: {
    title: "Szülőknek",
    body: [
      { h: "Mi a Plizio?", p: "Biztonságos, reklámmentes tanulási környezet 6-14 éves gyerekeknek. Kétféle mód: Astro (játékos tanulás) és Teszt (dolgozat-felkészülés)." },
      { h: "Többnyelvű", p: "Gyereked a saját anyanyelvén tanulhat — vagy idegen nyelvet gyakorolhat. A váltás bármikor lehetséges." },
      { h: "Haladás", p: "Minden gyerek csillagokat és kártyákat gyűjt a megoldott feladatokért. A haladás életkor-megfelelő." },
      { h: "Adatvédelem", p: "Nem gyűjtünk személyes adatokat hozzájárulás nélkül. A gyerekek offline is tanulhatnak." },
    ],
  },
  ro: {
    title: "Pentru părinți",
    body: [
      { h: "Ce este Plizio?", p: "Un mediu de învățare sigur și fără reclame pentru copii de la 6 la 14 ani. Două moduri: Astro (învățare prin joc) și Test (pregătire pentru teze)." },
      { h: "Multilingv", p: "Copilul tău poate învăța în limba maternă — sau exersa o limbă străină. Comutarea este posibilă oricând." },
      { h: "Progres", p: "Fiecare copil colectează stele și cartonașe pentru sarcinile rezolvate. Progresul este adaptat vârstei." },
      { h: "Confidențialitate", p: "Nu colectăm date personale fără consimțământ. Copiii pot învăța offline." },
    ],
  },
  en: {
    title: "For Parents",
    body: [
      { h: "What is Plizio?", p: "A safe, ad-free learning environment for children ages 6 to 14. Two modes: Astro (gamified learning) and Test (exam preparation)." },
      { h: "Multilingual", p: "Your child can learn in their native language — or practice a foreign one. Language switching anytime." },
      { h: "Progress", p: "Each child collects stars and cards for completed tasks. Progress is age-appropriate." },
      { h: "Privacy", p: "We do not collect personal data without consent. Children can learn offline." },
    ],
  },
};

export default function ParentsPage() {
  const { lang } = useLang();
  const c = CONTENT[(lang as Lang) ?? "de"];
  return (
    <SimplePageLayout title={c.title}>
      {c.body.map((item, i) => (
        <div key={i} className="mb-6">
          <h2 className="text-xl font-bold text-white mb-2">{item.h}</h2>
          <p className="text-white/75">{item.p}</p>
        </div>
      ))}
    </SimplePageLayout>
  );
}
