import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../../store/actions/User-actions";
import styles from "./Sidebar.module.css";

function Sidebar({ activeComponent }) {
  const dispatch = useDispatch();
  const [active, setActive] = useState("");

  useEffect(() => {
    setActive(activeComponent);
    return () => {
      setActive("overview");
    };
  }, [activeComponent]);

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__container}>
        <div className={styles.sidebar__content}>
          <div className={styles.sidebar__heading}>Wallet</div>

          <div className={styles.sidebar__links}>
            <Link
              to="/overview"
              className={
                active == "overview" ? styles.sidebar__active : undefined
              }
            >
              Overview
            </Link>
            <Link
              to="/order-history"
              className={
                active == "orderHistory" ? styles.sidebar__active : undefined
              }
            >
              Order History
            </Link>
            <Link
              to="/visited-stores"
              className={
                active == "visitedStores" ? styles.sidebar__active : undefined
              }
            >
              Visited Stores
            </Link>
            <Link
              to="/payment-history"
              className={
                active == "paymentHistory" ? styles.sidebar__active : undefined
              }
            >
              Payment History
            </Link>
            <Link
              to="/missing-cashback"
              className={
                active == "missingCashback" ? styles.sidebar__active : undefined
              }
            >
              Missing Cashback
            </Link>
            <Link
              to="/request-cashback"
              className={
                active == "requestPayment" ? styles.sidebar__active : undefined
              }
            >
              Request Payment
            </Link>
            <Link
              to="/recent-clicks"
              className={
                active == "recentClicks" ? styles.sidebar__active : undefined
              }
            >
              Recent Clicks
            </Link>
          </div>
        </div>

        <div className={styles.sidebar__content}>
          <div className={styles.sidebar__heading}>Account</div>

          <div className={styles.sidebar__links}>
            <Link
              to="/manage-account"
              className={
                active == "manageAccount" ? styles.sidebar__active : undefined
              }
            >
              Manage Account
            </Link>
            <Link
              to="/change-password"
              className={
                active == "changePassword" ? styles.sidebar__active : undefined
              }
            >
              Change Password
            </Link>
            <Link
              to="/contact-us"
              className={
                active == "contactUs" ? styles.sidebar__active : undefined
              }
            >
              Contact us
            </Link>
            <Link
              to="/frequenty-asked-question"
              className={active == "faq" ? styles.sidebar__active : undefined}
            >
              Faq
            </Link>
            <span
              onClick={logoutHandler}
              className={
                active == "logout" ? styles.sidebar__active : undefined
              }
            >
              Logout
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
