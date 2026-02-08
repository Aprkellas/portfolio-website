import { GRID_SIZE } from "./constants";

export function randomPosition(exclude = []) {
  while (true) {
    const pos = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };

    const conflict = exclude.some(
      p => p.x === pos.x && p.y === pos.y
    );

    if (!conflict) return pos;
  }
}
