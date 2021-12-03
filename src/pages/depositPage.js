import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as balanceAction from "../action/balanceAction";
function Deposit() {
  const balance = useSelector((state) => state.balanceReducer.balance);
  const loan = useSelector((state) => state.loanReducer.loan);
  const loading = useSelector((state) => state.balanceReducer.loading);
  const dispatch = useDispatch();

  function onDepositHandle() {
    dispatch(balanceAction.depositAsync());
  }

  return (
    <>
      <h2>Deposit Page</h2>
      {loading ? <h1>Saving ...</h1> : <h1>Balance {balance}</h1>}
      <h2>{loan ? "Loan Applied" : "Loan Needed"}</h2>
      <button className="button-style" onClick={onDepositHandle}>
        Deposit 5
      </button>
    </>
  );
}

export default Deposit;
