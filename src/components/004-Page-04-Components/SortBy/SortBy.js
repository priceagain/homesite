import React from "react";
import styles from "./SortBy.module.css";
import { useMediaQuery } from "react-responsive";

function SortBy({ sortByType, setSortByType }) {
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
              className={sortByType === "amount" ? styles.sort_by__active : ""}
              onClick={() => setSortByType("amount")}
            >
              High to Low
            </span>
            <span
              className={
                sortByType === "ascending" ? styles.sort_by__active : ""
              }
              onClick={() => setSortByType("ascending")}
            >
              Low to High
            </span>
            <span
              className={sortByType === "percent" ? styles.sort_by__active : ""}
              onClick={() => setSortByType("percent")}
            >
              Discount
            </span>
            <span
              className={sortByType === "new" ? styles.sort_by__active : ""}
              onClick={() => setSortByType("new")}
            >
              Latest
            </span>
          </div>
        )}

        {isMobile && (
          <div className={styles.sort_by_filter}>
            <span
              className={sortByType === "amount" ? styles.active : ""}
              onClick={() => setSortByType("amount")}
            >
              High to Low
            </span>
            <span
              className={sortByType === "ascending" ? styles.active : ""}
              onClick={() => setSortByType("ascending")}
            >
              Low to High
            </span>
            <span
              className={sortByType === "percent" ? styles.active : ""}
              onClick={() => setSortByType("percent")}
            >
              Discount
            </span>
            <span
              className={sortByType === "new" ? styles.active : ""}
              onClick={() => setSortByType("new")}
            >
              Latest
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default SortBy;
