import React, { useEffect, useState } from "react";
import styles from "./StoreProducts.module.css";
import { useMediaQuery } from "react-responsive";
import {
  StoreProductsTopNav,
  StoreProductsBannerImage,
  StoreProductsCards,
  Navbar_Bottom,
} from "../../components";
import axios from "../../axios";

function StoreProducts({ match }) {
  const [products, setProducts] = useState([]);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const isTabletOrMobile = useMediaQuery({
    query: "(max-width: 991px)",
  });

  const { slug, id } = match.params;

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.post(
        "/api/v1/productByStoreId",
        {
          store_id: id,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setProducts(data.data);
    };
    fetchProducts();
  }, [id]);

  return (
    <div className={styles.brand__products}>
      <div className={styles.brand__products__container}>
        {!isTabletOrMobile && (
          <div className={styles.brand__products__topnav}>
            <StoreProductsTopNav
              title={
                slug
                  ? slug.charAt(0).toUpperCase() + slug.substring(1)
                  : "Best Deals"
              }
            />
          </div>
        )}

        <div
          className={isTabletOrMobile && styles.brand__products__banner_image}
        >
          <StoreProductsBannerImage
            image={
              products.length > 0
                ? isTabletOrMobile
                  ? products[0].mobile_store_banner_path
                  : products[0].store_banner_path
                : "https://thumbs.dreamstime.com/b/sample-banner-template-ribbon-label-sign-177645373.jpg"
            }
          />
        </div>
        <div className={styles.brand__products__trending_stores}>
          <StoreProductsCards topProductDetails={products} />
        </div>
      </div>

      {isMobile && <Navbar_Bottom activeComponent="/" />}
    </div>
  );
}

export default StoreProducts;
