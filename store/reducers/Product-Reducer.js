import {
  CATEGORY_LIST_FAIL,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
  PRODUCT_BY_CATEGORY_FAIL,
  PRODUCT_BY_CATEGORY_REQUEST,
  PRODUCT_BY_CATEGORY_SUCCESS,
  STORE_BY_CATEGORY_FAIL,
  STORE_BY_CATEGORY_REQUEST,
  STORE_BY_CATEGORY_SUCCESS,
} from "../constants/Product-Constants";

export const categoryListReducer = (state = [], action) => {
  switch (action.type) {
    case CATEGORY_LIST_REQUEST:
      return { loading: true };

    case CATEGORY_LIST_SUCCESS:
      return {
        loading: false,
        categoryList: action.payload,
      };

    case CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const storeByCategoryListReducer = (state = [], action) => {
  switch (action.type) {
    case STORE_BY_CATEGORY_REQUEST:
      return { loading: true };

    case STORE_BY_CATEGORY_SUCCESS:
      return {
        loading: false,
        storeCategory: action.payload,
      };

    case STORE_BY_CATEGORY_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const productByCategoryListReducer = (state = [], action) => {
  switch (action.type) {
    case PRODUCT_BY_CATEGORY_REQUEST:
      return { loading: true };

    case PRODUCT_BY_CATEGORY_SUCCESS:
      return {
        loading: false,
        productCategory: action.payload,
      };

    case PRODUCT_BY_CATEGORY_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
