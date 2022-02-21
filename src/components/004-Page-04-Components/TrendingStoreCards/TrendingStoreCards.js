import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { loginModalToggle } from "../../../store/actions/Login-actions";
import styles from "./TrendingStoreCards.module.css";

function TrendingStoreCards({ trendingStoreList }) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const storeByCategoryList = useSelector((state) => state.storeByCategoryList);
  const { storeCategory, loading } = storeByCategoryList;
  const dispatch = useDispatch();
  return (
    <div className={styles.trending_stores_cards}>
      {isMobile && (
        <div className={styles.trending_stores_cards__text_container}>
          <p>Trending Stores</p>
        </div>
      )}

      <div className={styles.trending_stores__container}>
        {storeCategory || loading
          ? storeCategory?.data.map((card, index) => (
              <div className={styles.trending_store__card} key={index}>
                <Link
                  to={`/store/${card.store_slug}/${card.store_id}`}
                  className={styles.trending_store__image_container}
                >
                  <img
                    src={`${process.env.REACT_APP_STATIC_URL}${card.store_img_path}`}
                    alt={card.store_name}
                  />
                </Link>
                {localStorage.getItem("userInfo") ? (
                  <a href={card.store_url} target="_blank" rel="noreferrer">
                    <button>{card?.store_cashback_details}</button>
                  </a>
                ) : (
                  <button onClick={() => dispatch(loginModalToggle("open"))}>
                    {card?.store_cashback_details}
                  </button>
                )}
              </div>
            ))
          : trendingStoreList?.map((card, index) => (
              <div className={styles.trending_store__card} key={index}>
                <Link
                  to={`/store/${card.store_slug}/${card.store_id}`}
                  className={styles.trending_store__image_container}
                >
                  <img
                    src={`${process.env.REACT_APP_STATIC_URL}${card.store_img_path}`}
                    alt={card.store_name}
                  />
                </Link>
                {localStorage.getItem("userInfo") ? (
                  <a href={card.store_url} target="_blank" rel="noreferrer">
                    <button>{card?.store_cashback_details}</button>
                  </a>
                ) : (
                  <button onClick={() => dispatch(loginModalToggle("open"))}>
                    {card?.store_cashback_details}
                  </button>
                )}
              </div>
            ))}
      </div>
    </div>
  );
}

export default TrendingStoreCards;
