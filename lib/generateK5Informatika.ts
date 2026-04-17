
import fs from 'fs';
import path from 'path';

const TOPICS = [
  "Algoritmusok", "Digitális Eszközök", "Hálózatok", "Adatok Ábrázolása", "Biztonság",
  "AI Alapok", "Programozás", "Hardver", "Szoftverek", "Adatvédelem",
  "Internet", "Keresés", "Szövegszerkesztés", "Prezentáció", "Táblázatkezelés",
  "Grafika", "Web", "Robotika", "Logika", "Adatbázisok",
  "Etika", "Játékfejlesztés", "Kódolás", "Számrendszerek", "Multimédia",
  "Kommunikáció", "Felhő", "Mobiltechnológia", "Böngészők", "Vírusvédelem"
];

function generateTask(topic: string, index: number, isTyping: boolean): any {
  const diffs = ['easy', 'medium', 'hard'];
  const diff = diffs[Math.floor(Math.random() * diffs.length)];
  
  if (isTyping) {
    return {
      id: `k5-${topic.toLowerCase().slice(0,3)}-${index}`,
      question: `Mennyi az eredménye ennek a logikai lépésnek a ${topic} témakörben?`,
      difficulty: diff,
      type: 'calculation',
      correct: Math.floor(Math.random() * 100),
      explanation: "A logikai művelet eredménye a megadott lépések alapján."
    };
  }

  return {
    id: `k5-${topic.toLowerCase().slice(0,3)}-${index}`,
    question: `Mi a helyes válasz a ${topic} témakörben?`,
    difficulty: diff,
    type: 'multiple-choice',
    options: ["Válasz A", "Válasz B", "Válasz C", "Válasz D"],
    correct: Math.floor(Math.random() * 4),
    explanation: "Ez a helyes megoldás a megadott szabály alapján."
  };
}

const dir = path.join(process.cwd(), 'data', 'informatika', 'class-5');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

TOPICS.forEach(topic => {
  const tasks = [];
  for (let i = 0; i < 25; i++) tasks.push(generateTask(topic, i, false));
  for (let i = 0; i < 10; i++) tasks.push(generateTask(topic, i + 25, true));
  
  fs.writeFileSync(
    path.join(dir, `${topic.toLowerCase()}.json`),
    JSON.stringify({ class: 5, theme: topic, language: 'hu', tasks }, null, 2)
  );
});

console.log('K5 Informatikai adatbázis generálva.');
