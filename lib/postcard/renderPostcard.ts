export type PostcardTheme = "sunset" | "coast" | "paper";

export type PostcardContent = {
  place: string;
  country: string;
  message: string;
  sender: string;
  date: string;
  theme: PostcardTheme;
};

const PALETTES: Record<PostcardTheme, { ink: string; accent: string; paper: string }> = {
  sunset: { ink: "#401f18", accent: "#ef5b3f", paper: "#f7c66c" },
  coast: { ink: "#123d46", accent: "#087f8c", paper: "#c9e7df" },
  paper: { ink: "#302a24", accent: "#a8472f", paper: "#eee4d2" },
};

function coverImage(ctx: CanvasRenderingContext2D, image: HTMLImageElement, x: number, y: number, w: number, h: number) {
  const scale = Math.max(w / image.naturalWidth, h / image.naturalHeight);
  const sw = w / scale;
  const sh = h / scale;
  const sx = (image.naturalWidth - sw) / 2;
  const sy = (image.naturalHeight - sh) / 2;
  ctx.drawImage(image, sx, sy, sw, sh, x, y, w, h);
}

function wrappedLines(ctx: CanvasRenderingContext2D, text: string, maxWidth: number) {
  const lines: string[] = [];
  for (const paragraph of text.replace(/\r/g, "").split("\n")) {
    const words = paragraph.trim().split(/\s+/).filter(Boolean);
    let line = "";
    for (const word of words) {
      const test = line ? `${line} ${word}` : word;
      if (ctx.measureText(test).width > maxWidth && line) {
        lines.push(line);
        line = word;
      } else {
        line = test;
      }
    }
    if (line) lines.push(line);
    if (!words.length) lines.push("");
  }
  return lines.length ? lines : [""];
}

function drawLines(ctx: CanvasRenderingContext2D, lines: string[], x: number, y: number, lineHeight: number) {
  lines.forEach((value, index) => ctx.fillText(value, x, y + index * lineHeight));
}

function fitFont(ctx: CanvasRenderingContext2D, text: string, maxWidth: number, start: number, minimum: number, font: string) {
  let size = start;
  do {
    ctx.font = `${font.replace("{size}", String(size))}`;
    if (ctx.measureText(text).width <= maxWidth) break;
    size -= 2;
  } while (size > minimum);
}

function drawStamp(ctx: CanvasRenderingContext2D, content: PostcardContent, x: number, y: number) {
  const palette = PALETTES[content.theme];
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(-0.09);
  ctx.strokeStyle = palette.accent;
  ctx.fillStyle = palette.accent;
  ctx.lineWidth = 8;
  ctx.setLineDash([5, 8]);
  ctx.beginPath();
  ctx.arc(0, 0, 126, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(0, 0, 104, 0, Math.PI * 2);
  ctx.stroke();
  ctx.textAlign = "center";
  const stampPlace = (content.place || "ÚTI EMLÉK").toLocaleUpperCase("hu");
  const stampCountry = (content.country || "PLIZIO").toLocaleUpperCase("hu");
  fitFont(ctx, stampPlace, 174, 28, 12, "700 {size}px Georgia, serif");
  ctx.fillText(stampPlace, 0, -38);
  fitFont(ctx, stampCountry, 166, 22, 11, "700 {size}px Georgia, serif");
  ctx.fillText(stampCountry, 0, 52);
  ctx.font = "50px serif";
  ctx.fillText("✦", 0, 18);
  ctx.restore();
}

export function renderPostcard(canvas: HTMLCanvasElement, image: HTMLImageElement | null, content: PostcardContent) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  canvas.width = 1200;
  const palette = PALETTES[content.theme];
  ctx.font = "italic 43px Georgia, serif";
  const messageLines = wrappedLines(ctx, content.message || "Üdvözlet erről a csodálatos helyről!", 620);
  const canvasHeight = Math.max(1500, 1055 + (messageLines.length - 1) * 62 + 230);
  canvas.height = canvasHeight;

  const gradient = ctx.createLinearGradient(0, 0, 1200, canvasHeight);
  gradient.addColorStop(0, palette.paper);
  gradient.addColorStop(1, content.theme === "sunset" ? "#f28b65" : content.theme === "coast" ? "#71bdba" : "#cbb99e");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1200, canvasHeight);

  ctx.fillStyle = "rgba(255,255,255,.76)";
  ctx.fillRect(50, 50, 1100, canvasHeight - 100);
  ctx.strokeStyle = palette.ink;
  ctx.lineWidth = 5;
  ctx.strokeRect(72, 72, 1056, canvasHeight - 144);

  ctx.save();
  ctx.beginPath();
  ctx.rect(100, 100, 1000, 850);
  ctx.clip();
  if (image) {
    coverImage(ctx, image, 100, 100, 1000, 850);
  } else {
    const sky = ctx.createLinearGradient(0, 100, 0, 950);
    sky.addColorStop(0, content.theme === "coast" ? "#7dc7d2" : "#f5a56d");
    sky.addColorStop(1, palette.paper);
    ctx.fillStyle = sky;
    ctx.fillRect(100, 100, 1000, 850);
    ctx.fillStyle = "rgba(255,255,255,.88)";
    ctx.beginPath();
    ctx.arc(850, 330, 115, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = palette.ink;
    ctx.beginPath();
    ctx.moveTo(100, 800);
    ctx.lineTo(390, 520);
    ctx.lineTo(600, 730);
    ctx.lineTo(790, 560);
    ctx.lineTo(1100, 825);
    ctx.lineTo(1100, 950);
    ctx.lineTo(100, 950);
    ctx.fill();
  }
  const shade = ctx.createLinearGradient(0, 590, 0, 950);
  shade.addColorStop(0, "rgba(0,0,0,0)");
  shade.addColorStop(1, "rgba(0,0,0,.72)");
  ctx.fillStyle = shade;
  ctx.fillRect(100, 560, 1000, 390);
  ctx.restore();

  ctx.fillStyle = "#fff";
  const place = content.place || "Az én utazásom";
  fitFont(ctx, place, 910, 86, 38, "700 {size}px Georgia, serif");
  ctx.fillText(place, 145, 845);
  const country = content.country || "Egy emlék, amit jó megőrizni";
  fitFont(ctx, country, 900, 31, 20, "600 {size}px Arial, sans-serif");
  ctx.fillText(country, 150, 902);

  ctx.fillStyle = palette.ink;
  ctx.font = "italic 43px Georgia, serif";
  drawLines(ctx, messageLines, 130, 1055, 62);
  ctx.font = "600 30px Arial, sans-serif";
  ctx.fillText(content.sender ? `– ${content.sender}` : "– szeretettel", 130, canvasHeight - 170);
  drawStamp(ctx, content, 930, canvasHeight - 335);

  ctx.fillStyle = palette.ink;
  ctx.globalAlpha = 0.72;
  ctx.font = "700 22px Arial, sans-serif";
  ctx.textAlign = "right";
  ctx.fillText(`${content.date}  •  PLIZIO.COM`, 1070, canvasHeight - 115);
  ctx.globalAlpha = 1;
  ctx.textAlign = "left";
}

export function canvasToBlob(canvas: HTMLCanvasElement) {
  return new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/png", 0.94));
}
