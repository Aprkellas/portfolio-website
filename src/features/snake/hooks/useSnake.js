import { useState } from "react";
import { randomPosition } from "../utils/helpers";
import { GRID_SIZE } from "../utils/constants";

const INITIAL_SNAKE = [
  { x: 10, y: 10 },
  { x: 9, y: 10 },
];

export function useSnake() {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(randomPosition(INITIAL_SNAKE));
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  function moveSnake(direction) {
    setSnake(prev => {
      if (isGameOver) return prev;

      const head = prev[0];
      const next = { ...head };

      switch (direction) {
        case "UP": next.y -= 1; break;
        case "DOWN": next.y += 1; break;
        case "LEFT": next.x -= 1; break;
        case "RIGHT": next.x += 1; break;
      }

      if (
        next.x < 0 ||
        next.y < 0 ||
        next.x >= GRID_SIZE ||
        next.y >= GRID_SIZE
      ) {
        setIsGameOver(true);
        return prev;
      }

      if (prev.some(p => p.x === next.x && p.y === next.y)) {
        setIsGameOver(true);
        return prev;
      }

      const ateFood = next.x === food.x && next.y === food.y;
      const newSnake = ateFood
        ? [next, ...prev]
        : [next, ...prev.slice(0, -1)];

      if (ateFood) {
        setScore(s => s + 1);
        setFood(randomPosition(newSnake));
      }

      return newSnake;
    });
  }

  function reset() {
    setSnake(INITIAL_SNAKE);
    setFood(randomPosition(INITIAL_SNAKE));
    setScore(0);
    setIsGameOver(false);
  }

  return {
    snake,
    food,
    score,
    moveSnake,
    isGameOver,
    reset,
  };
}
