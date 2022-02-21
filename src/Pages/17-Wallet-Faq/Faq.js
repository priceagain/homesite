import React, { useEffect } from "react";
import styles from "./Faq.module.css";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import {
  ContactUsForm,
  FaqInfo,
  Navbar_Bottom,
  Sidebar,
} from "../../components";
import { useSelector } from "react-redux";

function Faq({ history }) {
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
    <div className={styles.faq}>
      <div className={styles.faq__container}>
        {!isMobile && (
          <div className={styles.faq__previous_page}>
            <Link to="/" className={styles.faq__previous_page_link}>
              Home /
            </Link>
            Frequently Asked Questions
          </div>
        )}

        <div className={styles.faq__main_content}>
          {!isMobileOrTablet && (
            <div className={styles.faq__left_content}>
              <Sidebar activeComponent="faq" />
            </div>
          )}

          <div className={styles.faq__right_content}>
            <FaqInfo />
          </div>
        </div>
      </div>

      {isMobile && <Navbar_Bottom activeComponent="/account" />}
    </div>
  );
}

export default Faq;
