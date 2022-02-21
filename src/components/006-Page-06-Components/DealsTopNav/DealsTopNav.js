import React from "react";
import { Link } from "react-router-dom";
import styles from "./DealsTopNav.module.css";

function DealsTopNav() {
  return (
    <div className={styles.topnav}>
      <div className={styles.topnav__container}>
        <div className={styles.topnav__previous_page}>
          <Link to="/" className={styles.topnav__previous_page_link}>
            Home /
          </Link>
          All Best Deals
        </div>
      </div>
    </div>
  );
}

export default DealsTopNav;
