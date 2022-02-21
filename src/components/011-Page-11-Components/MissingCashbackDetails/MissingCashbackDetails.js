import axios from "../../../axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./MissingCashbackDetails.module.css";

function MissingCashbackDetails() {
  const [orderId, setOrderId] = useState("");
  const [orderAmount, setOrderAmount] = useState(0);
  const [itemsPurchased, setItemsPurchased] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const handleMissingCashback = async (e) => {
    e.preventDefault();
    const { data } = await axios.post("/api/v1/saveMissingCashback", {
      id: userInfo.data[0].customer_id,
      authToken: userInfo.data[0].token,
      order_id: orderId,
      recent_id: "",
      order_amt: orderAmount,
      item_description: itemsPurchased,
    });
    alert(data.data);
    setItemsPurchased("");
    setOrderAmount("");
    setOrderId("");
  };

  return (
    <div className={styles.missing_cashback_details}>
      <div className={styles.missing_cashback_details__text_heading}>
        <h1>Enter Missing Cashback Details</h1>
      </div>

      <div className={styles.missing_cashback_details__container}>
        <form>
          <label
            className={styles.missing_cashback_details__star}
            htmlFor="orderId"
          >
            Order/Booking ID:
          </label>
          <input
            value={orderId}
            type="number"
            id="orderId"
            name="Order/Booking ID"
            placeholder="Enter a Order id"
            onChange={(e) => setOrderId(e.target.value)}
          />

          <label
            className={styles.missing_cashback_details__star}
            htmlFor="orderAmount"
          >
            Order Amount (Excluding GST):
          </label>
          <input
            value={orderAmount}
            type="number"
            name="Order Amount"
            id="orderAmount"
            placeholder="Enter a Order Amount"
            onChange={(e) => setOrderAmount(Number(e.target.value))}
          />

          <label htmlFor="itemsPurchased">Item (s) Purchased:</label>
          <textarea
            value={itemsPurchased}
            name="Items Purchased"
            id="itemsPurchased"
            cols="30"
            rows="5"
            placeholder="Enter details"
            onChange={(e) => setItemsPurchased(e.target.value)}
          ></textarea>

          <button onClick={handleMissingCashback}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default MissingCashbackDetails;
