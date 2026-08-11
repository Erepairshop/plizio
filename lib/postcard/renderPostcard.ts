import { renderStyledPostcard } from "./renderStyledPostcard";

export type PostcardTheme = "vintage" | "polaroid" | "airmail" | "scrapbook" | "minimal";
export type PostcardLanguage = "hu" | "de" | "en" | "ro" | "it";

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
