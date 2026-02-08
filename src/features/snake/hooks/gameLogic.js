export function getNextHead(head, direction) {
  switch (direction) {
    case "UP":
      return { ...head, y: head.y - 1 };
    case "DOWN":
      return { ...head, y: head.y + 1 };
    case "LEFT":
      return { ...head, x: head.x - 1 };
    case "RIGHT":
      return { ...head, x: head.x + 1 };
    default:
      return head;
  }
}

export function checkCollision(head, snake) {
  return snake.some(
    segment => segment.x === head.x && segment.y === head.y
  );
}
