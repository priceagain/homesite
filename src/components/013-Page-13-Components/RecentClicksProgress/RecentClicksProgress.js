import React from "react";
import styles from "./RecentClicksProgress.module.css";

function RecentClicksProgress({ click_recorded, cashback_tracked, confirmed }) {
  return (
    <div className={styles.recent_clicks_progress}>
      <ul className={styles.recent_clicks_progress__container}>
        <li
          className={`${
            click_recorded && styles.recent_clicks_progress__active
          } ${cashback_tracked && styles.recent_clicks_progress__active} ${
            confirmed && styles.recent_clicks_progress__active_all
          }`}
        >
          Click Recorded
        </li>
        <li
          className={`${
            cashback_tracked && styles.recent_clicks_progress__active
          } ${confirmed && styles.recent_clicks_progress__active_all}`}
        >
          Cashback Tracked
        </li>
        <li
          className={`${
            confirmed && styles.recent_clicks_progress__active_all
          }`}
        >
          Confirmed
        </li>
      </ul>
    </div>
  );
}

export default RecentClicksProgress;
