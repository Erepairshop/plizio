import { renderStyledPostcard } from "./renderStyledPostcard";

export type PostcardTheme = "vintage" | "polaroid" | "airmail" | "scrapbook" | "minimal";
export type PostcardLanguage = "hu" | "de" | "en" | "ro" | "it";
export type PostcardFont = "classic" | "handwritten" | "editorial" | "modern" | "typewriter";
export type PostcardTextAlign = "left" | "center" | "right";
export type PostcardStamp = "local" | "passport" | "airmail" | "rail" | "modern";
export type PostcardMood = "joyful" | "adventure" | "calm" | "romantic";
export type PostcardDistanceMode = "road" | "straight";

export type PostcardPhotoEdit = {
  zoom: number;
  offsetX: number;
  offsetY: number;
  rotation: number;
  brightness: number;
  contrast: number;
  saturation: number;
};

export type PostcardContent = {
  place: string;
  country: string;
  latitude?: number;
  longitude?: number;
  placeKind?: string;
  message: string;
  sender: string;
  date: string;
  theme: PostcardTheme;
  lang: PostcardLanguage;
  font: PostcardFont;
  fontSize: number;
  textAlign: PostcardTextAlign;
  stamp: PostcardStamp;
  mood: PostcardMood;
  distanceKm?: number;
  distanceMode?: PostcardDistanceMode;
  qrImage?: HTMLImageElement | null;
  photoEdit: PostcardPhotoEdit;
};

export function renderPostcard(canvas: HTMLCanvasElement, image: HTMLImageElement | null, content: PostcardContent) {
  renderStyledPostcard(canvas, image, content);
}

export function canvasToBlob(
  canvas: HTMLCanvasElement,
  type: "image/png" | "image/webp" = "image/png",
  quality = 0.88,
) {
  return new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, type, quality));
}
