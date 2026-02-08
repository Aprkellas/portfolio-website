import './Cell.css';

function Cell({ x, y, snake, food }) {
  const isSnake = snake.some(p => p.x === x && p.y === y);
  const isFood = food.x === x && food.y === y;

  return (
    <div
      className={`cell ${isSnake ? "snake" : ""} ${isFood ? "food" : ""}`}
    />
  );
}
export default Cell;
