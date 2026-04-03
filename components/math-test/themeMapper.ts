import type { CurriculumData } from "@/lib/curriculum/curriculumApi";
import type { Theme as ThemeSelectorTheme } from "@/components/HierarchicalThemeSelector";

export function mapCurriculumToThemes(data: CurriculumData): ThemeSelectorTheme[] {
  return data.themes.map((t) => ({
    id: t.id,
    name: t.name,
    color: t.color,
    icon: t.icon,
    description: t.description,
    slug: t.slug,
    subtopics: t.subtopics.map((s) => ({
      id: s.id,
      name: s.name,
      color: s.color,
      icon: s.icon,
      slug: s.slug,
    })),
  }));
}
