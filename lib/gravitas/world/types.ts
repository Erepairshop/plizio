import type { LocalizedString } from "@/lib/gravitas/sim/types";

export type GalaxyNodeType = "resource" | "clan_hub" | "event" | "weekly" | "battle" | "landmark" | "base";

export type GalaxyNodeTone = "default" | "cyan" | "amber" | "emerald";

export type GalaxyPlacementEntityType = GalaxyNodeType | "base";

export interface GalaxyWorldSize {
  width: number;
  height: number;
}

export interface GalaxyWorldPosition {
  x: number;
  y: number;
}

export interface GalaxyCardOffset {
  x: number;
  y: number;
}

export interface GalaxyNodeMotion {
  x: number[];
  y: number[];
  rotate: number[];
}

export interface GalaxyNodeDetail {
  id: string;
  label: LocalizedString;
  value: string | number | LocalizedString;
  tone?: GalaxyNodeTone;
}

export interface GalaxyNode {
  id: string;
  type: GalaxyNodeType;
  variantId?: string;
  materialId?: string;
  title: LocalizedString;
  description: LocalizedString;
  position: GalaxyWorldPosition;
  cardOffset: GalaxyCardOffset;
  radius: number;
  assetSrc: string;
  assetAlt?: LocalizedString;
  assetClassName: string;
  pulseClassName?: string;
  motion: GalaxyNodeMotion;
  motionDuration: number;
  details: GalaxyNodeDetail[];
  footer: LocalizedString;
  mining?: {
    baseYieldPerHour: number;
    baseDurationMinutes: number;
    baseUnitsPerRun: number;
    logisticsLevelBonusPerLevel: number;
  };
}

export interface GalaxyDecorLayer {
  id: string;
  src: string;
  className: string;
}

export interface GalaxyPlacementIssue {
  code: "out_of_bounds" | "overlap";
  nodeId: string;
  relatedNodeId?: string;
  message: string;
}

export interface GalaxyPlacementReport {
  valid: boolean;
  issues: GalaxyPlacementIssue[];
}

export type GalaxySpacingRules = Partial<Record<`${GalaxyPlacementEntityType}:${GalaxyPlacementEntityType}`, number>>;
