import * as Phaser from "phaser";
import type { StarholdEventId, StarholdModuleId, StarholdState } from "@/lib/gravitas/sim/types";

const MODULE_POSITIONS: Record<StarholdModuleId, { x: number; y: number }> = {
  reactor: { x: 210, y: 128 },
  logistics: { x: 625, y: 140 },
  core: { x: 420, y: 255 },
  sensor: { x: 320, y: 405 },
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
  
  private moduleNodes = new Map<
    StarholdModuleId,
    {
      glow: Phaser.GameObjects.Arc;
      hitbox: Phaser.GameObjects.Arc;
      label: Phaser.GameObjects.Text;
      energyEmitter?: Phaser.GameObjects.Particles.ParticleEmitter;
    }
  >();
  
  private coreGlow!: Phaser.GameObjects.Arc;
  private coreCenter!: Phaser.GameObjects.Arc;
  private resonanceEmitter?: Phaser.GameObjects.Particles.ParticleEmitter;
  
  private stars: { node: Phaser.GameObjects.Arc; speed: number }[] = [];
  private meteors: Phaser.GameObjects.Arc[] = [];
  private animTime = 0;

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

    this.threatGfx = this.add.graphics();
    this.linkGfx = this.add.graphics();
    this.heatGfx = this.add.graphics();
    this.activationGfx = this.add.graphics();
    
    this.particleLayer = this.add.container(0, 0);
    this.root = this.add.container(0, 0);

    const centerX = 420;
    const centerY = 255;

    // Core
    this.coreGlow = this.add.circle(centerX, centerY, 60, 0xdb2777, 0.2);
    this.coreCenter = this.add.circle(centerX, centerY, 30, 0xffffff, 0.8);
    this.root.add([this.coreGlow, this.coreCenter]);

    // Resonance Emitter
    const resonanceParticles = this.add.particles(centerX, centerY, 'resonance', {
        frame: 0,
        scale: { start: 0.2, end: 0 },
        alpha: { start: 0.6, end: 0 },
        lifespan: 1000,
        speed: { min: 50, max: 150 },
        emitting: false
    });
    // Create simple texture for particles if not exists, but Phaser 3.60+ can use graphics
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

      const glow = this.add.circle(pos.x, pos.y, 24, 0x4b5563, 0.3);
      const hitbox = this.add.circle(pos.x, pos.y, 36, 0xffffff, 0.001).setInteractive({ useHandCursor: true });
      const label = this.add.text(pos.x, pos.y + 40, moduleId.toUpperCase(), {
        fontFamily: "Inter, Arial",
        fontSize: "10px",
        fontStyle: "bold",
        color: "#ffffff",
      }).setOrigin(0.5);

      hitbox.on("pointerdown", () => this.onSelectModule?.(moduleId));

      const emitter = this.add.particles(0, 0, 'dot', {
        scale: { start: 0.3, end: 0 },
        alpha: { start: 0.5, end: 0 },
        lifespan: 1000,
        blendMode: 'ADD',
        emitting: false
      });

      this.root.add([glow, hitbox, label]);
      this.moduleNodes.set(moduleId, { glow, hitbox, label, energyEmitter: emitter });
    }
  }

  private resetMeteor(meteor: Phaser.GameObjects.Arc) {
    const side = Phaser.Math.Between(0, 3); // 0: top, 1: right, 2: bottom, 3: left
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

    // Star drift
    this.stars.forEach(s => {
      s.node.x += s.speed;
      if (s.node.x > 840) s.node.x = 0;
    });

    // Global animations
    const pulse = Math.sin(this.animTime / 500) * 0.1 + 1;
    this.coreCenter.setScale(pulse);
  }

  syncState(state: StarholdState, selectedModule: StarholdModuleId) {
    const { reactor, logistics, sensor, core } = state.modules;
    const centerX = 420;
    const centerY = 255;

    // Update Background / Threat Fog
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

    // Core Visualization
    const isAwakened = state.phase === "awakened";
    const coreColor = isAwakened ? 0xf59e0b : state.resonance > 50 ? 0xf472b6 : 0x06b6d4;
    this.coreCenter.setFillStyle(isAwakened ? 0xffffff : 0xffffff, 0.9);
    this.coreGlow.setFillStyle(coreColor, 0.3 + (state.resonance / 200));
    this.coreGlow.setRadius(60 + (isAwakened ? 20 : 0) + (state.resonance * 0.3));

    // Activation Ring
    this.activationGfx.clear();
    this.activationGfx.lineStyle(4, 0xdb2777, 0.4);
    this.activationGfx.strokeCircle(centerX, centerY, 45);
    this.activationGfx.lineStyle(4, 0xdb2777, 1);
    this.activationGfx.beginPath();
    this.activationGfx.arc(centerX, centerY, 45, Phaser.Math.DegToRad(-90), Phaser.Math.DegToRad(-90 + (state.resources.activation / 100) * 360), false);
    this.activationGfx.strokePath();

    // Resonance Particles
    if (state.resonance > 0 && this.resonanceEmitter) {
      this.resonanceEmitter.emitting = true;
      (this.resonanceEmitter as any).setSpeed?.(50 + state.resonance * 2);
      (this.resonanceEmitter as any).setFrequency?.(Math.max(10, 100 - state.resonance));
    } else if (this.resonanceEmitter) {
      this.resonanceEmitter.emitting = false;
    }

    // Links and Modules
    this.linkGfx.clear();
    this.heatGfx.clear();

    for (const [moduleId, node] of this.moduleNodes) {
      const m = state.modules[moduleId];
      const pos = MODULE_POSITIONS[moduleId];
      const isSelected = selectedModule === moduleId;

      // Size based on integrity
      const scale = 0.4 + (m.integrity / 100) * 0.6;
      node.glow.setScale(scale);
      node.glow.setRadius(24 + (isSelected ? 4 : 0));

      // Color based on status
      let color = 0x4b5563; // Offline/Default
      let alpha = 0.3;
      if (m.online) {
        if (m.integrity < 40) {
          color = 0xe11d48; // Damaged red
          alpha = 0.4 + Math.sin(this.animTime / 200) * 0.2;
        } else {
          color = 0x22d3ee; // Healthy cyan
          alpha = 0.5;
        }
      }
      node.glow.setFillStyle(color, alpha);
      node.label.setAlpha(m.online ? 1 : 0.4);
      node.label.setColor(isSelected ? "#22d3ee" : "#ffffff");

      // Connection lines and energy flow
      const isLinked = m.online && !state.lockdown;
      this.linkGfx.lineStyle(2, isLinked ? 0x22d3ee : 0x1e293b, isLinked ? 0.3 : 0.1);
      // Phaser Graphics doesn't support setLineDash — skip dashed lines
      
      this.linkGfx.lineBetween(pos.x, pos.y, centerX, centerY);

      if (isLinked && node.energyEmitter) {
        node.energyEmitter.emitting = true;
        const angle = Phaser.Math.Angle.Between(pos.x, pos.y, centerX, centerY);
        const dist = Phaser.Math.Distance.Between(pos.x, pos.y, centerX, centerY);
        node.energyEmitter.setPosition(pos.x, pos.y);
        (node.energyEmitter as any).setAngle?.(Phaser.Math.RadToDeg(angle));
        (node.energyEmitter as any).setSpeed?.({ min: 100, max: 200 });
        (node.energyEmitter as any).setLifespan?.(dist / 0.15); // Adjust lifespan to reach core
      } else if (node.energyEmitter) {
        node.energyEmitter.emitting = false;
      }

      // Heat rings (Load)
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
