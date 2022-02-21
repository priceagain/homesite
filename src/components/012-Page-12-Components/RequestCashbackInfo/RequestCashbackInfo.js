import React, { useState } from "react";
import styles from "./RequestCashbackInfo.module.css";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import RequestCashbackPayment from "../RequestCashbackPayment/RequestCashbackPayment";
import { useSelector } from "react-redux";

function RequestCashbackInfo() {
  const [paymentContainer, setPaymentContainer] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const earningsOverview = useSelector((state) => state.earningsOverview);
  const { earnings } = earningsOverview;

  const handlePaymentContainer = (e) => {
    e.preventDefault();
    setPaymentContainer(true);
  };

  if (!earnings) {
    return (
      <div className={styles.request_cashback}>
        <div className={styles.request_cashback__text_heading}>
          <h1>
            {isMobile && (
              <Link to="/overview">
                <ChevronLeftIcon />
              </Link>
            )}
            Request Cashback {paymentContainer && "payment"}
          </h1>
        </div>

        {!paymentContainer ? (
          <div className={styles.request_cashback__content_card}>
            <div className={styles.request_cashback__card_earnings}>
              <p>Available Balance</p>
              <span>Rs: 0</span>
            </div>
          </div>
        ) : (
          <div className={styles.request_cashback__payment_container}>
            <RequestCashbackPayment />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={styles.request_cashback}>
      <div className={styles.request_cashback__text_heading}>
        <h1>
          {isMobile && (
            <Link to="/overview">
              <ChevronLeftIcon />
            </Link>
          )}
          Request Cashback {paymentContainer && "payment"}
        </h1>
      </div>

      {!paymentContainer ? (
        <div className={styles.request_cashback__content_card}>
          <div className={styles.request_cashback__card_earnings}>
            <p>Available Balance</p>
            <span>
              Rs:{" "}
              {Number(earnings?.data?.cashback?.processed) +
                Number(earnings.data?.referal?.processed)}
            </span>
          </div>

          <button
            onClick={handlePaymentContainer}
            disabled={
              Number(earnings?.data?.cashback?.processed) +
                Number(earnings?.data?.referal?.processed) >
              0
            }
          >
            Request Payment
          </button>
        </div>
      ) : (
        <div className={styles.request_cashback__payment_container}>
          <RequestCashbackPayment />
        </div>
      )}
    </div>
  );
}

export default RequestCashbackInfo;
