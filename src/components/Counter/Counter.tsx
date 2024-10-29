import { Dispatch, SetStateAction } from 'react';
import styles from './Counter.module.scss'

interface CounterProps {
    count: number;
    setCount: Dispatch<SetStateAction<number>>
}

const Counter: React.FC<CounterProps> = ({ count, setCount }) => {
    return (
        <div className={styles.Counter}>
            <h1 className={styles.header}>Счетчик:</h1>
            <div className={styles.count}>{count}</div>
            <button
                className={styles.btn_blue}
                onClick={() => setCount((count) => count - 1)}
            >- Минус</button>
            <button
                className={styles.btn_red}
                onClick={() => setCount((count) => count + 1)}
            >Плюс +</button>
        </div>
    )
}

export default Counter