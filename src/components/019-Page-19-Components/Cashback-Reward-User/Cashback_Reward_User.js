import React from "react";
import { amazonLogo1, cashbackArrow, logoBlack } from "../../../assets";
import styles from "./Cashback_Reward_User.module.css";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";

function Cashback_Reward_User() {
  return (
    <div className={styles.cashback_reward_user}>
      <div className={styles.cashback_reward_user__container}>
        <div className={styles.cashback_reward_user__image_container}>
          <img src={logoBlack} alt="" />
          <DoubleArrowIcon />
          <img src={amazonLogo1} alt="" />
        </div>

        <div className={styles.cashback_reward_user__text}>
          <p>its that simple</p>
          <h6>Congratulations Ranjith, You’re on Your Way to</h6>

          <h2>1.0% Cash Back</h2>

          <p>
            Cash Back will be automatically added to your Priceagain account
          </p>

          <p className={styles.cashback_reward_user__link}>
            <span>Click here</span> if you are not automatically redirected
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cashback_Reward_User;
