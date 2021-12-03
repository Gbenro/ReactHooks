import "./App.scss";
import React, { useReducer } from "react";
import { observer, useLocalStore } from "mobx-react-lite";

const App = observer(() => {
  const store = useLocalStore(() => ({
    count: 1,
    addOne() {
      store.count++;
    },
    subtractOne() {
      store.count--;
    },
  }));
  function addOneHandle() {
    store.addOne();
  }

  function subtractOneHandle() {
    store.subtractOne();
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Count:{store.count}</h1>
        <button onClick={addOneHandle}> Add one</button>
        <button onClick={subtractOneHandle}> Minus one</button>
      </header>
    </div>
  );
});

export default App;
