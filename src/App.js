import "./App.scss";
import React, { useState, useEffect } from "react";

const init = {
  x: null,
  y: null,
};
function App() {
  const [time, setTime] = useState(Date);
  const [xy, setXY] = useState(init);
  useEffect(() => {
    let handle = setInterval(() => {
      setTime(Date);
    }, 1000);

    return () => {
      clearInterval(handle);
    };
  });

  //for x and y
  const mousemoveHandle = (e) => {
    setXY({
      x: e.clientX,
      y: e.clientY,
    });
  };
  useEffect(() => {
    window.addEventListener("mousemove", mousemoveHandle);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h2>UseEffect Examples</h2>
        <h3>Date and Time: {time}</h3>
        <h3>{`  x:${xy.x} , y:${xy.y}`}</h3>
      </header>
    </div>
  );
}

export default App;
