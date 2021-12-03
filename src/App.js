import "./App.scss";
import React, { useReducer, useRef } from "react";

const initState = {
  count: 0,
};
function reducerFunction(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducerFunction, initState);

  function plusOne() {
    dispatch({ type: "INCREMENT" });
  }
  function minusOne() {
    dispatch({ type: "DECREMENT" });
  }
  return (
    <div className="App">
      <header className="App-header">
        <h2>useReducer example</h2>
        <h2>Count: {state.count}</h2>

        <button onClick={plusOne}>Plus one</button>
        <button onClick={minusOne}>Minus one</button>
      </header>
    </div>
  );
}

export default App;
