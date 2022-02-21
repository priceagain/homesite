import {
  TRENDING_STORE_LIST_REQUEST,
  TRENDING_STORE_LIST_SUCCESS,
  TRENDING_STORE_LIST_FAIL,
  ALL_PRODUCTS_LIST_REQUEST,
  ALL_PRODUCTS_LIST_SUCCESS,
  ALL_PRODUCTS_LIST_FAIL,
} from "../constants/TrendingStore-Constants";

export const trendingStorePageReducer = (trendingStoreList = [], action) => {
  switch (action.type) {
    case TRENDING_STORE_LIST_REQUEST:
      return { loading: true, trendingStoreList: [] };

    case TRENDING_STORE_LIST_SUCCESS:
      return {
        loading: false,
        trendingStoreList: action.payload.data,
      };

    case TRENDING_STORE_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return trendingStoreList;
  }
};

export const allProductsPageReducer = (allProductsList = [], action) => {
  switch (action.type) {
    case ALL_PRODUCTS_LIST_REQUEST:
      return { loading: true, allProductsList: [] };

    case ALL_PRODUCTS_LIST_SUCCESS:
      return {
        loading: false,
        allProductsList: action.payload.data,
      };

    case ALL_PRODUCTS_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return allProductsList;
  }
};
