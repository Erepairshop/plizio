// lib/explorerPools/englishK7.ts

import type { PoolTopicDef } from "./types";

// ═══════════════════════════════════════════════════════════════════════════
// i1 — REPORTED_SPEECH_SANCTUARY
// ═══════════════════════════════════════════════════════════════════════════

export const REPORTED_SPEECH_SANCTUARY_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Reported Sanctuary",
    t1_title: "Advanced Tense Shifts",
    t1_text: "In reported speech, past simple often shifts to past perfect. Example: 'I went' -> 'He said he had gone.'",
    t1_inst: "Order the words for a reported tense shift:",
    t1_h1: "Start with 'She said'.",
    t1_h2: "Use 'had seen' for the past shift.",
    t1_q: "Reported of 'I saw the movie'?",
    t1_qa: "She said she had seen the movie.",
    t1_qb: "She said she seen the movie.",
    t1_qc: "She said she saw the movie.",
    t1_qd: "She says she had seen.",
    t1_w1: "She", t1_w2: "said", t1_w3: "that", t1_w4: "she", t1_w5: "had", t1_w6: "seen", t1_w7: "it", t1_w8: "before.",

    t2_title: "Reported Questions: WH-",
    t2_text: "Keep the WH- word but use statement word order. Example: 'Where are you?' -> 'He asked where I was.'",
    t2_inst: "Match direct to reported WH- question:",
    t2_h1: "The question mark disappears.",
    t2_h2: "Subject comes before the verb.",
    t2_q: "Reported of 'What is your name?'?",
    t2_qa: "He asked what my name was.",
    t2_qb: "He asked what was my name.",
    t2_qc: "He asked if my name is.",
    t2_qd: "He says what name.",
    t2_l1: "Where do you live?", t2_r1: "He asked where I lived",
    t2_l2: "How are you?", t2_r2: "He asked how I was",
    t2_l3: "Who is that?", t2_r3: "He asked who that was",

    t3_title: "Reporting Verbs: Suggest",
    t3_text: "Use 'suggested that' or 'suggested -ing'. Example: 'He suggested going to the park.'",
    t3_inst: "Choose for a suggestion:",
    t3_h1: "Use 'suggested' + '-ing'.",
    t3_h2: "It is a polite way to report an idea.",
    t3_q: "Which is correct?",
    t3_qa: "He suggested eating out.",
    t3_qb: "He suggested to eat out.",
    t3_qc: "He suggested me eat out.",
    t3_qd: "He suggests to eat.",
    t3_sent: "The manager ___ taking a short break.",
    t3_qa2: "suggested", t3_qb2: "said", t3_qc2: "told", t3_qd2: "ordered",

    t4_title: "Reported Commands",
    t4_text: "Use 'told someone to do something'. Example: 'He told me to sit down.'",
    t4_inst: "Highlight the reporting verb and infinitive:",
    t4_h1: "Look for 'told' and 'to wait'.",
    t4_h2: "It shows a direct order.",
    t4_q: "Reported of 'Wait here!'?",
    t4_qa: "He told me to wait there.",
    t4_qb: "He said me wait there.",
    t4_qc: "He told to wait here.",
    t4_qd: "He says wait.",
    t4_tk1: "The", t4_tk2: "officer", t4_tk3: "told", t4_tk4: "the", t4_tk5: "driver", t4_tk6: "to", t4_tk7: "stop", t4_tk8: "the", t4_tk9: "car.",

    t5_title: "Reported Speech Build",
    t5_text: "Build a complex reported statement.",
    t5_inst: "Build a 'that' statement:",
    t5_h1: "Start with 'They claimed'.",
    t5_h2: "Use 'they had finished'.",
    t5_q: "Correct shift for 'We have finished'?",
    t5_qa: "They said they had finished.",
    t5_qb: "They said they have finished.",
    t5_qc: "They said they finished.",
    t5_qd: "They says they had finish.",
    t5_f1: "They claimed", t5_f2: "that they", t5_f3: "had already", t5_f4: "finished the task.",

    t6_title: "Verb Sorter",
    t6_text: "Group by Statement vs Question reporting verbs.",
    t6_inst: "Sort by reporting type:",
    t6_h1: "Does the verb ask or tell?",
    t6_h2: "Asked/Inquired are for questions.",
    t6_q: "Which is for questions?",
    t6_qa: "inquired", t6_qb: "stated", t6_qc: "claimed", t6_qd: "remarked",
    t6_bl1: "Statements", t6_bl2: "Questions",
    t6_i1: "Explained", t6_i2: "Asked",
    t6_i3: "Pointed out", t6_i4: "Wondered",

    t7_title: "Time and Place Shifts",
    t7_text: "'Here' -> 'there', 'now' -> 'then', 'ago' -> 'before'.",
    t7_inst: "Order for a place shift:",
    t7_h1: "Start with 'She said'.",
    t7_h2: "Use 'there' instead of 'here'.",
    t7_q: "What does 'now' become?",
    t7_qa: "then", t7_qb: "now", t7_qc: "there", t7_qd: "before",
    t7_w1: "She", t7_w2: "said", t7_w3: "that", t7_w4: "she", t7_w5: "was", t7_w6: "happy", t7_w7: "there.",

    t8_title: "Reporting Requests",
    t8_text: "Use 'asked someone to do something'. Polite version of commands.",
    t8_inst: "Match direct to reported request:",
    t8_h1: "Please -> Asked + to.",
    t8_h2: "Word order is 'ask' + object + 'to'.",
    t8_q: "Reported of 'Please help me'?",
    t8_qa: "He asked me to help him.",
    t8_qb: "He told me help him.",
    t8_qc: "He said me to help.",
    t8_qd: "He asked helping.",
    t8_l1: "\"Please sit down\"", t8_r1: "She asked us to sit",
    t8_l2: "\"Could you wait?\"", t8_r2: "She asked me to wait",
    t8_l3: "\"Help me, please\"", t8_r3: "She asked for help",

    t9_title: "Mixed Tense Review",
    t9_text: "Reviewing all tense shifts from direct to reported.",
    t9_inst: "Choose the correct shifted verb:",
    t9_h1: "Present perfect shifts to past perfect.",
    t9_h2: "Look for 'had'.",
    t9_q: "Reported of 'I have eaten'?",
    t9_qa: "He said he had eaten.",
    t9_qb: "He said he has eaten.",
    t9_qc: "He said he ate.",
    t9_qd: "He says he eaten.",
    t9_sent: "They told us they ___ already seen that film.",
    t9_qa2: "had", t9_qb2: "have", t9_qc2: "were", t9_qd2: "has",

    t10_title: "Pronoun Shift Highlight",
    t10_text: "Identifying how pronouns change based on the speaker.",
    t10_inst: "Highlight the changed pronoun:",
    t10_h1: "Look for 'they' instead of 'we'.",
    t10_h2: "It refers to the original speakers.",
    t10_q: "Direct: 'We are late.' Reported: 'They said ___ were late.'",
    t10_qa: "they", t10_qb: "we", t10_qc: "us", t10_qd: "them",
    t10_tk1: "The", t10_tk2: "boys", t10_tk3: "said", t10_tk4: "that", t10_tk5: "they", t10_tk6: "wanted", t10_tk7: "to", t10_tk8: "play", t10_tk9: "soccer.",

    t11_title: "No Tense Shift",
    t11_text: "No shift if the reporting verb is in present or the fact is always true.",
    t11_inst: "Build a 'says' statement:",
    t11_h1: "Start with 'He says'.",
    t11_h2: "Do not change the verb 'is'.",
    t11_q: "Correct for 'He says: I am tired'?",
    t11_qa: "He says he is tired.",
    t11_qb: "He says he was tired.",
    t11_qc: "He says I am tired.",
    t11_qd: "He said he is tired.",
    t11_f1: "He says", t11_f2: "that the", t11_f3: "Earth is", t11_f4: "round.",

    t12_title: "Reporting Verb Sorter 2",
    t12_text: "Sort by strength of the verb: Weak vs Strong.",
    t12_inst: "Sort by Verb Intensity:",
    t12_h1: "Demanded is stronger than suggested.",
    t12_h2: "Think about the tone.",
    t12_q: "Which is strongest?",
    t12_qa: "insisted", t12_qb: "said", t12_qc: "mentioned", t12_qd: "remarked",
    t12_bl1: "Neutral", t12_bl2: "Strong",
    t12_i1: "Said", t12_i2: "Demanded",
    t12_i3: "Stated", t12_i4: "Insisted",

    t13_title: "Reported Modals",
    t13_text: "Can -> could, will -> would, may -> might.",
    t13_inst: "Choose for a reported modal:",
    t13_h1: "Shift 'will' to 'would'.",
    t13_h2: "It shows a future plan from the past.",
    t13_q: "Reported of 'I can go'?",
    t13_qa: "He said he could go.",
    t13_qb: "He said he can go.",
    t13_qc: "He said he will go.",
    t13_qd: "He says could go.",
    t13_sent: "She promised she ___ help me later.",
    t13_qa2: "would", t13_qb2: "will", t13_qc2: "can", t13_qd2: "should",

    t14_title: "Yes/No Question Match",
    t14_text: "Use 'if' or 'whether' for yes/no questions.",
    t14_inst: "Match direct to reported IF-question:",
    t14_h1: "Add 'if' to start the reported part.",
    t14_h2: "Use statement word order.",
    t14_q: "Reported of 'Do you like it?'?",
    t14_qa: "She asked if I liked it.",
    t14_qb: "She asked did I like it.",
    t14_qc: "She asked if I like it.",
    t14_qd: "She asks if like.",
    t14_l1: "\"Are you ready?\"", t14_r1: "He asked if I was ready",
    t14_l2: "\"Do you have it?\"", t14_r2: "He asked if I had it",
    t14_l3: "\"Can you see?\"", t14_r3: "He asked if I could see",

    t15_title: "Reported Sanctuary Review",
    t15_text: "Final review of Grade 7 reported speech.",
    t15_inst: "Pick the best reported form:",
    t15_h1: "Check tense, time, and pronouns.",
    t15_h2: "Last question!",
    t15_q: "Reported of 'I'll see you here tomorrow'?",
    t15_qa: "He said he'd see me there the next day.",
    t15_qb: "He said I will see you here tomorrow.",
    t15_qc: "He said he sees me there then.",
    t15_qd: "He said he would saw me there.",
    t15_sent: "They ___ that they had never been there.",
    t15_qa2: "claimed", t15_qb2: "asked", t15_qc2: "wondered", t15_qd2: "ordered",
  },
};

export const REPORTED_SPEECH_SANCTUARY_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "said", color: "#3B82F6" },
    interactive: { type: "word-order", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", words: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5", "t1_w6", "t1_w7", "t1_w8"], correctOrder: [0,1,2,3,4,5,6,7] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "where", color: "#3B82F6" },
    interactive: { type: "match-pairs", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }] },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "suggest", color: "#3B82F6" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "t3_sent", choices: ["t3_qa2", "t3_qb2", "t3_qc2", "t3_qd2"], correctIndex: 0 },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "command", color: "#3B82F6" },
    interactive: { type: "highlight-text", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", tokens: ["t4_tk1", "t4_tk2", "t4_tk3", "t4_tk4", "t4_tk5", "t4_tk6", "t4_tk7", "t4_tk8", "t4_tk9"], correctIndices: [2, 5, 6] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "build", color: "#3B82F6" },
    interactive: { type: "sentence-build", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", fragments: ["t5_f1", "t5_f2", "t5_f3", "t5_f4"] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "type", color: "#3B82F6" },
    interactive: { type: "drag-to-bucket", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", buckets: [{ id: "b1", label: "t6_bl1" }, { id: "b2", label: "t6_bl2" }], items: [{ text: "t6_i1", bucketId: "b1" }, { text: "t6_i2", bucketId: "b2" }, { text: "t6_i3", bucketId: "b1" }, { text: "t6_i4", bucketId: "b2" }] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "there", color: "#3B82F6" },
    interactive: { type: "word-order", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", words: ["t7_w1", "t7_w2", "t7_w3", "t7_w4", "t7_w5", "t7_w6", "t7_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "match", color: "#3B82F6" },
    interactive: { type: "match-pairs", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", pairs: [{ left: "t8_l1", right: "t8_r1" }, { left: "t8_l2", right: "t8_r2" }, { left: "t8_l3", right: "t8_r3" }] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "word-display", word: "had", color: "#3B82F6" },
    interactive: { type: "gap-fill", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", sentence: "t9_sent", choices: ["t9_qa2", "t9_qb2", "t9_qc2", "t9_qd2"], correctIndex: 0 },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "word-display", word: "pronoun", color: "#3B82F6" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1", "t10_tk2", "t10_tk3", "t10_tk4", "t10_tk5", "t10_tk6", "t10_tk7", "t10_tk8", "t10_tk9"], correctIndices: [4] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "word-display", word: "no shift", color: "#3B82F6" },
    interactive: { type: "sentence-build", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", fragments: ["t11_f1", "t11_f2", "t11_f3", "t11_f4"] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "word-display", word: "strength", color: "#3B82F6" },
    interactive: { type: "drag-to-bucket", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", buckets: [{ id: "b1", label: "t12_bl1" }, { id: "b2", label: "t12_bl2" }], items: [{ text: "t12_i1", bucketId: "b1" }, { text: "t12_i2", bucketId: "b2" }, { text: "t12_i3", bucketId: "b1" }, { text: "t12_i4", bucketId: "b2" }] },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "word-display", word: "modal", color: "#3B82F6" },
    interactive: { type: "gap-fill", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", sentence: "t13_sent", choices: ["t13_qa2", "t13_qb2", "t13_qc2", "t13_qd2"], correctIndex: 0 },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "word-display", word: "if", color: "#3B82F6" },
    interactive: { type: "match-pairs", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", pairs: [{ left: "t14_l1", right: "t14_r1" }, { left: "t14_l2", right: "t14_r2" }, { left: "t14_l3", right: "t14_r3" }] },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "word-display", word: "review", color: "#3B82F6" },
    interactive: { type: "gap-fill", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", sentence: "t15_sent", choices: ["t15_qa2", "t15_qb2", "t15_qc2", "t15_qd2"], correctIndex: 0 },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" },
    difficulty: "hard"
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// i2 — CONDITIONAL_CASTLE
// ═══════════════════════════════════════════════════════════════════════════

export const CONDITIONAL_CASTLE_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Conditional Castle",
    t1_title: "Zero Conditional",
    t1_text: "Facts: If + present, present. Example: 'If you heat water, it boils.'",
    t1_inst: "Order the words for a factual condition:",
    t1_h1: "Start with 'If'.",
    t1_h2: "Use present simple in both parts.",
    t1_q: "Which is Zero Conditional?",
    t1_qa: "If it rains, the grass gets wet.",
    t1_qb: "If it rains, it will get wet.",
    t1_qc: "If it rained, it got wet.",
    t1_qd: "If it rains, it would get wet.",
    t1_w1: "If", t1_w2: "you", t1_w3: "freeze", t1_w4: "water,", t1_w5: "it", t1_w6: "turns", t1_w7: "to", t1_w8: "ice.",

    t2_title: "First Conditional",
    t2_text: "Future possibility: If + present, will + verb. Example: 'If I win, I will celebrate.'",
    t2_inst: "Match the condition to the future result:",
    t2_h1: "Present condition, future consequence.",
    t2_h2: "Use 'will' for the result.",
    t2_q: "Which is 1st Conditional?",
    t2_qa: "If she studies, she will pass.",
    t2_qb: "If she studied, she would pass.",
    t2_qc: "If she studies, she passes.",
    t2_qd: "If she will study, she will pass.",
    t2_l1: "If it is sunny", t2_r1: "we will go out",
    t2_l2: "If I find it", t2_r2: "I will tell you",
    t2_l3: "If they hurry", t2_r3: "they will catch it",

    t3_title: "Second Conditional",
    t3_text: "Imaginary: If + past, would + verb. Example: 'If I were rich, I would buy a boat.'",
    t3_inst: "Choose for an imaginary dream:",
    t3_h1: "It is unlikely or impossible.",
    t3_h2: "Use 'would' in the main clause.",
    t3_q: "Which is 2nd Conditional?",
    t3_qa: "If I lived on Mars, I would be happy.",
    t3_qb: "If I live on Mars, I will be happy.",
    t3_qc: "If I had lived on Mars, I would have been happy.",
    t3_qd: "If I live on Mars, I am happy.",
    t3_sent: "If I ___ wings, I would fly to the moon.",
    t3_qa2: "had", t3_qb2: "have", t3_qc2: "will have", t3_qd2: "was having",

    t4_title: "Third Conditional",
    t4_text: "Regrets: If + past perfect, would have + participle. Example: 'If I had known, I would have come.'",
    t4_inst: "Highlight the past perfect 'if' part:",
    t4_h1: "Look for 'had' + 'taken'.",
    t4_h2: "This part shows what didn't happen in the past.",
    t4_q: "Which is 3rd Conditional?",
    t4_qa: "If I had studied, I would have passed.",
    t4_qb: "If I studied, I would pass.",
    t4_qc: "If I had studied, I will pass.",
    t4_qd: "If I study, I would have passed.",
    t4_tk1: "If", t4_tk2: "she", t4_tk3: "had", t4_tk4: "taken", t4_tk5: "the", t4_tk6: "bus,", t4_tk7: "she", t4_tk8: "would", t4_tk9: "have", t4_tk10: "arrived", t4_tk11: "on", t4_tk12: "time.",

    t5_title: "Unless and If Not",
    t5_text: "'Unless' replaces 'if not'. Example: 'I won't go unless you go.'",
    t5_inst: "Build an 'unless' sentence:",
    t5_h1: "Start with 'We will'.",
    t5_h2: "Use 'unless it rains'.",
    t5_q: "Meaning of 'unless'?",
    t5_qa: "if not", t5_qb: "only if", t5_qc: "because", t5_qd: "although",
    t5_f1: "We will", t5_f2: "go out", t5_f3: "unless", t5_f4: "it rains.",

    t6_title: "Probability Sorter",
    t6_text: "Group by Zero, First, Second, or Third.",
    t6_inst: "Sort by Conditional Type:",
    t6_h1: "Check the tenses in both parts.",
    t6_h2: "0 = Fact, 1 = Plan, 2 = Dream, 3 = Regret.",
    t6_q: "Which is a regret?",
    t6_qa: "3rd Conditional", t6_qb: "1st Conditional", t6_qc: "2nd Conditional", t6_qd: "Zero Conditional",
    t6_bl1: "Real (0/1st)", t6_bl2: "Unreal (2nd/3rd)",
    t6_i1: "If it rains, I stay", t6_i2: "If I were a bird",
    t6_i3: "If I see him, I'll tell", t6_i4: "If I had known",

    t7_title: "If I were you",
    t7_text: "Using 2nd conditional for advice.",
    t7_inst: "Order for giving advice:",
    t7_h1: "Start with 'If I were you'.",
    t7_h2: "Use 'I would' + verb.",
    t7_q: "How to give advice?",
    t7_qa: "If I were you, I would study.",
    t7_qb: "If I am you, I will study.",
    t7_qc: "If I was you, I study.",
    t7_qd: "If I were you, I'll study.",
    t7_w1: "If", t7_w2: "I", t7_w3: "were", t7_w4: "you,", t7_w5: "I", t7_w6: "would", t7_w7: "ask", t7_w8: "for", t7_w9: "help.",

    t8_title: "Consequence Match",
    t8_text: "Match the 'if' clause to the logical result.",
    t8_inst: "Match IF to THEN:",
    t8_h1: "Check the grammar tense match.",
    t8_h2: "Had known -> would have seen.",
    t8_q: "Result of 'If I had a car'?",
    t8_qa: "I would drive.", t8_qb: "I will drive.", t8_qc: "I drive.", t8_qd: "I would have driven.",
    t8_l1: "If you win", t8_r1: "you'll be happy",
    t8_l2: "If you won", t8_r2: "you'd be happy",
    t8_l3: "If you'd won", t8_r3: "you'd have been happy",

    t9_title: "Mixed Conditionals",
    t9_text: "Past condition affecting present result.",
    t9_inst: "Choose for a mixed situation:",
    t9_h1: "Past action (had done), present result (would be).",
    t9_h2: "Look for 'had' and 'would'.",
    t9_q: "Which is a mixed conditional?",
    t9_qa: "If I had slept, I'd be awake now.",
    t9_qb: "If I slept, I'd be awake now.",
    t9_qc: "If I had slept, I'll be awake.",
    t9_qd: "If I sleep, I am awake.",
    t9_sent: "If she had left earlier, she ___ be here now.",
    t9_qa2: "would", t9_qb2: "will", t9_qc2: "had", t9_qd2: "is",

    t10_title: "Condition Highlight",
    t10_text: "Finding the condition in long sentences.",
    t10_inst: "Highlight the 'if' clause:",
    t10_h1: "Look for the part starting with 'If'.",
    t10_h2: "It contains the requirement.",
    t10_q: "Where is the condition?",
    t10_qa: "if it rains", t10_qb: "I will stay", t10_qc: "stay at home", t10_qd: "tomorrow",
    t10_tk1: "I", t10_tk2: "will", t10_tk3: "stay", t10_tk4: "at", t10_tk5: "home", t10_tk6: "tomorrow", t10_tk7: "if", t10_tk8: "it", t10_tk9: "rains", t10_tk10: "hard.",

    t11_title: "Hypothetical Build",
    t11_text: "Build a sentence about a dream.",
    t11_inst: "Build a 'bird' sentence:",
    t11_h1: "Start with 'If I were'.",
    t11_h2: "Use 'I would fly'.",
    t11_q: "Which uses 'were' correctly?",
    t11_qa: "If I were a bird", t11_qb: "If I was a bird", t11_qc: "If I am a bird", t11_qd: "If I be a bird",
    t11_f1: "If I", t11_f2: "were a bird,", t11_f3: "I would", t11_f4: "fly everywhere.",

    t12_title: "Conditional Sorter 2",
    t12_text: "Sort by Probable vs Impossible.",
    t12_inst: "Sort by Probability:",
    t12_h1: "Likely future vs. Imaginary present.",
    t12_h2: "Check the tense (present vs past).",
    t12_q: "Which is most likely?",
    t12_qa: "1st Conditional", t12_qb: "2nd Conditional", t12_qc: "3rd Conditional", t12_qd: "None",
    t12_bl1: "Probable", t12_bl2: "Impossible/Dream",
    t12_i1: "If I study, I'll pass", t12_i2: "If I found a dragon",
    t12_i3: "If it's cold, I'll wear a hat", t12_i4: "If I was a giant",

    t13_title: "Regret Gap-Fill",
    t13_text: "Fill in the regret form.",
    t13_inst: "Choose the 3rd conditional form:",
    t13_h1: "Action in the past.",
    t13_h2: "Use 'would have' + participle.",
    t13_q: "If I ___ known...",
    t13_qa: "had", t13_qb: "have", t13_qc: "was", t13_qd: "were",
    t13_sent: "If we had arrived early, we ___ seen the show.",
    t13_qa2: "would have", t13_qb2: "will have", t13_qc2: "had", t13_qd2: "were",

    t14_title: "Final Match 2",
    t14_text: "Final conditional practice.",
    t14_inst: "Match the pairs:",
    t14_h1: "Clause 1 to Clause 2.",
    t14_h2: "Check tense consistency.",
    t14_q: "Which is correct?",
    t14_qa: "If I win, I'll go.", t14_qb: "If I win, I went.", t14_qc: "If I won, I'll go.", t14_qd: "If I wins, I go.",
    t14_l1: "If he knows", t14_r1: "he will tell",
    t14_l2: "If he knew", t14_r2: "he would tell",
    t14_l3: "If he had known", t14_r3: "he would have told",

    t15_title: "Conditional Review",
    t15_text: "Final review of Grade 7 conditionals.",
    t15_inst: "Pick the correct form:",
    t15_h1: "Think about the timeline.",
    t15_h2: "Last conditional question!",
    t15_q: "If I ___ more time, I would help you.",
    t15_qa: "had", t15_qb: "have", t15_qc: "will have", t15_qd: "has",
    t15_sent: "Unless you ___ now, you will be late.",
    t15_qa2: "leave", t15_qb2: "don't leave", t15_qc2: "left", t15_qd2: "leaving",
  },
};

export const CONDITIONAL_CASTLE_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "fact", color: "#10B981" },
    interactive: { type: "word-order", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", words: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5", "t1_w6", "t1_w7", "t1_w8"], correctOrder: [0,1,2,3,4,5,6,7] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "future", color: "#10B981" },
    interactive: { type: "match-pairs", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }] },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "dream", color: "#10B981" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "t3_sent", choices: ["t3_qa2", "t3_qb2", "t3_qc2", "t3_qd2"], correctIndex: 0 },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "regret", color: "#10B981" },
    interactive: { type: "highlight-text", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", tokens: ["t4_tk1", "t4_tk2", "t4_tk3", "t4_tk4", "t4_tk5", "t4_tk6", "t4_tk7", "t4_tk8", "t4_tk9", "t4_tk10", "t4_tk11", "t4_tk12"], correctIndices: [2, 3] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "unless", color: "#10B981" },
    interactive: { type: "sentence-build", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", fragments: ["t5_f1", "t5_f2", "t5_f3", "t5_f4"] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "type", color: "#10B981" },
    interactive: { type: "drag-to-bucket", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", buckets: [{ id: "b1", label: "t6_bl1" }, { id: "b2", label: "t6_bl2" }], items: [{ text: "t6_i1", bucketId: "b1" }, { text: "t6_i2", bucketId: "b2" }, { text: "t6_i3", bucketId: "b1" }, { text: "t6_i4", bucketId: "b2" }] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "advice", color: "#10B981" },
    interactive: { type: "word-order", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", words: ["t7_w1", "t7_w2", "t7_w3", "t7_w4", "t7_w5", "t7_w6", "t7_w7", "t7_w8", "t7_w9"], correctOrder: [0,1,2,3,4,5,6,7,8] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "match", color: "#10B981" },
    interactive: { type: "match-pairs", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", pairs: [{ left: "t8_l1", right: "t8_r1" }, { left: "t8_l2", right: "t8_r2" }, { left: "t8_l3", right: "t8_r3" }] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "word-display", word: "mixed", color: "#10B981" },
    interactive: { type: "gap-fill", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", sentence: "t9_sent", choices: ["t9_qa2", "t9_qb2", "t9_qc2", "t9_qd2"], correctIndex: 0 },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "word-display", word: "if", color: "#10B981" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1", "t10_tk2", "t10_tk3", "t10_tk4", "t10_tk5", "t10_tk6", "t10_tk7", "t10_tk8", "t10_tk9", "t10_tk10"], correctIndices: [6, 7, 8, 9] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "word-display", word: "build", color: "#10B981" },
    interactive: { type: "sentence-build", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", fragments: ["t11_f1", "t11_f2", "t11_f3", "t11_f4"] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "word-display", word: "chance", color: "#10B981" },
    interactive: { type: "drag-to-bucket", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", buckets: [{ id: "b1", label: "t12_bl1" }, { id: "b2", label: "t12_bl2" }], items: [{ text: "t12_i1", bucketId: "b1" }, { text: "t12_i2", bucketId: "b2" }, { text: "t12_i3", bucketId: "b1" }, { text: "t12_i4", bucketId: "b2" }] },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "word-display", word: "past", color: "#10B981" },
    interactive: { type: "gap-fill", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", sentence: "t13_sent", choices: ["t13_qa2", "t13_qb2", "t13_qc2", "t13_qd2"], correctIndex: 0 },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "word-display", word: "match", color: "#10B981" },
    interactive: { type: "match-pairs", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", pairs: [{ left: "t14_l1", right: "t14_r1" }, { left: "t14_l2", right: "t14_r2" }, { left: "t14_l3", right: "t14_r3" }] },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "word-display", word: "review", color: "#10B981" },
    interactive: { type: "gap-fill", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", sentence: "t15_sent", choices: ["t15_qa2", "t15_qb2", "t15_qc2", "t15_qd2"], correctIndex: 0 },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" },
    difficulty: "hard"
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// i3 — INFINITIVE_GERUND_GARDEN
// ═══════════════════════════════════════════════════════════════════════════

export const INFINITIVE_GERUND_GARDEN_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Gerund Garden",
    t1_title: "Gerund as Subject",
    t1_text: "Use -ing as a noun. Example: 'Swimming is fun.'",
    t1_inst: "Order the words for a gerund subject:",
    t1_h1: "Start with 'Reading'.",
    t1_h2: "The gerund acts as the naming word.",
    t1_q: "Which is a gerund?",
    t1_qa: "Running", t1_qb: "Runs", t1_qc: "Ran", t1_qd: "To run",
    t1_w1: "Reading", t1_w2: "books", t1_w3: "is", t1_w4: "my", t1_w5: "favorite", t1_w6: "hobby", t1_w7: "now.",

    t2_title: "Verb + Infinitive",
    t2_text: "Some verbs need 'to'. Example: 'I want to go.'",
    t2_inst: "Match verb to its infinitive partner:",
    t2_h1: "These verbs usually need 'to'.",
    t2_h2: "Want -> To help.",
    t2_q: "Which needs 'to'?",
    t2_qa: "Decide", t2_qb: "Enjoy", t2_qc: "Finish", t2_qd: "Mind",
    t2_l1: "Want", t2_r1: "To go",
    t2_l2: "Need", t2_r2: "To stay",
    t2_l3: "Hope", t2_r3: "To win",

    t3_title: "Verb + Gerund",
    t3_text: "Some verbs need -ing. Example: 'I enjoy reading.'",
    t3_inst: "Choose for the -ing verb:",
    t3_h1: "Use the gerund form after 'finish'.",
    t3_h2: "Look for the -ing ending.",
    t3_q: "Which needs -ing?",
    t3_qa: "Enjoy", t3_qb: "Want", t3_qc: "Agree", t3_qd: "Decide",
    t3_sent: "She finished ___ her homework.",
    t3_qa2: "doing", t3_qb2: "to do", t3_qc2: "did", t3_qd2: "do",

    t4_title: "Meaning Change: STOP",
    t4_text: "'Stop to do' vs 'Stop doing'. Example: 'Stop smoking' vs 'Stop to eat'.",
    t4_inst: "Highlight the gerund after 'stop':",
    t4_h1: "Look for 'playing'.",
    t4_h2: "It means they quit the action.",
    t4_q: "What does 'stop talking' mean?",
    t4_qa: "be quiet", t4_qb: "start talking", t4_qc: "talk later", t4_qd: "talk slowly",
    t4_tk1: "They", t4_tk2: "had", t4_tk3: "to", t4_tk4: "stop", t4_tk5: "playing", t4_tk6: "because", t4_tk7: "of", t4_tk8: "the", t4_tk9: "rain.",

    t5_title: "Infinitive Build",
    t5_text: "Build a sentence with an infinitive of purpose.",
    t5_inst: "Build a 'to buy' sentence:",
    t5_h1: "Start with 'He went'.",
    t5_h2: "Use 'to buy some milk'.",
    t5_q: "Which shows purpose?",
    t5_qa: "to learn", t5_qb: "learning", t5_qc: "learns", t5_qd: "learned",
    t5_f1: "He went", t5_f2: "to the shop", t5_f3: "to buy", t5_f4: "some bread.",

    t6_title: "Form Sorter",
    t6_text: "Group by Gerund (-ing) vs Infinitive (to).",
    t6_inst: "Sort by Verb Form:",
    t6_h1: "Does it have 'to' or '-ing'?",
    t6_h2: "Check the start of the verb phrase.",
    t6_q: "Which is infinitive?",
    t6_qa: "to swim", t6_qb: "swimming", t6_qc: "swims", t6_qd: "swam",
    t6_bl1: "Gerund", t6_bl2: "Infinitive",
    t6_i1: "Enjoying", t6_i2: "To want",
    t6_i3: "Finishing", t6_i4: "To decide",

    t7_title: "Preposition + Gerund",
    t7_text: "Use -ing after prepositions. Example: 'Good at singing.'",
    t7_inst: "Order for a prepositional gerund:",
    t7_h1: "Start with 'She is'.",
    t7_h2: "Use 'at painting' at the end.",
    t7_q: "Which is correct?",
    t7_qa: "Good at drawing", t7_qb: "Good at to draw", t7_qc: "Good to drawing", t7_qd: "Good in draw",
    t7_w1: "She", t7_w2: "is", t7_w3: "really", t7_w4: "good", t7_w5: "at", t7_w6: "painting", t7_w7: "landscapes.",

    t8_title: "Verb Match 2",
    t8_text: "Match the verb to the form it requires.",
    t8_inst: "Match Verb to Pattern:",
    t8_h1: "Check if it takes 'to' or '-ing'.",
    t8_h2: "Avoid -> -ing, Promise -> to.",
    t8_q: "Pattern for 'Avoid'?",
    t8_qa: "Avoid + -ing", t8_qb: "Avoid + to", t8_qc: "Avoid + base", t8_qd: "Avoid + ed",
    t8_l1: "Enjoy", t8_r1: "-ing form",
    t8_l2: "Want", t8_r2: "to + verb",
    t8_l3: "Mind", t8_r3: "-ing form",

    t9_title: "Choice 3",
    t9_text: "Choosing between -ing and to-.",
    t9_inst: "Choose for the blank:",
    t9_h1: "I promised my mom.",
    t9_h2: "Use 'to clean'.",
    t9_q: "I promised ___.",
    t9_qa: "to help", t9_qb: "helping", t9_qc: "help", t9_qd: "helped",
    t9_sent: "I am looking forward to ___ you.",
    t9_qa2: "seeing", t9_qb2: "see", t9_qc2: "to see", t9_qd2: "saw",

    t10_title: "Highlight 3",
    t10_text: "Finding gerunds and infinitives in sentences.",
    t10_inst: "Highlight the infinitive:",
    t10_h1: "Look for 'to find'.",
    t10_h2: "It starts with 'to'.",
    t10_q: "Which is the infinitive?",
    t10_qa: "to find", t10_qb: "trying", t10_qc: "lost", t10_qd: "keys",
    t10_tk1: "I", t10_tk2: "am", t10_tk3: "trying", t10_tk4: "to", t10_tk5: "find", t10_tk6: "my", t10_tk7: "lost", t10_tk8: "keys", t10_tk9: "now.",

    t11_title: "Purpose Build",
    t11_text: "Build a sentence showing why someone did something.",
    t11_inst: "Build a 'reason' sentence:",
    t11_h1: "Start with 'He called'.",
    t11_h2: "Use 'to ask' for the reason.",
    t11_q: "Which shows reason?",
    t11_qa: "to ask", t11_qb: "asking", t11_qc: "asks", t11_qd: "asked",
    t11_f1: "He called", t11_f2: "the doctor", t11_f3: "to ask", t11_f4: "for advice.",

    t12_title: "Sorter 4",
    t12_text: "Sort by Like/Love patterns.",
    t12_inst: "Sort by permissible form:",
    t12_h1: "Some take both, some only one.",
    t12_h2: "Like/Love take both forms.",
    t12_q: "Which takes both?",
    t12_qa: "Like", t12_qb: "Enjoy", t12_qc: "Want", t12_qd: "Avoid",
    t12_bl1: "Both (-ing/to)", t12_bl2: "Only one",
    t12_i1: "Love", t12_i2: "Enjoy",
    t12_i3: "Start", t12_i4: "Decide",

    t13_title: "Gap-Fill 3",
    t13_text: "Fill in the missing verb form.",
    t13_inst: "Choose for the blank:",
    t13_h1: "It is a persistent action.",
    t13_h2: "Use '-ing' after 'keep'.",
    t13_q: "Keep ___!",
    t13_qa: "trying", t13_qb: "to try", t13_qc: "try", t13_qd: "tried",
    t13_sent: "Don't give up, keep ___.",
    t13_qa2: "trying", t13_qb2: "to try", t13_qc2: "try", t13_qd2: "tries",

    t14_title: "Final Match 3",
    t14_text: "Final gerund/infinitive review.",
    t14_inst: "Match the pairs:",
    t14_h1: "Verb on left, Example on right.",
    t14_h2: "Mind -> waiting, Decide -> to go.",
    t14_q: "Which is correct?",
    t14_qa: "Want -> to play", t14_qb: "Enjoy -> to play", t14_qc: "Mind -> to wait", t14_qd: "Finish -> to work",
    t14_l1: "Mind", t14_r1: "Waiting",
    t14_l2: "Decide", t14_r2: "To go",
    t14_l3: "Finish", t14_r3: "Cleaning",

    t15_title: "Gerund Review",
    t15_text: "Final review of Grade 7 gerunds and infinitives.",
    t15_inst: "Pick the best verb form:",
    t15_h1: "Check the main verb 'avoid'.",
    t15_h2: "Avoid + -ing.",
    t15_q: "I avoid ___ late.",
    t15_qa: "being", t15_qb: "to be", t15_qc: "be", t15_qd: "been",
    t15_sent: "They decided ___ a new car.",
    t15_qa2: "to buy", t15_qb2: "buying", t15_qc2: "buy", t15_qd2: "bought",
  },
};

export const INFINITIVE_GERUND_GARDEN_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "-ing", color: "#F59E0B" },
    interactive: { type: "word-order", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", words: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5", "t1_w6", "t1_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "to", color: "#F59E0B" },
    interactive: { type: "match-pairs", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }] },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "finish", color: "#F59E0B" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "t3_sent", choices: ["t3_qa2", "t3_qb2", "t3_qc2", "t3_qd2"], correctIndex: 0 },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "stop", color: "#F59E0B" },
    interactive: { type: "highlight-text", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", tokens: ["t4_tk1", "t4_tk2", "t4_tk3", "t4_tk4", "t4_tk5", "t4_tk6", "t4_tk7", "t4_tk8", "t4_tk9"], correctIndices: [4] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "build", color: "#F59E0B" },
    interactive: { type: "sentence-build", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", fragments: ["t5_f1", "t5_f2", "t5_f3", "t5_f4"] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "sort", color: "#F59E0B" },
    interactive: { type: "drag-to-bucket", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", buckets: [{ id: "b1", label: "t6_bl1" }, { id: "b2", label: "t6_bl2" }], items: [{ text: "t6_i1", bucketId: "b1" }, { text: "t6_i2", bucketId: "b2" }, { text: "t6_i3", bucketId: "b1" }, { text: "t6_i4", bucketId: "b2" }] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "prepos.", color: "#F59E0B" },
    interactive: { type: "word-order", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", words: ["t7_w1", "t7_w2", "t7_w3", "t7_w4", "t7_w5", "t7_w6", "t7_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "match", color: "#F59E0B" },
    interactive: { type: "match-pairs", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", pairs: [{ left: "t8_l1", right: "t8_r1" }, { left: "t8_l2", right: "t8_r2" }, { left: "t8_l3", right: "t8_r3" }] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "word-display", word: "choice", color: "#F59E0B" },
    interactive: { type: "gap-fill", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", sentence: "t9_sent", choices: ["t9_qa2", "t9_qb2", "t9_qc2", "t9_qd2"], correctIndex: 0 },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "word-display", word: "find", color: "#F59E0B" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1", "t10_tk2", "t10_tk3", "t10_tk4", "t10_tk5", "t10_tk6", "t10_tk7", "t10_tk8", "t10_tk9"], correctIndices: [3, 4] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "word-display", word: "reason", color: "#F59E0B" },
    interactive: { type: "sentence-build", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", fragments: ["t11_f1", "t11_f2", "t11_f3", "t11_f4"] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "word-display", word: "type", color: "#F59E0B" },
    interactive: { type: "drag-to-bucket", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", buckets: [{ id: "b1", label: "t12_bl1" }, { id: "b2", label: "t12_bl2" }], items: [{ text: "t12_i1", bucketId: "b1" }, { text: "t12_i2", bucketId: "b2" }, { text: "t12_i3", bucketId: "b1" }, { text: "t12_i4", bucketId: "b2" }] },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "word-display", word: "keep", color: "#F59E0B" },
    interactive: { type: "gap-fill", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", sentence: "t13_sent", choices: ["t13_qa2", "t13_qb2", "t13_qc2", "t13_qd2"], correctIndex: 0 },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "word-display", word: "match", color: "#F59E0B" },
    interactive: { type: "match-pairs", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", pairs: [{ left: "t14_l1", right: "t14_r1" }, { left: "t14_l2", right: "t14_r2" }, { left: "t14_l3", right: "t14_r3" }] },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "word-display", word: "review", color: "#F59E0B" },
    interactive: { type: "gap-fill", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", sentence: "t15_sent", choices: ["t15_qa2", "t15_qb2", "t15_qc2", "t15_qd2"], correctIndex: 0 },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" },
    difficulty: "hard"
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// i4 — CAUSATIVE_CASTLE
// ═══════════════════════════════════════════════════════════════════════════

export const CAUSATIVE_CASTLE_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Causative Castle",
    t1_title: "Have Something Done",
    t1_text: "Use 'have' + object + past participle. Example: 'I had my hair cut.'",
    t1_inst: "Order the words for a causative action:",
    t1_h1: "Start with 'He had'.",
    t1_h2: "The object 'his car' comes before 'fixed'.",
    t1_q: "Which is causative?",
    t1_qa: "He had his car fixed.", t1_qb: "He fixed his car.", t1_qc: "His car is fixed.", t1_qd: "He is fixing car.",
    t1_w1: "He", t1_w2: "had", t1_w3: "his", t1_w4: "old", t1_w5: "car", t1_w6: "fixed", t1_w7: "yesterday.",

    t2_title: "Get Something Done",
    t2_text: "Similar to 'have', often more informal. Example: 'I got my bike repaired.'",
    t2_inst: "Match the object to its causative action:",
    t2_h1: "Think about what happened to the object.",
    t2_h2: "House -> Painted, Hair -> Cut.",
    t2_q: "Causative of 'repair bike'?",
    t2_qa: "get bike repaired", t2_qb: "get bike repair", t2_qc: "bike is repair", t2_qd: "repairing bike",
    t2_l1: "House", t2_r1: "Had it painted",
    t2_l2: "Eyes", t2_r2: "Had them tested",
    t2_l3: "Pizza", t2_r3: "Had it delivered",

    t3_title: "Causative: HAVE vs GET",
    t3_text: "'Have' is more formal, 'Get' is more common in speech.",
    t3_inst: "Choose for a formal situation:",
    t3_h1: "The manager is formal.",
    t3_h2: "Use 'had' for formal causative.",
    t3_q: "Which is more formal?",
    t3_qa: "I had it done.", t3_qb: "I got it done.", t3_qc: "I did it.", t3_qd: "It is done.",
    t3_sent: "The boss ___ the report typed.",
    t3_qa2: "had", t3_qb2: "got", t3_qc2: "made", t3_qd2: "was",

    t4_title: "Causative Highlight",
    t4_text: "Finding the causative structure in a sentence.",
    t4_inst: "Highlight the past participle:",
    t4_h1: "Look for 'cleaned'.",
    t4_h2: "It is the last part of the causative phrase.",
    t4_q: "What is the participle?",
    t4_qa: "cleaned", t4_qb: "had", t4_qc: "windows", t4_qd: "we",
    t4_tk1: "We", t4_tk2: "had", t4_tk3: "all", t4_tk4: "the", t4_tk5: "windows", t4_tk6: "cleaned", t4_tk7: "this", t4_tk8: "morning.",

    t5_title: "Causative Build",
    t5_text: "Build a sentence about having a service done.",
    t5_inst: "Build a 'photo' causative:",
    t5_h1: "Start with 'She got'.",
    t5_h2: "Use 'her photo taken'.",
    t5_q: "Correct causative?",
    t5_qa: "I had my eyes checked.", t5_qb: "I checked my eyes.", t5_qc: "I have my eyes check.", t5_qd: "My eyes checked.",
    t5_f1: "She got", t5_f2: "her photo", t5_f3: "taken", t5_f4: "by a professional.",

    t6_title: "Causative Sorter",
    t6_text: "Group by Have vs Get.",
    t6_inst: "Sort by Causative Verb:",
    t6_h1: "Is the helper 'had' or 'got'?",
    t6_h2: "Check the second word.",
    t6_q: "Which uses 'get'?",
    t6_qa: "I got my hair cut.", t6_qb: "I had my hair cut.", t6_qc: "I cut my hair.", t6_qd: "My hair is cut.",
    t6_bl1: "HAVE", t6_bl2: "GET",
    t6_i1: "Had it fixed", t6_i2: "Got it fixed",
    t6_i3: "Had it sent", t6_i4: "Got it sent",

    t7_title: "Causative Questions",
    t7_text: "Asking if someone had something done. Example: 'Did you have your hair cut?'",
    t7_inst: "Order for a causative question:",
    t7_h1: "Start with 'Did you'.",
    t7_h2: "Use 'have your bike' + verb.",
    t7_q: "Question for 'had car fixed'?",
    t7_qa: "Did you have your car fixed?", t7_qb: "Had you fixed your car?", t7_qc: "Did you fix your car?", t7_qd: "Is your car fixed?",
    t7_w1: "Did", t7_w2: "you", t7_w3: "have", t7_w4: "your", t7_w5: "bike", t7_w6: "repaired", t7_w7: "yet?",

    t8_title: "Agent Match",
    t8_text: "Match the service to the person who does it.",
    t8_inst: "Match Service to Agent:",
    t8_h1: "Who paints houses?",
    t8_h2: "Who fixes pipes?",
    t8_q: "Who fixes pipes?",
    t8_qa: "Plumber", t8_qb: "Baker", t8_qc: "Teacher", t8_qd: "Pilot",
    t8_l1: "Fixing pipes", t8_r1: "Plumber",
    t8_l2: "Cutting hair", t8_r2: "Barber",
    t8_l3: "Painting walls", t8_r3: "Painter",

    t9_title: "Causative Choice 2",
    t9_text: "Choosing the correct participle.",
    t9_inst: "Choose for the blank:",
    t9_h1: "The action was completed by someone.",
    t9_h2: "Use the past participle form.",
    t9_q: "I had my computer ___.",
    t9_qa: "repaired", t9_qb: "repair", t9_qc: "repairing", t9_qd: "repairs",
    t9_sent: "They had their house ___ last month.",
    t9_qa2: "built", t9_qb2: "build", t9_qc2: "building", t9_qd2: "builds",

    t10_title: "Causative Highlight 2",
    t10_text: "Finding the object in causative sentences.",
    t10_inst: "Highlight the object:",
    t10_h1: "Look for 'the grass'.",
    t10_h2: "It is the thing being acted upon.",
    t10_q: "What is the object?",
    t10_qa: "the grass", t10_qb: "had", t10_qc: "cut", t10_qd: "they",
    t10_tk1: "They", t10_tk2: "had", t10_tk3: "the", t10_tk4: "grass", t10_tk5: "cut", t10_tk6: "by", t10_tk7: "the", t10_tk8: "gardener.",

    t11_title: "Passive Causative Build",
    t11_text: "Build a sentence with an agent using 'by'.",
    t11_inst: "Build a 'by' causative:",
    t11_h1: "Start with 'We had it'.",
    t11_h2: "Use 'repaired by Tom'.",
    t11_q: "Who did the work?",
    t11_qa: "the agent after 'by'", t11_qb: "the subject", t11_qc: "no one", t11_qd: "the object",
    t11_f1: "We had the", t11_f2: "pipes fixed", t11_f3: "by a", t11_f4: "local plumber.",

    t12_title: "Situation Sorter",
    t12_text: "Sort by Self vs Someone else.",
    t12_inst: "Sort by Action Type:",
    t12_h1: "Did you do it or someone else?",
    t12_h2: "Causative means someone else did it.",
    t12_q: "Which is causative?",
    t12_qa: "I had my hair cut.", t12_qb: "I cut my hair.", t12_qc: "My hair is long.", t12_qd: "I like my hair.",
    t12_bl1: "Self Action", t12_bl2: "Causative",
    t12_i1: "I washed car", t12_i2: "I had car washed",
    t12_i3: "I cooked meal", t12_i4: "I had meal cooked",

    t13_title: "Mixed Causative Gap-Fill",
    t13_text: "Fill in the missing causative helper.",
    t13_inst: "Choose for the blank:",
    t13_h1: "He is going to do it in the future.",
    t13_h2: "Use 'will have'.",
    t13_q: "He ___ his car fixed soon.",
    t13_qa: "will have", t13_qb: "had", t13_qc: "has", t13_qd: "is",
    t13_sent: "I ___ my hair cut tomorrow.",
    t13_qa2: "am getting", t13_qb2: "got", t13_qc2: "had", t13_qd2: "has",

    t14_title: "Final Match 4",
    t14_text: "Final causative review.",
    t14_inst: "Match the pairs:",
    t14_h1: "Verb form to Meaning.",
    t14_h2: "Had it done = someone else did it.",
    t14_q: "Which is correct?",
    t14_qa: "Had + Object + Participle", t14_qb: "Had + Participle + Object", t14_qc: "Object + Had + Participle", t14_qd: "Participle + Object + Had",
    t14_l1: "I had it", t14_r1: "fixed (by someone)",
    t14_l2: "I got it", t14_r2: "repaired (informal)",
    t14_l3: "I did it", t14_r3: "myself (active)",

    t15_title: "Causative Review",
    t15_text: "Final review of Grade 7 causative forms.",
    t15_inst: "Pick the best causative form:",
    t15_h1: "Think about the structure.",
    t15_h2: "Last causative question!",
    t15_q: "Which shows a service?",
    t15_qa: "I had my room painted.", t15_qb: "I painted my room.", t15_qc: "My room was painted.", t15_qd: "I painting my room.",
    t15_sent: "We are going to ___ our roof repaired.",
    t15_qa2: "have", t15_qb2: "do", t15_qc2: "make", t15_qd2: "be",
  },
};

export const CAUSATIVE_CASTLE_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "had", color: "#8B5CF6" },
    interactive: { type: "word-order", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", words: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5", "t1_w6", "t1_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "got", color: "#8B5CF6" },
    interactive: { type: "match-pairs", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }] },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "formal", color: "#8B5CF6" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "t3_sent", choices: ["t3_qa2", "t3_qb2", "t3_qc2", "t3_qd2"], correctIndex: 0 },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "find", color: "#8B5CF6" },
    interactive: { type: "highlight-text", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", tokens: ["t4_tk1", "t4_tk2", "t4_tk3", "t4_tk4", "t4_tk5", "t4_tk6", "t4_tk7", "t4_tk8", "t4_tk9"], correctIndices: [5] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "build", color: "#8B5CF6" },
    interactive: { type: "sentence-build", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", fragments: ["t5_f1", "t5_f2", "t5_f3", "t5_f4"] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "sort", color: "#8B5CF6" },
    interactive: { type: "drag-to-bucket", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", buckets: [{ id: "b1", label: "t6_bl1" }, { id: "b2", label: "t6_bl2" }], items: [{ text: "t6_i1", bucketId: "b1" }, { text: "t6_i2", bucketId: "b2" }, { text: "t6_i3", bucketId: "b1" }, { text: "t6_i4", bucketId: "b2" }] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "bike", color: "#8B5CF6" },
    interactive: { type: "word-order", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", words: ["t7_w1", "t7_w2", "t7_w3", "t7_w4", "t7_w5", "t7_w6", "t7_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "match", color: "#8B5CF6" },
    interactive: { type: "match-pairs", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", pairs: [{ left: "t8_l1", right: "t8_r1" }, { left: "t8_l2", right: "t8_r2" }, { left: "t8_l3", right: "t8_r3" }] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "word-display", word: "partic.", color: "#8B5CF6" },
    interactive: { type: "gap-fill", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", sentence: "t9_sent", choices: ["t9_qa2", "t9_qb2", "t9_qc2", "t9_qd2"], correctIndex: 0 },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "word-display", word: "object", color: "#8B5CF6" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1", "t10_tk2", "t10_tk3", "t10_tk4", "t10_tk5", "t10_tk6", "t10_tk7", "t10_tk8"], correctIndices: [2, 3] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "word-display", word: "agent", color: "#8B5CF6" },
    interactive: { type: "sentence-build", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", fragments: ["t11_f1", "t11_f2", "t11_f3", "t11_f4"] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "word-display", word: "self", color: "#8B5CF6" },
    interactive: { type: "drag-to-bucket", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", buckets: [{ id: "b1", label: "t12_bl1" }, { id: "b2", label: "t12_bl2" }], items: [{ text: "t12_i1", bucketId: "b1" }, { text: "t12_i2", bucketId: "b2" }, { text: "t12_i3", bucketId: "b1" }, { text: "t12_i4", bucketId: "b2" }] },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "word-display", word: "helper", color: "#8B5CF6" },
    interactive: { type: "gap-fill", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", sentence: "t13_sent", choices: ["t13_qa2", "t13_qb2", "t13_qc2", "t13_qd2"], correctIndex: 0 },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "word-display", word: "match", color: "#8B5CF6" },
    interactive: { type: "match-pairs", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", pairs: [{ left: "t14_l1", right: "t14_r1" }, { left: "t14_l2", right: "t14_r2" }, { left: "t14_l3", right: "t14_r3" }] },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "word-display", word: "review", color: "#8B5CF6" },
    interactive: { type: "gap-fill", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", sentence: "t15_sent", choices: ["t15_qa2", "t15_qb2", "t15_qc2", "t15_qd2"], correctIndex: 0 },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" },
    difficulty: "hard"
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// i5 — INVERSION_ISLAND
// ═══════════════════════════════════════════════════════════════════════════

export const INVERSION_ISLAND_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Inversion Island",
    t1_title: "Inversion with NEVER",
    t1_text: "Put the verb before the subject for emphasis. Example: 'Never have I seen such beauty.'",
    t1_inst: "Order the words for a formal inversion:",
    t1_h1: "Start with 'Never have'.",
    t1_h2: "The subject 'I' comes after 'have'.",
    t1_q: "Which uses inversion?",
    t1_qa: "Never have I seen him.", t1_qb: "I have never seen him.", t1_qc: "Never I have seen him.", t1_qd: "I never saw him.",
    t1_w1: "Never", t1_w2: "have", t1_w3: "I", t1_w4: "been", t1_w5: "so", t1_w6: "surprised", t1_w7: "before.",

    t2_title: "Inversion with SELDOM",
    t2_text: "Seldom, rarely, hardly. Example: 'Seldom does he complain.'",
    t2_inst: "Match the normal to the inverted sentence:",
    t2_h1: "Normal: He rarely goes out.",
    t2_h2: "Inverted: Rarely does he go out.",
    t2_q: "Inverted of 'He rarely works'?",
    t2_qa: "Rarely does he work.", t2_qb: "Rarely he works.", t2_qc: "He does rarely work.", t2_qd: "Rarely works he.",
    t2_l1: "He never goes", t2_r1: "Never does he go",
    t2_l2: "She rarely eats", t2_r2: "Rarely does she eat",
    t2_l3: "They seldom talk", t2_r3: "Seldom do they talk",

    t3_title: "Hardly Had... When",
    t3_text: "Used for actions happening one after another. Example: 'Hardly had I arrived when the phone rang.'",
    t3_inst: "Choose the correct connector:",
    t3_h1: "Hardly goes with 'when'.",
    t3_h2: "Use 'had' + subject + participle.",
    t3_q: "Hardly had I started ___ it rained.",
    t3_qa: "when", t3_qb: "than", t3_qc: "then", t3_qd: "that",
    t3_sent: "Hardly had the movie started ___ I fell asleep.",
    t3_qa2: "when", t3_qb2: "than", t3_qc2: "then", t3_qd2: "that",

    t4_title: "Inversion Highlight",
    t4_text: "Finding the inverted verb and subject.",
    t4_inst: "Highlight the auxiliary verb before the subject:",
    t4_h1: "Look for 'did'.",
    t4_h2: "It is placed before 'he'.",
    t4_q: "What is inverted?",
    t4_qa: "did he", t4_qb: "only then", t4_qc: "realize", t4_qd: "the truth",
    t4_tk1: "Only", t4_tk2: "then", t4_tk3: "did", t4_tk4: "he", t4_tk5: "realize", t4_tk6: "how", t4_tk7: "wrong", t4_tk8: "he", t4_tk9: "was.",

    t5_title: "Inversion Build",
    t5_text: "Build a sentence starting with 'No sooner'.",
    t5_inst: "Build a 'no sooner' sentence:",
    t5_h1: "Start with 'No sooner had'.",
    t5_h2: "Use 'than' for the result.",
    t5_q: "No sooner had I left ___ it rained.",
    t5_qa: "than", t5_qb: "when", t5_qc: "then", t5_qd: "that",
    t5_f1: "No sooner had", t5_f2: "we arrived", t5_f3: "than the", t5_f4: "show began.",

    t6_title: "Formal Sorter",
    t6_text: "Group by Normal vs Inverted order.",
    t6_inst: "Sort by Sentence Order:",
    t6_h1: "Is the helper before the subject?",
    t6_h2: "Inversion is more formal.",
    t6_q: "Which is inverted?",
    t6_qa: "Little did I know.", t6_qb: "I knew little.", t6_qc: "I didn't know.", t6_qd: "He knows.",
    t6_bl1: "Normal Order", t6_bl2: "Inverted (Formal)",
    t6_i1: "I have never", t6_i2: "Never have I",
    t6_i3: "He seldom goes", t6_i4: "Seldom does he",

    t7_title: "Only then / Only if",
    t7_text: "Inversion after 'only' phrases. Example: 'Only then did I see it.'",
    t7_inst: "Order for an 'only' inversion:",
    t7_h1: "Start with 'Only if'.",
    t7_h2: "The main part is inverted (will you...).",
    t7_q: "Which is correct?",
    t7_qa: "Only then did he go.", t7_qb: "Only then he went.", t7_qc: "Only he then went.", t7_qd: "He only then went.",
    t7_w1: "Only", t7_w2: "if", t7_w3: "you", t7_w4: "study", t7_w5: "will", t7_w6: "you", t7_w7: "pass", t7_w8: "the", t7_w9: "test.",

    t8_title: "Negative Match",
    t8_text: "Match the negative starter to the auxiliary.",
    t8_inst: "Match Starter to Helper:",
    t8_h1: "Under no circumstances -> will/should.",
    t8_h2: "Check the formal tone.",
    t8_q: "Helper for 'Never'?",
    t8_qa: "have / do", t8_qb: "is / are", t8_qc: "not", t8_qd: "very",
    t8_l1: "Never", t8_r1: "have I",
    t8_l2: "Rarely", t8_r2: "does he",
    t8_l3: "Under no condition", t8_r3: "should you",

    t9_title: "Inversion Choice 2",
    t9_text: "Choosing the correct auxiliary verb.",
    t9_inst: "Choose for the blank:",
    t9_h1: "It refers to a single person (he).",
    t9_h2: "Use 'does' or 'did' for present/past.",
    t9_q: "Seldom ___ he travel.",
    t9_qa: "does", t9_qb: "do", t9_qc: "is", t9_qd: "has",
    t9_sent: "Not only ___ she sing, but she also dances.",
    t9_qa2: "does", t9_qb2: "do", t9_qc2: "is", t9_qd2: "was",

    t10_title: "Condition Highlight 2",
    t10_text: "Finding 'Were I' inversion.",
    t10_inst: "Highlight the inverted condition:",
    t10_h1: "Look for 'Were I'.",
    t10_h2: "It means 'If I were'.",
    t10_q: "What does 'Were I' mean?",
    t10_qa: "If I were", t10_qb: "I was", t10_qc: "I am", t10_qd: "If I am",
    t10_tk1: "Were", t10_tk2: "I", t10_tk3: "you,", t10_tk4: "I", t10_tk5: "would", t10_tk6: "not", t10_tk7: "go", t10_tk8: "out", t10_tk9: "today.",

    t11_title: "Little Build",
    t11_text: "Build a sentence with 'Little did I know'.",
    t11_inst: "Build a 'little' sentence:",
    t11_h1: "Start with 'Little did I'.",
    t11_h2: "Use 'know about it'.",
    t11_q: "Meaning of 'Little did he know'?",
    t11_qa: "He didn't know at all", t11_qb: "He knew a little bit", t11_qc: "He knew everything", t11_qd: "He was smart",
    t11_f1: "Little did", t11_f2: "I know", t11_f3: "that the", t11_f4: "surprise was ready.",

    t12_title: "Sentence Sorter 3",
    t12_text: "Sort by Emphasis: Low vs High.",
    t12_inst: "Sort by Emphasis:",
    t12_h1: "Normal order vs. Inverted order.",
    t12_h2: "Inversion adds high emphasis.",
    t12_q: "Which has more emphasis?",
    t12_qa: "Inverted", t12_qb: "Normal", t12_qc: "Both same", t12_qd: "None",
    t12_bl1: "Low (Normal)", t12_bl2: "High (Inverted)",
    t12_i1: "I have never seen", t12_i2: "Never have I seen",
    t12_i3: "He rarely goes", t12_i4: "Rarely does he go",

    t13_title: "Negative Gap-Fill",
    t13_text: "Fill in the missing formal starter.",
    t13_inst: "Choose for the formal blank:",
    t13_h1: "Used for a strict rule.",
    t13_h2: "Use 'Under no circumstances'.",
    t13_q: "___ should you touch it.",
    t13_qa: "Under no circumstances", t13_qb: "Never not", t13_qc: "Always", t13_qd: "Sometimes",
    t13_sent: "___ have I heard such a story.",
    t13_qa2: "Never", t13_qb2: "Ever", t13_qc2: "Always", t13_qd2: "Sometimes",

    t14_title: "Final Match 5",
    t14_text: "Final inversion review.",
    t14_inst: "Match the pairs:",
    t14_h1: "Starter to Ending.",
    t14_h2: "No sooner -> than, Hardly -> when.",
    t14_q: "Which is correct?",
    t14_qa: "No sooner... than", t14_qb: "No sooner... when", t14_qc: "Hardly... than", t14_qd: "Never... when",
    t14_l1: "No sooner", t14_r1: "...than he arrived",
    t14_l2: "Hardly", t14_r2: "...when he arrived",
    t14_l3: "Not only", t14_r3: "...but also he stayed",

    t15_title: "Inversion Review",
    t15_text: "Final review of Grade 7 inversion rules.",
    t15_inst: "Pick the best inverted form:",
    t15_h1: "Check the auxiliary and subject order.",
    t15_h2: "Last question!",
    t15_q: "Which is correct inversion?",
    t15_qa: "Never will I forget this.", t15_qb: "Never I will forget this.", t15_qc: "I will never forget this.", t15_qd: "Never I forget this.",
    t15_sent: "___ does he come to our house anymore.",
    t15_qa2: "Rarely", t15_qb2: "Sometimes", t15_qc2: "Always", t15_qd2: "Frequently",
  },
};

export const INVERSION_ISLAND_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "never", color: "#EF4444" },
    interactive: { type: "word-order", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", words: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5", "t1_w6", "t1_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "seldom", color: "#EF4444" },
    interactive: { type: "match-pairs", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }] },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "hardly", color: "#EF4444" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "t3_sent", choices: ["t3_qa2", "t3_qb2", "t3_qc2", "t3_qd2"], correctIndex: 0 },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "find", color: "#EF4444" },
    interactive: { type: "highlight-text", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", tokens: ["t4_tk1", "t4_tk2", "t4_tk3", "t4_tk4", "t4_tk5", "t4_tk6", "t4_tk7", "t4_tk8", "t4_tk9"], correctIndices: [2] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "build", color: "#EF4444" },
    interactive: { type: "sentence-build", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", fragments: ["t5_f1", "t5_f2", "t5_f3", "t5_f4"] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "sort", color: "#EF4444" },
    interactive: { type: "drag-to-bucket", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", buckets: [{ id: "b1", label: "t6_bl1" }, { id: "b2", label: "t6_bl2" }], items: [{ text: "t6_i1", bucketId: "b1" }, { text: "t6_i2", bucketId: "b2" }, { text: "t6_i3", bucketId: "b1" }, { text: "t6_i4", bucketId: "b2" }] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "only", color: "#EF4444" },
    interactive: { type: "word-order", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", words: ["t7_w1", "t7_w2", "t7_w3", "t7_w4", "t7_w5", "t7_w6", "t7_w7", "t7_w8", "t7_w9"], correctOrder: [0,1,2,3,4,5,6,7,8] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "match", color: "#EF4444" },
    interactive: { type: "match-pairs", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", pairs: [{ left: "t8_l1", right: "t8_r1" }, { left: "t8_l2", right: "t8_r2" }, { left: "t8_l3", right: "t8_r3" }] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "word-display", word: "choice", color: "#EF4444" },
    interactive: { type: "gap-fill", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", sentence: "t9_sent", choices: ["t9_qa2", "t9_qb2", "t9_qc2", "t9_qd2"], correctIndex: 0 },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "word-display", word: "were", color: "#EF4444" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1", "t10_tk2", "t10_tk3", "t10_tk4", "t10_tk5", "t10_tk6", "t10_tk7", "t10_tk8", "t10_tk9"], correctIndices: [0, 1] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "word-display", word: "build", color: "#EF4444" },
    interactive: { type: "sentence-build", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", fragments: ["t11_f1", "t11_f2", "t11_f3", "t11_f4"] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "word-display", word: "type", color: "#EF4444" },
    interactive: { type: "drag-to-bucket", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", buckets: [{ id: "b1", label: "t12_bl1" }, { id: "b2", label: "t12_bl2" }], items: [{ text: "t12_i1", bucketId: "b1" }, { text: "t12_i2", bucketId: "b2" }, { text: "t12_i3", bucketId: "b1" }, { text: "t12_i4", bucketId: "b2" }] },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "word-display", word: "rule", color: "#EF4444" },
    interactive: { type: "gap-fill", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", sentence: "t13_sent", choices: ["t13_qa2", "t13_qb2", "t13_qc2", "t13_qd2"], correctIndex: 0 },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "word-display", word: "match", color: "#EF4444" },
    interactive: { type: "match-pairs", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", pairs: [{ left: "t14_l1", right: "t14_r1" }, { left: "t14_l2", right: "t14_r2" }, { left: "t14_l3", right: "t14_r3" }] },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "word-display", word: "review", color: "#EF4444" },
    interactive: { type: "gap-fill", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", sentence: "t15_sent", choices: ["t15_qa2", "t15_qb2", "t15_qc2", "t15_qd2"], correctIndex: 0 },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" },
    difficulty: "hard"
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// i6 — PHRASAL_VERBS_PARADISE
// ═══════════════════════════════════════════════════════════════════════════

export const PHRASAL_VERBS_PARADISE_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Phrasal Paradise",
    t1_title: "Separable Phrasals",
    t1_text: "Object can go in the middle. Example: 'Turn the light off' or 'Turn off the light.'",
    t1_inst: "Order the words for a separable phrasal:",
    t1_h1: "Start with 'He'.",
    t1_h2: "Use 'turn' + 'the radio' + 'off'.",
    t1_q: "Which is separable?",
    t1_qa: "turn off", t1_qb: "get on", t1_qc: "look after", t1_qd: "run into",
    t1_w1: "He", t1_w2: "decided", t1_w3: "to", t1_w4: "turn", t1_w5: "the", t1_w6: "loud", t1_w7: "radio", t1_w8: "off.",

    t2_title: "Inseparable Phrasals",
    t2_text: "Object must come after the verb. Example: 'Look after the baby.'",
    t2_inst: "Match phrasal to its inseparable object:",
    t2_h1: "These cannot be split.",
    t2_h2: "Look after -> someone, Get on -> bus.",
    t2_q: "Which is inseparable?",
    t2_qa: "look after", t2_qb: "take off", t2_qc: "put on", t2_qd: "bring up",
    t2_l1: "Look after", t2_r1: "the dog",
    t2_l2: "Get on", t2_r2: "the train",
    t2_l3: "Run into", t2_r3: "a friend",

    t3_title: "Three-Word Phrasals",
    t3_text: "Verb + two particles. Example: 'look forward to', 'get along with'.",
    t3_inst: "Choose the correct ending:",
    t3_h1: "I am excited about it.",
    t3_h2: "Use 'looking forward to'.",
    t3_q: "Which has three words?",
    t3_qa: "get along with", t3_qb: "look after", t3_qc: "take off", t3_qd: "put away",
    t3_sent: "I really get along ___ my sister.",
    t3_qa2: "with", t3_qb2: "to", t3_qc2: "from", t3_qd2: "at",

    t4_title: "Phrasal Highlight",
    t4_text: "Finding the full phrasal verb in a sentence.",
    t4_inst: "Highlight the full phrasal verb:",
    t4_h1: "Look for 'look forward to'.",
    t4_h2: "It consists of three words.",
    t4_q: "What is the phrasal verb?",
    t4_qa: "look forward to", t4_qb: "am looking", t4_qc: "to the", t4_qd: "weekend",
    t4_tk1: "I", t4_tk2: "am", t4_tk3: "looking", t4_tk4: "forward", t4_tk5: "to", t4_tk6: "the", t4_tk7: "wonderful", t4_tk8: "weekend", t4_tk9: "ahead.",

    t5_title: "Phrasal Build",
    t5_text: "Build a sentence about recovering.",
    t5_inst: "Build a 'get over' sentence:",
    t5_h1: "Start with 'She did'.",
    t5_h2: "Use 'get over the cold'.",
    t5_q: "Meaning of 'get over'?",
    t5_qa: "recover from", t5_qb: "climb over", t5_qc: "walk away", t5_qd: "start over",
    t5_f1: "She did", t5_f2: "finally", t5_f3: "get over", t5_f4: "her bad cold.",

    t6_title: "Phrasal Sorter",
    t6_text: "Group by Movement vs Mental phrasals.",
    t6_inst: "Sort by Phrasal Meaning:",
    t6_h1: "Is it a physical action or a thought?",
    t6_h2: "Walk away vs Figure out.",
    t6_q: "Which is mental?",
    t6_qa: "figure out", t6_qb: "run away", t6_qc: "sit down", t6_qd: "stand up",
    t6_bl1: "Movement", t6_bl2: "Thinking",
    t6_i1: "Go away", t6_i2: "Figure out",
    t6_i3: "Run out", t6_i4: "Think over",

    t7_title: "Common Phrasals: TAKE",
    t7_text: "Take off, take up, take after.",
    t7_inst: "Order for a plane leaving:",
    t7_h1: "Start with 'The plane'.",
    t7_h2: "Use 'took off' for leaving the ground.",
    t7_q: "What is 'take after'?",
    t7_qa: "look like a parent", t7_qb: "leave ground", t7_qc: "start hobby", t7_qd: "remove clothes",
    t7_w1: "The", t7_w2: "plane", t7_w3: "is", t7_w4: "going", t7_w5: "to", t7_w6: "take", t7_w7: "off", t7_w8: "shortly.",

    t8_title: "Meaning Match",
    t8_text: "Match the phrasal verb to its simple definition.",
    t8_inst: "Match Verb to Meaning:",
    t8_h1: "Call off -> Cancel.",
    t8_h2: "Give up -> Stop trying.",
    t8_q: "What is 'call off'?",
    t8_qa: "cancel", t8_qb: "start", t8_qc: "continue", t8_qd: "shout",
    t8_l1: "Call off", t8_r1: "Cancel",
    t8_l2: "Give up", t8_r2: "Stop trying",
    t8_l3: "Put off", t8_r3: "Delay",

    t9_title: "Phrasal Choice 2",
    t9_text: "Choosing the correct particle.",
    t9_inst: "Choose for the blank:",
    t9_h1: "He decided to start a new hobby.",
    t9_h2: "Use 'take up'.",
    t9_q: "He decided to take ___ golf.",
    t9_qa: "up", t9_qb: "off", t9_qc: "down", t9_qd: "over",
    t9_sent: "Don't forget to turn ___ the lights.",
    t9_qa2: "off", t9_qb2: "up", t9_qc2: "on", t9_qd2: "in",

    t10_title: "Phrasal Highlight 2",
    t10_text: "Finding phrasal verbs in context.",
    t10_inst: "Highlight the phrasal verb:",
    t10_h1: "Look for 'look into'.",
    t10_h2: "It means to investigate.",
    t10_q: "What does 'look into' mean?",
    t10_qa: "investigate", t10_qb: "watch TV", t10_qc: "ignore", t10_qd: "see inside",
    t10_tk1: "The", t10_tk2: "police", t10_tk3: "will", t10_tk4: "look", t10_tk5: "into", t10_tk6: "the", t10_tk7: "matter", t10_tk8: "immediately.",

    t11_title: "Separation Build",
    t11_text: "Build a sentence splitting the phrasal.",
    t11_inst: "Build a split phrasal:",
    t11_h1: "Start with 'Put your'.",
    t11_h2: "Use 'shoes on'.",
    t11_q: "Which can be split?",
    t11_qa: "put on", t11_qb: "look after", t11_qc: "get on", t11_qd: "run into",
    t11_f1: "Put your", t11_f2: "warm coat", t11_f3: "on", t11_f4: "before going.",

    t12_title: "Sorter 4",
    t12_text: "Sort by Phrasal vs Simple verb.",
    t12_inst: "Sort by Verb Type:",
    t12_h1: "Does it have a particle?",
    t12_h2: "Phrasal has two or three parts.",
    t12_q: "Which is a phrasal?",
    t12_qa: "break down", t12_qb: "break", t12_qc: "run", t12_qd: "eat",
    t12_bl1: "Simple Verb", t12_bl2: "Phrasal Verb",
    t12_i1: "Eat", t12_i2: "Eat up",
    t12_i3: "Run", t12_i4: "Run out",

    t13_title: "Particle Gap-Fill",
    t13_text: "Fill in the missing particle.",
    t13_inst: "Choose for the blank:",
    t13_h1: "He looks like his father.",
    t13_h2: "Use 'after' with 'take'.",
    t13_q: "He takes ___ his father.",
    t13_qa: "after", t13_qb: "up", t13_qc: "off", t13_qd: "on",
    t13_sent: "We ran ___ of milk this morning.",
    t13_qa2: "out", t13_qb2: "in", t13_qc2: "off", t13_qd2: "on",

    t14_title: "Final Match 4",
    t14_text: "Final phrasal review.",
    t14_inst: "Match the pairs:",
    t14_h1: "Verb + Particle to Meaning.",
    t14_h2: "Check common uses.",
    t14_q: "Which is correct?",
    t14_qa: "Look up -> search in book", t14_qb: "Look up -> see sky", t14_qc: "Look up -> find keys", t14_qd: "Look up -> go fast",
    t14_l1: "Look up", t14_r1: "Search info",
    t14_l2: "Give back", t14_r2: "Return",
    t14_l3: "Go on", t14_r3: "Continue",

    t15_title: "Phrasal Review",
    t15_text: "Final review of Grade 7 phrasal verbs.",
    t15_inst: "Pick the best phrasal verb:",
    t15_h1: "Think about the meaning.",
    t15_h2: "Last phrasal question!",
    t15_q: "Which means 'recover'?",
    t15_qa: "get over", t15_qb: "get on", t15_qc: "get up", t15_qd: "get off",
    t15_sent: "They had to ___ the match due to rain.",
    t15_qa2: "call off", t15_qb2: "take off", t15_qc2: "put off", t15_qd2: "bring off",
  },
};

export const PHRASAL_VERBS_PARADISE_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "split", color: "#F59E0B" },
    interactive: { type: "word-order", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", words: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5", "t1_w6", "t1_w7", "t1_w8"], correctOrder: [0,1,2,3,4,5,6,7] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "wait", color: "#F59E0B" },
    interactive: { type: "match-pairs", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }] },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "three", color: "#F59E0B" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "t3_sent", choices: ["t3_qa2", "t3_qb2", "t3_qc2", "t3_qd2"], correctIndex: 0 },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "find", color: "#F59E0B" },
    interactive: { type: "highlight-text", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", tokens: ["t4_tk1", "t4_tk2", "t4_tk3", "t4_tk4", "t4_tk5", "t4_tk6", "t4_tk7", "t4_tk8", "t4_tk9"], correctIndices: [2, 3, 4] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "build", color: "#F59E0B" },
    interactive: { type: "sentence-build", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", fragments: ["t5_f1", "t5_f2", "t5_f3", "t5_f4"] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "sort", color: "#F59E0B" },
    interactive: { type: "drag-to-bucket", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", buckets: [{ id: "b1", label: "t6_bl1" }, { id: "b2", label: "t6_bl2" }], items: [{ text: "t6_i1", bucketId: "b1" }, { text: "t6_i2", bucketId: "b2" }, { text: "t6_i3", bucketId: "b1" }, { text: "t6_i4", bucketId: "b2" }] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "take", color: "#F59E0B" },
    interactive: { type: "word-order", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", words: ["t7_w1", "t7_w2", "t7_w3", "t7_w4", "t7_w5", "t7_w6", "t7_w7", "t7_w8"], correctOrder: [0,1,2,3,4,5,6,7] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "match", color: "#F59E0B" },
    interactive: { type: "match-pairs", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", pairs: [{ left: "t8_l1", right: "t8_r1" }, { left: "t8_l2", right: "t8_r2" }, { left: "t8_l3", right: "t8_r3" }] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "word-display", word: "choice", color: "#F59E0B" },
    interactive: { type: "gap-fill", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", sentence: "t9_sent", choices: ["t9_qa2", "t9_qb2", "t9_qc2", "t9_qd2"], correctIndex: 0 },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "word-display", word: "find", color: "#F59E0B" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1", "t10_tk2", "t10_tk3", "t10_tk4", "t10_tk5", "t10_tk6", "t10_tk7", "t10_tk8"], correctIndices: [3, 4] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "word-display", word: "build", color: "#F59E0B" },
    interactive: { type: "sentence-build", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", fragments: ["t11_f1", "t11_f2", "t11_f3", "t11_f4"] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "word-display", word: "type", color: "#F59E0B" },
    interactive: { type: "drag-to-bucket", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", buckets: [{ id: "b1", label: "t12_bl1" }, { id: "b2", label: "t12_bl2" }], items: [{ text: "t12_i1", bucketId: "b1" }, { text: "t12_i2", bucketId: "b2" }, { text: "t12_i3", bucketId: "b1" }, { text: "t12_i4", bucketId: "b2" }] },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "word-display", word: "gap-fill", color: "#F59E0B" },
    interactive: { type: "gap-fill", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", sentence: "t13_sent", choices: ["t13_qa2", "t13_qb2", "t13_qc2", "t13_qd2"], correctIndex: 0 },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "word-display", word: "match", color: "#F59E0B" },
    interactive: { type: "match-pairs", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", pairs: [{ left: "t14_l1", right: "t14_r1" }, { left: "t14_l2", right: "t14_r2" }, { left: "t14_l3", right: "t14_r3" }] },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "word-display", word: "review", color: "#F59E0B" },
    interactive: { type: "gap-fill", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", sentence: "t15_sent", choices: ["t15_qa2", "t15_qb2", "t15_qc2", "t15_qd2"], correctIndex: 0 },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" },
    difficulty: "hard"
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// i7 — RELATIVE_CLAUSES
// ═══════════════════════════════════════════════════════════════════════════

export const RELATIVE_CLAUSES_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Relative Clauses",
    t1_title: "Defining Clauses: WHO",
    t1_text: "Use 'who' for people. Example: 'The man who lives next door is nice.'",
    t1_inst: "Order the words for a defining clause:",
    t1_h1: "Start with 'The girl'.",
    t1_h2: "Use 'who won' to describe her.",
    t1_q: "Which is correct?",
    t1_qa: "The boy who is tall.", t1_qb: "The boy which is tall.", t1_qc: "The boy whose is tall.", t1_qd: "The boy whom tall.",
    t1_w1: "The", t1_w2: "girl", t1_w3: "who", t1_w4: "won", t1_w5: "the", t1_w6: "race", t1_w7: "is", t1_w8: "happy.",

    t2_title: "Defining Clauses: WHICH",
    t2_text: "Use 'which' for things and animals. Example: 'The car which is red is mine.'",
    t2_inst: "Match the noun to its relative description:",
    t2_h1: "People -> who, Things -> which.",
    t2_h2: "Book -> which, Teacher -> who.",
    t2_q: "Which for a cat?",
    t2_qa: "which", t2_qb: "who", t2_qc: "whom", t2_qd: "whose",
    t2_l1: "The book", t2_r1: "which I read",
    t2_l2: "The man", t2_r2: "who I met",
    t2_l3: "The house", t2_r3: "which we saw",

    t3_title: "Defining Clauses: THAT",
    t3_text: "You can use 'that' for both people and things in defining clauses.",
    t3_inst: "Choose for the blank:",
    t3_h1: "It refers to the movie.",
    t3_h2: "Use 'that' or 'which'.",
    t3_q: "The movie ___ I saw was great.",
    t3_qa: "that", t3_qb: "who", t3_qc: "whom", t3_qd: "whose",
    t3_sent: "The cake ___ she made was delicious.",
    t3_qa2: "that", t3_qb2: "who", t3_qc2: "whom", t3_qd2: "where",

    t4_title: "Relative Clause Highlight",
    t4_text: "Identifying the clause within a larger sentence.",
    t4_inst: "Highlight the relative clause:",
    t4_h1: "Look for 'who is wearing a hat'.",
    t4_h2: "It starts with 'who'.",
    t4_q: "What is the clause?",
    t4_qa: "who is wearing a hat", t4_qb: "the man", t4_qc: "is my uncle", t4_qd: "wearing a hat",
    t4_tk1: "The", t4_tk2: "man", t4_tk3: "who", t4_tk4: "is", t4_tk5: "wearing", t4_tk6: "a", t4_tk7: "hat", t4_tk8: "is", t4_tk9: "my", t4_tk10: "uncle.",

    t5_title: "Relative Build",
    t5_text: "Build a sentence with 'whose' for possession.",
    t5_inst: "Build a 'whose' sentence:",
    t5_h1: "Start with 'The boy'.",
    t5_h2: "Use 'whose dog' to show possession.",
    t5_q: "Which shows possession?",
    t5_qa: "whose", t5_qb: "who's", t5_qc: "who", t5_qd: "whom",
    t5_f1: "The boy", t5_f2: "whose dog", t5_f3: "was lost", t5_f4: "is sad.",

    t6_title: "Clause Sorter",
    t6_text: "Group by WHO vs WHICH.",
    t6_inst: "Sort by Relative Pronoun:",
    t6_h1: "Person or Thing?",
    t6_h2: "Check the noun before the pronoun.",
    t6_q: "Which needs 'which'?",
    t6_qa: "Table", t6_qb: "Woman", t6_qc: "Boy", t6_qd: "Doctor",
    t6_bl1: "WHO (People)", t6_bl2: "WHICH (Things)",
    t6_i1: "The doctor", t6_i2: "The car",
    t6_i3: "The teacher", t6_i4: "The book",

    t7_title: "Defining Clauses: WHERE",
    t7_text: "Use 'where' for places. Example: 'The city where I live.'",
    t7_inst: "Order for a place description:",
    t7_h1: "Start with 'This is'.",
    t7_h2: "Use 'where I was born' at the end.",
    t7_q: "Relative for a house?",
    t7_qa: "where", t7_qb: "who", t7_qc: "which", t7_qd: "that",
    t7_w1: "This", t7_w2: "is", t7_w3: "the", t7_w4: "town", t7_w5: "where", t7_w6: "I", t7_w7: "was", t7_w8: "born.",

    t8_title: "Pronoun Match 2",
    t8_text: "Match the pronoun to its usage.",
    t8_inst: "Match Pronoun to Category:",
    t8_h1: "Whose -> Possession.",
    t8_h2: "When -> Time.",
    t8_q: "Which is for time?",
    t8_qa: "when", t8_qb: "where", t8_qc: "who", t8_qd: "whose",
    t8_l1: "Possession", t8_r1: "whose",
    t8_l2: "Time", t8_r2: "when",
    t8_l3: "Place", t8_r3: "where",

    t9_title: "Relative Choice 2",
    t9_text: "Choosing between who, which, and whose.",
    t9_inst: "Choose for the blank:",
    t9_h1: "The phone belongs to the girl.",
    t9_h2: "Use 'whose'.",
    t9_q: "The girl ___ phone is ringing.",
    t9_qa: "whose", t9_qb: "who", t9_qc: "which", t9_qd: "that",
    t9_sent: "That is the house ___ my friend lives.",
    t9_qa2: "where", t9_qb2: "who", t9_qc2: "which", t9_qd2: "whose",

    t10_title: "Punctuation Highlight 2",
    t10_text: "Non-defining clauses need commas.",
    t10_inst: "Highlight the commas around the clause:",
    t10_h1: "Look for the extra information.",
    t10_h2: "It is between two commas.",
    t10_q: "Which needs commas?",
    t10_qa: "My mom, who is 40, is nice.", t10_qb: "The man who is tall.", t10_qc: "The cat which is black.", t10_qd: "That book that I like.",
    t10_tk1: "My", t10_tk2: "brother,", t10_tk3: "who", t10_tk4: "is", t10_tk5: "ten,", t10_tk6: "loves", t10_tk7: "to", t10_tk8: "play", t10_tk9: "chess.",

    t11_title: "Non-Defining Build",
    t11_text: "Build a sentence with extra info.",
    t11_inst: "Build a 'comma' sentence:",
    t11_h1: "Start with 'Paris,'.",
    t11_h2: "Use 'which is beautiful,'.",
    t11_q: "Which has extra info?",
    t11_qa: "Paris, which is old, is nice.", t11_qb: "The city which is old.", t11_qc: "A city which is old.", t11_qd: "Paris is old.",
    t11_f1: "Paris,", t11_f2: "which is beautiful,", t11_f3: "is", t11_f4: "in France.",

    t12_title: "Sorter 5",
    t12_text: "Sort by Defining vs Non-Defining.",
    t12_inst: "Sort by Clause Type:",
    t12_h1: "Necessary info or extra info?",
    t12_h2: "Non-defining has commas.",
    t12_q: "Which has commas?",
    t12_qa: "Non-Defining", t12_qb: "Defining", t12_qc: "Both", t12_qd: "Neither",
    t12_bl1: "Defining (Essential)", t12_bl2: "Non-Defining (Extra)",
    t12_i1: "The man who lives here", t12_i2: "Tom, who lives here,",
    t12_i3: "The book that I read", t12_i4: "The Bible, which I read,",

    t13_title: "Relative Gap-Fill 3",
    t13_text: "Fill in the missing relative pronoun.",
    t13_inst: "Choose for the time:",
    t13_h1: "It refers to the year.",
    t13_h2: "Use 'when'.",
    t13_q: "2020 was the year ___...",
    t13_qa: "when", t13_qb: "where", t13_qc: "who", t13_qd: "which",
    t13_sent: "That was the day ___ I met him.",
    t13_qa2: "when", t13_qb2: "where", t13_qc2: "who", t13_qd2: "whose",

    t14_title: "Final Match 5",
    t14_text: "Final relative clause review.",
    t14_inst: "Match the pairs:",
    t14_h1: "Relative pronoun to its use.",
    t14_h2: "Who -> People, Which -> Things.",
    t14_q: "Which is correct?",
    t14_qa: "Who -> Person", t14_qb: "Which -> Person", t14_qc: "Where -> Time", t14_qd: "When -> Place",
    t14_l1: "Who", t14_r1: "People",
    t14_l2: "Which", t14_r2: "Things",
    t14_l3: "Where", t14_r3: "Places",

    t15_title: "Relative Review",
    t15_text: "Final review of Grade 7 relative clauses.",
    t15_inst: "Pick the best relative pronoun:",
    t15_h1: "Think about the noun 'dog'.",
    t15_h2: "Last relative clause question!",
    t15_q: "The dog ___ belongs to me...",
    t15_qa: "which", t15_qb: "who", t15_qc: "where", t15_qd: "when",
    t15_sent: "The man ___ car was stolen called the police.",
    t15_qa2: "whose", t15_qb2: "who", t15_qc2: "which", t15_qd2: "that",
  },
};

export const RELATIVE_CLAUSES_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "who", color: "#6366F1" },
    interactive: { type: "word-order", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", words: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5", "t1_w6", "t1_w7", "t1_w8"], correctOrder: [0,1,2,3,4,5,6,7] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "which", color: "#6366F1" },
    interactive: { type: "match-pairs", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }] },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "that", color: "#6366F1" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "t3_sent", choices: ["t3_qa2", "t3_qb2", "t3_qc2", "t3_qd2"], correctIndex: 0 },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "highlight", color: "#6366F1" },
    interactive: { type: "highlight-text", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", tokens: ["t4_tk1", "t4_tk2", "t4_tk3", "t4_tk4", "t4_tk5", "t4_tk6", "t4_tk7", "t4_tk8", "t4_tk9", "t4_tk10"], correctIndices: [2, 3, 4, 5, 6] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "build", color: "#6366F1" },
    interactive: { type: "sentence-build", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", fragments: ["t5_f1", "t5_f2", "t5_f3", "t5_f4"] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "sort", color: "#6366F1" },
    interactive: { type: "drag-to-bucket", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", buckets: [{ id: "b1", label: "t6_bl1" }, { id: "b2", label: "t6_bl2" }], items: [{ text: "t6_i1", bucketId: "b1" }, { text: "t6_i2", bucketId: "b2" }, { text: "t6_i3", bucketId: "b1" }, { text: "t6_i4", bucketId: "b2" }] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "where", color: "#6366F1" },
    interactive: { type: "word-order", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", words: ["t7_w1", "t7_w2", "t7_w3", "t7_w4", "t7_w5", "t7_w6", "t7_w7", "t7_w8"], correctOrder: [0,1,2,3,4,5,6,7] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "match", color: "#6366F1" },
    interactive: { type: "match-pairs", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", pairs: [{ left: "t8_l1", right: "t8_r1" }, { left: "t8_l2", right: "t8_r2" }, { left: "t8_l3", right: "t8_r3" }] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "word-display", word: "whose", color: "#6366F1" },
    interactive: { type: "gap-fill", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", sentence: "t9_sent", choices: ["t9_qa2", "t9_qb2", "t9_qc2", "t9_qd2"], correctIndex: 0 },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "word-display", word: "comma", color: "#6366F1" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1", "t10_tk2", "t10_tk3", "t10_tk4", "t10_tk5", "t10_tk6", "t10_tk7", "t10_tk8", "t10_tk9"], correctIndices: [1, 4] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "word-display", word: "build", color: "#6366F1" },
    interactive: { type: "sentence-build", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", fragments: ["t11_f1", "t11_f2", "t11_f3", "t11_f4"] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "word-display", word: "type", color: "#6366F1" },
    interactive: { type: "drag-to-bucket", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", buckets: [{ id: "b1", label: "t12_bl1" }, { id: "b2", label: "t12_bl2" }], items: [{ text: "t12_i1", bucketId: "b1" }, { text: "t12_i2", bucketId: "b2" }, { text: "t12_i3", bucketId: "b1" }, { text: "t12_i4", bucketId: "b2" }] },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "word-display", word: "when", color: "#6366F1" },
    interactive: { type: "gap-fill", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", sentence: "t13_sent", choices: ["t13_qa2", "t13_qb2", "t13_qc2", "t13_qd2"], correctIndex: 0 },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "word-display", word: "match", color: "#6366F1" },
    interactive: { type: "match-pairs", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", pairs: [{ left: "t14_l1", right: "t14_r1" }, { left: "t14_l2", right: "t14_r2" }, { left: "t14_l3", right: "t14_r3" }] },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "word-display", word: "review", color: "#6366F1" },
    interactive: { type: "gap-fill", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", sentence: "t15_sent", choices: ["t15_qa2", "t15_qb2", "t15_qc2", "t15_qd2"], correctIndex: 0 },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" },
    difficulty: "hard"
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// i8 — MIXED_GRAMMAR
// ═══════════════════════════════════════════════════════════════════════════

export const MIXED_GRAMMAR_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Grammar Garden",
    t1_title: "Mixed Modals",
    t1_text: "Choosing between can, must, should, might.",
    t1_inst: "Order the words for a modal rule:",
    t1_h1: "Start with 'We'.",
    t1_h2: "Use 'must follow' for a rule.",
    t1_q: "Which modal is for a rule?",
    t1_qa: "must", t1_qb: "can", t1_qc: "might", t1_qd: "should",
    t1_w1: "We", t1_w2: "must", t1_w3: "follow", t1_w4: "the", t1_w5: "safety", t1_w6: "rules", t1_w7: "now.",

    t2_title: "Mixed Tenses",
    t2_text: "Combining present, past, and future.",
    t2_inst: "Match the time to the correct verb:",
    t2_h1: "Check the helper word (will, was, is).",
    t2_h2: "Now vs. Tomorrow vs. Yesterday.",
    t2_q: "Which is future?",
    t2_qa: "will go", t2_qb: "went", t2_qc: "goes", t2_qd: "is going",
    t2_l1: "Yesterday", t2_r1: "I went",
    t2_l2: "Now", t2_r2: "I am going",
    t2_l3: "Tomorrow", t2_r3: "I will go",

    t3_title: "Mixed Conditionals",
    t3_text: "Review of 1st and 2nd conditionals.",
    t3_inst: "Choose the correct verb form:",
    t3_h1: "If + past -> would + verb.",
    t3_h2: "Use 'would' for the dream.",
    t3_q: "If I ___ rich, I would travel.",
    t3_qa: "were", t3_qb: "am", t3_qc: "will be", t3_qd: "was",
    t3_sent: "If it ___ tomorrow, we will stay home.",
    t3_qa2: "rains", t3_qb2: "rained", t3_qc2: "will rain", t3_qd2: "raining",

    t4_title: "Punctuation Review",
    t4_text: "Commas, quotes, and full stops.",
    t4_inst: "Highlight the comma:",
    t4_h1: "Look for the mark after 'Yes'.",
    t4_h2: "It separates the answer.",
    t4_q: "Where does the comma go?",
    t4_qa: "after 'Yes'", t4_qb: "after 'am'", t4_qc: "at the end", t4_qd: "none",
    t4_tk1: "Yes,", t4_tk2: "I", t4_tk3: "am", t4_tk4: "ready", t4_tk5: "to", t4_tk6: "go", t4_tk7: "with", t4_tk8: "you", t4_tk9: "now.",

    t5_title: "Mixed Build",
    t5_text: "Build a complex mixed grammar sentence.",
    t5_inst: "Build a 'because' sentence:",
    t5_h1: "Start with 'I am tired'.",
    t5_h2: "Use 'because I played'.",
    t5_q: "Which shows reason?",
    t5_qa: "because", t5_qb: "and", t5_qc: "but", t5_qd: "so",
    t5_f1: "I am tired", t5_f2: "because I", t5_f3: "played soccer", t5_f4: "all day.",

    t6_title: "Mixed Sorter",
    t6_text: "Group by Part of Speech.",
    t6_inst: "Sort by Category:",
    t6_h1: "Is it a thing or an action?",
    t6_h2: "Noun vs Verb.",
    t6_q: "Which is a noun?",
    t6_qa: "Cat", t6_qb: "Run", t6_qc: "Big", t6_qd: "Quickly",
    t6_bl1: "Noun", t6_bl2: "Verb",
    t6_i1: "Dog", t6_i2: "Jump",
    t6_i3: "Apple", t6_i4: "Eat",

    t7_title: "Mixed Word Order",
    t7_text: "Fixing mixed up sentences.",
    t7_inst: "Order the mixed sentence:",
    t7_h1: "Start with 'The'.",
    t7_h2: "Subject is 'teacher', verb is 'explained'.",
    t7_q: "Correct word order?",
    t7_qa: "The teacher explained it.", t7_qb: "Explained the teacher it.", t7_qc: "The explained teacher it.", t7_qd: "It the teacher explained.",
    t7_w1: "The", t7_w2: "teacher", t7_w3: "explained", t7_w4: "the", t7_w5: "new", t7_w6: "lesson", t7_w7: "to", t7_w8: "us.",

    t8_title: "Mixed Match",
    t8_text: "Match the antonym pairs.",
    t8_inst: "Match the opposites:",
    t8_h1: "Find the word with opposite meaning.",
    t8_h2: "Big vs Small, Hot vs Cold.",
    t8_q: "Opposite of 'fast'?",
    t8_qa: "slow", t8_qb: "quick", t8_qc: "hot", t8_qd: "big",
    t8_l1: "Fast", t8_r1: "Slow",
    t8_l2: "Hot", t8_r2: "Cold",
    t8_l3: "Up", t8_r3: "Down",

    t9_title: "Mixed Choice",
    t9_text: "Choosing the correct word for the context.",
    t9_inst: "Choose for the blank:",
    t9_h1: "It refers to a completed action.",
    t9_h2: "Use 'have finished'.",
    t9_q: "I ___ my homework.",
    t9_qa: "have finished", t9_qb: "finishing", t9_qc: "was finish", t9_qd: "finishes",
    t9_sent: "They ___ to the cinema last night.",
    t9_qa2: "went", t9_qb2: "go", t9_qc2: "gone", t9_qd2: "goes",

    t10_title: "Mixed Highlight",
    t10_text: "Finding relative pronouns in context.",
    t10_inst: "Highlight the relative pronoun:",
    t10_h1: "Look for 'which'.",
    t10_h2: "It refers to the car.",
    t10_q: "What is the relative pronoun?",
    t10_qa: "which", t10_qb: "car", t10_qc: "red", t10_qd: "is",
    t10_tk1: "The", t10_tk2: "red", t10_tk3: "car", t10_tk4: "which", t10_tk5: "I", t10_tk6: "bought", t10_tk7: "is", t10_tk8: "very", t10_tk9: "fast.",

    t11_title: "Mixed Build 2",
    t11_text: "Build a reported speech sentence.",
    t11_inst: "Build a 'said' sentence:",
    t11_h1: "Start with 'He said'.",
    t11_h2: "Use 'he was happy'.",
    t11_q: "Which is reported speech?",
    t11_qa: "He said he was happy.", t11_qb: "I am happy.", t11_qc: "Be happy!", t11_qd: "He is happy.",
    t11_f1: "He said", t11_f2: "that he", t11_f3: "was really", t11_f4: "happy today.",

    t12_title: "Mixed Sorter 2",
    t12_text: "Sort by Countable vs Uncountable nouns.",
    t12_inst: "Sort by Noun Type:",
    t12_h1: "Can you count it (1, 2, 3)?",
    t12_h2: "Water is uncountable.",
    t12_q: "Which is uncountable?",
    t12_qa: "Water", t12_qb: "Apple", t12_qc: "Dog", t12_qd: "Book",
    t12_bl1: "Countable", t12_bl2: "Uncountable",
    t12_i1: "Apple", t12_i2: "Water",
    t12_i3: "Chair", t12_i4: "Milk",

    t13_title: "Mixed Gap-Fill 2",
    t13_text: "Fill in the missing causative part.",
    t13_inst: "Choose for the blank:",
    t13_h1: "He had his hair ___.",
    t13_h2: "Use the past participle.",
    t13_q: "I had it ___.",
    t13_qa: "done", t13_qb: "do", t13_qc: "did", t13_qd: "doing",
    t13_sent: "She had her car ___ last week.",
    t13_qa2: "fixed", t13_qb2: "fix", t13_qc2: "fixing", t13_qd2: "fixes",

    t14_title: "Final Mixed Match",
    t14_text: "Final mixed matching practice.",
    t14_inst: "Match the pairs:",
    t14_h1: "Grammar part to Example.",
    t14_h2: "Adverb -> Quickly.",
    t14_q: "Which is correct?",
    t14_qa: "Adverb -> Quickly", t14_qb: "Noun -> Run", t14_qc: "Verb -> Apple", t14_qd: "Adjective -> Today",
    t14_l1: "Adverb", t14_r1: "Quickly",
    t14_l2: "Noun", t14_r2: "Person",
    t14_l3: "Verb", t14_r3: "Action",

    t15_title: "Mixed Review",
    t15_text: "Final review of Grade 7 mixed grammar.",
    t15_inst: "Pick the best answer:",
    t15_h1: "Think about the whole sentence.",
    t15_h2: "Last mixed grammar question!",
    t15_q: "If I ___ you, I'd go.",
    t15_qa: "were", t15_qb: "am", t15_qc: "was", t15_qd: "is",
    t15_sent: "She ___ reading books since morning.",
    t15_qa2: "has been", t15_qb2: "was", t15_qc2: "is", t15_qd2: "were",
  },
};

export const MIXED_GRAMMAR_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "modal", color: "#EC4899" },
    interactive: { type: "word-order", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", words: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5", "t1_w6", "t1_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "tense", color: "#EC4899" },
    interactive: { type: "match-pairs", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }] },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "if", color: "#EC4899" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "t3_sent", choices: ["t3_qa2", "t3_qb2", "t3_qc2", "t3_qd2"], correctIndex: 0 },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "punct.", color: "#EC4899" },
    interactive: { type: "highlight-text", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", tokens: ["t4_tk1", "t4_tk2", "t4_tk3", "t4_tk4", "t4_tk5", "t4_tk6", "t4_tk7", "t4_tk8", "t4_tk9"], correctIndices: [0] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "build", color: "#EC4899" },
    interactive: { type: "sentence-build", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", fragments: ["t5_f1", "t5_f2", "t5_f3", "t5_f4"] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "sort", color: "#EC4899" },
    interactive: { type: "drag-to-bucket", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", buckets: [{ id: "b1", label: "t6_bl1" }, { id: "b2", label: "t6_bl2" }], items: [{ text: "t6_i1", bucketId: "b1" }, { text: "t6_i2", bucketId: "b2" }, { text: "t6_i3", bucketId: "b1" }, { text: "t6_i4", bucketId: "b2" }] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "order", color: "#EC4899" },
    interactive: { type: "word-order", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", words: ["t7_w1", "t7_w2", "t7_w3", "t7_w4", "t7_w5", "t7_w6", "t7_w7", "t7_w8"], correctOrder: [0,1,2,3,4,5,6,7] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "match", color: "#EC4899" },
    interactive: { type: "match-pairs", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", pairs: [{ left: "t8_l1", right: "t8_r1" }, { left: "t8_l2", right: "t8_r2" }, { left: "t8_l3", right: "t8_r3" }] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "word-display", word: "choice", color: "#EC4899" },
    interactive: { type: "gap-fill", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", sentence: "t9_sent", choices: ["t9_qa2", "t9_qb2", "t9_qc2", "t9_qd2"], correctIndex: 0 },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "word-display", word: "which", color: "#EC4899" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1", "t10_tk2", "t10_tk3", "t10_tk4", "t10_tk5", "t10_tk6", "t10_tk7", "t10_tk8", "t10_tk9"], correctIndices: [3] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "word-display", word: "build", color: "#EC4899" },
    interactive: { type: "sentence-build", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", fragments: ["t11_f1", "t11_f2", "t11_f3", "t11_f4"] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "word-display", word: "type", color: "#EC4899" },
    interactive: { type: "drag-to-bucket", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", buckets: [{ id: "b1", label: "t12_bl1" }, { id: "b2", label: "t12_bl2" }], items: [{ text: "t12_i1", bucketId: "b1" }, { text: "t12_i2", bucketId: "b2" }, { text: "t12_i3", bucketId: "b1" }, { text: "t12_i4", bucketId: "b2" }] },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "word-display", word: "fixed", color: "#EC4899" },
    interactive: { type: "gap-fill", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", sentence: "t13_sent", choices: ["t13_qa2", "t13_qb2", "t13_qc2", "t13_qd2"], correctIndex: 0 },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "word-display", word: "match", color: "#EC4899" },
    interactive: { type: "match-pairs", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", pairs: [{ left: "t14_l1", right: "t14_r1" }, { left: "t14_l2", right: "t14_r2" }, { left: "t14_l3", right: "t14_r3" }] },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "word-display", word: "review", color: "#EC4899" },
    interactive: { type: "gap-fill", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", sentence: "t15_sent", choices: ["t15_qa2", "t15_qb2", "t15_qc2", "t15_qd2"], correctIndex: 0 },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" },
    difficulty: "hard"
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// i9 — BIGTEST7
// ═══════════════════════════════════════════════════════════════════════════

export const BIGTEST7_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Big Test 7",
    t1_title: "Reported Mix",
    t1_text: "Final test of reported speech.",
    t1_inst: "Order the words for a reported statement:",
    t1_h1: "Start with 'He said'.",
    t1_h2: "Use 'he had finished'.",
    t1_q: "Reported of 'I'm here'?",
    t1_qa: "He said he was there.", t1_qb: "He said I am here.", t1_qc: "He said he is here.", t1_qd: "He says he is there.",
    t1_w1: "He", t1_w2: "said", t1_w3: "that", t1_w4: "he", t1_w5: "had", t1_w6: "finished", t1_w7: "it", t1_w8: "already.",

    t2_title: "Conditional Mix",
    t2_text: "Final test of all conditionals.",
    t2_inst: "Match if-clause to result:",
    t2_h1: "Check the tense match.",
    t2_h2: "If I were -> I would.",
    t2_q: "If I ___ you, I'd go.",
    t2_qa: "were", t2_qb: "am", t2_qc: "was", t2_qd: "will be",
    t2_l1: "If I win", t2_r1: "I will go",
    t2_l2: "If I won", t2_r2: "I would go",
    t2_l3: "If I'd won", t2_r3: "I'd have gone",

    t3_title: "Causative Mix",
    t3_text: "Final test of causatives.",
    t3_inst: "Choose the correct causative form:",
    t3_h1: "Have + object + participle.",
    t3_h2: "The action is done by someone else.",
    t3_q: "I had my car ___.",
    t3_qa: "repaired", t3_qb: "repair", t3_qc: "repairing", t3_qd: "repairs",
    t3_sent: "She got her house ___ yesterday.",
    t3_qa2: "painted", t3_qb2: "paint", t3_qc2: "painting", t3_qd2: "paints",

    t4_title: "Inversion Mix",
    t4_text: "Final test of formal inversion.",
    t4_inst: "Highlight the auxiliary verb:",
    t4_h1: "Look for 'have'.",
    t4_h2: "It comes before the subject 'I'.",
    t4_q: "Which is inverted?",
    t4_qa: "Never have I seen...", t4_qb: "I have never seen...", t4_qc: "Never I have seen...", t4_qd: "I never saw...",
    t4_tk1: "Never", t4_tk2: "have", t4_tk3: "I", t4_tk4: "felt", t4_tk5: "so", t4_tk6: "happy", t4_tk7: "in", t4_tk8: "all", t4_tk9: "my", t4_tk10: "life.",

    t5_title: "Relative Mix",
    t5_text: "Final test of relative clauses.",
    t5_inst: "Build a 'who' sentence:",
    t5_h1: "Start with 'The man'.",
    t5_h2: "Use 'who is tall'.",
    t5_q: "Which for people?",
    t5_qa: "who", t5_qb: "which", t5_qc: "where", t5_qd: "when",
    t5_f1: "The man", t5_f2: "who lives", t5_f3: "next door", t5_f4: "is friendly.",

    t6_title: "Grammar Sorter",
    t6_text: "Group by Grammar Category.",
    t6_inst: "Sort by Category:",
    t6_h1: "Is it a clause or a verb form?",
    t6_h2: "Check the grammar rule.",
    t6_q: "Which is a relative pronoun?",
    t6_qa: "which", t6_qb: "had", t6_qc: "never", t6_qd: "told",
    t6_bl1: "Conditionals", t6_bl2: "Relatives",
    t6_i1: "If I win", t6_i2: "The man who",
    t6_i3: "Unless he goes", t6_i4: "The car that",

    t7_title: "Mixed Word Order",
    t7_text: "Final mixed up sentence review.",
    t7_inst: "Order the formal sentence:",
    t7_h1: "Start with 'Only then'.",
    t7_h2: "Use inversion 'did he realize'.",
    t7_q: "Correct inversion order?",
    t7_qa: "Only then did he know.", t7_qb: "Only then he did know.", t7_qc: "Only he then did know.", t7_qd: "He only then did know.",
    t7_w1: "Only", t7_w2: "then", t7_w3: "did", t7_w4: "he", t7_w5: "realize", t7_w6: "the", t7_w7: "entire", t7_w8: "truth.",

    t8_title: "Advanced Match",
    t8_text: "Final advanced matching practice.",
    t8_inst: "Match the pairs:",
    t8_h1: "Grammar term to its Example.",
    t8_h2: "Inversion -> Never have I.",
    t8_q: "Which is correct?",
    t8_qa: "Causative -> I had it done", t8_qb: "Relative -> If I win", t8_qc: "Modal -> The man who", t8_qd: "Inversion -> I am ready",
    t8_l1: "Causative", t8_r1: "I had it done",
    t8_l2: "Inversion", t8_r2: "Never have I",
    t8_l3: "Relative", t8_r3: "The car that",

    t9_title: "Mixed Choice 2",
    t9_text: "Final mixed grammar choice.",
    t9_inst: "Choose for the blank:",
    t9_h1: "It refers to an imaginary past.",
    t9_h2: "Use 'would have been'.",
    t9_q: "If I ___ there, I'd have seen it.",
    t9_qa: "had been", t9_qb: "were", t9_qc: "am", t9_qd: "have been",
    t9_sent: "I ___ looking forward to it.",
    t9_qa2: "am", t9_qb2: "have", t9_qc2: "do", t9_qd2: "was",

    t10_title: "Mixed Highlight 2",
    t10_text: "Final mixed grammar highlight.",
    t10_inst: "Highlight the reported verb:",
    t10_h1: "Look for 'suggested'.",
    t10_h2: "It introduces the reported idea.",
    t10_q: "Which is reporting?",
    t10_qa: "suggested", t10_qb: "we", t10_qc: "leave", t10_qd: "immediately",
    t10_tk1: "The", t10_tk2: "manager", t10_tk3: "suggested", t10_tk4: "that", t10_tk5: "we", t10_tk6: "leave", t10_tk7: "the", t10_tk8: "building", t10_tk9: "now.",

    t11_title: "Complex Build",
    t11_text: "Build a complex multi-clause sentence.",
    t11_inst: "Build an 'if' reported sentence:",
    t11_h1: "Start with 'He asked'.",
    t11_h2: "Use 'if I would help'.",
    t11_q: "Correct reporting?",
    t11_qa: "He asked if I'd help.", t11_qb: "He asked will I help.", t11_qc: "He said if I'd help.", t11_qd: "He asked I help.",
    t11_f1: "He asked", t11_f2: "if I", t11_f3: "would be able", t11_f4: "to help him.",

    t12_title: "Final Sorter Mix",
    t12_text: "Final category sort review.",
    t12_inst: "Sort by Verb Pattern:",
    t12_h1: "-ing or to- infinitive?",
    t12_h2: "Enjoy vs Decide.",
    t12_q: "Which takes -ing?",
    t12_qa: "Enjoy", t12_qb: "Decide", t12_qc: "Want", t12_qd: "Hope",
    t12_bl1: "-ING", t12_bl2: "TO + Verb",
    t12_i1: "Enjoy", t12_i2: "Decide",
    t12_i3: "Mind", t12_i4: "Want",

    t13_title: "Mixed Gap-Fill 3",
    t13_text: "Final mixed gap-fill review.",
    t13_inst: "Choose the best form:",
    t13_h1: "Check the whole sentence.",
    t13_h2: "Last mixed grammar question!",
    t13_q: "No sooner ___ he arrived than he left.",
    t13_qa: "had", t13_qb: "has", t13_qc: "did", t13_qd: "was",
    t13_sent: "If I ___ you, I'd stay here.",
    t13_qa2: "were", t13_qb2: "am", t13_qc2: "was", t13_qd2: "be",

    t14_title: "Final Advanced Match 2",
    t14_text: "Final advanced grammar matching.",
    t14_inst: "Match the pairs:",
    t14_h1: "Grammar rule to its Example.",
    t14_h2: "Last matching task!",
    t14_q: "Which is correct?",
    t14_qa: "3rd Cond. -> If I'd known", t14_qb: "Zero Cond. -> If I'd known", t14_qc: "Relative -> I had it fixed", t14_qd: "Causative -> The man who",
    t14_l1: "3rd Cond.", t14_r1: "If I had known",
    t14_l2: "Gerund", t14_r2: "Eating is fun",
    t14_l3: "WH- Question", t14_r3: "Where is he?",

    t15_title: "Year 7 Review",
    t15_text: "Complete review of Grade 7 English.",
    t15_inst: "Pick the best final answer:",
    t15_h1: "Think about everything we learned.",
    t15_h2: "Last question of the test!",
    t15_q: "Which is most formal?",
    t15_qa: "Under no circumstances...", t15_qb: "Never ever...", t15_qc: "I don't think...", t15_qd: "Please don't...",
    t15_sent: "By the time he arrived, the match ___ started.",
    t15_qa2: "had", t15_qb2: "has", t15_qc2: "was", t15_qd2: "is",
  },
};

export const BIGTEST7_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "report", color: "#6B7280" },
    interactive: { type: "word-order", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", words: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5", "t1_w6", "t1_w7", "t1_w8"], correctOrder: [0,1,2,3,4,5,6,7] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "if", color: "#6B7280" },
    interactive: { type: "match-pairs", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }] },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "have", color: "#6B7280" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "t3_sent", choices: ["t3_qa2", "t3_qb2", "t3_qc2", "t3_qd2"], correctIndex: 0 },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "never", color: "#6B7280" },
    interactive: { type: "highlight-text", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", tokens: ["t4_tk1", "t4_tk2", "t4_tk3", "t4_tk4", "t4_tk5", "t4_tk6", "t4_tk7", "t4_tk8", "t4_tk9", "t4_tk10"], correctIndices: [1] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "who", color: "#6B7280" },
    interactive: { type: "sentence-build", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", fragments: ["t5_f1", "t5_f2", "t5_f3", "t5_f4"] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "type", color: "#6B7280" },
    interactive: { type: "drag-to-bucket", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", buckets: [{ id: "b1", label: "t6_bl1" }, { id: "b2", label: "t6_bl2" }], items: [{ text: "t6_i1", bucketId: "b1" }, { text: "t6_i2", bucketId: "b2" }, { text: "t6_i3", bucketId: "b1" }, { text: "t6_i4", bucketId: "b2" }] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "only", color: "#6B7280" },
    interactive: { type: "word-order", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", words: ["t7_w1", "t7_w2", "t7_w3", "t7_w4", "t7_w5", "t7_w6", "t7_w7", "t7_w8"], correctOrder: [0,1,2,3,4,5,6,7] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "match", color: "#6B7280" },
    interactive: { type: "match-pairs", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", pairs: [{ left: "t8_l1", right: "t8_r1" }, { left: "t8_l2", right: "t8_r2" }, { left: "t8_l3", right: "t8_r3" }] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "word-display", word: "choice", color: "#6B7280" },
    interactive: { type: "gap-fill", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", sentence: "t9_sent", choices: ["t9_qa2", "t9_qb2", "t9_qc2", "t9_qd2"], correctIndex: 0 },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "word-display", word: "find", color: "#6B7280" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1", "t10_tk2", "t10_tk3", "t10_tk4", "t10_tk5", "t10_tk6", "t10_tk7", "t10_tk8", "t10_tk9"], correctIndices: [2] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "word-display", word: "build", color: "#6B7280" },
    interactive: { type: "sentence-build", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", fragments: ["t11_f1", "t11_f2", "t11_f3", "t11_f4"] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "word-display", word: "type", color: "#6B7280" },
    interactive: { type: "drag-to-bucket", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", buckets: [{ id: "b1", label: "t12_bl1" }, { id: "b2", label: "t12_bl2" }], items: [{ text: "t12_i1", bucketId: "b1" }, { text: "t12_i2", bucketId: "b2" }, { text: "t12_i3", bucketId: "b1" }, { text: "t12_i4", bucketId: "b2" }] },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "word-display", word: "were", color: "#6B7280" },
    interactive: { type: "gap-fill", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", sentence: "t13_sent", choices: ["t13_qa2", "t13_qb2", "t13_qc2", "t13_qd2"], correctIndex: 0 },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "word-display", word: "match", color: "#6B7280" },
    interactive: { type: "match-pairs", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", pairs: [{ left: "t14_l1", right: "t14_r1" }, { left: "t14_l2", right: "t14_r2" }, { left: "t14_l3", right: "t14_r3" }] },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "word-display", word: "final", color: "#6B7280" },
    interactive: { type: "gap-fill", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", sentence: "t15_sent", choices: ["t15_qa2", "t15_qb2", "t15_qc2", "t15_qd2"], correctIndex: 0 },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" },
    difficulty: "hard"
  },
];
