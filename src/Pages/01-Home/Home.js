import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import {
  Banner,
  PopularCategories,
  TrendingStores,
  BestDeals,
  BestProducts,
  ShopByBrands,
  ReferAndEarn,
  Navbar_Bottom,
} from "../../components";
import styles from "./Home.module.css";
import {
  bannerImage,
  landingPageList,
} from "../../store/actions/LandingPage-actions";

const Home = () => {
  const dispatch = useDispatch();
  const landingPage = useSelector((state) => state.landingPage);

  const { topCategories, topProductDetails, topStores, topSellingItems } =
    landingPage;

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    dispatch(landingPageList());
    dispatch(bannerImage());
  }, [dispatch]);

  return (
    <div className={styles.home}>
      <div className={styles.home__container}>
        <div className={styles.home__banner}>
          <Banner />
        </div>

        <div className={styles.home__popular_categories}>
          <PopularCategories topCategories={topCategories} />
        </div>

        <div className={styles.home__trending_stores}>
          <TrendingStores topStores={topStores} />
        </div>

        <div className={styles.home__best_deals}>
          <BestDeals topProductDetails={topProductDetails} />
        </div>

        <div className={styles.home__best_products}>
          <BestProducts topSellingItems={topSellingItems} />
        </div>

        <div className={styles.home__shop_by_brands}>
          <ShopByBrands topStores={topStores} />
        </div>

        <div className={styles.home__refer_and_earn}>
          <ReferAndEarn />
        </div>
      </div>
      {isMobile && <Navbar_Bottom activeComponent="/" />}
    </div>
  );
};

export default Home;
