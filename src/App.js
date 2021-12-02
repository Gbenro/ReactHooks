import "./App.scss";
import React, { useRef, useState, useLayoutEffect } from "react";

function useDim(el, val) {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    let boundingBox = el.current.getBoundingClientRect();
    setHeight(boundingBox.height);
    setWidth(boundingBox.width);
  }, [val]);

  return { height, width };
}

function App() {
  const [val, setVal] = useState(2);

  const valEl = useRef(null);

  const { height, width } = useDim(valEl, val);
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Height: {height}, Width: {width}
        </h1>
        <div ref={valEl}>{val}</div>
        <button onClick={() => setVal(val * 10)}>10X</button>
      </header>
    </div>
  );
}

export default App;
