import Cell from "../Cell/Cell";
import { GRID_SIZE } from "../../utils/constants";
import "./Board.css";

function Board({ snake, food }) {
  return (
    <div className="board">
      {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => {
        const x = i % GRID_SIZE;
        const y = Math.floor(i / GRID_SIZE);

        return (
          <Cell
            key={i}
            x={x}
            y={y}
            snake={snake}
            food={food}
          />
        );
      })}
    </div>
  );
}
export default Board;

