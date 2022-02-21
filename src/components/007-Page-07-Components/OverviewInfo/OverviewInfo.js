import React from "react";
import styles from "./OverviewInfo.module.css";
import { useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function OverviewInfo({ userInfo, cashback, referal }) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const history = useHistory();

  return (
    <div className={styles.overview_info}>
      {!isMobile ? (
        <>
          <div className={styles.overview_info__name}>
            Hi {userInfo?.data[0].customer_name}, you have
          </div>

          <div className={styles.overview_info__container}>
            <div className={styles.overview_info__main_card}>
              <div className={styles.overview_info__main_card_left}>
                <p>Life time Earnings</p>
                <h1>
                  Rs: ₹
                  {userInfo?.data[0].life_time_savings
                    ? userInfo?.data[0].life_time_savings
                    : 0}
                </h1>
              </div>
              <div className={styles.overview_info__main_card_right}>
                <p>Available Balance</p>
                <span>
                  Rs: ₹{" "}
                  {Number(cashback?.processed) + Number(referal?.processed)}
                </span>
                <p>Pending Balance</p>
                <span>
                  Rs: ₹{Number(cashback?.pending) + Number(referal?.pending)}
                </span>
              </div>
            </div>

            <div className={styles.overview_info__content_card}>
              <div className={styles.overview_info__card_earnings}>
                <p>Cashback Earnings</p>
                <span>Rs: ₹{cashback?.paid}</span>
              </div>

              <div className={styles.overview_info__card_earnings}>
                <p>Referral Earnings</p>
                <span>Rs: ₹{referal?.paid}</span>
              </div>
            </div>
          </div>

          <button onClick={() => history.push("/request-cashback")}>
            Request Payment
          </button>
        </>
      ) : (
        <div className={styles.overview_mob__container}>
          <div className={styles.overview_mob__name}>
            Hello, {userInfo?.data[0].customer_name}
          </div>

          <div className={styles.overview_mob__content}>
            <div className={styles.overview_mob__content_left}>
              <p>Available Balance</p>
              <span>
                Rs: {Number(cashback?.processed) + Number(referal?.processed)}
              </span>
            </div>
            <div className={styles.overview_mob__content_right}>
              <p>Pending Balance</p>
              <span>
                Rs: {Number(cashback?.pending) + Number(referal?.pending)}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OverviewInfo;
