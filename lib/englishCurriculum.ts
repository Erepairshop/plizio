// ─── ENGLISH TEST — ELA CURRICULUM (US Common Core, Grade 1–8) ────────────────
// Structure mirrors deutschCurriculum.ts.
// ONE example question per subtopic — expand manually.
// Procedural questions generated via englishGenerators.ts

import type { CurriculumTheme, CurriculumQuestion, GradeMark } from "./curriculumTypes";
import {
  G1_Generators,
  G2_Generators,
  G3_Generators,
  G4_Generators,
  G5_Generators,
  G6_Generators,
  G7_Generators,
  G8_Generators,
} from "./englishGenerators";

// ─── TYPE ALIASES (compatible with deutschCurriculum.ts structure) ────────────

export type EnglishQuestion = CurriculumQuestion;
export type EnglishTheme = CurriculumTheme;

// ─── GRADE 1 ──────────────────────────────────────────────────────────────────

const G1: EnglishTheme[] = [
  {
    id: "phonics_g1",
    name: "Phonics & Letters",
    icon: "🔤",
    color: "#FF2D78",
    subtopics: [
      {
        id: "short_long_vowels_g1",
        name: "Short & Long Vowels",
        questions: [
          { type:"mcq", topic:"phonics_g1", subtopic:"short_long_vowels_g1", question:"Which word has a LONG 'a' sound?", options:["cake","cat","cap","man"], correct:0 },
          // TODO: add more questions
        ],
      },
      {
        id: "digraphs_g1",
        name: "Consonant Digraphs (sh, ch, th, wh)",
        questions: [
          { type:"mcq", topic:"phonics_g1", subtopic:"digraphs_g1", question:"Which two letters make ONE sound in the word 'ship'?", options:["sh","si","hi","sp"], correct:0 },
        ],
      },
      {
        id: "uppercase_lowercase_g1",
        name: "Uppercase & Lowercase Letters",
        questions: [
          { type:"mcq", topic:"phonics_g1", subtopic:"uppercase_lowercase_g1", question:"Which letter is UPPERCASE?", options:["A","a","b","c"], correct:0 },
        ],
      },
      {
        id: "syllables_g1",
        name: "Syllables & Syllable Breaks",
        questions: [
          { type:"mcq", topic:"phonics_g1", subtopic:"syllables_g1", question:"How many syllables does the word 'butter' have?", options:["2","1","3","4"], correct:0 },
        ],
      },
      {
        id: "blends_g1",
        name: "Blends (bl, cr, st, tr...)",
        questions: [
          { type:"mcq", topic:"phonics_g1", subtopic:"blends_g1", question:"Which word starts with a consonant BLEND?", options:["stop","cat","dog","hen"], correct:0 },
        ],
      },
      {
        id: "rhyming_g1",
        name: "Rhyming Words",
        questions: [
          { type:"mcq", topic:"phonics_g1", subtopic:"rhyming_g1", question:"Which word RHYMES with 'cat'?", options:["bat","dog","fish","bird"], correct:0 },
        ],
      },
    ],
  },
  {
    id: "words_g1",
    name: "Words",
    icon: "📝",
    color: "#00D4FF",
    subtopics: [
      {
        id: "sight_words_g1",
        name: "Sight Words (high-frequency)",
        questions: [
          { type:"mcq", topic:"words_g1", subtopic:"sight_words_g1", question:"Which is a common sight word that students must know?", options:["the","ztx","qwp","mnb"], correct:0 },
        ],
      },
      {
        id: "nouns_g1",
        name: "Nouns (people, places, things)",
        questions: [
          { type:"mcq", topic:"words_g1", subtopic:"nouns_g1", question:"Which word is a NOUN (person, place, or thing)?", options:["dog","run","fast","big"], correct:0 },
        ],
      },
      {
        id: "verbs_g1",
        name: "Verbs (action words)",
        questions: [
          { type:"mcq", topic:"words_g1", subtopic:"verbs_g1", question:"Which word is a VERB (action word)?", options:["jump","ball","red","cat"], correct:0 },
        ],
      },
      {
        id: "articles_g1",
        name: "Articles (a / an / the)",
        questions: [
          { type:"mcq", topic:"words_g1", subtopic:"articles_g1", question:"Which article correctly fills the blank? '___ apple'", options:["an","a","one","some"], correct:0 },
        ],
      },
      {
        id: "compound_words_g1",
        name: "Compound Words",
        questions: [
          { type:"mcq", topic:"words_g1", subtopic:"compound_words_g1", question:"Which is a COMPOUND WORD (two words joined together)?", options:["sunshine","happy","run","blue"], correct:0 },
        ],
      },
    ],
  },
  {
    id: "sentences_g1",
    name: "Simple Sentences",
    icon: "📖",
    color: "#00FF88",
    subtopics: [
      {
        id: "end_punctuation_g1",
        name: "End Punctuation (. ? !)",
        questions: [
          { type:"mcq", topic:"sentences_g1", subtopic:"end_punctuation_g1", question:"Which sentence needs a QUESTION MARK at the end?", options:["Where do you live","I like cats","Run fast","The sky is blue"], correct:0 },
        ],
      },
      {
        id: "capitalization_g1",
        name: "Capitalization (first word, names)",
        questions: [
          { type:"mcq", topic:"sentences_g1", subtopic:"capitalization_g1", question:"Which sentence is correctly capitalized?", options:["My dog is big.","my dog is big.","My Dog Is Big.","my Dog is big."], correct:0 },
        ],
      },
      {
        id: "sentence_vs_not_g1",
        name: "Sentence vs. Non-Sentence",
        questions: [
          { type:"mcq", topic:"sentences_g1", subtopic:"sentence_vs_not_g1", question:"Which is a COMPLETE sentence?", options:["The cat sat on the mat.","big dog","ran fast","red ball"], correct:0 },
        ],
      },
      {
        id: "declarative_interrogative_g1",
        name: "Declarative & Interrogative Sentences",
        questions: [
          { type:"mcq", topic:"sentences_g1", subtopic:"declarative_interrogative_g1", question:"Which is an INTERROGATIVE sentence (a question)?", options:["Where do you live?","I live here.","Come here!","What a day!"], correct:0 },
        ],
      },
    ],
  },
];

// ─── GRADE 2 ──────────────────────────────────────────────────────────────────

const G2: EnglishTheme[] = [
  {
    id: "pos_g2",
    name: "Parts of Speech",
    icon: "🏷️",
    color: "#FF2D78",
    subtopics: [
      {
        id: "nouns_common_proper_g2",
        name: "Nouns: Common & Proper",
        questions: [
          { type:"mcq", topic:"pos_g2", subtopic:"nouns_common_proper_g2", question:"Which is a PROPER noun?", options:["London","city","river","mountain"], correct:0 },
        ],
      },
      {
        id: "nouns_plural_g2",
        name: "Nouns: Singular & Plural",
        questions: [
          { type:"mcq", topic:"pos_g2", subtopic:"nouns_plural_g2", question:"What is the PLURAL of 'child'?", options:["children","childs","childen","childes"], correct:0 },
        ],
      },
      {
        id: "collective_nouns_g2",
        name: "Collective Nouns (group, team, flock)",
        questions: [
          { type:"mcq", topic:"pos_g2", subtopic:"collective_nouns_g2", question:"What is the COLLECTIVE NOUN for a group of birds?", options:["flock","pack","herd","crew"], correct:0 },
        ],
      },
      {
        id: "verbs_g2",
        name: "Verbs: Action & Linking",
        questions: [
          { type:"mcq", topic:"pos_g2", subtopic:"verbs_g2", question:"Which verb is a LINKING verb?", options:["is","run","jump","eat"], correct:0 },
        ],
      },
      {
        id: "irregular_past_g2",
        name: "Irregular Past Tense Verbs",
        questions: [
          { type:"mcq", topic:"pos_g2", subtopic:"irregular_past_g2", question:"What is the past tense of 'run'?", options:["ran","runned","run","ranned"], correct:0 },
        ],
      },
      {
        id: "adj_adv_g2",
        name: "Adjectives & Adverbs",
        questions: [
          { type:"mcq", topic:"pos_g2", subtopic:"adj_adv_g2", question:"Which word is an ADVERB?", options:["quickly","quick","quickness","quicker"], correct:0 },
        ],
      },
      {
        id: "pronouns_g2",
        name: "Pronouns & Reflexive Pronouns",
        questions: [
          { type:"mcq", topic:"pos_g2", subtopic:"pronouns_g2", question:"Which is a REFLEXIVE pronoun?", options:["myself","me","my","mine"], correct:0 },
        ],
      },
    ],
  },
  {
    id: "sentences_g2",
    name: "Sentences",
    icon: "📖",
    color: "#B44DFF",
    subtopics: [
      {
        id: "simple_compound_g2",
        name: "Simple & Compound Sentences",
        questions: [
          { type:"mcq", topic:"sentences_g2", subtopic:"simple_compound_g2", question:"Which is a COMPOUND sentence?", options:["I like cats, and she likes dogs.","I like cats.","She likes dogs.","Running fast."], correct:0 },
        ],
      },
      {
        id: "expanding_g2",
        name: "Expanding Sentences",
        questions: [
          { type:"mcq", topic:"sentences_g2", subtopic:"expanding_g2", question:"Which sentence is the MOST expanded (most descriptive)?", options:["The big red dog ran quickly.","The dog ran.","A dog.","Dog."], correct:0 },
        ],
      },
    ],
  },
  {
    id: "spelling_g2",
    name: "Spelling & Phonics",
    icon: "🔤",
    color: "#00D4FF",
    subtopics: [
      {
        id: "vowel_patterns_g2",
        name: "Long vs. Short Vowel Patterns",
        questions: [
          { type:"mcq", topic:"spelling_g2", subtopic:"vowel_patterns_g2", question:"Which word has a LONG 'e' sound?", options:["feet","pet","bed","red"], correct:0 },
        ],
      },
      {
        id: "vowel_teams_g2",
        name: "Vowel Teams (ai, ea, oa, oo)",
        questions: [
          { type:"mcq", topic:"spelling_g2", subtopic:"vowel_teams_g2", question:"Which VOWEL TEAM appears in the word 'rain'?", options:["ai","ea","oa","oo"], correct:0 },
        ],
      },
      {
        id: "prefixes_suffixes_g2",
        name: "Prefixes & Suffixes (un-, re-, -ful, -less)",
        questions: [
          { type:"mcq", topic:"spelling_g2", subtopic:"prefixes_suffixes_g2", question:"What does the prefix 'un-' mean in 'unhappy'?", options:["not","very","more","before"], correct:0 },
        ],
      },
      {
        id: "irregular_spelling_g2",
        name: "Irregularly Spelled Words",
        questions: [
          { type:"typing", topic:"spelling_g2", subtopic:"irregular_spelling_g2", question:"Correct the spelling: 'My frend came to visit.'", answer:["friend"] },
        ],
      },
    ],
  },
  {
    id: "vocab_g2",
    name: "Vocabulary",
    icon: "📚",
    color: "#00FF88",
    subtopics: [
      {
        id: "shades_of_meaning_g2",
        name: "Shades of Meaning (toss / throw / hurl)",
        questions: [
          { type:"mcq", topic:"vocab_g2", subtopic:"shades_of_meaning_g2", question:"Which word has the STRONGEST meaning?", options:["furious","angry","upset","annoyed"], correct:0 },
        ],
      },
      {
        id: "context_clues_g2",
        name: "Using Context Clues",
        questions: [
          { type:"mcq", topic:"vocab_g2", subtopic:"context_clues_g2", question:"'The ancient castle was built hundreds of years ago.' What does 'ancient' mean?", options:["very old","very tall","very new","very small"], correct:0 },
        ],
      },
      {
        id: "dictionary_g2",
        name: "Using a Dictionary",
        questions: [
          { type:"mcq", topic:"vocab_g2", subtopic:"dictionary_g2", question:"In a dictionary, which word comes FIRST alphabetically?", options:["apple","banana","cherry","date"], correct:0 },
        ],
      },
    ],
  },
];

// ─── GRADE 3 ──────────────────────────────────────────────────────────────────

const G3: EnglishTheme[] = [
  {
    id: "pos_g3",
    name: "Parts of Speech",
    icon: "🏷️",
    color: "#FF2D78",
    subtopics: [
      {
        id: "nouns_plural_g3",
        name: "Nouns: Plural Forms (regular & irregular)",
        questions: [
          { type:"mcq", topic:"pos_g3", subtopic:"nouns_plural_g3", question:"What is the plural of 'foot'?", options:["feet","foots","feets","footies"], correct:0 },
        ],
      },
      {
        id: "abstract_nouns_g3",
        name: "Abstract Nouns (freedom, courage)",
        questions: [
          { type:"mcq", topic:"pos_g3", subtopic:"abstract_nouns_g3", question:"Which word is an ABSTRACT noun (an idea you cannot touch)?", options:["freedom","table","dog","cloud"], correct:0 },
        ],
      },
      {
        id: "verb_tenses_g3",
        name: "Verbs: Tenses (past, present, future)",
        questions: [
          { type:"mcq", topic:"pos_g3", subtopic:"verb_tenses_g3", question:"Which sentence is in the PAST tense?", options:["She walked to school.","She walks to school.","She will walk to school.","She is walking."], correct:0 },
        ],
      },
      {
        id: "adj_comparative_g3",
        name: "Adjectives: Comparative & Superlative",
        questions: [
          { type:"mcq", topic:"pos_g3", subtopic:"adj_comparative_g3", question:"Which is the SUPERLATIVE form of 'big'?", options:["biggest","bigger","most big","more big"], correct:0 },
        ],
      },
      {
        id: "adverbs_g3",
        name: "Adverbs (quickly, very, never)",
        questions: [
          { type:"mcq", topic:"pos_g3", subtopic:"adverbs_g3", question:"Which word is an ADVERB that tells HOW?", options:["slowly","slow","slowness","slower"], correct:0 },
        ],
      },
      {
        id: "conjunctions_g3",
        name: "Coordinating Conjunctions (and, but, or, so)",
        questions: [
          { type:"mcq", topic:"pos_g3", subtopic:"conjunctions_g3", question:"Which word is a COORDINATING conjunction?", options:["but","run","fast","big"], correct:0 },
        ],
      },
    ],
  },
  {
    id: "sentences_g3",
    name: "Sentence Structure",
    icon: "📖",
    color: "#B44DFF",
    subtopics: [
      {
        id: "subject_predicate_g3",
        name: "Subject & Predicate",
        questions: [
          { type:"mcq", topic:"sentences_g3", subtopic:"subject_predicate_g3", question:"In 'The dog barked loudly,' what is the SUBJECT?", options:["The dog","barked","loudly","barked loudly"], correct:0 },
        ],
      },
      {
        id: "simple_compound_g3",
        name: "Simple & Compound Sentences",
        questions: [
          { type:"mcq", topic:"sentences_g3", subtopic:"simple_compound_g3", question:"Which is a SIMPLE sentence (one independent clause)?", options:["The cat slept.","The cat slept and the dog played.","It rained, so we stayed inside.","She sang but he danced."], correct:0 },
        ],
      },
      {
        id: "direct_quotations_g3",
        name: "Direct Quotations & Dialogue",
        questions: [
          { type:"mcq", topic:"sentences_g3", subtopic:"direct_quotations_g3", question:"Which sentence correctly uses quotation marks?", options:["\"Come here,\" she said.","Come here, she said.","\"Come here, she said.","Come here,\" she said."], correct:0 },
        ],
      },
      {
        id: "fragments_runons_g3",
        name: "Fragments & Run-ons",
        questions: [
          { type:"mcq", topic:"sentences_g3", subtopic:"fragments_runons_g3", question:"Which is a sentence FRAGMENT (incomplete sentence)?", options:["Running through the park.","The dog barked.","She went home.","It was cold."], correct:0 },
        ],
      },
    ],
  },
  {
    id: "spelling_g3",
    name: "Spelling & Phonics",
    icon: "🔤",
    color: "#00D4FF",
    subtopics: [
      {
        id: "prefixes_g3",
        name: "Prefixes (pre-, dis-, mis-)",
        questions: [
          { type:"mcq", topic:"spelling_g3", subtopic:"prefixes_g3", question:"What does the prefix 'dis-' mean in 'disagree'?", options:["not / opposite","again","before","too much"], correct:0 },
        ],
      },
      {
        id: "suffixes_g3",
        name: "Suffixes (-tion, -able, -ness)",
        questions: [
          { type:"mcq", topic:"spelling_g3", subtopic:"suffixes_g3", question:"Adding '-ness' to 'dark' makes 'darkness.' What does '-ness' mean?", options:["state or quality of","one who","able to","without"], correct:0 },
        ],
      },
      {
        id: "word_families_g3",
        name: "Word Families & Root Words",
        questions: [
          { type:"mcq", topic:"spelling_g3", subtopic:"word_families_g3", question:"Which words are in the same WORD FAMILY?", options:["play, player, played","run, cat, big","happy, dog, fast","blue, red, green"], correct:0 },
        ],
      },
      {
        id: "homophones_g3",
        name: "Homophones (there / their / they're)",
        questions: [
          { type:"mcq", topic:"spelling_g3", subtopic:"homophones_g3", question:"Which word correctly completes: '___ going to the park'?", options:["They're","There","Their","Theyre"], correct:0 },
        ],
      },
    ],
  },
  {
    id: "vocab_g3",
    name: "Vocabulary",
    icon: "📚",
    color: "#00FF88",
    subtopics: [
      {
        id: "literal_nonliteral_g3",
        name: "Literal vs. Nonliteral Meanings",
        questions: [
          { type:"mcq", topic:"vocab_g3", subtopic:"literal_nonliteral_g3", question:"'It's raining cats and dogs.' This phrase means:", options:["It's raining very hard.","Cats and dogs are falling.","It's a little rainy.","Animals are outside."], correct:0 },
        ],
      },
      {
        id: "word_relationships_g3",
        name: "Word Relationships & Categories",
        questions: [
          { type:"mcq", topic:"vocab_g3", subtopic:"word_relationships_g3", question:"Which word does NOT belong in the group: apple, banana, carrot, grape?", options:["carrot","apple","banana","grape"], correct:0 },
        ],
      },
      {
        id: "glossaries_g3",
        name: "Using Glossaries & Dictionaries",
        questions: [
          { type:"mcq", topic:"vocab_g3", subtopic:"glossaries_g3", question:"A GLOSSARY in a textbook is found:", options:["at the back, with word definitions","at the front","in the middle","in the index"], correct:0 },
        ],
      },
    ],
  },
];

// ─── GRADE 4 ──────────────────────────────────────────────────────────────────

const G4: EnglishTheme[] = [
  {
    id: "pos_g4",
    name: "Parts of Speech",
    icon: "🏷️",
    color: "#FF2D78",
    subtopics: [
      {
        id: "relative_pronouns_g4",
        name: "Relative Pronouns (who, whose, whom, which, that)",
        questions: [
          { type:"mcq", topic:"pos_g4", subtopic:"relative_pronouns_g4", question:"Which relative pronoun fits: 'The girl ___ won the race is my friend.'", options:["who","which","whose","whom"], correct:0 },
        ],
      },
      {
        id: "relative_adverbs_g4",
        name: "Relative Adverbs (where, when, why)",
        questions: [
          { type:"mcq", topic:"pos_g4", subtopic:"relative_adverbs_g4", question:"Which word is a RELATIVE ADVERB in: 'The park where we play is nearby.'?", options:["where","play","park","nearby"], correct:0 },
        ],
      },
      {
        id: "modal_aux_g4",
        name: "Modal Auxiliaries (can, may, must, should)",
        questions: [
          { type:"mcq", topic:"pos_g4", subtopic:"modal_aux_g4", question:"Which word is a MODAL AUXILIARY verb?", options:["must","run","quickly","happy"], correct:0 },
        ],
      },
      {
        id: "progressive_tenses_g4",
        name: "Progressive Verb Tenses",
        questions: [
          { type:"mcq", topic:"pos_g4", subtopic:"progressive_tenses_g4", question:"Which sentence uses the PROGRESSIVE tense?", options:["She is running.","She ran.","She runs.","She will run."], correct:0 },
        ],
      },
      {
        id: "adjective_order_g4",
        name: "Adjective Order (a small red bag)",
        questions: [
          { type:"mcq", topic:"pos_g4", subtopic:"adjective_order_g4", question:"Which phrase has adjectives in the CORRECT order?", options:["a small red bag","a red small bag","a bag red small","small a red bag"], correct:0 },
        ],
      },
      {
        id: "prep_phrases_g4",
        name: "Prepositional Phrases",
        questions: [
          { type:"mcq", topic:"pos_g4", subtopic:"prep_phrases_g4", question:"Which part of the sentence is a PREPOSITIONAL PHRASE? 'The cat sat on the mat.'", options:["on the mat","The cat","sat","the mat"], correct:0 },
        ],
      },
    ],
  },
  {
    id: "sentences_g4",
    name: "Sentences",
    icon: "📖",
    color: "#B44DFF",
    subtopics: [
      {
        id: "fragments_runons_g4",
        name: "Fragments & Run-ons",
        questions: [
          { type:"mcq", topic:"sentences_g4", subtopic:"fragments_runons_g4", question:"Which is a RUN-ON sentence?", options:["I went home it was late I was tired.","She ran home.","After school, we played.","The dog barked."], correct:0 },
        ],
      },
      {
        id: "compound_sentences_g4",
        name: "Compound Sentences (coordinating conjunctions + comma)",
        questions: [
          { type:"mcq", topic:"sentences_g4", subtopic:"compound_sentences_g4", question:"Which sentence is correctly punctuated as a COMPOUND sentence?", options:["I wanted to go, but it was raining.","I wanted to go but it was raining.","I wanted to go, it was raining.","I wanted to go. But it was raining."], correct:0 },
        ],
      },
      {
        id: "direct_speech_g4",
        name: "Direct Speech & Quotation Marks",
        questions: [
          { type:"mcq", topic:"sentences_g4", subtopic:"direct_speech_g4", question:"Which sentence correctly punctuates DIRECT SPEECH?", options:["\"I'm hungry,\" said Tom.","I'm hungry, said Tom.","\"I'm hungry, said Tom.","I'm hungry\" said Tom."], correct:0 },
        ],
      },
      {
        id: "confused_words_g4",
        name: "Frequently Confused Words (to/too/two)",
        questions: [
          { type:"mcq", topic:"sentences_g4", subtopic:"confused_words_g4", question:"Which word correctly completes: 'I want to go ___ '?", options:["too","to","two","tow"], correct:0 },
        ],
      },
    ],
  },
  {
    id: "spelling_g4",
    name: "Spelling & Punctuation",
    icon: "🔤",
    color: "#00D4FF",
    subtopics: [
      {
        id: "capitalization_g4",
        name: "Correct Capitalization",
        questions: [
          { type:"mcq", topic:"spelling_g4", subtopic:"capitalization_g4", question:"Which sentence has CORRECT capitalization?", options:["We visited Washington, D.C., last July.","We visited washington, d.c., last july.","we Visited Washington, D.C., Last July.","We visited Washington, d.c., last July."], correct:0 },
        ],
      },
      {
        id: "commas_compound_g4",
        name: "Commas in Compound Sentences",
        questions: [
          { type:"mcq", topic:"spelling_g4", subtopic:"commas_compound_g4", question:"Where does the COMMA go? 'She studied hard ___ she passed the test.'", options:["hard, she","She ,studied","passed, the","studied, hard"], correct:0 },
        ],
      },
      {
        id: "spelling_g4",
        name: "Spell Grade-Level Words Correctly",
        questions: [
          { type:"mcq", topic:"spelling_g4", subtopic:"spelling_g4", question:"Which word is spelled CORRECTLY?", options:["necessary","necesary","neccessary","nessecary"], correct:0 },
        ],
      },
    ],
  },
  {
    id: "vocab_g4",
    name: "Vocabulary",
    icon: "📚",
    color: "#00FF88",
    subtopics: [
      {
        id: "synonyms_antonyms_g4",
        name: "Synonyms & Antonyms",
        questions: [
          { type:"mcq", topic:"vocab_g4", subtopic:"synonyms_antonyms_g4", question:"Which is an ANTONYM (opposite) of 'brave'?", options:["cowardly","bold","fearless","daring"], correct:0 },
        ],
      },
      {
        id: "similes_metaphors_g4",
        name: "Similes & Metaphors",
        questions: [
          { type:"mcq", topic:"vocab_g4", subtopic:"similes_metaphors_g4", question:"'She is as fast as lightning.' This is an example of a:", options:["simile","metaphor","personification","alliteration"], correct:0 },
        ],
      },
      {
        id: "context_clues_g4",
        name: "Using Context Clues",
        questions: [
          { type:"mcq", topic:"vocab_g4", subtopic:"context_clues_g4", question:"'The parched earth cracked from lack of rain.' 'Parched' means:", options:["extremely dry","very wet","very cold","very dark"], correct:0 },
        ],
      },
      {
        id: "domain_vocab_g4",
        name: "Domain-Specific Vocabulary",
        questions: [
          { type:"mcq", topic:"vocab_g4", subtopic:"domain_vocab_g4", question:"Which word is DOMAIN-SPECIFIC to science?", options:["photosynthesis","happy","run","beautiful"], correct:0 },
        ],
      },
    ],
  },
];

// ─── GRADE 5 ──────────────────────────────────────────────────────────────────

const G5: EnglishTheme[] = [
  {
    id: "pos_g5",
    name: "Parts of Speech",
    icon: "🏷️",
    color: "#FF2D78",
    subtopics: [
      {
        id: "conjunctions_g5",
        name: "Conjunctions: Coordinating, Correlative, Subordinating",
        questions: [
          { type:"mcq", topic:"pos_g5", subtopic:"conjunctions_g5", question:"Which is a SUBORDINATING conjunction?", options:["although","and","but","or"], correct:0 },
        ],
      },
      {
        id: "interjections_g5",
        name: "Interjections",
        questions: [
          { type:"mcq", topic:"pos_g5", subtopic:"interjections_g5", question:"Which word is an INTERJECTION?", options:["Wow!","run","quickly","the"], correct:0 },
        ],
      },
      {
        id: "perfect_tenses_g5",
        name: "Perfect Verb Tenses (have walked / had walked)",
        questions: [
          { type:"mcq", topic:"pos_g5", subtopic:"perfect_tenses_g5", question:"Which sentence uses the PRESENT PERFECT tense?", options:["She has finished her homework.","She finished her homework.","She is finishing her homework.","She will finish her homework."], correct:0 },
        ],
      },
      {
        id: "tense_shifts_g5",
        name: "Verb Tense Shifts (consistency)",
        questions: [
          { type:"mcq", topic:"pos_g5", subtopic:"tense_shifts_g5", question:"Which sentence has an INCORRECT tense shift?", options:["She walked in and sits down.","She walked in and sat down.","She walks in and sits down.","She will walk in and sit down."], correct:0 },
        ],
      },
      {
        id: "correlative_conj_g5",
        name: "Correlative Conjunctions (either...or, neither...nor)",
        questions: [
          { type:"mcq", topic:"pos_g5", subtopic:"correlative_conj_g5", question:"Which pair is a CORRELATIVE conjunction?", options:["either...or","and...but","since...when","if...because"], correct:0 },
        ],
      },
    ],
  },
  {
    id: "sentences_g5",
    name: "Sentences & Structure",
    icon: "📖",
    color: "#B44DFF",
    subtopics: [
      {
        id: "complex_sentences_g5",
        name: "Simple, Compound & Complex Sentences",
        questions: [
          { type:"mcq", topic:"sentences_g5", subtopic:"complex_sentences_g5", question:"Which is a COMPLEX sentence (independent + dependent clause)?", options:["Although it was raining, she went outside.","She went outside.","She went outside and it was raining.","She went outside, but it was raining."], correct:0 },
        ],
      },
      {
        id: "intro_clauses_g5",
        name: "Introductory Clauses & Comma Usage",
        questions: [
          { type:"mcq", topic:"sentences_g5", subtopic:"intro_clauses_g5", question:"Which sentence correctly uses a comma after the INTRODUCTORY clause?", options:["When I got home, I ate dinner.","When I got home I ate dinner.","I ate dinner, when I got home.","When, I got home I ate dinner."], correct:0 },
        ],
      },
      {
        id: "combining_g5",
        name: "Combining Sentences",
        questions: [
          { type:"mcq", topic:"sentences_g5", subtopic:"combining_g5", question:"Which is the BEST way to combine 'She is smart. She works hard.'?", options:["She is smart, and she works hard.","She is smart she works hard.","She is smart works hard.","Smart and hard working she is."], correct:0 },
        ],
      },
    ],
  },
  {
    id: "spelling_g5",
    name: "Spelling & Punctuation",
    icon: "🔤",
    color: "#00D4FF",
    subtopics: [
      {
        id: "commas_g5",
        name: "Commas (series, introductory, clauses)",
        questions: [
          { type:"mcq", topic:"spelling_g5", subtopic:"commas_g5", question:"Which sentence correctly uses commas in a SERIES?", options:["I bought apples, oranges, and bananas.","I bought apples oranges and bananas.","I bought, apples, oranges and bananas.","I bought apples, oranges and, bananas."], correct:0 },
        ],
      },
      {
        id: "titles_italics_g5",
        name: "Italics / Quotation Marks for Titles",
        questions: [
          { type:"mcq", topic:"spelling_g5", subtopic:"titles_italics_g5", question:"How should a BOOK TITLE be written?", options:["Italicized or underlined","In all capitals","In quotation marks","In bold"], correct:0 },
        ],
      },
      {
        id: "apostrophes_g5",
        name: "Apostrophes (possession & contractions)",
        questions: [
          { type:"mcq", topic:"spelling_g5", subtopic:"apostrophes_g5", question:"Which correctly shows POSSESSION? 'The ___ book is on the table.' (dog)", options:["dog's","dogs'","dogs","dog"], correct:0 },
        ],
      },
      {
        id: "spelling_strategies_g5",
        name: "Spelling Strategies",
        questions: [
          { type:"mcq", topic:"spelling_g5", subtopic:"spelling_strategies_g5", question:"Which spelling strategy helps with 'receive'? (I before E...)", options:["except after C","always use I before E","use E before I","double the final letter"], correct:0 },
        ],
      },
    ],
  },
  {
    id: "vocab_g5",
    name: "Vocabulary",
    icon: "📚",
    color: "#00FF88",
    subtopics: [
      {
        id: "greek_latin_g5",
        name: "Greek & Latin Roots (aud, vis, port, rupt...)",
        questions: [
          { type:"mcq", topic:"vocab_g5", subtopic:"greek_latin_g5", question:"The Latin root 'port' means:", options:["carry","see","hear","break"], correct:0 },
        ],
      },
      {
        id: "prefixes_suffixes_g5",
        name: "Prefixes & Suffixes for Word Meaning",
        questions: [
          { type:"mcq", topic:"vocab_g5", subtopic:"prefixes_suffixes_g5", question:"What does the word 'uncomfortable' mean? (prefix: un-, root: comfort, suffix: -able)", options:["not able to be comfortable","very comfortable","becoming comfortable","before comfort"], correct:0 },
        ],
      },
      {
        id: "figurative_language_g5",
        name: "Figurative Language (idioms, adages, proverbs)",
        questions: [
          { type:"mcq", topic:"vocab_g5", subtopic:"figurative_language_g5", question:"'Don't bite the hand that feeds you' is an example of a:", options:["proverb","simile","metaphor","onomatopoeia"], correct:0 },
        ],
      },
      {
        id: "connotation_denotation_g5",
        name: "Connotation vs. Denotation",
        questions: [
          { type:"mcq", topic:"vocab_g5", subtopic:"connotation_denotation_g5", question:"'Cheap' and 'thrifty' both mean 'spending little money.' Which has a POSITIVE connotation?", options:["thrifty","cheap","both the same","neither"], correct:0 },
        ],
      },
    ],
  },
];

// ─── GRADE 6 ──────────────────────────────────────────────────────────────────

const G6: EnglishTheme[] = [
  {
    id: "grammar_g6",
    name: "Grammar",
    icon: "🔤",
    color: "#FF2D78",
    subtopics: [
      {
        id: "pronoun_cases_g6",
        name: "Subjective, Objective & Possessive Pronouns",
        questions: [
          { type:"mcq", topic:"grammar_g6", subtopic:"pronoun_cases_g6", question:"Which pronoun is in the OBJECTIVE case? 'The teacher gave ___ the homework.'", options:["him","he","his","himself"], correct:0 },
        ],
      },
      {
        id: "intensive_pronouns_g6",
        name: "Intensive Pronouns (myself, himself, itself...)",
        questions: [
          { type:"mcq", topic:"grammar_g6", subtopic:"intensive_pronouns_g6", question:"Which sentence uses an INTENSIVE pronoun correctly?", options:["She herself baked the cake.","Herself baked the cake.","She baked herself.","The cake herself baked."], correct:0 },
        ],
      },
      {
        id: "pronoun_agreement_g6",
        name: "Pronoun–Antecedent Agreement",
        questions: [
          { type:"mcq", topic:"grammar_g6", subtopic:"pronoun_agreement_g6", question:"Which sentence has correct PRONOUN-ANTECEDENT AGREEMENT?", options:["Each student must bring their notebook.","Each student must bring its notebook.","Each student must bring our notebook.","Each student must bring your notebook."], correct:0 },
        ],
      },
      {
        id: "pronoun_shifts_g6",
        name: "Recognizing Inappropriate Pronoun Shifts",
        questions: [
          { type:"mcq", topic:"grammar_g6", subtopic:"pronoun_shifts_g6", question:"Which sentence has an INAPPROPRIATE pronoun shift?", options:["When one exercises, you feel better.","When you exercise, you feel better.","When one exercises, one feels better.","When I exercise, I feel better."], correct:0 },
        ],
      },
      {
        id: "sentence_patterns_g6",
        name: "Varying Sentence Patterns",
        questions: [
          { type:"mcq", topic:"grammar_g6", subtopic:"sentence_patterns_g6", question:"Which revision VARIES the sentence pattern for better writing?", options:["Tired and hungry, she sat down.","She sat down. She was tired. She was hungry.","She sat down because she was tired and hungry.","She was tired and hungry so she sat down."], correct:0 },
        ],
      },
    ],
  },
  {
    id: "vocab_g6",
    name: "Vocabulary",
    icon: "📚",
    color: "#00FF88",
    subtopics: [
      {
        id: "synonyms_homographs_g6",
        name: "Synonyms, Antonyms & Homographs",
        questions: [
          { type:"mcq", topic:"vocab_g6", subtopic:"synonyms_homographs_g6", question:"Which pair are HOMOGRAPHS (same spelling, different meaning)?", options:["bat (animal) / bat (sports)","there / their","happy / sad","run / ran"], correct:0 },
        ],
      },
      {
        id: "analogies_g6",
        name: "Word Relationships (analogies)",
        questions: [
          { type:"mcq", topic:"vocab_g6", subtopic:"analogies_g6", question:"Hot is to cold as fast is to ___.", options:["slow","quick","speed","race"], correct:0 },
        ],
      },
      {
        id: "connotation_g6",
        name: "Connotation & Nuances",
        questions: [
          { type:"mcq", topic:"vocab_g6", subtopic:"connotation_g6", question:"Which word has the most NEGATIVE connotation?", options:["stubborn","firm","determined","confident"], correct:0 },
        ],
      },
      {
        id: "academic_vocab_g6",
        name: "Academic & Domain-Specific Vocabulary",
        questions: [
          { type:"mcq", topic:"vocab_g6", subtopic:"academic_vocab_g6", question:"In a social studies text, 'democracy' is an example of:", options:["domain-specific vocabulary","figurative language","a simile","a compound word"], correct:0 },
        ],
      },
      {
        id: "greek_latin_g6",
        name: "Greek & Latin Affixes & Roots",
        questions: [
          { type:"mcq", topic:"vocab_g6", subtopic:"greek_latin_g6", question:"The Greek root 'graph' means:", options:["write","see","hear","speak"], correct:0 },
        ],
      },
    ],
  },
  {
    id: "structures_g6",
    name: "Sentence Structures",
    icon: "📖",
    color: "#B44DFF",
    subtopics: [
      {
        id: "clauses_g6",
        name: "Dependent & Independent Clauses",
        questions: [
          { type:"mcq", topic:"structures_g6", subtopic:"clauses_g6", question:"Which is a DEPENDENT clause (cannot stand alone)?", options:["because she was tired","She was tired","She slept early","It was dark"], correct:0 },
        ],
      },
      {
        id: "complex_sentences_g6",
        name: "Complex & Compound-Complex Sentences",
        questions: [
          { type:"mcq", topic:"structures_g6", subtopic:"complex_sentences_g6", question:"Which is a COMPOUND-COMPLEX sentence?", options:["Although it rained, she went out, and she got wet.","She went out.","It rained and she got wet.","Although it rained, she went out."], correct:0 },
        ],
      },
      {
        id: "relative_clauses_g6",
        name: "Relative Clauses",
        questions: [
          { type:"mcq", topic:"structures_g6", subtopic:"relative_clauses_g6", question:"Which sentence contains a RELATIVE CLAUSE?", options:["The book that I read was great.","I read a great book.","The book was great.","I read and it was great."], correct:0 },
        ],
      },
    ],
  },
  {
    id: "word_formation_g6",
    name: "Word Formation",
    icon: "🧩",
    color: "#00D4FF",
    subtopics: [
      {
        id: "prefixes_suffixes_g6",
        name: "Prefixes & Suffixes (meaning changes)",
        questions: [
          { type:"mcq", topic:"word_formation_g6", subtopic:"prefixes_suffixes_g6", question:"What does adding '-tion' to 'celebrate' create?", options:["celebration","celebrates","celebrated","celebrating"], correct:0 },
        ],
      },
      {
        id: "root_words_g6",
        name: "Root Words & Derivations",
        questions: [
          { type:"mcq", topic:"word_formation_g6", subtopic:"root_words_g6", question:"The root word 'rupt' (as in 'interrupt') means:", options:["break","speak","write","move"], correct:0 },
        ],
      },
    ],
  },
  {
    id: "punctuation_g6",
    name: "Punctuation",
    icon: "✏️",
    color: "#FFD700",
    subtopics: [
      {
        id: "commas_dashes_g6",
        name: "Commas, Dashes & Parentheses",
        questions: [
          { type:"mcq", topic:"punctuation_g6", subtopic:"commas_dashes_g6", question:"Which correctly uses PARENTHESES for additional information?", options:["The event (held annually) was canceled.","The event, held annually, was canceled.","The event — held annually — was canceled.","The event held annually was canceled."], correct:0 },
        ],
      },
      {
        id: "punct_effect_g6",
        name: "Punctuation for Effect",
        questions: [
          { type:"mcq", topic:"punctuation_g6", subtopic:"punct_effect_g6", question:"What effect does an EXCLAMATION MARK create?", options:["Expresses strong emotion or emphasis","Asks a question","Shows a pause","Lists items"], correct:0 },
        ],
      },
    ],
  },
];

// ─── GRADE 7 ──────────────────────────────────────────────────────────────────

const G7: EnglishTheme[] = [
  {
    id: "grammar_g7",
    name: "Grammar",
    icon: "🔤",
    color: "#FF2D78",
    subtopics: [
      {
        id: "phrases_g7",
        name: "Phrases: Noun, Verb, Adjectival, Adverbial",
        questions: [
          { type:"mcq", topic:"grammar_g7", subtopic:"phrases_g7", question:"In 'Running fast, he caught the bus,' what type of phrase is 'Running fast'?", options:["participial phrase","noun phrase","verb phrase","prepositional phrase"], correct:0 },
        ],
      },
      {
        id: "clauses_g7",
        name: "Clauses: Independent & Dependent",
        questions: [
          { type:"mcq", topic:"grammar_g7", subtopic:"clauses_g7", question:"How many INDEPENDENT CLAUSES are in: 'Although she was tired, she finished the project'?", options:["one","two","three","zero"], correct:0 },
        ],
      },
      {
        id: "sentence_types_g7",
        name: "Simple, Compound, Complex & Compound-Complex",
        questions: [
          { type:"mcq", topic:"grammar_g7", subtopic:"sentence_types_g7", question:"'She studied, so she passed.' What type of sentence is this?", options:["compound","simple","complex","compound-complex"], correct:0 },
        ],
      },
      {
        id: "modifiers_g7",
        name: "Misplaced & Dangling Modifiers",
        questions: [
          { type:"mcq", topic:"grammar_g7", subtopic:"modifiers_g7", question:"Which sentence has a MISPLACED modifier?", options:["She almost drove her children to school every day.","She drove her children to school almost every day.","Almost every day, she drove her children to school.","Every day, she almost drove her children to school."], correct:0 },
        ],
      },
      {
        id: "tense_voice_g7",
        name: "Correcting Shifts in Verb Tense, Voice & Mood",
        questions: [
          { type:"mcq", topic:"grammar_g7", subtopic:"tense_voice_g7", question:"Which sentence has an INCORRECT shift in verb tense?", options:["She opens the door and smiled.","She opened the door and smiled.","She opens the door and smiles.","She will open the door and smile."], correct:0 },
        ],
      },
    ],
  },
  {
    id: "punctuation_g7",
    name: "Punctuation",
    icon: "✏️",
    color: "#FFD700",
    subtopics: [
      {
        id: "commas_phrases_g7",
        name: "Commas to Set Off Phrases & Clauses",
        questions: [
          { type:"mcq", topic:"punctuation_g7", subtopic:"commas_phrases_g7", question:"Which correctly uses a comma to set off a NON-RESTRICTIVE clause?", options:["My brother, who lives in Boston, is a doctor.","My brother who lives in Boston is a doctor.","My brother is a doctor, who lives in Boston.","My brother who, lives in Boston, is a doctor."], correct:0 },
        ],
      },
      {
        id: "semicolons_colons_g7",
        name: "Semicolons & Colons",
        questions: [
          { type:"mcq", topic:"punctuation_g7", subtopic:"semicolons_colons_g7", question:"Which correctly uses a SEMICOLON?", options:["She studied hard; she passed the test.","She studied hard: she passed the test.","She studied hard, she passed the test.","She studied hard. She; passed the test."], correct:0 },
        ],
      },
      {
        id: "dashes_hyphens_g7",
        name: "Dashes & Hyphens",
        questions: [
          { type:"mcq", topic:"punctuation_g7", subtopic:"dashes_hyphens_g7", question:"Which correctly uses a HYPHEN?", options:["a well-known author","a well known author","a well — known author","a wellknown author"], correct:0 },
        ],
      },
    ],
  },
  {
    id: "vocab_g7",
    name: "Vocabulary",
    icon: "📚",
    color: "#00FF88",
    subtopics: [
      {
        id: "figurative_language_g7",
        name: "Figurative Language (alliteration, personification, metaphor)",
        questions: [
          { type:"mcq", topic:"vocab_g7", subtopic:"figurative_language_g7", question:"'The wind whispered through the trees.' This is an example of:", options:["personification","simile","alliteration","hyperbole"], correct:0 },
        ],
      },
      {
        id: "connotation_g7",
        name: "Connotation & Denotation",
        questions: [
          { type:"mcq", topic:"vocab_g7", subtopic:"connotation_g7", question:"The DENOTATION of a word is its:", options:["dictionary definition","emotional association","cultural meaning","implied meaning"], correct:0 },
        ],
      },
      {
        id: "academic_vocab_g7",
        name: "Academic Vocabulary Strategies",
        questions: [
          { type:"mcq", topic:"vocab_g7", subtopic:"academic_vocab_g7", question:"Which strategy helps you figure out the meaning of an unknown word?", options:["Using context clues from surrounding sentences","Skipping the word","Guessing randomly","Replacing it with a familiar word"], correct:0 },
        ],
      },
      {
        id: "analogies_g7",
        name: "Analogies & Word Relationships",
        questions: [
          { type:"mcq", topic:"vocab_g7", subtopic:"analogies_g7", question:"Pen is to writer as brush is to ___.", options:["painter","canvas","color","art"], correct:0 },
        ],
      },
    ],
  },
  {
    id: "clause_types_g7",
    name: "Clause Types",
    icon: "🔗",
    color: "#B44DFF",
    subtopics: [
      {
        id: "cause_effect_g7",
        name: "Cause & Effect Clauses (because, since)",
        questions: [
          { type:"mcq", topic:"clause_types_g7", subtopic:"cause_effect_g7", question:"Which conjunction introduces a CAUSE & EFFECT clause?", options:["because","although","when","unless"], correct:0 },
        ],
      },
      {
        id: "conditional_g7",
        name: "Conditional Clauses (if, unless)",
        questions: [
          { type:"mcq", topic:"clause_types_g7", subtopic:"conditional_g7", question:"Which sentence is a CONDITIONAL sentence?", options:["If it rains, we will stay inside.","It is raining today.","We stayed inside yesterday.","She likes rain."], correct:0 },
        ],
      },
      {
        id: "concessive_g7",
        name: "Concessive Clauses (although, even though)",
        questions: [
          { type:"mcq", topic:"clause_types_g7", subtopic:"concessive_g7", question:"Which conjunction introduces a CONCESSIVE clause (showing contrast)?", options:["although","because","so that","when"], correct:0 },
        ],
      },
      {
        id: "purpose_g7",
        name: "Purpose Clauses (so that, in order to)",
        questions: [
          { type:"mcq", topic:"clause_types_g7", subtopic:"purpose_g7", question:"Which correctly uses a PURPOSE clause?", options:["She studied so that she could pass.","She studied because she failed.","She studied although she was tired.","She studied when she had time."], correct:0 },
        ],
      },
      {
        id: "time_clauses_g7",
        name: "Time Clauses (when, while, after, before)",
        questions: [
          { type:"mcq", topic:"clause_types_g7", subtopic:"time_clauses_g7", question:"Which is a TIME clause?", options:["After she arrived, we started dinner.","She arrived because we had dinner.","Although she arrived, we started.","She arrived so that we could start."], correct:0 },
        ],
      },
    ],
  },
  {
    id: "verbal_phrases_g7",
    name: "Verbal Phrases",
    icon: "📝",
    color: "#00D4FF",
    subtopics: [
      {
        id: "infinitive_phrases_g7",
        name: "Infinitive Phrases (to + verb)",
        questions: [
          { type:"mcq", topic:"verbal_phrases_g7", subtopic:"infinitive_phrases_g7", question:"Which is an INFINITIVE PHRASE?", options:["to run quickly","running quickly","ran quickly","runs quickly"], correct:0 },
        ],
      },
      {
        id: "gerund_phrases_g7",
        name: "Gerund Phrases (-ing as noun)",
        questions: [
          { type:"mcq", topic:"verbal_phrases_g7", subtopic:"gerund_phrases_g7", question:"In 'Swimming every day is healthy,' what is 'Swimming every day'?", options:["a gerund phrase (subject)","an infinitive phrase","a participial phrase","a prepositional phrase"], correct:0 },
        ],
      },
      {
        id: "participial_phrases_g7",
        name: "Participial Phrases (-ing / -ed as modifier)",
        questions: [
          { type:"mcq", topic:"verbal_phrases_g7", subtopic:"participial_phrases_g7", question:"In 'Exhausted from the race, she sat down,' what is 'Exhausted from the race'?", options:["a participial phrase (modifies she)","a gerund phrase","an infinitive phrase","an independent clause"], correct:0 },
        ],
      },
    ],
  },
];

// ─── GRADE 8 ──────────────────────────────────────────────────────────────────

const G8: EnglishTheme[] = [
  {
    id: "complex_grammar_g8",
    name: "Complex Grammar",
    icon: "🔤",
    color: "#FF2D78",
    subtopics: [
      {
        id: "verbals_g8",
        name: "Verbals: Gerunds, Participles, Infinitives",
        questions: [
          { type:"mcq", topic:"complex_grammar_g8", subtopic:"verbals_g8", question:"In 'To win is her goal,' 'To win' is an example of a:", options:["infinitive used as a noun","gerund","participle","adverb"], correct:0 },
        ],
      },
      {
        id: "participial_modifiers_g8",
        name: "Participial Phrases as Modifiers",
        questions: [
          { type:"mcq", topic:"complex_grammar_g8", subtopic:"participial_modifiers_g8", question:"Which sentence uses a participial phrase CORRECTLY (no dangling modifier)?", options:["Singing loudly, she walked down the street.","Singing loudly, the street seemed empty.","The street, singing loudly, seemed empty.","She walked, singing loudly the street."], correct:0 },
        ],
      },
      {
        id: "absolute_phrases_g8",
        name: "Absolute Phrases",
        questions: [
          { type:"mcq", topic:"complex_grammar_g8", subtopic:"absolute_phrases_g8", question:"Which is an ABSOLUTE PHRASE (noun + participle, modifying the whole sentence)?", options:["His homework finished, he went to bed.","He finished his homework.","After finishing homework, he went to bed.","He went to bed to finish homework."], correct:0 },
        ],
      },
      {
        id: "active_passive_g8",
        name: "Active Voice vs. Passive Voice",
        questions: [
          { type:"mcq", topic:"complex_grammar_g8", subtopic:"active_passive_g8", question:"Which sentence is in PASSIVE voice?", options:["The cake was eaten by the students.","The students ate the cake.","Students love eating cake.","Cake eating is popular."], correct:0 },
        ],
      },
      {
        id: "subjunctive_g8",
        name: "Conditional & Subjunctive Mood",
        questions: [
          { type:"mcq", topic:"complex_grammar_g8", subtopic:"subjunctive_g8", question:"Which sentence uses the SUBJUNCTIVE mood correctly?", options:["If I were you, I would apologize.","If I was you, I would apologize.","If I am you, I would apologize.","If I be you, I would apologize."], correct:0 },
        ],
      },
      {
        id: "voice_mood_shifts_g8",
        name: "Shifts in Verb Voice & Mood",
        questions: [
          { type:"mcq", topic:"complex_grammar_g8", subtopic:"voice_mood_shifts_g8", question:"Which sentence has an INCONSISTENT voice shift?", options:["She made the cake and the dishes were washed by her.","She made the cake and washed the dishes.","The cake was made and the dishes were washed by her.","She made and washed everything."], correct:0 },
        ],
      },
    ],
  },
  {
    id: "writing_g8",
    name: "Text Types & Writing",
    icon: "✍️",
    color: "#B44DFF",
    subtopics: [
      {
        id: "argumentative_g8",
        name: "Argumentative / Persuasive Essay",
        questions: [
          { type:"mcq", topic:"writing_g8", subtopic:"argumentative_g8", question:"What is the purpose of a CLAIM in an argumentative essay?", options:["To state the writer's main position","To provide background information","To list counterarguments","To summarize the story"], correct:0 },
        ],
      },
      {
        id: "informational_g8",
        name: "Informational / Explanatory Writing",
        questions: [
          { type:"mcq", topic:"writing_g8", subtopic:"informational_g8", question:"The PRIMARY purpose of informational writing is to:", options:["explain or inform the reader","entertain with a story","persuade the reader to agree","express personal feelings"], correct:0 },
        ],
      },
      {
        id: "narrative_g8",
        name: "Narrative Writing",
        questions: [
          { type:"mcq", topic:"writing_g8", subtopic:"narrative_g8", question:"Which element is MOST important in narrative writing?", options:["plot with a beginning, conflict, and resolution","a clear thesis statement","factual data and evidence","counterarguments"], correct:0 },
        ],
      },
      {
        id: "report_story_g8",
        name: "Report vs. Story (differences)",
        questions: [
          { type:"mcq", topic:"writing_g8", subtopic:"report_story_g8", question:"Which feature belongs to a REPORT, not a story?", options:["Topic sentences with factual evidence","Dialogue between characters","A narrative arc with rising action","A first-person narrator"], correct:0 },
        ],
      },
    ],
  },
  {
    id: "literature_g8",
    name: "Literature",
    icon: "📖",
    color: "#00D4FF",
    subtopics: [
      {
        id: "point_of_view_g8",
        name: "Point of View & Narrative Perspective",
        questions: [
          { type:"mcq", topic:"literature_g8", subtopic:"point_of_view_g8", question:"If a story uses 'I' and shows only one character's thoughts, it is written in:", options:["first person","second person","third person limited","third person omniscient"], correct:0 },
        ],
      },
      {
        id: "genres_g8",
        name: "Literary Genres & Text Structures",
        questions: [
          { type:"mcq", topic:"literature_g8", subtopic:"genres_g8", question:"Which is an example of a LITERARY GENRE?", options:["mystery","biography","news article","science textbook"], correct:0 },
        ],
      },
      {
        id: "allusion_irony_g8",
        name: "Allusion, Irony, Satire, Tone",
        questions: [
          { type:"mcq", topic:"literature_g8", subtopic:"allusion_irony_g8", question:"When a fire station burns down, that is an example of:", options:["situational irony","verbal irony","allusion","satire"], correct:0 },
        ],
      },
      {
        id: "theme_g8",
        name: "Theme & Central Idea Development",
        questions: [
          { type:"mcq", topic:"literature_g8", subtopic:"theme_g8", question:"The THEME of a story is best described as:", options:["the central message or life lesson","the plot summary","the setting of the story","the main character's name"], correct:0 },
        ],
      },
    ],
  },
  {
    id: "style_g8",
    name: "Formal vs. Informal Style",
    icon: "🎭",
    color: "#00FF88",
    subtopics: [
      {
        id: "formal_register_g8",
        name: "Recognizing & Using Formal Register",
        questions: [
          { type:"mcq", topic:"style_g8", subtopic:"formal_register_g8", question:"Which sentence uses FORMAL register?", options:["The committee has approved the proposal.","They said yes to the idea.","The committee was like, yeah, sure.","Yep, the plan got approved."], correct:0 },
        ],
      },
      {
        id: "academic_vs_conv_g8",
        name: "Academic vs. Conversational Language",
        questions: [
          { type:"mcq", topic:"style_g8", subtopic:"academic_vs_conv_g8", question:"Which phrase is more appropriate in ACADEMIC writing?", options:["The data suggests a correlation","The numbers kind of match up","It seems like they go together","The stats look the same"], correct:0 },
        ],
      },
      {
        id: "domain_vocab_g8",
        name: "Domain-Specific vs. General Vocabulary",
        questions: [
          { type:"mcq", topic:"style_g8", subtopic:"domain_vocab_g8", question:"In a biology essay, which term is DOMAIN-SPECIFIC?", options:["mitosis","growth","change","split"], correct:0 },
        ],
      },
    ],
  },
  {
    id: "punctuation_g8",
    name: "Advanced Punctuation",
    icon: "✏️",
    color: "#FFD700",
    subtopics: [
      {
        id: "ellipsis_g8",
        name: "Ellipsis (...) — pause or omission",
        questions: [
          { type:"mcq", topic:"punctuation_g8", subtopic:"ellipsis_g8", question:"An ELLIPSIS (...) is used to indicate:", options:["an omission or trailing thought","a strong pause","a list","possession"], correct:0 },
        ],
      },
      {
        id: "dashes_g8",
        name: "Dashes — emphasis & break",
        questions: [
          { type:"mcq", topic:"punctuation_g8", subtopic:"dashes_g8", question:"Which correctly uses an EM DASH for emphasis?", options:["She had one goal—to win.","She had one goal-to win.","She had one goal...to win.","She had one goal: to win."], correct:0 },
        ],
      },
      {
        id: "commas_complex_g8",
        name: "Commas in Complex Structures",
        questions: [
          { type:"mcq", topic:"punctuation_g8", subtopic:"commas_complex_g8", question:"Which sentence correctly uses a comma with an APPOSITIVE?", options:["My teacher, Mr. Smith, is very kind.","My teacher Mr. Smith, is very kind.","My teacher, Mr. Smith is very kind.","My teacher Mr. Smith is very kind."], correct:0 },
        ],
      },
    ],
  },
  {
    id: "vocab_g8",
    name: "Vocabulary",
    icon: "📚",
    color: "#FF6B00",
    subtopics: [
      {
        id: "greek_latin_adv_g8",
        name: "Greek & Latin Roots (advanced)",
        questions: [
          { type:"mcq", topic:"vocab_g8", subtopic:"greek_latin_adv_g8", question:"The Greek root 'chron' (as in 'chronology') means:", options:["time","place","people","thought"], correct:0 },
        ],
      },
      {
        id: "context_clues_g8",
        name: "Context Clues & Reference Materials",
        questions: [
          { type:"mcq", topic:"vocab_g8", subtopic:"context_clues_g8", question:"'The scientist's hypothesis, or educated guess, was later proven correct.' The meaning of 'hypothesis' is clarified by:", options:["a context clue (appositive)","a footnote","a glossary","a root word"], correct:0 },
        ],
      },
      {
        id: "figurative_adv_g8",
        name: "Figurative Language: Verbal Irony, Puns, Allusions",
        questions: [
          { type:"mcq", topic:"vocab_g8", subtopic:"figurative_adv_g8", question:"'Oh great, another Monday!' (said sarcastically). This is an example of:", options:["verbal irony","a pun","an allusion","personification"], correct:0 },
        ],
      },
      {
        id: "word_nuances_g8",
        name: "Word Relationships & Nuances",
        questions: [
          { type:"mcq", topic:"vocab_g8", subtopic:"word_nuances_g8", question:"Which word has the most FORMAL tone?", options:["commence","start","begin","kick off"], correct:0 },
        ],
      },
    ],
  },
];

// ─── MAIN EXPORT ──────────────────────────────────────────────────────────────

export const ENGLISH_CURRICULUM: Record<number, EnglishTheme[]> = {
  1: G1, 2: G2, 3: G3, 4: G4,
  5: G5, 6: G6, 7: G7, 8: G8,
};

/** Generator mapping by grade */
const GENERATOR_MAP: Record<number, Record<string, Record<string, (seed?: number) => CurriculumQuestion[]>>> = {
  1: G1_Generators,
  2: G2_Generators,
  3: G3_Generators,
  4: G4_Generators,
  5: G5_Generators,
  6: G6_Generators,
  7: G7_Generators,
  8: G8_Generators,
};

/** Returns shuffled questions from selected subtopics (max count). */
export function getEnglishQuestions(
  grade: number,
  selectedSubtopicIds: string[],
  count = 10
): EnglishQuestion[] {
  const themes = ENGLISH_CURRICULUM[grade] ?? [];
  const pool: EnglishQuestion[] = [];
  const generators = GENERATOR_MAP[grade];

  if (!generators) {
    return [];
  }

  for (const theme of themes) {
    for (const sub of theme.subtopics) {
      if (selectedSubtopicIds.includes(sub.id)) {
        // Try to get the generator function for this topic/subtopic
        const topicGenerators = generators[theme.id];
        if (topicGenerators) {
          const generatorFn = topicGenerators[sub.id];
          if (generatorFn && typeof generatorFn === "function") {
            // Call the generator with a random seed for variation
            const seed = Math.floor(Math.random() * 1000000);
            const generated = generatorFn(seed);
            pool.push(...generated);
          } else {
            // Fallback to hardcoded questions if generator doesn't exist
            pool.push(...sub.questions);
          }
        } else {
          // Fallback to hardcoded questions if topic generators don't exist
          pool.push(...sub.questions);
        }
      }
    }
  }

  // If pool is too small, cycle through existing questions with shuffled options
  if (pool.length > 0 && pool.length < count) {
    const base = [...pool];
    while (pool.length < count) {
      const q = { ...base[pool.length % base.length] };
      if (q.type === "mcq" && q.options) {
        // Reshuffle options for variety
        const opts = [...q.options];
        const correctAnswer = opts[q.correct ?? 0];
        for (let i = opts.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [opts[i], opts[j]] = [opts[j], opts[i]];
        }
        q.options = opts;
        q.correct = opts.indexOf(correctAnswer);
      }
      pool.push(q);
    }
  }

  // Fisher-Yates shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count);
}

// ─── US GRADING (A / B / C / D / F) ──────────────────────────────────────────

export function calculateUSGrade(pct: number, _countryCode = "US"): GradeMark {
  if (pct >= 90) return { label: "A", description: "Excellent",      color: "#FFD700", emoji: "🌟" };
  if (pct >= 80) return { label: "B", description: "Good",           color: "#00FF88", emoji: "😊" };
  if (pct >= 70) return { label: "C", description: "Average",        color: "#00D4FF", emoji: "🙂" };
  if (pct >= 60) return { label: "D", description: "Below Average",  color: "#FF6B00", emoji: "😅" };
  return              { label: "F", description: "Needs Improvement", color: "#FF4444", emoji: "😟" };
}

// ─── SUBTOPIC HINTS (shown after wrong answer) ────────────────────────────────

export const ENGLISH_SUBTOPIC_HINTS: Record<string, string> = {
  // Phonics G1
  "short_long_vowels_g1":      "Short vowels: a(cat) e(bed) i(sit) o(hot) u(cup) · Long vowels: a(cake) e(feet) i(kite) o(bone) u(tube)",
  "digraphs_g1":               "Digraphs are 2 letters that make 1 sound: sh(ship) ch(chip) th(this) wh(whale) ph(phone)",
  "uppercase_lowercase_g1":    "Uppercase letters are BIG: A B C · Lowercase letters are small: a b c",
  "syllables_g1":              "Clap for each syllable: but-ter = 2, ap-ple = 2, cat = 1, el-e-phant = 3",
  "blends_g1":                 "Consonant blends: bl(blue) cr(crab) st(stop) tr(tree) fl(flag) gr(green)",
  "rhyming_g1":                "Rhyming words end with the same sound: cat/bat/sat · dog/log/fog",
  // Words G1
  "sight_words_g1":            "Common sight words: the, a, is, it, in, on, at, to, he, she, we, my, and, said",
  "nouns_g1":                  "Nouns name a person, place, or thing: dog, school, table, Maria, city",
  "verbs_g1":                  "Verbs are action words: run, jump, eat, sleep, think, play, write",
  "articles_g1":               "Use 'a' before consonant sounds · Use 'an' before vowel sounds (a, e, i, o, u)",
  "compound_words_g1":         "Compound words = 2 words joined: sun+shine=sunshine, rain+bow=rainbow, base+ball=baseball",
  // Sentences G1
  "end_punctuation_g1":        "Statements end with . · Questions end with ? · Exclamations end with !",
  "capitalization_g1":         "Capitalize: first word of sentence · Names of people & places (proper nouns)",
  "sentence_vs_not_g1":        "A complete sentence has a SUBJECT (who/what) and a PREDICATE (what they do)",
  "declarative_interrogative_g1": "Declarative = statement (ends with .) · Interrogative = question (ends with ?)",
  // G2 parts of speech
  "nouns_common_proper_g2":    "Common nouns: city, dog, teacher · Proper nouns (capitalized): London, Rex, Mrs. Jones",
  "nouns_plural_g2":           "Regular: add -s or -es · Irregular: man→men, child→children, foot→feet, mouse→mice",
  "collective_nouns_g2":       "Collective nouns: flock(birds) pack(wolves) herd(cows) school(fish) team(players)",
  "verbs_g2":                  "Action verbs: run, eat, jump · Linking verbs: is, are, was, were, seems, becomes",
  "irregular_past_g2":         "Irregular past tense: go→went, run→ran, eat→ate, see→saw, give→gave, say→said",
  "adj_adv_g2":                "Adjectives describe nouns (big dog) · Adverbs describe verbs/adjectives (runs quickly)",
  "pronouns_g2":               "Personal: I, you, he, she, it, we, they · Reflexive: myself, yourself, himself, herself",
  // G3
  "nouns_plural_g3":           "Regular: -s/-es · Irregular: foot→feet, tooth→teeth, child→children, person→people",
  "abstract_nouns_g3":         "Abstract nouns = ideas you cannot touch: love, freedom, courage, justice, happiness",
  "verb_tenses_g3":            "Past (walked) · Present (walks) · Future (will walk) · Present continuous (is walking)",
  "adj_comparative_g3":        "Comparative (2 things): bigger, more interesting · Superlative (3+): biggest, most interesting",
  "adverbs_g3":                "HOW: quickly, slowly · WHEN: yesterday, soon · WHERE: here, there · HOW MUCH: very, almost",
  "conjunctions_g3":           "FANBOYS: For And Nor But Or Yet So — these are coordinating conjunctions",
  "subject_predicate_g3":      "Subject = who/what the sentence is about · Predicate = what the subject does or is",
  "fragments_runons_g3":       "Fragment = incomplete sentence · Run-on = two+ sentences joined without proper punctuation",
  "homophones_g3":             "Homophones sound alike but differ in meaning/spelling: there/their/they're · to/too/two",
  // G4
  "relative_pronouns_g4":      "Use WHO for people · WHICH for things · THAT for people or things · WHOSE for possession",
  "modal_aux_g4":              "Modal auxiliaries: can, could, may, might, must, shall, should, will, would, ought to",
  "progressive_tenses_g4":     "am/is/are + -ing (present) · was/were + -ing (past) · will be + -ing (future progressive)",
  "adjective_order_g4":        "Order: opinion → size → age → shape → color → origin → material → purpose + noun",
  "confused_words_g4":         "to = direction/infinitive · too = also/excessive · two = the number 2",
  // G5
  "perfect_tenses_g5":         "Present perfect: have/has + past participle · Past perfect: had + past participle",
  "correlative_conj_g5":       "Pairs: either...or · neither...nor · both...and · not only...but also · whether...or",
  "greek_latin_g5":            "port=carry · aud=hear · vis=see · rupt=break · dict=say · scrib=write · struct=build",
  "connotation_denotation_g5": "Denotation = literal dictionary meaning · Connotation = emotional/cultural association",
  // G6
  "pronoun_cases_g6":          "Subjective: I, he, she, we, they · Objective: me, him, her, us, them · Possessive: my, his",
  "intensive_pronouns_g6":     "Intensive pronouns add emphasis: herself, himself, itself, myself, yourself, themselves",
  "pronoun_agreement_g6":      "Pronoun must match antecedent in number and gender: Each student → his or her / their",
  "clauses_g6":                "Independent clause = complete sentence · Dependent clause = cannot stand alone (because...)",
  "root_words_g6":             "Common roots: rupt(break) aud(hear) vis(see) port(carry) struct(build) dict(say) scrib(write)",
  // G7
  "modifiers_g7":              "Modifier must be placed NEXT TO the word it modifies to avoid confusion",
  "semicolons_colons_g7":      "Semicolon (;) joins two related independent clauses · Colon (:) introduces a list or explanation",
  "dashes_hyphens_g7":         "Hyphen(-): compound words & numbers (twenty-one) · Em dash(—): emphasis or interruption",
  "cause_effect_g7":           "Cause & effect conjunctions: because, since, so, therefore, as a result, consequently",
  "conditional_g7":            "Conditionals: if/unless (real: If it rains, I will stay) (unreal: If I were rich, I would travel)",
  "concessive_g7":             "Concessive conjunctions: although, even though, despite, in spite of, while, whereas",
  // G8
  "subjunctive_g8":            "Subjunctive: use 'were' not 'was' in hypotheticals: If I WERE you... I wish I WERE there...",
  "active_passive_g8":         "Active: Subject DOES the action · Passive: Subject RECEIVES the action (was done by...)",
  "point_of_view_g8":          "1st person: I/we · 2nd person: you · 3rd limited: he/she (one character's thoughts) · 3rd omniscient: all",
  "allusion_irony_g8":         "Verbal irony: saying opposite of what you mean · Situational irony: unexpected outcome · Allusion: reference to another work",
  "greek_latin_adv_g8":        "chron=time · bio=life · geo=earth · tele=far · micro=small · macro=large · hydr=water · phon=sound",
};

/** Returns the hint for a given subtopic id. */
export function getEnglishSubtopicHint(subtopicId?: string): string | null {
  if (!subtopicId) return null;
  return ENGLISH_SUBTOPIC_HINTS[subtopicId] ?? null;
}
