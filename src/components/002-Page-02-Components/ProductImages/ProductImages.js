import React from "react";
import styles from "./ProductImages.module.css";

function ProductImages({ productImage }) {
  return (
    <div className={styles.product_images}>
      <div className={styles.product_images__container}>
        <div className={styles.product_images__main_image}>
          <img
            src={`${process.env.REACT_APP_STATIC_URL}${productImage}`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default ProductImages;
