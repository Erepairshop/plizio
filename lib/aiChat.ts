// ─── AI Chat Client ─────────────────────────────────────────────────────────
// Calls Supabase Edge Function "ai-chat" which proxies to Claude Haiku
// ─────────────────────────────────────────────────────────────────────────────

const FUNCTION_URL =
  (typeof window !== "undefined" && process.env.NEXT_PUBLIC_SUPABASE_URL
    ? process.env.NEXT_PUBLIC_SUPABASE_URL
    : ""
  ) + "/functions/v1/ai-chat";

interface AIChatOptions {
  /** User's question */
  question: string;
  /** Context about what they're learning (topic, round info, etc.) */
  context: string;
  /** Language code: "en" | "de" | "hu" | "ro" */
  lang: string;
  /** Max response tokens (default 150) */
  maxTokens?: number;
  /** Grade/class level (1-8). Adjusts language complexity. */
  grade?: number;
}

const LANG_NAMES: Record<string, string> = {
  en: "English",
  de: "German",
  hu: "Hungarian",
  ro: "Romanian",
};

// Age ranges per grade for appropriate language level
function gradeToAge(grade?: number): string {
  if (!grade) return "10-14";
  if (grade <= 2) return "6-7";
  if (grade <= 4) return "8-10";
  if (grade <= 6) return "10-12";
  return "12-14";
}

function gradeToComplexity(grade?: number, lang?: string): string {
  if (!grade) return "";
  const isDE = lang === "de";
  const isHU = lang === "hu";
  const isRO = lang === "ro";

  if (grade <= 2) {
    if (isDE) return "Benutze sehr einfache, kurze Sätze. Nur Wörter die ein 6-7 jähriges Kind kennt. Keine Fachbegriffe. Erkläre wie einem Erstklässler.";
    if (isHU) return "Használj nagyon egyszerű, rövid mondatokat. Csak olyan szavakat, amit egy 6-7 éves gyerek ismer. Magyarázz úgy, mint egy elsősnek.";
    if (isRO) return "Folosește propoziții foarte simple și scurte. Doar cuvinte pe care un copil de 6-7 ani le cunoaște.";
    return "Use very simple, short sentences. Only words a 6-7 year old would know. No technical terms. Explain as if to a 1st grader.";
  }
  if (grade <= 4) {
    if (isDE) return "Benutze einfache Sätze. Erkläre wie einem Grundschüler (Klasse 3-4). Keine komplizierten Fachbegriffe.";
    if (isHU) return "Használj egyszerű mondatokat. Magyarázz úgy, mint egy 3-4. osztályosnak.";
    if (isRO) return "Folosește propoziții simple. Explică ca pentru un elev de clasa 3-4.";
    return "Use simple sentences. Explain as if to a 3rd-4th grader. No complicated terms.";
  }
  if (grade <= 6) {
    if (isDE) return "Erkläre verständlich für Klasse 5-6. Fachbegriffe sind ok, aber kurz erklärt.";
    if (isHU) return "Magyarázz érthetően egy 5-6. osztályosnak. Szakkifejezések oké, de röviden magyarázd el.";
    if (isRO) return "Explică pe înțelesul unui elev de clasa 5-6. Termenii tehnici sunt ok, dar explică-i pe scurt.";
    return "Explain clearly for a 5th-6th grader. Technical terms are ok but briefly explained.";
  }
  return "";
}

/**
 * Ask the AI tutor a question about the current topic.
 * Returns the response text, or null on error.
 */
export async function askAITutor(opts: AIChatOptions): Promise<string | null> {
  const { question, context, lang, maxTokens = 150, grade } = opts;

  const langName = LANG_NAMES[lang] || "English";
  const ageRange = gradeToAge(grade);
  const complexity = gradeToComplexity(grade, lang);

  const system = [
    `You are a friendly education tutor for children aged ${ageRange}.`,
    `Answer in ${langName}. Be brief: 2-3 sentences max.`,
    complexity || `Use simple language appropriate for the student's age.`,
    `If the question is about: ${context}`,
    `Do NOT use markdown formatting. Just plain text.`,
  ].join(" ");

  try {
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000); // 8s timeout

    const res = await fetch(FUNCTION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${anonKey}`,
        "apikey": anonKey,
      },
      body: JSON.stringify({
        system,
        messages: [{ role: "user", content: question }],
        maxTokens,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    if (!res.ok) return null;

    const data = await res.json();
    return data.text || null;
  } catch {
    return null;
  }
}

/**
 * Ask why a specific answer is correct (after wrong MCQ answer).
 */
export async function askWhyCorrect(opts: {
  question: string;
  wrongAnswer: string;
  correctAnswer: string;
  topic: string;
  lang: string;
  grade?: number;
}): Promise<string | null> {
  const { question, wrongAnswer, correctAnswer, topic, lang, grade } = opts;

  const userMsg = lang === "hu"
    ? `A kérdés: "${question}". Én "${wrongAnswer}"-t válaszoltam, de a helyes válasz "${correctAnswer}". Miért?`
    : lang === "de"
    ? `Die Frage: "${question}". Ich habe "${wrongAnswer}" gewählt, aber die richtige Antwort ist "${correctAnswer}". Warum?`
    : lang === "ro"
    ? `Întrebarea: "${question}". Am ales "${wrongAnswer}", dar răspunsul corect este "${correctAnswer}". De ce?`
    : `The question: "${question}". I chose "${wrongAnswer}", but the correct answer is "${correctAnswer}". Why?`;

  return askAITutor({
    question: userMsg,
    context: topic,
    lang,
    maxTokens: 200,
    grade,
  });
}
