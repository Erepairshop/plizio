'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check, Sparkles } from 'lucide-react';

interface Subtopic {
  id: string;
  visualType: string;
  label: string;
}

interface Phase {
  id: string;
  name: string;
  description: string;
  gradient: string;
  bgFrom: string;
  bgTo: string;
  subtopics: Subtopic[];
}

interface Grade1TopicSelectorProps {
  selectedTopics: string[];
  onTopicToggle: (topicId: string) => void;
  onStartTest: () => void;
  loading?: boolean;
  lang?: 'hu' | 'de' | 'en' | 'ro';
}

const PHASES: Record<'hu' | 'de' | 'en' | 'ro', Phase[]> = {
  hu: [
    {
      id: 'phase1',
      name: 'Fázis 1: Számok & Felismerés',
      description: '6 modern komponens a szám-alapokhoz',
      gradient: 'from-purple-50 to-blue-50',
      bgFrom: 'from-purple-400',
      bgTo: 'to-blue-500',
      subtopics: [
        { id: 'g1-dots', visualType: '🔢', label: 'Pontok felismerése' },
        { id: 'g1-dice', visualType: '🎲', label: 'Dobókocka számai' },
        { id: 'g1-fingers', visualType: '🖐️', label: 'Ujjak számlálása' },
        { id: 'g1-compare', visualType: '↔️', label: 'Számok összehasonlítása' },
        { id: 'g1-predecessor', visualType: '⬅️', label: 'Előző szám' },
        { id: 'g1-successor', visualType: '➡️', label: 'Következő szám' },
      ],
    },
    {
      id: 'phase2',
      name: 'Fázis 2: Műveletek képekkel',
      description: '4 komponens az összeadáshoz és kivonáshoz',
      gradient: 'from-amber-50 to-orange-50',
      bgFrom: 'from-amber-400',
      bgTo: 'to-orange-500',
      subtopics: [
        { id: 'g1-addition-pics', visualType: '➕', label: 'Összeadás képekkel' },
        { id: 'g1-subtraction-pics', visualType: '➖', label: 'Kivonás képekkel' },
        { id: 'g1-decompose', visualType: '🔀', label: 'Szám szétbontása' },
        { id: 'g1-completion', visualType: '❓', label: 'Számok kitöltése' },
      ],
    },
    {
      id: 'phase3',
      name: 'Fázis 3: Geometria & Térbeli',
      description: '3 komponens formák és irányokhoz',
      gradient: 'from-emerald-50 to-cyan-50',
      bgFrom: 'from-emerald-400',
      bgTo: 'to-cyan-500',
      subtopics: [
        { id: 'g1-shapes', visualType: '⬤', label: 'Formák felismerése' },
        { id: 'g1-directions', visualType: '🧭', label: '8 irány' },
        { id: 'g1-patterns', visualType: '🎨', label: 'Minták folytatása' },
      ],
    },
    {
      id: 'phase4',
      name: 'Fázis 4: Mérések & Mindennapi',
      description: '5 komponens méréshez és szöveges feladatokhoz',
      gradient: 'from-rose-50 to-pink-50',
      bgFrom: 'from-rose-400',
      bgTo: 'to-pink-500',
      subtopics: [
        { id: 'g1-length', visualType: '📏', label: 'Hossz összehasonlítása' },
        { id: 'g1-weight', visualType: '⚖️', label: 'Súly összehasonlítása' },
        { id: 'g1-volume', visualType: '🥤', label: 'Mennyiség összehasonlítása' },
        { id: 'g1-shopping', visualType: '🛒', label: 'Bevásárlás' },
        { id: 'g1-wordproblem', visualType: '📖', label: 'Szöveges feladat' },
      ],
    },
  ],
  de: [
    {
      id: 'phase1',
      name: 'Phase 1: Zahlen & Erkennung',
      description: '6 moderne Komponenten für Zahlengründlagen',
      gradient: 'from-purple-50 to-blue-50',
      bgFrom: 'from-purple-400',
      bgTo: 'to-blue-500',
      subtopics: [
        { id: 'g1-dots', visualType: '🔢', label: 'Punkte erkennen' },
        { id: 'g1-dice', visualType: '🎲', label: 'Würfelzahlen' },
        { id: 'g1-fingers', visualType: '🖐️', label: 'Finger zählen' },
        { id: 'g1-compare', visualType: '↔️', label: 'Zahlen vergleichen' },
        { id: 'g1-predecessor', visualType: '⬅️', label: 'Vorgängerzahl' },
        { id: 'g1-successor', visualType: '➡️', label: 'Nachfolgerzahl' },
      ],
    },
    {
      id: 'phase2',
      name: 'Phase 2: Operationen mit Bildern',
      description: '4 Komponenten für Addition und Subtraktion',
      gradient: 'from-amber-50 to-orange-50',
      bgFrom: 'from-amber-400',
      bgTo: 'to-orange-500',
      subtopics: [
        { id: 'g1-addition-pics', visualType: '➕', label: 'Addition mit Bildern' },
        { id: 'g1-subtraction-pics', visualType: '➖', label: 'Subtraktion mit Bildern' },
        { id: 'g1-decompose', visualType: '🔀', label: 'Zahlzerlegung' },
        { id: 'g1-completion', visualType: '❓', label: 'Zahlen ergänzen' },
      ],
    },
    {
      id: 'phase3',
      name: 'Phase 3: Geometrie & Räumlich',
      description: '3 Komponenten für Formen und Richtungen',
      gradient: 'from-emerald-50 to-cyan-50',
      bgFrom: 'from-emerald-400',
      bgTo: 'to-cyan-500',
      subtopics: [
        { id: 'g1-shapes', visualType: '⬤', label: 'Formen erkennen' },
        { id: 'g1-directions', visualType: '🧭', label: '8 Richtungen' },
        { id: 'g1-patterns', visualType: '🎨', label: 'Muster fortsetzen' },
      ],
    },
    {
      id: 'phase4',
      name: 'Phase 4: Messungen & Alltag',
      description: '5 Komponenten für Messungen und Textaufgaben',
      gradient: 'from-rose-50 to-pink-50',
      bgFrom: 'from-rose-400',
      bgTo: 'to-pink-500',
      subtopics: [
        { id: 'g1-length', visualType: '📏', label: 'Länge vergleichen' },
        { id: 'g1-weight', visualType: '⚖️', label: 'Gewicht vergleichen' },
        { id: 'g1-volume', visualType: '🥤', label: 'Menge vergleichen' },
        { id: 'g1-shopping', visualType: '🛒', label: 'Einkaufen' },
        { id: 'g1-wordproblem', visualType: '📖', label: 'Textaufgabe' },
      ],
    },
  ],
  en: [
    {
      id: 'phase1',
      name: 'Phase 1: Numbers & Recognition',
      description: '6 modern components for number basics',
      gradient: 'from-purple-50 to-blue-50',
      bgFrom: 'from-purple-400',
      bgTo: 'to-blue-500',
      subtopics: [
        { id: 'g1-dots', visualType: '🔢', label: 'Dot recognition' },
        { id: 'g1-dice', visualType: '🎲', label: 'Dice numbers' },
        { id: 'g1-fingers', visualType: '🖐️', label: 'Finger counting' },
        { id: 'g1-compare', visualType: '↔️', label: 'Compare numbers' },
        { id: 'g1-predecessor', visualType: '⬅️', label: 'Previous number' },
        { id: 'g1-successor', visualType: '➡️', label: 'Next number' },
      ],
    },
    {
      id: 'phase2',
      name: 'Phase 2: Operations with Pictures',
      description: '4 components for addition and subtraction',
      gradient: 'from-amber-50 to-orange-50',
      bgFrom: 'from-amber-400',
      bgTo: 'to-orange-500',
      subtopics: [
        { id: 'g1-addition-pics', visualType: '➕', label: 'Addition with pictures' },
        { id: 'g1-subtraction-pics', visualType: '➖', label: 'Subtraction with pictures' },
        { id: 'g1-decompose', visualType: '🔀', label: 'Number decomposition' },
        { id: 'g1-completion', visualType: '❓', label: 'Complete the number' },
      ],
    },
    {
      id: 'phase3',
      name: 'Phase 3: Geometry & Spatial',
      description: '3 components for shapes and directions',
      gradient: 'from-emerald-50 to-cyan-50',
      bgFrom: 'from-emerald-400',
      bgTo: 'to-cyan-500',
      subtopics: [
        { id: 'g1-shapes', visualType: '⬤', label: 'Shape recognition' },
        { id: 'g1-directions', visualType: '🧭', label: '8 directions' },
        { id: 'g1-patterns', visualType: '🎨', label: 'Pattern completion' },
      ],
    },
    {
      id: 'phase4',
      name: 'Phase 4: Measurements & Everyday',
      description: '5 components for measurements and word problems',
      gradient: 'from-rose-50 to-pink-50',
      bgFrom: 'from-rose-400',
      bgTo: 'to-pink-500',
      subtopics: [
        { id: 'g1-length', visualType: '📏', label: 'Length comparison' },
        { id: 'g1-weight', visualType: '⚖️', label: 'Weight comparison' },
        { id: 'g1-volume', visualType: '🥤', label: 'Volume comparison' },
        { id: 'g1-shopping', visualType: '🛒', label: 'Shopping' },
        { id: 'g1-wordproblem', visualType: '📖', label: 'Word problem' },
      ],
    },
  ],
  ro: [
    {
      id: 'phase1',
      name: 'Faza 1: Numere & Recunoaștere',
      description: '6 componente moderne pentru bazele numerelor',
      gradient: 'from-purple-50 to-blue-50',
      bgFrom: 'from-purple-400',
      bgTo: 'to-blue-500',
      subtopics: [
        { id: 'g1-dots', visualType: '🔢', label: 'Recunoaștere puncte' },
        { id: 'g1-dice', visualType: '🎲', label: 'Numere zar' },
        { id: 'g1-fingers', visualType: '🖐️', label: 'Numărare degete' },
        { id: 'g1-compare', visualType: '↔️', label: 'Comparație numere' },
        { id: 'g1-predecessor', visualType: '⬅️', label: 'Numărul anterior' },
        { id: 'g1-successor', visualType: '➡️', label: 'Următorul număr' },
      ],
    },
    {
      id: 'phase2',
      name: 'Faza 2: Operații cu imagini',
      description: '4 componente pentru adunare și scădere',
      gradient: 'from-amber-50 to-orange-50',
      bgFrom: 'from-amber-400',
      bgTo: 'to-orange-500',
      subtopics: [
        { id: 'g1-addition-pics', visualType: '➕', label: 'Adunare cu imagini' },
        { id: 'g1-subtraction-pics', visualType: '➖', label: 'Scădere cu imagini' },
        { id: 'g1-decompose', visualType: '🔀', label: 'Descompunere număr' },
        { id: 'g1-completion', visualType: '❓', label: 'Completează numărul' },
      ],
    },
    {
      id: 'phase3',
      name: 'Faza 3: Geometrie & Spațial',
      description: '3 componente pentru forme și direcții',
      gradient: 'from-emerald-50 to-cyan-50',
      bgFrom: 'from-emerald-400',
      bgTo: 'to-cyan-500',
      subtopics: [
        { id: 'g1-shapes', visualType: '⬤', label: 'Recunoaștere forme' },
        { id: 'g1-directions', visualType: '🧭', label: '8 direcții' },
        { id: 'g1-patterns', visualType: '🎨', label: 'Completare modele' },
      ],
    },
    {
      id: 'phase4',
      name: 'Faza 4: Măsurări & Zilnic',
      description: '5 componente pentru măsurări și probleme text',
      gradient: 'from-rose-50 to-pink-50',
      bgFrom: 'from-rose-400',
      bgTo: 'to-pink-500',
      subtopics: [
        { id: 'g1-length', visualType: '📏', label: 'Comparație lungime' },
        { id: 'g1-weight', visualType: '⚖️', label: 'Comparație greutate' },
        { id: 'g1-volume', visualType: '🥤', label: 'Comparație volum' },
        { id: 'g1-shopping', visualType: '🛒', label: 'Cumpărături' },
        { id: 'g1-wordproblem', visualType: '📖', label: 'Problemă text' },
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
  const phases = PHASES[lang];
  const [expandedPhases, setExpandedPhases] = useState<Set<string>>(new Set(['phase1']));

  const togglePhase = (phaseId: string) => {
    const newExpanded = new Set(expandedPhases);
    if (newExpanded.has(phaseId)) {
      newExpanded.delete(phaseId);
    } else {
      newExpanded.add(phaseId);
    }
    setExpandedPhases(newExpanded);
  };

  const selectedCount = selectedTopics.length;
  const totalCount = useMemo(() => phases.reduce((sum, p) => sum + p.subtopics.length, 0), [phases]);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-black text-white mb-2 flex items-center justify-center gap-2">
          <Sparkles className="text-yellow-400" size={32} />
          {lang === 'hu' ? '1. Osztály Matematika' : lang === 'de' ? 'Klasse 1 Mathematik' : lang === 'ro' ? 'Matematică Clasa 1' : 'Grade 1 Math'}
        </h2>
        <p className="text-white/60 text-sm">
          {lang === 'hu'
            ? `${selectedCount}/${totalCount} téma kiválasztva`
            : lang === 'de'
            ? `${selectedCount}/${totalCount} Themen ausgewählt`
            : lang === 'ro'
            ? `${selectedCount}/${totalCount} subiecte selectate`
            : `${selectedCount}/${totalCount} topics selected`}
        </p>
      </motion.div>

      {/* Phases */}
      <div className="space-y-4">
        {phases.map((phase, phaseIdx) => (
          <motion.div
            key={phase.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: phaseIdx * 0.1 }}
          >
            {/* Phase Header */}
            <button
              onClick={() => togglePhase(phase.id)}
              className={`w-full text-left p-4 rounded-xl transition-all border-2 ${
                expandedPhases.has(phase.id)
                  ? `bg-gradient-to-r ${phase.bgFrom} ${phase.bgTo} border-white/20 text-white`
                  : 'bg-white/5 border-white/10 text-white/70 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{phase.name}</h3>
                  <p className="text-sm opacity-75">{phase.description}</p>
                </div>
                <ChevronDown
                  size={24}
                  className={`transition-transform ${expandedPhases.has(phase.id) ? 'rotate-180' : ''}`}
                />
              </div>
            </button>

            {/* Phase Subtopics */}
            <AnimatePresence>
              {expandedPhases.has(phase.id) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className={`bg-gradient-to-br ${phase.gradient} rounded-xl p-4 border border-white/10 mt-2`}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {phase.subtopics.map((subtopic) => {
                      const isSelected = selectedTopics.includes(subtopic.id);
                      return (
                        <motion.button
                          key={subtopic.id}
                          onClick={() => onTopicToggle(subtopic.id)}
                          className={`p-3 rounded-lg transition-all text-left flex items-center gap-3 ${
                            isSelected
                              ? 'bg-white/95 text-slate-900 shadow-lg'
                              : 'bg-white/20 text-white hover:bg-white/30'
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span className="text-xl">{subtopic.visualType}</span>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-sm leading-tight">{subtopic.label}</p>
                          </div>
                          {isSelected && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"
                            >
                              <Check size={16} className="text-white" />
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
        className={`w-full mt-8 py-4 px-6 rounded-xl font-bold text-lg transition-all ${
          selectedCount === 0
            ? 'bg-white/10 text-white/40 cursor-not-allowed'
            : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:shadow-xl active:scale-95'
        }`}
        whileHover={selectedCount > 0 ? { scale: 1.02 } : undefined}
        whileTap={selectedCount > 0 ? { scale: 0.98 } : undefined}
      >
        {loading
          ? lang === 'hu'
            ? '⏳ Teszt generálása...'
            : lang === 'de'
            ? '⏳ Test wird generiert...'
            : lang === 'ro'
            ? '⏳ Se generează testul...'
            : '⏳ Generating test...'
          : lang === 'hu'
          ? `🚀 Teszt indítása (${selectedCount} téma)`
          : lang === 'de'
          ? `🚀 Test starten (${selectedCount} Themen)`
          : lang === 'ro'
          ? `🚀 Pornire test (${selectedCount} subiecte)`
          : `🚀 Start test (${selectedCount} topics)`}
      </motion.button>

      {/* Info */}
      <p className="text-center text-white/40 text-xs mt-4">
        {lang === 'hu'
          ? 'Válassz legalább egy témát a teszt indításához'
          : lang === 'de'
          ? 'Wähle mindestens ein Thema aus, um den Test zu starten'
          : lang === 'ro'
          ? 'Selectează cel puțin un subiect pentru a începe testul'
          : 'Select at least one topic to start the test'}
      </p>
    </div>
  );
}
