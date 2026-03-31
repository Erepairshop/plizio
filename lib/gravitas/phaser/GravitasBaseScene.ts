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
  private ringGfx!: Phaser.GameObjects.Graphics;
  private linkGfx!: Phaser.GameObjects.Graphics;
  private hudGfx!: Phaser.GameObjects.Graphics;
  private warningGfx!: Phaser.GameObjects.Graphics;
  private scarsGfx!: Phaser.GameObjects.Graphics;
  private moduleNodes = new Map<
    StarholdModuleId,
    {
      glow: Phaser.GameObjects.Arc;
      hitbox: Phaser.GameObjects.Arc;
      label: Phaser.GameObjects.Text;
      value: Phaser.GameObjects.Text;
      anomalyGfx: Phaser.GameObjects.Graphics;
    }
  >();
  private coreGlow!: Phaser.GameObjects.Arc;
  private coreShell!: Phaser.GameObjects.Arc;
  private orbitSpark!: Phaser.GameObjects.Arc;
  private phaseText!: Phaser.GameObjects.Text;
  private resourceText!: Phaser.GameObjects.Text;
  private eventText!: Phaser.GameObjects.Text;
  private twinkleStars: { node: Phaser.GameObjects.Arc; phase: number; speed: number; scale: number }[] = [];
  private animTime = 0;
  private lastResonance = 0;
  private lastEntropy = 0;
  private lastThreatCountdown = 0;
  private lastThreatAftershock = 0;
  private lastThreatType: string = "";
  private lastThreatFlags = { fortified: false, dampened: false, intercepted: false };
  private isCrisis = false;
  private wasAwake = false;

  constructor(options: SceneOptions = {}) {
    super({ key: "GravitasBaseScene" });
    this.onSelectModule = options.onSelectModule;
  }

  create() {
    const width = Number(this.scale.width);
    const height = Number(this.scale.height);

    this.cameras.main.setBackgroundColor("#060b1b");

    const bg = this.add.graphics();
    bg.fillGradientStyle(0x071427, 0x071427, 0x02050c, 0x02050c, 1);
    bg.fillRect(0, 0, width, height);

    const stars = this.add.graphics();
    stars.fillStyle(0x94dfff, 0.28);
    for (let i = 0; i < 54; i += 1) {
      stars.fillCircle(
        Phaser.Math.Between(18, width - 18),
        Phaser.Math.Between(18, height - 18),
        Phaser.Math.Between(1, 2)
      );
    }

    for (let i = 0; i < 12; i += 1) {
      const star = this.add.circle(
        Phaser.Math.Between(40, width - 40),
        Phaser.Math.Between(40, height - 40),
        Phaser.Math.Between(1, 2),
        Phaser.Math.Between(0x7dd3fc, 0xc4b5fd),
        0.16
      );
      this.twinkleStars.push({
        node: star,
        phase: Math.random() * Math.PI * 2,
        speed: 0.6 + Math.random() * 0.9,
        scale: 0.7 + Math.random() * 0.7,
      });
    }

    this.root = this.add.container(0, 0);
    this.ringGfx = this.add.graphics();
    this.linkGfx = this.add.graphics();
    this.hudGfx = this.add.graphics();
    this.warningGfx = this.add.graphics();
    this.scarsGfx = this.add.graphics();
    this.root.add([this.ringGfx, this.linkGfx, this.hudGfx, this.warningGfx, this.scarsGfx]);

    const centerX = 420;
    const centerY = 255;

    this.coreGlow = this.add.circle(centerX, centerY, 72, 0x23d3ee, 0.12);
    this.coreShell = this.add.circle(centerX, centerY, 42, 0xf8fafc, 0.14);
    this.orbitSpark = this.add.circle(centerX + 120, centerY - 12, 5, 0xf472b6, 0.85);
    this.root.add([this.coreGlow, this.coreShell, this.orbitSpark]);

    for (const [moduleId, pos] of Object.entries(MODULE_POSITIONS) as [StarholdModuleId, { x: number; y: number }][]) {
      const glow = this.add.circle(pos.x, pos.y, 26, 0x4b5563, 0.18);
      const hitbox = this.add.circle(pos.x, pos.y, 34, 0xffffff, 0.001).setInteractive({ useHandCursor: true });
      const anomalyGfx = this.add.graphics();
      const label = this.add
        .text(pos.x, pos.y - 40, moduleId.toUpperCase(), {
          fontFamily: "Arial",
          fontSize: "14px",
          color: "#dbeafe",
          fontStyle: "700",
        })
        .setOrigin(0.5);
      const value = this.add
        .text(pos.x, pos.y + 34, "--", {
          fontFamily: "Arial",
          fontSize: "12px",
          color: "#9fb3c8",
        })
        .setOrigin(0.5);
      hitbox.on("pointerdown", () => {
        this.onSelectModule?.(moduleId);
      });
      this.root.add([glow, hitbox, anomalyGfx, label, value]);
      this.moduleNodes.set(moduleId, { glow, hitbox, label, value, anomalyGfx });
    }

    this.phaseText = this.add.text(22, 18, "", {
      fontFamily: "Arial",
      fontSize: "13px",
      color: "#7dd3fc",
      fontStyle: "700",
    });

    this.resourceText = this.add.text(22, height - 54, "", {
      fontFamily: "Arial",
      fontSize: "13px",
      color: "#dbeafe",
    });

    this.eventText = this.add.text(width - 22, 18, "", {
      fontFamily: "Arial",
      fontSize: "13px",
      color: "#fda4af",
      fontStyle: "700",
    }).setOrigin(1, 0);

    this.drawStaticFrame();
    this.drawHudPanels(width, height);
  }

  syncState(state: StarholdState, selectedModule: StarholdModuleId, activeEventId: StarholdEventId | null) {
    if (!this.ringGfx || !this.linkGfx || !this.root || !this.phaseText || !this.resourceText || !this.eventText) {
      return;
    }

    this.lastThreatCountdown = state.threat.countdown;
    this.lastThreatAftershock = state.threat.aftershock;
    this.lastThreatType = state.threat.type;
    this.lastThreatFlags = {
      fortified: state.threat.fortified,
      dampened: state.threat.dampened,
      intercepted: state.threat.intercepted
    };
    this.isCrisis = state.crisis;
    this.lastEntropy = state.entropy;

    const awake = state.avatarAwake;
    if (awake && !this.wasAwake) {
      // Awakening CLIMAX!
      this.cameras.main.flash(800, 255, 255, 255);
      this.cameras.main.shake(1000, 0.02);
    }
    this.wasAwake = awake;

    this.drawRings();
    this.drawLinks(state, selectedModule, activeEventId, state.resonance);
    this.drawScars(state);

    const voidIntensity = state.marks.voidEcho > 8 ? 1.0 : state.marks.voidEcho / 10;
    const resonanceFactor = state.resonance / 100;

    // Shop items visual overrides
    const hasCyanGlow = state.progression.unlockedItems.includes("cyan_glow");

    let coreAccent = activeEventId === "signalPulse" ? 0xf472b6 : state.marks.voidEcho > 5 ? 0x818cf8 : 0x23d3ee;
    if (hasCyanGlow && activeEventId !== "signalPulse" && state.marks.voidEcho <= 5) {
      coreAccent = 0x06b6d4; // Deep Cyan
    }

    this.coreGlow.setRadius(awake ? 90 : activeEventId === "signalPulse" ? 84 : 72 + state.marks.voidEcho + (state.resonance * 0.4));
    this.coreGlow.setFillStyle(awake ? 0xf472b6 : coreAccent, awake ? 0.2 : activeEventId === "signalPulse" ? 0.18 : 0.12 + (voidIntensity * 0.1) + (resonanceFactor * 0.2));

    let shellColor = state.marks.voidEcho > 8 ? 0xeef2ff : 0xf8fafc;
    if (hasCyanGlow && state.marks.voidEcho <= 8) {
      shellColor = 0xcffafe; // Cyan tinted white
    }

    this.coreShell.setFillStyle(awake ? 0xf472b6 : shellColor, awake ? 0.55 : 0.14 + (resonanceFactor * 0.1));
    for (const [moduleId, node] of this.moduleNodes) {
      const module = state.modules[moduleId];
      const isSelected = selectedModule === moduleId;

      const anomalies = state.anomalies.filter(a =>
        (moduleId === "sensor" && a.id === "sensorGhost") ||
        (moduleId === "logistics" && a.id === "materialEntropy") ||
        (moduleId === "core" && a.id === "voidLeak") ||
        (moduleId === "reactor" && a.id === "coreTremor")
      );

      const eventColor =
        activeEventId === "powerFluctuation" && moduleId === "reactor"
          ? 0xfb7185
          : activeEventId === "materialBottleneck" && moduleId === "logistics"
            ? 0xf59e0b
            : activeEventId === "signalPulse" && moduleId === "core"
              ? 0xf472b6
              : null;

      const color = eventColor ?? (module.online ? (anomalies.length > 0 ? 0xf87171 : 0x22d3ee) : 0x6b7280);
      node.glow.setFillStyle(isSelected ? 0xf472b6 : color, isSelected ? 0.36 : module.online ? 0.32 : 0.16);
      node.glow.setRadius(isSelected ? 34 : module.online ? 30 : 24);
      node.label.setColor(isSelected ? "#fce7f3" : module.online ? (anomalies.length > 0 ? "#fecaca" : "#ecfeff") : "#94a3b8");
      node.value.setText(`${module.integrity}% | ${module.load}%`);
      node.value.setColor(isSelected ? "#f9a8d4" : eventColor ? "#fde68a" : module.online ? (anomalies.length > 0 ? "#fca5a5" : "#67e8f9") : "#94a3b8");

      node.anomalyGfx.clear();
      if (anomalies.length > 0) {
        node.anomalyGfx.lineStyle(2, 0xf87171, 0.8);
        const pos = MODULE_POSITIONS[moduleId];
        node.anomalyGfx.strokeCircle(pos.x, pos.y, 42);
        // Draw glitch lines
        const glitchCount = 3 + (this.lastThreatAftershock > 0 ? 3 : 0);
        for(let i=0; i<glitchCount; i++) {
           const angle = Math.random() * Math.PI * 2;
           const r = 38 + Math.random() * 8;
           node.anomalyGfx.lineStyle(1, 0xf87171, 0.5);
           node.anomalyGfx.lineBetween(
             pos.x + Math.cos(angle) * r,
             pos.y + Math.sin(angle) * r,
             pos.x + Math.cos(angle) * (r+10 + Math.random() * 5),
             pos.y + Math.sin(angle) * (r+10 + Math.random() * 5)
           );
        }
      }
    }

    this.phaseText.setText(`PHASE ${state.phase.toUpperCase()}  |  TICK ${state.tick}`);
    this.resourceText.setText(
      `PWR ${state.resources.power}  MAT ${state.resources.materials}  STB ${state.resources.stability}  ACT ${state.resources.activation}  VD ${state.marks.voidEcho}  RES ${Math.floor(state.resonance)}  EN ${state.entropy}`
    );
    this.eventText.setText(activeEventId ? `ALERT ${activeEventId.toUpperCase()}` : "");
  }

  update(_time: number, delta: number) {
    this.animTime += delta / 1000;

    const entropyFactor = this.lastEntropy / 100 || 0;
    const entropyFlicker = Math.random() < (entropyFactor * 0.15) ? 0.4 : 1.0;

    // Warning flash for Crisis
    this.warningGfx.clear();
    if (this.isCrisis) {
      const alpha = 0.05 + Math.sin(this.animTime * 3) * 0.05;
      this.warningGfx.fillStyle(0xf43f5e, alpha);
      this.warningGfx.fillRect(0, 0, 840, 510);
    }

    // Shake based on resonance + entropy + threat imminent
    const resonanceShake = this.lastResonance > 75
       ? (Math.random() - 0.5) * ((this.lastResonance - 75) / 5)
       : 0;
    const entropyShake = entropyFactor > 0.6
       ? (Math.random() - 0.5) * (entropyFactor * (this.lastEntropy > 85 ? 12 : 4))
       : 0;

    // Add aggressive flicker for critical entropy
    const critEntropyFlicker = this.lastEntropy > 90 && Math.random() < 0.1 ? 0.2 : 1.0;

    const threatShake = this.lastThreatCountdown <= 3 && this.lastThreatCountdown > 0
       ? (Math.random() - 0.5) * (6 - this.lastThreatCountdown)
       : 0;
    const aftershockShake = this.lastThreatAftershock > 0
       ? (Math.random() - 0.5) * (this.lastThreatAftershock * 2)
       : 0;

    const swayX = Math.sin(this.animTime * 0.24) * 2.2 + resonanceShake + entropyShake + threatShake + aftershockShake;
    const swayY = Math.cos(this.animTime * 0.18) * 1.4 + resonanceShake + entropyShake + threatShake + aftershockShake;
    this.root.setPosition(swayX, swayY);
    this.root.setAlpha(entropyFlicker * critEntropyFlicker);

    const pulse = 1 + Math.sin(this.animTime * 1.8) * 0.025;
    const shellPulse = 1 + Math.cos(this.animTime * 1.4) * 0.018;
    this.coreGlow.setScale(pulse, pulse);
    this.coreShell.setScale(shellPulse, shellPulse);

    const orbitRadius = 124;
    this.orbitSpark.setPosition(
      420 + Math.cos(this.animTime * 0.75) * orbitRadius,
      255 + Math.sin(this.animTime * 0.75) * 30
    );
    this.orbitSpark.setAlpha(0.6 + Math.sin(this.animTime * 2.2) * 0.2);

    for (const star of this.twinkleStars) {
      const twinkle = 0.06 + Math.sin(this.animTime * star.speed + star.phase) * 0.08;
      star.node.setAlpha(Phaser.Math.Clamp(0.08 + twinkle, 0.05, 0.26));
      star.node.setScale(star.scale + Math.sin(this.animTime * (star.speed + 0.4) + star.phase) * 0.05);
    }

    this.eventText.setAlpha(0.7 + Math.sin(this.animTime * 3.2) * 0.18);
    this.phaseText.setAlpha(0.9 + Math.sin(this.animTime * 1.3) * 0.05);
  }

  private drawStaticFrame() {
    const frame = this.add.graphics();
    frame.lineStyle(1, 0x2b4664, 0.7);
    frame.strokeRoundedRect(10, 10, 820, 490, 26);
    frame.lineStyle(1, 0x18314b, 0.65);
    frame.strokeRoundedRect(22, 22, 796, 466, 22);
  }

  private drawHudPanels(width: number, height: number) {
    this.hudGfx.clear();
    this.hudGfx.fillStyle(0x020814, 0.52);
    this.hudGfx.fillRoundedRect(16, 10, 246, 42, 16);
    this.hudGfx.fillRoundedRect(width - 274, 10, 258, 42, 16);
    this.hudGfx.fillStyle(0x020814, 0.45);
    this.hudGfx.fillRoundedRect(16, height - 64, 438, 46, 16);
    this.hudGfx.lineStyle(1, 0x345679, 0.35);
    this.hudGfx.strokeRoundedRect(16, 10, 246, 42, 16);
    this.hudGfx.strokeRoundedRect(width - 274, 10, 258, 42, 16);
    this.hudGfx.strokeRoundedRect(16, height - 64, 438, 46, 16);
  }

  private drawRings() {
    this.ringGfx.clear();
    this.ringGfx.lineStyle(2, 0x143750, 0.9);
    this.ringGfx.strokeCircle(420, 255, 118);
    this.ringGfx.lineStyle(1, 0x1c5d83, 0.85);
    this.ringGfx.strokeCircle(420, 255, 170);
    this.ringGfx.lineStyle(1, 0x23d3ee, 0.08);
    this.ringGfx.strokeCircle(420, 255, 240);

    if (this.lastThreatCountdown <= 5 && this.lastThreatCountdown > 0) {
      const alpha = 0.1 + (Math.sin(this.animTime * 4) + 1) * 0.1;
      this.ringGfx.lineStyle(3, 0xf43f5e, alpha);
      this.ringGfx.strokeCircle(420, 255, 280 + Math.sin(this.animTime * 2) * 10);
    }

    if (this.lastThreatAftershock > 0) {
      const alpha = 0.05 + (Math.random() * 0.1);
      this.ringGfx.lineStyle(2, 0xf59e0b, alpha);
      this.ringGfx.strokeCircle(420, 255, 260 + Math.random() * 20);
    }

    // Draw active defenses
    if (this.lastThreatFlags.fortified) {
      this.ringGfx.lineStyle(2, 0x10b981, 0.4);
      this.ringGfx.strokeCircle(420, 255, 130);
    }
    if (this.lastThreatFlags.dampened) {
      this.ringGfx.lineStyle(2, 0x6366f1, 0.4);
      this.ringGfx.strokeCircle(420, 255, 180);
    }
    if (this.lastThreatFlags.intercepted) {
      this.ringGfx.lineStyle(2, 0xf59e0b, 0.4);
      this.ringGfx.strokeCircle(420, 255, 250);
    }
  }


  private drawLinks(state: StarholdState, selectedModule: StarholdModuleId, activeEventId: StarholdEventId | null, resonance: number = 0) {
    this.linkGfx.clear();
    this.lastResonance = resonance;
    this.lastEntropy = state.entropy;

    for (const [moduleId, pos] of Object.entries(MODULE_POSITIONS) as [StarholdModuleId, { x: number; y: number }][]) {
      const module = state.modules[moduleId];
      const isSelected = moduleId === selectedModule;
      const eventColor =
        activeEventId === "powerFluctuation" && moduleId === "reactor"
          ? 0xfb7185
          : activeEventId === "materialBottleneck" && moduleId === "logistics"
            ? 0xf59e0b
            : activeEventId === "signalPulse" && moduleId === "core"
              ? 0xf472b6
              : null;

      const isTransferring = resonance > 0 && (moduleId === "reactor" || isSelected);

      this.linkGfx.lineStyle(
        isSelected ? 4 : module.online ? 3 : 2,
        isSelected ? 0xf472b6 : eventColor ?? (module.online ? (isTransferring ? 0xf472b6 : 0x22d3ee) : 0x475569),
        isSelected ? 0.7 : module.online ? (isTransferring ? 0.8 : 0.6) : 0.35
      );
      this.linkGfx.lineBetween(420, 255, pos.x, pos.y);

      if (isTransferring) {
        // Energy pulse towards core
        const t = (this.animTime * (1.5 + resonance / 50)) % 1;
        const px = pos.x + (420 - pos.x) * t;
        const py = pos.y + (255 - pos.y) * t;
        this.linkGfx.fillStyle(0xffffff, 0.6 + (resonance / 200));
        this.linkGfx.fillCircle(px, py, 2 + (resonance / 30));
      }
    }
  }

  private drawScars(state: StarholdState) {
    this.scarsGfx.clear();
    for (const [moduleId, pos] of Object.entries(MODULE_POSITIONS) as [StarholdModuleId, { x: number; y: number }][]) {
      const module = state.modules[moduleId];
      if (module.integrity < 70) {
        const severity = (70 - module.integrity) / 70;
        const sparkCount = Math.floor(severity * 5) + 1;

        for (let i = 0; i < sparkCount; i++) {
          const angle = Math.random() * Math.PI * 2;
          const dist = 28 + Math.random() * 12;
          const sx = pos.x + Math.cos(angle) * dist;
          const sy = pos.y + Math.sin(angle) * dist;

          this.scarsGfx.lineStyle(1, 0xfde047, 0.8);
          this.scarsGfx.lineBetween(sx, sy, sx + (Math.random() - 0.5) * 6, sy + (Math.random() - 0.5) * 6);
        }

        if (module.integrity < 40) {
          // Add a dark 'burn' patch
          this.scarsGfx.fillStyle(0x000000, 0.3);
          this.scarsGfx.fillCircle(pos.x + 10, pos.y + 10, 15);
        }
      }
    }
  }
}
