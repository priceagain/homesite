import React from "react";
import styles from "./Cashback_Info.module.css";

function Cashback_Info() {
  return (
    <div className={styles.cashback_info}>
      <hr />

      <div className={styles.cashback_info__vist_store}>
        <span>Visit Store</span>
      </div>

      <div className={styles.cashback_info__steps}>
        <h6>Few Steps To Ensure Your Cashback Tracks</h6>

        <ul>
          <li>Missing Cashback Tickets: Not Accepted</li>
          <li>Cashback on Arata App orders: Not applicable</li>
          <li>
            Do not visit any other coupon or deal site after clicking-out from
            CashKaro
          </li>
          <li>No Cashback if you cancel or return your order</li>
        </ul>
      </div>

      <div className={styles.cashback_info__about_container}>
        <div className={styles.cashback_info__about_content}>
          <h6>About Arata</h6>

          <ul>
            <li>
              Arata is a personal care brand that offers nontoxic, zero
              chemical-based beauty products for, men and women
            </li>
            <li>
              Arata is certified by major clinical research centres which makes
              it a trustworthy and genuine brand
            </li>
            <li>
              They promise to offer products that are free from various
              chemicals like parabens, heavy metals, dyes, etc. and are derived
              from natural ingredients that can help decrease the toxicity in
              our daily lives
            </li>
          </ul>
        </div>

        <div className={styles.cashback_info__about_content}>
          <h6>About Arata</h6>

          <ul>
            <li>
              Arata is a personal care brand that offers nontoxic, zero
              chemical-based beauty products for, men and women
            </li>
            <li>
              Arata is certified by major clinical research centres which makes
              it a trustworthy and genuine brand
            </li>
            <li>
              They promise to offer products that are free from various
              chemicals like parabens, heavy metals, dyes, etc. and are derived
              from natural ingredients that can help decrease the toxicity in
              our daily lives
            </li>
          </ul>
        </div>

        <div className={styles.cashback_info__about_content}>
          <h6>About Arata</h6>

          <ul>
            <li>
              Arata is a personal care brand that offers nontoxic, zero
              chemical-based beauty products for, men and women
            </li>
            <li>
              Arata is certified by major clinical research centres which makes
              it a trustworthy and genuine brand
            </li>
            <li>
              They promise to offer products that are free from various
              chemicals like parabens, heavy metals, dyes, etc. and are derived
              from natural ingredients that can help decrease the toxicity in
              our daily lives
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cashback_Info;
