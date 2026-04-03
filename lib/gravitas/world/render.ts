import type { GalaxyNode, GalaxyWorldPosition, GalaxyWorldSize } from "./types";

export function toGalaxyPercentX(x: number, worldSize: GalaxyWorldSize): string {
  return `${(x / worldSize.width) * 100}%`;
}

export function toGalaxyPercentY(y: number, worldSize: GalaxyWorldSize): string {
  return `${(y / worldSize.height) * 100}%`;
}

export function getGalaxyNodeAnchorStyle(
  position: GalaxyWorldPosition,
  worldSize: GalaxyWorldSize,
  offset: GalaxyWorldPosition = { x: 0, y: 0 },
) {
  return {
    left: toGalaxyPercentX(position.x + offset.x, worldSize),
    top: toGalaxyPercentY(position.y + offset.y, worldSize),
    transform: "translate(-50%, -50%)",
  };
}

export function getGalaxyCardStyle(
  node: GalaxyNode,
  worldSize: GalaxyWorldSize,
  offset: GalaxyWorldPosition = { x: 0, y: 0 },
) {
  return {
    left: `calc(${toGalaxyPercentX(node.position.x + offset.x, worldSize)} + ${node.cardOffset.x}px)`,
    top: `calc(${toGalaxyPercentY(node.position.y + offset.y, worldSize)} + ${node.cardOffset.y}px)`,
  };
}

export function getGalaxyWorldCanvasStyle(worldSize: GalaxyWorldSize) {
  return {
    width: `${worldSize.width}px`,
    height: `${worldSize.height}px`,
  };
}

export function getGalaxyLinkStyle(
  from: GalaxyWorldPosition,
  to: GalaxyWorldPosition,
  offset: GalaxyWorldPosition = { x: 0, y: 0 },
) {
  const fromX = from.x + offset.x;
  const fromY = from.y + offset.y;
  const toX = to.x + offset.x;
  const toY = to.y + offset.y;
  const dx = toX - fromX;
  const dy = toY - fromY;
  const distance = Math.hypot(dx, dy);
  const angle = Math.atan2(dy, dx) * (180 / Math.PI);

  return {
    left: `${fromX}px`,
    top: `${fromY}px`,
    width: `${distance}px`,
    transform: `translateY(-50%) rotate(${angle}deg)`,
    transformOrigin: "0 50%",
  };
}
