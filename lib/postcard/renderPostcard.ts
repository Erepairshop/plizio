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

function wrapText(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, maxWidth: number, lineHeight: number, maxLines: number) {
  const words = text.trim().split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let line = "";
  for (const word of words) {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = word;
      if (lines.length === maxLines) break;
    } else {
      line = test;
    }
  }
  if (lines.length < maxLines && line) lines.push(line);
  lines.forEach((value, index) => ctx.fillText(value, x, y + index * lineHeight));
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
  ctx.font = "700 28px Georgia, serif";
  ctx.fillText((content.place || "ÚTI EMLÉK").toLocaleUpperCase("hu").slice(0, 22), 0, -38);
  ctx.font = "700 22px Georgia, serif";
  ctx.fillText((content.country || "PLIZIO").toLocaleUpperCase("hu").slice(0, 20), 0, 52);
  ctx.font = "50px serif";
  ctx.fillText("✦", 0, 18);
  ctx.restore();
}

export function renderPostcard(canvas: HTMLCanvasElement, image: HTMLImageElement | null, content: PostcardContent) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  canvas.width = 1200;
  canvas.height = 1500;
  const palette = PALETTES[content.theme];

  const gradient = ctx.createLinearGradient(0, 0, 1200, 1500);
  gradient.addColorStop(0, palette.paper);
  gradient.addColorStop(1, content.theme === "sunset" ? "#f28b65" : content.theme === "coast" ? "#71bdba" : "#cbb99e");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1200, 1500);

  ctx.fillStyle = "rgba(255,255,255,.76)";
  ctx.fillRect(50, 50, 1100, 1400);
  ctx.strokeStyle = palette.ink;
  ctx.lineWidth = 5;
  ctx.strokeRect(72, 72, 1056, 1356);

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
  ctx.font = "700 86px Georgia, serif";
  ctx.fillText((content.place || "Az én utazásom").slice(0, 28), 145, 845);
  ctx.font = "600 31px Arial, sans-serif";
  ctx.fillText((content.country || "Egy emlék, amit jó megőrizni").slice(0, 45), 150, 902);

  ctx.fillStyle = palette.ink;
  ctx.font = "italic 43px Georgia, serif";
  wrapText(ctx, content.message || "Üdvözlet erről a csodálatos helyről!", 130, 1055, 620, 62, 4);
  ctx.font = "600 30px Arial, sans-serif";
  ctx.fillText(content.sender ? `– ${content.sender}` : "– szeretettel", 130, 1330);
  drawStamp(ctx, content, 930, 1165);

  ctx.fillStyle = palette.ink;
  ctx.globalAlpha = 0.72;
  ctx.font = "700 22px Arial, sans-serif";
  ctx.textAlign = "right";
  ctx.fillText(`${content.date}  •  PLIZIO.COM`, 1070, 1385);
  ctx.globalAlpha = 1;
  ctx.textAlign = "left";
}

export function canvasToBlob(canvas: HTMLCanvasElement) {
  return new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/png", 0.94));
}
