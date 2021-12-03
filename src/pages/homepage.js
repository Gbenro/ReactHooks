import React from "react";
import { useSelector } from "react-redux";

function Homepage() {
  const balance = useSelector((state) => state.balance);
  return (
    <>
      <h2>Homepage Page</h2>
      <h3>balance: {balance}</h3>
    </>
  );
}

export default Homepage;
