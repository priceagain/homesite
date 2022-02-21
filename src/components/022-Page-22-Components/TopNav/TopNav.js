import React from "react";
import { Link } from "react-router-dom";
import styles from "./TopNav.module.css";

function TopNavProduct({ categorySlug }) {
  return (
    <div className={styles.topnav}>
      <div className={styles.topnav__container}>
        <div className={styles.topnav__previous_page}>
          <Link to="/" className={styles.topnav__previous_page_link}>
            Home /
          </Link>
          {categorySlug && categorySlug}
        </div>
      </div>
    </div>
  );
}

export default TopNavProduct;
