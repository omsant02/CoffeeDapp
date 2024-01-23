import React from "react";
import { ethers } from "ethers";

const Buy = ({ state }) => {
  const buyChai = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;

    const amount = { value: ethers.parseEther("0.001") };
    const transaction = await contract.buyChai(name, message, amount);
    await transaction.wait();
    alert("Transaction is successul");
    window.location.reload();
  };

  return (
    <div>
      <form onSubmit={buyChai}>
        <input id="name"></input>
        <input id="message"></input>
        <button>Pay</button>
      </form>
    </div>
  );
};

export default Buy;
