import React, { useEffect } from "react";
import styles from "./RequestCashback.module.css";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { Navbar_Bottom, RequestCashbackInfo, Sidebar } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { earningsOverviewInfo } from "../../store/actions/Overview-actions";

function RequestCashback({ history }) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 991px)" });

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch()

  useEffect(() => {
    if (!userInfo) {
      return history.push("/");
    }
    dispatch(
      earningsOverviewInfo(userInfo.data[0].customer_id, userInfo.data[0].token)
    );
  }, [userInfo, dispatch]);

  return (
    <div className={styles.request_cashback}>
      <div className={styles.request_cashback__container}>
        {!isMobile && (
          <div className={styles.request_cashback__previous_page}>
            <Link
              to="/"
              className={styles.request_cashback__previous_page_link}
            >
              Home /
            </Link>
            Request Cashback
          </div>
        )}

        <div className={styles.request_cashback__main_content}>
          {!isMobileOrTablet && (
            <div className={styles.request_cashback__left_content}>
              <Sidebar activeComponent="requestPayment" />
            </div>
          )}

          <div className={styles.request_cashback__right_content}>
            <RequestCashbackInfo />
          </div>
        </div>
      </div>

      {isMobile && <Navbar_Bottom activeComponent="/account" />}
    </div>
  );
}

export default RequestCashback;
