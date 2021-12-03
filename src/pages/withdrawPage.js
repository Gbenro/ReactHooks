import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Withdraw() {
  const balance = useSelector((state) => state.balance);
  const dispatch = useDispatch();

  function onWithdrawHandle() {
    dispatch({ type: "WITHDRAW", payload: 5 });
  }

  return (
    <>
      <h2>Withdraw Page</h2>
      <h3>Balance: {balance}</h3>

      <button onClick={onWithdrawHandle}>Deposit 5</button>
    </>
  );
}

export default Withdraw;
