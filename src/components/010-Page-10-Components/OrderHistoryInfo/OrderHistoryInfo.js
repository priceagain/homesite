import React from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./OrderHistoryInfo.module.css";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Link } from "react-router-dom";

function OrderHistoryInfo({ orderHistory }) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className={styles.order_historyinfo}>
      <div className={styles.order_historyinfo__text_heading}>
        <h1>
          {isMobile && (
            <Link to="/overview">
              <ChevronLeftIcon />
            </Link>
          )}
          Order History
        </h1>
      </div>

      <div className={styles.order_historyinfo__table_container}>
        <table>
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Transaction Amount</th>
              <th>Earnings</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {orderHistory.length > 0 ? (
              orderHistory.map((order, index) => {
                const total =
                  Number(order.customer_cb) + Number(order.referral_cb);
                return (
                  <tr key={index}>
                    <td>{order.order_id}</td>
                    <td>{order.payment}</td>
                    <td>{total.toFixed(2)}</td>
                    <td>{order.status}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td>No data found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderHistoryInfo;
