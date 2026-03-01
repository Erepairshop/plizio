// ─── CURRICULUM API ────────────────────────────────────────────
// Fetches curriculum data from Supabase (countries, grades, topics)
// Falls back to local JSON when Supabase is not configured

import { supabase } from '@/lib/supabase/client';

// ─── Types ────────────────────────────────────────────────────

export interface CurriculumSubtopic {
  id: string;
  slug: string;
  name: string;
  icon: string;
  color: string;
  order_index: number;
}

export interface CurriculumTheme {
  id: string;
  slug: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  order_index: number;
  subtopics: CurriculumSubtopic[];
}

export interface CurriculumData {
  country: string;
  grade: number;
  subject: string;
  themes: CurriculumTheme[];
}

export interface CountryRecord {
  id: string;
  code: string;
  name: string;
  flag: string;
}

export interface GradeRecord {
  id: string;
  country_id: string;
  grade_number: number;
}

// ─── Cache ────────────────────────────────────────────────────
// Simple in-memory cache to avoid repeated Supabase calls

const curriculumCache = new Map<string, { data: CurriculumData; ts: number }>();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

function getCacheKey(country: string, grade: number, subject: string): string {
  return `${country}_${grade}_${subject}`;
}

// ─── API Functions ────────────────────────────────────────────

/**
 * Fetch curriculum topics from Supabase via the get_curriculum RPC.
 * Returns hierarchical theme data for the given country, grade, and subject.
 */
export async function fetchCurriculum(
  countryCode: string,
  gradeNumber: number,
  subject: string = 'math'
): Promise<CurriculumData | null> {
  // Check cache first
  const cacheKey = getCacheKey(countryCode, gradeNumber, subject);
  const cached = curriculumCache.get(cacheKey);
  if (cached && Date.now() - cached.ts < CACHE_TTL) {
    return cached.data;
  }

  try {
    const { data, error } = await supabase.rpc('get_curriculum', {
      p_country_code: countryCode,
      p_grade_number: gradeNumber,
      p_subject_name: subject,
    });

    if (error) {
      console.error('[CurriculumAPI] RPC error:', error.message);
      return null;
    }

    if (!data || data.error) {
      console.warn('[CurriculumAPI] No data:', data?.error);
      return null;
    }

    const result: CurriculumData = {
      country: data.country,
      grade: data.grade,
      subject: data.subject,
      themes: (data.themes || []).map((t: any) => ({
        id: t.id,
        slug: t.slug,
        name: t.name,
        icon: t.icon || '',
        color: t.color || '#3b82f6',
        description: t.description || '',
        order_index: t.order_index || 0,
        subtopics: (t.subtopics || []).map((s: any) => ({
          id: s.id,
          slug: s.slug,
          name: s.name,
          icon: s.icon || '',
          color: s.color || '#3b82f6',
          order_index: s.order_index || 0,
        })),
      })),
    };

    // Update cache
    curriculumCache.set(cacheKey, { data: result, ts: Date.now() });
    return result;
  } catch (err) {
    console.error('[CurriculumAPI] fetch error:', err);
    return null;
  }
}

/**
 * Fetch all countries from Supabase.
 */
export async function fetchCountries(): Promise<CountryRecord[]> {
  try {
    const { data, error } = await supabase
      .from('countries')
      .select('id, code, name, flag')
      .order('name');

    if (error) {
      console.error('[CurriculumAPI] countries error:', error.message);
      return [];
    }
    return data || [];
  } catch (err) {
    console.error('[CurriculumAPI] countries fetch error:', err);
    return [];
  }
}

/**
 * Fetch grades for a specific country from Supabase.
 */
export async function fetchGrades(countryCode: string): Promise<GradeRecord[]> {
  try {
    const { data, error } = await supabase
      .from('grades')
      .select('id, country_id, grade_number, countries!inner(code)')
      .eq('countries.code', countryCode)
      .order('grade_number');

    if (error) {
      console.error('[CurriculumAPI] grades error:', error.message);
      return [];
    }
    return (data || []).map((g: any) => ({
      id: g.id,
      country_id: g.country_id,
      grade_number: g.grade_number,
    }));
  } catch (err) {
    console.error('[CurriculumAPI] grades fetch error:', err);
    return [];
  }
}

/**
 * Fetch subtopics (children) for specific topic IDs.
 * Useful for resolving selected subtopic UUIDs back to details.
 */
export async function fetchTopicsByIds(topicIds: string[]): Promise<CurriculumSubtopic[]> {
  if (topicIds.length === 0) return [];

  try {
    const { data, error } = await supabase
      .from('curriculum_topics')
      .select('id, slug, name, icon, color, order_index')
      .in('id', topicIds);

    if (error) {
      console.error('[CurriculumAPI] topics by ID error:', error.message);
      return [];
    }
    return (data || []).map((t: any) => ({
      id: t.id,
      slug: t.slug,
      name: t.name,
      icon: t.icon || '',
      color: t.color || '#3b82f6',
      order_index: t.order_index || 0,
    }));
  } catch (err) {
    console.error('[CurriculumAPI] topics by ID fetch error:', err);
    return [];
  }
}

/**
 * Clear the curriculum cache (e.g., after seeding new data).
 */
export function clearCurriculumCache(): void {
  curriculumCache.clear();
}
