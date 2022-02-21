import React, { useEffect } from "react";
import styles from "./ChangePassword.module.css";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { ChangePasswordForm, Navbar_Bottom, Sidebar } from "../../components";
import { useSelector } from "react-redux";

function ChangePassword({ history }) {
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
    <div className={styles.change_password}>
      <div className={styles.change_password__container}>
        {!isMobile && (
          <div className={styles.change_password__previous_page}>
            <Link to="/" className={styles.change_password__previous_page_link}>
              Home /
            </Link>
            Change Password
          </div>
        )}

        <div className={styles.change_password__main_content}>
          {!isMobileOrTablet && (
            <div className={styles.change_password__left_content}>
              <Sidebar activeComponent="changePassword" />
            </div>
          )}

          <div className={styles.change_password__right_content}>
            <ChangePasswordForm userInfo={userInfo} />
          </div>
        </div>
      </div>

      {isMobile && <Navbar_Bottom activeComponent="/account" />}
    </div>
  );
}

export default ChangePassword;
