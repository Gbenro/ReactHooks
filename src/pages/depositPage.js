import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Deposit() {
  const balance = useSelector((state) => state.balance);
  const dispatch = useDispatch();

  function onDepositHandle() {
    dispatch({ type: "DEPOSIT", payload: 5 });
  }

  return (
    <>
      <h2>Deposit Page</h2>
      <h3>Balance: {balance}</h3>

      <button onClick={onDepositHandle}>Deposit 5</button>
    </>
  );
}

export default Deposit;
