export type LocalizedString = string | {
  de?: string;
  hu?: string;
  ro?: string;
  en?: string;
};

export interface InfoQuestion {
  id?: string;
  type: 'mcq' | 'calculation' | 'typing';
  question?: LocalizedString;
  options?: LocalizedString[] | {
    de?: string[];
    hu?: string[];
    ro?: string[];
    en?: string[];
  };
  correct?: number | string;
  ans?: LocalizedString | number;
  text?: LocalizedString;
  explanation?: LocalizedString;
  topic?: string;
  subtopic?: string;
  context?: LocalizedString;
  languages?: string[];
  subtype?: string;
  answer?: number | string | LocalizedString;
}

export interface InfoTask extends InfoQuestion {}

export interface InfoCurriculum {
  class: number;
  theme: string;
  tasks: InfoQuestion[];
  meta?: any;
}

export interface Curriculum {
  k5: InfoCurriculum[];
  k6: InfoCurriculum[];
  k7: InfoCurriculum[];
  k8: InfoCurriculum[];
}
