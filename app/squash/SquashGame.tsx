"use client";

import Phaser from "phaser";
import { useEffect, useRef } from "react";

interface Props {
  onGameEnd: (score: number) => void;
}

// ─────────────────────────────────────────────────────────────────────────────
// SquashScene  —  lives + serve + rally scoring + speed progression + miss VFX
// ─────────────────────────────────────────────────────────────────────────────
class SquashScene extends Phaser.Scene {

  // ── Court boundaries (set in create) ──────────────────────────────────────
  private FWY = 0;   // front wall Y (top)
  private BY  = 0;   // back / player zone Y (bottom)
  private WL  = 0;   // left wall X
  private WR  = 0;   // right wall X
  private DANGER_Y = 0;  // lower 22% of court = danger zone

  // ── Ball constants ────────────────────────────────────────────────────────
  private readonly BALL_R        = 10;
  private readonly BASE_SPEED    = 420;
  private readonly MAX_SPEED     = 900;
  private readonly MIN_VY        = 140;
  private readonly SPEED_PER_5   = 0.05;   // +5% every 5 hits

  // ── Paddle constants ──────────────────────────────────────────────────────
  private readonly PAD_W    = 110;
  private readonly PAD_H    = 14;
  private readonly PAD_SPEED = 600;
  private readonly HIT_ZONE  = 55;

  // ── State ─────────────────────────────────────────────────────────────────
  private ball!:      Phaser.GameObjects.Arc;
  private paddleGfx!: Phaser.GameObjects.Graphics;
  private trailGfx!:  Phaser.GameObjects.Graphics;
  private courtGfx!:  Phaser.GameObjects.Graphics;

  private bx = 0;
  private by = 0;
  private vx = 0;
  private vy = 0;

  private padX      = 0;
  private padPrevX  = 0;
  private padVelX   = 0;

  // ── Game progression ──────────────────────────────────────────────────────
  private rally     = 0;    // consecutive paddle hits this life
  private bestRally = 0;
  private score     = 0;    // total accumulated points
  private lives     = 3;
  private speedMult = 1.0;  // increases every 5 paddle hits

  // ── Phase flags ───────────────────────────────────────────────────────────
  private hitCooldown  = 0;
  private gameOver     = false;
  private serving      = true;   // waiting for player to serve
  private missPhase: "none" | "rolling" = "none";
  private inDangerZone = false;  // ball entered lower zone since last serve

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
  private touchX  = -1;
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

    this.padX     = W / 2;
    this.padPrevX = W / 2;

    // Background
    this.add.rectangle(W / 2, H / 2, W, H, 0x050f05);

    // Court
    this.courtGfx = this.add.graphics();
    this.drawCourt();

    // ── HUD layout ───────────────────────────────────────────────────────
    // Score (center, biggest number)
    this.add.text(W / 2, 12, "SCORE", {
      fontSize: "9px", fontFamily: "monospace",
      color: "#ffffff55", fontStyle: "bold",
    }).setOrigin(0.5).setDepth(10);

    this.scoreTxt = this.add.text(W / 2, 28, "0", {
      fontSize: "34px", fontFamily: "monospace",
      color: "#00ff88", fontStyle: "bold",
    }).setOrigin(0.5).setDepth(10);

    // Rally (left side)
    this.add.text(W * 0.25, 12, "RALLY", {
      fontSize: "9px", fontFamily: "monospace",
      color: "#ffffff44", fontStyle: "bold",
    }).setOrigin(0.5).setDepth(10);

    this.rallyTxt = this.add.text(W * 0.25, 28, "0", {
      fontSize: "22px", fontFamily: "monospace",
      color: "#ffffff70", fontStyle: "bold",
    }).setOrigin(0.5).setDepth(10);

    // Best (right top)
    this.add.text(W - 12, 12, "BEST", {
      fontSize: "9px", fontFamily: "monospace",
      color: "#ffffff44", fontStyle: "bold",
    }).setOrigin(1, 0).setDepth(10);

    this.bestTxt = this.add.text(W - 12, 24, "0", {
      fontSize: "20px", fontFamily: "monospace",
      color: "#ffd70088", fontStyle: "bold",
    }).setOrigin(1, 0).setDepth(10);

    // Lives (hearts — top left)
    this.heartsTxt = this.add.text(12, 14, "", {
      fontSize: "16px", fontFamily: "monospace",
    }).setDepth(10);
    this.updateLivesDisplay();

    // Speed label (small, below best)
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

    // Trail & ball
    this.trailGfx = this.add.graphics().setDepth(3);
    this.ball = this.add.arc(0, 0, this.BALL_R, 0, 360, false, 0xffd700, 1);
    this.ball.setDepth(6);

    // Paddle
    this.paddleGfx = this.add.graphics().setDepth(7);

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

    // Position ball on paddle for first serve
    this.positionBallOnPaddle();
  }

  // ── drawCourt ─────────────────────────────────────────────────────────────
  private drawCourt() {
    const W = this.scale.width;
    const g = this.courtGfx;
    g.clear();

    // Court floor
    g.fillStyle(0x0a1f0a, 1);
    g.fillRect(this.WL, this.FWY, this.WR - this.WL, this.BY - this.FWY);

    // Danger zone (lower 22%) — subtle red tint + line
    g.fillStyle(0xff2d78, 0.04);
    g.fillRect(this.WL, this.DANGER_Y, this.WR - this.WL, this.BY - this.DANGER_Y);
    g.lineStyle(1, 0xff2d78, 0.18);
    g.lineBetween(this.WL, this.DANGER_Y, this.WR, this.DANGER_Y);

    // Service/half-court line
    const midY = this.FWY + (this.BY - this.FWY) * 0.55;
    g.lineStyle(1.5, 0x00ff88, 0.10);
    g.lineBetween(this.WL, midY, this.WR, midY);

    // Front wall (top) — prominent
    g.lineStyle(14, 0x00ff88, 0.10);
    g.lineBetween(this.WL, this.FWY, this.WR, this.FWY);
    g.lineStyle(5, 0x00ff88, 1.0);
    g.lineBetween(this.WL, this.FWY, this.WR, this.FWY);

    // Side walls
    g.lineStyle(4, 0x00cc66, 0.65);
    g.lineBetween(this.WL, this.FWY, this.WL, this.BY);
    g.lineBetween(this.WR, this.FWY, this.WR, this.BY);

    // Floor line (bottom boundary)
    g.lineStyle(3, 0x336633, 0.45);
    g.lineBetween(this.WL, this.BY, this.WR, this.BY);

    this.add.text(this.WL + 6, this.FWY - 18, "FRONT WALL", {
      fontSize: "9px", color: "#00ff8866", fontFamily: "monospace", fontStyle: "bold",
    }).setDepth(10);

    // Danger zone label
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
    this.by = padY - this.BALL_R - 2;
    this.bx = this.padX;
    this.ball.x = this.bx;
    this.ball.y = this.by;
  }

  // ── launchBall — player-initiated serve ───────────────────────────────────
  private launchBall() {
    this.serving  = false;
    this.tapServe = false;
    this.serveTxt.setVisible(false);

    const spd   = Math.min(this.BASE_SPEED * this.speedMult, this.MAX_SPEED);
    const angle = Phaser.Math.FloatBetween(-25, 25);
    this.vx =  Math.sin(Phaser.Math.DegToRad(angle)) * spd;
    this.vy = -Math.cos(Phaser.Math.DegToRad(angle)) * spd; // upward
    this.ensureMinVY();
  }

  // ── resetToServe — called after losing a life (if lives remain) ───────────
  private resetToServe() {
    this.missPhase    = "none";
    this.inDangerZone = false;
    this.rally        = 0;
    this.rallyTxt.setText("0");
    this.vx = 0;
    this.vy = 0;
    this.trail = [];
    this.trailGfx.clear();

    this.serving = true;
    this.tapServe = false;
    this.serveTxt.setVisible(true);
    this.serveTxt.setAlpha(1);

    this.positionBallOnPaddle();
  }

  // ── ensureMinVY ───────────────────────────────────────────────────────────
  private ensureMinVY() {
    if (Math.abs(this.vy) < this.MIN_VY) {
      this.vy = this.vy >= 0 ? this.MIN_VY : -this.MIN_VY;
    }
    const spd = Math.hypot(this.vx, this.vy);
    if (spd > this.MAX_SPEED) {
      const s = this.MAX_SPEED / spd;
      this.vx *= s;
      this.vy *= s;
    }
  }

  // ── update ────────────────────────────────────────────────────────────────
  update(time: number, delta: number) {
    if (this.gameOver) return;

    const dt = Math.min(delta / 1000, 0.033);

    if (this.hitCooldown > 0) this.hitCooldown -= delta;

    // ── Paddle velocity tracking ─────────────────────────────────────────
    this.padVelX  = (this.padX - this.padPrevX) / Math.max(dt, 0.001);
    this.padPrevX = this.padX;

    // ── Paddle input ─────────────────────────────────────────────────────
    const { PAD_W, PAD_SPEED, WL, WR } = this;
    const padMin = WL + PAD_W;
    const padMax = WR - PAD_W;

    if (this.leftKey.isDown  || this.aKey.isDown)  this.padX -= PAD_SPEED * dt;
    if (this.rightKey.isDown || this.dKey.isDown)  this.padX += PAD_SPEED * dt;
    if (this.touchX >= 0) this.padX = Phaser.Math.Linear(this.padX, this.touchX, 0.30);
    this.padX = Phaser.Math.Clamp(this.padX, padMin, padMax);

    // ── Draw paddle ──────────────────────────────────────────────────────
    this.paddleGfx.clear();
    const { PAD_H, BY } = this;
    const padY = BY - PAD_H - 6;
    this.paddleGfx.fillStyle(0x00d4ff, 0.12);
    this.paddleGfx.fillRoundedRect(this.padX - PAD_W - 6, padY - 4, (PAD_W + 6) * 2, PAD_H + 8, 7);
    this.paddleGfx.fillStyle(0x00d4ff, 1);
    this.paddleGfx.fillRoundedRect(this.padX - PAD_W, padY, PAD_W * 2, PAD_H, 5);
    this.paddleGfx.fillStyle(0xffffff, 0.25);
    this.paddleGfx.fillRoundedRect(this.padX - PAD_W + 6, padY + 2, PAD_W * 2 - 12, 4, 2);

    // ── SERVING PHASE ────────────────────────────────────────────────────
    if (this.serving) {
      // Ball gently bobs above paddle, follows paddle movement
      this.bx = this.padX;
      this.by = padY - this.BALL_R - 2 + Math.sin(time * 0.004) * 3;
      this.ball.x = this.bx;
      this.ball.y = this.by;

      // Tap / Space to launch
      if (this.tapServe || Phaser.Input.Keyboard.JustDown(this.spaceKey)) {
        this.launchBall();
      }
      return;
    }

    // ── MISS ROLLING PHASE (visual) ──────────────────────────────────────
    if (this.missPhase === "rolling") {
      // Gravity + air friction — ball tumbles out
      this.vy += 900 * dt;
      this.vx *= (1 - dt * 1.8);
      this.bx += this.vx * dt;
      this.by += this.vy * dt;

      // Red trail during miss
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

      // Once ball exits screen — resolve miss
      if (this.by - this.BALL_R > BY + 80) {
        this.handleLifeLost();
      }
      return;
    }

    // ── NORMAL PLAY: move ball ────────────────────────────────────────────
    this.bx += this.vx * dt;
    this.by += this.vy * dt;

    // Trail
    this.trail.push({ x: this.bx, y: this.by });
    if (this.trail.length > 12) this.trail.shift();
    this.trailGfx.clear();
    for (let i = 0; i < this.trail.length; i++) {
      const t = i / this.trail.length;
      this.trailGfx.fillStyle(0xffd700, t * 0.35);
      this.trailGfx.fillCircle(this.trail[i].x, this.trail[i].y, this.BALL_R * (0.3 + t * 0.7));
    }

    this.ball.x = this.bx;
    this.ball.y = this.by;

    const { BALL_R, FWY, HIT_ZONE, DANGER_Y } = this;

    // Track danger zone entry
    if (this.by > DANGER_Y) this.inDangerZone = true;

    // ── Front wall bounce (TOP) ──────────────────────────────────────────
    if (this.by - BALL_R <= FWY && this.vy < 0) {
      this.by = FWY + BALL_R;
      this.vy = Math.abs(this.vy);
      this.vx += Phaser.Math.FloatBetween(-18, 18);
      this.ensureMinVY();
      this.spawnRipple(this.bx, FWY, 0x00ff88);
      // Wall hit: +1 point (silent — just update score)
      this.addScore(1, this.bx, FWY + 24, false);
    }

    // ── Left wall ────────────────────────────────────────────────────────
    if (this.bx - BALL_R <= WL && this.vx < 0) {
      this.bx = WL + BALL_R;
      this.vx = Math.abs(this.vx);
      if (Math.abs(this.vy) < this.MIN_VY) this.vy = this.MIN_VY;
      this.spawnRipple(WL, this.by, 0x336633);
      this.addScore(1, WL + 22, this.by, false);
    }

    // ── Right wall ───────────────────────────────────────────────────────
    if (this.bx + BALL_R >= WR && this.vx > 0) {
      this.bx = WR - BALL_R;
      this.vx = -Math.abs(this.vx);
      if (Math.abs(this.vy) < this.MIN_VY) this.vy = this.MIN_VY;
      this.spawnRipple(WR, this.by, 0x336633);
      this.addScore(1, WR - 22, this.by, false);
    }

    // ── Paddle collision ─────────────────────────────────────────────────
    const padTop    = padY;
    const padBottom = padY + PAD_H;
    const padLeft   = this.padX - PAD_W;
    const padRight  = this.padX + PAD_W;

    const inHitZone = (
      this.vy > 0 &&
      this.by + BALL_R >= padTop - HIT_ZONE &&
      this.by - BALL_R <= padBottom + 4 &&
      this.bx + BALL_R >= padLeft &&
      this.bx - BALL_R <= padRight &&
      this.hitCooldown <= 0
    );

    if (inHitZone) {
      this.rally++;
      this.rallyTxt.setText(String(this.rally));
      if (this.rally > this.bestRally) {
        this.bestRally = this.rally;
        this.bestTxt.setText(String(this.bestRally));
      }

      // ── Speed progression: +5% every 5 paddle hits ─────────────────
      const newMult = 1 + Math.floor(this.rally / 5) * this.SPEED_PER_5;
      const cappedMult = Math.min(newMult, this.MAX_SPEED / this.BASE_SPEED);
      if (cappedMult > this.speedMult) {
        this.speedMult = cappedMult;
        this.flashSpeedUp();
      }

      // ── Ball velocity ────────────────────────────────────────────────
      const spd = Math.min(this.BASE_SPEED * this.speedMult, this.MAX_SPEED);
      const hitFrac = Phaser.Math.Clamp((this.bx - this.padX) / PAD_W, -1, 1);
      const bounceAngle = hitFrac * 50;
      this.vx = Math.sin(Phaser.Math.DegToRad(bounceAngle)) * spd;
      this.vy = -Math.cos(Phaser.Math.DegToRad(bounceAngle)) * spd;

      // Paddle spin
      const spin = Phaser.Math.Clamp(this.padVelX * 0.12, -70, 70);
      this.vx += spin;
      this.vx += Phaser.Math.FloatBetween(-12, 12);
      this.ensureMinVY();

      this.by = padTop - BALL_R - 2;
      this.hitCooldown = 160;
      this.spawnRipple(this.bx, this.by, 0x00d4ff);
      this.cameras.main.shake(18, 0.003);

      // ── Scoring: +1 base, +1 bonus if in danger zone ────────────────
      const bonus = this.inDangerZone;
      const pts   = bonus ? 2 : 1;
      this.addScore(pts, this.bx, this.by - 20, bonus);
      this.inDangerZone = false;

      // Rally pop
      this.tweens.add({
        targets: this.rallyTxt,
        scaleX: 1.35, scaleY: 1.35,
        duration: 70,
        yoyo: true,
        ease: "Back.Out",
      });
    }

    // ── Miss detection: ball exits bottom ────────────────────────────────
    if (this.by - BALL_R > BY + 20 && this.missPhase === "none") {
      this.missPhase = "rolling";
      // Slow the ball — "oh no" pause effect
      this.vx *= 0.25;
      this.vy = Math.abs(this.vy) * 0.4 + 80;

      // Red flash
      const flash = this.add.rectangle(
        this.scale.width / 2, this.scale.height / 2,
        this.scale.width, this.scale.height,
        0xff2d78, 0.35,
      ).setDepth(20);
      this.tweens.add({
        targets: flash,
        alpha: 0,
        duration: 380,
        onComplete: () => flash.destroy(),
      });
    }
  }

  // ── addScore ──────────────────────────────────────────────────────────────
  private addScore(pts: number, x: number, y: number, isDanger: boolean) {
    this.score += pts;
    this.scoreTxt.setText(String(this.score));

    // Only show floating text for paddle hits (danger) — wall hits are silent
    if (!isDanger) return;

    const floatTxt = this.add.text(x, y, `+${pts} DANGER!`, {
      fontSize: "13px", fontFamily: "monospace",
      color: "#ff2d78", fontStyle: "bold",
    }).setOrigin(0.5).setDepth(12);

    this.tweens.add({
      targets: floatTxt,
      y: y - 45,
      alpha: 0,
      duration: 750,
      ease: "Quad.Out",
      onComplete: () => floatTxt.destroy(),
    });
  }

  // ── flashSpeedUp ──────────────────────────────────────────────────────────
  private flashSpeedUp() {
    const W = this.scale.width;
    const pct = Math.round((this.speedMult - 1) * 100);
    this.speedTxt.setText(`SPEED +${pct}%`);

    const banner = this.add.text(W / 2, this.scale.height * 0.44, `⚡ SPEED UP!`, {
      fontSize: "17px", fontFamily: "monospace",
      color: "#ffaa00", fontStyle: "bold",
    }).setOrigin(0.5).setDepth(15).setAlpha(0);

    this.tweens.add({
      targets: banner,
      alpha: 1, y: this.scale.height * 0.40,
      duration: 180,
      yoyo: true,
      hold: 350,
      ease: "Quad.Out",
      onComplete: () => banner.destroy(),
    });

    this.cameras.main.flash(120, 255, 170, 0, false);
  }

  // ── handleLifeLost ────────────────────────────────────────────────────────
  private handleLifeLost() {
    this.lives--;
    this.updateLivesDisplay();
    this.cameras.main.shake(35, 0.010);

    if (this.lives <= 0) {
      this.endGame();
    } else {
      // Brief pause, then reset to serve
      this.time.delayedCall(320, () => {
        this.resetToServe();
      });
    }
  }

  // ── endGame ───────────────────────────────────────────────────────────────
  private endGame() {
    if (this.gameOver) return;
    this.gameOver = true;
    this.vx = 0;
    this.vy = 0;
    this.trail = [];
    this.trailGfx.clear();

    const W = this.scale.width;
    const H = this.scale.height;

    const overlay = this.add.graphics();
    overlay.fillStyle(0x000000, 0.65);
    overlay.fillRect(0, 0, W, H);
    overlay.setDepth(15);

    this.add.text(W / 2, H / 2 - 75, "GAME OVER", {
      fontSize: "40px", fontFamily: "monospace",
      color: "#ff2d78", fontStyle: "bold",
    }).setOrigin(0.5).setDepth(20);

    this.add.text(W / 2, H / 2 - 16, `Score: ${this.score}`, {
      fontSize: "32px", fontFamily: "monospace",
      color: "#00ff88", fontStyle: "bold",
    }).setOrigin(0.5).setDepth(20);

    this.add.text(W / 2, H / 2 + 28, `Best Rally: ${this.bestRally}`, {
      fontSize: "17px", fontFamily: "monospace",
      color: "#ffffff70",
    }).setOrigin(0.5).setDepth(20);

    if (this.bestRally > 0) {
      this.add.text(W / 2, H / 2 + 56, `Speed: +${Math.round((this.speedMult - 1) * 100)}%`, {
        fontSize: "13px", fontFamily: "monospace",
        color: "#ffaa0066",
      }).setOrigin(0.5).setDepth(20);
    }

    this.time.delayedCall(1500, () => this.onGameEnd(this.score));
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
