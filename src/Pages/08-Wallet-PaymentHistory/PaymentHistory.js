import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { Navbar_Bottom, PaymentHistoryInfo } from "../../components";
import Sidebar from "../../components/000-Base-Components/Sidebar/Sidebar";
import styles from "./PaymentHistory.module.css";
import axios from "../../axios";

function PaymentHistory({ history }) {
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 991px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [paymentHistory, setPaymentHistory] = useState([
    {
      payment_request_id: 1,
      customer_id: 13,
      bank_payment_mode: "neft",
      bank_holder_name: "Join signh",
      bank_name: "Barroda",
      bank_branch_name: "Banruti",
      account_no: "1298374981731",
      ifsc_code: "BAR12980001",
      amount: "17.30",
      status: "1",
      created_by: null,
      created_on: "2021-05-29 18:01:35",
      updated_on: null,
      payment_request_type: "cashback",
      transaction_id: "jhwgfbjh",
      transaction_mode: "neft",
      transaction_date: "2021-06-06",
      updated_by: null,
      gift_card: null,
      email: null,
      customer_name: "Join",
      customer_username: null,
      customer_email: "join@gmail.com",
      customer_mobile: "6383134219",
      customer_password:
        "$2y$10$Nx1Fl32dHVu/gBXGMVCBK.gxMyK/2eJa2a39WMUC7QfsyyQZo.jvq",
      customer_status: "active",
      referal_id: "dtfhzn15",
      refered_by: 1,
      token: "sy0j7hdemn53k86aoqcpzb2utwlgr14v19",
      otp: "146400",
      otp_expiry: "1635004176",
    },
    {
      payment_request_id: 5,
      customer_id: 13,
      bank_payment_mode: "neft",
      bank_holder_name: "jggvdc",
      bank_name: "sdjb",
      bank_branch_name: "ksdvb",
      account_no: "772949240",
      ifsc_code: "JHHGKH",
      amount: "112.45",
      status: "1",
      created_by: null,
      created_on: "2021-05-29 18:01:35",
      updated_on: null,
      payment_request_type: "cashback",
      transaction_id: "VBHN",
      transaction_mode: "neft",
      transaction_date: "2021-06-12",
      updated_by: null,
      gift_card: null,
      email: null,
      customer_name: "Join",
      customer_username: null,
      customer_email: "join@gmail.com",
      customer_mobile: "6383134219",
      customer_password:
        "$2y$10$Nx1Fl32dHVu/gBXGMVCBK.gxMyK/2eJa2a39WMUC7QfsyyQZo.jvq",
      customer_status: "active",
      referal_id: "dtfhzn15",
      refered_by: 1,
      token: "sy0j7hdemn53k86aoqcpzb2utwlgr14v19",
      otp: "146400",
      otp_expiry: "1635004176",
    },
  ]);

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
      return;
    }
    const fetchData = async () => {
      const { data } = await axios.post("/api/v1/paymenthistory", {
        id: userInfo.data[0].customer_id,
        authToken: userInfo.data[0].token,
      });
      setPaymentHistory(data.data);
    };
    // fetchData();
  }, []);

  return (
    <div className={styles.payment_history}>
      <div className={styles.payment_history__container}>
        {!isMobile && (
          <div className={styles.payment_history__previous_page}>
            <Link to="/" className={styles.payment_history__previous_page_link}>
              Home /
            </Link>
            Payment History
          </div>
        )}

        <div className={styles.payment_history__main_content}>
          {!isMobileOrTablet && (
            <div className={styles.payment_history__left_content}>
              <Sidebar activeComponent="paymentHistory" />
            </div>
          )}

          <div className={styles.payment_history__right_content}>
            <PaymentHistoryInfo paymentHistory={paymentHistory} />
          </div>
        </div>
      </div>

      {isMobile && <Navbar_Bottom activeComponent="/account" />}
    </div>
  );
}

export default PaymentHistory;
