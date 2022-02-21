import React, { useEffect, useState } from "react";
import {
  BannerImage,
  Navbar_Bottom,
  TopCategoryCards,
  TopNavLink,
} from "../../components";
import styles from "./TopCategory.module.css";
import { useMediaQuery } from "react-responsive";
import axios from "../../axios";

function TopCategory() {
  const [topCategoryList, setTopCategoryList] = useState();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const isTabletOrMobile = useMediaQuery({
    query: "(max-width: 991px)",
  });

  useEffect(() => {
    axios.get("/api/v1/category").then((res) => {
      setTopCategoryList(res.data.data);
    });
  }, []);

  return (
    <div className={styles.top_category}>
      <div className={styles.top_category__container}>
        {!isTabletOrMobile && (
          <div className={styles.top_category__topnav}>
            <TopNavLink />
          </div>
        )}

        <div className={isTabletOrMobile && styles.top_category__banner_image}>
          <BannerImage
            image={
              topCategoryList?.length > 0
                ? isTabletOrMobile
                  ? topCategoryList[0].mobile_category_img_path
                  : topCategoryList[0].category_banner_path
                : "https://thumbs.dreamstime.com/b/sample-banner-template-ribbon-label-sign-177645373.jpg"
            }
          />
        </div>

        <div className={styles.top_category__top_category}>
          <TopCategoryCards topCategoryList={topCategoryList} />
        </div>
      </div>

      {isMobile && <Navbar_Bottom activeComponent="/" />}
    </div>
  );
}

export default TopCategory;
