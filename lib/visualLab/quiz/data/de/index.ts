import type { QuizTask } from "../../types";
import { bwQuiz } from "./bwQuiz";
import { byQuiz } from "./byQuiz";
import { beQuiz } from "./beQuiz";
import { bbQuiz } from "./bbQuiz";
import { hbQuiz } from "./hbQuiz";
import { hhQuiz } from "./hhQuiz";
import { heQuiz } from "./heQuiz";
import { mvQuiz } from "./mvQuiz";
import { niQuiz } from "./niQuiz";
import { nwQuiz } from "./nwQuiz";
import { rpQuiz } from "./rpQuiz";
import { slQuiz } from "./slQuiz";
import { snQuiz } from "./snQuiz";
import { stQuiz } from "./stQuiz";
import { shQuiz } from "./shQuiz";
import { thQuiz } from "./thQuiz";

export const deBundeslandQuiz: Record<string, QuizTask[]> = {
  "DE-BW": bwQuiz,
  "DE-BY": byQuiz,
  "DE-BE": beQuiz,
  "DE-BB": bbQuiz,
  "DE-HB": hbQuiz,
  "DE-HH": hhQuiz,
  "DE-HE": heQuiz,
  "DE-MV": mvQuiz,
  "DE-NI": niQuiz,
  "DE-NW": nwQuiz,
  "DE-RP": rpQuiz,
  "DE-SL": slQuiz,
  "DE-SN": snQuiz,
  "DE-ST": stQuiz,
  "DE-SH": shQuiz,
  "DE-TH": thQuiz,
};
