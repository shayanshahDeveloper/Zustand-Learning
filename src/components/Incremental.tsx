import { useCounter } from "../store";

const Incremental = () => {
  const { increment, deccrement } = useCounter();

  return (
    <div>
      <button onClick={increment} >Incremnet</button>
      <button onClick={deccrement} >Decrement</button>
    </div>
  );
};

export default Incremental;
