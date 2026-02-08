import { useEffect } from "react";

export function useGameLoop(callback, isStopped) {
  useEffect(() => {
    if (isStopped) return;

    const id = setInterval(callback, 200);
    return () => clearInterval(id);
  }, [callback, isStopped]);
}
