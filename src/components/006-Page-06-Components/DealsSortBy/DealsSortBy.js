import React from "react";
import styles from "./DealsSortBy.module.css";
import { useMediaQuery } from "react-responsive";

function DealsSortBy() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className={styles.sort_by}>
      <div className={styles.sort_by__container}>
        {!isMobile && (
          <div className={styles.sort_by__content}>
            <span>Sort by:</span>
            <p>Popularity</p>
          </div>
        )}

        {!isMobile && (
          <div className={styles.sort_by_filter}>
            <span>High to Low</span>
            <span>Low to High</span>
            <span>Discount</span>
            <span>Latest</span>
            <span>All Products</span>
          </div>
        )}

        {isMobile && (
          <div className={styles.sort_by_filter}>
            <span className={styles.active}>High to Low</span>
            <span>Low to High</span>
            <span>Discount</span>
            <span>All Products</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default DealsSortBy;
