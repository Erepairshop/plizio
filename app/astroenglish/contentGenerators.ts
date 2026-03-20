// Content generators for AstroEnglish explorer games
// Real English learning content appropriate for each grade level

// ─── TYPES (matching explorer components) ───────────────────────────────────

interface WordSortRound {
  categories: { label: string; color: string }[];
  words: { text: string; categoryIndex: number }[];
  instruction?: string;
}

interface SentenceRound {
  words: string[];
  correctOrder: number[];
  hint?: string;
  explanation?: string;
}

interface GapRound {
  sentence: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
  hint?: string;
}

interface SpellRound {
  word: string;
  hint: string;
  scrambledLetters: string[];
  category?: string;
}

interface CategoryItem {
  text: string;
  categoryIndex: number;
  explanation?: string;
}

interface MatchRound {
  pairs: { rule: string; example: string; explanation?: string }[];
  instruction?: string;
}

// ─── K1 (Grade 1) CONTENT GENERATORS ───────────────────────────────────────

export function generateK1WordSortContent(): WordSortRound[] {
  // Sort words by vowel type
  return [
    {
      categories: [
        { label: "Short Vowels", color: "#FF6B6B" },
        { label: "Long Vowels", color: "#4ECDC4" },
      ],
      words: [
        { text: "cat", categoryIndex: 0 },
        { text: "cake", categoryIndex: 1 },
        { text: "dog", categoryIndex: 0 },
        { text: "bike", categoryIndex: 1 },
        { text: "sit", categoryIndex: 0 },
        { text: "home", categoryIndex: 1 },
        { text: "hot", categoryIndex: 0 },
        { text: "mule", categoryIndex: 1 },
      ],
      instruction: "Sort words by vowel sounds!",
    },
    {
      categories: [
        { label: "CVC Words", color: "#95E1D3" },
        { label: "Blends", color: "#F38181" },
      ],
      words: [
        { text: "bat", categoryIndex: 0 },
        { text: "flag", categoryIndex: 1 },
        { text: "pen", categoryIndex: 0 },
        { text: "plan", categoryIndex: 1 },
        { text: "sun", categoryIndex: 0 },
        { text: "spin", categoryIndex: 1 },
        { text: "map", categoryIndex: 0 },
        { text: "stop", categoryIndex: 1 },
      ],
      instruction: "Sort words by structure!",
    },
  ];
}

export function generateK1SpellRaceContent(): SpellRound[] {
  // Spell Grade 1 appropriate words
  return [
    {
      word: "cat",
      hint: "A furry pet that meows",
      scrambledLetters: ["c", "a", "t"],
    },
    {
      word: "sun",
      hint: "Bright thing in the sky during day",
      scrambledLetters: ["s", "u", "n"],
    },
    {
      word: "book",
      hint: "Something you read",
      scrambledLetters: ["b", "o", "o", "k"],
    },
    {
      word: "play",
      hint: "Fun activity with friends",
      scrambledLetters: ["p", "l", "a", "y"],
    },
    {
      word: "jump",
      hint: "To go up in the air",
      scrambledLetters: ["j", "u", "m", "p"],
    },
    {
      word: "tree",
      hint: "Plant with leaves and branches",
      scrambledLetters: ["t", "r", "e", "e"],
    },
    {
      word: "milk",
      hint: "White drink from cows",
      scrambledLetters: ["m", "i", "l", "k"],
    },
  ];
}

export function generateK1SentenceBuilderContent(): SentenceRound[] {
  // Build simple sentences
  return [
    {
      words: ["The", "cat", "is", "playing", "with", "a", "ball"],
      correctOrder: [0, 1, 2, 3, 4, 5, 6],
      hint: "Subject + verb + object",
      explanation: "The cat is playing with a ball.",
    },
    {
      words: ["I", "like", "to", "read", "books"],
      correctOrder: [0, 1, 2, 3, 4],
      hint: "Subject + verb + object",
      explanation: "I like to read books.",
    },
    {
      words: ["My", "dog", "runs", "in", "the", "park"],
      correctOrder: [0, 1, 2, 3, 4, 5],
      hint: "Subject + verb + location",
      explanation: "My dog runs in the park.",
    },
    {
      words: ["We", "are", "playing", "games"],
      correctOrder: [0, 1, 2, 3],
      hint: "Subject + verb + object",
      explanation: "We are playing games.",
    },
    {
      words: ["She", "can", "eat", "an", "apple"],
      correctOrder: [0, 1, 2, 3, 4],
      hint: "Subject + modal + verb + object",
      explanation: "She can eat an apple.",
    },
  ];
}

export function generateK1FillGapContent(): GapRound[] {
  // Fill in punctuation marks
  return [
    {
      sentence: "What is your name___",
      options: ["?", ".", "!"],
      correctIndex: 0,
      hint: "Asking a question",
      explanation: "A question mark goes at the end of a question.",
    },
    {
      sentence: "I love ice cream___",
      options: ["?", ".", "!"],
      correctIndex: 1,
      hint: "Making a statement",
      explanation: "A period goes at the end of a statement.",
    },
    {
      sentence: "Watch out___",
      options: ["?", ".", "!"],
      correctIndex: 2,
      hint: "Showing excitement or warning",
      explanation: "An exclamation mark shows excitement!",
    },
    {
      sentence: "Do you like cats___",
      options: ["?", ".", "!"],
      correctIndex: 0,
      hint: "Asking a question",
      explanation: "Questions end with a question mark.",
    },
    {
      sentence: "This is amazing___",
      options: ["?", ".", "!"],
      correctIndex: 2,
      hint: "Showing excitement",
      explanation: "Exciting sentences use exclamation marks!",
    },
  ];
}

export function generateK1CategoryRushContent(): { categories: { label: string; color: string }[]; items: CategoryItem[] } {
  // Categorize words by part of speech
  const categories = [
    { label: "Verbs", color: "#FF6B6B" },
    { label: "Nouns", color: "#4ECDC4" },
    { label: "Adjectives", color: "#FFE66D" },
  ];

  return {
    categories,
    items: [
      { text: "run", categoryIndex: 0, explanation: "A verb - an action word" },
      { text: "dog", categoryIndex: 1, explanation: "A noun - a person, place, or thing" },
      { text: "happy", categoryIndex: 2, explanation: "An adjective - describes something" },
      { text: "jump", categoryIndex: 0, explanation: "A verb - an action word" },
      { text: "book", categoryIndex: 1, explanation: "A noun - something you read" },
      { text: "blue", categoryIndex: 2, explanation: "An adjective - a color" },
      { text: "walk", categoryIndex: 0, explanation: "A verb - an action word" },
      { text: "cat", categoryIndex: 1, explanation: "A noun - a pet animal" },
      { text: "big", categoryIndex: 2, explanation: "An adjective - a size word" },
      { text: "sing", categoryIndex: 0, explanation: "A verb - to make music" },
    ],
  };
}

export function generateK1GrammarMatchContent(): MatchRound[] {
  // Match story elements with examples
  return [
    {
      pairs: [
        {
          rule: "Character",
          example: "A little girl",
          explanation: "The person in the story",
        },
        {
          rule: "Setting",
          example: "In the forest",
          explanation: "Where the story happens",
        },
        {
          rule: "Action",
          example: "She found a magic ring",
          explanation: "What happens in the story",
        },
        {
          rule: "Feeling",
          example: "Happy and surprised",
          explanation: "How the character feels",
        },
        {
          rule: "Problem",
          example: "The ring goes missing",
          explanation: "What goes wrong",
        },
      ],
      instruction: "Match story parts with their examples!",
    },
  ];
}

// ─── K2 (Grade 2) CONTENT GENERATORS ───────────────────────────────────────

export function generateK2WordSortContent(): WordSortRound[] {
  // Sort common vs proper nouns
  return [
    {
      categories: [
        { label: "Common Nouns", color: "#95E1D3" },
        { label: "Proper Nouns", color: "#F38181" },
      ],
      words: [
        { text: "dog", categoryIndex: 0 },
        { text: "Sarah", categoryIndex: 1 },
        { text: "book", categoryIndex: 0 },
        { text: "Paris", categoryIndex: 1 },
        { text: "park", categoryIndex: 0 },
        { text: "Tom", categoryIndex: 1 },
        { text: "school", categoryIndex: 0 },
        { text: "London", categoryIndex: 1 },
      ],
      instruction: "Capitalize proper nouns!",
    },
    {
      categories: [
        { label: "Singular", color: "#AA96DA" },
        { label: "Plural", color: "#FCBAD3" },
      ],
      words: [
        { text: "cat", categoryIndex: 0 },
        { text: "cats", categoryIndex: 1 },
        { text: "dog", categoryIndex: 0 },
        { text: "dogs", categoryIndex: 1 },
        { text: "book", categoryIndex: 0 },
        { text: "books", categoryIndex: 1 },
        { text: "apple", categoryIndex: 0 },
        { text: "apples", categoryIndex: 1 },
      ],
      instruction: "Sort by number!",
    },
  ];
}

export function generateK2FillGapContent(): GapRound[] {
  // Fill in correct verb forms
  return [
    {
      sentence: "She ___ to school every day.",
      options: ["goes", "go", "going"],
      correctIndex: 0,
      hint: "Present tense, third person singular",
      explanation: "With 'she', we use 'goes' not 'go'.",
    },
    {
      sentence: "They ___ in the park yesterday.",
      options: ["play", "plays", "played"],
      correctIndex: 2,
      hint: "Past tense",
      explanation: "Yesterday means past tense, so we use 'played'.",
    },
    {
      sentence: "I ___ eating ice cream.",
      options: ["am", "is", "are"],
      correctIndex: 0,
      hint: "Present continuous with 'I'",
      explanation: "With 'I', we use 'am' not 'is'.",
    },
    {
      sentence: "The cat ___ on the mat.",
      options: ["sit", "sits", "sitting"],
      correctIndex: 1,
      hint: "Present tense, third person",
      explanation: "With 'the cat', we use 'sits'.",
    },
    {
      sentence: "We ___ a new game tomorrow.",
      options: ["will play", "played", "playing"],
      correctIndex: 0,
      hint: "Future tense",
      explanation: "Tomorrow means future, so we use 'will play'.",
    },
  ];
}

export function generateK2SpellRaceContent(): SpellRound[] {
  // Spell Grade 2 vocabulary words
  return [
    {
      word: "friend",
      hint: "Someone you like to play with",
      scrambledLetters: ["f", "r", "i", "e", "n", "d"],
    },
    {
      word: "because",
      hint: "For the reason that",
      scrambledLetters: ["b", "e", "c", "a", "u", "s", "e"],
    },
    {
      word: "school",
      hint: "Place where you learn",
      scrambledLetters: ["s", "c", "h", "o", "o", "l"],
    },
    {
      word: "teacher",
      hint: "Adult who teaches you",
      scrambledLetters: ["t", "e", "a", "c", "h", "e", "r"],
    },
    {
      word: "different",
      hint: "Not the same",
      scrambledLetters: ["d", "i", "f", "f", "e", "r", "e", "n", "t"],
    },
    {
      word: "water",
      hint: "Clear liquid you drink",
      scrambledLetters: ["w", "a", "t", "e", "r"],
    },
    {
      word: "family",
      hint: "Your relatives",
      scrambledLetters: ["f", "a", "m", "i", "l", "y"],
    },
  ];
}

export function generateK2CategoryRushContent(): { categories: { label: string; color: string }[]; items: CategoryItem[] } {
  // Sort adjectives vs adverbs
  const categories = [
    { label: "Adjectives", color: "#FFE66D" },
    { label: "Adverbs", color: "#A8D8EA" },
  ];

  return {
    categories,
    items: [
      { text: "happy", categoryIndex: 0, explanation: "Describes a noun" },
      { text: "quickly", categoryIndex: 1, explanation: "Describes how you do something" },
      { text: "blue", categoryIndex: 0, explanation: "A color - describes a noun" },
      { text: "slowly", categoryIndex: 1, explanation: "Describes the manner" },
      { text: "big", categoryIndex: 0, explanation: "A size - describes a noun" },
      { text: "brightly", categoryIndex: 1, explanation: "How something shines" },
      { text: "cold", categoryIndex: 0, explanation: "A temperature - describes a noun" },
      { text: "happily", categoryIndex: 1, explanation: "In a happy way" },
      { text: "red", categoryIndex: 0, explanation: "A color - describes a noun" },
      { text: "loudly", categoryIndex: 1, explanation: "With a loud sound" },
    ],
  };
}

export function generateK2SentenceBuilderContent(): SentenceRound[] {
  // Build compound sentences
  return [
    {
      words: ["I", "like", "to", "read", "and", "my", "sister", "likes", "to", "play"],
      correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      hint: "Two ideas with 'and'",
      explanation: "I like to read and my sister likes to play.",
    },
    {
      words: ["The", "dog", "was", "tired", "but", "he", "still", "wanted", "to", "play"],
      correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      hint: "Contrasting ideas with 'but'",
      explanation: "The dog was tired but he still wanted to play.",
    },
    {
      words: ["She", "studied", "hard", "and", "she", "got", "a", "good", "grade"],
      correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      hint: "Connected ideas with 'and'",
      explanation: "She studied hard and she got a good grade.",
    },
    {
      words: ["I", "want", "to", "go", "outside", "but", "it", "is", "raining"],
      correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      hint: "Contrasting ideas with 'but'",
      explanation: "I want to go outside but it is raining.",
    },
  ];
}

export function generateK2GrammarMatchContent(): MatchRound[] {
  // Match prefixes with meanings
  return [
    {
      pairs: [
        {
          rule: "un-",
          example: "unhappy (not happy)",
          explanation: "Means 'not' or 'opposite of'",
        },
        {
          rule: "re-",
          example: "rebuild (build again)",
          explanation: "Means 'again'",
        },
        {
          rule: "pre-",
          example: "preheat (heat before)",
          explanation: "Means 'before'",
        },
        {
          rule: "dis-",
          example: "disagree (not agree)",
          explanation: "Means 'not' or 'opposite'",
        },
      ],
      instruction: "Match prefixes with their meanings!",
    },
  ];
}

// ─── K3 (Grade 3) CONTENT GENERATORS ───────────────────────────────────────

export function generateK3WordSortContent(): WordSortRound[] {
  // Sort plural noun forms
  return [
    {
      categories: [
        { label: "Add -s", color: "#95E1D3" },
        { label: "Add -es", color: "#F38181" },
      ],
      words: [
        { text: "cat", categoryIndex: 0 },
        { text: "cats", categoryIndex: 0 },
        { text: "box", categoryIndex: 1 },
        { text: "boxes", categoryIndex: 1 },
        { text: "dog", categoryIndex: 0 },
        { text: "dogs", categoryIndex: 0 },
        { text: "glass", categoryIndex: 1 },
        { text: "glasses", categoryIndex: 1 },
      ],
      instruction: "Sort plurals by rule!",
    },
    {
      categories: [
        { label: "Regular Plurals", color: "#AA96DA" },
        { label: "Irregular Plurals", color: "#FCBAD3" },
      ],
      words: [
        { text: "books", categoryIndex: 0 },
        { text: "children", categoryIndex: 1 },
        { text: "apples", categoryIndex: 0 },
        { text: "men", categoryIndex: 1 },
        { text: "pens", categoryIndex: 0 },
        { text: "women", categoryIndex: 1 },
        { text: "houses", categoryIndex: 0 },
        { text: "geese", categoryIndex: 1 },
      ],
      instruction: "Regular or irregular?",
    },
  ];
}

export function generateK3FillGapContent(): GapRound[] {
  // Fill in correct verb tenses
  return [
    {
      sentence: "Yesterday, I ___ to the park.",
      options: ["go", "went", "going"],
      correctIndex: 1,
      hint: "Past tense",
      explanation: "Yesterday happened in the past, so use 'went'.",
    },
    {
      sentence: "She ___ her homework right now.",
      options: ["does", "is doing", "did"],
      correctIndex: 1,
      hint: "Present continuous",
      explanation: "'Right now' means she is doing it right at this moment.",
    },
    {
      sentence: "Next week, we ___ to visit my grandmother.",
      options: ["go", "will go", "went"],
      correctIndex: 1,
      hint: "Future tense",
      explanation: "Next week hasn't happened yet, so use future 'will go'.",
    },
    {
      sentence: "He ___ lived here for five years.",
      options: ["has", "is", "was"],
      correctIndex: 0,
      hint: "Present perfect",
      explanation: "'For five years' means from past to now, use 'has'.",
    },
  ];
}

export function generateK3CategoryRushContent(): { categories: { label: string; color: string }[]; items: CategoryItem[] } {
  // Sort adverbs vs conjunctions
  const categories = [
    { label: "Adverbs", color: "#A8D8EA" },
    { label: "Conjunctions", color: "#F7E7CE" },
  ];

  return {
    categories,
    items: [
      { text: "quickly", categoryIndex: 0, explanation: "Describes how" },
      { text: "and", categoryIndex: 1, explanation: "Connects two ideas" },
      { text: "slowly", categoryIndex: 0, explanation: "Describes how" },
      { text: "but", categoryIndex: 1, explanation: "Connects contrasting ideas" },
      { text: "happily", categoryIndex: 0, explanation: "Describes how" },
      { text: "because", categoryIndex: 1, explanation: "Shows reason" },
      { text: "carefully", categoryIndex: 0, explanation: "Describes how" },
      { text: "or", categoryIndex: 1, explanation: "Shows choice" },
      { text: "softly", categoryIndex: 0, explanation: "Describes how" },
      { text: "since", categoryIndex: 1, explanation: "Shows time or reason" },
    ],
  };
}

export function generateK3SentenceBuilderContent(): SentenceRound[] {
  // Build subject-predicate sentences
  return [
    {
      words: ["The", "quick", "brown", "fox", "jumps", "over", "the", "fence"],
      correctOrder: [0, 1, 2, 3, 4, 5, 6, 7],
      hint: "Subject then predicate",
      explanation: "The quick brown fox jumps over the fence.",
    },
    {
      words: ["All", "the", "children", "are", "playing", "games", "in", "the", "park"],
      correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      hint: "Subject then predicate",
      explanation: "All the children are playing games in the park.",
    },
    {
      words: ["My", "best", "friend", "Sarah", "loves", "to", "read", "mystery", "books"],
      correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      hint: "Subject then predicate",
      explanation: "My best friend Sarah loves to read mystery books.",
    },
  ];
}

export function generateK3SpellRaceContent(): SpellRound[] {
  // Spell Grade 3 vocabulary with prefixes/suffixes
  return [
    {
      word: "unhappy",
      hint: "not happy",
      scrambledLetters: ["u", "n", "h", "a", "p", "p", "y"],
    },
    {
      word: "rebuild",
      hint: "build again",
      scrambledLetters: ["r", "e", "b", "u", "i", "l", "d"],
    },
    {
      word: "careless",
      hint: "without care",
      scrambledLetters: ["c", "a", "r", "e", "l", "e", "s", "s"],
    },
    {
      word: "helpful",
      hint: "full of help",
      scrambledLetters: ["h", "e", "l", "p", "f", "u", "l"],
    },
    {
      word: "disappear",
      hint: "not appear",
      scrambledLetters: ["d", "i", "s", "a", "p", "p", "e", "a", "r"],
    },
    {
      word: "rewrite",
      hint: "write again",
      scrambledLetters: ["r", "e", "w", "r", "i", "t", "e"],
    },
    {
      word: "hopeless",
      hint: "without hope",
      scrambledLetters: ["h", "o", "p", "e", "l", "e", "s", "s"],
    },
  ];
}

export function generateK3GrammarMatchContent(): MatchRound[] {
  // Match homophones
  return [
    {
      pairs: [
        {
          rule: "to/two/too",
          example: "We ran to the store",
          explanation: "'to' = direction, 'two' = number 2, 'too' = also",
        },
        {
          rule: "their/there",
          example: "Their house is over there",
          explanation: "'their' = possessive, 'there' = location",
        },
        {
          rule: "be/bee",
          example: "A bee is an insect",
          explanation: "'be' = verb, 'bee' = insect",
        },
        {
          rule: "see/sea",
          example: "I see the sea",
          explanation: "'see' = look, 'sea' = ocean",
        },
      ],
      instruction: "Match homophones with their meanings!",
    },
  ];
}

// ─── K4 (Grade 4) CONTENT GENERATORS ───────────────────────────────────────

export function generateK4GrammarMatchContent(): MatchRound[] {
  // Match relative pronouns with usage
  return [
    {
      pairs: [
        {
          rule: "who",
          example: "The girl who lives next door",
          explanation: "Used for people",
        },
        {
          rule: "which",
          example: "The book which is on the table",
          explanation: "Used for things",
        },
        {
          rule: "where",
          example: "The park where we play",
          explanation: "Used for places",
        },
        {
          rule: "when",
          example: "The day when it snowed",
          explanation: "Used for times",
        },
        {
          rule: "that",
          example: "The house that is blue",
          explanation: "General connector for things",
        },
      ],
      instruction: "Match pronouns with their uses!",
    },
  ];
}

export function generateK4FillGapContent(): GapRound[] {
  // Fill in modal/progressive forms
  return [
    {
      sentence: "She ___ eat the cake.",
      options: ["can", "is", "were"],
      correctIndex: 0,
      hint: "Modal verb - ability",
      explanation: "'can' shows ability",
    },
    {
      sentence: "We ___ playing soccer right now.",
      options: ["are", "is", "were"],
      correctIndex: 0,
      hint: "Present progressive",
      explanation: "With 'we', use 'are' + verb-ing",
    },
    {
      sentence: "He ___ have finished his homework.",
      options: ["could", "might", "must"],
      correctIndex: 2,
      hint: "Modal - certainty",
      explanation: "'must have' shows the speaker is certain",
    },
    {
      sentence: "They ___ been working for hours.",
      options: ["have", "has", "had"],
      correctIndex: 0,
      hint: "Present perfect progressive",
      explanation: "With 'they', use 'have been'",
    },
  ];
}

export function generateK4SentenceBuilderContent(): SentenceRound[] {
  // Build sentences with prepositional phrases
  return [
    {
      words: ["The", "dog", "in", "the", "garden", "is", "playing", "with", "a", "ball"],
      correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      hint: "Place phrase between subject and verb",
      explanation: "The dog in the garden is playing with a ball.",
    },
    {
      words: ["The", "children", "at", "the", "school", "are", "studying", "math"],
      correctOrder: [0, 1, 2, 3, 4, 5, 6, 7],
      hint: "Place phrase between subject and verb",
      explanation: "The children at the school are studying math.",
    },
    {
      words: ["My", "book", "on", "the", "shelf", "is", "very", "interesting"],
      correctOrder: [0, 1, 2, 3, 4, 5, 6, 7],
      hint: "Place phrase between subject and verb",
      explanation: "My book on the shelf is very interesting.",
    },
  ];
}

export function generateK4CategoryRushContent(): { categories: { label: string; color: string }[]; items: CategoryItem[] } {
  // Sort fragments vs complete sentences
  const categories = [
    { label: "Complete Sentences", color: "#95E1D3" },
    { label: "Fragments", color: "#F38181" },
  ];

  return {
    categories,
    items: [
      { text: "The cat sat", categoryIndex: 0, explanation: "Has subject and verb" },
      { text: "Sat on the mat", categoryIndex: 1, explanation: "Missing subject" },
      { text: "The dog ran fast", categoryIndex: 0, explanation: "Has subject and verb" },
      { text: "Quickly jumped", categoryIndex: 1, explanation: "Missing subject" },
      { text: "I love pizza", categoryIndex: 0, explanation: "Complete sentence" },
      { text: "In the morning", categoryIndex: 1, explanation: "Just a phrase" },
      { text: "She walks to school", categoryIndex: 0, explanation: "Complete sentence" },
      { text: "Running in the park", categoryIndex: 1, explanation: "Missing main verb" },
    ],
  };
}

export function generateK4SpellRaceContent(): SpellRound[] {
  // Spell commonly confused words
  return [
    {
      word: "definitely",
      hint: "for certain (NOT definately)",
      scrambledLetters: ["d", "e", "f", "i", "n", "i", "t", "e", "l", "y"],
    },
    {
      word: "separate",
      hint: "apart (NOT seperate)",
      scrambledLetters: ["s", "e", "p", "a", "r", "a", "t", "e"],
    },
    {
      word: "because",
      hint: "reason (NOT becuase)",
      scrambledLetters: ["b", "e", "c", "a", "u", "s", "e"],
    },
    {
      word: "receive",
      hint: "get (i before e)",
      scrambledLetters: ["r", "e", "c", "e", "i", "v", "e"],
    },
    {
      word: "necessary",
      hint: "needed (one collar, two sleeves)",
      scrambledLetters: ["n", "e", "c", "e", "s", "s", "a", "r", "y"],
    },
    {
      word: "accommodate",
      hint: "to fit in (double m and c)",
      scrambledLetters: ["a", "c", "c", "o", "m", "m", "o", "d", "a", "t", "e"],
    },
    {
      word: "privilege",
      hint: "special right",
      scrambledLetters: ["p", "r", "i", "v", "i", "l", "e", "g", "e"],
    },
  ];
}

export function generateK4WordSortContent(): WordSortRound[] {
  // Sort synonyms vs antonyms
  return [
    {
      categories: [
        { label: "Synonyms", color: "#95E1D3" },
        { label: "Not Synonyms", color: "#F38181" },
      ],
      words: [
        { text: "joyful", categoryIndex: 0 },
        { text: "cheerful", categoryIndex: 0 },
        { text: "sad", categoryIndex: 1 },
        { text: "pleased", categoryIndex: 0 },
        { text: "delighted", categoryIndex: 0 },
        { text: "angry", categoryIndex: 1 },
      ],
      instruction: "Find synonyms for 'happy'!",
    },
    {
      categories: [
        { label: "Antonyms", color: "#AA96DA" },
        { label: "Not Antonyms", color: "#FCBAD3" },
      ],
      words: [
        { text: "small", categoryIndex: 0 },
        { text: "tiny", categoryIndex: 0 },
        { text: "large", categoryIndex: 1 },
        { text: "little", categoryIndex: 0 },
        { text: "huge", categoryIndex: 1 },
        { text: "medium", categoryIndex: 1 },
      ],
      instruction: "Find antonyms for 'big'!",
    },
  ];
}
