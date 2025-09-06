import Incremental from "./components/Incremental";
import { useCounter } from "./store";

const App = () => {
  // you can use this like that
  // const { count, increment, deccrement } = useCounter((state) => state);

  const { count, increment, deccrement } = useCounter(); //or use like that

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={deccrement}>Decrement</button>

      {/* Now using another component and use the funtionlaity of Incre or  Decre */}

      <h2>Incremental Component</h2>
      <Incremental />
    </div>
  );
};

export default App;
