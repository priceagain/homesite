import React from "react";
import styles from "./BestProducts.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveRecentClick } from "../../../store/actions/User-actions";

function BestProducts({ topSellingItems }) {
  const dispatch = useDispatch();
  return (
    <div className={styles.best_products}>
      <div className={styles.best_products__text_container}>
        <p>{topSellingItems?.res.resource_heading_name}</p>
        <Link to="/all-best-products">See All</Link>
      </div>

      <div className={styles.best_products__best_deal_container}>
        {topSellingItems?.val.map((product, index) => (
          <div className={styles.best_products__best_product_box} key={index}>
            <Link to={`/product/${product.item_slug}/${product.item_id}`}>
              <div className={styles.best_products__image_container}>
                <img
                  src={`${process.env.REACT_APP_STATIC_URL}${product.item_img_path}`}
                  alt={product.brand_name}
                />
              </div>
            </Link>
            <div className={styles.best_products__text_content}>
              <span className={styles.best_products__brand_name}>
                {product.brand_name}
              </span>

              <p>{product.item_name}</p>

              <span className={styles.best_products__price}>
                ₹{product.item_price}{" "}
                <s>
                  ₹
                  {product.item_cb_amt != 0 &&
                    product.item_price - product.item_cb_amt}
                  {product.item_cb_percent != 0 &&
                    ((product.item_price * product.item_cb_percent) % 100) +
                      product.item_price}
                </s>
              </span>
              {localStorage.getItem("userInfo") ? (
                <a href={product.item_url} target="_blank" rel="noreferrer">
                  <button
                    onClick={() => dispatch(saveRecentClick(product.store_id))}
                  >
                    Buy Now
                  </button>
                </a>
              ) : (
                <Link to={`/product/${product.item_slug}/${product.item_id}`}>
                  <button>Buy Now</button>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestProducts;
