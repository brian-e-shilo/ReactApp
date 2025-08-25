import React from "react";

type CounterProps = {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
};

const Counter: React.FC<CounterProps> = ({ count, onIncrement, onDecrement, onReset }) => {
  return (
    <div>
      <h3>Counter: {count}</h3>
      <button onClick={onIncrement}>+1</button>
      <button onClick={onDecrement}>-1</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default Counter;
