import React from "react";
import styles from "./Suggestions.module.css";
import { Link, useHistory } from "react-router-dom";

function Suggestions({ suggestionsData }) {
  const history = useHistory();
  return (
    <div className={styles.best_products}>
      <div className={styles.best_products__text_container}>
        <p>Suggestions for You</p>
        <Link to="/all-best-products">See All</Link>
      </div>

      <div className={styles.best_products__best_deal_container}>
        {suggestionsData?.map((item) => {
          return (
            <div
              className={styles.best_products__best_product_box}
              key={item.item_id}
            >
              <div className={styles.best_products__image_container}>
                <img
                  src={`${process.env.REACT_APP_STATIC_URL}${item.item_img_path}`}
                  alt=""
                />
              </div>

              <div className={styles.best_products__text_content}>
                <span className={styles.best_products__brand_name}>
                  {item.brand_name}
                </span>

                <p>{item.item_name}</p>

                <span className={styles.best_products__price}>
                  ₹
                  {item.item_price -
                    (item.item_cb_percent / 100) * item.item_price}{" "}
                  <s>₹{item.item_price}</s>
                </span>

                <button
                  onClick={() =>
                    history.push(`/product/${item.item_slug}/${item.item_id}`)
                  }
                >
                  Buy Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Suggestions;
