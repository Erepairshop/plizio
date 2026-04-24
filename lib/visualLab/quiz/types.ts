export type QuizType = "click_poi" | "click_county" | "distance_guess" | "spot_error" | "order_by";

export interface QuizTask {
  id: string;
  type: QuizType;
  // Localized question text
  question: { de: string; hu: string; ro: string; en: string };
  // Type-specific payload:
  targetPoiId?: string;       // click_poi, distance_guess
  targetPoiId2?: string;      // distance_guess (pair)
  targetCountyId?: string;    // click_county
  expectedKm?: number;        // distance_guess, tolerance ±15%
  optionPoiIds?: string[];    // spot_error (5 POIs, 1 wrong)
  wrongPoiId?: string;        // spot_error (the wrong one to click)
  orderedPoiIds?: string[];   // order_by (must be clicked in this order)
  orderBy?: "east_to_west" | "west_to_east" | "by_elevation_desc" | "by_elevation_asc";
}

export interface QuizResult {
  correct: boolean;
  feedback?: { de: string; hu: string; ro: string; en: string };
}
