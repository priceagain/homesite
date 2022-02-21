import React from "react";
import { useMediaQuery } from "react-responsive";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Link } from "react-router-dom";
import styles from "./StoresVisits.module.css";

function StoreVisites({ recentclick }) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className={styles.store_visits}>
      <div className={styles.store_visits__text_heading}>
        <h1>
          {isMobile && (
            <Link to="/overview">
              <ChevronLeftIcon />
            </Link>
          )}
          Stores Visits
        </h1>
      </div>

      <div className={styles.store_visits__container}>
        {recentclick?.data.map((card, index) => (
          <div className={styles.store_visits__card} key={index}>
            <div className={styles.store_visits__image_container}>
              <img
                src={`${process.env.REACT_APP_STATIC_URL}${card.store_img_path}`}
                alt=""
              />
            </div>
            <a href={card.store_url} target="_blank" rel="noreferrer">
              <button>{card.store_cashback_details}</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StoreVisites;
