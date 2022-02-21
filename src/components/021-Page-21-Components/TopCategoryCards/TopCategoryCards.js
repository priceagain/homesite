import React from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./TopCategoryCards.module.css";
import { Link } from "react-router-dom";

function TopCategoryCards({ topCategoryList }) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className={styles.trending_stores_cards}>
      {isMobile && (
        <div className={styles.trending_stores_cards__text_container}>
          <p>Trending Stores</p>
        </div>
      )}

      <div className={styles.trending_stores__container}>
        {topCategoryList?.map((card, index) => (
          <div className={styles.trending_store__card} key={index}>
            <div className={styles.trending_store__image_container}>
              <Link to={`/category/${card.category_slug}/${card.category_id}/`}>
                <img
                  src={
                    !isMobile && !card.mobile_category_img_path === null
                      ? `${process.env.REACT_APP_STATIC_URL}${card.category_img_path}`
                      : isMobile && card.mobile_category_img_path !== null
                      ? `${process.env.REACT_APP_STATIC_URL}${card.mobile_category_img_path}`
                      : `${process.env.REACT_APP_STATIC_URL}${card.category_img_path}`
                  }
                  alt={card.category_name}
                />
              </Link>
            </div>
            <span>{card.category_name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopCategoryCards;
