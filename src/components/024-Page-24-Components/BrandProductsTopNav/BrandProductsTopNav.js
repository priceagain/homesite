import React from "react";
import { Link } from "react-router-dom";
import styles from "./BrandProductsTopNav.module.css";

function BrandProductsTopNav({ title }) {
  return (
    <div className={styles.topnav}>
      <div className={styles.topnav__container}>
        <div className={styles.topnav__previous_page}>
          <Link to="/" className={styles.topnav__previous_page_link}>
            Home /
          </Link>
          {title}
        </div>
      </div>
    </div>
  );
}

export default BrandProductsTopNav;
