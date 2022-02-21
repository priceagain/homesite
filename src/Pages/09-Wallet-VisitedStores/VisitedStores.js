import React, { useEffect } from "react";
import styles from "./VisitedStores.module.css";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { Navbar_Bottom, Sidebar, StoresVisits } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { getRecentClicks } from "../../store/actions/Overview-actions";

function VisitedStores({ history }) {
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
    <div className={styles.visited_stores}>
      <div className={styles.visited_stores__container}>
        {!isMobile && (
          <div className={styles.visited_stores__previous_page}>
            <Link to="/" className={styles.visited_stores__previous_page_link}>
              Home /
            </Link>
            Stores Visited
          </div>
        )}

        <div className={styles.visited_stores__main_content}>
          {!isMobileOrTablet && (
            <div className={styles.visited_stores__left_content}>
              <Sidebar activeComponent="visitedStores" />
            </div>
          )}

          <div className={styles.visited_stores__right_content}>
            <StoresVisits recentclick={recentclick} />
          </div>
        </div>
      </div>

      {isMobile && <Navbar_Bottom activeComponent="/account" />}
    </div>
  );
}

export default VisitedStores;
