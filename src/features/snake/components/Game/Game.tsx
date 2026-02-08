import { useSnake } from "../../hooks/useSnake";
import { useGameLoop } from "../../hooks/useGameLoop";
import { useKeyboard } from "../../hooks/useKeyboard";

import { useState } from "react";
import Board from "../Board/Board";
import Score from "../UI/Score";
import "./Game.css";

function Game() {
    const [direction, setDirection] = useState("RIGHT");
    const [isRunning, setIsRunning] = useState(false);

    const {
        food,
        snake,
        moveSnake,
        isGameOver,
        score,
        reset,
        } = useSnake();

    useKeyboard(direction, setDirection);

    useGameLoop(() => {
    moveSnake(direction);
    }, !isRunning || isGameOver);

    return (
        <div className="app">
            <div className="console-wrapper">
                <div className="snake-tab">React Snake Game</div>

                <div className="console">
                    <div className="board-wrapper">
                    <Board snake={snake} food={food} />

                    {isGameOver && (
                        <div className="game-over-overlay">
                            GAME OVER
                        </div>
                    )}
                    </div>

                    <aside className="snake-panel">
                        <p>// use keyboard</p>
                        <p>// arrows to play</p>

                    <div className="score">
                        <Score score={score} />
                    </div>

                    <button
                        className="start"
                        onClick={() => {
                        reset();
                        setIsRunning(true);
                        setDirection("RIGHT");
                        }}
                    >
                        {isGameOver ? "restart" : "start-game"}
                    </button>
                    </aside>
                </div>
            </div>
        </div>
    );
}

export default Game;