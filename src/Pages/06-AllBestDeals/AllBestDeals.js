import React, { useEffect } from "react";
import styles from "./AllBestDeals.module.css";
import { useMediaQuery } from "react-responsive";
import {
  DealsBannerImage,
  DealsCards,
  DealsSortBy,
  DealsTopNav,
  Navbar_Bottom,
} from "../../components";
import { useDispatch, useSelector } from "react-redux";
import {
  bannerImage,
  landingPageList,
} from "../../store/actions/LandingPage-actions";

function AllBestDeals() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const isTabletOrMobile = useMediaQuery({
    query: "(max-width: 991px)",
  });

  const dispatch = useDispatch();
  const landingPage = useSelector((state) => state.landingPage);

  const { topProductDetails } = landingPage;

  useEffect(() => {
    if (landingPage.length === 0) {
      dispatch(landingPageList());
    }
  }, [dispatch]);
  return (
    <div className={styles.all_best_deals}>
      <div className={styles.all_best_deals__container}>
        {!isTabletOrMobile && (
          <div className={styles.all_best_deals__topnav}>
            <DealsTopNav />
          </div>
        )}

        <div
          className={isTabletOrMobile && styles.all_best_deals__banner_image}
        >
          <DealsBannerImage
            image={
              topProductDetails.val.length > 0
                ? isTabletOrMobile
                  ? topProductDetails.val[0].mobile_brand_banner_path
                  : topProductDetails.val[0].brand_banner_path
                : "https://thumbs.dreamstime.com/b/sample-banner-template-ribbon-label-sign-177645373.jpg"
            }
          />
        </div>
        {/* 
                <div className={styles.all_best_deals__sort_by}>
                    <DealsSortBy />
                </div> */}

        <div className={styles.all_best_deals__trending_stores}>
          <DealsCards topProductDetails={topProductDetails} />
        </div>
      </div>

      {isMobile && <Navbar_Bottom activeComponent="/" />}
    </div>
  );
}

export default AllBestDeals;
