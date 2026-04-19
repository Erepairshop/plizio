"use client";

import { useLang } from "@/components/LanguageProvider";
import SimplePageLayout from "@/components/SimplePageLayout";
import { Mail, MessageSquareHeart } from "lucide-react";
import type { Language } from "@/lib/language";

const CONTENT: Record<Language, {
  title: string;
  subtitle: string;
  emailLabel: string;
  feedbackTitle: string;
  feedbackText: string[];
}> = {
  hu: {
    title: "Kapcsolat",
    subtitle: "Lépj velünk kapcsolatba!",
    emailLabel: "E-mail címünk:",
    feedbackTitle: "A visszajelzésed fontos nekünk!",
    feedbackText: [
      "A Plizio egy folyamatosan fejlődő projekt. Minden észrevételt, ötletet, vagy esetleges hibajelentést szívesen fogadunk.",
      "Mivel ezt a platformot a gyerekeknek és szüleiknek, tanáraiknak építjük, a Ti véleményetek alapján alakítjuk a jövőbeli funkciókat.",
      "Írj nekünk bátran, ha kérdésed van, vagy csak megosztanád a tapasztalataidat!"
    ]
  },
  de: {
    title: "Kontakt",
    subtitle: "Nimm Kontakt mit uns auf!",
    emailLabel: "Unsere E-Mail-Adresse:",
    feedbackTitle: "Dein Feedback ist uns wichtig!",
    feedbackText: [
      "Plizio ist ein sich ständig weiterentwickelndes Projekt. Wir freuen uns über alle Kommentare, Ideen oder Fehlerberichte.",
      "Da wir diese Plattform für Kinder, Eltern und Lehrer aufbauen, gestalten wir zukünftige Funktionen basierend auf eurer Meinung.",
      "Schreib uns gerne, wenn du Fragen hast oder einfach nur deine Erfahrungen teilen möchtest!"
    ]
  },
  ro: {
    title: "Contact",
    subtitle: "Ia legătura cu noi!",
    emailLabel: "Adresa noastră de e-mail:",
    feedbackTitle: "Părerea ta contează!",
    feedbackText: [
      "Plizio este un proiect în continuă dezvoltare. Așteptăm cu drag orice observații, idei sau rapoarte de erori.",
      "Deoarece construim această platformă pentru copii, părinți și profesori, dezvoltăm viitoarele funcții bazându-ne pe feedback-ul vostru.",
      "Scrie-ne cu încredere dacă ai întrebări sau pur și simplu vrei să ne împărtășești experiența ta!"
    ]
  },
  en: {
    title: "Contact",
    subtitle: "Get in touch with us!",
    emailLabel: "Our email address:",
    feedbackTitle: "Your feedback is important to us!",
    feedbackText: [
      "Plizio is a continuously evolving project. We welcome any comments, ideas, or bug reports.",
      "Since we are building this platform for kids, parents, and teachers, we shape future features based on your input.",
      "Feel free to write to us if you have any questions or just want to share your experience!"
    ]
  }
};

export default function ContactPage() {
  const { lang } = useLang();
  const c = CONTENT[lang ?? "hu"];

  return (
    <SimplePageLayout title={c.title} subtitle={c.subtitle}>
      <div className="space-y-8 mt-6">
        
        <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center">
          <div className="w-14 h-14 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
            <Mail size={28} />
          </div>
          <h2 className="text-xl font-bold text-white mb-2">{c.emailLabel}</h2>
          <a href="mailto:borota25@gmail.com" className="text-2xl font-black text-indigo-400 hover:text-indigo-300 transition-colors">
            borota25@gmail.com
          </a>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          <div className="flex gap-4 items-start mb-4">
            <MessageSquareHeart className="text-pink-400 shrink-0" size={28} />
            <h2 className="text-xl font-bold text-white mt-0 mb-0">{c.feedbackTitle}</h2>
          </div>
          <div className="space-y-3">
            {c.feedbackText.map((p, i) => (
              <p key={i} className="text-white/80 leading-relaxed m-0">{p}</p>
            ))}
          </div>
        </div>

      </div>
    </SimplePageLayout>
  );
}
