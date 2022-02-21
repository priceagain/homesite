import React, { useEffect, useState } from "react";
import styles from "./AllBestProducts.module.css";
import { useMediaQuery } from "react-responsive";
import {
  Navbar_Bottom,
  ProductsBannerImage,
  ProductsCards,
  ProductsSortBy,
  ProductsTopNav,
} from "../../components";
import axios from "../../axios";

function AllBestProducts() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [sortByType, setSortByType] = useState("popular");

  const isTabletOrMobile = useMediaQuery({
    query: "(max-width: 991px)",
  });

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.post(
        "/api/v1/productbycategory",
        {
          category_id: selectedCategory,
          type: sortByType,
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
    window.scrollTo(0, 0);
  }, [selectedCategory, sortByType]);

  return (
    <div className={styles.all_best_products}>
      <div className={styles.all_best_products__container}>
        {!isTabletOrMobile && (
          <div className={styles.all_best_products__topnav}>
            <ProductsTopNav
              setSelectedCategory={setSelectedCategory}
              selectedCategory={selectedCategory}
            />
          </div>
        )}

        <div
          className={isTabletOrMobile && styles.all_best_products__banner_image}
        >
          <ProductsBannerImage
            image={
              products?.length > 0
                ? isTabletOrMobile
                  ? products[0].mobile_store_banner_path
                  : products[0].store_banner_path
                : "https://thumbs.dreamstime.com/b/sample-banner-template-ribbon-label-sign-177645373.jpg"
            }
          />
        </div>

        <div className={styles.all_best_products__sort_by}>
          <ProductsSortBy
            setSortByType={setSortByType}
            sortByType={sortByType}
          />
        </div>

        <div className={styles.all_best_products__trending_stores}>
          {products?.length > 0 ? (
            <ProductsCards products={products} />
          ) : (
            <h1>No Products found</h1>
          )}
        </div>
      </div>

      {isMobile && <Navbar_Bottom activeComponent="/" />}
    </div>
  );
}

export default AllBestProducts;
