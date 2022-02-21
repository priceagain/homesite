import React from "react";
import { Link } from "react-router-dom";
import styles from "./TrendingStores.module.css";
import { useDispatch } from "react-redux";
import { saveRecentClick } from "../../../store/actions/User-actions";

function TrendingStores({ topStores }) {
  const dispatch = useDispatch();
  return (
    <div className={styles.trending_stores}>
      <div className={styles.trending_stores__text_container}>
        <p className={styles.trending_stores__text}>
          {topStores?.res.resource_heading_name}
        </p>
        <Link to="/trending-stores">See All</Link>
      </div>

      <div className={styles.trending_stores__box}>
        {topStores?.val.map((store, index) => (
          <div className={styles.trending_store} key={index}>
            <Link
              to={`/store/${store.store_slug}/${store.store_id}`}
              className={styles.trending_store__image_container}
            >
              <img
                src={`${process.env.REACT_APP_STATIC_URL}${store?.img}`}
                alt=""
              />
            </Link>

            {localStorage.getItem("userInfo") ? (
              <a href={store.store_url} target="_blank" rel="noreferrer">
                <button
                  onClick={() => dispatch(saveRecentClick(store.store_id))}
                >
                  {store?.store_cashback_details}
                </button>
              </a>
            ) : (
              <Link to={`/store/${store.store_slug}/${store.store_id}`}>
                <button>{store?.store_cashback_details}</button>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingStores;
