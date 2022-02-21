import React from "react";
import styles from "./RecentClicksInfo.module.css";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import RecentClicksProgress from "../RecentClicksProgress/RecentClicksProgress";

function RecentClicksInfo({ recentclick }) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <div className={styles.recent_clicksinfo}>
      <div className={styles.recent_clicksinfo__text_heading}>
        <h1>
          {isMobile && (
            <Link to="/overview">
              <ChevronLeftIcon />
            </Link>
          )}
          Recent Clicks
        </h1>
        <p>Your clicks and transactions made in last 7 days.</p>
      </div>

      <div className={styles.recent_clicksinfo__card_container}>
        {recentclick?.data.length > 0 ? (
          recentclick?.data.map((recent, index) => (
            <div className={styles.recent_clicksinfo__card} key={index}>
              <div className={styles.recent_clicksinfo__card_head}>
                <h6>
                  {recent.store_name} <span>{recent.click_time}</span>
                </h6>
                <h6>₹{recent.store_cb_amount}</h6>
              </div>

              <div className={styles.recent_clicksinfo__progress}>
                <RecentClicksProgress
                  click_recorded={recent.click_status === "click"}
                  cashback_tracked={recent.click_status === "track"}
                  confirmed={
                    recent.click_status !== "click" &&
                    recent.click_status !== "track"
                  }
                />
              </div>
            </div>
          ))
        ) : (
          <div>
            <h1>You have not clicked any offer.</h1>
          </div>
        )}
      </div>

      {!isMobile && (
        <div className={styles.recent_clicksinfo__infocard}>
          <div className={styles.recent_clicksinfo__info}>
            <h1>Click Recorded</h1>
            <p>
              We have recorded your click to Retailer. If you have made a
              transaction, it will reflect as Pending Cashback in your My
              Earnings section within 72 hours.
            </p>
          </div>
          <div className={styles.recent_clicksinfo__info}>
            <h1>Click Recorded</h1>
            <p>
              We have tracked your Cashback, this is reflecting as Pending
              Cashback under your My Earnings section.
            </p>
          </div>
          <div className={styles.recent_clicksinfo__info}>
            <h1>Cashback Confirmed</h1>
            <p>
              Your Cashback has been confirmed and is available to you now. You
              can see your total earnings in your My Earnings section.We have
              recorded your click to Retailer. If you have made a transaction,
              it will reflect as Pending Cashback in your My Earnings section
              within 72 hours.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default RecentClicksInfo;
