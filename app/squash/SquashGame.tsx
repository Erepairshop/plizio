"use client";

import Phaser from "phaser";
import { useEffect, useRef } from "react";

interface Props {
  onGameEnd: (score: number) => void;
}

// ─────────────────────────────────────────────────────────────────────────────
// SquashScene  —  természetes squash nézet: front wall FELÜL, játékos ALUL
// ─────────────────────────────────────────────────────────────────────────────
class SquashScene extends Phaser.Scene {

  // ── Court boundaries (set in create) ──────────────────────────────────────
  private FWY = 0;   // front wall Y (top)
  private BY  = 0;   // back / player zone Y (bottom)
  private WL  = 0;   // left wall X
  private WR  = 0;   // right wall X

  // ── Ball constants ────────────────────────────────────────────────────────
  private readonly BALL_R        = 10;
  private readonly BASE_SPEED    = 420;
  private readonly MAX_SPEED     = 780;
  private readonly MIN_VY        = 140;   // minimum vertical component (prevent flat shots)
  private readonly ACCEL_PER_HIT = 0.013; // speed mult per hit (capped at MAX_SPEED)

  // ── Paddle constants ──────────────────────────────────────────────────────
  private readonly PAD_W  = 110;  // half-width of paddle
  private readonly PAD_H  = 14;   // thickness
  private readonly PAD_SPEED = 600;
  private readonly HIT_ZONE = 55; // px above paddle top where ball can be hit

  // ── State ─────────────────────────────────────────────────────────────────
  private ball!: Phaser.GameObjects.Arc;
  private paddleGfx!: Phaser.GameObjects.Graphics;
  private trailGfx!: Phaser.GameObjects.Graphics;
  private courtGfx!: Phaser.GameObjects.Graphics;

  private bx = 0;  // ball position
  private by = 0;
  private vx = 0;  // ball velocity
  private vy = 0;

  private padX = 0;        // paddle center x
  private padPrevX = 0;    // for velocity tracking
  private padVelX  = 0;

  private rally     = 0;
  private bestRally = 0;
  private hitCooldown  = 0;
  private gameOver     = false;
  private launching    = true;  // waiting for first launch

  private trail: { x: number; y: number }[] = [];

  // ── HUD ───────────────────────────────────────────────────────────────────
  private rallyTxt!: Phaser.GameObjects.Text;
  private bestTxt!:  Phaser.GameObjects.Text;

  // ── Input ─────────────────────────────────────────────────────────────────
  private leftKey!:  Phaser.Input.Keyboard.Key;
  private rightKey!: Phaser.Input.Keyboard.Key;
  private aKey!:     Phaser.Input.Keyboard.Key;
  private dKey!:     Phaser.Input.Keyboard.Key;
  private touchX = -1;

  public onGameEnd!: (score: number) => void;

  constructor() { super({ key: "SquashScene" }); }

  // ── preload ────────────────────────────────────────────────────────────────
  preload() { /* all drawn via Graphics */ }

  // ── create ────────────────────────────────────────────────────────────────
  create() {
    const W = this.scale.width;
    const H = this.scale.height;

    // Court bounds (responsive)
    this.FWY = Math.round(H * 0.09);
    this.BY  = Math.round(H * 0.91);
    this.WL  = Math.round(W * 0.04);
    this.WR  = Math.round(W * 0.96);
    this.padX  = W / 2;
    this.padPrevX = W / 2;
    this.bx    = W / 2;
    this.by    = this.BY - 60;

    // ── Background ────────────────────────────────────────────────────────
    this.add.rectangle(W / 2, H / 2, W, H, 0x050f05);

    // ── Court fill ────────────────────────────────────────────────────────
    this.courtGfx = this.add.graphics();
    this.drawCourt();

    // ── HUD ───────────────────────────────────────────────────────────────
    // Rally counter (center top)
    this.add.text(W / 2, 20, "RALLY", {
      fontSize: "10px", fontFamily: "monospace",
      color: "#ffffff55", fontStyle: "bold",
    }).setOrigin(0.5).setDepth(10);

    this.rallyTxt = this.add.text(W / 2, 38, "0", {
      fontSize: "36px", fontFamily: "monospace",
      color: "#ffffff", fontStyle: "bold",
    }).setOrigin(0.5).setDepth(10);

    // Best rally (top right)
    this.add.text(W - 12, 20, "BEST", {
      fontSize: "9px", fontFamily: "monospace",
      color: "#ffffff44", fontStyle: "bold",
    }).setOrigin(1, 0).setDepth(10);

    this.bestTxt = this.add.text(W - 12, 32, "0", {
      fontSize: "22px", fontFamily: "monospace",
      color: "#ffd70088", fontStyle: "bold",
    }).setOrigin(1, 0).setDepth(10);

    // ── Trail & ball ──────────────────────────────────────────────────────
    this.trailGfx = this.add.graphics().setDepth(3);

    this.ball = this.add.arc(this.bx, this.by, this.BALL_R, 0, 360, false, 0xffd700, 1);
    this.ball.setDepth(6);

    // ── Paddle ────────────────────────────────────────────────────────────
    this.paddleGfx = this.add.graphics().setDepth(7);

    // ── Input ─────────────────────────────────────────────────────────────
    this.leftKey  = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    this.rightKey = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    this.aKey     = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.dKey     = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.D);

    this.input.on("pointermove", (p: Phaser.Input.Pointer) => { if (p.isDown) this.touchX = p.x; });
    this.input.on("pointerdown", (p: Phaser.Input.Pointer) => { this.touchX = p.x; });
    this.input.on("pointerup",   ()                         => { this.touchX = -1; });

    // ── Launch after short delay ───────────────────────────────────────────
    this.time.delayedCall(600, () => {
      this.launching = false;
      this.launchBall();
    });
  }

  // ── drawCourt ─────────────────────────────────────────────────────────────
  private drawCourt() {
    const W = this.scale.width;
    const H = this.scale.height;
    const g = this.courtGfx;
    g.clear();

    // Court floor
    g.fillStyle(0x0a1f0a, 1);
    g.fillRect(this.WL, this.FWY, this.WR - this.WL, this.BY - this.FWY);

    // Service/half-court line
    const midY = this.FWY + (this.BY - this.FWY) * 0.55;
    g.lineStyle(1.5, 0x00ff88, 0.10);
    g.lineBetween(this.WL, midY, this.WR, midY);

    // ── Front wall (top) — prominent ──────────────────────────────────────
    // outer glow
    g.lineStyle(14, 0x00ff88, 0.10);
    g.lineBetween(this.WL, this.FWY, this.WR, this.FWY);
    // main
    g.lineStyle(5, 0x00ff88, 1.0);
    g.lineBetween(this.WL, this.FWY, this.WR, this.FWY);

    // ── Side walls ────────────────────────────────────────────────────────
    g.lineStyle(4, 0x00cc66, 0.65);
    g.lineBetween(this.WL, this.FWY, this.WL, this.BY);
    g.lineBetween(this.WR, this.FWY, this.WR, this.BY);

    // Floor line (bottom boundary)
    g.lineStyle(3, 0x336633, 0.45);
    g.lineBetween(this.WL, this.BY, this.WR, this.BY);

    // Label
    this.add.text(this.WL + 6, this.FWY - 18, "FRONT WALL", {
      fontSize: "9px", color: "#00ff8866", fontFamily: "monospace", fontStyle: "bold",
    }).setDepth(10);
  }

  // ── launchBall ────────────────────────────────────────────────────────────
  private launchBall() {
    // Launch toward front wall (upward) with slight horizontal angle
    const angle = Phaser.Math.FloatBetween(-22, 22);
    const spd = this.BASE_SPEED;
    this.vx =  Math.sin(Phaser.Math.DegToRad(angle)) * spd;
    this.vy = -Math.cos(Phaser.Math.DegToRad(angle)) * spd; // upward = negative Y
    this.ensureMinVY();
  }

  // ── ensureMinVY — prevent nearly horizontal shots ──────────────────────
  private ensureMinVY() {
    if (Math.abs(this.vy) < this.MIN_VY) {
      this.vy = this.vy >= 0 ? this.MIN_VY : -this.MIN_VY;
    }
    // Cap total speed
    const spd = Math.hypot(this.vx, this.vy);
    if (spd > this.MAX_SPEED) {
      const s = this.MAX_SPEED / spd;
      this.vx *= s;
      this.vy *= s;
    }
  }

  // ── update ────────────────────────────────────────────────────────────────
  update(_time: number, delta: number) {
    if (this.gameOver) return;

    const dt = Math.min(delta / 1000, 0.033); // clamp to 30fps min — prevents tunneling

    if (this.hitCooldown > 0) this.hitCooldown -= delta;

    // ── Track paddle velocity ────────────────────────────────────────────
    this.padVelX  = (this.padX - this.padPrevX) / Math.max(dt, 0.001);
    this.padPrevX = this.padX;

    // ── Paddle input ─────────────────────────────────────────────────────
    const { PAD_W, PAD_SPEED, WL, WR } = this;
    const padMin = WL + PAD_W;
    const padMax = WR - PAD_W;

    if (this.leftKey.isDown  || this.aKey.isDown)  this.padX -= PAD_SPEED * dt;
    if (this.rightKey.isDown || this.dKey.isDown)  this.padX += PAD_SPEED * dt;
    if (this.touchX >= 0) {
      this.padX = Phaser.Math.Linear(this.padX, this.touchX, 0.30);
    }
    this.padX = Phaser.Math.Clamp(this.padX, padMin, padMax);

    // ── Draw paddle ──────────────────────────────────────────────────────
    this.paddleGfx.clear();
    const { PAD_H, BY } = this;
    const padY = BY - PAD_H - 6;
    // glow
    this.paddleGfx.fillStyle(0x00d4ff, 0.12);
    this.paddleGfx.fillRoundedRect(this.padX - PAD_W - 6, padY - 4, (PAD_W + 6) * 2, PAD_H + 8, 7);
    // body
    this.paddleGfx.fillStyle(0x00d4ff, 1);
    this.paddleGfx.fillRoundedRect(this.padX - PAD_W, padY, PAD_W * 2, PAD_H, 5);
    // highlight
    this.paddleGfx.fillStyle(0xffffff, 0.25);
    this.paddleGfx.fillRoundedRect(this.padX - PAD_W + 6, padY + 2, PAD_W * 2 - 12, 4, 2);

    // ── Move ball ────────────────────────────────────────────────────────
    if (!this.launching) {
      this.bx += this.vx * dt;
      this.by += this.vy * dt;
    }

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

    const { BALL_R, FWY, HIT_ZONE } = this;

    // ── Front wall bounce (TOP) ──────────────────────────────────────────
    if (this.by - BALL_R <= FWY && this.vy < 0) {
      this.by = FWY + BALL_R;
      this.vy = Math.abs(this.vy);
      // small random deviation on wall
      this.vx += Phaser.Math.FloatBetween(-18, 18);
      this.ensureMinVY();
      this.spawnRipple(this.bx, FWY, 0x00ff88);
    }

    // ── Left wall ────────────────────────────────────────────────────────
    if (this.bx - BALL_R <= WL && this.vx < 0) {
      this.bx = WL + BALL_R;
      this.vx = Math.abs(this.vx);
      // Sidewall correction: if ball bouncing back and forth horizontally, add downward push
      if (Math.abs(this.vy) < this.MIN_VY) this.vy = this.MIN_VY;
      this.spawnRipple(WL, this.by, 0x336633);
    }

    // ── Right wall ───────────────────────────────────────────────────────
    if (this.bx + BALL_R >= WR && this.vx > 0) {
      this.bx = WR - BALL_R;
      this.vx = -Math.abs(this.vx);
      if (Math.abs(this.vy) < this.MIN_VY) this.vy = this.MIN_VY;
      this.spawnRipple(WR, this.by, 0x336633);
    }

    // ── Paddle collision ─────────────────────────────────────────────────
    // Hit zone: ball coming DOWN (vy > 0), within HIT_ZONE above paddle top
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

      // Speed with progression
      const spd = Math.min(
        this.BASE_SPEED * (1 + this.rally * this.ACCEL_PER_HIT),
        this.MAX_SPEED
      );

      // Angle: based on horizontal offset from paddle center (-1 left, +1 right)
      const hitFrac = Phaser.Math.Clamp((this.bx - this.padX) / PAD_W, -1, 1);
      const maxAngle = 50;
      const bounceAngle = hitFrac * maxAngle;

      this.vx = Math.sin(Phaser.Math.DegToRad(bounceAngle)) * spd;
      this.vy = -Math.cos(Phaser.Math.DegToRad(bounceAngle)) * spd; // upward

      // Paddle momentum adds spin
      const spin = Phaser.Math.Clamp(this.padVelX * 0.12, -70, 70);
      this.vx += spin;

      // Small random deviation
      this.vx += Phaser.Math.FloatBetween(-12, 12);

      this.ensureMinVY();

      // Push ball clear of paddle
      this.by = padTop - BALL_R - 2;

      this.hitCooldown = 160;
      this.spawnRipple(this.bx, this.by, 0x00d4ff);
      this.cameras.main.shake(18, 0.003);

      // Rally pop
      this.tweens.add({
        targets: this.rallyTxt,
        scaleX: 1.35, scaleY: 1.35,
        duration: 70,
        yoyo: true,
        ease: "Back.Out",
      });
    }

    // ── Miss — ball exits bottom ─────────────────────────────────────────
    if (this.by - BALL_R > BY + 60) {
      this.endGame();
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
    overlay.fillStyle(0x000000, 0.58);
    overlay.fillRect(0, 0, W, H);
    overlay.setDepth(15);

    this.add.text(W / 2, H / 2 - 55, "MISS!", {
      fontSize: "52px", fontFamily: "monospace",
      color: "#ff2d78", fontStyle: "bold",
    }).setOrigin(0.5).setDepth(20);

    this.add.text(W / 2, H / 2 + 4, `Rally: ${this.rally}`, {
      fontSize: "28px", fontFamily: "monospace", color: "#ffffff",
    }).setOrigin(0.5).setDepth(20);

    if (this.rally >= this.bestRally && this.rally > 0) {
      this.add.text(W / 2, H / 2 + 44, "🏆 New Best!", {
        fontSize: "18px", fontFamily: "monospace", color: "#ffd700",
      }).setOrigin(0.5).setDepth(20);
    }

    this.time.delayedCall(1400, () => this.onGameEnd(this.rally));
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
