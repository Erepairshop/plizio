import { GALAXY_SPACING_RULES, GALAXY_WORLD_PADDING } from "./constants";
import type {
  GalaxyNode,
  GalaxyPlacementEntityType,
  GalaxyPlacementIssue,
  GalaxyPlacementReport,
  GalaxySpacingRules,
  GalaxyWorldPosition,
  GalaxyWorldSize,
} from "./types";

function spacingRuleKey(a: GalaxyPlacementEntityType, b: GalaxyPlacementEntityType) {
  return `${a}:${b}` as const;
}

export function getGalaxyDistance(a: GalaxyWorldPosition, b: GalaxyWorldPosition): number {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return Math.hypot(dx, dy);
}

export function getRequiredGalaxySpacing(
  a: GalaxyPlacementEntityType,
  b: GalaxyPlacementEntityType,
  radiusA: number,
  radiusB: number,
  rules: GalaxySpacingRules = GALAXY_SPACING_RULES,
): number {
  const direct = rules[spacingRuleKey(a, b)];
  const reverse = rules[spacingRuleKey(b, a)];
  return direct ?? reverse ?? radiusA + radiusB + 120;
}

export function isGalaxyNodeWithinBounds(
  node: Pick<GalaxyNode, "position" | "radius">,
  worldSize: GalaxyWorldSize,
  padding = GALAXY_WORLD_PADDING,
): boolean {
  const minX = padding + node.radius;
  const maxX = worldSize.width - padding - node.radius;
  const minY = padding + node.radius;
  const maxY = worldSize.height - padding - node.radius;
  return node.position.x >= minX && node.position.x <= maxX && node.position.y >= minY && node.position.y <= maxY;
}

export function canPlaceGalaxyNode(
  candidate: GalaxyNode,
  nodes: GalaxyNode[],
  worldSize: GalaxyWorldSize,
  options?: {
    ignoreNodeId?: string;
    padding?: number;
    spacingRules?: GalaxySpacingRules;
  },
): boolean {
  if (!isGalaxyNodeWithinBounds(candidate, worldSize, options?.padding)) return false;

  for (const node of nodes) {
    if (node.id === candidate.id || node.id === options?.ignoreNodeId) continue;
    const requiredSpacing = getRequiredGalaxySpacing(candidate.type, node.type, candidate.radius, node.radius, options?.spacingRules);
    if (getGalaxyDistance(candidate.position, node.position) < requiredSpacing) {
      return false;
    }
  }

  return true;
}

export function validateGalaxyNodes(
  nodes: GalaxyNode[],
  worldSize: GalaxyWorldSize,
  options?: {
    padding?: number;
    spacingRules?: GalaxySpacingRules;
  },
): GalaxyPlacementReport {
  const issues: GalaxyPlacementIssue[] = [];

  for (let i = 0; i < nodes.length; i += 1) {
    const node = nodes[i];

    if (!isGalaxyNodeWithinBounds(node, worldSize, options?.padding)) {
      issues.push({
        code: "out_of_bounds",
        nodeId: node.id,
        message: `Node ${node.id} is outside the allowed galaxy bounds.`,
      });
    }

    for (let j = i + 1; j < nodes.length; j += 1) {
      const other = nodes[j];
      const requiredSpacing = getRequiredGalaxySpacing(node.type, other.type, node.radius, other.radius, options?.spacingRules);
      if (getGalaxyDistance(node.position, other.position) < requiredSpacing) {
        issues.push({
          code: "overlap",
          nodeId: node.id,
          relatedNodeId: other.id,
          message: `Nodes ${node.id} and ${other.id} are too close for ${node.type}/${other.type}.`,
        });
      }
    }
  }

  return {
    valid: issues.length === 0,
    issues,
  };
}

export function createGalaxySpawnCandidates(
  worldSize: GalaxyWorldSize,
  options?: {
    columns?: number;
    rows?: number;
    padding?: number;
  },
): GalaxyWorldPosition[] {
  const columns = options?.columns ?? 14;
  const rows = options?.rows ?? 8;
  const padding = options?.padding ?? GALAXY_WORLD_PADDING;
  const width = worldSize.width - padding * 2;
  const height = worldSize.height - padding * 2;
  const stepX = width / Math.max(1, columns - 1);
  const stepY = height / Math.max(1, rows - 1);

  const candidates: GalaxyWorldPosition[] = [];
  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      const staggerOffset = row % 2 === 0 ? 0 : stepX * 0.35;
      candidates.push({
        x: Math.round(padding + column * stepX + staggerOffset),
        y: Math.round(padding + row * stepY),
      });
    }
  }

  return candidates.filter((candidate) => (
    candidate.x >= padding &&
    candidate.x <= worldSize.width - padding &&
    candidate.y >= padding &&
    candidate.y <= worldSize.height - padding
  ));
}

export function findGalaxySpawnPosition(
  draft: Omit<GalaxyNode, "position">,
  nodes: GalaxyNode[],
  worldSize: GalaxyWorldSize,
  options?: {
    attempts?: number;
    padding?: number;
    spacingRules?: GalaxySpacingRules;
    candidates?: GalaxyWorldPosition[];
  },
): GalaxyWorldPosition | null {
  const attempts = options?.attempts ?? 120;
  const padding = options?.padding ?? GALAXY_WORLD_PADDING;
  const candidates = options?.candidates ?? createGalaxySpawnCandidates(worldSize, { padding });

  for (const candidatePosition of candidates) {
    const candidate: GalaxyNode = {
      ...draft,
      position: candidatePosition,
    };

    if (canPlaceGalaxyNode(candidate, nodes, worldSize, { padding, spacingRules: options?.spacingRules })) {
      return candidate.position;
    }
  }

  for (let attempt = 0; attempt < attempts; attempt += 1) {
    const x = Math.round(padding + draft.radius + Math.random() * (worldSize.width - padding * 2 - draft.radius * 2));
    const y = Math.round(padding + draft.radius + Math.random() * (worldSize.height - padding * 2 - draft.radius * 2));

    const candidate: GalaxyNode = {
      ...draft,
      position: { x, y },
    };

    if (canPlaceGalaxyNode(candidate, nodes, worldSize, { padding, spacingRules: options?.spacingRules })) {
      return candidate.position;
    }
  }

  return null;
}
