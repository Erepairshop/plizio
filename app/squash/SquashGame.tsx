"use client";

import Phaser from "phaser";
import { useEffect, useRef } from "react";

interface Props {
  onGameEnd: (score: number) => void;
  lang?: string;
}

// ── Translations ──────────────────────────────────────────────────────────────
const SQUASH_T = {
  en: {
    tapToServe: "TAP TO SERVE", frontWall: "▲ FRONT WALL",
    plusZone: "⚡ +2 ZONE", serviceLine: "SERVICE LINE",
    niceRally: "🎯 NICE RALLY!", hotStreak: "🔥 HOT STREAK! x10",
    rallyMaster: "⚡ RALLY MASTER! x20", chaosMode: "💀 CHAOS MODE! x30",
    insanity: "🌀 INSANITY! x45", minPaddle: "😈 MINIMUM PADDLE!",
    ghostBall: "👻 GHOST BALL! x60", darkness: "🌑 DARKNESS! x70",
    cornerShot: "🎯 CORNER SHOT! +5", danger: "DANGER!",
    gameOver: "GAME OVER", scoreLbl: "Score:", bestRallyLbl: "Best Rally:",
    maxAngleLbl: "Max Angle:", speedLbl: "SPEED",
    rallyTitle: "RALLY", bestTitle: "BEST", scoreTitle: "SCORE",
  },
  hu: {
    tapToServe: "ÉRINTSD MEG A TÁLALÁSHOZ", frontWall: "▲ ELÜLSŐ FAL",
    plusZone: "⚡ +2 ZÓNA", serviceLine: "TÁLALÓVONAL",
    niceRally: "🎯 SZÉP MENET!", hotStreak: "🔥 TŰZ MENET! x10",
    rallyMaster: "⚡ MENETMESTER! x20", chaosMode: "💀 KÁOSZ MÓD! x30",
    insanity: "🌀 ŐRÜLET! x45", minPaddle: "😈 MINIMUM ÜTŐ!",
    ghostBall: "👻 KAMU LABDA! x60", darkness: "🌑 SÖTÉTSÉG! x70",
    cornerShot: "🎯 SAROKLÖVÉS! +5", danger: "VESZÉLY!",
    gameOver: "JÁTÉK VÉGE", scoreLbl: "Pont:", bestRallyLbl: "Legjobb menet:",
    maxAngleLbl: "Max szög:", speedLbl: "SEBESSÉG",
    rallyTitle: "MENET", bestTitle: "LEGJOBB", scoreTitle: "PONT",
  },
  de: {
    tapToServe: "TIPPEN ZUM AUFSCHLAG", frontWall: "▲ VORDERWAND",
    plusZone: "⚡ +2 ZONE", serviceLine: "AUFSCHLAGLINIE",
    niceRally: "🎯 TOLLER BALLWECHSEL!", hotStreak: "🔥 HEISSE SERIE! x10",
    rallyMaster: "⚡ BALLWECHSEL-MEISTER! x20", chaosMode: "💀 CHAOS-MODUS! x30",
    insanity: "🌀 WAHNSINN! x45", minPaddle: "😈 MINIMAL-SCHLÄGER!",
    ghostBall: "👻 GEISTBALL! x60", darkness: "🌑 DUNKELHEIT! x70",
    cornerShot: "🎯 ECKSCHUSS! +5", danger: "GEFAHR!",
    gameOver: "SPIEL VORBEI", scoreLbl: "Punkte:", bestRallyLbl: "Bester Ballwechsel:",
    maxAngleLbl: "Max Winkel:", speedLbl: "TEMPO",
    rallyTitle: "BALLWECHSEL", bestTitle: "BEST", scoreTitle: "PUNKTE",
  },
  ro: {
    tapToServe: "ATINGE PENTRU SERVICIU", frontWall: "▲ PERETE FRONTAL",
    plusZone: "⚡ +2 ZONĂ", serviceLine: "LINIA DE SERVICIU",
    niceRally: "🎯 SCHIMB FRUMOS!", hotStreak: "🔥 SERIE CALDĂ! x10",
    rallyMaster: "⚡ MAESTRUL SCHIMBULUI! x20", chaosMode: "💀 MOD HAOS! x30",
    insanity: "🌀 NEBUNIE! x45", minPaddle: "😈 PALETĂ MINIMĂ!",
    ghostBall: "👻 MINGE FANTOMĂ! x60", darkness: "🌑 ÎNTUNERIC! x70",
    cornerShot: "🎯 LOV DE COLȚ! +5", danger: "PERICOL!",
    gameOver: "JOC TERMINAT", scoreLbl: "Scor:", bestRallyLbl: "Cel mai bun schimb:",
    maxAngleLbl: "Unghi maxim:", speedLbl: "VITEZĂ",
    rallyTitle: "SCHIMB", bestTitle: "CEL MAI BUN", scoreTitle: "SCOR",
  },
} as const;
type SquashLang = keyof typeof SQUASH_T;

// ─────────────────────────────────────────────────────────────────────────────
// Ball state machine
//   toward_wall  — vy < 0, ball flying up toward front wall
//   return       — vy > 0, ball descending from wall toward player
//   hit_window   — ball is in return state AND within the strike zone above paddle
//                  → ONLY in this state can the player hit the ball
// ─────────────────────────────────────────────────────────────────────────────
type BallState = "toward_wall" | "return" | "hit_window";

class SquashScene extends Phaser.Scene {

  // ── Court boundaries ──────────────────────────────────────────────────────
  private FWY      = 0;   // front wall Y (top)
  private BY       = 0;   // back / player zone Y (bottom)
  private WL       = 0;   // left wall X
  private WR       = 0;   // right wall X
  private DANGER_Y = 0;   // lower 22% of court = danger zone (+2 pts)

  // ── Ball constants ────────────────────────────────────────────────────────
  private readonly BALL_R      = 10;
  private readonly BASE_SPEED  = 420;
  private readonly MAX_SPEED   = 900;
  private readonly MIN_VY      = 150;   // prevent nearly horizontal shots
  private readonly MAX_ANGLE   = 52;    // base max angle from vertical (°)
  private readonly SPEED_PER_5 = 0.05;  // +5% speed every 5 paddle hits

  // ── Paddle constants ──────────────────────────────────────────────────────
  private PAD_W                  = 68;   // visual half-width — shrinks with rally
  private readonly BASE_PAD_W   = 68;   // reset value
  private readonly PAD_H         = 12;   // visual height  (was 14, slightly slimmer)
  private readonly PAD_HIT_W     = 88;   // hitbox half-width — larger than sprite
  private readonly PAD_LERP      = 0.25;  // lerp factor: paddle.x → target (smooth following)
  private readonly PAD_MAX_SPEED = 800;   // px/s hard speed cap (realistic + fair)

  // ── State objects ─────────────────────────────────────────────────────────
  private ball!:         Phaser.GameObjects.Arc;
  private paddleGfx!:    Phaser.GameObjects.Graphics;
  private trailGfx!:     Phaser.GameObjects.Graphics;
  private courtGfx!:     Phaser.GameObjects.Graphics;
  private hitWindowGfx!: Phaser.GameObjects.Graphics;  // hit window indicator
  private comboBarGfx!:  Phaser.GameObjects.Graphics;  // rally combo bar
  private edgeGlowGfx!:  Phaser.GameObjects.Graphics;  // danger zone screen edge

  private bx = 0;  // ball position
  private by = 0;
  private vx = 0;  // ball velocity
  private vy = 0;
  // Fake-Z depth: ballZ=0 = on court, ballZ>0 = in the air, shadow scales with it
  private ballZ  = 0;   // current height above court (px)
  private ballVZ = 0;   // vertical Z velocity (positive = rising)

  // ── Paddle state (smoothed) ───────────────────────────────────────────────
  private padX       = 0;    // actual rendered paddle center
  private padTargetX = 0;    // desired position (driven by input)
  private padPrevX   = 0;    // previous frame position
  private padVelX    = 0;    // measured paddle velocity (for spin + momentum)

  // ── Paddle squish (hit feel) ───────────────────────────────────────────────
  private padSquish       = 1.0;   // current width scale (1.0 = normal)
  private squishElapsed   = 0;     // ms remaining in squish animation
  private readonly SQUISH_DUR = 200;   // ms: total squish+return duration
  private readonly SQUISH_AMT = 0.14;  // how much wider: 1.0 → 1.14 → 1.0

  // ── Ball state machine ────────────────────────────────────────────────────
  private ballState: BallState = "toward_wall";

  // ── Game progression ──────────────────────────────────────────────────────
  private rally       = 0;
  private bestRally   = 0;
  private score       = 0;
  private speedMult   = 1.0;

  public lang: string = "en";
  private get tr() { return SQUASH_T[(this.lang as SquashLang)] ?? SQUASH_T.en; }

  // ── Phase flags ───────────────────────────────────────────────────────────
  private hitCooldown  = 0;
  private gameOver     = false;
  private serving      = true;
  private missPhase: "none" | "rolling" = "none";
  private inDangerZone = false;

  // ── Post-50 hell mechanics ────────────────────────────────────────────────
  private padAlpha       = 1.0;
  private padInvisTimer  = 4000;
  private padInvisActive = false;
  private ghosts: Array<{ gfx: Phaser.GameObjects.Graphics; x: number; y: number; vx: number; vy: number; life: number }> = [];
  private darkOverlay!:  Phaser.GameObjects.Graphics;

  private trail: { x: number; y: number }[] = [];

  // ── HUD ───────────────────────────────────────────────────────────────────
  private rallyTxt!:  Phaser.GameObjects.Text;
  private bestTxt!:   Phaser.GameObjects.Text;
  private scoreTxt!:  Phaser.GameObjects.Text;
  private serveTxt!:  Phaser.GameObjects.Text;
  private speedTxt!:  Phaser.GameObjects.Text;

  // ── Input ─────────────────────────────────────────────────────────────────
  private leftKey!:  Phaser.Input.Keyboard.Key;
  private rightKey!: Phaser.Input.Keyboard.Key;
  private aKey!:     Phaser.Input.Keyboard.Key;
  private dKey!:     Phaser.Input.Keyboard.Key;
  private spaceKey!: Phaser.Input.Keyboard.Key;
  private touchX   = -1;
  private tapServe = false;

  public onGameEnd!: (score: number) => void;

  constructor() { super({ key: "SquashScene" }); }

  preload() {}

  // ── create ────────────────────────────────────────────────────────────────
  create() {
    const W = this.scale.width;
    const H = this.scale.height;

    this.FWY      = Math.round(H * 0.09);
    this.BY       = Math.round(H * 0.91);
    this.WL       = Math.round(W * 0.04);
    this.WR       = Math.round(W * 0.96);
    this.DANGER_Y = this.BY - (this.BY - this.FWY) * 0.22;

    this.padX       = W / 2;
    this.padTargetX = W / 2;
    this.padPrevX   = W / 2;

    // Background
    this.add.rectangle(W / 2, H / 2, W, H, 0x050f05);

    // Court
    this.courtGfx = this.add.graphics();
    this.drawCourt();

    // ── HUD ──────────────────────────────────────────────────────────────
    this.add.text(W / 2, 12, this.tr.scoreTitle, {
      fontSize: "9px", fontFamily: "monospace",
      color: "#ffffff55", fontStyle: "bold",
    }).setOrigin(0.5).setDepth(10);

    this.scoreTxt = this.add.text(W / 2, 28, "0", {
      fontSize: "34px", fontFamily: "monospace",
      color: "#00ff88", fontStyle: "bold",
    }).setOrigin(0.5).setDepth(10);

    this.add.text(W * 0.25, 12, this.tr.rallyTitle, {
      fontSize: "9px", fontFamily: "monospace",
      color: "#ffffff44", fontStyle: "bold",
    }).setOrigin(0.5).setDepth(10);

    this.rallyTxt = this.add.text(W * 0.25, 28, "0", {
      fontSize: "22px", fontFamily: "monospace",
      color: "#ffffff70", fontStyle: "bold",
    }).setOrigin(0.5).setDepth(10);

    this.add.text(W - 12, 12, this.tr.bestTitle, {
      fontSize: "9px", fontFamily: "monospace",
      color: "#ffffff44", fontStyle: "bold",
    }).setOrigin(1, 0).setDepth(10);

    this.bestTxt = this.add.text(W - 12, 24, "0", {
      fontSize: "20px", fontFamily: "monospace",
      color: "#ffd70088", fontStyle: "bold",
    }).setOrigin(1, 0).setDepth(10);

    // Speed indicator
    this.speedTxt = this.add.text(W - 12, 48, "", {
      fontSize: "9px", fontFamily: "monospace",
      color: "#ff2d7888",
    }).setOrigin(1, 0).setDepth(10);

    // Serve prompt
    this.serveTxt = this.add.text(W / 2, H * 0.64, this.tr.tapToServe, {
      fontSize: "15px", fontFamily: "monospace",
      color: "#00d4ffcc", fontStyle: "bold",
    }).setOrigin(0.5).setDepth(15);

    this.tweens.add({
      targets: this.serveTxt,
      alpha: 0.1,
      duration: 480,
      yoyo: true,
      repeat: -1,
      ease: "Sine.InOut",
    });

    // Dark overlay (above court floor, below trail/ball/paddle)
    this.darkOverlay = this.add.graphics().setDepth(1);

    // Trail, ball, paddle, hit-window indicator, combo bar, edge glow
    this.edgeGlowGfx  = this.add.graphics().setDepth(2);
    this.trailGfx     = this.add.graphics().setDepth(3);
    this.hitWindowGfx = this.add.graphics().setDepth(4);
    this.ball         = this.add.arc(0, 0, this.BALL_R, 0, 360, false, 0xffd700, 1);
    this.ball.setDepth(6);
    this.paddleGfx    = this.add.graphics().setDepth(7);
    this.comboBarGfx  = this.add.graphics().setDepth(11);

    // Input
    this.leftKey  = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    this.rightKey = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    this.aKey     = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.dKey     = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.spaceKey = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    this.input.on("pointermove", (p: Phaser.Input.Pointer) => {
      if (p.isDown) this.touchX = p.x;
    });
    this.input.on("pointerdown", (p: Phaser.Input.Pointer) => {
      this.touchX = p.x;
      if (this.serving) this.tapServe = true;
    });
    this.input.on("pointerup", () => { this.touchX = -1; });

    this.positionBallOnPaddle();
  }

  // ── drawCourt ─────────────────────────────────────────────────────────────
  private drawCourt() {
    const g = this.courtGfx;
    g.clear();

    const { WL, WR, FWY, BY, DANGER_Y } = this;
    const cw   = WR - WL;
    const ch   = BY - FWY;
    const midY = FWY + ch * 0.55;

    // ── 1. FLOOR GRADIENT (top light → bottom dark via 16 strips) ──────────
    const STRIPS = 16;
    const sh = ch / STRIPS;
    for (let i = 0; i < STRIPS; i++) {
      const t   = i / (STRIPS - 1);          // 0 = top, 1 = bottom
      const lum = Phaser.Math.Linear(0x1a, 0x08, t);  // 0x1a → 0x08
      const col = (lum << 16) | (Math.round(lum * 1.9) << 8) | lum;
      g.fillStyle(col, 1);
      g.fillRect(WL, FWY + i * sh, cw, sh + 1); // +1 to avoid sub-pixel gap
    }

    // ── 2. SIDE WALL BANDS (translucent inner vertical strips) ─────────────
    const bandW = Math.round(cw * 0.045);
    g.fillStyle(0x00ff88, 0.04);
    g.fillRect(WL,        FWY, bandW, ch);
    g.fillRect(WR - bandW, FWY, bandW, ch);

    // ── 3. DANGER ZONE RECTANGLE ───────────────────────────────────────────
    g.fillStyle(0xff2d78, 0.07);
    g.fillRect(WL, DANGER_Y, cw, BY - DANGER_Y);
    // Danger zone top edge glow strip
    g.fillStyle(0xff2d78, 0.18);
    g.fillRect(WL, DANGER_Y - 1, cw, 3);

    // ── 4. SERVICE LINE ────────────────────────────────────────────────────
    g.lineStyle(1, 0x00ff88, 0.12);
    g.lineBetween(WL, midY, WR, midY);

    // ── 5. FRONT WALL — glow halo + bright line + shadow strip below ───────
    // Wide diffuse halo
    g.lineStyle(18, 0x00ff88, 0.07);
    g.lineBetween(WL, FWY, WR, FWY);
    // Medium soft glow
    g.lineStyle(9, 0x00ff88, 0.18);
    g.lineBetween(WL, FWY, WR, FWY);
    // Sharp bright line
    g.lineStyle(2.5, 0x00ff88, 1.0);
    g.lineBetween(WL, FWY, WR, FWY);
    // Shadow strip below front wall (depth illusion)
    g.fillStyle(0x000000, 0.18);
    g.fillRect(WL, FWY + 1, cw, 8);

    // ── 6. SIDE WALLS — bright line + inner shadow ─────────────────────────
    // Outer bright edge
    g.lineStyle(3, 0x00ee77, 0.80);
    g.lineBetween(WL, FWY, WL, BY);
    g.lineBetween(WR, FWY, WR, BY);
    // Inner shadow strip for depth
    g.fillStyle(0x000000, 0.12);
    g.fillRect(WL + 3, FWY, 6, ch);
    g.fillRect(WR - 9, FWY, 6, ch);

    // ── 7. COURT FRAME BOTTOM — dimmer floor line ──────────────────────────
    g.lineStyle(2, 0x224422, 0.55);
    g.lineBetween(WL, BY, WR, BY);

    // ── 8. LABELS ──────────────────────────────────────────────────────────
    this.add.text(WL + bandW + 6, FWY - 20, this.tr.frontWall, {
      fontSize: "8px", color: "#00ff8899",
      fontFamily: "monospace", fontStyle: "bold",
      stroke: "#00220022", strokeThickness: 2,
    }).setDepth(10);

    this.add.text(WR - bandW - 6, DANGER_Y - 16, this.tr.plusZone, {
      fontSize: "8px", color: "#ff2d78cc",
      fontFamily: "monospace", fontStyle: "bold",
      stroke: "#22000022", strokeThickness: 2,
    }).setOrigin(1, 0).setDepth(10);

    this.add.text((WL + WR) / 2, midY + 3, this.tr.serviceLine, {
      fontSize: "7px", color: "#00ff8833",
      fontFamily: "monospace",
    }).setOrigin(0.5, 0).setDepth(10);
  }

  // ── positionBallOnPaddle ──────────────────────────────────────────────────
  private positionBallOnPaddle() {
    const padY = this.BY - this.PAD_H - 6;
    this.by    = padY - this.BALL_R - 2;
    this.bx    = this.padX;
    this.ball.x = this.bx;
    this.ball.y = this.by;
  }

  // ── launchBall ────────────────────────────────────────────────────────────
  private launchBall() {
    this.serving  = false;
    this.tapServe = false;
    this.serveTxt.setVisible(false);
    this.ballState = "toward_wall";

    const spd   = Math.min(this.BASE_SPEED * this.speedMult, this.MAX_SPEED);
    const angle = Phaser.Math.FloatBetween(-20, 20);
    this.vx =  Math.sin(Phaser.Math.DegToRad(angle)) * spd;
    this.vy = -Math.cos(Phaser.Math.DegToRad(angle)) * spd;
    this.clampBallAngle();
  }

  // ── resetToServe ──────────────────────────────────────────────────────────
  private resetToServe() {
    this.missPhase    = "none";
    this.inDangerZone = false;
    this.rally        = 0;
    this.rallyTxt.setText("0");
    this.PAD_W        = this.BASE_PAD_W;  // restore paddle size each round
    this.padSquish    = 1.0;              // reset squish animation
    this.squishElapsed = 0;
    this.padAlpha      = 1.0;
    this.padInvisTimer  = 4000;
    this.padInvisActive = false;
    this.ghosts.forEach(g => g.gfx.destroy());
    this.ghosts = [];
    this.darkOverlay.clear();
    this.ballZ        = 0;
    this.ballVZ       = 0;
    this.vx = 0;
    this.vy = 0;
    this.trail = [];
    this.trailGfx.clear();
    this.hitWindowGfx.clear();

    this.serving  = true;
    this.tapServe = false;
    this.ballState = "toward_wall";
    this.serveTxt.setVisible(true);
    this.serveTxt.setAlpha(1);

    this.positionBallOnPaddle();
  }

  // ── clampBallAngle — stabilise trajectory ────────────────────────────────
  // Prevents shots from becoming too horizontal (frustrating to play)
  // and gently nudges ball away from walls when too close.
  private clampBallAngle() {
    // 1. Hard cap: angle from vertical ≤ dynamicMaxAngle
    const maxAng = this.getDynamicMaxAngle();
    const absVy  = Math.abs(this.vy);
    const maxVx  = absVy * Math.tan(Phaser.Math.DegToRad(maxAng));
    this.vx = Phaser.Math.Clamp(this.vx, -maxVx, maxVx);

    // 2. Wall-edge nudge: if ball near wall and moving toward it, push it away
    const edgeMargin = (this.WR - this.WL) * 0.07;
    if (this.bx < this.WL + edgeMargin && this.vx < 0) {
      this.vx += Math.abs(this.vx) * 0.35 + 20;
    }
    if (this.bx > this.WR - edgeMargin && this.vx > 0) {
      this.vx -= Math.abs(this.vx) * 0.35 + 20;
    }

    // 3. Min vertical speed (always)
    if (Math.abs(this.vy) < this.MIN_VY) {
      this.vy = this.vy >= 0 ? this.MIN_VY : -this.MIN_VY;
    }

    // 4. Cap total speed
    const spd = Math.hypot(this.vx, this.vy);
    if (spd > this.MAX_SPEED) {
      const s = this.MAX_SPEED / spd;
      this.vx *= s;
      this.vy *= s;
    }
  }

  // ── getDynamicMaxAngle — rally-driven angle widening ─────────────────────
  // Rally 0-9 : 52° (controlled)
  // Rally 10-19: 60° (wider, trickier)
  // Rally 20+  : 66° (challenging)
  private getDynamicMaxAngle(): number {
    if (this.rally >= 20) return 66;
    if (this.rally >= 10) return 60;
    return this.MAX_ANGLE;
  }

  // ── smoothPaddle ─────────────────────────────────────────────────────────
  // 1. Input drives padTargetX (keyboard: step, touch: direct)
  // 2. padX = lerp(padX, padTargetX, 0.25)  ← smooth following, no jerking
  // 3. Speed cap: padX can't move more than PAD_MAX_SPEED px/s per frame
  // 4. Edge clamping: paddle never exits left/right walls
  private smoothPaddle(dt: number) {
    const { WL, WR, PAD_W, PAD_LERP, PAD_MAX_SPEED } = this;
    const padMin = WL + PAD_W;
    const padMax = WR - PAD_W;

    // ── 1. Drive target ───────────────────────────────────────────────────
    const kbStep = PAD_MAX_SPEED * dt;
    if (this.leftKey.isDown  || this.aKey.isDown)  this.padTargetX -= kbStep;
    if (this.rightKey.isDown || this.dKey.isDown)  this.padTargetX += kbStep;
    if (this.touchX >= 0) this.padTargetX = this.touchX;  // direct touch target

    // ── 2. Edge clamp on target ───────────────────────────────────────────
    this.padTargetX = Phaser.Math.Clamp(this.padTargetX, padMin, padMax);

    // ── 3. Smooth lerp: paddle.x = lerp(paddle.x, target, 0.25) ──────────
    const newPadX = Phaser.Math.Linear(this.padX, this.padTargetX, PAD_LERP);

    // ── 4. Speed cap — prevents gap-jump on large pointer jumps ──────────
    const maxDelta = PAD_MAX_SPEED * dt;
    this.padX = Phaser.Math.Clamp(newPadX, this.padX - maxDelta, this.padX + maxDelta);

    // ── 5. Hard edge clamp on actual position ─────────────────────────────
    this.padX = Phaser.Math.Clamp(this.padX, padMin, padMax);

    // ── 6. Pressure Zone: danger zone = wobbly paddle control ─────────────
    if (this.inDangerZone && !this.serving) {
      this.padTargetX += Phaser.Math.FloatBetween(-6, 6);
      this.padVelX    *= 0.95;
    }
  }

  // ── update ────────────────────────────────────────────────────────────────
  update(time: number, delta: number) {
    if (this.gameOver) return;

    const dt = Math.min(delta / 1000, 0.033);

    if (this.hitCooldown > 0) this.hitCooldown -= delta;

    // ── Paddle: smooth movement ───────────────────────────────────────────
    this.padPrevX = this.padX;
    this.smoothPaddle(dt);
    this.padVelX = (this.padX - this.padPrevX) / Math.max(dt, 0.001);

    // ── Squish animation: peak on hit, decay linearly back to 1.0 ────────
    if (this.squishElapsed > 0) {
      this.squishElapsed = Math.max(0, this.squishElapsed - delta);
      const t = this.squishElapsed / this.SQUISH_DUR;   // 1 → 0
      this.padSquish = 1.0 + this.SQUISH_AMT * t;       // 1.14 → 1.0
    }

    // ── Draw paddle (full visual: shadow, glow, body, highlights) ────────
    const { PAD_H, BY } = this;
    const padY     = BY - PAD_H - 6;
    const isWindow = this.ballState === "hit_window";
    this.drawPaddle(padY, isWindow);

    // ── Paddle invisibility (rally 50+) ───────────────────────────────────
    if (this.rally >= 50 && !this.serving) {
      this.padInvisTimer -= delta;
      if (!this.padInvisActive && this.padInvisTimer <= 0) {
        this.padInvisActive = true;
        this.padInvisTimer  = 800;
      } else if (this.padInvisActive && this.padInvisTimer <= 0) {
        this.padInvisActive = false;
        this.padInvisTimer  = Math.max(1500, 4000 - (this.rally - 50) * 40);
      }
      this.padAlpha = Phaser.Math.Linear(this.padAlpha, this.padInvisActive ? 0.05 : 1.0, 0.12);
    } else {
      this.padAlpha = 1.0;
    }
    this.paddleGfx.setAlpha(this.padAlpha);

    // ── Hit-window indicator: pulsing vertical guides ────────────────────
    this.hitWindowGfx.clear();
    if (isWindow) {
      const pulse = 0.18 + Math.sin(time * 0.012) * 0.12;   // 0.06 – 0.30
      const scale = 1 + Math.sin(time * 0.012) * 0.04;       // 0.96 – 1.04
      const guideH = 52 * scale;
      this.hitWindowGfx.lineStyle(2, 0x00ff88, pulse);
      this.hitWindowGfx.lineBetween(this.padX - this.PAD_HIT_W, padY - guideH, this.padX - this.PAD_HIT_W, padY);
      this.hitWindowGfx.lineBetween(this.padX + this.PAD_HIT_W, padY - guideH, this.padX + this.PAD_HIT_W, padY);
      // Soft horizontal arc at top of window
      this.hitWindowGfx.lineStyle(1, 0x00ff88, pulse * 0.5);
      this.hitWindowGfx.lineBetween(this.padX - this.PAD_HIT_W, padY - guideH, this.padX + this.PAD_HIT_W, padY - guideH);
    }

    // ── Danger zone pulsing glow — when ball is inside ───────────────────
    if (this.inDangerZone && !this.serving) {
      const dPulse = 0.06 + Math.sin(time * 0.018) * 0.05;
      this.hitWindowGfx.fillStyle(0xff2d78, dPulse);
      this.hitWindowGfx.fillRect(this.WL, this.DANGER_Y, this.WR - this.WL, this.BY - this.DANGER_Y);
    }

    // ── Combo bar (below rally text) ─────────────────────────────────────
    this.drawComboBar(time);

    // ── Dark overlay (rally 70+) — covers floor/walls, ball+paddle stay lit ─
    if (this.rally >= 70) {
      const darkAlpha = Math.min((this.rally - 70) / 30 * 0.82, 0.82);
      this.darkOverlay.clear();
      this.darkOverlay.fillStyle(0x000000, darkAlpha);
      this.darkOverlay.fillRect(0, 0, this.scale.width, this.scale.height);
    } else {
      this.darkOverlay.clear();
    }

    // ── Screen edge danger glow ───────────────────────────────────────────
    this.edgeGlowGfx.clear();
    if (this.inDangerZone && !this.serving) {
      const W = this.scale.width;
      const H = this.scale.height;
      const ep = 0.07 + Math.sin(time * 0.018) * 0.05;
      // Red vignette on all four edges
      for (let i = 0; i < 4; i++) {
        this.edgeGlowGfx.fillStyle(0xff2d78, ep * (1 - i * 0.22));
        this.edgeGlowGfx.fillRect(0, H - (i + 1) * 12, W, 12);
      }
    }

    // ── Score text color: danger = warmer red ─────────────────────────────
    if (this.inDangerZone && !this.serving) {
      this.scoreTxt.setColor("#ff8844");
    } else {
      this.scoreTxt.setColor("#00ff88");
    }

    // ── SERVING PHASE ────────────────────────────────────────────────────
    if (this.serving) {
      this.bx = this.padX;
      this.by = padY - this.BALL_R - 2 + Math.sin(time * 0.004) * 3;
      this.ball.x = this.bx;
      this.ball.y = this.by;

      if (this.tapServe || Phaser.Input.Keyboard.JustDown(this.spaceKey)) {
        this.launchBall();
      }
      return;
    }

    // ── MISS ROLLING PHASE ───────────────────────────────────────────────
    if (this.missPhase === "rolling") {
      this.vy += 900 * dt;
      this.vx *= (1 - dt * 1.8);
      this.bx += this.vx * dt;
      this.by += this.vy * dt;

      this.trail.push({ x: this.bx, y: this.by });
      if (this.trail.length > 8) this.trail.shift();
      this.trailGfx.clear();
      for (let i = 0; i < this.trail.length; i++) {
        const t = i / this.trail.length;
        this.trailGfx.fillStyle(0xff2d78, t * 0.30);
        this.trailGfx.fillCircle(this.trail[i].x, this.trail[i].y, this.BALL_R * (0.3 + t * 0.7));
      }
      this.ball.x = this.bx;
      this.ball.y = this.by;

      if (this.by - this.BALL_R > BY + 80) this.handleLifeLost();
      return;
    }

    // ── NORMAL PLAY: physics ──────────────────────────────────────────────
    this.bx += this.vx * dt;
    this.by += this.vy * dt;

    // ── Trail + shadow drawn together in trailGfx ────────────────────────
    this.trailGfx.clear();

    // ── Fake-Z: ball launches up on hit, gravity pulls it back ───────────
    this.ballZ  += this.ballVZ * dt;
    this.ballVZ -= 1800 * dt;   // Z gravity (stronger = snappier arc)
    if (this.ballZ <= 0) { this.ballZ = 0; this.ballVZ = 0; }
    // Shadow: grows with Z, offset slightly down
    const shadowScale = 1 + this.ballZ * 0.012;
    const shadowAlpha = Math.max(0.10, 0.30 - this.ballZ * 0.004);
    this.trailGfx.fillStyle(0x000000, shadowAlpha);
    this.trailGfx.fillEllipse(this.bx, this.by + this.BALL_R + 2, this.BALL_R * 2.6 * shadowScale, this.BALL_R * 0.9);

    // ── Trail — dynamic length based on speed ────────────────────────────
    const spd2d = Math.hypot(this.vx, this.vy);
    const maxTrail = Phaser.Math.Clamp(Math.floor(spd2d / 80), 6, 16);
    this.trail.push({ x: this.bx, y: this.by });
    if (this.trail.length > maxTrail) this.trail.shift();
    const trailColor = isWindow ? 0x00ff88 : 0xffd700;
    for (let i = 0; i < this.trail.length; i++) {
      const t = i / this.trail.length;
      this.trailGfx.fillStyle(trailColor, t * 0.35);
      this.trailGfx.fillCircle(this.trail[i].x, this.trail[i].y, this.BALL_R * (0.3 + t * 0.7));
    }

    // ── Ghost balls update (rally 60+) ────────────────────────────────────
    if (this.ghosts.length > 0) {
      const alive: typeof this.ghosts = [];
      for (const ghost of this.ghosts) {
        ghost.x   += ghost.vx * dt;
        ghost.y   += ghost.vy * dt;
        ghost.life -= delta;
        if (ghost.life > 0 && ghost.y < this.BY + 20) {
          ghost.gfx.clear();
          ghost.gfx.fillStyle(0xffd700, (ghost.life / 700) * 0.6);
          ghost.gfx.fillCircle(ghost.x, ghost.y, this.BALL_R);
          alive.push(ghost);
        } else {
          ghost.gfx.destroy();
        }
      }
      this.ghosts = alive;
    }

    this.ball.x = this.bx;
    this.ball.y = this.by - this.ballZ;   // visual Y offset by Z

    const { BALL_R, FWY, DANGER_Y } = this;

    // Danger zone tracking
    if (this.by > DANGER_Y) this.inDangerZone = true;

    // ── Rally tension + Mercy Chaos ───────────────────────────────────────
    if (this.rally > 25) {
      const tensionFactor = 1 + 0.03 * dt;   // ~3% / second extra push
      const newSpd = Math.hypot(this.vx * tensionFactor, this.vy * tensionFactor);
      if (newSpd <= this.MAX_SPEED) {
        this.vx *= tensionFactor;
        this.vy *= tensionFactor;
      }
    }
    // Mercy Chaos: rally>30 = speed pulse per hit; rally>45 = random drift
    if (this.rally > 30) {
      this.vx *= 1 + 0.03 * dt;
      this.vy *= 1 + 0.03 * dt;
    }
    if (this.rally > 45) {
      this.vx += Phaser.Math.FloatBetween(-120, 120) * dt;
    }

    // ── Ball state transitions ────────────────────────────────────────────
    const HIT_ZONE_H = 60;   // px above paddle top
    const padTop     = padY;

    if (this.vy < 0) {
      // Moving upward
      this.ballState = "toward_wall";
    } else {
      // Moving downward — check if inside strike zone (uses PAD_HIT_W, wider than sprite)
      const inZone = (
        this.by + BALL_R >= padTop - HIT_ZONE_H &&
        this.by - BALL_R <= padTop + PAD_H + 4 &&
        this.bx + BALL_R >= this.padX - this.PAD_HIT_W &&
        this.bx - BALL_R <= this.padX + this.PAD_HIT_W
      );
      this.ballState = inZone ? "hit_window" : "return";
    }

    // ── Front wall bounce ─────────────────────────────────────────────────
    if (this.by - BALL_R <= FWY && this.vy < 0) {
      this.by = FWY + BALL_R;
      this.vy = Math.abs(this.vy);
      // Chaos Drift: deflection grows with rally (±2° at rally 0, ±18° at rally 30+)
      const chaos = Phaser.Math.Clamp(this.rally * 0.6, 2, 18);
      const spd0 = Math.hypot(this.vx, this.vy);
      const ang0 = Math.atan2(this.vx, this.vy); // angle from vertical
      const ang1 = ang0 + Phaser.Math.DegToRad(Phaser.Math.FloatBetween(-chaos, chaos));
      this.vx = Math.sin(ang1) * spd0;
      this.vy = Math.abs(Math.cos(ang1) * spd0); // must be positive (return)
      this.ballState = "return";
      this.clampBallAngle();
      // ── Ghost decoy (rally 60+): spawn fake ball heading different direction ─
      if (this.rally >= 60) {
        const gAng = Phaser.Math.FloatBetween(-50, 50);
        const gSpd = Math.hypot(this.vx, this.vy) * Phaser.Math.FloatBetween(0.85, 1.15);
        const gg   = this.add.graphics().setDepth(5);
        this.ghosts.push({
          gfx: gg, x: this.bx, y: this.by,
          vx: Math.sin(Phaser.Math.DegToRad(gAng)) * gSpd,
          vy: Math.abs(Math.cos(Phaser.Math.DegToRad(gAng))) * gSpd,
          life: 700,
        });
      }
      // ── Skill shot: corner zones (within 60px of side wall, top of front wall)
      const isCorner = (this.bx < this.WL + 60 || this.bx > this.WR - 60);
      if (isCorner) {
        this.spawnRipple(this.bx, FWY, 0xffaa00);   // gold ripple
        this.spawnRipple(this.bx, FWY, 0xff6600);
        this.addScorePopup(5, this.bx, FWY - 20, false);
        this.showMilestoneBanner(this.tr.cornerShot, "#ffaa00");
        this.cameras.main.shake(20, 0.005);
      } else {
        this.spawnRipple(this.bx, FWY, 0x00ff88);
        this.addScoreSilent(1);  // wall = +1, no popup
      }
    }

    // ── Left wall ─────────────────────────────────────────────────────────
    if (this.bx - BALL_R <= this.WL && this.vx < 0) {
      this.bx = this.WL + BALL_R;
      this.vx = Math.abs(this.vx);
      // Side wall: small extra nudge inward + 1.08× speed burst
      this.vx *= 1.08;
      this.vy *= 1.08;
      this.vx += Phaser.Math.FloatBetween(10, 30); // kick away from wall
      this.clampBallAngle();
      this.spawnRipple(this.WL, this.by, 0x336633);
      this.addScoreSilent(1);
    }

    // ── Right wall ────────────────────────────────────────────────────────
    if (this.bx + BALL_R >= this.WR && this.vx > 0) {
      this.bx = this.WR - BALL_R;
      this.vx = -Math.abs(this.vx);
      // Side wall: small extra nudge inward + 1.08× speed burst
      this.vx *= 1.08;
      this.vy *= 1.08;
      this.vx -= Phaser.Math.FloatBetween(10, 30); // kick away from wall
      this.clampBallAngle();
      this.spawnRipple(this.WR, this.by, 0x336633);
      this.addScoreSilent(1);
    }

    // ── Near-miss detection ───────────────────────────────────────────────
    const nearMiss = (
      this.by + BALL_R >= padTop - HIT_ZONE_H &&
      this.by - BALL_R <= padTop + PAD_H + 4 &&
      Math.abs(this.bx - this.padX) > this.PAD_HIT_W &&
      Math.abs(this.bx - this.padX) < this.PAD_HIT_W + 40
    );
    if (nearMiss && this.hitCooldown <= 0) {
      this.cameras.main.zoomTo(1.08, 70);
      this.time.delayedCall(110, () => this.cameras.main.zoomTo(1, 130));
    }

    // ── Paddle hit — ONLY when ballState === "hit_window" ────────────────
    if (this.ballState === "hit_window" && this.hitCooldown <= 0) {
      this.processHit(padTop);
    }

    // ── Miss: ball exits below court ──────────────────────────────────────
    if (this.by - BALL_R > BY + 20 && this.missPhase === "none") {
      this.triggerMiss();
    }
  }

  // ── processHit ────────────────────────────────────────────────────────────
  private processHit(padTop: number) {
    this.rally++;
    this.rallyTxt.setText(String(this.rally));
    if (this.rally > this.bestRally) {
      this.bestRally = this.rally;
      this.bestTxt.setText(String(this.bestRally));
    }

    // ── Rally dynamics: +5% speed every hit (compound) ───────────────────
    const cappedMult = Math.min(this.speedMult * (1 + this.SPEED_PER_5), this.MAX_SPEED / this.BASE_SPEED);
    if (cappedMult > this.speedMult) {
      this.speedMult = cappedMult;
      // Flash every 5 hits to signal milestone
      if (this.rally % 5 === 0) this.flashSpeedUp();
    }

    // ── Perfect hit detection (center 25% of paddle) ─────────────────────
    const perfect = Math.abs(this.bx - this.padX) < this.PAD_W * 0.25;

    // ── Ball velocity after hit ───────────────────────────────────────────
    const spd      = Math.min(this.BASE_SPEED * this.speedMult, this.MAX_SPEED);
    const hitFrac  = Phaser.Math.Clamp((this.bx - this.padX) / this.PAD_W, -1, 1);
    const maxAng   = this.getDynamicMaxAngle();  // widens with rally
    const hitAngle = hitFrac * maxAng;

    this.vx = Math.sin(Phaser.Math.DegToRad(hitAngle)) * spd;
    this.vy = -Math.cos(Phaser.Math.DegToRad(hitAngle)) * spd; // upward

    // Edge shot: outer 20% of paddle = sharper angle (riskier but rewarding)
    if (Math.abs(hitFrac) > 0.8) {
      this.vx *= 1.3;
    }

    // Paddle momentum spin — 0.18 for stronger swing feel
    const spin = Phaser.Math.Clamp(this.padVelX * 0.18, -80, 80);
    this.vx += spin;
    this.vx += Phaser.Math.FloatBetween(-10, 10);

    this.ballState = "toward_wall";
    this.clampBallAngle();

    this.by          = padTop - this.BALL_R - 2;
    this.ballZ       = 0;
    this.ballVZ      = 220 + spd * 0.12;  // bigger hit = bigger Z arc
    this.hitCooldown = 180;
    // Squish: paddle instantly widens, then eases back to 1.0
    this.padSquish      = 1.0 + this.SQUISH_AMT;
    this.squishElapsed  = this.SQUISH_DUR;
    this.triggerHitFlash(this.bx, padTop);
    this.cameras.main.shake(16, 0.003);

    if (perfect) {
      // Perfect hit: extra speed boost, gold ripples, bigger score
      this.speedMult = Math.min(this.speedMult + 0.05, this.MAX_SPEED / this.BASE_SPEED);
      this.spawnRipple(this.bx, this.by, 0xffdd00);
      this.spawnRipple(this.bx, this.by + 6, 0xffaa00);
      const bonus = this.inDangerZone;
      const pts   = bonus ? 4 : 3;   // perfect: 3 or 4 pts
      this.addScorePopup(pts, this.bx, this.by - 28, true);
      this.cameras.main.shake(22, 0.005);
    } else {
      this.spawnRipple(this.bx, this.by, 0x00d4ff);
      const bonus = this.inDangerZone;
      const pts   = bonus ? 2 : 1;
      this.addScorePopup(pts, this.bx, this.by - 22, bonus);
    }
    this.inDangerZone = false;

    // ── Paddle shrink with rally — gradual: rally 0→50 = 100%→37% size ──
    const prevPadW = this.PAD_W;
    const MIN_PAD_W = 25;  // absolute minimum half-width (50px total)
    this.PAD_W = Math.max(MIN_PAD_W, Math.round(this.BASE_PAD_W * (1 - Math.min(this.rally, 50) / 50 * 0.63)));
    if (this.PAD_W < prevPadW && this.rally === 50) {
      this.showMilestoneBanner(this.tr.minPaddle, "#ff6600");
    }

    // Rally pulse
    this.tweens.add({
      targets: this.rallyTxt,
      scaleX: 1.35, scaleY: 1.35,
      duration: 70,
      yoyo: true,
      ease: "Back.Out",
    });

    // ── Rally color: white → green → yellow → red ────────────────────────
    const rallyColor =
      this.rally >= 30 ? "#ff4444" :
      this.rally >= 20 ? "#ffcc00" :
      this.rally >= 10 ? "#00ff88" : "#ffffff99";
    this.rallyTxt.setColor(rallyColor);

    // ── Rally milestone banners ───────────────────────────────────────────
    if (this.rally ===  5) this.showMilestoneBanner(this.tr.niceRally,   "#ffffff");
    if (this.rally === 10) this.showMilestoneBanner(this.tr.hotStreak,   "#00d4ff");
    if (this.rally === 20) this.showMilestoneBanner(this.tr.rallyMaster, "#ffcc00");
    if (this.rally === 30) this.showMilestoneBanner(this.tr.chaosMode,   "#ff4444");
    if (this.rally === 45) this.showMilestoneBanner(this.tr.insanity,    "#ff00ff");
    if (this.rally === 60) this.showMilestoneBanner(this.tr.ghostBall,  "#dd88ff");
    if (this.rally === 70) this.showMilestoneBanner(this.tr.darkness,   "#cc88ff");
  }

  // ── triggerMiss ───────────────────────────────────────────────────────────
  private triggerMiss() {
    this.missPhase = "rolling";
    this.ballState = "return"; // keep it consistent
    this.hitWindowGfx.clear();

    // Slow-mo "oh no" effect
    this.vx *= 0.22;
    this.vy  = Math.abs(this.vy) * 0.35 + 70;

    const flash = this.add.rectangle(
      this.scale.width / 2, this.scale.height / 2,
      this.scale.width, this.scale.height,
      0xff2d78, 0.38,
    ).setDepth(20);
    this.tweens.add({
      targets: flash, alpha: 0, duration: 350,
      onComplete: () => flash.destroy(),
    });
  }

  // ── addScoreSilent — wall / side wall (no popup) ──────────────────────────
  private addScoreSilent(pts: number) {
    this.score += pts;
    this.scoreTxt.setText(String(this.score));
  }

  // ── addScorePopup — paddle hit (with floating text) ───────────────────────
  private addScorePopup(pts: number, x: number, y: number, isDanger: boolean) {
    this.score += pts;
    this.scoreTxt.setText(String(this.score));

    // Score text pop: scale 1 → 1.25 → 1
    this.tweens.add({
      targets: this.scoreTxt,
      scaleX: 1.25, scaleY: 1.25,
      duration: 70,
      yoyo: true,
      ease: "Back.Out",
    });

    const label = isDanger ? `+${pts} ${this.tr.danger}` : `+${pts}`;
    const color = isDanger ? "#ff2d78" : "#ffd700";
    const size  = isDanger ? "14px" : "12px";

    const txt = this.add.text(x, y, label, {
      fontSize: size, fontFamily: "monospace", color, fontStyle: "bold",
    }).setOrigin(0.5).setDepth(12);

    this.tweens.add({
      targets: txt,
      y: y - 44, alpha: 0, duration: 720,
      ease: "Quad.Out",
      onComplete: () => txt.destroy(),
    });
  }

  // ── flashSpeedUp ──────────────────────────────────────────────────────────
  private flashSpeedUp() {
    const pct = Math.round((this.speedMult - 1) * 100);
    this.speedTxt.setText(`${this.tr.speedLbl} +${pct}%`);
    this.showMilestoneBanner(`${this.tr.speedLbl} +${pct}%`, "#ffaa00");
  }

  // ── showMilestoneBanner ───────────────────────────────────────────────────
  private showMilestoneBanner(msg: string, color: string) {
    const W  = this.scale.width;
    const yS = this.scale.height * 0.44;
    const yE = this.scale.height * 0.40;

    const banner = this.add.text(W / 2, yS, msg, {
      fontSize: "15px", fontFamily: "monospace", color, fontStyle: "bold",
    }).setOrigin(0.5).setDepth(15).setAlpha(0);

    this.tweens.add({
      targets: banner,
      alpha: 1, y: yE,
      duration: 220,
      yoyo: true, hold: 1200,
      ease: "Quad.Out",
      onComplete: () => banner.destroy(),
    });
  }

  // ── handleLifeLost ────────────────────────────────────────────────────────
  private handleLifeLost() {
    this.cameras.main.shake(35, 0.010);
    this.endGame();
  }

  // ── endGame ───────────────────────────────────────────────────────────────
  private endGame() {
    if (this.gameOver) return;
    this.gameOver = true;
    this.vx = 0; this.vy = 0;
    this.trail = [];
    this.trailGfx.clear();
    this.hitWindowGfx.clear();
    this.ghosts.forEach(g => g.gfx.destroy());
    this.ghosts = [];
    this.darkOverlay.clear();
    this.paddleGfx.setAlpha(1);

    const W = this.scale.width;
    const H = this.scale.height;

    const overlay = this.add.graphics();
    overlay.fillStyle(0x000000, 0.65);
    overlay.fillRect(0, 0, W, H);
    overlay.setDepth(15);

    this.add.text(W / 2, H / 2 - 75, this.tr.gameOver, {
      fontSize: "40px", fontFamily: "monospace", color: "#ff2d78", fontStyle: "bold",
    }).setOrigin(0.5).setDepth(20);

    this.add.text(W / 2, H / 2 - 16, `${this.tr.scoreLbl} ${this.score}`, {
      fontSize: "32px", fontFamily: "monospace", color: "#00ff88", fontStyle: "bold",
    }).setOrigin(0.5).setDepth(20);

    this.add.text(W / 2, H / 2 + 28, `${this.tr.bestRallyLbl} ${this.bestRally}`, {
      fontSize: "17px", fontFamily: "monospace", color: "#ffffff70",
    }).setOrigin(0.5).setDepth(20);

    if (this.bestRally >= 10) {
      this.add.text(W / 2, H / 2 + 56, `${this.tr.maxAngleLbl} ${this.getDynamicMaxAngle()}°`, {
        fontSize: "12px", fontFamily: "monospace", color: "#ffaa0055",
      }).setOrigin(0.5).setDepth(20);
    }

    this.time.delayedCall(1500, () => this.onGameEnd(this.score));
  }

  // ── drawPaddle — full layered visual ─────────────────────────────────────
  // Layer order (all in one Graphics object, drawn bottom→top):
  //   1. court shadow ellipse
  //   2. outer soft glow  (3 layers, alpha widens in hit_window)
  //   3. solid body
  //   4. edge darkening (left/right 35%)
  //   5. center zone lighter stripe
  //   6. top highlight strip
  //   7. bottom shadow strip
  private drawPaddle(padY: number, isWindow: boolean) {
    const g  = this.paddleGfx;
    const px = this.padX;
    const pw = this.PAD_W;
    const ph = this.PAD_H;

    g.clear();

    const bodyColor = isWindow ? 0x00ff88 : 0x00d4ff;
    const glowAlpha = isWindow ? 1.8 : 1.0;

    // renderPW: paddle half-width WITH squish applied (makes body wider on hit)
    const rpw = Math.round(pw * this.padSquish);

    // ── 1. Court shadow ───────────────────────────────────────────────────
    g.fillStyle(0x000000, 0.22);
    g.fillEllipse(px, padY + ph + 5, rpw * 2 + 14, 7);

    // ── 2. Neon glow (halos scale with squish) ────────────────────────────
    g.fillStyle(bodyColor, 0.05 * glowAlpha);
    g.fillRoundedRect(px - rpw - 20, padY - 12, (rpw + 20) * 2, ph + 24, 14);

    g.fillStyle(bodyColor, 0.10 * glowAlpha);
    g.fillRoundedRect(px - rpw - 11, padY - 7,  (rpw + 11) * 2, ph + 14, 10);

    g.fillStyle(bodyColor, 0.20 * glowAlpha);
    g.fillRoundedRect(px - rpw - 4,  padY - 3,  (rpw + 4)  * 2, ph + 6,  8);

    // ── 3. Paddle body ────────────────────────────────────────────────────
    g.fillStyle(bodyColor, 1.0);
    g.fillRoundedRect(px - rpw, padY, rpw * 2, ph, 7);

    // ── 4. Edge darkening ─────────────────────────────────────────────────
    const edgeW = Math.round(rpw * 0.70);
    g.fillStyle(0x000000, 0.22);
    g.fillRoundedRect(px - rpw,          padY, edgeW, ph, { tl: 7, tr: 0, bl: 7, br: 0 });
    g.fillRoundedRect(px + rpw - edgeW,  padY, edgeW, ph, { tl: 0, tr: 7, bl: 0, br: 7 });

    // ── 5. Center zone lighter stripe ─────────────────────────────────────
    const centerW = Math.round(rpw * 0.90);
    g.fillStyle(0xffffff, 0.18);
    g.fillRoundedRect(px - centerW / 2, padY, centerW, ph, 5);

    // ── 6. Top highlight ──────────────────────────────────────────────────
    g.fillStyle(0xffffff, 0.55);
    g.fillRoundedRect(px - rpw + 10, padY + 2, rpw * 2 - 20, 3, 2);

    // ── 7. Bottom shadow strip ────────────────────────────────────────────
    g.fillStyle(0x000000, 0.28);
    g.fillRoundedRect(px - rpw + 6, padY + ph - 4, rpw * 2 - 12, 4, 2);
  }

  // ── triggerHitFlash — energy wave on paddle at impact ─────────────────────
  // Creates: horizontal expanding oval + impact ring
  private triggerHitFlash(hitX: number, padY: number) {
    const { PAD_H } = this;
    const cy = padY + PAD_H / 2;  // vertical centre of paddle

    // Horizontal energy wave (expands left-right from hit point)
    const wave = this.add.graphics().setDepth(9);
    wave.lineStyle(3, 0xffffff, 0.90);
    wave.lineBetween(hitX - 12, cy, hitX + 12, cy);

    this.tweens.add({
      targets: wave,
      scaleX: 10,
      scaleY: 1.8,
      alpha: 0,
      duration: 280,
      ease: "Cubic.Out",
      onComplete: () => wave.destroy(),
    });

    // Impact ring (expands and fades)
    const ring = this.add.graphics().setDepth(9);
    ring.lineStyle(2.5, 0x00d4ff, 0.95);
    ring.strokeCircle(hitX, cy, 7);

    this.tweens.add({
      targets: ring,
      scaleX: 4.5, scaleY: 3.5,
      alpha: 0, duration: 230,
      ease: "Quad.Out",
      onComplete: () => ring.destroy(),
    });

    // Spark burst: 6 lines radiating outward
    const sparkAngles = [0, 60, 120, 180, 240, 300];
    sparkAngles.forEach(deg => {
      const rad = Phaser.Math.DegToRad(deg);
      const len = 10;
      const spark = this.add.graphics().setDepth(9);
      spark.lineStyle(1.5, 0xffffff, 0.9);
      spark.lineBetween(hitX, cy, hitX + Math.cos(rad) * len, cy + Math.sin(rad) * len);
      this.tweens.add({
        targets: spark,
        x: Math.cos(rad) * 18,
        y: Math.sin(rad) * 12,
        scaleX: 0.2, scaleY: 0.2,
        alpha: 0, duration: 220,
        ease: "Quad.Out",
        onComplete: () => spark.destroy(),
      });
    });
  }

  // ── drawComboBar — rally progress bar below rally number ──────────────────
  private drawComboBar(time: number) {
    const g    = this.comboBarGfx;
    const W    = this.scale.width;
    const cx   = W * 0.25;
    const barY = 54;          // just below the rally number
    const barW = 56;          // total bar width (half)
    const segs = 10;
    const segW = (barW * 2) / segs;
    const gap  = 2;

    g.clear();

    for (let i = 0; i < segs; i++) {
      const filled = i < Math.min(this.rally, segs);
      const sx     = cx - barW + i * segW;

      // Filled color tier
      const col =
        this.rally >= 30 ? 0xff4444 :
        this.rally >= 20 ? 0xffcc00 :
        this.rally >= 10 ? 0x00ff88 : 0x5599ff;

      if (filled) {
        // Glow halo behind segment (rally 10+)
        if (this.rally >= 10) {
          const glowAlpha = this.rally >= 20
            ? 0.15 + Math.sin(time * 0.012) * 0.10   // pulsing at 20+
            : 0.10;
          g.fillStyle(col, glowAlpha);
          g.fillRect(sx - 1, barY - 1, segW - gap + 2, 6);
        }
        g.fillStyle(col, 0.90);
        g.fillRect(sx, barY, segW - gap, 4);
      } else {
        g.fillStyle(0xffffff, 0.08);
        g.fillRect(sx, barY, segW - gap, 4);
      }
    }
  }

  // ── spawnRipple ───────────────────────────────────────────────────────────
  private spawnRipple(x: number, y: number, color: number) {
    const gfx = this.add.graphics();
    gfx.lineStyle(2.5, color, 0.9);
    gfx.strokeCircle(x, y, 10);
    gfx.setDepth(8);
    this.tweens.add({
      targets: gfx,
      alpha: 0, scaleX: 3.5, scaleY: 3.5,
      duration: 280,
      ease: "Quad.Out",
      onComplete: () => gfx.destroy(),
    });
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// React wrapper
// ─────────────────────────────────────────────────────────────────────────────
export default function SquashGame({ onGameEnd, lang = "en" }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const gameRef      = useRef<Phaser.Game | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new SquashScene();
    scene.onGameEnd = onGameEnd;
    scene.lang = lang;

    gameRef.current = new Phaser.Game({
      type:            Phaser.AUTO,
      width:           containerRef.current.clientWidth  || 390,
      height:          containerRef.current.clientHeight || 680,
      backgroundColor: "#050f05",
      parent:          containerRef.current,
      scene,
      scale: { mode: Phaser.Scale.RESIZE, autoCenter: Phaser.Scale.CENTER_BOTH },
      input: { activePointers: 2 },
    });

    return () => { gameRef.current?.destroy(true); gameRef.current = null; };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <div ref={containerRef} className="w-full h-full" />;
}
