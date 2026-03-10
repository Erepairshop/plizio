"use client";

import Phaser from "phaser";
import { useEffect, useRef } from "react";

interface Props {
  onGameEnd: (score: number) => void;
}

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
  private readonly PAD_W         = 92;   // visual half-width (was 110, ~17% smaller)
  private readonly PAD_H         = 12;   // visual height  (was 14, slightly slimmer)
  private readonly PAD_HIT_W     = 115;  // hitbox half-width — larger than sprite
  private readonly PAD_LERP      = 0.25;  // lerp factor: paddle.x → target (smooth following)
  private readonly PAD_MAX_SPEED = 800;   // px/s hard speed cap (realistic + fair)

  // ── State objects ─────────────────────────────────────────────────────────
  private ball!:         Phaser.GameObjects.Arc;
  private paddleGfx!:    Phaser.GameObjects.Graphics;
  private trailGfx!:     Phaser.GameObjects.Graphics;
  private courtGfx!:     Phaser.GameObjects.Graphics;
  private hitWindowGfx!: Phaser.GameObjects.Graphics;  // hit window indicator

  private bx = 0;  // ball position
  private by = 0;
  private vx = 0;  // ball velocity
  private vy = 0;

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
  private lives       = 3;
  private speedMult   = 1.0;

  // ── Phase flags ───────────────────────────────────────────────────────────
  private hitCooldown  = 0;
  private gameOver     = false;
  private serving      = true;
  private missPhase: "none" | "rolling" = "none";
  private inDangerZone = false;

  private trail: { x: number; y: number }[] = [];

  // ── HUD ───────────────────────────────────────────────────────────────────
  private rallyTxt!:  Phaser.GameObjects.Text;
  private bestTxt!:   Phaser.GameObjects.Text;
  private scoreTxt!:  Phaser.GameObjects.Text;
  private serveTxt!:  Phaser.GameObjects.Text;
  private speedTxt!:  Phaser.GameObjects.Text;
  private heartsTxt!: Phaser.GameObjects.Text;

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
    this.add.text(W / 2, 12, "SCORE", {
      fontSize: "9px", fontFamily: "monospace",
      color: "#ffffff55", fontStyle: "bold",
    }).setOrigin(0.5).setDepth(10);

    this.scoreTxt = this.add.text(W / 2, 28, "0", {
      fontSize: "34px", fontFamily: "monospace",
      color: "#00ff88", fontStyle: "bold",
    }).setOrigin(0.5).setDepth(10);

    this.add.text(W * 0.25, 12, "RALLY", {
      fontSize: "9px", fontFamily: "monospace",
      color: "#ffffff44", fontStyle: "bold",
    }).setOrigin(0.5).setDepth(10);

    this.rallyTxt = this.add.text(W * 0.25, 28, "0", {
      fontSize: "22px", fontFamily: "monospace",
      color: "#ffffff70", fontStyle: "bold",
    }).setOrigin(0.5).setDepth(10);

    this.add.text(W - 12, 12, "BEST", {
      fontSize: "9px", fontFamily: "monospace",
      color: "#ffffff44", fontStyle: "bold",
    }).setOrigin(1, 0).setDepth(10);

    this.bestTxt = this.add.text(W - 12, 24, "0", {
      fontSize: "20px", fontFamily: "monospace",
      color: "#ffd70088", fontStyle: "bold",
    }).setOrigin(1, 0).setDepth(10);

    // Lives (top left)
    this.heartsTxt = this.add.text(12, 14, "", {
      fontSize: "16px", fontFamily: "monospace",
    }).setDepth(10);
    this.updateLivesDisplay();

    // Speed indicator
    this.speedTxt = this.add.text(W - 12, 48, "", {
      fontSize: "9px", fontFamily: "monospace",
      color: "#ff2d7888",
    }).setOrigin(1, 0).setDepth(10);

    // Serve prompt
    this.serveTxt = this.add.text(W / 2, H * 0.64, "TAP TO SERVE", {
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

    // Trail, ball, paddle, hit-window indicator
    this.trailGfx     = this.add.graphics().setDepth(3);
    this.hitWindowGfx = this.add.graphics().setDepth(4);
    this.ball         = this.add.arc(0, 0, this.BALL_R, 0, 360, false, 0xffd700, 1);
    this.ball.setDepth(6);
    this.paddleGfx    = this.add.graphics().setDepth(7);

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

    // Court floor
    g.fillStyle(0x0a1f0a, 1);
    g.fillRect(this.WL, this.FWY, this.WR - this.WL, this.BY - this.FWY);

    // Danger zone (lower 22%) — subtle red tint
    g.fillStyle(0xff2d78, 0.04);
    g.fillRect(this.WL, this.DANGER_Y, this.WR - this.WL, this.BY - this.DANGER_Y);
    g.lineStyle(1, 0xff2d78, 0.20);
    g.lineBetween(this.WL, this.DANGER_Y, this.WR, this.DANGER_Y);

    // Service line
    const midY = this.FWY + (this.BY - this.FWY) * 0.55;
    g.lineStyle(1.5, 0x00ff88, 0.10);
    g.lineBetween(this.WL, midY, this.WR, midY);

    // Front wall (top)
    g.lineStyle(14, 0x00ff88, 0.10);
    g.lineBetween(this.WL, this.FWY, this.WR, this.FWY);
    g.lineStyle(5, 0x00ff88, 1.0);
    g.lineBetween(this.WL, this.FWY, this.WR, this.FWY);

    // Side walls
    g.lineStyle(4, 0x00cc66, 0.65);
    g.lineBetween(this.WL, this.FWY, this.WL, this.BY);
    g.lineBetween(this.WR, this.FWY, this.WR, this.BY);

    // Floor line
    g.lineStyle(3, 0x336633, 0.45);
    g.lineBetween(this.WL, this.BY, this.WR, this.BY);

    this.add.text(this.WL + 6, this.FWY - 18, "FRONT WALL", {
      fontSize: "9px", color: "#00ff8866", fontFamily: "monospace", fontStyle: "bold",
    }).setDepth(10);

    this.add.text(this.WR - 8, this.DANGER_Y - 14, "+2 ZONE", {
      fontSize: "8px", color: "#ff2d7855", fontFamily: "monospace", fontStyle: "bold",
    }).setOrigin(1, 0).setDepth(10);
  }

  // ── updateLivesDisplay ────────────────────────────────────────────────────
  private updateLivesDisplay() {
    let s = "";
    for (let i = 0; i < 3; i++) s += i < this.lives ? "♥ " : "· ";
    this.heartsTxt.setText(s.trim());
    this.heartsTxt.setColor(this.lives > 1 ? "#ff2d78" : "#ff6666");
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

    // Hit-window indicator: subtle vertical side guides
    this.hitWindowGfx.clear();
    if (isWindow) {
      this.hitWindowGfx.lineStyle(1.5, 0x00ff88, 0.28);
      this.hitWindowGfx.lineBetween(this.padX - this.PAD_HIT_W, padY - 52, this.padX - this.PAD_HIT_W, padY);
      this.hitWindowGfx.lineBetween(this.padX + this.PAD_HIT_W, padY - 52, this.padX + this.PAD_HIT_W, padY);
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

    // Trail (colour shifts warmer in hit_window)
    this.trail.push({ x: this.bx, y: this.by });
    if (this.trail.length > 12) this.trail.shift();
    this.trailGfx.clear();
    const trailColor = isWindow ? 0x00ff88 : 0xffd700;
    for (let i = 0; i < this.trail.length; i++) {
      const t = i / this.trail.length;
      this.trailGfx.fillStyle(trailColor, t * 0.35);
      this.trailGfx.fillCircle(this.trail[i].x, this.trail[i].y, this.BALL_R * (0.3 + t * 0.7));
    }

    this.ball.x = this.bx;
    this.ball.y = this.by;

    const { BALL_R, FWY, DANGER_Y } = this;

    // Danger zone tracking
    if (this.by > DANGER_Y) this.inDangerZone = true;

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
      this.vx += Phaser.Math.FloatBetween(-15, 15);
      this.ballState = "return";
      this.clampBallAngle();
      this.spawnRipple(this.bx, FWY, 0x00ff88);
      this.addScoreSilent(1);  // wall = +1, no popup
    }

    // ── Left wall ─────────────────────────────────────────────────────────
    if (this.bx - BALL_R <= this.WL && this.vx < 0) {
      this.bx = this.WL + BALL_R;
      this.vx = Math.abs(this.vx);
      this.clampBallAngle();
      this.spawnRipple(this.WL, this.by, 0x336633);
      this.addScoreSilent(1);
    }

    // ── Right wall ────────────────────────────────────────────────────────
    if (this.bx + BALL_R >= this.WR && this.vx > 0) {
      this.bx = this.WR - BALL_R;
      this.vx = -Math.abs(this.vx);
      this.clampBallAngle();
      this.spawnRipple(this.WR, this.by, 0x336633);
      this.addScoreSilent(1);
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

    // ── Rally dynamics: speed progression every 5 hits ───────────────────
    const newMult    = 1 + Math.floor(this.rally / 5) * this.SPEED_PER_5;
    const cappedMult = Math.min(newMult, this.MAX_SPEED / this.BASE_SPEED);
    if (cappedMult > this.speedMult) {
      this.speedMult = cappedMult;
      this.flashSpeedUp();
    }

    // ── Ball velocity after hit ───────────────────────────────────────────
    const spd      = Math.min(this.BASE_SPEED * this.speedMult, this.MAX_SPEED);
    const hitFrac  = Phaser.Math.Clamp((this.bx - this.padX) / this.PAD_W, -1, 1);
    const maxAng   = this.getDynamicMaxAngle();  // widens with rally
    const hitAngle = hitFrac * maxAng;

    this.vx = Math.sin(Phaser.Math.DegToRad(hitAngle)) * spd;
    this.vy = -Math.cos(Phaser.Math.DegToRad(hitAngle)) * spd; // upward

    // Paddle momentum spin
    const spin = Phaser.Math.Clamp(this.padVelX * 0.12, -65, 65);
    this.vx += spin;
    this.vx += Phaser.Math.FloatBetween(-10, 10);

    this.ballState = "toward_wall";
    this.clampBallAngle();

    this.by          = padTop - this.BALL_R - 2;
    this.hitCooldown = 180;
    // Squish: paddle instantly widens, then eases back to 1.0
    this.padSquish      = 1.0 + this.SQUISH_AMT;
    this.squishElapsed  = this.SQUISH_DUR;
    this.spawnRipple(this.bx, this.by, 0x00d4ff);
    this.triggerHitFlash(this.bx, padTop);
    this.cameras.main.shake(16, 0.003);

    // Scoring: +1 normal, +2 if ball was in danger zone
    const bonus = this.inDangerZone;
    const pts   = bonus ? 2 : 1;
    this.addScorePopup(pts, this.bx, this.by - 22, bonus);
    this.inDangerZone = false;

    // Rally pulse
    this.tweens.add({
      targets: this.rallyTxt,
      scaleX: 1.35, scaleY: 1.35,
      duration: 70,
      yoyo: true,
      ease: "Back.Out",
    });

    // Rally milestone banners (10 / 20)
    if (this.rally === 10) this.showMilestoneBanner("RALLY x10 — WIDER ANGLES!", "#00d4ff");
    if (this.rally === 20) this.showMilestoneBanner("RALLY x20 — MAXIMUM CHAOS!", "#ff2d78");
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

    const label = isDanger ? `+${pts} DANGER!` : `+${pts}`;
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
    const W   = this.scale.width;
    const pct = Math.round((this.speedMult - 1) * 100);
    this.speedTxt.setText(`SPEED +${pct}%`);

    this.showMilestoneBanner(`SPEED +${pct}%`, "#ffaa00");
    this.cameras.main.flash(100, 255, 170, 0, false);
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
      duration: 180,
      yoyo: true, hold: 380,
      ease: "Quad.Out",
      onComplete: () => banner.destroy(),
    });
  }

  // ── handleLifeLost ────────────────────────────────────────────────────────
  private handleLifeLost() {
    this.lives--;
    this.updateLivesDisplay();
    this.cameras.main.shake(35, 0.010);

    if (this.lives <= 0) {
      this.endGame();
    } else {
      this.time.delayedCall(320, () => this.resetToServe());
    }
  }

  // ── endGame ───────────────────────────────────────────────────────────────
  private endGame() {
    if (this.gameOver) return;
    this.gameOver = true;
    this.vx = 0; this.vy = 0;
    this.trail = [];
    this.trailGfx.clear();
    this.hitWindowGfx.clear();

    const W = this.scale.width;
    const H = this.scale.height;

    const overlay = this.add.graphics();
    overlay.fillStyle(0x000000, 0.65);
    overlay.fillRect(0, 0, W, H);
    overlay.setDepth(15);

    this.add.text(W / 2, H / 2 - 75, "GAME OVER", {
      fontSize: "40px", fontFamily: "monospace", color: "#ff2d78", fontStyle: "bold",
    }).setOrigin(0.5).setDepth(20);

    this.add.text(W / 2, H / 2 - 16, `Score: ${this.score}`, {
      fontSize: "32px", fontFamily: "monospace", color: "#00ff88", fontStyle: "bold",
    }).setOrigin(0.5).setDepth(20);

    this.add.text(W / 2, H / 2 + 28, `Best Rally: ${this.bestRally}`, {
      fontSize: "17px", fontFamily: "monospace", color: "#ffffff70",
    }).setOrigin(0.5).setDepth(20);

    if (this.bestRally >= 10) {
      this.add.text(W / 2, H / 2 + 56, `Max Angle: ${this.getDynamicMaxAngle()}°`, {
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
      scaleX: 4.5,
      scaleY: 3.5,
      alpha: 0,
      duration: 230,
      ease: "Quad.Out",
      onComplete: () => ring.destroy(),
    });
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
export default function SquashGame({ onGameEnd }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const gameRef      = useRef<Phaser.Game | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new SquashScene();
    scene.onGameEnd = onGameEnd;

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
