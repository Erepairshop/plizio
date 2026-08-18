import type { PostcardContent, PostcardFont, PostcardLanguage, PostcardMood, PostcardPhotoEdit, PostcardTextAlign, PostcardTheme } from "./renderPostcard";

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
  it: { journey: "Il mio viaggio", keepsake: "Un ricordo da conservare", message: "Saluti da questo luogo meraviglioso!", signoff: "con affetto" },
};

const UPPERCASE_LOCALE: Record<PostcardLanguage, string> = { de: "de-DE", hu: "hu-HU", en: "en-US", ro: "ro-RO", it: "it-IT" };

const MOOD_LABELS: Record<PostcardLanguage, Record<PostcardMood, string>> = {
  de: { joyful: "GLÜCKLICH", adventure: "ABENTEUER", calm: "AUSZEIT", romantic: "HERZENSMOMENT" },
  hu: { joyful: "ÖRÖMTELI", adventure: "KALAND", calm: "NYUGALOM", romantic: "SZÍVBŐL" },
  en: { joyful: "JOYFUL", adventure: "ADVENTURE", calm: "SLOW MOMENT", romantic: "FROM THE HEART" },
  ro: { joyful: "BUCURIE", adventure: "AVENTURĂ", calm: "LINIȘTE", romantic: "DIN INIMĂ" },
  it: { joyful: "GIOIA", adventure: "AVVENTURA", calm: "RELAX", romantic: "DAL CUORE" },
};

const DISTANCE_LABELS: Record<PostcardLanguage, { road: string; straight: string }> = {
  de: { road: "AUTO", straight: "LUFTLINIE" },
  hu: { road: "AUTÓVAL", straight: "LÉGVONAL" },
  en: { road: "BY CAR", straight: "STRAIGHT LINE" },
  ro: { road: "CU MAȘINA", straight: "LINIE DREAPTĂ" },
  it: { road: "IN AUTO", straight: "LINEA AEREA" },
};

const FONT_FAMILIES: Record<PostcardFont, string> = {
  classic: "Georgia, serif",
  handwritten: '"Segoe Print", "Bradley Hand", cursive',
  editorial: '"Palatino Linotype", Palatino, Georgia, serif',
  modern: '"Trebuchet MS", Arial, sans-serif',
  typewriter: '"Courier New", monospace',
};

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(maximum, Math.max(minimum, value));
}

function coverImage(ctx: CanvasRenderingContext2D, image: HTMLImageElement, x: number, y: number, w: number, h: number, edit: PostcardPhotoEdit) {
  const angle = clamp(edit.rotation, -15, 15) * Math.PI / 180;
  const rotationSafety = 1 + Math.abs(Math.sin(angle)) * 0.3;
  const offsetSafety = 1 + Math.max(Math.abs(edit.offsetX), Math.abs(edit.offsetY)) / 100 * 0.7;
  const scale = Math.max(w / image.naturalWidth, h / image.naturalHeight) * clamp(edit.zoom, 1, 2) * rotationSafety * offsetSafety;
  const centerX = x + w / 2 + clamp(edit.offsetX, -100, 100) / 100 * w * 0.34;
  const centerY = y + h / 2 + clamp(edit.offsetY, -100, 100) / 100 * h * 0.34;
  ctx.save();
  ctx.filter = `brightness(${clamp(edit.brightness, 50, 150)}%) contrast(${clamp(edit.contrast, 50, 150)}%) saturate(${clamp(edit.saturation, 0, 180)}%)`;
  ctx.translate(centerX, centerY);
  ctx.rotate(angle);
  ctx.drawImage(image, -image.naturalWidth * scale / 2, -image.naturalHeight * scale / 2, image.naturalWidth * scale, image.naturalHeight * scale);
  ctx.restore();
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

function drawLines(ctx: CanvasRenderingContext2D, lines: string[], x: number, y: number, lineHeight: number, align: PostcardTextAlign = "left", width = 0) {
  ctx.save();
  ctx.textAlign = align;
  const anchor = align === "center" ? x + width / 2 : align === "right" ? x + width : x;
  lines.forEach((line, index) => ctx.fillText(line, anchor, y + index * lineHeight));
  ctx.restore();
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

function drawPhoto(ctx: CanvasRenderingContext2D, image: HTMLImageElement | null, x: number, y: number, w: number, h: number, palette: Palette, edit: PostcardPhotoEdit, radius = 0) {
  ctx.save();
  if (radius) roundedRect(ctx, x, y, w, h, radius);
  else { ctx.beginPath(); ctx.rect(x, y, w, h); }
  ctx.clip();
  if (image) coverImage(ctx, image, x, y, w, h, edit);
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

function stampSeed(value: string) {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i++) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function drawStampMotif(ctx: CanvasRenderingContext2D, kind: string, seed: number) {
  const normalized = kind.toLowerCase();
  ctx.save();
  ctx.translate(0, 5);
  ctx.lineWidth = 4;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  if (/beach|coast|sea|lake|river|water|island/.test(normalized)) {
    for (let row = 0; row < 3; row++) {
      ctx.beginPath();
      const y = -10 + row * 10;
      ctx.moveTo(-36, y);
      ctx.bezierCurveTo(-24, y - 8, -12, y + 8, 0, y);
      ctx.bezierCurveTo(12, y - 8, 24, y + 8, 36, y);
      ctx.stroke();
    }
  } else if (/mount|nature|park|forest|valley|volcan|landscape/.test(normalized)) {
    const peak = 25 + (seed % 10);
    ctx.beginPath();
    ctx.moveTo(-42, 22);
    ctx.lineTo(-13, -peak);
    ctx.lineTo(2, -8);
    ctx.lineTo(17, -27 + (seed % 7));
    ctx.lineTo(43, 22);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-24, 5);
    ctx.lineTo(-13, -peak);
    ctx.lineTo(-4, -14);
    ctx.stroke();
  } else if (/castle|historic|monument|church|temple|palace|tower|museum/.test(normalized)) {
    ctx.strokeRect(-29, -13, 58, 36);
    ctx.beginPath();
    ctx.moveTo(-35, -13);
    ctx.lineTo(-35, -29);
    ctx.lineTo(-24, -29);
    ctx.lineTo(-24, -13);
    ctx.moveTo(24, -13);
    ctx.lineTo(24, -29);
    ctx.lineTo(35, -29);
    ctx.lineTo(35, -13);
    ctx.moveTo(-6, 23);
    ctx.lineTo(-6, 5);
    ctx.arc(0, 5, 6, Math.PI, 0);
    ctx.lineTo(6, 23);
    ctx.stroke();
  } else {
    const leftHeight = 18 + (seed % 15);
    const rightHeight = 22 + ((seed >>> 4) % 15);
    ctx.beginPath();
    ctx.moveTo(-43, 24);
    ctx.lineTo(-43, 2);
    ctx.lineTo(-29, 2);
    ctx.lineTo(-29, -leftHeight);
    ctx.lineTo(-12, -leftHeight);
    ctx.lineTo(-12, 7);
    ctx.lineTo(4, 7);
    ctx.lineTo(4, -rightHeight);
    ctx.lineTo(19, -rightHeight);
    ctx.lineTo(19, -4);
    ctx.lineTo(37, -4);
    ctx.lineTo(37, 24);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-49, 24);
    ctx.lineTo(45, 24);
    ctx.stroke();
  }
  ctx.restore();
}

function drawLocalStamp(ctx: CanvasRenderingContext2D, content: PostcardContent, x: number, y: number) {
  const palette = PALETTES[content.theme];
  const locale = UPPERCASE_LOCALE[content.lang];
  const seed = stampSeed(`${content.place}|${content.country}`);
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(-0.065 - (seed % 35) / 1000);
  ctx.strokeStyle = palette.accent;
  ctx.fillStyle = palette.accent;
  ctx.globalAlpha = 0.88;
  ctx.lineWidth = 6;
  ctx.setLineDash([4 + (seed % 4), 7]);
  for (let segment = 0; segment < 4; segment++) {
    ctx.globalAlpha = 0.55 + ((seed >>> (segment * 3)) % 28) / 100;
    ctx.beginPath();
    const start = segment * Math.PI / 2 + 0.05;
    ctx.arc(0, 0, 122, start, start + 1.34 + ((seed >>> segment) % 9) / 100);
    ctx.stroke();
  }
  ctx.setLineDash([]);
  ctx.lineWidth = 3;
  ctx.globalAlpha = 0.72;
  ctx.beginPath();
  ctx.arc(0, 0, 101, 0, Math.PI * 2);
  ctx.stroke();
  ctx.globalAlpha = 0.82;
  for (let i = 0; i < 34; i++) {
    const angle = ((seed % 360) + i * 137.5) * Math.PI / 180;
    const radius = 88 + ((seed >>> (i % 20)) % 32);
    const size = 1 + ((seed + i * 17) % 3);
    ctx.fillRect(Math.cos(angle) * radius, Math.sin(angle) * radius, size, size);
  }
  ctx.textAlign = "center";
  const place = (content.place || "PLIZIO").toLocaleUpperCase(locale);
  const country = (content.country || "POSTCARD").toLocaleUpperCase(locale);
  ctx.globalAlpha = 0.9;
  fitFont(ctx, place, 176, 25, 12, "700 {size}px Georgia, serif");
  ctx.fillText(place, 0, -62);
  drawStampMotif(ctx, content.placeKind || "", seed);
  ctx.font = "700 14px Arial, sans-serif";
  ctx.fillText(content.date.toLocaleUpperCase(locale), 0, 48);
  if (content.latitude != null && content.longitude != null) {
    const coordinates = `${Math.abs(content.latitude).toFixed(3)}\u00b0${content.latitude >= 0 ? "N" : "S"}  ${Math.abs(content.longitude).toFixed(3)}\u00b0${content.longitude >= 0 ? "E" : "W"}`;
    ctx.font = "700 12px Arial, sans-serif";
    ctx.fillText(coordinates, 0, 66);
    fitFont(ctx, country, 160, 14, 10, "700 {size}px Georgia, serif");
    ctx.fillText(country, 0, 84);
  } else {
    fitFont(ctx, country, 166, 17, 10, "700 {size}px Georgia, serif");
    ctx.fillText(country, 0, 75);
  }
  ctx.restore();
}

function stampPlace(content: PostcardContent) {
  return (content.place || "PLIZIO").toLocaleUpperCase(UPPERCASE_LOCALE[content.lang]);
}

function drawPassportStamp(ctx: CanvasRenderingContext2D, content: PostcardContent, x: number, y: number) {
  const palette = PALETTES[content.theme];
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(-0.075);
  ctx.strokeStyle = palette.accent;
  ctx.fillStyle = palette.accent;
  ctx.globalAlpha = 0.84;
  ctx.lineWidth = 5;
  roundedRect(ctx, -126, -92, 252, 184, 18);
  ctx.stroke();
  ctx.lineWidth = 2;
  roundedRect(ctx, -114, -80, 228, 160, 12);
  ctx.stroke();
  ctx.textAlign = "center";
  fitFont(ctx, stampPlace(content), 198, 24, 12, "800 {size}px Georgia, serif");
  ctx.fillText(stampPlace(content), 0, -47);
  drawStampMotif(ctx, content.placeKind || "", stampSeed(content.place));
  ctx.font = "800 14px Arial, sans-serif";
  ctx.fillText(`PASSPORT  /  ${content.date}`, 0, 62);
  ctx.restore();
}

function drawAirmailStamp(ctx: CanvasRenderingContext2D, content: PostcardContent, x: number, y: number) {
  const palette = PALETTES[content.theme];
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(-0.04);
  ctx.strokeStyle = palette.accent;
  ctx.fillStyle = palette.accent;
  ctx.globalAlpha = 0.84;
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.ellipse(0, 0, 138, 88, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(0, 0, 123, 74, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.textAlign = "center";
  fitFont(ctx, stampPlace(content), 205, 23, 12, "800 {size}px Arial, sans-serif");
  ctx.fillText(stampPlace(content), 0, -42);
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(-62, 12); ctx.lineTo(60, -10); ctx.lineTo(17, 24); ctx.lineTo(2, 21); ctx.lineTo(31, -2); ctx.lineTo(-24, 8); ctx.lineTo(-43, 27); ctx.lineTo(-55, 27); ctx.lineTo(-42, 15); ctx.closePath();
  ctx.stroke();
  ctx.font = "800 14px Arial, sans-serif";
  ctx.fillText(content.date, 0, 58);
  ctx.restore();
}

function drawRailStamp(ctx: CanvasRenderingContext2D, content: PostcardContent, x: number, y: number) {
  const palette = PALETTES[content.theme];
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(-0.025);
  ctx.strokeStyle = palette.accent;
  ctx.fillStyle = palette.accent;
  ctx.globalAlpha = 0.84;
  ctx.lineWidth = 4;
  ctx.strokeRect(-134, -88, 268, 176);
  ctx.setLineDash([8, 7]);
  ctx.strokeRect(-121, -75, 242, 150);
  ctx.setLineDash([]);
  ctx.textAlign = "center";
  fitFont(ctx, stampPlace(content), 210, 23, 12, "800 {size}px Georgia, serif");
  ctx.fillText(stampPlace(content), 0, -42);
  ctx.lineWidth = 3;
  for (let line = -1; line <= 1; line += 2) {
    ctx.beginPath(); ctx.moveTo(-72, line * 11); ctx.lineTo(72, line * 11); ctx.stroke();
  }
  for (let sleeper = -60; sleeper <= 60; sleeper += 20) {
    ctx.beginPath(); ctx.moveTo(sleeper, -18); ctx.lineTo(sleeper, 18); ctx.stroke();
  }
  ctx.font = "800 14px Arial, sans-serif";
  ctx.fillText(`RAIL JOURNEY  ${content.date}`, 0, 55);
  ctx.restore();
}

function drawModernStamp(ctx: CanvasRenderingContext2D, content: PostcardContent, x: number, y: number) {
  const palette = PALETTES[content.theme];
  ctx.save();
  ctx.translate(x, y);
  ctx.strokeStyle = palette.accent;
  ctx.fillStyle = palette.accent;
  ctx.globalAlpha = 0.88;
  ctx.lineWidth = 5;
  ctx.strokeRect(-105, -105, 210, 210);
  ctx.lineWidth = 2;
  ctx.strokeRect(-92, -92, 184, 184);
  ctx.beginPath();
  ctx.arc(0, -5, 34, 0, Math.PI * 2);
  ctx.moveTo(-52, -5); ctx.lineTo(52, -5); ctx.moveTo(0, -57); ctx.lineTo(0, 47);
  ctx.stroke();
  ctx.textAlign = "center";
  fitFont(ctx, stampPlace(content), 168, 20, 11, "800 {size}px Arial, sans-serif");
  ctx.fillText(stampPlace(content), 0, -68);
  ctx.font = "800 13px Arial, sans-serif";
  const coords = content.latitude != null && content.longitude != null ? `${content.latitude.toFixed(2)} / ${content.longitude.toFixed(2)}` : "PLIZIO / TRAVEL";
  ctx.fillText(coords, 0, 66);
  ctx.fillText(content.date, 0, 84);
  ctx.restore();
}

function drawStamp(ctx: CanvasRenderingContext2D, content: PostcardContent, x: number, y: number) {
  const adjustedY = content.qrImage ? y - 90 : y;
  if (content.stamp === "passport") drawPassportStamp(ctx, content, x, adjustedY);
  else if (content.stamp === "airmail") drawAirmailStamp(ctx, content, x, adjustedY);
  else if (content.stamp === "rail") drawRailStamp(ctx, content, x, adjustedY);
  else if (content.stamp === "modern") drawModernStamp(ctx, content, x, adjustedY);
  else drawLocalStamp(ctx, content, x, adjustedY);
}

function drawQrCode(ctx: CanvasRenderingContext2D, content: PostcardContent, canvasHeight: number) {
  if (!content.qrImage) return;
  ctx.save();
  ctx.fillStyle = "#fffaf0";
  ctx.shadowColor = "rgba(31,25,20,.22)";
  ctx.shadowBlur = 14;
  roundedRect(ctx, 976, canvasHeight - 232, 144, 144, 12);
  ctx.fill();
  ctx.shadowColor = "transparent";
  ctx.drawImage(content.qrImage, 986, canvasHeight - 222, 124, 124);
  ctx.restore();
}

function drawExperienceBadge(ctx: CanvasRenderingContext2D, content: PostcardContent, canvasHeight: number) {
  const palette = PALETTES[content.theme];
  const distanceKind = DISTANCE_LABELS[content.lang][content.distanceMode === "road" ? "road" : "straight"];
  const distance = content.distanceKm == null ? "" : `  •  ${distanceKind} ${content.distanceKm < 10 ? content.distanceKm.toFixed(1) : Math.round(content.distanceKm)} KM`;
  const label = `${MOOD_LABELS[content.lang][content.mood]}${distance}`;
  ctx.save();
  ctx.font = "800 15px Arial, sans-serif";
  ctx.textAlign = "left";
  const width = Math.min(420, ctx.measureText(label).width + 34);
  ctx.globalAlpha = 0.9;
  ctx.fillStyle = palette.accent;
  roundedRect(ctx, 88, canvasHeight - 102, width, 34, 17);
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.fillStyle = "#fffaf0";
  ctx.fillText(label, 105, canvasHeight - 80);
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
  const messageFont = `${content.font === "classic" && content.theme !== "minimal" ? "italic " : ""}${clamp(content.fontSize, 30, 54)}px ${FONT_FAMILIES[content.font]}`;
  const messageWidth = content.theme === "vintage" ? 650 : content.theme === "minimal" ? 1000 : 900;
  ctx.font = messageFont;
  const messageLines = wrappedLines(ctx, content.message || copy.message, messageWidth);
  const lineHeight = Math.round(clamp(content.fontSize, 30, 54) * 1.42);
  const canvasHeight = Math.max(1500, 1190 + messageLines.length * lineHeight + 170);
  canvas.width = 1200;
  canvas.height = canvasHeight;
  const sender = content.sender ? `- ${content.sender}` : `- ${copy.signoff}`;

  if (content.theme === "vintage") drawVintage(ctx, image, content, palette, place, country, messageLines, messageFont, lineHeight, canvasHeight, sender);
  else if (content.theme === "polaroid") drawPolaroid(ctx, image, content, palette, place, country, messageLines, messageFont, lineHeight, canvasHeight, sender);
  else if (content.theme === "airmail") drawAirmail(ctx, image, content, palette, place, country, messageLines, messageFont, lineHeight, canvasHeight, sender);
  else if (content.theme === "scrapbook") drawScrapbook(ctx, image, content, palette, place, country, messageLines, messageFont, lineHeight, canvasHeight, sender);
  else drawMinimal(ctx, image, content, palette, place, country, messageLines, messageFont, lineHeight, canvasHeight, sender);
  drawExperienceBadge(ctx, content, canvasHeight);
  drawQrCode(ctx, content, canvasHeight);
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
  drawPhoto(ctx, image, 100, 100, 1000, 790, palette, content.photoEdit);
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
  drawLines(ctx, lines, 125, 1015, lineHeight, content.textAlign, 650);
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
  drawPhoto(ctx, image, 130, 112, 940, 720, palette, content.photoEdit, 3);
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
  drawLines(ctx, lines, 140, 1100, lineHeight, content.textAlign, 900);
  ctx.font = "italic 31px Georgia, serif";
  ctx.fillText(sender, 140, height - 145);
  drawTape(ctx, 205, 94, 170, -0.08);
  drawTape(ctx, 995, 98, 150, 0.07);
  drawStamp(ctx, content, 930, height - 330);
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
  drawPhoto(ctx, image, 95, 95, 1010, 650, palette, content.photoEdit, 10);
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
  drawLines(ctx, lines, 120, 1000, lineHeight, content.textAlign, 900);
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
  drawPhoto(ctx, image, -450, -335, 900, 650, palette, content.photoEdit);
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
  drawLines(ctx, lines, 130, 1040, lineHeight, content.textAlign, 820);
  ctx.font = "600 30px Georgia, serif";
  ctx.fillText(sender, 130, height - 150);
  ctx.fillStyle = "#d39b37";
  ctx.font = "60px Georgia, serif";
  ctx.fillText("*", 1010, 900);
  ctx.fillText("+", 1048, 965);
  drawStamp(ctx, content, 945, height - 330);
  drawFooter(ctx, content, height, palette.ink);
}

function drawMinimal(ctx: CanvasRenderingContext2D, image: HTMLImageElement | null, content: PostcardContent, palette: Palette, place: string, country: string, lines: string[], font: string, lineHeight: number, height: number, sender: string) {
  ctx.fillStyle = palette.paper;
  ctx.fillRect(0, 0, 1200, height);
  drawPhoto(ctx, image, 65, 65, 710, 805, palette, content.photoEdit, 4);
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
  drawLines(ctx, lines, 90, 1010, lineHeight, content.textAlign, 760);
  ctx.fillStyle = palette.accent;
  ctx.fillRect(90, 935, 1000, 3);
  ctx.fillStyle = palette.ink;
  ctx.font = "600 28px Arial, sans-serif";
  ctx.fillText(sender, 90, height - 145);
  drawStamp(ctx, content, 965, 755);
  drawFooter(ctx, content, height, palette.ink);
}
