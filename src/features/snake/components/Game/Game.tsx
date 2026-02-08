import { useSnake } from "../../hooks/useSnake";
import { useGameLoop } from "../../hooks/useGameLoop";
import { useKeyboard } from "../../hooks/useKeyboard";
import { useLang  } from "../../../../context/LanguageContext";

import { useState } from "react";
import Board from "../Board/Board";
import Score from "../UI/Score";
import "./Game.css";

function Game() {
    const { t } = useLang();

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
                <div className="snake-tab">{t.snake.title}</div>

                <div className="console">
                    <div className="board-wrapper">
                    <Board snake={snake} food={food} />

                    {isGameOver && (
                        <div className="game-over-overlay">
                            {t.snake.gameOver}
                        </div>
                    )}
                    </div>

                    <aside className="snake-panel">
                        <p>{t.snake.instructions1}</p>
                        <p>{t.snake.instructions2}</p>

                    <div className="score">
                        <Score score={score} lang={t} />
                    </div>

                    <button
                        className="start"
                        onClick={() => {
                        reset();
                        setIsRunning(true);
                        setDirection("RIGHT");
                        }}
                    >
                        {isGameOver ? t.snake.restart : t.snake.start}
                    </button>
                    </aside>
                </div>
            </div>
        </div>
    );
}

export default Game;