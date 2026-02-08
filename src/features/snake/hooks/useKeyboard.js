import { useEffect } from "react";

export function useKeyboard(direction, onDirectionChange) {
  useEffect(() => {
    const opposite = {
      UP: "DOWN",
      DOWN: "UP",
      LEFT: "RIGHT",
      RIGHT: "LEFT",
    };

    const handleKeyDown = (e) => {
      const map = {
        ArrowUp: "UP",
        ArrowDown: "DOWN",
        ArrowLeft: "LEFT",
        ArrowRight: "RIGHT",
      };

      const next = map[e.key];
      if (!next || opposite[next] === direction) return;

      onDirectionChange(next);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [direction, onDirectionChange]);
}
