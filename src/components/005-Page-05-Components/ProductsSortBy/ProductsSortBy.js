import React from "react";
import styles from "./ProductsSortBy.module.css";
import { useMediaQuery } from "react-responsive";

function ProductsSortBy({ sortByType, setSortByType }) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className={styles.sort_by}>
      <div className={styles.sort_by__container}>
        {!isMobile && (
          <div className={styles.sort_by__content}>
            <span>Sort by:</span>
          </div>
        )}

        {!isMobile && (
          <div className={styles.sort_by_filter}>
            <span
              className={
                sortByType === "highPrice" ? styles.sort_by__active : ""
              }
              onClick={() => setSortByType("highPrice")}
            >
              High to Low
            </span>
            <span
              className={
                sortByType === "lowPrice" ? styles.sort_by__active : ""
              }
              onClick={() => setSortByType("lowPrice")}
            >
              Low to High
            </span>
            <span
              className={
                sortByType === "discount" ? styles.sort_by__active : ""
              }
              onClick={() => setSortByType("discount")}
            >
              Discount
            </span>
            <span
              className={sortByType === "popular" ? styles.sort_by__active : ""}
              onClick={() => setSortByType("popular")}
            >
              Latest
            </span>
          </div>
        )}

        {isMobile && (
          <div className={styles.sort_by_filter}>
            <span
              className={sortByType === "highPrice" ? styles.active : ""}
              onClick={() => setSortByType("highPrice")}
            >
              High to Low
            </span>
            <span
              className={sortByType === "lowPrice" ? styles.active : ""}
              onClick={() => setSortByType("lowPrice")}
            >
              Low to High
            </span>
            <span
              className={sortByType === "discount" ? styles.active : ""}
              onClick={() => setSortByType("discount")}
            >
              Discount
            </span>
            <span
              className={sortByType === "popular" ? styles.active : ""}
              onClick={() => setSortByType("popular")}
            >
              Latest
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductsSortBy;
