import Link from "next/link";

// ─── GRADE DATA ────────────────────────────────────────────────────────────────
const GRADE_DATA: Record<number, {
  age: string;
  topics: { icon: string; label: string }[];
  intro: string;
  deepDive: string[];
  faqs: { q: string; a: string }[];
}> = {
  1: {
    age: "6–7",
    topics: [
      { icon: "🔤", label: "Phonics & Letters" },
      { icon: "📝", label: "Sight Words" },
      { icon: "📖", label: "Simple Sentences" },
      { icon: "✏️", label: "Capitalization" },
      { icon: "🔡", label: "Nouns & Verbs" },
      { icon: "🗣️", label: "Punctuation Basics" },
    ],
    intro: "Our free English test for Grade 1 helps students aged 6–7 practice phonics, sight words, simple sentences, and basic grammar. This English grammar quiz for Grade 1 is perfect for the start of elementary school — no login required, straight in your browser.",
    deepDive: [
      "In Grade 1, students learn the foundations of English literacy: letter sounds, blends, and phonics patterns. They practice decoding simple words and develop their reading fluency with short, age-appropriate sentences. Our English test for Grade 1 makes this practice fun and interactive.",
      "Sight words are a critical building block in 1st grade — high-frequency words that students should recognize instantly. Our quiz tests common sight words like 'the,' 'and,' 'is,' and 'was,' helping children build reading speed and comprehension.",
      "Basic grammar concepts such as nouns (naming words) and verbs (action words) are introduced in Grade 1. Students learn to identify people, places, and things, and to describe actions. Capitalization and end punctuation (period, question mark) are also covered.",
      "Parents and teachers can use this free English Grammar Test for Grade 1 anytime for practice or to check learning progress. All questions align with Common Core ELA standards and can be repeated as many times as needed — no download, no account.",
    ],
    faqs: [
      { q: "What do students learn in English Grade 1?", a: "Grade 1 students learn phonics, letter-sound relationships, sight words, simple nouns and verbs, basic capitalization (start of sentence, names), and end punctuation (period, question mark, exclamation mark)." },
      { q: "Is this English test for Grade 1 free?", a: "Yes, completely free. No account or download needed." },
      { q: "How long does the Grade 1 English test take?", a: "A test session takes about 5–10 minutes, depending on the number of questions. Students can retry as many times as they like." },
      { q: "What age is this test for?", a: "The test is designed for 1st graders aged 6–7. It also works as a review for 2nd graders who want to reinforce their basic reading and grammar skills." },
      { q: "Which topics are covered?", a: "Topics include: phonics & letter sounds, sight words, simple nouns and verbs, basic capitalization, and end punctuation (period, question mark, exclamation mark)." },
      { q: "Can my child take the test more than once?", a: "Yes, the test can be repeated as many times as desired." },
    ],
  },
  2: {
    age: "7–8",
    topics: [
      { icon: "🏷️", label: "Parts of Speech" },
      { icon: "✅", label: "Punctuation" },
      { icon: "🔤", label: "Spelling Patterns" },
      { icon: "📖", label: "Sentence Types" },
      { icon: "📝", label: "Vocabulary" },
      { icon: "✍️", label: "Writing Basics" },
    ],
    intro: "Our free English test for Grade 2 covers parts of speech, spelling patterns, punctuation, and sentence types for students aged 7–8. This English grammar quiz for Grade 2 is great for homework help and test preparation — no login required.",
    deepDive: [
      "In Grade 2, students expand their grammar knowledge to include nouns, verbs, adjectives, and adverbs. They learn how adjectives describe nouns and how adverbs modify verbs. Our English test for Grade 2 quizzes these parts of speech in context, making grammar fun and meaningful.",
      "Spelling patterns — including silent letters, vowel teams, and common suffixes like -ed and -ing — are introduced in 2nd grade. Students also practice using commas in greetings and dates. Our quiz helps reinforce these spelling and punctuation rules through targeted practice.",
      "Sentence types are a key skill in Grade 2: students learn to distinguish declarative, interrogative, exclamatory, and imperative sentences. They also practice expanding sentences by adding details. Our English Grammar Test for Grade 2 covers all these sentence-level skills.",
      "Teachers and parents can use this free English test for Grade 2 at any time — as homework support, for test prep, or to identify learning gaps. All questions are aligned with Common Core ELA standards for second grade.",
    ],
    faqs: [
      { q: "What grammar do students learn in Grade 2?", a: "Grade 2 students learn nouns, verbs, adjectives, adverbs, pronoun basics, sentence types (declarative, interrogative, exclamatory, imperative), commas in dates and greetings, and common spelling patterns." },
      { q: "Is the Grade 2 English test free?", a: "Yes, completely free. No sign-up required." },
      { q: "How long does the test take?", a: "About 5–10 minutes per session. Students can retake it anytime to improve their score." },
      { q: "What age is Grade 2?", a: "Grade 2 is typically for students aged 7–8." },
      { q: "Which Common Core standards are covered?", a: "The test covers Common Core ELA Language standards for Grade 2, including L.2.1 (conventions of standard English grammar) and L.2.2 (conventions of standard English capitalization, punctuation, and spelling)." },
      { q: "Can the test be taken multiple times?", a: "Yes, it can be repeated as many times as you like." },
    ],
  },
  3: {
    age: "8–9",
    topics: [
      { icon: "🏷️", label: "Parts of Speech" },
      { icon: "🔗", label: "Sentence Structure" },
      { icon: "📏", label: "Spelling Rules" },
      { icon: "📖", label: "Vocabulary" },
      { icon: "✍️", label: "Writing Mechanics" },
      { icon: "✅", label: "Punctuation" },
    ],
    intro: "Our free English test for Grade 3 helps students aged 8–9 practice grammar, spelling, vocabulary, and sentence structure. This English quiz for Grade 3 aligns with Common Core ELA — great for test prep and extra practice, no account needed.",
    deepDive: [
      "In Grade 3, students deepen their understanding of parts of speech: regular and irregular nouns (plural forms), abstract nouns, and verb tenses (past, present, future). They also learn to use adjectives and adverbs for comparison. Our English test for Grade 3 covers all these topics.",
      "Sentence structure becomes more complex in 3rd grade: students learn about compound sentences with coordinating conjunctions (FANBOYS) and how to combine simple sentences. Subjects and predicates are revisited with more detail. Our quiz practices these structure skills in a fun quiz format.",
      "Spelling rules — including prefixes (re-, un-, pre-), suffixes (-ful, -less, -ness), and homophones — are key 3rd grade skills. Students learn to decode and spell multi-syllable words accurately. Our English Grammar Test for Grade 3 reinforces these spelling strategies.",
      "Parents and teachers can use this free Grade 3 English test as homework support, practice for state tests, or a regular grammar check. Questions are aligned with Common Core ELA Grade 3 standards and can be repeated unlimited times.",
    ],
    faqs: [
      { q: "What English topics are covered in Grade 3?", a: "Grade 3 covers regular and irregular nouns, abstract nouns, verb tenses (past/present/future), adjective and adverb comparison, coordinating conjunctions, compound sentences, prefixes and suffixes, and homophones." },
      { q: "Is the Grade 3 English test free?", a: "Yes, completely free. No login needed." },
      { q: "What is the test format?", a: "The test includes multiple-choice questions and short typing answers, covering grammar, spelling, vocabulary, and sentence structure. Each session takes about 5–10 minutes." },
      { q: "Which age group is Grade 3 for?", a: "Grade 3 is for students aged 8–9." },
      { q: "Is the test aligned to Common Core?", a: "Yes, all questions align with Common Core ELA Language standards for Grade 3 (L.3.1 and L.3.2)." },
      { q: "How many times can I take the test?", a: "Unlimited times — retake as often as you need." },
    ],
  },
  4: {
    age: "9–10",
    topics: [
      { icon: "🏷️", label: "Parts of Speech" },
      { icon: "🔗", label: "Sentences & Clauses" },
      { icon: "📏", label: "Spelling & Punctuation" },
      { icon: "📖", label: "Vocabulary" },
      { icon: "✍️", label: "Figurative Language" },
      { icon: "🔡", label: "Relative Clauses" },
    ],
    intro: "Our free English test for Grade 4 covers relative pronouns, modal verbs, figurative language, and punctuation for students aged 9–10. Aligned with Common Core ELA Grade 4 standards — great for homework help and test prep, no login required.",
    deepDive: [
      "In Grade 4, students learn about relative pronouns (who, whose, whom, which, that) and how to use them to form relative clauses. They also study progressive verb tenses and modal auxiliary verbs (can, may, must, might). Our English test for Grade 4 quizzes these skills in context.",
      "Figurative language is a key Grade 4 skill: students encounter and use similes, metaphors, and idioms to add meaning and style to their writing. Understanding the difference between literal and non-literal language is also introduced. Our quiz covers these literary language concepts.",
      "Punctuation and spelling advance in 4th grade: students practice using commas before coordinating conjunctions in compound sentences, correct capitalization of proper adjectives, and context-based vocabulary strategies including reference materials. Our English Grammar Test for Grade 4 covers all these areas.",
      "Teachers and parents can use this free Grade 4 English test for classroom review, homework assignments, or state test preparation. All questions align with Common Core ELA Grade 4 Language standards (L.4.1–L.4.6) and can be repeated unlimited times.",
    ],
    faqs: [
      { q: "What grammar is taught in Grade 4?", a: "Grade 4 covers relative pronouns, relative adverbs, progressive verb tenses, modal auxiliary verbs, correct pronoun case (subjective, objective, possessive), correct capitalization, comma usage in compound sentences, and figurative language (simile, metaphor, idiom)." },
      { q: "Is the Grade 4 English test free?", a: "Yes, completely free. No account needed." },
      { q: "How long does the test take?", a: "About 8–12 minutes per session. Students can retry to improve their score." },
      { q: "What age is Grade 4?", a: "Grade 4 is typically for students aged 9–10." },
      { q: "Does this test cover figurative language?", a: "Yes. The test includes questions on similes, metaphors, idioms, and adages, helping students recognize and interpret figurative language." },
      { q: "Can I repeat the test?", a: "Yes, unlimited retakes are allowed." },
    ],
  },
  5: {
    age: "10–11",
    topics: [
      { icon: "🏷️", label: "Parts of Speech" },
      { icon: "🔗", label: "Sentence Structures" },
      { icon: "📏", label: "Spelling & Punctuation" },
      { icon: "📖", label: "Vocabulary" },
      { icon: "✍️", label: "Figurative Language" },
      { icon: "🔡", label: "Conjunctions & Interjections" },
    ],
    intro: "Our free English test for Grade 5 covers conjunctions, interjections, verb moods, punctuation, and vocabulary for students aged 10–11. Aligned with Common Core ELA Grade 5 standards — perfect for test prep and extra practice, no login required.",
    deepDive: [
      "In Grade 5, students refine their grammar by studying conjunctions (coordinating, subordinating, correlative), interjections, and the perfect verb tenses (present perfect, past perfect, future perfect). They also learn about shifts in verb tense and how to maintain consistency. Our English test for Grade 5 covers all these advanced grammar skills.",
      "Punctuation in 5th grade focuses on commas in dependent clauses and introductory elements, as well as correct use of apostrophes for contractions and possessives. Correct capitalization of titles and proper nouns is reinforced. Our quiz provides targeted practice for these punctuation rules.",
      "Vocabulary and figurative language skills deepen in Grade 5: students learn about similes, metaphors, personification, hyperbole, and alliteration. Context clues and Greek/Latin roots are used to figure out word meanings. Our English Grammar Test for Grade 5 tests these vocabulary strategies.",
      "Parents and teachers can use this free Grade 5 English test for class review, individual homework help, or standardized test preparation. All questions align with Common Core ELA Grade 5 Language standards (L.5.1–L.5.6) and can be repeated unlimited times.",
    ],
    faqs: [
      { q: "What English grammar is covered in Grade 5?", a: "Grade 5 covers conjunctions (coordinating, subordinating, correlative), interjections, perfect verb tenses, shifts in verb tense, comma usage, apostrophes, and vocabulary with context clues and Greek/Latin roots." },
      { q: "Is the Grade 5 English test free?", a: "Yes, completely free. No sign-up needed." },
      { q: "How long does the test take?", a: "About 8–12 minutes per session. Retakes are allowed anytime." },
      { q: "What age is Grade 5?", a: "Grade 5 is typically for students aged 10–11." },
      { q: "Does the test cover figurative language?", a: "Yes. The test includes similes, metaphors, personification, hyperbole, and alliteration — common figurative language types in the Common Core Grade 5 curriculum." },
      { q: "Can I take the test multiple times?", a: "Yes, unlimited retakes are available." },
    ],
  },
  6: {
    age: "11–12",
    topics: [
      { icon: "🏷️", label: "Advanced Grammar" },
      { icon: "🔗", label: "Sentence Structures" },
      { icon: "📖", label: "Vocabulary & Context" },
      { icon: "✅", label: "Punctuation" },
      { icon: "✍️", label: "Word Formation" },
      { icon: "🔡", label: "Clause Types" },
    ],
    intro: "Our free English test for Grade 6 covers subjective and objective pronouns, punctuation, sentence variety, Greek/Latin word roots, and vocabulary for students aged 11–12. Aligned with Common Core ELA Grade 6 standards — great for middle school prep, no login required.",
    deepDive: [
      "In Grade 6, students make the transition to middle school grammar, focusing on pronoun case (subjective: I/he/she; objective: me/him/her), intensive pronouns (myself, herself), and correcting inappropriate shifts in pronoun number and person. Our English test for Grade 6 covers these pronoun rules in depth.",
      "Sentence variety is a key writing skill in 6th grade: students learn to vary sentence patterns for meaning and style, and to recognize and correct dangling modifiers and misplaced phrases. Simple, compound, and complex sentences are distinguished and practiced. Our quiz makes these structural concepts engaging.",
      "Vocabulary in Grade 6 expands through Greek and Latin roots (bio-, geo-, -logy, -tion) and understanding of connotation and denotation. Context clues within sentences and paragraphs are used to infer word meanings. Our English Grammar Test for Grade 6 tests these vocabulary strategies extensively.",
      "Teachers and parents can use this free Grade 6 English test as a diagnostic, for homework support, or for state test preparation. All questions align with Common Core ELA Grade 6 Language standards (L.6.1–L.6.6) and can be repeated unlimited times.",
    ],
    faqs: [
      { q: "What grammar do Grade 6 students learn?", a: "Grade 6 covers pronoun case (subjective/objective/possessive), intensive pronouns, correct pronoun-antecedent agreement, punctuation (commas, parentheses, dashes), sentence variety, Greek/Latin roots, and connotation vs. denotation." },
      { q: "Is the Grade 6 English test free?", a: "Yes, completely free. No account required." },
      { q: "How long does the test take?", a: "About 10–15 minutes per session. Students can retake it to improve their score." },
      { q: "What age is Grade 6?", a: "Grade 6 is typically for students aged 11–12, the start of middle school." },
      { q: "Is this aligned to Common Core?", a: "Yes. All questions align with Common Core ELA Language standards for Grade 6 (L.6.1–L.6.6)." },
      { q: "Can the test be repeated?", a: "Yes, unlimited retakes are available." },
    ],
  },
  7: {
    age: "12–13",
    topics: [
      { icon: "🏷️", label: "Advanced Grammar" },
      { icon: "✅", label: "Punctuation" },
      { icon: "📖", label: "Vocabulary" },
      { icon: "🔗", label: "Clauses & Phrases" },
      { icon: "✍️", label: "Verbal Phrases" },
      { icon: "🔡", label: "Sentence Patterns" },
    ],
    intro: "Our free English test for Grade 7 covers phrases, clauses, misplaced modifiers, punctuation, and vocabulary for students aged 12–13. Aligned with Common Core ELA Grade 7 standards — perfect for middle school grammar practice, no login required.",
    deepDive: [
      "In Grade 7, students study phrases and clauses in depth: they distinguish between phrases (no subject/verb) and clauses (has subject and verb), and learn about dependent and independent clauses. They practice combining clauses to form compound, complex, and compound-complex sentences. Our English test for Grade 7 covers these advanced sentence structures.",
      "Verbal phrases — gerunds, infinitives, and participial phrases — are a key Grade 7 grammar topic. Students learn to identify and use these phrases, and to correct dangling and misplaced modifiers. Understanding how verbals function in sentences is a critical skill tested in our quiz.",
      "Punctuation rules become more nuanced in 7th grade: comma placement in compound-complex sentences, proper use of semicolons between independent clauses, and formatting titles of works are all covered. Students also learn to use dashes to set off non-essential information. Our English Grammar Test for Grade 7 practices all these punctuation skills.",
      "Parents and teachers can use this free Grade 7 English test as a grammar diagnostic, for homework review, or for standardized test preparation. All questions align with Common Core ELA Grade 7 Language standards (L.7.1–L.7.6) and can be repeated unlimited times.",
    ],
    faqs: [
      { q: "What grammar do Grade 7 students learn?", a: "Grade 7 covers phrases vs. clauses, dependent and independent clauses, gerunds, infinitives, participial phrases, misplaced and dangling modifiers, semicolon usage, punctuation of titles, and vocabulary with context and roots." },
      { q: "Is the Grade 7 English test free?", a: "Yes, completely free. No sign-up needed." },
      { q: "How long does the test take?", a: "About 10–15 minutes per session. Retakes are allowed anytime." },
      { q: "What age is Grade 7?", a: "Grade 7 is typically for students aged 12–13." },
      { q: "Does the test cover verbal phrases?", a: "Yes. The test includes questions on gerunds, infinitives, and participial phrases — key Grade 7 verbal phrase topics from the Common Core standards." },
      { q: "Can the test be taken multiple times?", a: "Yes, unlimited retakes are available." },
    ],
  },
  8: {
    age: "13–14",
    topics: [
      { icon: "🏷️", label: "Complex Grammar" },
      { icon: "✅", label: "Advanced Punctuation" },
      { icon: "📖", label: "Vocabulary" },
      { icon: "✍️", label: "Writing Styles" },
      { icon: "📚", label: "Literature Concepts" },
      { icon: "🔗", label: "Sentence Mastery" },
    ],
    intro: "Our free English test for Grade 8 covers subjunctive mood, passive voice, formal vs. informal style, advanced punctuation, and literary analysis for students aged 13–14. Aligned with Common Core ELA Grade 8 standards — perfect for high school prep and grammar mastery, no login required.",
    deepDive: [
      "In Grade 8, students master advanced grammar: they study the subjunctive mood (If I were…), active vs. passive voice, and the difference between direct and indirect speech. They learn to recognize and correct verbal mood inconsistencies. Our English test for Grade 8 covers these complex grammar structures that form the bridge to high school writing.",
      "Formal vs. informal language is a critical 8th grade skill: students learn to adjust their writing for audience and purpose, distinguish academic/formal register from casual language, and recognize inappropriate colloquialisms in formal contexts. Our quiz tests these register-awareness skills that are essential for academic success.",
      "Advanced punctuation in Grade 8 includes proper use of ellipsis to indicate omissions, parentheses and dashes for parenthetical elements, and punctuation in complex compound sentences. Students also study how to correctly punctuate dialogue and quotations. Our English Grammar Test for Grade 8 addresses all these punctuation rules.",
      "Literary concepts — including allusion, irony, tone, theme, and figurative language — are integrated into Grade 8 ELA. Students analyze how authors use language to create effect. Our test includes vocabulary and literature questions that reflect these higher-order reading and analysis skills, fully aligned with Common Core ELA Grade 8 standards.",
    ],
    faqs: [
      { q: "What English grammar is covered in Grade 8?", a: "Grade 8 covers subjunctive mood, active and passive voice, direct and indirect speech, verbals (gerunds, infinitives, participles), formal vs. informal language, advanced punctuation (ellipsis, dashes, parentheses), and literary analysis concepts." },
      { q: "Is the Grade 8 English test free?", a: "Yes, completely free. No account needed." },
      { q: "How long does the test take?", a: "About 10–15 minutes per session. Students can retake it to practice and improve." },
      { q: "What age is Grade 8?", a: "Grade 8 is typically for students aged 13–14, the final year of middle school." },
      { q: "Is this test aligned to Common Core?", a: "Yes. All questions align with Common Core ELA Grade 8 Language standards (L.8.1–L.8.6) and include reading comprehension and literature concepts." },
      { q: "Does the test cover literary terms?", a: "Yes. The test includes questions on allusion, irony, tone, theme, and figurative language — key literary analysis skills in Grade 8 ELA." },
    ],
  },
};

// ─── COMPONENT ─────────────────────────────────────────────────────────────────
export default function EnglishTestGrade({ grade }: { grade: number }) {
  const data = GRADE_DATA[grade];
  if (!data) return null;

  const otherGrades = [1, 2, 3, 4, 5, 6, 7, 8].filter((g) => g !== grade);

  return (
    <div className="min-h-screen bg-[#0A0A1A] text-white px-4 py-8 max-w-3xl mx-auto">
      {/* Breadcrumb */}
      <nav className="text-sm text-white/40 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-white/70 transition-colors">
          Plizio
        </Link>
        <span>/</span>
        <Link href="/english-test/" className="hover:text-white/70 transition-colors">
          English Test
        </Link>
        <span>/</span>
        <span className="text-white/70">Grade {grade}</span>
      </nav>

      {/* Hero */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-3 text-white">
          English Test Grade {grade} — Free Online Grammar Quiz
        </h1>
        <p className="text-white/70 text-base leading-relaxed mb-5">{data.intro}</p>
        <Link
          href="/englishtest/"
          className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-bold px-6 py-3 rounded-xl transition-colors"
        >
          Start English Test — Grade {grade} →
        </Link>
      </header>

      {/* Topics */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-white/90">
          Grade {grade} English Topics
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {data.topics.map((t) => (
            <div
              key={t.label}
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3"
            >
              <span className="text-xl">{t.icon}</span>
              <span className="text-sm text-white/80">{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Deep Dive */}
      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-semibold mb-4 text-white/90">
          What Students Learn in Grade {grade} English
        </h2>
        {data.deepDive.map((para, i) => (
          <p key={i} className="text-white/65 text-sm leading-relaxed">
            {para}
          </p>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6 mb-8 text-center">
        <p className="text-white/80 mb-4 text-sm">
          Ready to test your Grade {grade} English skills? Start the free quiz now — no account needed!
        </p>
        <Link
          href="/englishtest/"
          className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-bold px-6 py-3 rounded-xl transition-colors"
        >
          Take the English Test →
        </Link>
      </section>

      {/* FAQ */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-white/90">
          Frequently Asked Questions — English Test Grade {grade}
        </h2>
        <div className="space-y-4">
          {data.faqs.map((faq, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
              <h3 className="font-semibold text-white/90 mb-1 text-sm">{faq.q}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other Grades */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-white/90">
          English Tests for Other Grades
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {otherGrades.map((g) => (
            <Link
              key={g}
              href={`/english-test/grade-${g}/`}
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-center text-sm text-white/70 hover:bg-white/10 hover:text-white transition-colors"
            >
              Grade {g}
              <span className="block text-xs text-white/40">{GRADE_DATA[g]?.age} yrs</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
