import React from "react";
import styles from "./PopularCategories.module.css";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

function PopularCategories({ topCategories }) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <div className={styles.popular_categories}>
      <div className={styles.popular_categories__text_container}>
        <p className={styles.popular_categories__text}>
          {topCategories?.res.resource_heading_name}
        </p>
        <Link to="/top-categories">See All</Link>
      </div>

      <div className={styles.popular_categories__box}>
        {topCategories?.val.map((category, index) => (
          <div className={styles.popular_category} key={index}>
            <div className={styles.popular_categories__image_container}>
              <Link to={`/category/${category.category_slug}/${category.id}/`}>
                <img
                  src={
                    !isMobile && !category.mobile_category_img_path === null
                      ? `${process.env.REACT_APP_STATIC_URL}${category.category_img_path}`
                      : isMobile && category.mobile_category_img_path !== null
                      ? `${process.env.REACT_APP_STATIC_URL}${category.mobile_category_img_path}`
                      : `${process.env.REACT_APP_STATIC_URL}${category.category_img_path}`
                  }
                  alt=""
                />
              </Link>
            </div>
            <span>{category.category_name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularCategories;
