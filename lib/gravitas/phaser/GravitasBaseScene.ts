import * as Phaser from "phaser";
import type { StarholdEventId, StarholdModuleId, StarholdState, StarholdCommand, StarholdThreatType } from "@/lib/gravitas/sim/types";

const SCENE_WIDTH = 840;
const SCENE_HEIGHT = 560;
const CORE_X = SCENE_WIDTH / 2;
const CORE_Y = SCENE_HEIGHT / 2;

const MODULE_POSITIONS: Record<StarholdModuleId, { x: number; y: number }> = {
  reactor: { x: 210, y: 140 },
  logistics: { x: 625, y: 154 },
  core: { x: CORE_X, y: CORE_Y },
  sensor: { x: 320, y: 445 },
};

const SECTOR_COLORS: Record<StarholdModuleId, number> = {
  reactor: 0xf59e0b,
  logistics: 0x6366f1,
  sensor: 0x10b981,
  core: 0xdb2777,
};

const MODULE_GLYPHS: Record<StarholdModuleId, string> = {
  reactor: "R",
  logistics: "L",
  sensor: "S",
  core: "C",
};

interface SceneOptions {
  onSelectModule?: (moduleId: StarholdModuleId) => void;
}

export class GravitasBaseScene extends Phaser.Scene {
  private readonly onSelectModule?: (moduleId: StarholdModuleId) => void;
  private bootReady = false;
  private currentState: StarholdState | null = null;
  private root!: Phaser.GameObjects.Container;
  private particleLayer!: Phaser.GameObjects.Container;
  private linkGfx!: Phaser.GameObjects.Graphics;
  private heatGfx!: Phaser.GameObjects.Graphics;
  private activationGfx!: Phaser.GameObjects.Graphics;
  private threatGfx!: Phaser.GameObjects.Graphics;
  private sectorGfx!: Phaser.GameObjects.Graphics;
  private activeOpsGfx!: Phaser.GameObjects.Graphics;
  private noiseGfx!: Phaser.GameObjects.Graphics;
  private moduleVisualsGfx!: Phaser.GameObjects.Graphics;

  private moduleNodes = new Map<
    StarholdModuleId,
    {
      glow: Phaser.GameObjects.Arc;
      shell: Phaser.GameObjects.Arc;
      ring: Phaser.GameObjects.Arc;
      glyph: Phaser.GameObjects.Text;
      hitbox: Phaser.GameObjects.Arc;
      label: Phaser.GameObjects.Text;
      level: Phaser.GameObjects.Text;
      energyEmitter?: Phaser.GameObjects.Particles.ParticleEmitter;
    }
  >();

  private coreGlow!: Phaser.GameObjects.Arc;
  private coreShell!: Phaser.GameObjects.Arc;
  private coreRing!: Phaser.GameObjects.Arc;
  private coreCenter!: Phaser.GameObjects.Arc;
  private coreHitbox!: Phaser.GameObjects.Arc;
  private coreGlyph!: Phaser.GameObjects.Text;
  private coreLabel!: Phaser.GameObjects.Text;
  private coreLevel!: Phaser.GameObjects.Text;
  private resonanceEmitter?: Phaser.GameObjects.Particles.ParticleEmitter;

  private stars: { node: Phaser.GameObjects.Arc; speed: number }[] = [];
  private meteors: Phaser.GameObjects.Arc[] = [];
  private scavengeDrones: Phaser.GameObjects.Container[] = [];
  private animTime = 0;
  private currentFocus: StarholdModuleId | null = null;
  private lastIntegrityMap = new Map<StarholdModuleId, number>();
  private isScavengeActive = false;
  private lastScavengeCycle = -1;
  private lastActiveOpType: StarholdModuleId | "core" | null = null;
  private actionSequenceUntil = 0;
  private skipNextScavengeAutoLaunch = false;
  private lastThreatAftershock = 0;
  private lastPostWaveSurgeTick = -1;

  constructor(options: SceneOptions = {}) {
    super({ key: "GravitasBaseScene" });
    this.onSelectModule = options.onSelectModule;
  }

  create() {
    const width = SCENE_WIDTH;
    const height = SCENE_HEIGHT;

    this.cameras.main.setBackgroundColor("#050816");

    // Starfield with slow drift
    for (let i = 0; i < 80; i++) {
      const star = this.add.circle(
        Phaser.Math.Between(0, width),
        Phaser.Math.Between(0, height),
        Phaser.Math.Between(0.5, 1.5),
        0xffffff,
        Phaser.Math.FloatBetween(0.1, 0.4)
      );
      this.stars.push({ node: star, speed: Phaser.Math.FloatBetween(0.05, 0.2) });
    }

    // Meteors
    for (let i = 0; i < 4; i++) {
      const meteor = this.add.circle(-50, -50, 2, 0xffffff, 0.6);
      this.meteors.push(meteor);
      this.resetMeteor(meteor);
    }

    this.sectorGfx = this.add.graphics();
    this.threatGfx = this.add.graphics();
    this.linkGfx = this.add.graphics();
    this.heatGfx = this.add.graphics();
    this.activationGfx = this.add.graphics();
    this.activeOpsGfx = this.add.graphics();
    this.noiseGfx = this.add.graphics();
    this.moduleVisualsGfx = this.add.graphics();

    this.particleLayer = this.add.container(0, 0);
    this.root = this.add.container(0, 0);

    const centerX = CORE_X;
    const centerY = CORE_Y;

    // Core
    this.coreGlow = this.add.circle(centerX, centerY, 84, 0xdb2777, 0.16);
    this.coreRing = this.add.circle(centerX, centerY, 66, 0x000000, 0).setStrokeStyle(2, 0xf472b6, 0.26);
    this.coreShell = this.add.circle(centerX, centerY, 50, 0x0f172a, 0.96).setStrokeStyle(3, 0xf472b6, 0.46);
    this.coreCenter = this.add.circle(centerX, centerY, 24, 0xffffff, 0.9);
    this.coreGlyph = this.add.text(centerX, centerY, MODULE_GLYPHS.core, {
      fontFamily: "Inter, Arial",
      fontSize: "20px",
      fontStyle: "bold",
      color: "#fff1f7",
    }).setOrigin(0.5);
    this.root.add([this.coreGlow, this.coreRing, this.coreShell, this.coreCenter, this.coreGlyph]);

    // Create simple texture for particles
    const pGfx = this.make.graphics({x: 0, y: 0} as any);
    pGfx.fillStyle(0xffffff, 1);
    pGfx.fillCircle(4, 4, 4);
    pGfx.generateTexture('dot', 8, 8);

    // Drone texture
    const dGfx = this.make.graphics({x: 0, y: 0} as any);
    dGfx.fillStyle(0x6366f1, 1);
    dGfx.fillRect(0, 0, 6, 6);
    dGfx.generateTexture('drone', 6, 6);

    this.resonanceEmitter = this.add.particles(centerX, centerY, 'dot', {
      scale: { start: 0.5, end: 0 },
      alpha: { start: 0.8, end: 0 },
      lifespan: 800,
      blendMode: 'ADD',
      emitting: false
    });

    // Modules
    for (const [moduleId, pos] of Object.entries(MODULE_POSITIONS) as [StarholdModuleId, { x: number; y: number }][]) {
      if (moduleId === "core") continue;

      const glow = this.add.circle(pos.x, pos.y, 54, SECTOR_COLORS[moduleId], 0.03);
      const ring = this.add.circle(pos.x, pos.y, 36, 0x000000, 0).setStrokeStyle(0, SECTOR_COLORS[moduleId], 0);
      const shell = this.add.circle(pos.x, pos.y, 28, 0x0f172a, 0).setStrokeStyle(0, SECTOR_COLORS[moduleId], 0);
      const glyph = this.add.text(pos.x, pos.y, MODULE_GLYPHS[moduleId], {
        fontFamily: "Inter, Arial",
        fontSize: "18px",
        fontStyle: "bold",
        color: "#f8fafc",
      }).setOrigin(0.5);
      const hitbox = this.add.circle(pos.x, pos.y, 36, 0xffffff, 0.001).setInteractive({ useHandCursor: true });
      const label = this.add.text(pos.x, pos.y + 40, moduleId.toUpperCase(), {
        fontFamily: "Inter, Arial",
        fontSize: "11px",
        fontStyle: "bold",
        color: "#dbeafe",
      }).setOrigin(0.5);
      const level = this.add.text(pos.x, pos.y - 43, "LVL 1", {
        fontFamily: "Inter, Arial",
        fontSize: "10px",
        fontStyle: "bold",
        color: "#e2e8f0",
        backgroundColor: "#0f172a",
        padding: { left: 8, right: 8, top: 3, bottom: 3 },
      }).setOrigin(0.5);

      hitbox.on("pointerdown", () => this.onSelectModule?.(moduleId));

      const emitter = this.add.particles(0, 0, 'dot', {
        scale: { start: 0.3, end: 0 },
        alpha: { start: 0.5, end: 0 },
        lifespan: 1000,
        blendMode: 'ADD',
        emitting: false
      });

      this.root.add([glow, ring, shell, glyph, hitbox, label, level]);
      this.moduleNodes.set(moduleId, { glow, shell, ring, glyph, hitbox, label, level, energyEmitter: emitter });
    }

    // Overlay the custom module silhouettes above the default shells.
    this.root.add(this.moduleVisualsGfx);

    this.coreHitbox = this.add.circle(centerX, centerY, 54, 0xffffff, 0.001)
      .setInteractive({ useHandCursor: true });
    this.coreHitbox.on("pointerdown", () => this.onSelectModule?.("core"));
    this.coreLabel = this.add.text(centerX, centerY + 62, "CORE", {
      fontFamily: "Inter, Arial",
      fontSize: "12px",
      fontStyle: "bold",
      color: "#ffe4ef",
    }).setOrigin(0.5);
    this.coreLevel = this.add.text(centerX, centerY - 68, "LVL 1", {
      fontFamily: "Inter, Arial",
      fontSize: "10px",
      fontStyle: "bold",
      color: "#ffe4ef",
      backgroundColor: "#1f1020",
      padding: { left: 8, right: 8, top: 3, bottom: 3 },
    }).setOrigin(0.5);
    this.root.add([this.coreHitbox, this.coreLabel, this.coreLevel]);

    this.bootReady = true;
  }

  private resetMeteor(meteor: Phaser.GameObjects.Arc) {
    const side = Phaser.Math.Between(0, 3);
    const width = SCENE_WIDTH;
    const height = SCENE_HEIGHT;
    if (side === 0) { meteor.setPosition(Phaser.Math.Between(0, width), -20); }
    else if (side === 1) { meteor.setPosition(width + 20, Phaser.Math.Between(0, height)); }
    else if (side === 2) { meteor.setPosition(Phaser.Math.Between(0, width), height + 20); }
    else { meteor.setPosition(-20, Phaser.Math.Between(0, height)); }

    const targetX = width / 2 + Phaser.Math.Between(-200, 200);
    const targetY = height / 2 + Phaser.Math.Between(-200, 200);

    this.tweens.add({
      targets: meteor,
      x: targetX + (targetX - meteor.x) * 2,
      y: targetY + (targetY - meteor.y) * 2,
      duration: Phaser.Math.Between(4000, 8000),
      onComplete: () => this.resetMeteor(meteor)
    });
  }

  update(time: number, delta: number) {
    this.animTime += delta;

    this.stars.forEach(s => {
      s.node.x += s.speed;
      if (s.node.x > SCENE_WIDTH) s.node.x = 0;
    });

    const pulse = Math.sin(this.animTime / 500) * 0.1 + 1;
    this.coreCenter.setScale(pulse);
  }

  focusOnModule(moduleId: StarholdModuleId, force = false, zoomOverride?: number) {
    if (!this.bootReady || !this.cameras?.main) return;
    if (!force && this.isActionSequenceActive()) return;
    if (!force && this.currentFocus === moduleId) return;
    this.currentFocus = moduleId;

    const pos = MODULE_POSITIONS[moduleId];
    const zoom = zoomOverride ?? (moduleId === "core" ? 1.04 : 1.26);

    this.cameras.main.pan(pos.x, pos.y, force ? 360 : 600, "Power2");
    this.cameras.main.zoomTo(zoom, force ? 360 : 600, "Power2");
  }

  triggerActionFeedback(command: StarholdCommand) {
    if (!this.bootReady) return;

    switch (command.type) {
      case "SCAVENGE":
        this.sequenceScavenge();
        break;
      case "STABILIZE_REACTOR":
        this.sequenceStabilize();
        break;
      case "REPAIR_MODULE":
        this.sequenceRepair(command.moduleId);
        break;
      case "REROUTE_TO_CORE":
        this.sequenceReroute();
        break;
    }
  }

  private isActionSequenceActive() {
    return this.time.now < this.actionSequenceUntil;
  }

  private beginActionSequence(moduleId: StarholdModuleId, duration: number, zoomOverride?: number) {
    this.actionSequenceUntil = this.time.now + duration;
    this.focusOnModule(moduleId, true, zoomOverride);
    this.cameras.main.flash(180, 180, 220, 255, false);
    this.time.delayedCall(duration, () => {
      if (this.time.now >= this.actionSequenceUntil) {
        this.actionSequenceUntil = 0;
        this.currentFocus = null;
      }
    });
  }

  private createPulseRing(
    x: number,
    y: number,
    radius: number,
    color: number,
    duration: number,
    scale = 1.9,
    alpha = 0.7,
  ) {
    const ring = this.add.circle(x, y, radius, 0x000000, 0).setStrokeStyle(3, color, alpha);
    this.tweens.add({
      targets: ring,
      scale,
      alpha: 0,
      duration,
      ease: "Sine.Out",
      onComplete: () => ring.destroy(),
    });
  }

  private createLogisticsCollectionGlow(pos: { x: number; y: number }) {
    const bay = this.add.graphics();
    const pulse = this.add.circle(pos.x, pos.y, 12, 0xfbbf24, 0.05);

    const renderBay = (alpha: number) => {
      bay.clear();
      bay.lineStyle(1.5, 0xfbbf24, 0.16 + alpha * 0.12);
      bay.strokeCircle(pos.x, pos.y, 18 + alpha * 4);
      bay.lineStyle(1, 0x38bdf8, 0.08 + alpha * 0.05);
      bay.lineCircle(pos.x, pos.y, 24 + alpha * 4);
    };

    renderBay(0);

    this.tweens.addCounter({
      from: 0,
      to: 1,
      duration: 280,
      yoyo: true,
      repeat: 2,
      onUpdate: (tween) => {
        renderBay(tween.getValue());
      },
      onComplete: () => bay.destroy(),
    });

    this.tweens.add({
      targets: pulse,
      scale: 1.25,
      alpha: 0,
      duration: 240,
      ease: "Sine.Out",
      onComplete: () => pulse.destroy(),
    });
  }

  private playCargoArrival(pos: { x: number; y: number }) {
    this.flashNode("logistics", 0xfbbf24, { radius: 20, alpha: 0.18, scale: 1.12, duration: 120 });
    this.createBeam({ x: pos.x - 24, y: pos.y - 2 }, pos, 0xfbbf24, 90);
    this.createPulseRing(pos.x, pos.y, 10, 0xfbbf24, 180, 1.18, 0.12);
  }

  private createModuleToCoreStream(from: { x: number; y: number }, waves: number, color: number) {
    for (let i = 0; i < waves; i++) {
      this.time.delayedCall(i * 140, () => {
        this.createEnergyPulse(from, MODULE_POSITIONS.core, color, 260);
      });
    }
  }

  private playAwakeningTeaser(ticksRemaining: number, aggressive = false) {
    const intensity = aggressive ? 1 : 0.65;
    const color = aggressive ? 0xfb7185 : 0x22d3ee;
    const center = MODULE_POSITIONS.core;

    this.flashNode("core", color, {
      radius: aggressive ? 30 : 24,
      alpha: aggressive ? 0.24 : 0.16,
      scale: aggressive ? 1.32 : 1.18,
      duration: aggressive ? 180 : 240,
    });
    this.createPulseRing(center.x, center.y, aggressive ? 54 : 44, color, aggressive ? 620 : 760, aggressive ? 2.0 : 1.7, aggressive ? 0.24 : 0.16);

    const moduleIds: StarholdModuleId[] = ["reactor", "logistics", "sensor"];
    moduleIds.forEach((moduleId, index) => {
      const pos = MODULE_POSITIONS[moduleId];
      this.time.delayedCall(index * 80, () => {
        this.createEnergyPulse(pos, center, color, aggressive ? 240 : 320);
      });
    });

    if (ticksRemaining <= 10) {
      this.time.delayedCall(120, () => this.cameras.main.flash(80, 160, aggressive ? 90 : 220, 255, false));
    }
  }

  private beginThreatSequence(duration: number) {
    this.actionSequenceUntil = Math.max(this.actionSequenceUntil, this.time.now + duration);
    this.currentFocus = null;
    this.cameras.main.pan(CORE_X, CORE_Y, 320, "Sine.Out");
    this.cameras.main.zoomTo(1.02, 320, "Sine.Out");
  }

  private sequenceThreatImpact(type: StarholdThreatType, waveNumber: number) {
    const duration = 1800;
    const strength = waveNumber >= 2 ? 1.2 : 1;
    this.beginThreatSequence(duration);

    if (type === "distortionWave") {
      const sweep = this.add.rectangle(-180, CORE_Y, 220, SCENE_HEIGHT + 120, 0xa855f7, 0.18 * strength).setAngle(12);
      const fracture = this.add.graphics();
      const centerPulse = this.add.circle(CORE_X, CORE_Y, 90, 0xc084fc, 0.08);

      this.tweens.add({
        targets: sweep,
        x: 960,
        duration: 720,
        ease: "Cubic.Out",
        onUpdate: () => {
        fracture.clear();
        fracture.lineStyle(14, 0xa855f7, 0.2 * strength);
        fracture.lineBetween(sweep.x, -30, sweep.x - 150, SCENE_HEIGHT);
        fracture.lineStyle(4, 0xffffff, 0.18 * strength);
        fracture.lineBetween(sweep.x + 22, -30, sweep.x - 128, SCENE_HEIGHT);
      },
        onComplete: () => {
          fracture.destroy();
          sweep.destroy();
        },
      });

      for (const moduleId of ["reactor", "logistics", "sensor", "core"] as const) {
        const pos = MODULE_POSITIONS[moduleId];
        this.time.delayedCall(moduleId === "core" ? 520 : 420, () => {
          this.flashNode(moduleId, moduleId === "core" ? 0xf5d0fe : 0xc084fc);
          this.createPulseRing(pos.x, pos.y, moduleId === "core" ? 46 : 28, 0xe879f9, 620, 2.4, 0.65);
        });
      }

      this.tweens.add({
        targets: centerPulse,
        scale: 3.4,
        alpha: 0,
        duration: 820,
        delay: 520,
        ease: "Sine.Out",
        onComplete: () => centerPulse.destroy(),
      });

      this.time.delayedCall(520, () => this.shake(0.018 * strength));
      this.time.delayedCall(860, () => this.cameras.main.flash(200, 225, 190, 255, false));
      return;
    }

    if (type === "voidStorm") {
      const storm = this.add.circle(CORE_X, CORE_Y, 40, 0x38bdf8, 0.12 * strength);
      this.tweens.add({
        targets: storm,
        scale: 4.2,
        alpha: 0,
        duration: 950,
        ease: "Sine.Out",
        onComplete: () => storm.destroy(),
      });
      for (let i = 0; i < 4; i++) {
        this.time.delayedCall(i * 120, () => this.createPulseRing(CORE_X, CORE_Y, 40 + i * 14, 0x38bdf8, 720, 2.2, 0.48));
      }
      this.shake(0.015 * strength);
      return;
    }

    const rain = this.add.graphics();
    const burst = this.add.circle(CORE_X, CORE_Y, 70, 0xfb923c, 0.08 * strength);
    this.tweens.add({
      targets: burst,
      scale: 3,
      alpha: 0,
      duration: 780,
      ease: "Sine.Out",
      onComplete: () => burst.destroy(),
    });
    for (let i = 0; i < 12; i++) {
      this.time.delayedCall(i * 35, () => {
        rain.lineStyle(4, 0xfb923c, 0.2 * strength);
        const x = 80 + i * 60;
        rain.lineBetween(x, -30, x - 55, 120);
      });
    }
    this.time.delayedCall(820, () => rain.destroy());
    this.shake(0.017 * strength);
  }

  private sequenceScavenge() {
    this.beginActionSequence("logistics", 2600, 1.42);
    this.skipNextScavengeAutoLaunch = true;
    const from = MODULE_POSITIONS.logistics;

    // Launch burst at the logistics bay.
    this.createPulseRing(from.x, from.y, 34, 0x818cf8, 420, 1.5, 0.6);
    this.createPulseRing(from.x, from.y, 48, 0x38bdf8, 620, 1.7, 0.4);

    const drone = this.add.container(from.x, from.y);
    const body = this.add.image(0, 0, "drone").setTint(0x818cf8);
    const cargoGlow = this.add.circle(6, 0, 4, 0xf8fafc, 0.8);
    drone.add([body, cargoGlow]);
    this.scavengeDrones.push(drone);

    const targetX = 770;
    const targetY = 96 + Phaser.Math.Between(-28, 28);
    const salvageHalo = this.add.circle(targetX, targetY, 26, 0x60a5fa, 0.08).setStrokeStyle(2, 0x60a5fa, 0.25);

    this.tweens.add({
      targets: drone,
      x: targetX,
      y: targetY,
      duration: 760,
      ease: "Cubic.Out",
      onComplete: () => {
        // External salvage pass.
        const beam = this.add.graphics();
        const dust = this.add.particles(targetX, targetY, "dot", {
          scale: { start: 0.55, end: 0 },
          alpha: { start: 0.95, end: 0 },
          speed: { min: 60, max: 170 },
          tint: [0xf8fafc, 0x60a5fa, 0xfbbf24],
          lifespan: 650,
          frequency: 36,
          emitting: true,
          blendMode: "ADD",
        });

        this.tweens.add({
          targets: beam,
          alpha: { from: 0.18, to: 0.9 },
          duration: 100,
          yoyo: true,
          repeat: 10,
          onUpdate: () => {
            beam.clear();
            beam.lineStyle(3, 0x93c5fd, beam.alpha);
            beam.lineBetween(targetX, targetY, targetX + Phaser.Math.Between(-14, 18), targetY + 58);
            beam.lineStyle(1.5, 0xffffff, Math.min(1, beam.alpha + 0.1));
            beam.lineBetween(targetX, targetY - 2, targetX + Phaser.Math.Between(-8, 10), targetY + 52);
          },
        });

        this.tweens.add({
          targets: salvageHalo,
          scale: 1.28,
          alpha: 0.4,
          duration: 520,
          yoyo: true,
          repeat: 1,
        });

        this.time.delayedCall(1100, () => {
          beam.destroy();
          dust.destroy();
          cargoGlow.setFillStyle(0xfbbf24, 1);

          // Loaded return pass.
          this.tweens.add({
            targets: drone,
            x: from.x,
            y: from.y,
            duration: 760,
            ease: "Cubic.In",
            onComplete: () => {
              this.scavengeDrones = this.scavengeDrones.filter((d) => d !== drone);
              drone.destroy();
              salvageHalo.destroy();

              // Cargo received payoff at the bay.
              this.playCargoArrival(from);
            },
          });
        });
      },
    });
  }

  private sequenceStabilize() {
    this.beginActionSequence("reactor", 2100, 1.48);
    const pos = MODULE_POSITIONS.reactor;

    // Containment rings pull in toward the reactor.
    for (let i = 0; i < 4; i++) {
      const ring = this.add.circle(pos.x, pos.y, 72 + i * 18, 0x000000, 0).setStrokeStyle(3, 0x60a5fa, 0.62);
      this.tweens.add({
        targets: ring,
        radius: 26 + i * 6,
        alpha: 0,
        duration: 980,
        delay: i * 120,
        ease: "Cubic.In",
        onComplete: () => ring.destroy(),
      });
    }

    for (let i = 0; i < 3; i++) {
      this.time.delayedCall(220 + i * 190, () => {
        this.createPulseRing(pos.x, pos.y, 28 + i * 10, 0x93c5fd, 540, 1.8, 0.72);
      });
    }

    // Build tension around the core.
    const flash = this.add.circle(pos.x, pos.y, 34, 0x93c5fd, 0.15);
    this.tweens.add({
      targets: flash,
      alpha: 0.72,
      scale: 2.05,
      duration: 1200,
      ease: "Sine.InOut",
      onComplete: () => {
        this.createPulseRing(pos.x, pos.y, 32, 0xe0f2fe, 620, 2.8, 0.95);
        this.triggerPayoff("reactor", "stabilize");
        flash.destroy();
      },
    });
  }

  private sequenceRepair(moduleId: StarholdModuleId) {
    this.beginActionSequence(moduleId, 2400, moduleId === "core" ? 1.1 : 1.42);
    const pos = MODULE_POSITIONS[moduleId];

    // Repair arcs and welding activity around the module shell.
    const repairGfx = this.add.graphics();
    const timer = this.time.addEvent({
      delay: 90,
      repeat: 17,
      callback: () => {
        repairGfx.clear();
        repairGfx.lineStyle(2, 0xffffff, 0.55 + Math.random() * 0.45);
        const angle = Math.random() * Math.PI * 2;
        const dx = Math.cos(angle) * 35;
        const dy = Math.sin(angle) * 35;
        repairGfx.lineBetween(pos.x + dx, pos.y + dy, pos.x + dx * 0.5, pos.y + dy * 0.5);
        repairGfx.lineStyle(1.5, 0x34d399, 0.7);
        repairGfx.lineBetween(pos.x - dx * 0.3, pos.y - dy * 0.3, pos.x + dx * 0.15, pos.y + dy * 0.15);
        if (Math.random() > 0.4) this.createSparks({ x: pos.x + dx, y: pos.y + dy }, 0x34d399);
      },
    });

    const restoreHalo = this.add.circle(pos.x, pos.y, 34, 0x34d399, 0.08).setStrokeStyle(2, 0x34d399, 0.18);
    this.tweens.add({
      targets: restoreHalo,
      alpha: 0.36,
      scale: 1.22,
      duration: 520,
      yoyo: true,
      repeat: 1,
    });

    this.time.delayedCall(1750, () => {
      timer.remove(false);
      repairGfx.destroy();
      restoreHalo.destroy();

      // Restored module confirmation.
      this.triggerPayoff(moduleId, "repair");
      const highlight = this.add.circle(pos.x, pos.y, 40, 0x000000, 0).setStrokeStyle(4, 0x34d399, 1);
      this.tweens.add({
        targets: highlight,
        scale: 1.9,
        alpha: 0,
        duration: 700,
        ease: "Sine.Out",
        onComplete: () => highlight.destroy(),
      });
    });
  }

  private sequenceReroute() {
    this.beginActionSequence("core", 2500, 1.16);
    const centerX = CORE_X;
    const centerY = CORE_Y;

    // Entire station pushes energy toward the core.
    for (const [id, pos] of Object.entries(MODULE_POSITIONS) as [StarholdModuleId, {x:number, y:number}][]) {
      if (id === "core") continue;
      this.createModuleToCoreStream(pos, 4, SECTOR_COLORS[id]);
    }

    for (let i = 0; i < 5; i++) {
      this.time.delayedCall(i * 130, () => {
        this.createPulseRing(centerX, centerY, 44 + i * 6, 0xf472b6, 640, 2.1, 0.72);
      });
    }

    // Core saturation and resonance push.
    this.tweens.add({
      targets: [this.coreShell, this.coreRing, this.coreCenter],
      scale: 1.35,
      duration: 1300,
      ease: "Sine.easeInOut",
      yoyo: true,
      repeat: 0,
      onUpdate: () => {
        this.coreShell.setAlpha(0.6 + Math.random() * 0.35);
        this.coreGlow.setAlpha(0.22 + Math.random() * 0.22);
      },
      onComplete: () => {
        this.createPulseRing(centerX, centerY, 56, 0xffffff, 720, 3.2, 0.9);
        this.triggerPayoff("core", "reroute");
        this.shake(0.02);
      },
    });
  }

  private triggerPayoff(moduleId: StarholdModuleId | "core", type: string) {
    const centerX = CORE_X;
    const centerY = CORE_Y;
    const pos = moduleId === "core" ? { x: centerX, y: centerY } : MODULE_POSITIONS[moduleId];

    // Strong flash
    const flash = this.add.circle(pos.x, pos.y, 60, 0xffffff, 0.8);
    this.tweens.add({
      targets: flash,
      scale: 3,
      alpha: 0,
      duration: 600,
      ease: 'Power2',
      onComplete: () => flash.destroy()
    });

    // Particle burst for heavy impacts only. Cargo arrival uses a cleaner bay-light payoff.
    if (type !== "cargo") {
      const color = moduleId === "core" ? 0xdb2777 : SECTOR_COLORS[moduleId as StarholdModuleId] || 0xffffff;
      const burstCount = type === "reroute" ? 80 : 40;
      const burst = this.add.particles(pos.x, pos.y, "dot", {
        scale: { start: 1.0, end: 0 },
        alpha: { start: 1, end: 0 },
        speed: { min: 150, max: type === "reroute" ? 450 : 300 },
        tint: color,
        lifespan: 1000,
        blendMode: "ADD",
        emitting: false,
      });
      burst.explode(burstCount);
      this.time.delayedCall(1200, () => burst.destroy());
    }

    // Shake camera slightly for payoff
    this.shake(type === "reroute" ? 0.015 : 0.008);
  }

  private launchScavengeDrone() {
    const from = MODULE_POSITIONS.logistics;
    const drone = this.add.container(from.x, from.y);
    const body = this.add.image(0, 0, "drone").setTint(0x6366f1);
    drone.add([body]);

    const targetX = from.x + Phaser.Math.Between(150, 300);
    const targetY = from.y + Phaser.Math.Between(-100, 100);
    const hoverX = targetX + 10;
    const hoverY = targetY + 10;

    this.scavengeDrones.push(drone);

    this.tweens.add({
      targets: drone,
      x: targetX,
      y: targetY,
      duration: 1200,
      ease: "Power2",
      onComplete: () => {
        // Scavenge beam at target
        this.createBeam({ x: targetX, y: targetY }, { x: targetX + 20, y: targetY + 40 }, 0x6366f1);

        this.tweens.add({
          targets: drone,
          x: hoverX,
          y: hoverY,
          duration: 500,
          ease: "Sine.easeInOut",
          yoyo: true,
          repeat: 2,
          onComplete: () => {
            this.tweens.add({
              targets: drone,
              x: from.x,
              y: from.y,
              duration: 1000,
              ease: "Power2",
              onComplete: () => {
                this.scavengeDrones = this.scavengeDrones.filter((d) => d !== drone);
                drone.destroy();
                this.playCargoArrival(from);
              },
            });
          },
        });
      },
    });
  }

  private createBeam(from: {x: number, y: number}, to: {x: number, y: number}, color: number, hold = 200) {
    const beam = this.add.graphics();
    beam.lineStyle(3, color, 0.95);
    beam.lineBetween(from.x, from.y, to.x, to.y);
    beam.lineStyle(1.5, 0xffffff, 0.7);
    beam.lineBetween(from.x, from.y, to.x, to.y);
    beam.setAlpha(0);

    this.tweens.add({
      targets: beam,
      alpha: 1,
      duration: 100,
      yoyo: true,
      hold,
      onComplete: () => beam.destroy(),
    });

    const particles = this.add.particles(from.x, from.y, 'dot', {
      scale: { start: 0.4, end: 0 },
      alpha: { start: 1, end: 0 },
      lifespan: 500,
      speed: { min: 200, max: 400 },
      emitZone: { type: 'random', source: new Phaser.Geom.Line(from.x, from.y, to.x, to.y) } as Phaser.Types.GameObjects.Particles.EmitZoneData,
      emitting: false
    });
    particles.explode(20);
    this.time.delayedCall(1000, () => particles.destroy());
  }

  private flashNode(moduleId: StarholdModuleId, color: number, options?: { radius?: number; alpha?: number; scale?: number; duration?: number }) {
    const centerX = CORE_X;
    const centerY = CORE_Y;
    const x = moduleId === "core" ? centerX : MODULE_POSITIONS[moduleId].x;
    const y = moduleId === "core" ? centerY : MODULE_POSITIONS[moduleId].y;
    const node = moduleId === "core" ? null : this.moduleNodes.get(moduleId);
    const radius = options?.radius ?? 40;
    const alpha = options?.alpha ?? 0.8;
    const scale = options?.scale ?? 2;
    const duration = options?.duration ?? 400;

    const flash = this.add.circle(x, y, radius, color, alpha);
    this.tweens.add({
      targets: flash,
      scale,
      alpha: 0,
      duration,
      onComplete: () => flash.destroy()
    });

    if (node) {
      this.tweens.add({
        targets: [node.glow, node.shell, node.ring],
        alpha: { from: 1, to: 0.78 },
        scale: { from: 1, to: 1.07 },
        duration: 180,
        yoyo: true,
        ease: "Sine.Out",
        onUpdate: () => {
          node.shell.setStrokeStyle(0, color, 0);
          node.ring.setStrokeStyle(0, color, 0);
          node.glow.setFillStyle(color, 0.02);
        },
        onComplete: () => {
          node.glow.setFillStyle(SECTOR_COLORS[moduleId], 0.03);
          node.ring.setStrokeStyle(0, SECTOR_COLORS[moduleId], 0);
          node.shell.setStrokeStyle(0, SECTOR_COLORS[moduleId], 0);
        },
      });
    }
  }

  private createSparks(pos: {x: number, y: number}, color: number) {
    const particles = this.add.particles(pos.x, pos.y, 'dot', {
      scale: { start: 0.5, end: 0 },
      alpha: { start: 1, end: 0 },
      speed: { min: 50, max: 150 },
      tint: color,
      lifespan: 600,
      emitting: false
    });
    particles.explode(15);
    this.time.delayedCall(1000, () => particles.destroy());
  }

  private createEnergyPulse(from: {x: number, y: number}, to: {x: number, y: number}, color = 0xffffff, duration = 400) {
    const pulse = this.add.circle(from.x, from.y, 8, color, 1);
    const tail = this.add.circle(from.x, from.y, 16, color, 0.22);
    this.tweens.add({
      targets: [pulse, tail],
      x: to.x,
      y: to.y,
      duration,
      ease: 'Cubic.Out',
      onComplete: () => {
        pulse.destroy();
        tail.destroy();
        this.flashNode("core", 0xdb2777);
      }
    });
    this.tweens.add({
      targets: tail,
      alpha: 0.05,
      scale: 0.4,
      duration,
      ease: "Sine.Out",
    });
  }

  private shake(intensity = 0.01) {
    this.cameras.main.shake(300, intensity);
  }

  private flashImpact() {
    const f = this.add.rectangle(CORE_X, CORE_Y, SCENE_WIDTH, SCENE_HEIGHT, 0xffffff, 0.2);
    f.setScrollFactor(0);
    this.tweens.add({
      targets: f,
      alpha: 0,
      duration: 300,
      onComplete: () => f.destroy()
    });
  }

  syncState(state: StarholdState, selectedModule: StarholdModuleId) {
    if (!this.bootReady || !this.cameras?.main) return;
    this.currentState = state;
    if (!this.isActionSequenceActive()) {
      this.focusOnModule(selectedModule);
    }

    const { reactor, logistics, sensor, core } = state.modules;
    const centerX = CORE_X;
    const centerY = CORE_Y;

    // Integrity loss tracking
    for (const [moduleId, m] of Object.entries(state.modules) as [StarholdModuleId, any][]) {
        const lastInt = this.lastIntegrityMap.get(moduleId) ?? m.integrity;
        if (m.integrity < lastInt - 5) {
            this.shake(m.integrity < lastInt - 15 ? 0.02 : 0.01);
            if (m.integrity < lastInt - 15) this.flashImpact();
            this.createSparks(moduleId === "core" ? {x:centerX, y:centerY} : MODULE_POSITIONS[moduleId], 0xe11d48);
        }
        this.lastIntegrityMap.set(moduleId, m.integrity);
    }

    // Scavenge Drone management
    if (state.scavengeOperation && !this.isScavengeActive) {
      this.isScavengeActive = true;
      this.lastScavengeCycle = state.scavengeOperation.completedCycles;
      if (this.skipNextScavengeAutoLaunch) {
        this.skipNextScavengeAutoLaunch = false;
      } else {
        this.launchScavengeDrone();
      }
    } else if (
      state.scavengeOperation &&
      this.isScavengeActive &&
      state.scavengeOperation.completedCycles > this.lastScavengeCycle
    ) {
      this.lastScavengeCycle = state.scavengeOperation.completedCycles;
      this.launchScavengeDrone();
    } else if (!state.scavengeOperation) {
      this.isScavengeActive = false;
      this.lastScavengeCycle = -1;
    }

    // Threat impact scene
    if (state.threat.aftershock > 0 && this.lastThreatAftershock === 0) {
      this.sequenceThreatImpact(state.threat.type, Math.max(1, state.threatCycle));
    }
    this.lastThreatAftershock = state.threat.aftershock;

    // Low stability jitter
    if (state.resources.stability < 30 && !state.lockdown) {
      const jitter = (30 - state.resources.stability) / 30 * 0.5;
      this.cameras.main.setScroll(
        Math.sin(this.animTime / 50) * jitter,
        Math.cos(this.animTime / 40) * jitter
      );
    } else {
      this.cameras.main.setScroll(0, 0);
    }

    // Module Specific Visuals
    this.moduleVisualsGfx.clear();
    for (const [id, pos] of Object.entries(MODULE_POSITIONS) as [StarholdModuleId, {x:number, y:number}][]) {
      const m = state.modules[id];
      if (!m.online) continue;

      this.moduleVisualsGfx.lineStyle(3, SECTOR_COLORS[id], 0.56);
      if (id === "reactor") {
        // Angular containment frame for the reactor.
        const radius = 40 + Math.sin(this.animTime / 400) * 3;
        const points = Array.from({ length: 8 }, (_, i) => {
          const angle = Phaser.Math.DegToRad(22.5 + i * 45 + Math.sin(this.animTime / 220) * 3);
          const r = i % 2 === 0 ? radius + 8 : radius - 4;
          return new Phaser.Geom.Point(pos.x + Math.cos(angle) * r, pos.y + Math.sin(angle) * r);
        });
        this.moduleVisualsGfx.fillStyle(SECTOR_COLORS[id], 0.08);
        this.moduleVisualsGfx.fillPoints(points, true);
        this.moduleVisualsGfx.lineStyle(4, SECTOR_COLORS[id], 0.62);
        this.moduleVisualsGfx.strokePoints(points, true);
      } else if (id === "logistics") {
        // Cargo capsule / supply bay frame.
        const bayW = 92;
        const bayH = 34;
        const bayX = pos.x - bayW / 2;
        const bayY = pos.y - bayH / 2;
        this.moduleVisualsGfx.fillStyle(SECTOR_COLORS[id], 0.1);
        this.moduleVisualsGfx.fillRoundedRect(bayX, bayY, bayW, bayH, 14);
        this.moduleVisualsGfx.lineStyle(4, SECTOR_COLORS[id], 0.62);
        this.moduleVisualsGfx.strokeRoundedRect(bayX, bayY, bayW, bayH, 14);
        this.moduleVisualsGfx.lineStyle(3, SECTOR_COLORS[id], 0.56);
        this.moduleVisualsGfx.lineBetween(pos.x - 32, pos.y - 12, pos.x + 34, pos.y - 12);
        this.moduleVisualsGfx.lineBetween(pos.x - 32, pos.y + 12, pos.x + 34, pos.y + 12);
        this.moduleVisualsGfx.strokeCircle(pos.x - 30, pos.y, 5);
        this.moduleVisualsGfx.strokeCircle(pos.x + 28, pos.y, 5);
      } else if (id === "sensor") {
        // Lens / scan prism frame.
        const points = [
          new Phaser.Geom.Point(pos.x, pos.y - 38),
          new Phaser.Geom.Point(pos.x + 30, pos.y - 16),
          new Phaser.Geom.Point(pos.x + 24, pos.y + 22),
          new Phaser.Geom.Point(pos.x, pos.y + 40),
          new Phaser.Geom.Point(pos.x - 24, pos.y + 22),
          new Phaser.Geom.Point(pos.x - 30, pos.y - 16),
        ];
        this.moduleVisualsGfx.fillStyle(SECTOR_COLORS[id], 0.08);
        this.moduleVisualsGfx.fillPoints(points, true);
        this.moduleVisualsGfx.lineStyle(4, SECTOR_COLORS[id], 0.62);
        this.moduleVisualsGfx.strokePoints(points, true);
        this.moduleVisualsGfx.lineStyle(3, SECTOR_COLORS[id], 0.52);
        this.moduleVisualsGfx.lineBetween(pos.x - 18, pos.y - 4, pos.x + 18, pos.y - 4);
        this.moduleVisualsGfx.lineBetween(pos.x - 12, pos.y + 10, pos.x + 12, pos.y + 10);
      } else if (id === "core") {
        // Chamber resonance
        this.moduleVisualsGfx.lineStyle(2, 0xffffff, 0.1);
        this.moduleVisualsGfx.strokeCircle(pos.x, pos.y, 32 + Math.sin(this.animTime / 200) * 2);
      }
    }

    // Sectors & Highlights
    this.sectorGfx.clear();
    for (const [id, color] of Object.entries(SECTOR_COLORS) as [StarholdModuleId, number][]) {
        const pos = id === "core" ? { x: centerX, y: centerY } : MODULE_POSITIONS[id];
        const isSelected = selectedModule === id;

        const isPriority = state.recoveryPriority?.moduleId === id;
        const alpha = isSelected ? 0.12 : 0.04;

        if (isPriority) {
          const pPulse = Math.abs(Math.sin(this.animTime / 300)) * 0.1 + 0.1;
          this.sectorGfx.fillStyle(0xe11d48, pPulse);
          this.sectorGfx.fillCircle(pos.x, pos.y, 140);
        }

        this.sectorGfx.fillStyle(color, alpha);
        this.sectorGfx.fillCircle(pos.x, pos.y, isSelected ? 120 : 80);
    }

    if (state.repairChallenge.active) {
      const targetId = state.repairChallenge.sequence[state.repairChallenge.promptIndex] ?? null;
      if (targetId) {
        const pos = targetId === "core" ? { x: centerX, y: centerY } : MODULE_POSITIONS[targetId];
        const accent = targetId === "reactor" ? 0xf43f5e : targetId === "logistics" ? 0xf59e0b : targetId === "sensor" ? 0x22d3ee : 0xdb2777;
        const pulse = Math.abs(Math.sin(this.animTime / 240)) * 0.12 + 0.12;
        this.sectorGfx.fillStyle(accent, pulse * 0.22);
        this.sectorGfx.fillCircle(pos.x, pos.y, targetId === "core" ? 142 : 110);
        this.sectorGfx.lineStyle(4, accent, pulse + 0.18);
        this.sectorGfx.strokeCircle(pos.x, pos.y, targetId === "core" ? 126 : 92);
      }
    }

    // Active Operations GFX & Payoff
    this.activeOpsGfx.clear();
    if (state.activeOperation) {
      const op = state.activeOperation;
      const opColor = op.type === "stabilizeReactor" ? 0x3b82f6 : op.type === "repairModule" ? 0x10b981 : 0xdb2777;
      const opPos = op.moduleId ? MODULE_POSITIONS[op.moduleId] : { x: centerX, y: centerY };

      this.activeOpsGfx.lineStyle(2, opColor, 0.4 + Math.sin(this.animTime / 150) * 0.2);
      const rScale = 45 + Math.sin(this.animTime / 200) * 5;
      this.activeOpsGfx.strokeCircle(opPos.x, opPos.y, rScale);
      this.activeOpsGfx.strokeCircle(opPos.x, opPos.y, rScale + 8);

      if (op.type === "repairModule" && Math.random() > 0.8) {
        this.createSparks(opPos, 0xffffff);
      }

      // During REROUTE_TO_CORE, intensify core visuals
      if (op.type === "rerouteCore") {
        this.activeOpsGfx.lineStyle(1, 0xffffff, 0.2);
        this.activeOpsGfx.strokeCircle(centerX, centerY, 70 + Math.sin(this.animTime / 100) * 10);
      }

      this.lastActiveOpType = op.moduleId || "core";
    } else {
      if (this.lastActiveOpType) {
        // Operation ended - trigger payoff
        this.triggerPayoff(this.lastActiveOpType, "generic");
        this.lastActiveOpType = null;
      }
    }

    // Noise for Aftershock
    this.noiseGfx.clear();
    if (state.threat.aftershock > 0) {
      this.noiseGfx.lineStyle(1, 0xffffff, 0.05);
      for (let i = 0; i < 5; i++) {
        const ly = Phaser.Math.Between(0, SCENE_HEIGHT);
        this.noiseGfx.lineBetween(0, ly, SCENE_WIDTH, ly);
      }
      if (Math.random() > 0.95) this.shake(0.005);
    }

    // Threat Effects
    this.threatGfx.clear();
    if (state.threat.pausedUntilAwake && !state.avatarAwake) {
        this.threatGfx.fillStyle(0x0891b2, 0.05);
        this.threatGfx.fillRect(0, 0, SCENE_WIDTH, SCENE_HEIGHT);
        this.threatGfx.lineStyle(2, 0x22d3ee, 0.12);
        this.threatGfx.strokeRect(10, 10, SCENE_WIDTH - 20, SCENE_HEIGHT - 20);
    } else if (state.lockdown) {
        this.threatGfx.fillStyle(0x000000, 0.5);
        this.threatGfx.fillRect(0, 0, SCENE_WIDTH, SCENE_HEIGHT);
    } else if (state.crisis) {
        const crisisPulse = Math.sin(this.animTime / 200) * 0.1 + 0.15;
        this.threatGfx.fillStyle(0x991b1b, crisisPulse);
        this.threatGfx.fillRect(0, 0, SCENE_WIDTH, SCENE_HEIGHT);
    } else if (state.threat.countdown <= 5 && state.threat.aftershock === 0) {
        const approachProgress = 1 - (state.threat.countdown / Math.max(1, state.threat.totalDuration));
        const dangerProgress = (5 - state.threat.countdown) / 5;
        const color = state.threat.type === "distortionWave" ? 0x7e22ce : state.threat.type === "voidStorm" ? 0x1d4ed8 : 0xea580c;

        if (state.threat.type === "distortionWave") {
          const sweepX = -160 + (SCENE_WIDTH + 320) * Phaser.Math.Clamp(approachProgress, 0, 1);
          this.threatGfx.fillStyle(color, 0.07 + dangerProgress * 0.06);
          this.threatGfx.fillRect(Math.max(-40, sweepX - 160), 0, 220, SCENE_HEIGHT);
          this.threatGfx.lineStyle(12 + dangerProgress * 10, color, 0.28 + dangerProgress * 0.2);
          this.threatGfx.lineBetween(sweepX, 0, sweepX - 130, SCENE_HEIGHT);
          this.threatGfx.lineStyle(3, 0xffffff, 0.18 + dangerProgress * 0.16);
          this.threatGfx.lineBetween(sweepX + 18, 0, sweepX - 112, SCENE_HEIGHT);
        } else if (state.threat.type === "voidStorm") {
          const swirlRadius = 120 + dangerProgress * 120;
          this.threatGfx.fillStyle(color, 0.06 + dangerProgress * 0.05);
          this.threatGfx.fillCircle(centerX, centerY, swirlRadius);
          this.threatGfx.lineStyle(6 + dangerProgress * 6, color, 0.2 + dangerProgress * 0.15);
          this.threatGfx.strokeCircle(centerX, centerY, swirlRadius + Math.sin(this.animTime / 120) * 12);
          this.threatGfx.strokeCircle(centerX, centerY, swirlRadius * 0.7 + Math.cos(this.animTime / 150) * 8);
        } else {
          const rainOffset = (this.animTime / 6) % 120;
          this.threatGfx.lineStyle(4 + dangerProgress * 2, color, 0.18 + dangerProgress * 0.14);
          for (let i = -2; i < 10; i++) {
            const startX = i * 120 + rainOffset;
            this.threatGfx.lineBetween(startX, -40, startX - 80, 130);
          }
        }

        this.threatGfx.lineStyle(6 + dangerProgress * 8, color, 0.14 + dangerProgress * 0.12);
        this.threatGfx.strokeRect(0, 0, SCENE_WIDTH, SCENE_HEIGHT);
    } else if (state.threat.aftershock > 0) {
        const aftershockAlpha = 0.08 + Math.sin(this.animTime / 180) * 0.03;
        const typeColor = state.threat.type === "distortionWave" ? 0xa855f7 : state.threat.type === "voidStorm" ? 0x38bdf8 : 0xfb923c;

        if (state.threat.type === "distortionWave") {
          const settleX = centerX + Math.sin(this.animTime / 140) * 110;
          this.threatGfx.lineStyle(8, typeColor, 0.22);
          this.threatGfx.lineBetween(settleX, 0, settleX - 100, SCENE_HEIGHT);
          this.threatGfx.lineStyle(2, 0xffffff, 0.14);
          this.threatGfx.lineBetween(settleX + 26, 0, settleX - 74, SCENE_HEIGHT);
        } else if (state.threat.type === "voidStorm") {
          this.threatGfx.lineStyle(5, typeColor, 0.18);
          this.threatGfx.strokeCircle(centerX, centerY, 170 + Math.sin(this.animTime / 150) * 10);
        } else {
          this.threatGfx.lineStyle(3, typeColor, 0.16);
          for (let i = 0; i < 6; i++) {
            const x = (i * 170 + (this.animTime / 10)) % 980 - 70;
            this.threatGfx.lineBetween(x, -30, x - 60, 110);
          }
        }

        this.threatGfx.fillStyle(typeColor, aftershockAlpha);
        this.threatGfx.fillRect(0, 0, SCENE_WIDTH, SCENE_HEIGHT);
        this.threatGfx.lineStyle(14, 0x000000, 0.12);
        this.threatGfx.strokeRect(0, 0, SCENE_WIDTH, SCENE_HEIGHT);
    } else if ((state.postWaveSurgeTicks ?? 0) > 0) {
        const surge = state.postWaveSurgeTicks;
        const aggressive = state.postWaveSurgeMode === "aggressive";
        const calmWindow = surge > 30;
        const color = aggressive ? 0xfb7185 : 0x22d3ee;
        const alpha = calmWindow ? 0.018 + Math.sin(this.animTime / 420) * 0.006 : 0.045 + ((30 - surge) / 30) * 0.05;

        this.threatGfx.fillStyle(color, alpha);
        this.threatGfx.fillRect(0, 0, SCENE_WIDTH, SCENE_HEIGHT);
        this.threatGfx.lineStyle(calmWindow ? 1 : 2, color, calmWindow ? 0.06 : 0.16);
        this.threatGfx.strokeCircle(centerX, centerY, calmWindow ? 120 + Math.sin(this.animTime / 500) * 4 : 110 + Math.sin(this.animTime / 180) * 10);
        this.threatGfx.lineStyle(calmWindow ? 1 : 2, aggressive ? 0xfb7185 : 0x8b5cf6, calmWindow ? 0.04 : 0.1);
        this.threatGfx.strokeCircle(centerX, centerY, calmWindow ? 150 + Math.cos(this.animTime / 420) * 6 : 142 + Math.cos(this.animTime / 160) * 12);
    }

    // Core specific
    const isAwakened = state.phase === "awakened";
    const coreColor = isAwakened ? 0xf59e0b : state.resonance > 50 ? 0xf472b6 : 0x06b6d4;
    this.coreCenter.setFillStyle(isAwakened ? 0xffffff : 0xffffff, 0.9);
    this.coreGlow.setFillStyle(coreColor, 0.18 + (state.resonance / 260));
    this.coreGlow.setRadius(84 + (isAwakened ? 18 : 0) + (state.resonance * 0.3));
    this.coreShell.setStrokeStyle(selectedModule === "core" ? 4 : 3, coreColor, selectedModule === "core" ? 0.92 : 0.52);
    this.coreRing.setStrokeStyle(selectedModule === "core" ? 3 : 2, coreColor, selectedModule === "core" ? 0.7 : 0.3);
    this.coreRing.setAngle(this.animTime / 20);
    this.coreGlyph.setColor(selectedModule === "core" ? "#ffffff" : "#ffe4ef");
    this.coreLabel.setColor(selectedModule === "core" ? "#ffffff" : "#ffe4ef");
    this.coreLabel.setAlpha(core.online ? 1 : 0.45);
    this.coreLevel.setColor(selectedModule === "core" ? "#ffffff" : "#ffd1e8");
    this.coreLevel.setAlpha(core.online ? 0.95 : 0.45);
    this.coreLevel.setScale(selectedModule === "core" ? 1.08 : 1);

    if ((state.postWaveSurgeTicks ?? 0) > 0 && state.postWaveSurgeTicks !== this.lastPostWaveSurgeTick) {
      if (state.postWaveSurgeTicks <= 30 && state.postWaveSurgeTicks % 10 === 0) {
        this.playAwakeningTeaser(state.postWaveSurgeTicks, state.postWaveSurgeMode === "aggressive");
      }
      this.lastPostWaveSurgeTick = state.postWaveSurgeTicks;
    } else if ((state.postWaveSurgeTicks ?? 0) === 0) {
      this.lastPostWaveSurgeTick = -1;
    }

    this.activationGfx.clear();
    this.activationGfx.lineStyle(4, 0xdb2777, 0.4);
    this.activationGfx.strokeCircle(centerX, centerY, 45);
    this.activationGfx.lineStyle(4, 0xdb2777, 1);
    this.activationGfx.beginPath();
    this.activationGfx.arc(centerX, centerY, 45, Phaser.Math.DegToRad(-90), Phaser.Math.DegToRad(-90 + (state.resources.activation / 100) * 360), false);
    this.activationGfx.strokePath();

    if (state.resonance > 0 && this.resonanceEmitter) {
      this.resonanceEmitter.emitting = true;
      (this.resonanceEmitter as any).setSpeed?.(50 + state.resonance * 2);
      (this.resonanceEmitter as any).setFrequency?.(Math.max(10, 100 - state.resonance));
    } else if (this.resonanceEmitter) {
      this.resonanceEmitter.emitting = false;
    }

    this.linkGfx.clear();
    this.heatGfx.clear();

    for (const [moduleId, node] of this.moduleNodes) {
      const m = state.modules[moduleId];
      const pos = MODULE_POSITIONS[moduleId];
      const isSelected = selectedModule === moduleId;

      const scale = 0.4 + (m.integrity / 100) * 0.6;
      node.glow.setScale(scale);
      node.glow.setRadius(54 + (isSelected ? 14 : 0));

      let color = 0x4b5563;
      let alpha = 0.18;
      if (m.online) {
        if (m.integrity < 40) {
          color = 0xe11d48;
          alpha = 0.28 + Math.sin(this.animTime / 200) * 0.12;
        } else {
          color = SECTOR_COLORS[moduleId];
          alpha = isSelected ? 0.28 : 0.18;
        }
      }

      node.glow.setFillStyle(color, alpha);
      node.shell.setFillStyle(m.online ? 0x0f172a : 0x111827, isSelected ? 1 : 0.88);
      node.shell.setStrokeStyle(isSelected ? 3 : 2, color, m.online ? 0.78 : 0.35);
      node.ring.setStrokeStyle(isSelected ? 3 : 2, color, isSelected ? 0.62 : 0.24);

      if (moduleId === "reactor") {
        node.ring.setAngle(this.animTime / 15);
      } else if (moduleId === "sensor") {
        node.ring.setScale(1 + Math.sin(this.animTime / 300) * 0.05);
      }

      node.glyph.setColor(m.online ? (isSelected ? "#ffffff" : "#e2e8f0") : "#64748b");
      node.glyph.setAlpha(m.online ? 1 : 0.55);
      node.label.setAlpha(m.online ? 1 : 0.4);
      node.label.setColor(isSelected ? "#67e8f9" : "#dbeafe");
      node.level.setAlpha(m.online ? 0.95 : 0.38);
      node.level.setColor(isSelected ? "#67e8f9" : "#e2e8f0");
      node.level.setScale(isSelected ? 1.08 : 1);

      const isLinked = m.online && !state.lockdown;
      this.linkGfx.lineStyle(2, isLinked ? 0x22d3ee : 0x1e293b, isLinked ? 0.3 : 0.1);
      this.linkGfx.lineBetween(pos.x, pos.y, centerX, centerY);

      if (isLinked && node.energyEmitter) {
        node.energyEmitter.emitting = true;
        const angle = Phaser.Math.Angle.Between(pos.x, pos.y, centerX, centerY);
        const dist = Phaser.Math.Distance.Between(pos.x, pos.y, centerX, centerY);
        node.energyEmitter.setPosition(pos.x, pos.y);
        (node.energyEmitter as any).setAngle?.(Phaser.Math.RadToDeg(angle));
        (node.energyEmitter as any).setSpeed?.({ min: 100, max: 200 });

        if (state.activeOperation?.type === "rerouteCore") {
          (node.energyEmitter as any).setSpeed?.({ min: 300, max: 600 });
        }

        (node.energyEmitter as any).setLifespan?.(dist / ((state.activeOperation?.type === "rerouteCore") ? 0.45 : 0.15));
      } else if (node.energyEmitter) {
        node.energyEmitter.emitting = false;
      }

      if (m.load > 0) {
        const heatColor = m.load >= 90 ? 0xe11d48 : m.load >= 50 ? 0xf59e0b : 0x3b82f6;
        const heatAlpha = (m.load / 100) * 0.5;
        this.heatGfx.lineStyle(2, heatColor, heatAlpha);
        if (m.load >= 90 && Math.sin(this.animTime / 100) > 0) {
            this.heatGfx.lineStyle(3, heatColor, 0.8);
        }
        this.heatGfx.strokeCircle(pos.x, pos.y, 30 + Math.sin(this.animTime / 300) * 2);
      }
    }
  }
}
