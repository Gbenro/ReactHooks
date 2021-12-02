import "./App.scss";
import React, { useState } from "react";
import usePrevious from "./hooks/usePrevious";

function App() {
  const [age, setAge] = useState(21);
  const previousAge = usePrevious(age);

  function onClickHandle() {
    setAge(age - 1);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h3>Current Age: {age}</h3>
        <h3>Previous Age: {previousAge}</h3>
        <button onClick={onClickHandle}>Make me Younger</button>
      </header>
    </div>
  );
}

export default App;
