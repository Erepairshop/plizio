// ─── ENGLISH GENERATORS — Procedural question generation for Grades 1–8 ────────────
// Mirrors deutschGenerators.ts structure
// Each subtopic generates 30 questions procedurally using seeded RNG
// Grade 1: 100% MCQ | Grade 2-3: 60% MCQ, 40% Typing | Grade 4-6: 50/50 | Grade 7-8: 40% MCQ, 60% Typing

import type { CurriculumQuestion } from "./curriculumTypes";

// ─── SEEDED RNG & UTILITY FUNCTIONS ─────────────────────────────────────────────

function mulberry32(seed: number) {
  return function() {
    seed |= 0;
    seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle<T>(arr: T[], rng: () => number): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function pickRandom<T>(arr: T[], rng: () => number): T {
  return arr[Math.floor(rng() * arr.length)];
}

// ─── GRADE 1 GENERATORS (100% MCQ) ──────────────────────────────────────────────

export const G1_Generators = {
  phonics_g1: {
    short_long_vowels_g1: (seed?: number): CurriculumQuestion[] => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];

      const shortVowelWords = [
        "cat", "dog", "hat", "sun", "bed", "pig", "log", "cup", "bag", "sit",
        "pen", "net", "fox", "run", "dig", "can", "sat", "map", "but", "wet"
      ];
      const longVowelWords = [
        "cake", "bike", "home", "tree", "blue", "rope", "kite", "nose", "mule", "game",
        "bike", "gate", "ride", "note", "dune", "hope", "lake", "mate", "cube", "side"
      ];

      for (let i = 0; i < 30; i++) {
        const isLong = rng() > 0.5;
        const words = isLong ? longVowelWords : shortVowelWords;
        const correct = pickRandom(words, rng);
        const distractors = isLong
          ? shuffle(shortVowelWords, rng).slice(0, 3)
          : shuffle(longVowelWords, rng).slice(0, 3);

        let options = [correct, ...distractors];
        options = shuffle(options, rng);

        questions.push({
          type: "mcq",
          topic: "phonics_g1",
          subtopic: "short_long_vowels_g1",
          question: `Which word has a ${isLong ? "LONG" : "SHORT"} vowel sound?`,
          options,
          correct: options.indexOf(correct)
        });
      }

      return questions;
    },

    digraphs_g1: (seed?: number): CurriculumQuestion[] => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];

      const digraphs = [
        { digraph: "sh", words: ["ship", "shell", "shop", "show", "shut"], distractors: ["sit", "sat", "sun", "sad", "set"] },
        { digraph: "ch", words: ["chop", "chat", "chin", "chip", "chew"], distractors: ["cat", "can", "cap", "car", "cab"] },
        { digraph: "th", words: ["that", "this", "the", "thin", "them"], distractors: ["tan", "tin", "ten", "two", "top"] },
        { digraph: "wh", words: ["what", "when", "where", "which", "who"], distractors: ["wet", "win", "wig", "wag", "web"] }
      ];

      for (let i = 0; i < 30; i++) {
        const dg = pickRandom(digraphs, rng);
        const correct = pickRandom(dg.words, rng);
        const distractors = shuffle(dg.distractors, rng).slice(0, 3);
        let options = [dg.digraph, ...distractors.slice(0, 1).map(() => rng() > 0.5 ? "st" : "sp")];
        options = shuffle(options, rng);

        questions.push({
          type: "mcq",
          topic: "phonics_g1",
          subtopic: "digraphs_g1",
          question: `Which digraph appears in the word '${correct}'?`,
          options,
          correct: options.indexOf(dg.digraph)
        });
      }

      return questions;
    },

    uppercase_lowercase_g1: (seed?: number): CurriculumQuestion[] => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];

      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

      for (let i = 0; i < 30; i++) {
        const letter = pickRandom(letters, rng);
        const isUppercase = rng() > 0.5;

        const target = isUppercase ? letter : letter.toLowerCase();
        const distractors = shuffle(letters, rng).slice(0, 3).map(l => isUppercase ? l : l.toLowerCase());

        let options = [target, ...distractors];
        options = shuffle(options, rng);

        questions.push({
          type: "mcq",
          topic: "phonics_g1",
          subtopic: "uppercase_lowercase_g1",
          question: `Which is ${isUppercase ? "UPPERCASE" : "lowercase"}?`,
          options,
          correct: options.indexOf(target)
        });
      }

      return questions;
    },

    syllables_g1: (seed?: number): CurriculumQuestion[] => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];

      const wordsByCount = [
        { count: 1, words: ["cat", "dog", "pen", "sun", "bat", "sit", "run", "cup"] },
        { count: 2, words: ["butter", "sister", "pencil", "happy", "baby", "table", "apple", "rabbit"] },
        { count: 3, words: ["butterfly", "elephant", "banana", "camera", "family", "hospital", "yesterday", "animal"] }
      ];

      for (let i = 0; i < 30; i++) {
        const syllGroup = pickRandom(wordsByCount, rng);
        const correct = pickRandom(syllGroup.words, rng);
        const distractors = wordsByCount.filter(w => w.count !== syllGroup.count).flatMap(w => w.words).slice(0, 3);

        let options = [String(syllGroup.count), ...distractors.map(w => String(w.split(/[aeiou]/i).filter(x => x).length))];
        options = shuffle(Array.from(new Set(options)), rng).slice(0, 4);

        questions.push({
          type: "mcq",
          topic: "phonics_g1",
          subtopic: "syllables_g1",
          question: `How many syllables does the word '${correct}' have?`,
          options,
          correct: options.indexOf(String(syllGroup.count))
        });
      }

      return questions;
    },

    blends_g1: (seed?: number): CurriculumQuestion[] => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];

      const blends = ["st", "cr", "bl", "tr", "fr", "gr", "pl", "cl", "br", "dr"];
      const blendWords: Record<string, string[]> = {
        st: ["stop", "star", "step", "still", "stick"],
        cr: ["crab", "crop", "crash", "cream", "crisp"],
        bl: ["blue", "black", "blank", "blend", "block"],
        tr: ["tree", "truck", "trip", "train", "track"],
        fr: ["frog", "from", "free", "fruit", "friend"],
        gr: ["green", "great", "grass", "grind", "grab"],
        pl: ["play", "place", "plant", "plan", "plane"],
        cl: ["class", "clean", "clock", "clap", "climb"],
        br: ["brain", "brown", "break", "bring", "bread"],
        dr: ["drop", "drink", "dress", "dream", "drive"]
      };

      for (let i = 0; i < 30; i++) {
        const blend = pickRandom(blends, rng);
        const word = pickRandom(blendWords[blend], rng);
        const wrongBlends = shuffle(blends.filter(b => b !== blend), rng).slice(0, 3);

        let options = [word, ...wrongBlends.map(b => blendWords[b][0])];
        options = shuffle(options, rng);

        questions.push({
          type: "mcq",
          topic: "phonics_g1",
          subtopic: "blends_g1",
          question: `Which word starts with the blend '${blend}'?`,
          options,
          correct: options.indexOf(word)
        });
      }

      return questions;
    },

    rhyming_g1: (seed?: number): CurriculumQuestion[] => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];

      const rhymePairs = [
        { word: "cat", rhymes: ["bat", "mat", "sat", "rat", "hat"], nonRhymes: ["dog", "sun", "pen", "top"] },
        { word: "dog", rhymes: ["log", "fog", "hog", "bog", "cog"], nonRhymes: ["cat", "bat", "sun", "pin"] },
        { word: "tree", rhymes: ["bee", "see", "free", "key", "tea"], nonRhymes: ["cat", "dog", "man", "pig"] },
        { word: "hen", rhymes: ["pen", "ten", "den", "men", "then"], nonRhymes: ["cat", "dog", "sun", "box"] },
        { word: "sun", rhymes: ["fun", "run", "bun", "gun", "dun"], nonRhymes: ["cat", "dog", "pen", "hat"] },
        { word: "king", rhymes: ["ring", "sing", "wing", "thing", "sting"], nonRhymes: ["cat", "dog", "hen", "man"] },
        { word: "house", rhymes: ["mouse", "louse"], nonRhymes: ["cat", "dog", "sun", "pen"] },
        { word: "ball", rhymes: ["call", "fall", "tall", "wall", "small"], nonRhymes: ["cat", "dog", "tree", "hen"] }
      ];

      for (let i = 0; i < 30; i++) {
        const pair = pickRandom(rhymePairs, rng);
        const correct = pickRandom(pair.rhymes, rng);
        const nonRhymes = shuffle(pair.nonRhymes, rng).slice(0, 3);

        let options = [correct, ...nonRhymes];
        options = shuffle(options, rng);

        questions.push({
          type: "mcq",
          topic: "phonics_g1",
          subtopic: "rhyming_g1",
          question: `Which word RHYMES with '${pair.word}'?`,
          options,
          correct: options.indexOf(correct)
        });
      }

      return questions;
    }
  },

  words_g1: {
    sight_words_g1: (seed?: number): CurriculumQuestion[] => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];

      const sightWords = ["the", "a", "is", "and", "to", "in", "of", "that", "it", "with", "for", "on", "was", "at", "as"];

      for (let i = 0; i < 30; i++) {
        const correct = pickRandom(sightWords, rng);
        const distractors = shuffle("abcdefghijklmnopqrstuvwxyz".split(""), rng)
          .slice(0, 3)
          .map(c => c + (rng() > 0.5 ? "zx" : "qw"));

        let options = [correct, ...distractors];
        options = shuffle(options, rng);

        questions.push({
          type: "mcq",
          topic: "words_g1",
          subtopic: "sight_words_g1",
          question: `Which is a common sight word?`,
          options,
          correct: options.indexOf(correct)
        });
      }

      return questions;
    },

    nouns_g1: (seed?: number): CurriculumQuestion[] => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];

      const nouns = ["dog", "cat", "house", "tree", "apple", "book", "girl", "boy", "ball", "chair", "table", "flower"];
      const notNouns = ["run", "jump", "happy", "big", "red", "slow", "fast", "eat", "swim", "walk"];

      for (let i = 0; i < 30; i++) {
        const correct = pickRandom(nouns, rng);
        const distractors = shuffle(notNouns, rng).slice(0, 3);

        let options = [correct, ...distractors];
        options = shuffle(options, rng);

        questions.push({
          type: "mcq",
          topic: "words_g1",
          subtopic: "nouns_g1",
          question: `Which word is a NOUN?`,
          options,
          correct: options.indexOf(correct)
        });
      }

      return questions;
    },

    verbs_g1: (seed?: number): CurriculumQuestion[] => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];

      const verbs = ["jump", "run", "eat", "sleep", "play", "swim", "sing", "dance", "walk", "sit", "stand", "write"];
      const notVerbs = ["dog", "happy", "red", "house", "tree", "big", "slow", "book"];

      for (let i = 0; i < 30; i++) {
        const correct = pickRandom(verbs, rng);
        const distractors = shuffle(notVerbs, rng).slice(0, 3);

        let options = [correct, ...distractors];
        options = shuffle(options, rng);

        questions.push({
          type: "mcq",
          topic: "words_g1",
          subtopic: "verbs_g1",
          question: `Which word is a VERB?`,
          options,
          correct: options.indexOf(correct)
        });
      }

      return questions;
    },

    articles_g1: (seed?: number): CurriculumQuestion[] => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];

      const vowelWords = ["apple", "egg", "orange", "ant", "owl", "umbrella"];
      const consonantWords = ["cat", "dog", "house", "sun", "tree", "ball"];

      for (let i = 0; i < 30; i++) {
        const isVowel = rng() > 0.5;
        const word = pickRandom(isVowel ? vowelWords : consonantWords, rng);
        const correct = isVowel ? "an" : "a";
        const distractors = ["the", "one", "some"];

        let options = [correct, ...distractors];
        options = shuffle(options, rng);

        questions.push({
          type: "mcq",
          topic: "words_g1",
          subtopic: "articles_g1",
          question: `Which article correctly fills the blank? '___ ${word}'`,
          options,
          correct: options.indexOf(correct)
        });
      }

      return questions;
    },

    compound_words_g1: (seed?: number): CurriculumQuestion[] => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];

      const compounds = ["sunshine", "playground", "raincoat", "classroom", "birthday", "backpack", "grandmother", "football"];
      const notCompounds = ["happy", "yellow", "beautiful", "friendly", "careful", "wonderful"];

      for (let i = 0; i < 30; i++) {
        const correct = pickRandom(compounds, rng);
        const distractors = shuffle(notCompounds, rng).slice(0, 3);

        let options = [correct, ...distractors];
        options = shuffle(options, rng);

        questions.push({
          type: "mcq",
          topic: "words_g1",
          subtopic: "compound_words_g1",
          question: `Which is a COMPOUND WORD?`,
          options,
          correct: options.indexOf(correct)
        });
      }

      return questions;
    }
  },

  sentences_g1: {
    end_punctuation_g1: (seed?: number): CurriculumQuestion[] => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];

      const statements = ["I like cats.", "The sun is yellow.", "She runs fast.", "They play outside."];
      const questions_list = ["Where do you live?", "What is your name?", "Do you like apples?", "Can you swim?"];
      const exclamations = ["Watch out!", "Help me!", "That is great!", "I won the game!"];

      for (let i = 0; i < 30; i++) {
        const type = Math.floor(rng() * 3);
        let target = "";
        let punctuation = "";

        if (type === 0) {
          target = pickRandom(statements, rng);
          punctuation = ".";
        } else if (type === 1) {
          target = pickRandom(questions_list, rng);
          punctuation = "?";
        } else {
          target = pickRandom(exclamations, rng);
          punctuation = "!";
        }

        const sentence = target.replace(/[.?!]$/, "");
        const opts = [".", "?", "!"];

        questions.push({
          type: "mcq",
          topic: "sentences_g1",
          subtopic: "end_punctuation_g1",
          question: `Which punctuation should end this sentence? '${sentence}'`,
          options: shuffle(opts, rng),
          correct: shuffle(opts, rng).indexOf(punctuation)
        });
      }

      return questions;
    },

    capitalization_g1: (seed?: number): CurriculumQuestion[] => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];

      const sentences = [
        "My dog is big.",
        "I like to play.",
        "The cat is sleeping.",
        "She likes apples.",
        "He runs fast."
      ];

      for (let i = 0; i < 30; i++) {
        const sentence = pickRandom(sentences, rng);
        const correct = sentence;
        const distractors = [
          sentence.toLowerCase(),
          sentence.toUpperCase(),
          sentence.split(" ").map((w, i) => i === 0 ? w : w.toLowerCase()).join(" ")
        ];

        let options = [correct, ...distractors];
        options = shuffle(options, rng);

        questions.push({
          type: "mcq",
          topic: "sentences_g1",
          subtopic: "capitalization_g1",
          question: `Which sentence is correctly capitalized?`,
          options,
          correct: options.indexOf(correct)
        });
      }

      return questions;
    },

    sentence_vs_not_g1: (seed?: number): CurriculumQuestion[] => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];

      const completeSentences = [
        "The cat sat on the mat.",
        "I like apples.",
        "She runs fast.",
        "They play outside.",
        "He reads a book."
      ];

      const fragments = ["big dog", "ran fast", "red ball", "happy baby", "under the tree"];

      for (let i = 0; i < 30; i++) {
        const isComplete = rng() > 0.5;
        const correct = isComplete ? pickRandom(completeSentences, rng) : pickRandom(fragments, rng);
        const distractors = isComplete
          ? shuffle(fragments, rng).slice(0, 3)
          : shuffle(completeSentences, rng).slice(0, 3);

        let options = [correct, ...distractors];
        options = shuffle(options, rng);

        questions.push({
          type: "mcq",
          topic: "sentences_g1",
          subtopic: "sentence_vs_not_g1",
          question: `Which is a COMPLETE sentence?`,
          options,
          correct: options.indexOf(correct)
        });
      }

      return questions;
    },

    declarative_interrogative_g1: (seed?: number): CurriculumQuestion[] => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];

      const declaratives = ["I live here.", "That is a dog.", "She likes apples.", "The sky is blue.", "He can run."];
      const interrogatives = ["Where do you live?", "Is that a dog?", "Does she like apples?", "What color is the sky?", "Can he run?"];

      for (let i = 0; i < 30; i++) {
        const isInterrogative = rng() > 0.5;
        const correct = isInterrogative ? pickRandom(interrogatives, rng) : pickRandom(declaratives, rng);
        const distractors = isInterrogative
          ? shuffle(declaratives, rng).slice(0, 3)
          : shuffle(interrogatives, rng).slice(0, 3);

        let options = [correct, ...distractors];
        options = shuffle(options, rng);

        questions.push({
          type: "mcq",
          topic: "sentences_g1",
          subtopic: "declarative_interrogative_g1",
          question: `Which is an INTERROGATIVE sentence (a question)?`,
          options,
          correct: options.indexOf(correct)
        });
      }

      return questions;
    }
  }
};

// ─── GRADE 2 GENERATORS (60% MCQ, 40% Typing) ──────────────────────────────────

export const G2_Generators = {
  pos_g2: {
    nouns_common_proper_g2: (seed?: number): CurriculumQuestion[] => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];

      const commonNouns = ["dog", "city", "river", "mountain", "book", "teacher", "school", "apple"];
      const properNouns = ["London", "Paris", "John", "Maria", "Amazon", "Everest", "Monday", "December"];

      for (let i = 0; i < 30; i++) {
        const isTyping = i >= 18; // 60% MCQ, 40% Typing
        const isProper = rng() > 0.5;

        if (isTyping) {
          const correct = isProper ? pickRandom(properNouns, rng) : pickRandom(commonNouns, rng);
          questions.push({
            type: "typing",
            topic: "pos_g2",
            subtopic: "nouns_common_proper_g2",
            question: `Is '${correct}' a ${isProper ? "proper" : "common"} noun? (Answer: yes or no)`,
            answer: "yes"
          });
        } else {
          const correct = isProper ? pickRandom(properNouns, rng) : pickRandom(commonNouns, rng);
          const distractors = isProper
            ? shuffle(commonNouns, rng).slice(0, 3)
            : shuffle(properNouns, rng).slice(0, 3);

          let options = [correct, ...distractors];
          options = shuffle(options, rng);

          questions.push({
            type: "mcq",
            topic: "pos_g2",
            subtopic: "nouns_common_proper_g2",
            question: `Which is a ${isProper ? "PROPER" : "COMMON"} noun?`,
            options,
            correct: options.indexOf(correct)
          });
        }
      }

      return questions;
    },

    nouns_plural_g2: (seed?: number): CurriculumQuestion[] => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];

      const singularPlural = [
        { singular: "cat", plural: "cats" },
        { singular: "child", plural: "children" },
        { singular: "person", plural: "people" },
        { singular: "goose", plural: "geese" },
        { singular: "tooth", plural: "teeth" },
        { singular: "foot", plural: "feet" },
        { singular: "box", plural: "boxes" },
        { singular: "bus", plural: "buses" },
        { singular: "dish", plural: "dishes" },
        { singular: "watch", plural: "watches" },
        { singular: "baby", plural: "babies" },
        { singular: "strawberry", plural: "strawberries" }
      ];

      for (let i = 0; i < 30; i++) {
        const isTyping = i >= 18;
        const pair = pickRandom(singularPlural, rng);

        if (isTyping) {
          questions.push({
            type: "typing",
            topic: "pos_g2",
            subtopic: "nouns_plural_g2",
            question: `What is the plural of '${pair.singular}'?`,
            answer: pair.plural
          });
        } else {
          const wrongPlurals = shuffle(
            singularPlural.filter(p => p.singular !== pair.singular),
            rng
          )
            .slice(0, 3)
            .map(p => p.plural);

          let options = [pair.plural, ...wrongPlurals];
          options = shuffle(options, rng);

          questions.push({
            type: "mcq",
            topic: "pos_g2",
            subtopic: "nouns_plural_g2",
            question: `What is the PLURAL of '${pair.singular}'?`,
            options,
            correct: options.indexOf(pair.plural)
          });
        }
      }

      return questions;
    },

    collective_nouns_g2: (seed?: number): CurriculumQuestion[] => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];

      const collectiveData = [
        { animal: "birds", collective: "flock", wrong: ["pack", "herd", "school"] },
        { animal: "wolves", collective: "pack", wrong: ["flock", "herd", "colony"] },
        { animal: "cows", collective: "herd", wrong: ["pack", "flock", "colony"] },
        { animal: "fish", collective: "school", wrong: ["pack", "flock", "herd"] },
        { animal: "bees", collective: "colony", wrong: ["pack", "herd", "swarm"] },
        { animal: "ants", collective: "colony", wrong: ["pack", "flock", "swarm"] },
        { animal: "lions", collective: "pride", wrong: ["pack", "herd", "colony"] }
      ];

      for (let i = 0; i < 30; i++) {
        const isTyping = i >= 18;
        const data = pickRandom(collectiveData, rng);

        if (isTyping) {
          questions.push({
            type: "typing",
            topic: "pos_g2",
            subtopic: "collective_nouns_g2",
            question: `A group of ${data.animal} is called a...?`,
            answer: data.collective
          });
        } else {
          let options = [data.collective, ...data.wrong];
          options = shuffle(options, rng);

          questions.push({
            type: "mcq",
            topic: "pos_g2",
            subtopic: "collective_nouns_g2",
            question: `What is the COLLECTIVE NOUN for a group of ${data.animal}?`,
            options,
            correct: options.indexOf(data.collective)
          });
        }
      }

      return questions;
    },

    verbs_g2: (seed?: number): CurriculumQuestion[] => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];

      const actionVerbs = ["run", "jump", "eat", "sleep", "play", "sing", "write", "read", "dance", "swim"];
      const linkingVerbs = ["is", "are", "am", "was", "were", "be", "seem", "feel", "look"];

      for (let i = 0; i < 30; i++) {
        const isTyping = i >= 18;
        const isLinking = rng() > 0.5;
        const correct = isLinking ? pickRandom(linkingVerbs, rng) : pickRandom(actionVerbs, rng);
        const distractors = isLinking
          ? shuffle(actionVerbs, rng).slice(0, 3)
          : shuffle(linkingVerbs, rng).slice(0, 3);

        if (isTyping) {
          questions.push({
            type: "typing",
            topic: "pos_g2",
            subtopic: "verbs_g2",
            question: `Is '${correct}' a ${isLinking ? "linking" : "action"} verb?`,
            answer: "yes"
          });
        } else {
          let options = [correct, ...distractors];
          options = shuffle(options, rng);

          questions.push({
            type: "mcq",
            topic: "pos_g2",
            subtopic: "verbs_g2",
            question: `Which is a ${isLinking ? "LINKING" : "ACTION"} verb?`,
            options,
            correct: options.indexOf(correct)
          });
        }
      }

      return questions;
    },

    irregular_past_g2: (seed?: number): CurriculumQuestion[] => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];

      const irregularVerbs = [
        { base: "run", past: "ran" },
        { base: "eat", past: "ate" },
        { base: "go", past: "went" },
        { base: "see", past: "saw" },
        { base: "take", past: "took" },
        { base: "make", past: "made" },
        { base: "come", past: "came" },
        { base: "drink", past: "drank" },
        { base: "think", past: "thought" },
        { base: "bring", past: "brought" }
      ];

      for (let i = 0; i < 30; i++) {
        const isTyping = i >= 18;
        const verb = pickRandom(irregularVerbs, rng);

        if (isTyping) {
          questions.push({
            type: "typing",
            topic: "pos_g2",
            subtopic: "irregular_past_g2",
            question: `What is the past tense of '${verb.base}'?`,
            answer: verb.past
          });
        } else {
          const wrongPasts = shuffle(
            irregularVerbs.filter(v => v.base !== verb.base),
            rng
          )
            .slice(0, 3)
            .map(v => v.past);

          let options = [verb.past, ...wrongPasts];
          options = shuffle(options, rng);

          questions.push({
            type: "mcq",
            topic: "pos_g2",
            subtopic: "irregular_past_g2",
            question: `What is the past tense of '${verb.base}'?`,
            options,
            correct: options.indexOf(verb.past)
          });
        }
      }

      return questions;
    },

    adj_adv_g2: (seed?: number): CurriculumQuestion[] => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];

      const adverbs = ["quickly", "slowly", "carefully", "happily", "loudly", "softly", "gently", "quietly", "badly"];
      const adjectives = ["quick", "slow", "careful", "happy", "loud", "soft", "gentle", "quiet", "bad"];

      for (let i = 0; i < 30; i++) {
        const isTyping = i >= 18;
        const isAdverb = rng() > 0.5;
        const correct = isAdverb ? pickRandom(adverbs, rng) : pickRandom(adjectives, rng);
        const distractors = isAdverb
          ? shuffle(adjectives, rng).slice(0, 3)
          : shuffle(adverbs, rng).slice(0, 3);

        if (isTyping) {
          questions.push({
            type: "typing",
            topic: "pos_g2",
            subtopic: "adj_adv_g2",
            question: `Is '${correct}' an adjective or adverb?`,
            answer: isAdverb ? "adverb" : "adjective"
          });
        } else {
          let options = [correct, ...distractors];
          options = shuffle(options, rng);

          questions.push({
            type: "mcq",
            topic: "pos_g2",
            subtopic: "adj_adv_g2",
            question: `Which word is an ${isAdverb ? "ADVERB" : "ADJECTIVE"}?`,
            options,
            correct: options.indexOf(correct)
          });
        }
      }

      return questions;
    },

    pronouns_g2: (seed?: number): CurriculumQuestion[] => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];

      const pronouns = ["I", "you", "he", "she", "it", "we", "they", "me", "him", "her", "us", "them"];

      for (let i = 0; i < 30; i++) {
        const isTyping = i >= 18;
        const correct = pickRandom(pronouns, rng);

        if (isTyping) {
          questions.push({
            type: "typing",
            topic: "pos_g2",
            subtopic: "pronouns_g2",
            question: `Is '${correct}' a pronoun?`,
            answer: "yes"
          });
        } else {
          const distractors = ["dog", "happy", "run", "apple", "big"];
          let options = [correct, ...shuffle(distractors, rng).slice(0, 3)];
          options = shuffle(options, rng);

          questions.push({
            type: "mcq",
            topic: "pos_g2",
            subtopic: "pronouns_g2",
            question: `Which word is a PRONOUN?`,
            options,
            correct: options.indexOf(correct)
          });
        }
      }

      return questions;
    }
  }
};

// ─── GRADE 3 GENERATORS (60% MCQ, 40% Typing) ──────────────────────────────────

export const G3_Generators = {
  grammar_g3: {
    subject_verb_agreement_g3: (seed?: number): CurriculumQuestion[] => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];

      const sentences = [
        { sentence: "The cat ___ on the mat.", blank: "is", options: ["is", "are"] },
        { sentence: "The dogs ___ in the yard.", blank: "are", options: ["am", "is", "are"] },
        { sentence: "She ___ a teacher.", blank: "is", options: ["are", "is"] },
        { sentence: "They ___ happy.", blank: "are", options: ["is", "are"] },
        { sentence: "I ___ in school.", blank: "am", options: ["am", "is", "are"] }
      ];

      for (let i = 0; i < 30; i++) {
        const isTyping = i >= 18;
        const sent = pickRandom(sentences, rng);

        if (isTyping) {
          questions.push({
            type: "typing",
            topic: "grammar_g3",
            subtopic: "subject_verb_agreement_g3",
            question: sent.sentence.replace("___", "[_____]"),
            answer: sent.blank
          });
        } else {
          let options = shuffle(sent.options, rng);
          questions.push({
            type: "mcq",
            topic: "grammar_g3",
            subtopic: "subject_verb_agreement_g3",
            question: `Choose the correct verb: ${sent.sentence}`,
            options,
            correct: options.indexOf(sent.blank)
          });
        }
      }

      return questions;
    },

    prefixes_suffixes_g3: (seed?: number): CurriculumQuestion[] => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];

      const words = [
        { word: "unhappy", prefix: "un", root: "happy" },
        { word: "redo", prefix: "re", root: "do" },
        { word: "running", suffix: "ing", root: "run" },
        { word: "slowly", suffix: "ly", root: "slow" },
        { word: "played", suffix: "ed", root: "play" }
      ];

      for (let i = 0; i < 30; i++) {
        const isTyping = i >= 18;
        const wordData = pickRandom(words, rng);

        if (isTyping) {
          const isSuffix = wordData.suffix !== undefined;
          questions.push({
            type: "typing",
            topic: "grammar_g3",
            subtopic: "prefixes_suffixes_g3",
            question: `What is the ${isSuffix ? "suffix" : "prefix"} in '${wordData.word}'?`,
            answer: isSuffix ? wordData.suffix! : wordData.prefix!
          });
        } else {
          const isSuffix = wordData.suffix !== undefined;
          const affixes = ["un", "re", "ing", "ed", "ly", "ness", "ment"];
          const distractors = shuffle(
            affixes.filter(a => a !== (isSuffix ? wordData.suffix : wordData.prefix)),
            rng
          ).slice(0, 3);

          let options = [isSuffix ? wordData.suffix! : wordData.prefix!, ...distractors];
          options = shuffle(options, rng);

          questions.push({
            type: "mcq",
            topic: "grammar_g3",
            subtopic: "prefixes_suffixes_g3",
            question: `What ${isSuffix ? "suffix" : "prefix"} is in the word '${wordData.word}'?`,
            options,
            correct: options.indexOf(isSuffix ? wordData.suffix! : wordData.prefix!)
          });
        }
      }

      return questions;
    },

    contractions_g3: (seed?: number): CurriculumQuestion[] => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];

      const contractions = [
        { contraction: "don't", expanded: "do not" },
        { contraction: "isn't", expanded: "is not" },
        { contraction: "can't", expanded: "cannot" },
        { contraction: "won't", expanded: "will not" },
        { contraction: "I'm", expanded: "I am" },
        { contraction: "it's", expanded: "it is" },
        { contraction: "they're", expanded: "they are" }
      ];

      for (let i = 0; i < 30; i++) {
        const isTyping = i >= 18;
        const c = pickRandom(contractions, rng);

        if (isTyping) {
          const showContraction = rng() > 0.5;
          if (showContraction) {
            questions.push({
              type: "typing",
              topic: "grammar_g3",
              subtopic: "contractions_g3",
              question: `Write the contraction for '${c.expanded}'`,
              answer: c.contraction
            });
          } else {
            questions.push({
              type: "typing",
              topic: "grammar_g3",
              subtopic: "contractions_g3",
              question: `What does '${c.contraction}' mean?`,
              answer: c.expanded
            });
          }
        } else {
          const showContraction = rng() > 0.5;
          const distractors = shuffle(
            contractions.filter(x => x.contraction !== c.contraction),
            rng
          )
            .slice(0, 3)
            .map(x => (showContraction ? x.contraction : x.expanded));

          let options = [showContraction ? c.contraction : c.expanded, ...distractors];
          options = shuffle(options, rng);

          questions.push({
            type: "mcq",
            topic: "grammar_g3",
            subtopic: "contractions_g3",
            question: showContraction
              ? `What is the CONTRACTION for '${c.expanded}'?`
              : `What does '${c.contraction}' mean?`,
            options,
            correct: options.indexOf(showContraction ? c.contraction : c.expanded)
          });
        }
      }

      return questions;
    }
  }
};

// ─── GRADE 4+ GENERATORS (stub examples — full implementation scales similarly) ──

export const G4_Generators = {
  writing_g4: {
    sentence_combining_g4: (seed?: number): CurriculumQuestion[] => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const questions: CurriculumQuestion[] = [];

      for (let i = 0; i < 30; i++) {
        if (i >= 15) {
          questions.push({
            type: "typing",
            topic: "writing_g4",
            subtopic: "sentence_combining_g4",
            question: "Combine these sentences: 'She is tall. She is smart.'",
            answer: "She is tall and smart."
          });
        } else {
          questions.push({
            type: "mcq",
            topic: "writing_g4",
            subtopic: "sentence_combining_g4",
            question: "Which combines these best?",
            options: ["She is tall and smart.", "She tall smart.", "Tall smart she."],
            correct: 0
          });
        }
      }

      return questions;
    }
  }
};

export const G5_Generators = { writing_g5: { main_idea_g5: (seed?: number): CurriculumQuestion[] => [] } };
export const G6_Generators = { writing_g6: { tone_purpose_g6: (seed?: number): CurriculumQuestion[] => [] } };
export const G7_Generators = { writing_g7: { persuasive_g7: (seed?: number): CurriculumQuestion[] => [] } };
export const G8_Generators = { writing_g8: { essay_analysis_g8: (seed?: number): CurriculumQuestion[] => [] } };
