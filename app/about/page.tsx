"use client";

import { useLang } from "@/components/LanguageProvider";
import SimplePageLayout from "@/components/SimplePageLayout";
import { Heart, Rocket, Globe2, Sparkles, MapPin } from "lucide-react";
import type { Language } from "@/lib/language";

const CONTENT: Record<Language, {
  title: string;
  subtitle: string;
  sections: { icon: any; title: string; body: string[] }[];
}> = {
  hu: {
    title: "Rólunk",
    subtitle: "A Plizio története és víziója",
    sections: [
      {
        icon: Heart,
        title: "Egy családi történet",
        body: [
          "A Plizio nem egy óriásvállalat terméke, hanem egy személyes, családi projektként indult. Erik Borota és családja álmodta meg, azzal a céllal, hogy a saját gyermekeiknek, és minden gyereknek egy jobb tanulási élményt biztosítsanak.",
          "Szívből építjük minden nap, mert hiszünk abban, hogy a tanulás lehet olyan izgalmas, mint a legjobb játékok."
        ]
      },
      {
        icon: Sparkles,
        title: "Miért építjük?",
        body: [
          "Szerettünk volna egy olyan platformot, ami a 6-14 éves korosztály nyelvén beszél. Ahol nem a büntetés, hanem a jutalmazás és a kíváncsiság hajtja előre a gyerekeket.",
          "A gamifikáció és az űr-téma segít abban, hogy az unalmasnak tűnő feladatok is küldetéssé váljanak."
        ]
      },
      {
        icon: Globe2,
        title: "Közös vízió",
        body: [
          "Célunk, hogy minden gyerek a saját anyanyelvén (legyen az magyar, német, román vagy angol) férjen hozzá minőségi oktatási tartalmakhoz. Ugyanakkor lehetőséget adunk arra is, hogy könnyedén elsajátítsanak más nyelveket is a platformon keresztül.",
          "Több mint egy játéktér: egy univerzum, ahol a tudás a legnagyobb kincs."
        ]
      },
      {
        icon: MapPin,
        title: "Utazás és felfedezés",
        body: [
          "A Plizio több mint tanulás: ingyenes úti kalauzokat építünk Európa és a világ több ezer településéhez, interaktív térképekkel, látnivalókkal, helyi eseményekkel és útitervezési tippekkel.",
          "Így a gyerek nemcsak tanulhat egy helyről, hanem a család fel is fedezheti azt, a térképtől a környékbeli nevezetességekig."
        ]
      },
      {
        icon: Rocket,
        title: "Csatlakozz az utazáshoz",
        body: [
          "Folyamatosan bővítjük a Plizio galaxisát új bolygókkal (tantárgyakkal) és kihívásokkal. Veletek együtt fedezzük fel a tudás univerzumát!"
        ]
      }
    ]
  },
  de: {
    title: "Über uns",
    subtitle: "Die Geschichte und Vision von Plizio",
    sections: [
      {
        icon: Heart,
        title: "Eine Familiengeschichte",
        body: [
          "Plizio ist kein Produkt eines Großkonzerns, sondern begann als persönliches Familienprojekt. Erik Borota und seine Familie haben es ins Leben gerufen, um ihren eigenen und allen anderen Kindern ein besseres Lernerlebnis zu bieten.",
          "Wir bauen es jeden Tag mit Herzblut auf, weil wir glauben, dass Lernen genauso spannend sein kann wie die besten Spiele."
        ]
      },
      {
        icon: Sparkles,
        title: "Warum bauen wir das?",
        body: [
          "Wir wollten eine Plattform schaffen, die die Sprache der 6-14-Jährigen spricht. Wo nicht Strafe, sondern Belohnung und Neugier die Kinder antreiben.",
          "Gamification und das Weltraumthema helfen dabei, scheinbar langweilige Aufgaben in spannende Missionen zu verwandeln."
        ]
      },
      {
        icon: Globe2,
        title: "Unsere Vision",
        body: [
          "Unser Ziel ist es, dass jedes Kind in seiner Muttersprache (sei es Deutsch, Ungarisch, Rumänisch oder Englisch) Zugang zu hochwertigen Lerninhalten hat. Gleichzeitig bieten wir die Möglichkeit, über die Plattform leicht andere Sprachen zu lernen.",
          "Mehr als nur ein Spielplatz: Ein Universum, in dem Wissen der größte Schatz ist."
        ]
      },
      {
        icon: MapPin,
        title: "Reisen & Entdecken",
        body: [
          "Plizio ist mehr als Lernen: Wir bauen kostenlose Reiseführer für tausende Orte in Europa und weltweit – mit interaktiven Karten, Sehenswürdigkeiten, lokalen Veranstaltungen und Tipps zur Reiseplanung.",
          "So lernt ein Kind nicht nur über einen Ort, sondern die ganze Familie kann ihn entdecken – von der Karte bis zu den Sehenswürdigkeiten in der Umgebung."
        ]
      },
      {
        icon: Rocket,
        title: "Begleite uns auf der Reise",
        body: [
          "Wir erweitern die Plizio-Galaxie ständig um neue Planeten (Fächer) und Herausforderungen. Gemeinsam mit euch entdecken wir das Universum des Wissens!"
        ]
      }
    ]
  },
  ro: {
    title: "Despre noi",
    subtitle: "Povestea și viziunea Plizio",
    sections: [
      {
        icon: Heart,
        title: "O poveste de familie",
        body: [
          "Plizio nu este produsul unei mari corporații, ci a început ca un proiect personal, de familie. Erik Borota și familia sa l-au imaginat cu scopul de a oferi copiilor lor, și tuturor copiilor, o experiență de învățare mai bună.",
          "Îl construim cu pasiune în fiecare zi, pentru că noi credem că învățarea poate fi la fel de captivantă ca cele mai bune jocuri."
        ]
      },
      {
        icon: Sparkles,
        title: "De ce construim asta?",
        body: [
          "Ne-am dorit o platformă care să vorbească pe limba copiilor de 6-14 ani. Unde nu pedeapsa, ci recompensa și curiozitatea îi motivează.",
          "Gamificarea și tematica spațială ajută la transformarea sarcinilor aparent plictisitoare în misiuni."
        ]
      },
      {
        icon: Globe2,
        title: "Viziunea noastră",
        body: [
          "Scopul nostru este ca fiecare copil să aibă acces la conținut educațional de calitate în limba maternă (fie ea română, maghiară, germană sau engleză). În același timp, oferim posibilitatea de a învăța cu ușurință și alte limbi prin intermediul platformei.",
          "Mai mult decât un loc de joacă: un univers în care cunoașterea este cea mai mare comoară."
        ]
      },
      {
        icon: MapPin,
        title: "Călătorii și descoperire",
        body: [
          "Plizio înseamnă mai mult decât învățare: construim ghiduri de călătorie gratuite pentru mii de localități din Europa și din toată lumea – cu hărți interactive, obiective turistice, evenimente locale și sfaturi de planificare.",
          "Astfel, copilul nu doar învață despre un loc, ci întreaga familie îl poate descoperi – de la hartă până la obiectivele din împrejurimi."
        ]
      },
      {
        icon: Rocket,
        title: "Alătură-te călătoriei",
        body: [
          "Extindem constant galaxia Plizio cu noi planete (materii) și provocări. Împreună cu voi explorăm universul cunoașterii!"
        ]
      }
    ]
  },
  en: {
    title: "About Us",
    subtitle: "The story and vision of Plizio",
    sections: [
      {
        icon: Heart,
        title: "A Family Story",
        body: [
          "Plizio isn't a product of a giant corporation; it started as a personal, family project. Erik Borota and his family envisioned it to provide a better learning experience for their own kids and all children.",
          "We build it from the heart every day because we believe learning can be just as exciting as the best games."
        ]
      },
      {
        icon: Sparkles,
        title: "Why are we building this?",
        body: [
          "We wanted a platform that speaks the language of 6-14 year olds. Where kids are driven not by punishment, but by rewards and curiosity.",
          "Gamification and the space theme help turn seemingly boring tasks into exciting missions."
        ]
      },
      {
        icon: Globe2,
        title: "Our Vision",
        body: [
          "Our goal is for every child to access high-quality educational content in their native language (whether English, German, Hungarian, or Romanian). At the same time, we provide an easy way to pick up other languages through the platform.",
          "More than just a playground: it's a universe where knowledge is the greatest treasure."
        ]
      },
      {
        icon: MapPin,
        title: "Travel & Discover",
        body: [
          "Plizio is more than learning: we build free travel guides for thousands of places across Europe and worldwide – with interactive maps, sights, local events and trip-planning tips.",
          "So a child doesn't just learn about a place; the whole family can explore it, from the map to the sights nearby."
        ]
      },
      {
        icon: Rocket,
        title: "Join the Journey",
        body: [
          "We are constantly expanding the Plizio galaxy with new planets (subjects) and challenges. Together with you, we explore the universe of knowledge!"
        ]
      }
    ]
  }
};

export default function AboutPage() {
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
                <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
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

      <div className="mt-12 pt-8 border-t border-white/10">
        <h2 className="text-xl font-bold text-white mb-3">
          {{
            de: "Weitere Projekte",
            hu: "További projektjeink",
            ro: "Alte proiecte ale noastre",
            en: "Our other projects",
          }[lang ?? "hu"]}
        </h2>
        <p className="text-white/70 leading-relaxed mb-4">
          {{
            de: "Plizio ist Teil einer Reihe von Projekten, die wir mit Liebe und Aufmerksamkeit für lokale Gemeinschaften bauen.",
            hu: "A Plizio egy projektcsalád része; mind a helyi közösségekre figyelve, szívvel-lélekkel készülnek.",
            ro: "Plizio face parte dintr-o familie de proiecte construite cu atenție pentru comunitățile locale.",
            en: "Plizio is part of a family of projects we build with care for local communities.",
          }[lang ?? "hu"]}
        </p>
        <ul className="space-y-3 text-white/80">
          <li>
            <a href="https://punktepass.de" className="text-cyan-300 hover:text-cyan-200 underline-offset-2 hover:underline font-semibold">PunktePass</a>
            {" — "}
            {{
              de: "Treueprogramm für lokale Geschäfte (Bäckerei, Eisdiele, Drogerie).",
              hu: "Hűségprogram helyi üzleteknek (pékség, fagyizó, drogéria).",
              ro: "Program de fidelitate pentru magazine locale (brutărie, gelaterie, droguerie).",
              en: "Loyalty program for local shops (bakery, ice cream parlour, drugstore).",
            }[lang ?? "hu"]}
          </li>
          <li>
            <a href="https://erepairshop.de" className="text-cyan-300 hover:text-cyan-200 underline-offset-2 hover:underline font-semibold">Erepairshop</a>
            {" — "}
            {{
              de: "Telefon- und Tablet-Reparatur (iPhone, Samsung, Huawei, Xiaomi).",
              hu: "Telefon- és tablet-javítás (iPhone, Samsung, Huawei, Xiaomi).",
              ro: "Reparații telefoane și tablete (iPhone, Samsung, Huawei, Xiaomi).",
              en: "Phone and tablet repair shop (iPhone, Samsung, Huawei, Xiaomi).",
            }[lang ?? "hu"]}
          </li>
          <li>
            <a href="https://diginachrichten.de" className="text-cyan-300 hover:text-cyan-200 underline-offset-2 hover:underline font-semibold">Diginachrichten</a>
            {" — "}
            {{
              de: "Digitale Nachrichten und Übersichten zu Technologie und Wirtschaft.",
              hu: "Digitális hírek, technológiai és gazdasági áttekintések.",
              ro: "Știri digitale, sinteze de tehnologie și economie.",
              en: "Digital news and concise tech & economy briefings.",
            }[lang ?? "hu"]}
          </li>
        </ul>
      </div>
    </SimplePageLayout>
  );
}
