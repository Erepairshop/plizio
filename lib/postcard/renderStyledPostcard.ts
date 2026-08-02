import type { PostcardContent, PostcardLanguage, PostcardTheme } from "./renderPostcard";

type Palette = { ink: string; accent: string; paper: string };

const PALETTES: Record<PostcardTheme, Palette> = {
  vintage: { ink: "#3f3024", accent: "#9f3f2d", paper: "#e4d0aa" },
  polaroid: { ink: "#252a28", accent: "#cc5f45", paper: "#f8f5ec" },
  airmail: { ink: "#193d5c", accent: "#b43238", paper: "#fff8e8" },
  scrapbook: { ink: "#453422", accent: "#2f7372", paper: "#e9d3aa" },
  minimal: { ink: "#202522", accent: "#bd553f", paper: "#fbfaf6" },
};

const COPY: Record<PostcardLanguage, { journey: string; keepsake: string; message: string; signoff: string }> = {
  de: { journey: "Meine Reise", keepsake: "Eine Erinnerung zum Bewahren", message: "Grüße von diesem wunderschönen Ort!", signoff: "mit lieben Grüßen" },
  hu: { journey: "Az én utazásom", keepsake: "Egy emlék, amit jó megőrizni", message: "Üdvözlet erről a csodálatos helyről!", signoff: "szeretettel" },
  en: { journey: "My journey", keepsake: "A memory worth keeping", message: "Greetings from this wonderful place!", signoff: "with love" },
  ro: { journey: "Călătoria mea", keepsake: "O amintire de păstrat", message: "Salutări din acest loc minunat!", signoff: "cu drag" },
};

const UPPERCASE_LOCALE: Record<PostcardLanguage, string> = { de: "de-DE", hu: "hu-HU", en: "en-US", ro: "ro-RO" };

function coverImage(ctx: CanvasRenderingContext2D, image: HTMLImageElement, x: number, y: number, w: number, h: number) {
  const scale = Math.max(w / image.naturalWidth, h / image.naturalHeight);
  const sw = w / scale;
  const sh = h / scale;
  ctx.drawImage(image, (image.naturalWidth - sw) / 2, (image.naturalHeight - sh) / 2, sw, sh, x, y, w, h);
}

function wrappedLines(ctx: CanvasRenderingContext2D, text: string, maxWidth: number) {
  const lines: string[] = [];
  for (const paragraph of text.replace(/\r/g, "").split("\n")) {
    const words = paragraph.trim().split(/\s+/).filter(Boolean);
    let line = "";
    for (const word of words) {
      const candidate = line ? `${line} ${word}` : word;
      if (line && ctx.measureText(candidate).width > maxWidth) {
        lines.push(line);
        line = word;
      } else {
        line = candidate;
      }
    }
    if (line) lines.push(line);
    if (!words.length) lines.push("");
  }
  return lines.length ? lines : [""];
}

function drawLines(ctx: CanvasRenderingContext2D, lines: string[], x: number, y: number, lineHeight: number) {
  lines.forEach((line, index) => ctx.fillText(line, x, y + index * lineHeight));
}

function fitFont(ctx: CanvasRenderingContext2D, text: string, maxWidth: number, start: number, minimum: number, pattern: string) {
  let size = start;
  do {
    ctx.font = pattern.replace("{size}", String(size));
    if (ctx.measureText(text).width <= maxWidth) break;
    size -= 2;
  } while (size > minimum);
}

function roundedRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, radius: number) {
  const r = Math.min(radius, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function drawFallbackPhoto(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, palette: Palette) {
  const sky = ctx.createLinearGradient(x, y, x, y + h);
  sky.addColorStop(0, "#8bb8bd");
  sky.addColorStop(0.62, "#e9c78e");
  sky.addColorStop(1, palette.paper);
  ctx.fillStyle = sky;
  ctx.fillRect(x, y, w, h);
  ctx.fillStyle = "rgba(255,250,223,.9)";
  ctx.beginPath();
  ctx.arc(x + w * 0.77, y + h * 0.27, Math.min(w, h) * 0.12, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = palette.ink;
  ctx.beginPath();
  ctx.moveTo(x, y + h * 0.86);
  ctx.lineTo(x + w * 0.28, y + h * 0.49);
  ctx.lineTo(x + w * 0.51, y + h * 0.75);
  ctx.lineTo(x + w * 0.72, y + h * 0.53);
  ctx.lineTo(x + w, y + h * 0.82);
  ctx.lineTo(x + w, y + h);
  ctx.lineTo(x, y + h);
  ctx.closePath();
  ctx.fill();
}

function drawPhoto(ctx: CanvasRenderingContext2D, image: HTMLImageElement | null, x: number, y: number, w: number, h: number, palette: Palette, radius = 0) {
  ctx.save();
  if (radius) roundedRect(ctx, x, y, w, h, radius);
  else { ctx.beginPath(); ctx.rect(x, y, w, h); }
  ctx.clip();
  if (image) coverImage(ctx, image, x, y, w, h);
  else drawFallbackPhoto(ctx, x, y, w, h, palette);
  ctx.restore();
}

function drawPaperGrain(ctx: CanvasRenderingContext2D, width: number, height: number, color: string, count = 260) {
  ctx.save();
  ctx.fillStyle = color;
  for (let i = 0; i < count; i++) {
    ctx.globalAlpha = 0.025 + (i % 5) * 0.008;
    ctx.fillRect((i * 193 + 41) % width, (i * 337 + 83) % height, 1 + (i % 3), 1 + (i % 3));
  }
  ctx.restore();
}

function drawTape(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, rotation: number) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.fillStyle = "rgba(235,211,145,.72)";
  ctx.fillRect(-w / 2, -24, w, 48);
  ctx.strokeStyle = "rgba(114,87,45,.12)";
  for (let i = -w / 2 + 15; i < w / 2; i += 22) {
    ctx.beginPath();
    ctx.moveTo(i, -21);
    ctx.lineTo(i + 8, 21);
    ctx.stroke();
  }
  ctx.restore();
}

function drawStamp(ctx: CanvasRenderingContext2D, content: PostcardContent, x: number, y: number) {
  const palette = PALETTES[content.theme];
  const locale = UPPERCASE_LOCALE[content.lang];
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(-0.09);
  ctx.strokeStyle = palette.accent;
  ctx.fillStyle = palette.accent;
  ctx.lineWidth = 7;
  ctx.setLineDash([5, 8]);
  ctx.beginPath();
  ctx.arc(0, 0, 122, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(0, 0, 101, 0, Math.PI * 2);
  ctx.stroke();
  ctx.textAlign = "center";
  const place = (content.place || "PLIZIO").toLocaleUpperCase(locale);
  const country = (content.country || "POSTCARD").toLocaleUpperCase(locale);
  fitFont(ctx, place, 174, 27, 12, "700 {size}px Georgia, serif");
  ctx.fillText(place, 0, -36);
  fitFont(ctx, country, 166, 21, 11, "700 {size}px Georgia, serif");
  ctx.fillText(country, 0, 50);
  ctx.font = "48px Georgia, serif";
  ctx.fillText("*", 0, 17);
  ctx.restore();
}

function drawFooter(ctx: CanvasRenderingContext2D, content: PostcardContent, canvasHeight: number, ink: string, x = 1080) {
  ctx.save();
  ctx.fillStyle = ink;
  ctx.globalAlpha = 0.66;
  ctx.font = "700 21px Arial, sans-serif";
  ctx.textAlign = "right";
  ctx.fillText(`${content.date}  /  PLIZIO.COM`, x, canvasHeight - 82);
  ctx.restore();
}

export function renderStyledPostcard(canvas: HTMLCanvasElement, image: HTMLImageElement | null, content: PostcardContent) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const palette = PALETTES[content.theme];
  const copy = COPY[content.lang];
  const place = content.place || copy.journey;
  const country = content.country || copy.keepsake;
  const messageFont = content.theme === "minimal" ? "38px Georgia, serif" : "italic 42px Georgia, serif";
  const messageWidth = content.theme === "vintage" ? 650 : content.theme === "minimal" ? 1000 : 900;
  ctx.font = messageFont;
  const messageLines = wrappedLines(ctx, content.message || copy.message, messageWidth);
  const lineHeight = content.theme === "minimal" ? 56 : 60;
  const canvasHeight = Math.max(1500, 1190 + messageLines.length * lineHeight + 170);
  canvas.width = 1200;
  canvas.height = canvasHeight;
  const sender = content.sender ? `- ${content.sender}` : `- ${copy.signoff}`;

  if (content.theme === "vintage") drawVintage(ctx, image, content, palette, place, country, messageLines, messageFont, lineHeight, canvasHeight, sender);
  else if (content.theme === "polaroid") drawPolaroid(ctx, image, content, palette, place, country, messageLines, messageFont, lineHeight, canvasHeight, sender);
  else if (content.theme === "airmail") drawAirmail(ctx, image, content, palette, place, country, messageLines, messageFont, lineHeight, canvasHeight, sender);
  else if (content.theme === "scrapbook") drawScrapbook(ctx, image, content, palette, place, country, messageLines, messageFont, lineHeight, canvasHeight, sender);
  else drawMinimal(ctx, image, content, palette, place, country, messageLines, messageFont, lineHeight, canvasHeight, sender);
}

function drawVintage(ctx: CanvasRenderingContext2D, image: HTMLImageElement | null, content: PostcardContent, palette: Palette, place: string, country: string, lines: string[], font: string, lineHeight: number, height: number, sender: string) {
  const bg = ctx.createLinearGradient(0, 0, 1200, height);
  bg.addColorStop(0, "#c4a474");
  bg.addColorStop(1, "#8f6d48");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, 1200, height);
  ctx.fillStyle = "rgba(242,226,194,.94)";
  ctx.fillRect(48, 48, 1104, height - 96);
  ctx.strokeStyle = "#5a402c";
  ctx.lineWidth = 4;
  ctx.strokeRect(70, 70, 1060, height - 140);
  ctx.lineWidth = 1;
  ctx.strokeRect(82, 82, 1036, height - 164);
  drawPhoto(ctx, image, 100, 100, 1000, 790, palette);
  ctx.fillStyle = "rgba(91,58,31,.16)";
  ctx.fillRect(100, 100, 1000, 790);
  const shade = ctx.createLinearGradient(0, 590, 0, 890);
  shade.addColorStop(0, "rgba(35,21,12,0)");
  shade.addColorStop(1, "rgba(35,21,12,.78)");
  ctx.fillStyle = shade;
  ctx.fillRect(100, 560, 1000, 330);
  ctx.fillStyle = "#fff8e8";
  fitFont(ctx, place, 900, 82, 36, "700 {size}px Georgia, serif");
  ctx.fillText(place, 140, 790);
  fitFont(ctx, country, 870, 29, 18, "600 {size}px Arial, sans-serif");
  ctx.fillText(country.toUpperCase(), 145, 842);
  ctx.fillStyle = palette.ink;
  ctx.font = font;
  drawLines(ctx, lines, 125, 1015, lineHeight);
  ctx.font = "600 29px Georgia, serif";
  ctx.fillText(sender, 125, height - 150);
  drawStamp(ctx, content, 935, height - 325);
  drawPaperGrain(ctx, 1200, height, "#3b2518", 420);
  drawFooter(ctx, content, height, palette.ink);
}

function drawPolaroid(ctx: CanvasRenderingContext2D, image: HTMLImageElement | null, content: PostcardContent, palette: Palette, place: string, country: string, lines: string[], font: string, lineHeight: number, height: number, sender: string) {
  const desk = ctx.createLinearGradient(0, 0, 1200, height);
  desk.addColorStop(0, "#66706a");
  desk.addColorStop(1, "#3f4945");
  ctx.fillStyle = desk;
  ctx.fillRect(0, 0, 1200, height);
  ctx.save();
  ctx.shadowColor = "rgba(18,23,21,.45)";
  ctx.shadowBlur = 36;
  ctx.shadowOffsetY = 18;
  ctx.fillStyle = "#fbfaf5";
  ctx.fillRect(82, 62, 1036, height - 124);
  ctx.restore();
  drawPhoto(ctx, image, 130, 112, 940, 720, palette, 3);
  ctx.fillStyle = palette.ink;
  fitFont(ctx, place, 900, 73, 34, "italic 600 {size}px Georgia, serif");
  ctx.fillText(place, 140, 930);
  fitFont(ctx, country, 880, 28, 18, "600 {size}px Arial, sans-serif");
  ctx.fillStyle = "#68706b";
  ctx.fillText(country.toUpperCase(), 145, 980);
  ctx.strokeStyle = "#d8d3c8";
  ctx.beginPath();
  ctx.moveTo(130, 1024);
  ctx.lineTo(1070, 1024);
  ctx.stroke();
  ctx.fillStyle = palette.ink;
  ctx.font = font;
  drawLines(ctx, lines, 140, 1100, lineHeight);
  ctx.font = "italic 31px Georgia, serif";
  ctx.fillText(sender, 140, height - 145);
  drawTape(ctx, 205, 94, 170, -0.08);
  drawTape(ctx, 995, 98, 150, 0.07);
  drawFooter(ctx, content, height, palette.ink, 1050);
}

function drawAirmail(ctx: CanvasRenderingContext2D, image: HTMLImageElement | null, content: PostcardContent, palette: Palette, place: string, country: string, lines: string[], font: string, lineHeight: number, height: number, sender: string) {
  ctx.fillStyle = "#efe4ce";
  ctx.fillRect(0, 0, 1200, height);
  for (let i = 0; i < 1200; i += 48) {
    ctx.fillStyle = (i / 48) % 2 ? "#285b84" : "#b3343a";
    ctx.fillRect(i, 0, 25, 34);
    ctx.fillRect(1175 - i, height - 34, 25, 34);
  }
  for (let i = 0; i < height; i += 48) {
    ctx.fillStyle = (i / 48) % 2 ? "#b3343a" : "#285b84";
    ctx.fillRect(0, i, 34, 25);
    ctx.fillRect(1166, height - i, 34, 25);
  }
  ctx.fillStyle = "#fffaf0";
  ctx.fillRect(48, 48, 1104, height - 96);
  drawPhoto(ctx, image, 95, 95, 1010, 650, palette, 10);
  ctx.fillStyle = palette.ink;
  fitFont(ctx, place, 950, 70, 34, "800 {size}px Arial, sans-serif");
  ctx.fillText(place.toUpperCase(), 105, 845);
  ctx.fillStyle = palette.accent;
  fitFont(ctx, country, 940, 30, 18, "700 {size}px Arial, sans-serif");
  ctx.fillText(country.toUpperCase(), 110, 900);
  ctx.strokeStyle = "rgba(25,61,92,.23)";
  for (let y = 1010; y < height - 195; y += lineHeight) {
    ctx.beginPath();
    ctx.moveTo(105, y + 14);
    ctx.lineTo(1095, y + 14);
    ctx.stroke();
  }
  ctx.fillStyle = palette.ink;
  ctx.font = font;
  drawLines(ctx, lines, 120, 1000, lineHeight);
  ctx.font = "600 29px Arial, sans-serif";
  ctx.fillText(sender, 120, height - 145);
  drawStamp(ctx, content, 940, height - 325);
  drawFooter(ctx, content, height, palette.ink);
}

function drawScrapbook(ctx: CanvasRenderingContext2D, image: HTMLImageElement | null, content: PostcardContent, palette: Palette, place: string, country: string, lines: string[], font: string, lineHeight: number, height: number, sender: string) {
  const kraft = ctx.createLinearGradient(0, 0, 1200, height);
  kraft.addColorStop(0, "#a98155");
  kraft.addColorStop(1, "#7d5a39");
  ctx.fillStyle = kraft;
  ctx.fillRect(0, 0, 1200, height);
  drawPaperGrain(ctx, 1200, height, "#26170c", 520);
  ctx.fillStyle = "#f0dfbd";
  ctx.beginPath();
  ctx.moveTo(68, 54);
  ctx.lineTo(1135, 70);
  ctx.lineTo(1120, height - 62);
  ctx.lineTo(82, height - 48);
  ctx.closePath();
  ctx.fill();
  ctx.save();
  ctx.translate(600, 450);
  ctx.rotate(-0.035);
  ctx.shadowColor = "rgba(54,34,18,.35)";
  ctx.shadowBlur = 24;
  ctx.shadowOffsetY = 14;
  ctx.fillStyle = "#fffaf0";
  ctx.fillRect(-485, -370, 970, 750);
  ctx.shadowColor = "transparent";
  drawPhoto(ctx, image, -450, -335, 900, 650, palette);
  ctx.restore();
  drawTape(ctx, 215, 108, 190, -0.12);
  drawTape(ctx, 984, 125, 175, 0.11);
  ctx.fillStyle = palette.accent;
  ctx.fillRect(118, 825, 820, 108);
  ctx.fillStyle = "#fffaf0";
  fitFont(ctx, place, 760, 66, 32, "700 {size}px Georgia, serif");
  ctx.fillText(place, 150, 895);
  ctx.fillStyle = palette.ink;
  ctx.font = "700 25px Arial, sans-serif";
  ctx.fillText(country.toUpperCase(), 150, 958);
  ctx.strokeStyle = "rgba(69,52,34,.18)";
  for (let y = 1050; y < height - 205; y += lineHeight) {
    ctx.beginPath();
    ctx.moveTo(120, y + 14);
    ctx.lineTo(1040, y + 14);
    ctx.stroke();
  }
  ctx.fillStyle = palette.ink;
  ctx.font = font;
  drawLines(ctx, lines, 130, 1040, lineHeight);
  ctx.font = "600 30px Georgia, serif";
  ctx.fillText(sender, 130, height - 150);
  ctx.fillStyle = "#d39b37";
  ctx.font = "60px Georgia, serif";
  ctx.fillText("*", 1010, 900);
  ctx.fillText("+", 1048, 965);
  drawFooter(ctx, content, height, palette.ink);
}

function drawMinimal(ctx: CanvasRenderingContext2D, image: HTMLImageElement | null, content: PostcardContent, palette: Palette, place: string, country: string, lines: string[], font: string, lineHeight: number, height: number, sender: string) {
  ctx.fillStyle = palette.paper;
  ctx.fillRect(0, 0, 1200, height);
  drawPhoto(ctx, image, 65, 65, 710, 805, palette, 4);
  ctx.fillStyle = palette.accent;
  ctx.fillRect(825, 130, 68, 8);
  ctx.fillStyle = palette.ink;
  fitFont(ctx, place, 300, 67, 30, "600 {size}px Georgia, serif");
  drawLines(ctx, wrappedLines(ctx, place, 300).slice(0, 3), 825, 220, 78);
  ctx.fillStyle = "#767b76";
  fitFont(ctx, country, 300, 24, 16, "700 {size}px Arial, sans-serif");
  ctx.fillText(country.toUpperCase(), 825, 490);
  ctx.strokeStyle = "#c9cbc5";
  ctx.beginPath();
  ctx.moveTo(825, 535);
  ctx.lineTo(1125, 535);
  ctx.stroke();
  ctx.fillStyle = palette.ink;
  ctx.globalAlpha = 0.68;
  ctx.font = "21px Arial, sans-serif";
  ctx.fillText(content.date, 825, 585);
  ctx.globalAlpha = 1;
  ctx.font = font;
  drawLines(ctx, lines, 90, 1010, lineHeight);
  ctx.fillStyle = palette.accent;
  ctx.fillRect(90, 935, 1000, 3);
  ctx.fillStyle = palette.ink;
  ctx.font = "600 28px Arial, sans-serif";
  ctx.fillText(sender, 90, height - 145);
  drawFooter(ctx, content, height, palette.ink);
}
