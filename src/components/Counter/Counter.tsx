import { useReducer } from 'react'
import styles from './Counter.module.scss'

interface State {
    count: number;
}

interface IncrementAction {
    type: 'INCREMENT'
}

interface DecrementAction {
    type: 'DECREMENT'
}

interface ResetAction {
    type: 'RESET'
}

type Action = IncrementAction | DecrementAction | ResetAction;

const initialState: State = { count: 0 };


const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1
            };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
}


const Counter: React.FC = () => {

    const [state, dispatch] = useReducer<React.Reducer<State, Action>>(reducer, initialState);

    return (
        <div className={styles.Counter}>
            <h1 className={styles.header}>Счетчик:</h1>
            <div className={styles.count}>{state.count}</div>
            <button
                className={styles.btn_blue}
                onClick={() => dispatch({ type: 'DECREMENT' })}
            >- Минус</button>
            <button
                className={styles.btn_red}
                onClick={() => dispatch({ type: 'INCREMENT' })}
            >Плюс +</button>
            <div>
                <button
                    className={styles.btn_reset}
                    onClick={() => dispatch({ type: 'RESET' })}
                >Reset</button>
            </div>
        </div>
    )
}

export default Counter