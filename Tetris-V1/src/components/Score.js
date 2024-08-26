import { useEffect, useState } from "react";

export const Score = (props) => {
    const [score, setScore] = useState(props.score);

    useEffect(() => {
        setScore(props.score);
    }, [props.score]);

    return (
        <div>
            <span className="title">Score</span>
            <p className="gameText">{score}</p>
        </div>
    );
}
export default Score;  // Ensure it's exported as default if you're importing it as default

