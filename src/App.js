import "./App.scss";
import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from "./pages/homepage";
import Withdraw from "./pages/withdrawPage";
import Deposit from "./pages/depositPage";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <ul className="ul-style">
            <li className="li-style">
              {" "}
              <NavLink className="App-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="li-style">
              <NavLink className="App-link" to="/deposit">
                Deposit
              </NavLink>
            </li>
            <li className="li-style">
              <NavLink className="App-link" to="/withdraw">
                Withdraw
              </NavLink>
            </li>
          </ul>

          <Routes>
            <Route path="/withdraw" element={<Withdraw />} exact />
            <Route path="/deposit" element={<Deposit />} exact />
            <Route path="/" element={<Homepage />} exact />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
