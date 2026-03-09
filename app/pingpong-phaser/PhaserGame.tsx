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
  private WIN_SCORE = 11;

  private aiSpeed = 300;
  private aiError = 40;

  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private wasd!: Record<string, Phaser.Input.Keyboard.Key>;

  private touchX = -1;
  private touchY = -1;

  private serving = true;
  private ballSpeed = 350;
  private rallyCount = 0;
  private gameOver = false;
  private PADDLE_R = 28; // larger = easier to hit

  private particles!: Phaser.GameObjects.Particles.ParticleEmitter;

  // ── Trail & impact effects
  private trailGfx!: Phaser.GameObjects.Graphics;
  private impactGfx!: Phaser.GameObjects.Graphics;
  private trailPositions: { x: number; y: number }[] = [];
  private impacts: { x: number; y: number; age: number; color: number }[] = [];
  private readonly TRAIL_LEN = 8;
  private readonly IMPACT_DUR = 200;

  public onGameEnd!: (won: boolean, myScore: number, oppScore: number) => void;
  public difficulty!: Difficulty;

  constructor() { super({ key: "PingPongScene" }); }

  preload() {
    const g = this.make.graphics({ x: 0, y: 0 });

    // Ball
    g.fillStyle(0xffffff);
    g.fillCircle(12, 12, 12);
    g.fillStyle(0xdddddd, 0.35);
    g.fillCircle(8, 8, 5);
    g.generateTexture("ball", 24, 24);
    g.clear();

    // Player paddle (red, handle down) — circle center at (22, 22)
    g.fillStyle(0x5a1a1a);
    g.fillCircle(22, 22, 22);
    g.fillStyle(0xcc1515);
    g.fillCircle(22, 22, 20);
    g.fillStyle(0xe83030);
    g.fillCircle(22, 22, 12);
    g.fillStyle(0xffffff, 0.22);
    g.fillCircle(16, 16, 8);
    g.fillStyle(0x8b6340);
    g.fillRoundedRect(17, 42, 10, 20, 3);
    g.fillStyle(0xa07850, 0.7);
    g.fillRoundedRect(19, 43, 4, 18, 2);
    g.generateTexture("playerPaddle", 44, 64);
    g.clear();

    // AI paddle (blue, handle up) — circle center at (22, 40)
    g.fillStyle(0x0d2d55);
    g.fillCircle(22, 40, 22);
    g.fillStyle(0x1060cc);
    g.fillCircle(22, 40, 20);
    g.fillStyle(0x2080e8);
    g.fillCircle(22, 40, 12);
    g.fillStyle(0xffffff, 0.22);
    g.fillCircle(16, 34, 8);
    g.fillStyle(0x8b6340);
    g.fillRoundedRect(17, 2, 10, 20, 3);
    g.fillStyle(0xa07850, 0.7);
    g.fillRoundedRect(19, 3, 4, 18, 2);
    g.generateTexture("aiPaddle", 44, 64);
    g.clear();

    // Particle dot
    g.fillStyle(0xffffff);
    g.fillCircle(4, 4, 4);
    g.generateTexture("particle", 8, 8);
    g.destroy();
  }

  create() {
    const W = this.scale.width;
    const H = this.scale.height;

    const tW = Math.min(W * 0.80, 340);
    const tH = tW / 0.56;
    const tL = (W - tW) / 2;
    const tT = (H - tH) / 2;

    // ── Background & table
    this.add.rectangle(W / 2, H / 2, W, H, 0x0a0a1a);
    this.add.rectangle(W / 2, H / 2, tW, tH, 0x0e2d1e).setAlpha(0.95);

    const border = this.add.graphics();
    border.lineStyle(2, 0x00ff88, 0.8);
    border.strokeRect(tL, tT, tW, tH);

    this.add.rectangle(W / 2, H / 2, tW, 2, 0x00ff88).setAlpha(0.35);
    this.add.rectangle(W / 2, H / 2, 4, tH * 0.06, 0xffffff).setAlpha(0.9);

    const lg = this.add.graphics();
    lg.lineStyle(1, 0x00ff88, 0.15);
    lg.lineBetween(tL + tW * 0.333, tT, tL + tW * 0.333, tT + tH);
    lg.lineBetween(tL + tW * 0.667, tT, tL + tW * 0.667, tT + tH);

    // ── Effect layers (below ball)
    this.trailGfx = this.add.graphics();
    this.impactGfx = this.add.graphics();

    // ── Paddles — scale 1.4 so visual radius = 20*1.4 = 28 = PADDLE_R
    const SCALE = this.PADDLE_R / 20;
    this.player = this.add.image(W / 2, tT + tH * 0.84, "playerPaddle")
      .setOrigin(0.5, 22 / 64)
      .setScale(SCALE);
    this.ai = this.add.image(W / 2, tT + tH * 0.16, "aiPaddle")
      .setOrigin(0.5, 40 / 64)
      .setScale(SCALE);

    // ── Ball (above paddles)
    this.ball = this.physics.add.image(W / 2, H / 2, "ball");
    this.ball.setCircle(12);
    this.ball.setBounce(1, 1);
    this.ball.setCollideWorldBounds(false);
    this.ball.setDepth(10);

    // ── Particles (on top)
    this.particles = this.add.particles(0, 0, "particle", {
      speed: { min: 70, max: 200 },
      scale: { start: 1.0, end: 0 },
      lifespan: 320,
      quantity: 10,
      emitting: false,
    });
    this.particles.setDepth(20);

    // ── Score
    this.scoreTxt = this.add.text(W / 2, tT - 28, "0 : 0", {
      fontSize: "22px",
      fontFamily: "monospace",
      color: "#ffffff",
    }).setOrigin(0.5).setDepth(30);

    // ── Input
    this.cursors = this.input.keyboard!.createCursorKeys();
    this.wasd = {
      up:    this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.W),
      down:  this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.S),
      left:  this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.A),
      right: this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.D),
    };

    this.input.on("pointerdown", (p: Phaser.Input.Pointer) => {
      this.touchX = p.x; this.touchY = p.y;
    });
    this.input.on("pointermove", (p: Phaser.Input.Pointer) => {
      if (p.isDown) { this.touchX = p.x; this.touchY = p.y; }
    });
    this.input.on("pointerup", () => { this.touchX = -1; this.touchY = -1; });

    // ── AI difficulty
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

    this.time.delayedCall(1000, () => { if (!this.gameOver) this.serve(); });
  }

  private serve() {
    const W = this.scale.width;
    const tT: number = this.data.get("tT");
    const tH: number = this.data.get("tH");

    const playerServes = Math.random() > 0.5;
    this.trailPositions = [];
    this.ball.setPosition(W / 2, playerServes ? tT + tH * 0.75 : tT + tH * 0.25);
    this.ball.setVelocity(0, 0);

    this.time.delayedCall(700, () => {
      if (this.gameOver) return;
      const angle = Phaser.Math.Between(-38, 38);
      const dirY = playerServes ? -1 : 1;
      const vx = Math.sin(Phaser.Math.DegToRad(angle)) * this.ballSpeed;
      const vy = dirY * Math.cos(Phaser.Math.DegToRad(angle)) * this.ballSpeed;
      this.ball.setVelocity(vx, vy);
      this.serving = false;
      this.rallyCount = 0;
    });
  }

  private onHit(x: number, y: number, color: number) {
    // Particles
    this.particles.setPosition(x, y);
    this.particles.setParticleTint(color);
    this.particles.explode(10);

    // Impact lines
    this.impacts.push({ x, y, age: 0, color });

    // Camera micro-shake
    this.cameras.main.shake(70, 0.006);
  }

  private scorePoint(playerScored: boolean) {
    const W = this.scale.width;
    const tT: number = this.data.get("tT");
    const tH: number = this.data.get("tH");

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
    this.ball.setVelocity(0, 0);
    this.trailPositions = [];
    this.ball.setPosition(W / 2, tT + tH * 0.5);
    this.time.delayedCall(600, () => { if (!this.gameOver) this.serve(); });
  }

  update(_time: number, delta: number) {
    if (this.gameOver) return;

    const tL: number = this.data.get("tL");
    const tT: number = this.data.get("tT");
    const tW: number = this.data.get("tW");
    const tH: number = this.data.get("tH");
    const R = this.PADDLE_R;
    const dt = delta / 1000;
    const SPEED = 520;

    // ─── Trail ───────────────────────────────────────────────────────
    if (!this.serving) {
      this.trailPositions.push({ x: this.ball.x, y: this.ball.y });
      if (this.trailPositions.length > this.TRAIL_LEN) this.trailPositions.shift();
    }

    this.trailGfx.clear();
    for (let i = 0; i < this.trailPositions.length; i++) {
      const t = i / this.trailPositions.length;
      const alpha = t * 0.5;
      const r = 5 + t * 7; // grows toward ball
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

    if (this.serving) return;

    // ─── Player movement ───────────────────────────────────────────────
    if (this.cursors.left.isDown || this.wasd.left.isDown) {
      this.player.x = Math.max(tL + R, this.player.x - SPEED * dt);
    }
    if (this.cursors.right.isDown || this.wasd.right.isDown) {
      this.player.x = Math.min(tL + tW - R, this.player.x + SPEED * dt);
    }
    if (this.cursors.up.isDown || this.wasd.up.isDown) {
      this.player.y = Math.max(tT + tH * 0.52 + R, this.player.y - SPEED * dt);
    }
    if (this.cursors.down.isDown || this.wasd.down.isDown) {
      this.player.y = Math.min(tT + tH - R, this.player.y + SPEED * dt);
    }

    // Touch — direct snap (most responsive)
    if (this.touchX >= 0 && this.touchY >= 0) {
      const tx = Phaser.Math.Clamp(this.touchX, tL + R, tL + tW - R);
      const ty = Phaser.Math.Clamp(this.touchY, tT + tH * 0.52 + R, tT + tH - R);
      this.player.x = Phaser.Math.Linear(this.player.x, tx, 0.45);
      this.player.y = Phaser.Math.Linear(this.player.y, ty, 0.45);
    }

    // ─── AI movement ──────────────────────────────────────────────────
    const predictX = this.ball.x + (Math.random() - 0.5) * this.aiError;
    const predictY = this.ball.y + (Math.random() - 0.5) * this.aiError * 0.4;
    const aiDX = predictX - this.ai.x;
    const aiDY = predictY - this.ai.y;
    const aiDist = Math.sqrt(aiDX * aiDX + aiDY * aiDY);
    if (aiDist > 2) {
      const aiMove = Math.min(this.aiSpeed * dt, aiDist);
      this.ai.x = Phaser.Math.Clamp(this.ai.x + (aiDX / aiDist) * aiMove, tL + R, tL + tW - R);
      this.ai.y = Phaser.Math.Clamp(this.ai.y + (aiDY / aiDist) * aiMove, tT + R, tT + tH * 0.48 - R);
    }

    // ─── Ball boundaries ──────────────────────────────────────────────
    const bx = this.ball.x;
    const by = this.ball.y;
    const br = 12;

    if (bx - br < tL || bx + br > tL + tW) {
      this.scorePoint(by < tT + tH * 0.5);
      return;
    }
    if (by - br < tT) { this.scorePoint(true); return; }
    if (by + br > tT + tH) { this.scorePoint(false); return; }

    // ─── Collision: Player ────────────────────────────────────────────
    const pvy = this.ball.body!.velocity.y;

    if (pvy > 0) {
      const dxP = bx - this.player.x;
      const dyP = by - this.player.y;
      if (Math.sqrt(dxP * dxP + dyP * dyP) < R + br) {
        this.rallyCount++;
        const speed = this.ballSpeed * Math.min(1 + this.rallyCount * 0.05, 1.7);
        const hitFrac = Phaser.Math.Clamp(dxP / R, -1, 1);
        const angle = hitFrac * 58;
        this.ball.setVelocity(
          Math.sin(Phaser.Math.DegToRad(angle)) * speed,
          -Math.abs(Math.cos(Phaser.Math.DegToRad(angle)) * speed),
        );
        this.ball.y = this.player.y - R - br - 1;
        this.onHit(bx, by, 0xcc1515);
      }
    }

    // ─── Collision: AI ────────────────────────────────────────────────
    if (pvy < 0) {
      const dxA = bx - this.ai.x;
      const dyA = by - this.ai.y;
      if (Math.sqrt(dxA * dxA + dyA * dyA) < R + br) {
        this.rallyCount++;
        const speed = this.ballSpeed * Math.min(1 + this.rallyCount * 0.05, 1.7);
        const hitFrac = Phaser.Math.Clamp(dxA / R, -1, 1);
        const angle = hitFrac * 58;
        this.ball.setVelocity(
          Math.sin(Phaser.Math.DegToRad(angle)) * speed,
          Math.abs(Math.cos(Phaser.Math.DegToRad(angle)) * speed),
        );
        this.ball.y = this.ai.y + R + br + 1;
        this.onHit(bx, by, 0x2080e8);
      }
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
