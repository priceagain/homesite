import React from "react";
import styles from "./DealsBannerImage.module.css";

function DealsBannerImage({ image }) {
  return (
    <div className={styles.banner_image}>
      <img src={`${process.env.REACT_APP_STATIC_URL}${image}`} alt="" />
    </div>
  );
}

export default DealsBannerImage;
