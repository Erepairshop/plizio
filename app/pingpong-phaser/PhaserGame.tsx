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
  private player!: Phaser.GameObjects.Image;
  private ai!: Phaser.GameObjects.Image;
  private ball!: Phaser.Physics.Arcade.Image;
  private net!: Phaser.GameObjects.Rectangle;

  private playerScore = 0;
  private aiScore = 0;
  private scoreTxt!: Phaser.GameObjects.Text;
  private WIN_SCORE = 11;

  private aiSpeed = 300;
  private aiError = 40;

  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private wasd!: Record<string, Phaser.Input.Keyboard.Key>;

  // Touch tracking (both axes)
  private touchX = -1;
  private touchY = -1;

  // State
  private serving = true;
  private ballSpeed = 350;
  private rallyCount = 0;
  private gameOver = false;
  private PADDLE_R = 20;

  private particles!: Phaser.GameObjects.Particles.ParticleEmitter;

  public onGameEnd!: (won: boolean, myScore: number, oppScore: number) => void;
  public difficulty!: Difficulty;

  constructor() {
    super({ key: "PingPongScene" });
  }

  preload() {
    const g = this.make.graphics({ x: 0, y: 0 });

    // ── Ball (white circle, r=12)
    g.fillStyle(0xffffff);
    g.fillCircle(12, 12, 12);
    g.fillStyle(0xdddddd, 0.4);
    g.fillCircle(8, 8, 5); // shine
    g.generateTexture("ball", 24, 24);
    g.clear();

    // ── Player paddle: red, handle points DOWN
    // Texture 44×62, circle center at (22, 22)
    g.fillStyle(0x5a1a1a); // shadow/edge
    g.fillCircle(22, 22, 22);
    g.fillStyle(0xcc1515); // main red
    g.fillCircle(22, 22, 20);
    g.fillStyle(0xe83030); // lighter center
    g.fillCircle(22, 22, 12);
    g.fillStyle(0xffffff, 0.2); // shine
    g.fillCircle(16, 16, 8);
    // Handle
    g.fillStyle(0x8b6340);
    g.fillRoundedRect(17, 42, 10, 20, 3);
    g.fillStyle(0xa07850, 0.7);
    g.fillRoundedRect(19, 43, 4, 18, 2);
    g.generateTexture("playerPaddle", 44, 64);
    g.clear();

    // ── AI paddle: blue, handle points UP
    // Texture 44×62, circle center at (22, 40)
    g.fillStyle(0x0d2d55); // shadow/edge
    g.fillCircle(22, 40, 22);
    g.fillStyle(0x1060cc); // main blue
    g.fillCircle(22, 40, 20);
    g.fillStyle(0x2080e8); // lighter center
    g.fillCircle(22, 40, 12);
    g.fillStyle(0xffffff, 0.2); // shine
    g.fillCircle(16, 34, 8);
    // Handle (above circle)
    g.fillStyle(0x8b6340);
    g.fillRoundedRect(17, 2, 10, 20, 3);
    g.fillStyle(0xa07850, 0.7);
    g.fillRoundedRect(19, 3, 4, 18, 2);
    g.generateTexture("aiPaddle", 44, 64);
    g.clear();

    // ── Particle dot
    g.fillStyle(0xffffff);
    g.fillCircle(4, 4, 4);
    g.generateTexture("particle", 8, 8);
    g.destroy();
  }

  create() {
    const W = this.scale.width;
    const H = this.scale.height;

    // Table dimensions
    const tW = Math.min(W * 0.80, 340);
    const tH = tW / 0.56;
    const tL = (W - tW) / 2;
    const tT = (H - tH) / 2;

    // Background
    this.add.rectangle(W / 2, H / 2, W, H, 0x0a0a1a);

    // Table surface
    this.add.rectangle(W / 2, H / 2, tW, tH, 0x0e2d1e).setAlpha(0.95);

    // Table border
    const border = this.add.graphics();
    border.lineStyle(2, 0x00ff88, 0.8);
    border.strokeRect(tL, tT, tW, tH);

    // Center horizontal line
    this.add.rectangle(W / 2, H / 2, tW, 2, 0x00ff88).setAlpha(0.35);

    // Net (vertical center line)
    this.net = this.add.rectangle(W / 2, H / 2, 4, tH * 0.06, 0xffffff).setAlpha(0.9);

    // Court grid lines
    const lg = this.add.graphics();
    lg.lineStyle(1, 0x00ff88, 0.18);
    lg.lineBetween(tL + tW * 0.333, tT, tL + tW * 0.333, tT + tH);
    lg.lineBetween(tL + tW * 0.667, tT, tL + tW * 0.667, tT + tH);

    // Paddles — origin set so (paddle.x, paddle.y) = circle center
    // playerPaddle: circle at (22,22) in 44×64 → originY = 22/64
    this.player = this.add.image(W / 2, tT + tH * 0.84, "playerPaddle").setOrigin(0.5, 22 / 64);
    // aiPaddle: circle at (22,40) in 44×64 → originY = 40/64
    this.ai = this.add.image(W / 2, tT + tH * 0.16, "aiPaddle").setOrigin(0.5, 40 / 64);

    // Ball
    this.ball = this.physics.add.image(W / 2, H / 2, "ball");
    this.ball.setCircle(12);
    this.ball.setBounce(1, 1);
    this.ball.setCollideWorldBounds(false);

    // Particles
    this.particles = this.add.particles(0, 0, "particle", {
      speed: { min: 60, max: 180 },
      scale: { start: 0.9, end: 0 },
      lifespan: 350,
      quantity: 8,
      emitting: false,
    });

    // Score
    this.scoreTxt = this.add.text(W / 2, tT - 28, "0 : 0", {
      fontSize: "22px",
      fontFamily: "monospace",
      color: "#ffffff",
    }).setOrigin(0.5);

    // Keyboard
    this.cursors = this.input.keyboard!.createCursorKeys();
    this.wasd = {
      up:    this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.W),
      down:  this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.S),
      left:  this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.A),
      right: this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.D),
    };

    // Touch — track BOTH X and Y
    this.input.on("pointerdown", (p: Phaser.Input.Pointer) => {
      this.touchX = p.x;
      this.touchY = p.y;
    });
    this.input.on("pointermove", (p: Phaser.Input.Pointer) => {
      if (p.isDown) {
        this.touchX = p.x;
        this.touchY = p.y;
      }
    });
    this.input.on("pointerup", () => {
      this.touchX = -1;
      this.touchY = -1;
    });

    // AI difficulty
    const cfgs = {
      easy:   { speed: 210, error: 65 },
      medium: { speed: 330, error: 30 },
      hard:   { speed: 470, error: 9 },
    };
    const cfg = cfgs[this.difficulty] ?? cfgs.medium;
    this.aiSpeed = cfg.speed;
    this.aiError = cfg.error;

    // Store table bounds
    this.data.set("tL", tL);
    this.data.set("tT", tT);
    this.data.set("tW", tW);
    this.data.set("tH", tH);

    // Start first serve after 1 second
    this.time.delayedCall(1000, () => {
      if (!this.gameOver) this.serve();
    });
  }

  private serve() {
    const W = this.scale.width;
    const tT: number = this.data.get("tT");
    const tH: number = this.data.get("tH");

    const playerServes = Math.random() > 0.5;
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
      this.emitParticles(W / 2, tT + tH * 0.15, 0x00d4ff);
    } else {
      this.aiScore++;
      this.emitParticles(W / 2, tT + tH * 0.85, 0xe83030);
    }

    this.scoreTxt.setText(`${this.playerScore} : ${this.aiScore}`);

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

    this.serving = true;
    this.ball.setVelocity(0, 0);
    this.ball.setPosition(W / 2, tT + tH * 0.5);
    this.time.delayedCall(600, () => {
      if (!this.gameOver) this.serve();
    });
  }

  update(_time: number, delta: number) {
    if (this.gameOver || this.serving) return;

    const W = this.scale.width;
    const tL: number = this.data.get("tL");
    const tT: number = this.data.get("tT");
    const tW: number = this.data.get("tW");
    const tH: number = this.data.get("tH");
    const R = this.PADDLE_R;

    const dt = delta / 1000;
    const SPEED = 520;

    // ─── Player movement ──────────────────────────────────────────────
    // Keyboard
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

    // Touch / mouse — smooth follow
    if (this.touchX >= 0 && this.touchY >= 0) {
      const tx = Phaser.Math.Clamp(this.touchX, tL + R, tL + tW - R);
      const ty = Phaser.Math.Clamp(this.touchY, tT + tH * 0.52 + R, tT + tH - R);
      this.player.x = Phaser.Math.Linear(this.player.x, tx, 0.28);
      this.player.y = Phaser.Math.Linear(this.player.y, ty, 0.28);
    }

    // ─── AI movement ─────────────────────────────────────────────────
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

    // ─── Ball boundaries ─────────────────────────────────────────────
    const bx = this.ball.x;
    const by = this.ball.y;
    const br = 12;

    // Sides: ball exits = point for opponent of whoever's half the ball was in
    if (bx - br < tL || bx + br > tL + tW) {
      // Ball in AI's half (upper) = player scores; player's half (lower) = AI scores
      const playerScored = by < tT + tH * 0.5;
      this.scorePoint(playerScored);
      return;
    }

    // Top: player scores (ball passed AI)
    if (by - br < tT) {
      this.scorePoint(true);
      return;
    }

    // Bottom: AI scores (ball passed player)
    if (by + br > tT + tH) {
      this.scorePoint(false);
      return;
    }

    // ─── Ball vs Player paddle (circular collision) ───────────────────
    const pvy = this.ball.body!.velocity.y;

    if (pvy > 0) { // ball moving downward (toward player)
      const dxP = bx - this.player.x;
      const dyP = by - this.player.y;
      const distP = Math.sqrt(dxP * dxP + dyP * dyP);
      if (distP < R + br) {
        this.rallyCount++;
        const speedBoost = Math.min(1 + this.rallyCount * 0.05, 1.7);
        const newSpeed = this.ballSpeed * speedBoost;
        // Angle based on hit position (left/right of paddle center)
        const hitFrac = Phaser.Math.Clamp(dxP / R, -1, 1);
        const angle = hitFrac * 58;
        const vx = Math.sin(Phaser.Math.DegToRad(angle)) * newSpeed;
        const vy = -Math.abs(Math.cos(Phaser.Math.DegToRad(angle)) * newSpeed);
        this.ball.setVelocity(vx, vy);
        // Push ball out of paddle
        this.ball.y = this.player.y - R - br - 1;
        this.emitParticles(bx, by, 0xcc1515);
      }
    }

    // ─── Ball vs AI paddle (circular collision) ───────────────────────
    if (pvy < 0) { // ball moving upward (toward AI)
      const dxA = bx - this.ai.x;
      const dyA = by - this.ai.y;
      const distA = Math.sqrt(dxA * dxA + dyA * dyA);
      if (distA < R + br) {
        this.rallyCount++;
        const speedBoost = Math.min(1 + this.rallyCount * 0.05, 1.7);
        const newSpeed = this.ballSpeed * speedBoost;
        const hitFrac = Phaser.Math.Clamp(dxA / R, -1, 1);
        const angle = hitFrac * 58;
        const vx = Math.sin(Phaser.Math.DegToRad(angle)) * newSpeed;
        const vy = Math.abs(Math.cos(Phaser.Math.DegToRad(angle)) * newSpeed);
        this.ball.setVelocity(vx, vy);
        this.ball.y = this.ai.y + R + br + 1;
        this.emitParticles(bx, by, 0x1060cc);
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
