import React from "react";
import { amazonLogo1, logoBlack, rupeeIcon } from "../../../assets";
import styles from "./Cashback_Reward_Missed.module.css";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";

function Cashback_Reward_Missed() {
  return (
    <div className={styles.cashback_reward_missed}>
      <div className={styles.cashback_reward_missed__container}>
        <div className={styles.cashback_reward_missed__image}>
          <img src={rupeeIcon} alt="" />
        </div>

        <div className={styles.cashback_reward_missed__text}>
          <h6>You just missed your cashback</h6>

          <p>Login or Join Priceagain Free to EARN EXTRA Cashback from us.</p>
        </div>

        <div className={styles.cashback_reward_missed__image_container}>
          <img src={logoBlack} alt="" />
          <DoubleArrowIcon />
          <img src={amazonLogo1} alt="" />
        </div>

        <p className={styles.cashback_reward_missed__link}>
          <span>Click here</span> if you are not automatically redirected
        </p>
      </div>
    </div>
  );
}

export default Cashback_Reward_Missed;
