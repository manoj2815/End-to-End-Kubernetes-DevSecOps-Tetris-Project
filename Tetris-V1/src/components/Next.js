import { useEffect, useState } from "react";
import styles from "./Next.module.css";
import { createMatrix } from "../helpers/Helpers";

export const Next = (props) => {
    // Initialize 'next' with a safe fallback if 'props.next' is not available
    const [next, setNext] = useState(props.next || { tetrominos: () => [] });

    useEffect(() => {
        // Update 'next' safely with fallback if 'props.next' is undefined
        setNext(props.next || { tetrominos: () => [] });
    }, [props.next]);

    // Safely access 'tetrominos' function, falling back to an empty array if not available
    const tetrominos = next?.tetrominos ? next.tetrominos() : [];
    // Create matrix only if 'tetrominos' has elements
    const matrix = tetrominos.length > 0 ? createMatrix(tetrominos) : null;

    return (
        <div>
            <div className={styles.title}>
                <span>Next</span>
            </div>
            <div className={styles.matrix}>
                {matrix}
            </div>
        </div>
    );
}

export default Next;

