import React, { useEffect, useState } from "react";
import styles from "./TopCategoryID.module.css";
import { useMediaQuery } from "react-responsive";
import {
  Navbar_Bottom,
  ProductsBannerImage,
  ProductsCardsCategory,
  TopNavProduct,
} from "../../components";
import { useDispatch } from "react-redux";
import { productByCategory } from "../../store/actions/Product-actions";

function TopCategoryID({ match }) {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const isTabletOrMobile = useMediaQuery({
    query: "(max-width: 991px)",
  });

  useEffect(() => {
    dispatch(
      productByCategory({
        category_id: match.params.id,
        type: match.params.slug,
      })
    );
  }, [dispatch]);

  return (
    <div className={styles.all_best_products}>
      <div className={styles.all_best_products__container}>
        {!isTabletOrMobile && (
          <div className={styles.all_best_products__topnav}>
            <TopNavProduct
              categorySlug={
                match.params.slug.charAt(0).toUpperCase() +
                match.params.slug.substring(1)
              }
            />
          </div>
        )}

        <div
          className={isTabletOrMobile && styles.all_best_products__banner_image}
        >
          <ProductsBannerImage />
        </div>

        <div className={styles.all_best_products__trending_stores}>
          <ProductsCardsCategory />
        </div>
      </div>

      {isMobile && <Navbar_Bottom activeComponent="/" />}
    </div>
  );
}

export default TopCategoryID;
