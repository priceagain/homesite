import React from "react";
import styles from "./Reward.module.css";
import CheckIcon from "@material-ui/icons/Check";

function Reward() {
  return (
    <div className={styles.reward}>
      <div className={styles.reward__topnav}></div>

      <div className={styles.reward__topnav_info}>
        <span>
          <CheckIcon /> Cashback activated
        </span>
      </div>

      <h4>Shop at Amazon India & Earn Upto 6%</h4>
      <h4>Priceagain Rewards</h4>

      <div className={styles.reward__topnav_info_container}>
        <div className={styles.reward__topnav_info_box}>
          <span>
            <p>Rewards Track In</p>
            <h5>48 Hours</h5>
          </span>
        </div>
        <div className={styles.reward__topnav_info_box}>
          <span>
            <p>Order Confirms by</p>
            <h5>05 Oct 2021</h5>
          </span>
        </div>
        <div className={styles.reward__topnav_info_box}>
          <span>
            <p>Missing Ticket</p>
            <h5>Accepted </h5>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Reward;
