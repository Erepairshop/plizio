export type MapNodeType = "meteorite" | "pve_base" | "anomaly";
export type PveArchetypeId =
  | "synthoid_sentinel"
  | "korgath_drone_hive"
  | "drex_scrap_foundry"
  | "velari_mirror_array"
  | "noma_void_engine";

/** Lifecycle state of a map node */
export type MapNodeState =
  | "undiscovered"  // spawned but not yet scanned
  | "discovered"    // player has inspected / scanned
  | "contested"     // fleet dispatched or combat in progress
  | "occupied"      // player controls this node
  | "depleted"      // resources exhausted
  | "expired";      // TTL ran out (removed on next maintenance)

/** Priority tier — higher = more urgent / valuable */
export type NodePriority = 1 | 2 | 3 | 4 | 5;

/** Risk tier — higher = more dangerous */
export type NodeRisk = 1 | 2 | 3 | 4 | 5;

/** Intel depth — how much the player knows about the node */
export type IntelDepth = 0 | 1 | 2 | 3;

/** Deterministic loot table entry (seeded at spawn time) */
export interface NodeYieldEntry {
  /** Resource key or galaxy material id */
  resourceId: string;
  /** Base amount before modifiers */
  amount: number;
}

/** Node action that the player attempted */
export type NodeActionId = "inspect" | "collect" | "attack" | "dispatch" | "recall" | "focus";

/** Log of a completed action on this node */
export interface NodeActionLog {
  action: NodeActionId;
  tick: number;
  success: boolean;
}

export interface MapNode {
  id: string;
  type: MapNodeType;
  x: number;
  y: number;
  stealthLevel: number;
  expiresAt: number;
  isOccupiedBy: string | null;

  // --- Meta fields (seeded at spawn) ---
  /** Lifecycle state */
  nodeState: MapNodeState;
  /** Priority rating 1-5 */
  priority: NodePriority;
  /** Risk rating 1-5 */
  risk: NodeRisk;
  /** Deterministic yield table */
  expectedYield: NodeYieldEntry[];
  /** Intel depth 0=unknown, 3=full intel */
  intelDepth: IntelDepth;
  /** Seed used for deterministic outcomes on this node */
  nodeSeed: number;
  /** How many times this node has been collected from */
  harvestCount: number;
  /** Max harvests before depletion (0 = unlimited for anomalies) */
  maxHarvests: number;
  /** Defence strength for pve_base nodes (0 for others) */
  defenceRating: number;
  /** Visible combat identity and modifiers for generated PvE bases */
  pveArchetypeId?: PveArchetypeId;
  /** Instability for anomaly nodes (0-100, higher = more dangerous) */
  instability: number;
  /** Completed action log */
  actionLog: NodeActionLog[];
  /** Cooldown: tick when next action is allowed */
  cooldownUntil: number;
  /** Actions currently available for this node */
  recommendedActions?: NodeActionId[];
}

export interface NodeActionFeedback {
  actionType: NodeActionId | "fleet_arrival" | "fleet_return" | "node_expired" | "expedition_launch";
  success: boolean;
  summary: import("../types").LocalizedString;
  rewardSummary?: string;
  riskSummary?: string;
  cooldownSummary?: string;
  etaSummary?: string;
  nextSuggestedAction?: NodeActionId | "wait" | "abandon" | "monitor" | "reinforce";
  nodeStateAfter?: MapNodeState;
  fleetStateAfter?: FleetMovementStatus;
}

export type FleetMovementStatus = "traveling_to" | "returning";

export type FleetMissionType = "collect" | "attack" | "inspect";

export type FleetOutcome = "victory" | "defeat" | "partial_success" | "collected" | "inspected";

export interface FleetMovement {
  id: string;
  targetNodeId: string;
  departureTime: number; // in ticks
  arrivalTime: number; // in ticks
  travelTimeTicks: number; // original duration for return trip
  status: FleetMovementStatus;
  /** What mission is the fleet performing at the node */
  missionType: FleetMissionType;
  /** Antimatter spent on this trip */
  fuelSpent: number;
  /** Fleet weight (affects fuel cost) */
  weight: number;
  /** Composition snapshot of units */
  composition: Record<string, number>;
  /** Loot gathered to be returned */
  payload?: Partial<Record<keyof import("../types").StarholdResources | import("../../world/mission").GalaxyMaterialId, number>>;
  /** Units lost during the mission */
  casualties?: {
    killed: Record<string, number>;
    wounded: Record<string, number>;
  };
  /** The outcome of the mission at the node */
  outcome?: FleetOutcome;
  /** Short summary of what happened at arrival for UI */
  arrivalState?: import("../types").LocalizedString;
  /** Whether this trip was boosted by a chronoCore */
  boosted?: boolean;
}

export type CompletedFleetSnapshot = FleetMovement;

/** Compact preview data for the UI info card */
export interface NodePreview {
  nodeId: string;
  type: MapNodeType;
  nodeState: MapNodeState;
  priority: NodePriority;
  risk: NodeRisk;
  expectedYield: NodeYieldEntry[];
  intelDepth: IntelDepth;
  fuelCost: number;
  travelTimeTicks: number;
  boostedTravelTimeTicks: number;
  chronoCoreCount: number;
  threatRating: number;
  occupancy: "free" | "occupied" | "contested" | "depleted";
  recommendedActions: NodeActionId[];
  cooldownRemaining: number;
}

export interface GalaxyMapState {
  baseCoordinates: { x: number; y: number };
  transientNodes: MapNode[];
  activeFleets: FleetMovement[];
}
