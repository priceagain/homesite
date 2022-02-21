import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar_Bottom,
  ProductDeals,
  ProductDetails,
  ProductImages,
  Suggestions,
} from "../../components";
import styles from "./Product.module.css";
import { useMediaQuery } from "react-responsive";
import axios from "../../axios";
import { CircularProgress } from "@material-ui/core";

function Product({ match }) {
  const [productDetailsData, setProductDetailsData] = useState([]);
  const [suggestionsData, setSuggestionsData] = useState([]);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1250px)",
  });

  useEffect(() => {
    productDetailsAPI(match.params.id);
    window.scrollTo(0, 0);
  }, [match.params.id]);

  const productDetailsAPI = async (id) => {
    const { data } = await axios.post("/api/v1/productbyid", {
      product_id: id,
    });
    setProductDetailsData(data.data[0]);
  };

  useEffect(() => {
    const getProductsData = async () => {
      const { data } = await axios.post(
        "/api/v1/productbycategory",
        {
          category_id: productDetailsData?.category_id,
          type: "popular",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const productsData = data?.data;
      setSuggestionsData(productsData);
    };
    getProductsData();
  }, [productDetailsData]);

  if (!productDetailsData) {
    return <CircularProgress />;
  }
  return (
    <div className={styles.product}>
      <div className={styles.product__container}>
        <div className={styles.product__previous_page}>
          <Link to="/" className={styles.product__previous_page_link}>
            Home /
          </Link>
          {productDetailsData.item_name}
        </div>

        <div className={styles.product__main_container}>
          <div className={styles.product__main_left_container}>
            {isDesktopOrLaptop && (
              <ProductImages productImage={productDetailsData.item_img_path} />
            )}
            {!isDesktopOrLaptop && (
              <div className={styles.banner__images}>
                <img
                  src={`${process.env.REACT_APP_STATIC_URL}${productDetailsData.item_img_path}`}
                  alt={productDetailsData.item_name}
                />
              </div>
            )}
          </div>
          <div className={styles.product__main_right_container}>
            <ProductDeals productDetailsData={productDetailsData} />
          </div>
        </div>

        <div className={styles.product_details}>
          <ProductDetails productDetailsData={productDetailsData} />
        </div>

        <div className={styles.product_suggestions}>
          <Suggestions suggestionsData={suggestionsData} />
        </div>
      </div>

      {isMobile && <Navbar_Bottom activeComponent="/" />}
    </div>
  );
}

export default Product;
