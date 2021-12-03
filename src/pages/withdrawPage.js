import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Withdraw() {
  const balance = useSelector((state) => state.balanceReducer.balance);
  const loan = useSelector((state) => state.loanReducer.loan);
  const dispatch = useDispatch();

  function onWithdrawHandle() {
    dispatch({ type: "WITHDRAW", payload: 5 });
  }

  return (
    <>
      <h2>Withdraw Page</h2>
      <h3>Balance: {balance}</h3>
      <h2>{loan ? "Loan Applied" : "Loan Needed"}</h2>
      <button className="button-style" onClick={onWithdrawHandle}>
        Deposit 5
      </button>
    </>
  );
}

export default Withdraw;
