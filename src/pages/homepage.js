import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Homepage() {
  const balance = useSelector((state) => state.balanceReducer.balance);
  const loan = useSelector((state) => state.loanReducer.loan);
  const dispatch = useDispatch();

  function applyLoanHandle() {
    dispatch({ type: "APPLY" });
  }
  return (
    <>
      <h2>Homepage Page</h2>

      <h3>Balance: {balance}</h3>
      <h2>{loan ? "Loan Applied" : "Loan Needed"}</h2>
      <button
        className="button-style"
        onClick={applyLoanHandle}
        disabled={loan ? true : false}
      >
        {loan ? "Loan Applied" : "Apply for Loan"}
      </button>
    </>
  );
}

export default Homepage;
