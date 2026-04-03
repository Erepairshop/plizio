import type { GalaxyNode, GalaxyWorldPosition, GalaxyWorldSize } from "./types";

export function toGalaxyPercentX(x: number, worldSize: GalaxyWorldSize): string {
  return `${(x / worldSize.width) * 100}%`;
}

export function toGalaxyPercentY(y: number, worldSize: GalaxyWorldSize): string {
  return `${(y / worldSize.height) * 100}%`;
}

export function getGalaxyNodeAnchorStyle(position: GalaxyWorldPosition, worldSize: GalaxyWorldSize) {
  return {
    left: toGalaxyPercentX(position.x, worldSize),
    top: toGalaxyPercentY(position.y, worldSize),
    transform: "translate(-50%, -50%)",
  };
}

export function getGalaxyCardStyle(node: GalaxyNode, worldSize: GalaxyWorldSize) {
  return {
    left: `calc(${toGalaxyPercentX(node.position.x, worldSize)} + ${node.cardOffset.x}px)`,
    top: `calc(${toGalaxyPercentY(node.position.y, worldSize)} + ${node.cardOffset.y}px)`,
  };
}

export function getGalaxyWorldCanvasStyle(worldSize: GalaxyWorldSize) {
  return {
    minWidth: `${worldSize.width}px`,
    minHeight: `${worldSize.height}px`,
  };
}

export function getGalaxyLinkStyle(from: GalaxyWorldPosition, to: GalaxyWorldPosition) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const distance = Math.hypot(dx, dy);
  const angle = Math.atan2(dy, dx) * (180 / Math.PI);

  return {
    left: `${from.x}px`,
    top: `${from.y}px`,
    width: `${distance}px`,
    transform: `translateY(-50%) rotate(${angle}deg)`,
    transformOrigin: "0 50%",
  };
}
