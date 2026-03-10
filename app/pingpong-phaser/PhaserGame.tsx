"use client";

import Phaser from "phaser";
import { useEffect, useRef } from "react";

type Difficulty = "easy" | "medium" | "hard";

interface Props {
  difficulty: Difficulty;
  onGameEnd: (won: boolean, myScore: number, oppScore: number) => void;
}

class PingPongScene extends Phaser.Scene {
  private player!: Phaser.GameObjects.Image;
  private ai!: Phaser.GameObjects.Image;
  private ball!: Phaser.Physics.Arcade.Image;

  private playerScore = 0;
  private aiScore = 0;
  private scoreTxt!: Phaser.GameObjects.Text;
  private serveTxt!: Phaser.GameObjects.Text;
  private WIN_SCORE = 11;

  private aiSpeed = 300;
  private aiError = 40;

  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private wasd!: Record<string, Phaser.Input.Keyboard.Key>;
  private spaceKey!: Phaser.Input.Keyboard.Key;

  private touchX = -1;
  private touchY = -1;

  private serving = true;
  private waitingForServe = false; // tap-to-serve state
  private playerServes = true;
  private ballSpeed = 350;
  private rallyCount = 0;
  private gameOver = false;

  // Paddle sizes — SCALE = PADDLE_R/20 → visual circle radius = 2*PADDLE_R
  private readonly PADDLE_R = 17; // SCALE=0.85 → visual diameter ~68px
  private readonly HITBOX_R = 24; // slightly generous hitbox for touch

  // Feature 4: Paddle momentum tracking
  private playerPrevX = 0;
  private playerPrevY = 0;
  private playerVelX = 0;
  private playerVelY = 0;

  // AI smooth target (recalculated once per ball approach, not every frame)
  private aiFixedTargetX = -1;
  private aiLastBallVySign = 0;

  // Flickering fix: hit cooldown prevents multi-trigger
  private hitCooldown = 0;
  private readonly HIT_COOLDOWN_MS = 160;

  private particles!: Phaser.GameObjects.Particles.ParticleEmitter;

  // Trail & impact effects
  private trailGfx!: Phaser.GameObjects.Graphics;
  private impactGfx!: Phaser.GameObjects.Graphics;
  private ballShadowGfx!: Phaser.GameObjects.Graphics;
  private trailPositions: { x: number; y: number }[] = [];
  private impacts: { x: number; y: number; age: number; color: number }[] = [];
  private readonly TRAIL_LEN = 8;
  private readonly IMPACT_DUR = 200;

  // Dynamic visuals (updated every frame)
  private playerShadow!: Phaser.GameObjects.Graphics;
  private aiShadow!: Phaser.GameObjects.Graphics;
  private ballGlowGfx!: Phaser.GameObjects.Graphics;
  private flashGfx!: Phaser.GameObjects.Graphics;

  // Bounce state machine
  private mustBounce = false;    // ball must bounce before paddle can hit
  private bounceTriggered = false; // prevent double-trigger per rally segment

  // Feature 6: speed limits
  private readonly MAX_SPEED = 680;
  // Feature 9: never too horizontal
  private readonly MIN_Y_SPEED = 90;

  public onGameEnd!: (won: boolean, myScore: number, oppScore: number) => void;
  public difficulty!: Difficulty;

  constructor() { super({ key: "PingPongScene" }); }

  preload() {
    const g = this.make.graphics({ x: 0, y: 0 });

    // Ball with improved glow (MODERNIZED: increased size)
    g.fillStyle(0xffffff);
    g.fillCircle(18, 18, 18);
    g.fillStyle(0xdddddd, 0.40);
    g.fillCircle(12, 12, 8);
    g.generateTexture("ball", 36, 36);
    g.clear();

    // Player paddle (red) with dot texture pattern - MODERNIZED (larger, more detail)
    g.fillStyle(0x5a1a1a);
    g.fillCircle(40, 40, 40);
    g.fillStyle(0xcc1515);
    g.fillCircle(40, 40, 38);
    g.fillStyle(0xe83030);
    g.fillCircle(40, 40, 28);
    g.fillStyle(0xffffff, 0.25);
    g.fillCircle(32, 32, 14);
    // Dot texture pattern on rubber surface (larger)
    g.fillStyle(0x8b1515, 0.4);
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 6; j++) {
        g.fillCircle(12 + i * 4, 14 + j * 4, 1.2);
      }
    }
    g.fillStyle(0x8b6340);
    g.fillRoundedRect(30, 75, 20, 35, 4);
    g.fillStyle(0xa07850, 0.7);
    g.fillRoundedRect(34, 78, 12, 30, 3);
    g.generateTexture("playerPaddle", 80, 130);
    g.clear();

    // AI paddle (blue) — circle at y=65, handle at top y=20-55
    g.fillStyle(0x0d2d55);
    g.fillCircle(40, 65, 40);
    g.fillStyle(0x1060cc);
    g.fillCircle(40, 65, 38);
    g.fillStyle(0x2080e8);
    g.fillCircle(40, 65, 28);
    g.fillStyle(0xffffff, 0.25);
    g.fillCircle(32, 57, 14);
    // Dot texture (mirrored position relative to circle center)
    g.fillStyle(0x0d4d88, 0.4);
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 6; j++) {
        g.fillCircle(12 + i * 4, 50 + j * 4, 1.2);
      }
    }
    // Handle at top
    g.fillStyle(0x8b6340);
    g.fillRoundedRect(30, 20, 20, 35, 4);
    g.fillStyle(0xa07850, 0.7);
    g.fillRoundedRect(34, 23, 12, 30, 3);
    g.generateTexture("aiPaddle", 80, 130);
    g.clear();

    // Particle dot (improved for sparks)
    g.fillStyle(0xffffff);
    g.fillCircle(4, 4, 4);
    g.generateTexture("particle", 8, 8);
    g.clear();

    // Spark particle (bright yellow/white)
    g.fillStyle(0xffff99);
    g.fillCircle(3, 3, 3);
    g.generateTexture("spark", 6, 6);
    g.destroy();
  }

  create() {
    const W = this.scale.width;
    const H = this.scale.height;

    const tW = Math.min(W * 0.84, 348);
    const tH = tW / 0.56;
    const tL = (W - tW) / 2;
    const tT = (H - tH) / 2;

    // Background
    this.add.rectangle(W / 2, H / 2, W, H, 0x0a0a1a);

    // Table with gradient (classic TT green)
    const tableGradient = this.add.graphics();
    tableGradient.fillStyle(0x1e7a3e, 1.0);
    tableGradient.fillRect(tL, tT, tW, tH / 2);
    tableGradient.fillStyle(0x196033, 1.0);
    tableGradient.fillRect(tL, tT + tH / 2, tW, tH / 2);

    // Subtle table texture (very faint noise pattern)
    const textureGfx = this.add.graphics();
    textureGfx.fillStyle(0x000000, 0.03);
    for (let i = 0; i < 80; i++) {
      const rx = Phaser.Math.Between(Math.floor(tL), Math.floor(tL + tW));
      const ry = Phaser.Math.Between(Math.floor(tT), Math.floor(tT + tH));
      const rw = Phaser.Math.Between(2, 6);
      textureGfx.fillRect(rx, ry, rw, rw);
    }

    // Table border (white lines)
    const borderGfx = this.add.graphics();
    borderGfx.lineStyle(3, 0xffffff, 0.95);
    borderGfx.strokeRect(tL, tT, tW, tH);

    // Net: horizontal white line at center
    const netGfx = this.add.graphics();
    netGfx.lineStyle(4, 0xffffff, 0.95);
    netGfx.lineBetween(tL, tT + tH / 2, tL + tW, tT + tH / 2);
    // Net shadow
    netGfx.lineStyle(2, 0x000000, 0.18);
    netGfx.lineBetween(tL, tT + tH / 2 + 3, tL + tW, tT + tH / 2 + 3);

    // Center service line: vertical, full table height
    const centerLineGfx = this.add.graphics();
    centerLineGfx.lineStyle(2, 0xffffff, 0.75);
    centerLineGfx.lineBetween(tL + tW / 2, tT, tL + tW / 2, tT + tH);

    // Soft vignette effect (darker edges)
    const vignetteGfx = this.add.graphics();
    vignetteGfx.fillStyle(0x000000, 0);
    vignetteGfx.fillRect(0, 0, W, H);
    vignetteGfx.setDepth(5);
    // Create radial vignette mask effect
    const vignetteGraphics = this.make.graphics({ x: W / 2, y: H / 2 });
    vignetteGraphics.fillStyle(0x000000, 0.2);
    vignetteGraphics.fillCircle(0, 0, Math.min(W, H) * 0.4);

    // Ball shadow (will be updated in update loop)
    this.ballShadowGfx = this.add.graphics();

    // Effect layers (below ball)
    this.trailGfx = this.add.graphics();
    this.impactGfx = this.add.graphics();

    // Paddles — scale so visual radius = PADDLE_R
    const SCALE = this.PADDLE_R / 20;

    // Paddle shadows — dynamic, updated every frame to follow paddles
    this.playerShadow = this.add.graphics();
    this.playerShadow.setDepth(4);
    this.aiShadow = this.add.graphics();
    this.aiShadow.setDepth(4);

    this.player = this.add.image(W / 2, tT + tH * 0.84, "playerPaddle")
      .setOrigin(0.5, 40 / 130) // adjusted for larger paddle
      .setScale(SCALE)
      .setDepth(15);
    this.ai = this.add.image(W / 2, tT + tH * 0.16, "aiPaddle")
      .setOrigin(0.5, 65 / 130) // circle center at y=65 in 130px texture
      .setScale(SCALE)
      .setDepth(15);

    // Ball glow (updated each frame — single persistent object)
    this.ballGlowGfx = this.add.graphics();
    this.ballGlowGfx.setDepth(8);

    // Score flash overlay (drawn on scorePoint)
    this.flashGfx = this.add.graphics();
    this.flashGfx.setDepth(50);
    this.flashGfx.setAlpha(0);

    // Ball (MODERNIZED: larger collision radius)
    this.ball = this.physics.add.image(W / 2, H / 2, "ball");
    this.ball.setCircle(18); // increased from 12
    this.ball.setBounce(1, 1);
    this.ball.setCollideWorldBounds(false);
    this.ball.setDepth(11);
    this.ball.setTint(0xffffff);

    // Particles
    this.particles = this.add.particles(0, 0, "particle", {
      speed: { min: 70, max: 200 },
      scale: { start: 1.0, end: 0 },
      lifespan: 320,
      quantity: 10,
      emitting: false,
    });
    this.particles.setDepth(20);

    // MODERNIZED: Larger scoreboard with vibrant styling
    this.scoreTxt = this.add.text(W / 2, tT - 40, "0 : 0", {
      fontSize: "68px",
      fontFamily: "monospace",
      color: "#ffffff",
      fontStyle: "bold",
    }).setOrigin(0.5).setDepth(30).setLetterSpacing(12);

    // Scoreboard background (more prominent with glow)
    const scoreboardBg = this.add.graphics();
    scoreboardBg.fillStyle(0x000000, 0.4);
    scoreboardBg.fillRoundedRect(W / 2 - 130, tT - 65, 260, 50, 12);
    scoreboardBg.lineStyle(2, 0x00d4ff, 0.3);
    scoreboardBg.strokeRoundedRect(W / 2 - 130, tT - 65, 260, 50, 12);
    scoreboardBg.setDepth(29);

    // Feature 3: tap-to-serve hint text
    this.serveTxt = this.add.text(W / 2, H / 2, "TAP  /  SPACE", {
      fontSize: "13px",
      fontFamily: "monospace",
      color: "#00ff88",
    }).setOrigin(0.5).setAlpha(0.85).setDepth(30).setVisible(false);

    // Input
    this.cursors = this.input.keyboard!.createCursorKeys();
    this.wasd = {
      up:    this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.W),
      down:  this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.S),
      left:  this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.A),
      right: this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.D),
    };
    this.spaceKey = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    this.input.on("pointerdown", (p: Phaser.Input.Pointer) => {
      this.touchX = p.x; this.touchY = p.y;
      if (this.waitingForServe) this.launchBall();
    });
    this.input.on("pointermove", (p: Phaser.Input.Pointer) => {
      if (p.isDown) { this.touchX = p.x; this.touchY = p.y; }
    });
    this.input.on("pointerup", () => { this.touchX = -1; this.touchY = -1; });

    // AI difficulty
    const cfgs = {
      easy:   { speed: 210, error: 65 },
      medium: { speed: 330, error: 30 },
      hard:   { speed: 480, error: 8 },
    };
    const cfg = cfgs[this.difficulty] ?? cfgs.medium;
    this.aiSpeed = cfg.speed;
    this.aiError = cfg.error;

    this.data.set("tL", tL);
    this.data.set("tT", tT);
    this.data.set("tW", tW);
    this.data.set("tH", tH);

    this.playerPrevX = W / 2;
    this.playerPrevY = tT + tH * 0.84;

    // Delay then show serve prompt (no auto-launch)
    this.time.delayedCall(500, () => { if (!this.gameOver) this.serve(); });
  }

  // Position ball and wait for player input (feature 3 – tap to serve)
  private serve() {
    const W = this.scale.width;
    const tT: number = this.data.get("tT");
    const tH: number = this.data.get("tH");

    this.playerServes = Math.random() > 0.5;
    this.trailPositions = [];
    this.serving = true;
    this.hitCooldown = 0;
    this.ball.setVelocity(0, 0);
    this.ball.setScale(1, 1);
    this.ball.setPosition(W / 2, this.playerServes ? tT + tH * 0.72 : tT + tH * 0.28);

    // Show blinking "tap to serve" text
    this.waitingForServe = true;
    this.tweens.killTweensOf(this.serveTxt);
    this.serveTxt.setPosition(W / 2, this.ball.y + (this.playerServes ? 48 : -48));
    this.serveTxt.setAlpha(0.85);
    this.serveTxt.setVisible(true);
    this.tweens.add({
      targets: this.serveTxt,
      alpha: { from: 0.85, to: 0.15 },
      duration: 550,
      yoyo: true,
      repeat: -1,
    });
  }

  private launchBall() {
    if (!this.waitingForServe || this.gameOver) return;
    this.waitingForServe = false;
    this.serving = false;
    this.tweens.killTweensOf(this.serveTxt);
    this.serveTxt.setVisible(false);
    this.serveTxt.setAlpha(0.85);
    this.rallyCount = 0;
    this.hitCooldown = 0;
    this.mustBounce = true;      // ball must bounce before paddle can hit
    this.bounceTriggered = false;

    const angle = Phaser.Math.Between(-38, 38);
    const dirY = this.playerServes ? -1 : 1;
    const vx = Math.sin(Phaser.Math.DegToRad(angle)) * this.ballSpeed;
    const vy = dirY * Math.cos(Phaser.Math.DegToRad(angle)) * this.ballSpeed;
    this.applyVelocity(vx, vy);
  }

  // Feature 7: Hit feedback with sparks
  private onHit(x: number, y: number, color: number) {
    this.particles.setPosition(x, y);
    this.particles.setParticleTint(color);
    this.particles.explode(10);

    // Hit spark effect (brief bright flash)
    const sparkEmitter = this.add.particles(0, 0, "spark", {
      speed: { min: 100, max: 250 },
      scale: { start: 1.2, end: 0 },
      lifespan: 250,
      quantity: 8,
      emitting: false,
    });
    sparkEmitter.setPosition(x, y);
    sparkEmitter.setParticleTint(0xffff99);
    sparkEmitter.explode(8);
    sparkEmitter.setDepth(12);
    this.time.delayedCall(300, () => sparkEmitter.destroy());

    this.impacts.push({ x, y, age: 0, color });
    this.cameras.main.shake(50, 0.003);
  }

  // Feature 6 & 9: Clamp speed, ensure min Y velocity
  private applyVelocity(vx: number, vy: number) {
    // 9. Prevent too-horizontal shots
    if (Math.abs(vy) < this.MIN_Y_SPEED) {
      vy = vy >= 0 ? this.MIN_Y_SPEED : -this.MIN_Y_SPEED;
    }
    // 6. Max speed cap
    const speed = Math.sqrt(vx * vx + vy * vy);
    if (speed > this.MAX_SPEED) {
      const s = this.MAX_SPEED / speed;
      vx *= s;
      vy *= s;
    }
    this.ball.setVelocity(vx, vy);
  }

  private triggerBounce(x: number, y: number) {
    this.mustBounce = false;
    this.bounceTriggered = true;

    // Tiny table variation: small random X nudge (simulates table surface)
    const vx = this.ball.body!.velocity.x;
    const vy = this.ball.body!.velocity.y;
    this.ball.setVelocity(vx + vy * Phaser.Math.FloatBetween(-0.04, 0.04), vy);

    // Squash on bounce
    this.ball.setScale(1.25, 0.7);
    this.tweens.add({
      targets: this.ball,
      scaleX: 1,
      scaleY: 1,
      duration: 90,
      ease: "Back.Out",
    });

    // Ripple ring at bounce point
    const ripple = this.add.graphics();
    ripple.lineStyle(1.5, 0xffffff, 0.55);
    ripple.strokeCircle(x, y, 7);
    ripple.setDepth(12);
    this.tweens.add({
      targets: ripple,
      alpha: 0,
      scaleX: 2.5,
      scaleY: 2.5,
      duration: 280,
      ease: "Quad.Out",
      onComplete: () => ripple.destroy(),
    });
  }

  private scorePoint(playerScored: boolean) {
    const W = this.scale.width;
    const tL: number = this.data.get("tL");
    const tT: number = this.data.get("tT");
    const tW: number = this.data.get("tW");
    const tH: number = this.data.get("tH");

    // Table flash effect on score
    const flashColor = playerScored ? 0x00d4ff : 0xe83030;
    const flashY = playerScored ? tT : tT + tH / 2;
    this.flashGfx.clear();
    this.flashGfx.fillStyle(flashColor, 1);
    this.flashGfx.fillRect(tL, flashY, tW, tH / 2);
    this.tweens.killTweensOf(this.flashGfx);
    this.flashGfx.setAlpha(0.18);
    this.tweens.add({
      targets: this.flashGfx,
      alpha: 0,
      duration: 350,
      ease: "Quad.Out",
    });

    if (playerScored) {
      this.playerScore++;
      this.onHit(W / 2, tT + tH * 0.15, 0x00d4ff);
    } else {
      this.aiScore++;
      this.onHit(W / 2, tT + tH * 0.85, 0xe83030);
    }

    this.scoreTxt.setText(`${this.playerScore} : ${this.aiScore}`);

    const pWin = this.playerScore >= this.WIN_SCORE && (this.playerScore - this.aiScore) >= 2;
    const aWin = this.aiScore >= this.WIN_SCORE && (this.aiScore - this.playerScore) >= 2;
    if (pWin || aWin) {
      this.gameOver = true;
      this.ball.setVelocity(0, 0);
      this.time.delayedCall(800, () => { this.onGameEnd(pWin, this.playerScore, this.aiScore); });
      return;
    }

    this.serving = true;
    this.waitingForServe = false;
    this.ball.setVelocity(0, 0);
    this.ball.setScale(1, 1);
    this.trailPositions = [];
    this.ball.setPosition(W / 2, tT + tH * 0.5);
    this.time.delayedCall(500, () => { if (!this.gameOver) this.serve(); });
  }

  update(_time: number, delta: number) {
    if (this.gameOver) return;

    const W = this.scale.width;
    const H = this.scale.height;
    const tL: number = this.data.get("tL");
    const tT: number = this.data.get("tT");
    const tW: number = this.data.get("tW");
    const tH: number = this.data.get("tH");
    const R = this.PADDLE_R;
    const HR = this.HITBOX_R;
    const dt = delta / 1000;
    const SPEED = 520;

    // Hit cooldown tick
    if (this.hitCooldown > 0) this.hitCooldown -= delta;

    // Space bar to serve
    if (this.waitingForServe && Phaser.Input.Keyboard.JustDown(this.spaceKey)) {
      this.launchBall();
    }

    // ─── Ball glow (reuse single Graphics object — no memory leak) ───────
    const bxG = this.ball.x;
    const byG = this.ball.y;
    this.ballGlowGfx.clear();
    this.ballGlowGfx.fillStyle(0xffffff, 0.10);
    this.ballGlowGfx.fillCircle(bxG, byG, 20);
    this.ballGlowGfx.fillStyle(0x00d4ff, 0.05);
    this.ballGlowGfx.fillCircle(bxG, byG, 30);

    // ─── Ball height simulation (for shadow scaling) ──────────────────
    // Ball is "in the air" between the two bounce lines; peaks at center
    const bounceLineAI = tT + tH * 0.38;
    const bounceLinePlayer = tT + tH * 0.70;
    const ballCenterY = tT + tH * 0.50;
    let ballZ = 0;
    if (!this.serving && !this.waitingForServe) {
      const distFromCenter = Math.abs(this.ball.y - ballCenterY);
      const halfRange = tH * 0.20;
      if (distFromCenter < halfRange) {
        ballZ = (1 - distFromCenter / halfRange) * 50;
      }
    }
    // Shadow shrinks as ball goes higher
    const shadowW = Math.max(5, 13 * (1 - ballZ * 0.012));
    const shadowH = Math.max(2, 5 * (1 - ballZ * 0.012));
    this.ballShadowGfx.clear();
    this.ballShadowGfx.fillStyle(0x000000, Math.max(0.08, 0.22 - ballZ * 0.002));
    this.ballShadowGfx.fillEllipse(this.ball.x, this.ball.y, shadowW, shadowH);
    this.ballShadowGfx.setDepth(5);

    // ─── Bounce zone detection ────────────────────────────────────────
    const bVy = this.ball.body?.velocity.y ?? 0;
    if (this.mustBounce && !this.bounceTriggered) {
      if (bVy < 0 && this.ball.y <= bounceLineAI) {
        this.triggerBounce(this.ball.x, this.ball.y);
      } else if (bVy > 0 && this.ball.y >= bounceLinePlayer) {
        this.triggerBounce(this.ball.x, this.ball.y);
      }
    }

    // ─── Paddle shadows (follow paddles every frame) ──────────────────
    this.playerShadow.clear();
    this.playerShadow.fillStyle(0xcc1515, 0.18);
    this.playerShadow.fillEllipse(this.player.x, this.player.y + 6, 52, 10);
    this.aiShadow.clear();
    this.aiShadow.fillStyle(0x2080e8, 0.18);
    this.aiShadow.fillEllipse(this.ai.x, this.ai.y - 6, 52, 10);

    // ─── Trail ───────────────────────────────────────────────────────
    if (!this.serving && !this.waitingForServe) {
      this.trailPositions.push({ x: this.ball.x, y: this.ball.y });
      if (this.trailPositions.length > this.TRAIL_LEN) this.trailPositions.shift();
    }

    this.trailGfx.clear();
    for (let i = 0; i < this.trailPositions.length; i++) {
      const t = i / this.trailPositions.length;
      const alpha = t * 0.5;
      const r = 5 + t * 7;
      const pos = this.trailPositions[i];
      this.trailGfx.fillStyle(0xffffff, alpha);
      this.trailGfx.fillCircle(pos.x, pos.y, r);
    }

    // ─── Impact lines ─────────────────────────────────────────────────
    this.impactGfx.clear();
    this.impacts = this.impacts.filter(imp => imp.age < this.IMPACT_DUR);
    for (const imp of this.impacts) {
      const t = imp.age / this.IMPACT_DUR;
      const alpha = (1 - t) * 0.85;
      const startR = 15 + t * 8;
      const endR = startR + 10 + t * 14;
      const lineW = 2 - t * 1.2;
      this.impactGfx.lineStyle(Math.max(0.5, lineW), imp.color, alpha);
      for (let a = 0; a < 6; a++) {
        const ang = (a / 6) * Math.PI * 2;
        this.impactGfx.lineBetween(
          imp.x + Math.cos(ang) * startR,
          imp.y + Math.sin(ang) * startR,
          imp.x + Math.cos(ang) * endR,
          imp.y + Math.sin(ang) * endR,
        );
      }
      imp.age += delta;
    }

    if (this.serving || this.waitingForServe) return;

    // ─── Paddle velocity tracking (feature 4 momentum) ────────────────
    // Calculate before moving, so we capture last-frame velocity
    this.playerVelX = (this.player.x - this.playerPrevX) / Math.max(dt, 0.001);
    this.playerVelY = (this.player.y - this.playerPrevY) / Math.max(dt, 0.001);

    // ─── Player movement ──────────────────────────────────────────────
    if (this.cursors.left.isDown || this.wasd.left.isDown) {
      this.player.x = Math.max(R, this.player.x - SPEED * dt);
    }
    if (this.cursors.right.isDown || this.wasd.right.isDown) {
      this.player.x = Math.min(W - R, this.player.x + SPEED * dt);
    }
    if (this.cursors.up.isDown || this.wasd.up.isDown) {
      this.player.y = Math.max(tT + tH * 0.50 + R, this.player.y - SPEED * dt);
    }
    if (this.cursors.down.isDown || this.wasd.down.isDown) {
      this.player.y = Math.min(H - R, this.player.y + SPEED * dt);
    }

    // Feature 3 & 10: Touch with smoothing + slight prediction
    if (this.touchX >= 0 && this.touchY >= 0) {
      const dx = this.touchX - this.player.x;
      const dy = this.touchY - this.player.y;
      // Feature 10: predict slightly ahead (extrapolate 10% of delta toward target)
      const predX = this.touchX + dx * 0.10;
      const predY = this.touchY + dy * 0.10;
      const tx = Phaser.Math.Clamp(predX, R, W - R);
      const ty = Phaser.Math.Clamp(predY, tT + tH * 0.50 + R, H - R);
      // Feature 3: lerp smoothing (0.40 = slightly smoother than before)
      this.player.x = Phaser.Math.Linear(this.player.x, tx, 0.40);
      this.player.y = Phaser.Math.Linear(this.player.y, ty, 0.40);
    }

    // Save position for next-frame velocity calculation
    this.playerPrevX = this.player.x;
    this.playerPrevY = this.player.y;

    // ─── AI movement — predict intercept or return home ───────────────
    const ballVyAI = this.ball.body!.velocity.y;
    const ballVxAI = this.ball.body!.velocity.x;
    const aiHomeX = tL + tW / 2;
    const aiHomeY = tT + tH * 0.14; // AI rests near the back wall, not the net

    let aiTargetX: number;
    let aiTargetY: number;
    let aiMoveSpeed: number;

    if (ballVyAI < -20) {
      // Ball heading toward AI — recalculate target only once per approach
      const curSign = -1;
      if (this.aiLastBallVySign !== curSign) {
        this.aiLastBallVySign = curSign;
        const aiIntercept = tT + tH * 0.18;
        const timeToReach = Math.abs((this.ball.y - aiIntercept) / (ballVyAI + 0.01));
        const predictedX = this.ball.x + ballVxAI * timeToReach;
        this.aiFixedTargetX = Phaser.Math.Clamp(
          predictedX + (Math.random() - 0.5) * this.aiError,
          R, W - R,
        );
      }
      aiTargetX = this.aiFixedTargetX;
      aiTargetY = tT + tH * 0.18;
      aiMoveSpeed = this.aiSpeed;
    } else {
      // Ball heading away — glide back to home position (fixed, no random jitter)
      if (this.aiLastBallVySign !== 1) {
        this.aiLastBallVySign = 1;
        this.aiFixedTargetX = aiHomeX;
      }
      aiTargetX = this.aiFixedTargetX;
      aiTargetY = aiHomeY;
      aiMoveSpeed = this.aiSpeed * 0.65; // slower return
    }

    const aiDX = aiTargetX - this.ai.x;
    const aiDY = aiTargetY - this.ai.y;
    const aiDist = Math.sqrt(aiDX * aiDX + aiDY * aiDY);
    if (aiDist > 2) {
      const aiMove = Math.min(aiMoveSpeed * dt, aiDist);
      this.ai.x = Phaser.Math.Clamp(this.ai.x + (aiDX / aiDist) * aiMove, R, W - R);
      this.ai.y = Phaser.Math.Clamp(this.ai.y + (aiDY / aiDist) * aiMove, R, tT + tH * 0.48 - R);
    }

    // ─── Ball boundaries ──────────────────────────────────────────────
    const bx = this.ball.x;
    const by = this.ball.y;
    const br = 18; // increased from 12 (modernized)

    // Ball must visibly exit the table before scoring (40px past the edge)
    const OUT_MARGIN = 40;

    if (bx < tL - OUT_MARGIN || bx > tL + tW + OUT_MARGIN) {
      this.scorePoint(by < tT + tH * 0.5);
      return;
    }
    if (by < tT - OUT_MARGIN) { this.scorePoint(true); return; }
    if (by > tT + tH + OUT_MARGIN) { this.scorePoint(false); return; }

    // Skip collision checks during cooldown (flickering fix)
    if (this.hitCooldown > 0) return;

    const curVy = this.ball.body!.velocity.y;
    const curVx = this.ball.body!.velocity.x;

    // ─── Collision: Player ────────────────────────────────────────────
    if (curVy > 0 && !this.mustBounce) {
      const dxP = bx - this.player.x;
      const dyP = by - this.player.y;
      if (Math.sqrt(dxP * dxP + dyP * dyP) < HR + br) {
        this.rallyCount++;

        // Feature 1: 4.5% acceleration per rally, capped at 1.7×
        const baseSpeed = this.ballSpeed * Math.min(1 + this.rallyCount * 0.045, 1.70);

        // Curve paddle logic: non-linear mapping (power curve — edges less extreme)
        const hitFrac = Phaser.Math.Clamp(dxP / HR, -1, 1);
        const hitFracAbs = Math.abs(hitFrac);
        const curvedFrac = Math.sign(hitFrac) * Math.pow(hitFracAbs, 1.35);

        // Edge soft zone: extra dampening for outer 25% of paddle
        const edgeSoftZone = hitFracAbs > 0.75 ? 1 - (hitFracAbs - 0.75) * 1.6 : 1.0;

        // Edge dampening: 100% center → ~50% at full edge
        const edgeWeaken = (1 - hitFracAbs * 0.45) * edgeSoftZone;

        // Max angle ±60° (enforced via edgeWeaken + later clamps)
        let angle = curvedFrac * 60 * edgeWeaken;

        // Center bias: middle 35% of paddle → angle pulled toward straight
        if (hitFracAbs < 0.35) {
          angle *= 0.42;
        }

        // Speed reduction at edges
        const edgeFactor = 1 - hitFracAbs * 0.30;
        const speed = baseSpeed * edgeFactor;

        // Random deviation ±3°
        const randAngle = angle + Phaser.Math.FloatBetween(-3, 3);

        let newVx = Math.sin(Phaser.Math.DegToRad(randAngle)) * speed;
        let newVy = -Math.abs(Math.cos(Phaser.Math.DegToRad(randAngle)) * speed);

        // Spin limit: cap paddle momentum contribution
        const spinX = Phaser.Math.Clamp(this.playerVelX * 0.10, -55, 55);
        const spinY = Phaser.Math.Clamp(this.playerVelY * 0.20, -75, 75);
        newVx += spinX;
        newVy += spinY;

        // Minimum vertical speed (must go upward with enough force)
        if (newVy > -100) newVy = -100;

        // Angle smoothing: dampen horizontal component 18% toward straight
        newVx *= 0.82;

        // Horizontal ratio limit: max 1.3 (tighter than before)
        const horizontalRatio = Math.abs(newVx) / (Math.abs(newVy) + 0.01);
        if (horizontalRatio > 1.4) {
          const magnitude = Math.sqrt(newVx * newVx + newVy * newVy);
          const maxHorizRatio = 1.3;
          const newVyAdjusted = magnitude / Math.sqrt(1 + maxHorizRatio * maxHorizRatio);
          const newVxAdjusted = newVyAdjusted * maxHorizRatio * Math.sign(newVx);
          newVx = newVxAdjusted;
          newVy = -Math.abs(newVyAdjusted);
        }

        // Clamp horizontal velocity: hard cap at 68% of ball speed
        const MAX_HORZ_SPEED = speed * 0.68;
        if (Math.abs(newVx) > MAX_HORZ_SPEED) {
          newVx = Math.sign(newVx) * MAX_HORZ_SPEED;
        }

        // Auto correction: ball near table edge → redirect inward
        const autoCorrectZone = 45;
        if (bx < tL + autoCorrectZone && newVx < 0) {
          newVx = Math.abs(newVx) * 0.25;
        }
        if (bx > tL + tW - autoCorrectZone && newVx > 0) {
          newVx = -Math.abs(newVx) * 0.25;
        }

        // Push ball cleanly out of hitbox
        this.ball.y = this.player.y - HR - br - 2;
        this.applyVelocity(newVx, newVy);

        // Feature 12: squash-stretch on hit
        this.ball.setScale(1.4, 0.65);
        this.tweens.add({
          targets: this.ball,
          scaleX: 1,
          scaleY: 1,
          duration: 130,
          ease: "Back.Out",
        });

        this.hitCooldown = this.HIT_COOLDOWN_MS;
        this.mustBounce = true;      // ball must bounce in AI half before AI can hit
        this.bounceTriggered = false;
        this.onHit(bx, by, 0xcc1515);

        // Paddle hit animation (grows 5-10% briefly)
        const origScale = this.player.scale;
        this.tweens.add({
          targets: this.player,
          scale: origScale * 1.08,
          duration: 80,
          ease: "Quad.Out",
          onComplete: () => {
            this.tweens.add({
              targets: this.player,
              scale: origScale,
              duration: 100,
              ease: "Quad.In",
            });
          },
        });
      }
    }

    // ─── Collision: AI ────────────────────────────────────────────────
    if (curVy < 0 && !this.mustBounce) {
      const dxA = bx - this.ai.x;
      const dyA = by - this.ai.y;
      if (Math.sqrt(dxA * dxA + dyA * dyA) < HR + br) {
        this.rallyCount++;

        const baseSpeed = this.ballSpeed * Math.min(1 + this.rallyCount * 0.045, 1.70);

        // Curve paddle logic: non-linear mapping (power curve — edges less extreme)
        const hitFrac = Phaser.Math.Clamp(dxA / HR, -1, 1);
        const hitFracAbs = Math.abs(hitFrac);
        const curvedFrac = Math.sign(hitFrac) * Math.pow(hitFracAbs, 1.35);

        // Edge soft zone: extra dampening for outer 25% of paddle
        const edgeSoftZone = hitFracAbs > 0.75 ? 1 - (hitFracAbs - 0.75) * 1.6 : 1.0;

        // Edge dampening: 100% center → ~50% at full edge
        const edgeWeaken = (1 - hitFracAbs * 0.45) * edgeSoftZone;

        // Max angle ±60°
        let angle = curvedFrac * 60 * edgeWeaken;

        // Center bias: middle 35% → angle pulled toward straight
        if (hitFracAbs < 0.35) {
          angle *= 0.42;
        }

        // Speed reduction at edges
        const edgeFactor = 1 - hitFracAbs * 0.30;
        const speed = baseSpeed * edgeFactor;

        // Random deviation ±3°
        const randAngle = angle + Phaser.Math.FloatBetween(-3, 3);

        let newVx = Math.sin(Phaser.Math.DegToRad(randAngle)) * speed;
        let newVy = Math.abs(Math.cos(Phaser.Math.DegToRad(randAngle)) * speed);

        // Spin limit: cap momentum contribution
        const spinX = Phaser.Math.Clamp(0, -55, 55); // AI has no tracked momentum
        const spinY = Phaser.Math.Clamp(0, -75, 75);
        newVx += spinX;
        newVy += spinY;

        // Minimum vertical speed (must go downward with enough force)
        if (newVy < 100) newVy = 100;

        // Angle smoothing: dampen horizontal component 18% toward straight
        newVx *= 0.82;

        // Horizontal ratio limit: max 1.3
        const horizontalRatio = Math.abs(newVx) / (Math.abs(newVy) + 0.01);
        if (horizontalRatio > 1.4) {
          const magnitude = Math.sqrt(newVx * newVx + newVy * newVy);
          const maxHorizRatio = 1.3;
          const newVyAdjusted = magnitude / Math.sqrt(1 + maxHorizRatio * maxHorizRatio);
          const newVxAdjusted = newVyAdjusted * maxHorizRatio * Math.sign(newVx);
          newVx = newVxAdjusted;
          newVy = Math.abs(newVyAdjusted);
        }

        // Clamp horizontal velocity: hard cap at 68% of ball speed
        const MAX_HORZ_SPEED = speed * 0.68;
        if (Math.abs(newVx) > MAX_HORZ_SPEED) {
          newVx = Math.sign(newVx) * MAX_HORZ_SPEED;
        }

        // Auto correction: ball near table edge → redirect inward
        const autoCorrectZone = 45;
        if (bx < tL + autoCorrectZone && newVx < 0) {
          newVx = Math.abs(newVx) * 0.25;
        }
        if (bx > tL + tW - autoCorrectZone && newVx > 0) {
          newVx = -Math.abs(newVx) * 0.25;
        }

        // Push ball cleanly out of hitbox
        this.ball.y = this.ai.y + HR + br + 2;
        this.applyVelocity(newVx, newVy);

        // Feature 12: squash-stretch
        this.ball.setScale(1.4, 0.65);
        this.tweens.add({
          targets: this.ball,
          scaleX: 1,
          scaleY: 1,
          duration: 130,
          ease: "Back.Out",
        });

        this.hitCooldown = this.HIT_COOLDOWN_MS;
        this.mustBounce = true;      // ball must bounce in player's half before player can hit
        this.bounceTriggered = false;
        this.onHit(bx, by, 0x2080e8);

        // Paddle hit animation (grows 5-10% briefly)
        const origScaleAI = this.ai.scale;
        this.tweens.add({
          targets: this.ai,
          scale: origScaleAI * 1.08,
          duration: 80,
          ease: "Quad.Out",
          onComplete: () => {
            this.tweens.add({
              targets: this.ai,
              scale: origScaleAI,
              duration: 100,
              ease: "Quad.In",
            });
          },
        });
      }
    }

    // Suppress unused variable warning
    void curVx;
  }
}

// ─── React wrapper ─────────────────────────────────────────────────────────
export default function PhaserGame({ difficulty, onGameEnd }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<Phaser.Game | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const scene = new PingPongScene();
    scene.onGameEnd = onGameEnd;
    scene.difficulty = difficulty;

    gameRef.current = new Phaser.Game({
      type: Phaser.AUTO,
      width: containerRef.current.clientWidth || 400,
      height: containerRef.current.clientHeight || 600,
      backgroundColor: "#0a0a1a",
      parent: containerRef.current,
      physics: { default: "arcade", arcade: { gravity: { x: 0, y: 0 }, debug: false } },
      scene,
      scale: { mode: Phaser.Scale.RESIZE, autoCenter: Phaser.Scale.CENTER_BOTH },
      input: { activePointers: 2 },
    });

    return () => { gameRef.current?.destroy(true); gameRef.current = null; };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <div ref={containerRef} className="w-full h-full" />;
}
