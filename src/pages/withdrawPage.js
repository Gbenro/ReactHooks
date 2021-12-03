import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as balanceAction from "../action/balanceAction";

function Withdraw() {
  const balance = useSelector((state) => state.balanceReducer.balance);
  const loan = useSelector((state) => state.loanReducer.loan);
  const loading = useSelector((state) => state.balanceReducer.loading);
  const dispatch = useDispatch();

  function onWithdrawHandle() {
    dispatch(balanceAction.withdrawAsync());
  }

  return (
    <>
      <h2>Withdraw Page</h2>
      {loading ? <h1>Withdrawing ...</h1> : <h1>Balance {balance}</h1>}
      <h2>{loan ? "Loan Applied" : "Loan Needed"}</h2>
      <button className="button-style" onClick={onWithdrawHandle}>
        Withdraw 5
      </button>
    </>
  );
}

export default Withdraw;
