import React, { useEffect } from "react";
import styles from "./ManageAccount.module.css";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { ManageAccountForm, Navbar_Bottom, Sidebar } from "../../components";
import { useSelector } from "react-redux";

function ManageAccount({ history }) {
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
    <div className={styles.manage_account}>
      <div className={styles.manage_account__container}>
        {!isMobile && (
          <div className={styles.manage_account__previous_page}>
            <Link to="/" className={styles.manage_account__previous_page_link}>
              Home /
            </Link>
            Manage Account
          </div>
        )}

        <div className={styles.manage_account__main_content}>
          {!isMobileOrTablet && (
            <div className={styles.manage_account__left_content}>
              <Sidebar activeComponent="manageAccount" />
            </div>
          )}

          <div className={styles.manage_account__right_content}>
            <ManageAccountForm userInfo={userInfo} />
          </div>
        </div>
      </div>

      {isMobile && <Navbar_Bottom activeComponent="/account" />}
    </div>
  );
}

export default ManageAccount;
