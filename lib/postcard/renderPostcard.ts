import { renderStyledPostcard } from "./renderStyledPostcard";

export type PostcardTheme = "vintage" | "polaroid" | "airmail" | "scrapbook" | "minimal";
export type PostcardLanguage = "hu" | "de" | "en" | "ro";

export type PostcardContent = {
  place: string;
  country: string;
  message: string;
  sender: string;
  date: string;
  theme: PostcardTheme;
  lang: PostcardLanguage;
};

export function renderPostcard(canvas: HTMLCanvasElement, image: HTMLImageElement | null, content: PostcardContent) {
  renderStyledPostcard(canvas, image, content);
}

export function canvasToBlob(canvas: HTMLCanvasElement) {
  return new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/png", 0.94));
}
