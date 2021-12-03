import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Deposit() {
  const balance = useSelector((state) => state.balanceReducer.balance);
  const loan = useSelector((state) => state.loanReducer.loan);
  const dispatch = useDispatch();

  function onDepositHandle() {
    dispatch({ type: "DEPOSIT", payload: 5 });
  }

  return (
    <>
      <h2>Deposit Page</h2>
      <h3>Balance: {balance}</h3>
      <h2>{loan ? "Loan Applied" : "Loan Needed"}</h2>
      <button className="button-style" onClick={onDepositHandle}>
        Deposit 5
      </button>
    </>
  );
}

export default Deposit;
