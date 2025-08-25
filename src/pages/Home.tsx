import React, { useReducer, useState, useEffect, useMemo, useCallback } from "react";
import Counter from "../components/Counter";
import ColorPicker from "../components/ColorPicker";
import TaskManager from "../components/TaskManager";

// Reducer for count
type CountAction = "increment" | "decrement" | "reset";
function countReducer(state: number, action: CountAction) {
  switch (action) {
    case "increment": return state + 1;
    case "decrement": return state - 1;
    case "reset": return 0;
    default: return state;
  }
}

const Home: React.FC = () => {
  const [title, setTitle] = useState("Brian's Kitchen");
  const [count, dispatch] = useReducer(countReducer, 0);

  useEffect(() => { document.title = `Count: ${count}`; }, [count]);

  const doubleCount = useMemo(() => count * 2, [count]);

  const resetTwice = useCallback(() => {
    dispatch("decrement");
    dispatch("decrement");
  }, []);

  return (
    <div>
      <h2>{title}</h2>
      <Counter
        count={count}
        onIncrement={() => dispatch("increment")}
        onDecrement={() => dispatch("decrement")}
        onReset={() => dispatch("reset")}
      />
      <p><strong>Double (useMemo):</strong> {doubleCount}</p>
      <button onClick={resetTwice}>Decrement Twice (useCallback)</button>

      <ColorPicker onChangeTitle={setTitle} />

      <TaskManager />
    </div>
  );
};

export default Home;
