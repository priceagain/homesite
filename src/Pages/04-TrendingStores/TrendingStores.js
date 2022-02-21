import React, { useEffect, useState } from "react";
import {
  BannerImage,
  Navbar_Bottom,
  SortBy,
  TopNav,
  TrendingStoreCards,
} from "../../components";
import styles from "./TrendingStores.module.css";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import { trendingStorePageList } from "../../store/actions/TrendingStorePage-actions";
import { allCategory } from "../../store/actions/Product-actions";
import { storeByCategory } from "../../store/actions/Product-actions";

function TrendingStores() {
  const dispatch = useDispatch();
  const trendingStore = useSelector((state) => state.trendingStore);
  const { loading, trendingStoreList } = trendingStore;
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [sortByType, setSortByType] = useState("new");
  const [selectedCategory, setSelectedCategory] = useState(1);

  const isTabletOrMobile = useMediaQuery({
    query: "(max-width: 991px)",
  });

  useEffect(() => {
    dispatch(trendingStorePageList());
    dispatch(allCategory());
    window.scrollTo(0, 0);
  }, [dispatch]);

  const handleChange = (value) => {
    setSortByType(value);

    dispatch(
      storeByCategory({
        category_id: selectedCategory,
        type: sortByType,
      })
    );
  };

  const handleCatChange = (value) => {
    setSelectedCategory(value);

    dispatch(
      storeByCategory({
        category_id: selectedCategory,
        type: sortByType,
      })
    );
  };

  return (
    <div className={styles.trending_stores}>
      <div className={styles.trending_stores__container}>
        {!isTabletOrMobile && (
          <div className={styles.trending_stores__topnav}>
            <TopNav
              selectedCategory={selectedCategory}
              setSelectedCategory={handleCatChange}
            />
          </div>
        )}

        <div
          className={isTabletOrMobile && styles.trending_stores__banner_image}
        >
          <BannerImage
            image={
              trendingStoreList?.length > 0
                ? isTabletOrMobile
                  ? trendingStoreList[0].mobile_store_banner_path
                  : trendingStoreList[0].store_banner_path
                : "https://thumbs.dreamstime.com/b/sample-banner-template-ribbon-label-sign-177645373.jpg"
            }
          />
        </div>

        <div className={styles.trending_stores__sort_by}>
          <SortBy sortByType={sortByType} setSortByType={handleChange} />
        </div>

        <div className={styles.trending_stores__trending_stores}>
          <TrendingStoreCards trendingStoreList={trendingStoreList} />
        </div>
      </div>

      {isMobile && <Navbar_Bottom activeComponent="/" />}
    </div>
  );
}

export default TrendingStores;
