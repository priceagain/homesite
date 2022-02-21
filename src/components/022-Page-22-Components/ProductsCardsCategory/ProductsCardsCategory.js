import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductsCardsCategory.module.css";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import { saveRecentClick } from "../../../store/actions/User-actions";

function ProductsCardsCategory() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const products = useSelector((state) => state.productByCategoryList);
  const { productCategory } = products;

  const dispatch = useDispatch();

  return (
    <div className={styles.products_cards}>
      {isMobile && (
        <div className={styles.products_cards__text_container}>
          <p>Best Products</p>
        </div>
      )}

      <div className={styles.products_cards__container}>
        {productCategory?.data.map((card, index) => (
          <div className={styles.products_cards__best_product_box} key={index}>
            <Link to={`/product/${card.item_slug}/${card.item_id}`}>
              <div className={styles.products_cards__image_container}>
                <img
                  src={`${process.env.REACT_APP_STATIC_URL}${card.item_img_path}`}
                  alt=""
                />
              </div>
            </Link>

            <div className={styles.products_cards__text_content}>
              <span className={styles.products_cards__brand_name}>
                {card.brand_name}
              </span>

              <p>{card.item_name}</p>

              <span className={styles.products_cards__price}>
                ₹
                {card.item_price -
                  (card.item_cb_percent / 100) * card.item_price}{" "}
                <s>₹{card.item_price}</s>
              </span>
              {localStorage.getItem("userInfo") ? (
                <a href={card.item_url} target="_blank" rel="noreferrer">
                  <button
                    onClick={() => dispatch(saveRecentClick(card.store_id))}
                  >
                    Buy Now
                  </button>
                </a>
              ) : (
                <Link to={`/product/${card.item_slug}/${card.item_id}`}>
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

export default ProductsCardsCategory;
