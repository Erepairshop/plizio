import type { GalaxyNode, GalaxySpacingRules, GalaxyWorldPosition, GalaxyWorldSize } from "./types";
import { canPlaceGalaxyNode, findGalaxySpawnPosition } from "./placement";

export function removeGalaxyNode(nodes: GalaxyNode[], nodeId: string): GalaxyNode[] {
  return nodes.filter((node) => node.id !== nodeId);
}

export function relocateGalaxyNode(
  nodes: GalaxyNode[],
  nodeId: string,
  nextPosition: GalaxyWorldPosition,
  worldSize: GalaxyWorldSize,
  options?: {
    spacingRules?: GalaxySpacingRules;
  },
): { ok: boolean; nodes: GalaxyNode[] } {
  const targetNode = nodes.find((node) => node.id === nodeId);
  if (!targetNode) return { ok: false, nodes };

  const updatedNode: GalaxyNode = {
    ...targetNode,
    position: nextPosition,
  };

  if (!canPlaceGalaxyNode(updatedNode, nodes, worldSize, { ignoreNodeId: nodeId, spacingRules: options?.spacingRules })) {
    return { ok: false, nodes };
  }

  return {
    ok: true,
    nodes: nodes.map((node) => (node.id === nodeId ? updatedNode : node)),
  };
}

export function spawnGalaxyNode(
  nodes: GalaxyNode[],
  draft: Omit<GalaxyNode, "position">,
  worldSize: GalaxyWorldSize,
  options?: {
    spacingRules?: GalaxySpacingRules;
    attempts?: number;
  },
): { ok: boolean; node: GalaxyNode | null; nodes: GalaxyNode[] } {
  const position = findGalaxySpawnPosition(draft, nodes, worldSize, options);
  if (!position) {
    return { ok: false, node: null, nodes };
  }

  const node: GalaxyNode = {
    ...draft,
    position,
  };

  return {
    ok: true,
    node,
    nodes: [...nodes, node],
  };
}
