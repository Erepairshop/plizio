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
}

const LANG_NAMES: Record<string, string> = {
  en: "English",
  de: "German",
  hu: "Hungarian",
  ro: "Romanian",
};

/**
 * Ask the AI tutor a question about the current topic.
 * Returns the response text, or null on error.
 */
export async function askAITutor(opts: AIChatOptions): Promise<string | null> {
  const { question, context, lang, maxTokens = 150 } = opts;

  const langName = LANG_NAMES[lang] || "English";

  const system = [
    `You are a friendly science/education tutor for children aged 10-14.`,
    `Answer in ${langName}. Be brief: 2-3 sentences max.`,
    `Use simple language appropriate for the student's age.`,
    `If the question is about: ${context}`,
    `Do NOT use markdown formatting. Just plain text.`,
  ].join(" ");

  try {
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

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
    });

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
}): Promise<string | null> {
  const { question, wrongAnswer, correctAnswer, topic, lang } = opts;

  const langName = LANG_NAMES[lang] || "English";

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
  });
}
