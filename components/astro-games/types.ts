export type LocalizedText = { de: string; hu: string; en: string; ro: string };

export type AstroGameProps<R> = {
  rounds: R[];
  color: string;
  lang: "hu" | "de" | "en" | "ro";
  mode: "m2" | "m3";
  onDone: (score: number, total: number) => void;
  onCorrect?: () => void;
  onWrong?: () => void;
};
