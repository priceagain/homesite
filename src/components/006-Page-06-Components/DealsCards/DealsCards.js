import React from "react";
import { Link } from "react-router-dom";
import styles from "./DealsCards.module.css";
import { useMediaQuery } from "react-responsive";

function DealsCards({ topProductDetails }) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  console.log(topProductDetails);
  return (
    <div className={styles.best_deals}>
      {isMobile && (
        <div className={styles.best_deals__text_container}>
          <p>Best Deals</p>
        </div>
      )}

      <div className={styles.best_deals__best_deal_container}>
        {topProductDetails?.val.map((card, index) => (
          <div className={styles.best_deals__best_deal_box} key={index}>
            <div className={styles.best_deal__image_container}>
              <img
                src={`${process.env.REACT_APP_STATIC_URL}${card.img}`}
                alt=""
              />
            </div>

            <div className={styles.best_deal__text_content}>
              <span className={styles.best_deal__brand_name}>{card.name}</span>

              <p>{card.brand_cashback_details}</p>

              <Link to={`/brand/${card.brand_slug}/${card.brand_id}`}>
                <button>{card.cashback_details}</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DealsCards;
