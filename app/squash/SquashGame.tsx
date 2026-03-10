"use client";

import Phaser from "phaser";
import { useEffect, useRef } from "react";

interface Props {
  onGameEnd: (score: number) => void;
}

// ─────────────────────────────────────────────────────────────────────────────
// GameScene
// ─────────────────────────────────────────────────────────────────────────────
class SquashScene extends Phaser.Scene {
  // Court layout (populated in create from scale)
  private FWX = 60;   // front wall x
  private PX  = 420;  // paddle x
  private WT  = 80;   // wall top y
  private WB  = 520;  // wall bottom y

  private readonly BALL_R    = 11;
  private readonly PADDLE_W  = 14;
  private readonly PADDLE_H  = 90;
  private readonly BALL_SPEED = 380;
  private readonly PADDLE_SPEED = 520;

  private ball!: Phaser.GameObjects.Arc;
  private ballBody!: Phaser.Types.Physics.Arcade.GameObjectWithBody;
  private paddleGfx!: Phaser.GameObjects.Graphics;

  private paddleY = 300;
  private vx = 0;
  private vy = 0;

  private score = 0;
  private scoreTxt!: Phaser.GameObjects.Text;
  private gameOver = false;
  private hitCooldown = 0;

  // Trail
  private trailGfx!: Phaser.GameObjects.Graphics;
  private trail: { x: number; y: number }[] = [];

  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private wKey!: Phaser.Input.Keyboard.Key;
  private sKey!: Phaser.Input.Keyboard.Key;
  private touchY = -1;

  public onGameEnd!: (score: number) => void;

  constructor() { super({ key: "SquashScene" }); }

  // ── preload ────────────────────────────────────────────────────────────────
  preload() {
    // nothing — we draw everything with Graphics
  }

  // ── create ─────────────────────────────────────────────────────────────────
  create() {
    const W = this.scale.width;
    const H = this.scale.height;

    // Responsive court
    this.FWX = Math.round(W * 0.10);
    this.PX  = Math.round(W * 0.87);
    this.WT  = Math.round(H * 0.12);
    this.WB  = Math.round(H * 0.88);
    this.paddleY = (this.WT + this.WB) / 2;

    // ── Background ──────────────────────────────────────────────────────────
    this.add.rectangle(W / 2, H / 2, W, H, 0x050f05);

    // Court floor fill
    const court = this.add.graphics();
    court.fillStyle(0x0a1f0a, 1);
    court.fillRect(this.FWX, this.WT, this.PX + this.PADDLE_W - this.FWX, this.WB - this.WT);

    // Service line (mid-court reference)
    const midX = this.FWX + (this.PX - this.FWX) * 0.55;
    court.lineStyle(1.5, 0x00ff88, 0.12);
    court.lineBetween(midX, this.WT, midX, this.WB);

    // ── Front wall ──────────────────────────────────────────────────────────
    const fwGfx = this.add.graphics();
    // outer glow
    fwGfx.lineStyle(12, 0x00ff88, 0.12);
    fwGfx.lineBetween(this.FWX, this.WT, this.FWX, this.WB);
    // main line
    fwGfx.lineStyle(6, 0x00ff88, 0.9);
    fwGfx.lineBetween(this.FWX, this.WT, this.FWX, this.WB);

    // Label
    this.add.text(this.FWX + 6, this.WT - 18, "FRONT WALL", {
      fontSize: "9px", color: "#00ff8866", fontFamily: "monospace", fontStyle: "bold",
    });

    // ── Side walls (top & bottom) ────────────────────────────────────────────
    const wallGfx = this.add.graphics();
    wallGfx.lineStyle(4, 0x00cc66, 0.7);
    wallGfx.lineBetween(this.FWX, this.WT, this.PX + this.PADDLE_W + 10, this.WT);
    wallGfx.lineBetween(this.FWX, this.WB, this.PX + this.PADDLE_W + 10, this.WB);

    // ── Score display ────────────────────────────────────────────────────────
    this.add.text(W / 2, 22, "RALLY", {
      fontSize: "10px", fontFamily: "monospace", color: "#ffffff55", fontStyle: "bold",
    }).setOrigin(0.5).setDepth(10);

    this.scoreTxt = this.add.text(W / 2, 42, "0", {
      fontSize: "40px", fontFamily: "monospace", color: "#ffffff", fontStyle: "bold",
    }).setOrigin(0.5).setDepth(10);

    // ── Trail gfx ───────────────────────────────────────────────────────────
    this.trailGfx = this.add.graphics();
    this.trailGfx.setDepth(3);

    // ── Ball (Arc — no physics, manual movement) ─────────────────────────────
    this.ball = this.add.arc(
      this.FWX + (this.PX - this.FWX) * 0.35,
      (this.WT + this.WB) / 2,
      this.BALL_R,
      0, 360,
      false,
      0xffd700,
      1,
    );
    this.ball.setDepth(6);

    // ── Paddle graphics (drawn every frame) ─────────────────────────────────
    this.paddleGfx = this.add.graphics();
    this.paddleGfx.setDepth(7);

    // ── Input ───────────────────────────────────────────────────────────────
    this.cursors = this.input.keyboard!.createCursorKeys();
    this.wKey = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.sKey = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.S);

    this.input.on("pointermove", (p: Phaser.Input.Pointer) => { this.touchY = p.y; });
    this.input.on("pointerdown", (p: Phaser.Input.Pointer) => { this.touchY = p.y; });
    this.input.on("pointerup",   ()                         => { this.touchY = -1;  });

    // ── Launch ball after short delay ────────────────────────────────────────
    this.time.delayedCall(700, () => this.launchBall());
  }

  // ── launchBall ────────────────────────────────────────────────────────────
  private launchBall() {
    const angle = Phaser.Math.FloatBetween(-20, 20);
    this.vx = -Math.cos(Phaser.Math.DegToRad(angle)) * this.BALL_SPEED;
    this.vy =  Math.sin(Phaser.Math.DegToRad(angle)) * this.BALL_SPEED;
  }

  // ── update ────────────────────────────────────────────────────────────────
  update(_time: number, delta: number) {
    if (this.gameOver) return;

    const dt = delta / 1000;
    const { FWX, PX, WT, WB, BALL_R, PADDLE_W, PADDLE_H, PADDLE_SPEED } = this;

    if (this.hitCooldown > 0) this.hitCooldown -= delta;

    // ── Paddle input ─────────────────────────────────────────────────────────
    if (this.cursors.up.isDown || this.wKey.isDown) {
      this.paddleY -= PADDLE_SPEED * dt;
    }
    if (this.cursors.down.isDown || this.sKey.isDown) {
      this.paddleY += PADDLE_SPEED * dt;
    }
    if (this.touchY >= 0) {
      this.paddleY = Phaser.Math.Linear(this.paddleY, this.touchY, 0.28);
    }
    this.paddleY = Phaser.Math.Clamp(this.paddleY, WT + PADDLE_H / 2, WB - PADDLE_H / 2);

    // ── Draw paddle ──────────────────────────────────────────────────────────
    this.paddleGfx.clear();
    const px0 = PX - PADDLE_W / 2;
    const py0 = this.paddleY - PADDLE_H / 2;
    // glow
    this.paddleGfx.fillStyle(0x00d4ff, 0.12);
    this.paddleGfx.fillRoundedRect(px0 - 6, py0 - 4, PADDLE_W + 12, PADDLE_H + 8, 8);
    // paddle body
    this.paddleGfx.fillStyle(0x00d4ff, 1);
    this.paddleGfx.fillRoundedRect(px0, py0, PADDLE_W, PADDLE_H, 5);
    // highlight
    this.paddleGfx.fillStyle(0xffffff, 0.25);
    this.paddleGfx.fillRoundedRect(px0 + 2, py0 + 4, 4, PADDLE_H - 8, 3);

    // ── Move ball ────────────────────────────────────────────────────────────
    this.ball.x += this.vx * dt;
    this.ball.y += this.vy * dt;

    // Trail
    this.trail.push({ x: this.ball.x, y: this.ball.y });
    if (this.trail.length > 10) this.trail.shift();
    this.trailGfx.clear();
    for (let i = 0; i < this.trail.length; i++) {
      const t = i / this.trail.length;
      this.trailGfx.fillStyle(0xffd700, t * 0.4);
      this.trailGfx.fillCircle(this.trail[i].x, this.trail[i].y, BALL_R * t);
    }

    const bx = this.ball.x;
    const by = this.ball.y;

    // ── Front wall bounce (left) ─────────────────────────────────────────────
    if (bx - BALL_R <= FWX && this.vx < 0) {
      this.ball.x = FWX + BALL_R;
      this.vx = Math.abs(this.vx);
      this.spawnRipple(FWX, by, 0x00ff88);
    }

    // ── Top wall ────────────────────────────────────────────────────────────
    if (by - BALL_R <= WT && this.vy < 0) {
      this.ball.y = WT + BALL_R;
      this.vy = Math.abs(this.vy);
    }

    // ── Bottom wall ──────────────────────────────────────────────────────────
    if (by + BALL_R >= WB && this.vy > 0) {
      this.ball.y = WB - BALL_R;
      this.vy = -Math.abs(this.vy);
    }

    // ── Paddle collision ─────────────────────────────────────────────────────
    const paddleLeft   = PX - PADDLE_W / 2;
    const paddleTop    = this.paddleY - PADDLE_H / 2;
    const paddleBottom = this.paddleY + PADDLE_H / 2;

    if (
      bx + BALL_R >= paddleLeft &&
      bx - BALL_R <= PX + PADDLE_W / 2 &&
      by + BALL_R >= paddleTop &&
      by - BALL_R <= paddleBottom &&
      this.vx > 0 &&
      this.hitCooldown <= 0
    ) {
      this.score++;
      this.scoreTxt.setText(String(this.score));

      // Angle based on hit position (-1 top, 0 center, +1 bottom)
      const hitFrac = Phaser.Math.Clamp((by - this.paddleY) / (PADDLE_H / 2), -1, 1);
      // Speed increases slightly each rally
      const speed = Math.min(this.BALL_SPEED * (1 + this.score * 0.012), this.BALL_SPEED * 1.8);
      const maxAngle = 55;
      const bounceAngle = hitFrac * maxAngle;
      this.vx = -Math.cos(Phaser.Math.DegToRad(bounceAngle)) * speed;
      this.vy =  Math.sin(Phaser.Math.DegToRad(bounceAngle)) * speed;

      // Push ball out of paddle
      this.ball.x = paddleLeft - BALL_R - 2;

      this.hitCooldown = 150;
      this.spawnRipple(PX, by, 0x00d4ff);
      this.cameras.main.shake(20, 0.003);

      // Score pop animation
      this.tweens.add({
        targets: this.scoreTxt,
        scaleX: 1.3, scaleY: 1.3,
        duration: 80,
        yoyo: true,
        ease: "Back.Out",
      });
    }

    // ── Ball exits right → missed → game over ────────────────────────────────
    if (bx > PX + 80) {
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

    // Overlay
    const overlay = this.add.graphics();
    overlay.fillStyle(0x000000, 0.55);
    overlay.fillRect(0, 0, W, H);
    overlay.setDepth(15);

    this.add.text(W / 2, H / 2 - 40, "MISS!", {
      fontSize: "52px", fontFamily: "monospace",
      color: "#ff2d78", fontStyle: "bold",
    }).setOrigin(0.5).setDepth(20);

    this.add.text(W / 2, H / 2 + 18, `Rally: ${this.score}`, {
      fontSize: "26px", fontFamily: "monospace", color: "#ffffff",
    }).setOrigin(0.5).setDepth(20);

    this.time.delayedCall(1400, () => this.onGameEnd(this.score));
  }

  // ── spawnRipple ───────────────────────────────────────────────────────────
  private spawnRipple(x: number, y: number, color: number) {
    const gfx = this.add.graphics();
    gfx.lineStyle(2.5, color, 0.9);
    gfx.strokeCircle(x, y, 10);
    gfx.setDepth(8);
    this.tweens.add({
      targets: gfx,
      alpha: 0, scaleX: 3, scaleY: 3,
      duration: 300,
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
      type: Phaser.AUTO,
      width:           containerRef.current.clientWidth  || 480,
      height:          containerRef.current.clientHeight || 640,
      backgroundColor: "#050f05",
      parent:          containerRef.current,
      physics: { default: "arcade", arcade: { gravity: { x: 0, y: 0 }, debug: false } },
      scene,
      scale: { mode: Phaser.Scale.RESIZE, autoCenter: Phaser.Scale.CENTER_BOTH },
      input: { activePointers: 2 },
    });

    return () => { gameRef.current?.destroy(true); gameRef.current = null; };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <div ref={containerRef} className="w-full h-full" />;
}
