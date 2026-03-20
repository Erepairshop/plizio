// Content generators for AstroEnglish explorer games
// Real English learning content appropriate for each grade level

// K1 (Grade 1) CONTENT GENERATORS

export function generateK1WordSortContent() {
  // Sort words by vowel type (short vs long vowels)
  return [
    {
      question: "Short vowel sounds",
      words: ["cat", "dog", "sit", "hot", "cup"],
      category: "Short Vowels",
      hint: "Words with short vowel sounds",
    },
    {
      question: "Long vowel sounds",
      words: ["cake", "bike", "home", "mule", "tree"],
      category: "Long Vowels",
      hint: "Words with long vowel sounds",
    },
    {
      question: "CVC pattern words",
      words: ["bat", "pen", "sun", "map", "leg"],
      category: "CVC Words",
      hint: "Consonant-Vowel-Consonant",
    },
    {
      question: "Blending consonants",
      words: ["flag", "plan", "spin", "stop", "trip"],
      category: "Blends",
      hint: "Two consonants together",
    },
    {
      question: "Sight words",
      words: ["the", "and", "is", "you", "to"],
      category: "Sight Words",
      hint: "Common words to memorize",
    },
  ];
}

export function generateK1SpellRaceContent() {
  // Spell Grade 1 appropriate words
  return [
    {
      word: "cat",
      hint: "A furry pet that meows",
      letters: "c,a,t",
    },
    {
      word: "sun",
      hint: "Bright thing in the sky during day",
      letters: "s,u,n",
    },
    {
      word: "book",
      hint: "Something you read",
      letters: "b,o,o,k",
    },
    {
      word: "play",
      hint: "Fun activity with friends",
      letters: "p,l,a,y",
    },
    {
      word: "jump",
      hint: "To go up in the air",
      letters: "j,u,m,p",
    },
    {
      word: "tree",
      hint: "Plant with leaves and branches",
      letters: "t,r,e,e",
    },
    {
      word: "milk",
      hint: "White drink from cows",
      letters: "m,i,l,k",
    },
  ];
}

export function generateK1SentenceBuilderContent() {
  // Build simple sentences
  return [
    {
      subject: "The cat",
      verb: "is playing",
      object: "with a ball",
      correct: "The cat is playing with a ball.",
    },
    {
      subject: "I",
      verb: "like",
      object: "to read books",
      correct: "I like to read books.",
    },
    {
      subject: "My dog",
      verb: "runs",
      object: "in the park",
      correct: "My dog runs in the park.",
    },
    {
      subject: "We",
      verb: "are playing",
      object: "games",
      correct: "We are playing games.",
    },
    {
      subject: "She",
      verb: "can eat",
      object: "an apple",
      correct: "She can eat an apple.",
    },
  ];
}

export function generateK1FillGapContent() {
  // Fill in punctuation marks
  return [
    {
      sentence: "What is your name___",
      answer: "?",
      hint: "Asking a question",
      correct: "What is your name?",
    },
    {
      sentence: "I love ice cream___",
      answer: ".",
      hint: "Making a statement",
      correct: "I love ice cream.",
    },
    {
      sentence: "Watch out___",
      answer: "!",
      hint: "Showing excitement or warning",
      correct: "Watch out!",
    },
    {
      sentence: "Do you like cats___",
      answer: "?",
      hint: "Asking a question",
      correct: "Do you like cats?",
    },
    {
      sentence: "This is amazing___",
      answer: "!",
      hint: "Showing excitement",
      correct: "This is amazing!",
    },
  ];
}

export function generateK1CategoryRushContent() {
  // Categorize verbs vs non-verbs
  return [
    {
      words: ["run", "jump", "walk", "sing", "cat"],
      correctCategory: "Verbs",
      correctWords: ["run", "jump", "walk", "sing"],
      wrongWord: "cat",
    },
    {
      words: ["happy", "blue", "eat", "big", "red"],
      correctCategory: "Adjectives",
      correctWords: ["happy", "blue", "big", "red"],
      wrongWord: "eat",
    },
    {
      words: ["dog", "book", "play", "pen", "table"],
      correctCategory: "Nouns",
      correctWords: ["dog", "book", "pen", "table"],
      wrongWord: "play",
    },
    {
      words: ["fly", "swim", "dance", "under", "laugh"],
      correctCategory: "Verbs",
      correctWords: ["fly", "swim", "dance", "laugh"],
      wrongWord: "under",
    },
    {
      words: ["apple", "house", "sleep", "car", "tree"],
      correctCategory: "Nouns",
      correctWords: ["apple", "house", "car", "tree"],
      wrongWord: "sleep",
    },
  ];
}

export function generateK1GrammarMatchContent() {
  // Match story elements with examples
  return [
    {
      left: "Character",
      right: "A little girl",
      hint: "Who is in the story?",
    },
    {
      left: "Setting",
      right: "In the forest",
      hint: "Where does the story happen?",
    },
    {
      left: "Action",
      right: "She found a magic ring",
      hint: "What happens in the story?",
    },
    {
      left: "Feeling",
      right: "Happy and surprised",
      hint: "How does the character feel?",
    },
    {
      left: "Problem",
      right: "The ring goes missing",
      hint: "What is the problem?",
    },
    {
      left: "Solution",
      right: "She searches and finds it",
      hint: "How is it solved?",
    },
  ];
}

// K2 (Grade 2) CONTENT GENERATORS

export function generateK2WordSortContent() {
  // Sort common vs proper nouns
  return [
    {
      question: "Common nouns",
      words: ["dog", "girl", "book", "park", "school"],
      category: "Common Nouns",
    },
    {
      question: "Proper nouns (people names)",
      words: ["Sarah", "Tom", "Emma", "James", "Lucy"],
      category: "Person Names",
    },
    {
      question: "Proper nouns (place names)",
      words: ["Paris", "Tokyo", "London", "Brazil", "Spain"],
      category: "Place Names",
    },
    {
      question: "Plural nouns",
      words: ["cats", "dogs", "books", "apples", "houses"],
      category: "Plurals",
    },
    {
      question: "Singular nouns",
      words: ["cat", "dog", "book", "apple", "house"],
      category: "Singulars",
    },
  ];
}

export function generateK2FillGapContent() {
  // Fill in correct verb forms
  return [
    {
      sentence: "She ___ to school every day.",
      options: ["goes", "go", "going"],
      answer: "goes",
      hint: "Present tense, third person singular",
    },
    {
      sentence: "They ___ in the park yesterday.",
      options: ["play", "plays", "played"],
      answer: "played",
      hint: "Past tense",
    },
    {
      sentence: "I ___ eating ice cream.",
      options: ["am", "is", "are"],
      answer: "am",
      hint: "Present continuous with 'I'",
    },
    {
      sentence: "The cat ___ on the mat.",
      options: ["sit", "sits", "sitting"],
      answer: "sits",
      hint: "Present tense, third person",
    },
    {
      sentence: "We ___ a new game tomorrow.",
      options: ["will play", "played", "playing"],
      answer: "will play",
      hint: "Future tense",
    },
  ];
}

export function generateK2SpellRaceContent() {
  // Spell Grade 2 vocabulary words
  return [
    { word: "friend", hint: "Someone you like to play with" },
    { word: "because", hint: "For the reason that" },
    { word: "school", hint: "Place where you learn" },
    { word: "teacher", hint: "Adult who teaches you" },
    { word: "different", hint: "Not the same" },
    { word: "water", hint: "Clear liquid you drink" },
    { word: "family", hint: "Your relatives" },
  ];
}

export function generateK2CategoryRushContent() {
  // Sort adjectives vs adverbs
  return [
    {
      words: ["happy", "quickly", "blue", "slowly", "big"],
      correctCategory: "Adjectives",
      correctWords: ["happy", "blue", "big"],
      wrongWord: "quickly",
    },
    {
      words: ["red", "brightly", "cold", "happily", "soft"],
      correctCategory: "Descriptive Words",
      correctWords: ["red", "cold", "soft"],
      wrongWord: "brightly",
    },
  ];
}

export function generateK2SentenceBuilderContent() {
  // Build compound sentences
  return [
    {
      clause1: "I like to read",
      conjunction: "and",
      clause2: "my sister likes to play",
      correct: "I like to read and my sister likes to play.",
    },
    {
      clause1: "The dog was tired",
      conjunction: "but",
      clause2: "he still wanted to play",
      correct: "The dog was tired but he still wanted to play.",
    },
    {
      clause1: "She studied hard",
      conjunction: "and",
      clause2: "she got a good grade",
      correct: "She studied hard and she got a good grade.",
    },
    {
      clause1: "I want to go outside",
      conjunction: "but",
      clause2: "it is raining",
      correct: "I want to go outside but it is raining.",
    },
  ];
}

export function generateK2GrammarMatchContent() {
  // Match prefixes with meanings
  return [
    { left: "un-", right: "not unhappy", hint: "means 'not'" },
    { left: "re-", right: "do again rebuild", hint: "means 'again'" },
    { left: "pre-", right: "before preheat", hint: "means 'before'" },
    { left: "mis-", right: "wrong misbehave", hint: "means 'wrong'" },
    { left: "dis-", right: "not disagree", hint: "means 'not'" },
  ];
}

// K3 (Grade 3) CONTENT GENERATORS

export function generateK3WordSortContent() {
  // Sort plural noun forms
  return [
    {
      question: "Singular nouns",
      words: ["cat", "dog", "baby", "bus", "box"],
      category: "Singular",
    },
    {
      question: "Plural nouns (add -s)",
      words: ["cats", "dogs", "apples", "books", "pens"],
      category: "Plural -s",
    },
    {
      question: "Plural nouns (add -es)",
      words: ["boxes", "buses", "glasses", "dishes", "wishes"],
      category: "Plural -es",
    },
    {
      question: "Irregular plurals",
      words: ["children", "men", "women", "geese", "sheep"],
      category: "Irregular",
    },
  ];
}

export function generateK3FillGapContent() {
  // Fill in correct verb tenses
  return [
    {
      sentence: "Yesterday, I ___ to the park.",
      options: ["go", "went", "going"],
      answer: "went",
      hint: "Past tense",
    },
    {
      sentence: "She ___ her homework right now.",
      options: ["does", "is doing", "did"],
      answer: "is doing",
      hint: "Present continuous",
    },
    {
      sentence: "Next week, we ___ to visit my grandmother.",
      options: ["go", "will go", "went"],
      answer: "will go",
      hint: "Future tense",
    },
    {
      sentence: "He ___ lived here for five years.",
      options: ["has", "is", "was"],
      answer: "has",
      hint: "Present perfect",
    },
  ];
}

export function generateK3CategoryRushContent() {
  // Sort adverbs vs conjunctions
  return [
    {
      words: ["quickly", "and", "slowly", "but", "happily"],
      correctCategory: "Adverbs",
      correctWords: ["quickly", "slowly", "happily"],
      wrongWord: "and",
    },
    {
      words: ["because", "carefully", "softly", "since", "loudly"],
      correctCategory: "Adverbs",
      correctWords: ["carefully", "softly", "loudly"],
      wrongWord: "because",
    },
  ];
}

export function generateK3SentenceBuilderContent() {
  // Build subject-predicate sentences
  return [
    {
      subject: "The quick brown fox",
      predicate: "jumps over the fence",
      correct: "The quick brown fox jumps over the fence.",
    },
    {
      subject: "All the children",
      predicate: "are playing games in the park",
      correct: "All the children are playing games in the park.",
    },
    {
      subject: "My best friend Sarah",
      predicate: "loves to read mystery books",
      correct: "My best friend Sarah loves to read mystery books.",
    },
  ];
}

export function generateK3SpellRaceContent() {
  // Spell Grade 3 vocabulary with prefixes/suffixes
  return [
    { word: "unhappy", hint: "not happy" },
    { word: "rebuild", hint: "build again" },
    { word: "careless", hint: "without care" },
    { word: "helpful", hint: "full of help" },
    { word: "disappear", hint: "not appear" },
    { word: "rewrite", hint: "write again" },
    { word: "hopeless", hint: "without hope" },
  ];
}

export function generateK3GrammarMatchContent() {
  // Match homophones
  return [
    { left: "to/two/too", right: "We ran to the store", hint: "Direction" },
    { left: "their/there", right: "Their house is over there", hint: "Possessive & location" },
    { left: "be/bee", right: "A bee is an insect", hint: "Insect" },
    { left: "see/sea", right: "I see the sea", hint: "Ocean" },
    { left: "here/hear", right: "Can you hear me here?", hint: "Listen" },
  ];
}

// K4 (Grade 4) CONTENT GENERATORS

export function generateK4GrammarMatchContent() {
  // Match relative pronouns with usage
  return [
    {
      left: "who",
      right: "The girl who lives next door",
      hint: "For people",
    },
    {
      left: "which",
      right: "The book which is on the table",
      hint: "For things",
    },
    {
      left: "where",
      right: "The park where we play",
      hint: "For places",
    },
    {
      left: "when",
      right: "The day when it snowed",
      hint: "For times",
    },
    {
      left: "that",
      right: "The house that is blue",
      hint: "General connector",
    },
  ];
}

export function generateK4FillGapContent() {
  // Fill in modal/progressive forms
  return [
    {
      sentence: "She ___ eat the cake.",
      options: ["can", "is", "were"],
      answer: "can",
      hint: "Modal verb - ability",
    },
    {
      sentence: "We ___ playing soccer right now.",
      options: ["are", "is", "were"],
      answer: "are",
      hint: "Present progressive",
    },
    {
      sentence: "He ___ have finished his homework.",
      options: ["could", "might", "must"],
      answer: "must",
      hint: "Modal - certainty",
    },
    {
      sentence: "They ___ been working for hours.",
      options: ["have", "has", "had"],
      answer: "have",
      hint: "Present perfect progressive",
    },
  ];
}

export function generateK4SentenceBuilderContent() {
  // Build sentences with prepositional phrases
  return [
    {
      start: "The dog",
      phrase: "in the garden",
      end: "is playing with a ball.",
      correct: "The dog in the garden is playing with a ball.",
    },
    {
      start: "The children",
      phrase: "at the school",
      end: "are studying math.",
      correct: "The children at the school are studying math.",
    },
    {
      start: "My book",
      phrase: "on the shelf",
      end: "is very interesting.",
      correct: "My book on the shelf is very interesting.",
    },
  ];
}

export function generateK4CategoryRushContent() {
  // Sort fragments vs complete sentences
  return [
    {
      words: ["The cat sat", "Sat on the mat", "The dog ran fast", "Quickly jumped"],
      correctCategory: "Complete Sentences",
      correctWords: ["The cat sat", "The dog ran fast"],
      wrongWord: "Quickly jumped",
    },
  ];
}

export function generateK4SpellRaceContent() {
  // Spell commonly confused words
  return [
    { word: "definitely", hint: "for certain" },
    { word: "definitely", hint: "common spelling mistake (not definately)" },
    { word: "separate", hint: "apart (not seperate)" },
    { word: "because", hint: "reason (not becuase)" },
    { word: "receive", hint: "get (i before e)" },
    { word: "necessary", hint: "needed (one collar)" },
    { word: "accommodate", hint: "to fit in (double m and c)" },
  ];
}

export function generateK4WordSortContent() {
  // Sort synonyms vs antonyms
  return [
    {
      question: "Synonyms for 'happy'",
      words: ["joyful", "cheerful", "sad", "pleased", "delighted"],
      category: "Synonyms",
      wrongWords: ["sad"],
    },
    {
      question: "Antonyms for 'big'",
      words: ["small", "tiny", "large", "huge", "little"],
      category: "Antonyms",
      correctWords: ["small", "tiny", "little"],
    },
    {
      question: "Synonyms for 'smart'",
      words: ["intelligent", "clever", "foolish", "bright", "wise"],
      category: "Synonyms",
      wrongWords: ["foolish"],
    },
  ];
}
