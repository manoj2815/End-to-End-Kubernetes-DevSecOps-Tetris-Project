import { useEffect, useState } from "react";

export const Level = (props) => {
    const [level, setLevel] = useState(props.level);

    useEffect(() => {
        setLevel(props.level);
    }, [props.level])

    return (
        <div>
            <span className="title">Level</span>
            <p className="gameText">{level}</p>
        </div>
    );
}

export default Level;

