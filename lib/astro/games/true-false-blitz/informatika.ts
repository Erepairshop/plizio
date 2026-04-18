import { TrueFalseBlitzRound } from "../../../../components/astro-games/views/m2/TrueFalseBlitzView";

export const rounds: TrueFalseBlitzRound[] = [
  {
    id: "info-tf-1",
    statements: [
      {
        id: "s1",
        text: { en: "A virus can damage your computer hardware.", de: "Ein Virus kann Ihre Computerhardware beschädigen.", hu: "Egy vírus kárt tehet a számítógép hardverében.", ro: "Un virus poate deteriora hardware-ul computerului." },
        isTrue: false
      },
      {
        id: "s2",
        text: { en: "Linux is an operating system.", de: "Linux ist ein Betriebssystem.", hu: "A Linux egy operációs rendszer.", ro: "Linux este un sistem de operare." },
        isTrue: true
      },
      {
        id: "s3",
        text: { en: "RAM loses data when power is turned off.", de: "RAM verliert Daten, wenn der Strom ausgeschaltet wird.", hu: "A RAM elveszíti az adatokat, ha kikapcsoljuk az áramot.", ro: "RAM pierde datele când alimentarea este oprită." },
        isTrue: true
      },
      {
        id: "s4",
        text: { en: "An IP address is used to identify a computer on a network.", de: "Eine IP-Adresse wird verwendet, um einen Computer in einem Netzwerk zu identifizieren.", hu: "Az IP-címet a számítógép azonosítására használják a hálózaton.", ro: "O adresă IP este utilizată pentru a identifica un computer într-o rețea." },
        isTrue: true
      },
      {
        id: "s5",
        text: { en: "Python is a type of computer mouse.", de: "Python ist eine Art Computermaus.", hu: "A Python egyfajta számítógépes egér.", ro: "Python este un tip de mouse pentru computer." },
        isTrue: false
      }
    ]
  }
];
