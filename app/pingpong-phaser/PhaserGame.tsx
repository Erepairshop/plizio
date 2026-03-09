"use client";

import Phaser from "phaser";
import { useEffect, useRef } from "react";

type Difficulty = "easy" | "medium" | "hard";

interface Props {
  difficulty: Difficulty;
  onGameEnd: (won: boolean, myScore: number, oppScore: number) => void;
}

// ─── Phaser Scene ─────────────────────────────────────────────────────────────
class PingPongScene extends Phaser.Scene {
  // Paddles & ball
  private player!: Phaser.GameObjects.Rectangle;
  private ai!: Phaser.GameObjects.Rectangle;
  private ball!: Phaser.Physics.Arcade.Image;

  // Table elements
  private net!: Phaser.GameObjects.Rectangle;

  // Score
  private playerScore = 0;
  private aiScore = 0;
  private scoreTxt!: Phaser.GameObjects.Text;
  private WIN_SCORE = 11;

  // AI config
  private aiSpeed = 300;
  private aiError = 40;

  // Input
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private wasd!: Record<string, Phaser.Input.Keyboard.Key>;
  private pointer!: Phaser.Input.Pointer;

  // Touch: track last Y
  private touchTargetY = -1;

  // State
  private serving = true;
  private serveTimer = 0;
  private ballSpeed = 350;
  private rallyCount = 0;
  private gameOver = false;

  // Particles (simple dots)
  private particles!: Phaser.GameObjects.Particles.ParticleEmitter;

  // Callbacks from React
  public onGameEnd!: (won: boolean, myScore: number, oppScore: number) => void;
  public difficulty!: Difficulty;

  constructor() {
    super({ key: "PingPongScene" });
  }

  preload() {
    // Generate a simple white circle texture for the ball
    const gfx = this.make.graphics({ x: 0, y: 0 });
    gfx.fillStyle(0xffffff);
    gfx.fillCircle(12, 12, 12);
    gfx.generateTexture("ball", 24, 24);
    gfx.fillStyle(0xff2d78, 1);
    gfx.fillCircle(4, 4, 4);
    gfx.generateTexture("particle", 8, 8);
    gfx.destroy();
  }

  create() {
    const W = this.scale.width;
    const H = this.scale.height;

    // Background
    this.add.rectangle(W / 2, H / 2, W, H, 0x0a0a1a);

    // Table surface (centered)
    const tW = Math.min(W * 0.74, H * 0.56 * 0.74 / 0.56);
    const tH = tW / 0.56;
    const tL = (W - tW) / 2;
    const tT = (H - tH) / 2;

    // Table bg
    this.add.rectangle(W / 2, H / 2, tW, tH, 0x1a3a2a).setAlpha(0.9);

    // Table border
    const border = this.add.graphics();
    border.lineStyle(2, 0x00ff88, 0.8);
    border.strokeRect(tL, tT, tW, tH);

    // Center line
    this.add.rectangle(W / 2, H / 2, tW, 2, 0x00ff88).setAlpha(0.4);

    // Net
    this.net = this.add.rectangle(W / 2, H / 2, 4, tH, 0xffffff).setAlpha(0.9);

    // Court lines
    const lineGfx = this.add.graphics();
    lineGfx.lineStyle(1, 0x00ff88, 0.25);
    lineGfx.lineBetween(tL + tW * 0.25, tT, tL + tW * 0.25, tT + tH);
    lineGfx.lineBetween(tL + tW * 0.75, tT, tL + tW * 0.75, tT + tH);

    // Paddles
    const paddleW = Math.max(tW * 0.09, 32);
    const paddleH = Math.max(tH * 0.025, 10);
    this.player = this.add.rectangle(W / 2, tT + tH * 0.88, paddleW, paddleH, 0x00d4ff);
    this.ai = this.add.rectangle(W / 2, tT + tH * 0.12, paddleW, paddleH, 0xff2d78);

    // Paddle glow
    this.player.setStrokeStyle(2, 0x00d4ff, 0.6);
    this.ai.setStrokeStyle(2, 0xff2d78, 0.6);

    // Ball (physics)
    this.ball = this.physics.add.image(W / 2, H / 2, "ball");
    this.ball.setCircle(12);
    this.ball.setBounce(1, 1);
    this.ball.setCollideWorldBounds(false); // we handle ourselves

    // Particles
    this.particles = this.add.particles(0, 0, "particle", {
      speed: { min: 60, max: 180 },
      scale: { start: 1.0, end: 0 },
      lifespan: 350,
      quantity: 8,
      emitting: false,
    });

    // Score text
    this.scoreTxt = this.add.text(W / 2, tT - 28, "0 : 0", {
      fontSize: "22px",
      fontFamily: "monospace",
      color: "#ffffff",
    }).setOrigin(0.5);

    // Input
    this.cursors = this.input.keyboard!.createCursorKeys();
    this.wasd = {
      up: this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.W),
      down: this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.S),
      left: this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.A),
      right: this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.D),
    };
    this.pointer = this.input.activePointer;

    // Touch move
    this.input.on("pointermove", (p: Phaser.Input.Pointer) => {
      if (p.isDown) this.touchTargetY = p.y;
    });
    this.input.on("pointerdown", (p: Phaser.Input.Pointer) => {
      this.touchTargetY = p.y;
    });
    this.input.on("pointerup", () => {
      this.touchTargetY = -1;
    });

    // AI difficulty
    const cfgs = {
      easy:   { speed: 220, error: 60 },
      medium: { speed: 340, error: 28 },
      hard:   { speed: 480, error: 8 },
    };
    const cfg = cfgs[this.difficulty] ?? cfgs.medium;
    this.aiSpeed = cfg.speed;
    this.aiError = cfg.error;

    // Store table bounds on scene for update()
    this.data.set("tL", tL);
    this.data.set("tT", tT);
    this.data.set("tW", tW);
    this.data.set("tH", tH);
    this.data.set("paddleW", paddleW);
    this.data.set("paddleH", paddleH);

    // Serve after 1 second
    this.serveTimer = this.time.now + 1000;
  }

  private serve() {
    const W = this.scale.width;
    const H = this.scale.height;
    const tT: number = this.data.get("tT");
    const tH: number = this.data.get("tH");

    const playerServes = Math.random() > 0.5;
    this.ball.setPosition(W / 2, playerServes ? tT + tH * 0.78 : tT + tH * 0.22);
    this.ball.setVelocity(0, 0);

    // 1 second delay then launch
    this.time.delayedCall(800, () => {
      if (this.gameOver) return;
      const angle = Phaser.Math.Between(-40, 40);
      const dirY = playerServes ? -1 : 1;
      const vx = Math.sin(Phaser.Math.DegToRad(angle)) * this.ballSpeed;
      const vy = dirY * Math.cos(Phaser.Math.DegToRad(angle)) * this.ballSpeed;
      this.ball.setVelocity(vx, vy);
      this.serving = false;
      this.rallyCount = 0;
    });
  }

  private emitParticles(x: number, y: number, color: number) {
    this.particles.setPosition(x, y);
    this.particles.setParticleTint(color);
    this.particles.explode(8);
  }

  private scorePoint(playerScored: boolean) {
    const W = this.scale.width;
    const tT: number = this.data.get("tT");
    const tH: number = this.data.get("tH");

    if (playerScored) {
      this.playerScore++;
      this.emitParticles(W / 2, tT + tH * 0.12, 0x00d4ff);
    } else {
      this.aiScore++;
      this.emitParticles(W / 2, tT + tH * 0.88, 0xff2d78);
    }

    this.scoreTxt.setText(`${this.playerScore} : ${this.aiScore}`);

    // Check win
    const pWin = this.playerScore >= this.WIN_SCORE && (this.playerScore - this.aiScore) >= 2;
    const aWin = this.aiScore >= this.WIN_SCORE && (this.aiScore - this.playerScore) >= 2;
    if (pWin || aWin) {
      this.gameOver = true;
      this.ball.setVelocity(0, 0);
      this.time.delayedCall(800, () => {
        this.onGameEnd(pWin, this.playerScore, this.aiScore);
      });
      return;
    }

    // Next serve
    this.serving = true;
    this.ball.setVelocity(0, 0);
    this.ball.setPosition(W / 2, tT + tH * 0.5);
    this.time.delayedCall(600, () => {
      if (!this.gameOver) this.serve();
    });
  }

  update(time: number, delta: number) {
    if (this.gameOver) return;
    if (this.serving) return;

    const W = this.scale.width;
    const H = this.scale.height;
    const tL: number = this.data.get("tL");
    const tT: number = this.data.get("tT");
    const tW: number = this.data.get("tW");
    const tH: number = this.data.get("tH");
    const paddleW: number = this.data.get("paddleW");
    const paddleH: number = this.data.get("paddleH");

    const dt = delta / 1000;
    const PADDLE_SPEED = 500;
    const halfPW = paddleW / 2;

    // ─── Player movement ─────────────────────────────────────────────
    let playerMoved = false;

    // Keyboard
    if (this.cursors.left.isDown || this.wasd.left.isDown) {
      this.player.x = Math.max(tL + halfPW, this.player.x - PADDLE_SPEED * dt);
      playerMoved = true;
    }
    if (this.cursors.right.isDown || this.wasd.right.isDown) {
      this.player.x = Math.min(tL + tW - halfPW, this.player.x + PADDLE_SPEED * dt);
      playerMoved = true;
    }
    if (this.cursors.up.isDown || this.wasd.up.isDown) {
      this.player.y = Math.max(tT + tH * 0.55 + paddleH / 2, this.player.y - PADDLE_SPEED * dt);
      playerMoved = true;
    }
    if (this.cursors.down.isDown || this.wasd.down.isDown) {
      this.player.y = Math.min(tT + tH - paddleH / 2, this.player.y + PADDLE_SPEED * dt);
      playerMoved = true;
    }

    // Touch / mouse
    if (this.touchTargetY > 0) {
      const ty = Phaser.Math.Clamp(this.touchTargetY, tT + tH * 0.55 + paddleH / 2, tT + tH - paddleH / 2);
      this.player.y = Phaser.Math.Linear(this.player.y, ty, 0.25);
      this.player.x = Phaser.Math.Clamp(this.pointer.x, tL + halfPW, tL + tW - halfPW);
      playerMoved = true;
    }

    // ─── AI movement ────────────────────────────────────────────────
    const predictX = this.ball.x + (Math.random() - 0.5) * this.aiError;
    const predictY = this.ball.y + (Math.random() - 0.5) * this.aiError * 0.3;
    const aiMaxX = tL + tW - halfPW;
    const aiMinX = tL + halfPW;
    const aiMaxY = tT + tH * 0.45;
    const aiMinY = tT + paddleH / 2;

    const aiDX = predictX - this.ai.x;
    const aiDY = predictY - this.ai.y;
    const aiDist = Math.sqrt(aiDX * aiDX + aiDY * aiDY);
    if (aiDist > 2) {
      const aiMove = Math.min(this.aiSpeed * dt, aiDist);
      this.ai.x = Phaser.Math.Clamp(this.ai.x + (aiDX / aiDist) * aiMove, aiMinX, aiMaxX);
      this.ai.y = Phaser.Math.Clamp(this.ai.y + (aiDY / aiDist) * aiMove, aiMinY, aiMaxY);
    }

    // ─── Ball vs table walls ─────────────────────────────────────────
    const bx = this.ball.x;
    const by = this.ball.y;
    const br = 12;

    // Left/right walls
    if (bx - br < tL) {
      this.ball.x = tL + br;
      this.ball.setVelocityX(Math.abs(this.ball.body!.velocity.x));
    }
    if (bx + br > tL + tW) {
      this.ball.x = tL + tW - br;
      this.ball.setVelocityX(-Math.abs(this.ball.body!.velocity.x));
    }

    // Top (AI scores if ball exits): player scored
    if (by - br < tT) {
      this.scorePoint(true);
      return;
    }
    // Bottom: AI scored
    if (by + br > tT + tH) {
      this.scorePoint(false);
      return;
    }

    // ─── Ball vs Player paddle ───────────────────────────────────────
    const pvx = this.ball.body!.velocity.x;
    const pvy = this.ball.body!.velocity.y;

    if (
      pvy > 0 && // ball moving toward player (downward)
      bx > this.player.x - paddleW / 2 - br &&
      bx < this.player.x + paddleW / 2 + br &&
      by + br >= this.player.y - paddleH / 2 &&
      by - br <= this.player.y + paddleH / 2
    ) {
      // Reflect & add angle based on hit position
      const hitFrac = (bx - this.player.x) / (paddleW / 2); // -1..1
      this.rallyCount++;
      const speedBoost = Math.min(1 + this.rallyCount * 0.04, 1.6);
      const newSpeed = this.ballSpeed * speedBoost;
      const angle = hitFrac * 55; // max 55deg
      const vx = Math.sin(Phaser.Math.DegToRad(angle)) * newSpeed;
      const vy = -Math.abs(Math.cos(Phaser.Math.DegToRad(angle)) * newSpeed);
      this.ball.setVelocity(vx, vy);
      this.ball.y = this.player.y - paddleH / 2 - br;
      this.emitParticles(bx, by, 0x00d4ff);
    }

    // ─── Ball vs AI paddle ───────────────────────────────────────────
    if (
      pvy < 0 && // ball moving toward AI (upward)
      bx > this.ai.x - paddleW / 2 - br &&
      bx < this.ai.x + paddleW / 2 + br &&
      by - br <= this.ai.y + paddleH / 2 &&
      by + br >= this.ai.y - paddleH / 2
    ) {
      const hitFrac = (bx - this.ai.x) / (paddleW / 2);
      this.rallyCount++;
      const speedBoost = Math.min(1 + this.rallyCount * 0.04, 1.6);
      const newSpeed = this.ballSpeed * speedBoost;
      const angle = hitFrac * 55;
      const vx = Math.sin(Phaser.Math.DegToRad(angle)) * newSpeed;
      const vy = Math.abs(Math.cos(Phaser.Math.DegToRad(angle)) * newSpeed);
      this.ball.setVelocity(vx, vy);
      this.ball.y = this.ai.y + paddleH / 2 + br;
      this.emitParticles(bx, by, 0xff2d78);
    }
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

    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: containerRef.current.clientWidth || 400,
      height: containerRef.current.clientHeight || 600,
      backgroundColor: "#0a0a1a",
      parent: containerRef.current,
      physics: {
        default: "arcade",
        arcade: { gravity: { x: 0, y: 0 }, debug: false },
      },
      scene,
      scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
      // Disable Phaser's own DOM event capture on window to avoid scroll lock
      input: { activePointers: 2 },
    };

    gameRef.current = new Phaser.Game(config);

    return () => {
      gameRef.current?.destroy(true);
      gameRef.current = null;
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <div ref={containerRef} className="w-full h-full" />;
}
