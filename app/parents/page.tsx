"use client";

import { useLang } from "@/components/LanguageProvider";
import SimplePageLayout from "@/components/SimplePageLayout";
import { ShieldCheck, LineChart, Play, Settings } from "lucide-react";
import type { Language } from "@/lib/language";

const CONTENT: Record<Language, {
  title: string;
  subtitle: string;
  sections: { icon: any; title: string; body: string[] }[];
}> = {
  hu: {
    title: "Szülőknek",
    subtitle: "Útmutató a Plizio használatához otthon",
    sections: [
      {
        icon: Play,
        title: "Első lépések és beállítás",
        body: [
          "A Plizio azonnal használható regisztráció nélkül is! Az alkalmazás elmenti a gyermek előrehaladását (pontokat, megnyitott pályákat) a böngészőben.",
          "Javasoljuk, hogy állítsd be a megfelelő nyelvet a kezdőképernyőn, és hagyd, hogy gyermeked maga fedezze fel a 'bolygókat'."
        ]
      },
      {
        icon: Settings,
        title: "A gamifikáció szerepe",
        body: [
          "A platform pontokat és jutalmakat ad a helyes válaszokért. Ez az úgynevezett gamifikáció (játékosítás) fenntartja a motivációt.",
          "Támogasd a nyelvi környezetet is: hagyd, hogy a gyerekek megpróbáljanak egy-egy tantárgyat idegen nyelven is teljesíteni, ha érdekli őket."
        ]
      },
      {
        icon: ShieldCheck,
        title: "Biztonság és képernyőidő",
        body: [
          "A Plizio 100%-ban biztonságos környezet, reklámok és rejtett költségek nélkül. Mivel a tanulás digitális formában történik, javasoljuk a képernyőidő korlátozását.",
          "Napi 20-30 perc Plizio-használat már elegendő ahhoz, hogy a gyerekek játékosan rögzítsék az iskolai anyagot anélkül, hogy túlterhelődnének."
        ]
      },
      {
        icon: LineChart,
        title: "Előrehaladás nyomon követése",
        body: [
          "A kezdőképernyőn láthatjátok a gyermek összegyűjtött pontjait és kitüntetéseit. Beszélgessetek el a legújabb 'űrbeli felfedezésekről' és dicsérd meg az elért szintekért!",
          "A jövőben tervezünk dedikált szülői felületet is, de jelenleg a legjobb módszer a közös élmény megosztása."
        ]
      }
    ]
  },
  de: {
    title: "Für Eltern",
    subtitle: "Leitfaden zur Nutzung von Plizio zu Hause",
    sections: [
      {
        icon: Play,
        title: "Erste Schritte und Einrichtung",
        body: [
          "Plizio kann sofort und ohne Registrierung genutzt werden! Die App speichert den Fortschritt des Kindes (Punkte, freigeschaltete Level) im Browser.",
          "Wir empfehlen, die richtige Sprache auf dem Startbildschirm einzustellen und das Kind die 'Planeten' selbst erkunden zu lassen."
        ]
      },
      {
        icon: Settings,
        title: "Die Rolle der Gamification",
        body: [
          "Die Plattform vergibt Punkte und Belohnungen für richtige Antworten. Diese Gamification hält die Motivation aufrecht.",
          "Unterstütze auch die sprachliche Umgebung: Lass die Kinder versuchen, ein Fach auch in einer Fremdsprache zu absolvieren, wenn sie Interesse haben."
        ]
      },
      {
        icon: ShieldCheck,
        title: "Sicherheit und Bildschirmzeit",
        body: [
          "Plizio ist eine zu 100 % sichere Umgebung, ohne Werbung und versteckte Kosten. Da das Lernen digital stattfindet, empfehlen wir, die Bildschirmzeit zu begrenzen.",
          "Bereits 20-30 Minuten Plizio-Nutzung pro Tag reichen aus, damit Kinder den Schulstoff spielerisch festigen, ohne überfordert zu werden."
        ]
      },
      {
        icon: LineChart,
        title: "Fortschritt verfolgen",
        body: [
          "Auf dem Startbildschirm könnt ihr die gesammelten Punkte und Auszeichnungen des Kindes sehen. Sprecht über die neuesten 'Weltraumentdeckungen' und lobt die erreichten Level!",
          "In Zukunft planen wir auch einen speziellen Elternbereich, aber derzeit ist es am besten, die Erfahrungen gemeinsam zu teilen."
        ]
      }
    ]
  },
  ro: {
    title: "Pentru Părinți",
    subtitle: "Ghid de utilizare Plizio acasă",
    sections: [
      {
        icon: Play,
        title: "Primii pași și configurarea",
        body: [
          "Plizio poate fi folosit imediat, fără înregistrare! Aplicația salvează progresul copilului (puncte, niveluri deblocate) în browser.",
          "Vă recomandăm să setați limba potrivită pe ecranul de pornire și să lăsați copilul să exploreze 'planetele' pe cont propriu."
        ]
      },
      {
        icon: Settings,
        title: "Rolul gamificării",
        body: [
          "Platforma acordă puncte și recompense pentru răspunsurile corecte. Această gamificare menține motivația ridicată.",
          "Susțineți și mediul lingvistic: lăsați copiii să încerce o materie și într-o limbă străină, dacă sunt interesați."
        ]
      },
      {
        icon: ShieldCheck,
        title: "Siguranță și timp petrecut în fața ecranului",
        body: [
          "Plizio este un mediu 100% sigur, fără reclame sau costuri ascunse. Deoarece învățarea are loc în format digital, vă recomandăm să limitați timpul petrecut pe ecran.",
          "20-30 de minute de Plizio pe zi sunt suficiente pentru ca cei mici să asimileze materia școlară prin joacă, fără a se suprasolicita."
        ]
      },
      {
        icon: LineChart,
        title: "Urmărirea progresului",
        body: [
          "Pe ecranul de pornire puteți vedea punctele și insignele adunate de copil. Discutați despre cele mai recente 'descoperiri spațiale' și lăudați-l pentru nivelurile atinse!",
          "Pe viitor plănuim și o interfață dedicată părinților, dar deocamdată cea mai bună metodă este împărtășirea experienței împreună."
        ]
      }
    ]
  },
  en: {
    title: "For Parents",
    subtitle: "Guide to using Plizio at home",
    sections: [
      {
        icon: Play,
        title: "Getting Started",
        body: [
          "Plizio is ready to use instantly without registration! The app saves your child's progress (points, unlocked levels) directly in the browser.",
          "We recommend setting the appropriate language on the home screen and letting your child explore the 'planets' independently."
        ]
      },
      {
        icon: Settings,
        title: "The Power of Gamification",
        body: [
          "The platform awards points and achievements for correct answers. This gamification is key to keeping motivation high.",
          "Support language exploration too: encourage kids to try subjects in a different language if they show interest."
        ]
      },
      {
        icon: ShieldCheck,
        title: "Safety & Screen Time",
        body: [
          "Plizio is a 100% safe environment with no ads and no hidden costs. Because learning is digital, we suggest setting healthy screen time limits.",
          "Just 20-30 minutes of Plizio a day is enough for kids to playfully reinforce school material without feeling overwhelmed."
        ]
      },
      {
        icon: LineChart,
        title: "Tracking Progress",
        body: [
          "On the home screen, you can see your child's collected points and badges. Talk about their latest 'space discoveries' and praise them for their achievements!",
          "We are planning a dedicated parent dashboard in the future, but sharing the experience together is the best approach right now."
        ]
      }
    ]
  }
};

export default function ParentsPage() {
  const { lang } = useLang();
  const c = CONTENT[lang ?? "hu"];

  return (
    <SimplePageLayout title={c.title} subtitle={c.subtitle}>
      <div className="space-y-10 mt-6">
        {c.sections.map((section, idx) => {
          const Icon = section.icon;
          return (
            <div key={idx} className="flex gap-4 sm:gap-6">
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                  <Icon size={20} />
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-3 mt-0">{section.title}</h2>
                <div className="space-y-3">
                  {section.body.map((p, i) => (
                    <p key={i} className="text-white/80 leading-relaxed m-0">{p}</p>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SimplePageLayout>
  );
}
