'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, Check } from 'lucide-react';

interface Subtopic {
  id: string;
  icon: string;
  label: string;
}

interface Topic {
  id: string;
  name: string;
  description: string;
  gradient: string; // Tailwind gradient class
  headerGradient: string; // Header gradient
  subtopics: Subtopic[];
}

interface Grade1TopicSelectorProps {
  selectedTopics: string[];
  onTopicToggle: (topicId: string) => void;
  onStartTest: () => void;
  loading?: boolean;
  lang?: 'hu' | 'de' | 'en' | 'ro';
}

const TOPICS: Record<'hu' | 'de' | 'en' | 'ro', Topic[]> = {
  hu: [
    {
      id: 'topic1',
      name: 'Számok és Számrendszer',
      description: '6 komponens a számelemekhez',
      gradient: 'from-blue-50/30 to-blue-100/20',
      headerGradient: 'from-purple-500 to-blue-500',
      subtopics: [
        { id: 'g1-grid-count', icon: '🔢', label: 'Számok felismerése' },
        { id: 'g1-dot-recognizer', icon: '⚫', label: 'Pontok (Dots)' },
        { id: 'g1-dice-recognizer', icon: '🎲', label: 'Dobókocka (Dice)' },
        { id: 'g1-finger-counter', icon: '🖐️', label: 'Ujjak (Fingers)' },
        { id: 'g1-object-counter', icon: '🎈', label: 'Képek (Objects)' },
        { id: 'g1-number-line', icon: '📏', label: 'Számegyenes' },
      ],
    },
    {
      id: 'topic2',
      name: 'Számkör Bővítése (11–20)',
      description: '2 komponens a szélesebb számsávhoz',
      gradient: 'from-blue-50/30 to-blue-100/20',
      headerGradient: 'from-purple-500 to-blue-500',
      subtopics: [
        { id: 'g1-place-value', icon: '1️⃣', label: 'Zehner + Einer' },
        { id: 'g1-numbers-11-20', icon: '2️⃣', label: 'Számok 11–20' },
      ],
    },
    {
      id: 'topic3',
      name: 'Alapműveletek (Rechnen)',
      description: '3 komponens az összeadáshoz és kivonáshoz',
      gradient: 'from-amber-50/30 to-orange-100/20',
      headerGradient: 'from-amber-400 to-orange-500',
      subtopics: [
        { id: 'g1-addition-pics', icon: '➕', label: 'Összeadás képekkel' },
        { id: 'g1-subtraction-pics', icon: '➖', label: 'Kivonás képekkel' },
        { id: 'g1-complement', icon: '❓', label: 'Egészítsd ki!' },
      ],
    },
    {
      id: 'topic4',
      name: 'Számstruktúra (Zahlverstehen)',
      description: '5 komponens a szám belső szerkezetéhez',
      gradient: 'from-amber-50/30 to-orange-100/20',
      headerGradient: 'from-amber-400 to-orange-500',
      subtopics: [
        { id: 'g1-decomposition', icon: '🔀', label: 'Szám szétbontása' },
        { id: 'g1-number-completion', icon: '🎯', label: 'Szám kitöltése' },
        { id: 'g1-doubling', icon: '2️⃣➕2️⃣', label: 'Duplázás' },
        { id: 'g1-halving', icon: '➗', label: 'Felezés' },
        { id: 'g1-sequence', icon: '➡️', label: 'Számsor' },
      ],
    },
    {
      id: 'topic5',
      name: 'Geometria & Térbeli Tájékozódás',
      description: '3 komponens a formákhoz és irányokhoz',
      gradient: 'from-cyan-50/30 to-teal-100/20',
      headerGradient: 'from-cyan-400 to-teal-500',
      subtopics: [
        { id: 'g1-shape-recognition', icon: '⬭', label: 'Formák felismerése' },
        { id: 'g1-spatial-directions', icon: '🧭', label: '8 irány' },
        { id: 'g1-pattern-completion', icon: '🎨', label: 'Minták folytatása' },
      ],
    },
    {
      id: 'topic6',
      name: 'Mérések & Mennyiségek',
      description: '3 komponens az összehasonlításhoz',
      gradient: 'from-cyan-50/30 to-teal-100/20',
      headerGradient: 'from-cyan-400 to-teal-500',
      subtopics: [
        { id: 'g1-length-comparison', icon: '📏', label: 'Hossz összehasonlítása' },
        { id: 'g1-weight-comparison', icon: '⚖️', label: 'Súly összehasonlítása' },
        { id: 'g1-volume-comparison', icon: '🥤', label: 'Térfogat összehasonlítása' },
      ],
    },
    {
      id: 'topic7',
      name: 'Mindennapi Matematika',
      description: '4 komponens az alkalmazott matematikához',
      gradient: 'from-pink-50/30 to-rose-100/20',
      headerGradient: 'from-pink-500 to-rose-500',
      subtopics: [
        { id: 'g1-time-of-day', icon: '⏰', label: 'Napszakok & Óra' },
        { id: 'g1-coins', icon: '🪙', label: 'Érmék felismerése' },
        { id: 'g1-simple-shopping', icon: '🛒', label: 'Egyszerű vásárlás' },
        { id: 'g1-word-problem', icon: '📖', label: 'Szöveges feladat' },
      ],
    },
  ],
  de: [
    {
      id: 'topic1',
      name: 'Zahlen & Zahlensystem',
      description: '6 Komponenten für Zahlengründlagen',
      gradient: 'from-blue-50/30 to-blue-100/20',
      headerGradient: 'from-purple-500 to-blue-500',
      subtopics: [
        { id: 'g1-grid-count', icon: '🔢', label: 'Zahlen erkennen' },
        { id: 'g1-dot-recognizer', icon: '⚫', label: 'Punkte (Dots)' },
        { id: 'g1-dice-recognizer', icon: '🎲', label: 'Würfel (Dice)' },
        { id: 'g1-finger-counter', icon: '🖐️', label: 'Finger zählen' },
        { id: 'g1-object-counter', icon: '🎈', label: 'Objekte zählen' },
        { id: 'g1-number-line', icon: '📏', label: 'Zahlenstrahl' },
      ],
    },
    {
      id: 'topic2',
      name: 'Zahlenraum Erweiterung (11–20)',
      description: '2 Komponenten für größere Zahlen',
      gradient: 'from-blue-50/30 to-blue-100/20',
      headerGradient: 'from-purple-500 to-blue-500',
      subtopics: [
        { id: 'g1-place-value', icon: '1️⃣', label: 'Zehner + Einer' },
        { id: 'g1-numbers-11-20', icon: '2️⃣', label: 'Zahlen 11–20' },
      ],
    },
    {
      id: 'topic3',
      name: 'Grundoperationen (Rechnen)',
      description: '3 Komponenten für Addition und Subtraktion',
      gradient: 'from-amber-50/30 to-orange-100/20',
      headerGradient: 'from-amber-400 to-orange-500',
      subtopics: [
        { id: 'g1-addition-pics', icon: '➕', label: 'Addition mit Bildern' },
        { id: 'g1-subtraction-pics', icon: '➖', label: 'Subtraktion mit Bildern' },
        { id: 'g1-complement', icon: '❓', label: 'Ergänzen!' },
      ],
    },
    {
      id: 'topic4',
      name: 'Zahlverständnis (Zahlverstehen)',
      description: '5 Komponenten für Zahlzerlegung',
      gradient: 'from-amber-50/30 to-orange-100/20',
      headerGradient: 'from-amber-400 to-orange-500',
      subtopics: [
        { id: 'g1-decomposition', icon: '🔀', label: 'Zahlzerlegung' },
        { id: 'g1-number-completion', icon: '🎯', label: 'Zahlen ergänzen' },
        { id: 'g1-doubling', icon: '2️⃣➕2️⃣', label: 'Verdoppeln' },
        { id: 'g1-halving', icon: '➗', label: 'Halbieren' },
        { id: 'g1-sequence', icon: '➡️', label: 'Zahlenfolge' },
      ],
    },
    {
      id: 'topic5',
      name: 'Geometrie & Räumlich',
      description: '3 Komponenten für Formen und Richtungen',
      gradient: 'from-cyan-50/30 to-teal-100/20',
      headerGradient: 'from-cyan-400 to-teal-500',
      subtopics: [
        { id: 'g1-shape-recognition', icon: '⬭', label: 'Formen erkennen' },
        { id: 'g1-spatial-directions', icon: '🧭', label: '8 Richtungen' },
        { id: 'g1-pattern-completion', icon: '🎨', label: 'Muster fortsetzen' },
      ],
    },
    {
      id: 'topic6',
      name: 'Messungen & Mengen',
      description: '3 Komponenten für Vergleiche',
      gradient: 'from-cyan-50/30 to-teal-100/20',
      headerGradient: 'from-cyan-400 to-teal-500',
      subtopics: [
        { id: 'g1-length-comparison', icon: '📏', label: 'Länge vergleichen' },
        { id: 'g1-weight-comparison', icon: '⚖️', label: 'Gewicht vergleichen' },
        { id: 'g1-volume-comparison', icon: '🥤', label: 'Menge vergleichen' },
      ],
    },
    {
      id: 'topic7',
      name: 'Alltägliche Mathematik',
      description: '4 Komponenten für Anwendungen',
      gradient: 'from-pink-50/30 to-rose-100/20',
      headerGradient: 'from-pink-500 to-rose-500',
      subtopics: [
        { id: 'g1-time-of-day', icon: '⏰', label: 'Tageszeiten & Uhr' },
        { id: 'g1-coins', icon: '🪙', label: 'Münzen erkennen' },
        { id: 'g1-simple-shopping', icon: '🛒', label: 'Einfaches Einkaufen' },
        { id: 'g1-word-problem', icon: '📖', label: 'Textaufgabe' },
      ],
    },
  ],
  en: [
    {
      id: 'topic1',
      name: 'Numbers & Number System',
      description: '6 components for number basics',
      gradient: 'from-blue-50/30 to-blue-100/20',
      headerGradient: 'from-purple-500 to-blue-500',
      subtopics: [
        { id: 'g1-grid-count', icon: '🔢', label: 'Number recognition' },
        { id: 'g1-dot-recognizer', icon: '⚫', label: 'Dots' },
        { id: 'g1-dice-recognizer', icon: '🎲', label: 'Dice' },
        { id: 'g1-finger-counter', icon: '🖐️', label: 'Finger counting' },
        { id: 'g1-object-counter', icon: '🎈', label: 'Objects' },
        { id: 'g1-number-line', icon: '📏', label: 'Number line' },
      ],
    },
    {
      id: 'topic2',
      name: 'Extended Range (11–20)',
      description: '2 components for larger numbers',
      gradient: 'from-blue-50/30 to-blue-100/20',
      headerGradient: 'from-purple-500 to-blue-500',
      subtopics: [
        { id: 'g1-place-value', icon: '1️⃣', label: 'Tens & Ones' },
        { id: 'g1-numbers-11-20', icon: '2️⃣', label: 'Numbers 11–20' },
      ],
    },
    {
      id: 'topic3',
      name: 'Basic Operations',
      description: '3 components for addition & subtraction',
      gradient: 'from-amber-50/30 to-orange-100/20',
      headerGradient: 'from-amber-400 to-orange-500',
      subtopics: [
        { id: 'g1-addition-pics', icon: '➕', label: 'Addition with pictures' },
        { id: 'g1-subtraction-pics', icon: '➖', label: 'Subtraction with pictures' },
        { id: 'g1-complement', icon: '❓', label: 'Complete the number' },
      ],
    },
    {
      id: 'topic4',
      name: 'Number Decomposition',
      description: '5 components for number structure',
      gradient: 'from-amber-50/30 to-orange-100/20',
      headerGradient: 'from-amber-400 to-orange-500',
      subtopics: [
        { id: 'g1-decomposition', icon: '🔀', label: 'Decompose number' },
        { id: 'g1-number-completion', icon: '🎯', label: 'Complete number' },
        { id: 'g1-doubling', icon: '2️⃣➕2️⃣', label: 'Double' },
        { id: 'g1-halving', icon: '➗', label: 'Halve' },
        { id: 'g1-sequence', icon: '➡️', label: 'Sequence' },
      ],
    },
    {
      id: 'topic5',
      name: 'Geometry & Spatial',
      description: '3 components for shapes & directions',
      gradient: 'from-cyan-50/30 to-teal-100/20',
      headerGradient: 'from-cyan-400 to-teal-500',
      subtopics: [
        { id: 'g1-shape-recognition', icon: '⬭', label: 'Shape recognition' },
        { id: 'g1-spatial-directions', icon: '🧭', label: '8 directions' },
        { id: 'g1-pattern-completion', icon: '🎨', label: 'Pattern completion' },
      ],
    },
    {
      id: 'topic6',
      name: 'Measurements & Quantities',
      description: '3 components for comparisons',
      gradient: 'from-cyan-50/30 to-teal-100/20',
      headerGradient: 'from-cyan-400 to-teal-500',
      subtopics: [
        { id: 'g1-length-comparison', icon: '📏', label: 'Length comparison' },
        { id: 'g1-weight-comparison', icon: '⚖️', label: 'Weight comparison' },
        { id: 'g1-volume-comparison', icon: '🥤', label: 'Volume comparison' },
      ],
    },
    {
      id: 'topic7',
      name: 'Everyday Mathematics',
      description: '4 components for real-world apps',
      gradient: 'from-pink-50/30 to-rose-100/20',
      headerGradient: 'from-pink-500 to-rose-500',
      subtopics: [
        { id: 'g1-time-of-day', icon: '⏰', label: 'Time of day' },
        { id: 'g1-coins', icon: '🪙', label: 'Coin recognition' },
        { id: 'g1-simple-shopping', icon: '🛒', label: 'Simple shopping' },
        { id: 'g1-word-problem', icon: '📖', label: 'Word problem' },
      ],
    },
  ],
  ro: [
    {
      id: 'topic1',
      name: 'Numere & Sistem Numeric',
      description: '6 componente pentru bazele numerelor',
      gradient: 'from-blue-50/30 to-blue-100/20',
      headerGradient: 'from-purple-500 to-blue-500',
      subtopics: [
        { id: 'g1-grid-count', icon: '🔢', label: 'Recunoaștere numere' },
        { id: 'g1-dot-recognizer', icon: '⚫', label: 'Puncte' },
        { id: 'g1-dice-recognizer', icon: '🎲', label: 'Zar' },
        { id: 'g1-finger-counter', icon: '🖐️', label: 'Numărare degete' },
        { id: 'g1-object-counter', icon: '🎈', label: 'Obiecte' },
        { id: 'g1-number-line', icon: '📏', label: 'Linia numerelor' },
      ],
    },
    {
      id: 'topic2',
      name: 'Interval Extins (11–20)',
      description: '2 componente pentru numere mai mari',
      gradient: 'from-blue-50/30 to-blue-100/20',
      headerGradient: 'from-purple-500 to-blue-500',
      subtopics: [
        { id: 'g1-place-value', icon: '1️⃣', label: 'Zeci & Unități' },
        { id: 'g1-numbers-11-20', icon: '2️⃣', label: 'Numere 11–20' },
      ],
    },
    {
      id: 'topic3',
      name: 'Operații de Bază',
      description: '3 componente pentru adunare și scădere',
      gradient: 'from-amber-50/30 to-orange-100/20',
      headerGradient: 'from-amber-400 to-orange-500',
      subtopics: [
        { id: 'g1-addition-pics', icon: '➕', label: 'Adunare cu imagini' },
        { id: 'g1-subtraction-pics', icon: '➖', label: 'Scădere cu imagini' },
        { id: 'g1-complement', icon: '❓', label: 'Completează!' },
      ],
    },
    {
      id: 'topic4',
      name: 'Descompunere Numeric',
      description: '5 componente pentru structura numărului',
      gradient: 'from-amber-50/30 to-orange-100/20',
      headerGradient: 'from-amber-400 to-orange-500',
      subtopics: [
        { id: 'g1-decomposition', icon: '🔀', label: 'Descompune număr' },
        { id: 'g1-number-completion', icon: '🎯', label: 'Completează număr' },
        { id: 'g1-doubling', icon: '2️⃣➕2️⃣', label: 'Dublare' },
        { id: 'g1-halving', icon: '➗', label: 'Înjumătățire' },
        { id: 'g1-sequence', icon: '➡️', label: 'Secvență' },
      ],
    },
    {
      id: 'topic5',
      name: 'Geometrie & Spațiu',
      description: '3 componente pentru forme și direcții',
      gradient: 'from-cyan-50/30 to-teal-100/20',
      headerGradient: 'from-cyan-400 to-teal-500',
      subtopics: [
        { id: 'g1-shape-recognition', icon: '⬭', label: 'Recunoaștere forme' },
        { id: 'g1-spatial-directions', icon: '🧭', label: '8 direcții' },
        { id: 'g1-pattern-completion', icon: '🎨', label: 'Completare modele' },
      ],
    },
    {
      id: 'topic6',
      name: 'Măsurări & Cantități',
      description: '3 componente pentru comparații',
      gradient: 'from-cyan-50/30 to-teal-100/20',
      headerGradient: 'from-cyan-400 to-teal-500',
      subtopics: [
        { id: 'g1-length-comparison', icon: '📏', label: 'Comparație lungime' },
        { id: 'g1-weight-comparison', icon: '⚖️', label: 'Comparație greutate' },
        { id: 'g1-volume-comparison', icon: '🥤', label: 'Comparație volum' },
      ],
    },
    {
      id: 'topic7',
      name: 'Matematică Zilnică',
      description: '4 componente pentru aplicații reale',
      gradient: 'from-pink-50/30 to-rose-100/20',
      headerGradient: 'from-pink-500 to-rose-500',
      subtopics: [
        { id: 'g1-time-of-day', icon: '⏰', label: 'Ora & Zile' },
        { id: 'g1-coins', icon: '🪙', label: 'Recunoaștere monede' },
        { id: 'g1-simple-shopping', icon: '🛒', label: 'Cumpărături simple' },
        { id: 'g1-word-problem', icon: '📖', label: 'Problemă cu text' },
      ],
    },
  ],
};

export default function Grade1TopicSelector({
  selectedTopics,
  onTopicToggle,
  onStartTest,
  loading = false,
  lang = 'hu',
}: Grade1TopicSelectorProps) {
  const topics = TOPICS[lang];
  const [expandedTopics, setExpandedTopics] = useState<Set<string>>(new Set(['topic1']));

  const toggleTopic = (topicId: string) => {
    const newExpanded = new Set(expandedTopics);
    if (newExpanded.has(topicId)) {
      newExpanded.delete(topicId);
    } else {
      newExpanded.add(topicId);
    }
    setExpandedTopics(newExpanded);
  };

  const selectedCount = selectedTopics.length;
  const totalCount = useMemo(() => topics.reduce((sum, t) => sum + t.subtopics.length, 0), [topics]);

  const topicLabels = {
    hu: { title: '1. Osztály Matematika', selected: 'téma kiválasztva', select: 'Válassz legalább egy témát', start: 'Teszt indítása' },
    de: { title: 'Klasse 1 Mathematik', selected: 'Themen ausgewählt', select: 'Wähle mindestens ein Thema aus', start: 'Test starten' },
    en: { title: 'Grade 1 Math', selected: 'topics selected', select: 'Select at least one topic', start: 'Start test' },
    ro: { title: 'Matematică Clasa 1', selected: 'subiecte selectate', select: 'Selectează cel puțin un subiect', start: 'Pornire test' },
  };

  const labels = topicLabels[lang];

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8">
      {/* Header */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-black text-white mb-2">{labels.title}</h2>
        <p className="text-white/60 text-sm">
          {selectedCount}/{totalCount} {labels.selected}
        </p>
      </motion.div>

      {/* Topics */}
      <div className="space-y-4">
        {topics.map((topic, topicIdx) => (
          <motion.div
            key={topic.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: topicIdx * 0.05 }}
          >
            {/* Topic Header */}
            <button
              onClick={() => toggleTopic(topic.id)}
              className={`w-full text-left p-4 rounded-2xl transition-all border-0 flex items-center justify-between group`}
              style={{
                background: expandedTopics.has(topic.id)
                  ? `linear-gradient(135deg, ${topic.headerGradient})`
                  : 'rgba(255,255,255,0.05)',
              }}
            >
              <div className="flex-1">
                <h3 className={`font-black text-lg transition-colors ${
                  expandedTopics.has(topic.id) ? 'text-white' : 'text-white/70'
                }`}>
                  {topic.name}
                </h3>
                <p className={`text-sm transition-colors ${
                  expandedTopics.has(topic.id) ? 'text-white/80' : 'text-white/50'
                }`}>
                  {topic.description}
                </p>
              </div>
              <motion.div
                animate={{ rotate: expandedTopics.has(topic.id) ? 180 : 0 }}
                className={expandedTopics.has(topic.id) ? 'text-white' : 'text-white/50'}
              >
                <ChevronUp size={24} />
              </motion.div>
            </button>

            {/* Topic Subtopics */}
            <AnimatePresence>
              {expandedTopics.has(topic.id) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className={`bg-gradient-to-br ${topic.gradient} rounded-2xl p-4 border border-white/5 mt-2`}
                >
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {topic.subtopics.map((subtopic) => {
                      const isSelected = selectedTopics.includes(subtopic.id);
                      return (
                        <motion.button
                          key={subtopic.id}
                          onClick={() => onTopicToggle(subtopic.id)}
                          className={`p-3 rounded-xl transition-all text-center flex flex-col items-center gap-2 font-semibold text-sm ${
                            isSelected
                              ? 'bg-white text-slate-900 shadow-lg'
                              : 'bg-white/20 text-white hover:bg-white/30'
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span className="text-2xl">{subtopic.icon}</span>
                          <span className="leading-tight">{subtopic.label}</span>
                          {isSelected && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute -bottom-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"
                            >
                              <Check size={14} className="text-white" />
                            </motion.div>
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Start Button */}
      <motion.button
        onClick={onStartTest}
        disabled={selectedCount === 0 || loading}
        className={`w-full mt-8 py-4 px-6 rounded-2xl font-bold text-lg transition-all ${
          selectedCount === 0
            ? 'bg-white/10 text-white/40 cursor-not-allowed'
            : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:shadow-xl active:scale-95'
        }`}
        whileHover={selectedCount > 0 ? { scale: 1.02 } : undefined}
        whileTap={selectedCount > 0 ? { scale: 0.98 } : undefined}
      >
        {loading
          ? `⏳ ${lang === 'hu' ? 'Teszt generálása...' : lang === 'de' ? 'Test wird generiert...' : lang === 'ro' ? 'Se generează testul...' : 'Generating test...'}`
          : `🚀 ${labels.start} (${selectedCount})`}
      </motion.button>

      {/* Info */}
      <p className="text-center text-white/40 text-xs mt-4">{labels.select}</p>
    </div>
  );
}
