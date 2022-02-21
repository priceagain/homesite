import React, { useEffect } from "react";
import styles from "./ContactUs.module.css";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { ContactUsForm, Navbar_Bottom, Sidebar } from "../../components";
import { useSelector } from "react-redux";

function ContactUs({ history }) {
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
    <div className={styles.contact_us}>
      <div className={styles.contact_us__container}>
        {!isMobile && (
          <div className={styles.contact_us__previous_page}>
            <Link to="/" className={styles.contact_us__previous_page_link}>
              Home /
            </Link>
            Change Password
          </div>
        )}

        <div className={styles.contact_us__main_content}>
          {!isMobileOrTablet && (
            <div className={styles.contact_us__left_content}>
              <Sidebar activeComponent="contactUs" />
            </div>
          )}

          <div className={styles.contact_us__right_content}>
            <ContactUsForm />
          </div>
        </div>
      </div>

      {isMobile && <Navbar_Bottom activeComponent="/account" />}
    </div>
  );
}

export default ContactUs;
