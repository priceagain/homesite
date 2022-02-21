import React from "react";
import { Link } from "react-router-dom";
import styles from "./TopNav.module.css";

function TopNav() {
  return (
    <div className={styles.topnav}>
      <div className={styles.topnav__container}>
        <div className={styles.topnav__previous_page}>
          <Link to="/" className={styles.topnav__previous_page_link}>
            Home /
          </Link>
          Top Categories
        </div>
      </div>
    </div>
  );
}

export default TopNav;
