import React from "react";
import styles from "./CashbackSteps.module.css";

function CashbackSteps({ StepNumber, Step, StepInfo, StepImage }) {
  return (
    <div className={styles.cashback_steps}>
      <div className={styles.cashback_steps__container}>
        <div className={styles.cashback_steps__left_content}>
          <span>{StepNumber}</span>
          <div className={styles.cashback_steps__left_content}>
            <h4>{Step}</h4>
            <p>{StepInfo}</p>
          </div>
        </div>

        <div className={styles.cashback_steps__right_content}>
          <div className={styles.cashback_steps__image_content}>
            {StepImage}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CashbackSteps;
