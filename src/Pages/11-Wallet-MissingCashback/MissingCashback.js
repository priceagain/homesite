import React, { useEffect } from "react";
import styles from "./MissingCashback.module.css";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { MissingCashbackInfo, Navbar_Bottom, Sidebar } from "../../components";
import { useSelector } from "react-redux";

function MissingCashback({ history }) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 991px)" });

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    }
  });

  return (
    <div className={styles.missing_cashback}>
      <div className={styles.missing_cashback__container}>
        {!isMobile && (
          <div className={styles.missing_cashback__previous_page}>
            <Link
              to="/"
              className={styles.missing_cashback__previous_page_link}
            >
              Home /
            </Link>
            Missing Cashback
          </div>
        )}

        <div className={styles.missing_cashback__main_content}>
          {!isMobileOrTablet && (
            <div className={styles.missing_cashback__left_content}>
              <Sidebar activeComponent="missingCashback" />
            </div>
          )}

          <div className={styles.missing_cashback__right_content}>
            <MissingCashbackInfo />
          </div>
        </div>
      </div>

      {isMobile && <Navbar_Bottom activeComponent="/account" />}
    </div>
  );
}

export default MissingCashback;
