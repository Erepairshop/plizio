# Unified Curriculum System - Migration Guide

## Problem

Previously, there were TWO separate curriculum systems:

1. **Supabase Database** - Used for DE (Germany) and all countries via `get_curriculum` RPC
2. **Code-based generators** - Used for AT/CH via `getDEThemes()` from `mathCurriculum.ts`

This caused:
- ❌ Duplicated data (hard to maintain)
- ❌ Sync issues (changes in code didn't reflect in Supabase)
- ❌ Inconsistent topics across countries
- ❌ Complex migration workflows

## Solution: Unified Curriculum System

**Single source of truth**: All countries read from `/lib/curriculum/unifiedCurriculum.ts`

### Benefits

✅ **One place to manage all curricula** - No Supabase sync issues
✅ **Code versioning** - Git history, code review, easy rollback
✅ **Consistent across all countries** - DE, AT, CH, US, GB, HU, RO all use same topics
✅ **No duplicate data** - Remove Supabase seed complexity
✅ **Deploy-integrated** - Changes deploy automatically with code

## Implementation Plan

### Phase 1: Create Unified Curriculum File ✅
- **File**: `/lib/curriculum/unifiedCurriculum.ts`
- **Contains**: All countries (DE, AT, CH, US, GB, HU, RO) + all grades (1-8)
- **Format**: Hierarchical structure (Country → Grade → Sections → Topics)
- **Helper functions**:
  - `getCurriculumByCountry(code)`
  - `getGradeCurriculum(code, grade)`
  - `convertCurriculumToThemeSelector()` - Converts to UI format

### Phase 2: Update mathtest/page.tsx (TODO)

**Current code (lines ~704-737)**:
```typescript
const resolvedThemes = useMemo((): ThemeSelectorTheme[] => {
  const cc = country?.code;

  // Fetches from Supabase...
  if (supabaseCurriculum && supabaseCurriculum.themes.length > 0) {
    return mapCurriculumToThemes(supabaseCurriculum);
  }
  return [];
}, [supabaseCurriculum]);
```

**Change to**:
```typescript
const resolvedThemes = useMemo((): ThemeSelectorTheme[] => {
  if (!selectedGrade) return [];

  const gradeCurr = getGradeCurriculum(country?.code, selectedGrade);
  if (!gradeCurr) return [];

  return convertCurriculumToThemeSelector(gradeCurr);
}, [country?.code, selectedGrade]);
```

**Remove**:
- Lines 689-702: `useEffect` for `fetchCurriculum`
- Line 46: `import { fetchCurriculum, ... }`
- State: `supabaseCurriculum`, `curriculumLoading`
- Function: `mapCurriculumToThemes()`

**Add**:
- Line 46: `import { getGradeCurriculum, convertCurriculumToThemeSelector } from "@/lib/curriculum/unifiedCurriculum"`

### Phase 3: Remove Supabase Dependencies (TODO)

1. **Delete** `/lib/curriculum/curriculumApi.ts` - No longer needed
2. **Delete** `supabase/migrations/008_curriculum_system.sql` seed section (optional, just won't run)
3. **Delete** `supabase/migrations/009_grade4_curriculum_update.sql` - Replaced by code
4. **Remove** from `mathtest/page.tsx`:
   - `fetchCurriculum` import
   - `supabaseCurriculum` state
   - `curriculumLoading` state
   - The `useEffect` that fetches curriculum

### Phase 4: Update school task generator (TODO)

File: `/lib/schoolTaskGenerator.ts` (line ~773)

**Current**:
```typescript
const themes = (cc === 'DE' || cc === 'AT' || cc === 'CH') ? getDEThemes(grade)
              : getENThemes(grade);
```

**Change to**:
```typescript
const gradeCurr = getGradeCurriculum(cc, grade);
const themes = convertCurriculumToThemeSelector(gradeCurr);
```

## File Structure After Migration

```
lib/curriculum/
├── unifiedCurriculum.ts          ← Single source of truth (UNIFIED)
├── curriculumApi.ts              ← DELETE (no longer needed)
└── [other curriculum files]
```

## Data Model (Unified)

```
CountryCurriculum
  ├── country: string
  ├── code: string
  ├── flag: string
  └── grades: GradeCurriculum[]
      ├── grade: number
      └── sections: CurriculumSection[]
          ├── id: string
          ├── name: string
          ├── icon: string
          ├── color: string
          └── topics: CurriculumTopic[]
              ├── id: string
              ├── name: string
              ├── icon: string
              └── color: string
```

## Grade 4 German Example (Unified)

```json
{
  "grade": 4,
  "sections": [
    {
      "id": "g4-zahlen",
      "name": "Zahlen & Operationen",
      "topics": [
        { "name": "Zahlen bis 1 Million" },
        { "name": "Schriftliche Multiplikation" },
        { "name": "Schriftliche Division" },
        { "name": "Runden (10er, 100er)" }  ← NEW
      ]
    },
    {
      "id": "g4-geo",
      "name": "Geometrie & Maßeinheiten",
      "topics": [
        { "name": "Flächeninhalt & Umfang" },
        { "name": "Kreis & Geometrie" }  ← NEW
      ]
    }
  ]
}
```

## Migration Checklist

- [x] Create `/lib/curriculum/unifiedCurriculum.ts`
- [x] Add helper functions for conversion
- [ ] Update `/app/mathtest/page.tsx` to use unified curriculum
- [ ] Update `/lib/schoolTaskGenerator.ts`
- [ ] Test all country/grade combinations
- [ ] Delete `/lib/curriculum/curriculumApi.ts`
- [ ] Clean up Supabase seed comments
- [ ] Update documentation

## Benefits After Migration

| Aspect | Before | After |
|--------|--------|-------|
| **Data location** | Supabase + Code | Code only |
| **Update location** | Two places (DB + code) | One place (code) |
| **Consistency** | ❌ Can drift | ✅ Always in sync |
| **Deployment** | Manual seed required | Auto-deployed with code |
| **Git history** | Not tracked (DB) | ✅ Full history |
| **Testing** | Harder (need DB) | ✅ Easy (just code) |
| **All countries** | Different systems | ✅ Unified system |

## Code Examples

### Get Grade 4 German Topics

**Old way** (two systems):
```typescript
// System 1: Supabase
const data = await fetchCurriculum('DE', 4);
const themes = mapCurriculumToThemes(data);

// System 2: Code
const themes = getDEThemes(4);
```

**New way** (unified):
```typescript
const gradeCurr = getGradeCurriculum('DE', 4);
const themes = convertCurriculumToThemeSelector(gradeCurr);
```

### Support All Countries the Same Way

```typescript
// Works for DE, AT, CH, US, GB, HU, RO with same code
const gradeCurr = getGradeCurriculum(countryCode, gradeNumber);
const themes = convertCurriculumToThemeSelector(gradeCurr);
```

## Related Files to Update

1. `/app/mathtest/page.tsx` - Main place to update
2. `/lib/schoolTaskGenerator.ts` - Alternative path for school tasks
3. Any component using `fetchCurriculum` import
4. Documentation references to "Supabase curriculum"

## Future Extensions

Once unified, easy to add:
- Custom curriculum administration UI
- Export/import curriculum data
- A/B testing different curricula
- Multi-language topic names
- Teacher-created custom curricula

---

**Status**: Unified curriculum file created ✅
**Next**: Update mathtest/page.tsx and remove Supabase dependencies
