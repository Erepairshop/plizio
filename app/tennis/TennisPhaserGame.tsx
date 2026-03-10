"use client";

import Phaser from "phaser";
import { useEffect, useRef } from "react";

export type Difficulty = "easy" | "medium" | "hard";

interface Props {
  difficulty: Difficulty;
  onGameEnd: (won: boolean, myScore: number, oppScore: number) => void;
}

// ─── Constants ────────────────────────────────────────────────────────────────
const GW = 720;
const GH = 420;
const GROUND_Y = 360;
const NET_X = GW / 2;
const NET_TOP_Y = GROUND_Y - 75;
const WIN_SCORE = 5;

// ─── Scene ────────────────────────────────────────────────────────────────────
class TennisScene extends Phaser.Scene {
  public difficulty!: Difficulty;
  public onGameEnd!: (won: boolean, myScore: number, oppScore: number) => void;

  // Physics objects
  private ball!: Phaser.Physics.Arcade.Image;
  private groundBody!: Phaser.Physics.Arcade.Image;
  private netBody!: Phaser.Physics.Arcade.Image;

  // Player containers
  private playerCont!: Phaser.GameObjects.Container;
  private aiCont!: Phaser.GameObjects.Container;
  private playerRacketImg!: Phaser.GameObjects.Image;
  private aiRacketImg!: Phaser.GameObjects.Image;

  // State
  private playerX = GW * 0.22;
  private aiX = GW * 0.78;
  private playerScore = 0;
  private aiScore = 0;
  private ballInPlay = false;
  private gameOver = false;
  private hitCooldown = 0;
  private aiHitCooldown = 0;
  private bounceCount = 0;
  private lastBounceSide: "left" | "right" = "left";
  private touchTargetX = -1;
  private serveRight = false; // who served last (true = player, false = ai)
  private aiTargetX = GW * 0.78;
  private aiTargetTimer = 0;
  private rally = 0;

  // UI
  private scoreTxt!: Phaser.GameObjects.Text;
  private rallyTxt!: Phaser.GameObjects.Text;
  private ballShadow!: Phaser.GameObjects.Graphics;

  // Input
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;

  constructor() {
    super({ key: "TennisScene" });
  }

  // ─── Preload ────────────────────────────────────────────────────────────────
  preload() {
    const g = this.make.graphics({ x: 0, y: 0 });

    // Tennis ball (fuzzy yellow)
    g.fillStyle(0xd4e84a);
    g.fillCircle(14, 14, 14);
    g.fillStyle(0xeeff66, 0.55);
    g.fillCircle(10, 9, 6);
    // tennis seam curve
    g.lineStyle(1.5, 0xffffff, 0.4);
    g.beginPath();
    g.arc(14, 14, 9, Phaser.Math.DegToRad(150), Phaser.Math.DegToRad(340), true);
    g.strokePath();
    g.generateTexture("tball", 28, 28);
    g.clear();

    // Player body — dark blob, red cap, white eyes facing right
    g.fillStyle(0x111111);
    g.fillEllipse(25, 28, 44, 50);
    // belly patch (lighter)
    g.fillStyle(0x333333);
    g.fillEllipse(25, 32, 26, 28);
    // white eyes
    g.fillStyle(0xffffff);
    g.fillCircle(18, 22, 7);
    g.fillCircle(32, 22, 7);
    g.fillStyle(0x111111);
    g.fillCircle(20, 22, 3.5);
    g.fillCircle(34, 22, 3.5);
    g.fillStyle(0xffffff, 0.85);
    g.fillCircle(21, 20, 1.5);
    g.fillCircle(35, 20, 1.5);
    // red cap
    g.fillStyle(0xdd1111);
    g.fillRoundedRect(11, 5, 30, 10, 2);
    g.fillRoundedRect(14, -1, 24, 10, 3);
    // visor brim (right side)
    g.fillStyle(0xaa0000);
    g.fillRect(32, 14, 14, 4);
    g.generateTexture("playerBody", 50, 56);
    g.clear();

    // AI body — dark blob, blue cap, facing left (mirror)
    g.fillStyle(0x111111);
    g.fillEllipse(25, 28, 44, 50);
    g.fillStyle(0x333333);
    g.fillEllipse(25, 32, 26, 28);
    g.fillStyle(0xffffff);
    g.fillCircle(18, 22, 7);
    g.fillCircle(32, 22, 7);
    g.fillStyle(0x111111);
    g.fillCircle(16, 22, 3.5);
    g.fillCircle(30, 22, 3.5);
    g.fillStyle(0xffffff, 0.85);
    g.fillCircle(17, 20, 1.5);
    g.fillCircle(31, 20, 1.5);
    // blue cap
    g.fillStyle(0x1144ee);
    g.fillRoundedRect(9, 5, 30, 10, 2);
    g.fillRoundedRect(12, -1, 24, 10, 3);
    // visor brim (left side — facing left)
    g.fillStyle(0x0033bb);
    g.fillRect(4, 14, 14, 4);
    g.generateTexture("aiBody", 50, 56);
    g.clear();

    // Racket — oval head + handle
    g.fillStyle(0x8b6340);
    g.fillRoundedRect(10, 34, 7, 26, 2); // handle
    g.lineStyle(3, 0xdddddd);
    g.strokeEllipse(13, 18, 22, 32); // head frame
    // strings horizontal
    g.lineStyle(1, 0xcccccc, 0.55);
    for (let j = -12; j <= 12; j += 5) {
      g.lineBetween(3, 18 + j, 23, 18 + j);
    }
    // strings vertical
    for (let i = -8; i <= 8; i += 4) {
      g.lineBetween(13 + i, 3, 13 + i, 33);
    }
    g.generateTexture("racket", 26, 60);
    g.clear();

    // Particle dot
    g.fillStyle(0xffffff);
    g.fillCircle(4, 4, 4);
    g.generateTexture("tdot", 8, 8);
    g.clear();

    g.destroy();
  }

  // ─── Create ─────────────────────────────────────────────────────────────────
  create() {
    this.drawBackground();
    this.drawCourt();
    this.drawNet();
    this.setupPhysics();
    this.createPlayers();
    this.setupUI();
    this.setupInput();

    this.time.delayedCall(800, () => this.serve(true));
  }

  // ─── Background ─────────────────────────────────────────────────────────────
  private drawBackground() {
    const bg = this.add.graphics();

    // Sky gradient (top lighter, middle darker)
    bg.fillStyle(0x90d0ee);
    bg.fillRect(0, 0, GW, GH);
    bg.fillStyle(0xaaddf8);
    bg.fillRect(0, 0, GW, 100);

    // Clouds
    const drawCloud = (cx: number, cy: number, scale: number, alpha: number) => {
      bg.fillStyle(0xffffff, alpha);
      bg.fillEllipse(cx, cy, 72 * scale, 34 * scale);
      bg.fillEllipse(cx + 20 * scale, cy - 14 * scale, 55 * scale, 36 * scale);
      bg.fillEllipse(cx + 44 * scale, cy, 60 * scale, 28 * scale);
    };
    drawCloud(115, 52, 1.0, 0.92);
    drawCloud(555, 40, 0.85, 0.82);
    drawCloud(330, 30, 0.6, 0.6);

    // Stadium upper tier background
    bg.fillStyle(0x1a3a5a);
    bg.fillRect(0, 100, GW, 70);

    // Seat row upper
    bg.fillStyle(0x245080);
    for (let i = 0; i < 30; i++) {
      bg.fillRoundedRect(5 + i * 24, 112, 20, 26, 3);
    }

    // Stadium lower tier
    bg.fillStyle(0x1c3a5a);
    bg.fillRect(0, 165, GW, 65);

    bg.fillStyle(0x2a5588);
    for (let i = 0; i < 30; i++) {
      bg.fillRoundedRect(5 + i * 24, 177, 20, 25, 3);
    }

    bg.setDepth(1);

    // Spectators
    const specGfx = this.add.graphics();
    specGfx.setDepth(2);

    const skinTones = [0xc8a882, 0xa07050, 0xe8c8a8, 0x7a4a2a, 0xd4a878, 0xb8885a];
    const hatCols = [0xff3333, 0x3355ff, 0xff9900, 0x33aa33, 0xaa33aa, 0xffdd00, 0xff6699, 0x00cccc];

    // Upper row spectators
    for (let i = 0; i < 28; i++) {
      const cx = 13 + i * 25;
      const cy = 126;
      const skin = skinTones[i % skinTones.length];
      const hat = hatCols[i % hatCols.length];
      specGfx.fillStyle(skin);
      specGfx.fillCircle(cx, cy, 9);
      // sunglasses
      specGfx.fillStyle(0x111111, 0.75);
      specGfx.fillRect(cx - 7, cy - 2, 6, 4);
      specGfx.fillRect(cx + 1, cy - 2, 6, 4);
      specGfx.lineStyle(1, 0x111111, 0.5);
      specGfx.lineBetween(cx - 1, cy, cx + 1, cy);
      // hat
      specGfx.fillStyle(hat);
      specGfx.fillRect(cx - 8, cy - 14, 16, 7);
      specGfx.fillRoundedRect(cx - 5, cy - 20, 10, 8, 2);
    }

    // Lower row spectators
    for (let i = 0; i < 28; i++) {
      const cx = 13 + i * 25;
      const cy = 190;
      const skin = skinTones[(i + 3) % skinTones.length];
      const hat = hatCols[(i + 4) % hatCols.length];
      specGfx.fillStyle(skin);
      specGfx.fillCircle(cx, cy, 8);
      specGfx.fillStyle(0x111111, 0.7);
      specGfx.fillRect(cx - 6, cy - 2, 5, 3);
      specGfx.fillRect(cx + 1, cy - 2, 5, 3);
      specGfx.fillStyle(hat);
      specGfx.fillRect(cx - 7, cy - 12, 14, 6);
      specGfx.fillRoundedRect(cx - 4, cy - 17, 8, 7, 2);
    }

    // Umpire chair (center back)
    specGfx.fillStyle(0x6b4a28);
    specGfx.fillRect(NET_X - 12, 218, 24, 14);
    specGfx.fillRect(NET_X - 8, 230, 16, 18);
    specGfx.fillRect(NET_X - 11, 246, 22, 5); // base
    // Umpire head
    specGfx.fillStyle(0xd4a878);
    specGfx.fillCircle(NET_X, 212, 9);
    specGfx.fillStyle(0x111111, 0.6);
    specGfx.fillRect(NET_X - 5, 210, 4, 3);
    specGfx.fillRect(NET_X + 1, 210, 4, 3);
    // Umpire hat (white)
    specGfx.fillStyle(0xffffff);
    specGfx.fillRect(NET_X - 8, 202, 16, 6);
    specGfx.fillRoundedRect(NET_X - 5, 198, 10, 6, 2);
  }

  // ─── Court ──────────────────────────────────────────────────────────────────
  private drawCourt() {
    const court = this.add.graphics();
    court.setDepth(3);

    // Green surface behind baseline
    court.fillStyle(0x2e8c22);
    court.fillRect(0, 232, GW, GH - 232);

    // Court playing surface
    court.fillStyle(0x3eaa2e);
    court.fillRect(50, 250, GW - 100, GROUND_Y - 252);

    // Court lines (white)
    court.lineStyle(3, 0xffffff, 0.95);
    // Baselines
    court.lineBetween(50, GROUND_Y - 3, GW - 50, GROUND_Y - 3);
    court.lineBetween(50, 252, GW - 50, 252);
    // Sidelines
    court.lineBetween(50, 252, 50, GROUND_Y - 1);
    court.lineBetween(GW - 50, 252, GW - 50, GROUND_Y - 1);
    // Service lines
    court.lineBetween(50, GROUND_Y - 62, GW - 50, GROUND_Y - 62);
    // Center service line
    court.lineBetween(NET_X, 252, NET_X, GROUND_Y - 62);

    // Ground (darker edge below baseline)
    court.fillStyle(0x1e6a15);
    court.fillRect(0, GROUND_Y, GW, GH - GROUND_Y);

    // Subtle court shadow at net
    court.fillStyle(0x000000, 0.06);
    court.fillRect(NET_X - 30, 250, 60, GROUND_Y - 250);
  }

  // ─── Net ────────────────────────────────────────────────────────────────────
  private drawNet() {
    const net = this.add.graphics();
    net.setDepth(9);

    // Posts
    net.fillStyle(0xdddddd);
    net.fillRect(48, NET_TOP_Y - 5, 7, GROUND_Y - NET_TOP_Y + 5);
    net.fillRect(GW - 55, NET_TOP_Y - 5, 7, GROUND_Y - NET_TOP_Y + 5);

    // Top tape
    net.fillStyle(0xffffff);
    net.fillRect(55, NET_TOP_Y, GW - 110, 6);

    // Net mesh
    net.lineStyle(1, 0xffffff, 0.45);
    for (let x = 66; x < GW - 66; x += 13) {
      net.lineBetween(x, NET_TOP_Y + 6, x, GROUND_Y - 1);
    }
    for (let y = NET_TOP_Y + 10; y < GROUND_Y; y += 10) {
      net.lineBetween(55, y, GW - 55, y);
    }

    // Center strap
    net.fillStyle(0xcccccc);
    net.fillRect(NET_X - 3, NET_TOP_Y, 6, GROUND_Y - NET_TOP_Y);
  }

  // ─── Physics Setup ──────────────────────────────────────────────────────────
  private setupPhysics() {
    // Ground static body
    this.groundBody = this.physics.add.staticImage(NET_X, GROUND_Y + 5, "__DEFAULT");
    this.groundBody.setDisplaySize(GW - 80, 10);
    this.groundBody.setAlpha(0);
    this.groundBody.refreshBody();

    // Net static body
    this.netBody = this.physics.add.staticImage(NET_X, NET_TOP_Y + (GROUND_Y - NET_TOP_Y) / 2, "__DEFAULT");
    this.netBody.setDisplaySize(8, GROUND_Y - NET_TOP_Y);
    this.netBody.setAlpha(0);
    this.netBody.refreshBody();

    // Ball
    this.ball = this.physics.add.image(NET_X, 260, "tball");
    (this.ball.body as Phaser.Physics.Arcade.Body).setCircle(14);
    this.ball.setBounce(0.62, 0.62);
    this.ball.setDrag(18, 0);
    this.ball.setMaxVelocity(620, 850);
    this.ball.setDepth(20);
    this.ball.setVisible(false);

    // Colliders
    this.physics.add.collider(this.ball, this.groundBody, () => this.onGroundBounce());
    this.physics.add.collider(this.ball, this.netBody, () => {
      if (this.ballInPlay && !this.gameOver) {
        this.scorePoint(this.ball.x < NET_X ? "ai" : "player");
      }
    });

    // Ball shadow
    this.ballShadow = this.add.graphics();
    this.ballShadow.setDepth(7);
  }

  // ─── Players ────────────────────────────────────────────────────────────────
  private createPlayers() {
    // Player (left side, red cap)
    this.playerCont = this.add.container(this.playerX, GROUND_Y);
    const pBody = this.add.image(0, -28, "playerBody").setOrigin(0.5, 0.5);
    this.playerRacketImg = this.add.image(28, -22, "racket")
      .setOrigin(0.5, 0.85)
      .setAngle(-15);
    // Shadow
    const pShadow = this.add.graphics();
    pShadow.fillStyle(0x000000, 0.18);
    pShadow.fillEllipse(0, 2, 48, 10);
    this.playerCont.add([pShadow, pBody, this.playerRacketImg]);
    this.playerCont.setDepth(15);

    // AI (right side, blue cap, mirrored)
    this.aiCont = this.add.container(this.aiX, GROUND_Y);
    const aBody = this.add.image(0, -28, "aiBody").setOrigin(0.5, 0.5).setFlipX(true);
    this.aiRacketImg = this.add.image(-28, -22, "racket")
      .setOrigin(0.5, 0.85)
      .setFlipX(true)
      .setAngle(15);
    const aShadow = this.add.graphics();
    aShadow.fillStyle(0x000000, 0.18);
    aShadow.fillEllipse(0, 2, 48, 10);
    this.aiCont.add([aShadow, aBody, this.aiRacketImg]);
    this.aiCont.setDepth(15);
  }

  // ─── UI ─────────────────────────────────────────────────────────────────────
  private setupUI() {
    // Score panel
    const scoreBg = this.add.graphics();
    scoreBg.fillStyle(0x000000, 0.5);
    scoreBg.fillRoundedRect(NET_X - 62, 6, 124, 46, 10);
    scoreBg.lineStyle(2, 0xffffff, 0.25);
    scoreBg.strokeRoundedRect(NET_X - 62, 6, 124, 46, 10);
    scoreBg.setDepth(28);

    this.scoreTxt = this.add.text(NET_X, 28, "0 • 0", {
      fontSize: "30px",
      fontFamily: "monospace",
      color: "#ffffff",
      fontStyle: "bold",
    }).setOrigin(0.5).setDepth(30);

    // Player label (left)
    this.add.text(NET_X - 160, 20, "YOU", {
      fontSize: "14px", fontFamily: "monospace", color: "#ff4444", fontStyle: "bold",
    }).setOrigin(0.5).setDepth(30);

    // AI label (right)
    this.add.text(NET_X + 160, 20, "AI", {
      fontSize: "14px", fontFamily: "monospace", color: "#4488ff", fontStyle: "bold",
    }).setOrigin(0.5).setDepth(30);

    // Rally counter
    this.rallyTxt = this.add.text(NET_X, 60, "", {
      fontSize: "16px", fontFamily: "monospace", color: "#ffffff",
    }).setOrigin(0.5).setDepth(30).setAlpha(0.8);

    // Controls hint
    this.add.text(NET_X, GH - 12, "← → arrow keys  /  tap left side", {
      fontSize: "11px", fontFamily: "monospace", color: "#ffffff",
    }).setOrigin(0.5).setAlpha(0.45).setDepth(30);
  }

  // ─── Input ──────────────────────────────────────────────────────────────────
  private setupInput() {
    this.cursors = this.input.keyboard!.createCursorKeys();

    this.input.on("pointermove", (p: Phaser.Input.Pointer) => {
      if (p.isDown && p.x < NET_X) {
        this.touchTargetX = Phaser.Math.Clamp(p.x, 80, NET_X - 35);
      }
    });
    this.input.on("pointerdown", (p: Phaser.Input.Pointer) => {
      if (p.x < NET_X) {
        this.touchTargetX = Phaser.Math.Clamp(p.x, 80, NET_X - 35);
      }
    });
    this.input.on("pointerup", () => {
      this.touchTargetX = -1;
    });
  }

  // ─── Serve ──────────────────────────────────────────────────────────────────
  private serve(playerServes: boolean) {
    if (this.gameOver) return;
    this.serveRight = playerServes;
    this.bounceCount = 0;
    this.hitCooldown = 0;
    this.aiHitCooldown = 0;
    this.ballInPlay = true;

    this.ball.setVisible(true);
    if (playerServes) {
      this.ball.setPosition(this.playerX, GROUND_Y - 55);
      const aim = (this.playerX - (GW * 0.22)) / (NET_X - GW * 0.22);
      const angle = Phaser.Math.DegToRad(Phaser.Math.Linear(-30, 30, aim));
      const speed = 380 + Math.random() * 60;
      this.ball.setVelocity(
        Math.sin(angle) * speed + 260,
        -380 - Math.random() * 70
      );
      this.lastBounceSide = "left";
    } else {
      this.ball.setPosition(this.aiX, GROUND_Y - 55);
      const angle = Phaser.Math.DegToRad(Phaser.Math.Between(-20, 20));
      const speed = 360 + Math.random() * 60;
      this.ball.setVelocity(
        Math.sin(angle) * speed - 260,
        -380 - Math.random() * 70
      );
      this.lastBounceSide = "right";
    }
  }

  // ─── Bounce ─────────────────────────────────────────────────────────────────
  private onGroundBounce() {
    if (!this.ballInPlay || this.gameOver) return;

    const side = this.ball.x < NET_X ? "left" : "right";

    if (side === this.lastBounceSide) {
      this.bounceCount++;
      if (this.bounceCount >= 2) {
        // Double bounce: opponent scores
        this.scorePoint(side === "left" ? "ai" : "player");
        return;
      }
    } else {
      this.bounceCount = 1;
      this.lastBounceSide = side;
    }

    // Bounce ripple effect
    const ripple = this.add.graphics();
    ripple.lineStyle(2, 0xffffff, 0.5);
    ripple.strokeEllipse(this.ball.x, GROUND_Y, 18, 8);
    ripple.setDepth(10);
    this.tweens.add({
      targets: ripple, alpha: 0, scaleX: 2.2, scaleY: 2.2,
      duration: 280, ease: "Quad.Out",
      onComplete: () => ripple.destroy(),
    });

    // Slight vx variation on bounce
    const body = this.ball.body as Phaser.Physics.Arcade.Body;
    body.velocity.x *= (1 + Phaser.Math.FloatBetween(-0.04, 0.04));

    // Bounce particles
    const particles = this.add.particles(this.ball.x, GROUND_Y, "tdot", {
      speed: { min: 20, max: 120 },
      angle: { min: 220, max: 320 },
      lifespan: 300,
      quantity: 8,
      scale: { start: 0.6, end: 0 },
    });
    particles.setDepth(12);
    this.time.delayedCall(350, () => particles.destroy());
  }

  // ─── Score ──────────────────────────────────────────────────────────────────
  private scorePoint(scorer: "player" | "ai") {
    if (this.gameOver) return;
    this.ballInPlay = false;
    this.ball.setVelocity(0, 0);
    this.ball.setVisible(false);

    // Reset rally
    this.rally = 0;
    this.rallyTxt.setText("");

    if (scorer === "player") this.playerScore++;
    else this.aiScore++;

    this.scoreTxt.setText(`${this.playerScore} • ${this.aiScore}`);

    // Crowd reaction: flash + shake
    this.cameras.main.shake(120, 0.004);
    this.cameras.main.flash(200, 255, 255, 255, false);

    // Flash overlay
    const flash = this.add.graphics();
    flash.fillStyle(scorer === "player" ? 0x00d4ff : 0xff3333, 1);
    flash.fillRect(0, 0, GW, GH);
    flash.setDepth(35).setAlpha(0.22);
    this.tweens.add({
      targets: flash, alpha: 0, duration: 400,
      onComplete: () => flash.destroy(),
    });

    // Point label
    this.time.delayedCall(200, () => {
      if (this.gameOver) return;
      const labelX = scorer === "player" ? GW * 0.28 : GW * 0.72;
      const pt = this.add.text(labelX, GH / 2 - 10, "POINT!", {
        fontSize: "22px", fontFamily: "monospace",
        color: scorer === "player" ? "#00d4ff" : "#ff4444",
        fontStyle: "bold", stroke: "#000000", strokeThickness: 4,
      }).setOrigin(0.5).setDepth(40);
      this.tweens.add({
        targets: pt, y: GH / 2 - 55, alpha: 0,
        duration: 850, ease: "Quad.Out",
        onComplete: () => pt.destroy(),
      });
    });

    // Excited racket wave
    const racket = scorer === "player" ? this.playerRacketImg : this.aiRacketImg;
    this.tweens.killTweensOf(racket);
    const dir = scorer === "player" ? -1 : 1;
    this.tweens.add({
      targets: racket, angle: dir * -55,
      duration: 150, ease: "Back.Out", yoyo: true,
      onComplete: () => racket.setAngle(scorer === "player" ? -15 : 15),
    });

    // Check win
    if (this.playerScore >= WIN_SCORE || this.aiScore >= WIN_SCORE) {
      this.gameOver = true;
      const won = this.playerScore >= WIN_SCORE;
      this.time.delayedCall(700, () => this.onGameEnd(won, this.playerScore, this.aiScore));
      return;
    }

    // Next serve: winner of the point serves
    this.time.delayedCall(1400, () => {
      if (!this.gameOver) this.serve(scorer === "player");
    });
  }

  // ─── Update ─────────────────────────────────────────────────────────────────
  update(_time: number, delta: number) {
    if (this.gameOver) return;
    const dt = delta / 1000;

    if (this.hitCooldown > 0) this.hitCooldown -= delta;
    if (this.aiHitCooldown > 0) this.aiHitCooldown -= delta;

    const PLAYER_SPEED = 295;
    const PLAYER_MIN_X = 82;
    const PLAYER_MAX_X = NET_X - 36;
    const AI_MIN_X = NET_X + 36;
    const AI_MAX_X = GW - 82;

    // ─── Player movement ──────────────────────────────────────────────────────
    const leftDown = this.cursors.left!.isDown;
    const rightDown = this.cursors.right!.isDown;

    if (leftDown) {
      this.playerX = Math.max(PLAYER_MIN_X, this.playerX - PLAYER_SPEED * dt);
    } else if (rightDown) {
      this.playerX = Math.min(PLAYER_MAX_X, this.playerX + PLAYER_SPEED * dt);
    } else if (this.touchTargetX > 0) {
      const dx = this.touchTargetX - this.playerX;
      const move = PLAYER_SPEED * dt;
      this.playerX += Math.sign(dx) * Math.min(Math.abs(dx), move);
    }

    this.playerCont.x = this.playerX;

    // ─── AI movement ──────────────────────────────────────────────────────────
    if (this.ballInPlay) {
      const aiCfg = {
        easy:   { speed: 190, error: 58 },
        medium: { speed: 265, error: 30 },
        hard:   { speed: 345, error: 8 },
      }[this.difficulty];

      const bvx = (this.ball.body as Phaser.Physics.Arcade.Body).velocity.x;
      // Update target every 300ms to avoid per-frame jitter
      this.aiTargetTimer -= delta;
      if (this.aiTargetTimer <= 0) {
        if (this.ball.x > NET_X || bvx > 0) {
          const errorOffset = (Math.random() - 0.5) * aiCfg.error;
          const predictedX = this.ball.x + (bvx * 0.25);
          this.aiTargetX = Phaser.Math.Clamp(predictedX + errorOffset, AI_MIN_X, AI_MAX_X);
        }
        this.aiTargetTimer = 300;
      }
      const dx = this.aiTargetX - this.aiX;
      const move = aiCfg.speed * dt;
      this.aiX += Math.sign(dx) * Math.min(Math.abs(dx), move);
    }

    this.aiCont.x = this.aiX;

    // ─── Hit detection: Player ────────────────────────────────────────────────
    if (this.ballInPlay && this.hitCooldown <= 0) {
      const bx = this.ball.x;
      const by = this.ball.y;
      const bvx = (this.ball.body as Phaser.Physics.Arcade.Body).velocity.x;
      const dx = bx - this.playerX;
      const dy = by - (GROUND_Y - 28);
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Hit: ball on player's side, near player
      if (dist < 56 && bx < NET_X - 10) {
        this.hitBall("player");
      }
    }

    // ─── Hit detection: AI ────────────────────────────────────────────────────
    if (this.ballInPlay && this.aiHitCooldown <= 0) {
      const bx = this.ball.x;
      const by = this.ball.y;
      const bvx = (this.ball.body as Phaser.Physics.Arcade.Body).velocity.x;
      const dx = bx - this.aiX;
      const dy = by - (GROUND_Y - 28);
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 60 && bx > NET_X + 10) {
        this.hitBall("ai");
      }
    }

    // ─── Out of bounds ────────────────────────────────────────────────────────
    if (this.ballInPlay) {
      const bx = this.ball.x;
      const by = this.ball.y;

      if (bx < 36) { this.scorePoint("ai"); return; }
      if (bx > GW - 36) { this.scorePoint("player"); return; }
      if (by > GH + 30) { this.scorePoint(bx < NET_X ? "ai" : "player"); return; }
      // Ball bounced over and past the net without landing (extremely high shot)
      if (by < -150) { this.scorePoint(bx < NET_X ? "ai" : "player"); return; }
    }

    // ─── Ball shadow ──────────────────────────────────────────────────────────
    this.ballShadow.clear();
    if (this.ballInPlay && this.ball.visible) {
      const heightRatio = Math.max(0, Math.min(1, (GROUND_Y - this.ball.y) / 180));
      const shadowAlpha = 0.22 - heightRatio * 0.14;
      const shadowW = Math.max(6, 22 - heightRatio * 14);
      const shadowH = Math.max(3, 9 - heightRatio * 6);
      this.ballShadow.fillStyle(0x000000, shadowAlpha);
      this.ballShadow.fillEllipse(this.ball.x, GROUND_Y - 1, shadowW, shadowH);
    }
  }

  // ─── Hit Ball ───────────────────────────────────────────────────────────────
  private hitBall(hitter: "player" | "ai") {
    const isPlayer = hitter === "player";
    if (isPlayer) this.hitCooldown = 550;
    else this.aiHitCooldown = 550;

    // Rally counter
    this.rally++;
    this.rallyTxt.setText("RALLY: " + this.rally);

    const body = this.ball.body as Phaser.Physics.Arcade.Body;
    const isSmash = this.ball.y < GROUND_Y - 120;
    const speed = isSmash ? 520 : 390 + Math.random() * 80;

    if (isPlayer) {
      // Direction based on player X position in their half
      const posRatio = (this.playerX - 82) / (NET_X - 36 - 82);
      const angleDeg = Phaser.Math.Linear(-32, 32, posRatio) + Phaser.Math.FloatBetween(-6, 6);
      const rad = Phaser.Math.DegToRad(angleDeg);
      body.velocity.x = Math.sin(rad) * speed + speed * 0.45;
      body.velocity.y = Phaser.Math.Clamp(-(speed * 0.75 + Math.random() * 40), -550, -280);
      // Push out of hitbox
      this.ball.x = Math.max(this.playerX + 22, this.ball.x);
    } else {
      const posRatio = (this.aiX - (NET_X + 36)) / (GW - 82 - (NET_X + 36));
      const angleDeg = Phaser.Math.Linear(32, -32, posRatio) + Phaser.Math.FloatBetween(-6, 6);
      const rad = Phaser.Math.DegToRad(angleDeg);
      body.velocity.x = Math.sin(rad) * speed - speed * 0.45;
      body.velocity.y = Phaser.Math.Clamp(-(speed * 0.75 + Math.random() * 40), -550, -280);
      this.ball.x = Math.min(this.aiX - 22, this.ball.x);
    }

    // Racket swing animation
    const racket = isPlayer ? this.playerRacketImg : this.aiRacketImg;
    const baseAngle = isPlayer ? -15 : 15;
    const swingAngle = isPlayer ? -70 : 70;
    this.tweens.killTweensOf(racket);
    racket.setAngle(swingAngle);
    this.tweens.add({
      targets: racket, angle: baseAngle,
      duration: 200, ease: "Back.Out",
    });

    // Hit ring effect
    const hitX = isPlayer ? this.playerX + 26 : this.aiX - 26;
    const hitRing = this.add.graphics();
    hitRing.lineStyle(2.5, isPlayer ? 0x00d4ff : 0xff4455, 0.85);
    hitRing.strokeCircle(hitX, GROUND_Y - 28, 16);
    hitRing.setDepth(25);
    this.tweens.add({
      targets: hitRing, alpha: 0, scaleX: 2.4, scaleY: 2.4,
      duration: 220, ease: "Quad.Out",
      onComplete: () => hitRing.destroy(),
    });

    // Smash slow motion
    if (isSmash) {
      this.time.timeScale = 0.6;
      this.time.delayedCall(120, () => { this.time.timeScale = 1; });
    }

    // Camera shake (stronger for smash)
    this.cameras.main.shake(isSmash ? 80 : 22, isSmash ? 0.01 : 0.003);

    // Ball squash on hit
    this.ball.setScale(1.5, 0.62);
    this.tweens.add({
      targets: this.ball, scaleX: 1, scaleY: 1,
      duration: 100, ease: "Back.Out",
    });

    // Spin (random side variation)
    const spin = Phaser.Math.FloatBetween(-40, 40);
    body.velocity.x += spin;

    // Speed increase per rally (5% per hit)
    body.velocity.x *= 1.05;
    body.velocity.y *= 1.05;

    // Speed cap
    const maxSpeed = 650;
    body.velocity.x = Phaser.Math.Clamp(body.velocity.x, -maxSpeed, maxSpeed);
    body.velocity.y = Phaser.Math.Clamp(body.velocity.y, -maxSpeed, maxSpeed);
  }
}

// ─── React Component ──────────────────────────────────────────────────────────
export default function TennisPhaserGame({ difficulty, onGameEnd }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const gameRef = useRef<Phaser.Game | null>(null);

  useEffect(() => {
    if (!ref.current || gameRef.current) return;

    const scene = new TennisScene();
    scene.difficulty = difficulty;
    scene.onGameEnd = onGameEnd;

    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: GW,
      height: GH,
      parent: ref.current,
      backgroundColor: "#90d0ee",
      physics: {
        default: "arcade",
        arcade: { gravity: { x: 0, y: 900 }, debug: false },
      },
      scene,
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
    };

    gameRef.current = new Phaser.Game(config);

    return () => {
      gameRef.current?.destroy(true);
      gameRef.current = null;
    };
  }, [difficulty, onGameEnd]);

  return <div ref={ref} style={{ width: "100%", height: "100%" }} />;
}
