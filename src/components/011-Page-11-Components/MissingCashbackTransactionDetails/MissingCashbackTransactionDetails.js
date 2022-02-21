import axios from "../../../axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./MissingCashbackTransactionDetails.module.css";

function MissingCashbackTransactionDetails({ startDate }) {
  const [orderHistory, setOrderHistory] = useState([]);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.post("/api/v1/getStoresByDate", {
        id: userInfo.data[0].customer_id,
        authToken: userInfo.data[0].token,
        date: startDate
          ? new Date(startDate).toDateString()
          : new Date().toDateString(),
      });
      setOrderHistory(data.data);
    };
    fetchData();
    return () => {
      setOrderHistory([]);
    };
  }, [startDate]);

  return (
    <div className={styles.transaction_details}>
      <div className={styles.transaction_details__text_heading}>
        <h1>Your exit click & transaction details</h1>
      </div>

      <div className={styles.transaction_details__table_container}>
        <table>
          <thead>
            <tr>
              <th>Exit Click Time</th>
              <th>Order ID</th>
              <th>Earnings</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {orderHistory?.map((order, index) => (
              <tr key={index}>
                <td>{new Date(order.click_time).toLocaleTimeString()}</td>
                <td>{order.order_id}</td>
                <td>{order.amount}</td>
                <td>{order.click_status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MissingCashbackTransactionDetails;
