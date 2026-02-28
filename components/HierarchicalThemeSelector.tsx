'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Eye } from 'lucide-react';

interface Subtopic {
  id: string;
  name: string;
  color: string;
  icon: string;
  taskFile: string;
  taskIds: string[];
}

interface Theme {
  id: string;
  name: string;
  color: string;
  icon: string;
  description: string;
  subtopics: Subtopic[];
}

interface HierarchicalThemeSelectorProps {
  themes: Theme[];
  selectedSubtopics: string[];
  onSubtopicToggle: (subtopicId: string) => void;
  onPreview: (subtopicId: string) => void;
  onStartTest: () => void;
  loading?: boolean;
}

export default function HierarchicalThemeSelector({
  themes,
  selectedSubtopics,
  onSubtopicToggle,
  onPreview,
  onStartTest,
  loading = false,
}: HierarchicalThemeSelectorProps) {
  const [expandedThemes, setExpandedThemes] = useState<Set<string>>(new Set());

  const toggleTheme = (themeId: string) => {
    const newExpanded = new Set(expandedThemes);
    if (newExpanded.has(themeId)) {
      newExpanded.delete(themeId);
    } else {
      newExpanded.add(themeId);
    }
    setExpandedThemes(newExpanded);
  };

  const totalSubtopics = themes.reduce((sum, theme) => sum + theme.subtopics.length, 0);

  return (
    <motion.div
      className="w-full max-w-2xl mx-auto flex flex-col gap-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Header */}
      <div className="text-center mb-2">
        <h2 className="text-2xl font-black text-white mb-2">Válassz Témákat!</h2>
        <p className="text-white/50 text-sm">Kombinálhatsz több al-témát egy teszthez</p>
      </div>

      {/* Themes List */}
      <div className="space-y-3">
        {themes.map((theme) => (
          <motion.div
            key={theme.id}
            className="rounded-2xl overflow-hidden border-2"
            style={{ borderColor: theme.color + '40' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Theme Header (Collapsible) */}
            <motion.button
              onClick={() => toggleTheme(theme.id)}
              className="w-full px-6 py-4 flex items-center gap-4 transition-all"
              style={{
                backgroundColor: theme.color + '15',
                borderBottom: expandedThemes.has(theme.id) ? `2px solid ${theme.color}` : 'none',
              }}
              whileHover={{ backgroundColor: theme.color + '25' }}
            >
              <span className="text-3xl">{theme.icon}</span>
              <div className="flex-1 text-left">
                <h3 className="font-black text-white text-lg">{theme.name}</h3>
                <p className="text-white/50 text-sm">{theme.description}</p>
              </div>
              <motion.div
                animate={{ rotate: expandedThemes.has(theme.id) ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown size={24} color={theme.color} />
              </motion.div>
            </motion.button>

            {/* Subtopics List */}
            <AnimatePresence>
              {expandedThemes.has(theme.id) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-4 space-y-3 bg-white/3">
                    {theme.subtopics.map((subtopic) => (
                      <motion.div
                        key={subtopic.id}
                        className="flex items-center gap-4 p-4 rounded-xl border-2 transition-all cursor-pointer"
                        style={{
                          borderColor: selectedSubtopics.includes(subtopic.id)
                            ? subtopic.color
                            : subtopic.color + '30',
                          backgroundColor: selectedSubtopics.includes(subtopic.id)
                            ? subtopic.color + '15'
                            : 'transparent',
                        }}
                        onClick={() => onSubtopicToggle(subtopic.id)}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        {/* Checkbox */}
                        <motion.div
                          className="w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0"
                          style={{
                            borderColor: subtopic.color,
                            backgroundColor: selectedSubtopics.includes(subtopic.id)
                              ? subtopic.color
                              : 'transparent',
                          }}
                          animate={{
                            scale: selectedSubtopics.includes(subtopic.id) ? 1.1 : 1,
                          }}
                        >
                          {selectedSubtopics.includes(subtopic.id) && (
                            <motion.span
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="text-white font-black text-sm"
                            >
                              ✓
                            </motion.span>
                          )}
                        </motion.div>

                        {/* Subtopic Icon & Name */}
                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{subtopic.icon}</span>
                            <h4 className="font-bold text-white">{subtopic.name}</h4>
                          </div>
                        </div>

                        {/* Preview Button */}
                        <motion.button
                          onClick={(e) => {
                            e.stopPropagation();
                            onPreview(subtopic.id);
                          }}
                          className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all text-white/70 hover:text-white text-sm font-medium flex items-center gap-2"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Eye size={16} />
                          Vorschau
                        </motion.button>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Selection Counter */}
      <motion.div
        className="text-center text-white/60 text-sm font-medium"
        animate={{ color: selectedSubtopics.length > 0 ? '#fbbf24' : 'rgba(255,255,255,0.6)' }}
      >
        {selectedSubtopics.length}/{totalSubtopics} Themenbereiche ausgewählt
      </motion.div>

      {/* Action Buttons */}
      <div className="flex gap-4 pt-4">
        <motion.button
          onClick={() => {
            /* Clear selection - will be connected to parent */
          }}
          className="flex-1 px-6 py-3 rounded-xl border-2 border-white/30 text-white font-bold hover:bg-white/5 transition-all"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Auswahl löschen
        </motion.button>

        <motion.button
          onClick={onStartTest}
          disabled={selectedSubtopics.length === 0 || loading}
          className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold hover:from-blue-600 hover:to-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={selectedSubtopics.length > 0 ? { scale: 1.02 } : {}}
          whileTap={selectedSubtopics.length > 0 ? { scale: 0.98 } : {}}
        >
          {loading ? 'Generálás...' : 'Test starten'}
        </motion.button>
      </div>
    </motion.div>
  );
}
