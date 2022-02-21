import React from "react";
import { Link } from "react-router-dom";
import styles from "./ShopByBrands.module.css";

function ShopByBrands({ topStores }) {
  return (
    <div className={styles.shop_by_brands}>
      <div className={styles.shop_by_brands__text_container}>
        <p>Shop by Brands</p>
        <Link to="/trending-stores">See All</Link>
      </div>

      <div className={styles.shop_by_brands__brands_container}>
        {topStores?.val.map((item, index) => {
          return (
            <div
              key={index}
              className={styles.shop_by_brands__brand_image_container}
            >
              <img
                src={`${process.env.REACT_APP_STATIC_URL}${item.img}`}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShopByBrands;
