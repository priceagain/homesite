import React, { useState } from "react";
import styles from "./ProductDeals.module.css";
import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";
import { loginModalToggle } from "../../../store/actions/Login-actions";
import { saveRecentClick } from "../../../store/actions/User-actions";

function ProductDeals({ productDetailsData }) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1250px)" });

  const dispatch = useDispatch();

  const {
    item_name,
    item_cb_amt,
    item_cb_percent,
    item_price,
    item_url,
    brand_img_path,
    brand_name,
    store_id,
  } = productDetailsData;

  return (
    <div className={styles.product_deals}>
      <div className={styles.product_deals__head}>
        {!isTabletOrMobile && (
          <div className={styles.product_deals__name}>
            <span>{item_name}</span>
          </div>
        )}
      </div>

      <div className={styles.product_deals__offers}>
        <div className={styles.product_deals__offers_content}>
          <div className={styles.product_deals__offers_image}>
            <img
              src={`${process.env.REACT_APP_STATIC_URL}${brand_img_path}`}
              alt={brand_name}
            />
          </div>

          <div className={styles.product_deals__price}>
            <div className={styles.product_deals__seller_price}>
              <p>Seller Price</p>
              <span>
                ₹{item_cb_amt != 0 && item_price - item_cb_amt}
                {item_cb_percent != 0 &&
                  ((item_price * item_cb_percent) % 100) + item_price}
              </span>
            </div>
            <div className={styles.product_deals__priceagain_cashback}>
              <p>Priceagain Cashback</p>
              <span>
                ₹{item_cb_amt != 0 && item_price - item_cb_amt}
                {item_cb_percent != 0 && (item_price * item_cb_percent) % 100}
              </span>
            </div>
          </div>

          <div className={styles.product_deals__best}>
            <div className={styles.product_deals__best_deal}>
              <span>Best Price</span>
              <span>₹{item_price}</span>
            </div>
            {localStorage.getItem("userInfo") ? (
              <a href={item_url} target="_blank" rel="noreferrer">
                <button
                  onClick={() => dispatch(saveRecentClick(store_id))}
                  className={styles.product_deals__best__button}
                >
                  Grab Deal
                </button>
              </a>
            ) : (
              <button
                className={styles.product_deals__best__button}
                onClick={() => dispatch(loginModalToggle("open"))}
              >
                Grab Deal
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDeals;
