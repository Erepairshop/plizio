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
  private moduleNodes = new Map<
    StarholdModuleId,
    {
      glow: Phaser.GameObjects.Arc;
      hitbox: Phaser.GameObjects.Arc;
      label: Phaser.GameObjects.Text;
      value: Phaser.GameObjects.Text;
    }
  >();
  private coreGlow!: Phaser.GameObjects.Arc;
  private coreShell!: Phaser.GameObjects.Arc;
  private phaseText!: Phaser.GameObjects.Text;
  private resourceText!: Phaser.GameObjects.Text;
  private eventText!: Phaser.GameObjects.Text;

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

    this.root = this.add.container(0, 0);
    this.ringGfx = this.add.graphics();
    this.linkGfx = this.add.graphics();
    this.root.add([this.ringGfx, this.linkGfx]);

    const centerX = 420;
    const centerY = 255;

    this.coreGlow = this.add.circle(centerX, centerY, 72, 0x23d3ee, 0.12);
    this.coreShell = this.add.circle(centerX, centerY, 42, 0xf8fafc, 0.14);
    this.root.add([this.coreGlow, this.coreShell]);

    for (const [moduleId, pos] of Object.entries(MODULE_POSITIONS) as [StarholdModuleId, { x: number; y: number }][]) {
      const glow = this.add.circle(pos.x, pos.y, 26, 0x4b5563, 0.18);
      const hitbox = this.add.circle(pos.x, pos.y, 34, 0xffffff, 0.001).setInteractive({ useHandCursor: true });
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
      this.root.add([glow, hitbox, label, value]);
      this.moduleNodes.set(moduleId, { glow, hitbox, label, value });
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
  }

  syncState(state: StarholdState, selectedModule: StarholdModuleId, activeEventId: StarholdEventId | null) {
    this.drawRings();
    this.drawLinks(state, selectedModule, activeEventId);

    const awake = state.avatarAwake;
    const coreAccent = activeEventId === "signalPulse" ? 0xf472b6 : 0x23d3ee;
    this.coreGlow.setRadius(awake ? 90 : activeEventId === "signalPulse" ? 84 : 72);
    this.coreGlow.setFillStyle(awake ? 0xf472b6 : coreAccent, awake ? 0.2 : activeEventId === "signalPulse" ? 0.18 : 0.12);
    this.coreShell.setFillStyle(awake ? 0xf472b6 : 0xf8fafc, awake ? 0.55 : 0.14);

    for (const [moduleId, node] of this.moduleNodes) {
      const module = state.modules[moduleId];
      const isSelected = selectedModule === moduleId;
      const eventColor =
        activeEventId === "powerFluctuation" && moduleId === "reactor"
          ? 0xfb7185
          : activeEventId === "materialBottleneck" && moduleId === "logistics"
            ? 0xf59e0b
            : activeEventId === "signalPulse" && moduleId === "core"
              ? 0xf472b6
              : null;
      const color = eventColor ?? (module.online ? 0x22d3ee : 0x6b7280);
      node.glow.setFillStyle(isSelected ? 0xf472b6 : color, isSelected ? 0.36 : module.online ? 0.32 : 0.16);
      node.glow.setRadius(isSelected ? 34 : module.online ? 30 : 24);
      node.label.setColor(isSelected ? "#fce7f3" : module.online ? "#ecfeff" : "#94a3b8");
      node.value.setText(`${module.integrity}% | ${module.load}%`);
      node.value.setColor(isSelected ? "#f9a8d4" : eventColor ? "#fde68a" : module.online ? "#67e8f9" : "#94a3b8");
    }

    this.phaseText.setText(`PHASE ${state.phase.toUpperCase()}  |  TICK ${state.tick}`);
    this.resourceText.setText(
      `PWR ${state.resources.power}   MAT ${state.resources.materials}   STB ${state.resources.stability}   ACT ${state.resources.activation}`
    );
    this.eventText.setText(activeEventId ? `ALERT ${activeEventId.toUpperCase()}` : "");
  }

  private drawStaticFrame() {
    const frame = this.add.graphics();
    frame.lineStyle(1, 0x2b4664, 0.7);
    frame.strokeRoundedRect(10, 10, 820, 490, 26);
    frame.lineStyle(1, 0x18314b, 0.65);
    frame.strokeRoundedRect(22, 22, 796, 466, 22);
  }

  private drawRings() {
    this.ringGfx.clear();
    this.ringGfx.lineStyle(2, 0x143750, 0.9);
    this.ringGfx.strokeCircle(420, 255, 118);
    this.ringGfx.lineStyle(1, 0x1c5d83, 0.85);
    this.ringGfx.strokeCircle(420, 255, 170);
    this.ringGfx.lineStyle(1, 0x23d3ee, 0.22);
    this.ringGfx.strokeCircle(420, 255, 215);
  }

  private drawLinks(state: StarholdState, selectedModule: StarholdModuleId, activeEventId: StarholdEventId | null) {
    this.linkGfx.clear();

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
      this.linkGfx.lineStyle(
        isSelected ? 4 : module.online ? 3 : 2,
        isSelected ? 0xf472b6 : eventColor ?? (module.online ? 0x22d3ee : 0x475569),
        isSelected ? 0.7 : module.online ? 0.6 : 0.35
      );
      this.linkGfx.lineBetween(420, 255, pos.x, pos.y);
    }
  }
}
