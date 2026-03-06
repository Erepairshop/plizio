import Link from "next/link";

const GRADES = [
  { grade: 1, age: "6–7", topics: ["Phonics", "Sight Words", "Nouns & Verbs", "Punctuation"] },
  { grade: 2, age: "7–8", topics: ["Parts of Speech", "Spelling", "Sentence Types", "Vocabulary"] },
  { grade: 3, age: "8–9", topics: ["Noun Forms", "Verb Tenses", "Conjunctions", "Prefixes/Suffixes"] },
  { grade: 4, age: "9–10", topics: ["Relative Pronouns", "Modal Verbs", "Figurative Language", "Punctuation"] },
  { grade: 5, age: "10–11", topics: ["Perfect Tenses", "Correlative Conjunctions", "Metaphors", "Context Clues"] },
  { grade: 6, age: "11–12", topics: ["Pronoun Case", "Sentence Variety", "Greek/Latin Roots", "Clauses"] },
  { grade: 7, age: "12–13", topics: ["Verbals & Phrases", "Clause Types", "Semicolons", "Connotation"] },
  { grade: 8, age: "13–14", topics: ["Subjunctive Mood", "Passive Voice", "Formal Style", "Literary Terms"] },
];

export default function EnglishTestHub() {
  return (
    <div className="min-h-screen bg-[#0A0A1A] text-white px-4 py-8 max-w-3xl mx-auto">
      {/* Breadcrumb */}
      <nav className="text-sm text-white/40 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-white/70 transition-colors">
          Plizio
        </Link>
        <span>/</span>
        <span className="text-white/70">English Test</span>
      </nav>

      {/* Hero */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-4 text-white">
          English Test — Free Online Grammar Quiz for Grades 1–8
        </h1>
        <p className="text-white/70 text-base leading-relaxed mb-6">
          Practice English grammar, spelling, vocabulary, and sentence structure with our free online English test.
          Covering all Common Core ELA Language standards for Grades 1 through 8 — no login, no download required.
          Select your grade and start the quiz instantly!
        </p>
        <Link
          href="/englishtest/"
          className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-bold px-6 py-3 rounded-xl transition-colors"
        >
          Start English Test Now →
        </Link>
      </header>

      {/* Grade Grid */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-6 text-white/90">
          English Test by Grade
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {GRADES.map(({ grade, age, topics }) => (
            <Link
              key={grade}
              href={`/english-test/grade-${grade}/`}
              className="bg-white/5 border border-white/10 hover:border-blue-500/50 rounded-2xl p-5 transition-colors group"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors">
                  Grade {grade} English Test
                </h3>
                <span className="text-xs text-white/40 bg-white/10 px-2 py-1 rounded-lg">
                  Age {age}
                </span>
              </div>
              <ul className="space-y-1">
                {topics.map((t) => (
                  <li key={t} className="text-xs text-white/50 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-blue-500/50 flex-shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="mb-10 space-y-4">
        <h2 className="text-xl font-semibold text-white/90">
          About the English Grammar Test
        </h2>
        <p className="text-white/65 text-sm leading-relaxed">
          The Plizio English Test is a free, browser-based grammar and vocabulary quiz for US elementary and middle
          school students (Grades 1–8). All questions are aligned with the Common Core State Standards for English
          Language Arts (ELA) — specifically the Language strand, covering grammar, usage, mechanics, vocabulary
          acquisition, and figurative language.
        </p>
        <p className="text-white/65 text-sm leading-relaxed">
          Students can select their grade, choose the topics they want to practice, and take a 10–15 question quiz
          with instant feedback. The test covers multiple-choice and short-answer questions across all key ELA
          Language topics. At the end, students receive a letter grade (A–F) based on their performance.
        </p>
        <p className="text-white/65 text-sm leading-relaxed">
          The test is completely free — no account, no subscription, no download. It can be taken on any device
          (phone, tablet, or computer) and repeated as many times as needed. It is ideal for homework practice,
          test preparation, and identifying areas for improvement.
        </p>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "English Test — Free Grammar Quiz Grades 1–8",
            description:
              "Free online English grammar test for grades 1–8. Practice Common Core ELA: parts of speech, sentence structure, spelling, punctuation, vocabulary and more.",
            url: "https://plizio.com/english-test/",
            publisher: {
              "@type": "Organization",
              name: "Plizio",
              url: "https://plizio.com",
            },
            hasPart: GRADES.map(({ grade }) => ({
              "@type": "WebPage",
              name: `English Test Grade ${grade}`,
              url: `https://plizio.com/english-test/grade-${grade}/`,
            })),
          }),
        }}
      />
    </div>
  );
}
