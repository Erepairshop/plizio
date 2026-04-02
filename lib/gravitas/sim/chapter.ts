import type { StarholdState } from "./types";

export type StarholdChapterId = "demo" | "continuation";

export function getStarholdChapter(state: Pick<StarholdState, "chapter">): StarholdChapterId {
  return state.chapter;
}

export function isDemoChapter(state: Pick<StarholdState, "chapter">): boolean {
  return state.chapter === "demo";
}

export function moveToContinuationChapter(state: StarholdState): StarholdState {
  if (state.chapter === "continuation") return state;
  return {
    ...state,
    chapter: "continuation",
  };
}
