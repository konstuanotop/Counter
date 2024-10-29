import { useState } from 'react';
import styles from './App.module.scss'
import Counter from './components/Counter/Counter';

function App() {

  const [count, setCount] = useState(0)

  return (
    <div className={styles.App}>
      <Counter count={count} setCount={setCount} />
    </div>
  );
}

export default App;
