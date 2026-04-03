import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import HierarchicalThemeSelector, { type Theme as ThemeSelectorTheme } from "@/components/HierarchicalThemeSelector";
import AvatarCompanion from "@/components/AvatarCompanion";
import { Scene3D } from "@/components/math-test/Scene3D";
import { type CountryConfig } from "@/lib/mathLocale";

interface ThemeSelectProps {
  country: CountryConfig;
  resolvedThemes: ThemeSelectorTheme[];
  selectedSubtopics: string[];
  generatingTest: boolean;
  curriculumLoading: boolean;
  onBack: () => void;
  onSubtopicToggle: (slug: string) => void;
  onPreview: (slug: string) => void;
  onStartTest: () => void;
  onClearSelection: () => void;
  avatarProps: any;
}

export function ThemeSelect({
  country,
  resolvedThemes,
  selectedSubtopics,
  generatingTest,
  curriculumLoading,
  onBack,
  onSubtopicToggle,
  onPreview,
  onStartTest,
  onClearSelection,
  avatarProps
}: ThemeSelectProps) {
  const ui = country.ui;

  return (
    <>
      <main className="min-h-screen relative overflow-hidden bg-bg">
        <Scene3D />
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8 gap-8">
          {/* Back Button */}
          <motion.div className="absolute top-6 left-6 md:top-8 md:left-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <motion.button
              onClick={onBack}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft size={24} className="text-white" />
            </motion.button>
          </motion.div>

          {/* Hierarchical Theme Selector */}
          <HierarchicalThemeSelector
            themes={resolvedThemes}
            selectedSubtopics={selectedSubtopics}
            onSubtopicToggle={onSubtopicToggle}
            onPreview={onPreview}
            onStartTest={onStartTest}
            onClearSelection={onClearSelection}
            loading={generatingTest || curriculumLoading}
            labels={ui ? {
              selectTopics: ui.selectTopics,
              selectTopicsSub: ui.selectTopicsSub,
              preview: ui.preview,
              topicsSelected: ui.topicsSelected,
              clearSelection: ui.clearSelection,
              startTest: ui.startTest,
              generating: ui.generating,
              topicAreas: ui.topicAreas,
              selectAllText: ui.selectAllText,
              selectAllVisual: ui.selectAllVisual,
            } : undefined}
          />
        </div>
      </main>
      <AvatarCompanion {...avatarProps} />
    </>
  );
}
