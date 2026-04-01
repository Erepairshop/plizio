import * as Phaser from "phaser";
import type { StarholdEventId, StarholdModuleId, StarholdState, StarholdCommand } from "@/lib/gravitas/sim/types";

const MODULE_POSITIONS: Record<StarholdModuleId, { x: number; y: number }> = {
  reactor: { x: 210, y: 128 },
  logistics: { x: 625, y: 140 },
  core: { x: 420, y: 255 },
  sensor: { x: 320, y: 405 },
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
  private root!: Phaser.GameObjects.Container;
  private particleLayer!: Phaser.GameObjects.Container;
  private linkGfx!: Phaser.GameObjects.Graphics;
  private heatGfx!: Phaser.GameObjects.Graphics;
  private activationGfx!: Phaser.GameObjects.Graphics;
  private threatGfx!: Phaser.GameObjects.Graphics;
  private sectorGfx!: Phaser.GameObjects.Graphics;

  private moduleNodes = new Map<
    StarholdModuleId,
    {
      glow: Phaser.GameObjects.Arc;
      shell: Phaser.GameObjects.Arc;
      ring: Phaser.GameObjects.Arc;
      glyph: Phaser.GameObjects.Text;
      hitbox: Phaser.GameObjects.Arc;
      label: Phaser.GameObjects.Text;
      energyEmitter?: Phaser.GameObjects.Particles.ParticleEmitter;
    }
  >();

  private coreGlow!: Phaser.GameObjects.Arc;
  private coreShell!: Phaser.GameObjects.Arc;
  private coreRing!: Phaser.GameObjects.Arc;
  private coreCenter!: Phaser.GameObjects.Arc;
  private coreGlyph!: Phaser.GameObjects.Text;
  private resonanceEmitter?: Phaser.GameObjects.Particles.ParticleEmitter;

  private stars: { node: Phaser.GameObjects.Arc; speed: number }[] = [];
  private meteors: Phaser.GameObjects.Arc[] = [];
  private animTime = 0;
  private currentFocus: StarholdModuleId | null = null;
  private lastIntegrityMap = new Map<StarholdModuleId, number>();

  constructor(options: SceneOptions = {}) {
    super({ key: "GravitasBaseScene" });
    this.onSelectModule = options.onSelectModule;
  }

  create() {
    const width = 840;
    const height = 510;

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

    this.particleLayer = this.add.container(0, 0);
    this.root = this.add.container(0, 0);

    const centerX = 420;
    const centerY = 255;

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

      const glow = this.add.circle(pos.x, pos.y, 54, SECTOR_COLORS[moduleId], 0.12);
      const ring = this.add.circle(pos.x, pos.y, 36, 0x000000, 0).setStrokeStyle(2, SECTOR_COLORS[moduleId], 0.25);
      const shell = this.add.circle(pos.x, pos.y, 28, 0x0f172a, 0.96).setStrokeStyle(2, SECTOR_COLORS[moduleId], 0.45);
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

      hitbox.on("pointerdown", () => this.onSelectModule?.(moduleId));

      const emitter = this.add.particles(0, 0, 'dot', {
        scale: { start: 0.3, end: 0 },
        alpha: { start: 0.5, end: 0 },
        lifespan: 1000,
        blendMode: 'ADD',
        emitting: false
      });

      this.root.add([glow, ring, shell, glyph, hitbox, label]);
      this.moduleNodes.set(moduleId, { glow, shell, ring, glyph, hitbox, label, energyEmitter: emitter });
    }
  }

  private resetMeteor(meteor: Phaser.GameObjects.Arc) {
    const side = Phaser.Math.Between(0, 3);
    const width = 840;
    const height = 510;
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
      if (s.node.x > 840) s.node.x = 0;
    });

    const pulse = Math.sin(this.animTime / 500) * 0.1 + 1;
    this.coreCenter.setScale(pulse);
  }

  focusOnModule(moduleId: StarholdModuleId) {
    if (this.currentFocus === moduleId) return;
    this.currentFocus = moduleId;

    const pos = MODULE_POSITIONS[moduleId];
    const zoom = moduleId === "core" ? 1.04 : 1.26;

    this.cameras.main.pan(pos.x, pos.y, 600, 'Power2');
    this.cameras.main.zoomTo(zoom, 600, 'Power2');
  }

  triggerActionFeedback(command: StarholdCommand) {
    switch (command.type) {
      case "SCAVENGE":
        this.createBeam(MODULE_POSITIONS.logistics, { x: 840, y: Phaser.Math.Between(0, 510) }, 0x6366f1);
        break;
      case "STABILIZE_REACTOR":
        this.flashNode("reactor", 0xf59e0b);
        break;
      case "REPAIR_MODULE":
        this.createSparks(MODULE_POSITIONS[command.moduleId], 0x10b981);
        break;
      case "REROUTE_TO_CORE":
        this.createEnergyPulse(MODULE_POSITIONS.logistics, MODULE_POSITIONS.core);
        break;
    }
  }

  private createBeam(from: {x: number, y: number}, to: {x: number, y: number}, color: number) {
    const beam = this.add.graphics();
    beam.lineStyle(2, color, 1);
    beam.lineBetween(from.x, from.y, to.x, to.y);
    beam.setAlpha(0);

    this.tweens.add({
      targets: beam,
      alpha: 1,
      duration: 100,
      yoyo: true,
      hold: 200,
      onComplete: () => beam.destroy()
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

  private flashNode(moduleId: StarholdModuleId, color: number) {
    const node = this.moduleNodes.get(moduleId);
    const centerX = 420;
    const centerY = 255;
    const x = moduleId === "core" ? centerX : MODULE_POSITIONS[moduleId].x;
    const y = moduleId === "core" ? centerY : MODULE_POSITIONS[moduleId].y;

    const flash = this.add.circle(x, y, 40, color, 0.8);
    this.tweens.add({
      targets: flash,
      scale: 2,
      alpha: 0,
      duration: 400,
      onComplete: () => flash.destroy()
    });
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

  private createEnergyPulse(from: {x: number, y: number}, to: {x: number, y: number}) {
    const pulse = this.add.circle(from.x, from.y, 8, 0xffffff, 1);
    this.tweens.add({
      targets: pulse,
      x: to.x,
      y: to.y,
      duration: 400,
      ease: 'Power2',
      onComplete: () => {
        pulse.destroy();
        this.flashNode("core", 0xdb2777);
      }
    });
  }

  private shake() {
    this.cameras.main.shake(300, 0.01);
  }

  private flashImpact() {
    const f = this.add.rectangle(420, 255, 840, 510, 0xffffff, 0.2);
    f.setScrollFactor(0);
    this.tweens.add({
      targets: f,
      alpha: 0,
      duration: 300,
      onComplete: () => f.destroy()
    });
  }

  syncState(state: StarholdState, selectedModule: StarholdModuleId) {
    this.focusOnModule(selectedModule);

    const { reactor, logistics, sensor, core } = state.modules;
    const centerX = 420;
    const centerY = 255;

    for (const [moduleId, m] of Object.entries(state.modules) as [StarholdModuleId, any][]) {
        const lastInt = this.lastIntegrityMap.get(moduleId) ?? m.integrity;
        if (m.integrity < lastInt - 5) {
            this.shake();
            if (m.integrity < lastInt - 15) this.flashImpact();
        }
        this.lastIntegrityMap.set(moduleId, m.integrity);
    }

    this.sectorGfx.clear();
    for (const [id, color] of Object.entries(SECTOR_COLORS) as [StarholdModuleId, number][]) {
        const pos = id === "core" ? { x: centerX, y: centerY } : MODULE_POSITIONS[id];
        const isSelected = selectedModule === id;
        this.sectorGfx.fillStyle(color, isSelected ? 0.08 : 0.03);
        this.sectorGfx.fillCircle(pos.x, pos.y, isSelected ? 120 : 80);
    }

    this.threatGfx.clear();
    if (state.lockdown) {
        this.threatGfx.fillStyle(0x000000, 0.4);
        this.threatGfx.fillRect(0, 0, 840, 510);
    } else if (state.crisis) {
        const crisisPulse = Math.sin(this.animTime / 200) * 0.1 + 0.1;
        this.threatGfx.fillStyle(0x991b1b, crisisPulse);
        this.threatGfx.fillRect(0, 0, 840, 510);
    } else if (state.threat.countdown <= 5 && state.threat.aftershock === 0) {
        const fogProgress = (5 - state.threat.countdown) / 5;
        const color = state.threat.type === "distortionWave" ? 0x7e22ce : state.threat.type === "voidStorm" ? 0x1d4ed8 : 0xea580c;
        this.threatGfx.lineStyle(40 * fogProgress, color, 0.2 * fogProgress);
        this.threatGfx.strokeRect(0, 0, 840, 510);
    } else if (state.threat.aftershock > 0) {
        this.threatGfx.lineStyle(20, 0x000000, 0.3);
        this.threatGfx.strokeRect(0, 0, 840, 510);
    }

    const isAwakened = state.phase === "awakened";
    const coreColor = isAwakened ? 0xf59e0b : state.resonance > 50 ? 0xf472b6 : 0x06b6d4;
    this.coreCenter.setFillStyle(isAwakened ? 0xffffff : 0xffffff, 0.9);
    this.coreGlow.setFillStyle(coreColor, 0.18 + (state.resonance / 260));
    this.coreGlow.setRadius(84 + (isAwakened ? 18 : 0) + (state.resonance * 0.3));
    this.coreShell.setStrokeStyle(selectedModule === "core" ? 4 : 3, coreColor, selectedModule === "core" ? 0.92 : 0.52);
    this.coreRing.setStrokeStyle(selectedModule === "core" ? 3 : 2, coreColor, selectedModule === "core" ? 0.7 : 0.3);
    this.coreGlyph.setColor(selectedModule === "core" ? "#ffffff" : "#ffe4ef");

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
      node.shell.setFillStyle(m.online ? 0x0f172a : 0x111827, isSelected ? 1 : 0.94);
      node.shell.setStrokeStyle(isSelected ? 3 : 2, color, m.online ? 0.78 : 0.35);
      node.ring.setStrokeStyle(isSelected ? 3 : 2, color, isSelected ? 0.62 : 0.24);
      node.ring.setScale(1 + Math.sin(this.animTime / 900) * 0.02);
      node.glyph.setColor(m.online ? (isSelected ? "#ffffff" : "#e2e8f0") : "#64748b");
      node.glyph.setAlpha(m.online ? 1 : 0.55);
      node.label.setAlpha(m.online ? 1 : 0.4);
      node.label.setColor(isSelected ? "#67e8f9" : "#dbeafe");

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
        (node.energyEmitter as any).setLifespan?.(dist / 0.15);
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
