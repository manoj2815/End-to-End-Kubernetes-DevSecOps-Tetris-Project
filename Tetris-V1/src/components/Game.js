import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Next from "./Next.js";
import Score from "./Score.js";
import Level from "./Level.js";
import { createMatrix } from "../helpers/Helpers";
import styles from "./Game.module.css";
import { emptyPiece } from "../tetris/Piece";

export const Game = ({ tetris }) => {
    const [state, setState] = useState(tetris.state || {});

    useEffect(() => {
        const handleStateChange = (_state) => {
            console.log("State updated:", _state); // Debugging line
            setState(_state);
        };
        tetris.onStateChange(handleStateChange);
        return () => tetris.offStateChange(handleStateChange);
    }, [tetris]);

    const isStarted = state.isStarted && state.isStarted();
    const isRunning = state.isRunning && state.isRunning();
    console.log("isStarted:", isStarted, "isRunning:", isRunning); // Debugging line

    const visibleMatrix = state.visibleMatrix ? createMatrix(state.visibleMatrix(), styles) : null;
    const nextPiece = state.nextPiece ? state.nextPiece() : emptyPiece();
    const score = state.score ? state.score() : 0;
    const level = state.level ? state.level() : 0;

    return (
        <div className={styles.content}>
            <div className={styles.header}>React Tetris</div>
            <div className={styles.matrix}>
                {visibleMatrix}
                {state.isGameOver && state.isGameOver() && <div className={styles.gameOver}><p>Game Over</p></div>}
            </div>
            <div className={styles.controls}>
                <Next next={nextPiece} />
                <Score score={score} />
                <Level level={level} />
                <div className={styles.controlsButtons}>
                    <button onClick={tetris.start} className={`${styles.btn} ${styles.btnNew}`}>New Game</button>
                    {isStarted && (
                        <button
                            onClick={isRunning ? tetris.pause : tetris.resume}
                            className={`${styles.btn} ${isRunning ? styles.btnPause : styles.btnNew}`}
                        >
                            {isRunning ? 'Pause' : 'Resume'}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

Game.propTypes = {
    tetris: PropTypes.shape({
        state: PropTypes.object,
        onStateChange: PropTypes.func.isRequired,
        offStateChange: PropTypes.func,
        start: PropTypes.func.isRequired,
        pause: PropTypes.func,
        resume: PropTypes.func
    }).isRequired
};

export default Game;

