import React, { useEffect } from "react";
import styles from "./RecentClicks.module.css";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { Navbar_Bottom, RecentClicksInfo, Sidebar } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { getRecentClicks } from "../../store/actions/Overview-actions";

function RecentClicks({ history }) {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 991px)" });

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const recentClicks = useSelector((state) => state.recentClicks);
  const { recentclick } = recentClicks;

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    }
    dispatch(
      getRecentClicks(userInfo.data[0].customer_id, userInfo.data[0].token)
    );
  }, [dispatch, userInfo]);

  return (
    <div className={styles.recent_clicks}>
      <div className={styles.recent_clicks__container}>
        {!isMobile && (
          <div className={styles.recent_clicks__previous_page}>
            <Link to="/" className={styles.recent_clicks__previous_page_link}>
              Home /
            </Link>
            Recent Clicks
          </div>
        )}

        <div className={styles.recent_clicks__main_content}>
          {!isMobileOrTablet && (
            <div className={styles.recent_clicks__left_content}>
              <Sidebar activeComponent="recentClicks" />
            </div>
          )}

          <div className={styles.recent_clicks__right_content}>
            <RecentClicksInfo recentclick={recentclick} />
          </div>
        </div>
      </div>

      {isMobile && <Navbar_Bottom activeComponent="/account" />}
    </div>
  );
}

export default RecentClicks;
