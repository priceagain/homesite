import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar_Bottom, OverviewInfo, Sidebar } from "../../components";
import styles from "./Overview.module.css";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import { earningsOverviewInfo } from "../../store/actions/Overview-actions";

function Overview({ history }) {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const earningsOverview = useSelector((state) => state.earningsOverview);
  const { earnings } = earningsOverview;

  useEffect(() => {
    if (!userInfo) {
      return history.push("/");
    }
    dispatch(
      earningsOverviewInfo(userInfo.data[0].customer_id, userInfo.data[0].token)
    );
  }, [userInfo, dispatch]);

  return (
    <div className={styles.overview}>
      <div className={styles.overview__container}>
        {!isMobile && (
          <div className={styles.overview__previous_page}>
            <Link to="/" className={styles.overview__previous_page_link}>
              Home /
            </Link>
            Overview
          </div>
        )}

        <div className={styles.overview__main_content}>
          <div className={styles.overview__left_content}>
            <Sidebar activeComponent="overview" />
          </div>

          <div className={styles.overview__right_content}>
            <OverviewInfo
              userInfo={userInfo}
              cashback={earnings?.data.cashback}
              referal={earnings?.data.referal}
            />
          </div>
        </div>
      </div>

      {isMobile && <Navbar_Bottom activeComponent="/account" />}
    </div>
  );
}

export default Overview;
