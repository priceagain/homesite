import React from "react";
import styles from "./Banner.module.css";
import Carousel from "react-material-ui-carousel";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";

function Banner() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 991px)",
  });

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const BannerImages = useSelector((state) => state.bannerImage);
  return (
    <div className={styles.banner}>
      {isDesktopOrLaptop && (
        <Carousel
          animation="slide"
          interval="5000"
          navButtonsAlwaysInvisible={true}
          indicatorIconButtonProps={{
            style: {
              color: "#c4c4c4",
              width: "8px",
              height: "8px",
              margin: "5px",
              marginTop: "33px",
            },
          }}
          activeIndicatorIconButtonProps={{
            style: {
              height: "8px",
              background: "var(--secondary-color)",
              color: "transparent",
              width: "24px",
              borderRadius: "8px",
            },
          }}
        >
          {BannerImages?.banner?.slice(0, 4).map((image, index) => (
            <div key={index} className={styles.banner__images} key={index}>
              <img
                src={`${process.env.REACT_APP_STATIC_URL}${image.banner_img_path}`}
                alt=""
              />
              <img
                src={
                  index === 3
                    ? `${process.env.REACT_APP_STATIC_URL}${BannerImages?.banner[0]?.banner_img_path}`
                    : `${process.env.REACT_APP_STATIC_URL}${
                        BannerImages?.banner[index + 1]?.banner_img_path
                      }`
                }
                alt=""
              />
            </div>
          ))}
        </Carousel>
      )}

      {isTabletOrMobile && (
        <Carousel
          animation="slide"
          interval="5000"
          navButtonsAlwaysInvisible={true}
          indicatorIconButtonProps={{
            style: {
              color: "#c4c4c4",
              width: "4px",
              margin: "5px",
              height: "4px",
            },
          }}
          activeIndicatorIconButtonProps={{
            style: {
              height: "8px",
              background: "var(--secondary-color)",
              color: "transparent",
              width: "16px",
              borderRadius: "4px",
            },
          }}
        >
          {BannerImages?.banner?.slice(0, 4).map((image, index) => (
            <div key={index} className={styles.banner__images} key={index}>
              <img
                src={
                  image.mobile_banner_img_path
                    ? `${process.env.REACT_APP_STATIC_URL}${image.mobile_banner_img_path}`
                    : `${process.env.REACT_APP_STATIC_URL}${image.banner_img_path}`
                }
                alt=""
              />
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
}

export default Banner;
