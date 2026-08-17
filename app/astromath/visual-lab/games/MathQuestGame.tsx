"use client";

import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import * as Phaser from "phaser";
import { generateQuestProblem, type QuestProblem } from "@/lib/visualLab/mathQuestProblems";

type Lang = "de" | "hu" | "ro" | "en";

interface Props {
  grade: number;
  lang: Lang;
  onDone?: (score: number) => void;
}

interface QuestStats {
  hearts: number;
  coins: number;
  solved: number;
  total: number;
  question: string;
  score: number;
}

interface QuestControls {
  setControl: (control: "left" | "right" | "jump", pressed: boolean) => void;
}

const COPY = {
  de: { title: "Zahlenwelten", world: "Welt", gates: "Tore", coins: "Münzen", start: "Los!", retry: "Welt wiederholen", next: "Nächste Welt", won: "Welt geschafft!", lost: "Versuch beendet", hint: "Laufe und springe zum richtigen Ergebnis.", saved: "Der Fortschritt wird auf diesem Gerät gespeichert." },
  hu: { title: "Számvilágok", world: "Világ", gates: "Kapuk", coins: "Érmék", start: "Indulás!", retry: "Világ újrakezdése", next: "Következő világ", won: "Világ teljesítve!", lost: "A próbálkozás véget ért", hint: "Fuss és ugorj a helyes eredményhez.", saved: "A haladás ezen az eszközön mentődik." },
  ro: { title: "Lumile Numerelor", world: "Lumea", gates: "Porți", coins: "Monede", start: "Start!", retry: "Repetă lumea", next: "Lumea următoare", won: "Lume completă!", lost: "Încercare încheiată", hint: "Aleargă și sari la rezultatul corect.", saved: "Progresul este salvat pe acest dispozitiv." },
  en: { title: "Number Worlds", world: "World", gates: "Gates", coins: "Coins", start: "Start!", retry: "Retry world", next: "Next world", won: "World complete!", lost: "Attempt complete", hint: "Run and jump to the correct result.", saved: "Progress is saved on this device." },
};


class MathQuestScene extends Phaser.Scene implements QuestControls {
  grade = 1;
  stage = 1;
  lang: Lang = "de";
  onStats: (stats: QuestStats) => void = () => {};
  onEnd: (won: boolean, score: number) => void = () => {};

  private player!: Phaser.Physics.Arcade.Sprite;
  private platforms!: Phaser.Physics.Arcade.StaticGroup;
  private walls!: Phaser.Physics.Arcade.StaticGroup;
  private answers!: Phaser.Physics.Arcade.StaticGroup;
  private coinsGroup!: Phaser.Physics.Arcade.StaticGroup;
  private hazards!: Phaser.Physics.Arcade.StaticGroup;
  private finish!: Phaser.Physics.Arcade.Image;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private controls = { left: false, right: false, jump: false };
  private jumpQueued = false;
  private lastGroundedAt = 0;
  private checkpointX = 100;
  private checkpointY = 410;
  private hearts = 3;
  private coins = 0;
  private score = 0;
  private solved = 0;
  private ended = false;
  private damageCooldown = false;
  private problems: QuestProblem[] = [];
  private wallsByQuestion: Phaser.Physics.Arcade.Image[] = [];
  private answersByQuestion: Phaser.Physics.Arcade.Image[][] = [];

  constructor() {
    super({ key: "MathQuestScene" });
  }

  setControl(control: "left" | "right" | "jump", pressed: boolean) {
    this.controls[control] = pressed;
    if (control === "jump" && pressed) this.jumpQueued = true;
  }

  preload() {
    const graphics = this.make.graphics({ x: 0, y: 0 });
    graphics.fillStyle(0x19c7ff); graphics.fillRoundedRect(3, 3, 38, 48, 10);
    graphics.fillStyle(0xffffff); graphics.fillCircle(29, 16, 6); graphics.fillStyle(0x10213a); graphics.fillCircle(31, 16, 2.5);
    graphics.fillStyle(0xffd43b); graphics.fillRect(4, 40, 14, 7); graphics.fillRect(27, 40, 14, 7); graphics.generateTexture("mq-player", 44, 54); graphics.clear();
    graphics.fillStyle(0x17334b); graphics.fillRoundedRect(0, 0, 128, 28, 6); graphics.fillStyle(0x22d3a6); graphics.fillRect(0, 0, 128, 7); graphics.generateTexture("mq-platform", 128, 28); graphics.clear();
    graphics.fillStyle(0xffd43b); graphics.fillCircle(12, 12, 10); graphics.lineStyle(2, 0xfff2a8); graphics.strokeCircle(12, 12, 8); graphics.generateTexture("mq-coin", 24, 24); graphics.clear();
    graphics.fillStyle(0x10243a, 0.95); graphics.fillRoundedRect(0, 0, 82, 58, 14); graphics.lineStyle(3, 0x67e8f9); graphics.strokeRoundedRect(1, 1, 80, 56, 14); graphics.generateTexture("mq-answer", 82, 58); graphics.clear();
    graphics.fillStyle(0x7c3aed, 0.88); graphics.fillRoundedRect(0, 0, 28, 390, 8); graphics.lineStyle(3, 0xc4b5fd); graphics.strokeRoundedRect(1, 1, 26, 388, 8); graphics.generateTexture("mq-wall", 28, 390); graphics.clear();
    graphics.fillStyle(0xf43f5e); graphics.fillTriangle(0, 24, 14, 0, 28, 24); graphics.generateTexture("mq-spike", 28, 24); graphics.clear();
    graphics.fillStyle(0x34d399); graphics.fillRoundedRect(0, 0, 44, 92, 8); graphics.fillStyle(0xffffff); graphics.fillRect(10, 15, 24, 10); graphics.fillStyle(0xfbbf24); graphics.fillCircle(22, 52, 9); graphics.generateTexture("mq-finish", 44, 92); graphics.destroy();
  }

  create() {
    const gateCount = 6;
    const worldWidth = 950 + gateCount * 690;
    this.problems = Array.from({ length: gateCount }, (_, index) => generateQuestProblem(this.grade, this.stage, index, this.lang));
    this.physics.world.setBounds(0, 0, worldWidth, 520);
    this.cameras.main.setBounds(0, 0, worldWidth, 520);
    this.drawBackground(worldWidth);

    this.platforms = this.physics.add.staticGroup();
    this.walls = this.physics.add.staticGroup();
    this.answers = this.physics.add.staticGroup();
    this.coinsGroup = this.physics.add.staticGroup();
    this.hazards = this.physics.add.staticGroup();

    for (let x = 64; x < worldWidth; x += 128) this.platforms.create(x, 500, "mq-platform");
    this.createCourse(gateCount);

    this.player = this.physics.add.sprite(110, 430, "mq-player").setDepth(20).setCollideWorldBounds(true);
    this.player.setBodySize(34, 48).setOffset(5, 4);
    this.physics.add.collider(this.player, this.platforms);
    this.physics.add.collider(this.player, this.walls);
    this.physics.add.overlap(this.player, this.answers, (_player, answer) => this.hitAnswer(answer as Phaser.Physics.Arcade.Image));
    this.physics.add.overlap(this.player, this.coinsGroup, (_player, coin) => this.collectCoin(coin as Phaser.Physics.Arcade.Image));
    this.physics.add.overlap(this.player, this.hazards, () => this.takeDamage());
    this.physics.add.overlap(this.player, this.finish, () => this.finishStage());

    this.cursors = this.input.keyboard!.createCursorKeys();
    this.cameras.main.startFollow(this.player, true, 0.10, 0.10, -100, 0);
    this.emitStats();
  }

  private drawBackground(worldWidth: number) {
    this.cameras.main.setBackgroundColor(0x06111f);
    const fixed = this.add.graphics().setScrollFactor(0).setDepth(-20);
    fixed.fillStyle(0x06111f); fixed.fillRect(0, 0, 800, 520);
    fixed.fillStyle(0x0b2940); fixed.fillCircle(110, 90, 90); fixed.fillCircle(680, 120, 130);
    fixed.fillStyle(0x123957, 0.65); fixed.fillTriangle(0, 440, 180, 220, 340, 440); fixed.fillTriangle(390, 440, 620, 190, 800, 440);
    for (let index = 0; index < 55; index++) {
      fixed.fillStyle(0xffffff, 0.18 + index % 4 * 0.12);
      fixed.fillCircle(index * 83 % 800, index * 47 % 310, 1 + index % 2);
    }
    const floorGlow = this.add.rectangle(worldWidth / 2, 490, worldWidth, 60, 0x0b2134).setDepth(-5);
    floorGlow.setOrigin(0.5);
  }

  private createPlatform(x: number, y: number, scaleX = 1) {
    const platform = this.platforms.create(x, y, "mq-platform") as Phaser.Physics.Arcade.Image;
    platform.setScale(scaleX, 1).refreshBody();
  }

  private createCourse(gateCount: number) {
    for (let questionIndex = 0; questionIndex < gateCount; questionIndex++) {
      const gateX = 760 + questionIndex * 690;
      this.createPlatform(gateX + 10, 352, 1.15);
      this.createPlatform(gateX + 145, 242, 1.05);
      const wall = this.walls.create(gateX + 335, 300, "mq-wall") as Phaser.Physics.Arcade.Image;
      this.wallsByQuestion.push(wall);

      const lanes = [
        { x: gateX - 115, y: 438 },
        { x: gateX + 10, y: 298 },
        { x: gateX + 145, y: 188 },
      ];
      const problem = this.problems[questionIndex];
      this.answersByQuestion[questionIndex] = [];
      problem.options.forEach((value, optionIndex) => {
        const position = lanes[optionIndex];
        const answer = this.answers.create(position.x, position.y, "mq-answer") as Phaser.Physics.Arcade.Image;
        answer.setData({ questionIndex, value, correct: value === problem.answer });
        const label = this.add.text(position.x, position.y, String(value), { fontFamily: "monospace", fontSize: "23px", fontStyle: "bold", color: "#ffffff", stroke: "#06111f", strokeThickness: 3 }).setOrigin(0.5).setDepth(12);
        answer.setData("label", label);
        this.answersByQuestion[questionIndex].push(answer);
      });

      const sign = this.add.text(gateX - 190, 88, problem.prompt, { fontFamily: "monospace", fontSize: "25px", fontStyle: "bold", color: "#f8fafc", backgroundColor: "#10243add", padding: { x: 14, y: 9 }, stroke: "#06111f", strokeThickness: 2 }).setOrigin(0.5).setDepth(10);
      sign.setData("questionIndex", questionIndex);

      for (let coinIndex = 0; coinIndex < 5; coinIndex++) {
        const coinX = gateX + 400 + coinIndex * 58;
        const coinY = 415 - Math.sin(coinIndex / 4 * Math.PI) * 90;
        this.coinsGroup.create(coinX, coinY, "mq-coin");
      }
      if (questionIndex < gateCount - 1) this.hazards.create(gateX + 570, 468, "mq-spike");
    }
    const finishX = 760 + (gateCount - 1) * 690 + 560;
    this.finish = this.physics.add.staticImage(finishX, 438, "mq-finish");
  }

  private hitAnswer(answer: Phaser.Physics.Arcade.Image) {
    if (!answer.active || this.ended) return;
    const questionIndex = Number(answer.getData("questionIndex"));
    if (questionIndex !== this.solved) return;
    const label = answer.getData("label") as Phaser.GameObjects.Text | undefined;
    if (answer.getData("correct")) {
      this.score += 100;
      this.solved += 1;
      this.checkpointX = this.wallsByQuestion[questionIndex].x + 70;
      this.checkpointY = 420;
      this.wallsByQuestion[questionIndex].disableBody(true, true);
      for (const item of this.answersByQuestion[questionIndex]) {
        (item.getData("label") as Phaser.GameObjects.Text | undefined)?.destroy();
        item.disableBody(true, true);
      }
      this.cameras.main.flash(150, 52, 211, 153, false);
      this.emitStats();
    } else {
      label?.setColor("#fda4af");
      answer.setTint(0xbe123c).disableBody(true, false);
      this.takeDamage();
    }
  }

  private collectCoin(coin: Phaser.Physics.Arcade.Image) {
    if (!coin.active) return;
    coin.disableBody(true, true);
    this.coins += 1;
    this.score += 10;
    this.emitStats();
  }

  private takeDamage() {
    if (this.damageCooldown || this.ended) return;
    this.damageCooldown = true;
    this.hearts -= 1;
    this.cameras.main.shake(140, 0.012);
    this.cameras.main.flash(100, 244, 63, 94, false);
    this.emitStats();
    if (this.hearts <= 0) {
      this.ended = true;
      this.physics.pause();
      this.time.delayedCall(250, () => this.onEnd(false, this.score));
      return;
    }
    this.time.delayedCall(280, () => {
      this.player.setPosition(this.checkpointX, this.checkpointY).setVelocity(0, 0).clearTint();
      this.time.delayedCall(650, () => { this.damageCooldown = false; });
    });
  }

  private finishStage() {
    if (this.ended || this.solved < this.problems.length) return;
    this.ended = true;
    this.score += this.hearts * 100;
    this.emitStats();
    this.physics.pause();
    this.cameras.main.flash(300, 251, 191, 36, false);
    this.time.delayedCall(300, () => this.onEnd(true, this.score));
  }

  private emitStats() {
    this.onStats({
      hearts: this.hearts,
      coins: this.coins,
      solved: this.solved,
      total: this.problems.length,
      question: this.problems[Math.min(this.solved, this.problems.length - 1)]?.prompt ?? "",
      score: this.score,
    });
  }

  update() {
    if (this.ended || !this.player) return;
    const body = this.player.body as Phaser.Physics.Arcade.Body;
    const onFloor = body.blocked.down || body.touching.down;
    if (onFloor) this.lastGroundedAt = this.time.now;
    const left = this.controls.left || this.cursors.left?.isDown;
    const right = this.controls.right || this.cursors.right?.isDown;
    const jump = this.jumpQueued || this.controls.jump || Phaser.Input.Keyboard.JustDown(this.cursors.up!);
    const speed = 235;
    if (left && !right) { this.player.setVelocityX(-speed); this.player.setFlipX(true); }
    else if (right && !left) { this.player.setVelocityX(speed); this.player.setFlipX(false); }
    else this.player.setVelocityX(body.velocity.x * 0.72);
    if (jump && this.time.now - this.lastGroundedAt < 130) {
      this.player.setVelocityY(-455);
      this.lastGroundedAt = 0;
    }
    this.jumpQueued = false;
    if (this.player.y > 545) this.takeDamage();
  }
}

export default function MathQuestGame({ grade, lang, onDone }: Props) {
  const t = COPY[lang] ?? COPY.en;
  const containerRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<Phaser.Game | null>(null);
  const controlsRef = useRef<QuestControls | null>(null);
  const storageKey = `plizio:math-quest:v1:g${grade}`;
  const [stage, setStage] = useState(1);
  const [restartKey, setRestartKey] = useState(0);
  const [phase, setPhase] = useState<"intro" | "playing" | "won" | "lost">("intro");
  const [stats, setStats] = useState<QuestStats>({ hearts: 3, coins: 0, solved: 0, total: 6, question: "", score: 0 });

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) ?? "{}");
      setStage(Math.max(1, Number(saved.stage) || 1));
    } catch { setStage(1); }
    setPhase("intro");
  }, [storageKey]);

  useEffect(() => {
    if (phase !== "playing" || !containerRef.current) return;
    const scene = new MathQuestScene();
    scene.grade = grade;
    scene.stage = stage;
    scene.lang = lang;
    scene.onStats = setStats;
    scene.onEnd = (won, score) => {
      setPhase(won ? "won" : "lost");
      if (won) {
        try { localStorage.setItem(storageKey, JSON.stringify({ stage: stage + 1, bestScore: score })); } catch {}
        onDone?.(score);
      }
    };
    controlsRef.current = scene;
    gameRef.current = new Phaser.Game({
      type: Phaser.AUTO,
      width: 800,
      height: 520,
      parent: containerRef.current,
      backgroundColor: "#06111f",
      physics: { default: "arcade", arcade: { gravity: { x: 0, y: 920 }, debug: false } },
      scene,
      scale: { mode: Phaser.Scale.ENVELOP, autoCenter: Phaser.Scale.CENTER_BOTH },
      render: { antialias: true, pixelArt: false },
    });
    return () => {
      controlsRef.current = null;
      gameRef.current?.destroy(true);
      gameRef.current = null;
    };
  }, [grade, lang, onDone, phase, restartKey, stage, storageKey]);

  const begin = (nextStage = stage) => {
    if (nextStage !== stage) setStage(nextStage);
    setStats({ hearts: 3, coins: 0, solved: 0, total: 6, question: "", score: 0 });
    setRestartKey((value) => value + 1);
    setPhase("playing");
  };

  const controlProps = (control: "left" | "right" | "jump") => ({
    onPointerDown: (event: ReactPointerEvent<HTMLButtonElement>) => { event.currentTarget.setPointerCapture(event.pointerId); controlsRef.current?.setControl(control, true); },
    onPointerUp: () => controlsRef.current?.setControl(control, false),
    onPointerCancel: () => controlsRef.current?.setControl(control, false),
    onPointerLeave: () => controlsRef.current?.setControl(control, false),
  });

  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-cyan-400/25 bg-[#040a10] text-white shadow-2xl">
      <header className="flex items-center justify-between gap-2 border-b border-white/10 bg-black/30 px-3 py-2 sm:px-4">
        <div><p className="text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-300/60">Math Quest</p><h2 className="text-lg font-black text-cyan-100 sm:text-2xl">{t.title}</h2></div>
        <div className="flex gap-2 text-xs font-black sm:text-sm"><span className="rounded-lg bg-white/5 px-2 py-1">{t.world}: {stage}</span><span className="rounded-lg bg-rose-500/10 px-2 py-1 text-rose-200">♥ {stats.hearts}</span><span className="rounded-lg bg-amber-500/10 px-2 py-1 text-amber-200">● {stats.coins}</span><span className="rounded-lg bg-emerald-500/10 px-2 py-1 text-emerald-200">{stats.solved}/{stats.total}</span></div>
      </header>

      <div className="relative h-[min(62dvh,560px)] min-h-[420px] w-full overflow-hidden bg-[#06111f] touch-none">
        <div ref={containerRef} className="absolute inset-0 overflow-hidden [&>canvas]:!block" />
        {phase === "playing" && <div className="pointer-events-none absolute left-1/2 top-3 z-20 w-[min(92%,560px)] -translate-x-1/2 rounded-xl border border-cyan-300/25 bg-slate-950/85 px-3 py-2 text-center font-mono text-base font-black text-white shadow-lg backdrop-blur sm:text-xl">{stats.question || t.hint}</div>}

        {phase !== "playing" && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-slate-950/90 p-6 text-center backdrop-blur-sm">
            <div className="mb-4 text-6xl">{phase === "won" ? "🏁" : phase === "lost" ? "↻" : "🚀"}</div>
            <h3 className="text-3xl font-black text-cyan-100 sm:text-5xl">{phase === "won" ? t.won : phase === "lost" ? t.lost : t.title}</h3>
            <p className="mt-3 max-w-md text-white/70">{phase === "intro" ? t.hint : `${t.coins}: ${stats.coins} · ${stats.score}`}</p>
            <button type="button" onClick={() => begin(phase === "won" ? stage + 1 : stage)} className="mt-6 min-h-12 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 px-8 text-lg font-black text-slate-950 active:scale-95">{phase === "won" ? t.next : phase === "lost" ? t.retry : t.start}</button>
            {phase === "intro" && <p className="mt-4 text-xs text-white/40">{t.saved}</p>}
          </div>
        )}

        {phase === "playing" && (
          <div className="absolute inset-x-0 bottom-3 z-20 flex items-end justify-between px-3 sm:px-5">
            <div className="flex gap-2">
              <button type="button" aria-label="Left" {...controlProps("left")} className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-slate-950/75 text-3xl font-black text-white backdrop-blur active:bg-cyan-500/40">←</button>
              <button type="button" aria-label="Right" {...controlProps("right")} className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-slate-950/75 text-3xl font-black text-white backdrop-blur active:bg-cyan-500/40">→</button>
            </div>
            <button type="button" aria-label="Jump" {...controlProps("jump")} className="flex h-20 w-20 items-center justify-center rounded-full border border-amber-200/40 bg-amber-500/80 text-3xl font-black text-slate-950 shadow-lg active:scale-95">↑</button>
          </div>
        )}
      </div>
    </div>
  );
}
