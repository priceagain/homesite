import React from "react";
import styles from "./ProductDetails.module.css";
import Interweave from "interweave";

function ProductDetails({ productDetailsData }) {
  const { item_description } = productDetailsData;
  return (
    <div className={styles.product_details}>
      <div className={styles.product_details__content}>
        <Interweave content={item_description} />
      </div>
    </div>
  );
}

export default ProductDetails;
