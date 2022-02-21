import React from "react";
import { Link } from "react-router-dom";
import styles from "./BestDeals.module.css";

function BestDeals({ topProductDetails }) {
  return (
    <div className={styles.best_deals}>
      <div className={styles.best_deals__text_container}>
        <p>{topProductDetails?.res.resource_heading_name}</p>
        <Link to="/all-best-deals">See All</Link>
      </div>

      <div className={styles.best_deals__best_deal_container}>
        {topProductDetails?.val.map((product_deals, index) => (
          <Link
            to={`/brand/${product_deals.brand_slug}/${product_deals.brand_id}`}
            className={styles.best_deals__best_deal_box}
            key={index}
          >
            <div className={styles.best_deal__image_container}>
              <img
                src={`${process.env.REACT_APP_STATIC_URL}${product_deals.brand_img_path}`}
                alt={product_deals.name}
              />
            </div>

            <div className={styles.best_deal__text_content}>
              <span className={styles.best_deal__brand_name}>
                {product_deals.brand_name}
              </span>

              <p>{product_deals.brand_cashback_details}</p>

              <button>{product_deals.cashback_details}</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BestDeals;
