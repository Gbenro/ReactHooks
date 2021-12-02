import "./App.scss";
import React, { useState, useMemo } from "react";
import Child from "./components/child";
function App() {
  const [i, setI] = useState(0);

  function onClickHandle() {
    setI(i + 1);
  }

  const memoChild = useMemo(() => {
    return <Child />;
  }, [i]);
  return (
    <div className="App">
      <header className="App-header">
        <h2>useMemo</h2>
        <h2>i: {i}</h2>
        <button onClick={onClickHandle}>Increment i</button>
        <h3>Normal render</h3>
        <Child />
        <h3>Memo render</h3>
        {memoChild}
      </header>
    </div>
  );
}

export default App;
